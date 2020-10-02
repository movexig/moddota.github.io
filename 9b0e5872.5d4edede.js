(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=(n(0),n(187));n(182),n(183),n(188),n(189),n(190);const i={title:"Making any ability use charges",author:"DoctorGester",steamId:"76561198046920629",date:"28.12.2015"},o={id:"abilities/making-any-ability-use-charges",isDocsHomePage:!1,title:"Making any ability use charges",description:"A guide/snippet which will help you to make any ability use charges like Shrapnel or Stone Caller.",source:"@site/_articles/abilities/making-any-ability-use-charges.md",permalink:"/abilities/making-any-ability-use-charges",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/making-any-ability-use-charges.md",sidebar:"tutorials",previous:{title:"Creating innate (available from level 1) abilities",permalink:"/abilities/creating-innate-abilities"},next:{title:"Calling Spells with SetCursor",permalink:"/abilities/calling-spells-with-setcursor"}},l=[],c={rightToc:l};function s({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A guide/snippet which will help you to make any ability use charges like Shrapnel or Stone Caller."),Object(r.b)("p",null,"First, add save this ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://gist.github.com/DoctorGester/1939e277e677e9394924"}),"file"),' with a name "modifier_charges.lua" to your vscripts folder (or any subfolder inside of it)'),Object(r.b)("p",null,"Then, add an initialization line to your addon_game_mode.lua:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'LinkLuaModifier("modifier_charges", LUA_MODIFIER_MOTION_NONE)\n')),Object(r.b)("p",null,"If your file is into a subfolder you can do it like that"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'LinkLuaModifier("modifier_charges", "subfolder/anothersubfolder/modifier_charges", LUA_MODIFIER_MOTION_NONE)\n')),Object(r.b)("p",null,"Gratz, you've successfully installed it!"),Object(r.b)("p",null,"Now you can add charges to any ability with this code:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'unit:AddNewModifier(unit, unit:FindAbilityByName("ability_name"), "modifier_charges", {\n    max_count = 2,\n    start_count = 1,\n    replenish_time = 6\n})\n')),Object(r.b)("p",null,"The settings in the end are pretty self-explanatory. You can omit the start_count if you want."),Object(r.b)("p",null,"That's it, folks."))}s.isMDXComponent=!0},182:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(186),o=n(184),l=n(90),c=n.n(l);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:p,groupId:b}=e,{tabGroupChoices:f,setTabGroupChoices:d}=Object(i.a)(),[m,y]=Object(a.useState)(l);if(null!=b){const e=f[b];null!=e&&e!==m&&p.some(t=>t.value===e)&&y(e)}const g=e=>{y(e),null!=b&&d(b,e)},h=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":m===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e),onFocus:()=>g(e),onClick:()=>g(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===m)[0]))}},183:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},184:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},185:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=r},186:function(e,t,n){"use strict";var a=n(0),r=n(185);t.a=function(){return Object(a.useContext)(r.a)}},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,d=p["".concat(o,".").concat(f)]||p[f]||b[f]||i;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a);function i({id:e,aspectRatio:t=4/3}){return r.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},r.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a);function i({id:e,playlistId:t,aspectRatio:n=16/9}){const a=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return r.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},r.a.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(3),r=n(183),i=n(182),o=n(0),l=n.n(o);const c={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function s({children:e,group:t}){Object(a.a)("string"==typeof t||null===t);const n=l.a.Children.toArray(e).map(e=>{const t=e.props.children.props.className.replace(/language-/,"");return Object(a.a)(t in c),{language:t,element:e}});return l.a.createElement(i.a,{groupId:null!==t?"multi-code-block-"+t:void 0,defaultValue:n[0].language,values:n.map(({language:e})=>({value:e,label:c[e]}))},n.map(({language:e,element:t})=>l.a.createElement(r.a,{key:e,value:e},t)))}}}]);