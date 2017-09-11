function isOs(){
    var browser={
        info:function(){
            var ua = navigator.userAgent, app = navigator.appVersion;
            return { //移动终端浏览器版本信息
                //trident: ua.indexOf('Trident') > -1, //IE内核
                //presto: ua.indexOf('Presto') > -1, //opera内核
                webKit: ua.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                //gecko: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') == -1, //火狐内核
                mobile: !!ua.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1, //android终端或uc浏览器
                iPhone: ua.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
                iPad: ua.indexOf('iPad') > -1, //是否iPad
                //webApp: ua.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
				platform: navigator.platform
            };
        }(),
        lang:(navigator.browserLanguage || navigator.language).toLowerCase()
    };
	if(browser.info.platform.toLowerCase().indexOf("win")>=0){
		return "pc"
	}else if(browser.info.android){
        return "android";
    }else if(browser.info.ios || browser.info.iPhone || browser.info.iPad){
        return "ios";
    }else{
		return "";
	}
}

var andriodUrl="http://222.78.251.54:40020/umserver/ZSYZ.apk";
var iosUrl="http://mbs.yyuap.com:8080/ump/web/appdownload/download?type=ios&buildId=10029&fileName=ZSYZ.plist";
var andriodVersion="1010";
var iosVersion="1.1.0"

var https=isOs()=="android"?"file:///android_asset/www/js/":isOs()=="ios"?"file://"+window.location.pathname.split("www/")[0]+"www/js/":"E:/FJSN_ZSYZWorkspace/ZSYZ/js/";
//var https="https://szsncs.github.io/an/js/";
var js=".js";
var jquery_2_1_4="jquery-2.1.4.min";
var jquery="jquery.min";
var summer="summer";
var frameworks_core="Frameworks/iuapmobile.frameworks.core";
var frameworks_ui="Frameworks/iuapmobile.frameworks.ui";
var islider="islider";
var knockout="knockout";
var knockout_2_2_0="knockout-2.2.0";
var frameworks_listview="Frameworks/iuapmobile.frameworks.listview";
var frameworks_listgroup="Frameworks/iuapmobile.frameworks.listgroup-2.7.0";
var frameworks_sortlist="Frameworks/iuapmobile.frameworks.sortlist-2.7.0";
var common="common";
var font="font";

var yonyou_js=[https+summer+js,https+frameworks_core+js,https+frameworks_ui+js];
var jquery_min=[https+jquery+js];
var jquery_min_2_1_4=[https+jquery_2_1_4+js]

function getEquipmentMaintenanceInfo_js(url){
	var equipmentMaintenanceInfo_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(equipmentMaintenanceInfo_js));				
}

function getEquipmentMaintenance_js(url){
	var equipmentMaintenance_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(equipmentMaintenance_js));				
}

function getEquipmentFirstList_js(url){
	var equipmentFirstList_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(getEquipmentFirstList_js));				
}

function getEateryaccountInfo_js(url){
	var eateryaccountInfo_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js,
					https+frameworks_sortlist+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(getEateryaccountInfo_js));				
}

function getEateryaccountFirstList_js(url){
	var eateryaccountFirstList_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(eateryaccountFirstList_js));			
}

function getEateryaccount_js(url){
	var eateryaccount_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js,
					https+frameworks_sortlist+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(eateryaccount_js));			
}

function getConsumableList_js(url){
	var consumableList_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(consumableList_js));				
}

function getConsumableInfo_js(url){
	var consumableInfo_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(consumableInfo_js));		
}

function getConsumable_js(url){
	var consumable_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(consumable_js));				
}

function getWeekWeighing_js(url){
	var weekWeighing_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(weekWeighing_js));					
}

function getUseGas_js(url){
	var useGas_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(useGas_js));					
}

function getUseElectricity_js(url){
	var useElectricity_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(useElectricity_js));			
}

function getSecondList_js(url){
	var secondList_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(secondList_js));				
}

function getPluckFoodWater_js(url){
	var pluckFoodWater_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(pluckFoodWater_js));				
}

function getInChick_js(url){
	var inChick_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(inChick_js));				
}

function getEstimateAlive_js(url){
	var estimateAlive_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(estimateAlive_js));				
}

function getDeathElimination_js(url){
	var deathElimination_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(deathElimination_js));				
}

function getDailyReportList_js(url){
	var dailyReportList_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(dailyReportList_js));				
}

function getMedicineReceive_js(url){
	var medicineReceive_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js,
					https+frameworks_sortlist+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(medicineReceive_js));				
}

function getMedicineList_js(url){
	var medicineList_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(medicineList_js));				
}


function getMedicineConfirmation_js(url){
	var medicineConfirmation_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js,
					https+frameworks_sortlist+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(medicineConfirmation_js));				
}

function getLoimialist_js(url){
	var loimialist_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(loimialist_js));		
}

function getLoimiaInfo_js(url){
	var loimiaInfo_js = [
					https+url+js,
					https+common+js,
					https+font+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min.concat(yonyou_js.concat(loimiaInfo_js));			
}

function getList_js(url){
	var list_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(list_js));				
}

function getIllnessChange_js(url){
	var illnessChange_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(illnessChange_js));				
}

function getSilverskinConfirmation_js(url){
	var silverskinConfirmation_js = [https+url+js];
	return jquery_min_2_1_4.concat(yonyou_js.concat(silverskinConfirmation_js));				
}

function getSilverskinArrived_js(url){
	var silverskinArrived_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(silverskinArrived_js));				
}

function getNotApprvoeSuppliesInfo_js(url){
	var notApprvoeSuppliesInfo_js = [
					https+url+js
					];
	return jquery_min.concat(yonyou_js.concat(notApprvoeSuppliesInfo_js));				
}

function getNotApprvoeSupplies_js(url){
	var notApprvoeSupplies_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(notApprvoeSupplies_js));						
}

function getTransferSummary_js(url){
	var transferSummary_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(transferSummary_js));			
}


function getFeedTransfer_js(url){
	var feedTransfer_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(feedTransfer_js));				
}

function getFeedSummary_js(url){
	var feedSummary_js = [
					https+jquery+js,
					https+url+js,
					https+knockout_2_2_0+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(feedSummary_js));				
}
function getFeedAddToTower_js(url){
	var feedAddToTower_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(feedAddToTower_js));
}
function getFeedDetails_js(url){
	var feedDetails_js = [https+url+js,];
	return jquery_min_2_1_4.concat(yonyou_js.concat(feedDetails_js));				
}

function getFeedConfirmation_js(url){
	var feedConfirmation_js = [https+url+js];
	return jquery_min_2_1_4.concat(yonyou_js.concat(feedConfirmation_js));				
}

function getLoginSetting_js(url){
	var loginSetting_js = [https+url+js];
	return jquery_min_2_1_4.concat(yonyou_js.concat(loginSetting_js));				
}

function getFeedApply_js(url){
	var feedApply_js = [https+url+js];
	return jquery_min.concat(yonyou_js.concat(feedApply_js));				
}

function getFeedArrived_js(url){
	var feedArrived_js = [
						https+url+js,
						https+knockout_2_2_0+js,
						https+frameworks_listgroup+js
						];
	return jquery_min_2_1_4.concat(yonyou_js.concat(feedArrived_js));				
}

function getMain_js(url){
	var main_js = [
					https+url+js,
					https+knockout_2_2_0+js,
					https+islider+js,
					https+frameworks_listgroup+js
					];
	return jquery_min_2_1_4.concat(yonyou_js.concat(main_js));				
}

function getIndex_js(url){//引入登录界面js	2
	var index_js = [https+url+js];
	return jquery_min_2_1_4.concat(index_js.concat(yonyou_js));				
}




/**
 * 调用接口方法 对$summer.callAction({})的封装 
 * @param {Object} viewid
 * 			后台带包名的Controller名
 * @param {Object} action
 * 			方法名
 * @param {Object} params
 * 			自定义参数
 * @param {Object} callback
 * 			成功回调函数
 */
function callAction(viewid,action,params,callback){
	$service.callAction({
		"appid" : "ZSYZ",		
		"viewid" : viewid, //后台带包名的Controller名
		"action" : action, //方法名
		"params" : params, //自定义参数
		"callback" : callback+"()", //成功回调函数
		"error" : "erresg()",//失败回调函数
		"timeout":"40"//超时40s
	});
}
/**
 * 调用接口方法 对$summer.callAction({})的封装 
 * @param {Object} viewid
 * 			后台带包名的Controller名
 * @param {Object} action
 * 			方法名
 * @param {Object} filepath
 * 			文件路径
 * @param {Object} params
 * 			自定义参数
 * @param {Object} callback
 * 			成功回调函数
 */
function callActionContainsFile(viewid,action,filepath,params,callback){
	$service.callAction({
		"appid" : "ZSYZ",
		"viewid" : viewid, //后台带包名的Controller名
		"action" : action, //方法名,
		"mauploadpath" : filepath,
		"params" : params, //自定义参数
		"callback" : callback+"()", //请求回来后执行的ActionID
		"error" : "erresg()",//失败回调的ActionId
		"timeout":"40"//超时40s
	});
}

/**
 * 关闭刷新方法
 * @param {Object} jsfun 
 * 					调用刷新方法名
 * @param {Object} url 
 * 					包名
 * @param {Object} html 
 * 					文件名
 */
function lastPageRefresh(jsfun,url,html){
	var jsfun = ""+jsfun+"();";
	var id = "/"+url+"/"+html+".html"
	summer.execScript({
	    winId: id,
	    script: jsfun
	});
}
/**
 * 获取手机时间
 * 年-月-日 
 */
function getNowFormatDate() {//获取年月日
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            /*+ " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();*/
    return currentdate;
}
/**
 * 获取手机时间
 * 年-月-日 时:分:秒
 */
function getNowFormatDateTime() {//获取年月日 时分秒
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}

/**
 *物理返回键监听 
 */
function onDeviceReady(fun,url,html) { 
	// 按钮事件 
	document.addEventListener("backbutton", eventBackButton(fun,url,html), false); // 返回键 
} 

function eventBackButton(fun,url,html) { 
	lastPageRefresh(fun,url,html);
	summer.closeWin();
}

/**
 * 跨界面刷新方法
 * @param {Object} jsfun 
 * 					调用刷新方法名
 * @param {Object} url 
 * 					包名
 * @param {Object} html 
 * 					文件名
 */
function lastPageRefresh(jsfun,url,html){
	var jsfun = ""+jsfun+"();";
	var id = "/"+url+"/"+html+".html"
	summer.execScript({
	    winId: id,
	    script: jsfun
	});
}


/**
 * 四舍五入
 */
function round(num,d){
	//Step1:将num放大10的d次方倍
	num*=Math.pow(10,d);
	//Step2:对num四舍五入取整
	num = Math.round(num);
	//Step：返回num缩小10的d次方倍，获得最终结果
	return num/Math.pow(10,d);
}
function isOs(){
    var browser={
        info:function(){
            var ua = navigator.userAgent, app = navigator.appVersion;
            return { //移动终端浏览器版本信息
                //trident: ua.indexOf('Trident') > -1, //IE内核
                //presto: ua.indexOf('Presto') > -1, //opera内核
                webKit: ua.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                //gecko: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') == -1, //火狐内核
                mobile: !!ua.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1, //android终端或uc浏览器
                iPhone: ua.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
                iPad: ua.indexOf('iPad') > -1, //是否iPad
                //webApp: ua.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
				platform: navigator.platform
            };
        }(),
        lang:(navigator.browserLanguage || navigator.language).toLowerCase()
    };
	if(browser.info.platform.toLowerCase().indexOf("win")>=0){
		return "pc"
	}else if(browser.info.android){
        return "android";
    }else if(browser.info.ios || browser.info.iPhone || browser.info.iPad){
        return "ios";
    }else{
		return "";
	}
}
/**
 * 原生ajax 
 * @param {Object} opt
 * @param {string}opt.type http连接的方式，包括POST和GET两种方式
 * @param {string}opt.url 发送请求的url
 * @param {boolean}opt.async 是否为异步请求，true为异步的，false为同步的
 * @param {object}opt.data 发送的参数，格式为对象类型
 * @param {function}opt.success ajax发送并接收成功调用的回调函数
 */
    function ajax(opt) {
        opt = opt || {};
        opt.method = opt.method.toUpperCase() || 'POST';
        opt.url = opt.url || '';
        opt.async = opt.async || false;
        opt.data = opt.data || null;
        opt.success = opt.success || function () {};
        var xmlHttp = null;
        if (XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();
        }
        else {
            xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
        }var params = [];
        for (var key in opt.data){
            params.push(key + '=' + opt.data[key]);
        }
        var postData = params.join('&');
        if (opt.method.toUpperCase() === 'POST') {
            xmlHttp.open(opt.method, opt.url, opt.async);
            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            xmlHttp.send(postData);
        }
        else if (opt.method.toUpperCase() === 'GET') {
            xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
            xmlHttp.send(null);
        } 
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                opt.success(xmlHttp.responseText);
            }
        };
    }


/**
 * 版本升级
 */
function ingVersion(){
        //服务器端版本
        var jsonVersionInfoOfServer = null;
        //当前应用版本号
        var jsonVersionInfoOfClient = null;

        var os = $summer.os;
        var url = "http://123.103.9.205:8090/mwap/version/version.json";
        $.ajax({
            type : 'get',
            url : url,
            data : {},
            cache : false,
            dataType : 'json',
            success : function(ret) {
                if (os == "android"){
                    jsonVersionInfoOfServer = {
                        versionCode : ret.android_versioncode,
                        versionName : ret.android_versionname,
                        download : ret.android_download
                    };
                }else if(os == "ios"){
                    jsonVersionInfoOfServer = {
                        versionCode : ret.ios_versioncode,
                        versionName : ret.ios_versionname,
                        download : ret.ios_download
                    };
                }

                //第二步、获取当前APP的版本信息
                var versionInfo = summer.getVersion();

                if(typeof versionInfo == "string"){
                    //安卓走这里
                    //alert("当前版本信息为"+ versionInfo);
                    jsonVersionInfoOfClient = JSON.parse(versionInfo);
                }else if(typeof versionInfo == "object"){
                    //alert("当前版本信息转换类型后为"+ JSON.stringify(versionInfo));
                    jsonVersionInfoOfClient = versionInfo;
                }

                if(parseInt(jsonVersionInfoOfServer.versionCode) > parseInt(jsonVersionInfoOfClient.versionCode)){
                    summer.upgrade({
                        "url":"http://123.103.9.205:8090/mwap/"+jsonVersionInfoOfServer.download,
                        showProgress:false,
                        "version":{
                            versionCode:jsonVersionInfoOfServer.versionCode,
                            versionName:jsonVersionInfoOfServer.versionName
                        }
                    }, function(reg){
                        $('.boxShadow').removeClass('none');
                        if(reg.status == '0'){
                            alert("app升级完毕");
                            $('.boxShadow').addClass('none');
                            summer.openWin({
                                url:'index.html',
                                isKeep:false
                            });
                        }else{
                         $('.um-progress-bar').html(reg.percent+'%').width($('.um-progress').width()/100*parseInt(reg.percent));
                        }
                    },function(){
                        alert("app升级error");
                    })
                }else{


                }
            },
            error:function(response){
                alert("请求服务器失败");
            }
        });
    }


/**
 * 原生ajax 
 * @param {Object} opt
 * @param {string}opt.type http连接的方式，包括POST和GET两种方式
 * @param {string}opt.url 发送请求的url
 * @param {boolean}opt.async 是否为异步请求，true为异步的，false为同步的
 * @param {object}opt.data 发送的参数，格式为对象类型
 * @param {function}opt.success ajax发送并接收成功调用的回调函数
 */
    function ajax(opt) {
        opt = opt || {};
        opt.method = opt.method.toUpperCase() || 'POST';
        opt.url = opt.url || '';
        opt.async = opt.async || false;
        opt.data = opt.data || null;
        opt.success = opt.success || function () {};
        var xmlHttp = null;
        if (XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();
        }
        else {
            xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
        }var params = [];
        for (var key in opt.data){
            params.push(key + '=' + opt.data[key]);
        }
        var postData = params.join('&');
        if (opt.method.toUpperCase() === 'POST') {
            xmlHttp.open(opt.method, opt.url, opt.async);
            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            xmlHttp.send(postData);
        }
        else if (opt.method.toUpperCase() === 'GET') {
            xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
            xmlHttp.send(null);
        } 
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                opt.success(xmlHttp.responseText);
            }
        };
    }

/**
 * 版本升级
 */
function ingVersion(){
        //服务器端版本
        var jsonVersionInfoOfServer = null;
        //当前应用版本号
        var jsonVersionInfoOfClient = null;

        var os = $summer.os;
        var url = "http://123.103.9.205:8090/mwap/version/version.json";
        $.ajax({
            type : 'get',
            url : url,
            data : {},
            cache : false,
            dataType : 'json',
            success : function(ret) {
                if (os == "android"){
                    jsonVersionInfoOfServer = {
                        versionCode : ret.android_versioncode,
                        versionName : ret.android_versionname,
                        download : ret.android_download
                    };
                }else if(os == "ios"){
                    jsonVersionInfoOfServer = {
                        versionCode : ret.ios_versioncode,
                        versionName : ret.ios_versionname,
                        download : ret.ios_download
                    };
                }

                //第二步、获取当前APP的版本信息
                var versionInfo = summer.getVersion();

                if(typeof versionInfo == "string"){
                    //安卓走这里
                    //alert("当前版本信息为"+ versionInfo);
                    jsonVersionInfoOfClient = JSON.parse(versionInfo);
                }else if(typeof versionInfo == "object"){
                    //alert("当前版本信息转换类型后为"+ JSON.stringify(versionInfo));
                    jsonVersionInfoOfClient = versionInfo;
                }

                if(parseInt(jsonVersionInfoOfServer.versionCode) > parseInt(jsonVersionInfoOfClient.versionCode)){
                    summer.upgrade({
                        "url":"http://123.103.9.205:8090/mwap/"+jsonVersionInfoOfServer.download,
                        showProgress:false,
                        "version":{
                            versionCode:jsonVersionInfoOfServer.versionCode,
                            versionName:jsonVersionInfoOfServer.versionName
                        }
                    }, function(reg){
                        $('.boxShadow').removeClass('none');
                        if(reg.status == '0'){
                            alert("app升级完毕");
                            $('.boxShadow').addClass('none');
                            summer.openWin({
                                url:'index.html',
                                isKeep:false
                            });
                        }else{
                         $('.um-progress-bar').html(reg.percent+'%').width($('.um-progress').width()/100*parseInt(reg.percent));
                        }
                    },function(){
                        alert("app升级error");
                    })
                }else{


                }
            },
            error:function(response){
                alert("请求服务器失败");
            }
        });
    }



//var https_css="https://szsncs.github.io/an/css/";
var https_css=isOs()=="android"?"file:///android_asset/www/css/":isOs()=="ios"?"file:///ios_asset/www/css/":"E:/FJSN_ZSYZWorkspace/ZSYZ/css/";
var szsn_app = "szsn-app/";
var css = ".css";
var yonyou_css = "iuapmobile.um";
var dailyReportList = szsn_app+"dailyReport/dailyReportList";
var deathElimination = szsn_app+"dailyReport/deathElimination";
var estimateAlive = szsn_app+"dailyReport/estimateAlive";
var inChick = szsn_app+"dailyReport/inChick";
var pluckFoodWater = szsn_app+"dailyReport/pluckFoodWater";
var secondList = szsn_app+"dailyReport/secondList";
var useElectricity = szsn_app+"dailyReport/useElectricity";
var useGas = szsn_app+"dailyReport/useGas";
var weekWeighing = szsn_app+"dailyReport/weekWeighing";
var feedApply = szsn_app+"feed/feedApply";
var feedConfirmation = szsn_app+"feed/feedConfirmation";
var feedTransfer = szsn_app+"feed/feedTransfer";
var illnessChange = szsn_app+"illnessChange/illnessChange";
var list = szsn_app+"illnessChange/list";
var loimiaInfo = szsn_app+"medicine/loimiaInfo";
var loimiaInfo1 = "loimiaInfo";
var loimialist = szsn_app+"medicine/loimialist";
var medicine = szsn_app+"medicine/medicine";
var medicineConfirm = szsn_app+"medicine/medicineConfirm";
var silver =szsn_app+"silverskin/silver";
var secondList = szsn_app+"dailyReport/secondList";
var notApprvoeSuppliesInfo = szsn_app+"silverskin/notApprvoeSuppliesInfo";
var btnpng = "btnpng";
var font_awesome = "font-awesome";
var font_awesome_min = "font-awesome.min";
var font_icons = "font-icons";
var iconfont = "iconfont";
var iscroll = "iscroll";
var iuapmobile_um = "iuapmobile.um";
var iuapmobile_um_listgroup_2_7_0 = "iuapmobile.um.listgroup-2.7.0";
var iuapmobile_um_listview = "iuapmobile.um.listview";
var iuapmobile_um_sortlist_2_7_0 = "iuapmobile.um.sortlist-2.7.0";
var LArea = "LArea";
var leftDelete = "leftDelete";
var loimiaInfo = "loimiaInfo";
var summer = "summer";
var islider = "islider";
function getEquipmentMaintenanceInfo_css(){
	var equipmentMaintenanceInfo_css = [http_css+font_icons+css,
	http_css+yonyou_css+css,
	http_css+iscroll+css,];
	return equipmentMaintenanceInfo_css;				
}

function getEquipmentMaintenance_css(){
	var equipmentMaintenance_css = [http_css+font_icons+css,
	http_css+yonyou_css+css,
	http_css+iscroll+css,];
	return equipmentMaintenance_css;		
}

function getEquipmentFirstList_css(){
	var equipmentFirstList_css = [http_css+yonyou_css+css,
	http_css+font_icons+css,
	http_css+iuapmobile_um_listgroup_2_7_0+css
	];
	return equipmentFirstList_css;				
}

function getEateryaccountInfo_css(){
	var eateryaccountInfo_css = [http_css+yonyou_css+css,
	http_css+iuapmobile_um_listgroup_2_7_0+css,
	http_css+iuapmobile_um_sortlist_2_7_0+css
	];
	return eateryaccountInfo_css;				
}

function getEateryaccountFirstList_css(){
	var eateryaccountFirstList_css = [http_css+yonyou_css+css,
	http_css+font_icons+css,
	http_css+iuapmobile_um_listgroup_2_7_0+css
	];
	return eateryaccountFirstList_css;			
}

function getEateryaccount_css(){
	var eateryaccount_css = [http_css+yonyou_css+css,
	http_css+iuapmobile_um_listgroup_2_7_0+css,
	http_css+iuapmobile_um_sortlist_2_7_0+css
	];
	return eateryaccount_css;			
}

function getConsumableList_css(){
	var consumableList_css = [http_css+yonyou_css+css,
	http_css+font_icons+css,
	http_css+iuapmobile_um_listgroup_2_7_0+css
	];
	return consumableList_css;				
}

function getConsumableInfo_css(){
	var consumableInfo_css = [http_css+font_icons+css,
	http_css+yonyou_css+css,
	http_css+iscroll+css
	];
	return consumableInfo_css;		
}

function getConsumable_css(){
	var consumable_css = [http_css+font_icons+css,
	http_css+yonyou_css+css,
	http_css+iscroll+css
	];
	return consumable_css;				
}

function getWeekWeighing_css(){
	var weekWeighing_css = [http_css+font_icons+css,
	http_css+yonyou_css+css,
	http_css+iconfont+css, 
	http_css+weekWeighing+css
	];
	return weekWeighing_css;					
}

function getUseGas_css(){
	var useGas_css = [http_css+font_icons+css,
	http_css+yonyou_css+css,
	http_css+useGas+css
	];
	return useGas_css;					
}

function getUseElectricity_css(){
	var useElectricity_css = [http_css+font_icons+css,
	http_css+yonyou_css+css,
	http_css+useElectricity+css
	];
	return useElectricity_css;			
}

function getSecondList_css(){
	var secondList_css = [http_css+yonyou_css+css,
	http_css+font_icons+css,
	http_css+secondList+css,
	http_css+iuapmobile_um_listgroup_2_7_0+css
	];
	return useElectricity_css;				
}

function getPluckFoodWater_css(){
	var pluckFoodWater_css = [http_css+font_icons+css,
	http_css+yonyou_css+css,
	http_css+pluckFoodWater+css
	];
	return pluckFoodWater_css;				
}

function getInChick_css(){
	var inChick_css = [http_css+font_icons+css,
	http_css+yonyou_css+css,
	http_css+inChick+css
	];
	return inChick_css;				
}

function getEstimateAlive_css(){
	var estimateAlive_css = [http_css+yonyou_css+css,
	http_css+font_icons+css,
	http_css+estimateAlive+css
	];
	return estimateAlive_css;				
}

function getDeathElimination_css(){
	var deathElimination_css = [http_css+yonyou_css+css,
	http_css+font_icons+css,
	http_css+deathElimination+css
	];
	return deathElimination_css;				
}

function getDailyReportList_css(){
	var dailyReportList_css = [http_css+yonyou_css+css,
	http_css+font_icons+css,
	http_css+iuapmobile_um_listgroup_2_7_0+css,
	http_css+dailyReportList+css
	];
	return dailyReportList_css;				
}

function getMedicineReceive_css(){
	var medicineReceive_css = [http_css+yonyou_css+css,
	http_css+iuapmobile_um_listgroup_2_7_0+css,
	http_css+iuapmobile_um_sortlist_2_7_0+css,
	http_css+medicine+css
	];
	return medicineReceive_css;				
}

function getMedicineList_css(){
	var medicineList_css = [http_css+yonyou_css+css,
	http_css+font_icons+css,
	http_css+iuapmobile_um_listgroup_2_7_0+css
	];
	return medicineList_css;				
}


function getMedicineConfirmation_css(){
	var medicineConfirmation_css = [http_css+yonyou_css+css,
	http_css+iuapmobile_um_listgroup_2_7_0+css,
	http_css+iuapmobile_um_sortlist_2_7_0+css,
	http_css+medicineConfirm+css
	];
	return getMedicineConfirmation_css;				
}

function getLoimialist_css(){
	var loimialist_css = [http_css+yonyou_css+css,
	http_css+font_icons+css,
	http_css+iuapmobile_um_listgroup_2_7_0+css,
	http_css+loimialist+css
	];
	return loimialist_css;		
}

function getLoimiaInfo_css(){
	var loimiaInfo_css =[http_css+font_icons+css,
	http_css+yonyou_css+css,
	http_css+iuapmobile_um_listgroup_2_7_0+css,
	http_css+loimiaInfo1+css,
	http_css+loimiaInfo+css
	];
	return loimiaInfo_css;			
}

function getList_css(){
	var list_css =[http_css+yonyou_css+css,
	http_css+font_icons+css,
	http_css+list+css,
	http_css+iuapmobile_um_listgroup_2_7_0+css
	];
	return list_css;				
}

function getIllnessChange_css(){
	var illnessChange_css =[http_css+yonyou_css+css,
	http_css+font_icons+css,
	http_css+illnessChange+css,
	http_css+iuapmobile_um_listgroup_2_7_0+css,
	http_css+iscroll+css
	];
	return illnessChange_css;				
}

function getSilverskinConfirmation_css(){
	var silverskinConfirmation_css = [http_css+yonyou_css+css,
	http_css+sliver+css
	];
	return silverskinConfirmation_css;				
}

function getSilverskinArrived_css(){
	var silverskinArrived_css =[http_css+yonyou_css+css,
	http_css+iuapmobile_um_sortlist_2_7_0+css,
	http_css+sliver+css
	];
	return silverskinArrived_css;				
}

function getNotApprvoeSuppliesInfo_css(){
	var notApprvoeSuppliesInfo_css =[http_css+yonyou_css+css,
	http_css+font_icons+css,
	http_css+notApprvoeSuppliesInfo+css
	];
	return notApprvoeSuppliesInfo_css;				
}

function getNotApprvoeSupplies_css(){
	var notApprvoeSupplies_css =[http_css+yonyou_css+css,
	http_css+font_icons+css,
	http_css+iuapmobile_um_listgroup_2_7_0+css
	];
	return notApprvoeSupplies_css;						
}

function getTransferSummary_css(){
	var transferSummary_css =[http_css+yonyou_css+css,
	http_css+font_icons+css,
	http_css+iuapmobile_um_listgroup_2_7_0+css,
	http_css+transferSummary+css
	];
	return transferSummary_css;			
}


function getFeedTransfer_css(){
	var feedTransfer_css = [http_css+yonyou_css+css,
	http_css+font_icons+css,
	http_css+feedTransfer+css
	];
	return feedTransfer_css;				
}

function getFeedSummary_css(){
	var feedSummary_css = [http_css+yonyou_css+css,
	http_css+font_icons+css,
	http_css+iuapmobile_um_listgroup_2_7_0+css
	];
	return feedSummary_css;				
}

function getFeedDetails_css(){
	var feedDetails_css = [http_css+yonyou_css+css,];
	return feedDetails_css;				
}

function getFeedConfirmation_css(){
	var feedConfirmation_css = [http_css+yonyou_css+css,
	http_css+feedConfirmation+css
	];
	return feedConfirmation_css;				
}

function getLoginSetting_css(){
	var loginSetting_css = [http_css+yonyou_css+css,
	http_css+font_icons+css
	];
	return loginSetting_css;				
}

function getFeedApply_css(){
	var feedApply_css = [http_css+yonyou_css+css,
	http_css+font_icons+css,
	http_css+feedApply+css,
	];
	return feedApply_css;				
}

function getFeedArrived_css(){
	var feedArrived_css =[http_css+yonyou_css+css,
	http_css+font_icons+css,
	http_css+iuapmobile_um_listgroup_2_7_0+css
	];
	return feedArrived_css;				
}

function getMain_css(){
	var main_css = [http_css+font_icons+css,
	http_css+yonyou_css+css,
	http_css+islider+css,
	http_css+iuapmobile_um_listview+css,
	http_css+btnpng+css
	];
	return main_css;				
}

function getIndex_css(){
	var index_css = [http_css+font_icons+css,
	http_css+yonyou_css+css];
	return index_css;				
}
window.onload = function(){
	//失去焦点是触发
	$(".focusevet").bind("blur", function() {
		if($(this).val()==""){$(this).val("0")}
	});
	//获取焦点是触发
	$(".focusevet").bind("focus", function() {
		if($(this).val()=="0"){$(this).val("")}
	});
	$("input[type='number']").on('keyup', function(event) {
		var $amountInput = $(this);
		//响应鼠标事件，允许左右方向键移动
		event = window.event || event;
		if (event.keyCode == 37 | event.keyCode == 39) {
			return;
		}
		//先把非数字的都替换掉，除了数字和.
		$amountInput.val($amountInput.val().replace(/[^\d.]/g, "").
		//只允许一个小数点
		replace(/^\./g, "").replace(/\.{2,}/g, ".").
		//只能输入小数点后两位
		replace(".", "$#$").replace(/\./g, "").replace("$#$", ".").replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'));
	});
	$("input[type='number']").on('blur', function() {
		var $amountInput = $(this);
		//最后一位是小数点的话，移除
		$amountInput.val(($amountInput.val().replace(/\.$/g, "")));
	});
};
