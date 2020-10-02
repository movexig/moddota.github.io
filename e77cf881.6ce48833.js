(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{171:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(2),i=(a(0),a(187));a(182),a(183),a(188),a(189),a(190);const r={title:"The importance of AbilitySpecial values",author:"Noya",steamId:"76561198046984233",date:"12.12.2014"},o={id:"abilities/the-importance-of-abilityspecial-values",isDocsHomePage:!1,title:"The importance of AbilitySpecial values",description:'To specify numeric values, you can put in a number or you can use %name formatting to grab values out of the "AbilitySpecial" block of the ability. The advantage to using the %name syntax is that the value can change as the ability levels up and the numeric value can be formatted into tooltips.',source:"@site/_articles/abilities/the-importance-of-abilityspecial-values.md",permalink:"/abilities/the-importance-of-abilityspecial-values",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/the-importance-of-abilityspecial-values.md",sidebar:"tutorials",previous:{title:"Item KeyValues",permalink:"/abilities/item-keyvalues"},next:{title:"Passing AbilitySpecial values into Lua",permalink:"/abilities/passing-abilityspecial-values-into-lua"}},l=[],c={rightToc:l};function s({components:e,...t}){return Object(i.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"To specify numeric values, you can put in a number or you can use ",Object(i.b)("inlineCode",{parentName:"em"},"%name"),' formatting to grab values out of the "AbilitySpecial" block of the ability. The advantage to using the ',Object(i.b)("inlineCode",{parentName:"em"},"%name")," syntax is that the value can change as the ability levels up and the numeric value can be formatted into tooltips.")),Object(i.b)("p",null,"When coding abilities or items, ",Object(i.b)("strong",{parentName:"p"},"do not")," fall into the trap of replacing the use of AbilitySpecial variables with a constant (i.e. writing ",Object(i.b)("inlineCode",{parentName:"p"},'"Duration" "12"'),", ",Object(i.b)("inlineCode",{parentName:"p"},'"MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE"\t"-30"')," or doing similar assignations in lua scripts), thinking it will only be used once. "),Object(i.b)("p",null,"There's ",Object(i.b)("strong",{parentName:"p"},"2 problems")," with doing this"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Tooltips are hard"),Object(i.b)("p",{parentName:"li"},"If you don't use AbilitySpecial for each variable, when you get to making the tooltips, you'll find pretty much impossible to make quality dota-styled strings because your spell description needs to have direct copies of the values you've put in the ability. To make this worse, if you ever make a change to an static number in your datadriven ability, you will also need to update the addon_english.txt ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Consistency between Lua & Key Values"),Object(i.b)("p",{parentName:"li"},"Changing a key value won't only affect the datadriven but also the scripts and its easy to make a change and forget to extend this change to the .lua file. Doing proper references to the Specials also eliminates this problem."))),Object(i.b)("br",null),"**TL;DR**: Use as many AbilitySpecial values as possible, then modifying/balancing your abilities can be done just by changing these variables and it will extend to the rest of the game mode.",Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Related"),": ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://moddota.com/forums/discussion/17/how-to-get-abilityspecial-values-into-lua"}),"How to get AbilitySpecial values into Lua")))}s.isMDXComponent=!0},182:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(186),o=a(184),l=a(90),c=a.n(l);const s=37,u=39;t.a=function(e){const{block:t,children:a,defaultValue:l,values:p,groupId:b}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(r.a)(),[d,y]=Object(n.useState)(l);if(null!=b){const e=m[b];null!=e&&e!==d&&p.some(t=>t.value===e)&&y(e)}const h=e=>{y(e),null!=b&&f(b,e)},g=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":d===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case u:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),onFocus:()=>h(e),onClick:()=>h(e)},t))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===d)[0]))}},183:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){return i.a.createElement("div",null,e.children)}},184:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},185:function(e,t,a){"use strict";var n=a(0);const i=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=i},186:function(e,t,a){"use strict";var n=a(0),i=a(185);t.a=function(){return Object(n.useContext)(i.a)}},187:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return f}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,f=p["".concat(o,".").concat(m)]||p[m]||b[m]||r;return a?i.a.createElement(f,l(l({ref:t},s),{},{components:a})):i.a.createElement(f,l({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},188:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),i=a.n(n);function r({id:e,aspectRatio:t=4/3}){return i.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},i.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},189:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),i=a.n(n);function r({id:e,playlistId:t,aspectRatio:a=16/9}){const n=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return i.a.createElement("p",{style:{position:"relative",paddingBottom:1/a*100+"%"}},i.a.createElement("iframe",{src:n,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},190:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(3),i=a(183),r=a(182),o=a(0),l=a.n(o);const c={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function s({children:e,group:t}){Object(n.a)("string"==typeof t||null===t);const a=l.a.Children.toArray(e).map(e=>{const t=e.props.children.props.className.replace(/language-/,"");return Object(n.a)(t in c),{language:t,element:e}});return l.a.createElement(r.a,{groupId:null!==t?"multi-code-block-"+t:void 0,defaultValue:a[0].language,values:a.map(({language:e})=>({value:e,label:c[e]}))},a.map(({language:e,element:t})=>l.a.createElement(i.a,{key:e,value:e},t)))}}}]);