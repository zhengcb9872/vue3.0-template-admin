!function(){var e=document.createElement("style");e.innerHTML=".editorWrapper[data-v-489a425e]{margin-top:20px}.editorWrapper[data-v-489a425e] .w-e-text-container{text-align:left}.editorWrapper .info[data-v-489a425e]{text-align:left;padding-left:20px;margin-bottom:20px;font-size:12px}.editorWrapper .section[data-v-489a425e]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.editorWrapper .el-row[data-v-489a425e]{margin-bottom:20px}\n",document.head.appendChild(e),System.register(["./richEditor-legacy.3188d4af.js","./index-legacy.09fc8e70.js","./vendor-legacy.4e38836e.js"],(function(e){"use strict";var t,n,a,r,i,o,l,d,u,c,f,s,p;return{setters:[function(e){t=e.R},function(e){n=e._},function(e){a=e.d,r=e.r,i=e.j,o=e.e,l=e.c,d=e.g,u=e.s,c=e.m,f=e.J,s=e.p,p=e.f}],execute:function(){var v=a({components:{RichEditor:t},setup:function(){var e=r("默认数据"),t=r();setTimeout((function(){e.value="3秒后的数据"}),3e3);return{handleUpdateValue:function(e){console.log(e),t.value=e},editorValue:e}}}),g=function(e){return s("data-v-489a425e"),e=e(),p(),e},m={class:"editorWrapper"},x={class:"info"},y=f("富文本编辑器"),h=g((function(){return d("span",{style:{"text-align":"left"}},"富文本编辑器编辑场景。",-1)})),_={class:"grid-content bg-purple-dark"},V={style:{"text-align":"left"}},W=g((function(){return d("span",null,"富文本编辑器",-1)}));e("default",n(v,[["render",function(e,t,n,a,r,f){var s=i("el-divider"),p=i("RichEditor",!0),v=i("el-card"),g=i("el-col"),j=i("el-row");return o(),l("div",m,[d("div",x,[u(s,{"content-position":"left"},{default:c((function(){return[y]})),_:1}),h]),d("div",null,[u(j,null,{default:c((function(){return[u(g,{offset:1,span:22},{default:c((function(){return[d("div",_,[u(v,{class:"box-card"},{default:c((function(){return[d("div",V,[W,u(s)]),u(p,{"model-value":e.editorValue,"onUpdate:modelValue":e.handleUpdateValue},null,8,["model-value","onUpdate:modelValue"])]})),_:1})])]})),_:1})]})),_:1})])])}],["__scopeId","data-v-489a425e"]]))}}}))}();
