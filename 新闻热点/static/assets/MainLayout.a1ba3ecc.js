import{c as M,a as v,h as S,t as ee,r as x,m as De,o as j,b as U,Y as pe,n as J,g as R,W as ge,i as we,Z as P,w as C,_ as Je,$ as te,a0 as et,C as N,a1 as tt,a2 as K,a3 as se,p as ze,L as ce,a4 as ye,a5 as de,s as at,a6 as nt,a7 as Te,a8 as Me,a9 as ot,aa as Z,v as it,F as lt,ab as rt,ac as Le,ad as ut,ae as O,af as st,ag as L,N as ct,ah as fe,ai as dt,aj as ft,ak as vt,Q as ht,al as mt}from"./index.59bf5afc.js";import{c as gt,b as G,Q as yt,a as _e,d as bt,e as Be}from"./format.48f854e4.js";import{b as pt,u as wt,c as Ct,a as qt,d as St,e as kt,f as xt,g as zt,h as Tt,i as Lt,j as _t,k as ve}from"./use-timeout.7c71c578.js";var Bt=M({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:i}){const o=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>S("div",{class:o.value},ee(i.default))}}),$t=M({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:i}){const o=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:o.value,role:"toolbar"},ee(i.default))}});function Ot(){const e=x(!De.value);return e.value===!1&&j(()=>{e.value=!0}),e}const Ve=typeof ResizeObserver!="undefined",$e=Ve===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var be=M({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:i}){let o=null,u,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?s():o===null&&(o=setTimeout(s,e.debounce))}function s(){if(o!==null&&(clearTimeout(o),o=null),u){const{offsetWidth:c,offsetHeight:r}=u;(c!==t.width||r!==t.height)&&(t={width:c,height:r},i("resize",t))}}const{proxy:d}=R();if(Ve===!0){let c;const r=l=>{u=d.$el.parentNode,u?(c=new ResizeObserver(a),c.observe(u),s()):l!==!0&&J(()=>{r(!0)})};return j(()=>{r()}),U(()=>{o!==null&&clearTimeout(o),c!==void 0&&(c.disconnect!==void 0?c.disconnect():u&&c.unobserve(u))}),pe}else{let l=function(){o!==null&&(clearTimeout(o),o=null),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",a,ge.passive),r=void 0)},w=function(){l(),u&&u.contentDocument&&(r=u.contentDocument.defaultView,r.addEventListener("resize",a,ge.passive),s())};const c=Ot();let r;return j(()=>{J(()=>{u=d.$el,u&&w()})}),U(l),d.trigger=a,()=>{if(c.value===!0)return S("object",{style:$e.style,tabindex:-1,type:"text/html",data:$e.url,"aria-hidden":"true",onLoad:w})}}}}),Et=M({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:i,emit:o}){const{proxy:{$q:u}}=R(),t=we(te,P);if(t===P)return console.error("QHeader needs to be child of QLayout"),P;const a=x(parseInt(e.heightHint,10)),s=x(!0),d=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||u.platform.is.ios&&t.isContainer.value===!0),c=v(()=>{if(e.modelValue!==!0)return 0;if(d.value===!0)return s.value===!0?a.value:0;const f=a.value-t.scroll.value.position;return f>0?f:0}),r=v(()=>e.modelValue!==!0||d.value===!0&&s.value!==!0),l=v(()=>e.modelValue===!0&&r.value===!0&&e.reveal===!0),w=v(()=>"q-header q-layout__section--marginal "+(d.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(r.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),p=v(()=>{const f=t.rows.value.top,z={};return f[0]==="l"&&t.left.space===!0&&(z[u.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),f[2]==="r"&&t.right.space===!0&&(z[u.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),z});function h(f,z){t.update("header",f,z)}function m(f,z){f.value!==z&&(f.value=z)}function B({height:f}){m(a,f),h("size",f)}function k(f){l.value===!0&&m(s,!0),o("focusin",f)}C(()=>e.modelValue,f=>{h("space",f),m(s,!0),t.animate()}),C(c,f=>{h("offset",f)}),C(()=>e.reveal,f=>{f===!1&&m(s,e.modelValue)}),C(s,f=>{t.animate(),o("reveal",f)}),C(t.scroll,f=>{e.reveal===!0&&m(s,f.direction==="up"||f.position<=e.revealOffset||f.position-f.inflectionPoint<100)});const b={};return t.instances.header=b,e.modelValue===!0&&h("size",a.value),h("space",e.modelValue),h("offset",c.value),U(()=>{t.instances.header===b&&(t.instances.header=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const f=Je(i.default,[]);return e.elevated===!0&&f.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),f.push(S(be,{debounce:0,onResize:B})),S("header",{class:w.value,style:p.value,onFocusin:k},f)}}});const Ce={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Pt=Object.keys(Ce);Ce.all=!0;function Oe(e){const i={};for(const o of Pt)e[o]===!0&&(i[o]=!0);return Object.keys(i).length===0?Ce:(i.horizontal===!0?i.left=i.right=!0:i.left===!0&&i.right===!0&&(i.horizontal=!0),i.vertical===!0?i.up=i.down=!0:i.up===!0&&i.down===!0&&(i.vertical=!0),i.horizontal===!0&&i.vertical===!0&&(i.all=!0),i)}function Ee(e,i){return i.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof i.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(i.uid)===-1)}function he(e,i,o){const u=ye(e);let t,a=u.left-i.event.x,s=u.top-i.event.y,d=Math.abs(a),c=Math.abs(s);const r=i.direction;r.horizontal===!0&&r.vertical!==!0?t=a<0?"left":"right":r.horizontal!==!0&&r.vertical===!0?t=s<0?"up":"down":r.up===!0&&s<0?(t="up",d>c&&(r.left===!0&&a<0?t="left":r.right===!0&&a>0&&(t="right"))):r.down===!0&&s>0?(t="down",d>c&&(r.left===!0&&a<0?t="left":r.right===!0&&a>0&&(t="right"))):r.left===!0&&a<0?(t="left",d<c&&(r.up===!0&&s<0?t="up":r.down===!0&&s>0&&(t="down"))):r.right===!0&&a>0&&(t="right",d<c&&(r.up===!0&&s<0?t="up":r.down===!0&&s>0&&(t="down")));let l=!1;if(t===void 0&&o===!1){if(i.event.isFirst===!0||i.event.lastDir===void 0)return{};t=i.event.lastDir,l=!0,t==="left"||t==="right"?(u.left-=a,d=0,a=0):(u.top-=s,c=0,s=0)}return{synthetic:l,payload:{evt:e,touch:i.event.mouse!==!0,mouse:i.event.mouse===!0,position:u,direction:t,isFirst:i.event.isFirst,isFinal:o===!0,duration:Date.now()-i.event.time,distance:{x:d,y:c},offset:{x:a,y:s},delta:{x:u.left-i.event.lastX,y:u.top-i.event.lastY}}}}let Qt=0;var me=et({name:"touch-pan",beforeMount(e,{value:i,modifiers:o}){if(o.mouse!==!0&&N.has.touch!==!0)return;function u(a,s){o.mouse===!0&&s===!0?at(a):(o.stop===!0&&ce(a),o.prevent===!0&&ze(a))}const t={uid:"qvtp_"+Qt++,handler:i,modifiers:o,direction:Oe(o),noop:pe,mouseStart(a){Ee(a,t)&&tt(a)&&(K(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Ee(a,t)){const s=a.target;K(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,s){if(N.is.firefox===!0&&se(e,!0),t.lastEvt=a,s===!0||o.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const r=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&ze(r),a.cancelBubble===!0&&ce(r),Object.assign(r,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:r}}ce(a)}const{left:d,top:c}=ye(a);t.event={x:d,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:d,lastY:c}},move(a){if(t.event===void 0)return;const s=ye(a),d=s.left-t.event.x,c=s.top-t.event.y;if(d===0&&c===0)return;t.lastEvt=a;const r=t.event.mouse===!0,l=()=>{u(a,r);let h;o.preserveCursor!==!0&&o.preservecursor!==!0&&(h=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),r===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),gt(),t.styleCleanup=m=>{if(t.styleCleanup=void 0,h!==void 0&&(document.documentElement.style.cursor=h),document.body.classList.remove("non-selectable"),r===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{B(),m()},50):B()}else m!==void 0&&m()}};if(t.event.detected===!0){t.event.isFirst!==!0&&u(a,t.event.mouse);const{payload:h,synthetic:m}=he(a,t,!1);h!==void 0&&(t.handler(h)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&l(),t.event.lastX=h.position.left,t.event.lastY=h.position.top,t.event.lastDir=m===!0?void 0:h.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||r===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){l(),t.event.detected=!0,t.move(a);return}const w=Math.abs(d),p=Math.abs(c);w!==p&&(t.direction.horizontal===!0&&w>p||t.direction.vertical===!0&&w<p||t.direction.up===!0&&w<p&&c<0||t.direction.down===!0&&w<p&&c>0||t.direction.left===!0&&w>p&&d<0||t.direction.right===!0&&w>p&&d>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,s){if(t.event!==void 0){if(de(t,"temp"),N.is.firefox===!0&&se(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(he(a===void 0?t.lastEvt:a,t).payload);const{payload:d}=he(a===void 0?t.lastEvt:a,t,!0),c=()=>{t.handler(d)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const a=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";K(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}N.has.touch===!0&&K(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,i){const o=e.__qtouchpan;o!==void 0&&(i.oldValue!==i.value&&(typeof value!="function"&&o.end(),o.handler=i.value),o.direction=Oe(i.modifiers))},beforeUnmount(e){const i=e.__qtouchpan;i!==void 0&&(i.event!==void 0&&i.end(),de(i,"main"),de(i,"temp"),N.is.firefox===!0&&se(e,!1),i.styleCleanup!==void 0&&i.styleCleanup(),delete e.__qtouchpan)}});const Pe=150;var Dt=M({name:"QDrawer",inheritAttrs:!1,props:{...pt,...wt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ct,"onLayout","miniState"],setup(e,{slots:i,emit:o,attrs:u}){const t=R(),{proxy:{$q:a}}=t,s=qt(e,a),{preventBodyScroll:d}=zt(),{registerTimeout:c,removeTimeout:r}=St(),l=we(te,P);if(l===P)return console.error("QDrawer needs to be child of QLayout"),P;let w,p=null,h;const m=x(e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint),B=v(()=>e.mini===!0&&m.value!==!0),k=v(()=>B.value===!0?e.miniWidth:e.width),b=x(e.showIfAbove===!0&&m.value===!1?!0:e.modelValue===!0),f=v(()=>e.persistent!==!0&&(m.value===!0||Fe.value===!0));function z(n,g){if(V(),n!==!1&&l.animate(),$(0),m.value===!0){const T=l.instances[X.value];T!==void 0&&T.belowBreakpoint===!0&&T.hide(!1),Q(1),l.isContainer.value!==!0&&d(!0)}else Q(0),n!==!1&&le(!1);c(()=>{n!==!1&&le(!0),g!==!0&&o("show",n)},Pe)}function y(n,g){W(),n!==!1&&l.animate(),Q(0),$(H.value*k.value),re(),g!==!0?c(()=>{o("hide",n)},Pe):r()}const{show:q,hide:_}=kt({showing:b,hideOnRouteChange:f,handleShow:z,handleHide:y}),{addToHistory:V,removeFromHistory:W}=xt(b,_,f),F={belowBreakpoint:m,hide:_},E=v(()=>e.side==="right"),H=v(()=>(a.lang.rtl===!0?-1:1)*(E.value===!0?1:-1)),qe=x(0),A=x(!1),ae=x(!1),Se=x(k.value*H.value),X=v(()=>E.value===!0?"left":"right"),ne=v(()=>b.value===!0&&m.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:k.value:0),oe=v(()=>e.overlay===!0||e.miniToOverlay===!0||l.view.value.indexOf(E.value?"R":"L")>-1||a.platform.is.ios===!0&&l.isContainer.value===!0),I=v(()=>e.overlay===!1&&b.value===!0&&m.value===!1),Fe=v(()=>e.overlay===!0&&b.value===!0&&m.value===!1),He=v(()=>"fullscreen q-drawer__backdrop"+(b.value===!1&&A.value===!1?" hidden":"")),Ae=v(()=>({backgroundColor:`rgba(0,0,0,${qe.value*.4})`})),ke=v(()=>E.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),Re=v(()=>E.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),We=v(()=>{const n={};return l.header.space===!0&&ke.value===!1&&(oe.value===!0?n.top=`${l.header.offset}px`:l.header.space===!0&&(n.top=`${l.header.size}px`)),l.footer.space===!0&&Re.value===!1&&(oe.value===!0?n.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(n.bottom=`${l.footer.size}px`)),n}),Ie=v(()=>{const n={width:`${k.value}px`,transform:`translateX(${Se.value}px)`};return m.value===!0?n:Object.assign(n,We.value)}),Ne=v(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),je=v(()=>`q-drawer q-drawer--${e.side}`+(ae.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(A.value===!0?" no-transition":b.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(oe.value===!0||I.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ke.value===!0?" q-drawer--top-padding":""))),Ue=v(()=>{const n=a.lang.rtl===!0?e.side:X.value;return[[me,Ze,void 0,{[n]:!0,mouse:!0}]]}),Xe=v(()=>{const n=a.lang.rtl===!0?X.value:e.side;return[[me,xe,void 0,{[n]:!0,mouse:!0}]]}),Ye=v(()=>{const n=a.lang.rtl===!0?X.value:e.side;return[[me,xe,void 0,{[n]:!0,mouse:!0,mouseAllDir:!0}]]});function ie(){Ge(m,e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint)}C(m,n=>{n===!0?(w=b.value,b.value===!0&&_(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(b.value===!0?($(0),Q(0),re()):q(!1))}),C(()=>e.side,(n,g)=>{l.instances[g]===F&&(l.instances[g]=void 0,l[g].space=!1,l[g].offset=0),l.instances[n]=F,l[n].size=k.value,l[n].space=I.value,l[n].offset=ne.value}),C(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&ie()}),C(()=>e.behavior+e.breakpoint,ie),C(l.isContainer,n=>{b.value===!0&&d(n!==!0),n===!0&&ie()}),C(l.scrollbarWidth,()=>{$(b.value===!0?0:void 0)}),C(ne,n=>{D("offset",n)}),C(I,n=>{o("onLayout",n),D("space",n)}),C(E,()=>{$()}),C(k,n=>{$(),ue(e.miniToOverlay,n)}),C(()=>e.miniToOverlay,n=>{ue(n,k.value)}),C(()=>a.lang.rtl,()=>{$()}),C(()=>e.mini,()=>{e.modelValue===!0&&(Ke(),l.animate())}),C(B,n=>{o("miniState",n)});function $(n){n===void 0?J(()=>{n=b.value===!0?0:k.value,$(H.value*n)}):(l.isContainer.value===!0&&E.value===!0&&(m.value===!0||Math.abs(n)===k.value)&&(n+=H.value*l.scrollbarWidth.value),Se.value=n)}function Q(n){qe.value=n}function le(n){const g=n===!0?"remove":l.isContainer.value!==!0?"add":"";g!==""&&document.body.classList[g]("q-body--drawer-toggle")}function Ke(){p!==null&&clearTimeout(p),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ae.value=!0,p=setTimeout(()=>{p=null,ae.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ze(n){if(b.value!==!1)return;const g=k.value,T=G(n.distance.x,0,g);if(n.isFinal===!0){T>=Math.min(75,g)===!0?q():(l.animate(),Q(0),$(H.value*g)),A.value=!1;return}$((a.lang.rtl===!0?E.value!==!0:E.value)?Math.max(g-T,0):Math.min(0,T-g)),Q(G(T/g,0,1)),n.isFirst===!0&&(A.value=!0)}function xe(n){if(b.value!==!0)return;const g=k.value,T=n.direction===e.side,Y=(a.lang.rtl===!0?T!==!0:T)?G(n.distance.x,0,g):0;if(n.isFinal===!0){Math.abs(Y)<Math.min(75,g)===!0?(l.animate(),Q(1),$(0)):_(),A.value=!1;return}$(H.value*Y),Q(G(1-Y/g,0,1)),n.isFirst===!0&&(A.value=!0)}function re(){d(!1),le(!0)}function D(n,g){l.update(e.side,n,g)}function Ge(n,g){n.value!==g&&(n.value=g)}function ue(n,g){D("size",n===!0?e.miniWidth:g)}return l.instances[e.side]=F,ue(e.miniToOverlay,k.value),D("space",I.value),D("offset",ne.value),e.showIfAbove===!0&&e.modelValue!==!0&&b.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),j(()=>{o("onLayout",I.value),o("miniState",B.value),w=e.showIfAbove===!0;const n=()=>{(b.value===!0?z:y)(!1,!0)};if(l.totalWidth.value!==0){J(n);return}h=C(l.totalWidth,()=>{h(),h=void 0,b.value===!1&&e.showIfAbove===!0&&m.value===!1?q(!1):n()})}),U(()=>{h!==void 0&&h(),p!==null&&(clearTimeout(p),p=null),b.value===!0&&re(),l.instances[e.side]===F&&(l.instances[e.side]=void 0,D("size",0),D("offset",0),D("space",!1))}),()=>{const n=[];m.value===!0&&(e.noSwipeOpen===!1&&n.push(nt(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ue.value)),n.push(Te("div",{ref:"backdrop",class:He.value,style:Ae.value,"aria-hidden":"true",onClick:_},void 0,"backdrop",e.noSwipeBackdrop!==!0&&b.value===!0,()=>Ye.value)));const g=B.value===!0&&i.mini!==void 0,T=[S("div",{...u,key:""+g,class:[Ne.value,u.class]},g===!0?i.mini():ee(i.default))];return e.elevated===!0&&b.value===!0&&T.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(Te("aside",{ref:"content",class:je.value,style:Ie.value},T,"contentclose",e.noSwipeClose!==!0&&m.value===!0,()=>Xe.value)),S("div",{class:"q-drawer-container"},n)}}}),Mt=M({name:"QPageContainer",setup(e,{slots:i}){const{proxy:{$q:o}}=R(),u=we(te,P);if(u===P)return console.error("QPageContainer needs to be child of QLayout"),P;Me(ot,!0);const t=v(()=>{const a={};return u.header.space===!0&&(a.paddingTop=`${u.header.size}px`),u.right.space===!0&&(a[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${u.right.size}px`),u.footer.space===!0&&(a.paddingBottom=`${u.footer.size}px`),u.left.space===!0&&(a[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${u.left.size}px`),a});return()=>S("div",{class:"q-page-container",style:t.value},ee(i.default))}});const{passive:Qe}=ge,Vt=["both","horizontal","vertical"];var Ft=M({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Vt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:i}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let u=null,t,a;C(()=>e.scrollTarget,()=>{c(),d()});function s(){u!==null&&u();const w=Math.max(0,Lt(t)),p=_t(t),h={top:w-o.position.top,left:p-o.position.left};if(e.axis==="vertical"&&h.top===0||e.axis==="horizontal"&&h.left===0)return;const m=Math.abs(h.top)>=Math.abs(h.left)?h.top<0?"up":"down":h.left<0?"left":"right";o.position={top:w,left:p},o.directionChanged=o.direction!==m,o.delta=h,o.directionChanged===!0&&(o.direction=m,o.inflectionPoint=o.position),i("scroll",{...o})}function d(){t=Tt(a,e.scrollTarget),t.addEventListener("scroll",r,Qe),r(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",r,Qe),t=void 0)}function r(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(u===null){const[p,h]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];u=()=>{h(p),u=null}}}const{proxy:l}=R();return C(()=>l.$q.lang.rtl,s),j(()=>{a=l.$el.parentNode,d()}),U(()=>{u!==null&&u(),c()}),Object.assign(l,{trigger:r,getPosition:()=>o}),pe}}),Ht=M({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:i,emit:o}){const{proxy:{$q:u}}=R(),t=x(null),a=x(u.screen.height),s=x(e.container===!0?0:u.screen.width),d=x({position:0,direction:"down",inflectionPoint:0}),c=x(0),r=x(De.value===!0?0:ve()),l=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=v(()=>e.container===!1?{minHeight:u.screen.height+"px"}:null),p=v(()=>r.value!==0?{[u.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),h=v(()=>r.value!==0?{[u.lang.rtl===!0?"right":"left"]:0,[u.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function m(y){if(e.container===!0||document.qScrollPrevented!==!0){const q={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};d.value=q,e.onScroll!==void 0&&o("scroll",q)}}function B(y){const{height:q,width:_}=y;let V=!1;a.value!==q&&(V=!0,a.value=q,e.onScrollHeight!==void 0&&o("scrollHeight",q),b()),s.value!==_&&(V=!0,s.value=_),V===!0&&e.onResize!==void 0&&o("resize",y)}function k({height:y}){c.value!==y&&(c.value=y,b())}function b(){if(e.container===!0){const y=a.value>c.value?ve():0;r.value!==y&&(r.value=y)}}let f=null;const z={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:r,totalWidth:v(()=>s.value+r.value),rows:v(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:Z({size:0,offset:0,space:!1}),right:Z({size:300,offset:0,space:!1}),footer:Z({size:0,offset:0,space:!1}),left:Z({size:300,offset:0,space:!1}),scroll:d,animate(){f!==null?clearTimeout(f):document.body.classList.add("q-body--layout-animate"),f=setTimeout(()=>{f=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,q,_){z[y][q]=_}};if(Me(te,z),ve()>0){let _=function(){y=null,q.classList.remove("hide-scrollbar")},V=function(){if(y===null){if(q.scrollHeight>u.screen.height)return;q.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(_,300)},W=function(F){y!==null&&F==="remove"&&(clearTimeout(y),_()),window[`${F}EventListener`]("resize",V)},y=null;const q=document.body;C(()=>e.container!==!0?"add":"remove",W),e.container!==!0&&W("add"),it(()=>{W("remove")})}return()=>{const y=lt(i.default,[S(Ft,{onScroll:m}),S(be,{onResize:B})]),q=S("div",{class:l.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:t},[S(be,{onResize:k}),S("div",{class:"absolute-full",style:p.value},[S("div",{class:"scroll",style:h.value},[q])])]):q}}});const Nt=rt({__name:"MainLayout",setup(e){const i=[{icon:"home",title:"\u756A\u5267\u64AD\u653E\u91CF\u6392\u884C",link:"./play"},{icon:"home",title:"\u756A\u5267\u8BC4\u5206\u6392\u884C",link:"./score"},{icon:"home",title:"\u756A\u5267\u5206\u7C7B",link:"./sort"}],o=x(!1);function u(){o.value=!o.value}return(t,a)=>{const s=st("router-view");return Le(),ut(Ht,{view:"hHh Lpr fFf"},{default:O(()=>[L(Et,{elevated:""},{default:O(()=>[L($t,null,{default:O(()=>[L(ct,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:u}),L(Bt,null,{default:O(()=>[fe(" BILIBILI \u756A\u5267\u5206\u6790 ")]),_:1})]),_:1})]),_:1}),L(Dt,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=d=>o.value=d),"show-if-above":"",bordered:""},{default:O(()=>[L(yt,null,{default:O(()=>[L(_e,{header:""},{default:O(()=>[fe(" \u699C\u5355\u5217\u8868 ")]),_:1}),(Le(),dt(vt,null,ft(i,(d,c)=>L(bt,{clickable:"",key:c,to:d.link},{default:O(()=>[L(Be,{avatar:""},{default:O(()=>[L(ht,{name:d.icon},null,8,["name"])]),_:2},1024),L(Be,null,{default:O(()=>[L(_e,null,{default:O(()=>[fe(mt(d.title),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"])),64))]),_:1})]),_:1},8,["modelValue"]),L(Mt,null,{default:O(()=>[L(s)]),_:1})]),_:1})}}});export{Nt as default};
