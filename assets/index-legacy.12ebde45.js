!function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}System.register(["./index-legacy.6324f6e7.js"],(function(t){"use strict";var n;return{setters:[function(e){n=e.r}],execute:function(){var r="/api/setting/basicInfo",o="/api/personal/tags";t("S",function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}var i,s,a;return i=t,a=[{key:"postSetBasicInfo",value:function(e){return n({url:r,method:"post",json:!0,data:e}).then((function(e){return 0===e.status?Promise.resolve(e):Promise.reject(e)}))}},{key:"getPersonTags",value:function(){return n({url:o,method:"get",json:!0}).then((function(e){return 0===e.status?Promise.resolve(e):Promise.reject(e)}))}}],(s=null)&&e(i.prototype,s),a&&e(i,a),Object.defineProperty(i,"prototype",{writable:!1}),t}())}}}))}();