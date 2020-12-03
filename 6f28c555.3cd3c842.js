(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=(n(0),n(188)),o=(n(183),n(184),n(189),n(190));n(191);const i={title:"Exporting Models and Materials/Textures",author:"Michael Shilliday",date:"11.04.2020"},s={id:"assets/models/exporting-models-and-materials-textures",isDocsHomePage:!1,title:"Exporting Models and Materials/Textures",source:"@site/_articles/assets/models/exporting-models-and-materials-textures.md",permalink:"/assets/models/exporting-models-and-materials-textures",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/models/exporting-models-and-materials-textures.md",sidebar:"tutorials",previous:{title:"Importing models and using the material editor",permalink:"/assets/models/importing-models-and-using-material-editor"},next:{title:"Custom Hero models, materials and animations",permalink:"/assets/models/custom-hero-models-materials-animations"}},l=[],c={rightToc:l};function u({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)(o.a,{id:"e3vvRUjlW7k",mdxType:"YouTube"}))}u.isMDXComponent=!0},183:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(187),i=n(185),s=n(90),l=n.n(s);const c=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:s,values:p,groupId:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(o.a)(),[b,g]=Object(r.useState)(s);if(null!=m){const e=d[m];null!=e&&e!==b&&p.some(t=>t.value===e)&&g(e)}const y=e=>{g(e),null!=m&&f(m,e)},v=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":b===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),onFocus:()=>y(e),onClick:()=>y(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===b)[0]))}},184:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},185:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},186:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=a},187:function(e,t,n){"use strict";var r=n(0),a=n(186);t.a=function(){return Object(r.useContext)(a.a)}},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?a.a.createElement(f,s(s({ref:t},c),{},{components:n})):a.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n.n(r);function o({id:e,aspectRatio:t=4/3}){return a.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},a.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n.n(r);function o({id:e,playlistId:t,aspectRatio:n=16/9}){const r=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return a.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},a.a.createElement("iframe",{src:r,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(3),a=n(184),o=n(183),i=n(0),s=n.n(i);const l={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function c({children:e,group:t}){Object(r.a)("string"==typeof t||null===t);const n=s.a.Children.toArray(e).map(e=>{const t=e.props.children.props.className.replace(/language-/,"");return Object(r.a)(t in l),{language:t,element:e}});return s.a.createElement(o.a,{groupId:null!==t?"multi-code-block-"+t:void 0,defaultValue:n[0].language,values:n.map(({language:e})=>({value:e,label:l[e]}))},n.map(({language:e,element:t})=>s.a.createElement(a.a,{key:e,value:e},t)))}}}]);