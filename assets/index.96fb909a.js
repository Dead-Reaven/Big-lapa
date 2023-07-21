function Pa(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in e)){var u=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,u.get?u:{enumerable:!0,get:function(){return n[r]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const Ba=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const i of u)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(u){const i={};return u.integrity&&(i.integrity=u.integrity),u.referrerpolicy&&(i.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?i.credentials="include":u.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(u){if(u.ep)return;u.ep=!0;const i=n(u);fetch(u.href,i)}};Ba();var m={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0=Symbol.for("react.element"),za=Symbol.for("react.portal"),$a=Symbol.for("react.fragment"),Ta=Symbol.for("react.strict_mode"),Na=Symbol.for("react.profiler"),Ra=Symbol.for("react.provider"),Ma=Symbol.for("react.context"),Ia=Symbol.for("react.forward_ref"),Oa=Symbol.for("react.suspense"),_a=Symbol.for("react.memo"),ja=Symbol.for("react.lazy"),U3=Symbol.iterator;function Ha(e){return e===null||typeof e!="object"?null:(e=U3&&e[U3]||e["@@iterator"],typeof e=="function"?e:null)}var Ao={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Po=Object.assign,Bo={};function r4(e,t,n){this.props=e,this.context=t,this.refs=Bo,this.updater=n||Ao}r4.prototype.isReactComponent={};r4.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};r4.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zo(){}zo.prototype=r4.prototype;function Iu(e,t,n){this.props=e,this.context=t,this.refs=Bo,this.updater=n||Ao}var Ou=Iu.prototype=new zo;Ou.constructor=Iu;Po(Ou,r4.prototype);Ou.isPureReactComponent=!0;var V3=Array.isArray,$o=Object.prototype.hasOwnProperty,_u={current:null},To={key:!0,ref:!0,__self:!0,__source:!0};function No(e,t,n){var r,u={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)$o.call(t,r)&&!To.hasOwnProperty(r)&&(u[r]=t[r]);var l=arguments.length-2;if(l===1)u.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];u.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)u[r]===void 0&&(u[r]=l[r]);return{$$typeof:r0,type:e,key:i,ref:o,props:u,_owner:_u.current}}function Ua(e,t){return{$$typeof:r0,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ju(e){return typeof e=="object"&&e!==null&&e.$$typeof===r0}function Va(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var W3=/\/+/g;function qr(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Va(""+e.key):t.toString(36)}function T0(e,t,n,r,u){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case r0:case za:o=!0}}if(o)return o=e,u=u(o),e=r===""?"."+qr(o,0):r,V3(u)?(n="",e!=null&&(n=e.replace(W3,"$&/")+"/"),T0(u,t,n,"",function(c){return c})):u!=null&&(ju(u)&&(u=Ua(u,n+(!u.key||o&&o.key===u.key?"":(""+u.key).replace(W3,"$&/")+"/")+e)),t.push(u)),1;if(o=0,r=r===""?".":r+":",V3(e))for(var l=0;l<e.length;l++){i=e[l];var a=r+qr(i,l);o+=T0(i,t,n,a,u)}else if(a=Ha(e),typeof a=="function")for(e=a.call(e),l=0;!(i=e.next()).done;)i=i.value,a=r+qr(i,l++),o+=T0(i,t,n,a,u);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function p0(e,t,n){if(e==null)return e;var r=[],u=0;return T0(e,r,"","",function(i){return t.call(n,i,u++)}),r}function Wa(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},N0={transition:null},ba={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:N0,ReactCurrentOwner:_u};I.Children={map:p0,forEach:function(e,t,n){p0(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return p0(e,function(){t++}),t},toArray:function(e){return p0(e,function(t){return t})||[]},only:function(e){if(!ju(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=r4;I.Fragment=$a;I.Profiler=Na;I.PureComponent=Iu;I.StrictMode=Ta;I.Suspense=Oa;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Po({},e.props),u=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=_u.current),t.key!==void 0&&(u=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)$o.call(t,a)&&!To.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:r0,type:e.type,key:u,ref:i,props:r,_owner:o}};I.createContext=function(e){return e={$$typeof:Ma,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ra,_context:e},e.Consumer=e};I.createElement=No;I.createFactory=function(e){var t=No.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Ia,render:e}};I.isValidElement=ju;I.lazy=function(e){return{$$typeof:ja,_payload:{_status:-1,_result:e},_init:Wa}};I.memo=function(e,t){return{$$typeof:_a,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=N0.transition;N0.transition={};try{e()}finally{N0.transition=t}};I.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I.useCallback=function(e,t){return we.current.useCallback(e,t)};I.useContext=function(e){return we.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return we.current.useDeferredValue(e)};I.useEffect=function(e,t){return we.current.useEffect(e,t)};I.useId=function(){return we.current.useId()};I.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return we.current.useMemo(e,t)};I.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};I.useRef=function(e){return we.current.useRef(e)};I.useState=function(e){return we.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return we.current.useTransition()};I.version="18.2.0";m.exports=I;var ke=m.exports,Ro=Pa({__proto__:null,default:ke},[m.exports]),Mo={exports:{}},Re={},Io={exports:{}},Oo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,T){var $=P.length;P.push(T);e:for(;0<$;){var U=$-1>>>1,Q=P[U];if(0<u(Q,T))P[U]=T,P[$]=Q,$=U;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var T=P[0],$=P.pop();if($!==T){P[0]=$;e:for(var U=0,Q=P.length,Be=Q>>>1;U<Be;){var nt=2*(U+1)-1,Kt=P[nt],Ie=nt+1,rt=P[Ie];if(0>u(Kt,$))Ie<Q&&0>u(rt,Kt)?(P[U]=rt,P[Ie]=$,U=Ie):(P[U]=Kt,P[nt]=$,U=nt);else if(Ie<Q&&0>u(rt,$))P[U]=rt,P[Ie]=$,U=Ie;else break e}}return T}function u(P,T){var $=P.sortIndex-T.sortIndex;return $!==0?$:P.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var a=[],c=[],h=1,g=null,C=3,x=!1,E=!1,y=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(P){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=P)r(c),T.sortIndex=T.expirationTime,t(a,T);else break;T=n(c)}}function w(P){if(y=!1,f(P),!E)if(n(a)!==null)E=!0,a4(F);else{var T=n(c);T!==null&&s4(w,T.startTime-P)}}function F(P,T){E=!1,y&&(y=!1,p(z),z=-1),x=!0;var $=C;try{for(f(T),g=n(a);g!==null&&(!(g.expirationTime>T)||P&&!Pe());){var U=g.callback;if(typeof U=="function"){g.callback=null,C=g.priorityLevel;var Q=U(g.expirationTime<=T);T=e.unstable_now(),typeof Q=="function"?g.callback=Q:g===n(a)&&r(a),f(T)}else r(a);g=n(a)}if(g!==null)var Be=!0;else{var nt=n(c);nt!==null&&s4(w,nt.startTime-T),Be=!1}return Be}finally{g=null,C=$,x=!1}}var L=!1,k=null,z=-1,H=5,N=-1;function Pe(){return!(e.unstable_now()-N<H)}function Qt(){if(k!==null){var P=e.unstable_now();N=P;var T=!0;try{T=k(!0,P)}finally{T?Gt():(L=!1,k=null)}}else L=!1}var Gt;if(typeof d=="function")Gt=function(){d(Qt)};else if(typeof MessageChannel!="undefined"){var c0=new MessageChannel,Kr=c0.port2;c0.port1.onmessage=Qt,Gt=function(){Kr.postMessage(null)}}else Gt=function(){A(Qt,0)};function a4(P){k=P,L||(L=!0,Gt())}function s4(P,T){z=A(function(){P(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){E||x||(E=!0,a4(F))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return C},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(P){switch(C){case 1:case 2:case 3:var T=3;break;default:T=C}var $=C;C=T;try{return P()}finally{C=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,T){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var $=C;C=P;try{return T()}finally{C=$}},e.unstable_scheduleCallback=function(P,T,$){var U=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?U+$:U):$=U,P){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=$+Q,P={id:h++,callback:T,priorityLevel:P,startTime:$,expirationTime:Q,sortIndex:-1},$>U?(P.sortIndex=$,t(c,P),n(a)===null&&P===n(c)&&(y?(p(z),z=-1):y=!0,s4(w,$-U))):(P.sortIndex=Q,t(a,P),E||x||(E=!0,a4(F))),P},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(P){var T=C;return function(){var $=C;C=T;try{return P.apply(this,arguments)}finally{C=$}}}})(Oo);Io.exports=Oo;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _o=m.exports,Ne=Io.exports;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jo=new Set,R4={};function mn(e,t){Zn(e,t),Zn(e+"Capture",t)}function Zn(e,t){for(R4[e]=t,e=0;e<t.length;e++)jo.add(t[e])}var gt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),N1=Object.prototype.hasOwnProperty,Za=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b3={},Z3={};function Qa(e){return N1.call(Z3,e)?!0:N1.call(b3,e)?!1:Za.test(e)?Z3[e]=!0:(b3[e]=!0,!1)}function Ga(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ka(e,t,n,r){if(t===null||typeof t=="undefined"||Ga(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,u,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=u,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hu=/[\-:]([a-z])/g;function Uu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hu,Uu);fe[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hu,Uu);fe[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hu,Uu);fe[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vu(e,t,n,r){var u=fe.hasOwnProperty(t)?fe[t]:null;(u!==null?u.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ka(t,n,u,r)&&(n=null),r||u===null?Qa(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):u.mustUseProperty?e[u.propertyName]=n===null?u.type===3?!1:"":n:(t=u.attributeName,r=u.attributeNamespace,n===null?e.removeAttribute(t):(u=u.type,n=u===3||u===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yt=_o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,f0=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),Dn=Symbol.for("react.fragment"),Wu=Symbol.for("react.strict_mode"),R1=Symbol.for("react.profiler"),Ho=Symbol.for("react.provider"),Uo=Symbol.for("react.context"),bu=Symbol.for("react.forward_ref"),M1=Symbol.for("react.suspense"),I1=Symbol.for("react.suspense_list"),Zu=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),Vo=Symbol.for("react.offscreen"),Q3=Symbol.iterator;function c4(e){return e===null||typeof e!="object"?null:(e=Q3&&e[Q3]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Jr;function w4(e){if(Jr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jr=t&&t[1]||""}return`
`+Jr+e}var e1=!1;function t1(e,t){if(!e||e1)return"";e1=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var u=c.stack.split(`
`),i=r.stack.split(`
`),o=u.length-1,l=i.length-1;1<=o&&0<=l&&u[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(u[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||u[o]!==i[l]){var a=`
`+u[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=l);break}}}finally{e1=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?w4(e):""}function Xa(e){switch(e.tag){case 5:return w4(e.type);case 16:return w4("Lazy");case 13:return w4("Suspense");case 19:return w4("SuspenseList");case 0:case 2:case 15:return e=t1(e.type,!1),e;case 11:return e=t1(e.type.render,!1),e;case 1:return e=t1(e.type,!0),e;default:return""}}function O1(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dn:return"Fragment";case Fn:return"Portal";case R1:return"Profiler";case Wu:return"StrictMode";case M1:return"Suspense";case I1:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Uo:return(e.displayName||"Context")+".Consumer";case Ho:return(e._context.displayName||"Context")+".Provider";case bu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zu:return t=e.displayName||null,t!==null?t:O1(e.type)||"Memo";case kt:t=e._payload,e=e._init;try{return O1(e(t))}catch{}}return null}function Ya(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return O1(t);case 8:return t===Wu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qa(e){var t=Wo(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var u=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function h0(e){e._valueTracker||(e._valueTracker=qa(e))}function bo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wo(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function K0(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function _1(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function G3(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zo(e,t){t=t.checked,t!=null&&Vu(e,"checked",t,!1)}function j1(e,t){Zo(e,t);var n=Ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?H1(e,t.type,n):t.hasOwnProperty("defaultValue")&&H1(e,t.type,Ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function K3(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function H1(e,t,n){(t!=="number"||K0(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var E4=Array.isArray;function On(e,t,n,r){if(e=e.options,t){t={};for(var u=0;u<n.length;u++)t["$"+n[u]]=!0;for(n=0;n<e.length;n++)u=t.hasOwnProperty("$"+e[n].value),e[n].selected!==u&&(e[n].selected=u),u&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,u=0;u<e.length;u++){if(e[u].value===n){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function U1(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function X3(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(E4(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ht(n)}}function Qo(e,t){var n=Ht(t.value),r=Ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Y3(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Go(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function V1(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Go(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var m0,Ko=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,u){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,u)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(m0=m0||document.createElement("div"),m0.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=m0.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function M4(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var F4={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ja=["Webkit","ms","Moz","O"];Object.keys(F4).forEach(function(e){Ja.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),F4[t]=F4[e]})});function Xo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||F4.hasOwnProperty(e)&&F4[e]?(""+t).trim():t+"px"}function Yo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,u=Xo(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,u):e[n]=u}}var es=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function W1(e,t){if(t){if(es[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function b1(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Z1=null;function Qu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Q1=null,_n=null,jn=null;function q3(e){if(e=o0(e)){if(typeof Q1!="function")throw Error(D(280));var t=e.stateNode;t&&(t=Ar(t),Q1(e.stateNode,e.type,t))}}function qo(e){_n?jn?jn.push(e):jn=[e]:_n=e}function Jo(){if(_n){var e=_n,t=jn;if(jn=_n=null,q3(e),t)for(e=0;e<t.length;e++)q3(t[e])}}function el(e,t){return e(t)}function tl(){}var n1=!1;function nl(e,t,n){if(n1)return e(t,n);n1=!0;try{return el(e,t,n)}finally{n1=!1,(_n!==null||jn!==null)&&(tl(),Jo())}}function I4(e,t){var n=e.stateNode;if(n===null)return null;var r=Ar(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var G1=!1;if(gt)try{var d4={};Object.defineProperty(d4,"passive",{get:function(){G1=!0}}),window.addEventListener("test",d4,d4),window.removeEventListener("test",d4,d4)}catch{G1=!1}function ts(e,t,n,r,u,i,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var D4=!1,X0=null,Y0=!1,K1=null,ns={onError:function(e){D4=!0,X0=e}};function rs(e,t,n,r,u,i,o,l,a){D4=!1,X0=null,ts.apply(ns,arguments)}function us(e,t,n,r,u,i,o,l,a){if(rs.apply(this,arguments),D4){if(D4){var c=X0;D4=!1,X0=null}else throw Error(D(198));Y0||(Y0=!0,K1=c)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function J3(e){if(gn(e)!==e)throw Error(D(188))}function is(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var u=n.return;if(u===null)break;var i=u.alternate;if(i===null){if(r=u.return,r!==null){n=r;continue}break}if(u.child===i.child){for(i=u.child;i;){if(i===n)return J3(u),e;if(i===r)return J3(u),t;i=i.sibling}throw Error(D(188))}if(n.return!==r.return)n=u,r=i;else{for(var o=!1,l=u.child;l;){if(l===n){o=!0,n=u,r=i;break}if(l===r){o=!0,r=u,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=u;break}if(l===r){o=!0,r=i,n=u;break}l=l.sibling}if(!o)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function ul(e){return e=is(e),e!==null?il(e):null}function il(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=il(e);if(t!==null)return t;e=e.sibling}return null}var ol=Ne.unstable_scheduleCallback,ei=Ne.unstable_cancelCallback,os=Ne.unstable_shouldYield,ls=Ne.unstable_requestPaint,J=Ne.unstable_now,as=Ne.unstable_getCurrentPriorityLevel,Gu=Ne.unstable_ImmediatePriority,ll=Ne.unstable_UserBlockingPriority,q0=Ne.unstable_NormalPriority,ss=Ne.unstable_LowPriority,al=Ne.unstable_IdlePriority,kr=null,lt=null;function cs(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(kr,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:fs,ds=Math.log,ps=Math.LN2;function fs(e){return e>>>=0,e===0?32:31-(ds(e)/ps|0)|0}var g0=64,C0=4194304;function S4(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function J0(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,u=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~u;l!==0?r=S4(l):(i&=o,i!==0&&(r=S4(i)))}else o=n&~u,o!==0?r=S4(o):i!==0&&(r=S4(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&u)===0&&(u=r&-r,i=t&-t,u>=i||u===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),u=1<<n,r|=e[n],t&=~u;return r}function hs(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ms(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Xe(i),l=1<<o,a=u[o];a===-1?((l&n)===0||(l&r)!==0)&&(u[o]=hs(l,t)):a<=t&&(e.expiredLanes|=l),i&=~l}}function X1(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sl(){var e=g0;return g0<<=1,(g0&4194240)===0&&(g0=64),e}function r1(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function u0(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function gs(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var u=31-Xe(n),i=1<<u;t[u]=0,r[u]=-1,e[u]=-1,n&=~i}}function Ku(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),u=1<<r;u&t|e[r]&t&&(e[r]|=t),n&=~u}}var j=0;function cl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var dl,Xu,pl,fl,hl,Y1=!1,v0=[],zt=null,$t=null,Tt=null,O4=new Map,_4=new Map,Dt=[],Cs="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ti(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":O4.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_4.delete(t.pointerId)}}function p4(e,t,n,r,u,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[u]},t!==null&&(t=o0(t),t!==null&&Xu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function vs(e,t,n,r,u){switch(t){case"focusin":return zt=p4(zt,e,t,n,r,u),!0;case"dragenter":return $t=p4($t,e,t,n,r,u),!0;case"mouseover":return Tt=p4(Tt,e,t,n,r,u),!0;case"pointerover":var i=u.pointerId;return O4.set(i,p4(O4.get(i)||null,e,t,n,r,u)),!0;case"gotpointercapture":return i=u.pointerId,_4.set(i,p4(_4.get(i)||null,e,t,n,r,u)),!0}return!1}function ml(e){var t=Jt(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=rl(n),t!==null){e.blockedOn=t,hl(e.priority,function(){pl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function R0(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=q1(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Z1=r,n.target.dispatchEvent(r),Z1=null}else return t=o0(n),t!==null&&Xu(t),e.blockedOn=n,!1;t.shift()}return!0}function ni(e,t,n){R0(e)&&n.delete(t)}function xs(){Y1=!1,zt!==null&&R0(zt)&&(zt=null),$t!==null&&R0($t)&&($t=null),Tt!==null&&R0(Tt)&&(Tt=null),O4.forEach(ni),_4.forEach(ni)}function f4(e,t){e.blockedOn===t&&(e.blockedOn=null,Y1||(Y1=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,xs)))}function j4(e){function t(u){return f4(u,e)}if(0<v0.length){f4(v0[0],e);for(var n=1;n<v0.length;n++){var r=v0[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zt!==null&&f4(zt,e),$t!==null&&f4($t,e),Tt!==null&&f4(Tt,e),O4.forEach(t),_4.forEach(t),n=0;n<Dt.length;n++)r=Dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)ml(n),n.blockedOn===null&&Dt.shift()}var Hn=yt.ReactCurrentBatchConfig,er=!0;function ys(e,t,n,r){var u=j,i=Hn.transition;Hn.transition=null;try{j=1,Yu(e,t,n,r)}finally{j=u,Hn.transition=i}}function ws(e,t,n,r){var u=j,i=Hn.transition;Hn.transition=null;try{j=4,Yu(e,t,n,r)}finally{j=u,Hn.transition=i}}function Yu(e,t,n,r){if(er){var u=q1(e,t,n,r);if(u===null)f1(e,t,r,tr,n),ti(e,r);else if(vs(u,e,t,n,r))r.stopPropagation();else if(ti(e,r),t&4&&-1<Cs.indexOf(e)){for(;u!==null;){var i=o0(u);if(i!==null&&dl(i),i=q1(e,t,n,r),i===null&&f1(e,t,r,tr,n),i===u)break;u=i}u!==null&&r.stopPropagation()}else f1(e,t,r,null,n)}}var tr=null;function q1(e,t,n,r){if(tr=null,e=Qu(r),e=Jt(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return tr=e,null}function gl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(as()){case Gu:return 1;case ll:return 4;case q0:case ss:return 16;case al:return 536870912;default:return 16}default:return 16}}var At=null,qu=null,M0=null;function Cl(){if(M0)return M0;var e,t=qu,n=t.length,r,u="value"in At?At.value:At.textContent,i=u.length;for(e=0;e<n&&t[e]===u[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===u[i-r];r++);return M0=u.slice(e,1<r?1-r:void 0)}function I0(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function x0(){return!0}function ri(){return!1}function Me(e){function t(n,r,u,i,o){this._reactName=n,this._targetInst=u,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?x0:ri,this.isPropagationStopped=ri,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=x0)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=x0)},persist:function(){},isPersistent:x0}),t}var u4={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ju=Me(u4),i0=Y({},u4,{view:0,detail:0}),Es=Me(i0),u1,i1,h4,Fr=Y({},i0,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:e3,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==h4&&(h4&&e.type==="mousemove"?(u1=e.screenX-h4.screenX,i1=e.screenY-h4.screenY):i1=u1=0,h4=e),u1)},movementY:function(e){return"movementY"in e?e.movementY:i1}}),ui=Me(Fr),Ss=Y({},Fr,{dataTransfer:0}),ks=Me(Ss),Fs=Y({},i0,{relatedTarget:0}),o1=Me(Fs),Ds=Y({},u4,{animationName:0,elapsedTime:0,pseudoElement:0}),Ls=Me(Ds),As=Y({},u4,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ps=Me(As),Bs=Y({},u4,{data:0}),ii=Me(Bs),zs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$s={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ts={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ns(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ts[e])?!!t[e]:!1}function e3(){return Ns}var Rs=Y({},i0,{key:function(e){if(e.key){var t=zs[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=I0(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$s[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:e3,charCode:function(e){return e.type==="keypress"?I0(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?I0(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ms=Me(Rs),Is=Y({},Fr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oi=Me(Is),Os=Y({},i0,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:e3}),_s=Me(Os),js=Y({},u4,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hs=Me(js),Us=Y({},Fr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vs=Me(Us),Ws=[9,13,27,32],t3=gt&&"CompositionEvent"in window,L4=null;gt&&"documentMode"in document&&(L4=document.documentMode);var bs=gt&&"TextEvent"in window&&!L4,vl=gt&&(!t3||L4&&8<L4&&11>=L4),li=String.fromCharCode(32),ai=!1;function xl(e,t){switch(e){case"keyup":return Ws.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function Zs(e,t){switch(e){case"compositionend":return yl(t);case"keypress":return t.which!==32?null:(ai=!0,li);case"textInput":return e=t.data,e===li&&ai?null:e;default:return null}}function Qs(e,t){if(Ln)return e==="compositionend"||!t3&&xl(e,t)?(e=Cl(),M0=qu=At=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vl&&t.locale!=="ko"?null:t.data;default:return null}}var Gs={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function si(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gs[e.type]:t==="textarea"}function wl(e,t,n,r){qo(r),t=nr(t,"onChange"),0<t.length&&(n=new Ju("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var A4=null,H4=null;function Ks(e){$l(e,0)}function Dr(e){var t=Bn(e);if(bo(t))return e}function Xs(e,t){if(e==="change")return t}var El=!1;if(gt){var l1;if(gt){var a1="oninput"in document;if(!a1){var ci=document.createElement("div");ci.setAttribute("oninput","return;"),a1=typeof ci.oninput=="function"}l1=a1}else l1=!1;El=l1&&(!document.documentMode||9<document.documentMode)}function di(){A4&&(A4.detachEvent("onpropertychange",Sl),H4=A4=null)}function Sl(e){if(e.propertyName==="value"&&Dr(H4)){var t=[];wl(t,H4,e,Qu(e)),nl(Ks,t)}}function Ys(e,t,n){e==="focusin"?(di(),A4=t,H4=n,A4.attachEvent("onpropertychange",Sl)):e==="focusout"&&di()}function qs(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dr(H4)}function Js(e,t){if(e==="click")return Dr(t)}function e5(e,t){if(e==="input"||e==="change")return Dr(t)}function t5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:t5;function U4(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var u=n[r];if(!N1.call(t,u)||!et(e[u],t[u]))return!1}return!0}function pi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fi(e,t){var n=pi(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pi(n)}}function kl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fl(){for(var e=window,t=K0();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=K0(e.document)}return t}function n3(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function n5(e){var t=Fl(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&kl(n.ownerDocument.documentElement,n)){if(r!==null&&n3(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var u=n.textContent.length,i=Math.min(r.start,u);r=r.end===void 0?i:Math.min(r.end,u),!e.extend&&i>r&&(u=r,r=i,i=u),u=fi(n,i);var o=fi(n,r);u&&o&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var r5=gt&&"documentMode"in document&&11>=document.documentMode,An=null,J1=null,P4=null,eu=!1;function hi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;eu||An==null||An!==K0(r)||(r=An,"selectionStart"in r&&n3(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),P4&&U4(P4,r)||(P4=r,r=nr(J1,"onSelect"),0<r.length&&(t=new Ju("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=An)))}function y0(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pn={animationend:y0("Animation","AnimationEnd"),animationiteration:y0("Animation","AnimationIteration"),animationstart:y0("Animation","AnimationStart"),transitionend:y0("Transition","TransitionEnd")},s1={},Dl={};gt&&(Dl=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function Lr(e){if(s1[e])return s1[e];if(!Pn[e])return e;var t=Pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Dl)return s1[e]=t[n];return e}var Ll=Lr("animationend"),Al=Lr("animationiteration"),Pl=Lr("animationstart"),Bl=Lr("transitionend"),zl=new Map,mi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vt(e,t){zl.set(e,t),mn(t,[e])}for(var c1=0;c1<mi.length;c1++){var d1=mi[c1],u5=d1.toLowerCase(),i5=d1[0].toUpperCase()+d1.slice(1);Vt(u5,"on"+i5)}Vt(Ll,"onAnimationEnd");Vt(Al,"onAnimationIteration");Vt(Pl,"onAnimationStart");Vt("dblclick","onDoubleClick");Vt("focusin","onFocus");Vt("focusout","onBlur");Vt(Bl,"onTransitionEnd");Zn("onMouseEnter",["mouseout","mouseover"]);Zn("onMouseLeave",["mouseout","mouseover"]);Zn("onPointerEnter",["pointerout","pointerover"]);Zn("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var k4="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o5=new Set("cancel close invalid load scroll toggle".split(" ").concat(k4));function gi(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,us(r,t,void 0,e),e.currentTarget=null}function $l(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],u=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==i&&u.isPropagationStopped())break e;gi(u,l,c),i=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==i&&u.isPropagationStopped())break e;gi(u,l,c),i=a}}}if(Y0)throw e=K1,Y0=!1,K1=null,e}function W(e,t){var n=t[iu];n===void 0&&(n=t[iu]=new Set);var r=e+"__bubble";n.has(r)||(Tl(t,e,2,!1),n.add(r))}function p1(e,t,n){var r=0;t&&(r|=4),Tl(n,e,r,t)}var w0="_reactListening"+Math.random().toString(36).slice(2);function V4(e){if(!e[w0]){e[w0]=!0,jo.forEach(function(n){n!=="selectionchange"&&(o5.has(n)||p1(n,!1,e),p1(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[w0]||(t[w0]=!0,p1("selectionchange",!1,t))}}function Tl(e,t,n,r){switch(gl(t)){case 1:var u=ys;break;case 4:u=ws;break;default:u=Yu}n=u.bind(null,t,n,e),u=void 0,!G1||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(t,n,{capture:!0,passive:u}):e.addEventListener(t,n,!0):u!==void 0?e.addEventListener(t,n,{passive:u}):e.addEventListener(t,n,!1)}function f1(e,t,n,r,u){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===u||l.nodeType===8&&l.parentNode===u)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===u||a.nodeType===8&&a.parentNode===u))return;o=o.return}for(;l!==null;){if(o=Jt(l),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}l=l.parentNode}}r=r.return}nl(function(){var c=i,h=Qu(n),g=[];e:{var C=zl.get(e);if(C!==void 0){var x=Ju,E=e;switch(e){case"keypress":if(I0(n)===0)break e;case"keydown":case"keyup":x=Ms;break;case"focusin":E="focus",x=o1;break;case"focusout":E="blur",x=o1;break;case"beforeblur":case"afterblur":x=o1;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ui;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=ks;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=_s;break;case Ll:case Al:case Pl:x=Ls;break;case Bl:x=Hs;break;case"scroll":x=Es;break;case"wheel":x=Vs;break;case"copy":case"cut":case"paste":x=Ps;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=oi}var y=(t&4)!==0,A=!y&&e==="scroll",p=y?C!==null?C+"Capture":null:C;y=[];for(var d=c,f;d!==null;){f=d;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,p!==null&&(w=I4(d,p),w!=null&&y.push(W4(d,w,f)))),A)break;d=d.return}0<y.length&&(C=new x(C,E,null,n,h),g.push({event:C,listeners:y}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",C&&n!==Z1&&(E=n.relatedTarget||n.fromElement)&&(Jt(E)||E[Ct]))break e;if((x||C)&&(C=h.window===h?h:(C=h.ownerDocument)?C.defaultView||C.parentWindow:window,x?(E=n.relatedTarget||n.toElement,x=c,E=E?Jt(E):null,E!==null&&(A=gn(E),E!==A||E.tag!==5&&E.tag!==6)&&(E=null)):(x=null,E=c),x!==E)){if(y=ui,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=oi,w="onPointerLeave",p="onPointerEnter",d="pointer"),A=x==null?C:Bn(x),f=E==null?C:Bn(E),C=new y(w,d+"leave",x,n,h),C.target=A,C.relatedTarget=f,w=null,Jt(h)===c&&(y=new y(p,d+"enter",E,n,h),y.target=f,y.relatedTarget=A,w=y),A=w,x&&E)t:{for(y=x,p=E,d=0,f=y;f;f=yn(f))d++;for(f=0,w=p;w;w=yn(w))f++;for(;0<d-f;)y=yn(y),d--;for(;0<f-d;)p=yn(p),f--;for(;d--;){if(y===p||p!==null&&y===p.alternate)break t;y=yn(y),p=yn(p)}y=null}else y=null;x!==null&&Ci(g,C,x,y,!1),E!==null&&A!==null&&Ci(g,A,E,y,!0)}}e:{if(C=c?Bn(c):window,x=C.nodeName&&C.nodeName.toLowerCase(),x==="select"||x==="input"&&C.type==="file")var F=Xs;else if(si(C))if(El)F=e5;else{F=qs;var L=Ys}else(x=C.nodeName)&&x.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(F=Js);if(F&&(F=F(e,c))){wl(g,F,n,h);break e}L&&L(e,C,c),e==="focusout"&&(L=C._wrapperState)&&L.controlled&&C.type==="number"&&H1(C,"number",C.value)}switch(L=c?Bn(c):window,e){case"focusin":(si(L)||L.contentEditable==="true")&&(An=L,J1=c,P4=null);break;case"focusout":P4=J1=An=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,hi(g,n,h);break;case"selectionchange":if(r5)break;case"keydown":case"keyup":hi(g,n,h)}var k;if(t3)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Ln?xl(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(vl&&n.locale!=="ko"&&(Ln||z!=="onCompositionStart"?z==="onCompositionEnd"&&Ln&&(k=Cl()):(At=h,qu="value"in At?At.value:At.textContent,Ln=!0)),L=nr(c,z),0<L.length&&(z=new ii(z,e,null,n,h),g.push({event:z,listeners:L}),k?z.data=k:(k=yl(n),k!==null&&(z.data=k)))),(k=bs?Zs(e,n):Qs(e,n))&&(c=nr(c,"onBeforeInput"),0<c.length&&(h=new ii("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:c}),h.data=k))}$l(g,t)})}function W4(e,t,n){return{instance:e,listener:t,currentTarget:n}}function nr(e,t){for(var n=t+"Capture",r=[];e!==null;){var u=e,i=u.stateNode;u.tag===5&&i!==null&&(u=i,i=I4(e,n),i!=null&&r.unshift(W4(e,i,u)),i=I4(e,t),i!=null&&r.push(W4(e,i,u))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ci(e,t,n,r,u){for(var i=t._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,u?(a=I4(n,i),a!=null&&o.unshift(W4(n,a,l))):u||(a=I4(n,i),a!=null&&o.push(W4(n,a,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var l5=/\r\n?/g,a5=/\u0000|\uFFFD/g;function vi(e){return(typeof e=="string"?e:""+e).replace(l5,`
`).replace(a5,"")}function E0(e,t,n){if(t=vi(t),vi(e)!==t&&n)throw Error(D(425))}function rr(){}var tu=null,nu=null;function ru(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var uu=typeof setTimeout=="function"?setTimeout:void 0,s5=typeof clearTimeout=="function"?clearTimeout:void 0,xi=typeof Promise=="function"?Promise:void 0,c5=typeof queueMicrotask=="function"?queueMicrotask:typeof xi!="undefined"?function(e){return xi.resolve(null).then(e).catch(d5)}:uu;function d5(e){setTimeout(function(){throw e})}function h1(e,t){var n=t,r=0;do{var u=n.nextSibling;if(e.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(r===0){e.removeChild(u),j4(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=u}while(n);j4(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var i4=Math.random().toString(36).slice(2),ot="__reactFiber$"+i4,b4="__reactProps$"+i4,Ct="__reactContainer$"+i4,iu="__reactEvents$"+i4,p5="__reactListeners$"+i4,f5="__reactHandles$"+i4;function Jt(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ct]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yi(e);e!==null;){if(n=e[ot])return n;e=yi(e)}return t}e=n,n=e.parentNode}return null}function o0(e){return e=e[ot]||e[Ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function Ar(e){return e[b4]||null}var ou=[],zn=-1;function Wt(e){return{current:e}}function Z(e){0>zn||(e.current=ou[zn],ou[zn]=null,zn--)}function V(e,t){zn++,ou[zn]=e.current,e.current=t}var Ut={},Ce=Wt(Ut),De=Wt(!1),ln=Ut;function Qn(e,t){var n=e.type.contextTypes;if(!n)return Ut;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var u={},i;for(i in n)u[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=u),u}function Le(e){return e=e.childContextTypes,e!=null}function ur(){Z(De),Z(Ce)}function wi(e,t,n){if(Ce.current!==Ut)throw Error(D(168));V(Ce,t),V(De,n)}function Nl(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var u in r)if(!(u in t))throw Error(D(108,Ya(e)||"Unknown",u));return Y({},n,r)}function ir(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ut,ln=Ce.current,V(Ce,e),V(De,De.current),!0}function Ei(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=Nl(e,t,ln),r.__reactInternalMemoizedMergedChildContext=e,Z(De),Z(Ce),V(Ce,e)):Z(De),V(De,n)}var dt=null,Pr=!1,m1=!1;function Rl(e){dt===null?dt=[e]:dt.push(e)}function h5(e){Pr=!0,Rl(e)}function bt(){if(!m1&&dt!==null){m1=!0;var e=0,t=j;try{var n=dt;for(j=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dt=null,Pr=!1}catch(u){throw dt!==null&&(dt=dt.slice(e+1)),ol(Gu,bt),u}finally{j=t,m1=!1}}return null}var $n=[],Tn=0,or=null,lr=0,Oe=[],_e=0,an=null,ft=1,ht="";function Yt(e,t){$n[Tn++]=lr,$n[Tn++]=or,or=e,lr=t}function Ml(e,t,n){Oe[_e++]=ft,Oe[_e++]=ht,Oe[_e++]=an,an=e;var r=ft;e=ht;var u=32-Xe(r)-1;r&=~(1<<u),n+=1;var i=32-Xe(t)+u;if(30<i){var o=u-u%5;i=(r&(1<<o)-1).toString(32),r>>=o,u-=o,ft=1<<32-Xe(t)+u|n<<u|r,ht=i+e}else ft=1<<i|n<<u|r,ht=e}function r3(e){e.return!==null&&(Yt(e,1),Ml(e,1,0))}function u3(e){for(;e===or;)or=$n[--Tn],$n[Tn]=null,lr=$n[--Tn],$n[Tn]=null;for(;e===an;)an=Oe[--_e],Oe[_e]=null,ht=Oe[--_e],Oe[_e]=null,ft=Oe[--_e],Oe[_e]=null}var Te=null,$e=null,G=!1,Ke=null;function Il(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Si(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,$e=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=an!==null?{id:ft,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,$e=null,!0):!1;default:return!1}}function lu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function au(e){if(G){var t=$e;if(t){var n=t;if(!Si(e,t)){if(lu(e))throw Error(D(418));t=Nt(n.nextSibling);var r=Te;t&&Si(e,t)?Il(r,n):(e.flags=e.flags&-4097|2,G=!1,Te=e)}}else{if(lu(e))throw Error(D(418));e.flags=e.flags&-4097|2,G=!1,Te=e}}}function ki(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function S0(e){if(e!==Te)return!1;if(!G)return ki(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ru(e.type,e.memoizedProps)),t&&(t=$e)){if(lu(e))throw Ol(),Error(D(418));for(;t;)Il(e,t),t=Nt(t.nextSibling)}if(ki(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=Te?Nt(e.stateNode.nextSibling):null;return!0}function Ol(){for(var e=$e;e;)e=Nt(e.nextSibling)}function Gn(){$e=Te=null,G=!1}function i3(e){Ke===null?Ke=[e]:Ke.push(e)}var m5=yt.ReactCurrentBatchConfig;function Qe(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ar=Wt(null),sr=null,Nn=null,o3=null;function l3(){o3=Nn=sr=null}function a3(e){var t=ar.current;Z(ar),e._currentValue=t}function su(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Un(e,t){sr=e,o3=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Fe=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(o3!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(sr===null)throw Error(D(308));Nn=e,sr.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var en=null;function s3(e){en===null?en=[e]:en.push(e)}function _l(e,t,n,r){var u=t.interleaved;return u===null?(n.next=n,s3(t)):(n.next=u.next,u.next=n),t.interleaved=n,vt(e,r)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ft=!1;function c3(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(O&2)!==0){var u=r.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),r.pending=t,vt(e,n)}return u=r.interleaved,u===null?(t.next=t,s3(r)):(t.next=u.next,u.next=t),r.interleaved=t,vt(e,n)}function O0(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ku(e,n)}}function Fi(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var u=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?u=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?u=i=t:i=i.next=t}else u=i=t;n={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function cr(e,t,n,r){var u=e.updateQueue;Ft=!1;var i=u.firstBaseUpdate,o=u.lastBaseUpdate,l=u.shared.pending;if(l!==null){u.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?i=c:o.next=c,o=a;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=a))}if(i!==null){var g=u.baseState;o=0,h=c=a=null,l=i;do{var C=l.lane,x=l.eventTime;if((r&C)===C){h!==null&&(h=h.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var E=e,y=l;switch(C=t,x=n,y.tag){case 1:if(E=y.payload,typeof E=="function"){g=E.call(x,g,C);break e}g=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=y.payload,C=typeof E=="function"?E.call(x,g,C):E,C==null)break e;g=Y({},g,C);break e;case 2:Ft=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,C=u.effects,C===null?u.effects=[l]:C.push(l))}else x={eventTime:x,lane:C,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=x,a=g):h=h.next=x,o|=C;if(l=l.next,l===null){if(l=u.shared.pending,l===null)break;C=l,l=C.next,C.next=null,u.lastBaseUpdate=C,u.shared.pending=null}}while(1);if(h===null&&(a=g),u.baseState=a,u.firstBaseUpdate=c,u.lastBaseUpdate=h,t=u.shared.interleaved,t!==null){u=t;do o|=u.lane,u=u.next;while(u!==t)}else i===null&&(u.shared.lanes=0);cn|=o,e.lanes=o,e.memoizedState=g}}function Di(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],u=r.callback;if(u!==null){if(r.callback=null,r=n,typeof u!="function")throw Error(D(191,u));u.call(r)}}}var Hl=new _o.Component().refs;function cu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Br={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),u=It(e),i=mt(r,u);i.payload=t,n!=null&&(i.callback=n),t=Rt(e,i,u),t!==null&&(Ye(t,e,u,r),O0(t,e,u))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),u=It(e),i=mt(r,u);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Rt(e,i,u),t!==null&&(Ye(t,e,u,r),O0(t,e,u))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=It(e),u=mt(n,r);u.tag=2,t!=null&&(u.callback=t),t=Rt(e,u,r),t!==null&&(Ye(t,e,r,n),O0(t,e,r))}};function Li(e,t,n,r,u,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!U4(n,r)||!U4(u,i):!0}function Ul(e,t,n){var r=!1,u=Ut,i=t.contextType;return typeof i=="object"&&i!==null?i=Ue(i):(u=Le(t)?ln:Ce.current,r=t.contextTypes,i=(r=r!=null)?Qn(e,u):Ut),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Br,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ai(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Br.enqueueReplaceState(t,t.state,null)}function du(e,t,n,r){var u=e.stateNode;u.props=n,u.state=e.memoizedState,u.refs=Hl,c3(e);var i=t.contextType;typeof i=="object"&&i!==null?u.context=Ue(i):(i=Le(t)?ln:Ce.current,u.context=Qn(e,i)),u.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(cu(e,t,i,n),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(t=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),t!==u.state&&Br.enqueueReplaceState(u,u.state,null),cr(e,n,u,r),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function m4(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var u=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=u.refs;l===Hl&&(l=u.refs={}),o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function k0(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pi(e){var t=e._init;return t(e._payload)}function Vl(e){function t(p,d){if(e){var f=p.deletions;f===null?(p.deletions=[d],p.flags|=16):f.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function u(p,d){return p=Ot(p,d),p.index=0,p.sibling=null,p}function i(p,d,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<d?(p.flags|=2,d):f):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,f,w){return d===null||d.tag!==6?(d=E1(f,p.mode,w),d.return=p,d):(d=u(d,f),d.return=p,d)}function a(p,d,f,w){var F=f.type;return F===Dn?h(p,d,f.props.children,w,f.key):d!==null&&(d.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===kt&&Pi(F)===d.type)?(w=u(d,f.props),w.ref=m4(p,d,f),w.return=p,w):(w=W0(f.type,f.key,f.props,null,p.mode,w),w.ref=m4(p,d,f),w.return=p,w)}function c(p,d,f,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=S1(f,p.mode,w),d.return=p,d):(d=u(d,f.children||[]),d.return=p,d)}function h(p,d,f,w,F){return d===null||d.tag!==7?(d=un(f,p.mode,w,F),d.return=p,d):(d=u(d,f),d.return=p,d)}function g(p,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=E1(""+d,p.mode,f),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case f0:return f=W0(d.type,d.key,d.props,null,p.mode,f),f.ref=m4(p,null,d),f.return=p,f;case Fn:return d=S1(d,p.mode,f),d.return=p,d;case kt:var w=d._init;return g(p,w(d._payload),f)}if(E4(d)||c4(d))return d=un(d,p.mode,f,null),d.return=p,d;k0(p,d)}return null}function C(p,d,f,w){var F=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return F!==null?null:l(p,d,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case f0:return f.key===F?a(p,d,f,w):null;case Fn:return f.key===F?c(p,d,f,w):null;case kt:return F=f._init,C(p,d,F(f._payload),w)}if(E4(f)||c4(f))return F!==null?null:h(p,d,f,w,null);k0(p,f)}return null}function x(p,d,f,w,F){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(f)||null,l(d,p,""+w,F);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case f0:return p=p.get(w.key===null?f:w.key)||null,a(d,p,w,F);case Fn:return p=p.get(w.key===null?f:w.key)||null,c(d,p,w,F);case kt:var L=w._init;return x(p,d,f,L(w._payload),F)}if(E4(w)||c4(w))return p=p.get(f)||null,h(d,p,w,F,null);k0(d,w)}return null}function E(p,d,f,w){for(var F=null,L=null,k=d,z=d=0,H=null;k!==null&&z<f.length;z++){k.index>z?(H=k,k=null):H=k.sibling;var N=C(p,k,f[z],w);if(N===null){k===null&&(k=H);break}e&&k&&N.alternate===null&&t(p,k),d=i(N,d,z),L===null?F=N:L.sibling=N,L=N,k=H}if(z===f.length)return n(p,k),G&&Yt(p,z),F;if(k===null){for(;z<f.length;z++)k=g(p,f[z],w),k!==null&&(d=i(k,d,z),L===null?F=k:L.sibling=k,L=k);return G&&Yt(p,z),F}for(k=r(p,k);z<f.length;z++)H=x(k,p,z,f[z],w),H!==null&&(e&&H.alternate!==null&&k.delete(H.key===null?z:H.key),d=i(H,d,z),L===null?F=H:L.sibling=H,L=H);return e&&k.forEach(function(Pe){return t(p,Pe)}),G&&Yt(p,z),F}function y(p,d,f,w){var F=c4(f);if(typeof F!="function")throw Error(D(150));if(f=F.call(f),f==null)throw Error(D(151));for(var L=F=null,k=d,z=d=0,H=null,N=f.next();k!==null&&!N.done;z++,N=f.next()){k.index>z?(H=k,k=null):H=k.sibling;var Pe=C(p,k,N.value,w);if(Pe===null){k===null&&(k=H);break}e&&k&&Pe.alternate===null&&t(p,k),d=i(Pe,d,z),L===null?F=Pe:L.sibling=Pe,L=Pe,k=H}if(N.done)return n(p,k),G&&Yt(p,z),F;if(k===null){for(;!N.done;z++,N=f.next())N=g(p,N.value,w),N!==null&&(d=i(N,d,z),L===null?F=N:L.sibling=N,L=N);return G&&Yt(p,z),F}for(k=r(p,k);!N.done;z++,N=f.next())N=x(k,p,z,N.value,w),N!==null&&(e&&N.alternate!==null&&k.delete(N.key===null?z:N.key),d=i(N,d,z),L===null?F=N:L.sibling=N,L=N);return e&&k.forEach(function(Qt){return t(p,Qt)}),G&&Yt(p,z),F}function A(p,d,f,w){if(typeof f=="object"&&f!==null&&f.type===Dn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case f0:e:{for(var F=f.key,L=d;L!==null;){if(L.key===F){if(F=f.type,F===Dn){if(L.tag===7){n(p,L.sibling),d=u(L,f.props.children),d.return=p,p=d;break e}}else if(L.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===kt&&Pi(F)===L.type){n(p,L.sibling),d=u(L,f.props),d.ref=m4(p,L,f),d.return=p,p=d;break e}n(p,L);break}else t(p,L);L=L.sibling}f.type===Dn?(d=un(f.props.children,p.mode,w,f.key),d.return=p,p=d):(w=W0(f.type,f.key,f.props,null,p.mode,w),w.ref=m4(p,d,f),w.return=p,p=w)}return o(p);case Fn:e:{for(L=f.key;d!==null;){if(d.key===L)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(p,d.sibling),d=u(d,f.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=S1(f,p.mode,w),d.return=p,p=d}return o(p);case kt:return L=f._init,A(p,d,L(f._payload),w)}if(E4(f))return E(p,d,f,w);if(c4(f))return y(p,d,f,w);k0(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(p,d.sibling),d=u(d,f),d.return=p,p=d):(n(p,d),d=E1(f,p.mode,w),d.return=p,p=d),o(p)):n(p,d)}return A}var Kn=Vl(!0),Wl=Vl(!1),l0={},at=Wt(l0),Z4=Wt(l0),Q4=Wt(l0);function tn(e){if(e===l0)throw Error(D(174));return e}function d3(e,t){switch(V(Q4,t),V(Z4,e),V(at,l0),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:V1(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=V1(t,e)}Z(at),V(at,t)}function Xn(){Z(at),Z(Z4),Z(Q4)}function bl(e){tn(Q4.current);var t=tn(at.current),n=V1(t,e.type);t!==n&&(V(Z4,e),V(at,n))}function p3(e){Z4.current===e&&(Z(at),Z(Z4))}var K=Wt(0);function dr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var g1=[];function f3(){for(var e=0;e<g1.length;e++)g1[e]._workInProgressVersionPrimary=null;g1.length=0}var _0=yt.ReactCurrentDispatcher,C1=yt.ReactCurrentBatchConfig,sn=0,X=null,ue=null,oe=null,pr=!1,B4=!1,G4=0,g5=0;function he(){throw Error(D(321))}function h3(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!et(e[n],t[n]))return!1;return!0}function m3(e,t,n,r,u,i){if(sn=i,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_0.current=e===null||e.memoizedState===null?y5:w5,e=n(r,u),B4){i=0;do{if(B4=!1,G4=0,25<=i)throw Error(D(301));i+=1,oe=ue=null,t.updateQueue=null,_0.current=E5,e=n(r,u)}while(B4)}if(_0.current=fr,t=ue!==null&&ue.next!==null,sn=0,oe=ue=X=null,pr=!1,t)throw Error(D(300));return e}function g3(){var e=G4!==0;return G4=0,e}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?X.memoizedState=oe=e:oe=oe.next=e,oe}function Ve(){if(ue===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=oe===null?X.memoizedState:oe.next;if(t!==null)oe=t,ue=e;else{if(e===null)throw Error(D(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},oe===null?X.memoizedState=oe=e:oe=oe.next=e}return oe}function K4(e,t){return typeof t=="function"?t(e):t}function v1(e){var t=Ve(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=ue,u=r.baseQueue,i=n.pending;if(i!==null){if(u!==null){var o=u.next;u.next=i.next,i.next=o}r.baseQueue=u=i,n.pending=null}if(u!==null){i=u.next,r=r.baseState;var l=o=null,a=null,c=i;do{var h=c.lane;if((sn&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=g,o=r):a=a.next=g,X.lanes|=h,cn|=h}c=c.next}while(c!==null&&c!==i);a===null?o=r:a.next=l,et(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){u=e;do i=u.lane,X.lanes|=i,cn|=i,u=u.next;while(u!==e)}else u===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function x1(e){var t=Ve(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,u=n.pending,i=t.memoizedState;if(u!==null){n.pending=null;var o=u=u.next;do i=e(i,o.action),o=o.next;while(o!==u);et(i,t.memoizedState)||(Fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Zl(){}function Ql(e,t){var n=X,r=Ve(),u=t(),i=!et(r.memoizedState,u);if(i&&(r.memoizedState=u,Fe=!0),r=r.queue,C3(Xl.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,X4(9,Kl.bind(null,n,r,u,t),void 0,null),se===null)throw Error(D(349));(sn&30)!==0||Gl(n,t,u)}return u}function Gl(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kl(e,t,n,r){t.value=n,t.getSnapshot=r,Yl(t)&&ql(e)}function Xl(e,t,n){return n(function(){Yl(t)&&ql(e)})}function Yl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!et(e,n)}catch{return!0}}function ql(e){var t=vt(e,1);t!==null&&Ye(t,e,1,-1)}function Bi(e){var t=it();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:K4,lastRenderedState:e},t.queue=e,e=e.dispatch=x5.bind(null,X,e),[t.memoizedState,e]}function X4(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jl(){return Ve().memoizedState}function j0(e,t,n,r){var u=it();X.flags|=e,u.memoizedState=X4(1|t,n,void 0,r===void 0?null:r)}function zr(e,t,n,r){var u=Ve();r=r===void 0?null:r;var i=void 0;if(ue!==null){var o=ue.memoizedState;if(i=o.destroy,r!==null&&h3(r,o.deps)){u.memoizedState=X4(t,n,i,r);return}}X.flags|=e,u.memoizedState=X4(1|t,n,i,r)}function zi(e,t){return j0(8390656,8,e,t)}function C3(e,t){return zr(2048,8,e,t)}function e2(e,t){return zr(4,2,e,t)}function t2(e,t){return zr(4,4,e,t)}function n2(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function r2(e,t,n){return n=n!=null?n.concat([e]):null,zr(4,4,n2.bind(null,t,e),n)}function v3(){}function u2(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&h3(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function i2(e,t){var n=Ve();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&h3(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function o2(e,t,n){return(sn&21)===0?(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n):(et(n,t)||(n=sl(),X.lanes|=n,cn|=n,e.baseState=!0),t)}function C5(e,t){var n=j;j=n!==0&&4>n?n:4,e(!0);var r=C1.transition;C1.transition={};try{e(!1),t()}finally{j=n,C1.transition=r}}function l2(){return Ve().memoizedState}function v5(e,t,n){var r=It(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},a2(e))s2(t,n);else if(n=_l(e,t,n,r),n!==null){var u=ye();Ye(n,e,r,u),c2(n,t,r)}}function x5(e,t,n){var r=It(e),u={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(a2(e))s2(t,u);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,n);if(u.hasEagerState=!0,u.eagerState=l,et(l,o)){var a=t.interleaved;a===null?(u.next=u,s3(t)):(u.next=a.next,a.next=u),t.interleaved=u;return}}catch{}finally{}n=_l(e,t,u,r),n!==null&&(u=ye(),Ye(n,e,r,u),c2(n,t,r))}}function a2(e){var t=e.alternate;return e===X||t!==null&&t===X}function s2(e,t){B4=pr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function c2(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ku(e,n)}}var fr={readContext:Ue,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},y5={readContext:Ue,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:zi,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,j0(4194308,4,n2.bind(null,t,e),n)},useLayoutEffect:function(e,t){return j0(4194308,4,e,t)},useInsertionEffect:function(e,t){return j0(4,2,e,t)},useMemo:function(e,t){var n=it();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=it();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=v5.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:Bi,useDebugValue:v3,useDeferredValue:function(e){return it().memoizedState=e},useTransition:function(){var e=Bi(!1),t=e[0];return e=C5.bind(null,e[1]),it().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,u=it();if(G){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),se===null)throw Error(D(349));(sn&30)!==0||Gl(r,t,n)}u.memoizedState=n;var i={value:n,getSnapshot:t};return u.queue=i,zi(Xl.bind(null,r,i,e),[e]),r.flags|=2048,X4(9,Kl.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=it(),t=se.identifierPrefix;if(G){var n=ht,r=ft;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=G4++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=g5++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},w5={readContext:Ue,useCallback:u2,useContext:Ue,useEffect:C3,useImperativeHandle:r2,useInsertionEffect:e2,useLayoutEffect:t2,useMemo:i2,useReducer:v1,useRef:Jl,useState:function(){return v1(K4)},useDebugValue:v3,useDeferredValue:function(e){var t=Ve();return o2(t,ue.memoizedState,e)},useTransition:function(){var e=v1(K4)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:Zl,useSyncExternalStore:Ql,useId:l2,unstable_isNewReconciler:!1},E5={readContext:Ue,useCallback:u2,useContext:Ue,useEffect:C3,useImperativeHandle:r2,useInsertionEffect:e2,useLayoutEffect:t2,useMemo:i2,useReducer:x1,useRef:Jl,useState:function(){return x1(K4)},useDebugValue:v3,useDeferredValue:function(e){var t=Ve();return ue===null?t.memoizedState=e:o2(t,ue.memoizedState,e)},useTransition:function(){var e=x1(K4)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:Zl,useSyncExternalStore:Ql,useId:l2,unstable_isNewReconciler:!1};function Yn(e,t){try{var n="",r=t;do n+=Xa(r),r=r.return;while(r);var u=n}catch(i){u=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:u,digest:null}}function y1(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function pu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var S5=typeof WeakMap=="function"?WeakMap:Map;function d2(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){mr||(mr=!0,Eu=r),pu(e,t)},n}function p2(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var u=t.value;n.payload=function(){return r(u)},n.callback=function(){pu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){pu(e,t),typeof r!="function"&&(Mt===null?Mt=new Set([this]):Mt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function $i(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new S5;var u=new Set;r.set(t,u)}else u=r.get(t),u===void 0&&(u=new Set,r.set(t,u));u.has(n)||(u.add(n),e=I5.bind(null,e,t,n),t.then(e,e))}function Ti(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ni(e,t,n,r,u){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,Rt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var k5=yt.ReactCurrentOwner,Fe=!1;function xe(e,t,n,r){t.child=e===null?Wl(t,null,n,r):Kn(t,e.child,n,r)}function Ri(e,t,n,r,u){n=n.render;var i=t.ref;return Un(t,u),r=m3(e,t,n,r,i,u),n=g3(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,xt(e,t,u)):(G&&n&&r3(t),t.flags|=1,xe(e,t,r,u),t.child)}function Mi(e,t,n,r,u){if(e===null){var i=n.type;return typeof i=="function"&&!D3(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,f2(e,t,i,r,u)):(e=W0(n.type,null,r,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&u)===0){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:U4,n(o,r)&&e.ref===t.ref)return xt(e,t,u)}return t.flags|=1,e=Ot(i,r),e.ref=t.ref,e.return=t,t.child=e}function f2(e,t,n,r,u){if(e!==null){var i=e.memoizedProps;if(U4(i,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=i,(e.lanes&u)!==0)(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,xt(e,t,u)}return fu(e,t,n,r,u)}function h2(e,t,n){var r=t.pendingProps,u=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Mn,ze),ze|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(Mn,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,V(Mn,ze),ze|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,V(Mn,ze),ze|=r;return xe(e,t,u,n),t.child}function m2(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function fu(e,t,n,r,u){var i=Le(n)?ln:Ce.current;return i=Qn(t,i),Un(t,u),n=m3(e,t,n,r,i,u),r=g3(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,xt(e,t,u)):(G&&r&&r3(t),t.flags|=1,xe(e,t,n,u),t.child)}function Ii(e,t,n,r,u){if(Le(n)){var i=!0;ir(t)}else i=!1;if(Un(t,u),t.stateNode===null)H0(e,t),Ul(t,n,r),du(t,n,r,u),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ue(c):(c=Le(n)?ln:Ce.current,c=Qn(t,c));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==c)&&Ai(t,o,r,c),Ft=!1;var C=t.memoizedState;o.state=C,cr(t,r,o,u),a=t.memoizedState,l!==r||C!==a||De.current||Ft?(typeof h=="function"&&(cu(t,n,h,r),a=t.memoizedState),(l=Ft||Li(t,n,l,r,C,a,c))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,jl(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Qe(t.type,l),o.props=c,g=t.pendingProps,C=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ue(a):(a=Le(n)?ln:Ce.current,a=Qn(t,a));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||C!==a)&&Ai(t,o,r,a),Ft=!1,C=t.memoizedState,o.state=C,cr(t,r,o,u);var E=t.memoizedState;l!==g||C!==E||De.current||Ft?(typeof x=="function"&&(cu(t,n,x,r),E=t.memoizedState),(c=Ft||Li(t,n,c,r,C,E,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),o.props=r,o.state=E,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),r=!1)}return hu(e,t,n,r,i,u)}function hu(e,t,n,r,u,i){m2(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return u&&Ei(t,n,!1),xt(e,t,i);r=t.stateNode,k5.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Kn(t,e.child,null,i),t.child=Kn(t,null,l,i)):xe(e,t,l,i),t.memoizedState=r.state,u&&Ei(t,n,!0),t.child}function g2(e){var t=e.stateNode;t.pendingContext?wi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wi(e,t.context,!1),d3(e,t.containerInfo)}function Oi(e,t,n,r,u){return Gn(),i3(u),t.flags|=256,xe(e,t,n,r),t.child}var mu={dehydrated:null,treeContext:null,retryLane:0};function gu(e){return{baseLanes:e,cachePool:null,transitions:null}}function C2(e,t,n){var r=t.pendingProps,u=K.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(u&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),V(K,u&1),e===null)return au(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Nr(o,r,0,null),e=un(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=gu(n),t.memoizedState=mu,e):x3(t,o));if(u=e.memoizedState,u!==null&&(l=u.dehydrated,l!==null))return F5(e,t,o,r,l,u,n);if(i){i=r.fallback,o=t.mode,u=e.child,l=u.sibling;var a={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==u?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Ot(u,a),r.subtreeFlags=u.subtreeFlags&14680064),l!==null?i=Ot(l,i):(i=un(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?gu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=mu,r}return i=e.child,e=i.sibling,r=Ot(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function x3(e,t){return t=Nr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function F0(e,t,n,r){return r!==null&&i3(r),Kn(t,e.child,null,n),e=x3(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function F5(e,t,n,r,u,i,o){if(n)return t.flags&256?(t.flags&=-257,r=y1(Error(D(422))),F0(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,u=t.mode,r=Nr({mode:"visible",children:r.children},u,0,null),i=un(i,u,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Kn(t,e.child,null,o),t.child.memoizedState=gu(o),t.memoizedState=mu,i);if((t.mode&1)===0)return F0(e,t,o,null);if(u.data==="$!"){if(r=u.nextSibling&&u.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(D(419)),r=y1(i,r,void 0),F0(e,t,o,r)}if(l=(o&e.childLanes)!==0,Fe||l){if(r=se,r!==null){switch(o&-o){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(r.suspendedLanes|o))!==0?0:u,u!==0&&u!==i.retryLane&&(i.retryLane=u,vt(e,u),Ye(r,e,u,-1))}return F3(),r=y1(Error(D(421))),F0(e,t,o,r)}return u.data==="$?"?(t.flags|=128,t.child=e.child,t=O5.bind(null,e),u._reactRetry=t,null):(e=i.treeContext,$e=Nt(u.nextSibling),Te=t,G=!0,Ke=null,e!==null&&(Oe[_e++]=ft,Oe[_e++]=ht,Oe[_e++]=an,ft=e.id,ht=e.overflow,an=t),t=x3(t,r.children),t.flags|=4096,t)}function _i(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),su(e.return,t,n)}function w1(e,t,n,r,u){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:u}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=u)}function v2(e,t,n){var r=t.pendingProps,u=r.revealOrder,i=r.tail;if(xe(e,t,r.children,n),r=K.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_i(e,n,t);else if(e.tag===19)_i(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(K,r),(t.mode&1)===0)t.memoizedState=null;else switch(u){case"forwards":for(n=t.child,u=null;n!==null;)e=n.alternate,e!==null&&dr(e)===null&&(u=n),n=n.sibling;n=u,n===null?(u=t.child,t.child=null):(u=n.sibling,n.sibling=null),w1(t,!1,u,n,i);break;case"backwards":for(n=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&dr(e)===null){t.child=u;break}e=u.sibling,u.sibling=n,n=u,u=e}w1(t,!0,n,null,i);break;case"together":w1(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function H0(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=Ot(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ot(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function D5(e,t,n){switch(t.tag){case 3:g2(t),Gn();break;case 5:bl(t);break;case 1:Le(t.type)&&ir(t);break;case 4:d3(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,u=t.memoizedProps.value;V(ar,r._currentValue),r._currentValue=u;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(K,K.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?C2(e,t,n):(V(K,K.current&1),e=xt(e,t,n),e!==null?e.sibling:null);V(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return v2(e,t,n);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),V(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,h2(e,t,n)}return xt(e,t,n)}var x2,Cu,y2,w2;x2=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cu=function(){};y2=function(e,t,n,r){var u=e.memoizedProps;if(u!==r){e=t.stateNode,tn(at.current);var i=null;switch(n){case"input":u=_1(e,u),r=_1(e,r),i=[];break;case"select":u=Y({},u,{value:void 0}),r=Y({},r,{value:void 0}),i=[];break;case"textarea":u=U1(e,u),r=U1(e,r),i=[];break;default:typeof u.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=rr)}W1(n,r);var o;n=null;for(c in u)if(!r.hasOwnProperty(c)&&u.hasOwnProperty(c)&&u[c]!=null)if(c==="style"){var l=u[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(R4.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(l=u!=null?u[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(R4.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&W("scroll",e),i||l===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};w2=function(e,t,n,r){n!==r&&(t.flags|=4)};function g4(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var u=e.child;u!==null;)n|=u.lanes|u.childLanes,r|=u.subtreeFlags&14680064,r|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)n|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function L5(e,t,n){var r=t.pendingProps;switch(u3(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Le(t.type)&&ur(),me(t),null;case 3:return r=t.stateNode,Xn(),Z(De),Z(Ce),f3(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(S0(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ke!==null&&(Fu(Ke),Ke=null))),Cu(e,t),me(t),null;case 5:p3(t);var u=tn(Q4.current);if(n=t.type,e!==null&&t.stateNode!=null)y2(e,t,n,r,u),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return me(t),null}if(e=tn(at.current),S0(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ot]=t,r[b4]=i,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(u=0;u<k4.length;u++)W(k4[u],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":G3(r,i),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},W("invalid",r);break;case"textarea":X3(r,i),W("invalid",r)}W1(n,i),u=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&E0(r.textContent,l,e),u=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&E0(r.textContent,l,e),u=["children",""+l]):R4.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&W("scroll",r)}switch(n){case"input":h0(r),K3(r,i,!0);break;case"textarea":h0(r),Y3(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=rr)}r=u,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Go(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ot]=t,e[b4]=r,x2(e,t,!1,!1),t.stateNode=e;e:{switch(o=b1(n,r),n){case"dialog":W("cancel",e),W("close",e),u=r;break;case"iframe":case"object":case"embed":W("load",e),u=r;break;case"video":case"audio":for(u=0;u<k4.length;u++)W(k4[u],e);u=r;break;case"source":W("error",e),u=r;break;case"img":case"image":case"link":W("error",e),W("load",e),u=r;break;case"details":W("toggle",e),u=r;break;case"input":G3(e,r),u=_1(e,r),W("invalid",e);break;case"option":u=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},u=Y({},r,{value:void 0}),W("invalid",e);break;case"textarea":X3(e,r),u=U1(e,r),W("invalid",e);break;default:u=r}W1(n,u),l=u;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?Yo(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ko(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&M4(e,a):typeof a=="number"&&M4(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(R4.hasOwnProperty(i)?a!=null&&i==="onScroll"&&W("scroll",e):a!=null&&Vu(e,i,a,o))}switch(n){case"input":h0(e),K3(e,r,!1);break;case"textarea":h0(e),Y3(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ht(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?On(e,!!r.multiple,i,!1):r.defaultValue!=null&&On(e,!!r.multiple,r.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=rr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)w2(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=tn(Q4.current),tn(at.current),S0(t)){if(r=t.stateNode,n=t.memoizedProps,r[ot]=t,(i=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:E0(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&E0(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ot]=t,t.stateNode=r}return me(t),null;case 13:if(Z(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&$e!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Ol(),Gn(),t.flags|=98560,i=!1;else if(i=S0(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(D(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(D(317));i[ot]=t}else Gn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;me(t),i=!1}else Ke!==null&&(Fu(Ke),Ke=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(K.current&1)!==0?ie===0&&(ie=3):F3())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return Xn(),Cu(e,t),e===null&&V4(t.stateNode.containerInfo),me(t),null;case 10:return a3(t.type._context),me(t),null;case 17:return Le(t.type)&&ur(),me(t),null;case 19:if(Z(K),i=t.memoizedState,i===null)return me(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)g4(i,!1);else{if(ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=dr(e),o!==null){for(t.flags|=128,g4(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(K,K.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>qn&&(t.flags|=128,r=!0,g4(i,!1),t.lanes=4194304)}else{if(!r)if(e=dr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),g4(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!G)return me(t),null}else 2*J()-i.renderingStartTime>qn&&n!==1073741824&&(t.flags|=128,r=!0,g4(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=K.current,V(K,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return k3(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ze&1073741824)!==0&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function A5(e,t){switch(u3(t),t.tag){case 1:return Le(t.type)&&ur(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xn(),Z(De),Z(Ce),f3(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return p3(t),null;case 13:if(Z(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));Gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(K),null;case 4:return Xn(),null;case 10:return a3(t.type._context),null;case 22:case 23:return k3(),null;case 24:return null;default:return null}}var D0=!1,ge=!1,P5=typeof WeakSet=="function"?WeakSet:Set,B=null;function Rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(e,t,r)}else n.current=null}function vu(e,t,n){try{n()}catch(r){q(e,t,r)}}var ji=!1;function B5(e,t){if(tu=er,e=Fl(),n3(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var u=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,c=0,h=0,g=e,C=null;t:for(;;){for(var x;g!==n||u!==0&&g.nodeType!==3||(l=o+u),g!==i||r!==0&&g.nodeType!==3||(a=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(x=g.firstChild)!==null;)C=g,g=x;for(;;){if(g===e)break t;if(C===n&&++c===u&&(l=o),C===i&&++h===r&&(a=o),(x=g.nextSibling)!==null)break;g=C,C=g.parentNode}g=x}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(nu={focusedElem:e,selectionRange:n},er=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var E=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var y=E.memoizedProps,A=E.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:Qe(t.type,y),A);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(w){q(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return E=ji,ji=!1,E}function z4(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var u=r=r.next;do{if((u.tag&e)===e){var i=u.destroy;u.destroy=void 0,i!==void 0&&vu(t,n,i)}u=u.next}while(u!==r)}}function $r(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function E2(e){var t=e.alternate;t!==null&&(e.alternate=null,E2(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ot],delete t[b4],delete t[iu],delete t[p5],delete t[f5])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function S2(e){return e.tag===5||e.tag===3||e.tag===4}function Hi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||S2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=rr));else if(r!==4&&(e=e.child,e!==null))for(yu(e,t,n),e=e.sibling;e!==null;)yu(e,t,n),e=e.sibling}function wu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wu(e,t,n),e=e.sibling;e!==null;)wu(e,t,n),e=e.sibling}var ce=null,Ge=!1;function Et(e,t,n){for(n=n.child;n!==null;)k2(e,t,n),n=n.sibling}function k2(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(kr,n)}catch{}switch(n.tag){case 5:ge||Rn(n,t);case 6:var r=ce,u=Ge;ce=null,Et(e,t,n),ce=r,Ge=u,ce!==null&&(Ge?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(Ge?(e=ce,n=n.stateNode,e.nodeType===8?h1(e.parentNode,n):e.nodeType===1&&h1(e,n),j4(e)):h1(ce,n.stateNode));break;case 4:r=ce,u=Ge,ce=n.stateNode.containerInfo,Ge=!0,Et(e,t,n),ce=r,Ge=u;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){u=r=r.next;do{var i=u,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&vu(n,t,o),u=u.next}while(u!==r)}Et(e,t,n);break;case 1:if(!ge&&(Rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){q(n,t,l)}Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,Et(e,t,n),ge=r):Et(e,t,n);break;default:Et(e,t,n)}}function Ui(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new P5),t.forEach(function(r){var u=_5.bind(null,e,r);n.has(r)||(n.add(r),r.then(u,u))})}}function Ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var u=n[r];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ce=l.stateNode,Ge=!1;break e;case 3:ce=l.stateNode.containerInfo,Ge=!0;break e;case 4:ce=l.stateNode.containerInfo,Ge=!0;break e}l=l.return}if(ce===null)throw Error(D(160));k2(i,o,u),ce=null,Ge=!1;var a=u.alternate;a!==null&&(a.return=null),u.return=null}catch(c){q(u,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)F2(t,e),t=t.sibling}function F2(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),ut(e),r&4){try{z4(3,e,e.return),$r(3,e)}catch(y){q(e,e.return,y)}try{z4(5,e,e.return)}catch(y){q(e,e.return,y)}}break;case 1:Ze(t,e),ut(e),r&512&&n!==null&&Rn(n,n.return);break;case 5:if(Ze(t,e),ut(e),r&512&&n!==null&&Rn(n,n.return),e.flags&32){var u=e.stateNode;try{M4(u,"")}catch(y){q(e,e.return,y)}}if(r&4&&(u=e.stateNode,u!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Zo(u,i),b1(l,o);var c=b1(l,i);for(o=0;o<a.length;o+=2){var h=a[o],g=a[o+1];h==="style"?Yo(u,g):h==="dangerouslySetInnerHTML"?Ko(u,g):h==="children"?M4(u,g):Vu(u,h,g,c)}switch(l){case"input":j1(u,i);break;case"textarea":Qo(u,i);break;case"select":var C=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?On(u,!!i.multiple,x,!1):C!==!!i.multiple&&(i.defaultValue!=null?On(u,!!i.multiple,i.defaultValue,!0):On(u,!!i.multiple,i.multiple?[]:"",!1))}u[b4]=i}catch(y){q(e,e.return,y)}}break;case 6:if(Ze(t,e),ut(e),r&4){if(e.stateNode===null)throw Error(D(162));u=e.stateNode,i=e.memoizedProps;try{u.nodeValue=i}catch(y){q(e,e.return,y)}}break;case 3:if(Ze(t,e),ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{j4(t.containerInfo)}catch(y){q(e,e.return,y)}break;case 4:Ze(t,e),ut(e);break;case 13:Ze(t,e),ut(e),u=e.child,u.flags&8192&&(i=u.memoizedState!==null,u.stateNode.isHidden=i,!i||u.alternate!==null&&u.alternate.memoizedState!==null||(E3=J())),r&4&&Ui(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(c=ge)||h,Ze(t,e),ge=c):Ze(t,e),ut(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&(e.mode&1)!==0)for(B=e,h=e.child;h!==null;){for(g=B=h;B!==null;){switch(C=B,x=C.child,C.tag){case 0:case 11:case 14:case 15:z4(4,C,C.return);break;case 1:Rn(C,C.return);var E=C.stateNode;if(typeof E.componentWillUnmount=="function"){r=C,n=C.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(y){q(r,n,y)}}break;case 5:Rn(C,C.return);break;case 22:if(C.memoizedState!==null){Wi(g);continue}}x!==null?(x.return=C,B=x):Wi(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{u=g.stateNode,c?(i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=g.stateNode,a=g.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Xo("display",o))}catch(y){q(e,e.return,y)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(y){q(e,e.return,y)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ze(t,e),ut(e),r&4&&Ui(e);break;case 21:break;default:Ze(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(S2(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var u=r.stateNode;r.flags&32&&(M4(u,""),r.flags&=-33);var i=Hi(e);wu(e,i,u);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Hi(e);yu(e,l,o);break;default:throw Error(D(161))}}catch(a){q(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function z5(e,t,n){B=e,D2(e)}function D2(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var u=B,i=u.child;if(u.tag===22&&r){var o=u.memoizedState!==null||D0;if(!o){var l=u.alternate,a=l!==null&&l.memoizedState!==null||ge;l=D0;var c=ge;if(D0=o,(ge=a)&&!c)for(B=u;B!==null;)o=B,a=o.child,o.tag===22&&o.memoizedState!==null?bi(u):a!==null?(a.return=o,B=a):bi(u);for(;i!==null;)B=i,D2(i),i=i.sibling;B=u,D0=l,ge=c}Vi(e)}else(u.subtreeFlags&8772)!==0&&i!==null?(i.return=u,B=i):Vi(e)}}function Vi(e){for(;B!==null;){var t=B;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ge||$r(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var u=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(u,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Di(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Di(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&j4(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}ge||t.flags&512&&xu(t)}catch(C){q(t,t.return,C)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function Wi(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function bi(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{$r(4,t)}catch(a){q(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var u=t.return;try{r.componentDidMount()}catch(a){q(t,u,a)}}var i=t.return;try{xu(t)}catch(a){q(t,i,a)}break;case 5:var o=t.return;try{xu(t)}catch(a){q(t,o,a)}}}catch(a){q(t,t.return,a)}if(t===e){B=null;break}var l=t.sibling;if(l!==null){l.return=t.return,B=l;break}B=t.return}}var $5=Math.ceil,hr=yt.ReactCurrentDispatcher,y3=yt.ReactCurrentOwner,He=yt.ReactCurrentBatchConfig,O=0,se=null,te=null,pe=0,ze=0,Mn=Wt(0),ie=0,Y4=null,cn=0,Tr=0,w3=0,$4=null,Se=null,E3=0,qn=1/0,ct=null,mr=!1,Eu=null,Mt=null,L0=!1,Pt=null,gr=0,T4=0,Su=null,U0=-1,V0=0;function ye(){return(O&6)!==0?J():U0!==-1?U0:U0=J()}function It(e){return(e.mode&1)===0?1:(O&2)!==0&&pe!==0?pe&-pe:m5.transition!==null?(V0===0&&(V0=sl()),V0):(e=j,e!==0||(e=window.event,e=e===void 0?16:gl(e.type)),e)}function Ye(e,t,n,r){if(50<T4)throw T4=0,Su=null,Error(D(185));u0(e,n,r),((O&2)===0||e!==se)&&(e===se&&((O&2)===0&&(Tr|=n),ie===4&&Lt(e,pe)),Ae(e,r),n===1&&O===0&&(t.mode&1)===0&&(qn=J()+500,Pr&&bt()))}function Ae(e,t){var n=e.callbackNode;ms(e,t);var r=J0(e,e===se?pe:0);if(r===0)n!==null&&ei(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ei(n),t===1)e.tag===0?h5(Zi.bind(null,e)):Rl(Zi.bind(null,e)),c5(function(){(O&6)===0&&bt()}),n=null;else{switch(cl(r)){case 1:n=Gu;break;case 4:n=ll;break;case 16:n=q0;break;case 536870912:n=al;break;default:n=q0}n=N2(n,L2.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function L2(e,t){if(U0=-1,V0=0,(O&6)!==0)throw Error(D(327));var n=e.callbackNode;if(Vn()&&e.callbackNode!==n)return null;var r=J0(e,e===se?pe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Cr(e,r);else{t=r;var u=O;O|=2;var i=P2();(se!==e||pe!==t)&&(ct=null,qn=J()+500,rn(e,t));do try{R5();break}catch(l){A2(e,l)}while(1);l3(),hr.current=i,O=u,te!==null?t=0:(se=null,pe=0,t=ie)}if(t!==0){if(t===2&&(u=X1(e),u!==0&&(r=u,t=ku(e,u))),t===1)throw n=Y4,rn(e,0),Lt(e,r),Ae(e,J()),n;if(t===6)Lt(e,r);else{if(u=e.current.alternate,(r&30)===0&&!T5(u)&&(t=Cr(e,r),t===2&&(i=X1(e),i!==0&&(r=i,t=ku(e,i))),t===1))throw n=Y4,rn(e,0),Lt(e,r),Ae(e,J()),n;switch(e.finishedWork=u,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:qt(e,Se,ct);break;case 3:if(Lt(e,r),(r&130023424)===r&&(t=E3+500-J(),10<t)){if(J0(e,0)!==0)break;if(u=e.suspendedLanes,(u&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=uu(qt.bind(null,e,Se,ct),t);break}qt(e,Se,ct);break;case 4:if(Lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,u=-1;0<r;){var o=31-Xe(r);i=1<<o,o=t[o],o>u&&(u=o),r&=~i}if(r=u,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$5(r/1960))-r,10<r){e.timeoutHandle=uu(qt.bind(null,e,Se,ct),r);break}qt(e,Se,ct);break;case 5:qt(e,Se,ct);break;default:throw Error(D(329))}}}return Ae(e,J()),e.callbackNode===n?L2.bind(null,e):null}function ku(e,t){var n=$4;return e.current.memoizedState.isDehydrated&&(rn(e,t).flags|=256),e=Cr(e,t),e!==2&&(t=Se,Se=n,t!==null&&Fu(t)),e}function Fu(e){Se===null?Se=e:Se.push.apply(Se,e)}function T5(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var u=n[r],i=u.getSnapshot;u=u.value;try{if(!et(i(),u))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lt(e,t){for(t&=~w3,t&=~Tr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function Zi(e){if((O&6)!==0)throw Error(D(327));Vn();var t=J0(e,0);if((t&1)===0)return Ae(e,J()),null;var n=Cr(e,t);if(e.tag!==0&&n===2){var r=X1(e);r!==0&&(t=r,n=ku(e,r))}if(n===1)throw n=Y4,rn(e,0),Lt(e,t),Ae(e,J()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qt(e,Se,ct),Ae(e,J()),null}function S3(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(qn=J()+500,Pr&&bt())}}function dn(e){Pt!==null&&Pt.tag===0&&(O&6)===0&&Vn();var t=O;O|=1;var n=He.transition,r=j;try{if(He.transition=null,j=1,e)return e()}finally{j=r,He.transition=n,O=t,(O&6)===0&&bt()}}function k3(){ze=Mn.current,Z(Mn)}function rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,s5(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(u3(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ur();break;case 3:Xn(),Z(De),Z(Ce),f3();break;case 5:p3(r);break;case 4:Xn();break;case 13:Z(K);break;case 19:Z(K);break;case 10:a3(r.type._context);break;case 22:case 23:k3()}n=n.return}if(se=e,te=e=Ot(e.current,null),pe=ze=t,ie=0,Y4=null,w3=Tr=cn=0,Se=$4=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var u=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=u,r.next=o}n.pending=r}en=null}return e}function A2(e,t){do{var n=te;try{if(l3(),_0.current=fr,pr){for(var r=X.memoizedState;r!==null;){var u=r.queue;u!==null&&(u.pending=null),r=r.next}pr=!1}if(sn=0,oe=ue=X=null,B4=!1,G4=0,y3.current=null,n===null||n.return===null){ie=1,Y4=t,te=null;break}e:{var i=e,o=n.return,l=n,a=t;if(t=pe,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=l,g=h.tag;if((h.mode&1)===0&&(g===0||g===11||g===15)){var C=h.alternate;C?(h.updateQueue=C.updateQueue,h.memoizedState=C.memoizedState,h.lanes=C.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=Ti(o);if(x!==null){x.flags&=-257,Ni(x,o,l,i,t),x.mode&1&&$i(i,c,t),t=x,a=c;var E=t.updateQueue;if(E===null){var y=new Set;y.add(a),t.updateQueue=y}else E.add(a);break e}else{if((t&1)===0){$i(i,c,t),F3();break e}a=Error(D(426))}}else if(G&&l.mode&1){var A=Ti(o);if(A!==null){(A.flags&65536)===0&&(A.flags|=256),Ni(A,o,l,i,t),i3(Yn(a,l));break e}}i=a=Yn(a,l),ie!==4&&(ie=2),$4===null?$4=[i]:$4.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=d2(i,a,t);Fi(i,p);break e;case 1:l=a;var d=i.type,f=i.stateNode;if((i.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Mt===null||!Mt.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=p2(i,l,t);Fi(i,w);break e}}i=i.return}while(i!==null)}z2(n)}catch(F){t=F,te===n&&n!==null&&(te=n=n.return);continue}break}while(1)}function P2(){var e=hr.current;return hr.current=fr,e===null?fr:e}function F3(){(ie===0||ie===3||ie===2)&&(ie=4),se===null||(cn&268435455)===0&&(Tr&268435455)===0||Lt(se,pe)}function Cr(e,t){var n=O;O|=2;var r=P2();(se!==e||pe!==t)&&(ct=null,rn(e,t));do try{N5();break}catch(u){A2(e,u)}while(1);if(l3(),O=n,hr.current=r,te!==null)throw Error(D(261));return se=null,pe=0,ie}function N5(){for(;te!==null;)B2(te)}function R5(){for(;te!==null&&!os();)B2(te)}function B2(e){var t=T2(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?z2(e):te=t,y3.current=null}function z2(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=L5(n,t,ze),n!==null){te=n;return}}else{if(n=A5(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,te=null;return}}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);ie===0&&(ie=5)}function qt(e,t,n){var r=j,u=He.transition;try{He.transition=null,j=1,M5(e,t,n,r)}finally{He.transition=u,j=r}return null}function M5(e,t,n,r){do Vn();while(Pt!==null);if((O&6)!==0)throw Error(D(327));n=e.finishedWork;var u=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(gs(e,i),e===se&&(te=se=null,pe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||L0||(L0=!0,N2(q0,function(){return Vn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=He.transition,He.transition=null;var o=j;j=1;var l=O;O|=4,y3.current=null,B5(e,n),F2(n,e),n5(nu),er=!!tu,nu=tu=null,e.current=n,z5(n),ls(),O=l,j=o,He.transition=i}else e.current=n;if(L0&&(L0=!1,Pt=e,gr=u),i=e.pendingLanes,i===0&&(Mt=null),cs(n.stateNode),Ae(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)u=t[n],r(u.value,{componentStack:u.stack,digest:u.digest});if(mr)throw mr=!1,e=Eu,Eu=null,e;return(gr&1)!==0&&e.tag!==0&&Vn(),i=e.pendingLanes,(i&1)!==0?e===Su?T4++:(T4=0,Su=e):T4=0,bt(),null}function Vn(){if(Pt!==null){var e=cl(gr),t=He.transition,n=j;try{if(He.transition=null,j=16>e?16:e,Pt===null)var r=!1;else{if(e=Pt,Pt=null,gr=0,(O&6)!==0)throw Error(D(331));var u=O;for(O|=4,B=e.current;B!==null;){var i=B,o=i.child;if((B.flags&16)!==0){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(B=c;B!==null;){var h=B;switch(h.tag){case 0:case 11:case 15:z4(8,h,i)}var g=h.child;if(g!==null)g.return=h,B=g;else for(;B!==null;){h=B;var C=h.sibling,x=h.return;if(E2(h),h===c){B=null;break}if(C!==null){C.return=x,B=C;break}B=x}}}var E=i.alternate;if(E!==null){var y=E.child;if(y!==null){E.child=null;do{var A=y.sibling;y.sibling=null,y=A}while(y!==null)}}B=i}}if((i.subtreeFlags&2064)!==0&&o!==null)o.return=i,B=o;else e:for(;B!==null;){if(i=B,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:z4(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,B=p;break e}B=i.return}}var d=e.current;for(B=d;B!==null;){o=B;var f=o.child;if((o.subtreeFlags&2064)!==0&&f!==null)f.return=o,B=f;else e:for(o=d;B!==null;){if(l=B,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:$r(9,l)}}catch(F){q(l,l.return,F)}if(l===o){B=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,B=w;break e}B=l.return}}if(O=u,bt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(kr,e)}catch{}r=!0}return r}finally{j=n,He.transition=t}}return!1}function Qi(e,t,n){t=Yn(n,t),t=d2(e,t,1),e=Rt(e,t,1),t=ye(),e!==null&&(u0(e,1,t),Ae(e,t))}function q(e,t,n){if(e.tag===3)Qi(e,e,n);else for(;t!==null;){if(t.tag===3){Qi(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mt===null||!Mt.has(r))){e=Yn(n,e),e=p2(t,e,1),t=Rt(t,e,1),e=ye(),t!==null&&(u0(t,1,e),Ae(t,e));break}}t=t.return}}function I5(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(pe&n)===n&&(ie===4||ie===3&&(pe&130023424)===pe&&500>J()-E3?rn(e,0):w3|=n),Ae(e,t)}function $2(e,t){t===0&&((e.mode&1)===0?t=1:(t=C0,C0<<=1,(C0&130023424)===0&&(C0=4194304)));var n=ye();e=vt(e,t),e!==null&&(u0(e,t,n),Ae(e,n))}function O5(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$2(e,n)}function _5(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(n=u.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),$2(e,n)}var T2;T2=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Fe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Fe=!1,D5(e,t,n);Fe=(e.flags&131072)!==0}else Fe=!1,G&&(t.flags&1048576)!==0&&Ml(t,lr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;H0(e,t),e=t.pendingProps;var u=Qn(t,Ce.current);Un(t,n),u=m3(null,t,r,e,u,n);var i=g3();return t.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(r)?(i=!0,ir(t)):i=!1,t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,c3(t),u.updater=Br,t.stateNode=u,u._reactInternals=t,du(t,r,e,n),t=hu(null,t,r,!0,i,n)):(t.tag=0,G&&i&&r3(t),xe(null,t,u,n),t=t.child),t;case 16:r=t.elementType;e:{switch(H0(e,t),e=t.pendingProps,u=r._init,r=u(r._payload),t.type=r,u=t.tag=H5(r),e=Qe(r,e),u){case 0:t=fu(null,t,r,e,n);break e;case 1:t=Ii(null,t,r,e,n);break e;case 11:t=Ri(null,t,r,e,n);break e;case 14:t=Mi(null,t,r,Qe(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,u=t.pendingProps,u=t.elementType===r?u:Qe(r,u),fu(e,t,r,u,n);case 1:return r=t.type,u=t.pendingProps,u=t.elementType===r?u:Qe(r,u),Ii(e,t,r,u,n);case 3:e:{if(g2(t),e===null)throw Error(D(387));r=t.pendingProps,i=t.memoizedState,u=i.element,jl(e,t),cr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){u=Yn(Error(D(423)),t),t=Oi(e,t,r,n,u);break e}else if(r!==u){u=Yn(Error(D(424)),t),t=Oi(e,t,r,n,u);break e}else for($e=Nt(t.stateNode.containerInfo.firstChild),Te=t,G=!0,Ke=null,n=Wl(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gn(),r===u){t=xt(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return bl(t),e===null&&au(t),r=t.type,u=t.pendingProps,i=e!==null?e.memoizedProps:null,o=u.children,ru(r,u)?o=null:i!==null&&ru(r,i)&&(t.flags|=32),m2(e,t),xe(e,t,o,n),t.child;case 6:return e===null&&au(t),null;case 13:return C2(e,t,n);case 4:return d3(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kn(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,u=t.pendingProps,u=t.elementType===r?u:Qe(r,u),Ri(e,t,r,u,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,u=t.pendingProps,i=t.memoizedProps,o=u.value,V(ar,r._currentValue),r._currentValue=o,i!==null)if(et(i.value,o)){if(i.children===u.children&&!De.current){t=xt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=mt(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),su(i.return,n,t),l.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(D(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),su(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}xe(e,t,u.children,n),t=t.child}return t;case 9:return u=t.type,r=t.pendingProps.children,Un(t,n),u=Ue(u),r=r(u),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,u=Qe(r,t.pendingProps),u=Qe(r.type,u),Mi(e,t,r,u,n);case 15:return f2(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,u=t.pendingProps,u=t.elementType===r?u:Qe(r,u),H0(e,t),t.tag=1,Le(r)?(e=!0,ir(t)):e=!1,Un(t,n),Ul(t,r,u),du(t,r,u,n),hu(null,t,r,!0,e,n);case 19:return v2(e,t,n);case 22:return h2(e,t,n)}throw Error(D(156,t.tag))};function N2(e,t){return ol(e,t)}function j5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new j5(e,t,n,r)}function D3(e){return e=e.prototype,!(!e||!e.isReactComponent)}function H5(e){if(typeof e=="function")return D3(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bu)return 11;if(e===Zu)return 14}return 2}function Ot(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function W0(e,t,n,r,u,i){var o=2;if(r=e,typeof e=="function")D3(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Dn:return un(n.children,u,i,t);case Wu:o=8,u|=8;break;case R1:return e=je(12,n,t,u|2),e.elementType=R1,e.lanes=i,e;case M1:return e=je(13,n,t,u),e.elementType=M1,e.lanes=i,e;case I1:return e=je(19,n,t,u),e.elementType=I1,e.lanes=i,e;case Vo:return Nr(n,u,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ho:o=10;break e;case Uo:o=9;break e;case bu:o=11;break e;case Zu:o=14;break e;case kt:o=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=je(o,n,t,u),t.elementType=e,t.type=r,t.lanes=i,t}function un(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function Nr(e,t,n,r){return e=je(22,e,r,t),e.elementType=Vo,e.lanes=n,e.stateNode={isHidden:!1},e}function E1(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function S1(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function U5(e,t,n,r,u){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=r1(0),this.expirationTimes=r1(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=r1(0),this.identifierPrefix=r,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function L3(e,t,n,r,u,i,o,l,a){return e=new U5(e,t,n,l,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=je(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},c3(i),e}function V5(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function R2(e){if(!e)return Ut;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(Le(n))return Nl(e,n,t)}return t}function M2(e,t,n,r,u,i,o,l,a){return e=L3(n,r,!0,e,u,i,o,l,a),e.context=R2(null),n=e.current,r=ye(),u=It(n),i=mt(r,u),i.callback=t!=null?t:null,Rt(n,i,u),e.current.lanes=u,u0(e,u,r),Ae(e,r),e}function Rr(e,t,n,r){var u=t.current,i=ye(),o=It(u);return n=R2(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rt(u,t,o),e!==null&&(Ye(e,u,o,i),O0(e,u,o)),o}function vr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gi(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function A3(e,t){Gi(e,t),(e=e.alternate)&&Gi(e,t)}function W5(){return null}var I2=typeof reportError=="function"?reportError:function(e){console.error(e)};function P3(e){this._internalRoot=e}Mr.prototype.render=P3.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));Rr(e,t,null,null)};Mr.prototype.unmount=P3.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){Rr(null,e,null,null)}),t[Ct]=null}};function Mr(e){this._internalRoot=e}Mr.prototype.unstable_scheduleHydration=function(e){if(e){var t=fl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&t!==0&&t<Dt[n].priority;n++);Dt.splice(n,0,e),n===0&&ml(e)}};function B3(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ir(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ki(){}function b5(e,t,n,r,u){if(u){if(typeof r=="function"){var i=r;r=function(){var c=vr(o);i.call(c)}}var o=M2(t,r,e,0,null,!1,!1,"",Ki);return e._reactRootContainer=o,e[Ct]=o.current,V4(e.nodeType===8?e.parentNode:e),dn(),o}for(;u=e.lastChild;)e.removeChild(u);if(typeof r=="function"){var l=r;r=function(){var c=vr(a);l.call(c)}}var a=L3(e,0,!1,null,null,!1,!1,"",Ki);return e._reactRootContainer=a,e[Ct]=a.current,V4(e.nodeType===8?e.parentNode:e),dn(function(){Rr(t,a,n,r)}),a}function Or(e,t,n,r,u){var i=n._reactRootContainer;if(i){var o=i;if(typeof u=="function"){var l=u;u=function(){var a=vr(o);l.call(a)}}Rr(t,o,e,u)}else o=b5(n,t,e,u,r);return vr(o)}dl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=S4(t.pendingLanes);n!==0&&(Ku(t,n|1),Ae(t,J()),(O&6)===0&&(qn=J()+500,bt()))}break;case 13:dn(function(){var r=vt(e,1);if(r!==null){var u=ye();Ye(r,e,1,u)}}),A3(e,1)}};Xu=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=ye();Ye(t,e,134217728,n)}A3(e,134217728)}};pl=function(e){if(e.tag===13){var t=It(e),n=vt(e,t);if(n!==null){var r=ye();Ye(n,e,t,r)}A3(e,t)}};fl=function(){return j};hl=function(e,t){var n=j;try{return j=e,t()}finally{j=n}};Q1=function(e,t,n){switch(t){case"input":if(j1(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var u=Ar(r);if(!u)throw Error(D(90));bo(r),j1(r,u)}}}break;case"textarea":Qo(e,n);break;case"select":t=n.value,t!=null&&On(e,!!n.multiple,t,!1)}};el=S3;tl=dn;var Z5={usingClientEntryPoint:!1,Events:[o0,Bn,Ar,qo,Jo,S3]},C4={findFiberByHostInstance:Jt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Q5={bundleType:C4.bundleType,version:C4.version,rendererPackageName:C4.rendererPackageName,rendererConfig:C4.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ul(e),e===null?null:e.stateNode},findFiberByHostInstance:C4.findFiberByHostInstance||W5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var A0=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!A0.isDisabled&&A0.supportsFiber)try{kr=A0.inject(Q5),lt=A0}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z5;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!B3(t))throw Error(D(200));return V5(e,t,null,n)};Re.createRoot=function(e,t){if(!B3(e))throw Error(D(299));var n=!1,r="",u=I2;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=L3(e,1,!1,null,null,n,!1,r,u),e[Ct]=t.current,V4(e.nodeType===8?e.parentNode:e),new P3(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=ul(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return dn(e)};Re.hydrate=function(e,t,n){if(!Ir(t))throw Error(D(200));return Or(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!B3(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,u=!1,i="",o=I2;if(n!=null&&(n.unstable_strictMode===!0&&(u=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=M2(t,null,e,1,n!=null?n:null,u,!1,i,o),e[Ct]=t.current,V4(e),r)for(e=0;e<r.length;e++)n=r[e],u=n._getVersion,u=u(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,u]:t.mutableSourceEagerHydrationData.push(n,u);return new Mr(t)};Re.render=function(e,t,n){if(!Ir(t))throw Error(D(200));return Or(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!Ir(e))throw Error(D(40));return e._reactRootContainer?(dn(function(){Or(null,null,e,!1,function(){e._reactRootContainer=null,e[Ct]=null})}),!0):!1};Re.unstable_batchedUpdates=S3;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ir(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return Or(e,t,n,!1,r)};Re.version="18.2.0-next-9e3b772b8-20220608";function O2(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O2)}catch(e){console.error(e)}}O2(),Mo.exports=Re;var G5=Mo.exports;/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function q4(){return q4=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q4.apply(this,arguments)}var Bt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Bt||(Bt={}));const Xi="popstate";function K5(e){e===void 0&&(e={});function t(u,i){let{pathname:o="/",search:l="",hash:a=""}=Cn(u.location.hash.substr(1));return Du("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(u,i){let o=u.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let a=u.location.href,c=a.indexOf("#");l=c===-1?a:a.slice(0,c)}return l+"#"+(typeof i=="string"?i:xr(i))}function r(u,i){_r(u.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Y5(t,n,r,e)}function ne(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}function _r(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}function X5(){return Math.random().toString(36).substr(2,8)}function Yi(e,t){return{usr:e.state,key:e.key,idx:t}}function Du(e,t,n,r){return n===void 0&&(n=null),q4({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Cn(t):t,{state:n,key:t&&t.key||r||X5()})}function xr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Cn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Y5(e,t,n,r){r===void 0&&(r={});let{window:u=document.defaultView,v5Compat:i=!1}=r,o=u.history,l=Bt.Pop,a=null,c=h();c==null&&(c=0,o.replaceState(q4({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function g(){l=Bt.Pop;let A=h(),p=A==null?null:A-c;c=A,a&&a({action:l,location:y.location,delta:p})}function C(A,p){l=Bt.Push;let d=Du(y.location,A,p);n&&n(d,A),c=h()+1;let f=Yi(d,c),w=y.createHref(d);try{o.pushState(f,"",w)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;u.location.assign(w)}i&&a&&a({action:l,location:y.location,delta:1})}function x(A,p){l=Bt.Replace;let d=Du(y.location,A,p);n&&n(d,A),c=h();let f=Yi(d,c),w=y.createHref(d);o.replaceState(f,"",w),i&&a&&a({action:l,location:y.location,delta:0})}function E(A){let p=u.location.origin!=="null"?u.location.origin:u.location.href,d=typeof A=="string"?A:xr(A);return ne(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let y={get action(){return l},get location(){return e(u,o)},listen(A){if(a)throw new Error("A history only accepts one active listener");return u.addEventListener(Xi,g),a=A,()=>{u.removeEventListener(Xi,g),a=null}},createHref(A){return t(u,A)},createURL:E,encodeLocation(A){let p=E(A);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:C,replace:x,go(A){return o.go(A)}};return y}var qi;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(qi||(qi={}));function q5(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Cn(t):t,u=z3(r.pathname||"/",n);if(u==null)return null;let i=_2(e);J5(i);let o=null;for(let l=0;o==null&&l<i.length;++l)o=a8(i[l],d8(u));return o}function _2(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let u=(i,o,l)=>{let a={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};a.relativePath.startsWith("/")&&(ne(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=_t([r,a.relativePath]),h=n.concat(a);i.children&&i.children.length>0&&(ne(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),_2(i.children,t,h,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:o8(c,i.index),routesMeta:h})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))u(i,o);else for(let a of j2(i.path))u(i,o,a)}),t}function j2(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,u=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return u?[i,""]:[i];let o=j2(r.join("/")),l=[];return l.push(...o.map(a=>a===""?i:[i,a].join("/"))),u&&l.push(...o),l.map(a=>e.startsWith("/")&&a===""?"/":a)}function J5(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:l8(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const e8=/^:\w+$/,t8=3,n8=2,r8=1,u8=10,i8=-2,Ji=e=>e==="*";function o8(e,t){let n=e.split("/"),r=n.length;return n.some(Ji)&&(r+=i8),t&&(r+=n8),n.filter(u=>!Ji(u)).reduce((u,i)=>u+(e8.test(i)?t8:i===""?r8:u8),r)}function l8(e,t){return e.length===t.length&&e.slice(0,-1).every((r,u)=>r===t[u])?e[e.length-1]-t[t.length-1]:0}function a8(e,t){let{routesMeta:n}=e,r={},u="/",i=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,c=u==="/"?t:t.slice(u.length)||"/",h=s8({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},c);if(!h)return null;Object.assign(r,h.params);let g=l.route;i.push({params:r,pathname:_t([u,h.pathname]),pathnameBase:m8(_t([u,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(u=_t([u,h.pathnameBase]))}return i}function s8(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=c8(e.path,e.caseSensitive,e.end),u=t.match(n);if(!u)return null;let i=u[0],o=i.replace(/(.)\/+$/,"$1"),l=u.slice(1);return{params:r.reduce((c,h,g)=>{if(h==="*"){let C=l[g]||"";o=i.slice(0,i.length-C.length).replace(/(.)\/+$/,"$1")}return c[h]=p8(l[g]||"",h),c},{}),pathname:i,pathnameBase:o,pattern:e}}function c8(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),_r(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],u="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),u+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?u+="\\/*$":e!==""&&e!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,t?void 0:"i"),r]}function d8(e){try{return decodeURI(e)}catch(t){return _r(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function p8(e,t){try{return decodeURIComponent(e)}catch(n){return _r(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function z3(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function f8(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:u=""}=typeof e=="string"?Cn(e):e;return{pathname:n?n.startsWith("/")?n:h8(n,t):t,search:g8(r),hash:C8(u)}}function h8(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(u=>{u===".."?n.length>1&&n.pop():u!=="."&&n.push(u)}),n.length>1?n.join("/"):"/"}function k1(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function H2(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function U2(e,t,n,r){r===void 0&&(r=!1);let u;typeof e=="string"?u=Cn(e):(u=q4({},e),ne(!u.pathname||!u.pathname.includes("?"),k1("?","pathname","search",u)),ne(!u.pathname||!u.pathname.includes("#"),k1("#","pathname","hash",u)),ne(!u.search||!u.search.includes("#"),k1("#","search","hash",u)));let i=e===""||u.pathname==="",o=i?"/":u.pathname,l;if(r||o==null)l=n;else{let g=t.length-1;if(o.startsWith("..")){let C=o.split("/");for(;C[0]==="..";)C.shift(),g-=1;u.pathname=C.join("/")}l=g>=0?t[g]:"/"}let a=f8(u,l),c=o&&o!=="/"&&o.endsWith("/"),h=(i||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||h)&&(a.pathname+="/"),a}const _t=e=>e.join("/").replace(/\/\/+/g,"/"),m8=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),g8=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,C8=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function v8(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const x8=["post","put","patch","delete"];[...x8];/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yr(){return yr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yr.apply(this,arguments)}const $3=m.exports.createContext(null),V2=m.exports.createContext(null),vn=m.exports.createContext(null),jr=m.exports.createContext(null),Zt=m.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),W2=m.exports.createContext(null);function y8(e,t){let{relative:n}=t===void 0?{}:t;a0()||ne(!1);let{basename:r,navigator:u}=m.exports.useContext(vn),{hash:i,pathname:o,search:l}=T3(e,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:_t([r,o])),u.createHref({pathname:a,search:l,hash:i})}function a0(){return m.exports.useContext(jr)!=null}function o4(){return a0()||ne(!1),m.exports.useContext(jr).location}function b2(e){m.exports.useContext(vn).static||m.exports.useLayoutEffect(e)}function w8(){let{isDataRoute:e}=m.exports.useContext(Zt);return e?M8():E8()}function E8(){a0()||ne(!1);let e=m.exports.useContext($3),{basename:t,navigator:n}=m.exports.useContext(vn),{matches:r}=m.exports.useContext(Zt),{pathname:u}=o4(),i=JSON.stringify(H2(r).map(a=>a.pathnameBase)),o=m.exports.useRef(!1);return b2(()=>{o.current=!0}),m.exports.useCallback(function(a,c){if(c===void 0&&(c={}),!o.current)return;if(typeof a=="number"){n.go(a);return}let h=U2(a,JSON.parse(i),u,c.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:_t([t,h.pathname])),(c.replace?n.replace:n.push)(h,c.state,c)},[t,n,i,u,e])}const S8=m.exports.createContext(null);function k8(e){let t=m.exports.useContext(Zt).outlet;return t&&m.exports.createElement(S8.Provider,{value:e},t)}function T3(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=m.exports.useContext(Zt),{pathname:u}=o4(),i=JSON.stringify(H2(r).map(o=>o.pathnameBase));return m.exports.useMemo(()=>U2(e,JSON.parse(i),u,n==="path"),[e,i,u,n])}function F8(e,t){return D8(e,t)}function D8(e,t,n){a0()||ne(!1);let{navigator:r}=m.exports.useContext(vn),{matches:u}=m.exports.useContext(Zt),i=u[u.length-1],o=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let a=o4(),c;if(t){var h;let y=typeof t=="string"?Cn(t):t;l==="/"||((h=y.pathname)==null?void 0:h.startsWith(l))||ne(!1),c=y}else c=a;let g=c.pathname||"/",C=l==="/"?g:g.slice(l.length)||"/",x=q5(e,{pathname:C}),E=z8(x&&x.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:_t([l,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:_t([l,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),u,n);return t&&E?m.exports.createElement(jr.Provider,{value:{location:yr({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Bt.Pop}},E):E}function L8(){let e=R8(),t=v8(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return m.exports.createElement(m.exports.Fragment,null,m.exports.createElement("h2",null,"Unexpected Application Error!"),m.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?m.exports.createElement("pre",{style:u},n):null,i)}const A8=m.exports.createElement(L8,null);class P8 extends m.exports.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?m.exports.createElement(Zt.Provider,{value:this.props.routeContext},m.exports.createElement(W2.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function B8(e){let{routeContext:t,match:n,children:r}=e,u=m.exports.useContext($3);return u&&u.static&&u.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=n.route.id),m.exports.createElement(Zt.Provider,{value:t},r)}function z8(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var u;if((u=n)!=null&&u.errors)e=n.matches;else return null}let i=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=i.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));l>=0||ne(!1),i=i.slice(0,Math.min(i.length,l+1))}return i.reduceRight((l,a,c)=>{let h=a.route.id?o==null?void 0:o[a.route.id]:null,g=null;n&&(g=a.route.errorElement||A8);let C=t.concat(i.slice(0,c+1)),x=()=>{let E;return h?E=g:a.route.Component?E=m.exports.createElement(a.route.Component,null):a.route.element?E=a.route.element:E=l,m.exports.createElement(B8,{match:a,routeContext:{outlet:l,matches:C,isDataRoute:n!=null},children:E})};return n&&(a.route.ErrorBoundary||a.route.errorElement||c===0)?m.exports.createElement(P8,{location:n.location,revalidation:n.revalidation,component:g,error:h,children:x(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):x()},null)}var Lu;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Lu||(Lu={}));var J4;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(J4||(J4={}));function $8(e){let t=m.exports.useContext($3);return t||ne(!1),t}function T8(e){let t=m.exports.useContext(V2);return t||ne(!1),t}function N8(e){let t=m.exports.useContext(Zt);return t||ne(!1),t}function Z2(e){let t=N8(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function R8(){var e;let t=m.exports.useContext(W2),n=T8(J4.UseRouteError),r=Z2(J4.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function M8(){let{router:e}=$8(Lu.UseNavigateStable),t=Z2(J4.UseNavigateStable),n=m.exports.useRef(!1);return b2(()=>{n.current=!0}),m.exports.useCallback(function(u,i){i===void 0&&(i={}),n.current&&(typeof u=="number"?e.navigate(u):e.navigate(u,yr({fromRouteId:t},i)))},[e,t])}const I8="startTransition";Ro[I8];function Q2(e){return k8(e.context)}function de(e){ne(!1)}function O8(e){let{basename:t="/",children:n=null,location:r,navigationType:u=Bt.Pop,navigator:i,static:o=!1}=e;a0()&&ne(!1);let l=t.replace(/^\/*/,"/"),a=m.exports.useMemo(()=>({basename:l,navigator:i,static:o}),[l,i,o]);typeof r=="string"&&(r=Cn(r));let{pathname:c="/",search:h="",hash:g="",state:C=null,key:x="default"}=r,E=m.exports.useMemo(()=>{let y=z3(c,l);return y==null?null:{location:{pathname:y,search:h,hash:g,state:C,key:x},navigationType:u}},[l,c,h,g,C,x,u]);return E==null?null:m.exports.createElement(vn.Provider,{value:a},m.exports.createElement(jr.Provider,{children:n,value:E}))}function G2(e){let{children:t,location:n}=e;return F8(Au(t),n)}var eo;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(eo||(eo={}));new Promise(()=>{});function Au(e,t){t===void 0&&(t=[]);let n=[];return m.exports.Children.forEach(e,(r,u)=>{if(!m.exports.isValidElement(r))return;let i=[...t,u];if(r.type===m.exports.Fragment){n.push.apply(n,Au(r.props.children,i));return}r.type!==de&&ne(!1),!r.props.index||!r.props.children||ne(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Au(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wr(){return wr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wr.apply(this,arguments)}function K2(e,t){if(e==null)return{};var n={},r=Object.keys(e),u,i;for(i=0;i<r.length;i++)u=r[i],!(t.indexOf(u)>=0)&&(n[u]=e[u]);return n}function _8(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function j8(e,t){return e.button===0&&(!t||t==="_self")&&!_8(e)}const H8=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],U8=["aria-current","caseSensitive","className","end","style","to","children"],V8="startTransition",to=Ro[V8];function W8(e){let{basename:t,children:n,future:r,window:u}=e,i=m.exports.useRef();i.current==null&&(i.current=K5({window:u,v5Compat:!0}));let o=i.current,[l,a]=m.exports.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=m.exports.useCallback(g=>{c&&to?to(()=>a(g)):a(g)},[a,c]);return m.exports.useLayoutEffect(()=>o.listen(h),[o,h]),m.exports.createElement(O8,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const b8=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",Z8=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,N3=m.exports.forwardRef(function(t,n){let{onClick:r,relative:u,reloadDocument:i,replace:o,state:l,target:a,to:c,preventScrollReset:h}=t,g=K2(t,H8),{basename:C}=m.exports.useContext(vn),x,E=!1;if(typeof c=="string"&&Z8.test(c)&&(x=c,b8))try{let d=new URL(window.location.href),f=c.startsWith("//")?new URL(d.protocol+c):new URL(c),w=z3(f.pathname,C);f.origin===d.origin&&w!=null?c=w+f.search+f.hash:E=!0}catch{}let y=y8(c,{relative:u}),A=Q8(c,{replace:o,state:l,target:a,preventScrollReset:h,relative:u});function p(d){r&&r(d),d.defaultPrevented||A(d)}return m.exports.createElement("a",wr({},g,{href:x||y,onClick:E||i?r:p,ref:n,target:a}))}),Jn=m.exports.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:u=!1,className:i="",end:o=!1,style:l,to:a,children:c}=t,h=K2(t,U8),g=T3(a,{relative:h.relative}),C=o4(),x=m.exports.useContext(V2),{navigator:E}=m.exports.useContext(vn),y=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,A=C.pathname,p=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;u||(A=A.toLowerCase(),p=p?p.toLowerCase():null,y=y.toLowerCase());let d=A===y||!o&&A.startsWith(y)&&A.charAt(y.length)==="/",f=p!=null&&(p===y||!o&&p.startsWith(y)&&p.charAt(y.length)==="/"),w=d?r:void 0,F;typeof i=="function"?F=i({isActive:d,isPending:f}):F=[i,d?"active":null,f?"pending":null].filter(Boolean).join(" ");let L=typeof l=="function"?l({isActive:d,isPending:f}):l;return m.exports.createElement(N3,wr({},h,{"aria-current":w,className:F,ref:n,style:L,to:a}),typeof c=="function"?c({isActive:d,isPending:f}):c)});var no;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(no||(no={}));var ro;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ro||(ro={}));function Q8(e,t){let{target:n,replace:r,state:u,preventScrollReset:i,relative:o}=t===void 0?{}:t,l=w8(),a=o4(),c=T3(e,{relative:o});return m.exports.useCallback(h=>{if(j8(h,n)){h.preventDefault();let g=r!==void 0?r:xr(a)===xr(c);l(e,{replace:g,state:u,preventScrollReset:i,relative:o})}},[a,l,c,r,u,n,e,i,o])}var ae=function(){return ae=Object.assign||function(t){for(var n,r=1,u=arguments.length;r<u;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ae.apply(this,arguments)};function e0(e,t,n){if(n||arguments.length===2)for(var r=0,u=t.length,i;r<u;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var b="-ms-",N4="-moz-",_="-webkit-",X2="comm",Hr="rule",R3="decl",G8="@import",Y2="@keyframes",K8="@layer",X8=Math.abs,M3=String.fromCharCode,Y8=Object.assign;function q8(e,t){return le(e,0)^45?(((t<<2^le(e,0))<<2^le(e,1))<<2^le(e,2))<<2^le(e,3):0}function q2(e){return e.trim()}function St(e,t){return(e=t.exec(e))?e[0]:e}function R(e,t,n){return e.replace(t,n)}function b0(e,t){return e.indexOf(t)}function le(e,t){return e.charCodeAt(t)|0}function e4(e,t,n){return e.slice(t,n)}function pt(e){return e.length}function I3(e){return e.length}function P0(e,t){return t.push(e),e}function J8(e,t){return e.map(t).join("")}var Ur=1,t4=1,J2=0,We=0,ee=0,l4="";function Vr(e,t,n,r,u,i,o){return{value:e,root:t,parent:n,type:r,props:u,children:i,line:Ur,column:t4,length:o,return:""}}function v4(e,t){return Y8(Vr("",null,null,"",null,null,0),e,{length:-e.length},t)}function e9(){return ee}function t9(){return ee=We>0?le(l4,--We):0,t4--,ee===10&&(t4=1,Ur--),ee}function qe(){return ee=We<J2?le(l4,We++):0,t4++,ee===10&&(t4=1,Ur++),ee}function on(){return le(l4,We)}function Z0(){return We}function Wr(e,t){return e4(l4,e,t)}function Pu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function n9(e){return Ur=t4=1,J2=pt(l4=e),We=0,[]}function r9(e){return l4="",e}function F1(e){return q2(Wr(We-1,Bu(e===91?e+2:e===40?e+1:e)))}function u9(e){for(;(ee=on())&&ee<33;)qe();return Pu(e)>2||Pu(ee)>3?"":" "}function i9(e,t){for(;--t&&qe()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return Wr(e,Z0()+(t<6&&on()==32&&qe()==32))}function Bu(e){for(;qe();)switch(ee){case e:return We;case 34:case 39:e!==34&&e!==39&&Bu(ee);break;case 40:e===41&&Bu(e);break;case 92:qe();break}return We}function o9(e,t){for(;qe()&&e+ee!==47+10;)if(e+ee===42+42&&on()===47)break;return"/*"+Wr(t,We-1)+"*"+M3(e===47?e:qe())}function l9(e){for(;!Pu(on());)qe();return Wr(e,We)}function a9(e){return r9(Q0("",null,null,null,[""],e=n9(e),0,[0],e))}function Q0(e,t,n,r,u,i,o,l,a){for(var c=0,h=0,g=o,C=0,x=0,E=0,y=1,A=1,p=1,d=0,f="",w=u,F=i,L=r,k=f;A;)switch(E=d,d=qe()){case 40:if(E!=108&&le(k,g-1)==58){b0(k+=R(F1(d),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:k+=F1(d);break;case 9:case 10:case 13:case 32:k+=u9(E);break;case 92:k+=i9(Z0()-1,7);continue;case 47:switch(on()){case 42:case 47:P0(s9(o9(qe(),Z0()),t,n),a);break;default:k+="/"}break;case 123*y:l[c++]=pt(k)*p;case 125*y:case 59:case 0:switch(d){case 0:case 125:A=0;case 59+h:p==-1&&(k=R(k,/\f/g,"")),x>0&&pt(k)-g&&P0(x>32?io(k+";",r,n,g-1):io(R(k," ","")+";",r,n,g-2),a);break;case 59:k+=";";default:if(P0(L=uo(k,t,n,c,h,u,l,f,w=[],F=[],g),i),d===123)if(h===0)Q0(k,t,L,L,w,i,g,l,F);else switch(C===99&&le(k,3)===110?100:C){case 100:case 108:case 109:case 115:Q0(e,L,L,r&&P0(uo(e,L,L,0,0,u,l,f,u,w=[],g),F),u,F,g,l,r?w:F);break;default:Q0(k,L,L,L,[""],F,0,l,F)}}c=h=x=0,y=p=1,f=k="",g=o;break;case 58:g=1+pt(k),x=E;default:if(y<1){if(d==123)--y;else if(d==125&&y++==0&&t9()==125)continue}switch(k+=M3(d),d*y){case 38:p=h>0?1:(k+="\f",-1);break;case 44:l[c++]=(pt(k)-1)*p,p=1;break;case 64:on()===45&&(k+=F1(qe())),C=on(),h=g=pt(f=k+=l9(Z0())),d++;break;case 45:E===45&&pt(k)==2&&(y=0)}}return i}function uo(e,t,n,r,u,i,o,l,a,c,h){for(var g=u-1,C=u===0?i:[""],x=I3(C),E=0,y=0,A=0;E<r;++E)for(var p=0,d=e4(e,g+1,g=X8(y=o[E])),f=e;p<x;++p)(f=q2(y>0?C[p]+" "+d:R(d,/&\f/g,C[p])))&&(a[A++]=f);return Vr(e,t,n,u===0?Hr:l,a,c,h)}function s9(e,t,n){return Vr(e,t,n,X2,M3(e9()),e4(e,2,-2),0)}function io(e,t,n,r){return Vr(e,t,n,R3,e4(e,0,r),e4(e,r+1,-1),r)}function ea(e,t,n){switch(q8(e,t)){case 5103:return _+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return _+e+e;case 4789:return N4+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return _+e+N4+e+b+e+e;case 5936:switch(le(e,t+11)){case 114:return _+e+b+R(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return _+e+b+R(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return _+e+b+R(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return _+e+b+e+e;case 6165:return _+e+b+"flex-"+e+e;case 5187:return _+e+R(e,/(\w+).+(:[^]+)/,_+"box-$1$2"+b+"flex-$1$2")+e;case 5443:return _+e+b+"flex-item-"+R(e,/flex-|-self/g,"")+(St(e,/flex-|baseline/)?"":b+"grid-row-"+R(e,/flex-|-self/g,""))+e;case 4675:return _+e+b+"flex-line-pack"+R(e,/align-content|flex-|-self/g,"")+e;case 5548:return _+e+b+R(e,"shrink","negative")+e;case 5292:return _+e+b+R(e,"basis","preferred-size")+e;case 6060:return _+"box-"+R(e,"-grow","")+_+e+b+R(e,"grow","positive")+e;case 4554:return _+R(e,/([^-])(transform)/g,"$1"+_+"$2")+e;case 6187:return R(R(R(e,/(zoom-|grab)/,_+"$1"),/(image-set)/,_+"$1"),e,"")+e;case 5495:case 3959:return R(e,/(image-set\([^]*)/,_+"$1$`$1");case 4968:return R(R(e,/(.+:)(flex-)?(.*)/,_+"box-pack:$3"+b+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+_+e+e;case 4200:if(!St(e,/flex-|baseline/))return b+"grid-column-align"+e4(e,t)+e;break;case 2592:case 3360:return b+R(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,u){return t=u,St(r.props,/grid-\w+-end/)})?~b0(e+(n=n[t].value),"span")?e:b+R(e,"-start","")+e+b+"grid-row-span:"+(~b0(n,"span")?St(n,/\d+/):+St(n,/\d+/)-+St(e,/\d+/))+";":b+R(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return St(r.props,/grid-\w+-start/)})?e:b+R(R(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return R(e,/(.+)-inline(.+)/,_+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pt(e)-1-t>6)switch(le(e,t+1)){case 109:if(le(e,t+4)!==45)break;case 102:return R(e,/(.+:)(.+)-([^]+)/,"$1"+_+"$2-$3$1"+N4+(le(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~b0(e,"stretch")?ea(R(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return R(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,u,i,o,l,a,c){return b+u+":"+i+c+(o?b+u+"-span:"+(l?a:+a-+i)+c:"")+e});case 4949:if(le(e,t+6)===121)return R(e,":",":"+_)+e;break;case 6444:switch(le(e,le(e,14)===45?18:11)){case 120:return R(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+_+(le(e,14)===45?"inline-":"")+"box$3$1"+_+"$2$3$1"+b+"$2box$3")+e;case 100:return R(e,":",":"+b)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return R(e,"scroll-","scroll-snap-")+e}return e}function Wn(e,t){for(var n="",r=I3(e),u=0;u<r;u++)n+=t(e[u],u,e,t)||"";return n}function c9(e,t,n,r){switch(e.type){case K8:if(e.children.length)break;case G8:case R3:return e.return=e.return||e.value;case X2:return"";case Y2:return e.return=e.value+"{"+Wn(e.children,r)+"}";case Hr:e.value=e.props.join(",")}return pt(n=Wn(e.children,r))?e.return=e.value+"{"+n+"}":""}function d9(e){var t=I3(e);return function(n,r,u,i){for(var o="",l=0;l<t;l++)o+=e[l](n,r,u,i)||"";return o}}function p9(e){return function(t){t.root||(t=t.return)&&e(t)}}function f9(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case R3:e.return=ea(e.value,e.length,n);return;case Y2:return Wn([v4(e,{value:R(e.value,"@","@"+_)})],r);case Hr:if(e.length)return J8(e.props,function(u){switch(St(u,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Wn([v4(e,{props:[R(u,/:(read-\w+)/,":"+N4+"$1")]})],r);case"::placeholder":return Wn([v4(e,{props:[R(u,/:(plac\w+)/,":"+_+"input-$1")]}),v4(e,{props:[R(u,/:(plac\w+)/,":"+N4+"$1")]}),v4(e,{props:[R(u,/:(plac\w+)/,b+"input-$1")]})],r)}return""})}}var h9={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},n4=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",O3=typeof window!="undefined"&&"HTMLElement"in window,m9=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),g9={},_3=Object.freeze([]),pn=Object.freeze({});function ta(e,t,n){return n===void 0&&(n=pn),e.theme!==n.theme&&e.theme||t||n.theme}var na=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),C9=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,v9=/(^-|-$)/g;function oo(e){return e.replace(C9,"-").replace(v9,"")}var x9=/(a)(d)/gi,lo=function(e){return String.fromCharCode(e+(e>25?39:97))};function zu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=lo(t%52)+n;return(lo(t%52)+n).replace(x9,"$1-$2")}var D1,In=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ra=function(e){return In(5381,e)};function ua(e){return zu(ra(e)>>>0)}function y9(e){return e.displayName||e.name||"Component"}function L1(e){return typeof e=="string"&&!0}var ia=typeof Symbol=="function"&&Symbol.for,oa=ia?Symbol.for("react.memo"):60115,w9=ia?Symbol.for("react.forward_ref"):60112,E9={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},S9={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},la={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},k9=((D1={})[w9]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},D1[oa]=la,D1);function ao(e){return("type"in(t=e)&&t.type.$$typeof)===oa?la:"$$typeof"in e?k9[e.$$typeof]:E9;var t}var F9=Object.defineProperty,D9=Object.getOwnPropertyNames,so=Object.getOwnPropertySymbols,L9=Object.getOwnPropertyDescriptor,A9=Object.getPrototypeOf,co=Object.prototype;function aa(e,t,n){if(typeof t!="string"){if(co){var r=A9(t);r&&r!==co&&aa(e,r,n)}var u=D9(t);so&&(u=u.concat(so(t)));for(var i=ao(e),o=ao(t),l=0;l<u.length;++l){var a=u[l];if(!(a in S9||n&&n[a]||o&&a in o||i&&a in i)){var c=L9(t,a);try{F9(e,a,c)}catch{}}}}return e}function fn(e){return typeof e=="function"}function j3(e){return typeof e=="object"&&"styledComponentId"in e}function nn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function $u(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function t0(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Tu(e,t,n){if(n===void 0&&(n=!1),!n&&!t0(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Tu(e[r],t[r]);else if(t0(t))for(var r in t)e[r]=Tu(e[r],t[r]);return e}function H3(e,t){Object.defineProperty(e,"toString",{value:t})}function hn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var P9=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,u=r.length,i=u;t>=i;)if((i<<=1)<0)throw hn(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=u;o<i;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(t+1),a=(o=0,n.length);o<a;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),u=r+n;this.groupSizes[t]=0;for(var i=r;i<u;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],u=this.indexOfGroup(t),i=u+r,o=u;o<i;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),G0=new Map,Er=new Map,A1=1,B0=function(e){if(G0.has(e))return G0.get(e);for(;Er.has(A1);)A1++;var t=A1++;return G0.set(e,t),Er.set(t,e),t},B9=function(e,t){G0.set(e,t),Er.set(t,e)},z9="style[".concat(n4,"][").concat("data-styled-version",'="').concat("6.0.0-rc.6",'"]'),$9=new RegExp("^".concat(n4,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),T9=function(e,t,n){for(var r,u=n.split(","),i=0,o=u.length;i<o;i++)(r=u[i])&&e.registerName(t,r)},N9=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),u=[],i=0,o=r.length;i<o;i++){var l=r[i].trim();if(l){var a=l.match($9);if(a){var c=0|parseInt(a[1],10),h=a[2];c!==0&&(B9(h,c),T9(e,h,a[3]),e.getTag().insertRules(c,u)),u.length=0}else u.push(l)}}};function R9(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var sa=function(e){var t=document.head,n=e||t,r=document.createElement("style"),u=function(l){return Array.from(l.querySelectorAll("style[".concat(n4,"]"))).at(-1)}(n),i=u!==void 0?u.nextSibling:null;r.setAttribute(n4,"active"),r.setAttribute("data-styled-version","6.0.0-rc.6");var o=R9();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},M9=function(){function e(t){this.element=sa(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,u=0,i=r.length;u<i;u++){var o=r[u];if(o.ownerNode===n)return o}throw hn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),I9=function(){function e(t){this.element=sa(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),O9=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),po=O3,_9={isServer:!O3,useCSSOMInjection:!m9},Sr=function(){function e(t,n,r){t===void 0&&(t=pn),n===void 0&&(n={});var u=this;this.options=ae(ae({},_9),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&O3&&po&&(po=!1,function(i){for(var o=document.querySelectorAll(z9),l=0,a=o.length;l<a;l++){var c=o[l];c&&c.getAttribute(n4)!=="active"&&(N9(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),H3(this,function(){return function(i){for(var o=i.getTag(),l=o.length,a="",c=function(g){var C=function(p){return Er.get(p)}(g);if(C===void 0)return"continue";var x=i.names.get(C),E=o.getGroup(g);if(x===void 0||E.length===0)return"continue";var y="".concat(n4,".g").concat(g,'[id="').concat(C,'"]'),A="";x!==void 0&&x.forEach(function(p){p.length>0&&(A+="".concat(p,","))}),a+="".concat(E).concat(y,'{content:"').concat(A,'"}').concat(`/*!sc*/
`)},h=0;h<l;h++)c(h);return a}(u)})}return e.registerId=function(t){return B0(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ae(ae({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,u=n.target;return n.isServer?new O9(u):r?new M9(u):new I9(u)}(this.options),new P9(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(B0(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(B0(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(B0(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),j9=/&/g,H9=/^\s*\/\/.*$/gm;function ca(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ca(n.children,t)),n})}function U9(e){var t,n,r,u=e===void 0?pn:e,i=u.options,o=i===void 0?pn:i,l=u.plugins,a=l===void 0?_3:l,c=function(C,x,E){return E===n||E.startsWith(n)&&E.endsWith(n)&&E.replaceAll(n,"").length>0?".".concat(t):C},h=a.slice();h.push(function(C){C.type===Hr&&C.value.includes("&")&&(C.props[0]=C.props[0].replace(j9,n).replace(r,c))}),o.prefix&&h.push(f9),h.push(c9);var g=function(C,x,E,y){x===void 0&&(x=""),E===void 0&&(E=""),y===void 0&&(y="&"),t=y,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var A=C.replace(H9,""),p=a9(E||x?"".concat(E," ").concat(x," { ").concat(A," }"):A);o.namespace&&(p=ca(p,o.namespace));var d=[];return Wn(p,d9(h.concat(p9(function(f){return d.push(f)})))),d};return g.hash=a.length?a.reduce(function(C,x){return x.name||hn(15),In(C,x.name)},5381).toString():"",g}var V9=new Sr,Nu=U9(),da=ke.createContext({shouldForwardProp:void 0,styleSheet:V9,stylis:Nu});da.Consumer;ke.createContext(void 0);function Ru(){return m.exports.useContext(da)}var W9=function(){function e(t,n){var r=this;this.inject=function(u,i){i===void 0&&(i=Nu);var o=r.name+i.hash;u.hasNameForId(r.id,o)||u.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,H3(this,function(){throw hn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Nu),this.name+t.hash},e}(),b9=function(e){return e>="A"&&e<="Z"};function fo(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;b9(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var pa=function(e){return e==null||e===!1||e===""},fa=function(e){var t,n,r=[];for(var u in e){var i=e[u];e.hasOwnProperty(u)&&!pa(i)&&(Array.isArray(i)&&i.isCss||fn(i)?r.push("".concat(fo(u),":"),i,";"):t0(i)?r.push.apply(r,e0(e0(["".concat(u," {")],fa(i),!1),["}"],!1)):r.push("".concat(fo(u),": ").concat((t=u,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in h9||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function jt(e,t,n,r){if(pa(e))return[];if(j3(e))return[".".concat(e.styledComponentId)];if(fn(e)){if(!fn(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var u=e(t);return jt(u,t,n,r)}var i;return e instanceof W9?n?(e.inject(n,r),[e.getName(r)]):[e]:t0(e)?fa(e):Array.isArray(e)?e.flatMap(function(o){return jt(o,t,n,r)}):[e.toString()]}function ha(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(fn(n)&&!j3(n))return!1}return!0}var Z9=ra("6.0.0-rc.6"),Q9=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ha(t),this.componentId=n,this.baseHash=In(Z9,n),this.baseStyle=r,Sr.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))u=nn(u,this.staticRulesId);else{var i=$u(jt(this.rules,t,n,r)),o=zu(In(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(i,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}u=nn(u,o),this.staticRulesId=o}else{for(var a=In(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var g=this.rules[h];if(typeof g=="string")c+=g;else if(g){var C=$u(jt(g,t,n,r));a=In(a,C),c+=C}}if(c){var x=zu(a>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(c,".".concat(x),void 0,this.componentId)),u=nn(u,x)}}return u},e}(),n0=ke.createContext(void 0);n0.Consumer;function G9(e){var t=ke.useContext(n0),n=m.exports.useMemo(function(){return function(r,u){if(!r)throw hn(14);if(fn(r)){var i=r(u);return i}if(Array.isArray(r)||typeof r!="object")throw hn(8);return u?ae(ae({},u),r):r}(e.theme,t)},[e.theme,t]);return e.children?ke.createElement(n0.Provider,{value:n},e.children):null}var P1={};function K9(e,t,n){var r=j3(e),u=e,i=!L1(e),o=t.attrs,l=o===void 0?_3:o,a=t.componentId,c=a===void 0?function(F,L){var k=typeof F!="string"?"sc":oo(F);P1[k]=(P1[k]||0)+1;var z="".concat(k,"-").concat(ua("6.0.0-rc.6"+k+P1[k]));return L?"".concat(L,"-").concat(z):z}(t.displayName,t.parentComponentId):a,h=t.displayName,g=h===void 0?function(F){return L1(F)?"styled.".concat(F):"Styled(".concat(y9(F),")")}(e):h,C=t.displayName&&t.componentId?"".concat(oo(t.displayName),"-").concat(t.componentId):t.componentId||c,x=r&&u.attrs?u.attrs.concat(l).filter(Boolean):l,E=t.shouldForwardProp;if(r&&u.shouldForwardProp){var y=u.shouldForwardProp;if(t.shouldForwardProp){var A=t.shouldForwardProp;E=function(F,L){return y(F,L)&&A(F,L)}}else E=y}var p=new Q9(n,C,r?u.componentStyle:void 0),d=p.isStatic&&l.length===0;function f(F,L){return function(k,z,H,N){var Pe=k.attrs,Qt=k.componentStyle,Gt=k.defaultProps,c0=k.foldedComponentIds,Kr=k.styledComponentId,a4=k.target,s4=ke.useContext(n0),P=Ru(),T=k.shouldForwardProp||P.shouldForwardProp,$=function(Ie,rt,Xr){for(var xn,st=ae(ae({},rt),{className:void 0,theme:Xr}),Yr=0;Yr<Ie.length;Yr+=1){var d0=fn(xn=Ie[Yr])?xn(st):xn;for(var wt in d0)st[wt]=wt==="className"?nn(st[wt],d0[wt]):wt==="style"?ae(ae({},st[wt]),d0[wt]):d0[wt]}return rt.className&&(st.className=nn(st.className,rt.className)),st}(Pe,z,ta(z,s4,Gt)||pn),U=$.as||a4,Q={};for(var Be in $)$[Be]===void 0||Be[0]==="$"||Be==="as"||Be==="theme"||(Be==="forwardedAs"?Q.as=$.forwardedAs:T&&!T(Be,U)||(Q[Be]=$[Be]));var nt=function(Ie,rt,Xr){var xn=Ru(),st=Ie.generateAndInjectStyles(rt?pn:Xr,xn.styleSheet,xn.stylis);return st}(Qt,N,$),Kt=nn(c0,Kr);return nt&&(Kt+=" "+nt),$.className&&(Kt+=" "+$.className),Q[L1(U)&&!na.has(U)?"class":"className"]=Kt,Q.ref=H,m.exports.createElement(U,Q)}(w,F,L,d)}f.displayName=g;var w=ke.forwardRef(f);return w.attrs=x,w.componentStyle=p,w.displayName=g,w.shouldForwardProp=E,w.foldedComponentIds=r?nn(u.foldedComponentIds,u.styledComponentId):"",w.styledComponentId=C,w.target=r?u.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(F){this._foldedDefaultProps=r?function(L){for(var k=[],z=1;z<arguments.length;z++)k[z-1]=arguments[z];for(var H=0,N=k;H<N.length;H++)Tu(L,N[H],!0);return L}({},u.defaultProps,F):F}}),H3(w,function(){return".".concat(w.styledComponentId)}),i&&aa(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function ho(e,t){for(var n=[e[0]],r=0,u=t.length;r<u;r+=1)n.push(t[r],e[r+1]);return n}var mo=function(e){return Object.assign(e,{isCss:!0})};function s0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(fn(e)||t0(e)){var r=e;return mo(jt(ho(_3,e0([r],t,!0))))}var u=e;return t.length===0&&u.length===1&&typeof u[0]=="string"?jt(u):mo(jt(ho(u,t)))}function Mu(e,t,n){if(n===void 0&&(n=pn),!t)throw hn(1,t);var r=function(u){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,s0.apply(void 0,e0([u],i,!1)))};return r.attrs=function(u){return Mu(e,t,ae(ae({},n),{attrs:Array.prototype.concat(n.attrs,u).filter(Boolean)}))},r.withConfig=function(u){return Mu(e,t,ae(ae({},n),u))},r}var ma=function(e){return Mu(K9,e)},v=ma;na.forEach(function(e){v[e]=ma(e)});var X9=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=ha(t),Sr.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,u){var i=u($u(jt(this.rules,n,r,u)),""),o=this.componentId+t;r.insertRules(o,o,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,u){t>2&&Sr.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,u)},e}();function Y9(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=s0.apply(void 0,e0([e],t,!1)),u="sc-global-".concat(ua(JSON.stringify(r))),i=new X9(r,u),o=function(a){var c=Ru(),h=ke.useContext(n0),g=ke.useRef(c.styleSheet.allocateGSInstance(u)).current;return c.styleSheet.server&&l(g,a,c.styleSheet,h,c.stylis),(ke.useInsertionEffect||ke.useLayoutEffect)(function(){if(!c.styleSheet.server)return l(g,a,c.styleSheet,h,c.stylis),function(){return i.removeStyles(g,c.styleSheet)}},[g,a,c.styleSheet,h,c.stylis]),null};function l(a,c,h,g,C){if(i.isStatic)i.renderStyles(a,g9,h,C);else{var x=ae(ae({},c),{theme:ta(c,g,o.defaultProps)});i.renderStyles(a,x,h,C)}}return ke.memo(o)}const M={colors:{background:"#F9F9F9",grey:"#ACABAB",lightGrey:"#CDCDCD",dark:"#2E2E2E",green:"#758650",lightGreen:"#B5C268",lightYellow:"#FFE27C",yellow:"#E8B535",midYellow:"#D7A323",darkYellow:"#B58200"},fonts:{openSans:"Open Sans"},fontSizes:{subheadline:"1rem",bodyText:"1.125rem",buttonText:"1.125rem",h3:"1.5rem",h2:"2.5rem",h1:"3.5rem",mobileSubheadline:"0.75rem",mobileBodyText:"1rem",mobileButtonText:"1rem",tabletH3:"1.5rem",tabletH2:"2.25rem",tabletH1:"2.625rem",mobileH3:"1.25rem",mobileH2:"1.75rem",mobileH1:"2rem"},fontWeights:{regular:400,semiBold:600,bold:700},lineHeights:{h1:1.2,normal:1.4},paddings:{container:"0 84px",containerTablet:"0 40px",containerMobile:"0 16px",button:"15.5px 24px",buttonTablet:"17px 12.5px",input:"12px"},transitions:{long:"all ease 0.3s",quick:"all ease 0.1s"},headerHeight:"96px"},q9=e=>m.exports.createElement("svg",{width:64,height:48,viewBox:"0 0 64 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.exports.createElement("path",{d:"M11.2391 7.31769C11.2391 8.47842 10.9502 9.53822 10.3726 10.4971C9.79489 11.4391 9.02184 12.2298 8.05339 12.869C8.5631 12.9699 9.00485 13.1466 9.37863 13.3989C9.75242 13.6344 10.0582 13.9288 10.2961 14.2821C10.551 14.6353 10.7379 15.0391 10.8568 15.4933C10.9927 15.9307 11.0607 16.3933 11.0607 16.8811C11.0607 17.84 10.8313 18.6811 10.3726 19.4044C9.93082 20.111 9.35315 20.6997 8.63956 21.1708C7.92596 21.625 7.12742 21.9698 6.24393 22.2053C5.37742 22.424 4.51092 22.5334 3.64441 22.5334C3.16869 22.5334 2.69296 22.4997 2.21723 22.4324C1.7415 22.3651 1.29126 22.2474 0.866504 22.0792C0.713592 22.0287 0.586164 21.8268 0.484223 21.4736C0.382281 21.1035 0.29733 20.6577 0.229369 20.1362C0.178398 19.6147 0.135922 19.0512 0.101942 18.4456C0.0679611 17.84 0.0424757 17.2596 0.0254854 16.7045C0.00849513 16.1493 0 15.6615 0 15.2409C0 14.8204 0 14.526 0 14.3578C0 13.769 0 13.1802 0 12.5914C0 11.9858 0.0169903 11.3887 0.0509708 10.7999C0.0509708 10.6485 0.0509708 10.413 0.0509708 10.0933C0.0679611 9.77373 0.0764562 9.42046 0.0764562 9.03355C0.0934465 8.62982 0.110437 8.20926 0.127427 7.77188C0.161408 7.33451 0.195388 6.93078 0.229369 6.56069C0.28034 6.17378 0.339805 5.84575 0.407766 5.57659C0.492718 5.30744 0.586165 5.13921 0.688106 5.07193C1.07888 4.81959 1.51213 4.58408 1.98786 4.36539C2.46359 4.12988 2.95631 3.92802 3.46602 3.75979C3.97573 3.59157 4.48543 3.45699 4.99514 3.35606C5.50485 3.25513 5.98907 3.20466 6.44781 3.20466C7.07645 3.20466 7.67961 3.29718 8.25728 3.48222C8.85194 3.65045 9.36164 3.91119 9.7864 4.26446C10.2281 4.61773 10.5764 5.0551 10.8313 5.57659C11.1031 6.08126 11.2391 6.66162 11.2391 7.31769ZM7.00849 8.65505C7.00849 8.36907 6.91504 8.1588 6.72815 8.02422C6.55825 7.88964 6.32888 7.82235 6.04004 7.82235C5.80218 7.82235 5.54733 7.87282 5.27548 7.97375C5.02063 8.07468 4.79975 8.20926 4.61286 8.37749C4.56189 8.42795 4.51092 8.57094 4.45995 8.80645C4.42597 9.04196 4.39199 9.31112 4.35801 9.61392C4.34102 9.89989 4.32403 10.1775 4.30704 10.4466C4.30704 10.6989 4.30704 10.8672 4.30704 10.9513C4.30704 10.9849 4.30704 11.0438 4.30704 11.1279C4.30704 11.1952 4.30704 11.2709 4.30704 11.355C4.32403 11.4391 4.34102 11.5148 4.35801 11.5821C4.375 11.6494 4.40048 11.683 4.43446 11.683C4.7233 11.683 5.02063 11.5821 5.32645 11.3802C5.63228 11.1616 5.90412 10.9008 6.14199 10.598C6.39684 10.2784 6.60072 9.94195 6.75364 9.58868C6.92354 9.23542 7.00849 8.92421 7.00849 8.65505ZM6.90655 15.9475C6.90655 15.6615 6.80461 15.4596 6.60072 15.3419C6.39684 15.2241 6.16747 15.1652 5.91262 15.1652C5.67475 15.1652 5.4199 15.2241 5.14805 15.3419C4.8932 15.4428 4.68082 15.569 4.51092 15.7204C4.45995 15.754 4.41747 15.8381 4.38349 15.9727C4.3665 16.1073 4.34951 16.2587 4.33252 16.4269C4.33252 16.5783 4.32403 16.7297 4.30704 16.8811C4.30704 17.0157 4.30704 17.1082 4.30704 17.1587C4.30704 17.1923 4.30704 17.2596 4.30704 17.3605C4.30704 17.4615 4.30704 17.5708 4.30704 17.6886C4.32403 17.7895 4.34102 17.8904 4.35801 17.9914C4.39199 18.0755 4.42597 18.1175 4.45995 18.1175C4.69781 18.1175 4.96116 18.0502 5.25 17.9157C5.53883 17.7811 5.80218 17.6129 6.04004 17.411C6.2949 17.2091 6.49878 16.982 6.65169 16.7297C6.8216 16.4605 6.90655 16.1998 6.90655 15.9475Z",fill:"#758650"}),m.exports.createElement("path",{d:"M21.2039 5.09716C21.2039 5.41678 21.1274 5.70275 20.9745 5.95509C20.8386 6.20742 20.6517 6.42611 20.4138 6.61115C20.176 6.77938 19.9126 6.92236 19.6238 7.04012C19.3349 7.15787 19.0546 7.24199 18.7828 7.29245C18.7488 9.19336 18.6723 11.027 18.5534 12.7933C18.4514 14.5596 18.2815 16.3848 18.0437 18.2689H18.1966C18.4684 18.2689 18.7318 18.3026 18.9866 18.3699C19.2585 18.4203 19.4963 18.5213 19.7002 18.6727C19.9211 18.8072 20.091 18.9839 20.2099 19.2026C20.3459 19.4044 20.4138 19.6568 20.4138 19.9596C20.4138 20.3465 20.2864 20.6829 20.0315 20.9689C19.7937 21.2549 19.4709 21.4988 19.0631 21.7007C18.6723 21.9025 18.2306 22.0708 17.7378 22.2053C17.2451 22.3399 16.7524 22.4408 16.2597 22.5081C15.767 22.5922 15.2997 22.6511 14.858 22.6848C14.4163 22.7184 14.0595 22.7352 13.7876 22.7352C13.5837 22.7352 13.3289 22.7268 13.023 22.71C12.7342 22.6932 12.4539 22.6427 12.182 22.5586C11.9272 22.4745 11.7063 22.3483 11.5194 22.1801C11.3325 22.0119 11.2391 21.7848 11.2391 21.4988C11.2391 21.1455 11.3155 20.8343 11.4684 20.5652C11.6044 20.2792 11.7913 20.0269 12.0291 19.8082C12.267 19.5895 12.5303 19.4128 12.8192 19.2783C13.125 19.1437 13.4308 19.0428 13.7366 18.9755C13.8556 18.0502 13.966 17.1334 14.068 16.225C14.1699 15.2998 14.2379 14.3662 14.2718 13.4241C14.3058 12.4653 14.3398 11.5232 14.3738 10.598C14.4078 9.65597 14.4417 8.71393 14.4757 7.77188C14.3568 7.78871 14.2463 7.80553 14.1444 7.82235C14.0425 7.82235 13.949 7.82235 13.8641 7.82235C13.6262 7.82235 13.3714 7.79712 13.0995 7.74665C12.8277 7.69619 12.5728 7.61207 12.3349 7.49432C12.0971 7.35974 11.8932 7.19993 11.7233 7.01488C11.5704 6.82984 11.4939 6.59434 11.4939 6.30836C11.4939 5.7364 11.7318 5.26538 12.2075 4.89529C12.7002 4.5252 13.2779 4.23923 13.9405 4.03736C14.6201 3.83549 15.3082 3.70092 16.0048 3.63363C16.7014 3.54952 17.2621 3.50746 17.6869 3.50746C17.9247 3.50746 18.2391 3.52428 18.6298 3.55793C19.0206 3.59157 19.4029 3.66727 19.7767 3.78502C20.1675 3.90278 20.4988 4.06259 20.7706 4.26446C21.0595 4.46633 21.2039 4.74389 21.2039 5.09716Z",fill:"#758650"}),m.exports.createElement("path",{d:"M32.9781 16.1746C32.8252 16.9316 32.5789 17.7222 32.2391 18.5465C31.9162 19.354 31.4915 20.0941 30.9648 20.767C30.4551 21.4399 29.8434 21.9866 29.1298 22.4072C28.4162 22.8446 27.6007 23.0633 26.6832 23.0633C26.0036 23.0633 25.392 22.9287 24.8483 22.6595C24.3046 22.3904 23.8119 22.0287 23.3701 21.5745C22.9284 21.1203 22.5461 20.5988 22.2233 20.01C21.9005 19.4213 21.6286 18.8157 21.4077 18.1932C21.2039 17.554 21.051 16.9232 20.949 16.3007C20.8471 15.6783 20.7961 15.098 20.7961 14.5596C20.7961 13.8026 20.8641 12.9952 21 12.1372C21.1529 11.2625 21.3738 10.4046 21.6626 9.56345C21.9514 8.70552 22.3167 7.88964 22.7585 7.11582C23.2002 6.32518 23.7184 5.63547 24.3131 5.04669C24.9247 4.44109 25.6043 3.96166 26.3519 3.60839C27.1165 3.23831 27.966 3.05326 28.9005 3.05326C29.4951 3.05326 30.0473 3.17101 30.557 3.40652C31.0667 3.62521 31.5085 3.92801 31.8823 4.31492C32.256 4.68501 32.5449 5.1308 32.7488 5.65229C32.9696 6.17377 33.0801 6.7205 33.0801 7.29245V7.51955C33.0801 7.82235 33.0631 8.20085 33.0291 8.65505C33.0121 9.09243 32.9357 9.51299 32.7997 9.91672C32.6638 10.3205 32.4599 10.6737 32.1881 10.9765C31.9162 11.2625 31.534 11.4055 31.0412 11.4055C30.4466 11.4055 29.9963 11.2709 29.6905 11.0017C29.3847 10.7326 29.2318 10.2868 29.2318 9.66438C29.2318 9.42887 29.2403 9.19336 29.2573 8.95785C29.2743 8.72234 29.2827 8.48683 29.2827 8.25132C29.2827 7.89805 29.2233 7.6289 29.1043 7.44385C28.9854 7.24199 28.7391 7.14105 28.3653 7.14105C27.9405 7.14105 27.5582 7.27563 27.2184 7.54478C26.8786 7.81394 26.5813 8.16721 26.3264 8.60459C26.0716 9.04196 25.8507 9.53822 25.6638 10.0933C25.4769 10.6485 25.324 11.212 25.2051 11.784C25.0861 12.3391 25.0012 12.8774 24.9502 13.3989C24.8993 13.9204 24.8738 14.3662 24.8738 14.7363C24.8738 15.0391 24.8908 15.3923 24.9247 15.7961C24.9587 16.183 25.0267 16.5615 25.1286 16.9316C25.2476 17.2848 25.4175 17.5876 25.6383 17.84C25.8592 18.0923 26.148 18.2185 26.5048 18.2185C27.1165 18.2185 27.6092 18.0334 27.983 17.6633C28.3568 17.2764 28.6116 16.7886 28.7476 16.1998C28.5097 16.1662 28.2718 16.1157 28.034 16.0484C27.8131 15.9643 27.6007 15.8549 27.3968 15.7204C27.2099 15.569 27.057 15.3923 26.9381 15.1905C26.8192 14.9718 26.7597 14.7195 26.7597 14.4335C26.7597 13.912 26.9381 13.5083 27.2949 13.2223C27.6517 12.9195 28.0679 12.6924 28.5437 12.541C29.0364 12.3896 29.5376 12.2971 30.0473 12.2634C30.557 12.2129 30.9648 12.1877 31.2706 12.1877C31.4915 12.1877 31.8143 12.2045 32.2391 12.2382C32.6638 12.2718 33.0801 12.3475 33.4878 12.4653C33.9126 12.5662 34.2779 12.7176 34.5837 12.9195C34.8895 13.1213 35.0424 13.3821 35.0424 13.7017C35.0424 14.341 34.864 14.8961 34.5073 15.3671C34.1674 15.8213 33.6577 16.0905 32.9781 16.1746Z",fill:"#758650"}),m.exports.createElement("path",{d:"M12.1311 43.7103C12.1311 44.1309 11.9527 44.5262 11.5959 44.8963C11.2561 45.2664 10.8058 45.6028 10.2451 45.9056C9.70146 46.2084 9.0898 46.4776 8.41019 46.7131C7.73058 46.9318 7.05946 47.1168 6.39684 47.2682C5.73422 47.4365 5.10558 47.5626 4.51092 47.6467C3.93325 47.7308 3.47451 47.7729 3.13471 47.7729C2.81189 47.7729 2.46359 47.7393 2.08981 47.672C1.73301 47.6215 1.43568 47.4953 1.19782 47.2935C1.0619 47.1925 0.942964 46.9654 0.841023 46.6122C0.739081 46.2589 0.637137 45.8383 0.535196 45.3505C0.450244 44.8627 0.373788 44.3412 0.305827 43.786C0.237866 43.2141 0.178398 42.659 0.127427 42.1206C0.0934468 41.5823 0.0594706 41.0861 0.0254901 40.6319C0.00849982 40.1777 0 39.8244 0 39.5721C0 39.1515 0.00849982 38.6469 0.0254901 38.0581C0.0594706 37.4525 0.101943 36.8132 0.152914 36.1404C0.203884 35.4506 0.271844 34.7525 0.356796 34.046C0.441747 33.3395 0.535195 32.675 0.637137 32.0526C0.756069 31.4133 0.891989 30.8414 1.0449 30.3367C1.2148 29.832 1.39321 29.4367 1.5801 29.1507C1.90292 28.6965 2.31068 28.4694 2.8034 28.4694C3.1432 28.4694 3.43204 28.5872 3.6699 28.8227C3.90777 29.0414 4.09466 29.3358 4.23058 29.7059C4.38349 30.0591 4.49393 30.4629 4.56189 30.9171C4.64685 31.3544 4.70631 31.7918 4.74029 32.2292C4.77427 32.6666 4.79126 33.0703 4.79126 33.4404C4.79126 33.8105 4.79126 34.1049 4.79126 34.3236C4.79126 35.6357 4.75728 36.9394 4.68932 38.2347C4.63835 39.5132 4.61286 40.8085 4.61286 42.1206V43.1047C5.37743 42.8692 6.20995 42.6505 7.11044 42.4487C8.01092 42.23 8.86893 42.1206 9.68447 42.1206C9.9733 42.1206 10.2621 42.1375 10.551 42.1711C10.8568 42.2048 11.1201 42.2805 11.341 42.3982C11.5789 42.4991 11.7658 42.659 11.9017 42.8776C12.0546 43.0795 12.1311 43.3571 12.1311 43.7103Z",fill:"#758650"}),m.exports.createElement("path",{d:"M25.6383 43.458C25.6383 43.7945 25.6043 44.1982 25.5364 44.6692C25.4854 45.1402 25.375 45.5944 25.2051 46.0318C25.0352 46.4524 24.8058 46.814 24.517 47.1168C24.2281 47.4028 23.8459 47.5458 23.3701 47.5458C22.7415 47.5458 22.2658 47.3187 21.943 46.8645C21.6371 46.4103 21.4163 45.872 21.2803 45.2496C21.1444 44.6103 21.0595 43.9627 21.0255 43.3066C21.0085 42.6505 20.9915 42.1291 20.9745 41.7421C19.7512 41.944 18.5449 42.1206 17.3556 42.272C17.3216 42.659 17.2451 43.1384 17.1262 43.7103C17.0243 44.2823 16.8544 44.8374 16.6165 45.3757C16.3956 45.8972 16.0983 46.3514 15.7245 46.7383C15.3677 47.1253 14.926 47.3187 14.3993 47.3187C13.9915 47.3187 13.6687 47.1757 13.4308 46.8897C13.2099 46.5869 13.04 46.2337 12.9211 45.8299C12.8022 45.4262 12.7257 45.0141 12.6917 44.5935C12.6748 44.1561 12.6663 43.7945 12.6663 43.5085C12.6663 42.5496 12.7427 41.6076 12.8956 40.6823C13.0485 39.7403 13.2269 38.8067 13.4308 37.8815C13.5328 37.3936 13.6687 36.8217 13.8386 36.1656C14.0085 35.5095 14.2124 34.8366 14.4502 34.1469C14.7051 33.4404 14.9939 32.7507 15.3167 32.0778C15.6565 31.3881 16.0388 30.7741 16.4636 30.2358C16.8883 29.6975 17.3726 29.2601 17.9163 28.9236C18.4599 28.5872 19.0631 28.419 19.7257 28.419C20.3713 28.419 20.932 28.562 21.4078 28.8479C21.8835 29.1339 22.2997 29.5124 22.6565 29.9834C23.0133 30.4545 23.3107 30.9928 23.5485 31.5984C23.7864 32.1871 23.9818 32.7927 24.1347 33.4152C24.3046 34.0208 24.4405 34.618 24.5425 35.2067C24.6614 35.7955 24.7633 36.317 24.8483 36.7712C25.0692 37.8646 25.256 38.9749 25.409 40.102C25.5619 41.2122 25.6383 42.3309 25.6383 43.458ZM20.7196 37.3263C20.7196 37.1245 20.7027 36.7964 20.6687 36.3422C20.6517 35.8712 20.6007 35.4086 20.5158 34.9544C20.4308 34.4834 20.2949 34.0712 20.108 33.718C19.9381 33.3479 19.7002 33.1628 19.3944 33.1628C19.2245 33.1628 19.0631 33.2806 18.9102 33.5161C18.7573 33.7348 18.6213 34.0208 18.5024 34.374C18.3835 34.7105 18.273 35.089 18.1711 35.5095C18.0862 35.9301 18.0097 36.3338 17.9417 36.7207C17.8738 37.1076 17.8228 37.4609 17.7888 37.7805C17.7548 38.0833 17.7294 38.302 17.7124 38.4366C18.7318 38.3525 19.7342 38.2263 20.7196 38.0581V37.3263Z",fill:"#758650"}),m.exports.createElement("path",{d:"M39.1201 33.6675C39.1201 34.5759 38.9162 35.4675 38.5085 36.3422C38.1177 37.217 37.591 38.0076 36.9284 38.7141C36.2657 39.4039 35.5097 39.9758 34.6602 40.43C33.8107 40.8674 32.9357 41.1113 32.0352 41.1618C32.0182 41.4646 32.0012 41.8515 31.9842 42.3225C31.9842 42.7767 31.9587 43.2561 31.9077 43.7608C31.8568 44.2655 31.7803 44.7701 31.6784 45.2748C31.5934 45.7795 31.4575 46.2337 31.2706 46.6374C31.1007 47.0411 30.8713 47.3692 30.5825 47.6215C30.3107 47.8738 29.9709 48 29.5631 48C29.0874 48 28.7051 47.8402 28.4162 47.5206C28.1444 47.2178 27.932 46.8477 27.7791 46.4103C27.6432 45.9729 27.5497 45.5187 27.4988 45.0477C27.4478 44.5599 27.4138 44.1477 27.3968 43.8113C27.3628 43.3234 27.3374 42.844 27.3204 42.373C27.3204 41.902 27.3204 41.4225 27.3204 40.9347C27.3204 40.716 27.3204 40.3123 27.3204 39.7235C27.3204 39.1179 27.3204 38.4366 27.3204 37.6796C27.3374 36.9058 27.3543 36.1067 27.3713 35.2824C27.3883 34.4413 27.4138 33.6675 27.4478 32.961C27.4818 32.2376 27.5158 31.6236 27.5497 31.1189C27.6007 30.6143 27.6602 30.3199 27.7281 30.2358C27.7451 30.2189 27.7961 30.1853 27.8811 30.1348C27.966 30.0675 28.0595 30.0087 28.1614 29.9582C28.2633 29.8909 28.3568 29.832 28.4417 29.7816C28.5267 29.7311 28.5861 29.6975 28.6201 29.6806C29.4017 29.2433 30.2597 28.8648 31.1942 28.5451C32.1286 28.2255 33.0546 28.0657 33.9721 28.0657C34.7536 28.0657 35.4587 28.2255 36.0873 28.5451C36.733 28.8479 37.2767 29.2601 37.7184 29.7816C38.1772 30.2862 38.5255 30.8834 38.7633 31.5731C39.0012 32.246 39.1201 32.9441 39.1201 33.6675ZM34.7111 34.2479C34.7111 33.9114 34.6262 33.617 34.4563 33.3647C34.3034 33.1124 34.04 32.9862 33.6662 32.9862C33.3434 32.9862 33.0206 33.0535 32.6978 33.1881C32.375 33.3058 32.0777 33.432 31.8058 33.5666C31.8568 34.1553 31.8993 34.7273 31.9332 35.2824C31.9842 35.8376 31.9927 36.4095 31.9587 36.9983C32.2306 36.8637 32.5279 36.7123 32.8507 36.5441C33.1735 36.359 33.4708 36.1572 33.7427 35.9385C34.0145 35.7198 34.2439 35.4759 34.4308 35.2067C34.6177 34.9207 34.7111 34.6011 34.7111 34.2479Z",fill:"#758650"}),m.exports.createElement("path",{d:"M52.0922 43.458C52.0922 43.7945 52.0582 44.1982 51.9903 44.6692C51.9393 45.1402 51.8288 45.5944 51.6589 46.0318C51.489 46.4524 51.2597 46.814 50.9708 47.1168C50.682 47.4028 50.2997 47.5458 49.824 47.5458C49.1954 47.5458 48.7196 47.3187 48.3968 46.8645C48.091 46.4103 47.8701 45.872 47.7342 45.2496C47.5983 44.6103 47.5133 43.9627 47.4793 43.3066C47.4623 42.6505 47.4454 42.1291 47.4284 41.7421C46.2051 41.944 44.9988 42.1206 43.8094 42.272C43.7755 42.659 43.699 43.1384 43.5801 43.7103C43.4781 44.2823 43.3082 44.8374 43.0704 45.3757C42.8495 45.8972 42.5522 46.3514 42.1784 46.7383C41.8216 47.1253 41.3798 47.3187 40.8531 47.3187C40.4454 47.3187 40.1225 47.1757 39.8847 46.8897C39.6638 46.5869 39.4939 46.2337 39.375 45.8299C39.256 45.4262 39.1796 45.0141 39.1456 44.5935C39.1286 44.1561 39.1201 43.7945 39.1201 43.5085C39.1201 42.5496 39.1966 41.6076 39.3495 40.6823C39.5024 39.7403 39.6808 38.8067 39.8847 37.8815C39.9866 37.3936 40.1225 36.8217 40.2924 36.1656C40.4623 35.5095 40.6662 34.8366 40.9041 34.1469C41.159 33.4404 41.4478 32.7507 41.7706 32.0778C42.1104 31.3881 42.4927 30.7741 42.9174 30.2358C43.3422 29.6975 43.8264 29.2601 44.3701 28.9236C44.9138 28.5872 45.517 28.419 46.1796 28.419C46.8252 28.419 47.3859 28.562 47.8616 28.8479C48.3374 29.1339 48.7536 29.5124 49.1104 29.9834C49.4672 30.4545 49.7645 30.9928 50.0024 31.5984C50.2403 32.1871 50.4357 32.7927 50.5886 33.4152C50.7585 34.0208 50.8944 34.618 50.9963 35.2067C51.1153 35.7955 51.2172 36.317 51.3021 36.7712C51.523 37.8646 51.7099 38.9749 51.8628 40.102C52.0157 41.2122 52.0922 42.3309 52.0922 43.458ZM47.1735 37.3263C47.1735 37.1245 47.1565 36.7964 47.1225 36.3422C47.1056 35.8712 47.0546 35.4086 46.9696 34.9544C46.8847 34.4834 46.7488 34.0712 46.5619 33.718C46.392 33.3479 46.1541 33.1628 45.8483 33.1628C45.6784 33.1628 45.517 33.2806 45.364 33.5161C45.2111 33.7348 45.0752 34.0208 44.9563 34.374C44.8374 34.7105 44.7269 35.089 44.625 35.5095C44.54 35.9301 44.4636 36.3338 44.3956 36.7207C44.3276 37.1076 44.2767 37.4609 44.2427 37.7805C44.2087 38.0833 44.1832 38.302 44.1662 38.4366C45.1856 38.3525 46.1881 38.2263 47.1735 38.0581V37.3263Z",fill:"#758650"}),m.exports.createElement("path",{d:"M57.2817 1.09879C53.6383 0.62618 52.6744 8.18767 56.141 8.63861C59.5488 9.0825 60.8661 1.56431 57.2817 1.09879ZM50.2933 0.0267887C50.2393 0.0186128 50.1852 0.0138761 50.1289 0.00910539C46.4695 -0.298862 45.9141 7.30568 49.3961 7.6C52.7655 7.88527 53.6992 0.545837 50.2933 0.0267887ZM43.9644 4.48051C43.8573 4.46077 43.7489 4.44845 43.64 4.44365C39.9737 4.28077 39.7774 11.9105 43.2659 12.0668C46.5882 12.216 47.2082 5.07309 43.9644 4.48051ZM62.0768 7.66507C58.4675 6.98011 56.9746 14.4554 60.4088 15.1085C63.7844 15.7508 65.6277 8.33947 62.0768 7.66507ZM51.8882 10.383C48.1643 9.83004 50.3674 14.1158 43.4251 15.2017C38.0443 16.0433 40.2244 21.722 44.5718 22.4834C46.9579 22.9014 48.1354 21.1807 50.0887 21.5232C52.3066 21.9118 52.1923 23.6165 55.4388 24.1852C59.5841 24.9111 62.8887 20.138 58.4498 17.5662C52.7981 14.2918 55.956 11.1173 52.0712 10.4143C52.009 10.4032 51.9473 10.3918 51.8882 10.383Z",fill:"#758650"})),re=v.div`
  width: 100vw;
  max-width: 1440px;
  margin: 0 auto;
  font-size: ${({theme:e})=>e.fontSizes.bodyText};
  @media (min-width: 1440px) {
    padding: 0 84px;
  }
  @media (max-width: 1439px) {
    padding: ${({theme:e})=>e.paddings.containerTablet};
  }
  @media (max-width: 767px) {
    padding: ${({theme:e})=>e.paddings.containerMobile};
    font-size: ${({theme:e})=>e.fontSizes.mobileBodyText};
  }
`,ve=v.div`
  display: flex;
  flex-direction: ${({direction:e})=>e};
  align-items: ${({align:e})=>e};
  justify-content: ${({justify:e})=>e};
  gap: ${({gap:e})=>e};
  height: ${({fullheight:e,height:t})=>e?"calc(100vh - 96px)":t};
  width: ${({width:e})=>e||"auto"};
`,be=v.button`
  background-color: ${({theme:e})=>e.colors.yellow};
  padding: ${({theme:e})=>e.paddings.button};
  border-radius: 4px;
  font-size: ${({theme:e})=>e.fontSizes.buttonText};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  line-height: ${({theme:e})=>e.lineHeights.normal};
  transition: ${({theme:e})=>e.transitions.quick};
  &:hover {
    background-color: ${({theme:e})=>e.colors.midYellow};
  }
  &:focus {
    background-color: ${({theme:e})=>e.colors.yellow};
    border: 2px ${({theme:e})=>e.colors.midYellow};
  }
  &:active {
    background-color: ${({theme:e})=>e.colors.darkYellow};
  }
  &:disabled {
    background-color: ${({theme:e})=>e.colors.lightYellow};
  }

  @media (max-width: 1000px) {
    font-size: ${({theme:e})=>e.fontSizes.mobileButtonText};
  }
  @media (max-width: 767px) {
    padding: ${({theme:e})=>e.paddings.buttonTablet};
    padding: ${({theme:e})=>e.paddings.butonMobile};
  }
`,J9=v.header`
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.background};
  height: ${({theme:e})=>e.headerHeight};
`,e6=v(ve)`
  flex: 0.8;

  @media (max-width: 1279px) {
    flex-direction: column-reverse;
    align-items: start;
    justify-content: start;
    gap: 40px;
    z-index: 5;
    position: fixed;
    width: 100%;
    max-width: 380px;
    height: 384px;
    background-color: ${({theme:e})=>e.colors.background};
    right: ${({extendNavbar:e})=>e?"0":"-100%"};
    top: 98px;
    padding: 44px 40px 78px;
    overflow: auto;
    transition: all ease 0.3s;
    font-size: ${({theme:e})=>e.fontSizes.mobileBodyText};
  }

  @media (max-width: 767px) {
    align-items: center;
    max-width: 100%;
    height: 100vh;
    top: 90px;
    gap: 100px;
    font-size: ${({theme:e})=>e.fontSizes.bodyText};
  }
`,t6=v.nav`
  @media (max-width: 1279px) {
    width: 100%;
  }
`,n6=v(ve)`
  @media (max-width: 1279px) {
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 40px;
  }
`,r6=v.li`
  transition: ${({theme:e})=>e.transitions.quick};
  &:hover {
    color: ${({theme:e})=>e.colors.green};
  }

  @media (max-width: 1279px) {
    width: 100%;
    text-align: start;

    &::after {
      content: ' ';
      display: block;
      width: 100%;
      height: 1px;
      background-color: ${({theme:e})=>e.colors.lightGrey};
      top: 20px;
      left: 0;
    }
  }

  @media (max-width: 767px) {
    text-align: center;
  }
`,u6=v.form`
  padding: ${({theme:e})=>e.paddings.input};
  border: 1px solid ${({theme:e})=>e.colors.yellow};
  border-radius: 4px;
  width: 40%;
  max-width: 300px;

  @media (max-width: 1279px) {
    width: 100%;
  }

  input {
    padding: 0;
  }

  input:focus + button svg {
    transition: ${({theme:e})=>e.transitions.long};
    stroke: ${({theme:e})=>e.colors.green};
  }
`,i6=v(ve)`
  @media (max-width: 1279px) {
    width: 315px;
  }

  @media (max-width: 767px) {
    width: 240px;
    ${({extendNavbar:e})=>e&&"flex-direction: row-reverse;"}
  }
`,o6=v(be)`
  @media (max-width: 1279px) {
    padding: 10px 12.5px;
    font-size: ${({theme:e})=>e.fontSizes.mobileButtonText};
  }
  @media (max-width: 767px) {
    padding: 12.5px 23px;
    span {
      display: none;
    }
    &::after {
      content: 'Підтримати';
    }

    ${({extendNavbar:e})=>e&&"display: none;"};
  }
`,l6=v.button`
  display: none;

  @media (max-width: 1279px) {
    display: block;
    flex: 0 0 35px;
    height: 20px;
    position: relative;
    z-index: 3;

    span,
    &::before,
    &::after {
      content: '';
      right: 0;
      position: absolute;
      width: 100%;
      height: 4px;
      border-radius: 4px;
      background-color: ${({theme:e})=>e.colors.dark};
      transition: all 0.3s ease 0s;
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }

    span {
      top: calc(50% - 2px);
    }

    ${({isActive:e})=>e&&s0`
        span {
          width: 0;
        }
        &::before {
          top: calc(50% - 2px);
          transform: rotate(-45deg);
          border-radius: 0;
        }
        &::after {
          bottom: calc(50% - 2px);
          transform: rotate(45deg);
          border-radius: 0;
        }
      `}
  }
`;var br={exports:{}},Zr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a6=m.exports,s6=Symbol.for("react.element"),c6=Symbol.for("react.fragment"),d6=Object.prototype.hasOwnProperty,p6=a6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f6={key:!0,ref:!0,__self:!0,__source:!0};function ga(e,t,n){var r,u={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)d6.call(t,r)&&!f6.hasOwnProperty(r)&&(u[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)u[r]===void 0&&(u[r]=t[r]);return{$$typeof:s6,type:e,key:i,ref:o,props:u,_owner:p6.current}}Zr.Fragment=c6;Zr.jsx=ga;Zr.jsxs=ga;br.exports=Zr;const s=br.exports.jsx,S=br.exports.jsxs,Ca=br.exports.Fragment;function h6({key:e,title:t,to:n,testId:r,setExtendNavbar:u}){return s(r6,{children:s(Jn,{to:n,end:!0,"data-testid":r,onClick:()=>{u(i=>!i)},children:t})},e)}const m6=[{id:Math.random().toString(),title:"\u041F\u0440\u043E \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A",to:"about",testId:"about-link"},{id:Math.random().toString(),title:"\u041D\u0430\u0448\u0456 \u0445\u0432\u043E\u0441\u0442\u0438",to:"dogs",testId:"dogs-link"},{id:Math.random().toString(),title:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",to:"contacts",testId:"contacts-link"}],g6=({setExtendNavbar:e})=>s(t6,{children:s("ul",{children:s(n6,{gap:"20px",children:m6.map(t=>s(h6,{title:t.title,to:t.to,testId:t.testId,setExtendNavbar:e},t.id))})})});function C6({type:e,placeholder:t,className:n}){return s("input",{type:e||"text",placeholder:t||"",className:n})}const Qr=v(C6)`
  width: ${({width:e})=>e||"80%"};
  padding: ${({theme:e})=>e.paddings.input};
  background-color: ${({theme:e})=>e.colors.background};
  caret-color: ${({theme:e})=>e.colors.yellow};
  color: ${({theme:e})=>e.colors.dark};
  ${({withSvg:e})=>!e&&s0`
      padding: ${({theme:t})=>t.paddings.input};
      border: 1px solid ${({theme:t})=>t.colors.yellow};
      border-radius: 4px;
      &:focus {
        border: 2px solid ${({theme:t})=>t.colors.yellow};
      }
    `}
`,v6=e=>m.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"#ACABAB",xmlns:"http://www.w3.org/2000/svg",...e},m.exports.createElement("path",{d:"M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),m.exports.createElement("path",{d:"M21.0004 21.0004L16.6504 16.6504",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));function x6(){return s(u6,{children:S(ve,{justify:"space-between",align:"center",children:[s(Qr,{type:"text",placeholder:"\u041F\u043E\u0448\u0443\u043A \u0441\u043E\u0431\u0430\u043A\u0438",withSvg:!0}),s("button",{children:s(v6,{})})]})})}function y6({className:e,extendNavbar:t,setExtendNavbar:n}){return S(e6,{align:"center",justify:"space-between",gap:"10px",className:e,extendNavbar:t,children:[s(g6,{setExtendNavbar:n}),s(x6,{})]})}function w6({className:e,children:t,extendNavbar:n}){return s(i6,{justify:"space-between",align:"center",className:e,extendNavbar:n,children:t})}function E6({className:e,onClick:t,isActive:n}){return s(l6,{className:e,onClick:t,isActive:n,children:s("span",{})})}const S6=()=>{const[e,t]=m.exports.useState(!1);return s(J9,{children:s(re,{children:S(ve,{justify:"space-between",align:"center",gap:"20px",children:[s(Jn,{to:".",end:!0,"data-testid":"home-link",children:s(q9,{})}),s(y6,{extendNavbar:e,setExtendNavbar:t}),S(w6,{extendNavbar:e,children:[s(o6,{extendNavbar:e,children:s("span",{children:"\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A"})}),s(E6,{isActive:e,onClick:()=>{t(n=>!n)}})]})]})})})},va=Y9`
*,
*::before,
*::after {
	padding: 0;
	margin: 0;
	border: 0;
  outline: 0;
  box-sizing: border-box;
  font-size: 100%;
  font-weight: inherit;
  font-style: inherit;
  font-family: ${({theme:e})=>e.fonts.openSans};
  vertical-align: baseline;
  box-sizing: border-box;
  position: relative;
}
:focus { outline: 0;
 }
a {
	text-decoration: none;
	color: inherit;
}
ul,
ol,
li {
	list-style: none;
}
img {
	vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: inherit;
	font-size: inherit;
}
html,
body {
	height: 100%;
	line-height: 1.4;
  color: ${({theme:e})=>e.colors.dark};
  background-color: ${({theme:e})=>e.colors.background};
  overflow-x: hidden;
}
button,
input {
	font-weight: inherit;
	font-size: inherit;
    line-height: inherit;
	color: inherit;font-family: inherit;
}
button {
	cursor: pointer;
	background-color: inherit;
}
table { border-collapse: separate;
 border-spacing: 0;
 } caption, th, td {
  text-align: left;
  font-weight: normal;
 } blockquote:before, blockquote:after, q:before, q:after { content: "";
 } blockquote, q { quotes: "" "";
 }
`,k6=e=>m.exports.createElement("svg",{width:26,height:44,viewBox:"0 0 26 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.exports.createElement("path",{d:"M24 2H18C15.3478 2 12.8043 3.05357 10.9289 4.92893C9.05357 6.8043 8 9.34784 8 12V18H2V26H8V42H16V26H22L24 18H16V12C16 11.4696 16.2107 10.9609 16.5858 10.5858C16.9609 10.2107 17.4696 10 18 10H24V2Z",stroke:"#F9F9F9",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})),F6=e=>m.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.exports.createElement("path",{d:"M11.6 0H28.4C34.8 0 40 5.2 40 11.6V28.4C40 31.4765 38.7779 34.427 36.6024 36.6024C34.427 38.7779 31.4765 40 28.4 40H11.6C5.2 40 0 34.8 0 28.4V11.6C0 8.52349 1.22214 5.57298 3.39756 3.39756C5.57298 1.22214 8.52349 0 11.6 0ZM11.2 4C9.29044 4 7.45909 4.75857 6.10883 6.10883C4.75857 7.45909 4 9.29044 4 11.2V28.8C4 32.78 7.22 36 11.2 36H28.8C30.7096 36 32.5409 35.2414 33.8912 33.8912C35.2414 32.5409 36 30.7096 36 28.8V11.2C36 7.22 32.78 4 28.8 4H11.2ZM30.5 7C31.163 7 31.7989 7.26339 32.2678 7.73223C32.7366 8.20107 33 8.83696 33 9.5C33 10.163 32.7366 10.7989 32.2678 11.2678C31.7989 11.7366 31.163 12 30.5 12C29.837 12 29.2011 11.7366 28.7322 11.2678C28.2634 10.7989 28 10.163 28 9.5C28 8.83696 28.2634 8.20107 28.7322 7.73223C29.2011 7.26339 29.837 7 30.5 7ZM20 10C22.6522 10 25.1957 11.0536 27.0711 12.9289C28.9464 14.8043 30 17.3478 30 20C30 22.6522 28.9464 25.1957 27.0711 27.0711C25.1957 28.9464 22.6522 30 20 30C17.3478 30 14.8043 28.9464 12.9289 27.0711C11.0536 25.1957 10 22.6522 10 20C10 17.3478 11.0536 14.8043 12.9289 12.9289C14.8043 11.0536 17.3478 10 20 10ZM20 14C18.4087 14 16.8826 14.6321 15.7574 15.7574C14.6321 16.8826 14 18.4087 14 20C14 21.5913 14.6321 23.1174 15.7574 24.2426C16.8826 25.3679 18.4087 26 20 26C21.5913 26 23.1174 25.3679 24.2426 24.2426C25.3679 23.1174 26 21.5913 26 20C26 18.4087 25.3679 16.8826 24.2426 15.7574C23.1174 14.6321 21.5913 14 20 14Z",fill:"#F9F9F9"})),D6=v.footer`
  background-color: ${({theme:e})=>e.colors.green};
  @media screen and (max-width: 1279px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media screen and (min-width: 1279px) and (max-width: 1438px) {
    padding-top: 60px;
    padding-bottom: 40px;
  }
  @media (min-width: 1438px) {
    padding-top: 40px;
    padding-bottom: 60px;
  }
`,L6=v.div`
  padding-bottom: 55px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 55px;
  }
  @media screen and (min-width: 767px) and (max-width: 1279px) {
    padding: 0 0 83px 0;
  }
  @media screen and (min-width: 1279px) and (max-width: 1440px) {
    padding: 0 0 83px 0;
  }
`,A6=v.ul`
  /* @media (max-width: 767px) {
    margin-top: 18%;
    margin-bottom: 18%;
  } */
`,wn=v.li`
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  color: ${({theme:e})=>e.colors.background};
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: ${({theme:e})=>e.fontSizes.subheadline};
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: ${({theme:e})=>e.fontSizes.bodyText};
  }
`,B1=v.a`
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
`,P6=v.ul`
  /* @media (max-width: 767px) {
    margin-bottom: 18%;
  } */
`,x4=v.li`
  display: flex;
  gap: 12px;
  font-size: ${({theme:e})=>e.fontSizes.bodyText};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  color: ${({theme:e})=>e.colors.background};
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    font-size: ${({theme:e})=>e.fontSizes.subheadline};
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
`,z1=v.p`
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  color: ${({theme:e})=>e.colors.background};
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: ${({theme:e})=>e.fontSizes.subheadline};
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: ${({theme:e})=>e.fontSizes.bodyText};
  }
`,B6=v.ul`
  display: flex;
  gap: 24px;
`,go=v.a`
  &:hover svg {
    transition: ${({theme:e})=>e.transitions.long};
    stroke: ${({theme:e})=>e.colors.yellow};
  }
`,z6=v(k6)`
  &:hover path {
    stroke: ${({theme:e})=>e.colors.yellow};
  }
`,$6=v(F6)`
  &:hover path {
    fill: ${({theme:e})=>e.colors.yellow};
  }
`,T6=v.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.background};
  padding-bottom: 40px;
  @media (max-width: 767px) {
    font-size: 12px;
    padding-bottom: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-bottom: 0;
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    padding-bottom: 0;
  }
  @media (min-width: 1440px) {
    padding-bottom: 0;
  }
`,N6=e=>m.exports.createElement("svg",{width:140,height:105,viewBox:"0 0 140 105",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.exports.createElement("path",{d:"M24.5855 16.0074C24.5855 18.5465 23.9536 20.8649 22.69 22.9624C21.4263 25.0231 19.7353 26.7526 17.6168 28.151C18.7318 28.3718 19.6981 28.7581 20.5158 29.3101C21.3334 29.8253 22.0024 30.4693 22.5227 31.242C23.0802 32.0148 23.4891 32.898 23.7492 33.8915C24.0466 34.8483 24.1952 35.8603 24.1952 36.9274C24.1952 39.0249 23.6935 40.8649 22.69 42.4472C21.7237 43.9927 20.46 45.2807 18.899 46.311C17.338 47.3046 15.5912 48.059 13.6586 48.5742C11.7631 49.0525 9.86764 49.2917 7.97216 49.2917C6.9315 49.2917 5.89085 49.2181 4.85019 49.0709C3.80954 48.9237 2.82463 48.6661 1.89548 48.2982C1.56098 48.1878 1.28223 47.7462 1.05924 46.9734C0.83624 46.1638 0.650409 45.1887 0.501744 44.0479C0.390246 42.9072 0.29733 41.6744 0.222997 40.3497C0.148665 39.0249 0.0929156 37.7554 0.0557493 36.541C0.0185831 35.3267 0 34.2595 0 33.3396C0 32.4196 0 31.7756 0 31.4076C0 30.1197 0 28.8317 0 27.5438C0 26.219 0.0371662 24.9127 0.111499 23.6247C0.111499 23.2935 0.111499 22.7784 0.111499 22.0792C0.148665 21.38 0.167248 20.6073 0.167248 19.7609C0.204414 18.8777 0.24158 17.9578 0.278747 17.001C0.353079 16.0442 0.427412 15.1611 0.501744 14.3515C0.613243 13.5051 0.743324 12.7876 0.891989 12.1988C1.07782 11.61 1.28224 11.242 1.50523 11.0948C2.36006 10.5429 3.3078 10.0277 4.34845 9.54929C5.3891 9.03411 6.46693 8.59254 7.58191 8.22455C8.6969 7.85656 9.81189 7.56217 10.9269 7.34138C12.0419 7.12059 13.1011 7.0102 14.1046 7.0102C15.4797 7.0102 16.7991 7.21258 18.0628 7.61736C19.3636 7.98535 20.4786 8.55574 21.4078 9.32851C22.3741 10.1013 23.136 11.058 23.6935 12.1988C24.2881 13.3028 24.5855 14.5723 24.5855 16.0074ZM15.3311 18.9329C15.3311 18.3073 15.1267 17.8474 14.7178 17.553C14.3462 17.2586 13.8444 17.1114 13.2126 17.1114C12.6923 17.1114 12.1348 17.2218 11.5401 17.4426C10.9826 17.6634 10.4995 17.9578 10.0906 18.3257C9.97913 18.4361 9.86764 18.7489 9.75614 19.2641C9.68181 19.7793 9.60747 20.3681 9.53314 21.0304C9.49598 21.656 9.45881 22.2632 9.42164 22.852C9.42164 23.4039 9.42164 23.7719 9.42164 23.9559C9.42164 24.0295 9.42164 24.1583 9.42164 24.3423C9.42164 24.4895 9.42164 24.6551 9.42164 24.8391C9.45881 25.0231 9.49598 25.1887 9.53314 25.3359C9.57031 25.4831 9.62605 25.5567 9.70039 25.5567C10.3322 25.5567 10.9826 25.3359 11.6516 24.8943C12.3206 24.4159 12.9153 23.8455 13.4356 23.1832C13.9931 22.484 14.4391 21.748 14.7736 20.9752C15.1452 20.2025 15.3311 19.5217 15.3311 18.9329ZM15.1081 34.8851C15.1081 34.2595 14.8851 33.8179 14.4391 33.5603C13.9931 33.3027 13.4913 33.174 12.9339 33.174C12.4135 33.174 11.856 33.3027 11.2614 33.5603C10.7039 33.7811 10.2393 34.0571 9.86763 34.3883C9.75614 34.4619 9.66322 34.6459 9.58889 34.9403C9.55172 35.2347 9.51456 35.5659 9.47739 35.9339C9.47739 36.265 9.45881 36.5962 9.42164 36.9274C9.42164 37.2218 9.42164 37.4242 9.42164 37.5346C9.42164 37.6082 9.42164 37.7554 9.42164 37.9762C9.42164 38.197 9.42164 38.4362 9.42164 38.6937C9.45881 38.9145 9.49598 39.1353 9.53314 39.3561C9.60747 39.5401 9.68181 39.6321 9.75614 39.6321C10.2765 39.6321 10.8525 39.4849 11.4844 39.1905C12.1162 38.8961 12.6923 38.5281 13.2126 38.0866C13.7701 37.645 14.2161 37.1482 14.5506 36.5962C14.9222 36.0074 15.1081 35.4371 15.1081 34.8851Z",fill:"#F9F9F9"}),m.exports.createElement("path",{d:"M46.3835 11.15C46.3835 11.8492 46.2162 12.4748 45.8817 13.0268C45.5844 13.5787 45.1756 14.0571 44.6552 14.4619C44.1349 14.8299 43.5588 15.1427 42.927 15.4003C42.2952 15.6578 41.6819 15.8418 41.0873 15.9522C41.0129 20.1105 40.8457 24.1215 40.5855 27.9854C40.3625 31.8492 39.9909 35.8418 39.4705 39.9633H39.805C40.3997 39.9633 40.9758 40.0369 41.5333 40.1841C42.1279 40.2945 42.6483 40.5153 43.0943 40.8465C43.5774 41.1408 43.9491 41.5272 44.2092 42.0056C44.5066 42.4472 44.6552 42.9992 44.6552 43.6615C44.6552 44.5079 44.3765 45.2439 43.819 45.8695C43.2987 46.495 42.5925 47.0286 41.7005 47.4702C40.8457 47.9118 39.8794 48.2798 38.8015 48.5742C37.7237 48.8685 36.6459 49.0893 35.5681 49.2365C34.4903 49.4205 33.4682 49.5493 32.5019 49.6229C31.5355 49.6965 30.7551 49.7333 30.1604 49.7333C29.7144 49.7333 29.1569 49.7149 28.4879 49.6781C27.8561 49.6413 27.2428 49.5309 26.6482 49.3469C26.0907 49.1629 25.6075 48.8869 25.1987 48.519C24.7899 48.151 24.5855 47.6542 24.5855 47.0286C24.5855 46.2559 24.7527 45.5751 25.0872 44.9863C25.3845 44.3607 25.7934 43.8087 26.3137 43.3304C26.834 42.852 27.4101 42.4656 28.0419 42.1712C28.7109 41.8768 29.3799 41.656 30.0489 41.5088C30.3091 39.4849 30.5506 37.4794 30.7736 35.4923C30.9966 33.4683 31.1453 31.426 31.2196 29.3653C31.294 27.2678 31.3683 25.2071 31.4426 23.1832C31.517 21.1224 31.5913 19.0617 31.6656 17.001C31.4055 17.0378 31.1639 17.0746 30.9409 17.1114C30.7179 17.1114 30.5135 17.1114 30.3276 17.1114C29.8073 17.1114 29.2498 17.0562 28.6552 16.9458C28.0605 16.8354 27.503 16.6514 26.9827 16.3938C26.4624 16.0994 26.0164 15.7498 25.6447 15.3451C25.3102 14.9403 25.143 14.4251 25.143 13.7995C25.143 12.5484 25.6633 11.518 26.7039 10.7084C27.7818 9.89888 29.0454 9.27331 30.4949 8.83172C31.9815 8.39014 33.4868 8.09576 35.0106 7.94856C36.5344 7.76457 37.7609 7.67256 38.69 7.67256C39.2104 7.67256 39.898 7.70937 40.7528 7.78297C41.6076 7.85657 42.4438 8.02215 43.2615 8.27974C44.1163 8.53733 44.8411 8.88692 45.4357 9.32851C46.0676 9.77009 46.3835 10.3773 46.3835 11.15Z",fill:"#F9F9F9"}),m.exports.createElement("path",{d:"M72.1397 35.3819C71.8052 37.0378 71.2663 38.7673 70.5229 40.5705C69.8168 42.3368 68.8876 43.9559 67.7355 45.4279C66.6205 46.8998 65.2825 48.0958 63.7215 49.0157C62.1605 49.9725 60.3766 50.4509 58.3696 50.4509C56.8829 50.4509 55.5449 50.1565 54.3556 49.5677C53.1663 48.9789 52.0885 48.1878 51.1222 47.1942C50.1558 46.2006 49.3196 45.0599 48.6134 43.7719C47.9073 42.484 47.3126 41.1592 46.8295 39.7977C46.3835 38.3994 46.049 37.0194 45.826 35.6579C45.603 34.2963 45.4915 33.0268 45.4915 31.8492C45.4915 30.1933 45.6401 28.427 45.9375 26.5502C46.272 24.6367 46.7551 22.76 47.387 20.9201C48.0188 19.0433 48.8178 17.2586 49.7842 15.5659C50.7505 13.8363 51.8841 12.3276 53.1849 11.0396C54.5229 9.71489 56.0095 8.66613 57.6448 7.89336C59.3173 7.08379 61.1756 6.679 63.2198 6.679C64.5206 6.679 65.7285 6.93659 66.8435 7.45177C67.9585 7.93015 68.9248 8.59253 69.7424 9.4389C70.5601 10.2485 71.1919 11.2236 71.6379 12.3644C72.1211 13.5051 72.3627 14.7011 72.3627 15.9522V16.449C72.3627 17.1114 72.3255 17.9394 72.2512 18.9329C72.214 19.8897 72.0467 20.8097 71.7494 21.6928C71.4521 22.576 71.0061 23.3487 70.4114 24.0111C69.8168 24.6367 68.9805 24.9495 67.9027 24.9495C66.6019 24.9495 65.617 24.6551 64.948 24.0663C64.279 23.4775 63.9445 22.5024 63.9445 21.1408C63.9445 20.6257 63.9631 20.1105 64.0003 19.5953C64.0374 19.0801 64.056 18.5649 64.056 18.0498C64.056 17.277 63.9259 16.6882 63.6658 16.2834C63.4056 15.8418 62.8667 15.6211 62.049 15.6211C61.1199 15.6211 60.2836 15.9154 59.5403 16.5042C58.797 17.093 58.1466 17.8658 57.5891 18.8225C57.0316 19.7793 56.5484 20.8648 56.1396 22.0792C55.7308 23.2936 55.3963 24.5263 55.1361 25.7775C54.8759 26.9918 54.6901 28.1694 54.5786 29.3101C54.4671 30.4509 54.4114 31.426 54.4114 32.2356C54.4114 32.898 54.4485 33.6707 54.5229 34.5539C54.5972 35.4003 54.7459 36.2282 54.9689 37.0378C55.229 37.8106 55.6007 38.4729 56.0839 39.0249C56.567 39.5769 57.1988 39.8529 57.9793 39.8529C59.3173 39.8529 60.3951 39.4481 61.2128 38.6385C62.0305 37.7922 62.5879 36.725 62.8853 35.4371C62.3649 35.3635 61.8446 35.2531 61.3243 35.1059C60.8411 34.9219 60.3766 34.6827 59.9306 34.3883C59.5217 34.0571 59.1872 33.6707 58.9271 33.2292C58.6669 32.7508 58.5368 32.1988 58.5368 31.5732C58.5368 30.4325 58.9271 29.5493 59.7076 28.9237C60.4881 28.2614 61.3986 27.7646 62.4393 27.4334C63.5171 27.1022 64.6135 26.8998 65.7285 26.8262C66.8435 26.7158 67.7355 26.6606 68.4045 26.6606C68.8876 26.6606 69.5938 26.6974 70.5229 26.771C71.4521 26.8446 72.3627 27.0102 73.2547 27.2678C74.1838 27.4886 74.9829 27.8198 75.6519 28.2614C76.3209 28.7029 76.6554 29.2733 76.6554 29.9725C76.6554 31.3708 76.2651 32.5852 75.4846 33.6155C74.7413 34.6091 73.6263 35.1979 72.1397 35.3819Z",fill:"#F9F9F9"}),m.exports.createElement("path",{d:"M26.5367 95.6164C26.5367 96.5363 26.1465 97.4011 25.366 98.2107C24.6226 99.0202 23.6377 99.7562 22.4113 100.419C21.2219 101.081 19.8839 101.67 18.3973 102.185C16.9106 102.663 15.4426 103.068 13.9931 103.399C12.5436 103.767 11.1685 104.043 9.86763 104.227C8.60398 104.411 7.6005 104.503 6.85717 104.503C6.15101 104.503 5.38911 104.43 4.57145 104.282C3.79096 104.172 3.14056 103.896 2.62023 103.454C2.3229 103.234 2.06273 102.737 1.83974 101.964C1.61674 101.191 1.39374 100.271 1.17074 99.2042C0.984909 98.1371 0.817662 96.9963 0.668997 95.782C0.520332 94.5308 0.390246 93.3165 0.278747 92.1389C0.204415 90.9614 0.130092 89.8758 0.0557596 88.8822C0.0185934 87.8887 0 87.1159 0 86.5639C0 85.644 0.0185934 84.54 0.0557596 83.2521C0.130092 81.9273 0.223 80.529 0.334499 79.057C0.445997 77.5483 0.59466 76.0211 0.780491 74.4756C0.966322 72.9301 1.17074 71.4765 1.39374 70.115C1.6539 68.7166 1.95123 67.4655 2.28572 66.3615C2.65738 65.2576 3.04764 64.3928 3.45647 63.7672C4.16263 62.7737 5.05461 62.2769 6.13243 62.2769C6.87576 62.2769 7.50759 62.5345 8.02791 63.0497C8.54824 63.528 8.95707 64.172 9.2544 64.9816C9.58889 65.7544 9.83048 66.6375 9.97915 67.6311C10.165 68.5878 10.2951 69.5446 10.3694 70.5014C10.4437 71.4581 10.4809 72.3413 10.4809 73.1509C10.4809 73.9604 10.4809 74.6044 10.4809 75.0828C10.4809 77.9531 10.4065 80.805 10.2579 83.6385C10.1464 86.4352 10.0906 89.2686 10.0906 92.1389V94.2916C11.7631 93.7765 13.5843 93.2981 15.5541 92.8565C17.5239 92.3781 19.4008 92.1389 21.1848 92.1389C21.8166 92.1389 22.4484 92.1757 23.0802 92.2493C23.7492 92.3229 24.3253 92.4885 24.8085 92.7461C25.3288 92.9669 25.7376 93.3165 26.035 93.7948C26.3695 94.2364 26.5367 94.8436 26.5367 95.6164Z",fill:"#F9F9F9"}),m.exports.createElement("path",{d:"M56.0839 95.0644C56.0839 95.8004 56.0095 96.6835 55.8609 97.7139C55.7494 98.7442 55.5078 99.7378 55.1361 100.695C54.7645 101.615 54.2627 102.406 53.6309 103.068C52.9991 103.694 52.1628 104.006 51.1222 104.006C49.747 104.006 48.7064 103.51 48.0002 102.516C47.3312 101.523 46.8481 100.345 46.5507 98.9834C46.2534 97.5851 46.0676 96.1683 45.9932 94.7332C45.9561 93.2981 45.9189 92.1573 45.8817 91.3109C43.2058 91.7525 40.567 92.1389 37.9653 92.4701C37.891 93.3165 37.7237 94.3652 37.4636 95.6164C37.2406 96.8675 36.8689 98.0819 36.3486 99.2594C35.8654 100.4 35.215 101.394 34.3974 102.24C33.6169 103.086 32.6505 103.51 31.4984 103.51C30.6064 103.51 29.9002 103.197 29.3799 102.571C28.8968 101.909 28.5251 101.136 28.2649 100.253C28.0048 99.3698 27.8375 98.4683 27.7632 97.5483C27.726 96.5915 27.7074 95.8004 27.7074 95.1748C27.7074 93.0773 27.8747 91.0166 28.2092 88.9926C28.5437 86.9319 28.9339 84.8896 29.3799 82.8657C29.6029 81.7985 29.9002 80.5474 30.2719 79.1122C30.6436 77.6771 31.0896 76.2051 31.6099 74.6964C32.1674 73.1509 32.7992 71.6421 33.5054 70.1702C34.2487 68.6614 35.0849 67.3183 36.0141 66.1407C36.9432 64.9632 38.0025 64.0064 39.1918 63.2705C40.3811 62.5345 41.7005 62.1665 43.15 62.1665C44.5623 62.1665 45.7888 62.4793 46.8295 63.1049C47.8701 63.7304 48.7807 64.5584 49.5612 65.5888C50.3417 66.6191 50.9921 67.7967 51.5124 69.1214C52.0328 70.4094 52.4601 71.7341 52.7946 73.0957C53.1663 74.4204 53.4636 75.7268 53.6866 77.0147C53.9468 78.3027 54.1698 79.4434 54.3556 80.437C54.8388 82.8289 55.2476 85.2576 55.5821 87.7231C55.9166 90.1518 56.0839 92.5989 56.0839 95.0644ZM45.3242 81.6513C45.3242 81.2097 45.2871 80.4922 45.2127 79.4986C45.1756 78.4682 45.0641 77.4563 44.8782 76.4627C44.6924 75.4324 44.3951 74.5308 43.9862 73.758C43.6146 72.9485 43.0943 72.5437 42.4253 72.5437C42.0536 72.5437 41.7005 72.8013 41.366 73.3165C41.0315 73.7948 40.7342 74.4204 40.474 75.1932C40.2139 75.9291 39.9723 76.7571 39.7493 77.6771C39.5635 78.597 39.3962 79.4802 39.2476 80.3266C39.0989 81.173 38.9874 81.9457 38.9131 82.6449C38.8387 83.3073 38.783 83.7856 38.7458 84.08C40.9758 83.896 43.1686 83.62 45.3242 83.2521V81.6513Z",fill:"#F9F9F9"}),m.exports.createElement("path",{d:"M85.5753 73.6476C85.5753 75.6348 85.1293 77.5851 84.2373 79.4986C83.3824 81.4121 82.2303 83.1417 80.7808 84.6872C79.3313 86.1959 77.6774 87.4471 75.8191 88.4406C73.9608 89.3974 72.0467 89.931 70.0769 90.0414C70.0398 90.7038 70.0026 91.5501 69.9655 92.5805C69.9655 93.5741 69.9097 94.6228 69.7982 95.7268C69.6867 96.8307 69.5194 97.9347 69.2965 99.0386C69.1106 100.143 68.8133 101.136 68.4045 102.019C68.0328 102.902 67.531 103.62 66.8992 104.172C66.3046 104.724 65.5612 105 64.6693 105C63.6286 105 62.7924 104.65 62.1605 103.951C61.5659 103.289 61.1013 102.479 60.7668 101.523C60.4695 100.566 60.265 99.5722 60.1535 98.5419C60.0421 97.4747 59.9677 96.5731 59.9306 95.8371C59.8562 94.77 59.8005 93.7212 59.7633 92.6909C59.7633 91.6605 59.7633 90.6118 59.7633 89.5446C59.7633 89.0662 59.7633 88.1831 59.7633 86.8951C59.7633 85.5704 59.7633 84.08 59.7633 82.4241C59.8005 80.7314 59.8376 78.9834 59.8748 77.1803C59.912 75.3404 59.9677 73.6476 60.0421 72.1021C60.1164 70.5198 60.1907 69.1766 60.2651 68.0727C60.3766 66.9687 60.5066 66.3247 60.6553 66.1407C60.6925 66.1039 60.804 66.0303 60.9898 65.92C61.1756 65.7728 61.3801 65.644 61.6031 65.5336C61.826 65.3864 62.0304 65.2576 62.2163 65.1472C62.4021 65.0368 62.5322 64.9632 62.6065 64.9264C64.3162 63.9696 66.1931 63.1417 68.2372 62.4425C70.2814 61.7433 72.3069 61.3937 74.3139 61.3937C76.0235 61.3937 77.5659 61.7433 78.9411 62.4425C80.3534 63.1049 81.5427 64.0064 82.509 65.1472C83.5125 66.2511 84.2744 67.5575 84.7948 69.0662C85.3151 70.5382 85.5753 72.0653 85.5753 73.6476ZM75.9306 74.9172C75.9306 74.1812 75.7448 73.5372 75.3731 72.9853C75.0386 72.4333 74.4625 72.1573 73.6449 72.1573C72.9387 72.1573 72.2326 72.3045 71.5264 72.5989C70.8203 72.8565 70.1699 73.1325 69.5752 73.4269C69.6867 74.7148 69.7796 75.966 69.854 77.1803C69.9654 78.3947 69.984 79.6458 69.9097 80.9337C70.5044 80.6394 71.1548 80.3082 71.8609 79.9402C72.5671 79.5354 73.2175 79.0938 73.8121 78.6154C74.4068 78.1371 74.9086 77.6035 75.3174 77.0147C75.7262 76.3891 75.9306 75.69 75.9306 74.9172Z",fill:"#F9F9F9"}),m.exports.createElement("path",{d:"M113.952 95.0644C113.952 95.8004 113.877 96.6835 113.729 97.7139C113.617 98.7442 113.376 99.7378 113.004 100.695C112.632 101.615 112.131 102.406 111.499 103.068C110.867 103.694 110.031 104.006 108.99 104.006C107.615 104.006 106.574 103.51 105.868 102.516C105.199 101.523 104.716 100.345 104.419 98.9834C104.121 97.5851 103.935 96.1683 103.861 94.7332C103.824 93.2981 103.787 92.1573 103.75 91.3109C101.074 91.7525 98.4348 92.1389 95.8331 92.4701C95.7588 93.3165 95.5916 94.3652 95.3314 95.6164C95.1084 96.8675 94.7367 98.0819 94.2164 99.2594C93.7332 100.4 93.0828 101.394 92.2652 102.24C91.4847 103.086 90.5184 103.51 89.3662 103.51C88.4742 103.51 87.7681 103.197 87.2477 102.571C86.7646 101.909 86.3929 101.136 86.1328 100.253C85.8726 99.3698 85.7053 98.4683 85.631 97.5483C85.5938 96.5915 85.5753 95.8004 85.5753 95.1748C85.5753 93.0773 85.7425 91.0166 86.077 88.9926C86.4115 86.9319 86.8017 84.8896 87.2477 82.8657C87.4707 81.7985 87.7681 80.5474 88.1397 79.1122C88.5114 77.6771 88.9574 76.2051 89.4777 74.6964C90.0352 73.1509 90.667 71.6421 91.3732 70.1702C92.1165 68.6614 92.9527 67.3183 93.8819 66.1407C94.8111 64.9632 95.8703 64.0064 97.0596 63.2705C98.2489 62.5345 99.5684 62.1665 101.018 62.1665C102.43 62.1665 103.657 62.4793 104.697 63.1049C105.738 63.7304 106.649 64.5584 107.429 65.5888C108.21 66.6191 108.86 67.7967 109.38 69.1214C109.901 70.4094 110.328 71.7341 110.662 73.0957C111.034 74.4204 111.331 75.7268 111.554 77.0147C111.815 78.3027 112.038 79.4434 112.223 80.437C112.707 82.8289 113.115 85.2576 113.45 87.7231C113.784 90.1518 113.952 92.5989 113.952 95.0644ZM103.192 81.6513C103.192 81.2097 103.155 80.4922 103.081 79.4986C103.043 78.4682 102.932 77.4563 102.746 76.4627C102.56 75.4324 102.263 74.5308 101.854 73.758C101.482 72.9485 100.962 72.5437 100.293 72.5437C99.9214 72.5437 99.5684 72.8013 99.2339 73.3165C98.8994 73.7948 98.602 74.4204 98.3419 75.1932C98.0817 75.9291 97.8401 76.7571 97.6172 77.6771C97.4313 78.597 97.264 79.4802 97.1154 80.3266C96.9667 81.173 96.8552 81.9457 96.7809 82.6449C96.7065 83.3073 96.6508 83.7856 96.6136 84.08C98.8436 83.896 101.036 83.62 103.192 83.2521V81.6513Z",fill:"#F9F9F9"}),m.exports.createElement("path",{d:"M125.304 2.40361C117.334 1.36977 115.225 17.9105 122.808 18.897C130.263 19.868 133.145 3.42192 125.304 2.40361ZM110.017 0.0586003C109.898 0.0407156 109.78 0.0303541 109.657 0.019918C101.652 -0.65376 100.437 15.9812 108.054 16.625C115.425 17.249 117.467 1.19402 110.017 0.0586003ZM96.1722 9.80112C95.9378 9.75794 95.7007 9.73099 95.4625 9.72047C87.4425 9.36419 87.013 26.0542 94.6442 26.3961C101.912 26.7224 103.268 11.0974 96.1722 9.80112ZM135.793 16.7673C127.898 15.269 124.632 31.6212 132.144 33.0499C139.528 34.455 143.561 18.2426 135.793 16.7673ZM113.506 22.7128C105.36 21.5032 110.179 30.8783 94.9925 33.2538C83.2219 35.0947 87.9909 47.5169 97.5008 49.1824C102.72 50.0968 105.296 46.3328 109.569 47.0821C114.421 47.9322 114.171 51.661 121.272 52.9052C130.34 54.4931 137.569 44.0519 127.859 38.4261C115.496 31.2634 122.404 24.3192 113.906 22.7814C113.77 22.757 113.635 22.732 113.506 22.7128Z",fill:"#F9F9F9"})),Co=e=>m.exports.createElement("svg",{width:22,height:22,viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.exports.createElement("path",{d:"M20.9999 15.9201V18.9201C21.0011 19.1986 20.944 19.4743 20.8324 19.7294C20.7209 19.9846 20.5572 20.2137 20.352 20.402C20.1468 20.5902 19.9045 20.7336 19.6407 20.8228C19.3769 20.912 19.0973 20.9452 18.8199 20.9201C15.7428 20.5857 12.7869 19.5342 10.1899 17.8501C7.77376 16.3148 5.72527 14.2663 4.18993 11.8501C2.49991 9.2413 1.44818 6.27109 1.11993 3.1801C1.09494 2.90356 1.12781 2.62486 1.21643 2.36172C1.30506 2.09859 1.4475 1.85679 1.6347 1.65172C1.82189 1.44665 2.04974 1.28281 2.30372 1.17062C2.55771 1.05843 2.83227 1.00036 3.10993 1.0001H6.10993C6.59524 0.995321 7.06572 1.16718 7.43369 1.48363C7.80166 1.80008 8.04201 2.23954 8.10993 2.7201C8.23656 3.68016 8.47138 4.62282 8.80993 5.5301C8.94448 5.88802 8.9736 6.27701 8.89384 6.65098C8.81408 7.02494 8.6288 7.36821 8.35993 7.6401L7.08993 8.9101C8.51349 11.4136 10.5864 13.4865 13.0899 14.9101L14.3599 13.6401C14.6318 13.3712 14.9751 13.1859 15.3491 13.1062C15.723 13.0264 16.112 13.0556 16.4699 13.1901C17.3772 13.5286 18.3199 13.7635 19.2799 13.8901C19.7657 13.9586 20.2093 14.2033 20.5265 14.5776C20.8436 14.9519 21.0121 15.4297 20.9999 15.9201Z",stroke:"#F9F9F9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),R6=e=>m.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.exports.createElement("path",{d:"M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z",stroke:"#F9F9F9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),m.exports.createElement("path",{d:"M22 6L12 13L2 6",stroke:"#F9F9F9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));function M6(){return s(D6,{children:S(re,{children:[S(L6,{color:M.colors.green,children:[s(N6,{}),S(A6,{children:[s(wn,{children:s(Jn,{to:"about",children:"\u041F\u0440\u043E \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A"})}),s(wn,{children:s(Jn,{to:"dogs",children:"\u041D\u0430\u0448\u0456 \u0445\u0432\u043E\u0441\u0442\u0438"})}),s(wn,{children:s(B1,{href:"path/to/confdentiality/agreement",target:"_blank",children:"\u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456"})}),s(wn,{children:s(B1,{href:"path/to/rules",target:"_blank",children:"\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442\u0456"})}),s(wn,{children:s(B1,{href:"path/to/reports",target:"_blank",children:"\u0417\u0432\u0456\u0442\u043D\u0456\u0441\u0442\u044C"})})]}),S(P6,{children:[S(x4,{children:[s(Co,{}),s(z1,{children:"+38 063 628 6630"})]}),S(x4,{children:[s(Co,{}),s(z1,{children:"+38 067 568 1788"})]}),S(x4,{children:[s(R6,{}),s(z1,{children:"biglapa@gmail.com"})]}),s(x4,{children:S(B6,{children:[s(wn,{children:s(go,{href:"path/to/insta",children:s($6,{})})}),s(x4,{children:s(go,{href:"path/to/fb",children:s(z6,{})})})]})})]})]}),s(T6,{children:"\u0420\u043E\u0437\u0440\u043E\u0431\u043A\u0430 Baza Trainee Ukraine 2023 \xA9 \u0423\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u0456"})]})})}const I6=v.div`
  ${({isShow:e})=>!e&&"display: none;"}
  background-color: ${({theme:e})=>e.colors.background};
  width: 100%;
  padding: 48px 0;
  position: fixed;
  bottom: 0;
  z-index: 5;

  p {
    font-size: 1rem;
    text-align: left;

    a {
      font-weight: ${({theme:e})=>e.fontWeights.semiBold};
      text-decoration: underline;
    }
  }

  ${be} {
    font-size: ${({theme:e})=>e.fontSizes.h3};
    padding: 24px;
  }

  @media (max-width: 767px) {
    padding: 20px 0;
    p {
      font-size: 0.75rem;
    }
  }
`;function O6(){const[e,t]=m.exports.useState(!0);return s(I6,{isShow:e,children:s(re,{children:S(ve,{align:"center",justify:"space-between",gap:"30px",children:[S("p",{children:["\u0426\u0435\u0439 \u0441\u0430\u0439\u0442 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \u0444\u0430\u0439\u043B\u0438 cookies \u0434\u043B\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0457 \u0440\u043E\u0431\u043E\u0442\u0438 \u0456 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u0441\u0435\u0440\u0432\u0456\u0441\u0443. ",s("br",{}),"\u042F\u043A\u0449\u043E \u0432\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044C \u0437 \u0457\u0445\u043D\u0456\u043C \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F\u043C, \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u041E\u041A. \u0411\u0456\u043B\u044C\u0448\u0435 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u0432 \xA0",s("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/Dead-Reaven/Big-lapa",children:"\u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456."})]}),s(be,{onClick:()=>{t(n=>!n)},children:"OK"})]})})})}function _6(){return S(Ca,{children:[s(va,{}),s(S6,{}),s(Q2,{}),s(O6,{}),s(M6,{})]})}const j6=v.div`
  color: ${({theme:e})=>e.colors.dark};
  margin-top: ${({theme:e})=>e.headerHeight};
`,tt=v.h2`
  font-size: ${({theme:e})=>e.fontSizes.h2};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  margin-bottom: ${({marginBottom:e})=>e||"45px"};

  @media (max-width: 1279px) {
    font-size: ${({theme:e})=>e.fontSizes.tabletH2};
  }

  @media (max-width: 767px) {
    font-size: ${({theme:e})=>e.fontSizes.mobileH2};
  }
`,Je=v.h3`
  font-size: ${({theme:e})=>e.fontSizes.h3};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  margin-bottom: ${({marginBottom:e})=>e||"5px"};

  @media (max-width: 1279px) {
    font-size: ${({theme:e})=>e.fontSizes.tabletH3};
  }

  @media (max-width: 767px) {
    font-size: ${({theme:e})=>e.fontSizes.mobileH3};
  }
`,H6=v.section`
  padding: 105px 0 110px;

  @media (max-width: 1023px) {
    padding: 85px 0;
  }

  @media (max-width: 767px) {
    padding: 65px 0;
  }
`,U6=v(tt)`
  max-width: 624px;
  margin-bottom: 70px;

  @media (max-width: 1023px) {
    margin-bottom: 60px;
  }

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`,V6=v.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 70px;

  @media (max-width: 1439px) {
    gap: 12px;
  }

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 767px) {
    gap: 12px;
  }
`,$1=v.div`
  &:nth-of-type(1) {
    grid-column: span 2;
  }
  img {
    height: 100%;
    width: 100%;
  }
`,W6=v.div`
  max-width: 1056px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 90px;
`,En=v.div`
  max-width: 624px;
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 767px) {
    gap: 12px;
  }

  svg {
    min-width: 48px;
  }
  &:nth-of-type(2n) {
    align-self: end;
    svg path {
      fill: ${M.colors.yellow};
    }
  }
`,b6=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Z6=v.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 25px;
`,Q6=v(Je)`
  margin-bottom: 40px;
`;var G6="/Big-lapa/assets/01.3b9dd8d2.png",K6="/Big-lapa/assets/02.1d5755f4.png",X6="/Big-lapa/assets/03.49d74eb1.png";const Sn=e=>m.exports.createElement("svg",{width:42,height:37,viewBox:"0 0 42 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.exports.createElement("path",{d:"M13.6998 0.500789C16.0598 0.160789 18.5598 2.74079 19.2798 6.30079C19.9998 9.84079 18.6998 13.0008 16.3398 13.3608C13.9998 13.7208 11.4798 11.1408 10.7398 7.58079C9.99981 4.04079 11.3398 0.880789 13.6998 0.500789ZM27.9998 0.500789C30.3798 0.880789 31.6998 4.04079 30.9998 7.58079C30.2398 11.1408 27.7398 13.7208 25.3798 13.3608C22.9998 13.0008 21.6998 9.84079 22.4398 6.30079C23.1598 2.74079 25.6598 0.160789 27.9998 0.500789ZM2.99981 9.70079C5.27981 8.72079 8.37981 10.5008 9.99981 13.6008C11.5198 16.7608 10.9998 20.0808 8.73981 21.0608C6.47981 22.0408 3.39981 20.2808 1.81981 17.1408C0.239813 14.0008 0.799813 10.6608 2.99981 9.70079ZM38.9998 9.70079C41.1998 10.6608 41.7598 14.0008 40.1798 17.1408C38.5998 20.2808 35.5198 22.0408 33.2598 21.0608C30.9998 20.0808 30.4798 16.7608 31.9998 13.6008C33.6198 10.5008 36.7198 8.72079 38.9998 9.70079ZM35.6598 31.2608C35.7398 33.1408 34.2998 35.2208 32.5798 36.0008C28.9998 37.6408 24.7598 34.2408 20.7798 34.2408C16.7998 34.2408 12.5198 37.7808 8.99981 36.0008C6.99981 35.0208 5.61981 32.4208 5.87981 30.2608C6.23981 27.2808 9.81981 25.6808 11.9398 23.5008C14.7598 20.6808 16.7598 15.3808 20.7798 15.3808C24.7798 15.3808 26.8998 20.6008 29.5998 23.5008C31.8198 25.9408 35.5198 28.0008 35.6598 31.2608Z",fill:"#758650"})),xa=e=>m.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.exports.createElement("path",{d:"M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),m.exports.createElement("path",{d:"M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));function Y6(){return s(H6,{children:S(re,{children:[s(U6,{children:"\u041B\u0430\u0441\u043A\u0430\u0432\u043E \u043F\u0440\u043E\u0441\u0438\u043C\u043E \u0434\u043E Big Lapa - \u043F\u0440\u0438\u0442\u0443\u043B\u043A\u0443 \u0434\u043B\u044F \u0441\u043E\u0431\u0430\u043A!"}),S(V6,{children:[s($1,{children:s("img",{src:G6,alt:"dogs"})}),s($1,{children:s("img",{src:K6,alt:"dogs"})}),s($1,{children:s("img",{src:X6,alt:"dogs"})})]}),S(W6,{children:[S(En,{children:[s(Sn,{}),s("span",{children:"\u041C\u0438 - \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0435\u043D\u0442\u0443\u0437\u0456\u0430\u0441\u0442\u0456\u0432, \u0449\u043E \u043F\u0440\u0438\u0441\u0432\u044F\u0442\u0438\u043B\u0438 \u0441\u0432\u043E\u0454 \u0436\u0438\u0442\u0442\u044F \u0434\u043E\u043F\u043E\u043C\u043E\u0437\u0456 \u0431\u0435\u0437\u043F\u0440\u0438\u0442\u0443\u043B\u044C\u043D\u0438\u043C \u0441\u043E\u0431\u0430\u043A\u0430\u043C. \u041D\u0430\u0448\u0430 \u043C\u0456\u0441\u0456\u044F \u043F\u043E\u043B\u044F\u0433\u0430\u0454 \u0432 \u0442\u043E\u043C\u0443, \u0449\u043E\u0431 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0442\u0438\u043C\u0447\u0430\u0441\u043E\u0432\u0438\u0439 \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A, \u043C\u0435\u0434\u0438\u0447\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434 \u0456 \u0448\u0430\u043D\u0441 \u043D\u0430 \u043D\u043E\u0432\u0435 \u0436\u0438\u0442\u0442\u044F \u0434\u043B\u044F \u0445\u0432\u043E\u0441\u0442\u0438\u043A\u0456\u0432, \u044F\u043A\u0456 \u043E\u043F\u0438\u043D\u0438\u043B\u0438\u0441\u044F \u043D\u0430 \u0432\u0443\u043B\u0438\u0446\u0456"})]}),S(En,{children:[s(Sn,{}),s("p",{children:"\u0423 \u043D\u0430\u0441 \u0454 \u0434\u043E\u0441\u0432\u0456\u0434 \u0440\u043E\u0431\u043E\u0442\u0438 \u0437 \u0440\u0456\u0437\u043D\u0438\u043C\u0438 \u043F\u043E\u0440\u043E\u0434\u0430\u043C\u0438 \u0441\u043E\u0431\u0430\u043A. \u041C\u0438 \u0432\u0456\u0440\u0438\u043C\u043E, \u0449\u043E \u043A\u043E\u0436\u043D\u0438\u0439 \u0441\u043E\u0431\u0430\u043A\u0430 \u0437\u0430\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0454 \u043D\u0430\u0448\u043E\u0457 \u0443\u0432\u0430\u0433\u0438, \u043D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u043E \u0432\u0456\u0434 \u0439\u043E\u0433\u043E \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E. \u041C\u0438 \u0434\u043E\u043A\u043B\u0430\u0434\u0430\u0454\u043C\u043E \u0432\u0441\u0456\u0445 \u0437\u0443\u0441\u0438\u043B\u044C, \u0449\u043E\u0431 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u043D\u0430\u0448\u0438\u043C \u0445\u0432\u043E\u0441\u0442\u0438\u043A\u0430\u043C \u0437\u0430\u0442\u0438\u0448\u043D\u0435 \u043C\u0456\u0441\u0446\u0435, \u044F\u043A\u0456\u0441\u043D\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F, \u0432\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434 \u0442\u0430 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u0456 \u043F\u0440\u043E\u0433\u0443\u043B\u044F\u043D\u043A\u0438"})]}),S(En,{children:[s(Sn,{}),s("p",{children:"\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0432\u043E\u043B\u043E\u043D\u0442\u0435\u0440\u0456\u0432 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u044C \u0447\u0430\u0441 \u0437 \u043A\u043E\u0436\u043D\u0438\u043C \u0441\u043E\u0431\u0430\u043A\u043E\u044E, \u0434\u0430\u0440\u0443\u044E\u0447\u0438 \u0457\u043C \u043B\u044E\u0431\u043E\u0432 \u0442\u0430 \u0443\u0432\u0430\u0433\u0443. \u041C\u0438 \u0432\u0456\u0440\u0438\u043C\u043E, \u0449\u043E \u0441\u043E\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u0456 \u0432\u0437\u0430\u0454\u043C\u043E\u0434\u0456\u044F \u0437 \u043B\u044E\u0434\u044C\u043C\u0438 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u044E\u0442\u044C \u0441\u043E\u0431\u0430\u043A\u0430\u043C \u043F\u0456\u0434\u0433\u043E\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0434\u043E \u043D\u043E\u0432\u0438\u0445 \u0434\u043E\u043C\u0456\u0432\u043E\u043A \u0456 \u043F\u043E\u043A\u0440\u0430\u0449\u0443\u044E\u0442\u044C \u0457\u0445 \u0448\u0430\u043D\u0441\u0438 \u043D\u0430 \u0443\u0441\u043F\u0456\u0448\u043D\u0443 \u0430\u0434\u0430\u043F\u0442\u0430\u0446\u0456\u044E"})]}),S(En,{children:[s(Sn,{}),s("p",{children:"\u042F\u043A\u0449\u043E \u0432\u0438 \u0437\u0430\u0446\u0456\u043A\u0430\u0432\u043B\u0435\u043D\u0456 \u0443 \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u0456 \u0441\u043E\u0431\u0430\u043A\u0438, \u043C\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0435\u043C\u043E \u0432\u0430\u043C \u0437\u043D\u0430\u0439\u0442\u0438 \u0441\u0430\u043C\u0435 \u0442\u043E\u0433\u043E, \u0445\u0442\u043E \u0441\u0442\u0430\u043D\u0435 \u0447\u0443\u0434\u043E\u0432\u0438\u043C \u043A\u043E\u043C\u043F\u0430\u043D\u044C\u0439\u043E\u043D\u043E\u043C \u0434\u043B\u044F \u0432\u0430\u0441 \u0456 \u0432\u0430\u0448\u043E\u0457 \u0440\u043E\u0434\u0438\u043D\u0438. \u041D\u0430\u0448\u0456 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0438 \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u043E \u043E\u0437\u043D\u0430\u0439\u043E\u043C\u043B\u044F\u0442\u044C \u0432\u0430\u0441 \u0437 \u043A\u043E\u0436\u043D\u0438\u043C \u0441\u043E\u0431\u0430\u043A\u043E\u044E, \u0457\u0445\u043D\u0456\u043C\u0438 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0430\u043C\u0438 \u0442\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u0430\u043C\u0438, \u0449\u043E\u0431 \u0432\u0438 \u043C\u043E\u0433\u043B\u0438 \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0432\u0438\u0431\u0456\u0440"})]}),S(En,{children:[s(Sn,{}),s("p",{children:"\u0412\u0430\u0448\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 - \u0446\u0435 \u043A\u0440\u043E\u043A \u0434\u043E \u0449\u0430\u0441\u043B\u0438\u0432\u043E\u0433\u043E \u0436\u0438\u0442\u0442\u044F \u043A\u043E\u0436\u043D\u043E\u0457 \u0431\u0435\u0437\u043F\u0440\u0438\u0442\u0443\u043B\u044C\u043D\u043E\u0457 \u0441\u043E\u0431\u0430\u043A\u0438. \u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430, \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u044C\u043D\u0456 \u0440\u0435\u0441\u0443\u0440\u0441\u0438 \u0430\u0431\u043E \u0432\u0430\u0448\u0456 \u0432\u043B\u0430\u0441\u043D\u0456 \u043D\u0430\u0432\u0438\u0447\u043A\u0438 \u0456 \u0447\u0430\u0441 - \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0432\u043D\u0435\u0441\u043E\u043A \u043D\u0430\u043C \u0434\u0443\u0436\u0435 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454. \u0420\u0430\u0437\u043E\u043C \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0441\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u0440\u0430\u0449\u0435 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u0454 \u0434\u043B\u044F \u043D\u0430\u0448\u0438\u0445 \u0447\u043E\u0442\u0438\u0440\u0438\u043B\u0430\u043F\u0438\u0445 \u0434\u0440\u0443\u0437\u0456\u0432"})]}),S(En,{children:[s(Sn,{}),s("p",{children:"\u041D\u0430 \u043D\u0430\u0448\u043E\u043C\u0443 \u0441\u0430\u0439\u0442\u0456 \u0432\u0438 \u0437\u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0456\u0437\u043D\u0430\u0442\u0438\u0441\u044F \u0431\u0456\u043B\u044C\u0448\u0435 \u043F\u0440\u043E \u0434\u0456\u044F\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u043F\u0440\u0438\u0442\u0443\u043B\u043A\u0443, \u043F\u0440\u043E \u043D\u0430\u0448\u0438\u0445 \u0445\u0432\u043E\u0441\u0442\u0430\u0442\u0438\u0445 \u043C\u0435\u0448\u043A\u0430\u043D\u0446\u0456\u0432 \u0442\u0430 \u0441\u043F\u043E\u0441\u043E\u0431\u0438 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0432'\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043D\u0430\u043C\u0438, \u044F\u043A\u0449\u043E \u0443 \u0432\u0430\u0441 \u0454 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u043F\u0438\u0442\u0430\u043D\u043D\u044F. \u0414\u044F\u043A\u0443\u0454\u043C\u043E \u0432\u0430\u043C \u0437\u0430 \u0432\u0430\u0448\u0443 \u043B\u044E\u0431\u043E\u0432, \u0434\u043E\u0431\u0440\u043E\u0442\u0443 \u0442\u0430 \u0432\u0456\u0434\u0434\u0430\u043D\u0456\u0441\u0442\u044C!"})]})]}),S(b6,{children:[s(Q6,{children:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430 Big Lapa"}),S(Z6,{children:[s(xa,{}),S("div",{children:[s(Je,{children:"\u0417\u043D\u0430\u0439\u0442\u0438 \u043D\u0430\u0441 \u043C\u043E\u0436\u043D\u0430 \u0437\u0430 \u0430\u0434\u0440\u0435\u0441\u043E\u044E:"}),s("p",{children:"\u043C\u0456\u0441\u0442\u043E \u041B\u044C\u0432\u0456\u0432, \u0432\u0443\u043B. \u0413\u043E\u0440\u043E\u0434\u043E\u0446\u044C\u043A\u0430, 397"})]})]})]})]})})}const Gr=v.h1`
  text-align: left;

  font-size: ${({theme:e})=>e.fontSizes.h1};
  font-weight: ${({theme:e})=>e.fontWeights.bold};
  line-height: ${({theme:e})=>e.lineHeights.h1};

  @media (max-width: 1279px) {
    font-size: ${({theme:e})=>e.fontSizes.tabletH1};
  }

  @media (max-width: 767px) {
    font-size: ${({theme:e})=>e.fontSizes.mobileH1};
  }
`;var vo="/Big-lapa/assets/main_photo.4c1331c3.png";const q6=e=>m.exports.createElement("svg",{width:130,height:17,viewBox:"0 0 130 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.exports.createElement("rect",{x:.5,y:.5,width:16,height:16,rx:8,stroke:"#F9F9F9"}),m.exports.createElement("line",{x1:28,y1:8,x2:45,y2:8,stroke:"#F9F9F9"}),m.exports.createElement("rect",{x:56,width:17,height:17,rx:8.5,fill:"#F9F9F9"}),m.exports.createElement("line",{x1:84,y1:8,x2:101,y2:8,stroke:"#F9F9F9"}),m.exports.createElement("rect",{x:112.5,y:.5,width:17,height:16,rx:8,stroke:"#F9F9F9"})),J6=v.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${M.colors.background};
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%),
    url(${vo}) center/cover no-repeat;

  @media screen and (max-width: 767px) {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%),
      url(${vo}) center/cover no-repeat;
  }

  ${re} {
    height: calc(100vh - 96px);
    display: flex;
    align-items: center;
  }
`,e7=v.div`
  max-width: 624px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;

  @media screen and (max-width: 1279px) {
    flex: 0 0 48%;
  }
  @media screen and (max-width: 767px) {
    height: 65%;
    position: absolute;
    bottom: 18px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    flex: 100%;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    h1 {
      text-align: center;
    }
  }
`,t7=v.button`
  background: transparent;
  border: 1px solid ${M.colors.background};
  padding: ${M.paddings.button};
  border-radius: 4px;
  font-size: ${M.fontSizes.buttonText};
  font-weight: ${M.fontWeights.semiBold};
  line-height: ${M.lineHeights.normal};
  transition: ${M.transitions.quick};

  &:hover {
    border-width: 2px;
  }
  &:focus {
    border-width: 3px;
  }
  &:active {
    border-width: 4px;
  }
  &:disabled {
    opacity: 0.6;
  }
`,n7=v(q6)`
  position: absolute;
  bottom: 44px;
  z-index: 1;
  @media screen and (max-width: 767px) {
    left: 50%;
    bottom: 130px;
    transform: translate(-50%);
  }
`;function r7(){return s(J6,{children:S(re,{children:[S(e7,{children:[s(Gr,{children:"\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0439 \u0434\u0440\u0443\u0433\u0430, \u0432\u0440\u044F\u0442\u0443\u0439 \u0442\u0432\u0430\u0440\u0438\u043D\u0443!"}),s(t7,{children:"\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"})]}),s(n7,{})]})})}function u7(){return S(j6,{"data-testid":"about-page",children:[s(r7,{}),s(Y6,{})]})}const i7=v.section`
  padding: 110px 0;

  @media (max-width: 1279px) {
    padding: 80px 0;
  }

  ${({admin:e})=>e&&s0`
      padding: 0 !important;

      ${re} {
        padding: 0;
        margin: 0;
        width: 100%;
      }

      ${ve} {
        align-items: end;
      }

      ${ya} {
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;

        @media (max-width: 1279px) {
          gap: 20px;
        }

        @media (max-width: 767px) {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      ${wa} {
        p {
          margin-bottom: 20px;
        }

        button {
          width: 100%;
        }

        &:hover {
          all: unset;
          text-align: left;
        }
      }
    `}
`,o7=v(be)`
  max-width: 400px;
  width: 100%;
  margin-bottom: 80px;

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`,l7=v(tt)`
  margin-bottom: 60px;
`,ya=v.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 40px;
  margin-bottom: 55px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,wa=v.div`
  background-color: ${M.colors.background};
  transition: ${M.transitions.long}, border 0s;
  text-align: left;
  img {
    width: 100%;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  svg {
    display: none;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  @media (min-width: 1280px) {
    &:hover {
      padding: 11px;
      transform: scale(1.2) rotate(-6deg);
      border: 2px solid ${M.colors.lightGreen};
      border-radius: 4px;
      z-index: 5;

      svg {
        display: block;
      }
    }
  }
`,a7=v.div`
  display: flex;
  gap: 12px;

  :nth-child(2) {
    max-width: 56px;
    padding: 16px;

    svg {
      position: relative;
      display: block;
    }
  }
`,s7=v.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,c7=v.button`
  background: transparent;
  border: 1px solid ${M.colors.dark};
  padding: 15px 60px;
  border-radius: 4px;
  font-size: ${M.fontSizes.buttonText};
  font-weight: ${M.fontWeights.semiBold};
  line-height: ${M.lineHeights.normal};
  transition: ${M.transitions.quick};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    width: 100%;
  }

  &:hover {
    border-width: 2px;
  }
  &:disabled {
    opacity: 0.6;
  }
`,d7=v.ul`
  display: flex;
  gap: 24px;

  li {
    color: ${M.colors.lightGrey};
    font-size: 24px;

    &:hover {
      transition: ${M.transitions.quick};
      cursor: pointer;
      color: ${M.colors.dark};
    }
  }
`;var kn="/Big-lapa/assets/Dog_photo.ba816c06.png";const p7=e=>m.exports.createElement("svg",{width:25,height:24,viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.exports.createElement("path",{d:"M15.5 6.84375C15.5 6.84375 16.6419 6.28125 12.5 6.28125C11.0166 6.28125 9.5666 6.72112 8.33323 7.54523C7.09986 8.36934 6.13856 9.54068 5.57091 10.9111C5.00325 12.2816 4.85472 13.7896 5.14411 15.2444C5.4335 16.6993 6.14781 18.0357 7.1967 19.0846C8.2456 20.1334 9.58197 20.8478 11.0368 21.1371C12.4917 21.4265 13.9997 21.278 15.3701 20.7103C16.7406 20.1427 17.9119 19.1814 18.736 17.948C19.5601 16.7147 20 15.2646 20 13.7812",stroke:"#2E2E2E",strokeWidth:2,strokeMiterlimit:10,strokeLinecap:"round"}),m.exports.createElement("path",{d:"M12.5 2.71875L16.25 6.46875L12.5 10.2188",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),f7=e=>m.exports.createElement("svg",{width:147,height:174,viewBox:"0 0 147 174",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.exports.createElement("path",{d:"M60.9597 35.3807C63.5832 32.2251 69.5621 32.9001 74.3497 36.9439C79.1156 40.9604 80.9057 46.7609 78.3039 49.9438C75.7276 53.1039 69.7233 52.4517 64.9103 48.4307C60.119 44.4371 58.3797 38.591 60.9597 35.3807ZM79.0984 19.0752C82.5309 16.8807 87.6442 19.6937 90.6089 25.3293C93.5193 31.0607 93.156 37.4369 89.7707 39.6359C86.36 41.8578 81.272 39.0219 78.358 33.3407C75.3969 27.6549 75.7602 21.2787 79.0984 19.0752ZM57.3997 60.1533C59.2252 56.2143 65.0946 55.1119 70.5232 57.5009C75.8903 60.0859 78.8439 65.2157 77.0437 69.1318C75.2436 73.0479 69.4214 74.1548 63.9999 71.6656C58.5785 69.1763 55.6539 63.9736 57.3997 60.1533ZM103.064 19.1043C106.899 17.9076 111.244 21.8333 112.657 27.9257C114.071 34.0181 112.079 39.9351 108.146 41.1729C104.213 42.4107 99.94 38.4668 98.429 32.4155C97.1101 26.3321 99.1051 20.3649 103.064 19.1043ZM122.291 52.3747C124.438 54.8525 124.876 59.3368 123.543 62.3639C120.786 68.6871 111.708 68.8756 106.66 73.4138C101.611 77.952 100.035 87.6697 93.6328 89.251C90.0294 90.1923 85.4493 88.2129 83.4284 84.9648C80.6419 80.4821 83.4416 74.2136 83.7582 68.8173C84.2662 61.7482 81.0351 52.2252 86.1342 47.6414C91.208 43.0804 99.578 47.7963 106.159 48.6805C111.63 49.4834 118.565 48.0795 122.291 52.3747Z",fill:"#B5C268"}),m.exports.createElement("path",{d:"M28.7398 107.017C31.7828 104.656 37.2287 106.565 40.9262 111.34C44.6086 116.086 45.1792 121.846 42.1512 124.238C39.1512 126.614 33.6774 124.72 29.9519 119.96C26.2415 115.231 25.7269 109.439 28.7398 107.017ZM48.7359 95.7984C52.3512 94.5013 56.5854 98.2061 58.2821 104.066C59.9101 110.002 58.3643 115.834 54.7921 117.146C51.192 118.473 46.9858 114.752 45.3449 108.861C43.661 102.956 45.2068 97.1242 48.7359 95.7984ZM20.7312 129.213C23.1786 125.954 28.8588 126.192 33.4672 129.572C37.981 133.12 39.7632 138.508 37.3437 141.751C34.9242 144.994 29.2871 144.771 24.7044 141.3C20.1218 137.829 18.3804 132.379 20.7312 129.213ZM71.0711 100.97C74.873 100.684 78.1806 105.255 78.3445 111.205C78.5084 117.155 75.5318 122.211 71.6308 122.514C67.7299 122.817 64.4934 118.245 64.2305 112.312C64.1527 106.391 67.1422 101.288 71.0711 100.97ZM82.6962 135.933C84.229 138.69 83.7875 142.94 81.9719 145.46C78.2054 150.729 69.7067 148.955 64.1413 152.077C58.576 155.2 55.2667 163.868 48.9992 163.959C45.4619 164.058 41.567 161.24 40.298 157.796C38.5491 153.043 42.3458 147.834 43.6626 142.901C45.4745 136.458 44.2653 126.938 49.8866 123.785C55.4799 120.647 62.3897 126.814 68.3571 129.046C73.3056 130.965 80.0364 131.152 82.6962 135.933Z",fill:"#B5C268"})),h7=e=>m.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.exports.createElement("path",{d:"M4 7H20M10 11V17M14 11V17M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));function m7({dog:e,admin:t}){const{src:n,name:r,sex:u,age:i}=e;return S(wa,{children:[!t&&S(N3,{to:"/dog",children:[s("img",{src:n,alt:"/dog"}),s(Je,{children:r}),S("p",{children:[u,", ",i]}),s(f7,{})]}),t&&S("div",{children:[s("img",{src:n,alt:"/dog"}),s(Je,{children:r}),S("p",{children:[u,", ",i]}),S(a7,{children:[s(be,{children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"}),s(be,{children:s(h7,{})})]})]})]})}function Ea({admin:e}){return s(i7,{admin:e,children:s(re,{children:S(ve,{direction:"column",align:"center",children:[e&&s(o7,{children:"\u0414\u043E\u0434\u0430\u0442\u0438 \u043D\u043E\u0432\u0443 \u043A\u0430\u0440\u0442\u043A\u0443"}),!e&&s(l7,{children:"\u041D\u0430\u0448\u0456 \u0445\u0432\u043E\u0441\u0442\u0438"}),s(ya,{children:[{id:1,src:kn,name:"\u0421\u043A\u0430\u0439",sex:"\u0425\u043B\u043E\u043F\u0447\u0438\u043A",age:"2 \u0440\u043E\u043A\u0438"},{id:2,src:kn,name:"\u0421\u043A\u0430\u0439",sex:"\u0425\u043B\u043E\u043F\u0447\u0438\u043A",age:"2 \u0440\u043E\u043A\u0438"},{id:3,src:kn,name:"\u0421\u043A\u0430\u0439",sex:"\u0425\u043B\u043E\u043F\u0447\u0438\u043A",age:"2 \u0440\u043E\u043A\u0438"},{id:4,src:kn,name:"\u0421\u043A\u0430\u0439",sex:"\u0425\u043B\u043E\u043F\u0447\u0438\u043A",age:"2 \u0440\u043E\u043A\u0438"},{id:5,src:kn,name:"\u0421\u043A\u0430\u0439",sex:"\u0425\u043B\u043E\u043F\u0447\u0438\u043A",age:"2 \u0440\u043E\u043A\u0438"},{id:6,src:kn,name:"\u0421\u043A\u0430\u0439",sex:"\u0425\u043B\u043E\u043F\u0447\u0438\u043A",age:"2 \u0440\u043E\u043A\u0438"}].map(n=>s(m7,{dog:n,admin:e},n.id))}),!e&&S(s7,{children:[S(c7,{children:[s(p7,{}),"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0449\u0435"]}),S(d7,{children:[s("li",{children:"1"}),s("li",{children:"2"}),s("li",{children:"3"}),s("li",{children:"4"}),s("li",{children:"5"}),s("li",{children:"..."}),s("li",{children:"16"})]})]})]})})})}var g7="/Big-lapa/assets/main_photo.01c83128.png";const C7=e=>m.exports.createElement("svg",{width:130,height:17,viewBox:"0 0 130 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.exports.createElement("rect",{width:17,height:17,rx:8.5,fill:"#F9F9F9"}),m.exports.createElement("line",{x1:28,y1:8,x2:45,y2:8,stroke:"#F9F9F9"}),m.exports.createElement("rect",{x:56.5,y:.5,width:16,height:16,rx:8,stroke:"#F9F9F9"}),m.exports.createElement("line",{x1:84,y1:8,x2:101,y2:8,stroke:"#F9F9F9"}),m.exports.createElement("rect",{x:112.5,y:.5,width:17,height:16,rx:8,stroke:"#F9F9F9"})),v7=v.div`
  height: calc(100vh - 96px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${M.colors.background};
  background-color: ${M.colors.green};
`,x7=v.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2vh;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`,y7=v.div`
  flex: 0 0 60%;
  max-width: 624px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;

  @media screen and (max-width: 1279px) {
    flex: 0 0 48%;
  }
  @media screen and (max-width: 767px) {
    gap: 20px;
    text-align: center;
    h1 {
      text-align: center;
    }
  }
`,Sa=v.button`
  background: transparent;
  border: 1px solid ${M.colors.background};
  padding: ${M.paddings.button};
  border-radius: 4px;
  font-size: ${M.fontSizes.buttonText};
  font-weight: ${M.fontWeights.semiBold};
  line-height: ${M.lineHeights.normal};
  transition: ${M.transitions.quick};

  &:hover {
    border-width: 2px;
  }
  &:focus {
    border-width: 3px;
  }
  &:active {
    border-width: 4px;
  }
  &:disabled {
    opacity: 0.6;
  }

  @media (max-width: 767px) {
    display: none;
  }
`,w7=v(Sa)`
  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 767px) {
    display: block;
  }
`,E7=v.div`
  flex: 0 1 50%;
  aspect-ratio: 1/1;
  max-height: 70vh;
  background: ${M.colors.yellow} url(${g7}) bottom no-repeat;
  background-size: auto 93%;
  border-radius: 3%;
  z-index: 0;

  @media screen and (max-width: 1279px) {
    aspect-ratio: 1/1.1;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
    max-height: 45vh;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`,S7=v(C7)`
  position: absolute;
  bottom: 0;
  z-index: 1;
  @media screen and (max-width: 767px) {
    left: 50%;
    bottom: 85px;
    transform: translate(-50%);
  }
`;function k7(){return s(v7,{children:s(re,{children:S(x7,{children:[S(y7,{children:[s(Gr,{children:"\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0439 \u0434\u0440\u0443\u0433\u0430, \u0432\u0440\u044F\u0442\u0443\u0439 \u0442\u0432\u0430\u0440\u0438\u043D\u0443!"}),s(Sa,{children:"\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"})]}),s(E7,{}),s(w7,{children:"\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"}),s(S7,{})]})})})}const F7=v.div`
  color: ${({theme:e})=>e.colors.dark};
  margin-top: ${({theme:e})=>e.headerHeight};
`;function D7(){return S(F7,{"data-testid":"dogs-page",children:[s(k7,{}),s(Ea,{})]})}var L7="/Big-lapa/assets/Dogs_donation.818d994a.png",A7="/Big-lapa/assets/First_green_rectangle.95519e92.svg",P7="/Big-lapa/assets/Second_green_rectangle.572f60f1.svg";const B7=v.section`
  background-image: url(${A7}), url(${P7});
  background-repeat: no-repeat;
  background-position: left top, right bottom;

  @media (max-width: 1279px) {
    background-position: -50px top, right bottom;
  }

  @media (max-width: 767px) {
    background-position: -150px top, right bottom;
  }
`,z7=v(re)`
  padding-top: 45px;
  padding-bottom: 180px;
  @media (max-width: 1000px) {
    padding-left: 84px;
    padding-right: 84px;
  }

  @media (max-width: 767px) {
    padding: ${({theme:e})=>e.paddings.containerMobile};
    padding-top: 40px;
    padding-bottom: 160px;
  }
`,$7=v.div`
  z-index: 2;
`,T7=v(ve)`
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 60px;
  }
  @media (max-width: 767px) {
    gap: 40px;
  }
`,N7=v.div`
  border: 2px solid ${({theme:e})=>e.colors.yellow};
  background-color: ${({theme:e})=>e.colors.background};
  border-radius: 4px;
  padding: 20px 20px;
  &:nth-of-type(1) {
    flex: 1;
  }
  &:nth-of-type(2) {
    flex: 1.25;
    padding: 20px 40px;
  }

  p {
    max-width: 90%;
  }

  @media (max-width: 1000px) {
    padding: 20px 40px;

    &:nth-of-type(1) {
      padding: 20px 20px;
    }
  }

  @media (max-width: 767px) {
    p {
      max-width: 100%;
    }

    &:nth-of-type(2) {
      padding: 20px 12px;
    }
  }
`,R7=v.div`
  display: grid;
  grid-gap: 20px 40px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;

  label:last-child {
    grid-column: span 2;
  }
`,M7=v.label`
  border: 1px solid ${({theme:e})=>e.colors.lightGreen};
  border-radius: 4px;
  cursor: pointer;

  &:focus {
    background-color: ${({theme:e})=>e.colors.lightGreen};
  }

  span {
    display: block;
    width: 100%;
    height: 100%;
    transition: ${({theme:e})=>e.transitions.quick};
    padding: 15px 37px;

    &:hover {
      background-color: ${({theme:e})=>e.colors.lightGreen};
    }

    span {
      padding: 0;
    }
  }

  input[type='radio'] {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;

    &:checked + span {
      background-color: ${({theme:e})=>e.colors.lightGreen};
      z-index: 1;
    }
  }

  input[type='text'] {
    background-color: transparent;
    display: block;
    text-align: center;

    &:hover {
      background-color: ${({theme:e})=>e.colors.lightGreen};
    }

    &::placeholder {
      color: ${({theme:e})=>e.colors.dark};
    }
  }
`,I7=v(be)`
  @media (max-width: 500px) {
    width: 100%;
  }
`,O7=v.div`
  background-color: ${({theme:e})=>e.colors.lightGreen};
  width: 100%;
  padding: 50px 20px 30px;
  border-radius: 5px;
  text-align: left;

  p {
    max-width: 100%;
    &:first-child {
      font-weight: ${({theme:e})=>e.fontWeights.semiBold};
      margin-bottom: 10px;
    }
    &:nth-child(2) {
      max-width: 170px;
    }
  }

  @media (max-width: 767px) {
    padding: 12px 12px 56px;

    ${ve} {
      flex-direction: column-reverse;
      gap: 12px;
    }

    p:nth-child(2) {
      max-width: 250px;
    }

    img {
      align-self: flex-end;
    }
  }
`,_7=v.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 3;
  width: calc(20% + 150px);
  @media (max-width: 1000px) {
    width: 418px;
  }
  @media (max-width: 767px) {
    width: calc(20% + 190px);
  }
`;function xo(e){return s(N7,{children:s(ve,{direction:"column",align:"center",gap:"35px",children:e.children})})}function y4({text:e,isInput:t}){return S(M7,{children:[s("input",{type:"radio",name:"radio"}),S("span",{children:[!t&&s("span",{children:e}),t&&s("input",{type:"text",placeholder:"\u0406\u043D\u0448\u0430 \u0441\u0443\u043C\u0430, UAH"})]})]})}function j7(){return S(R7,{children:[s(y4,{text:"20 \u0433\u0440\u043D"}),s(y4,{text:"50 \u0433\u0440\u043D"}),s(y4,{text:"100 \u0433\u0440\u043D"}),s(y4,{text:"200 \u0433\u0440\u043D"}),s(y4,{isInput:!0})]})}var H7="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAlCAYAAAC05kydAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAx5SURBVHgB7VoLcFTVGf7PubvZPAh5bAJZdkMguxGI1KIo+KpgRVqxPhFRqsXqVJ3RwbbWR31rpzNWndGOWmfaQUqLwjAWW2tFrZXIWKij+EKRkM17A2Szm002ZJPs7j2n37mbDZsQkmx2o47mm7m5e8//n9f/n3P+xwnRJL6Z8Nld17Y5nNu9ttnfo0mMG4zSAL/d9QvG6FFJlCEleTXiywtaDnxCk0ganFIAFMB8DtfdUOvvlDJUGRQzTZL+907H7EU0iaQx7h2ilNHucD2IBu7Bb/MxdEltjKIXW1sa/keTGDPGpRCljA57xX2CyUdGYQ0JXSwpPlT3AU1iTEj6yIIyeMDhumsMylDIZhrf6bWVn01fAwTtc60eu93xwTA7+uuCpHeI3+F6GK8HkqmDTtqFFFcWtdT9h1IE+v8Mq2ImbFWQmfWzCurrG+O0dofzDknsPtAZafSAtcn9lCr3zii/3sT5vVLK2WScptSHMe3QOFuX3+yujdWt2A/6jIRBh8Hai7be6gmab3d07fcPGccNoD/OiAmNxBl5nroaSgOS2iFy6VITXk2S5Dr14PeDmFzvcdibuWT3Kz5B8iEz045QWsBCEFYO+rWLCJ+XSBHEz8FrqloBOCp75cKFZl+p6xmN8/XgL2ecdWLGXijTAu9jhS7lB76SmPMBehD1co2Hy240cQTCLgLf2uyp0T8k9lPjcqG+vI4ky0U9qxTsMkoTUnZ720tde7DkThlaLiV7qailZhWlGdK2MDtgCjZjNRfqJFdM89Ruj9P8jopXwXEhFsFje12l9y6oaV4jGNtoDEfSJjOOWS0sukIZbKHG+CPQwkLQDmtd4cru7OK+LK2zSQkY6ryicGrmG+3BiNoFT6Gso8jjLoj302ErP1XnfDekBxKZIcSPOk3RM2c3NPRSikjJ7VXARMVw5cw4GdIPdmhPyBDvSDyc9Z5bVRXVObs7Nha23VqSd0Oep9Y9xVvfOs1T95ouxdUgqWOoREwxrbaj3XiruuScQqEokyIu4EHHldDYlWjUhHHsxG7rRLWTsyL8LEoDTCMR0ZHmtzt/TUzbUOQ50EJpgr/EVSlN0dwiT8N7lAI0Yi/67RUd8W/sDFt8y9fPmpXPojRX/cZOepHt2RNJrAul1Pgczo+hrPMEse8OapfRhkDUFMD8S/r7efpoH3D3paEQrGa2USDoQvFyM+OrQXubGSzjx3F3iPKm/KWu5zHguzjxQkojpFmeQNL0zzbHrCWUGvJxls+KPxCG5SjBgKEfCHRYIcH2h403GywHMHeirBM7Lai+4ZCsbrHZstXvVrvzXLQ6E1wBoeynlMaiwu66pHW6s5hSBB9+oMTb7c71mMZPpPJXJgDY6sWcTNv9M2afT+MEY2yN6NXs8QcCHvDiChoaOqANwwODU7FiaF3lAvOYDVEKq0ukSSlusja755sjcq5UxxVjZ2TznJWKBoNxKxmKZsqmvAja/f3zmWYxU8rH1jEKUVE3clMb0cN1NAZgsluhuP8Oeoh2EtPfGEP1LOLaK2328gtpHIhK0VHsqz4Yf9gQjw/fG/rflwZKy38aL8dqL4qwyNMgTMOEj1g081+Gax9RLeQjI7F5UvHh6SflQC7nGW1K2oHFupUxuQXtu/t5rqEUMciGdMz8TkG73vMctL2axohiT+3jeD1O40cmPJ6/tcGvL/a4X6A0oi+S/YTJ3H0Ojt3vC8n+hFTP7VBABwQ5H+Q8iLVbcnlXTuMXhxLrYec9iUV5j3EUEoMdkZ2ayfQyY6GPcTRNBcthwfi1cbvqLXWu1iTbDN6LYHPvt7bU/obGiYEdopShi57HKAllpAvYlRaci8+rVSzTlIFWKGn9tNsSZVdBAdgBLIK2T4ThPwNn0hSQ6+Ag3l3U7B6IMcDXpt5QoAuLcmEsDpENqHdffmN1Pd7O2HDpX4lOjmZhcL3ZXlIZAMlKKQUYO6Q+f1Z+VPQ8A0msoa8IsdQ9ewa2y0wttX8ciRcB3SqkZLSw3vPRoDaY/jA8wqeyo6I6XpZ72N2Gtq9vn+l6TAhawBnLhA0/SBnRXda6us7E+mYyXxzh0TL1W9N12WdiPWZNfh7nk5wt13ShR8KW9xPrWd3uYIut8qIcHq2IsGgzpQBjNXbNdFWGBakEYNZQBkymB8Z3caFn/15KE3ylzkuZZC8PS5TyXWz5b+0ll3Fk5Ta59wkmbmBDAqCvAJ8xIX9MEwSJkwDJRetWmhjPMR0YMOrFzXWbEXdkYUs8R/2XTV8msBj2mi3Zy3JrP/WOxOezO9+C0S0ZoaVu5NBujN9YGoGcrXwdcX5lO6OyLNL4eQ6X3yflK5Yo/T63tdYrp0/PaTfnGvEEvKfaAtZ7FfN4elods0/SpPZn2JOMQr17ETt0KNR/D/Q6WO0w8F0RPXp1htm0CR3lH2dAYJM7ijy1KvdHHQ7nzxBJ3qryCahzgbXF7UlkHuRlwfd+Ht6FSrIpb2dMSgnaTijq08T8xDIL0/VQmFeXYLI0JshP9d7Osws97q7ROJXBxatshLYIVwOn4ccnSnjwejZAgWv7iYLFElA2lM3vM8tVbUVlS+rCwVC+mU6M1aaZPpGDwI+qmZQIxqlSTYkiEWNXHS5xFUEwy42xqOBR405UOmuUMefgtc4YD7EbsfhUX7jpFirX92Qi7zFxCDT2EmN8bSz9PDqimtyGRnYkPhGp7TRljM0Vxup5PxKh84t9vlGVoSD6tO9ggu2xwYuVrFvkq8dEGVa01e++SsM2BhwVv1LKwAfmwp7I0Nh8U4ZpHub2S5D9aKeCZZo3lwcCQallVvZ3gdBCHtfTO0qT6vJtWabgAYrtgvd7pKkIv/cbfIJuQVxyLiWkUjpL58Bzo8qjk2dXD21/2FxWYfOBLe1l5UES/OXRUoQYSNawAxcsi2i0uriTOKJfXtTR0EFjBALALhwZxqgixHqmBWpjHlBgqand4dEH2q6szAgEw3cYY5H0bEFLzZ0JeaYD3rLyai3K/4FVvsRrd52u6eEmSgLICiCEYaH8w+59lLCwcU9ijEFyva/YU1+VSItI/Uf4UCmYXWhgEVR/WnDG7DlTD9YPeIXHzWUVNta9hqlcx8a4U5KcDE4VudvaLS4rSEIZyeBwKDQD0jdySzrjW4Ym/bw5mW9hrRupFazKxTTBUHczEPYVsQ+5EXJ9V/3s07SbEvlGTL8XNNdsEaQtk6FoI6URmRbaXSBCy1hgcByQTmhR7eju1yk4lH7ivn0qJWKkRSQTFppg+L1dCyh2XIUZF1/AmL2kyrmg1XLVqgGvb8T0u7GqmqvT/g8KuW53G00w+qivJZsylcDN3BRdSv1nexx+2wlzYJHsxofODky0I4y7FbUTlP3JEFL7NxKbmmGNGM3o3PWhynq/rfhSv6CKnYnHljMypzMNkixK4baidyP4lEJb12ZzLozTgohFmCZ/i8Hl4mmLiiNv0gSirWiOuupd2f9Zgz7fg//2HoRnnDw6sYFjy0RJwm8rvw03ZoanAG3motEThhe7vCDgcG1qI3kk1hHbXOBxV9GXADgiN+MSbBc3me+U4chiyeQ8TWPbYXDfgRPC4Qxg/HIuGHXYs1tLWlu7fY48I45Q9+1M05/zO5zwnhgWmzSpdeW35L/gd+RFKckYzVtcOUWzhP8qY1c0fq7r5+fftNZIr/jXb7pZORzocxnu/m9BXu3ZpBWic/GORiZ1NRoLzo6zB+BSWjCINcqRB8vrvkzaTROKKlzeVfSqKAOu7incrFsL6t2fB2fM+UGE68pbVP8QcTmPxSHqZAgwLm8pbK7dqmp3c0toiggpBZkx+qWJMzH+MroocbIQpOCZ0dBoo8rMEJYwyUVKCriqeNN6qL6RHnrIoEmXa317r/Ffn4UY1amqLGmFTGtp+Dhgn3WB4KYqzCxv1ApSbvdnscsq3O4+ShPg3/8cicIMxBUH4mXqH028pK/QhHY2rmxZhtC+UOVTD1ZX17hcJ0/toyUIjRfDVYUeqJ5p4Vfzm5oC8fplTXsD/jLnOXokdu07GsxM1uMSrOEYgiYe1CM8T3BmJCC7RGdPpjnnNsQlFos0b09kZZCJr6xiEYvQ6XA7G/rnMT74bBXzyCR3YKVMPw6L+v+HbVbXzKtYVVWUJjEmpGR0/WVzzyQR3UbHKkX5/G8WZtIlLI0749uAlLwsa+P+XYLTCuWpDKawbZFI18pJZSSPlN3e4kb3h1yjHx5VitwWNEWuUZ4LTeKrg3dWxQKfw/Wo+m8OmsQkvin4PwXbCP2lUbdoAAAAAElFTkSuQmCC";function U7(){return s(O7,{children:S(ve,{justify:"space-between",align:"flex-start",children:[S("div",{children:[s("p",{children:"\u041D\u0430\u0448\u0435 \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043F\u043E\u0441\u0438\u043B\u043E\u043A:"}),S("p",{children:["\u0412\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F \u2116 19, \u043C. \u041A\u0440\u0438\u0432\u0438\u0439 \u0420\u0456\u0433, \u041C\u0443\u0441\u043E\u0440\u0433\u0441\u043A\u043E\u0433\u043E 3",s("br",{})," \u041F\u0440\u0438\u0442\u0443\u043B\u043E\u043A \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D \u201C\u0411\u0456\u0433 \u041B\u0430\u043F\u0430\u201D"]})]}),s("img",{src:H7,alt:"nova poshta logo"})]})})}function V7(){return s(B7,{children:S(z7,{children:[s($7,{children:S(ve,{direction:"column",align:"center",children:[s(tt,{children:"\u0411\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u0439 \u0434\u043E\u043D\u0430\u0442"}),S(T7,{gap:"24px",width:"100%",children:[S(xo,{children:[S("div",{children:[s(Je,{children:"\u0420\u0430\u0437\u043E\u0432\u0438\u0439 \u0432\u043D\u0435\u0441\u043E\u043A"}),S("span",{children:["\u041D\u0430\u0433\u043E\u0434\u0443\u0439 \u043F\u0441\u0430 \u0432\u0436\u0435 \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456 \u2013",s("br",{})," \u0442\u0432\u043E\u044F \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u0432\u0430\u0436\u043B\u0438\u0432\u0430!"]})]}),s(j7,{}),s(I7,{children:"\u0417\u0440\u043E\u0431\u0438\u0442\u0438 \u0432\u043D\u0435\u0441\u043E\u043A"})]}),S(xo,{children:[S("div",{children:[s(Je,{children:"\u041D\u0435\u0433\u0440\u043E\u0448\u043E\u0432\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430"}),S("p",{children:["\u0406\u0441\u043D\u0443\u0454 \u0431\u0430\u0433\u0430\u0442\u043E \u0441\u043F\u043E\u0441\u043E\u0431\u0456\u0432 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0438 \u2013 \u043E\u0431\u0435\u0440\u0456\u0442\u044C \u0441\u0432\u0456\u0439!",s("br",{})," \u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u0432\u0443\u043B\u0438\u0447\u043D\u0438\u043C \u0441\u043E\u0431\u0430\u043A\u0430\u043C \u043D\u0435 \u043E\u0431\u043C\u0435\u0436\u0443\u0454\u0442\u044C\u0441\u044F \u043B\u0438\u0448\u0435 \u0444\u0456\u043D\u0430\u043D\u0441\u0430\u043C\u0438. \u041C\u0438 \u043F\u043E\u0441\u0442\u0456\u0439\u043D\u043E \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u0454\u043C\u043E \u043A\u043E\u0440\u043C\u0456\u0432, \u043C\u0435\u0434\u0438\u043A\u0430\u043C\u0435\u043D\u0442\u0456\u0432, \u0440\u043E\u0437\u043F\u043E\u0432\u0441\u044E\u0434\u0436\u0435\u043D\u043D\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u0442\u043E\u0449\u043E."]})]}),s(U7,{})]})]})]})}),s(_7,{src:L7})]})})}var W7="/Big-lapa/assets/main_photo.2d061ceb.png";const b7=e=>m.exports.createElement("svg",{width:130,height:17,viewBox:"0 0 130 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.exports.createElement("rect",{width:17,height:17,rx:8.5,fill:"#F9F9F9"}),m.exports.createElement("line",{x1:28,y1:8,x2:45,y2:8,stroke:"#F9F9F9"}),m.exports.createElement("rect",{x:56.5,y:.5,width:16,height:16,rx:8,stroke:"#F9F9F9"}),m.exports.createElement("line",{x1:84,y1:8,x2:101,y2:8,stroke:"#F9F9F9"}),m.exports.createElement("rect",{x:112.5,y:.5,width:17,height:16,rx:8,stroke:"#F9F9F9"})),Z7=v.div`
  height: calc(100vh - 96px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${M.colors.background};
  background-color: ${M.colors.green};
`,Q7=v.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2vh;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`,G7=v.div`
  flex: 0 0 60%;
  max-width: 624px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 1279px) {
    flex: 0 0 48%;
  }
  @media screen and (max-width: 767px) {
    gap: 20px;
    text-align: center;
    h1 {
      text-align: center;
    }
  }
`,K7=v.div`
  flex: 0 1 50%;
  aspect-ratio: 1/1;
  max-height: 70vh;
  background: ${M.colors.yellow} url(${W7}) bottom no-repeat;
  background-size: contain;
  border-radius: 3%;
  z-index: 0;

  @media screen and (max-width: 1279px) {
    aspect-ratio: 1/1.1;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
    max-height: 45vh;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`,X7=v(b7)`
  position: absolute;
  bottom: 0;
  z-index: 1;
  @media screen and (max-width: 767px) {
    left: 50%;
    bottom: 14px;
    transform: translate(-50%);
  }
`;function Y7(){return s(Z7,{children:s(re,{children:S(Q7,{children:[S(G7,{children:[s(Gr,{children:"\u041F\u043E\u0434\u0430\u0440\u0443\u0439 \u0434\u0440\u0443\u0433\u0443 \u0448\u0430\u043D\u0441, \u0432\u0440\u044F\u0442\u0443\u0439 \u0442\u0432\u0430\u0440\u0438\u043D\u0443!"}),s("p",{children:"\u0414\u043E\u043F\u043E\u043C\u043E\u0436\u0438 \u0434\u043E\u043C\u0430\u0448\u043D\u0456\u043C \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0441\u044F \u0434\u043E\u0434\u043E\u043C\u0443. \u041C\u0438 \u0440\u043E\u0437\u0434\u0456\u043B\u044F\u0454\u043C\u043E \u0449\u0430\u0441\u0442\u044F, \u043E\u0431'\u0454\u0434\u043D\u0443\u044E\u0447\u0438 \u0442\u0432\u0430\u0440\u0438\u043D \u0442\u0430 \u0457\u0445 \u0433\u043E\u0441\u043F\u043E\u0434\u0430\u0440\u0456\u0432."})]}),s(K7,{}),s(X7,{})]})})})}const q7=v.div`
  color: ${({theme:e})=>e.colors.dark};
  margin-top: ${({theme:e})=>e.headerHeight};
`,J7=v.div`
  display: grid;
  /* grid-template-rows: repeat(3, calc(100vh - 100px)); */
  grid-template-areas: 'main' 'dontation' 'shelterBlock';
`;var ec="/Big-lapa/assets/shelter-events.09b51187.png";const tc=v.section`
  background-image: url(${ec});
  background-repeat: no-repeat;
  background-position: right bottom;
  padding-top: 120px;
  padding-bottom: 90px;

  @media screen and (max-width: 1279px) {
    padding: 100px 0;
    background-image: none;
  }

  @media (max-width: 767px) {
    padding: 120px 0 40px;
  }
`,nc=v(re)`
  @media (max-width: 1279px) {
    padding: 0 72px;
  }
  @media (max-width: 767px) {
    padding: 0 16px;
  }
`,rc=v(tt)`
  text-align: center;
  margin-bottom: 30px;
`,uc=v.p`
  text-align: center;
  margin-bottom: 29px;
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  @media (max-width: 1279px) {
    margin-bottom: 16px;
  }
`,ic=v.p`
  text-align: center;
  margin-bottom: 40px;
  @media (max-width: 767px) {
    margin-bottom: 28px;
  }
`,oc=v(Qr)`
  width: 444px;
  height: 56px;
  display: inline-block;
  &:invalid {
    border-color: #ff4141;
    background-color: #ffebeb;
  }
  &:focus {
    border: 2px solid ${({theme:e})=>e.colors.yellow};
  }
  &:disabled {
    border: none;
  }

  @media (max-width: 767px) {
    width: 100%;
    max-width: 361px;
  }
`,lc=v(be)`
  @media (max-width: 767px) {
    width: 100%;
    max-width: 361px;
  }
`,ac=v.form`
  display: flex;
  justify-content: center;
  gap: 40px;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;function sc(){return s(tc,{children:S(nc,{children:[s(rc,{children:"\u041F\u043E\u0434\u0456\u0457 \u043F\u0440\u0438\u0442\u0443\u043B\u043A\u0443"}),s(uc,{children:"\u0421\u0442\u0435\u0436\u0442\u0435 \u0437\u0430 \u043E\u0441\u0442\u0430\u043D\u043D\u0456\u043C\u0438 \u043F\u043E\u0434\u0456\u044F\u043C\u0438 \u043F\u0440\u0438\u0442\u0443\u043B\u043A\u0443"}),s(ic,{children:"\u0417\u0430\u043B\u0438\u0448\u0442\u0435 \u0441\u0432\u0456\u0439 email \u0456 \u043C\u0438 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u0438\u043C\u043E \u0432\u0430\u043C \u043F\u0440\u043E \u043D\u043E\u0432\u0438\u043D\u0438 \u043F\u0440\u0438\u0442\u0443\u043B\u043A\u0443"}),S(ac,{children:[s(oc,{type:"email",placeholder:"email@gmail.com"}),s(lc,{children:"\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438"})]})]})})}var cc="/Big-lapa/assets/dog1.fb33c49d.png",dc="/Big-lapa/assets/dog2.b642c612.png",pc="/Big-lapa/assets/dog3.28c40050.png",fc="/Big-lapa/assets/dog4.7f8b8c96.png",yo="/Big-lapa/assets/rectangle2.c1bba7be.png";const hc=v.section`
  padding: 120px 0;

  @media (max-width: 767px) {
    padding: 80px 0;
  }
`,mc=v(re)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5.5%;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }

  @media (max-width: 767px) {
    gap: 30px;
  }
`,gc=v.div`
  background-image: url(${yo}), url(${yo});
  background-repeat: no-repeat;
  background-position: top right, bottom left;
  background-size: 75%;

  flex: 0 1 50%;
  display: flex;
  gap: 9%;
  padding: 44px 32px 104px;
  max-width: 576px;

  div {
    display: flex;
    flex-direction: column;
    gap: 44px;
  }

  div:nth-child(2) {
    margin-top: 87px;
  }

  @media (max-width: 1439px) {
    padding-bottom: 67px;
  }

  @media (max-width: 1024px) {
    padding-bottom: 104px;
    width: 100%;
  }

  @media (max-width: 767px) {
    padding: 26px 37px 18% 19px;
    gap: 9%;

    div {
      gap: 27px;
    }

    div:nth-child(2) {
      margin-top: 17%;
    }
  }
`,z0=v.img`
  width: 100%;
`,Cc=v.div`
  flex: 0 0 60%;
  max-width: 624px;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`,vc=v(tt)`
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 767px) {
    margin-bottom: 25px;
  }
`,T1=v.p`
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`;function xc(){return s(hc,{children:S(mc,{children:[S(gc,{children:[S("div",{children:[s(z0,{src:cc,alt:"dog1"}),s(z0,{src:pc,alt:"dog3"})]}),S("div",{children:[s(z0,{src:dc,alt:"dog2"}),s(z0,{src:fc,alt:"dog4"})]})]}),S(Cc,{children:[s("li",{children:S(vc,{children:["\u041F\u043E\u0434\u0430\u0440\u0443\u0439 \u0441\u043E\u0431\u0430\u043A\u0430\u043C \u043D\u043E\u0432\u0443 \u043D\u0430\u0434\u0456\u044E ",s("br",{})," \u043D\u0430 \u0449\u0430\u0441\u043B\u0438\u0432\u0435 \u0436\u0438\u0442\u0442\u044F!"]})}),S("li",{children:[s(T1,{children:"\u041F\u0440\u0438\u0454\u0434\u043D\u0443\u0439\u0442\u0435\u0441\u044C \u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u0441\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0438 \u043B\u044E\u0434\u0435\u0439 \u0437 \u0432\u0435\u043B\u0438\u043A\u0438\u043C \u0441\u0435\u0440\u0446\u0435\u043C, \u044F\u043A\u0456 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u044E\u0442\u044C \u0446\u0438\u043C \u0431\u0435\u0437\u0437\u0430\u0445\u0438\u0441\u043D\u0438\u043C \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C \u0437\u043D\u0430\u0439\u0442\u0438 \u0441\u0432\u043E\u0457\u0445 \u0432\u0456\u0440\u043D\u0438\u0445 \u0434\u0440\u0443\u0437\u0456\u0432. \u041D\u0430\u0448 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u0434\u043B\u044F \u0437\u0431\u043E\u0440\u0443 \u043F\u043E\u0436\u0435\u0440\u0442\u0432 \u0454 \u0437\u0432`\u044F\u0437\u043A\u043E\u043C \u043C\u0456\u0436 \u0432\u0430\u043C\u0438 \u0442\u0430 \u0446\u0438\u043C\u0438 \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C\u0438, \u044F\u043A\u0456 \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u044E\u0442\u044C \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0438. \u0420\u0430\u0437\u043E\u043C \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0437\u043C\u0456\u043D\u0438\u0442\u0438 \u0457\u0445\u043D\u0454 \u0436\u0438\u0442\u0442\u044F \u043D\u0430 \u043A\u0440\u0430\u0449\u0435"}),s(T1,{children:"\u041A\u043E\u0436\u0435\u043D \u0432\u0430\u0448 \u0432\u043A\u043B\u0430\u0434 \u043C\u0430\u0454 \u0432\u0435\u043B\u0438\u043A\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043F\u043E\u043B\u0456\u043F\u0448\u0435\u043D\u043D\u044F \u0457\u0445\u043D\u044C\u043E\u0433\u043E \u0434\u043E\u0431\u0440\u043E\u0431\u0443\u0442\u0443. \u0412\u0430\u0448\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454 \u043D\u0430\u043C \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0443\u0432\u0430\u0442\u0438 \u0431\u0435\u0437\u043F\u0435\u0440\u0435\u0431\u0456\u0439\u043D\u0443 \u043C\u0435\u0434\u0438\u0447\u043D\u0443 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443, \u043D\u0430\u043B\u0435\u0436\u043D\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F, \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u0439 \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A \u0442\u0430 \u0432\u0441\u0435\u0431\u0456\u0447\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434 \u0434\u043B\u044F \u0441\u043E\u0431\u0430\u043A"}),s(T1,{children:"\u0412\u0430\u0448\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u043C\u0430\u0454 \u0432\u0435\u043B\u0438\u043A\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u0436\u0438\u0442\u0442\u044F \u0446\u0438\u0445 \u0442\u0432\u0430\u0440\u0438\u043D. \u041A\u043E\u0436\u0435\u043D \u0432\u0430\u0448 \u0432\u043D\u0435\u0441\u043E\u043A \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454 \u043D\u0430\u043C \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0441\u043E\u0431\u0430\u043A\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0443 \u043C\u0435\u0434\u0438\u0447\u043D\u0443 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443, \u043D\u0430\u043B\u0435\u0436\u043D\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F, \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0435 \u043C\u0456\u0441\u0446\u0435 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F \u0456 \u043D\u0430\u043B\u0435\u0436\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434."})]})]})]})})}var yc="/Big-lapa/assets/pic1.3bb1a2e6.png",wc="/Big-lapa/assets/pic2.6ca94d6e.png";const Ec=v.section`
  @media (max-width: 767px) {
    padding-bottom: 80px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-bottom: 100px;
  }
  @media (min-width: 1280px) {
    padding-bottom: 120px;
  }
`,Sc=v(tt)`
  text-align: center;
  margin-bottom: 60px;
`,kc=v.div`
  display: flex;
  justify-content: center;
  gap: 24px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 767px) {
    gap: 40px;
  }
`,wo=v.div`
  text-align: center;
  flex: 0 1 43%;
  @media (max-width: 1024px) {
    width: 75%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`,Eo=v.img`
  border-radius: 4px 4px 0 0;
  width: 100%;
`,So=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.green};
  height: 33%;
  padding: 24px 0;
  border-radius: 0 0 4px 4px;
`,ko=v(Je)`
  text-align: center;
  margin-bottom: 16px;
  color: ${({theme:e})=>e.colors.background};
  @media (max-width: 767px) {
    margin-bottom: 8px;
  }
`,Fo=v.p`
  color: ${({theme:e})=>e.colors.background};
  max-width: 440px;
`;function Fc(){return s(Ec,{children:S(re,{children:[s(Sc,{children:"\u042F\u043A \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A "}),S(kc,{children:[S(wo,{children:[s(Eo,{src:yc,alt:"bowl with dog food"}),S(So,{children:[s(ko,{children:"\u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430"}),s(Fo,{children:"\u041E\u0434\u0438\u043D \u043A\u043B\u0456\u043A - \u043E\u0434\u043D\u0430 \u043F\u043E\u0440\u0446\u0456\u044F \u043A\u043E\u0440\u043C\u0443"})]})]}),S(wo,{children:[s(Eo,{src:wc,alt:"dog toys"}),S(So,{children:[s(ko,{children:"\u041A\u043E\u0440\u043C, \u043B\u0456\u043A\u0438, \u0456\u0433\u0440\u0430\u0448\u043A\u0438"}),s(Fo,{children:"\u0417 \u0440\u0430\u0434\u0456\u0441\u0442\u044E \u043F\u0440\u0438\u0439\u043C\u0430\u0454\u043C\u043E \u043A\u043E\u0440\u043C, \u0437\u0430\u0441\u043E\u0431\u0438 \u0434\u043B\u044F \u043E\u0431\u0440\u043E\u0431\u043A\u0438, \u043B\u0456\u0436\u0430\u043A\u0438 \u0442\u0430 \u0456\u0433\u0440\u0430\u0448\u043A\u0438 \u0434\u043B\u044F \u0446\u0443\u0446\u0435\u043D\u044F\u0442"})]})]})]})]})})}const Dc=v.section`
  padding: 120px 0;

  @media (max-width: 1279px) {
    padding: 100px 0;
  }
  @media (max-width: 767px) {
    padding: 80px 0;
  }
`,Lc=v(tt)`
  text-align: center;
`,Ac=v(ve)`
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  column-gap: 60px;
  flex-wrap: wrap;
`;var Pc="/Big-lapa/assets/Purina-logo.d90bc93b.png",Bc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAAvCAYAAADKMxXkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAvpSURBVHgB7Vx9dhM5Ei+1nQHCvofnj90N4at9AswJMCcgOQHmBJgTJDnBmBPEnCDhBIQTJJzA5jNh9w963tvJZIi7tfVrSW61rLY7JjPjDvm958SWW62WqlRVqg8TXeISPwoG1GjQJVIE9INgQCvhB7r1ukbLX9/TqnxHN3+hHxyCKg7s5ICWu8zF9yVRFFOy1aSjoXsdE3zA/0K7jSe/eYc+b7nXfqDbbUnyiSDZSEjs3qNPL+kCovLE9xAVDPDAZgBFzOS1p/vwLn1u2g0DurlWI7FjtzEj9O7R4XO6YKi02H9Ptzrk7GZGg4n3zG7gHRz5+ktPe52CDbdNkOh+ppv36IKh0sRnohYQROSMutv06YBJPZy8Tu5OtEwyU4qYpLe9ylhY4kOXv6PVzQ+0ug9DbUD/WnOvGVHyxteXRfye28bEe8TfmPaIr9m8R0dbk72Tg8n7yeGITt667e/oVpefbwevAf2zRRXDwup8EJwXvW23xTRab9J/cruVRT9b7bKbtST9u3T0lOYETgWsNtg+EKFuAqN0mVFyRh8TvseS59ms51tkLCTxiw00uXeXDh+5rQO61VqiGNb+8A4dvSm6L6RJnf6R7tA79HGPpj7DykNenPCUTl41KYry9wGDBIOyz7eoqFOlILyitZnqdDoYUBjCCGRddqD0fAZlxQfbzFSpPcAqZZjQ8QOXsB+ZkSTbDJo5vIxUp3rI9yn9fIuKhdT5I6oz4YTPQi8UqbAPavSNd6PcTkju204cZgqcAKAexoYgdnWNrm1k16yEfI999IXU4feDIj2uns+HsU1RCSwk8Zs0xFn9qW2hw+iCA8d3/Xu6s8bEzB3RcDxjvfwE7+s0AhHDyZ5ibESyVNjge7Sy/mCOpdc+dzCeDwaj3aaeT1bKF7Cw1n6TDndZfzYFJe2YxAN2sjThuIFYniRI8tB3D6ENxhGNhr7vnXN+x3MJj7MU2g1QLRgfJwVmRn4+yd7FpJPQ7w98nsVFxsKf82HAQaezUddhff4VYln757cNE/AuH/p7K+JqonhUhuxl771qhlFL27PYwLeBGZ/oJLpDhy9u80nAtR2qgEo4eZR1TTmdzejUaTk9arEOfulx4rDqkC/MB3bjrsv0SJjq5V1IFPv4Jj0qBW5ds5tZLbhHTzYsr014A6uESvj2odP5FL3j+Wrsm9fHrw0+7rV4Uqx/xVbTsfhnj7PS4SV5AinAzHBgnEBQNZA4vj48fmXjI5U46sV0GtU8QsrW2XqHTjh3oKPZ4OOjmc89m0SCxfqI/ncAsc3OoT439t2rTin2js+onKi3UQniM2H33tPNoeV105j0zSsHUfxYUNCSqfX+rSEL7ywg7lmkL/Ouv86MAJUQ7LGB+Mo23vCex+fvRDs3OiU9qjAqI7KMWCetd7Hw9+hLqtMNwZlwHccumBu8MAccy+8lFL8B8ZWv4Bt8B2swJFmS9P2xgeqg0vF8uHVZdP3ixgA0WCTL1PMnUks+0CI60cxhPscmktdydzYAlzH/e8newF4VLfppqCzxfYEVUgTvZ8RO2kr0+8O0BtjlfB3Cvq+U5AjgN4ADaCxFwAQJjZ5XKXAzC5UkvkrikNvms0x3OM7sATtdkMiRE/0RCCdS4qZX692LmL8M4ce3PXvpN3wURPqWoJjfig3b1ojp+OeLIgEqFthRiCkeauubjTTqMQEFG3g9RXQQV+4FLAECEnurdPiuzD0RxWPmQe5eh+/H7mK5JikA03TZvuDjY7ApvQkh1UVlxb7y7l1tIVJHSqzjbM4G2smL792ZYASZGo/K5QtnT5I6jE6ii6b3Kwu4W00a9p+Rj8/3fsxHvAHGeE//fkyXWBwof/vKQ/oTgTE+0soTusQlLnGJS/wdMPH0fFujwbp5DSKa/gJgPDwHnRGz+sFTiXm4fXC09c1t2r18/dDGYzwzSS7CNKLkiT+gMdRfpO7NolKlrExKPFSOFByzRKT6Ud/uZzJxZ1W+IGaP0K1IU6WPH7mWNVK1kLGjHC6n603674Fy+9b2Mb5qn8zLKwNToqXdx2HRXFSEj16r8cpX8pgcwqLnzCeFZomgdkWS8THg2oCCHfgn7LWwx7P6cWj7uIl+H2hVh6DhAIvVYZmJ+FqnQYWmswqNyr5KWphcKA6G7CtCYLGMUyVdkDb6qRy4lRAv435VqVX+AklFeGkWh922157kJ3OrY1K1kGJVp6XU+q7RUsuMr9qv3qczQO0GMCeyhWUnWwN3Liqfj9seZ+Ol8+mWGcfOIVTPufws/32tnX1Sbma9a0PTukTX9ZyzlDPcK6ClHc9px/RrmH7q+eHcgotbNAK9qC0qRifjGMXBOq06nNJH58AFvCPjhp1ooRZsddO+NiN8hlHqajXfYxHkhn8cOfe5W+225f2C2IA1hsnnm0zo5PnwMXOlPWscctaLGXxzXjXFY4bkPJ/LTD4w3d6JNCglGhy5fBtwR7sTwppdoTJehlkn6ppJaKeKDXjUeqh4pTQWnvOCNcCVLGDW8wxAG4YBfITnCF3XDqkii4ZmMNs8UFHCfJEnv/pFczHSxgWL4O15/AwsDbbpnAAazXoG5CuwOn0R029biFHUmetb2Q2S7l2d2sSEfqsqV1I0UKg4Sv3ctt886cd08nxSdwkd+jRcKR+PmAFqWlfq9g2WKPd5/LX8JFBG9WWcfqWZJKRzhs4O6mTjStad8pHNdCqMe7qhK4KiESUv6xRMnPl1GvgOX/KIzgTRhtRAvgJ9PxoqrSyaaoPYtMqlp9gitO64/f+g0c92qjMWC2VRrnGFxYvpp6d2QiS4EilV7JNft6+VmkGse/bsGLmt588bHLTJEdElPIAU7bv06TkMLWU0TcvOFe2y+t9GoDbKuQAqdZYKyo9tQVKth6MAFp13oC2Sojpdadi7njv2im6KRaN8OlQqOcDhsiC3HZE523J29fz5B1VEaI2+O42wYPCiE4QcRwuN/p9dsKmikOM+rXmYxrrX0P5cS6VzOQT2DoX4UqlJ0gRL9ACT6UrcNqTpyFW1KslBxATu+QoeeOet5yeR1/OBssTPDba6YwIc0JxIKFm317DA8s5BpPO3112w9S5u0BwQabKJsFPQ22V3f0AzrGUjil2rmkOcIU19qHzt/BWqfzXv3fQnJvSmvfM8ep4NlaulQrPlYaul70n9uoo//fFdlf6fasgJlR1sr0GDmWju3R/T0laeAYNShqSTkooExnzxQqKPXKe0NMxd6ehrF9KqgMHOLhtXL9DzHVWHd56w6/BFZ96ooK4PdAgn1maJciUBbZUxv1Gry8e2znovh/hiqGrk7AvUMUbpcbsQEQZO/rxuwBPvk/UAzOl7VAL63PuX/EqWoNqu9ZGt+mXvuHBowQmkfiCi/LkconyW/ufdfm61fS4zlYG78yPUyNk6RHmQVGVKTDInrvV5fWCMRDAD3IoiLXwYIyoqsHSh9Pz5ZN/OgqfKB88/gN/b+NiN50+7ptu+Y94UNGbpf3XEO7/K3rMyUyDyhkf6Hscbx4rtmvOoa6zZRqLrIgbYYbNZpoARCZlO37Skyn6RyqSdCknBnkq+UK+iUmtVCSyfunOBO1d5MMWO6/lLPEbu5DPmN06RRDFQzyCm2l1lcVZmws73DuxasTXN9TDWXAYoAPRQx3bYFCGhUWRn4qpy5+OnKNK0XzQH7DiACyxWnJ4yZh4jI3gd3Z9mAdxnxMZxCNCZdmNsDJErGM0fBc8KHzNhfX3XBkzksQ9d0GjXfih2yjzPHij7kSNTnkye0ibS7l78Fp5vsTKoBVKEFm+tBYuUw2XyXC2twkvzrGV8+8mUYynUnPqxpnQuUfFcFBOzl/OVWVzpEM1AEUAxFAipJF823xEEnYUR/fTCYkCef6zV5NXIbj+l+I2ez5hmTJfd/HyOhvmTBCKEX175nlPgD4ofiH4b+hYcRs4VEnKata6KJ+Ib7GAobdUDSMHCr1yZcd3PZfoAyLULxsUYecz6nR7f/fF/RLVfp60Jy8LGtEJQpeuvh/Y1s+YHR9gf9PuvnlDvfZaEb9w5s5qJiuaG8a/QtRtnocclfiD8H13w8JVtly6uAAAAAElFTkSuQmCC";function zc(){return s(Dc,{children:S(re,{children:[s(Lc,{children:"\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u0438"}),s(Ac,{children:[{id:1,src:Pc},{id:2,src:Bc}].map(t=>s("img",{src:t.src,alt:"partner"},t.id))})]})})}function $c(){return s(q7,{"data-testid":"home-page",children:S(J7,{children:[s(Y7,{}),s(xc,{}),s(Fc,{}),s(V7,{}),s(sc,{}),s(zc,{})]})})}var Tc="/Big-lapa/assets/dogM2x.b4dcdf99.png";const Do=e=>m.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.exports.createElement("path",{d:"M21.9999 16.9201V19.9201C22.0011 20.1986 21.944 20.4743 21.8324 20.7294C21.7209 20.9846 21.5572 21.2137 21.352 21.402C21.1468 21.5902 20.9045 21.7336 20.6407 21.8228C20.3769 21.912 20.0973 21.9452 19.8199 21.9201C16.7428 21.5857 13.7869 20.5342 11.1899 18.8501C8.77376 17.3148 6.72527 15.2663 5.18993 12.8501C3.49991 10.2413 2.44818 7.27109 2.11993 4.1801C2.09494 3.90356 2.12781 3.62486 2.21643 3.36172C2.30506 3.09859 2.4475 2.85679 2.6347 2.65172C2.82189 2.44665 3.04974 2.28281 3.30372 2.17062C3.55771 2.05843 3.83227 2.00036 4.10993 2.0001H7.10993C7.59524 1.99532 8.06572 2.16718 8.43369 2.48363C8.80166 2.80008 9.04201 3.23954 9.10993 3.7201C9.23656 4.68016 9.47138 5.62282 9.80993 6.5301C9.94448 6.88802 9.9736 7.27701 9.89384 7.65098C9.81408 8.02494 9.6288 8.36821 9.35993 8.6401L8.08993 9.9101C9.51349 12.4136 11.5864 14.4865 14.0899 15.9101L15.3599 14.6401C15.6318 14.3712 15.9751 14.1859 16.3491 14.1062C16.723 14.0264 17.112 14.0556 17.4699 14.1901C18.3772 14.5286 19.3199 14.7635 20.2799 14.8901C20.7657 14.9586 21.2093 15.2033 21.5265 15.5776C21.8436 15.9519 22.0121 16.4297 21.9999 16.9201Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Nc=e=>m.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.exports.createElement("path",{d:"M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),m.exports.createElement("path",{d:"M22 6L12 13L2 6",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Rc=e=>m.exports.createElement("svg",{width:26,height:44,viewBox:"0 0 26 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.exports.createElement("path",{d:"M24 2H18C15.3478 2 12.8043 3.05357 10.9289 4.92893C9.05357 6.8043 8 9.34784 8 12V18H2V26H8V42H16V26H22L24 18H16V12C16 11.4696 16.2107 10.9609 16.5858 10.5858C16.9609 10.2107 17.4696 10 18 10H24V2Z",stroke:"#2E2E2E",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})),Mc=e=>m.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.exports.createElement("path",{d:"M11.6 0H28.4C34.8 0 40 5.2 40 11.6V28.4C40 31.4765 38.7779 34.427 36.6024 36.6024C34.427 38.7779 31.4765 40 28.4 40H11.6C5.2 40 0 34.8 0 28.4V11.6C0 8.52349 1.22214 5.57298 3.39756 3.39756C5.57298 1.22214 8.52349 0 11.6 0ZM11.2 4C9.29044 4 7.45909 4.75857 6.10883 6.10883C4.75857 7.45909 4 9.29044 4 11.2V28.8C4 32.78 7.22 36 11.2 36H28.8C30.7096 36 32.5409 35.2414 33.8912 33.8912C35.2414 32.5409 36 30.7096 36 28.8V11.2C36 7.22 32.78 4 28.8 4H11.2ZM30.5 7C31.163 7 31.7989 7.26339 32.2678 7.73223C32.7366 8.20107 33 8.83696 33 9.5C33 10.163 32.7366 10.7989 32.2678 11.2678C31.7989 11.7366 31.163 12 30.5 12C29.837 12 29.2011 11.7366 28.7322 11.2678C28.2634 10.7989 28 10.163 28 9.5C28 8.83696 28.2634 8.20107 28.7322 7.73223C29.2011 7.26339 29.837 7 30.5 7ZM20 10C22.6522 10 25.1957 11.0536 27.0711 12.9289C28.9464 14.8043 30 17.3478 30 20C30 22.6522 28.9464 25.1957 27.0711 27.0711C25.1957 28.9464 22.6522 30 20 30C17.3478 30 14.8043 28.9464 12.9289 27.0711C11.0536 25.1957 10 22.6522 10 20C10 17.3478 11.0536 14.8043 12.9289 12.9289C14.8043 11.0536 17.3478 10 20 10ZM20 14C18.4087 14 16.8826 14.6321 15.7574 15.7574C14.6321 16.8826 14 18.4087 14 20C14 21.5913 14.6321 23.1174 15.7574 24.2426C16.8826 25.3679 18.4087 26 20 26C21.5913 26 23.1174 25.3679 24.2426 24.2426C25.3679 23.1174 26 21.5913 26 20C26 18.4087 25.3679 16.8826 24.2426 15.7574C23.1174 14.6321 21.5913 14 20 14Z",fill:"#2E2E2E"})),Ic=v.section`
  margin-bottom: 80px;
  @media (min-width: 767px) {
    margin-bottom: 100px;
  }
  @media (min-width: 1279px) {
    margin-bottom: 80px;
  }
`,Oc=v(tt)`
  text-align: center;
  margin-bottom: 60px;
`,_c=v.img`
  width: 100%;
  max-width: 766px;
  @media (min-width: 767px) {
    width: 100%;
    max-width: 1200px;
  }
  @media (min-width: 1279px) {
    width: 100%;
    max-height: 356px;
  }
`,jc=v.ul`
  margin: 38px 14px 0;
  @media (min-width: 767px) {
    margin: 38px 32px 0;
  }
  @media (min-width: 1279px) {
    margin: 24px 32px 0;
  }
  @media (min-width: 1439px) {
    margin: 38px 32px 0;
  }
`,$0=v.li`
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
`,Hc=v.div`
  display: flex;
  gap: 20px;
  margin-left: 14px;
  @media (min-width: 767px) {
    margin-left: 32px;
  }
  @media (min-width: 1279px) {
    margin-left: 32px;
  }
`,Uc=v(Rc)`
  &:hover path {
    stroke: ${({theme:e})=>e.colors.yellow};
  }
`,Vc=v(Mc)`
  &:hover path {
    fill: ${({theme:e})=>e.colors.yellow};
  }
`,Wc=v.div`
  border: 1px solid ${({theme:e})=>e.colors.grey};
  padding-bottom: 64px;
  @media (min-width: 1279px) {
    min-width: 588px;
    flex-basis: 100%;
  }
  @media (min-width: 1439px) {
    min-width: 622px;
    flex-basis: 100%;
  }
`,bc=v.div`
  border: 1px solid ${({theme:e})=>e.colors.grey};
  padding: 40px 14px 64px;
  @media (min-width: 767px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1279px) {
    padding-left: 32px;
    padding-right: 32px;
    min-width: 588px;
    flex-basis: 100%;
  }
  @media (min-width: 1439px) {
    min-width: 622px;
    flex-basis: 100%;
  }
`,Zc=v.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 40px 0 44px;
`,Qc=v.div`
  display: flex;
  flex-direction: column;
  gap: 61px;
  @media (min-width: 1279px) {
    flex-direction: row;
    gap: 24px;
  }
`,Lo=v(Qr)`
  width: 100%;
`,Gc=v.textarea`
  width: 100%;
  height: 175px;
  padding: 12px;
  background-color: ${({theme:e})=>e.colors.background};
  caret-color: ${({theme:e})=>e.colors.yellow};
  color: ${({theme:e})=>e.colors.dark};
  padding: 12px;
  border: 1px solid ${({theme:e})=>e.colors.yellow};
  border-radius: 4px;
  &:focus {
    border: 2px solid ${({theme:e})=>e.colors.yellow};
  }
`,Kc=v(be)`
  width: 100%;
`;function Xc(){return s(Ic,{children:S(re,{children:[s(Oc,{children:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"}),S(Qc,{children:[S(Wc,{children:[s(_c,{src:Tc,alt:"cute dog"}),S(jc,{children:[S($0,{children:[s(Do,{})," ",s("p",{children:"+38 063 628 6630"})]}),S($0,{children:[s(Do,{})," ",s("p",{children:"+38 063 628 6630"})]}),S($0,{children:[s(Nc,{})," ",s("p",{children:"elektronna@poshta.com"})]}),S($0,{children:[s(xa,{})," ",s("p",{children:"\u0410\u0434\u0440\u0435\u0441\u0430: \u043C\u0456\u0441\u0442\u043E \u041B\u044C\u0432\u0456\u0432, \u0432\u0443\u043B. \u0413\u043E\u0440\u043E\u0434\u043E\u0446\u044C\u043A\u0430, 397"})]})]}),S(Hc,{children:[s(Vc,{}),s(Uc,{})]})]}),S(bc,{children:[s(tt,{marginBottom:"24px",children:"\u0417\u0432`\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043D\u0430\u043C\u0438"}),s("p",{children:"\u042F\u043A\u0449\u043E \u0437\u0430\u043B\u0438\u0448\u0438\u043B\u0438\u0441\u044F \u043F\u0438\u0442\u0430\u043D\u043D\u044F, \u043D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u043D\u0430\u043C"}),S("form",{children:[S(Zc,{children:[s(Lo,{className:"name",placeholder:"\u0406\u043C\u2019\u044F"}),s(Lo,{type:"email",className:"email",placeholder:"\u041F\u043E\u0448\u0442\u0430"}),s(Gc,{name:"questions",placeholder:"\u041F\u0438\u0442\u0430\u043D\u043D\u044F"})]}),s(Kc,{type:"submit",children:"\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438"})]})]})]})]})})}var Yc="/Big-lapa/assets/lapasS.0d643802.png",qc="/Big-lapa/assets/lapaM12x.a8af177e.png",Jc="/Big-lapa/assets/lapaM22x.963d85d6.png",ed="/Big-lapa/assets/lapaL12x.af319c02.png",td="/Big-lapa/assets/lapaL22x.ce776028.png",nd="/Big-lapa/assets/lapaXL12x.cdb594b4.png",rd="/Big-lapa/assets/lapaXL22x.b91ba78e.png";const ud=v.section`
  background-image: url(${Yc});
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: contain;
  background-color: ${M.colors.green};
  color: ${M.colors.background};
  margin-bottom: 80px;
  padding-bottom: 18px;

  @media (min-width: 767px) {
    background-image: url(${qc}), url(${Jc});
    background-repeat: no-repeat;
    background-position: 10% 0, 90% 100%;
    background-size: 60%;
    margin-bottom: 100px;
    padding-bottom: 32px;
  }
  @media (min-width: 1279px) {
    background-image: url(${ed}), url(${td});
    background-repeat: no-repeat;
    background-position: 10% 0, 90% 100%;
    background-size: 60%;
    margin-bottom: 120px;
    padding-bottom: 52px;
  }
  @media (min-width: 1439px) {
    background-image: url(${nd}), url(${rd});
    background-repeat: no-repeat;
    background-position: 0 0, 100% 100%;
    background-size: 60%;
    margin-bottom: 120px;
    padding-bottom: 44px;
  }
`,id=v(Gr)`
  text-align: center;
  margin-top: 60%;
  margin-bottom: 161px;
  @media (min-width: 767px) {
    text-align: left;
    margin-top: 18%;
    margin-bottom: 3%;
  }
  @media (min-width: 1279px) {
    text-align: left;
    margin-top: 23%;
    margin-bottom: 3%;
  }
  @media (min-width: 1439px) {
    text-align: left;
    margin-top: 23%;
    margin-bottom: 3%;
  }
`,od=v.div`
  display: flex;
  flex-direction: column;
  gap: 58px;
  align-items: center;
  @media (min-width: 767px) {
    align-items: flex-start;
    flex-direction: column-reverse;
    gap: 29px;
  }
  @media (min-width: 1279px) {
    align-items: flex-start;
    flex-direction: column-reverse;
    gap: 135px;
  }
  @media (min-width: 1439px) {
    align-items: flex-start;
    flex-direction: column-reverse;
    gap: 124px;
  }
`,ld=v(Jn)`
  text-align: center;
  padding: 15px 24px;
  border: 1px solid ${M.colors.background};
  border-radius: 4px;
  width: 157px;
  &:hover {
    border: 2px solid ${M.colors.background};
  }
  &:focus {
    border: 3px solid ${M.colors.background};
  }
`,ad=e=>m.exports.createElement("svg",{width:130,height:17,viewBox:"0 0 130 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.exports.createElement("rect",{x:.5,y:.5,width:16,height:16,rx:8,stroke:"#F9F9F9"}),m.exports.createElement("line",{x1:28,y1:8,x2:45,y2:8,stroke:"#F9F9F9"}),m.exports.createElement("rect",{x:56.5,y:.5,width:17,height:16,rx:8,stroke:"#F9F9F9"}),m.exports.createElement("line",{x1:85,y1:8,x2:102,y2:8,stroke:"#F9F9F9"}),m.exports.createElement("rect",{x:113,width:17,height:17,rx:8.5,fill:"#F9F9F9"}));function sd(){return s(ud,{children:S(re,{children:[S(id,{children:["\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0439 \u0434\u0440\u0443\u0433\u0430,",s("br",{})," \u0432\u0440\u044F\u0442\u0443\u0439 \u0442\u0432\u0430\u0440\u0438\u043D\u0443!"]}),S(od,{children:[s(ad,{}),s(ld,{to:".",end:!0,children:"\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"})]})]})})}const cd=v.div`
  color: ${({theme:e})=>e.colors.dark};
  margin-top: ${({theme:e})=>e.headerHeight};
`,dd=v.div`
  display: grid;
  /* grid-template-rows: repeat(3, calc(100vh - 100px)); */
  grid-template-areas: 'main' 'dontation' 'shelterBlock';
`;function pd(){return s(cd,{"data-testid":"contacts-page",children:S(dd,{children:[s(sd,{}),s(Xc,{})]})})}function fd(){return s("div",{"data-testid":"dog-page",children:s("p",{children:"Dog page"})})}const hd=v(re)`
  color: ${({theme:e})=>e.colors.dark};
  margin-top: ${({theme:e})=>e.headerHeight};
  padding: 95px 16px 117px;
  max-width: 624px;

  ${Je} {
    margin-bottom: 27px;
  }

  p {
    margin-bottom: 72px;
    font-size: ${({theme:e})=>e.fontSizes.bodyText};
    text-align: start;
  }

  ${be} {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 100px;
  }

  @media (max-width: 1279px) {
    padding-top: 0;
    padding-bottom: 40px;

    ${Je} {
      margin-bottom: 6px;
    }

    p {
      margin-bottom: 40px;
    }
  }

  @media (max-width: 767px) {
    padding-top: 160px;
    padding-bottom: 180px;

    ${Je} {
      margin-bottom: 20px;
    }

    p {
      font-size: ${({theme:e})=>e.fontSizes.mobileBodyText};
    }
  }
`,md=v(tt)`
  width: 100%;
  text-align: center;

  font-size: 200px;
  line-height: 100%;
  margin-bottom: 24px;
  margin-right: -0.1em;
  letter-spacing: 0.1em;

  @media (max-width: 1279px) {
    font-size: 120px;
    margin-right: -0.2em;
    margin-bottom: 8px;
  }

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`,gd=e=>m.exports.createElement("svg",{width:19,height:16,viewBox:"0 0 19 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.exports.createElement("path",{d:"M17.5 9C18.0523 9 18.5 8.55228 18.5 8C18.5 7.44772 18.0523 7 17.5 7V9ZM0.792892 7.29289C0.402369 7.68342 0.402369 8.31658 0.792892 8.70711L7.15685 15.0711C7.54738 15.4616 8.18054 15.4616 8.57107 15.0711C8.96159 14.6805 8.96159 14.0474 8.57107 13.6569L2.91421 8L8.57107 2.34315C8.96159 1.95262 8.96159 1.31946 8.57107 0.928932C8.18054 0.538408 7.54738 0.538408 7.15685 0.928932L0.792892 7.29289ZM17.5 7L1.5 7V9L17.5 9V7Z",fill:"#2E2E2E"}));function ka(){return s(hd,{"data-testid":"not-found-page",children:S(ve,{align:"center",direction:"column",children:[s(md,{children:"404"}),s(Je,{children:"Page not found"}),s("p",{children:"\u0412\u0438\u0431\u0430\u0447\u0442\u0435, \u0430\u043B\u0435 \u043C\u0438 \u043D\u0435 \u0437\u043C\u043E\u0433\u043B\u0438 \u0437\u043D\u0430\u0439\u0442\u0438 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443, \u044F\u043A\u0443 \u0432\u0438 \u0448\u0443\u043A\u0430\u0454\u0442\u0435. \u0421\u0445\u043E\u0436\u0435, \u0449\u043E \u0441\u0442\u0430\u043B\u0430\u0441\u044F \u043F\u043E\u043C\u0438\u043B\u043A\u0430 \u0430\u0431\u043E \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430 \u0431\u0443\u043B\u0430 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0430. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456\u0441\u0442\u044C URL-\u0430\u0434\u0440\u0435\u0441\u0438 \u0430\u0431\u043E \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0456\u043D\u0448\u0435 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F."}),S(be,{children:[s(gd,{}),"\u041D\u0430\u0437\u0430\u0434"]})]})})}const Cd=v.div`
  width: 100%;
  height: calc(100vh - 96px);
  padding: 40px 10px;

  @media screen and (max-width: 767px) {
    margin-left: 40px;
  }
`;function vd(){return s(Ea,{admin:!0})}const Fa=v.form`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`,Da=v(be)`
  width: 100%;
`,La=v(re)`
  width: 100%;
  max-width: 400px;
  padding: 0;
`,Aa=v(tt)`
  width: 100%;
  text-align: center;
`,xd=v(Qr)`
  width: 100%;
  margin-bottom: 32px;
`,yd=v.p`
  /* Desktop & 1280 px/Subheadline */
  font-size: 16px;
  margin-bottom: 12px;
`;function bn(e){const{placeholder:t,label:n}=e;return S(Ca,{children:[s(yd,{children:n}),s(xd,{placeholder:t||""})]})}function wd(){return S(Fa,{children:[s(Aa,{children:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F"}),s("p",{style:{fontWeight:"700",marginBottom:"20px"},children:"\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C"}),S(La,{children:[s(bn,{label:"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0441\u0442\u0430\u0440\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",placeholder:"*********"}),s(bn,{label:"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",placeholder:"*********"}),s(bn,{label:"\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044C \u043D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",placeholder:"*********"}),s(Da,{children:"\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438"})]})]})}function Ed(e,t){const[n,r]=m.exports.useState();return m.exports.useEffect(()=>{e==="contacts"&&t==="get"&&(async i=>{const l=await(await fetch("https://big-lapa-api-production.up.railway.app/api/main/get")).json();i(l)})(r)},[]),n}function Sd(e){(async()=>{try{const n=await fetch("https://big-lapa-api-production.up.railway.app/api/main/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(n.ok){const r=await n.json();console.log(r)}else console.error("Error:",n.status)}catch(n){console.error("Error:",n)}})()}function kd(){const e=Ed("contacts","get"),t=()=>{Sd({first_phoneNumber:"+380 068 123 111",second_phoneNumber:"+380 068 777 777",email:"email@one.com"})};return S(Fa,{onSubmit:()=>t(),children:[s(Aa,{children:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u0438 \u0442\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430"}),S(La,{children:[s(bn,{label:"\u041F\u0435\u0440\u0448\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443",placeholder:e==null?void 0:e.first_phoneNumber}),s(bn,{label:"\u0414\u0440\u0443\u0433\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443",placeholder:e==null?void 0:e.second_phoneNumber}),s(bn,{label:"\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430",placeholder:e==null?void 0:e.email}),s(Da,{type:"submit",children:"\u041E\u043D\u043E\u0432\u0438\u0442\u0438"})]})]})}function Fd(){return s("div",{children:"Reports"})}function Dd(){return s("div",{children:"Sliders"})}function Ld(){return s("div",{children:"Partners"})}function Ad(){return s(Cd,{children:S(G2,{children:[s(de,{index:!0,path:"/",element:s(vd,{})}),s(de,{path:"/partners",element:s(Ld,{})}),s(de,{path:"/sliders",element:s(Dd,{})}),s(de,{path:"/reports",element:s(Fd,{})}),s(de,{path:"/contacts",element:s(kd,{})}),s(de,{path:"/settings",element:s(wd,{})}),s(de,{path:"*",element:s(ka,{})})]})})}const Pd=e=>m.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:64,height:48,viewBox:"0 0 64 48",fill:"none",...e},m.exports.createElement("path",{d:"M11.2391 7.31769C11.2391 8.47842 10.9502 9.53822 10.3726 10.4971C9.79489 11.4391 9.02184 12.2298 8.05339 12.869C8.5631 12.9699 9.00485 13.1466 9.37863 13.3989C9.75242 13.6344 10.0582 13.9288 10.2961 14.2821C10.551 14.6353 10.7379 15.0391 10.8568 15.4933C10.9927 15.9307 11.0607 16.3933 11.0607 16.8811C11.0607 17.84 10.8313 18.6811 10.3726 19.4044C9.93082 20.111 9.35315 20.6997 8.63956 21.1708C7.92596 21.625 7.12742 21.9698 6.24393 22.2053C5.37742 22.424 4.51092 22.5334 3.64441 22.5334C3.16869 22.5334 2.69296 22.4997 2.21723 22.4324C1.7415 22.3651 1.29126 22.2474 0.866504 22.0792C0.713592 22.0287 0.586164 21.8268 0.484223 21.4736C0.382281 21.1035 0.29733 20.6577 0.229369 20.1362C0.178398 19.6147 0.135922 19.0512 0.101942 18.4456C0.0679611 17.84 0.0424757 17.2596 0.0254854 16.7045C0.00849513 16.1493 0 15.6615 0 15.2409C0 14.8204 0 14.526 0 14.3578C0 13.769 0 13.1802 0 12.5914C0 11.9858 0.0169903 11.3887 0.0509708 10.7999C0.0509708 10.6485 0.0509708 10.413 0.0509708 10.0933C0.0679611 9.77373 0.0764562 9.42046 0.0764562 9.03355C0.0934465 8.62982 0.110437 8.20926 0.127427 7.77188C0.161408 7.33451 0.195388 6.93078 0.229369 6.56069C0.28034 6.17378 0.339805 5.84575 0.407766 5.57659C0.492718 5.30744 0.586165 5.13921 0.688106 5.07193C1.07888 4.81959 1.51213 4.58408 1.98786 4.36539C2.46359 4.12988 2.95631 3.92802 3.46602 3.75979C3.97573 3.59157 4.48543 3.45699 4.99514 3.35606C5.50485 3.25513 5.98907 3.20466 6.44781 3.20466C7.07645 3.20466 7.67961 3.29718 8.25728 3.48222C8.85194 3.65045 9.36164 3.91119 9.7864 4.26446C10.2281 4.61773 10.5764 5.0551 10.8313 5.57659C11.1031 6.08126 11.2391 6.66162 11.2391 7.31769ZM7.00849 8.65505C7.00849 8.36907 6.91504 8.1588 6.72815 8.02422C6.55825 7.88964 6.32888 7.82235 6.04004 7.82235C5.80218 7.82235 5.54733 7.87282 5.27548 7.97375C5.02063 8.07468 4.79975 8.20926 4.61286 8.37749C4.56189 8.42795 4.51092 8.57094 4.45995 8.80645C4.42597 9.04196 4.39199 9.31112 4.35801 9.61392C4.34102 9.89989 4.32403 10.1775 4.30704 10.4466C4.30704 10.6989 4.30704 10.8672 4.30704 10.9513C4.30704 10.9849 4.30704 11.0438 4.30704 11.1279C4.30704 11.1952 4.30704 11.2709 4.30704 11.355C4.32403 11.4391 4.34102 11.5148 4.35801 11.5821C4.375 11.6494 4.40048 11.683 4.43446 11.683C4.7233 11.683 5.02063 11.5821 5.32645 11.3802C5.63228 11.1616 5.90412 10.9008 6.14199 10.598C6.39684 10.2784 6.60072 9.94195 6.75364 9.58868C6.92354 9.23542 7.00849 8.92421 7.00849 8.65505ZM6.90655 15.9475C6.90655 15.6615 6.80461 15.4596 6.60072 15.3419C6.39684 15.2241 6.16747 15.1652 5.91262 15.1652C5.67475 15.1652 5.4199 15.2241 5.14805 15.3419C4.8932 15.4428 4.68082 15.569 4.51092 15.7204C4.45995 15.754 4.41747 15.8381 4.38349 15.9727C4.3665 16.1073 4.34951 16.2587 4.33252 16.4269C4.33252 16.5783 4.32403 16.7297 4.30704 16.8811C4.30704 17.0157 4.30704 17.1082 4.30704 17.1587C4.30704 17.1923 4.30704 17.2596 4.30704 17.3605C4.30704 17.4615 4.30704 17.5708 4.30704 17.6886C4.32403 17.7895 4.34102 17.8904 4.35801 17.9914C4.39199 18.0755 4.42597 18.1175 4.45995 18.1175C4.69781 18.1175 4.96116 18.0502 5.25 17.9157C5.53883 17.7811 5.80218 17.6129 6.04004 17.411C6.2949 17.2091 6.49878 16.982 6.65169 16.7297C6.8216 16.4605 6.90655 16.1998 6.90655 15.9475Z",fill:"#758650"}),m.exports.createElement("path",{d:"M21.2039 5.09716C21.2039 5.41678 21.1274 5.70275 20.9745 5.95509C20.8386 6.20742 20.6517 6.42611 20.4138 6.61115C20.176 6.77938 19.9126 6.92236 19.6238 7.04012C19.3349 7.15787 19.0546 7.24199 18.7828 7.29245C18.7488 9.19336 18.6723 11.027 18.5534 12.7933C18.4514 14.5596 18.2815 16.3848 18.0437 18.2689H18.1966C18.4684 18.2689 18.7318 18.3026 18.9866 18.3699C19.2585 18.4203 19.4963 18.5213 19.7002 18.6727C19.9211 18.8072 20.091 18.9839 20.2099 19.2026C20.3459 19.4044 20.4138 19.6568 20.4138 19.9596C20.4138 20.3465 20.2864 20.6829 20.0315 20.9689C19.7937 21.2549 19.4709 21.4988 19.0631 21.7007C18.6723 21.9025 18.2306 22.0708 17.7378 22.2053C17.2451 22.3399 16.7524 22.4408 16.2597 22.5081C15.767 22.5922 15.2997 22.6511 14.858 22.6848C14.4163 22.7184 14.0595 22.7352 13.7876 22.7352C13.5837 22.7352 13.3289 22.7268 13.023 22.71C12.7342 22.6932 12.4539 22.6427 12.182 22.5586C11.9272 22.4745 11.7063 22.3483 11.5194 22.1801C11.3325 22.0119 11.2391 21.7848 11.2391 21.4988C11.2391 21.1455 11.3155 20.8343 11.4684 20.5652C11.6044 20.2792 11.7913 20.0269 12.0291 19.8082C12.267 19.5895 12.5303 19.4128 12.8192 19.2783C13.125 19.1437 13.4308 19.0428 13.7366 18.9755C13.8556 18.0502 13.966 17.1334 14.068 16.225C14.1699 15.2998 14.2379 14.3662 14.2718 13.4241C14.3058 12.4653 14.3398 11.5232 14.3738 10.598C14.4078 9.65597 14.4417 8.71393 14.4757 7.77188C14.3568 7.78871 14.2463 7.80553 14.1444 7.82235C14.0425 7.82235 13.949 7.82235 13.8641 7.82235C13.6262 7.82235 13.3714 7.79712 13.0995 7.74665C12.8277 7.69619 12.5728 7.61207 12.3349 7.49432C12.0971 7.35974 11.8932 7.19993 11.7233 7.01488C11.5704 6.82984 11.4939 6.59434 11.4939 6.30836C11.4939 5.7364 11.7318 5.26538 12.2075 4.89529C12.7002 4.5252 13.2779 4.23923 13.9405 4.03736C14.6201 3.83549 15.3082 3.70092 16.0048 3.63363C16.7014 3.54952 17.2621 3.50746 17.6869 3.50746C17.9247 3.50746 18.2391 3.52428 18.6298 3.55793C19.0206 3.59157 19.4029 3.66727 19.7767 3.78502C20.1675 3.90278 20.4988 4.06259 20.7706 4.26446C21.0595 4.46633 21.2039 4.74389 21.2039 5.09716Z",fill:"#758650"}),m.exports.createElement("path",{d:"M32.9781 16.1746C32.8252 16.9316 32.5789 17.7222 32.2391 18.5465C31.9162 19.354 31.4915 20.0941 30.9648 20.767C30.4551 21.4399 29.8434 21.9866 29.1298 22.4072C28.4162 22.8446 27.6007 23.0633 26.6832 23.0633C26.0036 23.0633 25.392 22.9287 24.8483 22.6595C24.3046 22.3904 23.8119 22.0287 23.3701 21.5745C22.9284 21.1203 22.5461 20.5988 22.2233 20.01C21.9005 19.4213 21.6286 18.8157 21.4077 18.1932C21.2039 17.554 21.051 16.9232 20.949 16.3007C20.8471 15.6783 20.7961 15.098 20.7961 14.5596C20.7961 13.8026 20.8641 12.9952 21 12.1372C21.1529 11.2625 21.3738 10.4046 21.6626 9.56345C21.9514 8.70552 22.3167 7.88964 22.7585 7.11582C23.2002 6.32518 23.7184 5.63547 24.3131 5.04669C24.9247 4.44109 25.6043 3.96166 26.3519 3.60839C27.1165 3.23831 27.966 3.05326 28.9005 3.05326C29.4951 3.05326 30.0473 3.17101 30.557 3.40652C31.0667 3.62521 31.5085 3.92801 31.8823 4.31492C32.256 4.68501 32.5449 5.1308 32.7488 5.65229C32.9696 6.17377 33.0801 6.7205 33.0801 7.29245V7.51955C33.0801 7.82235 33.0631 8.20085 33.0291 8.65505C33.0121 9.09243 32.9357 9.51299 32.7997 9.91672C32.6638 10.3205 32.4599 10.6737 32.1881 10.9765C31.9162 11.2625 31.534 11.4055 31.0412 11.4055C30.4466 11.4055 29.9963 11.2709 29.6905 11.0017C29.3847 10.7326 29.2318 10.2868 29.2318 9.66438C29.2318 9.42887 29.2403 9.19336 29.2573 8.95785C29.2743 8.72234 29.2827 8.48683 29.2827 8.25132C29.2827 7.89805 29.2233 7.6289 29.1043 7.44385C28.9854 7.24199 28.7391 7.14105 28.3653 7.14105C27.9405 7.14105 27.5582 7.27563 27.2184 7.54478C26.8786 7.81394 26.5813 8.16721 26.3264 8.60459C26.0716 9.04196 25.8507 9.53822 25.6638 10.0933C25.4769 10.6485 25.324 11.212 25.2051 11.784C25.0861 12.3391 25.0012 12.8774 24.9502 13.3989C24.8993 13.9204 24.8738 14.3662 24.8738 14.7363C24.8738 15.0391 24.8908 15.3923 24.9247 15.7961C24.9587 16.183 25.0267 16.5615 25.1286 16.9316C25.2476 17.2848 25.4175 17.5876 25.6383 17.84C25.8592 18.0923 26.148 18.2185 26.5048 18.2185C27.1165 18.2185 27.6092 18.0334 27.983 17.6633C28.3568 17.2764 28.6116 16.7886 28.7476 16.1998C28.5097 16.1662 28.2718 16.1157 28.034 16.0484C27.8131 15.9643 27.6007 15.8549 27.3968 15.7204C27.2099 15.569 27.057 15.3923 26.9381 15.1905C26.8192 14.9718 26.7597 14.7195 26.7597 14.4335C26.7597 13.912 26.9381 13.5083 27.2949 13.2223C27.6517 12.9195 28.0679 12.6924 28.5437 12.541C29.0364 12.3896 29.5376 12.2971 30.0473 12.2634C30.557 12.2129 30.9648 12.1877 31.2706 12.1877C31.4915 12.1877 31.8143 12.2045 32.2391 12.2382C32.6638 12.2718 33.0801 12.3475 33.4878 12.4653C33.9126 12.5662 34.2779 12.7176 34.5837 12.9195C34.8895 13.1213 35.0424 13.3821 35.0424 13.7017C35.0424 14.341 34.864 14.8961 34.5073 15.3671C34.1674 15.8213 33.6577 16.0905 32.9781 16.1746Z",fill:"#758650"}),m.exports.createElement("path",{d:"M12.1311 43.7103C12.1311 44.1309 11.9527 44.5262 11.5959 44.8963C11.2561 45.2664 10.8058 45.6028 10.2451 45.9056C9.70146 46.2084 9.0898 46.4776 8.41019 46.7131C7.73058 46.9318 7.05946 47.1168 6.39684 47.2682C5.73422 47.4365 5.10558 47.5626 4.51092 47.6467C3.93325 47.7308 3.47451 47.7729 3.13471 47.7729C2.81189 47.7729 2.46359 47.7393 2.08981 47.672C1.73301 47.6215 1.43568 47.4953 1.19782 47.2935C1.0619 47.1925 0.942964 46.9654 0.841023 46.6122C0.739081 46.2589 0.637137 45.8383 0.535196 45.3505C0.450244 44.8627 0.373788 44.3412 0.305827 43.786C0.237866 43.2141 0.178398 42.659 0.127427 42.1206C0.0934468 41.5823 0.0594706 41.0861 0.0254901 40.6319C0.00849982 40.1777 0 39.8244 0 39.5721C0 39.1515 0.00849982 38.6469 0.0254901 38.0581C0.0594706 37.4525 0.101943 36.8132 0.152914 36.1404C0.203884 35.4506 0.271844 34.7525 0.356796 34.046C0.441747 33.3395 0.535195 32.675 0.637137 32.0526C0.756069 31.4133 0.891989 30.8414 1.0449 30.3367C1.2148 29.832 1.39321 29.4367 1.5801 29.1507C1.90292 28.6965 2.31068 28.4694 2.8034 28.4694C3.1432 28.4694 3.43204 28.5872 3.6699 28.8227C3.90777 29.0414 4.09466 29.3358 4.23058 29.7059C4.38349 30.0591 4.49393 30.4629 4.56189 30.9171C4.64685 31.3544 4.70631 31.7918 4.74029 32.2292C4.77427 32.6666 4.79126 33.0703 4.79126 33.4404C4.79126 33.8105 4.79126 34.1049 4.79126 34.3236C4.79126 35.6357 4.75728 36.9394 4.68932 38.2347C4.63835 39.5132 4.61286 40.8085 4.61286 42.1206V43.1047C5.37743 42.8692 6.20995 42.6505 7.11044 42.4487C8.01092 42.23 8.86893 42.1206 9.68447 42.1206C9.9733 42.1206 10.2621 42.1375 10.551 42.1711C10.8568 42.2048 11.1201 42.2805 11.341 42.3982C11.5789 42.4991 11.7658 42.659 11.9017 42.8776C12.0546 43.0795 12.1311 43.3571 12.1311 43.7103Z",fill:"#758650"}),m.exports.createElement("path",{d:"M25.6383 43.458C25.6383 43.7945 25.6043 44.1982 25.5364 44.6692C25.4854 45.1402 25.375 45.5944 25.2051 46.0318C25.0352 46.4524 24.8058 46.814 24.517 47.1168C24.2281 47.4028 23.8459 47.5458 23.3701 47.5458C22.7415 47.5458 22.2658 47.3187 21.943 46.8645C21.6371 46.4103 21.4163 45.872 21.2803 45.2496C21.1444 44.6103 21.0595 43.9627 21.0255 43.3066C21.0085 42.6505 20.9915 42.1291 20.9745 41.7421C19.7512 41.944 18.5449 42.1206 17.3556 42.272C17.3216 42.659 17.2451 43.1384 17.1262 43.7103C17.0243 44.2823 16.8544 44.8374 16.6165 45.3757C16.3956 45.8972 16.0983 46.3514 15.7245 46.7383C15.3677 47.1253 14.926 47.3187 14.3993 47.3187C13.9915 47.3187 13.6687 47.1757 13.4308 46.8897C13.2099 46.5869 13.04 46.2337 12.9211 45.8299C12.8022 45.4262 12.7257 45.0141 12.6917 44.5935C12.6748 44.1561 12.6663 43.7945 12.6663 43.5085C12.6663 42.5496 12.7427 41.6076 12.8956 40.6823C13.0485 39.7403 13.2269 38.8067 13.4308 37.8815C13.5328 37.3936 13.6687 36.8217 13.8386 36.1656C14.0085 35.5095 14.2124 34.8366 14.4502 34.1469C14.7051 33.4404 14.9939 32.7507 15.3167 32.0778C15.6565 31.3881 16.0388 30.7741 16.4636 30.2358C16.8883 29.6975 17.3726 29.2601 17.9163 28.9236C18.4599 28.5872 19.0631 28.419 19.7257 28.419C20.3713 28.419 20.932 28.562 21.4078 28.8479C21.8835 29.1339 22.2997 29.5124 22.6565 29.9834C23.0133 30.4545 23.3107 30.9928 23.5485 31.5984C23.7864 32.1871 23.9818 32.7927 24.1347 33.4152C24.3046 34.0208 24.4405 34.618 24.5425 35.2067C24.6614 35.7955 24.7633 36.317 24.8483 36.7712C25.0692 37.8646 25.256 38.9749 25.409 40.102C25.5619 41.2122 25.6383 42.3309 25.6383 43.458ZM20.7196 37.3263C20.7196 37.1245 20.7027 36.7964 20.6687 36.3422C20.6517 35.8712 20.6007 35.4086 20.5158 34.9544C20.4308 34.4834 20.2949 34.0712 20.108 33.718C19.9381 33.3479 19.7002 33.1628 19.3944 33.1628C19.2245 33.1628 19.0631 33.2806 18.9102 33.5161C18.7573 33.7348 18.6213 34.0208 18.5024 34.374C18.3835 34.7105 18.273 35.089 18.1711 35.5095C18.0862 35.9301 18.0097 36.3338 17.9417 36.7207C17.8738 37.1076 17.8228 37.4609 17.7888 37.7805C17.7548 38.0833 17.7294 38.302 17.7124 38.4366C18.7318 38.3525 19.7342 38.2263 20.7196 38.0581V37.3263Z",fill:"#758650"}),m.exports.createElement("path",{d:"M39.1201 33.6675C39.1201 34.5759 38.9162 35.4675 38.5085 36.3422C38.1177 37.217 37.591 38.0076 36.9284 38.7141C36.2657 39.4039 35.5097 39.9758 34.6602 40.43C33.8107 40.8674 32.9357 41.1113 32.0352 41.1618C32.0182 41.4646 32.0012 41.8515 31.9842 42.3225C31.9842 42.7767 31.9587 43.2561 31.9077 43.7608C31.8568 44.2655 31.7803 44.7701 31.6784 45.2748C31.5934 45.7795 31.4575 46.2337 31.2706 46.6374C31.1007 47.0411 30.8713 47.3692 30.5825 47.6215C30.3107 47.8738 29.9709 48 29.5631 48C29.0874 48 28.7051 47.8402 28.4162 47.5206C28.1444 47.2178 27.932 46.8477 27.7791 46.4103C27.6432 45.9729 27.5497 45.5187 27.4988 45.0477C27.4478 44.5599 27.4138 44.1477 27.3968 43.8113C27.3628 43.3234 27.3374 42.844 27.3204 42.373C27.3204 41.902 27.3204 41.4225 27.3204 40.9347C27.3204 40.716 27.3204 40.3123 27.3204 39.7235C27.3204 39.1179 27.3204 38.4366 27.3204 37.6796C27.3374 36.9058 27.3543 36.1067 27.3713 35.2824C27.3883 34.4413 27.4138 33.6675 27.4478 32.961C27.4818 32.2376 27.5158 31.6236 27.5497 31.1189C27.6007 30.6143 27.6602 30.3199 27.7281 30.2358C27.7451 30.2189 27.7961 30.1853 27.8811 30.1348C27.966 30.0675 28.0595 30.0087 28.1614 29.9582C28.2633 29.8909 28.3568 29.832 28.4417 29.7816C28.5267 29.7311 28.5861 29.6975 28.6201 29.6806C29.4017 29.2433 30.2597 28.8648 31.1942 28.5451C32.1286 28.2255 33.0546 28.0657 33.9721 28.0657C34.7536 28.0657 35.4587 28.2255 36.0873 28.5451C36.733 28.8479 37.2767 29.2601 37.7184 29.7816C38.1772 30.2862 38.5255 30.8834 38.7633 31.5731C39.0012 32.246 39.1201 32.9441 39.1201 33.6675ZM34.7111 34.2479C34.7111 33.9114 34.6262 33.617 34.4563 33.3647C34.3034 33.1124 34.04 32.9862 33.6662 32.9862C33.3434 32.9862 33.0206 33.0535 32.6978 33.1881C32.375 33.3058 32.0777 33.432 31.8058 33.5666C31.8568 34.1553 31.8993 34.7273 31.9332 35.2824C31.9842 35.8376 31.9927 36.4095 31.9587 36.9983C32.2306 36.8637 32.5279 36.7123 32.8507 36.5441C33.1735 36.359 33.4708 36.1572 33.7427 35.9385C34.0145 35.7198 34.2439 35.4759 34.4308 35.2067C34.6177 34.9207 34.7111 34.6011 34.7111 34.2479Z",fill:"#758650"}),m.exports.createElement("path",{d:"M52.0922 43.458C52.0922 43.7945 52.0582 44.1982 51.9903 44.6692C51.9393 45.1402 51.8288 45.5944 51.6589 46.0318C51.489 46.4524 51.2597 46.814 50.9708 47.1168C50.682 47.4028 50.2997 47.5458 49.824 47.5458C49.1954 47.5458 48.7196 47.3187 48.3968 46.8645C48.091 46.4103 47.8701 45.872 47.7342 45.2496C47.5983 44.6103 47.5133 43.9627 47.4793 43.3066C47.4623 42.6505 47.4454 42.1291 47.4284 41.7421C46.2051 41.944 44.9988 42.1206 43.8094 42.272C43.7755 42.659 43.699 43.1384 43.5801 43.7103C43.4781 44.2823 43.3082 44.8374 43.0704 45.3757C42.8495 45.8972 42.5522 46.3514 42.1784 46.7383C41.8216 47.1253 41.3798 47.3187 40.8531 47.3187C40.4454 47.3187 40.1225 47.1757 39.8847 46.8897C39.6638 46.5869 39.4939 46.2337 39.375 45.8299C39.256 45.4262 39.1796 45.0141 39.1456 44.5935C39.1286 44.1561 39.1201 43.7945 39.1201 43.5085C39.1201 42.5496 39.1966 41.6076 39.3495 40.6823C39.5024 39.7403 39.6808 38.8067 39.8847 37.8815C39.9866 37.3936 40.1225 36.8217 40.2924 36.1656C40.4623 35.5095 40.6662 34.8366 40.9041 34.1469C41.159 33.4404 41.4478 32.7507 41.7706 32.0778C42.1104 31.3881 42.4927 30.7741 42.9174 30.2358C43.3422 29.6975 43.8264 29.2601 44.3701 28.9236C44.9138 28.5872 45.517 28.419 46.1796 28.419C46.8252 28.419 47.3859 28.562 47.8616 28.8479C48.3374 29.1339 48.7536 29.5124 49.1104 29.9834C49.4672 30.4545 49.7645 30.9928 50.0024 31.5984C50.2403 32.1871 50.4357 32.7927 50.5886 33.4152C50.7585 34.0208 50.8944 34.618 50.9963 35.2067C51.1153 35.7955 51.2172 36.317 51.3021 36.7712C51.523 37.8646 51.7099 38.9749 51.8628 40.102C52.0157 41.2122 52.0922 42.3309 52.0922 43.458ZM47.1735 37.3263C47.1735 37.1245 47.1565 36.7964 47.1225 36.3422C47.1056 35.8712 47.0546 35.4086 46.9696 34.9544C46.8847 34.4834 46.7488 34.0712 46.5619 33.718C46.392 33.3479 46.1541 33.1628 45.8483 33.1628C45.6784 33.1628 45.517 33.2806 45.364 33.5161C45.2111 33.7348 45.0752 34.0208 44.9563 34.374C44.8374 34.7105 44.7269 35.089 44.625 35.5095C44.54 35.9301 44.4636 36.3338 44.3956 36.7207C44.3276 37.1076 44.2767 37.4609 44.2427 37.7805C44.2087 38.0833 44.1832 38.302 44.1662 38.4366C45.1856 38.3525 46.1881 38.2263 47.1735 38.0581V37.3263Z",fill:"#758650"}),m.exports.createElement("path",{d:"M57.2817 1.09879C53.6383 0.62618 52.6744 8.18767 56.141 8.63861C59.5488 9.0825 60.8661 1.56431 57.2817 1.09879ZM50.2933 0.0267887C50.2393 0.0186128 50.1852 0.0138761 50.1289 0.00910539C46.4695 -0.298862 45.9141 7.30568 49.3961 7.6C52.7655 7.88527 53.6992 0.545837 50.2933 0.0267887ZM43.9644 4.48051C43.8573 4.46077 43.7489 4.44845 43.64 4.44365C39.9737 4.28077 39.7774 11.9105 43.2659 12.0668C46.5882 12.216 47.2082 5.07309 43.9644 4.48051ZM62.0768 7.66507C58.4675 6.98011 56.9746 14.4554 60.4088 15.1085C63.7844 15.7508 65.6277 8.33947 62.0768 7.66507ZM51.8882 10.383C48.1643 9.83004 50.3674 14.1158 43.4251 15.2017C38.0443 16.0433 40.2244 21.722 44.5718 22.4834C46.9579 22.9014 48.1354 21.1807 50.0887 21.5232C52.3066 21.9118 52.1923 23.6165 55.4388 24.1852C59.5841 24.9111 62.8887 20.138 58.4498 17.5662C52.7981 14.2918 55.956 11.1173 52.0712 10.4143C52.009 10.4032 51.9473 10.3918 51.8882 10.383Z",fill:"#758650"})),Bd=v.header`
  width: 100%;
  height: 96px;
  padding: 24px 0;
  border-bottom: 1px solid #cdcdcd66;
  /* text */
  color: ${M.colors.dark};
  /* Desktop & 1280 px/H3 */
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  /* Flex */
  display: flex;
  align-items: center;
  gap: 2.7%;
`,zd=v(Pd)``;function $d(){return S(Bd,{children:[s(Jn,{to:".",end:!0,children:s(zd,{})}),"\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u044C"]})}const Td=e=>m.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:4,height:29,viewBox:"0 0 4 29",fill:"none",...e},m.exports.createElement("path",{d:"M2 2L2 27",stroke:"#758650",strokeWidth:4,strokeLinecap:"round"})),Nd=v.span`
  font-size: calc(10px + 0.7vw);
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  text-align: left;
  @media screen and (max-width: 767px) {
    font-size: 0;
  }
`,Rd=v(Td)`
  display: ${({$active:e})=>!e&&" none"};
  height: 100%;
  position: absolute;
  left: -16px;
`,Md=v.button`
  display: flex;
  align-content: center;
  height: 30px;
  margin-bottom: 40px;

  & svg {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    overflow: visible;
  }
  &:hover {
    transition: 0.1s;
    transform: scale(105%);
    margin-left: 5%;
    overflow: visible;
  }
  &:last-child {
    color: red;
    margin-top: 80px;
  }
  @media screen and (max-width: 767px) {
  }
`;function Xt(e){const{children:t,text:n,link:r}=e;return s(Md,{children:S(N3,{to:r,children:[s(Rd,{$active:(()=>o4().pathname===r)()})," ",t," ",s(Nd,{children:n})]})})}const Id=v.div`
  display: flex;
  flex-direction: column;
  flex: 25% 0 0;
  max-width: 250px;
  height: calc(100vh - 96px);
  padding: 40px 17px 0 0;
  border-right: 1px solid #cdcdcd66;
  @media screen and (max-width: 767px) {
    position: fixed;
    display: block;
    padding: none;
    width: 40px;
  }
`,Od=e=>m.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},m.exports.createElement("path",{d:"M3 18.5831C3.13419 18.2799 3.37368 18.1711 3.71043 18.1859C4.11081 18.2035 4.51301 18.1978 4.91411 18.188C5.46074 18.1749 5.99567 18.2052 6.50537 18.5138C6.50976 18.425 6.51451 18.3648 6.51488 18.3046C6.52073 17.4086 6.49294 16.5112 6.53755 15.6173C6.63554 13.6454 7.55877 12.075 9.13979 10.8462C9.47545 10.5852 9.8239 10.3394 10.1599 10.0784C11.2345 9.24403 11.7764 8.15928 11.7947 6.8301C11.8163 5.26531 12.9077 3.94634 14.4865 3.59345C14.7447 3.53569 15.0152 3.51315 15.2807 3.50681C15.8277 3.49378 16.375 3.50857 16.922 3.50011C17.1582 3.49659 17.34 3.57408 17.5038 3.73573C17.9667 4.19217 18.4361 4.64298 18.9107 5.08886C18.9718 5.14627 19.0756 5.18888 19.1605 5.18994C19.7864 5.19839 20.4128 5.19381 21.0391 5.19487C21.4735 5.19557 21.6852 5.40055 21.6834 5.82318C21.6815 6.25039 21.7155 6.68253 21.6618 7.10411C21.5119 8.27656 20.5616 9.06371 19.3294 9.07604C18.9528 9.07991 18.5765 9.07674 18.1685 9.07674V9.28982C18.1685 10.5549 18.1604 11.82 18.1707 13.0847C18.1824 14.5308 17.6504 15.7321 16.4902 16.6654C16.4434 16.7031 16.4098 16.782 16.4087 16.8422C16.4017 17.2754 16.4087 17.709 16.4025 18.1422C16.401 18.2419 16.4419 18.2824 16.5308 18.3218C17.2156 18.6272 17.563 19.1498 17.5794 19.8743C17.5864 20.1905 17.5696 20.5072 17.5842 20.8227C17.5992 21.1475 17.4789 21.3778 17.1593 21.5H5.00699C4.97993 21.4891 4.95397 21.4732 4.92581 21.4687C4.22123 21.3464 3.67314 20.9932 3.32396 20.3941C3.17587 20.1402 3.10567 19.8436 3 19.5668C3 19.2386 3 18.9107 3 18.5824V18.5831ZM16.4858 20.4371C16.4858 20.248 16.4891 20.0676 16.4851 19.8873C16.4763 19.5002 16.2624 19.2812 15.8639 19.2446C15.5202 19.2129 15.3147 19.0139 15.3121 18.6832C15.3063 17.9509 15.3096 17.2187 15.311 16.4865C15.3114 16.2939 15.3845 16.1329 15.5531 16.0192C16.6215 15.2982 17.091 14.2991 17.0778 13.0548C17.0624 11.5963 17.0741 10.1379 17.0741 8.67947C17.0741 8.2033 17.2624 8.02439 17.7579 8.02227C18.3414 8.01981 18.9261 8.03214 19.5086 8.00537C19.9992 7.98248 20.4373 7.62676 20.5367 7.16645C20.6 6.87448 20.5861 6.56736 20.608 6.24969C20.0084 6.24969 19.4504 6.24405 18.8925 6.2525C18.6625 6.25603 18.4855 6.18171 18.3261 6.02464C17.8581 5.56432 17.3835 5.11034 16.9067 4.65813C16.8558 4.60988 16.7765 4.56303 16.7096 4.56233C16.1867 4.55529 15.6631 4.54613 15.141 4.56303C14.0445 4.59861 13.0536 5.43577 12.9337 6.4846C12.8627 7.10411 12.8832 7.73594 12.9018 8.36108C12.9121 8.7087 13.1377 8.95876 13.4763 9.08872C14.077 9.3194 14.7117 8.89924 14.7209 8.26C14.73 7.61584 14.7202 6.97133 14.7249 6.32717C14.7275 5.99998 14.9629 5.7626 15.2708 5.76049C15.5812 5.75838 15.8156 5.99329 15.8167 6.32189C15.8193 6.99528 15.8273 7.66938 15.8112 8.34242C15.7922 9.14154 15.2544 9.82902 14.469 10.0956C13.6982 10.3573 12.8371 10.1379 12.2945 9.54164C12.2594 9.50325 12.2229 9.46591 12.1995 9.44091C11.9643 9.73429 11.7687 10.0562 11.4974 10.2996C10.9651 10.7771 10.4023 11.2258 9.83048 11.6597C8.3544 12.779 7.63263 14.2483 7.61398 16.0428C7.59936 17.4424 7.61106 18.8427 7.61106 20.2423C7.61106 20.305 7.61106 20.3677 7.61106 20.4371H13.4448C13.3179 19.8303 12.5943 19.2812 11.8872 19.2477C11.3793 19.2238 11.221 19.0516 11.2067 18.5585C11.1976 18.2447 11.2104 17.9136 11.112 17.6224C10.8477 16.8405 10.2429 16.4594 9.3972 16.4119C9.06557 16.3932 8.85386 16.159 8.87032 15.8565C8.88567 15.5705 9.12809 15.3532 9.44729 15.3648C9.65863 15.3725 9.87326 15.3937 10.0788 15.4405C11.3705 15.7367 12.2627 16.8046 12.3073 18.0894C12.3091 18.1436 12.3351 18.2313 12.3728 18.2447C12.5625 18.313 12.7596 18.3623 12.9666 18.4218C12.9666 18.3444 12.9666 18.2806 12.9666 18.2165C12.9666 17.6424 12.9647 17.0684 12.9673 16.4943C12.9684 16.2132 13.1318 16.0033 13.3845 15.9452C13.7432 15.8624 14.0591 16.1111 14.0602 16.4855C14.0631 17.3698 14.0609 18.2545 14.062 19.1389C14.062 19.1963 14.0518 19.2685 14.0818 19.3094C14.3359 19.6517 14.5052 20.0296 14.5999 20.4364H16.4869L16.4858 20.4371ZM4.1013 19.2551C4.09253 19.8137 4.47571 20.3057 5.02344 20.4054C5.29438 20.4547 5.57848 20.4381 5.85709 20.4452C6.07319 20.4505 6.28928 20.4462 6.50354 20.4462C6.52804 19.8482 6.08562 19.3129 5.49146 19.2629C5.03514 19.2245 4.57224 19.2551 4.1013 19.2551Z",fill:"#2E2E2E",stroke:"#2E2E2E",strokeWidth:.346154})),_d=e=>m.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},m.exports.createElement("path",{d:"M17.4775 20.5676L17.4802 20.5664C17.7625 20.4383 18.0549 20.1843 18.2722 19.8563C18.4905 19.5271 18.5922 19.1861 18.5806 18.9116L17.4775 20.5676ZM17.4775 20.5676C16.8707 20.8456 16.1515 20.7269 15.1446 20.403C14.9831 20.351 14.8074 20.2915 14.625 20.2298C14.2937 20.1176 13.94 19.9978 13.608 19.9018C13.0725 19.7468 12.4893 19.6194 11.8899 19.6194C11.2866 19.6194 10.6994 19.7529 10.1625 19.9136C9.83697 20.011 9.48639 20.1332 9.15846 20.2476C8.96963 20.3134 8.78831 20.3766 8.62362 20.431C7.61425 20.7641 6.91651 20.8725 6.33836 20.5801L6.33838 20.5801M17.4775 20.5676L6.33838 20.5801M6.33838 20.5801L6.32992 20.5759M6.33838 20.5801L6.32992 20.5759M6.32992 20.5759C5.99748 20.413 5.679 20.0924 5.4562 19.6795M6.32992 20.5759L5.4562 19.6795M5.4562 19.6795C5.23321 19.2662 5.14162 18.8263 5.18449 18.4694M5.4562 19.6795L5.18449 18.4694M5.18449 18.4694C5.23924 18.0162 5.54314 17.6031 6.11628 17.106C6.33346 16.9177 6.56256 16.739 6.8087 16.547C6.88364 16.4885 6.96015 16.4288 7.03839 16.3673C7.35968 16.1144 7.70261 15.8353 8.00396 15.526C8.40049 15.1288 8.75584 14.658 9.08021 14.21C9.16171 14.0975 9.24096 13.9868 9.31884 13.878C9.5632 13.5368 9.79403 13.2144 10.0383 12.9119C10.6945 12.0996 11.2516 11.6894 11.8899 11.6894C12.5298 11.6894 13.1003 12.0984 13.7587 12.9013C14.035 13.2382 14.2973 13.6065 14.5743 13.9957C14.6199 14.0597 14.6658 14.1242 14.7123 14.1893C15.0309 14.6353 15.3746 15.1057 15.748 15.5073C16.0549 15.8441 16.4052 16.1601 16.7338 16.4519C16.7739 16.4876 16.8137 16.5228 16.8531 16.5577C17.1474 16.8186 17.4223 17.0621 17.673 17.3144C18.25 17.8949 18.558 18.3874 18.5806 18.9113L5.18449 18.4694ZM10.4048 6.54809L10.405 6.5489C10.5605 7.31346 10.4879 7.99542 10.2897 8.47327C10.0909 8.95236 9.80984 9.1494 9.55681 9.18799L9.55586 9.18814C9.29345 9.22851 8.91442 9.1154 8.5079 8.69687C8.11032 8.28754 7.76351 7.65316 7.60421 6.88678L7.60404 6.88596C7.44508 6.12554 7.5192 5.44586 7.72016 4.9673C7.92043 4.49038 8.20515 4.2849 8.463 4.2409C8.73399 4.20445 9.11272 4.32412 9.5125 4.73875C9.90744 5.14835 10.2498 5.78189 10.4048 6.54809ZM14.303 9.18799L14.3021 9.18785C14.0423 9.14856 13.7602 8.94948 13.5627 8.47327C13.3651 7.99708 13.2944 7.31667 13.4541 6.55288L13.455 6.54809C13.61 5.78189 13.9525 5.14797 14.3467 4.73808C14.7469 4.32194 15.1231 4.20477 15.3869 4.2409C15.6502 4.28503 15.935 4.49103 16.1364 4.96844C16.3383 5.44709 16.4148 6.12687 16.2652 6.88837C16.1005 7.65518 15.7536 8.28847 15.3569 8.69687C14.9515 9.11431 14.5721 9.22904 14.303 9.18799ZM3.298 8.78764C3.58841 8.66369 4.00896 8.6836 4.50602 8.96313C4.99558 9.23845 5.4851 9.73181 5.82942 10.3858C6.14963 11.0567 6.23536 11.7063 6.15368 12.201C6.07217 12.6946 5.84339 12.9734 5.57153 13.0913C5.28633 13.215 4.87181 13.1975 4.38282 12.9198C3.89932 12.6451 3.41521 12.1487 3.07987 11.4823C2.74561 10.818 2.65637 10.1671 2.73657 9.67018C2.81671 9.17372 3.04523 8.8988 3.298 8.78764ZM20.7018 8.78762C20.9545 8.89876 21.1831 9.17368 21.2632 9.67018C21.3434 10.1671 21.2542 10.818 20.9199 11.4823C20.5846 12.1487 20.1005 12.6451 19.617 12.9198C19.128 13.1975 18.7135 13.215 18.4283 13.0913C18.1564 12.9734 17.9276 12.6946 17.8461 12.201C17.7645 11.7063 17.8502 11.0567 18.1704 10.3858C18.5147 9.73181 19.0042 9.23845 19.4938 8.96313C19.9908 8.68362 20.4113 8.6637 20.7018 8.78762Z",stroke:"#2E2E2E",strokeWidth:1.5})),jd=e=>m.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},m.exports.createElement("path",{d:"M15 8.5H15.01M3 6.5C3 5.70435 3.31607 4.94129 3.87868 4.37868C4.44129 3.81607 5.20435 3.5 6 3.5H18C18.7956 3.5 19.5587 3.81607 20.1213 4.37868C20.6839 4.94129 21 5.70435 21 6.5V18.5C21 19.2956 20.6839 20.0587 20.1213 20.6213C19.5587 21.1839 18.7956 21.5 18 21.5H6C5.20435 21.5 4.44129 21.1839 3.87868 20.6213C3.31607 20.0587 3 19.2956 3 18.5V6.5Z",stroke:"#2E2E2E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),m.exports.createElement("path",{d:"M3 16.4998L8 11.4998C8.928 10.6068 10.072 10.6068 11 11.4998L16 16.4998",stroke:"#2E2E2E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),m.exports.createElement("path",{d:"M14 14.4998L15 13.4998C15.928 12.6068 17.072 12.6068 18 13.4998L21 16.4998",stroke:"#2E2E2E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Hd=e=>m.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},m.exports.createElement("path",{d:"M15.75 13.5C15.75 13.3011 15.671 13.1103 15.5303 12.9697C15.3897 12.829 15.1989 12.75 15 12.75H9C8.80109 12.75 8.61032 12.829 8.46967 12.9697C8.32902 13.1103 8.25 13.3011 8.25 13.5C8.25 13.6989 8.32902 13.8897 8.46967 14.0303C8.61032 14.171 8.80109 14.25 9 14.25H15C15.1989 14.25 15.3897 14.171 15.5303 14.0303C15.671 13.8897 15.75 13.6989 15.75 13.5ZM15.75 17.5C15.75 17.3011 15.671 17.1103 15.5303 16.9697C15.3897 16.829 15.1989 16.75 15 16.75H9C8.80109 16.75 8.61032 16.829 8.46967 16.9697C8.32902 17.1103 8.25 17.3011 8.25 17.5C8.25 17.6989 8.32902 17.8897 8.46967 18.0303C8.61032 18.171 8.80109 18.25 9 18.25H15C15.1989 18.25 15.3897 18.171 15.5303 18.0303C15.671 17.8897 15.75 17.6989 15.75 17.5Z",fill:"#2E2E2E"}),m.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2.75C6.27065 2.75 5.57118 3.03973 5.05546 3.55546C4.53973 4.07118 4.25 4.77065 4.25 5.5V19.5C4.25 20.2293 4.53973 20.9288 5.05546 21.4445C5.57118 21.9603 6.27065 22.25 7 22.25H17C17.7293 22.25 18.4288 21.9603 18.9445 21.4445C19.4603 20.9288 19.75 20.2293 19.75 19.5V8.468C19.75 8.087 19.626 7.717 19.396 7.413L16.398 3.445C16.2349 3.22912 16.0239 3.054 15.7817 2.93341C15.5395 2.81282 15.2726 2.75004 15.002 2.75H7ZM5.75 5.5C5.75 4.81 6.31 4.25 7 4.25H14.25V8.647C14.25 9.061 14.586 9.397 15 9.397H18.25V19.5C18.25 20.19 17.69 20.75 17 20.75H7C6.31 20.75 5.75 20.19 5.75 19.5V5.5Z",fill:"#2E2E2E"})),Ud=e=>m.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},m.exports.createElement("path",{d:"M21.8881 17.4201V20.4201C21.8892 20.6986 21.8322 20.9743 21.7206 21.2294C21.6091 21.4846 21.4454 21.7137 21.2402 21.902C21.035 22.0902 20.7927 22.2336 20.5289 22.3228C20.265 22.412 19.9855 22.4452 19.7081 22.4201C16.631 22.0857 13.6751 21.0342 11.0781 19.3501C8.66194 17.8148 6.61345 15.7663 5.07812 13.3501C3.38809 10.7413 2.33636 7.77109 2.00812 4.6801C1.98313 4.40356 2.01599 4.12486 2.10462 3.86172C2.19324 3.59859 2.33569 3.35679 2.52288 3.15172C2.71008 2.94665 2.93792 2.78281 3.19191 2.67062C3.44589 2.55843 3.72046 2.50036 3.99812 2.5001H6.99812C7.48342 2.49532 7.95391 2.66718 8.32188 2.98363C8.68985 3.30008 8.93019 3.73954 8.99812 4.2201C9.12474 5.18016 9.35957 6.12282 9.69812 7.0301C9.83266 7.38802 9.86178 7.77701 9.78202 8.15098C9.70227 8.52494 9.51698 8.86821 9.24812 9.1401L7.97812 10.4101C9.40167 12.9136 11.4746 14.9865 13.9781 16.4101L15.2481 15.1401C15.52 14.8712 15.8633 14.6859 16.2372 14.6062C16.6112 14.5264 17.0002 14.5556 17.3581 14.6901C18.2654 15.0286 19.2081 15.2635 20.1681 15.3901C20.6539 15.4586 21.0975 15.7033 21.4146 16.0776C21.7318 16.4519 21.9003 16.9297 21.8881 17.4201Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Vd=e=>m.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:21,viewBox:"0 0 20 21",fill:"none",...e},m.exports.createElement("path",{d:"M17.4298 11.48C17.4698 11.16 17.4998 10.84 17.4998 10.5C17.4998 10.16 17.4698 9.84005 17.4298 9.52005L19.5398 7.87005C19.7298 7.72005 19.7798 7.45005 19.6598 7.23005L17.6598 3.77005C17.6009 3.66687 17.5071 3.58807 17.3953 3.54775C17.2836 3.50744 17.1611 3.50825 17.0498 3.55005L14.5598 4.55005C14.0398 4.15005 13.4798 3.82005 12.8698 3.57005L12.4898 0.920047C12.4733 0.802388 12.4144 0.694807 12.3242 0.617483C12.234 0.540158 12.1186 0.498402 11.9998 0.500047H7.99984C7.74984 0.500047 7.53984 0.680047 7.50984 0.920047L7.12984 3.57005C6.51984 3.82005 5.95984 4.16005 5.43984 4.55005L2.94984 3.55005C2.89186 3.53038 2.83107 3.52025 2.76984 3.52005C2.59984 3.52005 2.42984 3.61005 2.33984 3.77005L0.339839 7.23005C0.209839 7.45005 0.26984 7.72005 0.45984 7.87005L2.56984 9.52005C2.52984 9.84005 2.49984 10.17 2.49984 10.5C2.49984 10.83 2.52984 11.16 2.56984 11.48L0.45984 13.13C0.26984 13.28 0.219839 13.55 0.339839 13.77L2.33984 17.23C2.39879 17.3332 2.49256 17.412 2.60434 17.4523C2.71612 17.4927 2.8386 17.4918 2.94984 17.45L5.43984 16.45C5.95984 16.85 6.51984 17.18 7.12984 17.43L7.50984 20.08C7.53984 20.32 7.74984 20.5 7.99984 20.5H11.9998C12.2498 20.5 12.4598 20.32 12.4898 20.08L12.8698 17.43C13.4798 17.18 14.0398 16.84 14.5598 16.45L17.0498 17.45C17.1098 17.47 17.1698 17.48 17.2298 17.48C17.3998 17.48 17.5698 17.39 17.6598 17.23L19.6598 13.77C19.7798 13.55 19.7298 13.28 19.5398 13.13L17.4298 11.48ZM15.4498 9.77005C15.4898 10.08 15.4998 10.29 15.4998 10.5C15.4998 10.71 15.4798 10.93 15.4498 11.23L15.3098 12.36L16.1998 13.06L17.2798 13.9L16.5798 15.11L15.3098 14.6L14.2698 14.18L13.3698 14.86C12.9398 15.18 12.5298 15.42 12.1198 15.59L11.0598 16.02L10.8998 17.15L10.6998 18.5H9.29984L9.10984 17.15L8.94984 16.02L7.88984 15.59C7.45984 15.41 7.05984 15.18 6.65984 14.88L5.74984 14.18L4.68984 14.61L3.41984 15.12L2.71984 13.91L3.79984 13.07L4.68984 12.37L4.54984 11.24C4.51984 10.93 4.49984 10.7 4.49984 10.5C4.49984 10.3 4.51984 10.07 4.54984 9.77005L4.68984 8.64005L3.79984 7.94005L2.71984 7.10005L3.41984 5.89005L4.68984 6.40005L5.72984 6.82005L6.62984 6.14005C7.05984 5.82005 7.46984 5.58005 7.87984 5.41005L8.93984 4.98005L9.09984 3.85005L9.29984 2.50005H10.6898L10.8798 3.85005L11.0398 4.98005L12.0998 5.41005C12.5298 5.59005 12.9298 5.82005 13.3298 6.12005L14.2398 6.82005L15.2998 6.39005L16.5698 5.88005L17.2698 7.09005L16.1998 7.94005L15.3098 8.64005L15.4498 9.77005ZM9.99984 6.50005C7.78984 6.50005 5.99984 8.29005 5.99984 10.5C5.99984 12.71 7.78984 14.5 9.99984 14.5C12.2098 14.5 13.9998 12.71 13.9998 10.5C13.9998 8.29005 12.2098 6.50005 9.99984 6.50005ZM9.99984 12.5C8.89984 12.5 7.99984 11.6 7.99984 10.5C7.99984 9.40005 8.89984 8.50005 9.99984 8.50005C11.0998 8.50005 11.9998 9.40005 11.9998 10.5C11.9998 11.6 11.0998 12.5 9.99984 12.5Z",fill:"#2E2E2E"})),Wd=e=>m.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},m.exports.createElement("path",{d:"M17 8.5L15.6 9.9L17.2 11.5H9V13.5H17.2L15.6 15.1L17 16.5L21 12.5L17 8.5ZM5 5.5H12V3.5H5C3.9 3.5 3 4.4 3 5.5V19.5C3 20.6 3.9 21.5 5 21.5H12V19.5H5V5.5Z",fill:"#FF4141"}));function bd(){return S(Id,{children:[s(Xt,{link:"/admin",text:"\u041A\u0430\u0440\u0442\u043A\u0438 \u0441\u043E\u0431\u0430\u043A",children:s(Od,{})}),s(Xt,{link:"/admin/partners",text:"\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u0438",children:s(_d,{})}),s(Xt,{link:"/admin/sliders",text:"\u0421\u043B\u0430\u0439\u0434\u0435\u0440\u0438",children:s(jd,{})}),s(Xt,{link:"/admin/reports",text:"\u0417\u0432\u0456\u0442\u043D\u0456\u0441\u0442\u044C",children:s(Hd,{})}),s(Xt,{link:"/admin/contacts",text:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",children:s(Ud,{})}),s(Xt,{link:"/admin/settings",text:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",children:s(Vd,{})}),s(Xt,{link:"/logout",text:"Log out",children:s(Wd,{})})]})}function Zd(){return S(re,{style:{padding:"0 2.7%"},children:[s(va,{}),s($d,{}),S(ve,{children:[s(bd,{}),s(Q2,{})]})]})}function Qd(){return s(G9,{theme:M,children:s(W8,{basename:"/",children:S(G2,{children:[S(de,{element:s(_6,{}),children:[s(de,{index:!0,path:"/",element:s($c,{})}),s(de,{path:"dogs",element:s(D7,{})}),s(de,{path:"about",element:s(u7,{})}),s(de,{path:"contacts",element:s(pd,{})}),s(de,{path:"dog",element:s(fd,{})}),s(de,{path:"*",element:s(ka,{})})]}),s(de,{element:s(Zd,{}),children:s(de,{path:"admin/*",element:s(Ad,{})})})]})})})}G5.render(s(ke.StrictMode,{children:s(Qd,{})}),document.getElementById("root"));
