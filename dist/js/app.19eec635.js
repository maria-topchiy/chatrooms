(function(e){function t(t){for(var r,i,u=t[0],c=t[1],l=t[2],s=0,f=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return u.p+"js/"+({login:"login"}[e]||e)+"."+{login:"ad03f10a"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/login"}},[e._v("Login")]),n("router-link",{attrs:{to:"/reg"}},[e._v("Registration")]),n("router-link",{attrs:{to:"/chats"}},[e._v("Chats")])],1),n("div",{attrs:{id:"page"}},[n("router-view")],1)])},a=[],i=(n("034f"),n("2877")),u={},c=Object(i["a"])(u,o,a,!1,null,null,null),l=c.exports,s=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",[n("p",[n("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),n("p",[n("router-link",{attrs:{to:"/reg"}},[e._v("Registration")])],1),n("p",[n("router-link",{attrs:{to:"/chats"}},[e._v("Chats")])],1)])])},f=[],d={},h=Object(i["a"])(d,p,f,!1,null,null,null),g=h.exports;r["a"].use(s["a"]);var v=[{path:"/",name:"Home",component:g},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/reg",name:"Registration",component:function(){return n.e("login").then(n.bind(null,"b8b8"))}},{path:"/chats",name:"Chats",component:function(){return n.e("login").then(n.bind(null,"c98b"))}}],b=new s["a"]({mode:"history",base:"/",routes:v}),m=b,_=n("ca94");r["a"].config.productionTip=!1,new r["a"]({router:m,apolloProvider:Object(_["a"])(),render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){},ca94:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n("1da1"),o=n("5530"),a=(n("96cf"),n("2b0e")),i=n("522d"),u=n("efe7");a["a"].use(i["a"]);var c="apollo-token",l=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GRAPHQL_HTTP||"http://localhost:4000/graphql",s=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_FILES_ROOT||l.substr(0,l.indexOf("/graphql"));a["a"].prototype.$filesRoot=s;var p={httpEndpoint:l,wsEndpoint:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GRAPHQL_WS||"ws://localhost:4000/graphql",tokenName:c,persisting:!1,websocketsOnly:!1,ssr:!1};function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(u["createApolloClient"])(Object(o["a"])(Object(o["a"])({},p),e)),n=t.apolloClient,r=t.wsClient;n.wsClient=r;var a=new i["a"]({defaultClient:n,defaultOptions:{$query:{}},errorHandler:function(e){console.log("%cError","background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;",e.message)}});return a}function d(e,t){return h.apply(this,arguments)}function h(){return h=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return"undefined"!==typeof localStorage&&n&&localStorage.setItem(c,n),t.wsClient&&Object(u["restartWebsockets"])(t.wsClient),e.prev=2,e.next=5,t.resetStore();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](2),console.log("%cError on cache reset (login)","color: orange;",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[2,7]])}))),h.apply(this,arguments)}}});
//# sourceMappingURL=app.19eec635.js.map