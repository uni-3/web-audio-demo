(function(e){function t(t){for(var o,r,u=t[0],a=t[1],s=t[2],l=0,d=[];l<u.length;l++)r=u[l],c[r]&&d.push(c[r][0]),c[r]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},c={app:0},i=[];function u(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"87b1eb7a"}[e]+".js"}function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"16774877"}[e]+".css",c=a.p+o,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===c))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===o||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.request=o,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=c;var A=document.getElementsByTagName("head")[0];A.appendChild(f)}).then(function(){r[e]=0}));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise(function(t,n){o=c[e]=[t,n]});t.push(o[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=u(e),s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");i.type=o,i.request=r,n[1](i)}c[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"21bb":function(e,t,n){"use strict";var o=n("bcc9"),r=n.n(o);r.a},"43f2":function(e,t){e.exports="data:image/jpeg;base64,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"},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(e,t,n){},"830e":function(e,t,n){"use strict";var o=n("bee2"),r=n.n(o);r.a},bcc9:function(e,t,n){},bee2:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/counter"}},[e._v("Counter")])],1),n("router-view")],1)},c=[],i=(n("5c0b"),n("2877")),u={},a=Object(i["a"])(u,r,c,!1,null,null,null),s=a.exports,l=n("8c4f"),d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"contents"},[o("img",{attrs:{alt:"Vue logo",src:n("43f2")}}),o("TextArea")],1)},f=[],A=n("d225"),p=n("308d"),b=n("6bb5"),g=n("4e2b"),E=n("9ab4"),h=n("60a3"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"audio-text-area"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),n("div",{staticClass:"buttons"},[n("button",{staticClass:"recognition",on:{click:e.startRecognize}},[e._v("\n     "+e._s(e.recognitionText)+"\n    ")]),n("button",{staticClass:"download",on:{click:e.downloadText}},[e._v("\n      テキストダウンロード\n    ")])])])},m=[],x=(n("1468"),{data:function(){return{text:"",recognition:new webkitSpeechRecognition,recognitionText:"入力開始する"}},methods:{startRecognize:function(){console.log("start recog"),this.recognition.lang="ja",this.recognition.start()},downloadText:function(){var e=new Blob([this.text],{type:"text/txt"}),t=document.createElement("a");t.href=window.URL.createObjectURL(e),t.download="Result.txt",t.click()}},created:function(){var e=this;this.recognition.onstart=function(){e.recognitionText="入力中..."},this.recognition.onend=function(){e.recognitionText="入力開始"},this.recognition.onerror=function(t){"no-speech"===t.error&&e.recognition.stop()},this.recognition.onend=function(t){e.startRecognize()},this.recognition.onresult=function(t){t.results.length>0&&(console.log("result",t.results),e.text+=ms(t.results[0][0].timestamp),e.text+="\t",e.text+=t.results[0][0].transcript,e.text+="\n")}}}),y=x,R=(n("830e"),Object(i["a"])(y,v,m,!1,null,null,null)),B=R.exports,O=function(e){function t(){return Object(A["a"])(this,t),Object(p["a"])(this,Object(b["a"])(t).apply(this,arguments))}return Object(g["a"])(t,e),t}(h["b"]);O=E["a"]([Object(h["a"])({components:{TextArea:B}})],O);var w=O,j=w,k=(n("21bb"),Object(i["a"])(j,d,f,!1,null,null,null)),q=k.exports;o["default"].use(l["a"]);var X=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:q},{path:"/counter",name:"counter",component:function(){return n.e("about").then(n.bind(null,"80d5"))}}]}),C=n("2f62");o["default"].use(C["a"]);var U=new C["a"].Store({state:{},mutations:{},actions:{}}),H=n("9483");Object(H["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var K=n("ce19");o["default"].use(K["a"]),o["default"].config.productionTip=!1,new o["default"]({router:X,store:U,render:function(e){return e(s)}}).$mount("#app")}});
//# sourceMappingURL=app.106f2d0a.js.map