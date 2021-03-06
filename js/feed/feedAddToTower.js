var feedAddToTower = {
	data:{},
	viewid : "com.sunnercn.feed.FeedAddToTowerController",
	init:function(){
		var data = $cache.read("logininfo");
		var logininfo = JSON.parse(data);
		var json = {
			logininfo:logininfo
		}
		summer.showProgress({
	           // "title" : "加载中..."
	    });
	    callAction(feedAddToTower.viewid,"addFeedInfoInit",json,"callBack");
	},
	bindEvent:function(){
		$(".um-back").unbind().on('click',function(){
			summer.closeWin();
		});
		$(".allTower li").hide();
		$(".btn").unbind().on('click',function(){
			$(this).parent().next().find("li").stop().slideToggle(400);
		});
		$(".ti-plus").unbind().on('click',function(){
			// to do 行数限制
			var logininfo = $cache.read("logininfo");
			var json = JSON.parse(logininfo);
			var siloinfoList = json.siloinfo;
			var size = $(this).parent().parent().parent().find(".tower").length;
			var li = "<li class='towers'>";
			li+=$($(".towers")[0]).html();
			li+="</li>";
			$li=$(li);
			$($li.find(".siloSelect")[0].options[size]).attr("selected","selected");
			size<siloinfoList.length?$(this).parent().parent().before($li):UM.alert("没有更多料塔！");
			$("input[type='number']").on('blur', feedAddToTower.calNum);
		});
		$(".ti-minus").unbind().on('click',function(){
			// to do 行数限制
			var lis = $(this).parent().parent().parent().find("li");
			lis.length>2?lis[lis.length-2].remove():UM.alert("对不起！请至少选一个料塔！");
			$($(this).parent().parent().parent().children("li").find("input[type=number]")[0]).blur();
		});
		$("input[type='number']").on('blur', feedAddToTower.calNum);
		$("#btn-save").unbind().on('click',feedAddToTower.confirmAddFeed);
		$(".sk_refresh").unbind().on('click',feedAddToTower.init);
	},
	calNum:function(){
		var oldnum = $(this).parent().parent().parent().parent().children("li").find("#readyToTower");
		var readyToTower = 0.0;
		input = $(this).parent().parent().parent().children(".towers").find("input[type=number]");
		for(var i=0;i<input.length;i++){
			readyToTower = eval(readyToTower+parseFloat(input[i].value?input[i].value:0));
		}
		oldnum.text(readyToTower);
	},
	confirmAddFeed:function(){
		var array = [];
		$("input[type=checkbox]:checked").each(function(){
			var pk_inbill = $(this).attr("pk_inbill");
			var div_bo = $(this).parent().parent().parent().parent();
			var silos = [];
			var carno = div_bo.find("#carno").text();//车牌号
			var notInTower = parseFloat(div_bo.find("#notInTower").text().trim());//未打料量
			var readyToTower = parseFloat(div_bo.children("li").find("#readyToTower").text());//准备打料总量
			var allnuminput = div_bo.children("ul").find("input[type=number]");
			allnuminput.each(function(){
				if(this.value==0){
					UM.alert("对不起！"+carno+"车,不允许填0或者空值！");
					return confirmAddFeed();
				}
			});
			if(notInTower<readyToTower){
				UM.alert("对不起！"+carno+"车,打料数量超过未打料数量！");
				return confirmAddFeed();
			}
			div_bo.children("ul").find(".siloSelect option:selected").each(function(){
				if(!$(this).attr("pk_silo")){
					UM.alert("对不起！"+carno+"车,请选择料塔！");
					return confirmAddFeed();
				}
				var obj = {
					pk_silo:$(this).attr("pk_silo"),
					num:$(this).parent().parent().parent().find(".num input").val()
				};
				silos.push(obj);
			});
			if(silos.length>0){
				var json={};
				var count=0;
				for(var i=0;i<silos.length;i++){
					var pk = silos[i].pk_silo;
					if(!json[pk]){
						json[pk]=pk;
						count++;
					}
				}
				if(silos.length!=count){
					UM.alert("对不起！"+carno+"车,不允许出现相同料塔！");
					return confirmAddFeed();
				}
				var obj = {
					pk_inbill:pk_inbill,
					silos:silos
				}
				array.push(obj);
			}
		});
		if(array.length>0){
			var data = $cache.read("logininfo");
			var lonininfo = JSON.parse(data);
			var json={
				billinfo:array,
				logininfo:lonininfo
			}
			//确认打料 请求
			UM.confirm({
                "title" : "打料确认",
                "text" : "确认后打料数量将无法修改,确认吗？",
                "btnText" : ["取消","确认"],
                "overlay" : true,
                "cancle" :function(){
			        return;
                },
                "ok" :function(){
                    summer.showProgress({"title" : "加载中..."});
                    callAction(feedAddToTower.viewid,"confirmAddFeedToTower",json,"confirmcallBack");
                }
            });
		}else{
			UM.alert("请先选择车辆！");
		}
	},
	initsiloSelect:function(){
		var logininfo = $cache.read("logininfo");
		var json = JSON.parse(logininfo);
		var siloinfoList = json.siloinfo;
		$(".siloSelect").html("");
		var optionhtml= '';
		for(var i=0;i<siloinfoList.length;i++){
			optionhtml+='<option pk_silo="'+siloinfoList[i].pk_silo+'">'+siloinfoList[i].silo_name+'</option>'
		}
		$(".siloSelect").append(optionhtml);
	},
	loadPage:function(data){
		$("#inbillListul").html("");
		var html = "";
		var inbill = data.billinfo.inbill;
		if(inbill.length>0){
			for(var i=0;i<inbill.length;i++){
				html+='<div class="bo">'
					+'<li class="um-list-item">'
					+'<a href="javascript:;" class="btn">'
					+'<label class="um-check-inline">'
                    +'<input name="um-checkbox-inline" type="checkbox" pk_inbill="'+inbill[i].pk_inbill+'">'
                   	+'<span class="um-icon-checkbox um-css3-vc"></span>'
                    +'</label>'
					+'<div class="um-media-body">'
					+'<h4>车牌号：<span id="carno">'+inbill[i].carno+'</span></h4>'
					+'<p class="notInTower">'
					+'未打料数量：<span id="notInTower">'+inbill[i].notInTower+'</span>吨'
					+'</p>'
					+'<p class="readyToTower">'
					+'准备打料数量：<span id="readyToTower">'+inbill[i].notInTower+'</span>吨'
					+'</p>'
					+'</div> </a>'
					+'</li>'
					+'<ul class="um-list allTower">'
					+'<li class="towers">'
					+'<div class="tower">'
					+'<select class ="siloSelect"></select>'
					+'</div>'
					+'<div class="num">'
					+'数量 <input type="number"/> 吨'
					+'</div>'
					+'</li>'
					+'<li>'
		           	+'<div>'
		           	+'<a href="#" class="ti-plus"></a>'
		            +'</div>'
					+'<div>'
					+'<a href="#" class="ti-minus"></a>'
					+'</div>'
					+'</li>'
					+'</ul>'
					+'<div>';
			}
		}else{//无列表信息弹出提示并绘制空列表
			html+='<a href="#"  class="um-list-item list_item" >'
					+'		<div class="um-list-item-media">'
					+'		</div>'
					+'		<div class="um-list-item-inner">'
					+'			<div class="um-list-item-body">'
					+'				<h4 class="um-media-heading f18" style="color:red">当前场内所有饲料已经打入料塔</h4>'
					+'			</div>'
					+'		</div> </a>'
		}
		$("#inbillListul").html(html);
		feedAddToTower.initsiloSelect();
		feedAddToTower.bindEvent();
	}
}
/**
 * 接口回调模块 
 */
function callBack(args){
	summer.hideProgress();
	if(args.status == "0"){
		feedAddToTower.loadPage(args.data);
	}else if(args.status == "1"){
		UM.alert("初始化失败:"+args.message);
		summer.closeWin();
	} else {
		UM.alert(args.message);	
		summer.closeWin();
	}		
}
function confirmcallBack(args){
	summer.hideProgress();
	if(args.status == "0"){
		feedAddToTower.init();
		UM.alert("确认成功")
	}else{
		UM.alert("确认失败："+args.message);
	}
}
function erresg(arg){
	summer.hideProgress();
	UM.alert("网络异常！");
}
summerready = function(){
	feedAddToTower.init();
	feedAddToTower.bindEvent();
};
