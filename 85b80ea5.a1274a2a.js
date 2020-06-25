(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{132:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return o}));var n=a(2),r=(a(0),a(177));a(178),a(179);const i={title:"Hiding HUD with SetHUDVisible",author:"Noya",steamId:"76561198046984233",date:"07.02.2015"},c={id:"panorama/hiding-hud-with-sethudvisible",isDocsHomePage:!1,title:"Hiding HUD with SetHUDVisible",description:"This tutorial is outdated. It's recommended to use Panorama for UI manipulation now.",source:"@site/_articles/panorama/hiding-hud-with-sethudvisible.md",permalink:"/panorama/hiding-hud-with-sethudvisible",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/panorama/hiding-hud-with-sethudvisible.md",sidebar:"tutorials",previous:{title:"DOTAScenePanel",permalink:"/panorama/dotascenepanel"},next:{title:"Asset File Type Reference",permalink:"/assets/asset-file-type-reference"}},l=[],b={rightToc:l};function o({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This tutorial is outdated. It's recommended to use Panorama for UI manipulation now."),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Example:")),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"GameUI.SetDefaultUIEnabled(DotaDefaultUIElement_t.DOTA_DEFAULT_UI_TOP_TIMEOFDAY, false);\n")))),Object(r.b)("p",null,"There's a function currently missing from the API page: SetHUDVisible(int, bool) which I want to document here."),Object(r.b)("p",null,"Credits to BMD for this list:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"HUD Component"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"int value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_TOP_TIMEOFDAY"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_TOP_HEROES"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_TOP_SCOREBOARD"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_ACTION_PANEL"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_ACTION_MINIMAP"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_INVENTORY_PANEL"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_INVENTORY_SHOP"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_INVENTORY_ITEMS"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"7")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_INVENTORY_QUICKBUY"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_INVENTORY_COURIER"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"9")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_INVENTORY_PROTECT"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_INVENTORY_GOLD"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"11")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DOTA_HUD_VISIBILITY_SHOP_SUGGESTEDITEMS"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"12")))),Object(r.b)("p",null,"Note that changing it once doesn't let you change it back without restarting tools, so this shouldn't be used to manipulate the HUD after the game loads."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Usage")),Object(r.b)("p",null,"Somewhere in a game started event, I used ",Object(r.b)("inlineCode",{parentName:"p"},"player_connect_full")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-lua"}),"mode = GameRules:GetGameModeEntity()\nmode:SetHUDVisible(hud_component_value, false)\n")))}o.isMDXComponent=!0},177:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},O=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),O=p(a),d=n,m=O["".concat(c,".").concat(d)]||O[d]||u[d]||i;return a?r.a.createElement(m,l(l({ref:t},o),{},{components:a})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<i;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},178:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n);function i({id:e,aspectRatio:t=4/3}){return r.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},r.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n);function i({id:e,playlistId:t,aspectRatio:a=16/9}){const n=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return r.a.createElement("p",{style:{position:"relative",paddingBottom:1/a*100+"%"}},r.a.createElement("iframe",{src:n,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}}}]);