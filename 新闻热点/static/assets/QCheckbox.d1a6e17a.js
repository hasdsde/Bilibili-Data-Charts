import{u as he,a as pe,b as He,c as Le,d as je,e as Qe,f as Ke,g as Ue}from"./use-timeout.b3009c07.js";import{c as be,a as i,h as r,g as D,z as Ne,w as O,f as Fe,o as Y,A as Ge,r as x,B as We,i as Re,C as Ze,m as fe,n as Ae,D as Ee,E as Je,F as Xe,G as J,Q as ve,q as Ye,b as G,T as me,H as ue,I as et,J as tt,K as ot,L as lt,M as nt,x as at,O as ye,P as it,k as ut,l as rt,j as st,t as N}from"./index.5d1b3584.js";const dt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},re={xs:2,sm:4,md:8,lg:16,xl:24};var Ut=be({name:"QSeparator",props:{...he,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const o=D(),t=pe(e,o.proxy.$q),l=i(()=>e.vertical===!0?"vertical":"horizontal"),s=i(()=>` q-separator--${l.value}`),u=i(()=>e.inset!==!1?`${s.value}-${dt[e.inset]}`:""),a=i(()=>`q-separator${s.value}${u.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(t.value===!0?" q-separator--dark":"")),f=i(()=>{const m={};if(e.size!==void 0&&(m[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const y=e.spaced===!0?`${re.md}px`:e.spaced in re?`${re[e.spaced]}px`:e.spaced,g=e.vertical===!0?["Left","Right"]:["Top","Bottom"];m[`margin${g[0]}`]=m[`margin${g[1]}`]=y}return m});return()=>r("hr",{class:a.value,style:f.value,"aria-orientation":l.value})}});function ct({validate:e,resetValidation:o,requiresQForm:t}){const l=Ne(Ge,!1);if(l!==!1){const{props:s,proxy:u}=D();Object.assign(u,{validate:e,resetValidation:o}),O(()=>s.disable,a=>{a===!0?(typeof o=="function"&&o(),l.unbindComponent(u)):l.bindComponent(u)}),Fe(()=>{s.disable!==!0&&l.bindComponent(u)}),Y(()=>{s.disable!==!0&&l.unbindComponent(u)})}else t===!0&&console.error("Parent QForm not found on useFormChild()!")}const qe=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Ce=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ke=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ee=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,te=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,se={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>qe.test(e),hexaColor:e=>Ce.test(e),hexOrHexaColor:e=>ke.test(e),rgbColor:e=>ee.test(e),rgbaColor:e=>te.test(e),rgbOrRgbaColor:e=>ee.test(e)||te.test(e),hexOrRgbColor:e=>qe.test(e)||ee.test(e),hexaOrRgbaColor:e=>Ce.test(e)||te.test(e),anyColor:e=>ke.test(e)||ee.test(e)||te.test(e)},ft=[!0,!1,"ondemand"],vt={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>ft.includes(e)}};function mt(e,o){const{props:t,proxy:l}=D(),s=x(!1),u=x(null),a=x(null);ct({validate:p,resetValidation:B});let f=0,m;const y=i(()=>t.rules!==void 0&&t.rules!==null&&t.rules.length>0),g=i(()=>t.disable!==!0&&y.value===!0),k=i(()=>t.error===!0||s.value===!0),w=i(()=>typeof t.errorMessage=="string"&&t.errorMessage.length>0?t.errorMessage:u.value);O(()=>t.modelValue,()=>{F()}),O(()=>t.reactiveRules,S=>{S===!0?m===void 0&&(m=O(()=>t.rules,()=>{F(!0)})):m!==void 0&&(m(),m=void 0)},{immediate:!0}),O(e,S=>{S===!0?a.value===null&&(a.value=!1):a.value===!1&&(a.value=!0,g.value===!0&&t.lazyRules!=="ondemand"&&o.value===!1&&$())});function B(){f++,o.value=!1,a.value=null,s.value=!1,u.value=null,$.cancel()}function p(S=t.modelValue){if(g.value!==!0)return!0;const R=++f,I=o.value!==!0?()=>{a.value=!0}:()=>{},V=(b,h)=>{b===!0&&I(),s.value=b,u.value=h||null,o.value=!1},E=[];for(let b=0;b<t.rules.length;b++){const h=t.rules[b];let q;if(typeof h=="function"?q=h(S,se):typeof h=="string"&&se[h]!==void 0&&(q=se[h](S)),q===!1||typeof q=="string")return V(!0,q),!1;q!==!0&&q!==void 0&&E.push(q)}return E.length===0?(V(!1),!0):(o.value=!0,Promise.all(E).then(b=>{if(b===void 0||Array.isArray(b)===!1||b.length===0)return R===f&&V(!1),!0;const h=b.find(q=>q===!1||typeof q=="string");return R===f&&V(h!==void 0,h),h===void 0},b=>(R===f&&(console.error(b),V(!0)),!1)))}function F(S){g.value===!0&&t.lazyRules!=="ondemand"&&(a.value===!0||t.lazyRules!==!0&&S!==!0)&&$()}const $=We(p,0);return Y(()=>{m!==void 0&&m(),$.cancel()}),Object.assign(l,{resetValidation:B,validate:p}),Re(l,"hasError",()=>k.value),{isDirtyModel:a,hasRules:y,hasError:k,errorMessage:w,validate:p,resetValidation:B}}const _e=/^on[A-Z]/;function gt(e,o){const t={listeners:x({}),attributes:x({})};function l(){const s={},u={};for(const a in e)a!=="class"&&a!=="style"&&_e.test(a)===!1&&(s[a]=e[a]);for(const a in o.props)_e.test(a)===!0&&(u[a]=o.props[a]);t.attributes.value=s,t.listeners.value=u}return Ze(l),l(),t}let de,oe=0;const C=new Array(256);for(let e=0;e<256;e++)C[e]=(e+256).toString(16).substring(1);const ht=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return o=>{const t=new Uint8Array(o);return e.getRandomValues(t),t}}return o=>{const t=[];for(let l=o;l>0;l--)t.push(Math.floor(Math.random()*256));return t}})(),we=4096;function pt(){(de===void 0||oe+16>we)&&(oe=0,de=ht(we));const e=Array.prototype.slice.call(de,oe,oe+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,C[e[0]]+C[e[1]]+C[e[2]]+C[e[3]]+"-"+C[e[4]]+C[e[5]]+"-"+C[e[6]]+C[e[7]]+"-"+C[e[8]]+C[e[9]]+"-"+C[e[10]]+C[e[11]]+C[e[12]]+C[e[13]]+C[e[14]]+C[e[15]]}let z=[],X=[];function Te(e){X=X.filter(o=>o!==e)}function bt(e){Te(e),X.push(e)}function Se(e){Te(e),X.length===0&&z.length>0&&(z[z.length-1](),z=[])}function Ie(e){X.length===0?e():z.push(e)}function yt(e){z=z.filter(o=>o!==e)}function ge(e){return e===void 0?`f_${pt()}`:e}function xt(e){return e!=null&&(""+e).length>0}const Nt={...he,...vt,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Gt=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Wt(){const{props:e,attrs:o,proxy:t,vnode:l}=D();return{isDark:pe(e,t.$q),editable:i(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:x(!1),focused:x(!1),hasPopupOpen:!1,splitAttrs:gt(o,l),targetUid:x(ge(e.for)),rootRef:x(null),targetRef:x(null),controlRef:x(null)}}function Zt(e){const{props:o,emit:t,slots:l,attrs:s,proxy:u}=D(),{$q:a}=u;let f=null;e.hasValue===void 0&&(e.hasValue=i(()=>xt(o.modelValue))),e.emitValue===void 0&&(e.emitValue=n=>{t("update:modelValue",n)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:L,onFocusout:j}),Object.assign(e,{clearValue:T,onControlFocusin:L,onControlFocusout:j,focus:h}),e.computedCounter===void 0&&(e.computedCounter=i(()=>{if(o.counter!==!1){const n=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,v=o.maxlength!==void 0?o.maxlength:o.maxValues;return n+(v!==void 0?" / "+v:"")}}));const{isDirtyModel:m,hasRules:y,hasError:g,errorMessage:k,resetValidation:w}=mt(e.focused,e.innerLoading),B=e.floatingLabel!==void 0?i(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):i(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),p=i(()=>o.bottomSlots===!0||o.hint!==void 0||y.value===!0||o.counter===!0||o.error!==null),F=i(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),$=i(()=>`q-field row no-wrap items-start q-field--${F.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(B.value===!0?" q-field--float":"")+(R.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(g.value===!0?" q-field--error":"")+(g.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&p.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),S=i(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(g.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length>0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),R=i(()=>o.labelSlot===!0||o.label!==void 0),I=i(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&g.value!==!0?` text-${o.labelColor}`:"")),V=i(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:B.value,modelValue:o.modelValue,emitValue:e.emitValue})),E=i(()=>{const n={for:e.targetUid.value};return o.disable===!0?n["aria-disabled"]="true":o.readonly===!0&&(n["aria-readonly"]="true"),n});O(()=>o.for,n=>{e.targetUid.value=ge(n)});function b(){const n=document.activeElement;let v=e.targetRef!==void 0&&e.targetRef.value;v&&(n===null||n.id!==e.targetUid.value)&&(v.hasAttribute("tabindex")===!0||(v=v.querySelector("[tabindex]")),v&&v!==n&&v.focus({preventScroll:!0}))}function h(){Ie(b)}function q(){yt(b);const n=document.activeElement;n!==null&&e.rootRef.value.contains(n)&&n.blur()}function L(n){f!==null&&(clearTimeout(f),f=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,t("focus",n))}function j(n,v){f!==null&&clearTimeout(f),f=setTimeout(()=>{f=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,t("blur",n)),v!==void 0&&v())})}function T(n){fe(n),a.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),t("update:modelValue",null),t("clear",o.modelValue),Ae(()=>{w(),a.platform.is.mobile!==!0&&(m.value=!1)})}function d(){const n=[];return l.prepend!==void 0&&n.push(r("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:J},l.prepend())),n.push(r("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},A())),g.value===!0&&o.noErrorIcon===!1&&n.push(K("error",[r(ve,{name:a.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?n.push(K("inner-loading-append",l.loading!==void 0?l.loading():[r(Ye,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&n.push(K("inner-clearable-append",[r(ve,{class:"q-field__focusable-action",tag:"button",name:o.clearIcon||a.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:T})])),l.append!==void 0&&n.push(r("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:J},l.append())),e.getInnerAppend!==void 0&&n.push(K("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&n.push(e.getControlChild()),n}function A(){const n=[];return o.prefix!==void 0&&o.prefix!==null&&n.push(r("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&n.push(e.getShadowControl()),e.getControl!==void 0?n.push(e.getControl()):l.rawControl!==void 0?n.push(l.rawControl()):l.control!==void 0&&n.push(r("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},l.control(V.value))),R.value===!0&&n.push(r("div",{class:I.value},G(l.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&n.push(r("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),n.concat(G(l.default))}function Q(){let n,v;g.value===!0?k.value!==null?(n=[r("div",{role:"alert"},k.value)],v=`q--slot-error-${k.value}`):(n=G(l.error),v="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(n=[r("div",o.hint)],v=`q--slot-hint-${o.hint}`):(n=G(l.hint),v="q--slot-hint"));const Z=o.counter===!0||l.counter!==void 0;if(o.hideBottomSpace===!0&&Z===!1&&n===void 0)return;const U=r("div",{key:v,class:"q-field__messages col"},n);return r("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:J},[o.hideBottomSpace===!0?U:r(me,{name:"q-transition--field-message"},()=>U),Z===!0?r("div",{class:"q-field__counter"},l.counter!==void 0?l.counter():e.computedCounter.value):null])}function K(n,v){return v===null?null:r("div",{key:n,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},v)}let P=!1;return Ee(()=>{P=!0}),Je(()=>{P===!0&&o.autofocus===!0&&u.focus()}),Fe(()=>{Xe.value===!0&&o.for===void 0&&(e.targetUid.value=ge()),o.autofocus===!0&&u.focus()}),Y(()=>{f!==null&&clearTimeout(f)}),Object.assign(u,{focus:h,blur:q}),function(){const v=e.getControl===void 0&&l.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...E.value}:E.value;return r("label",{ref:e.rootRef,class:[$.value,s.class],style:s.style,...v},[l.before!==void 0?r("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:J},l.before()):null,r("div",{class:"q-field__inner relative-position col self-stretch"},[r("div",{ref:e.controlRef,class:S.value,tabindex:-1,...e.controlEvents},d()),p.value===!0?Q():null]),l.after!==void 0?r("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:J},l.after()):null])}}const ce=[];function Jt(e,o){do{if(e.$options.name==="QMenu"){if(e.hide(o),e.$props.separateClosePopup===!0)return ue(e)}else if(e.__qPortal===!0){const t=ue(e);return t!==void 0&&t.$options.name==="QPopupProxy"?(e.hide(o),t):e}e=ue(e)}while(e!=null)}function qt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Ct(e,o,t,l){const s=x(!1),u=x(!1);let a=null;const f={},m=l==="dialog"&&qt(e);function y(k){if(k===!0){Se(f),u.value=!0;return}u.value=!1,s.value===!1&&(m===!1&&a===null&&(a=ot(!1,l)),s.value=!0,ce.push(e.proxy),bt(f))}function g(k){if(u.value=!1,k!==!0)return;Se(f),s.value=!1;const w=ce.indexOf(e.proxy);w!==-1&&ce.splice(w,1),a!==null&&(lt(a),a=null)}return et(()=>{g(!0)}),e.proxy.__qPortal=!0,Re(e.proxy,"contentEl",()=>o.value),{showPortal:y,hidePortal:g,portalIsActive:s,portalIsAccessible:u,renderPortal:()=>m===!0?t():s.value===!0?[r(tt,{to:a},t())]:void 0}}const kt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function _t(e,o=()=>{},t=()=>{}){return{transitionProps:i(()=>{const l=`q-transition--${e.transitionShow||o()}`,s=`q-transition--${e.transitionHide||t()}`;return{appear:!0,enterFromClass:`${l}-enter-from`,enterActiveClass:`${l}-enter-active`,enterToClass:`${l}-enter-to`,leaveFromClass:`${s}-leave-from`,leaveActiveClass:`${s}-leave-active`,leaveToClass:`${s}-leave-to`}}),transitionStyle:i(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function wt(){let e;const o=D();function t(){e=void 0}return Ee(t),Y(t),{removeTick:t,registerTick(l){e=l,Ae(()=>{e===l&&(nt(o)===!1&&e(),e=void 0)})}}}const M=[];let W;function St(e){W=e.keyCode===27}function Bt(){W===!0&&(W=!1)}function $t(e){W===!0&&(W=!1,at(e,27)===!0&&M[M.length-1](e))}function Pe(e){window[e]("keydown",St),window[e]("blur",Bt),window[e]("keyup",$t),W=!1}function Vt(e){ye.is.desktop===!0&&(M.push(e),M.length===1&&Pe("addEventListener"))}function Be(e){const o=M.indexOf(e);o>-1&&(M.splice(o,1),M.length===0&&Pe("removeEventListener"))}const H=[];function Oe(e){H[H.length-1](e)}function Ft(e){ye.is.desktop===!0&&(H.push(e),H.length===1&&document.body.addEventListener("focusin",Oe))}function $e(e){const o=H.indexOf(e);o>-1&&(H.splice(o,1),H.length===0&&document.body.removeEventListener("focusin",Oe))}let le=0;const Rt={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Ve={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Xt=be({name:"QDialog",inheritAttrs:!1,props:{...He,...kt,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...Le,"shake","click","escapeKey"],setup(e,{slots:o,emit:t,attrs:l}){const s=D(),u=x(null),a=x(!1),f=x(!1);let m=null,y=null,g,k;const w=i(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:B}=Ue(),{registerTimeout:p}=je(),{registerTick:F,removeTick:$}=wt(),{transitionProps:S,transitionStyle:R}=_t(e,()=>Ve[e.position][0],()=>Ve[e.position][1]),{showPortal:I,hidePortal:V,portalIsAccessible:E,renderPortal:b}=Ct(s,u,Me,"dialog"),{hide:h}=Qe({showing:a,hideOnRouteChange:w,handleShow:Q,handleHide:K,processOnMount:!0}),{addToHistory:q,removeFromHistory:L}=Ke(a,h,w),j=i(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Rt[e.position]}`+(f.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),T=i(()=>a.value===!0&&e.seamless!==!0),d=i(()=>e.autoClose===!0?{onClick:De}:{}),A=i(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${T.value===!0?"modal":"seamless"}`,l.class]);O(()=>e.maximized,c=>{a.value===!0&&U(c)}),O(T,c=>{B(c),c===!0?(Ft(ne),Vt(v)):($e(ne),Be(v))});function Q(c){q(),y=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,U(e.maximized),I(),f.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),F(P)):$(),p(()=>{if(s.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:_,bottom:ae}=document.activeElement.getBoundingClientRect(),{innerHeight:xe}=window,ie=window.visualViewport!==void 0?window.visualViewport.height:xe;_>0&&ae>ie/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-ie,ae>=xe?1/0:Math.ceil(document.scrollingElement.scrollTop+ae-ie/2))),document.activeElement.scrollIntoView()}k=!0,u.value.click(),k=!1}I(!0),f.value=!1,t("show",c)},e.transitionDuration)}function K(c){$(),L(),Z(!0),f.value=!0,V(),y!==null&&(((c&&c.type.indexOf("key")===0?y.closest('[tabindex]:not([tabindex^="-"])'):void 0)||y).focus(),y=null),p(()=>{V(!0),f.value=!1,t("hide",c)},e.transitionDuration)}function P(c){Ie(()=>{let _=u.value;_===null||_.contains(document.activeElement)===!0||(_=(c!==""?_.querySelector(c):null)||_.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||_.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||_.querySelector("[autofocus], [data-autofocus]")||_,_.focus({preventScroll:!0}))})}function n(c){c&&typeof c.focus=="function"?c.focus({preventScroll:!0}):P(),t("shake");const _=u.value;_!==null&&(_.classList.remove("q-animate--scale"),_.classList.add("q-animate--scale"),m!==null&&clearTimeout(m),m=setTimeout(()=>{m=null,u.value!==null&&(_.classList.remove("q-animate--scale"),P())},170))}function v(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&n():(t("escapeKey"),h()))}function Z(c){m!==null&&(clearTimeout(m),m=null),(c===!0||a.value===!0)&&(U(!1),e.seamless!==!0&&(B(!1),$e(ne),Be(v))),c!==!0&&(y=null)}function U(c){c===!0?g!==!0&&(le<1&&document.body.classList.add("q-body--dialog"),le++,g=!0):g===!0&&(le<2&&document.body.classList.remove("q-body--dialog"),le--,g=!1)}function De(c){k!==!0&&(h(c),t("click",c))}function ze(c){e.persistent!==!0&&e.noBackdropDismiss!==!0?h(c):e.noShake!==!0&&n()}function ne(c){e.allowFocusOutside!==!0&&E.value===!0&&it(u.value,c.target)!==!0&&P('[tabindex]:not([tabindex="-1"])')}Object.assign(s.proxy,{focus:P,shake:n,__updateRefocusTarget(c){y=c||null}}),Y(Z);function Me(){return r("div",{role:"dialog","aria-modal":T.value===!0?"true":"false",...l,class:A.value},[r(me,{name:"q-transition--fade",appear:!0},()=>T.value===!0?r("div",{class:"q-dialog__backdrop fixed-full",style:R.value,"aria-hidden":"true",tabindex:-1,onClick:ze}):null),r(me,S.value,()=>a.value===!0?r("div",{ref:u,class:j.value,style:R.value,tabindex:-1,...d.value},G(o.default)):null)])}return b}});const At={name:String};function Et(e={}){return(o,t,l)=>{o[t](r("input",{class:"hidden"+(l||""),...e.value}))}}function Yt(e){return i(()=>e.name||e.for)}const Tt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,It=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Pt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Ot=/[a-z0-9_ -]$/i;function eo(e){return function(t){if(t.type==="compositionend"||t.type==="change"){if(t.target.qComposing!==!0)return;t.target.qComposing=!1,e(t)}else t.type==="compositionupdate"&&t.target.qComposing!==!0&&typeof t.data=="string"&&(ye.is.firefox===!0?Ot.test(t.data)===!1:Tt.test(t.data)===!0||It.test(t.data)===!0||Pt.test(t.data)===!0)===!0&&(t.target.qComposing=!0)}}function Dt(e,o){const t=x(null),l=i(()=>e.disable===!0?null:r("span",{ref:t,class:"no-outline",tabindex:-1}));function s(u){const a=o.value;u!==void 0&&u.type.indexOf("key")===0?a!==null&&document.activeElement!==a&&a.contains(document.activeElement)===!0&&a.focus():t.value!==null&&(u===void 0||a!==null&&a.contains(u.target)===!0)&&t.value.focus()}return{refocusTargetEl:l,refocusTarget:s}}var zt={xs:30,sm:35,md:40,lg:50,xl:60};const Mt={...he,...st,...At,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Ht=["update:modelValue"];function Lt(e,o){const{props:t,slots:l,emit:s,proxy:u}=D(),{$q:a}=u,f=pe(t,a),m=x(null),{refocusTargetEl:y,refocusTarget:g}=Dt(t,m),k=ut(t,zt),w=i(()=>t.val!==void 0&&Array.isArray(t.modelValue)),B=i(()=>{const d=N(t.val);return w.value===!0?t.modelValue.findIndex(A=>N(A)===d):-1}),p=i(()=>w.value===!0?B.value>-1:N(t.modelValue)===N(t.trueValue)),F=i(()=>w.value===!0?B.value===-1:N(t.modelValue)===N(t.falseValue)),$=i(()=>p.value===!1&&F.value===!1),S=i(()=>t.disable===!0?-1:t.tabindex||0),R=i(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(t.disable===!0?" disabled":"")+(f.value===!0?` q-${e}--dark`:"")+(t.dense===!0?` q-${e}--dense`:"")+(t.leftLabel===!0?" reverse":"")),I=i(()=>{const d=p.value===!0?"truthy":F.value===!0?"falsy":"indet",A=t.color!==void 0&&(t.keepColor===!0||(e==="toggle"?p.value===!0:F.value!==!0))?` text-${t.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${d}${A}`}),V=i(()=>{const d={type:"checkbox"};return t.name!==void 0&&Object.assign(d,{".checked":p.value,"^checked":p.value===!0?"checked":void 0,name:t.name,value:w.value===!0?t.val:t.trueValue}),d}),E=Et(V),b=i(()=>{const d={tabindex:S.value,role:e==="toggle"?"switch":"checkbox","aria-label":t.label,"aria-checked":$.value===!0?"mixed":p.value===!0?"true":"false"};return t.disable===!0&&(d["aria-disabled"]="true"),d});function h(d){d!==void 0&&(fe(d),g(d)),t.disable!==!0&&s("update:modelValue",q(),d)}function q(){if(w.value===!0){if(p.value===!0){const d=t.modelValue.slice();return d.splice(B.value,1),d}return t.modelValue.concat([t.val])}if(p.value===!0){if(t.toggleOrder!=="ft"||t.toggleIndeterminate===!1)return t.falseValue}else if(F.value===!0){if(t.toggleOrder==="ft"||t.toggleIndeterminate===!1)return t.trueValue}else return t.toggleOrder!=="ft"?t.trueValue:t.falseValue;return t.indeterminateValue}function L(d){(d.keyCode===13||d.keyCode===32)&&fe(d)}function j(d){(d.keyCode===13||d.keyCode===32)&&h(d)}const T=o(p,$);return Object.assign(u,{toggle:h}),()=>{const d=T();t.disable!==!0&&E(d,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const A=[r("div",{class:I.value,style:k.value,"aria-hidden":"true"},d)];y.value!==null&&A.push(y.value);const Q=t.label!==void 0?rt(l.default,[t.label]):G(l.default);return Q!==void 0&&A.push(r("div",{class:`q-${e}__label q-anchor--skip`},Q)),r("div",{ref:m,class:R.value,...b.value,onClick:h,onKeydown:L,onKeyup:j},A)}}const jt=r("div",{key:"svg",class:"q-checkbox__bg absolute"},[r("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[r("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),r("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var to=be({name:"QCheckbox",props:Mt,emits:Ht,setup(e){function o(t,l){const s=i(()=>(t.value===!0?e.checkedIcon:l.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>s.value!==null?[r("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[r(ve,{class:"q-checkbox__icon",name:s.value})])]:[jt]}return Lt("checkbox",o)}});export{Vt as A,to as Q,At as a,Gt as b,Yt as c,Wt as d,Zt as e,xt as f,eo as g,Ie as h,Dt as i,Et as j,Mt as k,Ht as l,Lt as m,Xt as n,zt as o,Ut as p,ce as q,kt as r,wt as s,_t as t,Nt as u,Ct as v,Ft as w,$e as x,Be as y,Jt as z};
