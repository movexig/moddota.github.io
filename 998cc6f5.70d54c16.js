(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=(n(0),n(188));n(183),n(184),n(189),n(190),n(191);const o={title:"Transformations",author:"DrTeaSpoon",steamId:"76561197975484185",date:"07.09.2016"},i={id:"abilities/lua-modifiers/3",isDocsHomePage:!1,title:"Transformations",description:"For this tutorial I am cheating and not explaining how to make lua ability. If you want to see full example of the code click here!",source:"@site/_articles/abilities/lua-modifiers/3.md",permalink:"/abilities/lua-modifiers/3",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/lua-modifiers/3.md",sidebar:"tutorials",previous:{title:"Linken's Sphere & Lotus Orb",permalink:"/abilities/lua-modifiers/2"},next:{title:"Enchanting Trees",permalink:"/abilities/lua-modifiers/4"}},c=[],l={rightToc:c};function s({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"For this tutorial I am cheating and not explaining how to make lua ability. If you want to see full example of the code ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitlab.com/DrTeaSpoon/Dota2Overflow/tree/master/game/dota_addons/dota2overflow/scripts/vscripts/lua_abilities/ultimates/metamorph"}),"click here!"),"  "),Object(r.b)("p",null,"Now we focus on the lua modifier. While we can do transformation and stuff in data driven counterpart, there is lack of calculations that make these things work better.",Object(r.b)("br",{parentName:"p"}),"\n","First order of issue is attack range and type. We assume our custom ability has special value for ",Object(r.b)("inlineCode",{parentName:"p"},"attack_range")," and is designed to be a melee creature transformation. For this example we are using roshan so for attack range to match original we set it to ",Object(r.b)("inlineCode",{parentName:"p"},"128")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'function transformation_mod:OnCreated( kv ) \n    if IsServer() then\n        self.AttackBonus = (self:GetParent():GetAttackRange() - self:GetAbility():GetSpecialValueFor("attack_range")) * -1\n        --We get original attack range and substract away the wanted attack range, then negate the result.\n        --YAY Math!\n        self.OriginalAtkCap = self:GetParent():GetAttackCapability() \n        --Save original so we can set it back.\n        self:GetParent():SetAttackCapability(DOTA_UNIT_CAP_MELEE_ATTACK) \n    end\nend\n')),Object(r.b)("p",null,"Now we need to make sure when this modifier is lost, we change the attack type back to the original."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"function transformation_mod:OnDestroy()\n    if IsServer() then\n        self:GetParent():SetAttackCapability(self.OriginalAtkCap) \n    end\nend\n")),Object(r.b)("p",null,"What we want the transformation to effect should go here, these are some of the commons."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"function transformation_mod:DeclareFunctions()\n    local funcs = {\n        MODIFIER_PROPERTY_MODEL_CHANGE,\n        MODIFIER_PROPERTY_MODEL_SCALE,\n        MODIFIER_PROPERTY_ATTACK_RANGE_BONUS\n    }\n    return funcs\nend\n")),Object(r.b)("p",null,"Now we need to setup the functions for these wonderful functions. First one is for the model. Second is for the attack range. Last is for the scale."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'function transformation_mod:GetModifierModelChange() return "models/creeps/roshan/roshan.vmdl" end\nfunction transformation_mod:GetModifierAttackRangeBonus() return self.AttackBonus end\nfunction transformation_mod:GetModifierModelScale() return self:GetAbility():GetLevel()*0.5 end\n')),Object(r.b)("p",null,"Last issues are using ability while immune and correctly duplicating modifier for illusions."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"function metamorphosis_mod:GetAttributes() return MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE end\nfunction metamorphosis_mod:AllowIllusionDuplicate() return true end\n")),Object(r.b)("p",null,"Thats pretty much it. You can add particle effects and/or animations. Though as a note there are some issues with animations on some heroes. For example phantom lancer's death animation makes the player model vanish so I suggest being careful with chosen animation.  "),Object(r.b)("p",null,"Next Topic: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"lua-modifiers-4"}),"Enchanting Trees")))}s.isMDXComponent=!0},183:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(187),i=n(185),c=n(90),l=n.n(c);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:f,groupId:p}=e,{tabGroupChoices:m,setTabGroupChoices:d}=Object(o.a)(),[b,h]=Object(a.useState)(c);if(null!=p){const e=m[p];null!=e&&e!==b&&f.some(t=>t.value===e)&&h(e)}const g=e=>{h(e),null!=p&&d(p,e)},O=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},f.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":b===e}),key:e,ref:e=>O.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e),onFocus:()=>g(e),onClick:()=>g(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===b)[0]))}},184:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},185:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},186:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=r},187:function(e,t,n){"use strict";var a=n(0),r=n(186);t.a=function(){return Object(a.useContext)(r.a)}},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a);function o({id:e,aspectRatio:t=4/3}){return r.a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},r.a.createElement("iframe",{src:"https://gfycat.com/ifr/"+e,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a);function o({id:e,playlistId:t,aspectRatio:n=16/9}){const a=void 0!==t?"https://www.youtube.com/embed/videoseries?list="+t:"https://www.youtube.com/embed/"+e;return r.a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},r.a.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(3),r=n(184),o=n(183),i=n(0),c=n.n(i);const l={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function s({children:e,group:t}){Object(a.a)("string"==typeof t||null===t);const n=c.a.Children.toArray(e).map(e=>{const t=e.props.children.props.className.replace(/language-/,"");return Object(a.a)(t in l),{language:t,element:e}});return c.a.createElement(o.a,{groupId:null!==t?"multi-code-block-"+t:void 0,defaultValue:n[0].language,values:n.map(({language:e})=>({value:e,label:l[e]}))},n.map(({language:e,element:t})=>c.a.createElement(r.a,{key:e,value:e},t)))}}}]);