
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"38",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"summit.growthmarketingconf.com,growthmarketingconf.com,bizzabo.com"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b=new Date,a=b.getHours();if(2\u003Ea)return\"Midnight - 23-02\";if(2\u003C=a\u0026\u00266\u003Ea)return\"Graveyard - 02-06\";if(6\u003C=a\u0026\u00269\u003Ea)return\"Early Morning - 06-09\";if(9\u003C=a\u0026\u002611\u003Ea)return\"Late Morning - 09-11\";if(11\u003C=a\u0026\u002613\u003Ea)return\"Midday - 11-13\";if(13\u003C=a\u0026\u002617\u003Ea)return\"Afternoon - 13-17\";if(17\u003C=a\u0026\u002621\u003Ea)return\"Evening - 17-21\";if(21\u003C=a\u0026\u002623\u003Ea)return\"Night - 21-23\";if(23\u003C=a\u0026\u002624\u003Ea)return\"Midnight - 23-02\"}catch(c){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=new Date,b=a.getDay();return b}catch(c){}})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",6],
      "vtp_map":["list",["map","key","0","value","Weekend"],["map","key","1","value","Weekday"],["map","key","2","value","Weekday"],["map","key","3","value","Weekday"],["map","key","4","value","Weekday"],["map","key","5","value","Weekday"],["map","key","6","value","Weekend"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,c=-a.getTimezoneOffset(),d=0\u003C=c?\"+\":\"-\",b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+\".\"+b(a.getMilliseconds())+d+b(c\/60)+\":\"+b(c%60)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).getTime()+\".\"+Math.random().toString(36).substring(5)})();"]
    },{
      "function":"__c",
      "vtp_value":"UA-45545217-44"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b=ga.getAll(),c;var a=0;for(c=b.length;a\u003Cc;a+=1)if(b[a].get(\"trackingId\")===",["escape",["macro",10],8,16],")return b[a].get(\"clientId\")}catch(d){}return\"false\"})();"]
    },{
      "function":"__cid"
    },{
      "function":"__ctv"
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":true,
      "vtp_autoLinkDomains":["macro",4],
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","useBeacon","value","true"],["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","true"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","6","dimension",["macro",5]],["map","index","7","dimension",["macro",7]],["map","index","8","dimension",["macro",8]],["map","index","9","dimension",["macro",9]],["map","index","10","dimension",["macro",11]],["map","index","11","dimension",["template",["macro",12]," - ",["macro",13]]],["map","index","12","dimension",["template",["macro",3],["macro",1]]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",10],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"attributes.counter"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",15],
      "vtp_defaultValue":"afterabr",
      "vtp_map":["list",["map","key","120","value","superabr"],["map","key","75","value","afterabr"],["map","key","60","value","afterabr"],["map","key","45","value","abr"],["map","key","30","value","hit"],["map","key","15","value","hit"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_component":"PROTOCOL",
      "vtp_varType":"URL"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",23],
      "vtp_map":["list",["map","key","mailto","value","Email Link"],["map","key","tel","value","Phone Number Link"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",25],8,16],")return ",["escape",["macro",25],8,16],".split(\":\")[1]})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",27],8,16],".pathname.split(\".\");return 1\u003Ca.length?a.pop().toUpperCase():\"HTML\"}catch(b){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return ",["escape",["macro",27],8,16],".pathname.split(\"\/\").pop()}catch(a){}})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_stripWww":false,
      "vtp_component":"HOST",
      "vtp_varType":"URL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",3],8,16],".match(\/[^.]*\\.[^.]{2,3}(?:\\.[^.]{2,3})?$\/)[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1===",["escape",["macro",30],8,16],".indexOf(",["escape",["macro",31],8,16],")?!0:!1})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",36],
      "vtp_defaultValue":["macro",36],
      "vtp_map":["list",["map","key","start","value","Start playing"],["map","key","pause","value","Pause"],["map","key","buffering","value","Buffering"],["map","key","progress","value",["template","Reached ",["macro",37],"%"]],["map","key","complete","value","Reached the end"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionTotal"
    },{
      "function":"__c",
      "vtp_value":"75"
    },{
      "function":"__c",
      "vtp_value":"15000"
    },{
      "function":"__c",
      "vtp_value":"44000"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"buyerEmail"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"buyerName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionTax"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionProducts"
    },{
      "function":"__c",
      "vtp_value":"1800"
    },{
      "function":"__c",
      "vtp_value":"MMFW - 031219"
    },{
      "function":"__c",
      "vtp_value":"UA-1234-5"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var d=\"",["escape",["macro",50],7],"\",b=\"_\"+d+\"_originalSendTask\";return function(c){window[b]=window[b]||c.get(\"sendHitTask\");c.set(\"sendHitTask\",function(a){var c=a.get(\"hitPayload\"),e=new RegExp(a.get(\"trackingId\"),\"gi\");window[b](a);a.set(\"hitPayload\",c.replace(e,d),!0);window[b](a)})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",15],8,16],"\u003E",["escape",["macro",48],8,16],"?!0:!1})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__dbg"
    },{
      "function":"__r"
    },{
      "function":"__hid"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleRatio",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "priority":10000,
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",14],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":19
    },{
      "function":"__ua",
      "priority":9000,
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Interaction Hit - Adjusted Bounce Rate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":["template",["macro",15],"s"],
      "vtp_eventLabel":["macro",2],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":20
    },{
      "function":"__html",
      "priority":8000,
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript id=\"gtm-mip-engagement-timer\" type=\"text\/gtmscript\"\u003E(function(d,e,t){function g(a,c,b){if(a.addEventListener)a.addEventListener(c,b);else if(a.attachEvent)a.attachEvent(\"on\"+c,function(c){b.call(a,c)});else if(\"undefined\"===typeof a[\"on\"+c]||null===a[\"on\"+c])a[\"on\"+c]=function(c){b.call(a,c)}}function r(a,c,b){if(a.removeEventListener)return a.removeEventListener(c,b);if(a.detachEvent)return a.detachEvent(\"on\"+c,b);if(a[\"on\"+c]===b)return a.on=null}function n(){for(i=h.length;-1\u003Ci;i--){var a=h[i];g(e,a,p)}}function k(){b=setInterval(function(){q++;\ne.dataLayer.push({event:\"engagementTimer\",attributes:{counter:15*q}})},Number(",["escape",["macro",41],8,16],"))}function m(){setTimeout(function(){clearInterval(b);b=!1},Number(",["escape",["macro",42],8,16],")+1)}function p(){for(i=h.length;-1\u003Ci;i--){var a=h[i];r(e,a,p)}setTimeout(function(){n()},1500);b||k();clearTimeout(m);m()}var q=0,h=[\"mousemove\",\"touchstart\",\"scroll\",\"keydown\"],b;if(\"undefined\"!==typeof d.hidden){var l=\"hidden\";var f=\"visibilitychange\"}else\"undefined\"!==typeof d.mozHidden?(l=\"mozHidden\",f=\"mozvisibilitychange\"):\n\"undefined\"!==typeof d.msHidden?(l=\"msHidden\",f=\"msvisibilitychange\"):\"undefined\"!==typeof d.webkitHidden\u0026\u0026(l=\"webkitHidden\",f=\"webkitvisibilitychange\");m();n();k();f?g(d,f,function(){clearInterval(b);d[l]||k()}):(g(e,\"blur\",function(){clearInterval(b)}),g(e,\"focus\",function(){clearInterval(b);k()}))})(document,window);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":27
    },{
      "function":"__ua",
      "priority":500,
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Scroll Tracking - v2",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":"Element - Full Page",
      "vtp_eventLabel":["template",["macro",33],"%"],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":25
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":7
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":14
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":16
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":18
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"All Form Submit",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":["template","ID:",["macro",19]," - CLASS:",["macro",20]],
      "vtp_eventLabel":["template","TEXT: ",["macro",21]," - TARGET:",["macro",22]," - URL: ",["macro",17]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":21
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Contact Link Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":["macro",24],
      "vtp_eventLabel":["macro",26],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":22
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"File Downloads",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":["macro",28],
      "vtp_eventLabel":["macro",29],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Outbound Link Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":["macro",30],
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":24
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Video Performance",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",14],
      "vtp_eventAction":["template","YouTube: ",["macro",34]," - ",["macro",35]],
      "vtp_eventLabel":["macro",38],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":26
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":28
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":29
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":31
    },{
      "function":"__asp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixelId":"FDTD4SOTJRAQZHUX5FBW4G",
      "vtp_customerId":"YEVT456KFRFCXI7AJZVAA3",
      "vtp_conversionValueCurrency":"USD",
      "vtp_conversionValueInDollars":["macro",39],
      "tag_id":32
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":33
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"10,25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"1874696_39",
      "vtp_enableTriggerStartOption":true,
      "tag_id":34
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"10,25,50,75,90,100",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"1874696_40",
      "vtp_enableTriggerStartOption":true,
      "tag_id":35
    },{
      "function":"__fsl",
      "vtp_waitForTags":"",
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1874696_41",
      "tag_id":36
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1874696_42",
      "tag_id":37
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1874696_43",
      "tag_id":38
    },{
      "function":"__cl",
      "tag_id":39
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":["macro",40],
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"1874696_50",
      "vtp_enableTriggerStartOption":true,
      "tag_id":40
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1671505163073501\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1671505163073501\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":2
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"nusom\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nusom\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=nusom\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":3
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"345704742303400\");fbq(\"set\",\"agent\",\"tmgoogletagmanager\",\"345704742303400\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":6
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){var h=\"https:\/\/api.autopilothq.com\/anywhere\/\",k=\"017dc2fc53af4dc7942a6fa75ee8385cf074160092474cf3940e699990e900c7\",l=window.AutopilotAnywhere={_runQueue:[],run:function(){this._runQueue.push(arguments)}},b=encodeURIComponent,f=\"SCRIPT\",c=document,g=c.getElementsByTagName(f)[0],e=\"t\\x3d\"+b(c.title||\"\")+\"\\x26u\\x3d\"+b(c.location.href||\"\")+\"\\x26r\\x3d\"+b(c.referrer||\"\"),m=\"text\/javascript\";window.Autopilot||(window.Autopilot=l);a.app\u0026\u0026(e=\"devmode\\x3dtrue\\x26\"+e);var n=function(a,b){var d=\nc.createElement(f);d.src=a;d.type=m;d.async=b;g.parentNode.insertBefore(d,g)};a=function(){n(h+k+\"?\"+e,!0)};window.attachEvent?window.attachEvent(\"onload\",a):window.addEventListener(\"load\",a,!1)})({});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":8
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"       \n        \u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"2056088554461299\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n        \u003Cnoscript\u003E\n        \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=2056088554461299\u0026amp;ev=PageView\n        \u0026amp;noscript=1\"\u003E        \n        \u003C\/noscript\u003E\n         ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":17
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,b,f,d,e,g){a.GoogleAnalyticsObject=d;a[d]=a[d]||function(){(a[d].q=a[d].q||[]).push(arguments)};a[d].l=1*new Date;e=c.createElement(b);g=c.getElementsByTagName(b)[0];e.async=1;e.src=f;g.parentNode.insertBefore(e,g)})(window,document,\"script\",\"\/\/www.google-analytics.com\/analytics.js\",\"ga\");var clientId;window.ga(\"create\",\"UA-45545217-47\",\"auto\");window.ga(function(a){clientId=a.get(\"clientId\")});\nwindow.addEventListener(\"message\",function(a){if(!(0\u003Ea.origin.indexOf(\"bizzabo.com\"))\u0026\u0026a.data\u0026\u0026(a.data=\"ticketWidgetReady\")){a=document.getElementsByClassName(\"bizzabo-tickets-widget\");for(var c=0;c\u003Ca.length;c++){var b=a[c].querySelector(\"iframe\"),f={type:\"clientId\",val:clientId};(b=b\u0026\u0026b.contentWindow)?b.postMessage(f,\"https:\/\/accounts.bizzabo.com\"):console.error(\"Analytics: Could not find ticket widget IFRAME\")}}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"events.bizzabo.com\/"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"sponsor"
    },{
      "function":"_sw",
      "arg0":["macro",2],
      "arg1":"\/contact-us\/"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"summit"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"community"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"accounts.bizzabo.com"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"registrationComplete"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=965812\u0026conversionId=748700\u0026fmt=gif"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"events.bizzabo.com\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"abr"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"engagementTimer"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"superabr"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"www.facebook.com\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"(^$|((^|,)1874696_41($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":"mailto|tel",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"(^$|((^|,)1874696_42($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",28],
      "arg1":"pdf|docx?|xlsx?|txt",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"(^$|((^|,)1874696_43($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"(^$|((^|,)1874696_50($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"(^$|((^|,)1874696_40($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"registrationStart"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":".*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":".*"
    }],
  "rules":[
    [["if",0],["add",4,5,0,25,26,27,29,2,18,19,20,23,24],["block",4]],
    [["if",7],["add",6,14,15,17]],
    [["if",0,8,9],["add",7]],
    [["if",10,11],["add",1]],
    [["if",11,12],["add",1]],
    [["if",14,15],["unless",13],["add",8]],
    [["if",16,17,18],["add",9]],
    [["if",17,19,20],["add",10]],
    [["if",21,22],["add",11]],
    [["if",23,24],["add",3]],
    [["if",25,26],["add",12]],
    [["if",27],["add",13]],
    [["if",28],["add",16,28,30]],
    [["if",0,29],["add",21]],
    [["if",0,30],["add",22]],
    [["if",0,1],["block",4]],
    [["if",0,2],["block",4]],
    [["if",0,3],["block",4]],
    [["if",0,4],["block",4]],
    [["if",0,5],["block",4]],
    [["if",0,6],["block",5,0,13,14]]]
},
"runtime":[[50,"__asp",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","setInWindow"]],[52,"d",["require","makeTableMap"]],["c","adroll_adv_id",[17,[15,"a"],"customerId"]],["c","adroll_pix_id",[17,[15,"a"],"pixelId"]],[22,[21,[17,[15,"a"],"conversionValueInDollars"],[44]],[46,["c","adroll_conversion_value",[17,[15,"a"],"conversionValueInDollars"]],["c","adroll_currency",[30,[17,[15,"a"],"conversionValueCurrency"],"USD"]]]],[22,[17,[15,"a"],"customData"],[46,["c","adroll_custom_data",["d",[17,[15,"a"],"customData"],"key","value"]]]],[22,[17,[15,"a"],"segmentName"],[46,["c","adroll_segments",[17,[15,"a"],"segmentName"]]]],[22,[17,[15,"a"],"visitorEmail"],[46,["c","adroll_email",[17,[15,"a"],"visitorEmail"]]]],["c","__adroll_loaded",true],[52,"e","https://s.adroll.com/j/roundtrip.js"],["b",[15,"e"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__asp":{"access_globals":{"keys":[{"key":"adroll_adv_id","read":true,"write":true,"execute":false},{"key":"adroll_pix_id","read":true,"write":true,"execute":false},{"key":"adroll_conversion_value","read":true,"write":true,"execute":false},{"key":"adroll_currency","read":true,"write":true,"execute":false},{"key":"adroll_custom_data","read":true,"write":true,"execute":false},{"key":"adroll_segments","read":true,"write":true,"execute":false},{"key":"adroll_email","read":true,"write":true,"execute":false},{"key":"__adroll_loaded","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/s.adroll.com\/j\/roundtrip.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__asp"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,da="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={sg:!0},ja={};try{ja.__proto__=ia;ha=ja.sg;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=fa,la=function(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ji=b.prototype},ma=this||self,pa=function(a){if(a&&a!=ma)return na(a.document);null===oa&&(oa=na(ma.document));return oa},sa=/^[\w+/_-]+[=]{0,2}$/,oa=null,na=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&sa.test(c))return c}return""},ta=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"},va=function(a,b){function c(){}c.prototype=b.prototype;a.ji=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ei=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}},xa=function(a){return a};var ya=function(a,b){this.a=a;this.i=b};var za=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Aa=function(){this.B={};this.m=!1;this.F={}};Aa.prototype.get=function(a){return this.B["dust."+a]};Aa.prototype.set=function(a,b){this.m||(a="dust."+a,this.F.hasOwnProperty(a)||(this.B[a]=b))};Aa.prototype.has=function(a){return this.B.hasOwnProperty("dust."+a)};var Ba=function(a){var b=[],c;for(c in a.B)a.B.hasOwnProperty(c)&&b.push(c.substr(5));return b};var k=function(a){this.i=new Aa;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(za(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=k.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"===a){if(!za(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else za(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"===a?this.length():za(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.uc=function(){for(var a=Ba(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new k(a)};
var Ca=function(a,b){if(za(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.F.hasOwnProperty(d)||delete c.B[d]}};aa=k.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new k(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return za(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var Da=function(){function a(f,g){if(b[f]){if(b[f].ic+g>b[f].max)throw Error("Quota exceeded");b[f].ic+=g}}var b={},c=void 0,d=void 0,e={Kh:function(f){c=f},Re:function(){c&&a(c,1)},Mh:function(f){d=f},Ha:function(f){d&&a(d,f)},gi:function(f,g){b[f]=b[f]||{ic:0};b[f].max=g},jh:function(f){return b[f]&&b[f].ic||0},reset:function(){b={}},Rg:a};e.onFnConsume=e.Kh;e.consumeFn=e.Re;e.onStorageConsume=e.Mh;e.consumeStorage=e.Ha;e.setMax=e.gi;e.getConsumed=e.jh;e.reset=e.reset;e.consume=e.Rg;return e};var Ea=function(a,b){this.F=a;this.P=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new Aa;this.a=this.B=void 0};Ea.prototype.add=function(a,b){Fa(this,a,b,!1)};var Fa=function(a,b,c,d){if(!a.i.m)if(a.F.Ha(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.F["dust."+b]=!0}else a.i.set(b,c)};
Ea.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Ha(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};Ea.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};Ea.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Ga=function(a){var b=new Ea(a.F,a);a.B&&(b.B=a.B);b.P=a.P;b.a=a.a;return b};var Ha=function(){},Ia=function(a){return"function"==typeof a},p=function(a){return"string"==typeof a},Ja=function(a){return"number"==typeof a&&!isNaN(a)},La=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},A=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ma=function(a,b){if(a&&La(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Na=function(a,b){if(!Ja(a)||
!Ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Pa=function(a,b){for(var c=new Oa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Qa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ra=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Sa=function(a){return Math.round(Number(a))||0},Ta=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Ua=function(a){var b=[];if(La(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Va=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Wa=function(){return(new Date).getTime()},Oa=function(){this.prefix="gtm.";this.values={}};Oa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Oa.prototype.get=function(a){return this.values[this.prefix+a]};
var Xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ya=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},$a=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},ab=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},bb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},cb=function(a,b){var c=D;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=A(b,d))return}return d},
eb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},fb=function(a){var b=[];Qa(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var gb=function(a,b){Aa.call(this);this.a=a;this.P=b};la(gb,Aa);gb.prototype.toString=function(){return this.a};gb.prototype.uc=function(){return new k(Ba(this))};gb.prototype.i=function(a,b){a.F.Re();return this.P.apply(hb(this,a),Array.prototype.slice.call(arguments,1))};var hb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return La(d)?kb(e,d):d};c.prototype.F=function(d){return lb(this.m,d)};c.prototype.B=function(){return b.F};return new c(a,b)};
gb.prototype.Ka=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var lb=function(a,b){for(var c,d=0;d<b.length&&!(c=kb(a,b[d]),c instanceof ya);d++);return c},kb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof gb))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.B;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var mb=function(){Aa.call(this)};la(mb,Aa);mb.prototype.uc=function(){return new k(Ba(this))};var nb={control:function(a,b){return new ya(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.B().Ha(a.length+f.length);return new gb(a,function(){return function(g){var h=Ga(d);void 0===h.a&&(h.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof ya)return l[m];for(var n=e.get("length"),r=
0;r<n;r++)r<l.length?h.add(e.get(r),l[r]):h.add(e.get(r),void 0);h.add("arguments",new k(l));var t=lb(h,f);if(t instanceof ya)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.B();b.Ha(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ha(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.B(),c=new mb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ha(g);c.set(e,f)}return c},undefined:function(){}};var ob=function(){this.m=Da();this.a=new Ea(this.m)},pb=function(a,b,c){var d=new gb(b,c);d.m=!0;a.a.set(b,d)};ob.prototype.oc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};ob.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=kb(this.a,arguments[c]);return b};ob.prototype.B=function(a,b){var c=Ga(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=d=kb(c,arguments[e]);return d};var qb=function(a){if(a instanceof qb)return a;this.oa=a};qb.prototype.toString=function(){return String(this.oa)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var rb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,sb=function(a){if(null==a)return String(a);var b=rb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},tb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ub=function(a){if(!a||"object"!=sb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!tb(a,"constructor")&&!tb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||tb(a,b)},F=function(a,b){var c=b||("array"==sb(a)?[]:{}),d;for(d in a)if(tb(a,d)){var e=a[d];"array"==sb(e)?("array"!=sb(c[d])&&(c[d]=[]),c[d]=F(e,c[d])):ub(e)?(ub(c[d])||(c[d]={}),c[d]=F(e,c[d])):c[d]=e}return c};var wb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=Ba(h),n=0;n<m.length;n++)l[m[n]]=g(h.get(m[n]))},g=function(h){var l=A(d,h);if(-1<l)return e[l];if(h instanceof k){var m=[];d.push(h);e.push(m);for(var n=h.uc(),r=0;r<n.length();r++)m[n.get(r)]=g(h.get(n.get(r)));return m}if(h instanceof mb){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof gb){var q=function(){for(var v=Array.prototype.slice.call(arguments,0),u=0;u<v.length;u++)v[u]=vb(v[u],b,!!c);var w=b?b.F:Da(),y=new Ea(w);
b&&(y.a=b.a);return g(h.i.apply(h,[y].concat(v)))};d.push(h);e.push(q);f(h,q);return q}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},vb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=A(d,
h);if(-1<l)return e[l];if(La(h)||Ra(h)){var m=new k([]);d.push(h);e.push(m);for(var n in h)h.hasOwnProperty(n)&&m.set(n,g(h[n]));return m}if(ub(h)){var r=new mb;d.push(h);e.push(r);f(h,r);return r}if("function"===typeof h){var t=new gb("",function(v){for(var u=Array.prototype.slice.call(arguments,0),w=0;w<u.length;w++)u[w]=wb(this.a(u[w]),b,!!c);return g((0,this.m.P)(h,h,u))});d.push(h);e.push(t);f(h,t);return t}var q=typeof h;if(null===h||"string"===q||"number"===q||"boolean"===q)return h;};return g(a)};var xb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},yb=function(a){if(void 0===a||La(a)||ub(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var zb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=xb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Ca(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=xb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Ca(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Ab="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Bb=new ya("break"),Cb=new ya("continue"),Db=function(a,b){return this.a(a)+this.a(b)},Ib=function(a,b){return this.a(a)&&this.a(b)},Jb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=A(Ab,b))return vb(a[b].apply(a,xb(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var d=a.get(b);if(d instanceof gb){var e=xb(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=A(zb.supportedMethods,b)){var f=xb(c);f.unshift(this.m);
return zb[b].apply(a,f)}}if(a instanceof gb||a instanceof mb){if(a.has(b)){var g=a.get(b);if(g instanceof gb){var h=xb(c);h.unshift(this.m);return g.i.apply(g,h)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof gb?a.a:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,xb(c))}if(a instanceof qb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Kb=function(a,b){a=this.a(a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");
var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Lb=function(a){var b=Ga(this.m),c=lb(b,Array.prototype.slice.apply(arguments));if(c instanceof ya)return c},Mb=function(){return Bb},Nb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof ya)return d}},Ob=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);Fa(b,d,e,
!0)}}},Pb=function(){return Cb},Qb=function(a,b,c){var d=new k;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},Rb=function(a,b){return this.a(a)/this.a(b)},Sb=function(a,b){a=this.a(a);b=this.a(b);var c=a instanceof qb,d=b instanceof qb;return c||d?c&&d?a.oa==b.oa:!1:a==b},Ub=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Vb(a,b,c){if("string"===typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=lb(e,c);if(f instanceof ya){if("break"===f.a)break;if("return"===f.a)return f}}else if(b instanceof mb||b instanceof k||b instanceof gb)for(var g=b.uc(),h=g.length(),l=0;l<h;l++){var m=a(g.get(l)),n=lb(m,c);if(n instanceof ya){if("break"===n.a)break;if("return"===n.a)return n}}}
var Wb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Vb(function(e){d.set(a,e);return d},b,c)},Xb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Vb(function(e){var f=Ga(d);Fa(f,a,e,!0);return f},b,c)},Yb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Vb(function(e){var f=Ga(d);f.add(a,e);return f},b,c)},Zb=function(a,b,c,d){function e(n,r){for(var t=0;t<f.length();t++){var q=f.get(t);r.add(q,n.get(q))}}var f=this.a(a);if(!(f instanceof
k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.m;d=this.a(d);var h=Ga(g);for(e(g,h);kb(h,b);){var l=lb(h,d);if(l instanceof ya){if("break"===l.a)break;if("return"===l.a)return l}var m=Ga(g);e(h,m);kb(m,c);h=m}},$b=function(a){a=this.a(a);var b=this.m,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");
return b.get(a)},ac=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof mb||a instanceof k||a instanceof gb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:za(b)&&(c=a[b]);else if(a instanceof qb)return;return c},bc=function(a,b){return this.a(a)>this.a(b)},cc=function(a,b){return this.a(a)>=this.a(b)},dc=function(a,b){a=this.a(a);b=this.a(b);a instanceof qb&&(a=a.oa);b instanceof qb&&(b=b.oa);
return a===b},ec=function(a,b){return!dc.call(this,a,b)},fc=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.F(d);if(e instanceof ya)return e},gc=function(a,b){return this.a(a)<this.a(b)},hc=function(a,b){return this.a(a)<=this.a(b)},ic=function(a,b){return this.a(a)%this.a(b)},jc=function(a,b){return this.a(a)*this.a(b)},kc=function(a){return-this.a(a)},lc=function(a){return!this.a(a)},mc=function(a,b){return!Sb.call(this,a,b)},nc=function(){return null},oc=function(a,b){return this.a(a)||
this.a(b)},pc=function(a,b){var c=this.a(a);this.a(b);return c},qc=function(a){return this.a(a)},rc=function(a){return Array.prototype.slice.apply(arguments)},sc=function(a){return new ya("return",this.a(a))},tc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof gb||a instanceof k||a instanceof mb)&&a.set(b,c);return c},uc=function(a,b){return this.a(a)-this.a(b)},vc=function(a,b,c){a=this.a(a);var d=
this.a(b),e=this.a(c);if(!La(d)||!La(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===this.a(d[h]))if(f=this.a(e[h]),f instanceof ya){var l=f.a;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=this.a(e[e.length-1]),f instanceof ya&&("return"===f.a||"continue"===f.a)))return f},wc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},xc=function(a){a=this.a(a);return a instanceof gb?"function":typeof a},
yc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},zc=function(a,b,c,d){var e=this.a(d);if(this.a(c)){var f=this.F(e);if(f instanceof ya){if("break"===f.a)return;if("return"===f.a)return f}}for(;this.a(a);){var g=this.F(e);if(g instanceof ya){if("break"===g.a)break;if("return"===g.a)return g}this.a(b)}},Ac=function(a){return~Number(this.a(a))},Bc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},Cc=function(a,b){return Number(this.a(a))>>
Number(this.a(b))},Dc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},Ec=function(a,b){return Number(this.a(a))&Number(this.a(b))},Fc=function(a,b){return Number(this.a(a))^Number(this.a(b))},Gc=function(a,b){return Number(this.a(a))|Number(this.a(b))};var Ic=function(){this.a=new ob;Hc(this)};Ic.prototype.oc=function(a){return Jc(this.a.i(a))};
var Lc=function(a,b){return Jc(Kc.a.B(a,b))},Hc=function(a){var b=function(d,e){var f=a.a,g=String(e);nb.hasOwnProperty(d)&&pb(f,g||d,nb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){pb(a.a,String(d),e)};c(0,Db);c(1,Ib);c(2,Jb);c(3,Kb);c(53,Lb);c(4,Mb);c(5,Nb);c(52,Ob);c(6,Pb);c(9,Nb);c(50,Qb);c(10,Rb);c(12,Sb);c(13,Ub);c(47,Wb);c(54,Xb);c(55,Yb);c(63,Zb);c(15,$b);c(16,ac);c(17,ac);c(18,bc);c(19,cc);c(20,dc);c(21,ec);c(22,fc);c(23,gc);c(24,hc);c(25,ic);
c(26,jc);c(27,kc);c(28,lc);c(29,mc);c(45,nc);c(30,oc);c(32,pc);c(33,pc);c(34,qc);c(35,qc);c(46,rc);c(36,sc);c(43,tc);c(37,uc);c(38,vc);c(39,wc);c(40,xc);c(41,yc);c(42,zc);c(58,Ac);c(57,Bc);c(60,Cc);c(61,Dc);c(56,Ec);c(62,Fc);c(59,Gc)},Nc=function(){var a=Kc,b=Mc();pb(a.a,"require",b)},Oc=function(a,b){a.a.a.P=b};function Jc(a){if(a instanceof ya||a instanceof gb||a instanceof k||a instanceof mb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var Pc=[],Qc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Rc=function(a){return Qc[a]},Sc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Wc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Xc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Yc=function(a){return Xc[a]};Pc[7]=function(a){return String(a).replace(Wc,Yc)};
Pc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Wc,Yc)+"'"}};var fd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,gd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},id=function(a){return gd[a]};Pc[16]=function(a){return a};var kd;
var ld=[],md=[],nd=[],od=[],pd=[],qd={},rd,sd,td,ud=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},vd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=qd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.Oe&&b.Oe(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):kd(c,e,b)},xd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&
(d[e]=wd(a[e],b,c));return d},yd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=qd[b];return c?c.priorityOverride||0:0},wd=function(a,b,c){if(La(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(wd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=ld[f];if(!g||b.rd(g))return;c[f]=!0;try{var h=xd(g,b,c);h.vtp_gtmEventId=b.id;d=vd(h,b);td&&(d=td.Tg(d,h))}catch(y){b.af&&b.af(y,Number(f)),
d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[wd(a[l],b,c)]=wd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=wd(a[n],b,c);sd&&(m=m||r===sd.Zb);d.push(r)}return sd&&m?sd.Wg(d):d.join("");case "escape":d=wd(a[1],b,c);if(sd&&La(a[1])&&"macro"===a[1][0]&&sd.wh(a))return sd.Rh(d);d=String(d);for(var t=2;t<a.length;t++)Pc[a[t]]&&(d=Pc[a[t]](d));return d;case "tag":var q=a[1];if(!od[q])throw Error("Unable to resolve tag reference "+q+".");return d=
{Ue:a[2],index:q};case "zb":var v={arg0:a[2],arg1:a[3],ignore_case:a[5]};v["function"]=a[1];var u=zd(v,b,c),w=!!a[4];return w||2!==u?w!==(1===u):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},zd=function(a,b,c){try{return rd(xd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Ad=function(){var a=function(b){return{toString:function(){return b}}};return{sf:a("consent"),Qd:a("convert_case_to"),Rd:a("convert_false_to"),Sd:a("convert_null_to"),Td:a("convert_true_to"),Ud:a("convert_undefined_to"),wi:a("debug_mode_metadata"),Ga:a("function"),jg:a("instance_name"),kg:a("live_only"),mg:a("malware_disabled"),ng:a("metadata"),zi:a("original_vendor_template_id"),pg:a("once_per_event"),Ee:a("once_per_load"),Ie:a("setup_tags"),Je:a("tag_id"),Ke:a("teardown_tags")}}();var Bd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};la(Bd,Error);function Cd(a,b){if(La(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Cd(a[c],b[c])}};var Dd=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};la(Dd,Error);var Ed=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var Gd=function(){return function(a,b){a instanceof Dd||(a=new Dd(a,Fd));b&&a.a.push(b);throw a;}};function Fd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ja(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var Hd=null,Kd=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Hd=Id(a);for(var e=0;e<md.length;e++){var f=md[e],g=Jd(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<od.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Jd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Hd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=Hd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},Id=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=zd(nd[c],a));return b[c]}};var Ld={Tg:function(a,b){b[Ad.Qd]&&"string"===typeof a&&(a=1==b[Ad.Qd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Ad.Sd)&&null===a&&(a=b[Ad.Sd]);b.hasOwnProperty(Ad.Ud)&&void 0===a&&(a=b[Ad.Ud]);b.hasOwnProperty(Ad.Td)&&!0===a&&(a=b[Ad.Td]);b.hasOwnProperty(Ad.Rd)&&!1===a&&(a=b[Ad.Rd]);return a}};var Md=function(){this.a={}};function Nd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Bd(c,d,g);}}function Od(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Nd(e,b,d,g);Nd(f,b,d,g)}}}};var Sd=function(a){var b=Pd.C,c=this;this.i=new Md;this.a={};var d={},e=Od(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Qa(a,function(f,g){var h={};Qa(g,function(l,m){var n=Qd(l,m);h[l]=n.assert;d[l]||(d[l]=n.K)});c.a[f]=function(l,m){var n=h[l];if(!n)throw Rd(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);n.apply(void 0,r);e.apply(void 0,r)}})},Ud=function(a){return Td.a[a]||
function(){}};function Qd(a,b){var c=ud(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Rd;try{return vd(c)}catch(d){return{assert:function(e){throw new Bd(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Rd(a,b,c){return new Bd(a,b,c)};var Vd=!1;var Wd={};Wd.oi=Ta('');Wd.bh=Ta('');var Xd=Vd,Yd=Wd.bh,Zd=Wd.oi;
var oe=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},pe=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;oe(b,"/*")&&(b=b.slice(0,-2));oe(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},qe=/^[a-z0-9-]+$/i,re=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
te=function(a,b){var c;if(!(c=!se(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!qe.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!re.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),r=n.slice(0,n.indexOf("/")),t;var q=l.hostname,v=r;if(0!==v.indexOf("*."))t=q.toLowerCase()===v.toLowerCase();else{v=v.slice(2);var u=q.toLowerCase().indexOf(v.toLowerCase());t=-1===u?!1:q.length===v.length?
!0:q.length!==v.length+u?!1:"."===q[u-1]}if(t){var w=n.slice(n.indexOf("/"));h=pe(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},se=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var we=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,xe={Fn:"function",DustMap:"Object",List:"Array"},H=function(a,b,c){for(var d=0;d<b.length;d++){var e=we.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var n=typeof l;l instanceof gb?n="Fn":l instanceof k?n="List":l instanceof mb?n="DustMap":
l instanceof qb&&(n="OpaqueValue");if(n!=h)throw Error("Error in "+a+". Argument "+f+" has type "+n+", which does not match required type "+(xe[h]||h)+".");}}};function ye(a){return""+a}
function ze(a,b){var c=[];return c};var Ae=function(a,b){var c=new gb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},Be=function(a,b){var c=new mb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ia(e)?c.set(d,Ae(a+"_"+d,e)):(Ja(e)||p(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var Ce=function(a,b){H(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new mb;return d=Be("AssertApiSubject",c)};var De=function(a,b){H(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new mb;return d=Be("AssertThatSubject",c)};function Ee(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(wb(arguments[d],c));return vb(a.apply(null,b))}}var Ge=function(){for(var a=Math,b=Fe,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Ee(a[e].bind(a)))}return c};var He=function(a){var b;return b};var Ie=function(a){var b;return b};var Je=function(a){H(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var Ke=function(a){H(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var Le=function(a){H(this.i.a,["message:?string"],arguments);};var Me=function(a,b){H(this.i.a,["min:!number","max:!number"],arguments);return Na(a,b)};var Ne=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.Fg.apply(null,Array.prototype.slice.call(arguments,1))};var Oe=function(){Ne(this,"read_container_data");var a=new mb;a.set("containerId",'GTM-PLZL67');a.set("version",'38');a.set("environmentName",'');a.set("debugMode",Xd);a.set("previewMode",Zd);a.set("environmentMode",Yd);a.m=!0;return a};var Pe=function(){return(new Date).getTime()};var Qe=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof gb)return"function";if(a instanceof qb){a=a.oa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var Re=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Xd||Zd)&&a.call(this,e.message)}}}return{parse:b(function(c){return vb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(wb(c))})}};var Se=function(a){return Sa(wb(a,this.m))};var Te=function(a){return Number(wb(a,this.m))};var Ue=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Ve=function(a,b,c){var d=null,e=!1;H(this.i.a,["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new mb;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof mb&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var Fe="floor ceil round max min abs pow sqrt".split(" ");var We=function(){var a={};return{kh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},hi:function(b,c){a[b]=c},reset:function(){a={}}}},Xe=function(a,b){H(this.i.a,["apiName:!string","mock:?*"],arguments);};var Ye=function(){this.a={};this.i={}};Ye.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};
Ye.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.i.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.a[a]=c?void 0:Ia(b)?Ae(a,b):Be(a,b)};
var $e=function(a){var b=Ze;if(a.i.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function which already exists: getUserAgent.";if(a.a.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function with an existing API name: getUserAgent.";a.i.getUserAgent=Ia(b)?Ae("getUserAgent",b):Be("getUserAgent",b)};function af(){var a={};return a};var I={vb:"_ee",bd:"_syn",Ci:"_uei",Ai:"_pci",Nc:"event_callback",Vb:"event_timeout",ka:"gtag.config"};I.Da="gtag.get",I.wa="value_key",I.va="value_callback";I.fa="allow_ad_personalization_signals";I.Uc="restricted_data_processing";I.gb="allow_google_signals";I.ia="cookie_expires";I.Ub="cookie_update";I.rb="session_duration";I.na="user_properties";I.Fa="transport_url";I.N="ads_data_redaction";I.o="ad_storage";
I.M="analytics_storage";I.tf="region";I.uf="wait_for_update";I.ve=[I.fa,I.gb,I.Ub];I.xe=[I.ia,I.Vb,I.rb];var bf={},cf=function(a,b){bf[a]=bf[a]||[];bf[a][b]=!0},df=function(a){for(var b=[],c=bf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var ef=function(a){cf("GTM",a)};function ff(a){if(Error.captureStackTrace)Error.captureStackTrace(this,ff);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}va(ff,Error);ff.prototype.name="CustomError";var gf=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");ff.call(this,d+c[e])};va(gf,ff);gf.prototype.name="AssertionError";var hf=function(a,b){throw new gf("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var jf=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},kf=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var lf,mf=function(){if(void 0===lf){var a=null,b=ma.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:xa,createScript:xa,createScriptURL:xa})}catch(c){ma.console&&ma.console.error(c.message)}lf=a}else lf=a}return lf};var of=function(a,b){this.a=b===nf?a:""};of.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var nf={};var pf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var qf;a:{var rf=ma.navigator;if(rf){var sf=rf.userAgent;if(sf){qf=sf;break a}}qf=""}var tf=function(a){return-1!=qf.indexOf(a)};var vf=function(a,b,c){this.a=c===uf?a:""};vf.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var wf=function(a){if(a instanceof vf&&a.constructor===vf)return a.a;hf("expected object of type SafeHtml, got '"+a+"' of type "+ta(a));return"type_error:SafeHtml"},uf={},xf=new vf(ma.trustedTypes&&ma.trustedTypes.emptyHTML||"",0,uf);var yf={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},zf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=wf(xf);return!c.parentElement}),Af=function(a,b){if(a.tagName&&yf[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(zf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=wf(b)};var Bf=function(a){var b=mf(),c=b?b.createHTML(a):a;return new vf(c,null,uf)};var D=window,L=document,Cf=navigator,Df=L.currentScript&&L.currentScript.src,Ef=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},Ff=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Gf=function(a,b,c){var d=L.createElement("script");d.type="text/javascript";d.async=!0;var e,f=mf(),g=f?f.createScriptURL(a):a;e=new of(g,nf);var h;a:{try{var l=d&&d.ownerDocument,m=l&&(l.defaultView||l.parentWindow);
m=m||ma;if(m.Element&&m.Location){h=m;break a}}catch(w){}h=null}if(h&&"undefined"!=typeof h.HTMLScriptElement&&(!d||!(d instanceof h.HTMLScriptElement)&&(d instanceof h.Location||d instanceof h.Element))){var n;var r=typeof d;if("object"==r&&null!=d||"function"==r)try{n=d.constructor.displayName||d.constructor.name||Object.prototype.toString.call(d)}catch(w){n="<object could not be stringified>"}else n=void 0===d?"undefined":null===d?"null":typeof d;hf("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
"HTMLScriptElement",n)}var t;e instanceof of&&e.constructor===of?t=e.a:(hf("expected object of type TrustedResourceUrl, got '"+e+"' of type "+ta(e)),t="type_error:TrustedResourceUrl");d.src=t;var q=pa(d.ownerDocument&&d.ownerDocument.defaultView);q&&d.setAttribute("nonce",q);Ff(d,b);c&&(d.onerror=c);var v=pa();v&&d.setAttribute("nonce",v);var u=L.getElementsByTagName("script")[0]||L.body||L.head;u.parentNode.insertBefore(d,u);return d},Hf=function(){if(Df){var a=Df.toLowerCase();if(0===a.indexOf("https://"))return 2;
if(0===a.indexOf("http://"))return 3}return 1},If=function(a,b){var c=L.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=L.body&&L.body.lastChild||L.body||L.head;d.parentNode.insertBefore(c,d);Ff(c,b);void 0!==a&&(c.src=a);return c},Jf=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Kf=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):
a.attachEvent&&a.attachEvent("on"+b,c)},Lf=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){D.setTimeout(a,0)},Mf=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Nf=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Of=function(a){var b=L.createElement("div");Af(b,Bf("A<div>"+a+"</div>"));
b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Pf=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},Qf=function(a){Cf.sendBeacon&&Cf.sendBeacon(a)||Jf(a)},Rf=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Sf={},Tf=function(a){return void 0==Sf[a]?!1:Sf[a]};var Uf=[];function Vf(){var a=Ef("google_tag_data",{});a.ics||(a.ics={entries:{},set:Wf,update:Xf,addListener:Yf,notifyListeners:Zf,active:!1});return a.ics}
function Wf(a,b,c,d,e,f){var g=Vf();g.active=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,n=c&&p(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(n===e||(n===d?m!==e:!n&&!m)){var r=!!(f&&0<f&&void 0===l.update),t={region:n,initial:"granted"===b,update:l.update,quiet:r};h[a]=t;r&&D.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,$f(a),Zf(),cf("TAGGING",2))},f)}}}
function Xf(a,b){var c=Vf();c.active=!0;if(void 0!=b){var d=ag(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=ag(a);f.quiet?(f.quiet=!1,$f(a)):g!==d&&$f(a)}}function Yf(a,b){Uf.push({Qe:a,fh:b})}function $f(a){for(var b=0;b<Uf.length;++b){var c=Uf[b];La(c.Qe)&&-1!==c.Qe.indexOf(a)&&(c.ef=!0)}}function Zf(a){for(var b=0;b<Uf.length;++b){var c=Uf[b];if(c.ef){c.ef=!1;try{c.fh({Pe:a})}catch(d){}}}}
var ag=function(a){var b=Vf().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},bg=function(a){return!(Vf().entries[a]||{}).quiet},cg=function(){return Tf("gtag_cs_api")?Vf().active:!1},dg=function(a,b){Vf().addListener(a,b)},eg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!bg(b[e]))return!0;return!1}if(c()){var d=!1;dg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},fg=function(a,b){if(!1===ag(b)){var c=!1;dg([b],function(d){!c&&ag(b)&&(a(d),c=!0)})}};var gg=[I.o,I.M],hg=function(a){var b=a[I.tf];b&&ef(40);var c=a[I.uf];c&&ef(41);for(var d=La(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<gg.length;f++){var g=gg[f],h=a[gg[f]],l=d[e];Vf().set(g,h,l,"","",c)}},ig=function(a,b){for(var c=0;c<gg.length;c++){var d=gg[c],e=a[gg[c]];Vf().update(d,e)}Vf().notifyListeners(b)},jg=function(a){var b=ag(a);return void 0!=b?b:!0},kg=function(){for(var a=[],b=0;b<gg.length;b++){var c=ag(gg[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},lg=function(a,b){eg(a,b)};var ng=function(a){return mg?L.querySelectorAll(a):null},og=function(a,b){if(!mg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!L.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},pg=!1;if(L.querySelectorAll)try{var qg=L.querySelectorAll(":root");qg&&1==qg.length&&qg[0]==L.documentElement&&(pg=!0)}catch(a){}var mg=pg;var Pd={},O=null,Eg=Math.random();Pd.C="GTM-PLZL67";Pd.cc="ae1";Pd.yi="";var Fg={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Gg={__paused:!0,__tg:!0},Hg;for(Hg in Fg)Fg.hasOwnProperty(Hg)&&(Gg[Hg]=!0);var Ig="www.googletagmanager.com/gtm.js";
var Jg=Ig,Kg=Ta(""),Lg=null,Mg=null,Ng="//www.googletagmanager.com/a?id="+Pd.C+"&cv=38",Og={},Pg={},Qg=function(){var a=O.sequence||1;O.sequence=a+1;return a};var Rg={},Sg=new Oa,Tg={},Ug={},Xg={name:"dataLayer",set:function(a,b){F(eb(a,b),Tg);Vg()},get:function(a){return Wg(a,2)},reset:function(){Sg=new Oa;Tg={};Vg()}},Wg=function(a,b){return 2!=b?Sg.get(a):Yg(a.split("."))},Yg=function(a){for(var b=Tg,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b},Zg=function(a,b){Ug.hasOwnProperty(a)||(Sg.set(a,b),F(eb(a,b),Tg),Vg())},Vg=function(a){Qa(Ug,function(b,c){Sg.set(b,c);F(eb(b,void 0),Tg);F(eb(b,c),Tg);a&&delete Ug[b]})},
$g=function(a,b,c){Rg[a]=Rg[a]||{};var d=1!==c?Yg(b.split(".")):Sg.get(b);"array"===sb(d)||"object"===sb(d)?Rg[a][b]=F(d):Rg[a][b]=d},ah=function(a,b){if(Rg[a])return Rg[a][b]},bh=function(a,b){Rg[a]&&delete Rg[a][b]};var eh={},fh=function(a,b){if(D._gtmexpgrp&&D._gtmexpgrp.hasOwnProperty(a))return D._gtmexpgrp[a];void 0===eh[a]&&(eh[a]=Math.floor(Math.random()*b));return eh[a]};var gh=/:[0-9]+$/,hh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},kh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ih(a.protocol)||ih(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||D.location.hostname).replace(gh,"").toLowerCase());return jh(a,b,c,d,e)},jh=function(a,b,c,d,e){var f,g=ih(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=lh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(gh,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||cf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=A(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=hh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},ih=function(a){return a?a.replace(":",
"").toLowerCase():""},lh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},mh=function(a){var b=L.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||cf("TAGGING",1),c="/"+c);var d=b.hostname.replace(gh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},nh=function(a){function b(m){var n=m.split("=")[0];return 0>d.indexOf(n)?m:n+"=0"}function c(m){return m.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=mh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function oh(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var qh=function(a,b,c,d){return ph(d)?oh(a,String(b||document.cookie),c):[]},th=function(a,b,c,d,e){if(ph(e)){var f=rh(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=sh(f,function(g){return g.mc},b);if(1===f.length)return f[0].id;f=sh(f,function(g){return g.Fb},c);return f[0]?f[0].id:void 0}}};function uh(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=qh(b,f,!1,d).indexOf(c)}
var yh=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!ph(c.Ja))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=vh(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.Hh);g=e(g,"samesite",
c.bi);c.ei&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var n=wh(),r=void 0,t=!1,q=0;q<n.length;++q){var v="none"!==n[q]?n[q]:void 0,u=e(g,"domain",v);u=f(u,c.flags);try{d&&d(a,h)}catch(w){r=w;continue}t=!0;if(!xh(v,c.path)&&uh(u,a,b,c.Ja))return 0}if(r&&!t)throw r;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return xh(m,c.path)?1:uh(g,a,b,c.Ja)?0:1},zh=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return yh(a,b,c)};
function sh(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function rh(a,b,c){for(var d=[],e=qh(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),mc:1*l[0]||1,Fb:1*l[1]||1}))}}return d}
var vh=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Ah=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Bh=/(^|\.)doubleclick\.net$/i,xh=function(a,b){return Bh.test(document.location.hostname)||"/"===b&&Ah.test(a)},wh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Bh.test(e)||Ah.test(e)||a.push("none");
return a},ph=function(a){if(!Tf("gtag_cs_api")||!a||!cg())return!0;if(!bg(a))return!1;var b=ag(a);return null==b?!0:!!b};var Ch=function(){for(var a=Cf.userAgent+(L.cookie||"")+(L.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Wa()/1E3)].join(".")},Fh=function(a,b,c,d,e){var f=Dh(b);return th(a,f,Eh(c),d,e)},Gh=function(a,b,c,d){var e=""+Dh(c),f=Eh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Dh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Eh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Hh(a,b,c){var d,e=a.Eb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Wa())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Ih=["1"],Jh={},Oh=function(a){var b=Lh(a.prefix);Jh[b]||Mh(b,a.path,a.domain)||(Nh(b,Ch(),a),Mh(b,a.path,a.domain))};function Nh(a,b,c){var d=Gh(b,"1",c.domain,c.path),e=Hh(c);e.Ja="ad_storage";zh(a,d,e)}function Mh(a,b,c){var d=Fh(a,b,c,Ih,"ad_storage");d&&(Jh[a]=d);return d}function Lh(a){return(a||"_gcl")+"_au"};function Ph(){for(var a=Qh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Rh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Qh,Sh;function Th(a){Qh=Qh||Rh();Sh=Sh||Ph();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,h=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,n=(g&15)<<2|h>>6,r=h&63;e||(r=64,d||(n=64));b.push(Qh[l],Qh[m],Qh[n],Qh[r])}return b.join("")}
function Uh(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Sh[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Qh=Qh||Rh();Sh=Sh||Ph();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Vh;var Zh=function(){var a=Wh,b=Xh,c=Yh(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Kf(L,"mousedown",d);Kf(L,"keyup",d);Kf(L,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},$h=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Yh().decorators.push(f)},ai=function(a,b,c){for(var d=Yh().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,n=!!g.sameHost;if(l&&(n||m!==L.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[r])||n&&0<=l[r].indexOf(m)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&$a(e,g.callback())}}return e},Yh=function(){var a=Ef("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var bi=/(.*?)\*(.*?)\*(.*)/,ci=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,di=/^(?:www\.|m\.|amp\.)+/,ei=/([^?#]+)(\?[^#]*)?(#.*)?/;function fi(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var hi=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Th(String(d))))}var e=b.join("*");return["1",gi(e),e].join("*")},gi=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Vh)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Vh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Vh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},ji=function(){return function(a){var b=mh(D.location.href),c=b.search.replace("?",""),d=hh(c,"_gl",!1,!0)||"";a.query=ii(d)||{};var e=kh(b,"fragment").match(fi("_gl"));a.fragment=ii(e&&e[3]||"")||{}}},ki=function(a){var b=ji(),c=Yh();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&($a(d,e.query),a&&$a(d,e.fragment));return d},
ii=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=bi.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],n=0;n<b;++n)if(m===gi(h,n)){l=!0;break a}l=!1}if(l){for(var r={},t=h?h.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=Uh(t[q+1]);return r}}}}catch(v){}};
function li(a,b,c,d){function e(n){var r=n,t=fi(a).exec(r),q=r;if(t){var v=t[2],u=t[4];q=t[1];u&&(q=q+v+u)}n=q;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=ei.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function mi(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=ai(b,1,c),e=ai(b,2,c),f=ai(b,3,c);if(ab(d)){var g=hi(d);c?ni("_gl",g,a):oi("_gl",g,a,!1)}if(!c&&ab(e)){var h=hi(e);oi("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){oi(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){ni(m,n,r);break a}}"string"==typeof r&&li(m,n,r,void 0)}}
function oi(a,b,c,d){if(c.href){var e=li(a,b,c.href,void 0===d?!1:d);pf.test(e)&&(c.href=e)}}
function ni(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=L.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=li(a,b,c.action);pf.test(m)&&(c.action=m)}}}
var Wh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||mi(e,e.hostname)}}catch(g){}},Xh=function(a){try{if(a.action){var b=kh(mh(a.action),"host");mi(a,b)}}catch(c){}},pi=function(a,b,c,d){Zh();$h(a,b,"fragment"===c?2:1,!!d,!1)},qi=function(a,b){Zh();$h(a,[jh(D.location,"host",!0)],b,!0,!0)},ri=function(){var a=L.location.hostname,b=ci.exec(L.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(di,""),l=e.replace(di,""),m;if(!(m=h===l)){var n="."+l;m=h.substring(h.length-n.length,h.length)===n}return m},si=function(a,b){return!1===a?!1:a||b||ri()};var ti=/^\w+$/,ui=/^[\w-]+$/,vi=/^~?[\w-]+$/,wi={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},xi=function(){if(!Tf("gtag_cs_api")||!cg())return!0;var a=ag("ad_storage");return null==a?!0:!!a},yi=function(a,b){bg("ad_storage")?xi()?a():fg(a,"ad_storage"):b?cf("TAGGING",3):eg(function(){yi(a,!0)},["ad_storage"])},Bi=function(a){var b=[];if(!L.cookie)return b;var c=qh(a,L.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=zi(c[d]);e&&-1===A(b,e)&&b.push(e)}return Ai(b)};
function Ci(a){return a&&"string"==typeof a&&a.match(ti)?a:"_gcl"}
var Ei=function(){var a=mh(D.location.href),b=kh(a,"query",!1,void 0,"gclid"),c=kh(a,"query",!1,void 0,"gclsrc"),d=kh(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||hh(e,"gclid",!1,void 0);c=c||hh(e,"gclsrc",!1,void 0)}return Di(b,c,d)},Di=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(ui))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Tf("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Gi=function(a){var b=Ei();yi(function(){Fi(b,a)})};
function Fi(a,b,c){function d(l,m){var n=Hi(l,e);n&&zh(n,m,f)}b=b||{};var e=Ci(b.prefix);c=c||Wa();var f=Hh(b,c,!0);f.Ja="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.Ti?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var Ji=function(a,b){var c=ki(!0);yi(function(){for(var d=Ci(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==wi[f]){var g=Hi(f,d),h=c[g];if(h){var l=Math.min(Ii(h),Wa()),m;b:{for(var n=l,r=qh(g,L.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(Ii(r[t])>n){m=!0;break b}m=!1}if(!m){var q=Hh(b,l,!0);q.Ja="ad_storage";zh(g,h,q)}}}}Fi(Di(c.gclid,c.gclsrc),b)})},Hi=function(a,b){var c=wi[a];if(void 0!==c)return b+c},Ii=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function zi(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Ki=function(a,b,c,d,e){if(La(b)){var f=Ci(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=Hi(a[l],f);if(m){var n=qh(m,L.cookie,void 0,"ad_storage");n.length&&(h[m]=n.sort()[n.length-1])}}return h};yi(function(){pi(g,b,c,d)})}},Ai=function(a){return a.filter(function(b){return vi.test(b)})},Li=function(a,b){for(var c=Ci(b.prefix),d={},e=0;e<a.length;e++)wi[a[e]]&&(d[a[e]]=wi[a[e]]);yi(function(){Qa(d,function(f,g){var h=qh(c+g,L.cookie,void 0,"ad_storage");if(h.length){var l=h[0],m=Ii(l),
n={};n[f]=[zi(l)];Fi(n,b,m)}})})};function Mi(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Ni=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(cg()){var c=Ei();if(Mi(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);qi(function(){return d},3);qi(function(){var e={};return e._up="1",e},1)}}},Oi=function(){var a;if(xi()){for(var b=[],c=L.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Kd:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].Kd]||(g[b[h].Kd]=[]),g[b[h].Kd].push({timestamp:l[1],hh:l[2]}))}a=g}else a={};return a};var Pi=/^\d+\.fls\.doubleclick\.net$/;function Qi(a,b){bg(I.o)?jg(I.o)?a():fg(a,I.o):b?ef(42):lg(function(){Qi(a,!0)},[I.o])}function Ri(a){var b=mh(D.location.href),c=kh(b,"host",!1);if(c&&c.match(Pi)){var d=kh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Si(a,b,c){if("aw"==a||"dc"==a){var d=Ri("gcl"+a);if(d)return d.split(".")}var e=Ci(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!jg(I.o)&&c,g;g=Ei()[a]||[];if(0<g.length)return f?["0"]:g}var h=Hi(a,e);return h?Bi(h):[]}
var Ti=function(a){var b=Ri("gac");if(b)return!jg(I.o)&&a?"0":decodeURIComponent(b);var c=Oi(),d=[];Qa(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].hh);g=Ai(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Ui=function(a,b){var c=Ei().dc||[];Qi(function(){Oh(b);var d=Jh[Lh(b.prefix)],e=!1;if(d&&0<c.length){var f=O.joined_au=O.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+d;Qf(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var m=Lh(b.prefix),n=Jh[m];n&&Nh(m,n,b)}})};var Vi=/[A-Z]+/,Wi=/\s/,Xi=function(a){if(p(a)&&(a=Va(a),!Wi.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Vi.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],D:d}}}}},Zi=function(a){for(var b={},c=0;c<a.length;++c){var d=Xi(a[c]);d&&(b[d.id]=d)}Yi(b);var e=[];Qa(b,function(f,g){e.push(g)});return e};
function Yi(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.D[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var $i=function(){var a=!1;return a};var bj=function(a,b,c,d){return(2===aj()||d||"http:"!=D.location.protocol?a:b)+c},aj=function(){var a=Hf(),b;if(1===a)a:{var c=Jg;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=L.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var pj=function(a){return jg(I.o)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=nh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},qj=function(){var a;if(!(a=Kg)){var b;if(!0===D._gtmdgs)b=!0;else{var c=Cf&&Cf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Sa("0");return fh(1,100)<d?fh(2,2):-1};var rj=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),sj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},tj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},uj="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var wj=function(a){var b;Wg("gtm.allowlist")&&ef(52);b=Wg("gtm.allowlist");b||(b=Wg("gtm.whitelist"));b&&ef(9);
var c=b&&bb(Ua(b),sj),d;Wg("gtm.blocklist")&&ef(51);d=Wg("gtm.blocklist");d||(d=Wg("gtm.blacklist"));d||(d=Wg("tagTypeBlacklist"))&&ef(3);d?ef(8):d=[];vj()&&(d=Ua(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=A(Ua(d),"google")&&ef(2);var e=
d&&bb(Ua(d),tj),f={};return function(g){var h=g&&g[Ad.Ga];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Pg[h]||[],m=a(h,l);if(b){var n;if(n=m)a:{if(0>A(c,h))if(l&&0<l.length)for(var r=0;r<l.length;r++){if(0>A(c,l[r])){ef(11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=A(e,h);if(q)t=q;else{var v=Pa(e,l||[]);v&&ef(10);t=v}}var u=!m||t;u||!(0<=A(l,"sandboxedScripts"))||c&&-1!==A(c,"sandboxedScripts")||(u=Pa(e,uj));return f[h]=u}},vj=
function(){return rj.test(D.location&&D.location.hostname)};var xj={active:!0,isAllowed:function(){return!0}},yj=function(a){var b=O.zones;return b?b.checkState(Pd.C,a):xj},zj=function(a){var b=O.zones;!b&&a&&(b=O.zones=a());return b};var Aj=function(){},Bj=function(){};var Cj=!1,Dj=0,Ej=[];function Fj(a){if(!Cj){var b=L.createEventObject,c="complete"==L.readyState,d="interactive"==L.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Cj=!0;for(var e=0;e<Ej.length;e++)N(Ej[e])}Ej.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function Gj(){if(!Cj&&140>Dj){Dj++;try{L.documentElement.doScroll("left"),Fj()}catch(a){D.setTimeout(Gj,50)}}}var Hj=function(a){Cj?a():Ej.push(a)};var Ij={},Jj={},Kj=function(a,b,c,d){if(!Jj[a]||Gg[b]||"__zone"===b)return-1;var e={};ub(d)&&(e=F(d,e));e.id=c;e.status="timeout";return Jj[a].tags.push(e)-1},Lj=function(a,b,c,d){if(Jj[a]){var e=Jj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Mj(a){for(var b=Ij[a]||[],c=0;c<b.length;c++)b[c]();Ij[a]={push:function(d){d(Pd.C,Jj[a])}}}
var Pj=function(a,b,c){Jj[a]={tags:[]};Ia(b)&&Nj(a,b);c&&D.setTimeout(function(){return Mj(a)},Number(c));return Oj(a)},Nj=function(a,b){Ij[a]=Ij[a]||[];Ij[a].push(Ya(function(){return N(function(){b(Pd.C,Jj[a])})}))};function Oj(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ya(function(){b++;d&&b>=c&&Mj(a)})},Eg:function(){d=!0;b>=c&&Mj(a)}}};var Qj=function(){function a(d){return!Ja(d)||0>d?0:d}if(!O._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=Ja(Xg.get("gtm.start"))?Xg.get("gtm.start"):0;O._li={cst:a(c-b),cbt:a(Mg-b)}}};var Uj={},Vj=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},Wj=!1;
var Xj=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||ef(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}Qj();return D[b]},Yj=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Vj();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ak=function(a){},Zj=function(){return D.GoogleAnalyticsObject||"ga"},bk=function(a,b){return function(){var c=Vj(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var gk=function(){return"&tc="+od.filter(function(a){return a}).length},jk=function(){2022<=hk().length&&ik()},lk=function(){kk||(kk=D.setTimeout(ik,500))},ik=function(){kk&&(D.clearTimeout(kk),kk=void 0);void 0===mk||nk[mk]&&!ok&&!pk||(qk[mk]||rk.yh()||0>=sk--?(ef(1),qk[mk]=!0):(rk.Yh(),Jf(hk()),nk[mk]=!0,tk=uk=vk=pk=ok=""))},hk=function(){var a=mk;if(void 0===a)return"";var b=df("GTM"),c=df("TAGGING");return[wk,nk[a]?"":"&es=1",xk[a],b?"&u="+b:"",c?"&ut="+c:"",gk(),ok,pk,vk?vk:"",uk,tk,"&z=0"].join("")},
yk=function(){return[Ng,"&v=3&t=t","&pid="+Na(),"&rv="+Pd.cc].join("")},zk="0.005000">Math.random(),wk=yk(),Ak=function(){wk=yk()},nk={},ok="",pk="",tk="",uk="",vk="",mk=void 0,xk={},qk={},kk=void 0,rk=function(a,b){var c=0,d=0;return{yh:function(){if(c<a)return!1;Wa()-d>=b&&(c=0);return c>=a},Yh:function(){Wa()-d>=b&&(c=0);c++;d=Wa()}}}(2,1E3),sk=1E3,Bk=function(a,b,c){if(zk&&!qk[a]&&b){a!==mk&&(ik(),mk=a);var d,e=String(b[Ad.Ga]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;ok=ok?ok+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(qd[g]?"1":"2")+d;tk=tk?tk+"."+h:"&ti="+h;lk();jk()}},Ck=function(a,b,c){if(zk&&!qk[a]){a!==mk&&(ik(),mk=a);var d=c+b;pk=pk?pk+"."+d:"&epr="+d;lk();jk()}},Dk=function(a,b,c){};
var Ek=function(){return!1},Fk=function(){var a={};return function(b,c,d){}};function Gk(a,b,c,d){var e=od[a],f=Hk(a,b,c,d);if(!f)return null;var g=wd(e[Ad.Ie],c,[]);if(g&&g.length){var h=g[0];f=Gk(h.index,{I:f,H:1===h.Ue?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Hk(a,b,c,d){function e(){if(f[Ad.mg])h();else{var w=xd(f,c,[]);var B=Kj(c.id,String(f[Ad.Ga]),Number(f[Ad.Je]),w[Ad.ng]),z=!1;w.vtp_gtmOnSuccess=function(){if(!z){z=!0;var G=Wa()-E;Bk(c.id,od[a],"5");Lj(c.id,B,"success",
G);g()}};w.vtp_gtmOnFailure=function(){if(!z){z=!0;var G=Wa()-E;Bk(c.id,od[a],"6");Lj(c.id,B,"failure",G);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;Bk(c.id,f,"1");var C=function(){var G=Wa()-E;Bk(c.id,f,"7");Lj(c.id,B,"exception",G);z||(z=!0,h())};var E=Wa();try{vd(w,c)}catch(G){C(G)}}}var f=od[a],g=b.I,h=b.H,l=b.terminate;if(c.rd(f))return null;var m=wd(f[Ad.Ke],c,[]);if(m&&m.length){var n=m[0],r=Gk(n.index,{I:g,H:h,terminate:l},c,d);if(!r)return null;g=r;h=2===n.Ue?l:r}if(f[Ad.Ee]||f[Ad.pg]){var t=f[Ad.Ee]?pd:c.ki,q=g,v=h;if(!t[a]){e=Ya(e);
var u=Ik(a,t,e);g=u.I;h=u.H}return function(){t[a](q,v)}}return e}function Ik(a,b,c){var d=[],e=[];b[a]=Jk(d,e,c);return{I:function(){b[a]=Kk;for(var f=0;f<d.length;f++)d[f]()},H:function(){b[a]=Lk;for(var f=0;f<e.length;f++)e[f]()}}}function Jk(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Kk(a){a()}function Lk(a,b){b()};var Ok=function(a,b,c){for(var d=[],e=0;e<od.length;e++)if(a[e]){var f=od[e];var g=c.add();try{var h=Gk(e,{I:g,H:g,terminate:g},b,e);h?d.push({pf:e,ff:yd(f),oc:h}):(Mk(e,b),g())}catch(m){g()}}c.Eg();d.sort(Nk);for(var l=0;l<d.length;l++)d[l].oc();return 0<d.length};function Nk(a,b){var c,d=b.ff,e=a.ff;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.pf,h=b.pf;f=g>h?1:g<h?-1:0}return f}
function Mk(a,b){if(!zk)return;var c=function(d){var e=b.rd(od[d])?"3":"4",f=wd(od[d][Ad.Ie],b,[]);f&&f.length&&c(f[0].index);Bk(b.id,od[d],e);var g=wd(od[d][Ad.Ke],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Pk=!1,Uk=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(Pk)return!1;Pk=!0}var d=yj(b),e=!1;if(!d.active){var f=!0;if("gtm.js"===c){f=!1,e=!0,d=yj(Number.MAX_SAFE_INTEGER);}if(f)return!1}zk&&!qk[b]&&mk!==b&&(ik(),mk=b,tk=ok="",xk[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,lk());
var g={id:b,name:c,rd:wj(d.isAllowed),ki:[],af:function(){ef(6)},Oe:Qk(b)},h=Pj(b,a.eventCallback,a.eventTimeout);Rk(b);var l=Kd(g);e&&(l=Sk(l));var m=Ok(l,g,h);"gtm.js"!==c&&"gtm.sync"!==c||ak(Pd.C);switch(c){case "gtm.init":ef(19),m&&ef(20)}return Tk(l,
m)};function Qk(a){return function(b){zk&&(yb(b)||Dk(a,"input",b))}}function Rk(a){$g(a,"event",1);$g(a,"ecommerce",1);$g(a,"gtm");}
function Sk(a){var b=[];for(var c=0;c<a.length;c++)a[c]&&Fg[String(od[c][Ad.Ga])]&&(b[c]=!0);return b}function Tk(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&od[c]&&!Gg[String(od[c][Ad.Ga])])return!0;return!1}function Vk(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return mh(""+c+b).href}}function Wk(a,b){return Xk()?Vk(a,b):void 0}function Xk(){var a=!1;return a};var Yk=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.I=function(){};this.H=function(){};this.eventId=void 0},Zk=function(a){var b=new Yk;b.eventModel=a;return b},$k=function(a,b){a.targetConfig=b;return a},al=function(a,b){a.containerConfig=b;return a},bl=function(a,b){a.a=b;return a},cl=function(a,b){a.globalConfig=b;return a},dl=function(a,b){a.I=b;return a},el=function(a,b){a.H=b;return a};
Yk.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var fl=function(a){function b(e){Qa(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Qa(c,function(e){d.push(e)});return d};var gl;if(3===Pd.cc.length)gl="g";else{var hl="G";gl=hl}
var il={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:gl,OPT:"o"},jl=function(a){var b=Pd.C.split("-"),c=b[0].toUpperCase(),d=il[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Pd.cc.length){var g="w";f="2"+g}else f="";return f+d+Pd.cc+e};var kl=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var ll=function(){return tf("iPhone")&&!tf("iPod")&&!tf("iPad")};tf("Opera");tf("Trident")||tf("MSIE");tf("Edge");!tf("Gecko")||-1!=qf.toLowerCase().indexOf("webkit")&&!tf("Edge")||tf("Trident")||tf("MSIE")||tf("Edge");-1!=qf.toLowerCase().indexOf("webkit")&&!tf("Edge")&&tf("Mobile");tf("Macintosh");tf("Windows");tf("Linux")||tf("CrOS");var ml=ma.navigator||null;ml&&(ml.appVersion||"").indexOf("X11");tf("Android");ll();tf("iPad");tf("iPod");ll()||tf("iPad")||tf("iPod");qf.toLowerCase().indexOf("kaios");var nl=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var ol=function(){};var pl=function(a,b){this.i=a;this.a=null;this.B={};this.P=0;this.F=void 0===b?500:b;this.m=null};la(pl,ol);var rl=function(a){return"function"===typeof a.i.__tcfapi||null!=ql(a)};
pl.prototype.addEventListener=function(a){var b={},c=kf(function(){return a(b)}),d=0;-1!==this.F&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.F));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=void 0!==b.tcString&&"string"!==typeof b.tcString||void 0!==b.gdprApplies&&"boolean"!==typeof b.gdprApplies||void 0!==b.listenerId&&"number"!==typeof b.listenerId||void 0!==b.addtlConsent&&"string"!==typeof b.addtlConsent?2:b.cmpStatus&&"error"!==b.cmpStatus?
0:3,g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{sl(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),d=0),c()}};pl.prototype.removeEventListener=function(a){a&&a.listenerId&&sl(this,"removeEventListener",null,a.listenerId)};
var ul=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=tl(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:m&&tl(a.purpose.consents,b)}else l=Tf("ticdac");else l=1===h?a.purpose&&a.vendor?
tl(a.purpose.legitimateInterests,b)&&tl(a.vendor.legitimateInterests,void 0===d?"755":d):Tf("ticdac"):!0;return l},tl=function(a,b){return!(!a||!a[b])},sl=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(ql(a)){vl(a);var f=++a.P;a.B[f]=c;if(a.a){var g={};a.a.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},ql=function(a){if(a.a)return a.a;a.a=nl(a.i,"__tcfapiLocator");return a.a},vl=function(a){a.m||
(a.m=function(b){try{var c,d;"string"===typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.B[c.callId](c.returnValue,c.success)}catch(e){}},kl(a.i,a.m))};var wl={1:0,3:0,4:0,7:3,9:3,10:3};function xl(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var yl=xl("",550),zl=xl("",500);function Al(){var a=O.tcf||{};return O.tcf=a}
var Bl=function(a,b){this.m=a;this.a=b;this.i=Wa();},Cl=function(a){},Dl=function(a){},Jl=function(){var a=Al(),b=new pl(D,3E3),c=new Bl(b,a);if((El()?!0===D.gtag_enable_tcf_support:!1!==D.gtag_enable_tcf_support)&&!a.active&&("function"===typeof D.__tcfapi||rl(b))){a.active=!0;a.Gb={};Fl();var d=setTimeout(function(){Gl(a);Hl(a);d=null},zl);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Gl(a),Hl(a),Cl(c);else{var f;if(!1===e.gdprApplies)f=Il(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in wl)wl.hasOwnProperty(h)&&("1"===h?g["1"]=!1===e.gdprApplies||"error"===e.cmpStatus||0!==e.internalErrorState||"loaded"===e.cmpStatus&&("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus)?!1===e.gdprApplies||"tcunavailable"===e.tcString||Tf("tntac")&&("string"!==typeof e.tcString||!e.tcString.length)?!0:ul(e,"1",0):!1:g[h]=ul(e,h,wl[h]));f=g}f&&(a.tcString=e.tcString||
"tcempty",a.Gb=f,Hl(a),Cl(c))}}),Dl(c)}catch(e){d&&(clearTimeout(d),d=null),Gl(a),Hl(a)}}};function Gl(a){a.type="e";a.tcString="tcunavailable";a.Gb=Il()}function Fl(){var a={};hg((a.ad_storage="denied",a.wait_for_update=yl,a))}var El=function(){var a=!1;a=!0;return a};function Il(){var a={},b;for(b in wl)wl.hasOwnProperty(b)&&(a[b]=!0);return a}
function Hl(a){var b={};ig((b.ad_storage=a.Gb["1"]?"granted":"denied",b))}var Kl=function(){var a=Al();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Ll=function(){var a=Al();return a.active?a.tcString||"":""},Ml=function(a){if(!wl.hasOwnProperty(String(a)))return!0;var b=Al();return b.active&&b.Gb?!!b.Gb[String(a)]:!0};function Nl(a,b,c){function d(r){var t;O.reported_gclid||(O.reported_gclid={});t=O.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var v=[],u=function(z,C){C&&v.push(z+"="+encodeURIComponent(C))},w="https://www.google.com";if(cg()){var y=jg(I.o);u("gcs",kg());r&&u("gcu","1");u("rnd",n);if((!f||g&&"aw.ds"!==g)&&jg(I.o)){var x=Bi("_gcl_aw");u("gclaw",x.join("."))}u("url",String(D.location).split(/[?#]/)[0]);u("dclid",Ol(b,h));!y&&b&&(w="https://pagead2.googlesyndication.com")}
u("gdpr_consent",Ll());"1"===ki(!1)._up&&u("gtm_up","1");u("gclid",Ol(b,f));u("gclsrc",g);u("gtm",jl(!c));var B=w+"/pagead/landing?"+v.join("&");Qf(B)}}var e=Ei(),f=e.gclid||"",g=e.gclsrc,h=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),m=cg();if(l||m){var n=""+Ch();m?lg(function(){d();jg(I.o)||fg(function(r){return d(!0,r.Pe)},I.o)},[I.o]):d()}}function Ol(a,b){var c=a&&!jg(I.o);return b&&c?"0":b}var Pl=function(a){if(L.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,
null))}return!1};
var Ql=function(){var a=L.body,b=L.documentElement||a&&a.parentElement,c,d;if(L.compatMode&&"BackCompat"!==L.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};ef(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Rl=function(a){var b=Ql(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var Yl=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),Zl=["SCRIPT","IMG","SVG","PATH"];function am(a){var b;if(a===L.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=am(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
function bm(){var a;var b=[],c=L.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];0<=Zl.indexOf(f.tagName.toUpperCase())||0===f.childElementCount&&b.push(f)}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var g=a,h=g.elements,l=[],m=0;m<h.length;m++){var n=h[m],r=n.textContent;n.value&&(r=n.value);if(r){var t=r.match(Yl);if(t){var q=t[0],v;if(D.location){var u=jh(D.location,"host",!0);v=0<=q.toLowerCase().indexOf(u)}else v=!1;v||l.push({element:n,
Si:q})}}}for(var w=[],y=10<l.length?"3":g.status,x=0;x<l.length&&10>x;x++){var B=l[x].element;w.push({querySelector:am(B),tagName:B.tagName,isVisible:!Pl(B),type:1})}return{elements:w,status:y}}var Km=function(){var a=!0;Ml(7)&&Ml(9)&&Ml(10)||(a=!1);var b=!0;b=!1;b&&!Jm()&&(a=!1);return a},Jm=function(){var a=!0;Ml(3)&&Ml(4)||(a=!1);return a};function en(){var a=O;return a.gcq=a.gcq||new fn}
var gn=function(a,b,c){en().register(a,b,c)},hn=function(a,b,c,d){en().push("event",[b,a],c,d)},jn=function(a,b){en().push("config",[a],b)},kn=function(a,b,c){en().push("get",[a,b],c)},ln={},mn=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},nn=function(a,b,c,d,e){this.type=a;this.m=b;this.ca=c||"";this.a=d;this.i=e},fn=function(){this.m={};this.i={};this.a=[]},on=function(a,b){var c=Xi(b);return a.m[c.containerId]=a.m[c.containerId]||new mn},
pn=function(a,b,c){if(b){var d=Xi(b);if(d&&1===on(a,b).status){on(a,b).status=2;var e={};zk&&(e.timeoutId=D.setTimeout(function(){ef(38);lk()},3E3));a.push("require",[e],d.containerId);ln[d.containerId]=Wa();if($i()){}else{var g="/gtag/js?id="+
encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=D.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Wk(c,g)||h;Gf(l)}}}},qn=function(a,b,c,d){if(d.ca){var e=on(a,d.ca),f=e.m;if(f){var g=F(c),h=F(e.targetConfig[d.ca]),l=F(e.containerConfig),m=F(e.i),n=F(a.i),r=Wg("gtm.uniqueEventId"),t=Xi(d.ca).prefix,q=el(dl(cl(bl(al($k(Zk(g),h),l),m),n),function(){Ck(r,t,"2");}),function(){
Ck(r,t,"3");});try{Ck(r,t,"1");f(d.ca,b,d.m,q)}catch(v){Ck(r,t,"4");}}}};
fn.prototype.register=function(a,b,c){if(3!==on(this,a).status){on(this,a).m=b;on(this,a).status=3;c&&(on(this,a).i=c);var d=Xi(a),e=ln[d.containerId];if(void 0!==e){var f=O[d.containerId].bootstrap,g=d.prefix.toUpperCase();O[d.containerId]._spx&&(g=g.toLowerCase());var h=Wg("gtm.uniqueEventId"),l=g,m=Wa()-f;if(zk&&!qk[h]){h!==mk&&(ik(),mk=h);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);uk=uk?uk+","+n:"&cl="+n}delete ln[d.containerId]}this.flush()}};
fn.prototype.push=function(a,b,c,d){var e=Math.floor(Wa()/1E3);pn(this,c,b[0][I.Fa]||this.i[I.Fa]);this.a.push(new nn(a,e,c,b,d));d||this.flush()};
fn.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==on(this,c.ca).status&&!a)return;zk&&D.clearTimeout(c.a[0].timeoutId);break;case "set":Qa(c.a[0],function(n,r){F(eb(n,r),b.i)});break;case "config":var d=c.a[0],e=!!d[I.Yb];delete d[I.Yb];var f=on(this,c.ca),g=Xi(c.ca),h=g.containerId===g.id;e||(h?f.containerConfig={}:f.targetConfig[c.ca]={});f.a&&e||qn(this,I.ka,d,c);f.a=!0;delete d[I.vb];h?F(d,f.containerConfig):
F(d,f.targetConfig[c.ca]);break;case "event":qn(this,c.a[1],c.a[0],c);break;case "get":var l={},m=(l[I.wa]=c.a[0],l[I.va]=c.a[1],l);qn(this,I.Da,m,c);}this.a.shift()}};var rn=function(a,b,c){};var sn=function(a,b,c,d){};var tn=function(a){};var un=function(a,b,c){};var vn=function(a,b){
return!0};var wn=function(a,b){var c;return c};var xn=function(a){};var yn=!1,zn=[];function An(){if(!yn){yn=!0;for(var a=0;a<zn.length;a++)N(zn[a])}}var Bn=function(a){yn?N(a):zn.push(a)};var Cn=function(a){H(this.i.a,["listener:!Fn"],arguments);Ne(this,"process_dom_events","window","load");Bn(wb(a))};var Dn=function(a,b){var c;var d=!1;var e=vb(c,this.m,d);void 0===e&&void 0!==c&&ef(45);return e};var En=function(a){var b;var f=!1;var g=vb(b,this.m,f);void 0===g&&void 0!==b&&ef(45);return g};var Fn=function(a,b){var c=null,d=!1;
return vb(c,this.m,d)};var Gn=function(a){var b;var h=!1;return vb(b,this.m,h)};var Hn=function(a){var b;return b};var In=function(a,b){b=void 0===b?!0:b;var c;return c};var Jn=function(a){var b=null;return b};var Kn=function(a,b){var c;return c};var Ln=function(a,b){var c;return c};var Mn=function(a){var b="";return b};var Nn=function(a){var b="";return b};var Ze=function(){Ne(this,"get_user_agent");return D.navigator.userAgent};var On=function(a,b){};var Pn={},Qn=function(a,b,c,d){H(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Ne(this,"inject_script",a);var e=this.m,f=function(){b instanceof gb&&b.Ka(e)},g=function(){c instanceof gb&&c.Ka(e)};if(!d){Gf(a,f,g);return}var h=d;Pn[h]?(Pn[h].onSuccess.push(f),Pn[h].onFailure.push(g)):(Pn[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Pn[h].onSuccess,m=0;m<l.length;m++)N(l[m]);l.push=function(n){N(n);
return 0}},g=function(){for(var l=Pn[h].onFailure,m=0;m<l.length;m++)N(l[m]);Pn[h]=null},Gf(a,f,g));};var Rn=function(){return!1},Sn={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var Tn=function(){};var Un=function(a,b){var c=!1;return c};var Vn=function(){var a="";return a};var Wn=function(){var a="";return a};var Xn=function(a,b,c){};var Yn=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var Zn=function(a,b,c){H(this.i.a,["path:!string","value:?*","overrideExisting:?boolean"],arguments);Ne(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=D,g;for(g=0;g<e.length-1;g++){f=f[e[g]];if(void 0===f)return!1;}if(void 0===
f[e[g]]||c)return f[e[g]]=wb(b,this.m,d),!0;return!1};var $n=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var ao=function(a,b,c){var d=this;};var bo={},co={};bo.getItem=function(a){var b=null;return b};
bo.setItem=function(a,b){};
bo.removeItem=function(a){};bo.clear=function(){};var eo=function(a){var b;return b};var Mc=function(){var a=new Ye;$i()?(a.add("injectHiddenIframe",Ha),a.add("injectScript",Ha)):(a.add("injectHiddenIframe",On),a.add("injectScript",Qn));var b=Xn;a.add("Math",Ge());a.add("TestHelper",af());a.add("addEventCallback",tn);a.add("aliasInWindow",vn);a.add("assertApi",Ce);a.add("assertThat",De);a.add("callInWindow",
wn);a.add("callLater",xn);a.add("copyFromDataLayer",Dn);a.add("copyFromWindow",En);a.add("createArgumentsQueue",Fn);a.add("createQueue",Gn);a.add("decodeUri",He);a.add("decodeUriComponent",Ie);a.add("encodeUri",Je);a.add("encodeUriComponent",Ke);a.add("fail",Le);a.add("fromBase64",Hn,!("atob"in D));a.add("generateRandom",Me);a.add("getContainerVersion",Oe);a.add("getCookieValues",In);a.add("getQueryParameters",Kn);a.add("getReferrerQueryParameters",Ln);a.add("getReferrerUrl",Mn);a.add("getTimestamp",
Pe);a.add("getTimestampMillis",Pe);a.add("getType",Qe);a.add("getUrl",Nn);a.add("localStorage",Sn,!Rn());a.add("logToConsole",Tn);a.add("makeInteger",Se);a.add("makeNumber",Te);a.add("makeString",Ue);a.add("makeTableMap",Ve);a.add("mock",Xe);a.add("queryPermission",Un);a.add("readCharacterSet",Vn);a.add("readTitle",Wn);a.add("sendPixel",b);a.add("setCookie",Yn);a.add("setInWindow",Zn);a.add("sha256",ao);a.add("templateStorage",bo);a.add("toBase64",eo,!("btoa"in D));a.add("JSON",Re(function(c){var d=this.m.a;d&&d.log.call(this,"error",c)}));
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.i.hasOwnProperty(c))b:{var f=this.m.a;if(f){var g=f.Ab();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.i.hasOwnProperty(c)?a.i[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var Kc,Td;
function fo(){var a=data.runtime||[],b=data.runtime_lines;Kc=new Ic;go();kd=function(e,f,g){ho(f);var h=new mb;Qa(f,function(q,v){var u=vb(v);void 0===u&&void 0!==v&&ef(44);h.set(q,u)});Kc.a.a.B=Gd();var l={Fg:Ud(e),eventId:void 0!==g?g.id:void 0,Ab:function(){return e},log:function(){}};if(Ek()){var m=Fk(),n=void 0,r=void 0;l.da={i:{},a:function(q,v,u){1===v&&(n=q);7===v&&(r=u);m(q,v,u)},m:We()};l.log=function(q,v){if(n){var u=Array.prototype.slice.call(arguments,1);m(n,4,{level:q,source:r,message:u})}}}var t=
Lc(l,[e,h]);Kc.a.a.B=void 0;t instanceof ya&&"return"===t.a&&(t=t.i);return wb(t)};Nc();for(var c=0;c<a.length;c++){var d=a[c];if(!La(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Cd(d,b[c]);Kc.oc(d)}}function ho(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ia(b)&&(a.gtmOnSuccess=function(){N(b)});Ia(c)&&(a.gtmOnFailure=function(){N(c)})}
function go(){var a=Kc;O.SANDBOXED_JS_SEMAPHORE=O.SANDBOXED_JS_SEMAPHORE||0;Oc(a,function(b,c,d){O.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{O.SANDBOXED_JS_SEMAPHORE--}})}function io(a){void 0!==a&&Qa(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Pg[e]=Pg[e]||[];Pg[e].push(b)}})};var jo="HA GF G UA AW DC".split(" "),ko=!1,lo={},mo=!1;function no(a,b){var c={event:a};b&&(c.eventModel=F(b),b[I.Nc]&&(c.eventCallback=b[I.Nc]),b[I.Vb]&&(c.eventTimeout=b[I.Vb]));return c}function oo(){return ko}
var ro={config:function(a){},event:function(a){var b=a[1];if(p(b)&&!(3<a.length)){var c;if(2<a.length){if(!ub(a[2])&&
void 0!=a[2])return;c=a[2]}var d=no(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return mo=!0,oo(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Td.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;2==a.length&&ub(a[1])?b=F(a[1]):3==a.length&&p(a[1])&&(b={},ub(a[2])||La(a[2])?b[a[1]]=F(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}},consent:function(a){function b(){oo()&&F(a[2],{subcommand:a[1]})}if(3===a.length){ef(39);var c=Qg(),d=a[1];"default"===d?(b(),hg(a[2])):"update"===d&&(b(),ig(a[2],c))}}};
ro.get=function(a){};var so={policy:!0};
var to=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},vo=function(a){var b=uo(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Mo=function(a){if(Lo(a))return a;this.a=a};Mo.prototype.oh=function(){return this.a};var Lo=function(a){return!a||"object"!==sb(a)||ub(a)?!1:"getUntrustedUpdateValue"in a};Mo.prototype.getUntrustedUpdateValue=Mo.prototype.oh;var No=[],Oo=!1,Po=function(a){return D["dataLayer"].push(a)},Qo=function(a){var b=O["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};function Ro(a){var b=a._clear;Qa(a,function(d,e){"_clear"!==d&&(b&&Zg(d,void 0),Zg(d,e))});Lg||(Lg=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Qg(),a["gtm.uniqueEventId"]=c,Zg("gtm.uniqueEventId",c));return Uk(a)}
function So(){for(var a=!1;!Oo&&0<No.length;){Oo=!0;delete Tg.eventModel;Vg();var b=No.shift();if(null!=b){var c=Lo(b);if(c){var d=b;b=Lo(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],h=Wg(g,1);if(La(h)||ub(h))h=F(h);Ug[g]=h}}try{if(Ia(b))try{b.call(Xg)}catch(u){}else if(La(b)){var l=
b;if(p(l[0])){var m=l[0].split("."),n=m.pop(),r=l.slice(1),t=Wg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,r)}catch(u){}}}else{if(Ra(b)){a:{var q=b;if(q.length&&p(q[0])){var v=ro[q[0]];if(v&&(!c||!so[q[0]])){b=v(q);break a}}b=void 0}if(!b){Oo=!1;continue}}a=Ro(b)||a}}finally{c&&Vg(!0)}}Oo=!1}return!a}
function To(){var a=So();try{to(D["dataLayer"],Pd.C)}catch(b){}return a}
var Vo=function(){var a=Ef("dataLayer",[]),b=Ef("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Hj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Bn(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<O.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Mo(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);No.push.apply(No,e);if(300<
this.length)for(ef(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return So()&&h};var d=a.slice(0);No.push.apply(No,d);Uo()&&N(To)},Uo=function(){var a=!0;return a};var Wo={};Wo.Zb=new String("undefined");
var Xo=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Wo.Zb?b:a[d]);return c.join("")}};Xo.prototype.toString=function(){return this.a("undefined")};Xo.prototype.valueOf=Xo.prototype.toString;Wo.rg=Xo;Wo.$c={};Wo.Wg=function(a){return new Xo(a)};var Yo={};Wo.Zh=function(a,b){var c=Qg();Yo[c]=[a,b];return c};Wo.Se=function(a){var b=a?0:1;return function(c){var d=Yo[c];if(d&&"function"===typeof d[b])d[b]();Yo[c]=void 0}};Wo.wh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Wo.Rh=function(a){if(a===Wo.Zb)return a;var b=Qg();Wo.$c[b]=a;return'google_tag_manager["'+Pd.C+'"].macro('+b+")"};Wo.Ih=function(a,b,c){a instanceof Wo.rg&&(a=a.a(Wo.Zh(b,c)),b=Ha);return{pd:a,I:b}};var Zo=function(a,b,c){function d(f,g){var h=f[g];return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Mf(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},$o=function(a){O.hasOwnProperty("autoEventsSettings")||(O.autoEventsSettings={});var b=O.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},ap=function(a,b,c){$o(a)[b]=c},bp=function(a,b,c,d){var e=$o(a),f=Xa(e,b,d);e[b]=c(f)},cp=function(a,b,c){var d=$o(a);return Xa(d,b,c)};var dp=["input","select","textarea"],ep=["button","hidden","image","reset","submit"],fp=function(a){var b=a.tagName.toLowerCase();return!Ma(dp,function(c){return c===b})||"input"===b&&Ma(ep,function(c){return c===a.type.toLowerCase()})?!1:!0},gp=function(a){return a.form?a.form.tagName?a.form:L.getElementById(a.form):Pf(a,["form"],100)},hp=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(fp(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var ip=!!D.MutationObserver,jp=void 0,kp=function(a){if(!jp){var b=function(){var c=L.body;if(c)if(ip)(new MutationObserver(function(){for(var e=0;e<jp.length;e++)N(jp[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Kf(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<jp.length;e++)N(jp[e])}))})}};jp=[];L.body?b():N(b)}jp.push(a)};
var vp=function(a,b,c){function d(){var g=a();f+=e?(Wa()-e)*g.playbackRate/1E3:0;e=Wa()}var e=0,f=0;return{nc:function(g,h,l){var m=a(),n=m.Te,r=void 0!==l?Math.round(l):void 0!==h?Math.round(m.Te*h):Math.round(m.Xg),t=void 0!==h?Math.round(100*h):0>=n?0:Math.round(r/n*100),q=L.hidden?!1:.5<=Rl(c);d();var v=Zo(c,"gtm.video",[b]);v["gtm.videoProvider"]="youtube";v["gtm.videoStatus"]=g;v["gtm.videoUrl"]=m.url;v["gtm.videoTitle"]=m.title;v["gtm.videoDuration"]=Math.round(n);v["gtm.videoCurrentTime"]=
Math.round(r);v["gtm.videoElapsedTime"]=Math.round(f);v["gtm.videoPercent"]=t;v["gtm.videoVisible"]=q;Po(v)},ai:function(){e=Wa()},cd:function(){d()}}};var wp=D.clearTimeout,xp=D.setTimeout,S=function(a,b,c){if($i()){b&&N(b)}else return Gf(a,b,c)},yp=function(){return new Date},zp=function(){return D.location.href},Ap=function(a){return kh(mh(a),"fragment")},Bp=function(a){return lh(mh(a))},Cp=function(a,b){return Wg(a,b||2)},Dp=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Po(a)):d=Po(a);return d},Ep=function(a,b){D[a]=b},W=function(a,b,c){b&&
(void 0===D[a]||c&&!D[a])&&(D[a]=b);return D[a]},Fp=function(a,b,c){return qh(a,b,void 0===c?!0:!!c)},Gp=function(a,b,c){return 0===zh(a,b,c)},Hp=function(a,b){if($i()){b&&N(b)}else If(a,b)},Ip=function(a){return!!cp(a,"init",!1)},Jp=function(a){ap(a,"init",!0)},Kp=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Jg;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(bj("https://","http://",c))},Lp=function(a,
b){var c=a[b];return c},Mp=function(a,b,c){zk&&(yb(a)||Dk(c,b,a))};
var Np=Wo.Ih;function jq(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var kq=new Oa;function lq(a,b){function c(g){var h=mh(g),l=kh(h,"protocol"),m=kh(h,"host",!0),n=kh(h,"port"),r=kh(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function mq(a){return nq(a)?1:0}
function nq(a){var b=a.arg0,c=a.arg1;if(a.any_of&&La(c)){for(var d=0;d<c.length;d++){var e=F(a,{});F({arg1:c[d],any_of:void 0},e);if(mq(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(q){}}f=!1}return f;case "_ew":return jq(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=A(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var m;var n=a.ignore_case?"i":void 0;try{var r=String(c)+n,t=kq.get(r);t||(t=new RegExp(c,n),kq.set(r,t));m=t.test(b)}catch(q){m=!1}return m;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return lq(b,c)}return!1};var oq={},pq=encodeURI,X=encodeURIComponent,qq=Jf;var rq=function(a,b){if(!a)return!1;var c=kh(mh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var sq=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};oq.xh=function(){var a=!1;return a};function Br(){return D.gaGlobal=D.gaGlobal||{}}var Cr=function(){var a=Br();a.hid=a.hid||Na();return a.hid},Dr=function(a,b){var c=Br();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var ds=window,es=document,fs=function(a){var b=ds._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===ds["ga-disable-"+a])return!0;try{var c=ds.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=oh("AMP_TOKEN",String(es.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return es.getElementById("__gaOptOutExtension")?!0:!1};function is(a){delete a.eventModel[I.vb];ks(a.eventModel)}
var ks=function(a){Qa(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[I.na]||{};Qa(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var ns=function(a,b,c){hn(b,c,a)},os=function(a,b,c){hn(b,c,a,!0)},qs=function(a,b){};
function ps(a,b){}var Z={b:{}};Z.b.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.g="ctv";Z.__ctv.h=!0;Z.__ctv.priorityOverride=0})(function(){return"38"})}();
Z.b.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var B=[],z=x.split(","),C=0;C<z.length;C++){var E=Number(z[C]);if(isNaN(E))return[];n.test(z[C])||B.push(E)}return B}function c(){var x=0,B=0;return function(){var z=Ql(),C=z.height;x=Math.max(u.scrollLeft+z.width,x);B=Math.max(u.scrollTop+C,B);return{Zg:x,$g:B}}}function d(){q=W("self");
v=q.document;u=v.scrollingElement||v.body&&v.body.parentNode;y=c()}function e(x,B,z,C){var E=l(B),G={},M;for(M in E){G.Oa=M;if(E.hasOwnProperty(G.Oa)){var P=Number(G.Oa);x<P||(Dp({event:"gtm.scrollDepth","gtm.scrollThreshold":P,"gtm.scrollUnits":z.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":E[G.Oa].join(",")}),bp("sdl",B,function(ba){return function(ca){delete ca[ba.Oa];return ca}}(G),{}))}G={Oa:G.Oa}}}function f(){var x=y(),B=x.Zg,z=x.$g,C=B/u.scrollWidth*100,E=z/u.scrollHeight*100;e(B,
"horiz.pix",r.ac,t.ze);e(C,"horiz.pct",r.$b,t.ze);e(z,"vert.pix",r.ac,t.Le);e(E,"vert.pct",r.$b,t.Le);ap("sdl","pending",!1)}function g(){var x=250,B=!1;v.scrollingElement&&v.documentElement&&q.addEventListener&&(x=50,B=!0);var z=0,C=!1,E=function(){C?z=xp(E,x):(z=0,f(),Ip("sdl")&&!a()&&(Lf(q,"scroll",G),Lf(q,"resize",G),ap("sdl","init",!1)));C=!1},G=function(){B&&y();z?C=!0:(z=xp(E,x),ap("sdl","pending",!0))};return G}function h(x,B,z){if(B){var C=b(String(x));bp("sdl",z,function(E){for(var G=0;G<
C.length;G++){var M=String(C[G]);E.hasOwnProperty(M)||(E[M]=[]);E[M].push(B)}return E},{})}}function l(x){return cp("sdl",x,{})}function m(x){N(x.vtp_gtmOnSuccess);var B=x.vtp_uniqueTriggerId,z=x.vtp_horizontalThresholdsPixels,C=x.vtp_horizontalThresholdsPercent,E=x.vtp_verticalThresholdUnits,G=x.vtp_verticalThresholdsPixels,M=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case r.ac:h(z,B,"horiz.pix");break;case r.$b:h(C,B,"horiz.pct")}switch(E){case r.ac:h(G,B,"vert.pix");
break;case r.$b:h(M,B,"vert.pct")}Ip("sdl")?cp("sdl","pending")||(w||(d(),w=!0),N(function(){return f()})):(d(),w=!0,u&&(Jp("sdl"),ap("sdl","pending",!0),N(function(){f();if(a()){var P=g();Kf(q,"scroll",P);Kf(q,"resize",P)}else ap("sdl","init",!1)})))}var n=/^\s*$/,r={$b:"PERCENT",ac:"PIXELS"},t={Le:"vertical",ze:"horizontal"},q,v,u,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.g="sdl";Z.__sdl.h=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):Bn(function(){m(x)})})}();

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");var d=c&&c.e&&c.e(b);Mp(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){Mp(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(ah(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=Cp("gtm.referrer",1)||L.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?kh(mh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Bp(String(b)):String(b)})}();
Z.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Zo(c,"gtm.click");Dp(d)}}(function(b){Z.__cl=b;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.priorityOverride=0})(function(b){if(!Ip("cl")){var c=W("document");Kf(c,"click",a,!0);Jp("cl")}N(b.vtp_gtmOnSuccess)})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,r,t){if(!p(t))throw d(n,{},"Key must be a string.");if("read"===r){if(-1<A(e,t))return}else if("write"===r){if(-1<A(f,t))return}else if("readwrite"===r){if(-1<A(f,t)&&-1<A(e,t))return}else if("execute"===r){if(-1<A(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(n,{},"Prohibited "+r+" on global variable: "+
t+".");},K:a}})}();Z.b.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.priorityOverride=0})(function(a){return Na(a.vtp_min,a.vtp_max)})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Cp("gtm.url",1);c=c||zp();var d=b[a("vtp_component")];if(!d||"URL"==d)return Bp(String(c));var e=mh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?La(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var n=0;n<m.length;n++){var r=kh(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=kh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Cp(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Mp(d,"v",a.vtp_gtmEventId);return d})}();
Z.b.ua=["google"],function(){function a(m,n){if(cg()&&!d[m]){var r=function(){var t=Vj(),q="gtm"+Qg(),v=h(n),u={name:q};g(v,u,!0);t("create",m,u);t(function(){t.remove(q)})};fg(r,I.M);fg(r,I.o);d[m]=!0}}var b,c={},d={},e={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,
_cd2l:!0},f={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},g=function(m,n,r){var t=0;if(m)for(var q in m)if(m.hasOwnProperty(q)&&(r&&e[q]||!r&&void 0===e[q])){var v=f[q]?Ta(m[q]):m[q];"anonymizeIp"!=q||v||(v=void 0);n[q]=v;t++}return t},h=function(m){var n={};m.vtp_gaSettings&&F(sq(m.vtp_gaSettings.vtp_fieldsToSet,
"fieldName","value"),n);F(sq(m.vtp_fieldsToSet,"fieldName","value"),n);jg(I.M)||(n.storage="none");jg(I.o)||(n.allowAdFeatures=!1,n.storeGac=!1);Km()||(n.allowAdFeatures=!1);Jm()||(n.allowAdPersonalizationSignals=!1);m.vtp_transportUrl&&(n._x_19=m.vtp_transportUrl);return n},l=function(m){function n(ra,R){void 0!==R&&C("set",ra,R)}var r={},t={},q={},v={};if(m.vtp_gaSettings){var u=
m.vtp_gaSettings;F(sq(u.vtp_contentGroup,"index","group"),t);F(sq(u.vtp_dimension,"index","dimension"),q);F(sq(u.vtp_metric,"index","metric"),v);var w=F(u);w.vtp_fieldsToSet=void 0;w.vtp_contentGroup=void 0;w.vtp_dimension=void 0;w.vtp_metric=void 0;m=F(m,w)}F(sq(m.vtp_contentGroup,"index","group"),t);F(sq(m.vtp_dimension,"index","dimension"),q);F(sq(m.vtp_metric,"index","metric"),v);var y=h(m),x=Xj(m.vtp_functionName);if(Ia(x)){var B="",z="";m.vtp_setTrackerName&&"string"==typeof m.vtp_trackerName?
""!==m.vtp_trackerName&&(z=m.vtp_trackerName,B=z+"."):(z="gtm"+Qg(),B=z+".");var C=function(ra){var R=[].slice.call(arguments,0);R[0]=B+R[0];x.apply(window,R)},E=function(ra,R){return void 0===R?R:ra(R)},G=function(ra,R){if(R)for(var Za in R)R.hasOwnProperty(Za)&&C("set",ra+Za,R[Za])},M=function(){var ra=function(us,$l,vs){if(!ub($l))return!1;for(var de=Xa(Object($l),vs,[]),Kh=0;de&&Kh<de.length;Kh++)C(us,de[Kh]);return!!de&&0<
de.length},R;if(m.vtp_useEcommerceDataLayer){var Za=!1;Za||(R=Cp("ecommerce",1))}else m.vtp_ecommerceMacroData&&(R=m.vtp_ecommerceMacroData.ecommerce);if(!ub(R))return;R=Object(R);var Eb=Xa(y,"currencyCode",R.currencyCode);void 0!==Eb&&C("set","&cu",Eb);ra("ec:addImpression",R,"impressions");if(ra("ec:addPromo",R[R.promoClick?"promoClick":
"promoView"],"promotions")&&R.promoClick){C("ec:setAction","promo_click",R.promoClick.actionField);return}for(var Fb="detail checkout checkout_option click add remove purchase refund".split(" "),Gb="refund purchase remove checkout checkout_option add click detail".split(" "),db=0;db<Fb.length;db++){var Ka=R[Fb[db]];if(Ka){ra("ec:addProduct",Ka,"products");C("ec:setAction",Fb[db],Ka.actionField);if(zk)for(var Hb=0;Hb<Gb.length;Hb++){var hd=R[Gb[Hb]];if(hd){hd!==Ka&&ef(13);break}}break}}},
P={name:z};g(y,P,!0);var ba=m.vtp_trackingId||r.trackingId;x("create",ba,P);C("set","&gtm",jl(!0));cg()&&(C("set","&gcs",kg()),a(ba,m));y._x_19&&(null==Df&&delete y._x_19,y._x_20&&!c[z]&&(c[z]=!0,x(bk(z,String(y._x_20)))));m.vtp_enableRecaptcha&&C("require","recaptcha","recaptcha.js");(function(ra,R){void 0!==m[R]&&C("set",ra,m[R])})("nonInteraction","vtp_nonInteraction");
G("contentGroup",t);G("dimension",q);G("metric",v);var ca={};g(y,ca,!1)&&C("set",ca);var ea;m.vtp_enableLinkId&&C("require","linkid","linkid.js");C("set","hitCallback",function(){var ra=y&&y.hitCallback;Ia(ra)&&ra();m.vtp_gtmOnSuccess()});if("TRACK_EVENT"==m.vtp_trackType){
m.vtp_enableEcommerce&&(C("require","ec","ec.js"),M());var J={hitType:"event",eventCategory:String(m.vtp_eventCategory||r.category),eventAction:String(m.vtp_eventAction||r.action),eventLabel:E(String,m.vtp_eventLabel||r.label),eventValue:E(Sa,m.vtp_eventValue||r.value)};g(ea,J,!1);C("send",J);}else if("TRACK_SOCIAL"==m.vtp_trackType){}else if("TRACK_TRANSACTION"==m.vtp_trackType){}else if("TRACK_TIMING"==m.vtp_trackType){}else if("DECORATE_LINK"==m.vtp_trackType){}else if("DECORATE_FORM"==m.vtp_trackType){}else if("TRACK_DATA"==
m.vtp_trackType){}else{m.vtp_enableEcommerce&&(C("require","ec","ec.js"),M());if(m.vtp_doubleClick||"DISPLAY_FEATURES"==m.vtp_advertisingFeaturesType){var ua="_dc_gtm_"+String(m.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");C("require","displayfeatures",void 0,{cookieName:ua})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==m.vtp_advertisingFeaturesType){var ib=
"_dc_gtm_"+String(m.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");C("require","adfeatures",{cookieName:ib})}ea?C("send","pageview",ea):C("send","pageview");m.vtp_autoLinkDomains&&Yj(B,m.vtp_autoLinkDomains,!!m.vtp_useHashAutoLink,!!m.vtp_decorateFormsAutoLink);}if(!b){var jb=m.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";m.vtp_useInternalVersion&&!m.vtp_useDebugVersion&&
(jb="internal/"+jb);b=!0;var Tb=Wk(y._x_19,"/analytics.js"),ce=bj("https:","http:","//www.google-analytics.com/"+jb,y&&!!y.forceSSL);S("analytics.js"===jb&&Tb?Tb:ce,function(){var ra=Vj();ra&&ra.loaded||m.vtp_gtmOnFailure();},m.vtp_gtmOnFailure)}}else N(m.vtp_gtmOnFailure)};(function(m){Z.__ua=m;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0})(function(m){lg(function(){l(m)},
[I.M,I.o])})}();


Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!p(f))throw d(e,{},"Script URL must be a string.");try{if(te(mh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();


Z.b.ytl=["google"],function(){function a(){var u=Math.round(1E9*Math.random())+"";return L.getElementById(u)?a():u}function b(u,w){if(!u)return!1;for(var y=0;y<r.length;y++)if(0<=u.indexOf("//"+r[y]+"/"+w))return!0;return!1}function c(u){var w=-1!==u.indexOf("?")?"&":"?";if(-1<u.indexOf("origin="))return u+w+"enablejsapi=1";if(!q){var y=W("document");q=y.location.protocol+"//"+y.location.hostname;y.location.port&&(q+=":"+y.location.port)}return u+w+"enablejsapi=1&origin="+encodeURIComponent(q)}function d(u,
w){var y=u.getAttribute("src");if(b(y,"embed/")){if(0<y.indexOf("enablejsapi=1"))return!0;if(w)return u.setAttribute("src",c(y)),!0}return!1}function e(u,w){if(!u.getAttribute("data-gtm-yt-inspected-"+w.Ld)&&(u.setAttribute("data-gtm-yt-inspected-"+w.Ld,"true"),d(u,w.Xe))){u.id||(u.id=a());var y=W("YT"),x=y.get(u.id);x||(x=new y.Player(u.id));var B=g(x,w),z={},C;for(C in B)z.$a=C,B.hasOwnProperty(z.$a)&&x.addEventListener(z.$a,function(E){return function(G){return B[E.$a](G.data)}}(z)),z={$a:z.$a}}}
function f(u){N(function(){function w(){for(var x=y.getElementsByTagName("iframe"),B=x.length,z=0;z<B;z++)e(x[z],u)}var y=W("document");w();kp(w)})}function g(u,w){var y,x;function B(){ea=vp(function(){return{url:Q,title:Y,Te:K,Xg:u.getCurrentTime(),playbackRate:V}},w.Ld,u.getIframe());K=0;Y=Q="";V=1;return z}function z(U){switch(U){case t.PLAYING:K=Math.round(u.getDuration());Q=u.getVideoUrl();if(u.getVideoData){var ua=u.getVideoData();Y=ua?ua.title:""}V=u.getPlaybackRate();w.Qg?ea.nc("start"):ea.cd();
J=m(w.Th,w.Sh,u.getDuration());return C(U);default:return z}}function C(){wa=u.getCurrentTime();T=yp().getTime();ea.ai();ca();return E}function E(U){var ua;switch(U){case t.ENDED:return M(U);case t.PAUSED:ua="pause";case t.BUFFERING:var ib=u.getCurrentTime()-wa;ua=1<Math.abs((yp().getTime()-T)/1E3*V-ib)?"seek":ua||"buffering";u.getCurrentTime()&&(w.Pg?ea.nc(ua):ea.cd());ba();return G;case t.UNSTARTED:return B(U);default:return E}}function G(U){switch(U){case t.ENDED:return M(U);case t.PLAYING:return C(U);
case t.UNSTARTED:return B(U);default:return G}}function M(){for(;x;){var U=y;wp(x);U()}w.Og&&ea.nc("complete",1);return B(t.UNSTARTED)}function P(){}function ba(){x&&(wp(x),x=0,y=P)}function ca(){if(J.length&&0!==V){var U=-1,ua;do{ua=J[0];if(ua.La>u.getDuration())return;U=(ua.La-u.getCurrentTime())/V;if(0>U&&(J.shift(),0===J.length))return}while(0>U);y=function(){x=0;y=P;0<J.length&&J[0].La===ua.La&&(J.shift(),ea.nc("progress",ua.df,ua.jf));ca()};x=xp(y,1E3*U)}}var ea,J=[],K,Q,Y,V,wa,T,qa=B(t.UNSTARTED);
x=0;y=P;return{onStateChange:function(U){qa=qa(U)},onPlaybackRateChange:function(U){wa=u.getCurrentTime();T=yp().getTime();ea.cd();V=U;ba();ca()}}}function h(u){for(var w=u.split(","),y=w.length,x=[],B=0;B<y;B++){var z=parseInt(w[B],10);isNaN(z)||100<z||0>z||x.push(z/100)}x.sort(function(C,E){return C-E});return x}function l(u){for(var w=u.split(","),y=w.length,x=[],B=0;B<y;B++){var z=parseInt(w[B],10);isNaN(z)||0>z||x.push(z)}x.sort(function(C,E){return C-E});return x}function m(u,w,y){var x=u.map(function(C){return{La:C,
jf:C,df:void 0}});if(!w.length)return x;var B=w.map(function(C){return{La:C*y,jf:void 0,df:C}});if(!x.length)return B;var z=x.concat(B);z.sort(function(C,E){return C.La-E.La});return z}function n(u){var w=!!u.vtp_captureStart,y=!!u.vtp_captureComplete,x=!!u.vtp_capturePause,B=h(u.vtp_progressThresholdsPercent+""),z=l(u.vtp_progressThresholdsTimeInSeconds+""),C=!!u.vtp_fixMissingApi;if(w||y||x||B.length||z.length){var E={Qg:w,Og:y,Pg:x,Sh:B,Th:z,Xe:C,Ld:void 0===u.vtp_uniqueTriggerId?"":u.vtp_uniqueTriggerId},
G=W("YT"),M=function(){f(E)};N(u.vtp_gtmOnSuccess);if(G)G.ready&&G.ready(M);else{var P=W("onYouTubeIframeAPIReady");Ep("onYouTubeIframeAPIReady",function(){P&&P();M()});N(function(){for(var ba=W("document"),ca=ba.getElementsByTagName("script"),ea=ca.length,J=0;J<ea;J++){var K=ca[J].getAttribute("src");if(b(K,"iframe_api")||b(K,"player_api"))return}for(var Q=ba.getElementsByTagName("iframe"),Y=Q.length,V=0;V<Y;V++)if(!v&&d(Q[V],E.Xe)){S("https://www.youtube.com/iframe_api");v=!0;break}})}}else N(u.vtp_gtmOnSuccess)}
var r=["www.youtube.com","www.youtube-nocookie.com"],t={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},q,v=!1;(function(u){Z.__ytl=u;Z.__ytl.g="ytl";Z.__ytl.h=!0;Z.__ytl.priorityOverride=0})(function(u){u.vtp_triggerStartOption?n(u):Hj(function(){n(u)})})}();
Z.b.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.g="cid";Z.__cid.h=!0;Z.__cid.priorityOverride=0})(function(){return Pd.C})}();


Z.b.aev=["google"],function(){function a(q,v){var u=ah(q,"gtm");if(u)return u[v]}function b(q,v,u,w){w||(w="element");var y=q+"."+v,x;if(n.hasOwnProperty(y))x=n[y];else{var B=a(q,w);if(B&&(x=u(B),n[y]=x,r.push(y),35<r.length)){var z=r.shift();delete n[z]}}return x}function c(q,v,u){var w=a(q,t[v]);return void 0!==w?w:u}function d(q,v){if(!q)return!1;var u=e(zp());La(v)||(v=String(v||"").replace(/\s+/g,"").split(","));for(var w=[u],y=0;y<v.length;y++){var x=v[y];if(x.hasOwnProperty("is_regex"))if(x.is_regex)try{x=
new RegExp(x.domain)}catch(z){continue}else x=x.domain;if(x instanceof RegExp){if(x.test(q))return!1}else{var B=x;if(0!=B.length){if(0<=e(q).indexOf(B))return!1;w.push(e(B))}}}return!rq(q,w)}function e(q){m.test(q)||(q="http://"+q);return kh(mh(q),"HOST",!0)}function f(q,v,u){switch(q){case "SUBMIT_TEXT":return b(v,"FORM."+q,g,"formSubmitElement")||u;case "LENGTH":var w=b(v,"FORM."+q,h);return void 0===w?u:w;case "INTERACTED_FIELD_ID":return l(v,"id",u);case "INTERACTED_FIELD_NAME":return l(v,"name",
u);case "INTERACTED_FIELD_TYPE":return l(v,"type",u);case "INTERACTED_FIELD_POSITION":var y=a(v,"interactedFormFieldPosition");return void 0===y?u:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(v,"interactSequenceNumber");return void 0===x?u:x;default:return u}}function g(q){switch(q.tagName.toLowerCase()){case "input":return Mf(q,"value");case "button":return Nf(q);default:return null}}function h(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var v=0,u=0;u<q.elements.length;u++)fp(q.elements[u])&&
v++;return v}}function l(q,v,u){var w=a(q,"interactedFormField");return w&&Mf(w,v)||u}var m=/^https?:\/\//i,n={},r=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=
0})(function(q){var v=q.vtp_gtmEventId,u=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(v,"element");return y&&y.tagName||u;case "TEXT":return b(v,w,Nf)||u;case "URL":var x;a:{var B=String(a(v,"elementUrl")||u||""),z=mh(B),C=String(q.vtp_component||"URL");switch(C){case "URL":x=B;break a;case "IS_OUTBOUND":x=d(B,q.vtp_affiliatedDomains);break a;default:x=kh(z,C,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(v,
w,u);else{var G=q.vtp_attribute,M=a(v,"element");E=M&&Mf(M,G)||u||""}return E;case "MD":var P=q.vtp_mdValue,ba=b(v,"MD",rp);return P&&ba?up(ba,P)||u:ba||u;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),v,u);default:var ca=c(v,w,u);Mp(ca,"aev",q.vtp_gtmEventId);return ca}})}();Z.b.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(a){var b=F(a),c=b;c[Ad.Ga]=null;c[Ad.jg]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.b.fsl=[],function(){function a(){var e=W("document"),f=c(),g=HTMLFormElement.prototype.submit;Kf(e,"click",function(h){var l=h.target;if(l&&(l=Pf(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Mf(l,"value")){var m;l.form?l.form.tagName?m=l.form:m=L.getElementById(l.form):m=Pf(l,["form"],100);m&&f.store(m,l)}},!1);Kf(e,"submit",function(h){var l=h.target;if(!l)return h.returnValue;var m=h.defaultPrevented||!1===h.returnValue,n=b(l)&&!m,r=f.get(l),t=!0;if(d(l,function(){if(t){var q;
r&&(q=e.createElement("input"),q.type="hidden",q.name=r.name,q.value=r.value,l.appendChild(q));g.call(l);q&&l.removeChild(q)}},m,n,r))t=!1;else return m||(h.preventDefault&&h.preventDefault(),h.returnValue=!1),!1;return h.returnValue},!1);HTMLFormElement.prototype.submit=function(){var h=this,l=b(h),m=!0;d(h,function(){m&&g.call(h)},!1,l)&&(g.call(h),m=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(g){return Ma(e,function(h){return h.form===
g})};return{store:function(g,h){var l=f(g);l?l.button=h:e.push({form:g,button:h})},get:function(g){var h=f(g);return h?h.button:null}}}function d(e,f,g,h,l){var m=cp("fsl",g?"nv.mwt":"mwt",0),n;n=g?cp("fsl","nv.ids",[]):cp("fsl","ids",[]);if(!n.length)return!0;var r=Zo(e,"gtm.formSubmit",n),t=e.action;t&&t.tagName&&(t=e.cloneNode(!1).action);r["gtm.elementUrl"]=t;l&&(r["gtm.formSubmitElement"]=l);if(h&&m){if(!Dp(r,Qo(f),m))return!1}else Dp(r,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.g=
"fsl";Z.__fsl.h=!0;Z.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,g=e.vtp_checkValidation,h=Number(e.vtp_waitForTagsTimeout);if(!h||0>=h)h=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(r){return Math.max(h,r)};bp("fsl","mwt",m,0);g||bp("fsl","nv.mwt",m,0)}var n=function(r){r.push(l);return r};bp("fsl","ids",n,[]);g||bp("fsl","nv.ids",n,[]);Ip("fsl")||(a(),Jp("fsl"));N(e.vtp_gtmOnSuccess)})}();Z.b.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.g="smm";Z.__smm.h=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=sq(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;Mp(d,"smm",a.vtp_gtmEventId);return d})}();



Z.b.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.priorityOverride=0})(function(a){N(a.vtp_gtmOnFailure)})}();
Z.b.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.g="hid";Z.__hid.h=!0;Z.__hid.priorityOverride=0})(function(){return Wo.Zb})}();
Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=L.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var n=h.getAttribute("data-gtmsrc");n&&(m.src=n,Ff(m,l));d.insertBefore(m,null);n||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];h.firstChild;)r.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,r,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){N(g)}}}var c=function(d){if(L.body){var e=
d.vtp_gtmOnFailure,f=Np(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.pd,h=f.I;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(L.body,Of(g),h,e)()}else xp(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();

Z.b.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.g="dbg";Z.__dbg.h=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();




Z.b.lcl=[],function(){function a(){var c=W("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.vh||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=Pf(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=cp("lcl",h?"nv.mwt":"mwt",0),m;m=h?cp("lcl","nv.ids",[]):cp("lcl","ids",[]);if(m.length){var n=Zo(g,"gtm.linkClick",m);if(b(f,g,c)&&!h&&l&&g.href){var r=String(Lp(g,"rel")||""),t=!!Ma(r.split(" "),function(u){return"noreferrer"===u.toLowerCase()});
t&&ef(36);var q=W((Lp(g,"target")||"_self").substring(1)),v=!0;if(Dp(n,Qo(function(){var u;if(u=v&&q){var w;a:if(t){var y;try{y=new MouseEvent(f.type)}catch(x){if(!c.createEvent){w=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.vh=!0;f.target.dispatchEvent(y);w=!0}else w=!1;u=!w}u&&(q.location.href=Lp(g,"href"))}),l))v=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Dp(n,function(){},l||2E3);return!0}}};Kf(c,"click",e,!1);Kf(c,"auxclick",e,!1)}function b(c,
d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=Lp(d,"href"),g=f.indexOf("#"),h=Lp(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=Bp(f),m=Bp(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.g="lcl";Z.__lcl.h=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;
var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(m){return Math.max(f,m)};bp("lcl","mwt",h,0);e||bp("lcl","nv.mwt",h,0)}var l=function(m){m.push(g);return m};bp("lcl","ids",l,[]);e||bp("lcl","nv.ids",l,[]);Ip("lcl")||(a(),Jp("lcl"));N(c.vtp_gtmOnSuccess)})}();


var rs={};rs.macro=function(a){if(Wo.$c.hasOwnProperty(a))return Wo.$c[a]},rs.onHtmlSuccess=Wo.Se(!0),rs.onHtmlFailure=Wo.Se(!1);rs.dataLayer=Xg;rs.callback=function(a){Og.hasOwnProperty(a)&&Ia(Og[a])&&Og[a]();delete Og[a]};function ss(){O[Pd.C]=rs;$a(Pg,Z.b);sd=sd||Wo;td=Ld}
function ts(){Sf.gtm_3pds=!0;Sf.gtag_cs_api=!0;O=D.google_tag_manager=D.google_tag_manager||{};Jl();if(O[Pd.C]){var a=O.zones;a&&a.unregisterChild(Pd.C);}else{for(var b=data.resource||{},c=b.macros||[],d=
0;d<c.length;d++)ld.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)od.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)nd.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},t=0;t<n.length;t++)r[n[t][0]]=Array.prototype.slice.call(n[t],1);md.push(r)}qd=Z;rd=mq;var q=data.permissions||{},v=data.sandboxed_scripts,u=data.security_groups;fo();Td=new Sd(q);if(void 0!==v)for(var w=["sandboxedScripts"],y=0;y<v.length;y++){var x=v[y].replace(/^_*/,"");Pg[x]=w}io(u);ss();Vo();
Cj=!1;Dj=0;if("interactive"==L.readyState&&!L.createEventObject||"complete"==L.readyState)Fj();else{Kf(L,"DOMContentLoaded",Fj);Kf(L,"readystatechange",Fj);if(L.createEventObject&&L.documentElement.doScroll){var B=!0;try{B=!D.frameElement}catch(G){}B&&Gj()}Kf(D,"load",Fj)}yn=!1;"complete"===L.readyState?An():Kf(D,"load",An);
a:{if(!zk)break a;D.setInterval(Ak,864E5);}Mg=(new Date).getTime();}}
(function(a){var b=!0;b=!1;if(b){a();return}var c=function(){var g=D["google.tagmanager.debugui2.queue"];g||(g=[],D["google.tagmanager.debugui2.queue"]=g,Gf("https://www.googletagmanager.com/debug/bootstrap"));
return g},d="x"===kh(D.location,"query",!1,void 0,"gtm_debug");if(!d&&L.referrer){var e=mh(L.referrer);d="tagassistant.google.com"===jh(e,"host")}if(!d){var f=qh("__TAG_ASSISTANT");d=f.length&&f[0].length}D.__TAG_ASSISTANT_API&&(d=!0);if(d&&Df){c().push({messageType:"CONTAINER_STARTING",data:{scriptSource:Df,resume:function(){a()}}});return}a()})(ts);

})()
