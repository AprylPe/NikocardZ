import{B as I,C as J,D as ee,y as Y,X as te,c as o,g as G,r as V,a as ne,h as x,Y as ae,s as R,u as re,T as le,l as ue,I as ie,K as oe,Q as se,Z as D,N as ce}from"./index.eb667856.js";import{c as de,v as fe,u as ve,d as me,Q as z,a as ge}from"./dom.3a6fa1fc.js";import{d as be,c as he,b as ye}from"./render.260dbcd9.js";function ke(e,t=250){let l=!1,n;return function(){return l===!1&&(l=!0,setTimeout(()=>{l=!1},t),n=e.apply(this,arguments)),n}}function Q(e,t,l,n){l.modifiers.stop===!0&&Y(e);const u=l.modifiers.color;let g=l.modifiers.center;g=g===!0||n===!0;const f=document.createElement("span"),d=document.createElement("span"),$=te(e),{left:h,top:v,width:_,height:r}=t.getBoundingClientRect(),y=Math.sqrt(_*_+r*r),m=y/2,k=`${(_-y)/2}px`,i=g?k:`${$.left-h-m}px`,b=`${(r-y)/2}px`,T=g?b:`${$.top-v-m}px`;d.className="q-ripple__inner",de(d,{height:`${y}px`,width:`${y}px`,transform:`translate3d(${i},${T},0) scale3d(.2,.2,1)`,opacity:0}),f.className=`q-ripple${u?" text-"+u:""}`,f.setAttribute("dir","ltr"),f.appendChild(d),t.appendChild(f);const w=()=>{f.remove(),clearTimeout(S)};l.abort.push(w);let S=setTimeout(()=>{d.classList.add("q-ripple__inner--enter"),d.style.transform=`translate3d(${k},${b},0) scale3d(1,1,1)`,d.style.opacity=.2,S=setTimeout(()=>{d.classList.remove("q-ripple__inner--enter"),d.classList.add("q-ripple__inner--leave"),d.style.opacity=0,S=setTimeout(()=>{f.remove(),l.abort.splice(l.abort.indexOf(w),1)},275)},250)},50)}function H(e,{modifiers:t,value:l,arg:n}){const u=Object.assign({},e.cfg.ripple,t,l);e.modifiers={early:u.early===!0,stop:u.stop===!0,center:u.center===!0,color:u.color||n,keyCodes:[].concat(u.keyCodes||13)}}var pe=be({name:"ripple",beforeMount(e,t){const l=t.instance.$.appContext.config.globalProperties.$q.config||{};if(l.ripple===!1)return;const n={cfg:l,enabled:t.value!==!1,modifiers:{},abort:[],start(u){n.enabled===!0&&u.qSkipRipple!==!0&&u.type===(n.modifiers.early===!0?"pointerdown":"click")&&Q(u,e,n,u.qKeyEvent===!0)},keystart:ke(u=>{n.enabled===!0&&u.qSkipRipple!==!0&&I(u,n.modifiers.keyCodes)===!0&&u.type===`key${n.modifiers.early===!0?"down":"up"}`&&Q(u,e,n,!0)},300)};H(n,t),e.__qripple=n,J(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const l=e.__qripple;l!==void 0&&(l.enabled=t.value!==!1,l.enabled===!0&&Object(t.value)===t.value&&H(l,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(l=>{l()}),ee(t,"main"),delete e._qripple)}});const Z={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},qe=Object.keys(Z),xe={align:{type:String,validator:e=>qe.includes(e)}};function _e(e){return o(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${Z[t]}`})}function F(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function W(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ee(e,t){for(const l in t){const n=t[l],u=e[l];if(typeof n=="string"){if(n!==u)return!1}else if(Array.isArray(u)===!1||u.length!==n.length||n.some((g,f)=>g!==u[f]))return!1}return!0}function X(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((l,n)=>l===t[n]):e.length===1&&e[0]===t}function Ce(e,t){return Array.isArray(e)===!0?X(e,t):Array.isArray(t)===!0?X(t,e):e===t}function Le(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const l in e)if(Ce(e[l],t[l])===!1)return!1;return!0}const $e={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Be({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const l=G(),{props:n,proxy:u,emit:g}=l,f=fe(l),d=o(()=>n.disable!==!0&&n.href!==void 0),$=t===!0?o(()=>f===!0&&n.disable!==!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):o(()=>f===!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),h=o(()=>$.value===!0?T(n.to):null),v=o(()=>h.value!==null),_=o(()=>d.value===!0||v.value===!0),r=o(()=>n.type==="a"||_.value===!0?"a":n.tag||e||"div"),y=o(()=>d.value===!0?{href:n.href,target:n.target}:v.value===!0?{href:h.value.href,target:n.target}:{}),m=o(()=>{if(v.value===!1)return-1;const{matched:s}=h.value,{length:p}=s,E=s[p-1];if(E===void 0)return-1;const L=u.$route.matched;if(L.length===0)return-1;const B=L.findIndex(W.bind(null,E));if(B!==-1)return B;const K=F(s[p-2]);return p>1&&F(E)===K&&L[L.length-1].path!==K?L.findIndex(W.bind(null,s[p-2])):B}),k=o(()=>v.value===!0&&m.value!==-1&&Ee(u.$route.params,h.value.params)),i=o(()=>k.value===!0&&m.value===u.$route.matched.length-1&&Le(u.$route.params,h.value.params)),b=o(()=>v.value===!0?i.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":k.value===!0?` ${n.activeClass}`:"":"");function T(s){try{return u.$router.resolve(s)}catch{}return null}function w(s,{returnRouterError:p,to:E=n.to,replace:L=n.replace}={}){if(n.disable===!0)return s.preventDefault(),Promise.resolve(!1);if(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey||s.button!==void 0&&s.button!==0||n.target==="_blank")return Promise.resolve(!1);s.preventDefault();const B=u.$router[L===!0?"replace":"push"](E);return p===!0?B:B.then(()=>{}).catch(()=>{})}function S(s){if(v.value===!0){const p=E=>w(s,E);g("click",s,p),s.defaultPrevented!==!0&&p()}else g("click",s)}return{hasRouterLink:v,hasHrefLink:d,hasLink:_,linkTag:r,resolvedLink:h,linkIsActive:k,linkIsExactActive:i,linkClass:b,linkAttrs:y,getLink:T,navigateToRouterLink:w,navigateOnClick:S}}const U={none:0,xs:4,sm:8,md:16,lg:24,xl:32},we={xs:8,sm:10,md:14,lg:20,xl:24},Se=["button","submit","reset"],Te=/[^\s]\/[^\s]/,Re=["flat","outline","push","unelevated"],Pe=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,Ae={...ve,...$e,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Re.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...xe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Oe(e){const t=me(e,we),l=_e(e),{hasRouterLink:n,hasLink:u,linkTag:g,linkAttrs:f,navigateOnClick:d}=Be({fallbackTag:"button"}),$=o(()=>{const i=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},i,{padding:e.padding.split(/\s+/).map(b=>b in U?U[b]+"px":b).join(" "),minWidth:"0",minHeight:"0"}):i}),h=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),v=o(()=>e.disable!==!0&&e.loading!==!0),_=o(()=>v.value===!0?e.tabindex||0:-1),r=o(()=>Pe(e,"standard")),y=o(()=>{const i={tabindex:_.value};return u.value===!0?Object.assign(i,f.value):Se.includes(e.type)===!0&&(i.type=e.type),g.value==="a"?(e.disable===!0?i["aria-disabled"]="true":i.href===void 0&&(i.role="button"),n.value!==!0&&Te.test(e.type)===!0&&(i.type=e.type)):e.disable===!0&&(i.disabled="",i["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(i,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),i}),m=o(()=>{let i;e.color!==void 0?e.flat===!0||e.outline===!0?i=`text-${e.textColor||e.color}`:i=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(i=`text-${e.textColor}`);const b=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${r.value} q-btn--${b}`+(i!==void 0?" "+i:"")+(v.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),k=o(()=>l.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:m,style:$,innerClasses:k,attributes:y,hasLink:u,linkTag:g,navigateOnClick:d,isActionable:v}}const{passiveCapture:q}=ue;let P=null,A=null,O=null;var Me=he({name:"QBtn",props:{...Ae,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:l}){const{proxy:n}=G(),{classes:u,style:g,innerClasses:f,attributes:d,hasLink:$,linkTag:h,navigateOnClick:v,isActionable:_}=Oe(e),r=V(null),y=V(null);let m=null,k,i=null;const b=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),T=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:$.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),w=o(()=>({center:e.round})),S=o(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),s=o(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(_.value===!0){const a={onClick:E,onKeydown:L,onMousedown:K};if(n.$q.platform.has.touch===!0){const c=e.onTouchstart!==void 0?"":"Passive";a[`onTouchstart${c}`]=B}return a}return{onClick:R}}),p=o(()=>({ref:r,class:"q-btn q-btn-item non-selectable no-outline "+u.value,style:g.value,...d.value,...s.value}));function E(a){if(r.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const c=document.activeElement;if(e.type==="submit"&&c!==document.body&&r.value.contains(c)===!1&&c.contains(r.value)===!1){r.value.focus();const N=()=>{document.removeEventListener("keydown",R,!0),document.removeEventListener("keyup",N,q),r.value!==null&&r.value.removeEventListener("blur",N,q)};document.addEventListener("keydown",R,!0),document.addEventListener("keyup",N,q),r.value.addEventListener("blur",N,q)}}v(a)}}function L(a){r.value!==null&&(l("keydown",a),I(a,[13,32])===!0&&A!==r.value&&(A!==null&&M(),a.defaultPrevented!==!0&&(r.value.focus(),A=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("keyup",C,!0),r.value.addEventListener("blur",C,q)),R(a)))}function B(a){r.value!==null&&(l("touchstart",a),a.defaultPrevented!==!0&&(P!==r.value&&(P!==null&&M(),P=r.value,m=a.target,m.addEventListener("touchcancel",C,q),m.addEventListener("touchend",C,q)),k=!0,i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,k=!1},200)))}function K(a){r.value!==null&&(a.qSkipRipple=k===!0,l("mousedown",a),a.defaultPrevented!==!0&&O!==r.value&&(O!==null&&M(),O=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("mouseup",C,q)))}function C(a){if(r.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===r.value)){if(a!==void 0&&a.type==="keyup"){if(A===r.value&&I(a,[13,32])===!0){const c=new MouseEvent("click",a);c.qKeyEvent=!0,a.defaultPrevented===!0&&re(c),a.cancelBubble===!0&&Y(c),r.value.dispatchEvent(c),R(a),a.qKeyEvent=!0}l("keyup",a)}M()}}function M(a){const c=y.value;a!==!0&&(P===r.value||O===r.value)&&c!==null&&c!==document.activeElement&&(c.setAttribute("tabindex",-1),c.focus()),P===r.value&&(m!==null&&(m.removeEventListener("touchcancel",C,q),m.removeEventListener("touchend",C,q)),P=m=null),O===r.value&&(document.removeEventListener("mouseup",C,q),O=null),A===r.value&&(document.removeEventListener("keyup",C,!0),r.value!==null&&r.value.removeEventListener("blur",C,q),A=null),r.value!==null&&r.value.classList.remove("q-btn--active")}function j(a){R(a),a.qSkipRipple=!0}return ne(()=>{M(!0)}),Object.assign(n,{click:E}),()=>{let a=[];e.icon!==void 0&&a.push(x(z,{name:e.icon,left:e.stack!==!0&&b.value===!0,role:"img","aria-hidden":"true"})),b.value===!0&&a.push(x("span",{class:"block"},[e.label])),a=ye(t.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(x(z,{name:e.iconRight,right:e.stack!==!0&&b.value===!0,role:"img","aria-hidden":"true"}));const c=[x("span",{class:"q-focus-helper",ref:y})];return e.loading===!0&&e.percentage!==void 0&&c.push(x("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[x("span",{class:"q-btn__progress-indicator fit block",style:S.value})])),c.push(x("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+f.value},a)),e.loading!==null&&c.push(x(le,{name:"q-transition--fade"},()=>e.loading===!0?[x("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[x(ge)])]:null)),ae(x(h.value,p.value,c),[[pe,T.value,void 0,w.value]])}}});const je={class:"fullscreen bg-blue text-white text-center q-pa-md flex flex-center"},Ke=D("div",{style:{"font-size":"30vh"}}," 404 ",-1),Ne=D("div",{class:"text-h2",style:{opacity:".4"}}," Oops. Nothing here... ",-1),ze=ie({name:"ErrorNotFound",__name:"ErrorNotFound",setup(e){return(t,l)=>(oe(),se("div",je,[D("div",null,[Ke,Ne,ce(Me,{class:"q-mt-xl",color:"white","text-color":"blue",unelevated:"",to:"/",label:"Go Home","no-caps":""})])]))}});export{ze as default};
