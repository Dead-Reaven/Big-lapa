function Ul(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(u){if(u!=="default"&&!(u in e)){var r=Object.getOwnPropertyDescriptor(n,u);Object.defineProperty(e,u,r.get?r:{enumerable:!0,get:function(){return n[u]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const Zl=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};Zl();var f={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ot=Symbol.for("react.element"),Wl=Symbol.for("react.portal"),Ql=Symbol.for("react.fragment"),Gl=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),Xl=Symbol.for("react.provider"),Yl=Symbol.for("react.context"),ql=Symbol.for("react.forward_ref"),Jl=Symbol.for("react.suspense"),e8=Symbol.for("react.memo"),t8=Symbol.for("react.lazy"),Ku=Symbol.iterator;function n8(e){return e===null||typeof e!="object"?null:(e=Ku&&e[Ku]||e["@@iterator"],typeof e=="function"?e:null)}var Hi={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Oi=Object.assign,_i={};function o1(e,t,n){this.props=e,this.context=t,this.refs=_i,this.updater=n||Hi}o1.prototype.isReactComponent={};o1.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};o1.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ji(){}ji.prototype=o1.prototype;function Q2(e,t,n){this.props=e,this.context=t,this.refs=_i,this.updater=n||Hi}var G2=Q2.prototype=new ji;G2.constructor=Q2;Oi(G2,o1.prototype);G2.isPureReactComponent=!0;var Xu=Array.isArray,Vi=Object.prototype.hasOwnProperty,K2={current:null},Ui={key:!0,ref:!0,__self:!0,__source:!0};function Zi(e,t,n){var u,r={},i=null,o=null;if(t!=null)for(u in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Vi.call(t,u)&&!Ui.hasOwnProperty(u)&&(r[u]=t[u]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}if(e&&e.defaultProps)for(u in l=e.defaultProps,l)r[u]===void 0&&(r[u]=l[u]);return{$$typeof:ot,type:e,key:i,ref:o,props:r,_owner:K2.current}}function u8(e,t){return{$$typeof:ot,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function X2(e){return typeof e=="object"&&e!==null&&e.$$typeof===ot}function r8(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Yu=/\/+/g;function un(e,t){return typeof e=="object"&&e!==null&&e.key!=null?r8(""+e.key):t.toString(36)}function It(e,t,n,u,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ot:case Wl:o=!0}}if(o)return o=e,r=r(o),e=u===""?"."+un(o,0):u,Xu(r)?(n="",e!=null&&(n=e.replace(Yu,"$&/")+"/"),It(r,t,n,"",function(c){return c})):r!=null&&(X2(r)&&(r=u8(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Yu,"$&/")+"/")+e)),t.push(r)),1;if(o=0,u=u===""?".":u+":",Xu(e))for(var l=0;l<e.length;l++){i=e[l];var a=u+un(i,l);o+=It(i,t,n,a,r)}else if(a=n8(e),typeof a=="function")for(e=a.call(e),l=0;!(i=e.next()).done;)i=i.value,a=u+un(i,l++),o+=It(i,t,n,a,r);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ht(e,t,n){if(e==null)return e;var u=[],r=0;return It(e,u,"","",function(i){return t.call(n,i,r++)}),u}function i8(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},bt={transition:null},o8={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:bt,ReactCurrentOwner:K2};I.Children={map:ht,forEach:function(e,t,n){ht(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ht(e,function(){t++}),t},toArray:function(e){return ht(e,function(t){return t})||[]},only:function(e){if(!X2(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=o1;I.Fragment=Ql;I.Profiler=Kl;I.PureComponent=Q2;I.StrictMode=Gl;I.Suspense=Jl;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o8;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var u=Oi({},e.props),r=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=K2.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Vi.call(t,a)&&!Ui.hasOwnProperty(a)&&(u[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)u.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];u.children=l}return{$$typeof:ot,type:e.type,key:r,ref:i,props:u,_owner:o}};I.createContext=function(e){return e={$$typeof:Yl,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xl,_context:e},e.Consumer=e};I.createElement=Zi;I.createFactory=function(e){var t=Zi.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:ql,render:e}};I.isValidElement=X2;I.lazy=function(e){return{$$typeof:t8,_payload:{_status:-1,_result:e},_init:i8}};I.memo=function(e,t){return{$$typeof:e8,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=bt.transition;bt.transition={};try{e()}finally{bt.transition=t}};I.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I.useCallback=function(e,t){return ke.current.useCallback(e,t)};I.useContext=function(e){return ke.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};I.useEffect=function(e,t){return ke.current.useEffect(e,t)};I.useId=function(){return ke.current.useId()};I.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return ke.current.useMemo(e,t)};I.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};I.useRef=function(e){return ke.current.useRef(e)};I.useState=function(e){return ke.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return ke.current.useTransition()};I.version="18.2.0";f.exports=I;var Ne=f.exports,Wi=Ul({__proto__:null,default:Ne},[f.exports]),Qi={exports:{}},He={},Gi={exports:{}},Ki={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(B,M){var T=B.length;B.push(M);e:for(;0<T;){var Z=T-1>>>1,Y=B[Z];if(0<r(Y,M))B[Z]=M,B[T]=Y,T=Z;else break e}}function n(B){return B.length===0?null:B[0]}function u(B){if(B.length===0)return null;var M=B[0],T=B.pop();if(T!==M){B[0]=T;e:for(var Z=0,Y=B.length,c4=Y>>>1;Z<c4;){var ze=2*(Z+1)-1,S4=B[ze],Me=ze+1,je=B[Me];if(0>r(S4,T))Me<Y&&0>r(je,S4)?(B[Z]=je,B[Me]=T,Z=Me):(B[Z]=S4,B[ze]=T,Z=ze);else if(Me<Y&&0>r(je,T))B[Z]=je,B[Me]=T,Z=Me;else break e}}return M}function r(B,M){var T=B.sortIndex-M.sortIndex;return T!==0?T:B.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var a=[],c=[],C=1,m=null,x=3,y=!1,k=!1,w=!1,L=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(B){for(var M=n(c);M!==null;){if(M.callback===null)u(c);else if(M.startTime<=B)u(c),M.sortIndex=M.expirationTime,t(a,M);else break;M=n(c)}}function E(B){if(w=!1,h(B),!k)if(n(a)!==null)k=!0,q4(S);else{var M=n(c);M!==null&&_e(E,M.startTime-B)}}function S(B,M){k=!1,w&&(w=!1,p($),$=-1),y=!0;var T=x;try{for(h(M),m=n(a);m!==null&&(!(m.expirationTime>M)||B&&!$e());){var Z=m.callback;if(typeof Z=="function"){m.callback=null,x=m.priorityLevel;var Y=Z(m.expirationTime<=M);M=e.unstable_now(),typeof Y=="function"?m.callback=Y:m===n(a)&&u(a),h(M)}else u(a);m=n(a)}if(m!==null)var c4=!0;else{var ze=n(c);ze!==null&&_e(E,ze.startTime-M),c4=!1}return c4}finally{m=null,x=T,y=!1}}var A=!1,D=null,$=-1,Q=5,R=-1;function $e(){return!(e.unstable_now()-R<Q)}function X4(){if(D!==null){var B=e.unstable_now();R=B;var M=!0;try{M=D(!0,B)}finally{M?Y4():(A=!1,D=null)}}else A=!1}var Y4;if(typeof d=="function")Y4=function(){d(X4)};else if(typeof MessageChannel!="undefined"){var pt=new MessageChannel,tn=pt.port2;pt.port1.onmessage=X4,Y4=function(){tn.postMessage(null)}}else Y4=function(){L(X4,0)};function q4(B){D=B,A||(A=!0,Y4())}function _e(B,M){$=L(function(){B(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_continueExecution=function(){k||y||(k=!0,q4(S))},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(B){switch(x){case 1:case 2:case 3:var M=3;break;default:M=x}var T=x;x=M;try{return B()}finally{x=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(B,M){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var T=x;x=B;try{return M()}finally{x=T}},e.unstable_scheduleCallback=function(B,M,T){var Z=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?Z+T:Z):T=Z,B){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=T+Y,B={id:C++,callback:M,priorityLevel:B,startTime:T,expirationTime:Y,sortIndex:-1},T>Z?(B.sortIndex=T,t(c,B),n(a)===null&&B===n(c)&&(w?(p($),$=-1):w=!0,_e(E,T-Z))):(B.sortIndex=Y,t(a,B),k||y||(k=!0,q4(S))),B},e.unstable_shouldYield=$e,e.unstable_wrapCallback=function(B){var M=x;return function(){var T=x;x=M;try{return B.apply(this,arguments)}finally{x=T}}}})(Ki);Gi.exports=Ki;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xi=f.exports,be=Gi.exports;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yi=new Set,I1={};function g0(e,t){Q0(e,t),Q0(e+"Capture",t)}function Q0(e,t){for(I1[e]=t,e=0;e<t.length;e++)Yi.add(t[e])}var x4=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),_n=Object.prototype.hasOwnProperty,l8=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qu={},Ju={};function a8(e){return _n.call(Ju,e)?!0:_n.call(qu,e)?!1:l8.test(e)?Ju[e]=!0:(qu[e]=!0,!1)}function s8(e,t,n,u){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return u?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function c8(e,t,n,u){if(t===null||typeof t=="undefined"||s8(e,t,n,u))return!0;if(u)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,u,r,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=u,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Y2=/[\-:]([a-z])/g;function q2(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Y2,q2);fe[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Y2,q2);fe[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Y2,q2);fe[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function J2(e,t,n,u){var r=fe.hasOwnProperty(t)?fe[t]:null;(r!==null?r.type!==0:u||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(c8(t,n,r,u)&&(n=null),u||r===null?a8(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,u=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,u?e.setAttributeNS(u,t,n):e.setAttribute(t,n))))}var E4=Xi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ct=Symbol.for("react.element"),D0=Symbol.for("react.portal"),L0=Symbol.for("react.fragment"),eu=Symbol.for("react.strict_mode"),jn=Symbol.for("react.profiler"),qi=Symbol.for("react.provider"),Ji=Symbol.for("react.context"),tu=Symbol.for("react.forward_ref"),Vn=Symbol.for("react.suspense"),Un=Symbol.for("react.suspense_list"),nu=Symbol.for("react.memo"),A4=Symbol.for("react.lazy"),eo=Symbol.for("react.offscreen"),er=Symbol.iterator;function p1(e){return e===null||typeof e!="object"?null:(e=er&&e[er]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,rn;function E1(e){if(rn===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rn=t&&t[1]||""}return`
`+rn+e}var on=!1;function ln(e,t){if(!e||on)return"";on=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var u=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){u=c}e.call(t.prototype)}else{try{throw Error()}catch(c){u=c}e()}}catch(c){if(c&&u&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),i=u.stack.split(`
`),o=r.length-1,l=i.length-1;1<=o&&0<=l&&r[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(r[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||r[o]!==i[l]){var a=`
`+r[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=l);break}}}finally{on=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?E1(e):""}function d8(e){switch(e.tag){case 5:return E1(e.type);case 16:return E1("Lazy");case 13:return E1("Suspense");case 19:return E1("SuspenseList");case 0:case 2:case 15:return e=ln(e.type,!1),e;case 11:return e=ln(e.type.render,!1),e;case 1:return e=ln(e.type,!0),e;default:return""}}function Zn(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L0:return"Fragment";case D0:return"Portal";case jn:return"Profiler";case eu:return"StrictMode";case Vn:return"Suspense";case Un:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ji:return(e.displayName||"Context")+".Consumer";case qi:return(e._context.displayName||"Context")+".Provider";case tu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nu:return t=e.displayName||null,t!==null?t:Zn(e.type)||"Memo";case A4:t=e._payload,e=e._init;try{return Zn(e(t))}catch{}}return null}function p8(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zn(t);case 8:return t===eu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Z4(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function to(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function f8(e){var t=to(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),u=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(o){u=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return u},setValue:function(o){u=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mt(e){e._valueTracker||(e._valueTracker=f8(e))}function no(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),u="";return e&&(u=to(e)?e.checked?"true":"false":e.value),e=u,e!==n?(t.setValue(e),!0):!1}function Jt(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wn(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function tr(e,t){var n=t.defaultValue==null?"":t.defaultValue,u=t.checked!=null?t.checked:t.defaultChecked;n=Z4(t.value!=null?t.value:n),e._wrapperState={initialChecked:u,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function uo(e,t){t=t.checked,t!=null&&J2(e,"checked",t,!1)}function Qn(e,t){uo(e,t);var n=Z4(t.value),u=t.type;if(n!=null)u==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(u==="submit"||u==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gn(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gn(e,t.type,Z4(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function nr(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var u=t.type;if(!(u!=="submit"&&u!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gn(e,t,n){(t!=="number"||Jt(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var k1=Array.isArray;function H0(e,t,n,u){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&u&&(e[n].defaultSelected=!0)}else{for(n=""+Z4(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,u&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Kn(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ur(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(k1(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Z4(n)}}function ro(e,t){var n=Z4(t.value),u=Z4(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),u!=null&&(e.defaultValue=""+u)}function rr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function io(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?io(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gt,oo=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,u,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,u,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gt=gt||document.createElement("div"),gt.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function b1(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var L1={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},h8=["Webkit","ms","Moz","O"];Object.keys(L1).forEach(function(e){h8.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),L1[t]=L1[e]})});function lo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||L1.hasOwnProperty(e)&&L1[e]?(""+t).trim():t+"px"}function ao(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var u=n.indexOf("--")===0,r=lo(n,t[n],u);n==="float"&&(n="cssFloat"),u?e.setProperty(n,r):e[n]=r}}var C8=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yn(e,t){if(t){if(C8[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function qn(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jn=null;function uu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var e2=null,O0=null,_0=null;function ir(e){if(e=st(e)){if(typeof e2!="function")throw Error(F(280));var t=e.stateNode;t&&(t=M3(t),e2(e.stateNode,e.type,t))}}function so(e){O0?_0?_0.push(e):_0=[e]:O0=e}function co(){if(O0){var e=O0,t=_0;if(_0=O0=null,ir(e),t)for(e=0;e<t.length;e++)ir(t[e])}}function po(e,t){return e(t)}function fo(){}var an=!1;function ho(e,t,n){if(an)return e(t,n);an=!0;try{return po(e,t,n)}finally{an=!1,(O0!==null||_0!==null)&&(fo(),co())}}function H1(e,t){var n=e.stateNode;if(n===null)return null;var u=M3(n);if(u===null)return null;n=u[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var t2=!1;if(x4)try{var f1={};Object.defineProperty(f1,"passive",{get:function(){t2=!0}}),window.addEventListener("test",f1,f1),window.removeEventListener("test",f1,f1)}catch{t2=!1}function m8(e,t,n,u,r,i,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(C){this.onError(C)}}var A1=!1,e3=null,t3=!1,n2=null,g8={onError:function(e){A1=!0,e3=e}};function x8(e,t,n,u,r,i,o,l,a){A1=!1,e3=null,m8.apply(g8,arguments)}function v8(e,t,n,u,r,i,o,l,a){if(x8.apply(this,arguments),A1){if(A1){var c=e3;A1=!1,e3=null}else throw Error(F(198));t3||(t3=!0,n2=c)}}function x0(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Co(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function or(e){if(x0(e)!==e)throw Error(F(188))}function y8(e){var t=e.alternate;if(!t){if(t=x0(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,u=t;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(u=r.return,u!==null){n=u;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return or(r),e;if(i===u)return or(r),t;i=i.sibling}throw Error(F(188))}if(n.return!==u.return)n=r,u=i;else{for(var o=!1,l=r.child;l;){if(l===n){o=!0,n=r,u=i;break}if(l===u){o=!0,u=r,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,u=r;break}if(l===u){o=!0,u=i,n=r;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==u)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function mo(e){return e=y8(e),e!==null?go(e):null}function go(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=go(e);if(t!==null)return t;e=e.sibling}return null}var xo=be.unstable_scheduleCallback,lr=be.unstable_cancelCallback,w8=be.unstable_shouldYield,E8=be.unstable_requestPaint,ee=be.unstable_now,k8=be.unstable_getCurrentPriorityLevel,ru=be.unstable_ImmediatePriority,vo=be.unstable_UserBlockingPriority,n3=be.unstable_NormalPriority,S8=be.unstable_LowPriority,yo=be.unstable_IdlePriority,B3=null,a4=null;function F8(e){if(a4&&typeof a4.onCommitFiberRoot=="function")try{a4.onCommitFiberRoot(B3,e,void 0,(e.current.flags&128)===128)}catch{}}var e4=Math.clz32?Math.clz32:A8,D8=Math.log,L8=Math.LN2;function A8(e){return e>>>=0,e===0?32:31-(D8(e)/L8|0)|0}var xt=64,vt=4194304;function S1(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function u3(e,t){var n=e.pendingLanes;if(n===0)return 0;var u=0,r=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~r;l!==0?u=S1(l):(i&=o,i!==0&&(u=S1(i)))}else o=n&~r,o!==0?u=S1(o):i!==0&&(u=S1(i));if(u===0)return 0;if(t!==0&&t!==u&&(t&r)===0&&(r=u&-u,i=t&-t,r>=i||r===16&&(i&4194240)!==0))return t;if((u&4)!==0&&(u|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=u;0<t;)n=31-e4(t),r=1<<n,u|=e[n],t&=~r;return u}function B8(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P8(e,t){for(var n=e.suspendedLanes,u=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-e4(i),l=1<<o,a=r[o];a===-1?((l&n)===0||(l&u)!==0)&&(r[o]=B8(l,t)):a<=t&&(e.expiredLanes|=l),i&=~l}}function u2(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wo(){var e=xt;return xt<<=1,(xt&4194240)===0&&(xt=64),e}function sn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-e4(t),e[t]=n}function $8(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var u=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-e4(n),i=1<<r;t[r]=0,u[r]=-1,e[r]=-1,n&=~i}}function iu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var u=31-e4(n),r=1<<u;r&t|e[u]&t&&(e[u]|=t),n&=~r}}var O=0;function Eo(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ko,ou,So,Fo,Do,r2=!1,yt=[],N4=null,R4=null,I4=null,O1=new Map,_1=new Map,P4=[],z8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ar(e,t){switch(e){case"focusin":case"focusout":N4=null;break;case"dragenter":case"dragleave":R4=null;break;case"mouseover":case"mouseout":I4=null;break;case"pointerover":case"pointerout":O1.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_1.delete(t.pointerId)}}function h1(e,t,n,u,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:u,nativeEvent:i,targetContainers:[r]},t!==null&&(t=st(t),t!==null&&ou(t)),e):(e.eventSystemFlags|=u,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function M8(e,t,n,u,r){switch(t){case"focusin":return N4=h1(N4,e,t,n,u,r),!0;case"dragenter":return R4=h1(R4,e,t,n,u,r),!0;case"mouseover":return I4=h1(I4,e,t,n,u,r),!0;case"pointerover":var i=r.pointerId;return O1.set(i,h1(O1.get(i)||null,e,t,n,u,r)),!0;case"gotpointercapture":return i=r.pointerId,_1.set(i,h1(_1.get(i)||null,e,t,n,u,r)),!0}return!1}function Lo(e){var t=u0(e.target);if(t!==null){var n=x0(t);if(n!==null){if(t=n.tag,t===13){if(t=Co(n),t!==null){e.blockedOn=t,Do(e.priority,function(){So(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ht(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=i2(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var u=new n.constructor(n.type,n);Jn=u,n.target.dispatchEvent(u),Jn=null}else return t=st(n),t!==null&&ou(t),e.blockedOn=n,!1;t.shift()}return!0}function sr(e,t,n){Ht(e)&&n.delete(t)}function T8(){r2=!1,N4!==null&&Ht(N4)&&(N4=null),R4!==null&&Ht(R4)&&(R4=null),I4!==null&&Ht(I4)&&(I4=null),O1.forEach(sr),_1.forEach(sr)}function C1(e,t){e.blockedOn===t&&(e.blockedOn=null,r2||(r2=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,T8)))}function j1(e){function t(r){return C1(r,e)}if(0<yt.length){C1(yt[0],e);for(var n=1;n<yt.length;n++){var u=yt[n];u.blockedOn===e&&(u.blockedOn=null)}}for(N4!==null&&C1(N4,e),R4!==null&&C1(R4,e),I4!==null&&C1(I4,e),O1.forEach(t),_1.forEach(t),n=0;n<P4.length;n++)u=P4[n],u.blockedOn===e&&(u.blockedOn=null);for(;0<P4.length&&(n=P4[0],n.blockedOn===null);)Lo(n),n.blockedOn===null&&P4.shift()}var j0=E4.ReactCurrentBatchConfig,r3=!0;function N8(e,t,n,u){var r=O,i=j0.transition;j0.transition=null;try{O=1,lu(e,t,n,u)}finally{O=r,j0.transition=i}}function R8(e,t,n,u){var r=O,i=j0.transition;j0.transition=null;try{O=4,lu(e,t,n,u)}finally{O=r,j0.transition=i}}function lu(e,t,n,u){if(r3){var r=i2(e,t,n,u);if(r===null)vn(e,t,u,i3,n),ar(e,u);else if(M8(r,e,t,n,u))u.stopPropagation();else if(ar(e,u),t&4&&-1<z8.indexOf(e)){for(;r!==null;){var i=st(r);if(i!==null&&ko(i),i=i2(e,t,n,u),i===null&&vn(e,t,u,i3,n),i===r)break;r=i}r!==null&&u.stopPropagation()}else vn(e,t,u,null,n)}}var i3=null;function i2(e,t,n,u){if(i3=null,e=uu(u),e=u0(e),e!==null)if(t=x0(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Co(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return i3=e,null}function Ao(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(k8()){case ru:return 1;case vo:return 4;case n3:case S8:return 16;case yo:return 536870912;default:return 16}default:return 16}}var z4=null,au=null,Ot=null;function Bo(){if(Ot)return Ot;var e,t=au,n=t.length,u,r="value"in z4?z4.value:z4.textContent,i=r.length;for(e=0;e<n&&t[e]===r[e];e++);var o=n-e;for(u=1;u<=o&&t[n-u]===r[i-u];u++);return Ot=r.slice(e,1<u?1-u:void 0)}function _t(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wt(){return!0}function cr(){return!1}function Oe(e){function t(n,u,r,i,o){this._reactName=n,this._targetInst=r,this.type=u,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?wt:cr,this.isPropagationStopped=cr,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wt)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wt)},persist:function(){},isPersistent:wt}),t}var l1={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},su=Oe(l1),at=X({},l1,{view:0,detail:0}),I8=Oe(at),cn,dn,m1,P3=X({},at,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==m1&&(m1&&e.type==="mousemove"?(cn=e.screenX-m1.screenX,dn=e.screenY-m1.screenY):dn=cn=0,m1=e),cn)},movementY:function(e){return"movementY"in e?e.movementY:dn}}),dr=Oe(P3),b8=X({},P3,{dataTransfer:0}),H8=Oe(b8),O8=X({},at,{relatedTarget:0}),pn=Oe(O8),_8=X({},l1,{animationName:0,elapsedTime:0,pseudoElement:0}),j8=Oe(_8),V8=X({},l1,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),U8=Oe(V8),Z8=X({},l1,{data:0}),pr=Oe(Z8),W8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K8(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=G8[e])?!!t[e]:!1}function cu(){return K8}var X8=X({},at,{key:function(e){if(e.key){var t=W8[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_t(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Q8[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(e){return e.type==="keypress"?_t(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_t(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Y8=Oe(X8),q8=X({},P3,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fr=Oe(q8),J8=X({},at,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),e9=Oe(J8),t9=X({},l1,{propertyName:0,elapsedTime:0,pseudoElement:0}),n9=Oe(t9),u9=X({},P3,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),r9=Oe(u9),i9=[9,13,27,32],du=x4&&"CompositionEvent"in window,B1=null;x4&&"documentMode"in document&&(B1=document.documentMode);var o9=x4&&"TextEvent"in window&&!B1,Po=x4&&(!du||B1&&8<B1&&11>=B1),hr=String.fromCharCode(32),Cr=!1;function $o(e,t){switch(e){case"keyup":return i9.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var A0=!1;function l9(e,t){switch(e){case"compositionend":return zo(t);case"keypress":return t.which!==32?null:(Cr=!0,hr);case"textInput":return e=t.data,e===hr&&Cr?null:e;default:return null}}function a9(e,t){if(A0)return e==="compositionend"||!du&&$o(e,t)?(e=Bo(),Ot=au=z4=null,A0=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Po&&t.locale!=="ko"?null:t.data;default:return null}}var s9={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!s9[e.type]:t==="textarea"}function Mo(e,t,n,u){so(u),t=o3(t,"onChange"),0<t.length&&(n=new su("onChange","change",null,n,u),e.push({event:n,listeners:t}))}var P1=null,V1=null;function c9(e){Uo(e,0)}function $3(e){var t=$0(e);if(no(t))return e}function d9(e,t){if(e==="change")return t}var To=!1;if(x4){var fn;if(x4){var hn="oninput"in document;if(!hn){var gr=document.createElement("div");gr.setAttribute("oninput","return;"),hn=typeof gr.oninput=="function"}fn=hn}else fn=!1;To=fn&&(!document.documentMode||9<document.documentMode)}function xr(){P1&&(P1.detachEvent("onpropertychange",No),V1=P1=null)}function No(e){if(e.propertyName==="value"&&$3(V1)){var t=[];Mo(t,V1,e,uu(e)),ho(c9,t)}}function p9(e,t,n){e==="focusin"?(xr(),P1=t,V1=n,P1.attachEvent("onpropertychange",No)):e==="focusout"&&xr()}function f9(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $3(V1)}function h9(e,t){if(e==="click")return $3(t)}function C9(e,t){if(e==="input"||e==="change")return $3(t)}function m9(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var u4=typeof Object.is=="function"?Object.is:m9;function U1(e,t){if(u4(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),u=Object.keys(t);if(n.length!==u.length)return!1;for(u=0;u<n.length;u++){var r=n[u];if(!_n.call(t,r)||!u4(e[r],t[r]))return!1}return!0}function vr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yr(e,t){var n=vr(e);e=0;for(var u;n;){if(n.nodeType===3){if(u=e+n.textContent.length,e<=t&&u>=t)return{node:n,offset:t-e};e=u}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vr(n)}}function Ro(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ro(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Io(){for(var e=window,t=Jt();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jt(e.document)}return t}function pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function g9(e){var t=Io(),n=e.focusedElem,u=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ro(n.ownerDocument.documentElement,n)){if(u!==null&&pu(n)){if(t=u.start,e=u.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,i=Math.min(u.start,r);u=u.end===void 0?i:Math.min(u.end,r),!e.extend&&i>u&&(r=u,u=i,i=r),r=yr(n,i);var o=yr(n,u);r&&o&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),i>u?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var x9=x4&&"documentMode"in document&&11>=document.documentMode,B0=null,o2=null,$1=null,l2=!1;function wr(e,t,n){var u=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;l2||B0==null||B0!==Jt(u)||(u=B0,"selectionStart"in u&&pu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),$1&&U1($1,u)||($1=u,u=o3(o2,"onSelect"),0<u.length&&(t=new su("onSelect","select",null,t,n),e.push({event:t,listeners:u}),t.target=B0)))}function Et(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var P0={animationend:Et("Animation","AnimationEnd"),animationiteration:Et("Animation","AnimationIteration"),animationstart:Et("Animation","AnimationStart"),transitionend:Et("Transition","TransitionEnd")},Cn={},bo={};x4&&(bo=document.createElement("div").style,"AnimationEvent"in window||(delete P0.animationend.animation,delete P0.animationiteration.animation,delete P0.animationstart.animation),"TransitionEvent"in window||delete P0.transitionend.transition);function z3(e){if(Cn[e])return Cn[e];if(!P0[e])return e;var t=P0[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in bo)return Cn[e]=t[n];return e}var Ho=z3("animationend"),Oo=z3("animationiteration"),_o=z3("animationstart"),jo=z3("transitionend"),Vo=new Map,Er="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Q4(e,t){Vo.set(e,t),g0(t,[e])}for(var mn=0;mn<Er.length;mn++){var gn=Er[mn],v9=gn.toLowerCase(),y9=gn[0].toUpperCase()+gn.slice(1);Q4(v9,"on"+y9)}Q4(Ho,"onAnimationEnd");Q4(Oo,"onAnimationIteration");Q4(_o,"onAnimationStart");Q4("dblclick","onDoubleClick");Q4("focusin","onFocus");Q4("focusout","onBlur");Q4(jo,"onTransitionEnd");Q0("onMouseEnter",["mouseout","mouseover"]);Q0("onMouseLeave",["mouseout","mouseover"]);Q0("onPointerEnter",["pointerout","pointerover"]);Q0("onPointerLeave",["pointerout","pointerover"]);g0("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));g0("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));g0("onBeforeInput",["compositionend","keypress","textInput","paste"]);g0("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));g0("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));g0("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var F1="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w9=new Set("cancel close invalid load scroll toggle".split(" ").concat(F1));function kr(e,t,n){var u=e.type||"unknown-event";e.currentTarget=n,v8(u,t,void 0,e),e.currentTarget=null}function Uo(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var u=e[n],r=u.event;u=u.listeners;e:{var i=void 0;if(t)for(var o=u.length-1;0<=o;o--){var l=u[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==i&&r.isPropagationStopped())break e;kr(r,l,c),i=a}else for(o=0;o<u.length;o++){if(l=u[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==i&&r.isPropagationStopped())break e;kr(r,l,c),i=a}}}if(t3)throw e=n2,t3=!1,n2=null,e}function j(e,t){var n=t[p2];n===void 0&&(n=t[p2]=new Set);var u=e+"__bubble";n.has(u)||(Zo(t,e,2,!1),n.add(u))}function xn(e,t,n){var u=0;t&&(u|=4),Zo(n,e,u,t)}var kt="_reactListening"+Math.random().toString(36).slice(2);function Z1(e){if(!e[kt]){e[kt]=!0,Yi.forEach(function(n){n!=="selectionchange"&&(w9.has(n)||xn(n,!1,e),xn(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[kt]||(t[kt]=!0,xn("selectionchange",!1,t))}}function Zo(e,t,n,u){switch(Ao(t)){case 1:var r=N8;break;case 4:r=R8;break;default:r=lu}n=r.bind(null,t,n,e),r=void 0,!t2||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),u?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function vn(e,t,n,u,r){var i=u;if((t&1)===0&&(t&2)===0&&u!==null)e:for(;;){if(u===null)return;var o=u.tag;if(o===3||o===4){var l=u.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(o===4)for(o=u.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===r||a.nodeType===8&&a.parentNode===r))return;o=o.return}for(;l!==null;){if(o=u0(l),o===null)return;if(a=o.tag,a===5||a===6){u=i=o;continue e}l=l.parentNode}}u=u.return}ho(function(){var c=i,C=uu(n),m=[];e:{var x=Vo.get(e);if(x!==void 0){var y=su,k=e;switch(e){case"keypress":if(_t(n)===0)break e;case"keydown":case"keyup":y=Y8;break;case"focusin":k="focus",y=pn;break;case"focusout":k="blur",y=pn;break;case"beforeblur":case"afterblur":y=pn;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=dr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=H8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=e9;break;case Ho:case Oo:case _o:y=j8;break;case jo:y=n9;break;case"scroll":y=I8;break;case"wheel":y=r9;break;case"copy":case"cut":case"paste":y=U8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=fr}var w=(t&4)!==0,L=!w&&e==="scroll",p=w?x!==null?x+"Capture":null:x;w=[];for(var d=c,h;d!==null;){h=d;var E=h.stateNode;if(h.tag===5&&E!==null&&(h=E,p!==null&&(E=H1(d,p),E!=null&&w.push(W1(d,E,h)))),L)break;d=d.return}0<w.length&&(x=new y(x,k,null,n,C),m.push({event:x,listeners:w}))}}if((t&7)===0){e:{if(x=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",x&&n!==Jn&&(k=n.relatedTarget||n.fromElement)&&(u0(k)||k[v4]))break e;if((y||x)&&(x=C.window===C?C:(x=C.ownerDocument)?x.defaultView||x.parentWindow:window,y?(k=n.relatedTarget||n.toElement,y=c,k=k?u0(k):null,k!==null&&(L=x0(k),k!==L||k.tag!==5&&k.tag!==6)&&(k=null)):(y=null,k=c),y!==k)){if(w=dr,E="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=fr,E="onPointerLeave",p="onPointerEnter",d="pointer"),L=y==null?x:$0(y),h=k==null?x:$0(k),x=new w(E,d+"leave",y,n,C),x.target=L,x.relatedTarget=h,E=null,u0(C)===c&&(w=new w(p,d+"enter",k,n,C),w.target=h,w.relatedTarget=L,E=w),L=E,y&&k)t:{for(w=y,p=k,d=0,h=w;h;h=w0(h))d++;for(h=0,E=p;E;E=w0(E))h++;for(;0<d-h;)w=w0(w),d--;for(;0<h-d;)p=w0(p),h--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=w0(w),p=w0(p)}w=null}else w=null;y!==null&&Sr(m,x,y,w,!1),k!==null&&L!==null&&Sr(m,L,k,w,!0)}}e:{if(x=c?$0(c):window,y=x.nodeName&&x.nodeName.toLowerCase(),y==="select"||y==="input"&&x.type==="file")var S=d9;else if(mr(x))if(To)S=C9;else{S=f9;var A=p9}else(y=x.nodeName)&&y.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(S=h9);if(S&&(S=S(e,c))){Mo(m,S,n,C);break e}A&&A(e,x,c),e==="focusout"&&(A=x._wrapperState)&&A.controlled&&x.type==="number"&&Gn(x,"number",x.value)}switch(A=c?$0(c):window,e){case"focusin":(mr(A)||A.contentEditable==="true")&&(B0=A,o2=c,$1=null);break;case"focusout":$1=o2=B0=null;break;case"mousedown":l2=!0;break;case"contextmenu":case"mouseup":case"dragend":l2=!1,wr(m,n,C);break;case"selectionchange":if(x9)break;case"keydown":case"keyup":wr(m,n,C)}var D;if(du)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else A0?$o(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(Po&&n.locale!=="ko"&&(A0||$!=="onCompositionStart"?$==="onCompositionEnd"&&A0&&(D=Bo()):(z4=C,au="value"in z4?z4.value:z4.textContent,A0=!0)),A=o3(c,$),0<A.length&&($=new pr($,e,null,n,C),m.push({event:$,listeners:A}),D?$.data=D:(D=zo(n),D!==null&&($.data=D)))),(D=o9?l9(e,n):a9(e,n))&&(c=o3(c,"onBeforeInput"),0<c.length&&(C=new pr("onBeforeInput","beforeinput",null,n,C),m.push({event:C,listeners:c}),C.data=D))}Uo(m,t)})}function W1(e,t,n){return{instance:e,listener:t,currentTarget:n}}function o3(e,t){for(var n=t+"Capture",u=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=H1(e,n),i!=null&&u.unshift(W1(e,i,r)),i=H1(e,t),i!=null&&u.push(W1(e,i,r))),e=e.return}return u}function w0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sr(e,t,n,u,r){for(var i=t._reactName,o=[];n!==null&&n!==u;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===u)break;l.tag===5&&c!==null&&(l=c,r?(a=H1(n,i),a!=null&&o.unshift(W1(n,a,l))):r||(a=H1(n,i),a!=null&&o.push(W1(n,a,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var E9=/\r\n?/g,k9=/\u0000|\uFFFD/g;function Fr(e){return(typeof e=="string"?e:""+e).replace(E9,`
`).replace(k9,"")}function St(e,t,n){if(t=Fr(t),Fr(e)!==t&&n)throw Error(F(425))}function l3(){}var a2=null,s2=null;function c2(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var d2=typeof setTimeout=="function"?setTimeout:void 0,S9=typeof clearTimeout=="function"?clearTimeout:void 0,Dr=typeof Promise=="function"?Promise:void 0,F9=typeof queueMicrotask=="function"?queueMicrotask:typeof Dr!="undefined"?function(e){return Dr.resolve(null).then(e).catch(D9)}:d2;function D9(e){setTimeout(function(){throw e})}function yn(e,t){var n=t,u=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(u===0){e.removeChild(r),j1(t);return}u--}else n!=="$"&&n!=="$?"&&n!=="$!"||u++;n=r}while(n);j1(t)}function b4(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Lr(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var a1=Math.random().toString(36).slice(2),l4="__reactFiber$"+a1,Q1="__reactProps$"+a1,v4="__reactContainer$"+a1,p2="__reactEvents$"+a1,L9="__reactListeners$"+a1,A9="__reactHandles$"+a1;function u0(e){var t=e[l4];if(t)return t;for(var n=e.parentNode;n;){if(t=n[v4]||n[l4]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Lr(e);e!==null;){if(n=e[l4])return n;e=Lr(e)}return t}e=n,n=e.parentNode}return null}function st(e){return e=e[l4]||e[v4],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $0(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function M3(e){return e[Q1]||null}var f2=[],z0=-1;function G4(e){return{current:e}}function U(e){0>z0||(e.current=f2[z0],f2[z0]=null,z0--)}function _(e,t){z0++,f2[z0]=e.current,e.current=t}var W4={},ve=G4(W4),Le=G4(!1),c0=W4;function G0(e,t){var n=e.type.contextTypes;if(!n)return W4;var u=e.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===t)return u.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in n)r[i]=t[i];return u&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function Ae(e){return e=e.childContextTypes,e!=null}function a3(){U(Le),U(ve)}function Ar(e,t,n){if(ve.current!==W4)throw Error(F(168));_(ve,t),_(Le,n)}function Wo(e,t,n){var u=e.stateNode;if(t=t.childContextTypes,typeof u.getChildContext!="function")return n;u=u.getChildContext();for(var r in u)if(!(r in t))throw Error(F(108,p8(e)||"Unknown",r));return X({},n,u)}function s3(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||W4,c0=ve.current,_(ve,e),_(Le,Le.current),!0}function Br(e,t,n){var u=e.stateNode;if(!u)throw Error(F(169));n?(e=Wo(e,t,c0),u.__reactInternalMemoizedMergedChildContext=e,U(Le),U(ve),_(ve,e)):U(Le),_(Le,n)}var h4=null,T3=!1,wn=!1;function Qo(e){h4===null?h4=[e]:h4.push(e)}function B9(e){T3=!0,Qo(e)}function K4(){if(!wn&&h4!==null){wn=!0;var e=0,t=O;try{var n=h4;for(O=1;e<n.length;e++){var u=n[e];do u=u(!0);while(u!==null)}h4=null,T3=!1}catch(r){throw h4!==null&&(h4=h4.slice(e+1)),xo(ru,K4),r}finally{O=t,wn=!1}}return null}var M0=[],T0=0,c3=null,d3=0,Ve=[],Ue=0,d0=null,C4=1,m4="";function e0(e,t){M0[T0++]=d3,M0[T0++]=c3,c3=e,d3=t}function Go(e,t,n){Ve[Ue++]=C4,Ve[Ue++]=m4,Ve[Ue++]=d0,d0=e;var u=C4;e=m4;var r=32-e4(u)-1;u&=~(1<<r),n+=1;var i=32-e4(t)+r;if(30<i){var o=r-r%5;i=(u&(1<<o)-1).toString(32),u>>=o,r-=o,C4=1<<32-e4(t)+r|n<<r|u,m4=i+e}else C4=1<<i|n<<r|u,m4=e}function fu(e){e.return!==null&&(e0(e,1),Go(e,1,0))}function hu(e){for(;e===c3;)c3=M0[--T0],M0[T0]=null,d3=M0[--T0],M0[T0]=null;for(;e===d0;)d0=Ve[--Ue],Ve[Ue]=null,m4=Ve[--Ue],Ve[Ue]=null,C4=Ve[--Ue],Ve[Ue]=null}var Ie=null,Re=null,W=!1,Je=null;function Ko(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Pr(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,Re=b4(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=d0!==null?{id:C4,overflow:m4}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ie=e,Re=null,!0):!1;default:return!1}}function h2(e){return(e.mode&1)!==0&&(e.flags&128)===0}function C2(e){if(W){var t=Re;if(t){var n=t;if(!Pr(e,t)){if(h2(e))throw Error(F(418));t=b4(n.nextSibling);var u=Ie;t&&Pr(e,t)?Ko(u,n):(e.flags=e.flags&-4097|2,W=!1,Ie=e)}}else{if(h2(e))throw Error(F(418));e.flags=e.flags&-4097|2,W=!1,Ie=e}}}function $r(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function Ft(e){if(e!==Ie)return!1;if(!W)return $r(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!c2(e.type,e.memoizedProps)),t&&(t=Re)){if(h2(e))throw Xo(),Error(F(418));for(;t;)Ko(e,t),t=b4(t.nextSibling)}if($r(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Re=b4(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=Ie?b4(e.stateNode.nextSibling):null;return!0}function Xo(){for(var e=Re;e;)e=b4(e.nextSibling)}function K0(){Re=Ie=null,W=!1}function Cu(e){Je===null?Je=[e]:Je.push(e)}var P9=E4.ReactCurrentBatchConfig;function Ye(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var p3=G4(null),f3=null,N0=null,mu=null;function gu(){mu=N0=f3=null}function xu(e){var t=p3.current;U(p3),e._currentValue=t}function m2(e,t,n){for(;e!==null;){var u=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,u!==null&&(u.childLanes|=t)):u!==null&&(u.childLanes&t)!==t&&(u.childLanes|=t),e===n)break;e=e.return}}function V0(e,t){f3=e,mu=N0=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(De=!0),e.firstContext=null)}function Qe(e){var t=e._currentValue;if(mu!==e)if(e={context:e,memoizedValue:t,next:null},N0===null){if(f3===null)throw Error(F(308));N0=e,f3.dependencies={lanes:0,firstContext:e}}else N0=N0.next=e;return t}var r0=null;function vu(e){r0===null?r0=[e]:r0.push(e)}function Yo(e,t,n,u){var r=t.interleaved;return r===null?(n.next=n,vu(t)):(n.next=r.next,r.next=n),t.interleaved=n,y4(e,u)}function y4(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var B4=!1;function yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function g4(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function H4(e,t,n){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,(b&2)!==0){var r=u.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),u.pending=t,y4(e,n)}return r=u.interleaved,r===null?(t.next=t,vu(u)):(t.next=r.next,r.next=t),u.interleaved=t,y4(e,n)}function jt(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var u=t.lanes;u&=e.pendingLanes,n|=u,t.lanes=n,iu(e,n)}}function zr(e,t){var n=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,n===u)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?r=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?r=i=t:i=i.next=t}else r=i=t;n={baseState:u.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:u.shared,effects:u.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function h3(e,t,n,u){var r=e.updateQueue;B4=!1;var i=r.firstBaseUpdate,o=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?i=c:o.next=c,o=a;var C=e.alternate;C!==null&&(C=C.updateQueue,l=C.lastBaseUpdate,l!==o&&(l===null?C.firstBaseUpdate=c:l.next=c,C.lastBaseUpdate=a))}if(i!==null){var m=r.baseState;o=0,C=c=a=null,l=i;do{var x=l.lane,y=l.eventTime;if((u&x)===x){C!==null&&(C=C.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=e,w=l;switch(x=t,y=n,w.tag){case 1:if(k=w.payload,typeof k=="function"){m=k.call(y,m,x);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,x=typeof k=="function"?k.call(y,m,x):k,x==null)break e;m=X({},m,x);break e;case 2:B4=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,x=r.effects,x===null?r.effects=[l]:x.push(l))}else y={eventTime:y,lane:x,tag:l.tag,payload:l.payload,callback:l.callback,next:null},C===null?(c=C=y,a=m):C=C.next=y,o|=x;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;x=l,l=x.next,x.next=null,r.lastBaseUpdate=x,r.shared.pending=null}}while(1);if(C===null&&(a=m),r.baseState=a,r.firstBaseUpdate=c,r.lastBaseUpdate=C,t=r.shared.interleaved,t!==null){r=t;do o|=r.lane,r=r.next;while(r!==t)}else i===null&&(r.shared.lanes=0);f0|=o,e.lanes=o,e.memoizedState=m}}function Mr(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var u=e[t],r=u.callback;if(r!==null){if(u.callback=null,u=n,typeof r!="function")throw Error(F(191,r));r.call(u)}}}var Jo=new Xi.Component().refs;function g2(e,t,n,u){t=e.memoizedState,n=n(u,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var N3={isMounted:function(e){return(e=e._reactInternals)?x0(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var u=we(),r=_4(e),i=g4(u,r);i.payload=t,n!=null&&(i.callback=n),t=H4(e,i,r),t!==null&&(t4(t,e,r,u),jt(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var u=we(),r=_4(e),i=g4(u,r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=H4(e,i,r),t!==null&&(t4(t,e,r,u),jt(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),u=_4(e),r=g4(n,u);r.tag=2,t!=null&&(r.callback=t),t=H4(e,r,u),t!==null&&(t4(t,e,u,n),jt(t,e,u))}};function Tr(e,t,n,u,r,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,i,o):t.prototype&&t.prototype.isPureReactComponent?!U1(n,u)||!U1(r,i):!0}function e5(e,t,n){var u=!1,r=W4,i=t.contextType;return typeof i=="object"&&i!==null?i=Qe(i):(r=Ae(t)?c0:ve.current,u=t.contextTypes,i=(u=u!=null)?G0(e,r):W4),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=N3,e.stateNode=t,t._reactInternals=e,u&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),t}function Nr(e,t,n,u){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,u),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,u),t.state!==e&&N3.enqueueReplaceState(t,t.state,null)}function x2(e,t,n,u){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs=Jo,yu(e);var i=t.contextType;typeof i=="object"&&i!==null?r.context=Qe(i):(i=Ae(t)?c0:ve.current,r.context=G0(e,i)),r.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(g2(e,t,i,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&N3.enqueueReplaceState(r,r.state,null),h3(e,n,r,u),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function g1(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var u=n.stateNode}if(!u)throw Error(F(147,e));var r=u,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=r.refs;l===Jo&&(l=r.refs={}),o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function Dt(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Rr(e){var t=e._init;return t(e._payload)}function t5(e){function t(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function u(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function r(p,d){return p=j4(p,d),p.index=0,p.sibling=null,p}function i(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,h,E){return d===null||d.tag!==6?(d=An(h,p.mode,E),d.return=p,d):(d=r(d,h),d.return=p,d)}function a(p,d,h,E){var S=h.type;return S===L0?C(p,d,h.props.children,E,h.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===A4&&Rr(S)===d.type)?(E=r(d,h.props),E.ref=g1(p,d,h),E.return=p,E):(E=Gt(h.type,h.key,h.props,null,p.mode,E),E.ref=g1(p,d,h),E.return=p,E)}function c(p,d,h,E){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Bn(h,p.mode,E),d.return=p,d):(d=r(d,h.children||[]),d.return=p,d)}function C(p,d,h,E,S){return d===null||d.tag!==7?(d=a0(h,p.mode,E,S),d.return=p,d):(d=r(d,h),d.return=p,d)}function m(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=An(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ct:return h=Gt(d.type,d.key,d.props,null,p.mode,h),h.ref=g1(p,null,d),h.return=p,h;case D0:return d=Bn(d,p.mode,h),d.return=p,d;case A4:var E=d._init;return m(p,E(d._payload),h)}if(k1(d)||p1(d))return d=a0(d,p.mode,h,null),d.return=p,d;Dt(p,d)}return null}function x(p,d,h,E){var S=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:l(p,d,""+h,E);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ct:return h.key===S?a(p,d,h,E):null;case D0:return h.key===S?c(p,d,h,E):null;case A4:return S=h._init,x(p,d,S(h._payload),E)}if(k1(h)||p1(h))return S!==null?null:C(p,d,h,E,null);Dt(p,h)}return null}function y(p,d,h,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(h)||null,l(d,p,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ct:return p=p.get(E.key===null?h:E.key)||null,a(d,p,E,S);case D0:return p=p.get(E.key===null?h:E.key)||null,c(d,p,E,S);case A4:var A=E._init;return y(p,d,h,A(E._payload),S)}if(k1(E)||p1(E))return p=p.get(h)||null,C(d,p,E,S,null);Dt(d,E)}return null}function k(p,d,h,E){for(var S=null,A=null,D=d,$=d=0,Q=null;D!==null&&$<h.length;$++){D.index>$?(Q=D,D=null):Q=D.sibling;var R=x(p,D,h[$],E);if(R===null){D===null&&(D=Q);break}e&&D&&R.alternate===null&&t(p,D),d=i(R,d,$),A===null?S=R:A.sibling=R,A=R,D=Q}if($===h.length)return n(p,D),W&&e0(p,$),S;if(D===null){for(;$<h.length;$++)D=m(p,h[$],E),D!==null&&(d=i(D,d,$),A===null?S=D:A.sibling=D,A=D);return W&&e0(p,$),S}for(D=u(p,D);$<h.length;$++)Q=y(D,p,$,h[$],E),Q!==null&&(e&&Q.alternate!==null&&D.delete(Q.key===null?$:Q.key),d=i(Q,d,$),A===null?S=Q:A.sibling=Q,A=Q);return e&&D.forEach(function($e){return t(p,$e)}),W&&e0(p,$),S}function w(p,d,h,E){var S=p1(h);if(typeof S!="function")throw Error(F(150));if(h=S.call(h),h==null)throw Error(F(151));for(var A=S=null,D=d,$=d=0,Q=null,R=h.next();D!==null&&!R.done;$++,R=h.next()){D.index>$?(Q=D,D=null):Q=D.sibling;var $e=x(p,D,R.value,E);if($e===null){D===null&&(D=Q);break}e&&D&&$e.alternate===null&&t(p,D),d=i($e,d,$),A===null?S=$e:A.sibling=$e,A=$e,D=Q}if(R.done)return n(p,D),W&&e0(p,$),S;if(D===null){for(;!R.done;$++,R=h.next())R=m(p,R.value,E),R!==null&&(d=i(R,d,$),A===null?S=R:A.sibling=R,A=R);return W&&e0(p,$),S}for(D=u(p,D);!R.done;$++,R=h.next())R=y(D,p,$,R.value,E),R!==null&&(e&&R.alternate!==null&&D.delete(R.key===null?$:R.key),d=i(R,d,$),A===null?S=R:A.sibling=R,A=R);return e&&D.forEach(function(X4){return t(p,X4)}),W&&e0(p,$),S}function L(p,d,h,E){if(typeof h=="object"&&h!==null&&h.type===L0&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ct:e:{for(var S=h.key,A=d;A!==null;){if(A.key===S){if(S=h.type,S===L0){if(A.tag===7){n(p,A.sibling),d=r(A,h.props.children),d.return=p,p=d;break e}}else if(A.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===A4&&Rr(S)===A.type){n(p,A.sibling),d=r(A,h.props),d.ref=g1(p,A,h),d.return=p,p=d;break e}n(p,A);break}else t(p,A);A=A.sibling}h.type===L0?(d=a0(h.props.children,p.mode,E,h.key),d.return=p,p=d):(E=Gt(h.type,h.key,h.props,null,p.mode,E),E.ref=g1(p,d,h),E.return=p,p=E)}return o(p);case D0:e:{for(A=h.key;d!==null;){if(d.key===A)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(p,d.sibling),d=r(d,h.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Bn(h,p.mode,E),d.return=p,p=d}return o(p);case A4:return A=h._init,L(p,d,A(h._payload),E)}if(k1(h))return k(p,d,h,E);if(p1(h))return w(p,d,h,E);Dt(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(p,d.sibling),d=r(d,h),d.return=p,p=d):(n(p,d),d=An(h,p.mode,E),d.return=p,p=d),o(p)):n(p,d)}return L}var X0=t5(!0),n5=t5(!1),ct={},s4=G4(ct),G1=G4(ct),K1=G4(ct);function i0(e){if(e===ct)throw Error(F(174));return e}function wu(e,t){switch(_(K1,t),_(G1,e),_(s4,ct),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xn(t,e)}U(s4),_(s4,t)}function Y0(){U(s4),U(G1),U(K1)}function u5(e){i0(K1.current);var t=i0(s4.current),n=Xn(t,e.type);t!==n&&(_(G1,e),_(s4,n))}function Eu(e){G1.current===e&&(U(s4),U(G1))}var G=G4(0);function C3(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var En=[];function ku(){for(var e=0;e<En.length;e++)En[e]._workInProgressVersionPrimary=null;En.length=0}var Vt=E4.ReactCurrentDispatcher,kn=E4.ReactCurrentBatchConfig,p0=0,K=null,ie=null,le=null,m3=!1,z1=!1,X1=0,$9=0;function Ce(){throw Error(F(321))}function Su(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!u4(e[n],t[n]))return!1;return!0}function Fu(e,t,n,u,r,i){if(p0=i,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vt.current=e===null||e.memoizedState===null?N9:R9,e=n(u,r),z1){i=0;do{if(z1=!1,X1=0,25<=i)throw Error(F(301));i+=1,le=ie=null,t.updateQueue=null,Vt.current=I9,e=n(u,r)}while(z1)}if(Vt.current=g3,t=ie!==null&&ie.next!==null,p0=0,le=ie=K=null,m3=!1,t)throw Error(F(300));return e}function Du(){var e=X1!==0;return X1=0,e}function i4(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?K.memoizedState=le=e:le=le.next=e,le}function Ge(){if(ie===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=le===null?K.memoizedState:le.next;if(t!==null)le=t,ie=e;else{if(e===null)throw Error(F(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},le===null?K.memoizedState=le=e:le=le.next=e}return le}function Y1(e,t){return typeof t=="function"?t(e):t}function Sn(e){var t=Ge(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var u=ie,r=u.baseQueue,i=n.pending;if(i!==null){if(r!==null){var o=r.next;r.next=i.next,i.next=o}u.baseQueue=r=i,n.pending=null}if(r!==null){i=r.next,u=u.baseState;var l=o=null,a=null,c=i;do{var C=c.lane;if((p0&C)===C)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),u=c.hasEagerState?c.eagerState:e(u,c.action);else{var m={lane:C,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=m,o=u):a=a.next=m,K.lanes|=C,f0|=C}c=c.next}while(c!==null&&c!==i);a===null?o=u:a.next=l,u4(u,t.memoizedState)||(De=!0),t.memoizedState=u,t.baseState=o,t.baseQueue=a,n.lastRenderedState=u}if(e=n.interleaved,e!==null){r=e;do i=r.lane,K.lanes|=i,f0|=i,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fn(e){var t=Ge(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var u=n.dispatch,r=n.pending,i=t.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do i=e(i,o.action),o=o.next;while(o!==r);u4(i,t.memoizedState)||(De=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,u]}function r5(){}function i5(e,t){var n=K,u=Ge(),r=t(),i=!u4(u.memoizedState,r);if(i&&(u.memoizedState=r,De=!0),u=u.queue,Lu(a5.bind(null,n,u,e),[e]),u.getSnapshot!==t||i||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,q1(9,l5.bind(null,n,u,r,t),void 0,null),ce===null)throw Error(F(349));(p0&30)!==0||o5(n,t,r)}return r}function o5(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function l5(e,t,n,u){t.value=n,t.getSnapshot=u,s5(t)&&c5(e)}function a5(e,t,n){return n(function(){s5(t)&&c5(e)})}function s5(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!u4(e,n)}catch{return!0}}function c5(e){var t=y4(e,1);t!==null&&t4(t,e,1,-1)}function Ir(e){var t=i4();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Y1,lastRenderedState:e},t.queue=e,e=e.dispatch=T9.bind(null,K,e),[t.memoizedState,e]}function q1(e,t,n,u){return e={tag:e,create:t,destroy:n,deps:u,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(u=n.next,n.next=e,e.next=u,t.lastEffect=e)),e}function d5(){return Ge().memoizedState}function Ut(e,t,n,u){var r=i4();K.flags|=e,r.memoizedState=q1(1|t,n,void 0,u===void 0?null:u)}function R3(e,t,n,u){var r=Ge();u=u===void 0?null:u;var i=void 0;if(ie!==null){var o=ie.memoizedState;if(i=o.destroy,u!==null&&Su(u,o.deps)){r.memoizedState=q1(t,n,i,u);return}}K.flags|=e,r.memoizedState=q1(1|t,n,i,u)}function br(e,t){return Ut(8390656,8,e,t)}function Lu(e,t){return R3(2048,8,e,t)}function p5(e,t){return R3(4,2,e,t)}function f5(e,t){return R3(4,4,e,t)}function h5(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function C5(e,t,n){return n=n!=null?n.concat([e]):null,R3(4,4,h5.bind(null,t,e),n)}function Au(){}function m5(e,t){var n=Ge();t=t===void 0?null:t;var u=n.memoizedState;return u!==null&&t!==null&&Su(t,u[1])?u[0]:(n.memoizedState=[e,t],e)}function g5(e,t){var n=Ge();t=t===void 0?null:t;var u=n.memoizedState;return u!==null&&t!==null&&Su(t,u[1])?u[0]:(e=e(),n.memoizedState=[e,t],e)}function x5(e,t,n){return(p0&21)===0?(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n):(u4(n,t)||(n=wo(),K.lanes|=n,f0|=n,e.baseState=!0),t)}function z9(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var u=kn.transition;kn.transition={};try{e(!1),t()}finally{O=n,kn.transition=u}}function v5(){return Ge().memoizedState}function M9(e,t,n){var u=_4(e);if(n={lane:u,action:n,hasEagerState:!1,eagerState:null,next:null},y5(e))w5(t,n);else if(n=Yo(e,t,n,u),n!==null){var r=we();t4(n,e,u,r),E5(n,t,u)}}function T9(e,t,n){var u=_4(e),r={lane:u,action:n,hasEagerState:!1,eagerState:null,next:null};if(y5(e))w5(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,n);if(r.hasEagerState=!0,r.eagerState=l,u4(l,o)){var a=t.interleaved;a===null?(r.next=r,vu(t)):(r.next=a.next,a.next=r),t.interleaved=r;return}}catch{}finally{}n=Yo(e,t,r,u),n!==null&&(r=we(),t4(n,e,u,r),E5(n,t,u))}}function y5(e){var t=e.alternate;return e===K||t!==null&&t===K}function w5(e,t){z1=m3=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function E5(e,t,n){if((n&4194240)!==0){var u=t.lanes;u&=e.pendingLanes,n|=u,t.lanes=n,iu(e,n)}}var g3={readContext:Qe,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},N9={readContext:Qe,useCallback:function(e,t){return i4().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:br,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ut(4194308,4,h5.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ut(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ut(4,2,e,t)},useMemo:function(e,t){var n=i4();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var u=i4();return t=n!==void 0?n(t):t,u.memoizedState=u.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},u.queue=e,e=e.dispatch=M9.bind(null,K,e),[u.memoizedState,e]},useRef:function(e){var t=i4();return e={current:e},t.memoizedState=e},useState:Ir,useDebugValue:Au,useDeferredValue:function(e){return i4().memoizedState=e},useTransition:function(){var e=Ir(!1),t=e[0];return e=z9.bind(null,e[1]),i4().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var u=K,r=i4();if(W){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),ce===null)throw Error(F(349));(p0&30)!==0||o5(u,t,n)}r.memoizedState=n;var i={value:n,getSnapshot:t};return r.queue=i,br(a5.bind(null,u,i,e),[e]),u.flags|=2048,q1(9,l5.bind(null,u,i,n,t),void 0,null),n},useId:function(){var e=i4(),t=ce.identifierPrefix;if(W){var n=m4,u=C4;n=(u&~(1<<32-e4(u)-1)).toString(32)+n,t=":"+t+"R"+n,n=X1++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$9++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},R9={readContext:Qe,useCallback:m5,useContext:Qe,useEffect:Lu,useImperativeHandle:C5,useInsertionEffect:p5,useLayoutEffect:f5,useMemo:g5,useReducer:Sn,useRef:d5,useState:function(){return Sn(Y1)},useDebugValue:Au,useDeferredValue:function(e){var t=Ge();return x5(t,ie.memoizedState,e)},useTransition:function(){var e=Sn(Y1)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:r5,useSyncExternalStore:i5,useId:v5,unstable_isNewReconciler:!1},I9={readContext:Qe,useCallback:m5,useContext:Qe,useEffect:Lu,useImperativeHandle:C5,useInsertionEffect:p5,useLayoutEffect:f5,useMemo:g5,useReducer:Fn,useRef:d5,useState:function(){return Fn(Y1)},useDebugValue:Au,useDeferredValue:function(e){var t=Ge();return ie===null?t.memoizedState=e:x5(t,ie.memoizedState,e)},useTransition:function(){var e=Fn(Y1)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:r5,useSyncExternalStore:i5,useId:v5,unstable_isNewReconciler:!1};function q0(e,t){try{var n="",u=t;do n+=d8(u),u=u.return;while(u);var r=n}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:r,digest:null}}function Dn(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function v2(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var b9=typeof WeakMap=="function"?WeakMap:Map;function k5(e,t,n){n=g4(-1,n),n.tag=3,n.payload={element:null};var u=t.value;return n.callback=function(){v3||(v3=!0,B2=u),v2(e,t)},n}function S5(e,t,n){n=g4(-1,n),n.tag=3;var u=e.type.getDerivedStateFromError;if(typeof u=="function"){var r=t.value;n.payload=function(){return u(r)},n.callback=function(){v2(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){v2(e,t),typeof u!="function"&&(O4===null?O4=new Set([this]):O4.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Hr(e,t,n){var u=e.pingCache;if(u===null){u=e.pingCache=new b9;var r=new Set;u.set(t,r)}else r=u.get(t),r===void 0&&(r=new Set,u.set(t,r));r.has(n)||(r.add(n),e=q9.bind(null,e,t,n),t.then(e,e))}function Or(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _r(e,t,n,u,r){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=g4(-1,1),t.tag=2,H4(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=r,e)}var H9=E4.ReactCurrentOwner,De=!1;function ye(e,t,n,u){t.child=e===null?n5(t,null,n,u):X0(t,e.child,n,u)}function jr(e,t,n,u,r){n=n.render;var i=t.ref;return V0(t,r),u=Fu(e,t,n,u,i,r),n=Du(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,w4(e,t,r)):(W&&n&&fu(t),t.flags|=1,ye(e,t,u,r),t.child)}function Vr(e,t,n,u,r){if(e===null){var i=n.type;return typeof i=="function"&&!Ru(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,F5(e,t,i,u,r)):(e=Gt(n.type,null,u,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&r)===0){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:U1,n(o,u)&&e.ref===t.ref)return w4(e,t,r)}return t.flags|=1,e=j4(i,u),e.ref=t.ref,e.return=t,t.child=e}function F5(e,t,n,u,r){if(e!==null){var i=e.memoizedProps;if(U1(i,u)&&e.ref===t.ref)if(De=!1,t.pendingProps=u=i,(e.lanes&r)!==0)(e.flags&131072)!==0&&(De=!0);else return t.lanes=e.lanes,w4(e,t,r)}return y2(e,t,n,u,r)}function D5(e,t,n){var u=t.pendingProps,r=u.children,i=e!==null?e.memoizedState:null;if(u.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_(I0,Te),Te|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_(I0,Te),Te|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=i!==null?i.baseLanes:n,_(I0,Te),Te|=u}else i!==null?(u=i.baseLanes|n,t.memoizedState=null):u=n,_(I0,Te),Te|=u;return ye(e,t,r,n),t.child}function L5(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function y2(e,t,n,u,r){var i=Ae(n)?c0:ve.current;return i=G0(t,i),V0(t,r),n=Fu(e,t,n,u,i,r),u=Du(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,w4(e,t,r)):(W&&u&&fu(t),t.flags|=1,ye(e,t,n,r),t.child)}function Ur(e,t,n,u,r){if(Ae(n)){var i=!0;s3(t)}else i=!1;if(V0(t,r),t.stateNode===null)Zt(e,t),e5(t,n,u),x2(t,n,u,r),u=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Qe(c):(c=Ae(n)?c0:ve.current,c=G0(t,c));var C=n.getDerivedStateFromProps,m=typeof C=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==u||a!==c)&&Nr(t,o,u,c),B4=!1;var x=t.memoizedState;o.state=x,h3(t,u,o,r),a=t.memoizedState,l!==u||x!==a||Le.current||B4?(typeof C=="function"&&(g2(t,n,C,u),a=t.memoizedState),(l=B4||Tr(t,n,l,u,x,a,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=u,t.memoizedState=a),o.props=u,o.state=a,o.context=c,u=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),u=!1)}else{o=t.stateNode,qo(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ye(t.type,l),o.props=c,m=t.pendingProps,x=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Qe(a):(a=Ae(n)?c0:ve.current,a=G0(t,a));var y=n.getDerivedStateFromProps;(C=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||x!==a)&&Nr(t,o,u,a),B4=!1,x=t.memoizedState,o.state=x,h3(t,u,o,r);var k=t.memoizedState;l!==m||x!==k||Le.current||B4?(typeof y=="function"&&(g2(t,n,y,u),k=t.memoizedState),(c=B4||Tr(t,n,c,u,x,k,a)||!1)?(C||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(u,k,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(u,k,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=u,t.memoizedState=k),o.props=u,o.state=k,o.context=a,u=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),u=!1)}return w2(e,t,n,u,i,r)}function w2(e,t,n,u,r,i){L5(e,t);var o=(t.flags&128)!==0;if(!u&&!o)return r&&Br(t,n,!1),w4(e,t,i);u=t.stateNode,H9.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:u.render();return t.flags|=1,e!==null&&o?(t.child=X0(t,e.child,null,i),t.child=X0(t,null,l,i)):ye(e,t,l,i),t.memoizedState=u.state,r&&Br(t,n,!0),t.child}function A5(e){var t=e.stateNode;t.pendingContext?Ar(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ar(e,t.context,!1),wu(e,t.containerInfo)}function Zr(e,t,n,u,r){return K0(),Cu(r),t.flags|=256,ye(e,t,n,u),t.child}var E2={dehydrated:null,treeContext:null,retryLane:0};function k2(e){return{baseLanes:e,cachePool:null,transitions:null}}function B5(e,t,n){var u=t.pendingProps,r=G.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),_(G,r&1),e===null)return C2(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=u.children,e=u.fallback,i?(u=t.mode,i=t.child,o={mode:"hidden",children:o},(u&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=H3(o,u,0,null),e=a0(e,u,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=k2(n),t.memoizedState=E2,e):Bu(t,o));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return O9(e,t,o,u,l,r,n);if(i){i=u.fallback,o=t.mode,r=e.child,l=r.sibling;var a={mode:"hidden",children:u.children};return(o&1)===0&&t.child!==r?(u=t.child,u.childLanes=0,u.pendingProps=a,t.deletions=null):(u=j4(r,a),u.subtreeFlags=r.subtreeFlags&14680064),l!==null?i=j4(l,i):(i=a0(i,o,n,null),i.flags|=2),i.return=t,u.return=t,u.sibling=i,t.child=u,u=i,i=t.child,o=e.child.memoizedState,o=o===null?k2(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=E2,u}return i=e.child,e=i.sibling,u=j4(i,{mode:"visible",children:u.children}),(t.mode&1)===0&&(u.lanes=n),u.return=t,u.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=u,t.memoizedState=null,u}function Bu(e,t){return t=H3({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lt(e,t,n,u){return u!==null&&Cu(u),X0(t,e.child,null,n),e=Bu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function O9(e,t,n,u,r,i,o){if(n)return t.flags&256?(t.flags&=-257,u=Dn(Error(F(422))),Lt(e,t,o,u)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=u.fallback,r=t.mode,u=H3({mode:"visible",children:u.children},r,0,null),i=a0(i,r,o,null),i.flags|=2,u.return=t,i.return=t,u.sibling=i,t.child=u,(t.mode&1)!==0&&X0(t,e.child,null,o),t.child.memoizedState=k2(o),t.memoizedState=E2,i);if((t.mode&1)===0)return Lt(e,t,o,null);if(r.data==="$!"){if(u=r.nextSibling&&r.nextSibling.dataset,u)var l=u.dgst;return u=l,i=Error(F(419)),u=Dn(i,u,void 0),Lt(e,t,o,u)}if(l=(o&e.childLanes)!==0,De||l){if(u=ce,u!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(u.suspendedLanes|o))!==0?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,y4(e,r),t4(u,e,r,-1))}return Nu(),u=Dn(Error(F(421))),Lt(e,t,o,u)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=J9.bind(null,e),r._reactRetry=t,null):(e=i.treeContext,Re=b4(r.nextSibling),Ie=t,W=!0,Je=null,e!==null&&(Ve[Ue++]=C4,Ve[Ue++]=m4,Ve[Ue++]=d0,C4=e.id,m4=e.overflow,d0=t),t=Bu(t,u.children),t.flags|=4096,t)}function Wr(e,t,n){e.lanes|=t;var u=e.alternate;u!==null&&(u.lanes|=t),m2(e.return,t,n)}function Ln(e,t,n,u,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:u,tail:n,tailMode:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=u,i.tail=n,i.tailMode=r)}function P5(e,t,n){var u=t.pendingProps,r=u.revealOrder,i=u.tail;if(ye(e,t,u.children,n),u=G.current,(u&2)!==0)u=u&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wr(e,n,t);else if(e.tag===19)Wr(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}u&=1}if(_(G,u),(t.mode&1)===0)t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&C3(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Ln(t,!1,r,n,i);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&C3(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Ln(t,!0,n,null,i);break;case"together":Ln(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zt(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function w4(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),f0|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=j4(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=j4(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _9(e,t,n){switch(t.tag){case 3:A5(t),K0();break;case 5:u5(t);break;case 1:Ae(t.type)&&s3(t);break;case 4:wu(t,t.stateNode.containerInfo);break;case 10:var u=t.type._context,r=t.memoizedProps.value;_(p3,u._currentValue),u._currentValue=r;break;case 13:if(u=t.memoizedState,u!==null)return u.dehydrated!==null?(_(G,G.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?B5(e,t,n):(_(G,G.current&1),e=w4(e,t,n),e!==null?e.sibling:null);_(G,G.current&1);break;case 19:if(u=(n&t.childLanes)!==0,(e.flags&128)!==0){if(u)return P5(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),_(G,G.current),u)break;return null;case 22:case 23:return t.lanes=0,D5(e,t,n)}return w4(e,t,n)}var $5,S2,z5,M5;$5=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};S2=function(){};z5=function(e,t,n,u){var r=e.memoizedProps;if(r!==u){e=t.stateNode,i0(s4.current);var i=null;switch(n){case"input":r=Wn(e,r),u=Wn(e,u),i=[];break;case"select":r=X({},r,{value:void 0}),u=X({},u,{value:void 0}),i=[];break;case"textarea":r=Kn(e,r),u=Kn(e,u),i=[];break;default:typeof r.onClick!="function"&&typeof u.onClick=="function"&&(e.onclick=l3)}Yn(n,u);var o;n=null;for(c in r)if(!u.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var l=r[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(I1.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in u){var a=u[c];if(l=r!=null?r[c]:void 0,u.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(I1.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&j("scroll",e),i||l===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};M5=function(e,t,n,u){n!==u&&(t.flags|=4)};function x1(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var u=null;n!==null;)n.alternate!==null&&(u=n),n=n.sibling;u===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,u=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,u|=r.subtreeFlags&14680064,u|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,u|=r.subtreeFlags,u|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=u,e.childLanes=n,t}function j9(e,t,n){var u=t.pendingProps;switch(hu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Ae(t.type)&&a3(),me(t),null;case 3:return u=t.stateNode,Y0(),U(Le),U(ve),ku(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(e===null||e.child===null)&&(Ft(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Je!==null&&(z2(Je),Je=null))),S2(e,t),me(t),null;case 5:Eu(t);var r=i0(K1.current);if(n=t.type,e!==null&&t.stateNode!=null)z5(e,t,n,u,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!u){if(t.stateNode===null)throw Error(F(166));return me(t),null}if(e=i0(s4.current),Ft(t)){u=t.stateNode,n=t.type;var i=t.memoizedProps;switch(u[l4]=t,u[Q1]=i,e=(t.mode&1)!==0,n){case"dialog":j("cancel",u),j("close",u);break;case"iframe":case"object":case"embed":j("load",u);break;case"video":case"audio":for(r=0;r<F1.length;r++)j(F1[r],u);break;case"source":j("error",u);break;case"img":case"image":case"link":j("error",u),j("load",u);break;case"details":j("toggle",u);break;case"input":tr(u,i),j("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!i.multiple},j("invalid",u);break;case"textarea":ur(u,i),j("invalid",u)}Yn(n,i),r=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?u.textContent!==l&&(i.suppressHydrationWarning!==!0&&St(u.textContent,l,e),r=["children",l]):typeof l=="number"&&u.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&St(u.textContent,l,e),r=["children",""+l]):I1.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&j("scroll",u)}switch(n){case"input":mt(u),nr(u,i,!0);break;case"textarea":mt(u),rr(u);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(u.onclick=l3)}u=r,t.updateQueue=u,u!==null&&(t.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=io(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof u.is=="string"?e=o.createElement(n,{is:u.is}):(e=o.createElement(n),n==="select"&&(o=e,u.multiple?o.multiple=!0:u.size&&(o.size=u.size))):e=o.createElementNS(e,n),e[l4]=t,e[Q1]=u,$5(e,t,!1,!1),t.stateNode=e;e:{switch(o=qn(n,u),n){case"dialog":j("cancel",e),j("close",e),r=u;break;case"iframe":case"object":case"embed":j("load",e),r=u;break;case"video":case"audio":for(r=0;r<F1.length;r++)j(F1[r],e);r=u;break;case"source":j("error",e),r=u;break;case"img":case"image":case"link":j("error",e),j("load",e),r=u;break;case"details":j("toggle",e),r=u;break;case"input":tr(e,u),r=Wn(e,u),j("invalid",e);break;case"option":r=u;break;case"select":e._wrapperState={wasMultiple:!!u.multiple},r=X({},u,{value:void 0}),j("invalid",e);break;case"textarea":ur(e,u),r=Kn(e,u),j("invalid",e);break;default:r=u}Yn(n,r),l=r;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?ao(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&oo(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&b1(e,a):typeof a=="number"&&b1(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(I1.hasOwnProperty(i)?a!=null&&i==="onScroll"&&j("scroll",e):a!=null&&J2(e,i,a,o))}switch(n){case"input":mt(e),nr(e,u,!1);break;case"textarea":mt(e),rr(e);break;case"option":u.value!=null&&e.setAttribute("value",""+Z4(u.value));break;case"select":e.multiple=!!u.multiple,i=u.value,i!=null?H0(e,!!u.multiple,i,!1):u.defaultValue!=null&&H0(e,!!u.multiple,u.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=l3)}switch(n){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)M5(e,t,e.memoizedProps,u);else{if(typeof u!="string"&&t.stateNode===null)throw Error(F(166));if(n=i0(K1.current),i0(s4.current),Ft(t)){if(u=t.stateNode,n=t.memoizedProps,u[l4]=t,(i=u.nodeValue!==n)&&(e=Ie,e!==null))switch(e.tag){case 3:St(u.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&St(u.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else u=(n.nodeType===9?n:n.ownerDocument).createTextNode(u),u[l4]=t,t.stateNode=u}return me(t),null;case 13:if(U(G),u=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Re!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Xo(),K0(),t.flags|=98560,i=!1;else if(i=Ft(t),u!==null&&u.dehydrated!==null){if(e===null){if(!i)throw Error(F(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[l4]=t}else K0(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;me(t),i=!1}else Je!==null&&(z2(Je),Je=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(u=u!==null,u!==(e!==null&&e.memoizedState!==null)&&u&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(G.current&1)!==0?oe===0&&(oe=3):Nu())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return Y0(),S2(e,t),e===null&&Z1(t.stateNode.containerInfo),me(t),null;case 10:return xu(t.type._context),me(t),null;case 17:return Ae(t.type)&&a3(),me(t),null;case 19:if(U(G),i=t.memoizedState,i===null)return me(t),null;if(u=(t.flags&128)!==0,o=i.rendering,o===null)if(u)x1(i,!1);else{if(oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=C3(e),o!==null){for(t.flags|=128,x1(i,!1),u=o.updateQueue,u!==null&&(t.updateQueue=u,t.flags|=4),t.subtreeFlags=0,u=n,n=t.child;n!==null;)i=n,e=u,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _(G,G.current&1|2),t.child}e=e.sibling}i.tail!==null&&ee()>J0&&(t.flags|=128,u=!0,x1(i,!1),t.lanes=4194304)}else{if(!u)if(e=C3(o),e!==null){if(t.flags|=128,u=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),x1(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!W)return me(t),null}else 2*ee()-i.renderingStartTime>J0&&n!==1073741824&&(t.flags|=128,u=!0,x1(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ee(),t.sibling=null,n=G.current,_(G,u?n&1|2:n&1),t):(me(t),null);case 22:case 23:return Tu(),u=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==u&&(t.flags|=8192),u&&(t.mode&1)!==0?(Te&1073741824)!==0&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function V9(e,t){switch(hu(t),t.tag){case 1:return Ae(t.type)&&a3(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Y0(),U(Le),U(ve),ku(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Eu(t),null;case 13:if(U(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));K0()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(G),null;case 4:return Y0(),null;case 10:return xu(t.type._context),null;case 22:case 23:return Tu(),null;case 24:return null;default:return null}}var At=!1,ge=!1,U9=typeof WeakSet=="function"?WeakSet:Set,P=null;function R0(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(u){q(e,t,u)}else n.current=null}function F2(e,t,n){try{n()}catch(u){q(e,t,u)}}var Qr=!1;function Z9(e,t){if(a2=r3,e=Io(),pu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var u=n.getSelection&&n.getSelection();if(u&&u.rangeCount!==0){n=u.anchorNode;var r=u.anchorOffset,i=u.focusNode;u=u.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,c=0,C=0,m=e,x=null;t:for(;;){for(var y;m!==n||r!==0&&m.nodeType!==3||(l=o+r),m!==i||u!==0&&m.nodeType!==3||(a=o+u),m.nodeType===3&&(o+=m.nodeValue.length),(y=m.firstChild)!==null;)x=m,m=y;for(;;){if(m===e)break t;if(x===n&&++c===r&&(l=o),x===i&&++C===u&&(a=o),(y=m.nextSibling)!==null)break;m=x,x=m.parentNode}m=y}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(s2={focusedElem:e,selectionRange:n},r3=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var k=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,L=k.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ye(t.type,w),L);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(E){q(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return k=Qr,Qr=!1,k}function M1(e,t,n){var u=t.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var r=u=u.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&F2(t,n,i)}r=r.next}while(r!==u)}}function I3(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var u=n.create;n.destroy=u()}n=n.next}while(n!==t)}}function D2(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function T5(e){var t=e.alternate;t!==null&&(e.alternate=null,T5(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[l4],delete t[Q1],delete t[p2],delete t[L9],delete t[A9])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function N5(e){return e.tag===5||e.tag===3||e.tag===4}function Gr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||N5(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function L2(e,t,n){var u=e.tag;if(u===5||u===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=l3));else if(u!==4&&(e=e.child,e!==null))for(L2(e,t,n),e=e.sibling;e!==null;)L2(e,t,n),e=e.sibling}function A2(e,t,n){var u=e.tag;if(u===5||u===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(u!==4&&(e=e.child,e!==null))for(A2(e,t,n),e=e.sibling;e!==null;)A2(e,t,n),e=e.sibling}var de=null,qe=!1;function D4(e,t,n){for(n=n.child;n!==null;)R5(e,t,n),n=n.sibling}function R5(e,t,n){if(a4&&typeof a4.onCommitFiberUnmount=="function")try{a4.onCommitFiberUnmount(B3,n)}catch{}switch(n.tag){case 5:ge||R0(n,t);case 6:var u=de,r=qe;de=null,D4(e,t,n),de=u,qe=r,de!==null&&(qe?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(qe?(e=de,n=n.stateNode,e.nodeType===8?yn(e.parentNode,n):e.nodeType===1&&yn(e,n),j1(e)):yn(de,n.stateNode));break;case 4:u=de,r=qe,de=n.stateNode.containerInfo,qe=!0,D4(e,t,n),de=u,qe=r;break;case 0:case 11:case 14:case 15:if(!ge&&(u=n.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){r=u=u.next;do{var i=r,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&F2(n,t,o),r=r.next}while(r!==u)}D4(e,t,n);break;case 1:if(!ge&&(R0(n,t),u=n.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=n.memoizedProps,u.state=n.memoizedState,u.componentWillUnmount()}catch(l){q(n,t,l)}D4(e,t,n);break;case 21:D4(e,t,n);break;case 22:n.mode&1?(ge=(u=ge)||n.memoizedState!==null,D4(e,t,n),ge=u):D4(e,t,n);break;default:D4(e,t,n)}}function Kr(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new U9),t.forEach(function(u){var r=e6.bind(null,e,u);n.has(u)||(n.add(u),u.then(r,r))})}}function Xe(e,t){var n=t.deletions;if(n!==null)for(var u=0;u<n.length;u++){var r=n[u];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:de=l.stateNode,qe=!1;break e;case 3:de=l.stateNode.containerInfo,qe=!0;break e;case 4:de=l.stateNode.containerInfo,qe=!0;break e}l=l.return}if(de===null)throw Error(F(160));R5(i,o,r),de=null,qe=!1;var a=r.alternate;a!==null&&(a.return=null),r.return=null}catch(c){q(r,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)I5(t,e),t=t.sibling}function I5(e,t){var n=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xe(t,e),r4(e),u&4){try{M1(3,e,e.return),I3(3,e)}catch(w){q(e,e.return,w)}try{M1(5,e,e.return)}catch(w){q(e,e.return,w)}}break;case 1:Xe(t,e),r4(e),u&512&&n!==null&&R0(n,n.return);break;case 5:if(Xe(t,e),r4(e),u&512&&n!==null&&R0(n,n.return),e.flags&32){var r=e.stateNode;try{b1(r,"")}catch(w){q(e,e.return,w)}}if(u&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&uo(r,i),qn(l,o);var c=qn(l,i);for(o=0;o<a.length;o+=2){var C=a[o],m=a[o+1];C==="style"?ao(r,m):C==="dangerouslySetInnerHTML"?oo(r,m):C==="children"?b1(r,m):J2(r,C,m,c)}switch(l){case"input":Qn(r,i);break;case"textarea":ro(r,i);break;case"select":var x=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?H0(r,!!i.multiple,y,!1):x!==!!i.multiple&&(i.defaultValue!=null?H0(r,!!i.multiple,i.defaultValue,!0):H0(r,!!i.multiple,i.multiple?[]:"",!1))}r[Q1]=i}catch(w){q(e,e.return,w)}}break;case 6:if(Xe(t,e),r4(e),u&4){if(e.stateNode===null)throw Error(F(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(w){q(e,e.return,w)}}break;case 3:if(Xe(t,e),r4(e),u&4&&n!==null&&n.memoizedState.isDehydrated)try{j1(t.containerInfo)}catch(w){q(e,e.return,w)}break;case 4:Xe(t,e),r4(e);break;case 13:Xe(t,e),r4(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(zu=ee())),u&4&&Kr(e);break;case 22:if(C=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(c=ge)||C,Xe(t,e),ge=c):Xe(t,e),r4(e),u&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!C&&(e.mode&1)!==0)for(P=e,C=e.child;C!==null;){for(m=P=C;P!==null;){switch(x=P,y=x.child,x.tag){case 0:case 11:case 14:case 15:M1(4,x,x.return);break;case 1:R0(x,x.return);var k=x.stateNode;if(typeof k.componentWillUnmount=="function"){u=x,n=x.return;try{t=u,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(w){q(u,n,w)}}break;case 5:R0(x,x.return);break;case 22:if(x.memoizedState!==null){Yr(m);continue}}y!==null?(y.return=x,P=y):Yr(m)}C=C.sibling}e:for(C=null,m=e;;){if(m.tag===5){if(C===null){C=m;try{r=m.stateNode,c?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,a=m.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=lo("display",o))}catch(w){q(e,e.return,w)}}}else if(m.tag===6){if(C===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(w){q(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;C===m&&(C=null),m=m.return}C===m&&(C=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Xe(t,e),r4(e),u&4&&Kr(e);break;case 21:break;default:Xe(t,e),r4(e)}}function r4(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(N5(n)){var u=n;break e}n=n.return}throw Error(F(160))}switch(u.tag){case 5:var r=u.stateNode;u.flags&32&&(b1(r,""),u.flags&=-33);var i=Gr(e);A2(e,i,r);break;case 3:case 4:var o=u.stateNode.containerInfo,l=Gr(e);L2(e,l,o);break;default:throw Error(F(161))}}catch(a){q(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function W9(e,t,n){P=e,b5(e)}function b5(e,t,n){for(var u=(e.mode&1)!==0;P!==null;){var r=P,i=r.child;if(r.tag===22&&u){var o=r.memoizedState!==null||At;if(!o){var l=r.alternate,a=l!==null&&l.memoizedState!==null||ge;l=At;var c=ge;if(At=o,(ge=a)&&!c)for(P=r;P!==null;)o=P,a=o.child,o.tag===22&&o.memoizedState!==null?qr(r):a!==null?(a.return=o,P=a):qr(r);for(;i!==null;)P=i,b5(i),i=i.sibling;P=r,At=l,ge=c}Xr(e)}else(r.subtreeFlags&8772)!==0&&i!==null?(i.return=r,P=i):Xr(e)}}function Xr(e){for(;P!==null;){var t=P;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ge||I3(5,t);break;case 1:var u=t.stateNode;if(t.flags&4&&!ge)if(n===null)u.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);u.componentDidUpdate(r,n.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Mr(t,i,u);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Mr(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var C=c.memoizedState;if(C!==null){var m=C.dehydrated;m!==null&&j1(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ge||t.flags&512&&D2(t)}catch(x){q(t,t.return,x)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Yr(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function qr(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{I3(4,t)}catch(a){q(t,n,a)}break;case 1:var u=t.stateNode;if(typeof u.componentDidMount=="function"){var r=t.return;try{u.componentDidMount()}catch(a){q(t,r,a)}}var i=t.return;try{D2(t)}catch(a){q(t,i,a)}break;case 5:var o=t.return;try{D2(t)}catch(a){q(t,o,a)}}}catch(a){q(t,t.return,a)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var Q9=Math.ceil,x3=E4.ReactCurrentDispatcher,Pu=E4.ReactCurrentOwner,We=E4.ReactCurrentBatchConfig,b=0,ce=null,ne=null,pe=0,Te=0,I0=G4(0),oe=0,J1=null,f0=0,b3=0,$u=0,T1=null,Fe=null,zu=0,J0=1/0,p4=null,v3=!1,B2=null,O4=null,Bt=!1,M4=null,y3=0,N1=0,P2=null,Wt=-1,Qt=0;function we(){return(b&6)!==0?ee():Wt!==-1?Wt:Wt=ee()}function _4(e){return(e.mode&1)===0?1:(b&2)!==0&&pe!==0?pe&-pe:P9.transition!==null?(Qt===0&&(Qt=wo()),Qt):(e=O,e!==0||(e=window.event,e=e===void 0?16:Ao(e.type)),e)}function t4(e,t,n,u){if(50<N1)throw N1=0,P2=null,Error(F(185));lt(e,n,u),((b&2)===0||e!==ce)&&(e===ce&&((b&2)===0&&(b3|=n),oe===4&&$4(e,pe)),Be(e,u),n===1&&b===0&&(t.mode&1)===0&&(J0=ee()+500,T3&&K4()))}function Be(e,t){var n=e.callbackNode;P8(e,t);var u=u3(e,e===ce?pe:0);if(u===0)n!==null&&lr(n),e.callbackNode=null,e.callbackPriority=0;else if(t=u&-u,e.callbackPriority!==t){if(n!=null&&lr(n),t===1)e.tag===0?B9(Jr.bind(null,e)):Qo(Jr.bind(null,e)),F9(function(){(b&6)===0&&K4()}),n=null;else{switch(Eo(u)){case 1:n=ru;break;case 4:n=vo;break;case 16:n=n3;break;case 536870912:n=yo;break;default:n=n3}n=W5(n,H5.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function H5(e,t){if(Wt=-1,Qt=0,(b&6)!==0)throw Error(F(327));var n=e.callbackNode;if(U0()&&e.callbackNode!==n)return null;var u=u3(e,e===ce?pe:0);if(u===0)return null;if((u&30)!==0||(u&e.expiredLanes)!==0||t)t=w3(e,u);else{t=u;var r=b;b|=2;var i=_5();(ce!==e||pe!==t)&&(p4=null,J0=ee()+500,l0(e,t));do try{X9();break}catch(l){O5(e,l)}while(1);gu(),x3.current=i,b=r,ne!==null?t=0:(ce=null,pe=0,t=oe)}if(t!==0){if(t===2&&(r=u2(e),r!==0&&(u=r,t=$2(e,r))),t===1)throw n=J1,l0(e,0),$4(e,u),Be(e,ee()),n;if(t===6)$4(e,u);else{if(r=e.current.alternate,(u&30)===0&&!G9(r)&&(t=w3(e,u),t===2&&(i=u2(e),i!==0&&(u=i,t=$2(e,i))),t===1))throw n=J1,l0(e,0),$4(e,u),Be(e,ee()),n;switch(e.finishedWork=r,e.finishedLanes=u,t){case 0:case 1:throw Error(F(345));case 2:t0(e,Fe,p4);break;case 3:if($4(e,u),(u&130023424)===u&&(t=zu+500-ee(),10<t)){if(u3(e,0)!==0)break;if(r=e.suspendedLanes,(r&u)!==u){we(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=d2(t0.bind(null,e,Fe,p4),t);break}t0(e,Fe,p4);break;case 4:if($4(e,u),(u&4194240)===u)break;for(t=e.eventTimes,r=-1;0<u;){var o=31-e4(u);i=1<<o,o=t[o],o>r&&(r=o),u&=~i}if(u=r,u=ee()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Q9(u/1960))-u,10<u){e.timeoutHandle=d2(t0.bind(null,e,Fe,p4),u);break}t0(e,Fe,p4);break;case 5:t0(e,Fe,p4);break;default:throw Error(F(329))}}}return Be(e,ee()),e.callbackNode===n?H5.bind(null,e):null}function $2(e,t){var n=T1;return e.current.memoizedState.isDehydrated&&(l0(e,t).flags|=256),e=w3(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&z2(t)),e}function z2(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function G9(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var u=0;u<n.length;u++){var r=n[u],i=r.getSnapshot;r=r.value;try{if(!u4(i(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $4(e,t){for(t&=~$u,t&=~b3,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-e4(t),u=1<<n;e[n]=-1,t&=~u}}function Jr(e){if((b&6)!==0)throw Error(F(327));U0();var t=u3(e,0);if((t&1)===0)return Be(e,ee()),null;var n=w3(e,t);if(e.tag!==0&&n===2){var u=u2(e);u!==0&&(t=u,n=$2(e,u))}if(n===1)throw n=J1,l0(e,0),$4(e,t),Be(e,ee()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,t0(e,Fe,p4),Be(e,ee()),null}function Mu(e,t){var n=b;b|=1;try{return e(t)}finally{b=n,b===0&&(J0=ee()+500,T3&&K4())}}function h0(e){M4!==null&&M4.tag===0&&(b&6)===0&&U0();var t=b;b|=1;var n=We.transition,u=O;try{if(We.transition=null,O=1,e)return e()}finally{O=u,We.transition=n,b=t,(b&6)===0&&K4()}}function Tu(){Te=I0.current,U(I0)}function l0(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,S9(n)),ne!==null)for(n=ne.return;n!==null;){var u=n;switch(hu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&a3();break;case 3:Y0(),U(Le),U(ve),ku();break;case 5:Eu(u);break;case 4:Y0();break;case 13:U(G);break;case 19:U(G);break;case 10:xu(u.type._context);break;case 22:case 23:Tu()}n=n.return}if(ce=e,ne=e=j4(e.current,null),pe=Te=t,oe=0,J1=null,$u=b3=f0=0,Fe=T1=null,r0!==null){for(t=0;t<r0.length;t++)if(n=r0[t],u=n.interleaved,u!==null){n.interleaved=null;var r=u.next,i=n.pending;if(i!==null){var o=i.next;i.next=r,u.next=o}n.pending=u}r0=null}return e}function O5(e,t){do{var n=ne;try{if(gu(),Vt.current=g3,m3){for(var u=K.memoizedState;u!==null;){var r=u.queue;r!==null&&(r.pending=null),u=u.next}m3=!1}if(p0=0,le=ie=K=null,z1=!1,X1=0,Pu.current=null,n===null||n.return===null){oe=1,J1=t,ne=null;break}e:{var i=e,o=n.return,l=n,a=t;if(t=pe,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,C=l,m=C.tag;if((C.mode&1)===0&&(m===0||m===11||m===15)){var x=C.alternate;x?(C.updateQueue=x.updateQueue,C.memoizedState=x.memoizedState,C.lanes=x.lanes):(C.updateQueue=null,C.memoizedState=null)}var y=Or(o);if(y!==null){y.flags&=-257,_r(y,o,l,i,t),y.mode&1&&Hr(i,c,t),t=y,a=c;var k=t.updateQueue;if(k===null){var w=new Set;w.add(a),t.updateQueue=w}else k.add(a);break e}else{if((t&1)===0){Hr(i,c,t),Nu();break e}a=Error(F(426))}}else if(W&&l.mode&1){var L=Or(o);if(L!==null){(L.flags&65536)===0&&(L.flags|=256),_r(L,o,l,i,t),Cu(q0(a,l));break e}}i=a=q0(a,l),oe!==4&&(oe=2),T1===null?T1=[i]:T1.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=k5(i,a,t);zr(i,p);break e;case 1:l=a;var d=i.type,h=i.stateNode;if((i.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(O4===null||!O4.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var E=S5(i,l,t);zr(i,E);break e}}i=i.return}while(i!==null)}V5(n)}catch(S){t=S,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(1)}function _5(){var e=x3.current;return x3.current=g3,e===null?g3:e}function Nu(){(oe===0||oe===3||oe===2)&&(oe=4),ce===null||(f0&268435455)===0&&(b3&268435455)===0||$4(ce,pe)}function w3(e,t){var n=b;b|=2;var u=_5();(ce!==e||pe!==t)&&(p4=null,l0(e,t));do try{K9();break}catch(r){O5(e,r)}while(1);if(gu(),b=n,x3.current=u,ne!==null)throw Error(F(261));return ce=null,pe=0,oe}function K9(){for(;ne!==null;)j5(ne)}function X9(){for(;ne!==null&&!w8();)j5(ne)}function j5(e){var t=Z5(e.alternate,e,Te);e.memoizedProps=e.pendingProps,t===null?V5(e):ne=t,Pu.current=null}function V5(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=j9(n,t,Te),n!==null){ne=n;return}}else{if(n=V9(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,ne=null;return}}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);oe===0&&(oe=5)}function t0(e,t,n){var u=O,r=We.transition;try{We.transition=null,O=1,Y9(e,t,n,u)}finally{We.transition=r,O=u}return null}function Y9(e,t,n,u){do U0();while(M4!==null);if((b&6)!==0)throw Error(F(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if($8(e,i),e===ce&&(ne=ce=null,pe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Bt||(Bt=!0,W5(n3,function(){return U0(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=We.transition,We.transition=null;var o=O;O=1;var l=b;b|=4,Pu.current=null,Z9(e,n),I5(n,e),g9(s2),r3=!!a2,s2=a2=null,e.current=n,W9(n),E8(),b=l,O=o,We.transition=i}else e.current=n;if(Bt&&(Bt=!1,M4=e,y3=r),i=e.pendingLanes,i===0&&(O4=null),F8(n.stateNode),Be(e,ee()),t!==null)for(u=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],u(r.value,{componentStack:r.stack,digest:r.digest});if(v3)throw v3=!1,e=B2,B2=null,e;return(y3&1)!==0&&e.tag!==0&&U0(),i=e.pendingLanes,(i&1)!==0?e===P2?N1++:(N1=0,P2=e):N1=0,K4(),null}function U0(){if(M4!==null){var e=Eo(y3),t=We.transition,n=O;try{if(We.transition=null,O=16>e?16:e,M4===null)var u=!1;else{if(e=M4,M4=null,y3=0,(b&6)!==0)throw Error(F(331));var r=b;for(b|=4,P=e.current;P!==null;){var i=P,o=i.child;if((P.flags&16)!==0){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(P=c;P!==null;){var C=P;switch(C.tag){case 0:case 11:case 15:M1(8,C,i)}var m=C.child;if(m!==null)m.return=C,P=m;else for(;P!==null;){C=P;var x=C.sibling,y=C.return;if(T5(C),C===c){P=null;break}if(x!==null){x.return=y,P=x;break}P=y}}}var k=i.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var L=w.sibling;w.sibling=null,w=L}while(w!==null)}}P=i}}if((i.subtreeFlags&2064)!==0&&o!==null)o.return=i,P=o;else e:for(;P!==null;){if(i=P,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:M1(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,P=p;break e}P=i.return}}var d=e.current;for(P=d;P!==null;){o=P;var h=o.child;if((o.subtreeFlags&2064)!==0&&h!==null)h.return=o,P=h;else e:for(o=d;P!==null;){if(l=P,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:I3(9,l)}}catch(S){q(l,l.return,S)}if(l===o){P=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,P=E;break e}P=l.return}}if(b=r,K4(),a4&&typeof a4.onPostCommitFiberRoot=="function")try{a4.onPostCommitFiberRoot(B3,e)}catch{}u=!0}return u}finally{O=n,We.transition=t}}return!1}function ei(e,t,n){t=q0(n,t),t=k5(e,t,1),e=H4(e,t,1),t=we(),e!==null&&(lt(e,1,t),Be(e,t))}function q(e,t,n){if(e.tag===3)ei(e,e,n);else for(;t!==null;){if(t.tag===3){ei(t,e,n);break}else if(t.tag===1){var u=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(O4===null||!O4.has(u))){e=q0(n,e),e=S5(t,e,1),t=H4(t,e,1),e=we(),t!==null&&(lt(t,1,e),Be(t,e));break}}t=t.return}}function q9(e,t,n){var u=e.pingCache;u!==null&&u.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(pe&n)===n&&(oe===4||oe===3&&(pe&130023424)===pe&&500>ee()-zu?l0(e,0):$u|=n),Be(e,t)}function U5(e,t){t===0&&((e.mode&1)===0?t=1:(t=vt,vt<<=1,(vt&130023424)===0&&(vt=4194304)));var n=we();e=y4(e,t),e!==null&&(lt(e,t,n),Be(e,n))}function J9(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),U5(e,n)}function e6(e,t){var n=0;switch(e.tag){case 13:var u=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:u=e.stateNode;break;default:throw Error(F(314))}u!==null&&u.delete(t),U5(e,n)}var Z5;Z5=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)De=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return De=!1,_9(e,t,n);De=(e.flags&131072)!==0}else De=!1,W&&(t.flags&1048576)!==0&&Go(t,d3,t.index);switch(t.lanes=0,t.tag){case 2:var u=t.type;Zt(e,t),e=t.pendingProps;var r=G0(t,ve.current);V0(t,n),r=Fu(null,t,u,e,r,n);var i=Du();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(u)?(i=!0,s3(t)):i=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,yu(t),r.updater=N3,t.stateNode=r,r._reactInternals=t,x2(t,u,e,n),t=w2(null,t,u,!0,i,n)):(t.tag=0,W&&i&&fu(t),ye(null,t,r,n),t=t.child),t;case 16:u=t.elementType;e:{switch(Zt(e,t),e=t.pendingProps,r=u._init,u=r(u._payload),t.type=u,r=t.tag=n6(u),e=Ye(u,e),r){case 0:t=y2(null,t,u,e,n);break e;case 1:t=Ur(null,t,u,e,n);break e;case 11:t=jr(null,t,u,e,n);break e;case 14:t=Vr(null,t,u,Ye(u.type,e),n);break e}throw Error(F(306,u,""))}return t;case 0:return u=t.type,r=t.pendingProps,r=t.elementType===u?r:Ye(u,r),y2(e,t,u,r,n);case 1:return u=t.type,r=t.pendingProps,r=t.elementType===u?r:Ye(u,r),Ur(e,t,u,r,n);case 3:e:{if(A5(t),e===null)throw Error(F(387));u=t.pendingProps,i=t.memoizedState,r=i.element,qo(e,t),h3(t,u,null,n);var o=t.memoizedState;if(u=o.element,i.isDehydrated)if(i={element:u,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){r=q0(Error(F(423)),t),t=Zr(e,t,u,n,r);break e}else if(u!==r){r=q0(Error(F(424)),t),t=Zr(e,t,u,n,r);break e}else for(Re=b4(t.stateNode.containerInfo.firstChild),Ie=t,W=!0,Je=null,n=n5(t,null,u,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(K0(),u===r){t=w4(e,t,n);break e}ye(e,t,u,n)}t=t.child}return t;case 5:return u5(t),e===null&&C2(t),u=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,o=r.children,c2(u,r)?o=null:i!==null&&c2(u,i)&&(t.flags|=32),L5(e,t),ye(e,t,o,n),t.child;case 6:return e===null&&C2(t),null;case 13:return B5(e,t,n);case 4:return wu(t,t.stateNode.containerInfo),u=t.pendingProps,e===null?t.child=X0(t,null,u,n):ye(e,t,u,n),t.child;case 11:return u=t.type,r=t.pendingProps,r=t.elementType===u?r:Ye(u,r),jr(e,t,u,r,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(u=t.type._context,r=t.pendingProps,i=t.memoizedProps,o=r.value,_(p3,u._currentValue),u._currentValue=o,i!==null)if(u4(i.value,o)){if(i.children===r.children&&!Le.current){t=w4(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var a=l.firstContext;a!==null;){if(a.context===u){if(i.tag===1){a=g4(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var C=c.pending;C===null?a.next=a:(a.next=C.next,C.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),m2(i.return,n,t),l.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),m2(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ye(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,u=t.pendingProps.children,V0(t,n),r=Qe(r),u=u(r),t.flags|=1,ye(e,t,u,n),t.child;case 14:return u=t.type,r=Ye(u,t.pendingProps),r=Ye(u.type,r),Vr(e,t,u,r,n);case 15:return F5(e,t,t.type,t.pendingProps,n);case 17:return u=t.type,r=t.pendingProps,r=t.elementType===u?r:Ye(u,r),Zt(e,t),t.tag=1,Ae(u)?(e=!0,s3(t)):e=!1,V0(t,n),e5(t,u,r),x2(t,u,r,n),w2(null,t,u,!0,e,n);case 19:return P5(e,t,n);case 22:return D5(e,t,n)}throw Error(F(156,t.tag))};function W5(e,t){return xo(e,t)}function t6(e,t,n,u){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,u){return new t6(e,t,n,u)}function Ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function n6(e){if(typeof e=="function")return Ru(e)?1:0;if(e!=null){if(e=e.$$typeof,e===tu)return 11;if(e===nu)return 14}return 2}function j4(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gt(e,t,n,u,r,i){var o=2;if(u=e,typeof e=="function")Ru(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case L0:return a0(n.children,r,i,t);case eu:o=8,r|=8;break;case jn:return e=Ze(12,n,t,r|2),e.elementType=jn,e.lanes=i,e;case Vn:return e=Ze(13,n,t,r),e.elementType=Vn,e.lanes=i,e;case Un:return e=Ze(19,n,t,r),e.elementType=Un,e.lanes=i,e;case eo:return H3(n,r,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qi:o=10;break e;case Ji:o=9;break e;case tu:o=11;break e;case nu:o=14;break e;case A4:o=16,u=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=Ze(o,n,t,r),t.elementType=e,t.type=u,t.lanes=i,t}function a0(e,t,n,u){return e=Ze(7,e,u,t),e.lanes=n,e}function H3(e,t,n,u){return e=Ze(22,e,u,t),e.elementType=eo,e.lanes=n,e.stateNode={isHidden:!1},e}function An(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function Bn(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function u6(e,t,n,u,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sn(0),this.expirationTimes=sn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sn(0),this.identifierPrefix=u,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Iu(e,t,n,u,r,i,o,l,a){return e=new u6(e,t,n,l,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ze(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:u,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yu(i),e}function r6(e,t,n){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D0,key:u==null?null:""+u,children:e,containerInfo:t,implementation:n}}function Q5(e){if(!e)return W4;e=e._reactInternals;e:{if(x0(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Wo(e,n,t)}return t}function G5(e,t,n,u,r,i,o,l,a){return e=Iu(n,u,!0,e,r,i,o,l,a),e.context=Q5(null),n=e.current,u=we(),r=_4(n),i=g4(u,r),i.callback=t!=null?t:null,H4(n,i,r),e.current.lanes=r,lt(e,r,u),Be(e,u),e}function O3(e,t,n,u){var r=t.current,i=we(),o=_4(r);return n=Q5(n),t.context===null?t.context=n:t.pendingContext=n,t=g4(i,o),t.payload={element:e},u=u===void 0?null:u,u!==null&&(t.callback=u),e=H4(r,t,o),e!==null&&(t4(e,r,o,i),jt(e,r,o)),o}function E3(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ti(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bu(e,t){ti(e,t),(e=e.alternate)&&ti(e,t)}function i6(){return null}var K5=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hu(e){this._internalRoot=e}_3.prototype.render=Hu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));O3(e,t,null,null)};_3.prototype.unmount=Hu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;h0(function(){O3(null,e,null,null)}),t[v4]=null}};function _3(e){this._internalRoot=e}_3.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fo();e={blockedOn:null,target:e,priority:t};for(var n=0;n<P4.length&&t!==0&&t<P4[n].priority;n++);P4.splice(n,0,e),n===0&&Lo(e)}};function Ou(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function j3(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ni(){}function o6(e,t,n,u,r){if(r){if(typeof u=="function"){var i=u;u=function(){var c=E3(o);i.call(c)}}var o=G5(t,u,e,0,null,!1,!1,"",ni);return e._reactRootContainer=o,e[v4]=o.current,Z1(e.nodeType===8?e.parentNode:e),h0(),o}for(;r=e.lastChild;)e.removeChild(r);if(typeof u=="function"){var l=u;u=function(){var c=E3(a);l.call(c)}}var a=Iu(e,0,!1,null,null,!1,!1,"",ni);return e._reactRootContainer=a,e[v4]=a.current,Z1(e.nodeType===8?e.parentNode:e),h0(function(){O3(t,a,n,u)}),a}function V3(e,t,n,u,r){var i=n._reactRootContainer;if(i){var o=i;if(typeof r=="function"){var l=r;r=function(){var a=E3(o);l.call(a)}}O3(t,o,e,r)}else o=o6(n,t,e,r,u);return E3(o)}ko=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=S1(t.pendingLanes);n!==0&&(iu(t,n|1),Be(t,ee()),(b&6)===0&&(J0=ee()+500,K4()))}break;case 13:h0(function(){var u=y4(e,1);if(u!==null){var r=we();t4(u,e,1,r)}}),bu(e,1)}};ou=function(e){if(e.tag===13){var t=y4(e,134217728);if(t!==null){var n=we();t4(t,e,134217728,n)}bu(e,134217728)}};So=function(e){if(e.tag===13){var t=_4(e),n=y4(e,t);if(n!==null){var u=we();t4(n,e,t,u)}bu(e,t)}};Fo=function(){return O};Do=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};e2=function(e,t,n){switch(t){case"input":if(Qn(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var u=n[t];if(u!==e&&u.form===e.form){var r=M3(u);if(!r)throw Error(F(90));no(u),Qn(u,r)}}}break;case"textarea":ro(e,n);break;case"select":t=n.value,t!=null&&H0(e,!!n.multiple,t,!1)}};po=Mu;fo=h0;var l6={usingClientEntryPoint:!1,Events:[st,$0,M3,so,co,Mu]},v1={findFiberByHostInstance:u0,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},a6={bundleType:v1.bundleType,version:v1.version,rendererPackageName:v1.rendererPackageName,rendererConfig:v1.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:E4.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mo(e),e===null?null:e.stateNode},findFiberByHostInstance:v1.findFiberByHostInstance||i6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Pt=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pt.isDisabled&&Pt.supportsFiber)try{B3=Pt.inject(a6),a4=Pt}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l6;He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ou(t))throw Error(F(200));return r6(e,t,null,n)};He.createRoot=function(e,t){if(!Ou(e))throw Error(F(299));var n=!1,u="",r=K5;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(u=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Iu(e,1,!1,null,null,n,!1,u,r),e[v4]=t.current,Z1(e.nodeType===8?e.parentNode:e),new Hu(t)};He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=mo(t),e=e===null?null:e.stateNode,e};He.flushSync=function(e){return h0(e)};He.hydrate=function(e,t,n){if(!j3(t))throw Error(F(200));return V3(null,e,t,!0,n)};He.hydrateRoot=function(e,t,n){if(!Ou(e))throw Error(F(405));var u=n!=null&&n.hydratedSources||null,r=!1,i="",o=K5;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=G5(t,null,e,1,n!=null?n:null,r,!1,i,o),e[v4]=t.current,Z1(e),u)for(e=0;e<u.length;e++)n=u[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new _3(t)};He.render=function(e,t,n){if(!j3(t))throw Error(F(200));return V3(null,e,t,!1,n)};He.unmountComponentAtNode=function(e){if(!j3(e))throw Error(F(40));return e._reactRootContainer?(h0(function(){V3(null,null,e,!1,function(){e._reactRootContainer=null,e[v4]=null})}),!0):!1};He.unstable_batchedUpdates=Mu;He.unstable_renderSubtreeIntoContainer=function(e,t,n,u){if(!j3(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return V3(e,t,n,!1,u)};He.version="18.2.0-next-9e3b772b8-20220608";function X5(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X5)}catch(e){console.error(e)}}X5(),Qi.exports=He;var s6=Qi.exports;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function et(){return et=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},et.apply(this,arguments)}var T4;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(T4||(T4={}));const ui="popstate";function c6(e){e===void 0&&(e={});function t(r,i){let{pathname:o="/",search:l="",hash:a=""}=v0(r.location.hash.substr(1));return M2("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){let o=r.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let a=r.location.href,c=a.indexOf("#");l=c===-1?a:a.slice(0,c)}return l+"#"+(typeof i=="string"?i:k3(i))}function u(r,i){U3(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return p6(t,n,u,e)}function ue(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}function U3(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}function d6(){return Math.random().toString(36).substr(2,8)}function ri(e,t){return{usr:e.state,key:e.key,idx:t}}function M2(e,t,n,u){return n===void 0&&(n=null),et({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?v0(t):t,{state:n,key:t&&t.key||u||d6()})}function k3(e){let{pathname:t="/",search:n="",hash:u=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),u&&u!=="#"&&(t+=u.charAt(0)==="#"?u:"#"+u),t}function v0(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let u=e.indexOf("?");u>=0&&(t.search=e.substr(u),e=e.substr(0,u)),e&&(t.pathname=e)}return t}function p6(e,t,n,u){u===void 0&&(u={});let{window:r=document.defaultView,v5Compat:i=!1}=u,o=r.history,l=T4.Pop,a=null,c=C();c==null&&(c=0,o.replaceState(et({},o.state,{idx:c}),""));function C(){return(o.state||{idx:null}).idx}function m(){l=T4.Pop;let L=C(),p=L==null?null:L-c;c=L,a&&a({action:l,location:w.location,delta:p})}function x(L,p){l=T4.Push;let d=M2(w.location,L,p);n&&n(d,L),c=C()+1;let h=ri(d,c),E=w.createHref(d);try{o.pushState(h,"",E)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;r.location.assign(E)}i&&a&&a({action:l,location:w.location,delta:1})}function y(L,p){l=T4.Replace;let d=M2(w.location,L,p);n&&n(d,L),c=C();let h=ri(d,c),E=w.createHref(d);o.replaceState(h,"",E),i&&a&&a({action:l,location:w.location,delta:0})}function k(L){let p=r.location.origin!=="null"?r.location.origin:r.location.href,d=typeof L=="string"?L:k3(L);return ue(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let w={get action(){return l},get location(){return e(r,o)},listen(L){if(a)throw new Error("A history only accepts one active listener");return r.addEventListener(ui,m),a=L,()=>{r.removeEventListener(ui,m),a=null}},createHref(L){return t(r,L)},createURL:k,encodeLocation(L){let p=k(L);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:x,replace:y,go(L){return o.go(L)}};return w}var ii;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ii||(ii={}));function f6(e,t,n){n===void 0&&(n="/");let u=typeof t=="string"?v0(t):t,r=_u(u.pathname||"/",n);if(r==null)return null;let i=Y5(e);h6(i);let o=null;for(let l=0;o==null&&l<i.length;++l)o=k6(i[l],D6(r));return o}function Y5(e,t,n,u){t===void 0&&(t=[]),n===void 0&&(n=[]),u===void 0&&(u="");let r=(i,o,l)=>{let a={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};a.relativePath.startsWith("/")&&(ue(a.relativePath.startsWith(u),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+u+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(u.length));let c=V4([u,a.relativePath]),C=n.concat(a);i.children&&i.children.length>0&&(ue(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Y5(i.children,t,C,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:w6(c,i.index),routesMeta:C})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))r(i,o);else for(let a of q5(i.path))r(i,o,a)}),t}function q5(e){let t=e.split("/");if(t.length===0)return[];let[n,...u]=t,r=n.endsWith("?"),i=n.replace(/\?$/,"");if(u.length===0)return r?[i,""]:[i];let o=q5(u.join("/")),l=[];return l.push(...o.map(a=>a===""?i:[i,a].join("/"))),r&&l.push(...o),l.map(a=>e.startsWith("/")&&a===""?"/":a)}function h6(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:E6(t.routesMeta.map(u=>u.childrenIndex),n.routesMeta.map(u=>u.childrenIndex)))}const C6=/^:\w+$/,m6=3,g6=2,x6=1,v6=10,y6=-2,oi=e=>e==="*";function w6(e,t){let n=e.split("/"),u=n.length;return n.some(oi)&&(u+=y6),t&&(u+=g6),n.filter(r=>!oi(r)).reduce((r,i)=>r+(C6.test(i)?m6:i===""?x6:v6),u)}function E6(e,t){return e.length===t.length&&e.slice(0,-1).every((u,r)=>u===t[r])?e[e.length-1]-t[t.length-1]:0}function k6(e,t){let{routesMeta:n}=e,u={},r="/",i=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,c=r==="/"?t:t.slice(r.length)||"/",C=S6({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},c);if(!C)return null;Object.assign(u,C.params);let m=l.route;i.push({params:u,pathname:V4([r,C.pathname]),pathnameBase:P6(V4([r,C.pathnameBase])),route:m}),C.pathnameBase!=="/"&&(r=V4([r,C.pathnameBase]))}return i}function S6(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,u]=F6(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],o=i.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:u.reduce((c,C,m)=>{if(C==="*"){let x=l[m]||"";o=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}return c[C]=L6(l[m]||"",C),c},{}),pathname:i,pathnameBase:o,pattern:e}}function F6(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),U3(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let u=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(u.push(l),"/([^\\/]+)"));return e.endsWith("*")?(u.push("*"),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),u]}function D6(e){try{return decodeURI(e)}catch(t){return U3(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function L6(e,t){try{return decodeURIComponent(e)}catch(n){return U3(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function _u(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,u=e.charAt(n);return u&&u!=="/"?null:e.slice(n)||"/"}function A6(e,t){t===void 0&&(t="/");let{pathname:n,search:u="",hash:r=""}=typeof e=="string"?v0(e):e;return{pathname:n?n.startsWith("/")?n:B6(n,t):t,search:$6(u),hash:z6(r)}}function B6(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Pn(e,t,n,u){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(u)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function J5(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function el(e,t,n,u){u===void 0&&(u=!1);let r;typeof e=="string"?r=v0(e):(r=et({},e),ue(!r.pathname||!r.pathname.includes("?"),Pn("?","pathname","search",r)),ue(!r.pathname||!r.pathname.includes("#"),Pn("#","pathname","hash",r)),ue(!r.search||!r.search.includes("#"),Pn("#","search","hash",r)));let i=e===""||r.pathname==="",o=i?"/":r.pathname,l;if(u||o==null)l=n;else{let m=t.length-1;if(o.startsWith("..")){let x=o.split("/");for(;x[0]==="..";)x.shift(),m-=1;r.pathname=x.join("/")}l=m>=0?t[m]:"/"}let a=A6(r,l),c=o&&o!=="/"&&o.endsWith("/"),C=(i||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||C)&&(a.pathname+="/"),a}const V4=e=>e.join("/").replace(/\/\/+/g,"/"),P6=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$6=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,z6=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function M6(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const T6=["post","put","patch","delete"];[...T6];/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function S3(){return S3=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},S3.apply(this,arguments)}const ju=f.exports.createContext(null),tl=f.exports.createContext(null),y0=f.exports.createContext(null),Z3=f.exports.createContext(null),k4=f.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),nl=f.exports.createContext(null);function N6(e,t){let{relative:n}=t===void 0?{}:t;dt()||ue(!1);let{basename:u,navigator:r}=f.exports.useContext(y0),{hash:i,pathname:o,search:l}=Vu(e,{relative:n}),a=o;return u!=="/"&&(a=o==="/"?u:V4([u,o])),r.createHref({pathname:a,search:l,hash:i})}function dt(){return f.exports.useContext(Z3)!=null}function s1(){return dt()||ue(!1),f.exports.useContext(Z3).location}function ul(e){f.exports.useContext(y0).static||f.exports.useLayoutEffect(e)}function R6(){let{isDataRoute:e}=f.exports.useContext(k4);return e?q6():I6()}function I6(){dt()||ue(!1);let e=f.exports.useContext(ju),{basename:t,navigator:n}=f.exports.useContext(y0),{matches:u}=f.exports.useContext(k4),{pathname:r}=s1(),i=JSON.stringify(J5(u).map(a=>a.pathnameBase)),o=f.exports.useRef(!1);return ul(()=>{o.current=!0}),f.exports.useCallback(function(a,c){if(c===void 0&&(c={}),!o.current)return;if(typeof a=="number"){n.go(a);return}let C=el(a,JSON.parse(i),r,c.relative==="path");e==null&&t!=="/"&&(C.pathname=C.pathname==="/"?t:V4([t,C.pathname])),(c.replace?n.replace:n.push)(C,c.state,c)},[t,n,i,r,e])}const b6=f.exports.createContext(null);function H6(e){let t=f.exports.useContext(k4).outlet;return t&&f.exports.createElement(b6.Provider,{value:e},t)}function O6(){let{matches:e}=f.exports.useContext(k4),t=e[e.length-1];return t?t.params:{}}function Vu(e,t){let{relative:n}=t===void 0?{}:t,{matches:u}=f.exports.useContext(k4),{pathname:r}=s1(),i=JSON.stringify(J5(u).map(o=>o.pathnameBase));return f.exports.useMemo(()=>el(e,JSON.parse(i),r,n==="path"),[e,i,r,n])}function _6(e,t){return j6(e,t)}function j6(e,t,n){dt()||ue(!1);let{navigator:u}=f.exports.useContext(y0),{matches:r}=f.exports.useContext(k4),i=r[r.length-1],o=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let a=s1(),c;if(t){var C;let w=typeof t=="string"?v0(t):t;l==="/"||((C=w.pathname)==null?void 0:C.startsWith(l))||ue(!1),c=w}else c=a;let m=c.pathname||"/",x=l==="/"?m:m.slice(l.length)||"/",y=f6(e,{pathname:x}),k=Q6(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:V4([l,u.encodeLocation?u.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:V4([l,u.encodeLocation?u.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),r,n);return t&&k?f.exports.createElement(Z3.Provider,{value:{location:S3({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:T4.Pop}},k):k}function V6(){let e=Y6(),t=M6(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return f.exports.createElement(f.exports.Fragment,null,f.exports.createElement("h2",null,"Unexpected Application Error!"),f.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?f.exports.createElement("pre",{style:r},n):null,i)}const U6=f.exports.createElement(V6,null);class Z6 extends f.exports.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?f.exports.createElement(k4.Provider,{value:this.props.routeContext},f.exports.createElement(nl.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function W6(e){let{routeContext:t,match:n,children:u}=e,r=f.exports.useContext(ju);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),f.exports.createElement(k4.Provider,{value:t},u)}function Q6(e,t,n){var u;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var r;if((r=n)!=null&&r.errors)e=n.matches;else return null}let i=e,o=(u=n)==null?void 0:u.errors;if(o!=null){let l=i.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));l>=0||ue(!1),i=i.slice(0,Math.min(i.length,l+1))}return i.reduceRight((l,a,c)=>{let C=a.route.id?o==null?void 0:o[a.route.id]:null,m=null;n&&(m=a.route.errorElement||U6);let x=t.concat(i.slice(0,c+1)),y=()=>{let k;return C?k=m:a.route.Component?k=f.exports.createElement(a.route.Component,null):a.route.element?k=a.route.element:k=l,f.exports.createElement(W6,{match:a,routeContext:{outlet:l,matches:x,isDataRoute:n!=null},children:k})};return n&&(a.route.ErrorBoundary||a.route.errorElement||c===0)?f.exports.createElement(Z6,{location:n.location,revalidation:n.revalidation,component:m,error:C,children:y(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):y()},null)}var T2;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(T2||(T2={}));var tt;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(tt||(tt={}));function G6(e){let t=f.exports.useContext(ju);return t||ue(!1),t}function K6(e){let t=f.exports.useContext(tl);return t||ue(!1),t}function X6(e){let t=f.exports.useContext(k4);return t||ue(!1),t}function rl(e){let t=X6(),n=t.matches[t.matches.length-1];return n.route.id||ue(!1),n.route.id}function Y6(){var e;let t=f.exports.useContext(nl),n=K6(tt.UseRouteError),u=rl(tt.UseRouteError);return t||((e=n.errors)==null?void 0:e[u])}function q6(){let{router:e}=G6(T2.UseNavigateStable),t=rl(tt.UseNavigateStable),n=f.exports.useRef(!1);return ul(()=>{n.current=!0}),f.exports.useCallback(function(r,i){i===void 0&&(i={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,S3({fromRouteId:t},i)))},[e,t])}const J6="startTransition";Wi[J6];function il(e){return H6(e.context)}function re(e){ue(!1)}function e7(e){let{basename:t="/",children:n=null,location:u,navigationType:r=T4.Pop,navigator:i,static:o=!1}=e;dt()&&ue(!1);let l=t.replace(/^\/*/,"/"),a=f.exports.useMemo(()=>({basename:l,navigator:i,static:o}),[l,i,o]);typeof u=="string"&&(u=v0(u));let{pathname:c="/",search:C="",hash:m="",state:x=null,key:y="default"}=u,k=f.exports.useMemo(()=>{let w=_u(c,l);return w==null?null:{location:{pathname:w,search:C,hash:m,state:x,key:y},navigationType:r}},[l,c,C,m,x,y,r]);return k==null?null:f.exports.createElement(y0.Provider,{value:a},f.exports.createElement(Z3.Provider,{children:n,value:k}))}function ol(e){let{children:t,location:n}=e;return _6(N2(t),n)}var li;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(li||(li={}));new Promise(()=>{});function N2(e,t){t===void 0&&(t=[]);let n=[];return f.exports.Children.forEach(e,(u,r)=>{if(!f.exports.isValidElement(u))return;let i=[...t,r];if(u.type===f.exports.Fragment){n.push.apply(n,N2(u.props.children,i));return}u.type!==re&&ue(!1),!u.props.index||!u.props.children||ue(!1);let o={id:u.props.id||i.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(o.children=N2(u.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function F3(){return F3=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},F3.apply(this,arguments)}function ll(e,t){if(e==null)return{};var n={},u=Object.keys(e),r,i;for(i=0;i<u.length;i++)r=u[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function t7(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function n7(e,t){return e.button===0&&(!t||t==="_self")&&!t7(e)}const u7=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],r7=["aria-current","caseSensitive","className","end","style","to","children"],i7="startTransition",ai=Wi[i7];function o7(e){let{basename:t,children:n,future:u,window:r}=e,i=f.exports.useRef();i.current==null&&(i.current=c6({window:r,v5Compat:!0}));let o=i.current,[l,a]=f.exports.useState({action:o.action,location:o.location}),{v7_startTransition:c}=u||{},C=f.exports.useCallback(m=>{c&&ai?ai(()=>a(m)):a(m)},[a,c]);return f.exports.useLayoutEffect(()=>o.listen(C),[o,C]),f.exports.createElement(e7,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const l7=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",a7=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,e1=f.exports.forwardRef(function(t,n){let{onClick:u,relative:r,reloadDocument:i,replace:o,state:l,target:a,to:c,preventScrollReset:C}=t,m=ll(t,u7),{basename:x}=f.exports.useContext(y0),y,k=!1;if(typeof c=="string"&&a7.test(c)&&(y=c,l7))try{let d=new URL(window.location.href),h=c.startsWith("//")?new URL(d.protocol+c):new URL(c),E=_u(h.pathname,x);h.origin===d.origin&&E!=null?c=E+h.search+h.hash:k=!0}catch{}let w=N6(c,{relative:r}),L=s7(c,{replace:o,state:l,target:a,preventScrollReset:C,relative:r});function p(d){u&&u(d),d.defaultPrevented||L(d)}return f.exports.createElement("a",F3({},m,{href:y||w,onClick:k||i?u:p,ref:n,target:a}))}),t1=f.exports.forwardRef(function(t,n){let{"aria-current":u="page",caseSensitive:r=!1,className:i="",end:o=!1,style:l,to:a,children:c}=t,C=ll(t,r7),m=Vu(a,{relative:C.relative}),x=s1(),y=f.exports.useContext(tl),{navigator:k}=f.exports.useContext(y0),w=k.encodeLocation?k.encodeLocation(m).pathname:m.pathname,L=x.pathname,p=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;r||(L=L.toLowerCase(),p=p?p.toLowerCase():null,w=w.toLowerCase());let d=L===w||!o&&L.startsWith(w)&&L.charAt(w.length)==="/",h=p!=null&&(p===w||!o&&p.startsWith(w)&&p.charAt(w.length)==="/"),E=d?u:void 0,S;typeof i=="function"?S=i({isActive:d,isPending:h}):S=[i,d?"active":null,h?"pending":null].filter(Boolean).join(" ");let A=typeof l=="function"?l({isActive:d,isPending:h}):l;return f.exports.createElement(e1,F3({},C,{"aria-current":E,className:S,ref:n,style:A,to:a}),typeof c=="function"?c({isActive:d,isPending:h}):c)});var si;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(si||(si={}));var ci;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ci||(ci={}));function s7(e,t){let{target:n,replace:u,state:r,preventScrollReset:i,relative:o}=t===void 0?{}:t,l=R6(),a=s1(),c=Vu(e,{relative:o});return f.exports.useCallback(C=>{if(n7(C,n)){C.preventDefault();let m=u!==void 0?u:k3(a)===k3(c);l(e,{replace:m,state:r,preventScrollReset:i,relative:o})}},[a,l,c,u,r,n,e,i,o])}var se=function(){return se=Object.assign||function(t){for(var n,u=1,r=arguments.length;u<r;u++){n=arguments[u];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},se.apply(this,arguments)};function nt(e,t,n){if(n||arguments.length===2)for(var u=0,r=t.length,i;u<r;u++)(i||!(u in t))&&(i||(i=Array.prototype.slice.call(t,0,u)),i[u]=t[u]);return e.concat(i||Array.prototype.slice.call(t))}var V="-ms-",R1="-moz-",H="-webkit-",al="comm",W3="rule",Uu="decl",c7="@import",sl="@keyframes",d7="@layer",p7=Math.abs,Zu=String.fromCharCode,R2=Object.assign;function f7(e,t){return ae(e,0)^45?(((t<<2^ae(e,0))<<2^ae(e,1))<<2^ae(e,2))<<2^ae(e,3):0}function cl(e){return e.trim()}function f4(e,t){return(e=t.exec(e))?e[0]:e}function N(e,t,n){return e.replace(t,n)}function Kt(e,t){return e.indexOf(t)}function ae(e,t){return e.charCodeAt(t)|0}function n1(e,t,n){return e.slice(t,n)}function o4(e){return e.length}function dl(e){return e.length}function D1(e,t){return t.push(e),e}function h7(e,t){return e.map(t).join("")}function di(e,t){return e.filter(function(n){return!f4(n,t)})}var Q3=1,u1=1,pl=0,Ke=0,te=0,c1="";function G3(e,t,n,u,r,i,o,l){return{value:e,root:t,parent:n,type:u,props:r,children:i,line:Q3,column:u1,length:o,return:"",siblings:l}}function L4(e,t){return R2(G3("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function E0(e){for(;e.root;)e=L4(e.root,{children:[e]});D1(e,e.siblings)}function C7(){return te}function m7(){return te=Ke>0?ae(c1,--Ke):0,u1--,te===10&&(u1=1,Q3--),te}function n4(){return te=Ke<pl?ae(c1,Ke++):0,u1++,te===10&&(u1=1,Q3++),te}function s0(){return ae(c1,Ke)}function Xt(){return Ke}function K3(e,t){return n1(c1,e,t)}function I2(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function g7(e){return Q3=u1=1,pl=o4(c1=e),Ke=0,[]}function x7(e){return c1="",e}function $n(e){return cl(K3(Ke-1,b2(e===91?e+2:e===40?e+1:e)))}function v7(e){for(;(te=s0())&&te<33;)n4();return I2(e)>2||I2(te)>3?"":" "}function y7(e,t){for(;--t&&n4()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return K3(e,Xt()+(t<6&&s0()==32&&n4()==32))}function b2(e){for(;n4();)switch(te){case e:return Ke;case 34:case 39:e!==34&&e!==39&&b2(te);break;case 40:e===41&&b2(e);break;case 92:n4();break}return Ke}function w7(e,t){for(;n4()&&e+te!==47+10;)if(e+te===42+42&&s0()===47)break;return"/*"+K3(t,Ke-1)+"*"+Zu(e===47?e:n4())}function E7(e){for(;!I2(s0());)n4();return K3(e,Ke)}function k7(e){return x7(Yt("",null,null,null,[""],e=g7(e),0,[0],e))}function Yt(e,t,n,u,r,i,o,l,a){for(var c=0,C=0,m=o,x=0,y=0,k=0,w=1,L=1,p=1,d=0,h="",E=r,S=i,A=u,D=h;L;)switch(k=d,d=n4()){case 40:if(k!=108&&ae(D,m-1)==58){Kt(D+=N($n(d),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:D+=$n(d);break;case 9:case 10:case 13:case 32:D+=v7(k);break;case 92:D+=y7(Xt()-1,7);continue;case 47:switch(s0()){case 42:case 47:D1(S7(w7(n4(),Xt()),t,n,a),a);break;default:D+="/"}break;case 123*w:l[c++]=o4(D)*p;case 125*w:case 59:case 0:switch(d){case 0:case 125:L=0;case 59+C:p==-1&&(D=N(D,/\f/g,"")),y>0&&o4(D)-m&&D1(y>32?fi(D+";",u,n,m-1,a):fi(N(D," ","")+";",u,n,m-2,a),a);break;case 59:D+=";";default:if(D1(A=pi(D,t,n,c,C,r,l,h,E=[],S=[],m,i),i),d===123)if(C===0)Yt(D,t,A,A,E,i,m,l,S);else switch(x===99&&ae(D,3)===110?100:x){case 100:case 108:case 109:case 115:Yt(e,A,A,u&&D1(pi(e,A,A,0,0,r,l,h,r,E=[],m,S),S),r,S,m,l,u?E:S);break;default:Yt(D,A,A,A,[""],S,0,l,S)}}c=C=y=0,w=p=1,h=D="",m=o;break;case 58:m=1+o4(D),y=k;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&m7()==125)continue}switch(D+=Zu(d),d*w){case 38:p=C>0?1:(D+="\f",-1);break;case 44:l[c++]=(o4(D)-1)*p,p=1;break;case 64:s0()===45&&(D+=$n(n4())),x=s0(),C=m=o4(h=D+=E7(Xt())),d++;break;case 45:k===45&&o4(D)==2&&(w=0)}}return i}function pi(e,t,n,u,r,i,o,l,a,c,C,m){for(var x=r-1,y=r===0?i:[""],k=dl(y),w=0,L=0,p=0;w<u;++w)for(var d=0,h=n1(e,x+1,x=p7(L=o[w])),E=e;d<k;++d)(E=cl(L>0?y[d]+" "+h:N(h,/&\f/g,y[d])))&&(a[p++]=E);return G3(e,t,n,r===0?W3:l,a,c,C,m)}function S7(e,t,n,u){return G3(e,t,n,al,Zu(C7()),n1(e,2,-2),0,u)}function fi(e,t,n,u,r){return G3(e,t,n,Uu,n1(e,0,u),n1(e,u+1,-1),u,r)}function fl(e,t,n){switch(f7(e,t)){case 5103:return H+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return H+e+e;case 4789:return R1+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return H+e+R1+e+V+e+e;case 5936:switch(ae(e,t+11)){case 114:return H+e+V+N(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return H+e+V+N(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return H+e+V+N(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return H+e+V+e+e;case 6165:return H+e+V+"flex-"+e+e;case 5187:return H+e+N(e,/(\w+).+(:[^]+)/,H+"box-$1$2"+V+"flex-$1$2")+e;case 5443:return H+e+V+"flex-item-"+N(e,/flex-|-self/g,"")+(f4(e,/flex-|baseline/)?"":V+"grid-row-"+N(e,/flex-|-self/g,""))+e;case 4675:return H+e+V+"flex-line-pack"+N(e,/align-content|flex-|-self/g,"")+e;case 5548:return H+e+V+N(e,"shrink","negative")+e;case 5292:return H+e+V+N(e,"basis","preferred-size")+e;case 6060:return H+"box-"+N(e,"-grow","")+H+e+V+N(e,"grow","positive")+e;case 4554:return H+N(e,/([^-])(transform)/g,"$1"+H+"$2")+e;case 6187:return N(N(N(e,/(zoom-|grab)/,H+"$1"),/(image-set)/,H+"$1"),e,"")+e;case 5495:case 3959:return N(e,/(image-set\([^]*)/,H+"$1$`$1");case 4968:return N(N(e,/(.+:)(flex-)?(.*)/,H+"box-pack:$3"+V+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+H+e+e;case 4200:if(!f4(e,/flex-|baseline/))return V+"grid-column-align"+n1(e,t)+e;break;case 2592:case 3360:return V+N(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(u,r){return t=r,f4(u.props,/grid-\w+-end/)})?~Kt(e+(n=n[t].value),"span")?e:V+N(e,"-start","")+e+V+"grid-row-span:"+(~Kt(n,"span")?f4(n,/\d+/):+f4(n,/\d+/)-+f4(e,/\d+/))+";":V+N(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(u){return f4(u.props,/grid-\w+-start/)})?e:V+N(N(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return N(e,/(.+)-inline(.+)/,H+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(o4(e)-1-t>6)switch(ae(e,t+1)){case 109:if(ae(e,t+4)!==45)break;case 102:return N(e,/(.+:)(.+)-([^]+)/,"$1"+H+"$2-$3$1"+R1+(ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Kt(e,"stretch")?fl(N(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return N(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,r,i,o,l,a,c){return V+r+":"+i+c+(o?V+r+"-span:"+(l?a:+a-+i)+c:"")+e});case 4949:if(ae(e,t+6)===121)return N(e,":",":"+H)+e;break;case 6444:switch(ae(e,ae(e,14)===45?18:11)){case 120:return N(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+H+(ae(e,14)===45?"inline-":"")+"box$3$1"+H+"$2$3$1"+V+"$2box$3")+e;case 100:return N(e,":",":"+V)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return N(e,"scroll-","scroll-snap-")+e}return e}function D3(e,t){for(var n="",u=0;u<e.length;u++)n+=t(e[u],u,e,t)||"";return n}function F7(e,t,n,u){switch(e.type){case d7:if(e.children.length)break;case c7:case Uu:return e.return=e.return||e.value;case al:return"";case sl:return e.return=e.value+"{"+D3(e.children,u)+"}";case W3:if(!o4(e.value=e.props.join(",")))return""}return o4(n=D3(e.children,u))?e.return=e.value+"{"+n+"}":""}function D7(e){var t=dl(e);return function(n,u,r,i){for(var o="",l=0;l<t;l++)o+=e[l](n,u,r,i)||"";return o}}function L7(e){return function(t){t.root||(t=t.return)&&e(t)}}function A7(e,t,n,u){if(e.length>-1&&!e.return)switch(e.type){case Uu:e.return=fl(e.value,e.length,n);return;case sl:return D3([L4(e,{value:N(e.value,"@","@"+H)})],u);case W3:if(e.length)return h7(n=e.props,function(r){switch(f4(r,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":E0(L4(e,{props:[N(r,/:(read-\w+)/,":"+R1+"$1")]})),E0(L4(e,{props:[r]})),R2(e,{props:di(n,u)});break;case"::placeholder":E0(L4(e,{props:[N(r,/:(plac\w+)/,":"+H+"input-$1")]})),E0(L4(e,{props:[N(r,/:(plac\w+)/,":"+R1+"$1")]})),E0(L4(e,{props:[N(r,/:(plac\w+)/,V+"input-$1")]})),E0(L4(e,{props:[r]})),R2(e,{props:di(n,u)});break}return""})}}var B7={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},r1=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Wu=typeof window!="undefined"&&"HTMLElement"in window,P7=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),$7={},X3=Object.freeze([]),i1=Object.freeze({});function hl(e,t,n){return n===void 0&&(n=i1),e.theme!==n.theme&&e.theme||t||n.theme}var Cl=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),z7=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,M7=/(^-|-$)/g;function hi(e){return e.replace(z7,"-").replace(M7,"")}var T7=/(a)(d)/gi,Ci=function(e){return String.fromCharCode(e+(e>25?39:97))};function H2(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ci(t%52)+n;return(Ci(t%52)+n).replace(T7,"$1-$2")}var zn,b0=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ml=function(e){return b0(5381,e)};function gl(e){return H2(ml(e)>>>0)}function N7(e){return e.displayName||e.name||"Component"}function Mn(e){return typeof e=="string"&&!0}var xl=typeof Symbol=="function"&&Symbol.for,vl=xl?Symbol.for("react.memo"):60115,R7=xl?Symbol.for("react.forward_ref"):60112,I7={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},b7={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yl={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},H7=((zn={})[R7]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},zn[vl]=yl,zn);function mi(e){return("type"in(t=e)&&t.type.$$typeof)===vl?yl:"$$typeof"in e?H7[e.$$typeof]:I7;var t}var O7=Object.defineProperty,_7=Object.getOwnPropertyNames,gi=Object.getOwnPropertySymbols,j7=Object.getOwnPropertyDescriptor,V7=Object.getPrototypeOf,xi=Object.prototype;function wl(e,t,n){if(typeof t!="string"){if(xi){var u=V7(t);u&&u!==xi&&wl(e,u,n)}var r=_7(t);gi&&(r=r.concat(gi(t)));for(var i=mi(e),o=mi(t),l=0;l<r.length;++l){var a=r[l];if(!(a in b7||n&&n[a]||o&&a in o||i&&a in i)){var c=j7(t,a);try{O7(e,a,c)}catch{}}}}return e}function C0(e){return typeof e=="function"}function Qu(e){return typeof e=="object"&&"styledComponentId"in e}function o0(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function O2(e,t){if(e.length===0)return"";for(var n=e[0],u=1;u<e.length;u++)n+=t?t+e[u]:e[u];return n}function ut(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function _2(e,t,n){if(n===void 0&&(n=!1),!n&&!ut(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var u=0;u<t.length;u++)e[u]=_2(e[u],t[u]);else if(ut(t))for(var u in t)e[u]=_2(e[u],t[u]);return e}function Gu(e,t){Object.defineProperty(e,"toString",{value:t})}function m0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var U7=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,u=0;u<t;u++)n+=this.groupSizes[u];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var u=this.groupSizes,r=u.length,i=r;t>=i;)if((i<<=1)<0)throw m0(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(u),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(t+1),a=(o=0,n.length);o<a;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],u=this.indexOfGroup(t),r=u+n;this.groupSizes[t]=0;for(var i=u;i<r;i++)this.tag.deleteRule(u)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var u=this.groupSizes[t],r=this.indexOfGroup(t),i=r+u,o=r;o<i;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),qt=new Map,L3=new Map,Tn=1,$t=function(e){if(qt.has(e))return qt.get(e);for(;L3.has(Tn);)Tn++;var t=Tn++;return qt.set(e,t),L3.set(t,e),t},Z7=function(e,t){qt.set(e,t),L3.set(t,e)},W7="style[".concat(r1,"][").concat("data-styled-version",'="').concat("6.0.5",'"]'),Q7=new RegExp("^".concat(r1,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),G7=function(e,t,n){for(var u,r=n.split(","),i=0,o=r.length;i<o;i++)(u=r[i])&&e.registerName(t,u)},K7=function(e,t){for(var n,u=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),r=[],i=0,o=u.length;i<o;i++){var l=u[i].trim();if(l){var a=l.match(Q7);if(a){var c=0|parseInt(a[1],10),C=a[2];c!==0&&(Z7(C,c),G7(e,C,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(l)}}};function X7(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var El=function(e){var t=document.head,n=e||t,u=document.createElement("style"),r=function(l){var a=Array.from(l.querySelectorAll("style[".concat(r1,"]")));return a[a.length-1]}(n),i=r!==void 0?r.nextSibling:null;u.setAttribute(r1,"active"),u.setAttribute("data-styled-version","6.0.5");var o=X7();return o&&u.setAttribute("nonce",o),n.insertBefore(u,i),u},Y7=function(){function e(t){this.element=El(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var u=document.styleSheets,r=0,i=u.length;r<i;r++){var o=u[r];if(o.ownerNode===n)return o}throw m0(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),q7=function(){function e(t){this.element=El(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var u=document.createTextNode(n);return this.element.insertBefore(u,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),J7=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),vi=Wu,ea={isServer:!Wu,useCSSOMInjection:!P7},A3=function(){function e(t,n,u){t===void 0&&(t=i1),n===void 0&&(n={});var r=this;this.options=se(se({},ea),t),this.gs=n,this.names=new Map(u),this.server=!!t.isServer,!this.server&&Wu&&vi&&(vi=!1,function(i){for(var o=document.querySelectorAll(W7),l=0,a=o.length;l<a;l++){var c=o[l];c&&c.getAttribute(r1)!=="active"&&(K7(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Gu(this,function(){return function(i){for(var o=i.getTag(),l=o.length,a="",c=function(m){var x=function(p){return L3.get(p)}(m);if(x===void 0)return"continue";var y=i.names.get(x),k=o.getGroup(m);if(y===void 0||k.length===0)return"continue";var w="".concat(r1,".g").concat(m,'[id="').concat(x,'"]'),L="";y!==void 0&&y.forEach(function(p){p.length>0&&(L+="".concat(p,","))}),a+="".concat(k).concat(w,'{content:"').concat(L,'"}').concat(`/*!sc*/
`)},C=0;C<l;C++)c(C);return a}(r)})}return e.registerId=function(t){return $t(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(se(se({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var u=n.useCSSOMInjection,r=n.target;return n.isServer?new J7(r):u?new Y7(r):new q7(r)}(this.options),new U7(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if($t(t),this.names.has(t))this.names.get(t).add(n);else{var u=new Set;u.add(n),this.names.set(t,u)}},e.prototype.insertRules=function(t,n,u){this.registerName(t,n),this.getTag().insertRules($t(t),u)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup($t(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ta=/&/g,na=/^\s*\/\/.*$/gm;function kl(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(u){return"".concat(t," ").concat(u)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=kl(n.children,t)),n})}function ua(e){var t,n,u,r=e===void 0?i1:e,i=r.options,o=i===void 0?i1:i,l=r.plugins,a=l===void 0?X3:l,c=function(x,y,k){return k===n||k.startsWith(n)&&k.endsWith(n)&&k.replaceAll(n,"").length>0?".".concat(t):x},C=a.slice();C.push(function(x){x.type===W3&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(ta,n).replace(u,c))}),o.prefix&&C.push(A7),C.push(F7);var m=function(x,y,k,w){y===void 0&&(y=""),k===void 0&&(k=""),w===void 0&&(w="&"),t=w,n=y,u=new RegExp("\\".concat(n,"\\b"),"g");var L=x.replace(na,""),p=k7(k||y?"".concat(k," ").concat(y," { ").concat(L," }"):L);o.namespace&&(p=kl(p,o.namespace));var d=[];return D3(p,D7(C.concat(L7(function(h){return d.push(h)})))),d};return m.hash=a.length?a.reduce(function(x,y){return y.name||m0(15),b0(x,y.name)},5381).toString():"",m}var ra=new A3,j2=ua(),Sl=Ne.createContext({shouldForwardProp:void 0,styleSheet:ra,stylis:j2});Sl.Consumer;Ne.createContext(void 0);function V2(){return f.exports.useContext(Sl)}var ia=function(){function e(t,n){var u=this;this.inject=function(r,i){i===void 0&&(i=j2);var o=u.name+i.hash;r.hasNameForId(u.id,o)||r.insertRules(u.id,o,i(u.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Gu(this,function(){throw m0(12,String(u.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=j2),this.name+t.hash},e}(),oa=function(e){return e>="A"&&e<="Z"};function yi(e){for(var t="",n=0;n<e.length;n++){var u=e[n];if(n===1&&u==="-"&&e[0]==="-")return e;oa(u)?t+="-"+u.toLowerCase():t+=u}return t.startsWith("ms-")?"-"+t:t}var Fl=function(e){return e==null||e===!1||e===""},Dl=function(e){var t,n,u=[];for(var r in e){var i=e[r];e.hasOwnProperty(r)&&!Fl(i)&&(Array.isArray(i)&&i.isCss||C0(i)?u.push("".concat(yi(r),":"),i,";"):ut(i)?u.push.apply(u,nt(nt(["".concat(r," {")],Dl(i),!1),["}"],!1)):u.push("".concat(yi(r),": ").concat((t=r,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in B7||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return u};function U4(e,t,n,u){if(Fl(e))return[];if(Qu(e))return[".".concat(e.styledComponentId)];if(C0(e)){if(!C0(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var r=e(t);return U4(r,t,n,u)}var i;return e instanceof ia?n?(e.inject(n,u),[e.getName(u)]):[e]:ut(e)?Dl(e):Array.isArray(e)?Array.prototype.concat.apply(X3,e.map(function(o){return U4(o,t,n,u)})):[e.toString()]}function Ll(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(C0(n)&&!Qu(n))return!1}return!0}var la=ml("6.0.5"),aa=function(){function e(t,n,u){this.rules=t,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&Ll(t),this.componentId=n,this.baseHash=b0(la,n),this.baseStyle=u,A3.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,u){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=o0(r,this.staticRulesId);else{var i=O2(U4(this.rules,t,n,u)),o=H2(b0(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=u(i,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}r=o0(r,o),this.staticRulesId=o}else{for(var a=b0(this.baseHash,u.hash),c="",C=0;C<this.rules.length;C++){var m=this.rules[C];if(typeof m=="string")c+=m;else if(m){var x=O2(U4(m,t,n,u));a=b0(a,x),c+=x}}if(c){var y=H2(a>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,u(c,".".concat(y),void 0,this.componentId)),r=o0(r,y)}}return r},e}(),rt=Ne.createContext(void 0);rt.Consumer;function sa(e){var t=Ne.useContext(rt),n=f.exports.useMemo(function(){return function(u,r){if(!u)throw m0(14);if(C0(u)){var i=u(r);return i}if(Array.isArray(u)||typeof u!="object")throw m0(8);return r?se(se({},r),u):u}(e.theme,t)},[e.theme,t]);return e.children?Ne.createElement(rt.Provider,{value:n},e.children):null}var Nn={};function ca(e,t,n){var u=Qu(e),r=e,i=!Mn(e),o=t.attrs,l=o===void 0?X3:o,a=t.componentId,c=a===void 0?function(h,E){var S=typeof h!="string"?"sc":hi(h);Nn[S]=(Nn[S]||0)+1;var A="".concat(S,"-").concat(gl("6.0.5"+S+Nn[S]));return E?"".concat(E,"-").concat(A):A}(t.displayName,t.parentComponentId):a,C=t.displayName;C===void 0&&function(h){return Mn(h)?"styled.".concat(h):"Styled(".concat(N7(h),")")}(e);var m=t.displayName&&t.componentId?"".concat(hi(t.displayName),"-").concat(t.componentId):t.componentId||c,x=u&&r.attrs?r.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(u&&r.shouldForwardProp){var k=r.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;y=function(h,E){return k(h,E)&&w(h,E)}}else y=k}var L=new aa(n,m,u?r.componentStyle:void 0);function p(h,E){return function(S,A,D){var $=S.attrs,Q=S.componentStyle,R=S.defaultProps,$e=S.foldedComponentIds,X4=S.styledComponentId,Y4=S.target,pt=Ne.useContext(rt),tn=V2(),q4=S.shouldForwardProp||tn.shouldForwardProp,_e=function(c4,ze,S4){for(var Me,je=se(se({},ze),{className:void 0,theme:S4}),nn=0;nn<c4.length;nn+=1){var ft=C0(Me=c4[nn])?Me(je):Me;for(var F4 in ft)je[F4]=F4==="className"?o0(je[F4],ft[F4]):F4==="style"?se(se({},je[F4]),ft[F4]):ft[F4]}return ze.className&&(je.className=o0(je.className,ze.className)),je}($,A,hl(A,pt,R)||i1),B=_e.as||Y4,M={};for(var T in _e)_e[T]===void 0||T[0]==="$"||T==="as"||T==="theme"||(T==="forwardedAs"?M.as=_e.forwardedAs:q4&&!q4(T,B)||(M[T]=_e[T]));var Z=function(c4,ze){var S4=V2(),Me=c4.generateAndInjectStyles(ze,S4.styleSheet,S4.stylis);return Me}(Q,_e),Y=o0($e,X4);return Z&&(Y+=" "+Z),_e.className&&(Y+=" "+_e.className),M[Mn(B)&&!Cl.has(B)?"class":"className"]=Y,M.ref=D,f.exports.createElement(B,M)}(d,h,E)}var d=Ne.forwardRef(p);return d.attrs=x,d.componentStyle=L,d.shouldForwardProp=y,d.foldedComponentIds=u?o0(r.foldedComponentIds,r.styledComponentId):"",d.styledComponentId=m,d.target=u?r.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=u?function(E){for(var S=[],A=1;A<arguments.length;A++)S[A-1]=arguments[A];for(var D=0,$=S;D<$.length;D++)_2(E,$[D],!0);return E}({},r.defaultProps,h):h}}),Gu(d,function(){return".".concat(d.styledComponentId)}),i&&wl(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function wi(e,t){for(var n=[e[0]],u=0,r=t.length;u<r;u+=1)n.push(t[u],e[u+1]);return n}var Ei=function(e){return Object.assign(e,{isCss:!0})};function d1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(C0(e)||ut(e)){var u=e;return Ei(U4(wi(X3,nt([u],t,!0))))}var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?U4(r):Ei(U4(wi(r,t)))}function U2(e,t,n){if(n===void 0&&(n=i1),!t)throw m0(1,t);var u=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,d1.apply(void 0,nt([r],i,!1)))};return u.attrs=function(r){return U2(e,t,se(se({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},u.withConfig=function(r){return U2(e,t,se(se({},n),r))},u}var Al=function(e){return U2(ca,e)},g=Al;Cl.forEach(function(e){g[e]=Al(e)});var da=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ll(t),A3.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,u,r){var i=r(O2(U4(this.rules,n,u,r)),""),o=this.componentId+t;u.insertRules(o,o,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,u,r){t>2&&A3.registerId(this.componentId+t),this.removeStyles(t,u),this.createStyles(t,n,u,r)},e}();function pa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var u=d1.apply(void 0,nt([e],t,!1)),r="sc-global-".concat(gl(JSON.stringify(u))),i=new da(u,r),o=function(a){var c=V2(),C=Ne.useContext(rt),m=Ne.useRef(c.styleSheet.allocateGSInstance(r)).current;return c.styleSheet.server&&l(m,a,c.styleSheet,C,c.stylis),Ne.useLayoutEffect(function(){if(!c.styleSheet.server)return l(m,a,c.styleSheet,C,c.stylis),function(){return i.removeStyles(m,c.styleSheet)}},[m,a,c.styleSheet,C,c.stylis]),null};function l(a,c,C,m,x){if(i.isStatic)i.renderStyles(a,$7,C,x);else{var y=se(se({},c),{theme:hl(c,m,o.defaultProps)});i.renderStyles(a,y,C,x)}}return Ne.memo(o)}const z={colors:{background:"#F9F9F9",grey:"#ACABAB",lightGrey:"#CDCDCD",dark:"#2E2E2E",green:"#758650",lightGreen:"#B5C268",lightYellow:"#FFE27C",yellow:"#E8B535",midYellow:"#D7A323",darkYellow:"#B58200"},fonts:{openSans:"Open Sans"},fontSizes:{subheadline:"1rem",bodyText:"1.125rem",buttonText:"1.125rem",h3:"1.5rem",h2:"2.5rem",h1:"3.5rem",mobileSubheadline:"0.75rem",mobileBodyText:"1rem",mobileButtonText:"1rem",tabletH3:"1.5rem",tabletH2:"2.25rem",tabletH1:"2.625rem",mobileH3:"1.25rem",mobileH2:"1.75rem",mobileH1:"2rem"},fontWeights:{regular:400,semiBold:600,bold:700},lineHeights:{h1:1.2,normal:1.4},paddings:{container:"0 84px",containerTablet:"0 40px",containerMobile:"0 16px",button:"15.5px 24px",buttonTablet:"17px 12.5px",input:"12px"},transitions:{long:"all ease 0.3s",quick:"all ease 0.1s"},headerHeight:"96px"},fa=e=>f.exports.createElement("svg",{width:64,height:48,viewBox:"0 0 64 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M11.2391 7.31769C11.2391 8.47842 10.9502 9.53822 10.3726 10.4971C9.79489 11.4391 9.02184 12.2298 8.05339 12.869C8.5631 12.9699 9.00485 13.1466 9.37863 13.3989C9.75242 13.6344 10.0582 13.9288 10.2961 14.2821C10.551 14.6353 10.7379 15.0391 10.8568 15.4933C10.9927 15.9307 11.0607 16.3933 11.0607 16.8811C11.0607 17.84 10.8313 18.6811 10.3726 19.4044C9.93082 20.111 9.35315 20.6997 8.63956 21.1708C7.92596 21.625 7.12742 21.9698 6.24393 22.2053C5.37742 22.424 4.51092 22.5334 3.64441 22.5334C3.16869 22.5334 2.69296 22.4997 2.21723 22.4324C1.7415 22.3651 1.29126 22.2474 0.866504 22.0792C0.713592 22.0287 0.586164 21.8268 0.484223 21.4736C0.382281 21.1035 0.29733 20.6577 0.229369 20.1362C0.178398 19.6147 0.135922 19.0512 0.101942 18.4456C0.0679611 17.84 0.0424757 17.2596 0.0254854 16.7045C0.00849513 16.1493 0 15.6615 0 15.2409C0 14.8204 0 14.526 0 14.3578C0 13.769 0 13.1802 0 12.5914C0 11.9858 0.0169903 11.3887 0.0509708 10.7999C0.0509708 10.6485 0.0509708 10.413 0.0509708 10.0933C0.0679611 9.77373 0.0764562 9.42046 0.0764562 9.03355C0.0934465 8.62982 0.110437 8.20926 0.127427 7.77188C0.161408 7.33451 0.195388 6.93078 0.229369 6.56069C0.28034 6.17378 0.339805 5.84575 0.407766 5.57659C0.492718 5.30744 0.586165 5.13921 0.688106 5.07193C1.07888 4.81959 1.51213 4.58408 1.98786 4.36539C2.46359 4.12988 2.95631 3.92802 3.46602 3.75979C3.97573 3.59157 4.48543 3.45699 4.99514 3.35606C5.50485 3.25513 5.98907 3.20466 6.44781 3.20466C7.07645 3.20466 7.67961 3.29718 8.25728 3.48222C8.85194 3.65045 9.36164 3.91119 9.7864 4.26446C10.2281 4.61773 10.5764 5.0551 10.8313 5.57659C11.1031 6.08126 11.2391 6.66162 11.2391 7.31769ZM7.00849 8.65505C7.00849 8.36907 6.91504 8.1588 6.72815 8.02422C6.55825 7.88964 6.32888 7.82235 6.04004 7.82235C5.80218 7.82235 5.54733 7.87282 5.27548 7.97375C5.02063 8.07468 4.79975 8.20926 4.61286 8.37749C4.56189 8.42795 4.51092 8.57094 4.45995 8.80645C4.42597 9.04196 4.39199 9.31112 4.35801 9.61392C4.34102 9.89989 4.32403 10.1775 4.30704 10.4466C4.30704 10.6989 4.30704 10.8672 4.30704 10.9513C4.30704 10.9849 4.30704 11.0438 4.30704 11.1279C4.30704 11.1952 4.30704 11.2709 4.30704 11.355C4.32403 11.4391 4.34102 11.5148 4.35801 11.5821C4.375 11.6494 4.40048 11.683 4.43446 11.683C4.7233 11.683 5.02063 11.5821 5.32645 11.3802C5.63228 11.1616 5.90412 10.9008 6.14199 10.598C6.39684 10.2784 6.60072 9.94195 6.75364 9.58868C6.92354 9.23542 7.00849 8.92421 7.00849 8.65505ZM6.90655 15.9475C6.90655 15.6615 6.80461 15.4596 6.60072 15.3419C6.39684 15.2241 6.16747 15.1652 5.91262 15.1652C5.67475 15.1652 5.4199 15.2241 5.14805 15.3419C4.8932 15.4428 4.68082 15.569 4.51092 15.7204C4.45995 15.754 4.41747 15.8381 4.38349 15.9727C4.3665 16.1073 4.34951 16.2587 4.33252 16.4269C4.33252 16.5783 4.32403 16.7297 4.30704 16.8811C4.30704 17.0157 4.30704 17.1082 4.30704 17.1587C4.30704 17.1923 4.30704 17.2596 4.30704 17.3605C4.30704 17.4615 4.30704 17.5708 4.30704 17.6886C4.32403 17.7895 4.34102 17.8904 4.35801 17.9914C4.39199 18.0755 4.42597 18.1175 4.45995 18.1175C4.69781 18.1175 4.96116 18.0502 5.25 17.9157C5.53883 17.7811 5.80218 17.6129 6.04004 17.411C6.2949 17.2091 6.49878 16.982 6.65169 16.7297C6.8216 16.4605 6.90655 16.1998 6.90655 15.9475Z",fill:"#758650"}),f.exports.createElement("path",{d:"M21.2039 5.09716C21.2039 5.41678 21.1274 5.70275 20.9745 5.95509C20.8386 6.20742 20.6517 6.42611 20.4138 6.61115C20.176 6.77938 19.9126 6.92236 19.6238 7.04012C19.3349 7.15787 19.0546 7.24199 18.7828 7.29245C18.7488 9.19336 18.6723 11.027 18.5534 12.7933C18.4514 14.5596 18.2815 16.3848 18.0437 18.2689H18.1966C18.4684 18.2689 18.7318 18.3026 18.9866 18.3699C19.2585 18.4203 19.4963 18.5213 19.7002 18.6727C19.9211 18.8072 20.091 18.9839 20.2099 19.2026C20.3459 19.4044 20.4138 19.6568 20.4138 19.9596C20.4138 20.3465 20.2864 20.6829 20.0315 20.9689C19.7937 21.2549 19.4709 21.4988 19.0631 21.7007C18.6723 21.9025 18.2306 22.0708 17.7378 22.2053C17.2451 22.3399 16.7524 22.4408 16.2597 22.5081C15.767 22.5922 15.2997 22.6511 14.858 22.6848C14.4163 22.7184 14.0595 22.7352 13.7876 22.7352C13.5837 22.7352 13.3289 22.7268 13.023 22.71C12.7342 22.6932 12.4539 22.6427 12.182 22.5586C11.9272 22.4745 11.7063 22.3483 11.5194 22.1801C11.3325 22.0119 11.2391 21.7848 11.2391 21.4988C11.2391 21.1455 11.3155 20.8343 11.4684 20.5652C11.6044 20.2792 11.7913 20.0269 12.0291 19.8082C12.267 19.5895 12.5303 19.4128 12.8192 19.2783C13.125 19.1437 13.4308 19.0428 13.7366 18.9755C13.8556 18.0502 13.966 17.1334 14.068 16.225C14.1699 15.2998 14.2379 14.3662 14.2718 13.4241C14.3058 12.4653 14.3398 11.5232 14.3738 10.598C14.4078 9.65597 14.4417 8.71393 14.4757 7.77188C14.3568 7.78871 14.2463 7.80553 14.1444 7.82235C14.0425 7.82235 13.949 7.82235 13.8641 7.82235C13.6262 7.82235 13.3714 7.79712 13.0995 7.74665C12.8277 7.69619 12.5728 7.61207 12.3349 7.49432C12.0971 7.35974 11.8932 7.19993 11.7233 7.01488C11.5704 6.82984 11.4939 6.59434 11.4939 6.30836C11.4939 5.7364 11.7318 5.26538 12.2075 4.89529C12.7002 4.5252 13.2779 4.23923 13.9405 4.03736C14.6201 3.83549 15.3082 3.70092 16.0048 3.63363C16.7014 3.54952 17.2621 3.50746 17.6869 3.50746C17.9247 3.50746 18.2391 3.52428 18.6298 3.55793C19.0206 3.59157 19.4029 3.66727 19.7767 3.78502C20.1675 3.90278 20.4988 4.06259 20.7706 4.26446C21.0595 4.46633 21.2039 4.74389 21.2039 5.09716Z",fill:"#758650"}),f.exports.createElement("path",{d:"M32.9781 16.1746C32.8252 16.9316 32.5789 17.7222 32.2391 18.5465C31.9162 19.354 31.4915 20.0941 30.9648 20.767C30.4551 21.4399 29.8434 21.9866 29.1298 22.4072C28.4162 22.8446 27.6007 23.0633 26.6832 23.0633C26.0036 23.0633 25.392 22.9287 24.8483 22.6595C24.3046 22.3904 23.8119 22.0287 23.3701 21.5745C22.9284 21.1203 22.5461 20.5988 22.2233 20.01C21.9005 19.4213 21.6286 18.8157 21.4077 18.1932C21.2039 17.554 21.051 16.9232 20.949 16.3007C20.8471 15.6783 20.7961 15.098 20.7961 14.5596C20.7961 13.8026 20.8641 12.9952 21 12.1372C21.1529 11.2625 21.3738 10.4046 21.6626 9.56345C21.9514 8.70552 22.3167 7.88964 22.7585 7.11582C23.2002 6.32518 23.7184 5.63547 24.3131 5.04669C24.9247 4.44109 25.6043 3.96166 26.3519 3.60839C27.1165 3.23831 27.966 3.05326 28.9005 3.05326C29.4951 3.05326 30.0473 3.17101 30.557 3.40652C31.0667 3.62521 31.5085 3.92801 31.8823 4.31492C32.256 4.68501 32.5449 5.1308 32.7488 5.65229C32.9696 6.17377 33.0801 6.7205 33.0801 7.29245V7.51955C33.0801 7.82235 33.0631 8.20085 33.0291 8.65505C33.0121 9.09243 32.9357 9.51299 32.7997 9.91672C32.6638 10.3205 32.4599 10.6737 32.1881 10.9765C31.9162 11.2625 31.534 11.4055 31.0412 11.4055C30.4466 11.4055 29.9963 11.2709 29.6905 11.0017C29.3847 10.7326 29.2318 10.2868 29.2318 9.66438C29.2318 9.42887 29.2403 9.19336 29.2573 8.95785C29.2743 8.72234 29.2827 8.48683 29.2827 8.25132C29.2827 7.89805 29.2233 7.6289 29.1043 7.44385C28.9854 7.24199 28.7391 7.14105 28.3653 7.14105C27.9405 7.14105 27.5582 7.27563 27.2184 7.54478C26.8786 7.81394 26.5813 8.16721 26.3264 8.60459C26.0716 9.04196 25.8507 9.53822 25.6638 10.0933C25.4769 10.6485 25.324 11.212 25.2051 11.784C25.0861 12.3391 25.0012 12.8774 24.9502 13.3989C24.8993 13.9204 24.8738 14.3662 24.8738 14.7363C24.8738 15.0391 24.8908 15.3923 24.9247 15.7961C24.9587 16.183 25.0267 16.5615 25.1286 16.9316C25.2476 17.2848 25.4175 17.5876 25.6383 17.84C25.8592 18.0923 26.148 18.2185 26.5048 18.2185C27.1165 18.2185 27.6092 18.0334 27.983 17.6633C28.3568 17.2764 28.6116 16.7886 28.7476 16.1998C28.5097 16.1662 28.2718 16.1157 28.034 16.0484C27.8131 15.9643 27.6007 15.8549 27.3968 15.7204C27.2099 15.569 27.057 15.3923 26.9381 15.1905C26.8192 14.9718 26.7597 14.7195 26.7597 14.4335C26.7597 13.912 26.9381 13.5083 27.2949 13.2223C27.6517 12.9195 28.0679 12.6924 28.5437 12.541C29.0364 12.3896 29.5376 12.2971 30.0473 12.2634C30.557 12.2129 30.9648 12.1877 31.2706 12.1877C31.4915 12.1877 31.8143 12.2045 32.2391 12.2382C32.6638 12.2718 33.0801 12.3475 33.4878 12.4653C33.9126 12.5662 34.2779 12.7176 34.5837 12.9195C34.8895 13.1213 35.0424 13.3821 35.0424 13.7017C35.0424 14.341 34.864 14.8961 34.5073 15.3671C34.1674 15.8213 33.6577 16.0905 32.9781 16.1746Z",fill:"#758650"}),f.exports.createElement("path",{d:"M12.1311 43.7103C12.1311 44.1309 11.9527 44.5262 11.5959 44.8963C11.2561 45.2664 10.8058 45.6028 10.2451 45.9056C9.70146 46.2084 9.0898 46.4776 8.41019 46.7131C7.73058 46.9318 7.05946 47.1168 6.39684 47.2682C5.73422 47.4365 5.10558 47.5626 4.51092 47.6467C3.93325 47.7308 3.47451 47.7729 3.13471 47.7729C2.81189 47.7729 2.46359 47.7393 2.08981 47.672C1.73301 47.6215 1.43568 47.4953 1.19782 47.2935C1.0619 47.1925 0.942964 46.9654 0.841023 46.6122C0.739081 46.2589 0.637137 45.8383 0.535196 45.3505C0.450244 44.8627 0.373788 44.3412 0.305827 43.786C0.237866 43.2141 0.178398 42.659 0.127427 42.1206C0.0934468 41.5823 0.0594706 41.0861 0.0254901 40.6319C0.00849982 40.1777 0 39.8244 0 39.5721C0 39.1515 0.00849982 38.6469 0.0254901 38.0581C0.0594706 37.4525 0.101943 36.8132 0.152914 36.1404C0.203884 35.4506 0.271844 34.7525 0.356796 34.046C0.441747 33.3395 0.535195 32.675 0.637137 32.0526C0.756069 31.4133 0.891989 30.8414 1.0449 30.3367C1.2148 29.832 1.39321 29.4367 1.5801 29.1507C1.90292 28.6965 2.31068 28.4694 2.8034 28.4694C3.1432 28.4694 3.43204 28.5872 3.6699 28.8227C3.90777 29.0414 4.09466 29.3358 4.23058 29.7059C4.38349 30.0591 4.49393 30.4629 4.56189 30.9171C4.64685 31.3544 4.70631 31.7918 4.74029 32.2292C4.77427 32.6666 4.79126 33.0703 4.79126 33.4404C4.79126 33.8105 4.79126 34.1049 4.79126 34.3236C4.79126 35.6357 4.75728 36.9394 4.68932 38.2347C4.63835 39.5132 4.61286 40.8085 4.61286 42.1206V43.1047C5.37743 42.8692 6.20995 42.6505 7.11044 42.4487C8.01092 42.23 8.86893 42.1206 9.68447 42.1206C9.9733 42.1206 10.2621 42.1375 10.551 42.1711C10.8568 42.2048 11.1201 42.2805 11.341 42.3982C11.5789 42.4991 11.7658 42.659 11.9017 42.8776C12.0546 43.0795 12.1311 43.3571 12.1311 43.7103Z",fill:"#758650"}),f.exports.createElement("path",{d:"M25.6383 43.458C25.6383 43.7945 25.6043 44.1982 25.5364 44.6692C25.4854 45.1402 25.375 45.5944 25.2051 46.0318C25.0352 46.4524 24.8058 46.814 24.517 47.1168C24.2281 47.4028 23.8459 47.5458 23.3701 47.5458C22.7415 47.5458 22.2658 47.3187 21.943 46.8645C21.6371 46.4103 21.4163 45.872 21.2803 45.2496C21.1444 44.6103 21.0595 43.9627 21.0255 43.3066C21.0085 42.6505 20.9915 42.1291 20.9745 41.7421C19.7512 41.944 18.5449 42.1206 17.3556 42.272C17.3216 42.659 17.2451 43.1384 17.1262 43.7103C17.0243 44.2823 16.8544 44.8374 16.6165 45.3757C16.3956 45.8972 16.0983 46.3514 15.7245 46.7383C15.3677 47.1253 14.926 47.3187 14.3993 47.3187C13.9915 47.3187 13.6687 47.1757 13.4308 46.8897C13.2099 46.5869 13.04 46.2337 12.9211 45.8299C12.8022 45.4262 12.7257 45.0141 12.6917 44.5935C12.6748 44.1561 12.6663 43.7945 12.6663 43.5085C12.6663 42.5496 12.7427 41.6076 12.8956 40.6823C13.0485 39.7403 13.2269 38.8067 13.4308 37.8815C13.5328 37.3936 13.6687 36.8217 13.8386 36.1656C14.0085 35.5095 14.2124 34.8366 14.4502 34.1469C14.7051 33.4404 14.9939 32.7507 15.3167 32.0778C15.6565 31.3881 16.0388 30.7741 16.4636 30.2358C16.8883 29.6975 17.3726 29.2601 17.9163 28.9236C18.4599 28.5872 19.0631 28.419 19.7257 28.419C20.3713 28.419 20.932 28.562 21.4078 28.8479C21.8835 29.1339 22.2997 29.5124 22.6565 29.9834C23.0133 30.4545 23.3107 30.9928 23.5485 31.5984C23.7864 32.1871 23.9818 32.7927 24.1347 33.4152C24.3046 34.0208 24.4405 34.618 24.5425 35.2067C24.6614 35.7955 24.7633 36.317 24.8483 36.7712C25.0692 37.8646 25.256 38.9749 25.409 40.102C25.5619 41.2122 25.6383 42.3309 25.6383 43.458ZM20.7196 37.3263C20.7196 37.1245 20.7027 36.7964 20.6687 36.3422C20.6517 35.8712 20.6007 35.4086 20.5158 34.9544C20.4308 34.4834 20.2949 34.0712 20.108 33.718C19.9381 33.3479 19.7002 33.1628 19.3944 33.1628C19.2245 33.1628 19.0631 33.2806 18.9102 33.5161C18.7573 33.7348 18.6213 34.0208 18.5024 34.374C18.3835 34.7105 18.273 35.089 18.1711 35.5095C18.0862 35.9301 18.0097 36.3338 17.9417 36.7207C17.8738 37.1076 17.8228 37.4609 17.7888 37.7805C17.7548 38.0833 17.7294 38.302 17.7124 38.4366C18.7318 38.3525 19.7342 38.2263 20.7196 38.0581V37.3263Z",fill:"#758650"}),f.exports.createElement("path",{d:"M39.1201 33.6675C39.1201 34.5759 38.9162 35.4675 38.5085 36.3422C38.1177 37.217 37.591 38.0076 36.9284 38.7141C36.2657 39.4039 35.5097 39.9758 34.6602 40.43C33.8107 40.8674 32.9357 41.1113 32.0352 41.1618C32.0182 41.4646 32.0012 41.8515 31.9842 42.3225C31.9842 42.7767 31.9587 43.2561 31.9077 43.7608C31.8568 44.2655 31.7803 44.7701 31.6784 45.2748C31.5934 45.7795 31.4575 46.2337 31.2706 46.6374C31.1007 47.0411 30.8713 47.3692 30.5825 47.6215C30.3107 47.8738 29.9709 48 29.5631 48C29.0874 48 28.7051 47.8402 28.4162 47.5206C28.1444 47.2178 27.932 46.8477 27.7791 46.4103C27.6432 45.9729 27.5497 45.5187 27.4988 45.0477C27.4478 44.5599 27.4138 44.1477 27.3968 43.8113C27.3628 43.3234 27.3374 42.844 27.3204 42.373C27.3204 41.902 27.3204 41.4225 27.3204 40.9347C27.3204 40.716 27.3204 40.3123 27.3204 39.7235C27.3204 39.1179 27.3204 38.4366 27.3204 37.6796C27.3374 36.9058 27.3543 36.1067 27.3713 35.2824C27.3883 34.4413 27.4138 33.6675 27.4478 32.961C27.4818 32.2376 27.5158 31.6236 27.5497 31.1189C27.6007 30.6143 27.6602 30.3199 27.7281 30.2358C27.7451 30.2189 27.7961 30.1853 27.8811 30.1348C27.966 30.0675 28.0595 30.0087 28.1614 29.9582C28.2633 29.8909 28.3568 29.832 28.4417 29.7816C28.5267 29.7311 28.5861 29.6975 28.6201 29.6806C29.4017 29.2433 30.2597 28.8648 31.1942 28.5451C32.1286 28.2255 33.0546 28.0657 33.9721 28.0657C34.7536 28.0657 35.4587 28.2255 36.0873 28.5451C36.733 28.8479 37.2767 29.2601 37.7184 29.7816C38.1772 30.2862 38.5255 30.8834 38.7633 31.5731C39.0012 32.246 39.1201 32.9441 39.1201 33.6675ZM34.7111 34.2479C34.7111 33.9114 34.6262 33.617 34.4563 33.3647C34.3034 33.1124 34.04 32.9862 33.6662 32.9862C33.3434 32.9862 33.0206 33.0535 32.6978 33.1881C32.375 33.3058 32.0777 33.432 31.8058 33.5666C31.8568 34.1553 31.8993 34.7273 31.9332 35.2824C31.9842 35.8376 31.9927 36.4095 31.9587 36.9983C32.2306 36.8637 32.5279 36.7123 32.8507 36.5441C33.1735 36.359 33.4708 36.1572 33.7427 35.9385C34.0145 35.7198 34.2439 35.4759 34.4308 35.2067C34.6177 34.9207 34.7111 34.6011 34.7111 34.2479Z",fill:"#758650"}),f.exports.createElement("path",{d:"M52.0922 43.458C52.0922 43.7945 52.0582 44.1982 51.9903 44.6692C51.9393 45.1402 51.8288 45.5944 51.6589 46.0318C51.489 46.4524 51.2597 46.814 50.9708 47.1168C50.682 47.4028 50.2997 47.5458 49.824 47.5458C49.1954 47.5458 48.7196 47.3187 48.3968 46.8645C48.091 46.4103 47.8701 45.872 47.7342 45.2496C47.5983 44.6103 47.5133 43.9627 47.4793 43.3066C47.4623 42.6505 47.4454 42.1291 47.4284 41.7421C46.2051 41.944 44.9988 42.1206 43.8094 42.272C43.7755 42.659 43.699 43.1384 43.5801 43.7103C43.4781 44.2823 43.3082 44.8374 43.0704 45.3757C42.8495 45.8972 42.5522 46.3514 42.1784 46.7383C41.8216 47.1253 41.3798 47.3187 40.8531 47.3187C40.4454 47.3187 40.1225 47.1757 39.8847 46.8897C39.6638 46.5869 39.4939 46.2337 39.375 45.8299C39.256 45.4262 39.1796 45.0141 39.1456 44.5935C39.1286 44.1561 39.1201 43.7945 39.1201 43.5085C39.1201 42.5496 39.1966 41.6076 39.3495 40.6823C39.5024 39.7403 39.6808 38.8067 39.8847 37.8815C39.9866 37.3936 40.1225 36.8217 40.2924 36.1656C40.4623 35.5095 40.6662 34.8366 40.9041 34.1469C41.159 33.4404 41.4478 32.7507 41.7706 32.0778C42.1104 31.3881 42.4927 30.7741 42.9174 30.2358C43.3422 29.6975 43.8264 29.2601 44.3701 28.9236C44.9138 28.5872 45.517 28.419 46.1796 28.419C46.8252 28.419 47.3859 28.562 47.8616 28.8479C48.3374 29.1339 48.7536 29.5124 49.1104 29.9834C49.4672 30.4545 49.7645 30.9928 50.0024 31.5984C50.2403 32.1871 50.4357 32.7927 50.5886 33.4152C50.7585 34.0208 50.8944 34.618 50.9963 35.2067C51.1153 35.7955 51.2172 36.317 51.3021 36.7712C51.523 37.8646 51.7099 38.9749 51.8628 40.102C52.0157 41.2122 52.0922 42.3309 52.0922 43.458ZM47.1735 37.3263C47.1735 37.1245 47.1565 36.7964 47.1225 36.3422C47.1056 35.8712 47.0546 35.4086 46.9696 34.9544C46.8847 34.4834 46.7488 34.0712 46.5619 33.718C46.392 33.3479 46.1541 33.1628 45.8483 33.1628C45.6784 33.1628 45.517 33.2806 45.364 33.5161C45.2111 33.7348 45.0752 34.0208 44.9563 34.374C44.8374 34.7105 44.7269 35.089 44.625 35.5095C44.54 35.9301 44.4636 36.3338 44.3956 36.7207C44.3276 37.1076 44.2767 37.4609 44.2427 37.7805C44.2087 38.0833 44.1832 38.302 44.1662 38.4366C45.1856 38.3525 46.1881 38.2263 47.1735 38.0581V37.3263Z",fill:"#758650"}),f.exports.createElement("path",{d:"M57.2817 1.09879C53.6383 0.62618 52.6744 8.18767 56.141 8.63861C59.5488 9.0825 60.8661 1.56431 57.2817 1.09879ZM50.2933 0.0267887C50.2393 0.0186128 50.1852 0.0138761 50.1289 0.00910539C46.4695 -0.298862 45.9141 7.30568 49.3961 7.6C52.7655 7.88527 53.6992 0.545837 50.2933 0.0267887ZM43.9644 4.48051C43.8573 4.46077 43.7489 4.44845 43.64 4.44365C39.9737 4.28077 39.7774 11.9105 43.2659 12.0668C46.5882 12.216 47.2082 5.07309 43.9644 4.48051ZM62.0768 7.66507C58.4675 6.98011 56.9746 14.4554 60.4088 15.1085C63.7844 15.7508 65.6277 8.33947 62.0768 7.66507ZM51.8882 10.383C48.1643 9.83004 50.3674 14.1158 43.4251 15.2017C38.0443 16.0433 40.2244 21.722 44.5718 22.4834C46.9579 22.9014 48.1354 21.1807 50.0887 21.5232C52.3066 21.9118 52.1923 23.6165 55.4388 24.1852C59.5841 24.9111 62.8887 20.138 58.4498 17.5662C52.7981 14.2918 55.956 11.1173 52.0712 10.4143C52.009 10.4032 51.9473 10.3918 51.8882 10.383Z",fill:"#758650"})),J=g.div`
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
`,he=g.div`
  display: flex;
  flex-direction: ${({$direction:e})=>e};
  align-items: ${({$align:e})=>e};
  justify-content: ${({$justify:e})=>e};
  gap: ${({$gap:e})=>e};
  height: ${({$fullheight:e,$height:t})=>e?"calc(100vh - 96px)":t};
  width: ${({$width:e})=>e||"auto"};
`,Ee=g.button`
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
`,ha=g.header`
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.background};
  height: ${({theme:e})=>e.headerHeight};
`,Ca=g(he)`
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
    right: ${({$extendNavbar:e})=>e?"0":"-100%"};
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
`,ma=g.nav`
  @media (max-width: 1279px) {
    width: 100%;
  }
`,ga=g(he)`
  @media (max-width: 1279px) {
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 40px;
  }
`,xa=g.li`
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
`,va=g(he)`
  @media (max-width: 1279px) {
    width: 315px;
  }

  @media (max-width: 767px) {
    width: 240px;
    ${({$extendNavbar:e})=>e&&"flex-direction: row-reverse;"}
  }
`,ya=g(Ee)`
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

    ${({$extendNavbar:e})=>e&&"display: none;"};
  }
`,wa=g.button`
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

    ${({$isActive:e})=>e&&d1`
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
`;var Y3={exports:{}},q3={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=f.exports,ka=Symbol.for("react.element"),Sa=Symbol.for("react.fragment"),Fa=Object.prototype.hasOwnProperty,Da=Ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,La={key:!0,ref:!0,__self:!0,__source:!0};function Bl(e,t,n){var u,r={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(u in t)Fa.call(t,u)&&!La.hasOwnProperty(u)&&(r[u]=t[u]);if(e&&e.defaultProps)for(u in t=e.defaultProps,t)r[u]===void 0&&(r[u]=t[u]);return{$$typeof:ka,type:e,key:i,ref:o,props:r,_owner:Da.current}}q3.Fragment=Sa;q3.jsx=Bl;q3.jsxs=Bl;Y3.exports=q3;const s=Y3.exports.jsx,v=Y3.exports.jsxs,Z0=Y3.exports.Fragment;function Aa({title:e,to:t,testId:n,setExtendNavbar:u}){return s(xa,{children:s(t1,{to:t,end:!0,"data-testid":n,onClick:()=>{u(r=>!r)},children:e})})}const Ba=[{id:Math.random().toString(),title:"\u041F\u0440\u043E \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A",to:"about",testId:"about-link"},{id:Math.random().toString(),title:"\u041D\u0430\u0448\u0456 \u0445\u0432\u043E\u0441\u0442\u0438",to:"dogs",testId:"dogs-link"},{id:Math.random().toString(),title:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",to:"contacts",testId:"contacts-link"}],Pa=({setExtendNavbar:e})=>s(ma,{children:s("ul",{children:s(ga,{$gap:"20px",children:Ba.map(t=>s(Aa,{title:t.title,to:t.to,testId:t.testId,setExtendNavbar:e},t.id))})})});function $a({className:e,extendNavbar:t,setExtendNavbar:n}){return s(Ca,{$align:"center",$justify:"space-between",$gap:"10px",className:e,$extendNavbar:t,children:s(Pa,{setExtendNavbar:n})})}function za({className:e,children:t,extendNavbar:n}){return s(va,{$justify:"space-between",$align:"center",className:e,$extendNavbar:n,children:t})}function Ma({className:e,onClick:t,isActive:n}){return s(wa,{className:e,onClick:t,$isActive:n,children:s("span",{})})}const Ta=()=>{const[e,t]=f.exports.useState(!1);return s(ha,{children:s(J,{children:v(he,{$justify:"space-between",$align:"center",$gap:"20px",children:[s(t1,{to:".",end:!0,"data-testid":"home-link",children:s(fa,{})}),s($a,{extendNavbar:e,setExtendNavbar:t}),v(za,{extendNavbar:e,children:[s(ya,{$extendNavbar:e,children:s("span",{children:"\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A"})}),s(Ma,{isActive:e,onClick:()=>{t(n=>!n)}})]})]})})})},Pl=pa`
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
`,Na=e=>f.exports.createElement("svg",{width:26,height:44,viewBox:"0 0 26 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M24 2H18C15.3478 2 12.8043 3.05357 10.9289 4.92893C9.05357 6.8043 8 9.34784 8 12V18H2V26H8V42H16V26H22L24 18H16V12C16 11.4696 16.2107 10.9609 16.5858 10.5858C16.9609 10.2107 17.4696 10 18 10H24V2Z",stroke:"#F9F9F9",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})),Ra=e=>f.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M11.6 0H28.4C34.8 0 40 5.2 40 11.6V28.4C40 31.4765 38.7779 34.427 36.6024 36.6024C34.427 38.7779 31.4765 40 28.4 40H11.6C5.2 40 0 34.8 0 28.4V11.6C0 8.52349 1.22214 5.57298 3.39756 3.39756C5.57298 1.22214 8.52349 0 11.6 0ZM11.2 4C9.29044 4 7.45909 4.75857 6.10883 6.10883C4.75857 7.45909 4 9.29044 4 11.2V28.8C4 32.78 7.22 36 11.2 36H28.8C30.7096 36 32.5409 35.2414 33.8912 33.8912C35.2414 32.5409 36 30.7096 36 28.8V11.2C36 7.22 32.78 4 28.8 4H11.2ZM30.5 7C31.163 7 31.7989 7.26339 32.2678 7.73223C32.7366 8.20107 33 8.83696 33 9.5C33 10.163 32.7366 10.7989 32.2678 11.2678C31.7989 11.7366 31.163 12 30.5 12C29.837 12 29.2011 11.7366 28.7322 11.2678C28.2634 10.7989 28 10.163 28 9.5C28 8.83696 28.2634 8.20107 28.7322 7.73223C29.2011 7.26339 29.837 7 30.5 7ZM20 10C22.6522 10 25.1957 11.0536 27.0711 12.9289C28.9464 14.8043 30 17.3478 30 20C30 22.6522 28.9464 25.1957 27.0711 27.0711C25.1957 28.9464 22.6522 30 20 30C17.3478 30 14.8043 28.9464 12.9289 27.0711C11.0536 25.1957 10 22.6522 10 20C10 17.3478 11.0536 14.8043 12.9289 12.9289C14.8043 11.0536 17.3478 10 20 10ZM20 14C18.4087 14 16.8826 14.6321 15.7574 15.7574C14.6321 16.8826 14 18.4087 14 20C14 21.5913 14.6321 23.1174 15.7574 24.2426C16.8826 25.3679 18.4087 26 20 26C21.5913 26 23.1174 25.3679 24.2426 24.2426C25.3679 23.1174 26 21.5913 26 20C26 18.4087 25.3679 16.8826 24.2426 15.7574C23.1174 14.6321 21.5913 14 20 14Z",fill:"#F9F9F9"})),Ia=g.footer`
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
`,ba=g.div`
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
`,Ha=g.ul`
  /* @media (max-width: 767px) {
    margin-top: 18%;
    margin-bottom: 18%;
  } */
`,k0=g.li`
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
`,Rn=g.a`
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
`,Oa=g.ul`
  /* @media (max-width: 767px) {
    margin-bottom: 18%;
  } */
`,y1=g.li`
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
`,In=g.p`
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
`,_a=g.ul`
  display: flex;
  gap: 24px;
`,ki=g.a`
  &:hover svg {
    transition: ${({theme:e})=>e.transitions.long};
    stroke: ${({theme:e})=>e.colors.yellow};
  }
`,ja=g(Na)`
  &:hover path {
    stroke: ${({theme:e})=>e.colors.yellow};
  }
`,Va=g(Ra)`
  &:hover path {
    fill: ${({theme:e})=>e.colors.yellow};
  }
`,Ua=g.p`
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
`,Za=e=>f.exports.createElement("svg",{width:140,height:105,viewBox:"0 0 140 105",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M24.5855 16.0074C24.5855 18.5465 23.9536 20.8649 22.69 22.9624C21.4263 25.0231 19.7353 26.7526 17.6168 28.151C18.7318 28.3718 19.6981 28.7581 20.5158 29.3101C21.3334 29.8253 22.0024 30.4693 22.5227 31.242C23.0802 32.0148 23.4891 32.898 23.7492 33.8915C24.0466 34.8483 24.1952 35.8603 24.1952 36.9274C24.1952 39.0249 23.6935 40.8649 22.69 42.4472C21.7237 43.9927 20.46 45.2807 18.899 46.311C17.338 47.3046 15.5912 48.059 13.6586 48.5742C11.7631 49.0525 9.86764 49.2917 7.97216 49.2917C6.9315 49.2917 5.89085 49.2181 4.85019 49.0709C3.80954 48.9237 2.82463 48.6661 1.89548 48.2982C1.56098 48.1878 1.28223 47.7462 1.05924 46.9734C0.83624 46.1638 0.650409 45.1887 0.501744 44.0479C0.390246 42.9072 0.29733 41.6744 0.222997 40.3497C0.148665 39.0249 0.0929156 37.7554 0.0557493 36.541C0.0185831 35.3267 0 34.2595 0 33.3396C0 32.4196 0 31.7756 0 31.4076C0 30.1197 0 28.8317 0 27.5438C0 26.219 0.0371662 24.9127 0.111499 23.6247C0.111499 23.2935 0.111499 22.7784 0.111499 22.0792C0.148665 21.38 0.167248 20.6073 0.167248 19.7609C0.204414 18.8777 0.24158 17.9578 0.278747 17.001C0.353079 16.0442 0.427412 15.1611 0.501744 14.3515C0.613243 13.5051 0.743324 12.7876 0.891989 12.1988C1.07782 11.61 1.28224 11.242 1.50523 11.0948C2.36006 10.5429 3.3078 10.0277 4.34845 9.54929C5.3891 9.03411 6.46693 8.59254 7.58191 8.22455C8.6969 7.85656 9.81189 7.56217 10.9269 7.34138C12.0419 7.12059 13.1011 7.0102 14.1046 7.0102C15.4797 7.0102 16.7991 7.21258 18.0628 7.61736C19.3636 7.98535 20.4786 8.55574 21.4078 9.32851C22.3741 10.1013 23.136 11.058 23.6935 12.1988C24.2881 13.3028 24.5855 14.5723 24.5855 16.0074ZM15.3311 18.9329C15.3311 18.3073 15.1267 17.8474 14.7178 17.553C14.3462 17.2586 13.8444 17.1114 13.2126 17.1114C12.6923 17.1114 12.1348 17.2218 11.5401 17.4426C10.9826 17.6634 10.4995 17.9578 10.0906 18.3257C9.97913 18.4361 9.86764 18.7489 9.75614 19.2641C9.68181 19.7793 9.60747 20.3681 9.53314 21.0304C9.49598 21.656 9.45881 22.2632 9.42164 22.852C9.42164 23.4039 9.42164 23.7719 9.42164 23.9559C9.42164 24.0295 9.42164 24.1583 9.42164 24.3423C9.42164 24.4895 9.42164 24.6551 9.42164 24.8391C9.45881 25.0231 9.49598 25.1887 9.53314 25.3359C9.57031 25.4831 9.62605 25.5567 9.70039 25.5567C10.3322 25.5567 10.9826 25.3359 11.6516 24.8943C12.3206 24.4159 12.9153 23.8455 13.4356 23.1832C13.9931 22.484 14.4391 21.748 14.7736 20.9752C15.1452 20.2025 15.3311 19.5217 15.3311 18.9329ZM15.1081 34.8851C15.1081 34.2595 14.8851 33.8179 14.4391 33.5603C13.9931 33.3027 13.4913 33.174 12.9339 33.174C12.4135 33.174 11.856 33.3027 11.2614 33.5603C10.7039 33.7811 10.2393 34.0571 9.86763 34.3883C9.75614 34.4619 9.66322 34.6459 9.58889 34.9403C9.55172 35.2347 9.51456 35.5659 9.47739 35.9339C9.47739 36.265 9.45881 36.5962 9.42164 36.9274C9.42164 37.2218 9.42164 37.4242 9.42164 37.5346C9.42164 37.6082 9.42164 37.7554 9.42164 37.9762C9.42164 38.197 9.42164 38.4362 9.42164 38.6937C9.45881 38.9145 9.49598 39.1353 9.53314 39.3561C9.60747 39.5401 9.68181 39.6321 9.75614 39.6321C10.2765 39.6321 10.8525 39.4849 11.4844 39.1905C12.1162 38.8961 12.6923 38.5281 13.2126 38.0866C13.7701 37.645 14.2161 37.1482 14.5506 36.5962C14.9222 36.0074 15.1081 35.4371 15.1081 34.8851Z",fill:"#F9F9F9"}),f.exports.createElement("path",{d:"M46.3835 11.15C46.3835 11.8492 46.2162 12.4748 45.8817 13.0268C45.5844 13.5787 45.1756 14.0571 44.6552 14.4619C44.1349 14.8299 43.5588 15.1427 42.927 15.4003C42.2952 15.6578 41.6819 15.8418 41.0873 15.9522C41.0129 20.1105 40.8457 24.1215 40.5855 27.9854C40.3625 31.8492 39.9909 35.8418 39.4705 39.9633H39.805C40.3997 39.9633 40.9758 40.0369 41.5333 40.1841C42.1279 40.2945 42.6483 40.5153 43.0943 40.8465C43.5774 41.1408 43.9491 41.5272 44.2092 42.0056C44.5066 42.4472 44.6552 42.9992 44.6552 43.6615C44.6552 44.5079 44.3765 45.2439 43.819 45.8695C43.2987 46.495 42.5925 47.0286 41.7005 47.4702C40.8457 47.9118 39.8794 48.2798 38.8015 48.5742C37.7237 48.8685 36.6459 49.0893 35.5681 49.2365C34.4903 49.4205 33.4682 49.5493 32.5019 49.6229C31.5355 49.6965 30.7551 49.7333 30.1604 49.7333C29.7144 49.7333 29.1569 49.7149 28.4879 49.6781C27.8561 49.6413 27.2428 49.5309 26.6482 49.3469C26.0907 49.1629 25.6075 48.8869 25.1987 48.519C24.7899 48.151 24.5855 47.6542 24.5855 47.0286C24.5855 46.2559 24.7527 45.5751 25.0872 44.9863C25.3845 44.3607 25.7934 43.8087 26.3137 43.3304C26.834 42.852 27.4101 42.4656 28.0419 42.1712C28.7109 41.8768 29.3799 41.656 30.0489 41.5088C30.3091 39.4849 30.5506 37.4794 30.7736 35.4923C30.9966 33.4683 31.1453 31.426 31.2196 29.3653C31.294 27.2678 31.3683 25.2071 31.4426 23.1832C31.517 21.1224 31.5913 19.0617 31.6656 17.001C31.4055 17.0378 31.1639 17.0746 30.9409 17.1114C30.7179 17.1114 30.5135 17.1114 30.3276 17.1114C29.8073 17.1114 29.2498 17.0562 28.6552 16.9458C28.0605 16.8354 27.503 16.6514 26.9827 16.3938C26.4624 16.0994 26.0164 15.7498 25.6447 15.3451C25.3102 14.9403 25.143 14.4251 25.143 13.7995C25.143 12.5484 25.6633 11.518 26.7039 10.7084C27.7818 9.89888 29.0454 9.27331 30.4949 8.83172C31.9815 8.39014 33.4868 8.09576 35.0106 7.94856C36.5344 7.76457 37.7609 7.67256 38.69 7.67256C39.2104 7.67256 39.898 7.70937 40.7528 7.78297C41.6076 7.85657 42.4438 8.02215 43.2615 8.27974C44.1163 8.53733 44.8411 8.88692 45.4357 9.32851C46.0676 9.77009 46.3835 10.3773 46.3835 11.15Z",fill:"#F9F9F9"}),f.exports.createElement("path",{d:"M72.1397 35.3819C71.8052 37.0378 71.2663 38.7673 70.5229 40.5705C69.8168 42.3368 68.8876 43.9559 67.7355 45.4279C66.6205 46.8998 65.2825 48.0958 63.7215 49.0157C62.1605 49.9725 60.3766 50.4509 58.3696 50.4509C56.8829 50.4509 55.5449 50.1565 54.3556 49.5677C53.1663 48.9789 52.0885 48.1878 51.1222 47.1942C50.1558 46.2006 49.3196 45.0599 48.6134 43.7719C47.9073 42.484 47.3126 41.1592 46.8295 39.7977C46.3835 38.3994 46.049 37.0194 45.826 35.6579C45.603 34.2963 45.4915 33.0268 45.4915 31.8492C45.4915 30.1933 45.6401 28.427 45.9375 26.5502C46.272 24.6367 46.7551 22.76 47.387 20.9201C48.0188 19.0433 48.8178 17.2586 49.7842 15.5659C50.7505 13.8363 51.8841 12.3276 53.1849 11.0396C54.5229 9.71489 56.0095 8.66613 57.6448 7.89336C59.3173 7.08379 61.1756 6.679 63.2198 6.679C64.5206 6.679 65.7285 6.93659 66.8435 7.45177C67.9585 7.93015 68.9248 8.59253 69.7424 9.4389C70.5601 10.2485 71.1919 11.2236 71.6379 12.3644C72.1211 13.5051 72.3627 14.7011 72.3627 15.9522V16.449C72.3627 17.1114 72.3255 17.9394 72.2512 18.9329C72.214 19.8897 72.0467 20.8097 71.7494 21.6928C71.4521 22.576 71.0061 23.3487 70.4114 24.0111C69.8168 24.6367 68.9805 24.9495 67.9027 24.9495C66.6019 24.9495 65.617 24.6551 64.948 24.0663C64.279 23.4775 63.9445 22.5024 63.9445 21.1408C63.9445 20.6257 63.9631 20.1105 64.0003 19.5953C64.0374 19.0801 64.056 18.5649 64.056 18.0498C64.056 17.277 63.9259 16.6882 63.6658 16.2834C63.4056 15.8418 62.8667 15.6211 62.049 15.6211C61.1199 15.6211 60.2836 15.9154 59.5403 16.5042C58.797 17.093 58.1466 17.8658 57.5891 18.8225C57.0316 19.7793 56.5484 20.8648 56.1396 22.0792C55.7308 23.2936 55.3963 24.5263 55.1361 25.7775C54.8759 26.9918 54.6901 28.1694 54.5786 29.3101C54.4671 30.4509 54.4114 31.426 54.4114 32.2356C54.4114 32.898 54.4485 33.6707 54.5229 34.5539C54.5972 35.4003 54.7459 36.2282 54.9689 37.0378C55.229 37.8106 55.6007 38.4729 56.0839 39.0249C56.567 39.5769 57.1988 39.8529 57.9793 39.8529C59.3173 39.8529 60.3951 39.4481 61.2128 38.6385C62.0305 37.7922 62.5879 36.725 62.8853 35.4371C62.3649 35.3635 61.8446 35.2531 61.3243 35.1059C60.8411 34.9219 60.3766 34.6827 59.9306 34.3883C59.5217 34.0571 59.1872 33.6707 58.9271 33.2292C58.6669 32.7508 58.5368 32.1988 58.5368 31.5732C58.5368 30.4325 58.9271 29.5493 59.7076 28.9237C60.4881 28.2614 61.3986 27.7646 62.4393 27.4334C63.5171 27.1022 64.6135 26.8998 65.7285 26.8262C66.8435 26.7158 67.7355 26.6606 68.4045 26.6606C68.8876 26.6606 69.5938 26.6974 70.5229 26.771C71.4521 26.8446 72.3627 27.0102 73.2547 27.2678C74.1838 27.4886 74.9829 27.8198 75.6519 28.2614C76.3209 28.7029 76.6554 29.2733 76.6554 29.9725C76.6554 31.3708 76.2651 32.5852 75.4846 33.6155C74.7413 34.6091 73.6263 35.1979 72.1397 35.3819Z",fill:"#F9F9F9"}),f.exports.createElement("path",{d:"M26.5367 95.6164C26.5367 96.5363 26.1465 97.4011 25.366 98.2107C24.6226 99.0202 23.6377 99.7562 22.4113 100.419C21.2219 101.081 19.8839 101.67 18.3973 102.185C16.9106 102.663 15.4426 103.068 13.9931 103.399C12.5436 103.767 11.1685 104.043 9.86763 104.227C8.60398 104.411 7.6005 104.503 6.85717 104.503C6.15101 104.503 5.38911 104.43 4.57145 104.282C3.79096 104.172 3.14056 103.896 2.62023 103.454C2.3229 103.234 2.06273 102.737 1.83974 101.964C1.61674 101.191 1.39374 100.271 1.17074 99.2042C0.984909 98.1371 0.817662 96.9963 0.668997 95.782C0.520332 94.5308 0.390246 93.3165 0.278747 92.1389C0.204415 90.9614 0.130092 89.8758 0.0557596 88.8822C0.0185934 87.8887 0 87.1159 0 86.5639C0 85.644 0.0185934 84.54 0.0557596 83.2521C0.130092 81.9273 0.223 80.529 0.334499 79.057C0.445997 77.5483 0.59466 76.0211 0.780491 74.4756C0.966322 72.9301 1.17074 71.4765 1.39374 70.115C1.6539 68.7166 1.95123 67.4655 2.28572 66.3615C2.65738 65.2576 3.04764 64.3928 3.45647 63.7672C4.16263 62.7737 5.05461 62.2769 6.13243 62.2769C6.87576 62.2769 7.50759 62.5345 8.02791 63.0497C8.54824 63.528 8.95707 64.172 9.2544 64.9816C9.58889 65.7544 9.83048 66.6375 9.97915 67.6311C10.165 68.5878 10.2951 69.5446 10.3694 70.5014C10.4437 71.4581 10.4809 72.3413 10.4809 73.1509C10.4809 73.9604 10.4809 74.6044 10.4809 75.0828C10.4809 77.9531 10.4065 80.805 10.2579 83.6385C10.1464 86.4352 10.0906 89.2686 10.0906 92.1389V94.2916C11.7631 93.7765 13.5843 93.2981 15.5541 92.8565C17.5239 92.3781 19.4008 92.1389 21.1848 92.1389C21.8166 92.1389 22.4484 92.1757 23.0802 92.2493C23.7492 92.3229 24.3253 92.4885 24.8085 92.7461C25.3288 92.9669 25.7376 93.3165 26.035 93.7948C26.3695 94.2364 26.5367 94.8436 26.5367 95.6164Z",fill:"#F9F9F9"}),f.exports.createElement("path",{d:"M56.0839 95.0644C56.0839 95.8004 56.0095 96.6835 55.8609 97.7139C55.7494 98.7442 55.5078 99.7378 55.1361 100.695C54.7645 101.615 54.2627 102.406 53.6309 103.068C52.9991 103.694 52.1628 104.006 51.1222 104.006C49.747 104.006 48.7064 103.51 48.0002 102.516C47.3312 101.523 46.8481 100.345 46.5507 98.9834C46.2534 97.5851 46.0676 96.1683 45.9932 94.7332C45.9561 93.2981 45.9189 92.1573 45.8817 91.3109C43.2058 91.7525 40.567 92.1389 37.9653 92.4701C37.891 93.3165 37.7237 94.3652 37.4636 95.6164C37.2406 96.8675 36.8689 98.0819 36.3486 99.2594C35.8654 100.4 35.215 101.394 34.3974 102.24C33.6169 103.086 32.6505 103.51 31.4984 103.51C30.6064 103.51 29.9002 103.197 29.3799 102.571C28.8968 101.909 28.5251 101.136 28.2649 100.253C28.0048 99.3698 27.8375 98.4683 27.7632 97.5483C27.726 96.5915 27.7074 95.8004 27.7074 95.1748C27.7074 93.0773 27.8747 91.0166 28.2092 88.9926C28.5437 86.9319 28.9339 84.8896 29.3799 82.8657C29.6029 81.7985 29.9002 80.5474 30.2719 79.1122C30.6436 77.6771 31.0896 76.2051 31.6099 74.6964C32.1674 73.1509 32.7992 71.6421 33.5054 70.1702C34.2487 68.6614 35.0849 67.3183 36.0141 66.1407C36.9432 64.9632 38.0025 64.0064 39.1918 63.2705C40.3811 62.5345 41.7005 62.1665 43.15 62.1665C44.5623 62.1665 45.7888 62.4793 46.8295 63.1049C47.8701 63.7304 48.7807 64.5584 49.5612 65.5888C50.3417 66.6191 50.9921 67.7967 51.5124 69.1214C52.0328 70.4094 52.4601 71.7341 52.7946 73.0957C53.1663 74.4204 53.4636 75.7268 53.6866 77.0147C53.9468 78.3027 54.1698 79.4434 54.3556 80.437C54.8388 82.8289 55.2476 85.2576 55.5821 87.7231C55.9166 90.1518 56.0839 92.5989 56.0839 95.0644ZM45.3242 81.6513C45.3242 81.2097 45.2871 80.4922 45.2127 79.4986C45.1756 78.4682 45.0641 77.4563 44.8782 76.4627C44.6924 75.4324 44.3951 74.5308 43.9862 73.758C43.6146 72.9485 43.0943 72.5437 42.4253 72.5437C42.0536 72.5437 41.7005 72.8013 41.366 73.3165C41.0315 73.7948 40.7342 74.4204 40.474 75.1932C40.2139 75.9291 39.9723 76.7571 39.7493 77.6771C39.5635 78.597 39.3962 79.4802 39.2476 80.3266C39.0989 81.173 38.9874 81.9457 38.9131 82.6449C38.8387 83.3073 38.783 83.7856 38.7458 84.08C40.9758 83.896 43.1686 83.62 45.3242 83.2521V81.6513Z",fill:"#F9F9F9"}),f.exports.createElement("path",{d:"M85.5753 73.6476C85.5753 75.6348 85.1293 77.5851 84.2373 79.4986C83.3824 81.4121 82.2303 83.1417 80.7808 84.6872C79.3313 86.1959 77.6774 87.4471 75.8191 88.4406C73.9608 89.3974 72.0467 89.931 70.0769 90.0414C70.0398 90.7038 70.0026 91.5501 69.9655 92.5805C69.9655 93.5741 69.9097 94.6228 69.7982 95.7268C69.6867 96.8307 69.5194 97.9347 69.2965 99.0386C69.1106 100.143 68.8133 101.136 68.4045 102.019C68.0328 102.902 67.531 103.62 66.8992 104.172C66.3046 104.724 65.5612 105 64.6693 105C63.6286 105 62.7924 104.65 62.1605 103.951C61.5659 103.289 61.1013 102.479 60.7668 101.523C60.4695 100.566 60.265 99.5722 60.1535 98.5419C60.0421 97.4747 59.9677 96.5731 59.9306 95.8371C59.8562 94.77 59.8005 93.7212 59.7633 92.6909C59.7633 91.6605 59.7633 90.6118 59.7633 89.5446C59.7633 89.0662 59.7633 88.1831 59.7633 86.8951C59.7633 85.5704 59.7633 84.08 59.7633 82.4241C59.8005 80.7314 59.8376 78.9834 59.8748 77.1803C59.912 75.3404 59.9677 73.6476 60.0421 72.1021C60.1164 70.5198 60.1907 69.1766 60.2651 68.0727C60.3766 66.9687 60.5066 66.3247 60.6553 66.1407C60.6925 66.1039 60.804 66.0303 60.9898 65.92C61.1756 65.7728 61.3801 65.644 61.6031 65.5336C61.826 65.3864 62.0304 65.2576 62.2163 65.1472C62.4021 65.0368 62.5322 64.9632 62.6065 64.9264C64.3162 63.9696 66.1931 63.1417 68.2372 62.4425C70.2814 61.7433 72.3069 61.3937 74.3139 61.3937C76.0235 61.3937 77.5659 61.7433 78.9411 62.4425C80.3534 63.1049 81.5427 64.0064 82.509 65.1472C83.5125 66.2511 84.2744 67.5575 84.7948 69.0662C85.3151 70.5382 85.5753 72.0653 85.5753 73.6476ZM75.9306 74.9172C75.9306 74.1812 75.7448 73.5372 75.3731 72.9853C75.0386 72.4333 74.4625 72.1573 73.6449 72.1573C72.9387 72.1573 72.2326 72.3045 71.5264 72.5989C70.8203 72.8565 70.1699 73.1325 69.5752 73.4269C69.6867 74.7148 69.7796 75.966 69.854 77.1803C69.9654 78.3947 69.984 79.6458 69.9097 80.9337C70.5044 80.6394 71.1548 80.3082 71.8609 79.9402C72.5671 79.5354 73.2175 79.0938 73.8121 78.6154C74.4068 78.1371 74.9086 77.6035 75.3174 77.0147C75.7262 76.3891 75.9306 75.69 75.9306 74.9172Z",fill:"#F9F9F9"}),f.exports.createElement("path",{d:"M113.952 95.0644C113.952 95.8004 113.877 96.6835 113.729 97.7139C113.617 98.7442 113.376 99.7378 113.004 100.695C112.632 101.615 112.131 102.406 111.499 103.068C110.867 103.694 110.031 104.006 108.99 104.006C107.615 104.006 106.574 103.51 105.868 102.516C105.199 101.523 104.716 100.345 104.419 98.9834C104.121 97.5851 103.935 96.1683 103.861 94.7332C103.824 93.2981 103.787 92.1573 103.75 91.3109C101.074 91.7525 98.4348 92.1389 95.8331 92.4701C95.7588 93.3165 95.5916 94.3652 95.3314 95.6164C95.1084 96.8675 94.7367 98.0819 94.2164 99.2594C93.7332 100.4 93.0828 101.394 92.2652 102.24C91.4847 103.086 90.5184 103.51 89.3662 103.51C88.4742 103.51 87.7681 103.197 87.2477 102.571C86.7646 101.909 86.3929 101.136 86.1328 100.253C85.8726 99.3698 85.7053 98.4683 85.631 97.5483C85.5938 96.5915 85.5753 95.8004 85.5753 95.1748C85.5753 93.0773 85.7425 91.0166 86.077 88.9926C86.4115 86.9319 86.8017 84.8896 87.2477 82.8657C87.4707 81.7985 87.7681 80.5474 88.1397 79.1122C88.5114 77.6771 88.9574 76.2051 89.4777 74.6964C90.0352 73.1509 90.667 71.6421 91.3732 70.1702C92.1165 68.6614 92.9527 67.3183 93.8819 66.1407C94.8111 64.9632 95.8703 64.0064 97.0596 63.2705C98.2489 62.5345 99.5684 62.1665 101.018 62.1665C102.43 62.1665 103.657 62.4793 104.697 63.1049C105.738 63.7304 106.649 64.5584 107.429 65.5888C108.21 66.6191 108.86 67.7967 109.38 69.1214C109.901 70.4094 110.328 71.7341 110.662 73.0957C111.034 74.4204 111.331 75.7268 111.554 77.0147C111.815 78.3027 112.038 79.4434 112.223 80.437C112.707 82.8289 113.115 85.2576 113.45 87.7231C113.784 90.1518 113.952 92.5989 113.952 95.0644ZM103.192 81.6513C103.192 81.2097 103.155 80.4922 103.081 79.4986C103.043 78.4682 102.932 77.4563 102.746 76.4627C102.56 75.4324 102.263 74.5308 101.854 73.758C101.482 72.9485 100.962 72.5437 100.293 72.5437C99.9214 72.5437 99.5684 72.8013 99.2339 73.3165C98.8994 73.7948 98.602 74.4204 98.3419 75.1932C98.0817 75.9291 97.8401 76.7571 97.6172 77.6771C97.4313 78.597 97.264 79.4802 97.1154 80.3266C96.9667 81.173 96.8552 81.9457 96.7809 82.6449C96.7065 83.3073 96.6508 83.7856 96.6136 84.08C98.8436 83.896 101.036 83.62 103.192 83.2521V81.6513Z",fill:"#F9F9F9"}),f.exports.createElement("path",{d:"M125.304 2.40361C117.334 1.36977 115.225 17.9105 122.808 18.897C130.263 19.868 133.145 3.42192 125.304 2.40361ZM110.017 0.0586003C109.898 0.0407156 109.78 0.0303541 109.657 0.019918C101.652 -0.65376 100.437 15.9812 108.054 16.625C115.425 17.249 117.467 1.19402 110.017 0.0586003ZM96.1722 9.80112C95.9378 9.75794 95.7007 9.73099 95.4625 9.72047C87.4425 9.36419 87.013 26.0542 94.6442 26.3961C101.912 26.7224 103.268 11.0974 96.1722 9.80112ZM135.793 16.7673C127.898 15.269 124.632 31.6212 132.144 33.0499C139.528 34.455 143.561 18.2426 135.793 16.7673ZM113.506 22.7128C105.36 21.5032 110.179 30.8783 94.9925 33.2538C83.2219 35.0947 87.9909 47.5169 97.5008 49.1824C102.72 50.0968 105.296 46.3328 109.569 47.0821C114.421 47.9322 114.171 51.661 121.272 52.9052C130.34 54.4931 137.569 44.0519 127.859 38.4261C115.496 31.2634 122.404 24.3192 113.906 22.7814C113.77 22.757 113.635 22.732 113.506 22.7128Z",fill:"#F9F9F9"})),Si=e=>f.exports.createElement("svg",{width:22,height:22,viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M20.9999 15.9201V18.9201C21.0011 19.1986 20.944 19.4743 20.8324 19.7294C20.7209 19.9846 20.5572 20.2137 20.352 20.402C20.1468 20.5902 19.9045 20.7336 19.6407 20.8228C19.3769 20.912 19.0973 20.9452 18.8199 20.9201C15.7428 20.5857 12.7869 19.5342 10.1899 17.8501C7.77376 16.3148 5.72527 14.2663 4.18993 11.8501C2.49991 9.2413 1.44818 6.27109 1.11993 3.1801C1.09494 2.90356 1.12781 2.62486 1.21643 2.36172C1.30506 2.09859 1.4475 1.85679 1.6347 1.65172C1.82189 1.44665 2.04974 1.28281 2.30372 1.17062C2.55771 1.05843 2.83227 1.00036 3.10993 1.0001H6.10993C6.59524 0.995321 7.06572 1.16718 7.43369 1.48363C7.80166 1.80008 8.04201 2.23954 8.10993 2.7201C8.23656 3.68016 8.47138 4.62282 8.80993 5.5301C8.94448 5.88802 8.9736 6.27701 8.89384 6.65098C8.81408 7.02494 8.6288 7.36821 8.35993 7.6401L7.08993 8.9101C8.51349 11.4136 10.5864 13.4865 13.0899 14.9101L14.3599 13.6401C14.6318 13.3712 14.9751 13.1859 15.3491 13.1062C15.723 13.0264 16.112 13.0556 16.4699 13.1901C17.3772 13.5286 18.3199 13.7635 19.2799 13.8901C19.7657 13.9586 20.2093 14.2033 20.5265 14.5776C20.8436 14.9519 21.0121 15.4297 20.9999 15.9201Z",stroke:"#F9F9F9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Wa=e=>f.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z",stroke:"#F9F9F9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),f.exports.createElement("path",{d:"M22 6L12 13L2 6",stroke:"#F9F9F9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));function Qa(){return s(Ia,{children:v(J,{children:[v(ba,{color:z.colors.green,children:[s(Za,{}),v(Ha,{children:[s(k0,{children:s(t1,{to:"about",children:"\u041F\u0440\u043E \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A"})}),s(k0,{children:s(t1,{to:"dogs",children:"\u041D\u0430\u0448\u0456 \u0445\u0432\u043E\u0441\u0442\u0438"})}),s(k0,{children:s(Rn,{href:"path/to/confdentiality/agreement",target:"_blank",children:"\u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456"})}),s(k0,{children:s(Rn,{href:"path/to/rules",target:"_blank",children:"\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442\u0456"})}),s(k0,{children:s(Rn,{href:"path/to/reports",target:"_blank",children:"\u0417\u0432\u0456\u0442\u043D\u0456\u0441\u0442\u044C"})})]}),v(Oa,{children:[v(y1,{children:[s(Si,{}),s(In,{children:"+38 063 628 6630"})]}),v(y1,{children:[s(Si,{}),s(In,{children:"+38 067 568 1788"})]}),v(y1,{children:[s(Wa,{}),s(In,{children:"biglapa@gmail.com"})]}),s(y1,{children:v(_a,{children:[s(k0,{children:s(ki,{href:"path/to/insta",children:s(Va,{})})}),s(y1,{children:s(ki,{href:"path/to/fb",children:s(ja,{})})})]})})]})]}),s(Ua,{children:"\u0420\u043E\u0437\u0440\u043E\u0431\u043A\u0430 Baza Trainee Ukraine 2023 \xA9 \u0423\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u0456"})]})})}const Ga=g.div`
  ${({$isShow:e})=>!e&&"display: none;"}
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

  ${Ee} {
    font-size: ${({theme:e})=>e.fontSizes.h3};
    padding: 24px;
  }

  @media (max-width: 767px) {
    padding: 20px 0;
    p {
      font-size: 0.75rem;
    }
  }
`;function Ka(){const[e,t]=f.exports.useState(!0);return s(Ga,{$isShow:e,children:s(J,{children:v(he,{$align:"center",$justify:"space-between",$gap:"30px",children:[v("p",{children:["\u0426\u0435\u0439 \u0441\u0430\u0439\u0442 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \u0444\u0430\u0439\u043B\u0438 cookies \u0434\u043B\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0457 \u0440\u043E\u0431\u043E\u0442\u0438 \u0456 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u0441\u0435\u0440\u0432\u0456\u0441\u0443. ",s("br",{}),"\u042F\u043A\u0449\u043E \u0432\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044C \u0437 \u0457\u0445\u043D\u0456\u043C \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F\u043C, \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u041E\u041A. \u0411\u0456\u043B\u044C\u0448\u0435 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u0432 \xA0",s("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/Dead-Reaven/Big-lapa",children:"\u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456."})]}),s(Ee,{onClick:()=>{t(n=>!n)},children:"OK"})]})})})}function Xa(){return v(Z0,{children:[s(Pl,{}),s(Ta,{}),s(il,{}),s(Ka,{}),s(Qa,{})]})}const Ya=g.div`
  color: ${({theme:e})=>e.colors.dark};
  margin-top: ${({theme:e})=>e.headerHeight};
`,Pe=g.h2`
  font-size: ${({theme:e})=>e.fontSizes.h2};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  margin-bottom: ${({$marginBottom:e})=>e||"45px"};

  @media (max-width: 1279px) {
    font-size: ${({theme:e})=>e.fontSizes.tabletH2};
  }

  @media (max-width: 767px) {
    font-size: ${({theme:e})=>e.fontSizes.mobileH2};
  }
`,xe=g.h3`
  font-size: ${({theme:e})=>e.fontSizes.h3};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  margin-bottom: ${({$marginBottom:e})=>e||"5px"};

  @media (max-width: 1279px) {
    font-size: ${({theme:e})=>e.fontSizes.tabletH3};
  }

  @media (max-width: 767px) {
    font-size: ${({theme:e})=>e.fontSizes.mobileH3};
  }
`,qa=g.section`
  padding: 105px 0 110px;

  @media (max-width: 1023px) {
    padding: 85px 0;
  }

  @media (max-width: 767px) {
    padding: 65px 0;
  }
`,Ja=g(Pe)`
  max-width: 624px;
  margin-bottom: 70px;

  @media (max-width: 1023px) {
    margin-bottom: 60px;
  }

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`,es=g.div`
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
`,bn=g.div`
  &:nth-of-type(1) {
    grid-column: span 2;
  }
  img {
    height: 100%;
    width: 100%;
  }
`,ts=g.div`
  max-width: 1056px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 90px;
`,S0=g.div`
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
      fill: ${z.colors.yellow};
    }
  }
`,ns=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,us=g.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 25px;
`,rs=g(xe)`
  margin-bottom: 40px;
`;var is="/Big-lapa/assets/01.3b9dd8d2.png",os="/Big-lapa/assets/02.1d5755f4.png",ls="/Big-lapa/assets/03.49d74eb1.png";const F0=e=>f.exports.createElement("svg",{width:42,height:37,viewBox:"0 0 42 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M13.6998 0.500789C16.0598 0.160789 18.5598 2.74079 19.2798 6.30079C19.9998 9.84079 18.6998 13.0008 16.3398 13.3608C13.9998 13.7208 11.4798 11.1408 10.7398 7.58079C9.99981 4.04079 11.3398 0.880789 13.6998 0.500789ZM27.9998 0.500789C30.3798 0.880789 31.6998 4.04079 30.9998 7.58079C30.2398 11.1408 27.7398 13.7208 25.3798 13.3608C22.9998 13.0008 21.6998 9.84079 22.4398 6.30079C23.1598 2.74079 25.6598 0.160789 27.9998 0.500789ZM2.99981 9.70079C5.27981 8.72079 8.37981 10.5008 9.99981 13.6008C11.5198 16.7608 10.9998 20.0808 8.73981 21.0608C6.47981 22.0408 3.39981 20.2808 1.81981 17.1408C0.239813 14.0008 0.799813 10.6608 2.99981 9.70079ZM38.9998 9.70079C41.1998 10.6608 41.7598 14.0008 40.1798 17.1408C38.5998 20.2808 35.5198 22.0408 33.2598 21.0608C30.9998 20.0808 30.4798 16.7608 31.9998 13.6008C33.6198 10.5008 36.7198 8.72079 38.9998 9.70079ZM35.6598 31.2608C35.7398 33.1408 34.2998 35.2208 32.5798 36.0008C28.9998 37.6408 24.7598 34.2408 20.7798 34.2408C16.7998 34.2408 12.5198 37.7808 8.99981 36.0008C6.99981 35.0208 5.61981 32.4208 5.87981 30.2608C6.23981 27.2808 9.81981 25.6808 11.9398 23.5008C14.7598 20.6808 16.7598 15.3808 20.7798 15.3808C24.7798 15.3808 26.8998 20.6008 29.5998 23.5008C31.8198 25.9408 35.5198 28.0008 35.6598 31.2608Z",fill:"#758650"})),$l=e=>f.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),f.exports.createElement("path",{d:"M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));function as(){return s(qa,{children:v(J,{children:[s(Ja,{children:"\u041B\u0430\u0441\u043A\u0430\u0432\u043E \u043F\u0440\u043E\u0441\u0438\u043C\u043E \u0434\u043E Big Lapa - \u043F\u0440\u0438\u0442\u0443\u043B\u043A\u0443 \u0434\u043B\u044F \u0441\u043E\u0431\u0430\u043A!"}),v(es,{children:[s(bn,{children:s("img",{src:is,alt:"dogs"})}),s(bn,{children:s("img",{src:os,alt:"dogs"})}),s(bn,{children:s("img",{src:ls,alt:"dogs"})})]}),v(ts,{children:[v(S0,{children:[s(F0,{}),s("span",{children:"\u041C\u0438 - \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0435\u043D\u0442\u0443\u0437\u0456\u0430\u0441\u0442\u0456\u0432, \u0449\u043E \u043F\u0440\u0438\u0441\u0432\u044F\u0442\u0438\u043B\u0438 \u0441\u0432\u043E\u0454 \u0436\u0438\u0442\u0442\u044F \u0434\u043E\u043F\u043E\u043C\u043E\u0437\u0456 \u0431\u0435\u0437\u043F\u0440\u0438\u0442\u0443\u043B\u044C\u043D\u0438\u043C \u0441\u043E\u0431\u0430\u043A\u0430\u043C. \u041D\u0430\u0448\u0430 \u043C\u0456\u0441\u0456\u044F \u043F\u043E\u043B\u044F\u0433\u0430\u0454 \u0432 \u0442\u043E\u043C\u0443, \u0449\u043E\u0431 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0442\u0438\u043C\u0447\u0430\u0441\u043E\u0432\u0438\u0439 \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A, \u043C\u0435\u0434\u0438\u0447\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434 \u0456 \u0448\u0430\u043D\u0441 \u043D\u0430 \u043D\u043E\u0432\u0435 \u0436\u0438\u0442\u0442\u044F \u0434\u043B\u044F \u0445\u0432\u043E\u0441\u0442\u0438\u043A\u0456\u0432, \u044F\u043A\u0456 \u043E\u043F\u0438\u043D\u0438\u043B\u0438\u0441\u044F \u043D\u0430 \u0432\u0443\u043B\u0438\u0446\u0456"})]}),v(S0,{children:[s(F0,{}),s("p",{children:"\u0423 \u043D\u0430\u0441 \u0454 \u0434\u043E\u0441\u0432\u0456\u0434 \u0440\u043E\u0431\u043E\u0442\u0438 \u0437 \u0440\u0456\u0437\u043D\u0438\u043C\u0438 \u043F\u043E\u0440\u043E\u0434\u0430\u043C\u0438 \u0441\u043E\u0431\u0430\u043A. \u041C\u0438 \u0432\u0456\u0440\u0438\u043C\u043E, \u0449\u043E \u043A\u043E\u0436\u043D\u0438\u0439 \u0441\u043E\u0431\u0430\u043A\u0430 \u0437\u0430\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0454 \u043D\u0430\u0448\u043E\u0457 \u0443\u0432\u0430\u0433\u0438, \u043D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u043E \u0432\u0456\u0434 \u0439\u043E\u0433\u043E \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E. \u041C\u0438 \u0434\u043E\u043A\u043B\u0430\u0434\u0430\u0454\u043C\u043E \u0432\u0441\u0456\u0445 \u0437\u0443\u0441\u0438\u043B\u044C, \u0449\u043E\u0431 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u043D\u0430\u0448\u0438\u043C \u0445\u0432\u043E\u0441\u0442\u0438\u043A\u0430\u043C \u0437\u0430\u0442\u0438\u0448\u043D\u0435 \u043C\u0456\u0441\u0446\u0435, \u044F\u043A\u0456\u0441\u043D\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F, \u0432\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434 \u0442\u0430 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u0456 \u043F\u0440\u043E\u0433\u0443\u043B\u044F\u043D\u043A\u0438"})]}),v(S0,{children:[s(F0,{}),s("p",{children:"\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0432\u043E\u043B\u043E\u043D\u0442\u0435\u0440\u0456\u0432 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u044C \u0447\u0430\u0441 \u0437 \u043A\u043E\u0436\u043D\u0438\u043C \u0441\u043E\u0431\u0430\u043A\u043E\u044E, \u0434\u0430\u0440\u0443\u044E\u0447\u0438 \u0457\u043C \u043B\u044E\u0431\u043E\u0432 \u0442\u0430 \u0443\u0432\u0430\u0433\u0443. \u041C\u0438 \u0432\u0456\u0440\u0438\u043C\u043E, \u0449\u043E \u0441\u043E\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u0456 \u0432\u0437\u0430\u0454\u043C\u043E\u0434\u0456\u044F \u0437 \u043B\u044E\u0434\u044C\u043C\u0438 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u044E\u0442\u044C \u0441\u043E\u0431\u0430\u043A\u0430\u043C \u043F\u0456\u0434\u0433\u043E\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0434\u043E \u043D\u043E\u0432\u0438\u0445 \u0434\u043E\u043C\u0456\u0432\u043E\u043A \u0456 \u043F\u043E\u043A\u0440\u0430\u0449\u0443\u044E\u0442\u044C \u0457\u0445 \u0448\u0430\u043D\u0441\u0438 \u043D\u0430 \u0443\u0441\u043F\u0456\u0448\u043D\u0443 \u0430\u0434\u0430\u043F\u0442\u0430\u0446\u0456\u044E"})]}),v(S0,{children:[s(F0,{}),s("p",{children:"\u042F\u043A\u0449\u043E \u0432\u0438 \u0437\u0430\u0446\u0456\u043A\u0430\u0432\u043B\u0435\u043D\u0456 \u0443 \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u0456 \u0441\u043E\u0431\u0430\u043A\u0438, \u043C\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0435\u043C\u043E \u0432\u0430\u043C \u0437\u043D\u0430\u0439\u0442\u0438 \u0441\u0430\u043C\u0435 \u0442\u043E\u0433\u043E, \u0445\u0442\u043E \u0441\u0442\u0430\u043D\u0435 \u0447\u0443\u0434\u043E\u0432\u0438\u043C \u043A\u043E\u043C\u043F\u0430\u043D\u044C\u0439\u043E\u043D\u043E\u043C \u0434\u043B\u044F \u0432\u0430\u0441 \u0456 \u0432\u0430\u0448\u043E\u0457 \u0440\u043E\u0434\u0438\u043D\u0438. \u041D\u0430\u0448\u0456 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0438 \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u043E \u043E\u0437\u043D\u0430\u0439\u043E\u043C\u043B\u044F\u0442\u044C \u0432\u0430\u0441 \u0437 \u043A\u043E\u0436\u043D\u0438\u043C \u0441\u043E\u0431\u0430\u043A\u043E\u044E, \u0457\u0445\u043D\u0456\u043C\u0438 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0430\u043C\u0438 \u0442\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u0430\u043C\u0438, \u0449\u043E\u0431 \u0432\u0438 \u043C\u043E\u0433\u043B\u0438 \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0432\u0438\u0431\u0456\u0440"})]}),v(S0,{children:[s(F0,{}),s("p",{children:"\u0412\u0430\u0448\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 - \u0446\u0435 \u043A\u0440\u043E\u043A \u0434\u043E \u0449\u0430\u0441\u043B\u0438\u0432\u043E\u0433\u043E \u0436\u0438\u0442\u0442\u044F \u043A\u043E\u0436\u043D\u043E\u0457 \u0431\u0435\u0437\u043F\u0440\u0438\u0442\u0443\u043B\u044C\u043D\u043E\u0457 \u0441\u043E\u0431\u0430\u043A\u0438. \u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430, \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u044C\u043D\u0456 \u0440\u0435\u0441\u0443\u0440\u0441\u0438 \u0430\u0431\u043E \u0432\u0430\u0448\u0456 \u0432\u043B\u0430\u0441\u043D\u0456 \u043D\u0430\u0432\u0438\u0447\u043A\u0438 \u0456 \u0447\u0430\u0441 - \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0432\u043D\u0435\u0441\u043E\u043A \u043D\u0430\u043C \u0434\u0443\u0436\u0435 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454. \u0420\u0430\u0437\u043E\u043C \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0441\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u0440\u0430\u0449\u0435 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u0454 \u0434\u043B\u044F \u043D\u0430\u0448\u0438\u0445 \u0447\u043E\u0442\u0438\u0440\u0438\u043B\u0430\u043F\u0438\u0445 \u0434\u0440\u0443\u0437\u0456\u0432"})]}),v(S0,{children:[s(F0,{}),s("p",{children:"\u041D\u0430 \u043D\u0430\u0448\u043E\u043C\u0443 \u0441\u0430\u0439\u0442\u0456 \u0432\u0438 \u0437\u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0456\u0437\u043D\u0430\u0442\u0438\u0441\u044F \u0431\u0456\u043B\u044C\u0448\u0435 \u043F\u0440\u043E \u0434\u0456\u044F\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u043F\u0440\u0438\u0442\u0443\u043B\u043A\u0443, \u043F\u0440\u043E \u043D\u0430\u0448\u0438\u0445 \u0445\u0432\u043E\u0441\u0442\u0430\u0442\u0438\u0445 \u043C\u0435\u0448\u043A\u0430\u043D\u0446\u0456\u0432 \u0442\u0430 \u0441\u043F\u043E\u0441\u043E\u0431\u0438 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0432'\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043D\u0430\u043C\u0438, \u044F\u043A\u0449\u043E \u0443 \u0432\u0430\u0441 \u0454 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u043F\u0438\u0442\u0430\u043D\u043D\u044F. \u0414\u044F\u043A\u0443\u0454\u043C\u043E \u0432\u0430\u043C \u0437\u0430 \u0432\u0430\u0448\u0443 \u043B\u044E\u0431\u043E\u0432, \u0434\u043E\u0431\u0440\u043E\u0442\u0443 \u0442\u0430 \u0432\u0456\u0434\u0434\u0430\u043D\u0456\u0441\u0442\u044C!"})]})]}),v(ns,{children:[s(rs,{children:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430 Big Lapa"}),v(us,{children:[s($l,{}),v("div",{children:[s(xe,{children:"\u0417\u043D\u0430\u0439\u0442\u0438 \u043D\u0430\u0441 \u043C\u043E\u0436\u043D\u0430 \u0437\u0430 \u0430\u0434\u0440\u0435\u0441\u043E\u044E:"}),s("p",{children:"\u043C\u0456\u0441\u0442\u043E \u041B\u044C\u0432\u0456\u0432, \u0432\u0443\u043B. \u0413\u043E\u0440\u043E\u0434\u043E\u0446\u044C\u043A\u0430, 397"})]})]})]})]})})}const J3=g.h1`
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
`;var Fi="/Big-lapa/assets/main_photo.4c1331c3.png";const ss=e=>f.exports.createElement("svg",{width:130,height:17,viewBox:"0 0 130 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("rect",{x:.5,y:.5,width:16,height:16,rx:8,stroke:"#F9F9F9"}),f.exports.createElement("line",{x1:28,y1:8,x2:45,y2:8,stroke:"#F9F9F9"}),f.exports.createElement("rect",{x:56,width:17,height:17,rx:8.5,fill:"#F9F9F9"}),f.exports.createElement("line",{x1:84,y1:8,x2:101,y2:8,stroke:"#F9F9F9"}),f.exports.createElement("rect",{x:112.5,y:.5,width:17,height:16,rx:8,stroke:"#F9F9F9"})),cs=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${z.colors.background};
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%),
    url(${Fi}) center/cover no-repeat;

  @media screen and (max-width: 767px) {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%),
      url(${Fi}) center/cover no-repeat;
  }

  ${J} {
    height: calc(100vh - 96px);
    display: flex;
    align-items: center;
  }
`,ds=g.div`
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
`,ps=g.button`
  background: transparent;
  border: 1px solid ${z.colors.background};
  padding: ${z.paddings.button};
  border-radius: 4px;
  font-size: ${z.fontSizes.buttonText};
  font-weight: ${z.fontWeights.semiBold};
  line-height: ${z.lineHeights.normal};
  transition: ${z.transitions.quick};

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
`,fs=g(ss)`
  position: absolute;
  bottom: 44px;
  z-index: 1;
  @media screen and (max-width: 767px) {
    left: 50%;
    bottom: 130px;
    transform: translate(-50%);
  }
`;function hs(){return s(cs,{children:v(J,{children:[v(ds,{children:[s(J3,{children:"\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0439 \u0434\u0440\u0443\u0433\u0430, \u0432\u0440\u044F\u0442\u0443\u0439 \u0442\u0432\u0430\u0440\u0438\u043D\u0443!"}),s(ps,{children:"\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"})]}),s(fs,{})]})})}function Cs(){return v(Ya,{"data-testid":"about-page",children:[s(hs,{}),s(as,{})]})}const ms=[{id:0,src:"./testPhoto.png",name:"\u0421\u043A\u0430\u0439",sex:"\u0425\u043B\u043E\u043F\u0447\u0438\u043A",age:"2 \u0440\u043E\u043A\u0438",haschip:!1,hasbreed:!1,breed:"",size:"medium"},{id:1,src:"./testPhoto.png",name:"\u0421\u043A\u0430\u0439",sex:"\u0425\u043B\u043E\u043F\u0447\u0438\u043A",age:"2 \u0440\u043E\u043A\u0438",haschip:!1,hasbreed:!0,breed:"\u041B\u0430\u0431\u0440\u0430\u0434\u043E\u0440",size:"medium"},{id:2,src:"./testPhoto.png",name:"\u0411\u0435\u043B\u043B\u0430",sex:"\u0414\u0456\u0432\u0447\u0438\u043D\u043A\u0430",age:"3 \u0440\u043E\u043A\u0438",haschip:!0,hasbreed:!0,breed:"\u041C\u043E\u043F\u0441",size:"small"},{id:3,src:"./testPhoto.png",name:"\u041C\u0430\u043A\u0441",sex:"\u0425\u043B\u043E\u043F\u0447\u0438\u043A",age:"1 \u0440\u0456\u043A",haschip:!0,hasbreed:!1,breed:"",size:"small"},{id:4,src:"./testPhoto.png",name:"\u041B\u044E\u0441\u0456",sex:"\u0414\u0456\u0432\u0447\u0438\u043D\u043A\u0430",age:"3 \u0440\u0456\u043A",haschip:!0,hasbreed:!0,breed:"\u041A\u043E\u0440\u0433\u0456",size:"big"},{id:5,src:"./testPhoto.png",name:"\u0411\u043E\u0431\u0456\u043A",sex:"\u0414\u0456\u0432\u0447\u0438\u043D\u043A\u0430",age:"5 \u0440\u0456\u043A",haschip:!0,hasbreed:!0,breed:"\u0411\u0443\u043B\u044C\u0434\u043E\u0433",size:"big"}];var gs={data:ms};function en(e){const[t,n]=f.exports.useState(null),[u,r]=f.exports.useState(null);if(f.exports.useEffect(()=>{if(e==="contacts"&&(async o=>{const a=await(await fetch("https://big-lapa-api-production.up.railway.app/api/main/get")).json();o(a)})(n),e==="dogs"){const i=async l=>{l(gs)},o=window.setTimeout(()=>{i(r)},1e3);return()=>window.clearTimeout(o)}},[]),e==="contacts")return t;if(e==="dogs")return u}g.div`
  svg {
    z-index: 3;
  }
`;const xs=g.div`
  width: auto;
  margin-top: 10px;
  padding: 20px;
  text-align: justify;
  z-index: 2;

  background-color: white;
  overflow-y: auto;
  @media screen and (min-width: 767px) {
    b,
    input,
    label {
      font-size: 18px;
    }
  }
`,vs=g.b`
  padding: 0 12px 12px 0;
  color: #2e2e2e;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
`,ys=g.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  width: 180px;
  flex: 100% 1 1;
  transition: background-color 1s, border-color 0.3s;

  div {
    padding-bottom: 12px;
  }
  input[type='checkbox'] {
    position: absolute;
    appearance: none;
    width: 24px;
    height: 24px;
    outline: none;
    cursor: pointer;
    border: 3px #758650 solid;
    border-radius: 4px;
    background-size: contain; /* Adjust the sizing of the icon */
    background-repeat: no-repeat; /* Prevent repetition of the icon */
    z-index: 1;
  }
  input[type='checkbox']:checked + label::before {
    content: ''; /* Remove the content, as we'll use background-image */
    position: absolute;
    left: 0px;
    top: 0px;
    width: 24px; /* Adjust the size of the icon */
    height: 24px; /* Adjust the size of the icon */
    background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.5556%201H3.44444C2.79614%201%202.17438%201.25754%201.71596%201.71596C1.25754%202.17438%201%202.79614%201%203.44444V20.5556C1%2021.2039%201.25754%2021.8256%201.71596%2022.284C2.17438%2022.7425%202.79614%2023%203.44444%2023H20.5556C21.2039%2023%2021.8256%2022.7425%2022.284%2022.284C22.7425%2021.8256%2023%2021.2039%2023%2020.5556V3.44444C23%202.79614%2022.7425%202.17438%2022.284%201.71596C21.8256%201.25754%2021.2039%201%2020.5556%201ZM4.66667%2013.2222L9.55556%2018.1111L19.3333%208.33333L17.61%206.59778L9.55556%2014.6522L6.39%2011.4867L4.66667%2013.2222Z%22%20fill%3D%22%23758650%22/%3E%3C/svg%3E');
    background-size: contain; /* Adjust the sizing of the icon */
    background-repeat: no-repeat; /* Prevent repetition of the icon */
    z-index: 0;
  }

  label {
    height: 24px;
    /* margin-right: 34px; */
    position: relative; /* Required to position the checkmark correctly */
    padding-left: 32px;
  }
`,Z2=g.input`
  height: 56px;
  padding: 0 8px;
  flex: 100% 0 1;
`,ws=g.form`
  width: 100%;
  height: 80px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: white;
  box-shadow: 0px 4px 16px 0px #cdcdcd;
  border-radius: 4px;

  font-style: normal;
  font-weight: 600;
  line-height: 140%;

  svg {
    height: 48px;
    width: 48px;
    flex: 48px 0 0;
  }
  @media screen and (min-width: 1280px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 0 20px;
    ${Z2} {
      padding: 0 50px 0 20px;
    }
  }
  @media screen and (max-width: 767px) {
    height: auto;
    font-size: 16px;
    margin: 100px 0 0 0;
    svg {
      height: 24px;
      width: 24px;
      flex: 24px 0 0;
    }
    ${Z2} {
      padding: 0 8px;
    }
  }
  @media screen and (max-width: 393px) {
    font-size: 4vw;
    margin: 80px 0 0 0;
  }
`,Es=e=>f.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},f.exports.createElement("path",{d:"M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),f.exports.createElement("path",{d:"M20.9999 21.0004L16.6499 16.6504",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),ks=e=>f.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:20,viewBox:"0 0 16 20",fill:"none",...e},f.exports.createElement("path",{d:"M5 3.0005C4.73478 3.0005 4.48043 3.10585 4.29289 3.29339C4.10536 3.48093 4 3.73528 4 4.0005C4 4.26571 4.10536 4.52007 4.29289 4.7076C4.48043 4.89514 4.73478 5.0005 5 5.0005C5.26522 5.0005 5.51957 4.89514 5.70711 4.7076C5.89464 4.52007 6 4.26571 6 4.0005C6 3.73528 5.89464 3.48093 5.70711 3.29339C5.51957 3.10585 5.26522 3.0005 5 3.0005ZM2.17 3.0005C2.3766 2.41496 2.75974 1.90793 3.2666 1.54929C3.77346 1.19064 4.37909 0.998047 5 0.998047C5.62091 0.998047 6.22654 1.19064 6.7334 1.54929C7.24026 1.90793 7.6234 2.41496 7.83 3.0005H15C15.2652 3.0005 15.5196 3.10585 15.7071 3.29339C15.8946 3.48093 16 3.73528 16 4.0005C16 4.26571 15.8946 4.52007 15.7071 4.7076C15.5196 4.89514 15.2652 5.0005 15 5.0005H7.83C7.6234 5.58603 7.24026 6.09306 6.7334 6.45171C6.22654 6.81035 5.62091 7.00295 5 7.00295C4.37909 7.00295 3.77346 6.81035 3.2666 6.45171C2.75974 6.09306 2.3766 5.58603 2.17 5.0005H1C0.734784 5.0005 0.48043 4.89514 0.292893 4.7076C0.105357 4.52007 0 4.26571 0 4.0005C0 3.73528 0.105357 3.48093 0.292893 3.29339C0.48043 3.10585 0.734784 3.0005 1 3.0005H2.17ZM11 9.0005C10.7348 9.0005 10.4804 9.10585 10.2929 9.29339C10.1054 9.48093 10 9.73528 10 10.0005C10 10.2657 10.1054 10.5201 10.2929 10.7076C10.4804 10.8951 10.7348 11.0005 11 11.0005C11.2652 11.0005 11.5196 10.8951 11.7071 10.7076C11.8946 10.5201 12 10.2657 12 10.0005C12 9.73528 11.8946 9.48093 11.7071 9.29339C11.5196 9.10585 11.2652 9.0005 11 9.0005ZM8.17 9.0005C8.3766 8.41496 8.75974 7.90793 9.2666 7.54929C9.77346 7.19064 10.3791 6.99805 11 6.99805C11.6209 6.99805 12.2265 7.19064 12.7334 7.54929C13.2403 7.90793 13.6234 8.41496 13.83 9.0005H15C15.2652 9.0005 15.5196 9.10585 15.7071 9.29339C15.8946 9.48093 16 9.73528 16 10.0005C16 10.2657 15.8946 10.5201 15.7071 10.7076C15.5196 10.8951 15.2652 11.0005 15 11.0005H13.83C13.6234 11.586 13.2403 12.0931 12.7334 12.4517C12.2265 12.8104 11.6209 13.0029 11 13.0029C10.3791 13.0029 9.77346 12.8104 9.2666 12.4517C8.75974 12.0931 8.3766 11.586 8.17 11.0005H1C0.734784 11.0005 0.48043 10.8951 0.292893 10.7076C0.105357 10.5201 0 10.2657 0 10.0005C0 9.73528 0.105357 9.48093 0.292893 9.29339C0.48043 9.10585 0.734784 9.0005 1 9.0005H8.17ZM5 15.0005C4.73478 15.0005 4.48043 15.1059 4.29289 15.2934C4.10536 15.4809 4 15.7353 4 16.0005C4 16.2657 4.10536 16.5201 4.29289 16.7076C4.48043 16.8951 4.73478 17.0005 5 17.0005C5.26522 17.0005 5.51957 16.8951 5.70711 16.7076C5.89464 16.5201 6 16.2657 6 16.0005C6 15.7353 5.89464 15.4809 5.70711 15.2934C5.51957 15.1059 5.26522 15.0005 5 15.0005ZM2.17 15.0005C2.3766 14.415 2.75974 13.9079 3.2666 13.5493C3.77346 13.1906 4.37909 12.998 5 12.998C5.62091 12.998 6.22654 13.1906 6.7334 13.5493C7.24026 13.9079 7.6234 14.415 7.83 15.0005H15C15.2652 15.0005 15.5196 15.1059 15.7071 15.2934C15.8946 15.4809 16 15.7353 16 16.0005C16 16.2657 15.8946 16.5201 15.7071 16.7076C15.5196 16.8951 15.2652 17.0005 15 17.0005H7.83C7.6234 17.586 7.24026 18.0931 6.7334 18.4517C6.22654 18.8104 5.62091 19.0029 5 19.0029C4.37909 19.0029 3.77346 18.8104 3.2666 18.4517C2.75974 18.0931 2.3766 17.586 2.17 17.0005H1C0.734784 17.0005 0.48043 16.8951 0.292893 16.7076C0.105357 16.5201 0 16.2657 0 16.0005C0 15.7353 0.105357 15.4809 0.292893 15.2934C0.48043 15.1059 0.734784 15.0005 1 15.0005H2.17Z",fill:"#2E2E2E"})),zt=({title:e,options:t,onChange:n})=>v(ys,{children:[s(vs,{children:e}),t.map(({label:u,name:r,checked:i})=>v("div",{children:[s("input",{type:"checkbox",name:r,checked:i,onChange:o=>n(r,o.target.checked)}),s("label",{htmlFor:r,children:u})]},r))]});function zl({options:e,setState:t}){const[n,u]=f.exports.useState(""),[r,i]=f.exports.useState(!1),[o,l]=f.exports.useState({male:!0,female:!0}),[a,c]=f.exports.useState({small:!0,medium:!0,big:!0}),[C,m]=f.exports.useState({hasChip:!0,noChip:!0}),[x,y]=f.exports.useState({hasBreed:!0,noBreed:!0}),k=L=>i(!L),w=()=>{if(e!=null&&e.data){const L=e==null?void 0:e.data.filter(({sex:p})=>{if(o.female&&o.male)return!0;if(o.male)return p.includes("\u0425\u043B\u043E\u043F\u0447\u0438\u043A");if(o.female)return p.includes("\u0414\u0456\u0432\u0447\u0438\u043D\u043A\u0430")}).filter(({size:p})=>{if(a.small&&a.medium&&a.big)return!0;if(a.small&&a.medium)return p.includes("small")||p.includes("medium");if(a.small&&a.big)return p.includes("small")||p.includes("big");if(a.medium&&a.big)return p.includes("medium")||p.includes("big");if(a.small)return p.includes("small");if(a.medium)return p.includes("medium");if(a.big)return p.includes("big")}).filter(({haschip:p})=>{if(C.hasChip&&C.noChip)return!0;if(C.hasChip)return p;if(C.noChip)return!p}).filter(({hasbreed:p})=>{if(x.hasBreed&&x.noBreed)return!0;if(x.hasBreed)return p;if(x.noBreed)return!p}).filter(({name:p})=>p.toLowerCase().includes(n.toLowerCase()));t({data:L})}};return f.exports.useEffect(()=>{e&&t(e),w()},[n,o,a,C,x,e]),v(Z0,{children:[v(ws,{children:[s(Es,{}),s(Z2,{type:"text",placeholder:"\u041F\u043E\u0448\u0443\u043A \u0441\u043E\u0431\u0430\u043A\u0438 \u0437\u0430 \u043A\u043B\u0438\u0447\u043A\u043E\u044E",value:n,onChange:L=>u(L.target.value)}),s(ks,{type:"button",onClick:()=>k(r),style:{cursor:"pointer"}})]}),r&&v(xs,{children:[s(zt,{title:"\u0421\u0442\u0430\u0442\u044C",options:[{name:"male",label:"\u0425\u043B\u043E\u043F\u0435\u0446\u044C",checked:o.male},{name:"female",label:"\u0414\u0456\u0432\u0447\u0438\u043D\u0430",checked:o.female}],onChange:(L,p)=>{l(d=>({...d,[L]:p}))}}),s(zt,{title:"\u0420\u043E\u0437\u043C\u0456\u0440",options:[{name:"small",label:"\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0430",checked:a.small},{name:"medium",label:"\u0421\u0435\u0440\u0435\u0434\u043D\u044F",checked:a.medium},{name:"big",label:"\u0412\u0435\u043B\u0438\u043A\u0430",checked:a.big}],onChange:(L,p)=>c(d=>({...d,[L]:p}))}),s(zt,{title:"\u041D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u0447\u0438\u043F\u0443",options:[{name:"hasChip",label:"\u0422\u0430\u043A",checked:C.hasChip},{name:"noChip",label:"\u041D\u0456",checked:C.noChip}],onChange:(L,p)=>m(d=>({...d,[L]:p}))}),s(zt,{title:"\u041D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u043F\u043E\u0440\u043E\u0434\u0438",options:[{name:"hasBreed",label:"\u0422\u0430\u043A",checked:x.hasBreed},{name:"noBreed",label:"\u041D\u0456",checked:x.noBreed}],onChange:(L,p)=>y(d=>({...d,[L]:p}))})]})]})}const Ss=g.section`
  padding: 110px 0;

  @media (max-width: 1279px) {
    padding: 80px 0;
  }

  ${({$admin:e})=>e&&d1`
      padding: 0 !important;

      ${J} {
        padding: 0;
        margin: 0;
        width: 100%;
      }

      ${he} {
        align-items: end;

        @media (max-width: 1439px) {
          align-items: center;
        }

        @media (max-width: 1024px) {
          align-items: end;
        }
      }

      ${Ml} {
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;

        @media (max-width: 1439px) {
          gap: 17px;
          grid-template-columns: repeat(2, 1fr);
        }
      }

      ${Tl} {
        p {
          margin-bottom: 20px;
        }

        button {
          width: 100%;

          @media (max-width: 1279px) {
            padding: 17px 2px;
          }
        }

        &:hover {
          all: unset;
          text-align: left;
        }
      }
    `}
`,Fs=g(Ee)`
  max-width: 400px;
  width: 100%;
  margin-bottom: 80px;

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`,Ds=g(Pe)`
  margin-bottom: 60px;
`,Ml=g.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 40px;
  margin-bottom: 55px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Tl=g.div`
  background-color: ${z.colors.background};
  transition: ${z.transitions.long}, border 0s;
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
      border: 2px solid ${z.colors.lightGreen};
      border-radius: 4px;
      z-index: 5;

      svg {
        display: block;
      }
    }
  }
`,Ls=g.div`
  display: flex;
  gap: 12px;

  @media (max-width: 1279px) {
    gap: 8px;
  }

  :nth-child(2) {
    max-width: 56px;
    padding: 16px;

    @media (max-width: 1279px) {
      padding: 16px 2px;
    }

    svg {
      /* align-self: center;
      position: relative; */
      display: block;
      left: 50%;
      top: 50%;
      translate: -50% -50%;
    }
  }
`,As=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Bs=g.button`
  background: transparent;
  border: 1px solid ${z.colors.dark};
  padding: 15px 60px;
  border-radius: 4px;
  font-size: ${z.fontSizes.buttonText};
  font-weight: ${z.fontWeights.semiBold};
  line-height: ${z.lineHeights.normal};
  transition: ${z.transitions.quick};

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
`,Ps=g.ul`
  display: flex;
  gap: 24px;

  li {
    color: ${z.colors.lightGrey};
    font-size: 24px;

    &:hover {
      transition: ${z.transitions.quick};
      cursor: pointer;
      color: ${z.colors.dark};
    }
  }
`;var $s="/Big-lapa/assets/Dog_photo.ba816c06.png";const zs=e=>f.exports.createElement("svg",{width:25,height:24,viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M15.5 6.84375C15.5 6.84375 16.6419 6.28125 12.5 6.28125C11.0166 6.28125 9.5666 6.72112 8.33323 7.54523C7.09986 8.36934 6.13856 9.54068 5.57091 10.9111C5.00325 12.2816 4.85472 13.7896 5.14411 15.2444C5.4335 16.6993 6.14781 18.0357 7.1967 19.0846C8.2456 20.1334 9.58197 20.8478 11.0368 21.1371C12.4917 21.4265 13.9997 21.278 15.3701 20.7103C16.7406 20.1427 17.9119 19.1814 18.736 17.948C19.5601 16.7147 20 15.2646 20 13.7812",stroke:"#2E2E2E",strokeWidth:2,strokeMiterlimit:10,strokeLinecap:"round"}),f.exports.createElement("path",{d:"M12.5 2.71875L16.25 6.46875L12.5 10.2188",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Ms=e=>f.exports.createElement("svg",{width:147,height:174,viewBox:"0 0 147 174",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M60.9597 35.3807C63.5832 32.2251 69.5621 32.9001 74.3497 36.9439C79.1156 40.9604 80.9057 46.7609 78.3039 49.9438C75.7276 53.1039 69.7233 52.4517 64.9103 48.4307C60.119 44.4371 58.3797 38.591 60.9597 35.3807ZM79.0984 19.0752C82.5309 16.8807 87.6442 19.6937 90.6089 25.3293C93.5193 31.0607 93.156 37.4369 89.7707 39.6359C86.36 41.8578 81.272 39.0219 78.358 33.3407C75.3969 27.6549 75.7602 21.2787 79.0984 19.0752ZM57.3997 60.1533C59.2252 56.2143 65.0946 55.1119 70.5232 57.5009C75.8903 60.0859 78.8439 65.2157 77.0437 69.1318C75.2436 73.0479 69.4214 74.1548 63.9999 71.6656C58.5785 69.1763 55.6539 63.9736 57.3997 60.1533ZM103.064 19.1043C106.899 17.9076 111.244 21.8333 112.657 27.9257C114.071 34.0181 112.079 39.9351 108.146 41.1729C104.213 42.4107 99.94 38.4668 98.429 32.4155C97.1101 26.3321 99.1051 20.3649 103.064 19.1043ZM122.291 52.3747C124.438 54.8525 124.876 59.3368 123.543 62.3639C120.786 68.6871 111.708 68.8756 106.66 73.4138C101.611 77.952 100.035 87.6697 93.6328 89.251C90.0294 90.1923 85.4493 88.2129 83.4284 84.9648C80.6419 80.4821 83.4416 74.2136 83.7582 68.8173C84.2662 61.7482 81.0351 52.2252 86.1342 47.6414C91.208 43.0804 99.578 47.7963 106.159 48.6805C111.63 49.4834 118.565 48.0795 122.291 52.3747Z",fill:"#B5C268"}),f.exports.createElement("path",{d:"M28.7398 107.017C31.7828 104.656 37.2287 106.565 40.9262 111.34C44.6086 116.086 45.1792 121.846 42.1512 124.238C39.1512 126.614 33.6774 124.72 29.9519 119.96C26.2415 115.231 25.7269 109.439 28.7398 107.017ZM48.7359 95.7984C52.3512 94.5013 56.5854 98.2061 58.2821 104.066C59.9101 110.002 58.3643 115.834 54.7921 117.146C51.192 118.473 46.9858 114.752 45.3449 108.861C43.661 102.956 45.2068 97.1242 48.7359 95.7984ZM20.7312 129.213C23.1786 125.954 28.8588 126.192 33.4672 129.572C37.981 133.12 39.7632 138.508 37.3437 141.751C34.9242 144.994 29.2871 144.771 24.7044 141.3C20.1218 137.829 18.3804 132.379 20.7312 129.213ZM71.0711 100.97C74.873 100.684 78.1806 105.255 78.3445 111.205C78.5084 117.155 75.5318 122.211 71.6308 122.514C67.7299 122.817 64.4934 118.245 64.2305 112.312C64.1527 106.391 67.1422 101.288 71.0711 100.97ZM82.6962 135.933C84.229 138.69 83.7875 142.94 81.9719 145.46C78.2054 150.729 69.7067 148.955 64.1413 152.077C58.576 155.2 55.2667 163.868 48.9992 163.959C45.4619 164.058 41.567 161.24 40.298 157.796C38.5491 153.043 42.3458 147.834 43.6626 142.901C45.4745 136.458 44.2653 126.938 49.8866 123.785C55.4799 120.647 62.3897 126.814 68.3571 129.046C73.3056 130.965 80.0364 131.152 82.6962 135.933Z",fill:"#B5C268"})),Ts=e=>f.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M4 7H20M10 11V17M14 11V17M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));function Ns({dog:e,src:t,admin:n}){const{id:u,name:r,sex:i,age:o}=e;return v(Tl,{children:[!n&&v(e1,{to:`/dog/${u}/${r}`,children:[s("img",{src:t,alt:"/dog"}),s(xe,{children:r}),v("p",{children:[i,", ",o]}),s(Ms,{})]}),n&&v(e1,{to:"/admin/edit-card",children:[s("img",{src:t,alt:"/dog"}),s(xe,{children:r}),v("p",{children:[i,", ",o]}),v(Ls,{children:[s(Ee,{children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"}),s(Ee,{children:s(Ts,{})})]})]})]})}function Nl({admin:e,state:t}){const n=t==null?void 0:t.data;return s(Ss,{$admin:e,children:s(J,{children:v(he,{$direction:"column",$align:"center",children:[e&&s(Fs,{children:s(e1,{to:"/admin/new-card",children:"\u0414\u043E\u0434\u0430\u0442\u0438 \u043D\u043E\u0432\u0443 \u043A\u0430\u0440\u0442\u043A\u0443"})}),!e&&s(Ds,{children:"\u041D\u0430\u0448\u0456 \u0445\u0432\u043E\u0441\u0442\u0438"}),s(Ml,{children:n==null?void 0:n.map(u=>s(Ns,{dog:u,src:$s,admin:e},u.id))}),!e&&v(As,{children:[v(Bs,{children:[s(zs,{}),"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0449\u0435"]}),v(Ps,{children:[s("li",{children:"1"}),s("li",{children:"2"}),s("li",{children:"3"}),s("li",{children:"4"}),s("li",{children:"5"}),s("li",{children:"..."}),s("li",{children:"16"})]})]})]})})})}var Rs="/Big-lapa/assets/main_photo.01c83128.png";const Is=e=>f.exports.createElement("svg",{width:130,height:17,viewBox:"0 0 130 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("rect",{width:17,height:17,rx:8.5,fill:"#F9F9F9"}),f.exports.createElement("line",{x1:28,y1:8,x2:45,y2:8,stroke:"#F9F9F9"}),f.exports.createElement("rect",{x:56.5,y:.5,width:16,height:16,rx:8,stroke:"#F9F9F9"}),f.exports.createElement("line",{x1:84,y1:8,x2:101,y2:8,stroke:"#F9F9F9"}),f.exports.createElement("rect",{x:112.5,y:.5,width:17,height:16,rx:8,stroke:"#F9F9F9"})),bs=g.div`
  height: calc(100vh - 96px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${z.colors.background};
  background-color: ${z.colors.green};
  margin-bottom: 120px;
`,Hs=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2vh;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`,Os=g.div`
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
`,Rl=g.button`
  background: transparent;
  border: 1px solid ${z.colors.background};
  padding: ${z.paddings.button};
  border-radius: 4px;
  font-size: ${z.fontSizes.buttonText};
  font-weight: ${z.fontWeights.semiBold};
  line-height: ${z.lineHeights.normal};
  transition: ${z.transitions.quick};

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
`,_s=g(Rl)`
  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 767px) {
    display: block;
  }
`,js=g.div`
  flex: 0 1 50%;
  aspect-ratio: 1/1;
  max-height: 70vh;
  background: ${z.colors.yellow} url(${Rs}) bottom no-repeat;
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
`,Vs=g(Is)`
  position: absolute;
  bottom: 0;
  z-index: 1;
  @media screen and (max-width: 767px) {
    left: 50%;
    bottom: 85px;
    transform: translate(-50%);
  }
`;function Us(){return s(bs,{children:s(J,{children:v(Hs,{children:[v(Os,{children:[s(J3,{children:"\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0439 \u0434\u0440\u0443\u0433\u0430, \u0432\u0440\u044F\u0442\u0443\u0439 \u0442\u0432\u0430\u0440\u0438\u043D\u0443!"}),s(Rl,{children:"\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"})]}),s(js,{}),s(_s,{children:"\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"}),s(Vs,{})]})})})}const Zs=g.div`
  color: ${({theme:e})=>e.colors.dark};
  margin-top: ${({theme:e})=>e.headerHeight};
`;function Ws(){const e=en("dogs"),[t,n]=f.exports.useState(e);return v(Zs,{"data-testid":"dogs-page",children:[s(Us,{}),s(J,{children:s(zl,{setState:n,options:e})}),s(Nl,{state:t})]})}var Qs="/Big-lapa/assets/Dogs_donation.818d994a.png",Gs="/Big-lapa/assets/First_green_rectangle.95519e92.svg",Ks="/Big-lapa/assets/Second_green_rectangle.572f60f1.svg";const Xs=g.section`
  background-image: url(${Gs}), url(${Ks});
  background-repeat: no-repeat;
  background-position: left top, right bottom;

  @media (max-width: 1279px) {
    background-position: -50px top, right bottom;
  }

  @media (max-width: 767px) {
    background-position: -150px top, right bottom;
  }
`,Ys=g(J)`
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
`,qs=g.div`
  z-index: 2;
`,Js=g(he)`
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 60px;
  }
  @media (max-width: 767px) {
    gap: 40px;
  }
`,ec=g.div`
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
`,tc=g.div`
  display: grid;
  grid-gap: 20px 40px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;

  label:last-child {
    grid-column: span 2;
  }
`,nc=g.label`
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
`,uc=g(Ee)`
  @media (max-width: 500px) {
    width: 100%;
  }
`,rc=g.div`
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

    ${he} {
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
`,ic=g.img`
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
`;function Di(e){return s(ec,{children:s(he,{$direction:"column",$align:"center",$gap:"35px",children:e.children})})}function w1({text:e,isInput:t}){return v(nc,{children:[s("input",{type:"radio",name:"radio"}),v("span",{children:[!t&&s("span",{children:e}),t&&s("input",{type:"text",placeholder:"\u0406\u043D\u0448\u0430 \u0441\u0443\u043C\u0430, UAH"})]})]})}function oc(){return v(tc,{children:[s(w1,{text:"20 \u0433\u0440\u043D"}),s(w1,{text:"50 \u0433\u0440\u043D"}),s(w1,{text:"100 \u0433\u0440\u043D"}),s(w1,{text:"200 \u0433\u0440\u043D"}),s(w1,{isInput:!0})]})}var lc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAlCAYAAAC05kydAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAx5SURBVHgB7VoLcFTVGf7PubvZPAh5bAJZdkMguxGI1KIo+KpgRVqxPhFRqsXqVJ3RwbbWR31rpzNWndGOWmfaQUqLwjAWW2tFrZXIWKij+EKRkM17A2Szm002ZJPs7j2n37mbDZsQkmx2o47mm7m5e8//n9f/n3P+xwnRJL6Z8Nld17Y5nNu9ttnfo0mMG4zSAL/d9QvG6FFJlCEleTXiywtaDnxCk0ganFIAFMB8DtfdUOvvlDJUGRQzTZL+907H7EU0iaQx7h2ilNHucD2IBu7Bb/MxdEltjKIXW1sa/keTGDPGpRCljA57xX2CyUdGYQ0JXSwpPlT3AU1iTEj6yIIyeMDhumsMylDIZhrf6bWVn01fAwTtc60eu93xwTA7+uuCpHeI3+F6GK8HkqmDTtqFFFcWtdT9h1IE+v8Mq2ImbFWQmfWzCurrG+O0dofzDknsPtAZafSAtcn9lCr3zii/3sT5vVLK2WScptSHMe3QOFuX3+yujdWt2A/6jIRBh8Hai7be6gmab3d07fcPGccNoD/OiAmNxBl5nroaSgOS2iFy6VITXk2S5Dr14PeDmFzvcdibuWT3Kz5B8iEz045QWsBCEFYO+rWLCJ+XSBHEz8FrqloBOCp75cKFZl+p6xmN8/XgL2ecdWLGXijTAu9jhS7lB76SmPMBehD1co2Hy240cQTCLgLf2uyp0T8k9lPjcqG+vI4ky0U9qxTsMkoTUnZ720tde7DkThlaLiV7qailZhWlGdK2MDtgCjZjNRfqJFdM89Ruj9P8jopXwXEhFsFje12l9y6oaV4jGNtoDEfSJjOOWS0sukIZbKHG+CPQwkLQDmtd4cru7OK+LK2zSQkY6ryicGrmG+3BiNoFT6Gso8jjLoj302ErP1XnfDekBxKZIcSPOk3RM2c3NPRSikjJ7VXARMVw5cw4GdIPdmhPyBDvSDyc9Z5bVRXVObs7Nha23VqSd0Oep9Y9xVvfOs1T95ouxdUgqWOoREwxrbaj3XiruuScQqEokyIu4EHHldDYlWjUhHHsxG7rRLWTsyL8LEoDTCMR0ZHmtzt/TUzbUOQ50EJpgr/EVSlN0dwiT8N7lAI0Yi/67RUd8W/sDFt8y9fPmpXPojRX/cZOepHt2RNJrAul1Pgczo+hrPMEse8OapfRhkDUFMD8S/r7efpoH3D3paEQrGa2USDoQvFyM+OrQXubGSzjx3F3iPKm/KWu5zHguzjxQkojpFmeQNL0zzbHrCWUGvJxls+KPxCG5SjBgKEfCHRYIcH2h403GywHMHeirBM7Lai+4ZCsbrHZstXvVrvzXLQ6E1wBoeynlMaiwu66pHW6s5hSBB9+oMTb7c71mMZPpPJXJgDY6sWcTNv9M2afT+MEY2yN6NXs8QcCHvDiChoaOqANwwODU7FiaF3lAvOYDVEKq0ukSSlusja755sjcq5UxxVjZ2TznJWKBoNxKxmKZsqmvAja/f3zmWYxU8rH1jEKUVE3clMb0cN1NAZgsluhuP8Oeoh2EtPfGEP1LOLaK2328gtpHIhK0VHsqz4Yf9gQjw/fG/rflwZKy38aL8dqL4qwyNMgTMOEj1g081+Gax9RLeQjI7F5UvHh6SflQC7nGW1K2oHFupUxuQXtu/t5rqEUMciGdMz8TkG73vMctL2axohiT+3jeD1O40cmPJ6/tcGvL/a4X6A0oi+S/YTJ3H0Ojt3vC8n+hFTP7VBABwQ5H+Q8iLVbcnlXTuMXhxLrYec9iUV5j3EUEoMdkZ2ayfQyY6GPcTRNBcthwfi1cbvqLXWu1iTbDN6LYHPvt7bU/obGiYEdopShi57HKAllpAvYlRaci8+rVSzTlIFWKGn9tNsSZVdBAdgBLIK2T4ThPwNn0hSQ6+Ag3l3U7B6IMcDXpt5QoAuLcmEsDpENqHdffmN1Pd7O2HDpX4lOjmZhcL3ZXlIZAMlKKQUYO6Q+f1Z+VPQ8A0msoa8IsdQ9ewa2y0wttX8ciRcB3SqkZLSw3vPRoDaY/jA8wqeyo6I6XpZ72N2Gtq9vn+l6TAhawBnLhA0/SBnRXda6us7E+mYyXxzh0TL1W9N12WdiPWZNfh7nk5wt13ShR8KW9xPrWd3uYIut8qIcHq2IsGgzpQBjNXbNdFWGBakEYNZQBkymB8Z3caFn/15KE3ylzkuZZC8PS5TyXWz5b+0ll3Fk5Ta59wkmbmBDAqCvAJ8xIX9MEwSJkwDJRetWmhjPMR0YMOrFzXWbEXdkYUs8R/2XTV8msBj2mi3Zy3JrP/WOxOezO9+C0S0ZoaVu5NBujN9YGoGcrXwdcX5lO6OyLNL4eQ6X3yflK5Yo/T63tdYrp0/PaTfnGvEEvKfaAtZ7FfN4elods0/SpPZn2JOMQr17ETt0KNR/D/Q6WO0w8F0RPXp1htm0CR3lH2dAYJM7ijy1KvdHHQ7nzxBJ3qryCahzgbXF7UlkHuRlwfd+Ht6FSrIpb2dMSgnaTijq08T8xDIL0/VQmFeXYLI0JshP9d7Osws97q7ROJXBxatshLYIVwOn4ccnSnjwejZAgWv7iYLFElA2lM3vM8tVbUVlS+rCwVC+mU6M1aaZPpGDwI+qmZQIxqlSTYkiEWNXHS5xFUEwy42xqOBR405UOmuUMefgtc4YD7EbsfhUX7jpFirX92Qi7zFxCDT2EmN8bSz9PDqimtyGRnYkPhGp7TRljM0Vxup5PxKh84t9vlGVoSD6tO9ggu2xwYuVrFvkq8dEGVa01e++SsM2BhwVv1LKwAfmwp7I0Nh8U4ZpHub2S5D9aKeCZZo3lwcCQallVvZ3gdBCHtfTO0qT6vJtWabgAYrtgvd7pKkIv/cbfIJuQVxyLiWkUjpL58Bzo8qjk2dXD21/2FxWYfOBLe1l5UES/OXRUoQYSNawAxcsi2i0uriTOKJfXtTR0EFjBALALhwZxqgixHqmBWpjHlBgqand4dEH2q6szAgEw3cYY5H0bEFLzZ0JeaYD3rLyai3K/4FVvsRrd52u6eEmSgLICiCEYaH8w+59lLCwcU9ijEFyva/YU1+VSItI/Uf4UCmYXWhgEVR/WnDG7DlTD9YPeIXHzWUVNta9hqlcx8a4U5KcDE4VudvaLS4rSEIZyeBwKDQD0jdySzrjW4Ym/bw5mW9hrRupFazKxTTBUHczEPYVsQ+5EXJ9V/3s07SbEvlGTL8XNNdsEaQtk6FoI6URmRbaXSBCy1hgcByQTmhR7eju1yk4lH7ivn0qJWKkRSQTFppg+L1dCyh2XIUZF1/AmL2kyrmg1XLVqgGvb8T0u7GqmqvT/g8KuW53G00w+qivJZsylcDN3BRdSv1nexx+2wlzYJHsxofODky0I4y7FbUTlP3JEFL7NxKbmmGNGM3o3PWhynq/rfhSv6CKnYnHljMypzMNkixK4baidyP4lEJb12ZzLozTgohFmCZ/i8Hl4mmLiiNv0gSirWiOuupd2f9Zgz7fg//2HoRnnDw6sYFjy0RJwm8rvw03ZoanAG3motEThhe7vCDgcG1qI3kk1hHbXOBxV9GXADgiN+MSbBc3me+U4chiyeQ8TWPbYXDfgRPC4Qxg/HIuGHXYs1tLWlu7fY48I45Q9+1M05/zO5zwnhgWmzSpdeW35L/gd+RFKckYzVtcOUWzhP8qY1c0fq7r5+fftNZIr/jXb7pZORzocxnu/m9BXu3ZpBWic/GORiZ1NRoLzo6zB+BSWjCINcqRB8vrvkzaTROKKlzeVfSqKAOu7incrFsL6t2fB2fM+UGE68pbVP8QcTmPxSHqZAgwLm8pbK7dqmp3c0toiggpBZkx+qWJMzH+MroocbIQpOCZ0dBoo8rMEJYwyUVKCriqeNN6qL6RHnrIoEmXa317r/Ffn4UY1amqLGmFTGtp+Dhgn3WB4KYqzCxv1ApSbvdnscsq3O4+ShPg3/8cicIMxBUH4mXqH028pK/QhHY2rmxZhtC+UOVTD1ZX17hcJ0/toyUIjRfDVYUeqJ5p4Vfzm5oC8fplTXsD/jLnOXokdu07GsxM1uMSrOEYgiYe1CM8T3BmJCC7RGdPpjnnNsQlFos0b09kZZCJr6xiEYvQ6XA7G/rnMT74bBXzyCR3YKVMPw6L+v+HbVbXzKtYVVWUJjEmpGR0/WVzzyQR3UbHKkX5/G8WZtIlLI0749uAlLwsa+P+XYLTCuWpDKawbZFI18pJZSSPlN3e4kb3h1yjHx5VitwWNEWuUZ4LTeKrg3dWxQKfw/Wo+m8OmsQkvin4PwXbCP2lUbdoAAAAAElFTkSuQmCC";function ac(){return s(rc,{children:v(he,{$justify:"space-between",$align:"flex-start",children:[v("div",{children:[s("p",{children:"\u041D\u0430\u0448\u0435 \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043F\u043E\u0441\u0438\u043B\u043E\u043A:"}),v("p",{children:["\u0412\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F \u2116 19, \u043C. \u041A\u0440\u0438\u0432\u0438\u0439 \u0420\u0456\u0433, \u041C\u0443\u0441\u043E\u0440\u0433\u0441\u043A\u043E\u0433\u043E 3",s("br",{})," \u041F\u0440\u0438\u0442\u0443\u043B\u043E\u043A \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D \u201C\u0411\u0456\u0433 \u041B\u0430\u043F\u0430\u201D"]})]}),s("img",{src:lc,alt:"nova poshta logo"})]})})}function sc(){return s(Xs,{children:v(Ys,{children:[s(qs,{children:v(he,{$direction:"column",$align:"center",children:[s(Pe,{children:"\u0411\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u0439 \u0434\u043E\u043D\u0430\u0442"}),v(Js,{$gap:"24px",$width:"100%",children:[v(Di,{children:[v("div",{children:[s(xe,{children:"\u0420\u0430\u0437\u043E\u0432\u0438\u0439 \u0432\u043D\u0435\u0441\u043E\u043A"}),v("span",{children:["\u041D\u0430\u0433\u043E\u0434\u0443\u0439 \u043F\u0441\u0430 \u0432\u0436\u0435 \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456 \u2013",s("br",{})," \u0442\u0432\u043E\u044F \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u0432\u0430\u0436\u043B\u0438\u0432\u0430!"]})]}),s(oc,{}),s(uc,{children:"\u0417\u0440\u043E\u0431\u0438\u0442\u0438 \u0432\u043D\u0435\u0441\u043E\u043A"})]}),v(Di,{children:[v("div",{children:[s(xe,{children:"\u041D\u0435\u0433\u0440\u043E\u0448\u043E\u0432\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430"}),v("p",{children:["\u0406\u0441\u043D\u0443\u0454 \u0431\u0430\u0433\u0430\u0442\u043E \u0441\u043F\u043E\u0441\u043E\u0431\u0456\u0432 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0438 \u2013 \u043E\u0431\u0435\u0440\u0456\u0442\u044C \u0441\u0432\u0456\u0439!",s("br",{})," \u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u0432\u0443\u043B\u0438\u0447\u043D\u0438\u043C \u0441\u043E\u0431\u0430\u043A\u0430\u043C \u043D\u0435 \u043E\u0431\u043C\u0435\u0436\u0443\u0454\u0442\u044C\u0441\u044F \u043B\u0438\u0448\u0435 \u0444\u0456\u043D\u0430\u043D\u0441\u0430\u043C\u0438. \u041C\u0438 \u043F\u043E\u0441\u0442\u0456\u0439\u043D\u043E \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u0454\u043C\u043E \u043A\u043E\u0440\u043C\u0456\u0432, \u043C\u0435\u0434\u0438\u043A\u0430\u043C\u0435\u043D\u0442\u0456\u0432, \u0440\u043E\u0437\u043F\u043E\u0432\u0441\u044E\u0434\u0436\u0435\u043D\u043D\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u0442\u043E\u0449\u043E."]})]}),s(ac,{})]})]})]})}),s(ic,{src:Qs})]})})}var cc="/Big-lapa/assets/main_photo.2d061ceb.png";const dc=e=>f.exports.createElement("svg",{width:130,height:17,viewBox:"0 0 130 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("rect",{width:17,height:17,rx:8.5,fill:"#F9F9F9"}),f.exports.createElement("line",{x1:28,y1:8,x2:45,y2:8,stroke:"#F9F9F9"}),f.exports.createElement("rect",{x:56.5,y:.5,width:16,height:16,rx:8,stroke:"#F9F9F9"}),f.exports.createElement("line",{x1:84,y1:8,x2:101,y2:8,stroke:"#F9F9F9"}),f.exports.createElement("rect",{x:112.5,y:.5,width:17,height:16,rx:8,stroke:"#F9F9F9"})),pc=g.div`
  height: calc(100vh - 96px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${z.colors.background};
  background-color: ${z.colors.green};
`,fc=g.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2vh;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`,hc=g.div`
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
`,Cc=g.div`
  flex: 0 1 50%;
  aspect-ratio: 1/1;
  max-height: 70vh;
  background: ${z.colors.yellow} url(${cc}) bottom no-repeat;
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
`,mc=g(dc)`
  position: absolute;
  bottom: 0;
  z-index: 1;
  @media screen and (max-width: 767px) {
    left: 50%;
    bottom: 14px;
    transform: translate(-50%);
  }
`;function gc(){return s(pc,{children:s(J,{children:v(fc,{children:[v(hc,{children:[s(J3,{children:"\u041F\u043E\u0434\u0430\u0440\u0443\u0439 \u0434\u0440\u0443\u0433\u0443 \u0448\u0430\u043D\u0441, \u0432\u0440\u044F\u0442\u0443\u0439 \u0442\u0432\u0430\u0440\u0438\u043D\u0443!"}),s("p",{children:"\u0414\u043E\u043F\u043E\u043C\u043E\u0436\u0438 \u0434\u043E\u043C\u0430\u0448\u043D\u0456\u043C \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0441\u044F \u0434\u043E\u0434\u043E\u043C\u0443. \u041C\u0438 \u0440\u043E\u0437\u0434\u0456\u043B\u044F\u0454\u043C\u043E \u0449\u0430\u0441\u0442\u044F, \u043E\u0431'\u0454\u0434\u043D\u0443\u044E\u0447\u0438 \u0442\u0432\u0430\u0440\u0438\u043D \u0442\u0430 \u0457\u0445 \u0433\u043E\u0441\u043F\u043E\u0434\u0430\u0440\u0456\u0432."})]}),s(Cc,{}),s(mc,{})]})})})}const xc=g.div`
  color: ${({theme:e})=>e.colors.dark};
  margin-top: ${({theme:e})=>e.headerHeight};
`,vc=g.div`
  display: grid;
  /* grid-template-rows: repeat(3, calc(100vh - 100px)); */
  grid-template-areas: 'main' 'dontation' 'shelterBlock';
`;var yc="/Big-lapa/assets/shelter-events.09b51187.png";const it=g.input`
  width: ${({width:e})=>e||"80%"};
  padding: ${({theme:e})=>e.paddings.input};
  background-color: ${({theme:e})=>e.colors.background};
  caret-color: ${({theme:e})=>e.colors.yellow};
  color: ${({theme:e})=>e.colors.dark};
  ${({withSvg:e})=>!e&&d1`
      padding: ${({theme:t})=>t.paddings.input};
      outline: 1px solid ${({theme:t})=>t.colors.yellow};
      border-radius: 4px;
      &:focus {
        outline: 2px solid ${({theme:t})=>t.colors.yellow};
      }
    `}
`,wc=g.section`
  background-image: url(${yc});
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
`,Ec=g(J)`
  @media (max-width: 1279px) {
    padding: 0 72px;
  }
  @media (max-width: 767px) {
    padding: 0 16px;
  }
`,kc=g(Pe)`
  text-align: center;
  margin-bottom: 30px;
`,Sc=g.p`
  text-align: center;
  margin-bottom: 29px;
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  @media (max-width: 1279px) {
    margin-bottom: 16px;
  }
`,Fc=g.p`
  text-align: center;
  margin-bottom: 40px;
  @media (max-width: 767px) {
    margin-bottom: 28px;
  }
`,Dc=g(it)`
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
`,Lc=g(Ee)`
  @media (max-width: 767px) {
    width: 100%;
    max-width: 361px;
  }
`,Ac=g.form`
  display: flex;
  justify-content: center;
  gap: 40px;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;function Bc(){return s(wc,{children:v(Ec,{children:[s(kc,{children:"\u041F\u043E\u0434\u0456\u0457 \u043F\u0440\u0438\u0442\u0443\u043B\u043A\u0443"}),s(Sc,{children:"\u0421\u0442\u0435\u0436\u0442\u0435 \u0437\u0430 \u043E\u0441\u0442\u0430\u043D\u043D\u0456\u043C\u0438 \u043F\u043E\u0434\u0456\u044F\u043C\u0438 \u043F\u0440\u0438\u0442\u0443\u043B\u043A\u0443"}),s(Fc,{children:"\u0417\u0430\u043B\u0438\u0448\u0442\u0435 \u0441\u0432\u0456\u0439 email \u0456 \u043C\u0438 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u0438\u043C\u043E \u0432\u0430\u043C \u043F\u0440\u043E \u043D\u043E\u0432\u0438\u043D\u0438 \u043F\u0440\u0438\u0442\u0443\u043B\u043A\u0443"}),v(Ac,{children:[s(Dc,{type:"email",placeholder:"email@gmail.com"}),s(Lc,{children:"\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438"})]})]})})}var Pc="/Big-lapa/assets/dog1.fb33c49d.png",$c="/Big-lapa/assets/dog2.b642c612.png",zc="/Big-lapa/assets/dog3.28c40050.png",Mc="/Big-lapa/assets/dog4.7f8b8c96.png",Li="/Big-lapa/assets/rectangle2.c1bba7be.png";const Tc=g.section`
  padding: 120px 0;

  @media (max-width: 767px) {
    padding: 80px 0;
  }
`,Nc=g(J)`
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
`,Rc=g.div`
  background-image: url(${Li}), url(${Li});
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
`,Mt=g.img`
  width: 100%;
`,Ic=g.div`
  flex: 0 0 60%;
  max-width: 624px;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`,bc=g(Pe)`
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 767px) {
    margin-bottom: 25px;
  }
`,Hn=g.p`
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`;function Hc(){return s(Tc,{children:v(Nc,{children:[v(Rc,{children:[v("div",{children:[s(Mt,{src:Pc,alt:"dog1"}),s(Mt,{src:zc,alt:"dog3"})]}),v("div",{children:[s(Mt,{src:$c,alt:"dog2"}),s(Mt,{src:Mc,alt:"dog4"})]})]}),v(Ic,{children:[s("li",{children:v(bc,{children:["\u041F\u043E\u0434\u0430\u0440\u0443\u0439 \u0441\u043E\u0431\u0430\u043A\u0430\u043C \u043D\u043E\u0432\u0443 \u043D\u0430\u0434\u0456\u044E ",s("br",{})," \u043D\u0430 \u0449\u0430\u0441\u043B\u0438\u0432\u0435 \u0436\u0438\u0442\u0442\u044F!"]})}),v("li",{children:[s(Hn,{children:"\u041F\u0440\u0438\u0454\u0434\u043D\u0443\u0439\u0442\u0435\u0441\u044C \u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u0441\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0438 \u043B\u044E\u0434\u0435\u0439 \u0437 \u0432\u0435\u043B\u0438\u043A\u0438\u043C \u0441\u0435\u0440\u0446\u0435\u043C, \u044F\u043A\u0456 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u044E\u0442\u044C \u0446\u0438\u043C \u0431\u0435\u0437\u0437\u0430\u0445\u0438\u0441\u043D\u0438\u043C \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C \u0437\u043D\u0430\u0439\u0442\u0438 \u0441\u0432\u043E\u0457\u0445 \u0432\u0456\u0440\u043D\u0438\u0445 \u0434\u0440\u0443\u0437\u0456\u0432. \u041D\u0430\u0448 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u0434\u043B\u044F \u0437\u0431\u043E\u0440\u0443 \u043F\u043E\u0436\u0435\u0440\u0442\u0432 \u0454 \u0437\u0432`\u044F\u0437\u043A\u043E\u043C \u043C\u0456\u0436 \u0432\u0430\u043C\u0438 \u0442\u0430 \u0446\u0438\u043C\u0438 \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C\u0438, \u044F\u043A\u0456 \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u044E\u0442\u044C \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0438. \u0420\u0430\u0437\u043E\u043C \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0437\u043C\u0456\u043D\u0438\u0442\u0438 \u0457\u0445\u043D\u0454 \u0436\u0438\u0442\u0442\u044F \u043D\u0430 \u043A\u0440\u0430\u0449\u0435"}),s(Hn,{children:"\u041A\u043E\u0436\u0435\u043D \u0432\u0430\u0448 \u0432\u043A\u043B\u0430\u0434 \u043C\u0430\u0454 \u0432\u0435\u043B\u0438\u043A\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043F\u043E\u043B\u0456\u043F\u0448\u0435\u043D\u043D\u044F \u0457\u0445\u043D\u044C\u043E\u0433\u043E \u0434\u043E\u0431\u0440\u043E\u0431\u0443\u0442\u0443. \u0412\u0430\u0448\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454 \u043D\u0430\u043C \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0443\u0432\u0430\u0442\u0438 \u0431\u0435\u0437\u043F\u0435\u0440\u0435\u0431\u0456\u0439\u043D\u0443 \u043C\u0435\u0434\u0438\u0447\u043D\u0443 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443, \u043D\u0430\u043B\u0435\u0436\u043D\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F, \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u0439 \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A \u0442\u0430 \u0432\u0441\u0435\u0431\u0456\u0447\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434 \u0434\u043B\u044F \u0441\u043E\u0431\u0430\u043A"}),s(Hn,{children:"\u0412\u0430\u0448\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u043C\u0430\u0454 \u0432\u0435\u043B\u0438\u043A\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u0436\u0438\u0442\u0442\u044F \u0446\u0438\u0445 \u0442\u0432\u0430\u0440\u0438\u043D. \u041A\u043E\u0436\u0435\u043D \u0432\u0430\u0448 \u0432\u043D\u0435\u0441\u043E\u043A \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454 \u043D\u0430\u043C \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0441\u043E\u0431\u0430\u043A\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0443 \u043C\u0435\u0434\u0438\u0447\u043D\u0443 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443, \u043D\u0430\u043B\u0435\u0436\u043D\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F, \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0435 \u043C\u0456\u0441\u0446\u0435 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F \u0456 \u043D\u0430\u043B\u0435\u0436\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434."})]})]})]})})}var Oc="/Big-lapa/assets/pic1.3bb1a2e6.png",_c="/Big-lapa/assets/pic2.6ca94d6e.png";const jc=g.section`
  @media (max-width: 767px) {
    padding-bottom: 80px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-bottom: 100px;
  }
  @media (min-width: 1280px) {
    padding-bottom: 120px;
  }
`,Vc=g(Pe)`
  text-align: center;
  margin-bottom: 60px;
`,Uc=g.div`
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
`,Ai=g.div`
  text-align: center;
  flex: 0 1 43%;
  @media (max-width: 1024px) {
    width: 75%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`,Bi=g.img`
  border-radius: 4px 4px 0 0;
  width: 100%;
`,Pi=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.green};
  height: 33%;
  padding: 24px 0;
  border-radius: 0 0 4px 4px;
`,$i=g(xe)`
  text-align: center;
  margin-bottom: 16px;
  color: ${({theme:e})=>e.colors.background};
  @media (max-width: 767px) {
    margin-bottom: 8px;
  }
`,zi=g.p`
  color: ${({theme:e})=>e.colors.background};
  max-width: 440px;
`;function Zc(){return s(jc,{children:v(J,{children:[s(Vc,{children:"\u042F\u043A \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A "}),v(Uc,{children:[v(Ai,{children:[s(Bi,{src:Oc,alt:"bowl with dog food"}),v(Pi,{children:[s($i,{children:"\u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430"}),s(zi,{children:"\u041E\u0434\u0438\u043D \u043A\u043B\u0456\u043A - \u043E\u0434\u043D\u0430 \u043F\u043E\u0440\u0446\u0456\u044F \u043A\u043E\u0440\u043C\u0443"})]})]}),v(Ai,{children:[s(Bi,{src:_c,alt:"dog toys"}),v(Pi,{children:[s($i,{children:"\u041A\u043E\u0440\u043C, \u043B\u0456\u043A\u0438, \u0456\u0433\u0440\u0430\u0448\u043A\u0438"}),s(zi,{children:"\u0417 \u0440\u0430\u0434\u0456\u0441\u0442\u044E \u043F\u0440\u0438\u0439\u043C\u0430\u0454\u043C\u043E \u043A\u043E\u0440\u043C, \u0437\u0430\u0441\u043E\u0431\u0438 \u0434\u043B\u044F \u043E\u0431\u0440\u043E\u0431\u043A\u0438, \u043B\u0456\u0436\u0430\u043A\u0438 \u0442\u0430 \u0456\u0433\u0440\u0430\u0448\u043A\u0438 \u0434\u043B\u044F \u0446\u0443\u0446\u0435\u043D\u044F\u0442"})]})]})]})]})})}const Wc=g.section`
  padding: 120px 0;

  @media (max-width: 1279px) {
    padding: 100px 0;
  }
  @media (max-width: 767px) {
    padding: 80px 0;
  }
`,Qc=g(Pe)`
  text-align: center;
`,Gc=g(he)`
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  column-gap: 60px;
  flex-wrap: wrap;
`;var Kc="/Big-lapa/assets/Purina-logo.d90bc93b.png",Xc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAAvCAYAAADKMxXkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAvpSURBVHgB7Vx9dhM5Ei+1nQHCvofnj90N4at9AswJMCcgOQHmBJgTJDnBmBPEnCDhBIQTJJzA5jNh9w963tvJZIi7tfVrSW61rLY7JjPjDvm958SWW62WqlRVqg8TXeISPwoG1GjQJVIE9INgQCvhB7r1ukbLX9/TqnxHN3+hHxyCKg7s5ICWu8zF9yVRFFOy1aSjoXsdE3zA/0K7jSe/eYc+b7nXfqDbbUnyiSDZSEjs3qNPL+kCovLE9xAVDPDAZgBFzOS1p/vwLn1u2g0DurlWI7FjtzEj9O7R4XO6YKi02H9Ptzrk7GZGg4n3zG7gHRz5+ktPe52CDbdNkOh+ppv36IKh0sRnohYQROSMutv06YBJPZy8Tu5OtEwyU4qYpLe9ylhY4kOXv6PVzQ+0ug9DbUD/WnOvGVHyxteXRfye28bEe8TfmPaIr9m8R0dbk72Tg8n7yeGITt667e/oVpefbwevAf2zRRXDwup8EJwXvW23xTRab9J/cruVRT9b7bKbtST9u3T0lOYETgWsNtg+EKFuAqN0mVFyRh8TvseS59ms51tkLCTxiw00uXeXDh+5rQO61VqiGNb+8A4dvSm6L6RJnf6R7tA79HGPpj7DykNenPCUTl41KYry9wGDBIOyz7eoqFOlILyitZnqdDoYUBjCCGRddqD0fAZlxQfbzFSpPcAqZZjQ8QOXsB+ZkSTbDJo5vIxUp3rI9yn9fIuKhdT5I6oz4YTPQi8UqbAPavSNd6PcTkju204cZgqcAKAexoYgdnWNrm1k16yEfI999IXU4feDIj2uns+HsU1RCSwk8Zs0xFn9qW2hw+iCA8d3/Xu6s8bEzB3RcDxjvfwE7+s0AhHDyZ5ibESyVNjge7Sy/mCOpdc+dzCeDwaj3aaeT1bKF7Cw1n6TDndZfzYFJe2YxAN2sjThuIFYniRI8tB3D6ENxhGNhr7vnXN+x3MJj7MU2g1QLRgfJwVmRn4+yd7FpJPQ7w98nsVFxsKf82HAQaezUddhff4VYln757cNE/AuH/p7K+JqonhUhuxl771qhlFL27PYwLeBGZ/oJLpDhy9u80nAtR2qgEo4eZR1TTmdzejUaTk9arEOfulx4rDqkC/MB3bjrsv0SJjq5V1IFPv4Jj0qBW5ds5tZLbhHTzYsr014A6uESvj2odP5FL3j+Wrsm9fHrw0+7rV4Uqx/xVbTsfhnj7PS4SV5AinAzHBgnEBQNZA4vj48fmXjI5U46sV0GtU8QsrW2XqHTjh3oKPZ4OOjmc89m0SCxfqI/ncAsc3OoT439t2rTin2js+onKi3UQniM2H33tPNoeV105j0zSsHUfxYUNCSqfX+rSEL7ywg7lmkL/Ouv86MAJUQ7LGB+Mo23vCex+fvRDs3OiU9qjAqI7KMWCetd7Hw9+hLqtMNwZlwHccumBu8MAccy+8lFL8B8ZWv4Bt8B2swJFmS9P2xgeqg0vF8uHVZdP3ixgA0WCTL1PMnUks+0CI60cxhPscmktdydzYAlzH/e8newF4VLfppqCzxfYEVUgTvZ8RO2kr0+8O0BtjlfB3Cvq+U5AjgN4ADaCxFwAQJjZ5XKXAzC5UkvkrikNvms0x3OM7sATtdkMiRE/0RCCdS4qZX692LmL8M4ce3PXvpN3wURPqWoJjfig3b1ojp+OeLIgEqFthRiCkeauubjTTqMQEFG3g9RXQQV+4FLAECEnurdPiuzD0RxWPmQe5eh+/H7mK5JikA03TZvuDjY7ApvQkh1UVlxb7y7l1tIVJHSqzjbM4G2smL792ZYASZGo/K5QtnT5I6jE6ii6b3Kwu4W00a9p+Rj8/3fsxHvAHGeE//fkyXWBwof/vKQ/oTgTE+0soTusQlLnGJS/wdMPH0fFujwbp5DSKa/gJgPDwHnRGz+sFTiXm4fXC09c1t2r18/dDGYzwzSS7CNKLkiT+gMdRfpO7NolKlrExKPFSOFByzRKT6Ud/uZzJxZ1W+IGaP0K1IU6WPH7mWNVK1kLGjHC6n603674Fy+9b2Mb5qn8zLKwNToqXdx2HRXFSEj16r8cpX8pgcwqLnzCeFZomgdkWS8THg2oCCHfgn7LWwx7P6cWj7uIl+H2hVh6DhAIvVYZmJ+FqnQYWmswqNyr5KWphcKA6G7CtCYLGMUyVdkDb6qRy4lRAv435VqVX+AklFeGkWh922157kJ3OrY1K1kGJVp6XU+q7RUsuMr9qv3qczQO0GMCeyhWUnWwN3Liqfj9seZ+Ol8+mWGcfOIVTPufws/32tnX1Sbma9a0PTukTX9ZyzlDPcK6ClHc9px/RrmH7q+eHcgotbNAK9qC0qRifjGMXBOq06nNJH58AFvCPjhp1ooRZsddO+NiN8hlHqajXfYxHkhn8cOfe5W+225f2C2IA1hsnnm0zo5PnwMXOlPWscctaLGXxzXjXFY4bkPJ/LTD4w3d6JNCglGhy5fBtwR7sTwppdoTJehlkn6ppJaKeKDXjUeqh4pTQWnvOCNcCVLGDW8wxAG4YBfITnCF3XDqkii4ZmMNs8UFHCfJEnv/pFczHSxgWL4O15/AwsDbbpnAAazXoG5CuwOn0R029biFHUmetb2Q2S7l2d2sSEfqsqV1I0UKg4Sv3ctt886cd08nxSdwkd+jRcKR+PmAFqWlfq9g2WKPd5/LX8JFBG9WWcfqWZJKRzhs4O6mTjStad8pHNdCqMe7qhK4KiESUv6xRMnPl1GvgOX/KIzgTRhtRAvgJ9PxoqrSyaaoPYtMqlp9gitO64/f+g0c92qjMWC2VRrnGFxYvpp6d2QiS4EilV7JNft6+VmkGse/bsGLmt588bHLTJEdElPIAU7bv06TkMLWU0TcvOFe2y+t9GoDbKuQAqdZYKyo9tQVKth6MAFp13oC2Sojpdadi7njv2im6KRaN8OlQqOcDhsiC3HZE523J29fz5B1VEaI2+O42wYPCiE4QcRwuN/p9dsKmikOM+rXmYxrrX0P5cS6VzOQT2DoX4UqlJ0gRL9ACT6UrcNqTpyFW1KslBxATu+QoeeOet5yeR1/OBssTPDba6YwIc0JxIKFm317DA8s5BpPO3112w9S5u0BwQabKJsFPQ22V3f0AzrGUjil2rmkOcIU19qHzt/BWqfzXv3fQnJvSmvfM8ep4NlaulQrPlYaul70n9uoo//fFdlf6fasgJlR1sr0GDmWju3R/T0laeAYNShqSTkooExnzxQqKPXKe0NMxd6ehrF9KqgMHOLhtXL9DzHVWHd56w6/BFZ96ooK4PdAgn1maJciUBbZUxv1Gry8e2znovh/hiqGrk7AvUMUbpcbsQEQZO/rxuwBPvk/UAzOl7VAL63PuX/EqWoNqu9ZGt+mXvuHBowQmkfiCi/LkconyW/ufdfm61fS4zlYG78yPUyNk6RHmQVGVKTDInrvV5fWCMRDAD3IoiLXwYIyoqsHSh9Pz5ZN/OgqfKB88/gN/b+NiN50+7ptu+Y94UNGbpf3XEO7/K3rMyUyDyhkf6Hscbx4rtmvOoa6zZRqLrIgbYYbNZpoARCZlO37Skyn6RyqSdCknBnkq+UK+iUmtVCSyfunOBO1d5MMWO6/lLPEbu5DPmN06RRDFQzyCm2l1lcVZmws73DuxasTXN9TDWXAYoAPRQx3bYFCGhUWRn4qpy5+OnKNK0XzQH7DiACyxWnJ4yZh4jI3gd3Z9mAdxnxMZxCNCZdmNsDJErGM0fBc8KHzNhfX3XBkzksQ9d0GjXfih2yjzPHij7kSNTnkye0ibS7l78Fp5vsTKoBVKEFm+tBYuUw2XyXC2twkvzrGV8+8mUYynUnPqxpnQuUfFcFBOzl/OVWVzpEM1AEUAxFAipJF823xEEnYUR/fTCYkCef6zV5NXIbj+l+I2ez5hmTJfd/HyOhvmTBCKEX175nlPgD4ofiH4b+hYcRs4VEnKata6KJ+Ib7GAobdUDSMHCr1yZcd3PZfoAyLULxsUYecz6nR7f/fF/RLVfp60Jy8LGtEJQpeuvh/Y1s+YHR9gf9PuvnlDvfZaEb9w5s5qJiuaG8a/QtRtnocclfiD8H13w8JVtly6uAAAAAElFTkSuQmCC";function Yc(){return s(Wc,{children:v(J,{children:[s(Qc,{children:"\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u0438"}),s(Gc,{children:[{id:1,src:Kc},{id:2,src:Xc}].map(t=>s("img",{src:t.src,alt:"partner"},t.id))})]})})}function qc(){return s(xc,{"data-testid":"home-page",children:v(vc,{children:[s(gc,{}),s(Hc,{}),s(Zc,{}),s(sc,{}),s(Bc,{}),s(Yc,{})]})})}var Jc="/Big-lapa/assets/dogM2x.b4dcdf99.png";const Mi=e=>f.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M21.9999 16.9201V19.9201C22.0011 20.1986 21.944 20.4743 21.8324 20.7294C21.7209 20.9846 21.5572 21.2137 21.352 21.402C21.1468 21.5902 20.9045 21.7336 20.6407 21.8228C20.3769 21.912 20.0973 21.9452 19.8199 21.9201C16.7428 21.5857 13.7869 20.5342 11.1899 18.8501C8.77376 17.3148 6.72527 15.2663 5.18993 12.8501C3.49991 10.2413 2.44818 7.27109 2.11993 4.1801C2.09494 3.90356 2.12781 3.62486 2.21643 3.36172C2.30506 3.09859 2.4475 2.85679 2.6347 2.65172C2.82189 2.44665 3.04974 2.28281 3.30372 2.17062C3.55771 2.05843 3.83227 2.00036 4.10993 2.0001H7.10993C7.59524 1.99532 8.06572 2.16718 8.43369 2.48363C8.80166 2.80008 9.04201 3.23954 9.10993 3.7201C9.23656 4.68016 9.47138 5.62282 9.80993 6.5301C9.94448 6.88802 9.9736 7.27701 9.89384 7.65098C9.81408 8.02494 9.6288 8.36821 9.35993 8.6401L8.08993 9.9101C9.51349 12.4136 11.5864 14.4865 14.0899 15.9101L15.3599 14.6401C15.6318 14.3712 15.9751 14.1859 16.3491 14.1062C16.723 14.0264 17.112 14.0556 17.4699 14.1901C18.3772 14.5286 19.3199 14.7635 20.2799 14.8901C20.7657 14.9586 21.2093 15.2033 21.5265 15.5776C21.8436 15.9519 22.0121 16.4297 21.9999 16.9201Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),ed=e=>f.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),f.exports.createElement("path",{d:"M22 6L12 13L2 6",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),td=e=>f.exports.createElement("svg",{width:26,height:44,viewBox:"0 0 26 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M24 2H18C15.3478 2 12.8043 3.05357 10.9289 4.92893C9.05357 6.8043 8 9.34784 8 12V18H2V26H8V42H16V26H22L24 18H16V12C16 11.4696 16.2107 10.9609 16.5858 10.5858C16.9609 10.2107 17.4696 10 18 10H24V2Z",stroke:"#2E2E2E",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})),nd=e=>f.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M11.6 0H28.4C34.8 0 40 5.2 40 11.6V28.4C40 31.4765 38.7779 34.427 36.6024 36.6024C34.427 38.7779 31.4765 40 28.4 40H11.6C5.2 40 0 34.8 0 28.4V11.6C0 8.52349 1.22214 5.57298 3.39756 3.39756C5.57298 1.22214 8.52349 0 11.6 0ZM11.2 4C9.29044 4 7.45909 4.75857 6.10883 6.10883C4.75857 7.45909 4 9.29044 4 11.2V28.8C4 32.78 7.22 36 11.2 36H28.8C30.7096 36 32.5409 35.2414 33.8912 33.8912C35.2414 32.5409 36 30.7096 36 28.8V11.2C36 7.22 32.78 4 28.8 4H11.2ZM30.5 7C31.163 7 31.7989 7.26339 32.2678 7.73223C32.7366 8.20107 33 8.83696 33 9.5C33 10.163 32.7366 10.7989 32.2678 11.2678C31.7989 11.7366 31.163 12 30.5 12C29.837 12 29.2011 11.7366 28.7322 11.2678C28.2634 10.7989 28 10.163 28 9.5C28 8.83696 28.2634 8.20107 28.7322 7.73223C29.2011 7.26339 29.837 7 30.5 7ZM20 10C22.6522 10 25.1957 11.0536 27.0711 12.9289C28.9464 14.8043 30 17.3478 30 20C30 22.6522 28.9464 25.1957 27.0711 27.0711C25.1957 28.9464 22.6522 30 20 30C17.3478 30 14.8043 28.9464 12.9289 27.0711C11.0536 25.1957 10 22.6522 10 20C10 17.3478 11.0536 14.8043 12.9289 12.9289C14.8043 11.0536 17.3478 10 20 10ZM20 14C18.4087 14 16.8826 14.6321 15.7574 15.7574C14.6321 16.8826 14 18.4087 14 20C14 21.5913 14.6321 23.1174 15.7574 24.2426C16.8826 25.3679 18.4087 26 20 26C21.5913 26 23.1174 25.3679 24.2426 24.2426C25.3679 23.1174 26 21.5913 26 20C26 18.4087 25.3679 16.8826 24.2426 15.7574C23.1174 14.6321 21.5913 14 20 14Z",fill:"#2E2E2E"})),ud=g.section`
  margin-bottom: 80px;
  @media (min-width: 767px) {
    margin-bottom: 100px;
  }
  @media (min-width: 1279px) {
    margin-bottom: 80px;
  }
`,rd=g(Pe)`
  text-align: center;
  margin-bottom: 60px;
`,id=g.img`
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
`,od=g.ul`
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
`,Tt=g.li`
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
`,ld=g.div`
  display: flex;
  gap: 20px;
  margin-left: 14px;
  @media (min-width: 767px) {
    margin-left: 32px;
  }
  @media (min-width: 1279px) {
    margin-left: 32px;
  }
`,ad=g(td)`
  &:hover path {
    stroke: ${({theme:e})=>e.colors.yellow};
  }
`,sd=g(nd)`
  &:hover path {
    fill: ${({theme:e})=>e.colors.yellow};
  }
`,cd=g.div`
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
`,dd=g.div`
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
`,pd=g.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 40px 0 44px;
`,fd=g.div`
  display: flex;
  flex-direction: column;
  gap: 61px;
  @media (min-width: 1279px) {
    flex-direction: row;
    gap: 24px;
  }
`,Ti=g(it)`
  width: 100%;
`,hd=g.textarea`
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
`,Cd=g(Ee)`
  width: 100%;
`;function md(){return s(ud,{children:v(J,{children:[s(rd,{children:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"}),v(fd,{children:[v(cd,{children:[s(id,{src:Jc,alt:"cute dog"}),v(od,{children:[v(Tt,{children:[s(Mi,{})," ",s("p",{children:"+38 063 628 6630"})]}),v(Tt,{children:[s(Mi,{})," ",s("p",{children:"+38 063 628 6630"})]}),v(Tt,{children:[s(ed,{})," ",s("p",{children:"elektronna@poshta.com"})]}),v(Tt,{children:[s($l,{})," ",s("p",{children:"\u0410\u0434\u0440\u0435\u0441\u0430: \u043C\u0456\u0441\u0442\u043E \u041B\u044C\u0432\u0456\u0432, \u0432\u0443\u043B. \u0413\u043E\u0440\u043E\u0434\u043E\u0446\u044C\u043A\u0430, 397"})]})]}),v(ld,{children:[s(sd,{}),s(ad,{})]})]}),v(dd,{children:[s(Pe,{$marginBottom:"24px",children:"\u0417\u0432`\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043D\u0430\u043C\u0438"}),s("p",{children:"\u042F\u043A\u0449\u043E \u0437\u0430\u043B\u0438\u0448\u0438\u043B\u0438\u0441\u044F \u043F\u0438\u0442\u0430\u043D\u043D\u044F, \u043D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u043D\u0430\u043C"}),v("form",{children:[v(pd,{children:[s(Ti,{className:"name",placeholder:"\u0406\u043C\u2019\u044F"}),s(Ti,{type:"email",className:"email",placeholder:"\u041F\u043E\u0448\u0442\u0430"}),s(hd,{name:"questions",placeholder:"\u041F\u0438\u0442\u0430\u043D\u043D\u044F"})]}),s(Cd,{type:"submit",children:"\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438"})]})]})]})]})})}var gd="/Big-lapa/assets/lapasS.0d643802.png",xd="/Big-lapa/assets/lapaM12x.a8af177e.png",vd="/Big-lapa/assets/lapaM22x.963d85d6.png",yd="/Big-lapa/assets/lapaL12x.af319c02.png",wd="/Big-lapa/assets/lapaL22x.ce776028.png",Ed="/Big-lapa/assets/lapaXL12x.cdb594b4.png",kd="/Big-lapa/assets/lapaXL22x.b91ba78e.png";const Sd=g.section`
  background-image: url(${gd});
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: contain;
  background-color: ${z.colors.green};
  color: ${z.colors.background};
  margin-bottom: 80px;
  padding-bottom: 18px;

  @media (min-width: 767px) {
    background-image: url(${xd}), url(${vd});
    background-repeat: no-repeat;
    background-position: 10% 0, 90% 100%;
    background-size: 60%;
    margin-bottom: 100px;
    padding-bottom: 32px;
  }
  @media (min-width: 1279px) {
    background-image: url(${yd}), url(${wd});
    background-repeat: no-repeat;
    background-position: 10% 0, 90% 100%;
    background-size: 60%;
    margin-bottom: 120px;
    padding-bottom: 52px;
  }
  @media (min-width: 1439px) {
    background-image: url(${Ed}), url(${kd});
    background-repeat: no-repeat;
    background-position: 0 0, 100% 100%;
    background-size: 60%;
    margin-bottom: 120px;
    padding-bottom: 44px;
  }
`,Fd=g(J3)`
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
`,Dd=g.div`
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
`,Ld=g(t1)`
  text-align: center;
  padding: 15px 24px;
  border: 1px solid ${z.colors.background};
  border-radius: 4px;
  width: 157px;
  &:hover {
    border: 2px solid ${z.colors.background};
  }
  &:focus {
    border: 3px solid ${z.colors.background};
  }
`,Ad=e=>f.exports.createElement("svg",{width:130,height:17,viewBox:"0 0 130 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("rect",{x:.5,y:.5,width:16,height:16,rx:8,stroke:"#F9F9F9"}),f.exports.createElement("line",{x1:28,y1:8,x2:45,y2:8,stroke:"#F9F9F9"}),f.exports.createElement("rect",{x:56.5,y:.5,width:17,height:16,rx:8,stroke:"#F9F9F9"}),f.exports.createElement("line",{x1:85,y1:8,x2:102,y2:8,stroke:"#F9F9F9"}),f.exports.createElement("rect",{x:113,width:17,height:17,rx:8.5,fill:"#F9F9F9"}));function Bd(){return s(Sd,{children:v(J,{children:[v(Fd,{children:["\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0439 \u0434\u0440\u0443\u0433\u0430,",s("br",{})," \u0432\u0440\u044F\u0442\u0443\u0439 \u0442\u0432\u0430\u0440\u0438\u043D\u0443!"]}),v(Dd,{children:[s(Ad,{}),s(Ld,{to:".",end:!0,children:"\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"})]})]})})}const Pd=g.div`
  color: ${({theme:e})=>e.colors.dark};
  margin-top: ${({theme:e})=>e.headerHeight};
`,$d=g.div`
  display: grid;
  /* grid-template-rows: repeat(3, calc(100vh - 100px)); */
  grid-template-areas: 'main' 'dontation' 'shelterBlock';
`;function zd(){return s(Pd,{"data-testid":"contacts-page",children:v($d,{children:[s(Bd,{}),s(md,{})]})})}const Md=g.section`
  color: ${z.colors.dark};
  margin-top: ${z.headerHeight};
  padding-top: 24px;
  padding-bottom: 48px;

  @media (max-width: 1279px) {
    background-color: rgb(181, 194, 104, 50%);
    padding-top: 50px;
  }

  @media (max-width: 767px) {
    padding-top: 25px;
  }
`,Td=g.div`
  background-color: rgb(181, 194, 104, 50%);
  width: 100%;
  border-radius: 4px;
  padding: 64px;
  @media (max-width: 1439px) {
    padding: 48px;
  }
  @media (max-width: 1279px) {
    background-color: rgb(181, 194, 104, 0%);
    padding: 0;
  }
`,Nd=g(he)`
  gap: 108px;

  @media (max-width: 1439px) {
    gap: 66px;
  }

  @media (max-width: 1279px) {
    gap: 40px;
  }

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 767px) {
    gap: 32px;
  }
`,Rd=g.div`
  flex: 1;
`,Id=g.div`
  flex: 1.2;
  max-width: 560px;

  @media (max-width: 1279px) {
    max-width: 100%;
  }
`,bd=g.div`
  display: flex;
  align-items: end;
  gap: 16px;
  margin-bottom: 30px;
  line-height: 1;
  h2,
  h3 {
    margin: 0;
  }
`,Hd=g(he)`
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    margin-bottom: 0px;
  }
`,Od=g.p`
  font-size: ${z.fontSizes.subheadline};
  margin-bottom: 8px;

  @media (max-width: 767px) {
    font-size: ${z.fontSizes.mobileSubheadline};
  }
`,_d=g.div`
  font-weight: ${z.fontWeights.semiBold};
  padding: 8px 16px;
  background-color: ${z.colors.background};
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 767px) {
    svg {
      width: 32px;
      height: 32px;
    }
  }
`,jd=g.div`
  p {
    white-space: pre-line;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`,Vd=g.div`
  display: none;
  p {
    white-space: pre-line;
  }
  @media (max-width: 1024px) {
    display: block;
  }
`;function Nt({text:e,value:t,children:n}){return v("div",{children:[s(Od,{children:e}),v(_d,{children:[n,t]})]})}const Ud=g.img`
  cursor: pointer;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Zd=g.div`
  aspect-ratio: 1 / 1;
  min-height: 100%;

  border: ${e=>e.$isActive?"2px solid white":"1px solid transparent"};
  border-radius: 3px;
  @media (min-width: 768px) {
    min-height: 100%;
  }
`,Wd=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Qd=g.div`
  overflow: hidden;
  position: relative;
  width: 290px;
  min-height: 67px;

  @media (min-width: 768px) {
    width: 456px;
    min-height: 88px;
  }
`,Gd=g.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${e=>-e.$left*30}px;
  overflow-x: hidden;
  scroll-behavior: smooth;
  transition: all ease 0.3s;
  @media (min-width: 768px) {
    gap: 8px;
    left: ${e=>-e.$left*38}px;
  }
`,Kd=g.div`
  position: relative;
  overflow: hidden;
  display: flex;
  gap: 16px;
  padding: 0 10px;
  max-width: 476px;
`,Xd=g.div`
  display: flex;
  justify-content: center;
  height: 455px;
  margin-bottom: 18px;
  @media (min-width: 768px) {
    height: 600px;
    width: 476px;
    margin-bottom: 24px;
  }
`,Yd=g.img`
  width: 100%;

  border-radius: 4px;
  object-fit: cover;
`,qd=g.button`
  padding-left: 6px;
`,Jd=g.button`
  padding-right: 6px;
`;var ep="/Big-lapa/assets/dog2.62884c98.png",Ni="/Big-lapa/assets/dog3.7d00b5dd.png",tp="/Big-lapa/assets/dog4.64488f8b.png",np="/Big-lapa/assets/dog5.0e3db84d.png";const up=e=>f.exports.createElement("svg",{width:14,height:24,viewBox:"0 0 14 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M0.310201 12.344L11.4562 22.964C11.6422 23.1413 11.8893 23.2402 12.1462 23.2402C12.4031 23.2402 12.6502 23.1413 12.8362 22.964L12.8482 22.952C12.9387 22.8661 13.0107 22.7626 13.0599 22.648C13.1092 22.5333 13.1346 22.4098 13.1346 22.285C13.1346 22.1603 13.1092 22.0368 13.0599 21.9221C13.0107 21.8074 12.9387 21.704 12.8482 21.618L2.3522 11.618L12.8482 1.62205C12.9387 1.5361 13.0107 1.43265 13.0599 1.31798C13.1092 1.20331 13.1346 1.07983 13.1346 0.955046C13.1346 0.830259 13.1092 0.706778 13.0599 0.592112C13.0107 0.477446 12.9387 0.373991 12.8482 0.288046L12.8362 0.276045C12.6502 0.0987549 12.4031 -0.000146866 12.1462 -0.000146866C11.8893 -0.000146866 11.6422 0.0987549 11.4562 0.276045L0.310201 10.896C0.212176 10.9894 0.134138 11.1018 0.0808163 11.2262C0.0274948 11.3507 0 11.4847 0 11.62C0 11.7554 0.0274948 11.8894 0.0808163 12.0139C0.134138 12.1383 0.212176 12.2507 0.310201 12.344Z",fill:"#2E2E2E"})),rp=e=>f.exports.createElement("svg",{width:14,height:24,viewBox:"0 0 14 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M13.6898 12.344L2.5438 22.964C2.35782 23.1413 2.11074 23.2402 1.8538 23.2402C1.59686 23.2402 1.34978 23.1413 1.1638 22.964L1.1518 22.952C1.06133 22.8661 0.98929 22.7626 0.940063 22.648C0.890835 22.5333 0.865449 22.4098 0.865449 22.285C0.865449 22.1603 0.890835 22.0368 0.940063 21.9221C0.98929 21.8074 1.06133 21.704 1.1518 21.618L11.6478 11.618L1.1518 1.62205C1.06133 1.5361 0.98929 1.43265 0.940063 1.31798C0.890835 1.20331 0.865449 1.07983 0.865449 0.955046C0.865449 0.830259 0.890835 0.706778 0.940063 0.592112C0.98929 0.477446 1.06133 0.373991 1.1518 0.288046L1.1638 0.276045C1.34978 0.0987549 1.59686 -0.000146866 1.8538 -0.000146866C2.11074 -0.000146866 2.35782 0.0987549 2.5438 0.276045L13.6898 10.896C13.7878 10.9894 13.8659 11.1018 13.9192 11.2262C13.9725 11.3507 14 11.4847 14 11.62C14 11.7554 13.9725 11.8894 13.9192 12.0139C13.8659 12.1383 13.7878 12.2507 13.6898 12.344Z",fill:"#2E2E2E"}));function ip({src:e}){const t=[{image:e,title:"dog 1",id:0},{image:ep,title:"dog 2",id:1},{image:Ni,title:"dog 3",id:2},{image:tp,title:"dog 4",id:3},{image:np,title:"dog 5",id:4},{image:Ni,title:"dog 5",id:5}],[n,u]=f.exports.useState(0),r=a=>{u(a)},i=()=>{u(n===0?t.length-1:n-1)},o=()=>{u(n===t.length-1?0:n+1)},l=t[n];return v(Wd,{children:[s(Xd,{children:s(Yd,{src:l.image,alt:l.title})}),v(Kd,{children:[s(qd,{onClick:i,children:s(up,{})}),s(Qd,{children:s(Gd,{$left:n,children:t.map(({id:a,image:c,title:C},m)=>s(Zd,{$isActive:n===m,children:s(Ud,{src:c,onClick:()=>r(m),alt:C})},a))})}),s(Jd,{onClick:o,children:s(rp,{})})]})]})}const op=e=>f.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M30.0816 8.59172C30.0439 8.56106 29.9148 8.45645 29.7964 8.35554C28.1822 7.02139 26.0394 6.21225 23.9509 6.15057C21.7773 6.08774 19.7271 6.76087 17.9328 8.13094C17.6045 8.38372 16.7905 9.18693 16.5411 9.50462C15.7495 10.5228 15.2583 11.4562 14.8997 12.6238C14.0957 15.2363 14.4846 18.0475 15.9838 20.4603C16.1831 20.7787 16.5573 21.2998 16.6669 21.4095L16.7137 21.4562L15.0772 23.0927L13.4408 24.7291L12.1229 23.4043L10.8068 22.0777L10.1645 22.72L9.52037 23.3641L10.8417 24.6854L12.1631 26.0068L10.1241 28.0458L8.08507 30.0848L8.75024 30.75L9.41542 31.4152L11.4544 29.3762L13.4934 27.3372L14.8148 28.6585L16.1362 29.9799L16.7803 29.3358L17.4226 28.6935L16.096 27.3773L14.7711 26.0595L16.4076 24.423L18.044 22.7866L18.0908 22.8333C18.2004 22.943 18.7216 23.3171 19.04 23.5165C21.4528 25.0156 24.2639 25.4045 26.8764 24.6006C28.044 24.242 28.9775 23.7507 29.9956 22.9591C30.3133 22.7098 31.1165 21.8958 31.3693 21.5675C32.0962 20.6141 32.5701 19.7123 32.9139 18.6315C33.8703 15.6219 33.2469 12.3801 31.2132 9.78638C31.0328 9.55693 30.2393 8.71799 30.0816 8.59172ZM29.7592 10.8737C30.5925 11.91 31.1553 13.1414 31.3963 14.4501C31.7329 16.2708 31.3525 18.1937 30.3365 19.8066C29.2284 21.5618 27.352 22.7623 25.1996 23.0953C24.7978 23.1555 24.2165 23.1868 23.8154 23.1672C21.2082 23.0454 18.8178 21.6316 17.4828 19.425C16.302 17.4741 16.0128 15.2177 16.6785 13.139C17.4207 10.8183 19.0884 9.12904 21.3893 8.36704C23.5224 7.66132 25.8214 7.94399 27.7922 9.15522C28.2161 9.41808 28.4328 9.57885 28.9477 10.0132C29.0841 10.1285 29.5986 10.6746 29.7592 10.8737Z",fill:"#2E2E2E",stroke:"#2E2E2E"})),lp=e=>f.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M32.7041 7.0232C32.617 7.03164 32.1199 7.08439 31.5994 7.13502C31.0789 7.18776 30.2716 7.27004 29.8043 7.31645C29.3369 7.36287 28.0028 7.49789 26.8407 7.61392C25.6786 7.72996 24.3658 7.86076 23.9239 7.90506C23.4841 7.94936 23.1187 7.98945 23.1145 7.99367C23.1038 8.00844 23.3035 9.92826 23.3184 9.94303C23.3269 9.95147 23.5797 9.93248 23.8814 9.90295C24.1831 9.87341 25.5193 9.73839 26.8513 9.60548C28.1833 9.47257 29.5069 9.33966 29.7915 9.31223C30.0783 9.2827 30.3141 9.2616 30.3184 9.26371C30.3205 9.26793 29.6853 9.91139 28.9056 10.6962C24.7821 14.846 23.7284 15.9029 23.7114 15.9029C23.7029 15.9029 23.5818 15.8186 23.4459 15.7173C22.1457 14.7405 20.6225 14.0844 18.991 13.7932C18.0329 13.6245 16.8963 13.6013 15.9318 13.7299C13.6693 14.0359 11.5767 15.0591 10.0047 16.6287C8.9637 17.6688 8.20316 18.8439 7.6678 20.2384C7.15369 21.5823 6.92851 23.0506 7.01986 24.4367C7.2323 27.6266 8.93396 30.5654 11.5597 32.2806C11.9485 32.5337 12.127 32.6392 12.5115 32.8354C14.57 33.8945 16.8517 34.2405 19.0738 33.8354C20.7351 33.5316 22.3688 32.7932 23.6647 31.7595C24.3211 31.2362 24.865 30.6856 25.3664 30.0379C26.522 28.5422 27.2273 26.7911 27.4483 24.8692C27.4929 24.4704 27.512 23.5422 27.4802 23.1498C27.3697 21.7384 27.0192 20.4789 26.3988 19.2468C26.129 18.7088 25.6956 18.0253 25.3324 17.5612L25.1348 17.3122L25.4726 16.9726C25.6595 16.7848 26.1928 16.2468 26.6623 15.7764C27.5524 14.8818 30.8027 11.6118 31.4061 11.0042C31.5994 10.8101 31.7566 10.6519 31.7587 10.6561C31.7609 10.6582 31.7502 10.789 31.7354 10.9451C31.7205 11.1013 31.6886 11.4473 31.6653 11.7152C31.6419 11.981 31.6015 12.4156 31.5782 12.6793C31.5548 12.9451 31.5166 13.3755 31.4932 13.6392C31.353 15.2025 31.1533 17.4683 31.149 17.5485L31.1427 17.6413L32.1305 17.7299C32.6744 17.7764 33.1205 17.8143 33.1226 17.8143C33.1247 17.8122 33.1757 17.2658 33.2352 16.5991C33.2947 15.9325 33.3605 15.1772 33.3839 14.9219C33.4073 14.6667 33.454 14.1308 33.4901 13.7299C33.5241 13.3291 33.5645 12.9029 33.5751 12.7806C33.5857 12.6582 33.624 12.2321 33.6601 11.8312C33.6962 11.4304 33.7323 11.0042 33.7451 10.8818C33.7557 10.7595 33.7961 10.3333 33.83 9.93248C33.8662 9.53164 33.9193 8.94514 33.9469 8.62869C33.9873 8.20253 34 7.91561 34 7.52742V7L33.4328 7.00211C33.1184 7.00422 32.7912 7.01266 32.7041 7.0232ZM18.1943 15.6793C19.5816 15.8692 20.7755 16.308 21.8589 17.0274C23.6604 18.2236 24.9054 20.0886 25.343 22.2426C25.4641 22.8481 25.4917 23.1329 25.4917 23.8354C25.4896 24.4958 25.4683 24.7363 25.3642 25.3017C24.9776 27.3734 23.7624 29.2848 22.0778 30.4662C21.0155 31.2109 19.8322 31.6962 18.5788 31.905C18.0668 31.9894 17.8268 32.0084 17.2489 32.0084C16.4268 32.0084 15.8171 31.9261 15.0268 31.7046C11.7254 30.7763 9.41195 28.0316 9.03593 24.5949C8.97645 24.0633 9.00194 23.1962 9.09329 22.6118C9.43957 20.3987 10.6696 18.405 12.4584 17.1561C13.716 16.2785 15.099 15.7827 16.686 15.6413C16.9112 15.6223 17.9606 15.6477 18.1943 15.6793Z",fill:"#2E2E2E",stroke:"#2E2E2E"})),ap=e=>f.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M3.00252 3.57694C6.55117 3.13885 10.036 2.64571 13.5362 2.29248C17.0316 1.94041 20.5424 1.94041 24.0545 2.11243C27.6102 2.2856 31.1175 2.82347 34.633 3.31431C35.3907 3.41982 36.1567 3.47716 36.9854 3.56318V4.04943C36.9854 8.51521 37.0232 12.981 36.9771 17.4456C36.8991 24.8576 32.9828 33.5839 22.0567 36.7067C20.5354 37.1414 19.1559 37.0771 17.6794 36.6184C13.4239 35.2949 9.7842 33.1228 7.08193 29.6112C4.89151 26.7636 3.64203 23.5399 3.1822 20.0294C3.05571 19.0672 3.01434 18.0901 3.01079 17.1188C2.99306 12.7826 3.00252 8.4464 3.00252 4.10907V3.57694ZM5.74627 5.59408C5.74391 5.64798 5.73209 5.76037 5.73209 5.87276C5.73209 9.66419 5.69544 13.4568 5.74273 17.2482C5.74627 22.1065 7.47557 25.5162 8.96501 27.9658C11.211 31.6563 14.6202 32.8856 18.8083 34.0129C19.6181 34.2308 20.3687 34.2205 21.1796 34.0129C30.2179 31.6929 34.2177 25.6773 34.2523 16.8606C34.2665 13.2412 34.2546 9.62061 34.2546 6.00006C34.2546 5.83606 34.2546 5.67092 34.2546 5.58834C25.3192 4.15595 14.6652 4.15365 5.74509 5.59408H5.74627Z",fill:"#2E2E2E"}),f.exports.createElement("path",{d:"M29.3403 14.5419C29.1191 14.0197 28.7517 13.6432 28.2775 13.4536L28.2711 13.4512C28.0553 13.3672 27.8255 13.3243 27.5937 13.3246H27.5682C26.4827 13.3408 25.3745 14.2572 24.811 15.6052C24.3978 16.5909 24.3503 17.651 24.6843 18.4412C24.905 18.9637 25.2733 19.3402 25.7494 19.5298L25.7546 19.5318C25.9705 19.6157 26.2003 19.6587 26.4321 19.6585C27.5279 19.6585 28.6477 18.742 29.2215 17.3763C29.6296 16.3918 29.6746 15.3324 29.3403 14.5419ZM25.0031 20.3556C24.377 19.9819 23.7853 19.6284 23.3987 18.9934C22.3324 17.2358 21.6884 16.1748 20 16.1748C18.3116 16.1748 17.666 17.2358 16.5973 18.9934C16.2099 19.6292 15.617 19.9831 14.989 20.3584C14.2689 20.7883 13.5249 21.2325 13.2037 22.1065C13.0788 22.4216 13.0159 22.7576 13.0184 23.0962C13.0184 24.5194 14.1342 25.6773 15.505 25.6773C16.2123 25.6773 16.9651 25.4338 17.7617 25.1761C18.5276 24.9283 19.3194 24.6722 20.004 24.6722C20.6886 24.6722 21.4784 24.9283 22.2415 25.1761C23.0365 25.4323 23.7857 25.6757 24.495 25.6757C25.8638 25.6757 26.9776 24.5178 26.9776 23.0946C26.9787 22.7558 26.9145 22.4198 26.7883 22.105C26.4671 21.2301 25.7228 20.7855 25.0031 20.3556ZM15.776 14.7833C16.2502 15.3744 16.8519 15.6998 17.4704 15.6998C17.5548 15.6998 17.6391 15.6936 17.7226 15.6812C19.0125 15.4927 19.8163 13.929 19.5525 12.1183C19.4421 11.3571 19.1472 10.6481 18.7248 10.1224C18.2514 9.53251 17.6489 9.2075 17.0308 9.2075C16.9464 9.2075 16.8621 9.21372 16.7786 9.22611C15.4887 9.41454 14.6849 10.9782 14.9487 12.7889C15.0587 13.549 15.3536 14.2572 15.776 14.7833ZM22.2778 15.6812C22.3613 15.6936 22.4456 15.6998 22.53 15.6998C23.1489 15.6998 23.7502 15.3744 24.2244 14.7833C24.6464 14.2572 24.9397 13.549 25.0513 12.7881C25.3151 10.9782 24.5113 9.41454 23.2214 9.22531C23.1379 9.21293 23.0536 9.20671 22.9692 9.20671C22.3511 9.2075 21.7486 9.53251 21.2752 10.1224C20.8528 10.6481 20.5579 11.3571 20.4479 12.1191C20.1841 13.929 20.9879 15.4927 22.2778 15.6812ZM14.2454 19.5318L14.2509 19.5298C14.7263 19.3402 15.0942 18.9641 15.3145 18.442C15.6485 17.6502 15.6014 16.5913 15.189 15.6056C14.618 14.2414 13.4986 13.3246 12.4039 13.3246C12.1721 13.3242 11.9423 13.3672 11.7265 13.4512L11.7209 13.4532C11.2467 13.6412 10.8789 14.0189 10.6585 14.5411C10.3246 15.3328 10.3716 16.3918 10.7841 17.3775C11.3551 18.7416 12.4745 19.6585 13.5691 19.6585C13.8005 19.6587 14.0299 19.6157 14.2454 19.5318Z",fill:"#2E2E2E"})),sp=e=>f.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M15.5 15.5H24.5V24.5H15.5V15.5Z",fill:"#2E2E2E"}),f.exports.createElement("path",{d:"M32 11C32 9.3455 30.6545 8 29 8H26V5H23V8H17V5H14V8H11C9.3455 8 8 9.3455 8 11V14H5V17H8V23H5V26H8V29C8 30.6545 9.3455 32 11 32H14V35H17V32H23V35H26V32H29C30.6545 32 32 30.6545 32 29V26H35V23H32V17H35V14H32V11ZM11 29V11H29L29.003 29H11Z",fill:"#2E2E2E"})),cp=e=>f.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M30.1894 29.5462C30.0648 29.4141 29.9969 29.2394 30.0001 29.059C30.0033 28.8785 30.0772 28.7063 30.2064 28.5785C30.3359 28.4511 30.5104 28.3782 30.6933 28.375C30.8761 28.3719 31.0531 28.4389 31.187 28.5618L33.2763 30.6234V9.37664L31.187 11.4382C31.0531 11.5611 30.8761 11.6281 30.6933 11.625C30.5104 11.6218 30.3359 11.5489 30.2064 11.4215C30.0772 11.2937 30.0033 11.1215 30.0001 10.941C29.9969 10.7606 30.0648 10.5859 30.1894 10.4538L33.4833 7.20368C33.6156 7.07326 33.795 7 33.9821 7C34.1691 7 34.3485 7.07326 34.4809 7.20368L37.7748 10.4538C37.8677 10.539 37.9356 10.6472 37.9714 10.7673C38.0071 10.8873 38.0094 11.0146 37.978 11.1358C37.9466 11.257 37.8827 11.3676 37.7929 11.456C37.7031 11.5443 37.5909 11.6071 37.468 11.6378C37.3453 11.6689 37.2163 11.6667 37.0948 11.6316C36.9732 11.5964 36.8635 11.5296 36.7772 11.4382L34.6879 9.37664V30.6234L36.7772 28.5618C36.8635 28.4702 36.9732 28.4031 37.0948 28.3678C37.2165 28.3325 37.3455 28.3303 37.4683 28.3613C37.5912 28.3922 37.7033 28.4554 37.7928 28.5439C37.8823 28.6325 37.946 28.7433 37.9771 28.8646C38.0085 28.9856 38.0063 29.1128 37.9707 29.2328C37.9351 29.3527 37.8674 29.461 37.7748 29.5462L34.4809 32.7963C34.3485 32.9267 34.1691 33 33.9821 33C33.795 33 33.6156 32.9267 33.4833 32.7963L30.1894 29.5462Z",fill:"#2E2E2E",stroke:"#2E2E2E",strokeWidth:.5}),f.exports.createElement("path",{d:"M1 28.7868C1.19383 28.3487 1.53976 28.1915 2.02618 28.2129C2.6045 28.2383 3.18546 28.2302 3.76483 28.216C4.55441 28.1971 5.32708 28.2409 6.06331 28.6865C6.06965 28.5583 6.07652 28.4713 6.07704 28.3844C6.08549 27.0902 6.04536 25.7939 6.10979 24.5028C6.25133 21.6545 7.58489 19.3861 9.86859 17.6111C10.3534 17.2342 10.8567 16.8791 11.3421 16.5021C12.8943 15.2969 13.677 13.7301 13.7034 11.8101C13.7346 9.54989 15.3111 7.64472 17.5916 7.13498C17.9645 7.05155 18.3553 7.01899 18.7388 7.00983C19.5289 6.99101 20.3195 7.01238 21.1096 7.00017C21.4508 6.99508 21.7133 7.107 21.9499 7.3405C22.6185 7.99981 23.2966 8.65097 23.9822 9.29502C24.0704 9.37794 24.2204 9.43949 24.3429 9.44102C25.2471 9.45323 26.1518 9.44662 27.0565 9.44814C27.6839 9.44916 27.9897 9.74524 27.9871 10.3557C27.9844 10.9728 28.0336 11.597 27.9559 12.2059C27.7394 13.8995 26.3667 15.0365 24.5869 15.0543C24.0429 15.0599 23.4994 15.0553 22.91 15.0553V15.3631C22.91 17.1904 22.8984 19.0177 22.9132 20.8446C22.9301 22.9334 22.1617 24.6686 20.4859 26.0168C20.4183 26.0712 20.3697 26.1851 20.3681 26.2721C20.358 26.8979 20.3681 27.5241 20.3591 28.1498C20.357 28.2938 20.4161 28.3523 20.5445 28.4093C21.5337 28.8503 22.0354 29.6053 22.0592 30.6517C22.0692 31.1086 22.0449 31.5659 22.0661 32.0217C22.0877 32.4908 21.914 32.8235 21.4524 33H3.89898C3.8599 32.9842 3.8224 32.9613 3.78173 32.9547C2.764 32.7782 1.97231 32.2679 1.46794 31.4026C1.25404 31.0358 1.15263 30.6075 1 30.2076C1 29.7335 1 29.2599 1 28.7857V28.7868ZM20.4795 31.4647C20.4795 31.1915 20.4843 30.931 20.4785 30.6706C20.4658 30.1115 20.1568 29.795 19.5812 29.7421C19.0847 29.6964 18.7879 29.4089 18.7842 28.9312C18.7757 27.8736 18.7805 26.816 18.7826 25.7583C18.7831 25.4801 18.8888 25.2476 19.1322 25.0832C20.6755 24.0419 21.3536 22.5986 21.3346 20.8013C21.3124 18.6947 21.3293 16.5881 21.3293 14.4815C21.3293 13.7937 21.6013 13.5352 22.3169 13.5322C23.1599 13.5286 24.0044 13.5464 24.8457 13.5078C25.5545 13.4747 26.1872 12.9609 26.3308 12.296C26.4222 11.8742 26.4021 11.4306 26.4338 10.9718C25.5677 10.9718 24.7617 10.9636 23.9558 10.9758C23.6236 10.9809 23.3679 10.8736 23.1377 10.6467C22.4616 9.98179 21.7761 9.32605 21.0874 8.67285C21.014 8.60315 20.8994 8.53549 20.8027 8.53448C20.0475 8.5243 19.2912 8.51107 18.537 8.53549C16.9531 8.58687 15.5218 9.79611 15.3486 11.3111C15.2461 12.2059 15.2757 13.1186 15.3027 14.0216C15.3174 14.5237 15.6433 14.8849 16.1324 15.0726C17.0001 15.4058 17.917 14.7989 17.9302 13.8756C17.9434 12.9451 17.9291 12.0141 17.936 11.0837C17.9397 10.6111 18.2798 10.2682 18.7245 10.2652C19.1729 10.2621 19.5114 10.6014 19.513 11.0761C19.5167 12.0487 19.5283 13.0224 19.5051 13.9946C19.4776 15.1489 18.7007 16.1419 17.5663 16.527C16.453 16.905 15.2092 16.5881 14.4254 15.7268C14.3747 15.6714 14.3219 15.6174 14.2881 15.5813C13.9485 16.0051 13.6659 16.4701 13.2741 16.8216C12.5051 17.5114 11.6923 18.1595 10.8663 18.7863C8.73414 20.403 7.69158 22.5254 7.66464 25.1173C7.64352 27.139 7.66042 29.1617 7.66042 31.1833C7.66042 31.2739 7.66042 31.3645 7.66042 31.4647H16.087C15.9037 30.5881 14.8585 29.795 13.8371 29.7467C13.1035 29.7121 12.8748 29.4634 12.8542 28.7511C12.841 28.2979 12.8595 27.8197 12.7174 27.399C12.3355 26.2696 11.462 25.7192 10.2404 25.6505C9.76138 25.6235 9.45558 25.2852 9.47935 24.8482C9.50153 24.4351 9.85169 24.1213 10.3128 24.138C10.618 24.1492 10.928 24.1798 11.2249 24.2474C13.0908 24.6753 14.3795 26.2177 14.4439 28.0735C14.4465 28.1519 14.484 28.2785 14.5384 28.2979C14.8125 28.3966 15.0972 28.4678 15.3961 28.5538C15.3961 28.4418 15.3961 28.3498 15.3961 28.2572C15.3961 27.428 15.3935 26.5987 15.3972 25.7695C15.3988 25.3636 15.6349 25.0604 15.9998 24.9764C16.5179 24.8569 16.9742 25.216 16.9758 25.7568C16.98 27.0342 16.9769 28.3121 16.9785 29.5895C16.9785 29.6724 16.9637 29.7767 17.007 29.8357C17.374 30.3302 17.6186 30.8761 17.7554 31.4637H20.4811L20.4795 31.4647ZM2.59077 29.7574C2.57809 30.5642 3.13159 31.2749 3.92275 31.4189C4.3141 31.4901 4.72447 31.4662 5.12691 31.4764C5.43905 31.484 5.75118 31.4779 6.06067 31.4779C6.09606 30.6141 5.457 29.8408 4.59877 29.7686C3.93965 29.7131 3.27102 29.7574 2.59077 29.7574Z",fill:"#2E2E2E",stroke:"#2E2E2E",strokeWidth:.5}));function dp(){const e=en("dogs"),{id:t}=O6(),n=t?+t:0,u=e==null?void 0:e.data[n],{name:r,age:i,sex:o,size:l,hasbreed:a,breed:c,haschip:C}=u||{};return s(Md,{"data-testid":"dogs-page",children:s(J,{children:s(Td,{children:v(Nd,{children:[v(Vd,{children:[s(xe,{$marginBottom:"24px",children:"\u041F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D\u043A\u0443:"}),v("p",{children:[r," - \u0447\u0430\u0440\u0456\u0432\u043D\u0430 \u0442\u0430 \u0435\u043D\u0435\u0440\u0433\u0456\u0439\u043D\u0430 \u0441\u043E\u0431\u0430\u0447\u043A\u0430, \u044F\u043A\u0430 \u0432\u0456\u0434\u043C\u0456\u043D\u043D\u043E \u043B\u0430\u0434\u043D\u0430\u0454 \u0437 \u0456\u043D\u0448\u0438\u043C\u0438 \u0441\u043E\u0431\u0430\u043A\u0430\u043C\u0438 \u0456 \u043B\u044E\u0434\u044C\u043C\u0438. \u0412\u043E\u043D\u0430 \u043E\u0431\u043E\u0436\u043D\u044E\u0454 \u043F\u0440\u043E\u0433\u0443\u043B\u044F\u043D\u043A\u0438 \u0456 \u0433\u0440\u0430\u0442\u0438\u0441\u044F \u0437 \u043C'\u044F\u0447\u0438\u043A\u043E\u043C."," ",s("br",{}),s("br",{})," ",r," \u043C\u0430\u0454 \u043F\u0435\u0432\u043D\u0456 \u043C\u0435\u0434\u0438\u0447\u043D\u0456 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438, \u0456 \u0434\u043B\u044F \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438 \u0457\u0457 \u0437\u0434\u043E\u0440\u043E\u0432'\u044F \u0457\u0439 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0456 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u0456 \u043B\u0456\u043A\u0438 \u0442\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434. \u041D\u0435\u0437\u0432\u0430\u0436\u0430\u044E\u0447\u0438 \u043D\u0430 \u0441\u0432\u043E\u0457 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438, ",r," \u0454 \u043D\u0430\u0434\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E \u043B\u0430\u0433\u0456\u0434\u043D\u043E\u044E \u0442\u0430 \u043B\u044E\u0431\u043B\u044F\u0447\u043E\u044E \u0441\u043E\u0431\u0430\u043A\u043E\u044E.",s("br",{}),s("br",{})," \u0412\u0430\u0448\u0456 \u043F\u043E\u0436\u0435\u0440\u0442\u0432\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0443\u0442\u044C \u043D\u0430\u043C \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 ",r," \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u043C\u0438 \u043B\u0456\u043A\u0430\u043C\u0438, \u043C\u0435\u0434\u0438\u0447\u043D\u0438\u043C \u0442\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u043C \u0434\u043E\u0433\u043B\u044F\u0434\u043E\u043C. \u0412\u0430\u0448\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u0434\u043E\u0437\u0432\u043E\u043B\u0438\u0442\u044C \u043D\u0430\u043C \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u0432\u0441\u0435 \u043C\u043E\u0436\u043B\u0438\u0432\u0435 \u0434\u043B\u044F \u043F\u043E\u043B\u0456\u043F\u0448\u0435\u043D\u043D\u044F \u0457\u0457 \u0441\u0442\u0430\u043D\u0443 \u0456 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0457\u0439 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0456 \u0443\u043C\u043E\u0432\u0438 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F."]})]}),s(Rd,{children:s(ip,{src:"https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"})}),v(Id,{children:[v(bd,{children:[s(Pe,{children:r}),s(xe,{children:i})]}),v(Hd,{children:[s(Nt,{text:"\u0421\u0442\u0430\u0442\u044C",value:o,children:o==="\u0414\u0456\u0432\u0447\u0438\u043D\u043A\u0430"?s(op,{}):s(lp,{})}),s(Nt,{text:"\u041F\u043E\u0440\u043E\u0434\u0430",value:a?c:"\u0411\u0435\u0437 \u043F\u043E\u0440\u043E\u0434\u0438",children:s(ap,{})}),s(Nt,{text:"\u0420\u043E\u0437\u043C\u0456\u0440",value:l,children:s(cp,{})}),s(Nt,{text:"\u041D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u0447\u0456\u043F\u0430",value:C?"\u0422\u0430\u043A":"\u041D\u0456",children:s(sp,{})})]}),v(jd,{children:[s(xe,{$marginBottom:"24px",children:"\u041F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D\u043A\u0443:"}),v("p",{children:[r," - \u0447\u0430\u0440\u0456\u0432\u043D\u0430 \u0442\u0430 \u0435\u043D\u0435\u0440\u0433\u0456\u0439\u043D\u0430 \u0441\u043E\u0431\u0430\u0447\u043A\u0430, \u044F\u043A\u0430 \u0432\u0456\u0434\u043C\u0456\u043D\u043D\u043E \u043B\u0430\u0434\u043D\u0430\u0454 \u0437 \u0456\u043D\u0448\u0438\u043C\u0438 \u0441\u043E\u0431\u0430\u043A\u0430\u043C\u0438 \u0456 \u043B\u044E\u0434\u044C\u043C\u0438. \u0412\u043E\u043D\u0430 \u043E\u0431\u043E\u0436\u043D\u044E\u0454 \u043F\u0440\u043E\u0433\u0443\u043B\u044F\u043D\u043A\u0438 \u0456 \u0433\u0440\u0430\u0442\u0438\u0441\u044F \u0437 \u043C'\u044F\u0447\u0438\u043A\u043E\u043C."," ",s("br",{}),s("br",{})," ",r," \u043C\u0430\u0454 \u043F\u0435\u0432\u043D\u0456 \u043C\u0435\u0434\u0438\u0447\u043D\u0456 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438, \u0456 \u0434\u043B\u044F \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438 \u0457\u0457 \u0437\u0434\u043E\u0440\u043E\u0432'\u044F \u0457\u0439 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0456 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u0456 \u043B\u0456\u043A\u0438 \u0442\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434. \u041D\u0435\u0437\u0432\u0430\u0436\u0430\u044E\u0447\u0438 \u043D\u0430 \u0441\u0432\u043E\u0457 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438, ",r," \u0454 \u043D\u0430\u0434\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E \u043B\u0430\u0433\u0456\u0434\u043D\u043E\u044E \u0442\u0430 \u043B\u044E\u0431\u043B\u044F\u0447\u043E\u044E \u0441\u043E\u0431\u0430\u043A\u043E\u044E.",s("br",{}),s("br",{})," \u0412\u0430\u0448\u0456 \u043F\u043E\u0436\u0435\u0440\u0442\u0432\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0443\u0442\u044C \u043D\u0430\u043C \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 ",r," \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u043C\u0438 \u043B\u0456\u043A\u0430\u043C\u0438, \u043C\u0435\u0434\u0438\u0447\u043D\u0438\u043C \u0442\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u043C \u0434\u043E\u0433\u043B\u044F\u0434\u043E\u043C. \u0412\u0430\u0448\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u0434\u043E\u0437\u0432\u043E\u043B\u0438\u0442\u044C \u043D\u0430\u043C \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u0432\u0441\u0435 \u043C\u043E\u0436\u043B\u0438\u0432\u0435 \u0434\u043B\u044F \u043F\u043E\u043B\u0456\u043F\u0448\u0435\u043D\u043D\u044F \u0457\u0457 \u0441\u0442\u0430\u043D\u0443 \u0456 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0457\u0439 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0456 \u0443\u043C\u043E\u0432\u0438 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F."]})]})]})]})})})})}const pp=g(J)`
  color: ${({theme:e})=>e.colors.dark};
  margin-top: ${({theme:e})=>e.headerHeight};
  padding: 95px 16px 117px;
  max-width: 624px;

  ${xe} {
    margin-bottom: 27px;
  }

  p {
    margin-bottom: 72px;
    font-size: ${({theme:e})=>e.fontSizes.bodyText};
    text-align: start;
  }

  ${Ee} {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 100px;
  }

  @media (max-width: 1279px) {
    padding-top: 0;
    padding-bottom: 40px;

    ${xe} {
      margin-bottom: 6px;
    }

    p {
      margin-bottom: 40px;
    }
  }

  @media (max-width: 767px) {
    padding-top: 160px;
    padding-bottom: 180px;

    ${xe} {
      margin-bottom: 20px;
    }

    p {
      font-size: ${({theme:e})=>e.fontSizes.mobileBodyText};
    }
  }
`,fp=g(Pe)`
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
`,hp=e=>f.exports.createElement("svg",{width:19,height:16,viewBox:"0 0 19 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M17.5 9C18.0523 9 18.5 8.55228 18.5 8C18.5 7.44772 18.0523 7 17.5 7V9ZM0.792892 7.29289C0.402369 7.68342 0.402369 8.31658 0.792892 8.70711L7.15685 15.0711C7.54738 15.4616 8.18054 15.4616 8.57107 15.0711C8.96159 14.6805 8.96159 14.0474 8.57107 13.6569L2.91421 8L8.57107 2.34315C8.96159 1.95262 8.96159 1.31946 8.57107 0.928932C8.18054 0.538408 7.54738 0.538408 7.15685 0.928932L0.792892 7.29289ZM17.5 7L1.5 7V9L17.5 9V7Z",fill:"#2E2E2E"}));function Il(){return s(pp,{"data-testid":"not-found-page",children:v(he,{$align:"center",$direction:"column",children:[s(fp,{children:"404"}),s(xe,{children:"Page not found"}),s("p",{children:"\u0412\u0438\u0431\u0430\u0447\u0442\u0435, \u0430\u043B\u0435 \u043C\u0438 \u043D\u0435 \u0437\u043C\u043E\u0433\u043B\u0438 \u0437\u043D\u0430\u0439\u0442\u0438 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443, \u044F\u043A\u0443 \u0432\u0438 \u0448\u0443\u043A\u0430\u0454\u0442\u0435. \u0421\u0445\u043E\u0436\u0435, \u0449\u043E \u0441\u0442\u0430\u043B\u0430\u0441\u044F \u043F\u043E\u043C\u0438\u043B\u043A\u0430 \u0430\u0431\u043E \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430 \u0431\u0443\u043B\u0430 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0430. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456\u0441\u0442\u044C URL-\u0430\u0434\u0440\u0435\u0441\u0438 \u0430\u0431\u043E \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0456\u043D\u0448\u0435 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F."}),v(Ee,{children:[s(hp,{}),"\u041D\u0430\u0437\u0430\u0434"]})]})})}const Cp=g.div`
  width: 100%;
  height: calc(100vh - 96px);
  padding: 40px;

  @media screen and (max-width: 1279px) {
    padding: 20px;
  }

  @media screen and (max-width: 767px) {
    padding: 20px 16px;
  }
`,mp=g.div`
  width: 100%;
`;function gp(){const e=en("dogs"),[t,n]=f.exports.useState(e);return v(mp,{children:[s(zl,{setState:n,options:e}),s(Nl,{state:t,admin:!0})]})}const xp=e=>f.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M26 12H26.02M2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2H32C33.5913 2 35.1174 2.63214 36.2426 3.75736C37.3679 4.88258 38 6.4087 38 8V32C38 33.5913 37.3679 35.1174 36.2426 36.2426C35.1174 37.3679 33.5913 38 32 38H8C6.4087 38 4.88258 37.3679 3.75736 36.2426C2.63214 35.1174 2 33.5913 2 32V8Z",stroke:"#2E2E2E",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),f.exports.createElement("path",{d:"M2 27.9997L12 17.9997C13.856 16.2137 16.144 16.2137 18 17.9997L28 27.9997",stroke:"#2E2E2E",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),f.exports.createElement("path",{d:"M24 23.9997L26 21.9997C27.856 20.2137 30.144 20.2137 32 21.9997L38 27.9997",stroke:"#2E2E2E",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}));var vp="/Big-lapa/assets/photoIco.cede2c46.svg",yp="/Big-lapa/assets/Cross.8640a101.svg";const wp=g.div`
  padding-bottom: 80px;

  ${Pe} {
    margin-bottom: 0;
    @media (max-width: 767px) {
      text-align: center;
    }
  }

  ${({newCard:e})=>!e&&d1`
      ${bl} {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      ${n0} {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        button {
          position: absolute;
          background: ${z.colors.background} url(${yp}) center / 14px no-repeat;
          top: 4px;
          right: 4px;
          width: 18px;
          height: 18px;
          border-radius: 4px;
        }
      }

      ${W2} {
      }
    `}
`,Ep=g.div`
  max-width: 83px;
  margin-bottom: 20px;
  a {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: ${z.fontSizes.subheadline};
  }
`,kp=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
  max-width: 920px;

  label {
    font-size: ${z.fontSizes.subheadline};
    margin-bottom: 12px;
  }

  ${Ee} {
    width: 400px;
  }

  @media (max-width: 767px) {
    gap: 40px;

    ${Ee} {
      width: 100%;
    }
  }
`,Sp=g.div`
  max-width: 700px;
  width: 100%;
  align-self: start;
  display: flex;
  gap: 24px;

  @media (max-width: 1279px) {
    gap: 18px;
  }

  @media (max-width: 500px) {
    height: 262px;
    align-self: center;
    gap: 16px;
  }
`,bl=g.div`
  background-color: #fff;
  width: 68%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  aspect-ratio: 4.76 / 6;

  @media (max-width: 767px) {
    svg {
      width: 32px;
      height: 32px;
    }
    ${xe} {
      font-size: 16px;
    }
  }
`,Fp=g.div`
  width: 28%;
`,Dp=g.div`
  width: 90%;
  max-width: 194px;
  max-height: 312px;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 24px;

  @media (max-width: 1279px) {
    gap: 18px;
  }

  @media (max-width: 767px) {
    gap: 16px;
  }
`,n0=g.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #fff url(${vp}) center / 20px no-repeat;
`,Lp=g.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1439px) {
    flex-direction: column;
    gap: 30px;
  }
`,W2=g.div`
  width: 400px;
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    padding: 14px;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`,Ap=g.div`
  display: flex;
  gap: 85px;

  @media (max-width: 1439px) {
    gap: 50px;
    align-self: flex-start;
  }

  @media (max-width: 1279px) {
    column-gap: 124px;
    row-gap: 40px;
    flex-wrap: wrap;
  }
`,Rt=g.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 1279px) {
    &:nth-of-type(1) {
      margin-right: 63px;
    }
  }
`,d4=g.label`
  cursor: pointer;
  max-width: 220px;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 100%;
    transition: ${z.transitions.quick};
    padding: 8px 16px 8px 8px;
    font-size: ${z.fontSizes.buttonText};
    font-weight: ${z.fontWeights.semiBold};

    svg {
      min-width: 40px;
      min-height: 40px;
    }

    @media (max-width: 767px) {
      font-size: ${z.fontSizes.mobileButtonText};
      svg {
        min-width: 32px;
        min-height: 32px;
      }
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
      outline: 1px solid ${z.colors.dark};
      border-radius: 4px;
      z-index: 1;
    }
  }

  input[type='text'] {
    background-color: transparent;
    display: block;
    width: 100%;

    &::placeholder {
      color: ${z.colors.grey};
    }
  }
`,Bp=g.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  textarea {
    width: 100%;
    height: 330px;
    background-color: ${({theme:e})=>e.colors.background};
    caret-color: ${({theme:e})=>e.colors.yellow};
    color: ${({theme:e})=>e.colors.grey};
    padding: ${({theme:e})=>e.paddings.input};
    border: 1px solid ${({theme:e})=>e.colors.yellow};
    border-radius: 4px;
    resize: none;
    &:focus {
      border: 2px solid ${({theme:e})=>e.colors.yellow};
    }
  }
`;var Ri="/Big-lapa/assets/dog1.1423b256.png";const Pp=e=>f.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("g",{clipPath:"url(#clip0_1278_6081)"},f.exports.createElement("path",{d:"M5.3102 12.346L16.4562 22.966C16.6422 23.1433 16.8893 23.2422 17.1462 23.2422C17.4031 23.2422 17.6502 23.1433 17.8362 22.966L17.8482 22.954C17.9387 22.8681 18.0107 22.7646 18.0599 22.6499C18.1092 22.5353 18.1346 22.4118 18.1346 22.287C18.1346 22.1622 18.1092 22.0387 18.0599 21.9241C18.0107 21.8094 17.9387 21.7059 17.8482 21.62L7.3522 11.62L17.8482 1.624C17.9387 1.53805 18.0107 1.4346 18.0599 1.31993C18.1092 1.20527 18.1346 1.08179 18.1346 0.956999C18.1346 0.832212 18.1092 0.708731 18.0599 0.594065C18.0107 0.479399 17.9387 0.375944 17.8482 0.289999L17.8362 0.277998C17.6502 0.100708 17.4031 0.00180626 17.1462 0.00180626C16.8893 0.00180626 16.6422 0.100708 16.4562 0.277998L5.3102 10.898C5.21218 10.9914 5.13414 11.1037 5.08082 11.2282C5.02749 11.3526 5 11.4866 5 11.622C5 11.7574 5.02749 11.8914 5.08082 12.0158C5.13414 12.1403 5.21218 12.2526 5.3102 12.346Z",fill:"#2E2E2E"})),f.exports.createElement("defs",null,f.exports.createElement("clipPath",{id:"clip0_1278_6081"},f.exports.createElement("rect",{y:24,width:24,height:24,rx:12,transform:"rotate(-90 0 24)",fill:"white"})))),$p=e=>f.exports.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M24.0656 6.87357C24.0355 6.84904 23.9322 6.76536 23.8375 6.68463C22.5461 5.61731 20.8319 4.97 19.1611 4.92065C17.4223 4.87039 15.7821 5.40889 14.3466 6.50494C14.084 6.70717 13.4328 7.34974 13.2333 7.6039C12.6 8.4184 12.207 9.16517 11.9201 10.0992C11.277 12.1892 11.5881 14.4382 12.7874 16.3684C12.9469 16.6231 13.2462 17.04 13.3339 17.1278L13.3713 17.1652L12.0622 18.4743L10.753 19.7835L9.69871 18.7236L8.64582 17.6623L8.13195 18.1762L7.61669 18.6915L8.67378 19.7485L9.73086 20.8056L8.09966 22.4368L6.46845 24.0681L7.00059 24.6002L7.53273 25.1323L9.16394 23.5011L10.7951 21.8699L11.8522 22.927L12.9093 23.9841L13.4246 23.4688L13.9385 22.955L12.8772 21.9021L11.8173 20.8478L13.1264 19.5386L14.4356 18.2294L14.473 18.2668C14.5607 18.3546 14.9777 18.6539 15.2324 18.8134C17.1626 20.0127 19.4115 20.3238 21.5015 19.6806C22.4356 19.3938 23.1824 19.0008 23.9969 18.3675C24.251 18.168 24.8936 17.5168 25.0958 17.2542C25.6773 16.4915 26.0564 15.7701 26.3315 14.9054C27.0967 12.4977 26.5979 9.90431 24.971 7.8293C24.8266 7.64574 24.1919 6.97459 24.0656 6.87357ZM23.8077 8.69913C24.4744 9.52821 24.9246 10.5133 25.1174 11.5602C25.3867 13.0169 25.0824 14.5552 24.2696 15.8454C23.3831 17.2497 21.882 18.21 20.1601 18.4764C19.8386 18.5246 19.3736 18.5496 19.0527 18.534C16.9669 18.4365 15.0547 17.3055 13.9867 15.5402C13.042 13.9795 12.8107 12.1743 13.3432 10.5114C13.937 8.65483 15.2711 7.30343 17.1118 6.69383C18.8183 6.12925 20.6575 6.35539 22.2341 7.32437C22.5732 7.53466 22.7467 7.66327 23.1586 8.01076C23.2676 8.10303 23.6793 8.53991 23.8077 8.69913Z",fill:"#2E2E2E",stroke:"#2E2E2E"})),zp=e=>f.exports.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M26.1629 5.61876C26.0932 5.62551 25.6955 5.66771 25.2791 5.70821C24.8627 5.75041 24.2169 5.81623 23.843 5.85336C23.4691 5.89049 22.4018 5.99851 21.4722 6.09133C20.5425 6.18416 19.4922 6.2888 19.1387 6.32425C18.7869 6.35969 18.4946 6.39175 18.4912 6.39513C18.4827 6.40694 18.6424 7.94281 18.6543 7.95462C18.6611 7.96137 18.8634 7.94618 19.1047 7.92255C19.3461 7.89893 20.4151 7.79091 21.4807 7.68458C22.5463 7.57825 23.6051 7.47192 23.8328 7.44998C24.0623 7.42635 24.2509 7.40948 24.2543 7.41116C24.256 7.41454 23.7479 7.9293 23.1241 8.55715C19.8253 11.877 18.9824 12.7225 18.9688 12.7225C18.962 12.7225 18.8651 12.655 18.7563 12.574C17.7162 11.7926 16.4976 11.2677 15.1924 11.0348C14.4259 10.8998 13.5166 10.8812 12.7451 10.9842C10.935 11.2289 9.261 12.0474 8.00334 13.3031C7.17057 14.1352 6.56214 15.0753 6.13385 16.1909C5.72256 17.266 5.54241 18.4407 5.61549 19.5495C5.78545 22.1014 7.14678 24.4525 9.2474 25.8246C9.55842 26.0272 9.70118 26.1116 10.0088 26.2685C11.6556 27.1158 13.481 27.3926 15.2587 27.0685C16.5877 26.8255 17.8946 26.2348 18.9314 25.4078C19.4565 24.9892 19.8916 24.5487 20.2927 24.0305C21.2172 22.8339 21.7815 21.4331 21.9582 19.8955C21.9939 19.5765 22.0092 18.8339 21.9837 18.52C21.8954 17.3909 21.6149 16.3833 21.1187 15.3976C20.9028 14.9673 20.5561 14.4204 20.2655 14.0491L20.1074 13.85L20.3777 13.5782C20.5272 13.428 20.9538 12.9977 21.3294 12.6213C22.0415 11.9057 24.6418 9.28964 25.1245 8.80357C25.2791 8.64829 25.4049 8.52171 25.4066 8.52509C25.4083 8.52677 25.3998 8.63141 25.3879 8.75631C25.376 8.8812 25.3505 9.158 25.3318 9.37234C25.3131 9.585 25.2808 9.93268 25.2621 10.1436C25.2434 10.3563 25.2129 10.7006 25.1942 10.9116C25.082 12.1622 24.9222 13.9749 24.9188 14.039L24.9137 14.1133L25.704 14.1841C26.1391 14.2213 26.4977 14.2517 26.4977 14.2517C26.4994 14.25 26.5402 13.8128 26.5878 13.2795C26.6354 12.7462 26.6881 12.142 26.7067 11.9377C26.7254 11.7335 26.7628 11.3048 26.7917 10.9842C26.8189 10.6635 26.8512 10.3226 26.8597 10.2247C26.8682 10.1268 26.8988 9.78584 26.9277 9.46517C26.9566 9.14449 26.9855 8.80357 26.9957 8.70568C27.0042 8.60778 27.0365 8.26686 27.0636 7.94618C27.0925 7.62551 27.135 7.15631 27.1571 6.90315C27.1894 6.56222 27.1996 6.33268 27.1996 6.02213V5.60019L26.7458 5.60188C26.4943 5.60357 26.2326 5.61032 26.1629 5.61876ZM14.5551 12.5436C15.6649 12.6955 16.62 13.0466 17.4868 13.6221C18.928 14.5791 19.9239 16.0711 20.274 17.7943C20.3709 18.2787 20.393 18.5065 20.393 19.0685C20.3913 19.5968 20.3743 19.7892 20.291 20.2415C19.9817 21.8989 19.0095 23.428 17.6618 24.3732C16.812 24.9689 15.8654 25.3571 14.8627 25.5242C14.4531 25.5917 14.261 25.6069 13.7988 25.6069C13.141 25.6069 12.6533 25.5411 12.021 25.3639C9.37997 24.6213 7.52917 22.4255 7.22835 19.6761C7.18077 19.2508 7.20116 18.5571 7.27424 18.0896C7.55127 16.3192 8.5353 14.7242 9.96631 13.7251C10.9724 13.023 12.0788 12.6263 13.3484 12.5133C13.5285 12.4981 14.3681 12.5183 14.5551 12.5436Z",fill:"#2E2E2E",stroke:"#2E2E2E"})),On=e=>f.exports.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M24.6671 24.0775C24.5661 23.9657 24.5111 23.818 24.5136 23.6653C24.5162 23.5126 24.5761 23.3669 24.6808 23.2588C24.7858 23.1509 24.9274 23.0892 25.0756 23.0866C25.2239 23.0839 25.3674 23.1406 25.476 23.2446L27.1699 24.989V7.01101L25.476 8.75537C25.3674 8.85941 25.2239 8.91607 25.0756 8.91343C24.9274 8.91079 24.7858 8.84907 24.6808 8.74123C24.5761 8.63311 24.5162 8.48739 24.5136 8.3347C24.5111 8.18202 24.5661 8.03426 24.6671 7.92248L27.3378 5.17235C27.4451 5.06199 27.5906 5 27.7422 5C27.8939 5 28.0394 5.06199 28.1467 5.17235L30.8174 7.92248C30.8927 7.99451 30.9478 8.08613 30.9768 8.18769C31.0058 8.28924 31.0077 8.39698 30.9822 8.49954C30.9567 8.6021 30.9049 8.69568 30.8321 8.77044C30.7593 8.8452 30.6683 8.89835 30.5686 8.92431C30.4691 8.95057 30.3646 8.94873 30.266 8.91901C30.1675 8.88928 30.0785 8.83275 30.0085 8.75537L28.3145 7.01101V24.989L30.0085 23.2446C30.0785 23.1671 30.1674 23.1103 30.2661 23.0805C30.3647 23.0506 30.4693 23.0487 30.5689 23.0749C30.6685 23.1011 30.7594 23.1545 30.832 23.2295C30.9046 23.3044 30.9562 23.3982 30.9814 23.5008C31.0069 23.6032 31.0051 23.7108 30.9763 23.8123C30.9474 23.9138 30.8925 24.0054 30.8174 24.0775L28.1467 26.8277C28.0394 26.938 27.8939 27 27.7422 27C27.5906 27 27.4451 26.938 27.3378 26.8277L24.6671 24.0775Z",fill:"#2E2E2E"}),f.exports.createElement("path",{d:"M1 23.4349C1.15716 23.0643 1.43764 22.9313 1.83204 22.9494C2.30094 22.9709 2.77199 22.964 3.24175 22.952C3.88194 22.936 4.50843 22.9731 5.10538 23.3501C5.11052 23.2417 5.11608 23.1681 5.11651 23.0945C5.12336 21.9994 5.09082 20.9026 5.14306 19.8101C5.25782 17.3999 6.33909 15.4805 8.19073 13.9786C8.58384 13.6597 8.99193 13.3592 9.38547 13.0402C10.644 12.0205 11.2786 10.6947 11.3001 9.07012C11.3253 7.1576 12.6036 5.54553 14.4526 5.11421C14.755 5.04362 15.0718 5.01607 15.3827 5.00832C16.0234 4.99239 16.6644 5.01047 17.305 5.00014C17.5817 4.99584 17.7945 5.09054 17.9863 5.28812C18.5285 5.84599 19.0783 6.39698 19.6341 6.94194C19.7057 7.0121 19.8273 7.06419 19.9266 7.06548C20.6597 7.07581 21.3933 7.07021 22.1268 7.07151C22.6356 7.07237 22.8835 7.32289 22.8814 7.83944C22.8792 8.36159 22.919 8.88976 22.8561 9.40502C22.6805 10.838 21.5676 11.8001 20.1245 11.8152C19.6834 11.8199 19.2427 11.816 18.7648 11.816V12.0764C18.7648 13.6226 18.7554 15.1689 18.7674 16.7146C18.7811 18.4821 18.1581 19.9504 16.7993 21.0911C16.7445 21.1372 16.7051 21.2336 16.7038 21.3072C16.6957 21.8367 16.7038 22.3665 16.6965 22.896C16.6948 23.0178 16.7428 23.0673 16.8468 23.1155C17.6489 23.4888 18.0557 24.1276 18.075 25.013C18.0831 25.3996 18.0634 25.7865 18.0805 26.1722C18.0981 26.5691 17.9572 26.8506 17.5829 27H3.35052C3.31883 26.9867 3.28843 26.9673 3.25545 26.9617C2.43027 26.8123 1.78836 26.3806 1.37941 25.6484C1.20598 25.338 1.12376 24.9756 1 24.6372C1 24.236 1 23.8361 1 23.4349ZM16.7942 25.7009C16.7942 25.4697 16.798 25.2493 16.7933 25.0289C16.783 24.5559 16.5325 24.2881 16.0658 24.2433C15.6632 24.2046 15.4226 23.9614 15.4196 23.5572C15.4127 22.6623 15.4166 21.7674 15.4183 20.8724C15.4187 20.637 15.5044 20.4402 15.7018 20.3012C16.953 19.4201 17.5029 18.1989 17.4875 16.678C17.4695 14.8955 17.4832 13.113 17.4832 11.3305C17.4832 10.7485 17.7037 10.5298 18.284 10.5272C18.9674 10.5242 19.6521 10.5393 20.3343 10.5066C20.909 10.4786 21.422 10.0438 21.5384 9.48121C21.6125 9.12436 21.5963 8.749 21.622 8.36073C20.9197 8.36073 20.2662 8.35384 19.6127 8.36417C19.3434 8.36848 19.1361 8.27765 18.9494 8.08567C18.4013 7.52306 17.8454 6.9682 17.287 6.41549C17.2275 6.35651 17.1346 6.29926 17.0562 6.2984C16.4439 6.28979 15.8307 6.2786 15.2192 6.29926C13.9349 6.34274 12.7744 7.36594 12.634 8.64784C12.5509 9.40502 12.5749 10.1773 12.5967 10.9413C12.6087 11.3662 12.8729 11.6718 13.2695 11.8307C13.973 12.1126 14.7164 11.5991 14.7271 10.8178C14.7378 10.0305 14.7263 9.24274 14.7318 8.45543C14.7348 8.05553 15.0106 7.7654 15.3712 7.76282C15.7347 7.76024 16.0092 8.04735 16.0105 8.44897C16.0135 9.27201 16.0229 10.0959 16.0041 10.9185C15.9818 11.8952 15.3519 12.7355 14.4321 13.0613C13.5294 13.3812 12.5209 13.113 11.8854 12.3842C11.8443 12.3373 11.8015 12.2917 11.7741 12.2611C11.4988 12.6197 11.2697 13.0131 10.9519 13.3106C10.3284 13.8943 9.66938 14.4427 8.99964 14.973C7.2709 16.341 6.42559 18.1369 6.40375 20.3301C6.38662 22.0407 6.40032 23.7522 6.40032 25.4628C6.40032 25.5395 6.40032 25.6161 6.40032 25.7009H13.2326C13.084 24.9592 12.2366 24.2881 11.4084 24.2472C10.8136 24.2179 10.6282 24.0075 10.6115 23.4048C10.6008 23.0213 10.6158 22.6166 10.5006 22.2607C10.191 21.305 9.48268 20.8393 8.4922 20.7812C8.1038 20.7584 7.85586 20.4721 7.87513 20.1023C7.89311 19.7528 8.17702 19.4872 8.55086 19.5014C8.79838 19.5109 9.04974 19.5367 9.2904 19.594C10.8033 19.956 11.8482 21.2611 11.9004 22.8314C11.9026 22.8977 11.933 23.0049 11.9771 23.0213C12.1993 23.1048 12.4301 23.165 12.6725 23.2378C12.6725 23.1431 12.6725 23.0652 12.6725 22.9868C12.6725 22.2852 12.6704 21.5835 12.6734 20.8819C12.6747 20.5384 12.8661 20.2818 13.162 20.2108C13.5821 20.1097 13.952 20.4136 13.9533 20.8711C13.9568 21.952 13.9542 23.0333 13.9555 24.1142C13.9555 24.1844 13.9435 24.2726 13.9786 24.3225C14.2762 24.741 14.4745 25.2028 14.5854 25.7H16.7954L16.7942 25.7009ZM2.28981 24.2563C2.27953 24.939 2.72831 25.5403 3.36979 25.6621C3.6871 25.7224 4.01983 25.7022 4.34614 25.7108C4.59922 25.7172 4.8523 25.7121 5.10324 25.7121C5.13193 24.9812 4.61378 24.3269 3.91791 24.2657C3.38349 24.2188 2.84136 24.2563 2.28981 24.2563Z",fill:"#2E2E2E"}),f.exports.createElement("path",{d:"M24.6671 24.0775C24.5661 23.9657 24.5111 23.818 24.5136 23.6653C24.5162 23.5126 24.5761 23.3669 24.6808 23.2588C24.7858 23.1509 24.9274 23.0892 25.0756 23.0866C25.2239 23.0839 25.3674 23.1406 25.476 23.2446L27.1699 24.989V7.01101L25.476 8.75537C25.3674 8.85941 25.2239 8.91607 25.0756 8.91343C24.9274 8.91079 24.7858 8.84907 24.6808 8.74123C24.5761 8.63311 24.5162 8.48739 24.5136 8.3347C24.5111 8.18202 24.5661 8.03426 24.6671 7.92248L27.3378 5.17235C27.4451 5.06199 27.5906 5 27.7422 5C27.8939 5 28.0394 5.06199 28.1467 5.17235L30.8174 7.92248C30.8927 7.99451 30.9478 8.08613 30.9768 8.18769C31.0058 8.28924 31.0077 8.39698 30.9822 8.49954C30.9567 8.6021 30.9049 8.69568 30.8321 8.77044C30.7593 8.8452 30.6683 8.89835 30.5686 8.92431C30.4691 8.95057 30.3646 8.94873 30.266 8.91901C30.1675 8.88928 30.0785 8.83275 30.0085 8.75537L28.3145 7.01101V24.989L30.0085 23.2446C30.0785 23.1671 30.1674 23.1103 30.2661 23.0805C30.3647 23.0506 30.4693 23.0487 30.5689 23.0749C30.6685 23.1011 30.7594 23.1545 30.832 23.2295C30.9046 23.3044 30.9562 23.3982 30.9814 23.5008C31.0069 23.6032 31.0051 23.7108 30.9763 23.8123C30.9474 23.9138 30.8925 24.0054 30.8174 24.0775L28.1467 26.8277C28.0394 26.938 27.8939 27 27.7422 27C27.5906 27 27.4451 26.938 27.3378 26.8277L24.6671 24.0775Z",stroke:"#2E2E2E",strokeWidth:.5}),f.exports.createElement("path",{d:"M1 23.4349C1.15716 23.0643 1.43764 22.9313 1.83204 22.9494C2.30094 22.9709 2.77199 22.964 3.24175 22.952C3.88194 22.936 4.50843 22.9731 5.10538 23.3501C5.11052 23.2417 5.11608 23.1681 5.11651 23.0945C5.12336 21.9994 5.09082 20.9026 5.14306 19.8101C5.25782 17.3999 6.33909 15.4805 8.19073 13.9786C8.58384 13.6597 8.99193 13.3592 9.38547 13.0402C10.644 12.0205 11.2786 10.6947 11.3001 9.07012C11.3253 7.1576 12.6036 5.54553 14.4526 5.11421C14.755 5.04362 15.0718 5.01607 15.3827 5.00832C16.0234 4.99239 16.6644 5.01047 17.305 5.00014C17.5817 4.99584 17.7945 5.09054 17.9863 5.28812C18.5285 5.84599 19.0783 6.39698 19.6341 6.94194C19.7057 7.0121 19.8273 7.06419 19.9266 7.06548C20.6597 7.07581 21.3933 7.07021 22.1268 7.07151C22.6356 7.07237 22.8835 7.32289 22.8814 7.83944C22.8792 8.36159 22.919 8.88976 22.8561 9.40502C22.6805 10.838 21.5676 11.8001 20.1245 11.8152C19.6834 11.8199 19.2427 11.816 18.7648 11.816V12.0764C18.7648 13.6226 18.7554 15.1689 18.7674 16.7146C18.7811 18.4821 18.1581 19.9504 16.7993 21.0911C16.7445 21.1372 16.7051 21.2336 16.7038 21.3072C16.6957 21.8367 16.7038 22.3665 16.6965 22.896C16.6948 23.0178 16.7428 23.0673 16.8468 23.1155C17.6489 23.4888 18.0557 24.1276 18.075 25.013C18.0831 25.3996 18.0634 25.7865 18.0805 26.1722C18.0981 26.5691 17.9572 26.8506 17.5829 27H3.35052C3.31883 26.9867 3.28843 26.9673 3.25545 26.9617C2.43027 26.8123 1.78836 26.3806 1.37941 25.6484C1.20598 25.338 1.12376 24.9756 1 24.6372C1 24.236 1 23.8361 1 23.4349ZM16.7942 25.7009C16.7942 25.4697 16.798 25.2493 16.7933 25.0289C16.783 24.5559 16.5325 24.2881 16.0658 24.2433C15.6632 24.2046 15.4226 23.9614 15.4196 23.5572C15.4127 22.6623 15.4166 21.7674 15.4183 20.8724C15.4187 20.637 15.5044 20.4402 15.7018 20.3012C16.953 19.4201 17.5029 18.1989 17.4875 16.678C17.4695 14.8955 17.4832 13.113 17.4832 11.3305C17.4832 10.7485 17.7037 10.5298 18.284 10.5272C18.9674 10.5242 19.6521 10.5393 20.3343 10.5066C20.909 10.4786 21.422 10.0438 21.5384 9.48121C21.6125 9.12436 21.5963 8.749 21.622 8.36073C20.9197 8.36073 20.2662 8.35384 19.6127 8.36417C19.3434 8.36848 19.1361 8.27765 18.9494 8.08567C18.4013 7.52306 17.8454 6.9682 17.287 6.41549C17.2275 6.35651 17.1346 6.29926 17.0562 6.2984C16.4439 6.28979 15.8307 6.2786 15.2192 6.29926C13.9349 6.34274 12.7744 7.36594 12.634 8.64784C12.5509 9.40502 12.5749 10.1773 12.5967 10.9413C12.6087 11.3662 12.8729 11.6718 13.2695 11.8307C13.973 12.1126 14.7164 11.5991 14.7271 10.8178C14.7378 10.0305 14.7263 9.24274 14.7318 8.45543C14.7348 8.05553 15.0106 7.7654 15.3712 7.76282C15.7347 7.76024 16.0092 8.04735 16.0105 8.44897C16.0135 9.27201 16.0229 10.0959 16.0041 10.9185C15.9818 11.8952 15.3519 12.7355 14.4321 13.0613C13.5294 13.3812 12.5209 13.113 11.8854 12.3842C11.8443 12.3373 11.8015 12.2917 11.7741 12.2611C11.4988 12.6197 11.2697 13.0131 10.9519 13.3106C10.3284 13.8943 9.66938 14.4427 8.99964 14.973C7.2709 16.341 6.42559 18.1369 6.40375 20.3301C6.38662 22.0407 6.40032 23.7522 6.40032 25.4628C6.40032 25.5395 6.40032 25.6161 6.40032 25.7009H13.2326C13.084 24.9592 12.2366 24.2881 11.4084 24.2472C10.8136 24.2179 10.6282 24.0075 10.6115 23.4048C10.6008 23.0213 10.6158 22.6166 10.5006 22.2607C10.191 21.305 9.48268 20.8393 8.4922 20.7812C8.1038 20.7584 7.85586 20.4721 7.87513 20.1023C7.89311 19.7528 8.17702 19.4872 8.55086 19.5014C8.79838 19.5109 9.04974 19.5367 9.2904 19.594C10.8033 19.956 11.8482 21.2611 11.9004 22.8314C11.9026 22.8977 11.933 23.0049 11.9771 23.0213C12.1993 23.1048 12.4301 23.165 12.6725 23.2378C12.6725 23.1431 12.6725 23.0652 12.6725 22.9868C12.6725 22.2852 12.6704 21.5835 12.6734 20.8819C12.6747 20.5384 12.8661 20.2818 13.162 20.2108C13.5821 20.1097 13.952 20.4136 13.9533 20.8711C13.9568 21.952 13.9542 23.0333 13.9555 24.1142C13.9555 24.1844 13.9435 24.2726 13.9786 24.3225C14.2762 24.741 14.4745 25.2028 14.5854 25.7H16.7954L16.7942 25.7009ZM2.28981 24.2563C2.27953 24.939 2.72831 25.5403 3.36979 25.6621C3.6871 25.7224 4.01983 25.7022 4.34614 25.7108C4.59922 25.7172 4.8523 25.7121 5.10324 25.7121C5.13193 24.9812 4.61378 24.3269 3.91791 24.2657C3.38349 24.2188 2.84136 24.2563 2.28981 24.2563Z",stroke:"#2E2E2E",strokeWidth:.5})),Ii=e=>f.exports.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M2.002 4.2165C4.82005 3.87854 7.5874 3.49812 10.367 3.22563C13.1428 2.95403 15.9308 2.95403 18.7197 3.08673C21.5434 3.22032 24.3286 3.63525 27.1203 4.0139C27.7221 4.09529 28.3304 4.13953 28.9884 4.20588V4.58099C28.9884 8.02602 29.0184 11.471 28.9818 14.9152C28.9199 20.633 25.8099 27.3647 17.1333 29.7737C15.9251 30.109 14.8296 30.0595 13.6572 29.7056C10.2778 28.6847 7.38745 27.009 5.24153 24.3001C3.50208 22.1034 2.50985 19.6165 2.14469 16.9084C2.04424 16.1662 2.01139 15.4124 2.00857 14.663C1.99449 11.318 2.002 7.97294 2.002 4.627V4.2165ZM4.18086 5.77257C4.17899 5.81415 4.1696 5.90085 4.1696 5.98756C4.1696 8.91238 4.1405 11.8381 4.17805 14.7629C4.18086 18.5108 5.55413 21.141 6.73692 23.0308C8.52049 25.8777 11.2278 26.826 14.5537 27.6957C15.1967 27.8638 15.7928 27.8558 16.4367 27.6957C23.6142 25.9059 26.7905 21.2653 26.818 14.4639C26.8293 11.6718 26.8199 8.87876 26.8199 6.08576C26.8199 5.95925 26.8199 5.83185 26.8199 5.76815C19.7241 4.66316 11.2635 4.66139 4.17992 5.77257H4.18086Z",fill:"#2E2E2E"}),f.exports.createElement("path",{d:"M22.9173 12.6751C22.7416 12.2723 22.4499 11.9819 22.0733 11.8356L22.0682 11.8338C21.8968 11.769 21.7143 11.7359 21.5303 11.7361H21.51C20.648 11.7486 19.768 12.4556 19.3205 13.4954C18.9923 14.2558 18.9547 15.0736 19.2199 15.6832C19.3952 16.0863 19.6876 16.3767 20.0657 16.523L20.0699 16.5245C20.2413 16.5893 20.4237 16.6224 20.6078 16.6223C21.4781 16.6223 22.3673 15.9153 22.823 14.8617C23.147 14.1022 23.1828 13.285 22.9173 12.6751ZM19.473 17.16C18.9759 16.8718 18.506 16.599 18.199 16.1092C17.3522 14.7533 16.8408 13.9349 15.5 13.9349C14.1592 13.9349 13.6466 14.7533 12.7978 16.1092C12.4902 16.5997 12.0194 16.8727 11.5206 17.1622C10.9488 17.4938 10.358 17.8365 10.1029 18.5108C10.0038 18.7538 9.95384 19.013 9.9558 19.2742C9.9558 20.3721 10.8419 21.2653 11.9304 21.2653C12.4921 21.2653 13.0899 21.0775 13.7225 20.8787C14.3307 20.6876 14.9595 20.49 15.5032 20.49C16.0468 20.49 16.674 20.6876 17.28 20.8787C17.9113 21.0763 18.5063 21.2641 19.0696 21.2641C20.1566 21.2641 21.041 20.3709 21.041 19.273C21.0419 19.0116 20.9909 18.7524 20.8907 18.5095C20.6357 17.8346 20.0445 17.4917 19.473 17.16ZM12.1456 12.8614C12.5222 13.3174 13 13.5684 13.4912 13.5684C13.5582 13.5684 13.6252 13.5636 13.6915 13.554C14.7158 13.4087 15.3541 12.2024 15.1446 10.8056C15.057 10.2183 14.8228 9.67137 14.4874 9.26582C14.1114 8.81079 13.6329 8.56007 13.1421 8.56007C13.0751 8.56007 13.0081 8.56487 12.9418 8.57442C11.9175 8.71979 11.2792 9.92606 11.4887 11.3229C11.576 11.9092 11.8102 12.4556 12.1456 12.8614ZM17.3088 13.554C17.3751 13.5636 17.4421 13.5684 17.5091 13.5684C18.0006 13.5684 18.4781 13.3174 18.8547 12.8614C19.1898 12.4556 19.4227 11.9092 19.5113 11.3223C19.7208 9.92606 19.0825 8.71979 18.0582 8.57381C17.9919 8.56426 17.9249 8.55946 17.8579 8.55946C17.3671 8.56007 16.8886 8.81079 16.5126 9.26582C16.1772 9.67137 15.943 10.2183 15.8557 10.8062C15.6462 12.2024 16.2845 13.4087 17.3088 13.554ZM10.9301 16.5245L10.9346 16.523C11.3121 16.3767 11.6042 16.0866 11.7792 15.6838C12.0444 15.073 12.007 14.2561 11.6795 13.4957C11.226 12.4434 10.3371 11.7361 9.46783 11.7361C9.28375 11.7358 9.10125 11.769 8.92987 11.8338L8.92544 11.8353C8.54886 11.9804 8.25678 12.2717 8.08178 12.6745C7.8166 13.2853 7.85394 14.1022 8.18146 14.8626C8.63493 15.915 9.52384 16.6223 10.3931 16.6223C10.5769 16.6224 10.7591 16.5892 10.9301 16.5245Z",fill:"#2E2E2E"})),bi=e=>f.exports.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.exports.createElement("path",{d:"M12.6398 12.6398H19.3598V19.3598H12.6398V12.6398Z",fill:"#2E2E2E"}),f.exports.createElement("path",{d:"M24.9598 9.2798C24.9598 8.04444 23.9552 7.0398 22.7198 7.0398H20.4798V4.7998H18.2398V7.0398H13.7598V4.7998H11.5198V7.0398H9.2798C8.04444 7.0398 7.0398 8.04444 7.0398 9.2798V11.5198H4.7998V13.7598H7.0398V18.2398H4.7998V20.4798H7.0398V22.7198C7.0398 23.9552 8.04444 24.9598 9.2798 24.9598H11.5198V27.1998H13.7598V24.9598H18.2398V27.1998H20.4798V24.9598H22.7198C23.9552 24.9598 24.9598 23.9552 24.9598 22.7198V20.4798H27.1998V18.2398H24.9598V13.7598H27.1998V11.5198H24.9598V9.2798ZM9.2798 22.7198V9.2798H22.7198L22.722 22.7198H9.2798Z",fill:"#2E2E2E"}));function Hl({newCard:e}){const t={name:"\u0414\u0436\u0443\u043B\u0456",age:"10 \u043C\u0456\u0441\u044F\u0446\u0456\u0432",sex:"\u0414\u0456\u0432\u0447\u0438\u043D\u043A\u0430",size:"\u0412\u0435\u043B\u0438\u043A\u0438\u0439",breed:"\u041B\u0430\u0431\u0440\u0430\u0434\u043E\u0440",chip:"\u0422\u0430\u043A",description:`\u0414\u0436\u0443\u043B\u0456 - \u0447\u0430\u0440\u0456\u0432\u043D\u0430 \u0442\u0430 \u0435\u043D\u0435\u0440\u0433\u0456\u0439\u043D\u0430 \u0441\u043E\u0431\u0430\u0447\u043A\u0430, \u044F\u043A\u0430 \u0432\u0456\u0434\u043C\u0456\u043D\u043D\u043E \u043B\u0430\u0434\u043D\u0430\u0454 \u0437 \u0456\u043D\u0448\u0438\u043C\u0438 \u0441\u043E\u0431\u0430\u043A\u0430\u043C\u0438 \u0456 \u043B\u044E\u0434\u044C\u043C\u0438. \u0412\u043E\u043D\u0430 \u043E\u0431\u043E\u0436\u043D\u044E\u0454 \u043F\u0440\u043E\u0433\u0443\u043B\u044F\u043D\u043A\u0438 \u0456 \u0433\u0440\u0430\u0442\u0438\u0441\u044F \u0437 \u043C'\u044F\u0447\u0438\u043A\u043E\u043C.

    \u0414\u0436\u0443\u043B\u0456 \u043C\u0430\u0454 \u043F\u0435\u0432\u043D\u0456 \u043C\u0435\u0434\u0438\u0447\u043D\u0456 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438, \u0456 \u0434\u043B\u044F \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438 \u0457\u0457 \u0437\u0434\u043E\u0440\u043E\u0432'\u044F \u0457\u0439 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0456 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u0456 \u043B\u0456\u043A\u0438 \u0442\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434. \u041D\u0435\u0437\u0432\u0430\u0436\u0430\u044E\u0447\u0438 \u043D\u0430 \u0441\u0432\u043E\u0457 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438, \u0414\u0436\u0443\u043B\u0456 \u0454 \u043D\u0430\u0434\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E \u043B\u0430\u0433\u0456\u0434\u043D\u043E\u044E \u0442\u0430 \u043B\u044E\u0431\u043B\u044F\u0447\u043E\u044E \u0441\u043E\u0431\u0430\u043A\u043E\u044E.

    \u0412\u0430\u0448\u0456 \u043F\u043E\u0436\u0435\u0440\u0442\u0432\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0443\u0442\u044C \u043D\u0430\u043C \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0414\u0436\u0443\u043B\u0456 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u043C\u0438 \u043B\u0456\u043A\u0430\u043C\u0438, \u043C\u0435\u0434\u0438\u0447\u043D\u0438\u043C \u0442\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u043C \u0434\u043E\u0433\u043B\u044F\u0434\u043E\u043C.
    \u0412\u0430\u0448\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u0434\u043E\u0437\u0432\u043E\u043B\u0438\u0442\u044C \u043D\u0430\u043C \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u0432\u0441\u0435 \u043C\u043E\u0436\u043B\u0438\u0432\u0435 \u0434\u043B\u044F \u043F\u043E\u043B\u0456\u043F\u0448\u0435\u043D\u043D\u044F \u0457\u0457 \u0441\u0442\u0430\u043D\u0443 \u0456 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0457\u0439 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0456 \u0443\u043C\u043E\u0432\u0438 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F.`};return v(wp,{newCard:e,children:[s(Ep,{children:v(e1,{to:"/admin",children:[s(Pp,{}),"\u041D\u0430\u0437\u0430\u0434"]})}),v(kp,{children:[s(Pe,{children:e?"\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u043D\u043E\u0432\u043E\u0457 \u043A\u0430\u0440\u0442\u043A\u0438":"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F"}),v(Sp,{children:[s(bl,{children:e?v(Z0,{children:[s(xp,{}),s(xe,{children:"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u043E\u0442\u043E"})]}):s("img",{src:Ri,alt:"dog1"})}),s(Fp,{children:v(Dp,{children:[s(n0,{children:e?s(Z0,{}):v(Z0,{children:[s("img",{src:Ri,alt:"dog1"}),s("button",{})]})}),s(n0,{}),s(n0,{}),s(n0,{}),s(n0,{}),s(n0,{})]})})]}),v(Lp,{children:[v(W2,{children:[s("label",{htmlFor:"dog-name",children:"\u041A\u043B\u0438\u0447\u043A\u0430 \u0441\u043E\u0431\u0430\u043A\u0438:"}),s(it,{type:"text",placeholder:e?"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043B\u0438\u0447\u043A\u0443 \u0441\u043E\u0431\u0430\u043A\u0438":t.name,id:"dog-name"})]}),v(W2,{children:[s("label",{htmlFor:"dog-age",children:"\u0412\u0456\u043A \u0441\u043E\u0431\u0430\u043A\u0438:"}),s(it,{type:"text",placeholder:e?"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0456\u043A \u0441\u043E\u0431\u0430\u043A\u0438":t.age,id:"dog-age"})]})]}),v(Ap,{children:[v(Rt,{children:[v(d4,{children:[s("input",{type:"radio",name:"sex",defaultChecked:!e}),v("span",{children:[s($p,{})," \u0414\u0456\u0432\u0447\u0438\u043D\u043A\u0430"]})]}),v(d4,{children:[s("input",{type:"radio",name:"sex"}),v("span",{children:[s(zp,{}),"\u0425\u043B\u043E\u043F\u0447\u0438\u043A"]})]})]}),v(Rt,{children:[v(d4,{children:[s("input",{type:"radio",name:"size",defaultChecked:!e}),v("span",{children:[s(On,{}),"\u0412\u0435\u043B\u0438\u043A\u0438\u0439"]})]}),v(d4,{children:[s("input",{type:"radio",name:"size"}),v("span",{children:[s(On,{}),"\u0421\u0435\u0440\u0435\u0434\u043D\u0456\u0439"]})]}),v(d4,{children:[s("input",{type:"radio",name:"size"}),v("span",{children:[s(On,{}),"\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439"]})]})]}),v(Rt,{children:[v(d4,{children:[s("input",{type:"radio",name:"breed",defaultChecked:!e}),v("span",{children:[s(Ii,{}),"\u0411\u0435\u0437 \u043F\u043E\u0440\u043E\u0434\u0438"]})]}),v(d4,{children:[s("input",{type:"radio",name:"breed"}),v("span",{children:[s(Ii,{}),s("input",{type:"text",placeholder:e?"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0456\u043A \u0441\u043E\u0431\u0430\u043A\u0438":t.breed})]})]})]}),v(Rt,{children:[v(d4,{children:[s("input",{type:"radio",name:"chip",defaultChecked:!e}),v("span",{children:[s(bi,{}),"\u0422\u0430\u043A"]})]}),v(d4,{children:[s("input",{type:"radio",name:"chip"}),v("span",{children:[s(bi,{}),"H\u0456"]})]})]})]}),v(Bp,{children:[s("label",{htmlFor:"dog-about",children:"\u041F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D\u043A\u0443:"}),s("textarea",{placeholder:"\u041E\u043F\u0438\u0448\u0456\u0442\u044C \u0442\u0432\u0430\u0440\u0438\u043D\u043A\u0443",id:"dog-about",defaultValue:e?"":t.description})]}),s(Ee,{children:e?"\u0414\u043E\u0434\u0430\u0442\u0438 \u043A\u0430\u0440\u0442\u043A\u0443":"\u041E\u043D\u043E\u0432\u0438\u0442\u0438 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E"})]})]})}function Mp(){return s(Hl,{newCard:!0})}function Tp(){return s(Hl,{newCard:!1})}const Ol=g.form`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`,_l=g(Ee)`
  width: 100%;
`,jl=g(J)`
  width: 100%;
  max-width: 400px;
  padding: 0;
`,Vl=g(Pe)`
  width: 100%;
  text-align: center;
`,Np=g(it)`
  width: 100%;
  margin-bottom: 32px;
`,Rp=g.p`
  /* Desktop & 1280 px/Subheadline */
  font-size: 16px;
  margin-bottom: 12px;
`;function W0(e){const{placeholder:t,label:n}=e;return v(Z0,{children:[s(Rp,{children:n}),s(Np,{placeholder:t||""})]})}function Ip(){return v(Ol,{children:[s(Vl,{children:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F"}),s("p",{style:{fontWeight:"700",marginBottom:"20px"},children:"\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C"}),v(jl,{children:[s(W0,{label:"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0441\u0442\u0430\u0440\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",placeholder:"*********"}),s(W0,{label:"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",placeholder:"*********"}),s(W0,{label:"\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044C \u043D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",placeholder:"*********"}),s(_l,{children:"\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438"})]})]})}function bp(e,t){(async()=>{if(e==="contacts")try{const u=await fetch("https://big-lapa-api-production.up.railway.app/api/main/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(u.ok){const r=await u.json();console.log(r)}else console.error("Error:",u.status)}catch(u){console.error("Error:",u)}})()}function Hp(){const e=en("contacts"),t=()=>{bp("contacts",{first_phoneNumber:"+380 068 123 111",second_phoneNumber:"+380 068 777 777",email:"email@one.com"})};return v(Ol,{onSubmit:()=>t(),children:[s(Vl,{children:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u0438 \u0442\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430"}),v(jl,{children:[s(W0,{label:"\u041F\u0435\u0440\u0448\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443",placeholder:e==null?void 0:e.first_phoneNumber}),s(W0,{label:"\u0414\u0440\u0443\u0433\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443",placeholder:e==null?void 0:e.second_phoneNumber}),s(W0,{label:"\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430",placeholder:e==null?void 0:e.email}),s(_l,{type:"submit",children:"\u041E\u043D\u043E\u0432\u0438\u0442\u0438"})]})]})}function Op(){return s("div",{children:"Reports"})}function _p(){return s("div",{children:"Sliders"})}function jp(){return s("div",{children:"Partners"})}function Vp(){return s(Cp,{children:v(ol,{children:[s(re,{index:!0,path:"/",element:s(gp,{})}),s(re,{path:"/new-card",element:s(Mp,{})}),s(re,{path:"/edit-card",element:s(Tp,{})}),s(re,{path:"/partners",element:s(jp,{})}),s(re,{path:"/sliders",element:s(_p,{})}),s(re,{path:"/reports",element:s(Op,{})}),s(re,{path:"/contacts",element:s(Hp,{})}),s(re,{path:"/settings",element:s(Ip,{})}),s(re,{path:"*",element:s(Il,{})})]})})}const Up=e=>f.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:64,height:48,viewBox:"0 0 64 48",fill:"none",...e},f.exports.createElement("path",{d:"M11.2391 7.31769C11.2391 8.47842 10.9502 9.53822 10.3726 10.4971C9.79489 11.4391 9.02184 12.2298 8.05339 12.869C8.5631 12.9699 9.00485 13.1466 9.37863 13.3989C9.75242 13.6344 10.0582 13.9288 10.2961 14.2821C10.551 14.6353 10.7379 15.0391 10.8568 15.4933C10.9927 15.9307 11.0607 16.3933 11.0607 16.8811C11.0607 17.84 10.8313 18.6811 10.3726 19.4044C9.93082 20.111 9.35315 20.6997 8.63956 21.1708C7.92596 21.625 7.12742 21.9698 6.24393 22.2053C5.37742 22.424 4.51092 22.5334 3.64441 22.5334C3.16869 22.5334 2.69296 22.4997 2.21723 22.4324C1.7415 22.3651 1.29126 22.2474 0.866504 22.0792C0.713592 22.0287 0.586164 21.8268 0.484223 21.4736C0.382281 21.1035 0.29733 20.6577 0.229369 20.1362C0.178398 19.6147 0.135922 19.0512 0.101942 18.4456C0.0679611 17.84 0.0424757 17.2596 0.0254854 16.7045C0.00849513 16.1493 0 15.6615 0 15.2409C0 14.8204 0 14.526 0 14.3578C0 13.769 0 13.1802 0 12.5914C0 11.9858 0.0169903 11.3887 0.0509708 10.7999C0.0509708 10.6485 0.0509708 10.413 0.0509708 10.0933C0.0679611 9.77373 0.0764562 9.42046 0.0764562 9.03355C0.0934465 8.62982 0.110437 8.20926 0.127427 7.77188C0.161408 7.33451 0.195388 6.93078 0.229369 6.56069C0.28034 6.17378 0.339805 5.84575 0.407766 5.57659C0.492718 5.30744 0.586165 5.13921 0.688106 5.07193C1.07888 4.81959 1.51213 4.58408 1.98786 4.36539C2.46359 4.12988 2.95631 3.92802 3.46602 3.75979C3.97573 3.59157 4.48543 3.45699 4.99514 3.35606C5.50485 3.25513 5.98907 3.20466 6.44781 3.20466C7.07645 3.20466 7.67961 3.29718 8.25728 3.48222C8.85194 3.65045 9.36164 3.91119 9.7864 4.26446C10.2281 4.61773 10.5764 5.0551 10.8313 5.57659C11.1031 6.08126 11.2391 6.66162 11.2391 7.31769ZM7.00849 8.65505C7.00849 8.36907 6.91504 8.1588 6.72815 8.02422C6.55825 7.88964 6.32888 7.82235 6.04004 7.82235C5.80218 7.82235 5.54733 7.87282 5.27548 7.97375C5.02063 8.07468 4.79975 8.20926 4.61286 8.37749C4.56189 8.42795 4.51092 8.57094 4.45995 8.80645C4.42597 9.04196 4.39199 9.31112 4.35801 9.61392C4.34102 9.89989 4.32403 10.1775 4.30704 10.4466C4.30704 10.6989 4.30704 10.8672 4.30704 10.9513C4.30704 10.9849 4.30704 11.0438 4.30704 11.1279C4.30704 11.1952 4.30704 11.2709 4.30704 11.355C4.32403 11.4391 4.34102 11.5148 4.35801 11.5821C4.375 11.6494 4.40048 11.683 4.43446 11.683C4.7233 11.683 5.02063 11.5821 5.32645 11.3802C5.63228 11.1616 5.90412 10.9008 6.14199 10.598C6.39684 10.2784 6.60072 9.94195 6.75364 9.58868C6.92354 9.23542 7.00849 8.92421 7.00849 8.65505ZM6.90655 15.9475C6.90655 15.6615 6.80461 15.4596 6.60072 15.3419C6.39684 15.2241 6.16747 15.1652 5.91262 15.1652C5.67475 15.1652 5.4199 15.2241 5.14805 15.3419C4.8932 15.4428 4.68082 15.569 4.51092 15.7204C4.45995 15.754 4.41747 15.8381 4.38349 15.9727C4.3665 16.1073 4.34951 16.2587 4.33252 16.4269C4.33252 16.5783 4.32403 16.7297 4.30704 16.8811C4.30704 17.0157 4.30704 17.1082 4.30704 17.1587C4.30704 17.1923 4.30704 17.2596 4.30704 17.3605C4.30704 17.4615 4.30704 17.5708 4.30704 17.6886C4.32403 17.7895 4.34102 17.8904 4.35801 17.9914C4.39199 18.0755 4.42597 18.1175 4.45995 18.1175C4.69781 18.1175 4.96116 18.0502 5.25 17.9157C5.53883 17.7811 5.80218 17.6129 6.04004 17.411C6.2949 17.2091 6.49878 16.982 6.65169 16.7297C6.8216 16.4605 6.90655 16.1998 6.90655 15.9475Z",fill:"#758650"}),f.exports.createElement("path",{d:"M21.2039 5.09716C21.2039 5.41678 21.1274 5.70275 20.9745 5.95509C20.8386 6.20742 20.6517 6.42611 20.4138 6.61115C20.176 6.77938 19.9126 6.92236 19.6238 7.04012C19.3349 7.15787 19.0546 7.24199 18.7828 7.29245C18.7488 9.19336 18.6723 11.027 18.5534 12.7933C18.4514 14.5596 18.2815 16.3848 18.0437 18.2689H18.1966C18.4684 18.2689 18.7318 18.3026 18.9866 18.3699C19.2585 18.4203 19.4963 18.5213 19.7002 18.6727C19.9211 18.8072 20.091 18.9839 20.2099 19.2026C20.3459 19.4044 20.4138 19.6568 20.4138 19.9596C20.4138 20.3465 20.2864 20.6829 20.0315 20.9689C19.7937 21.2549 19.4709 21.4988 19.0631 21.7007C18.6723 21.9025 18.2306 22.0708 17.7378 22.2053C17.2451 22.3399 16.7524 22.4408 16.2597 22.5081C15.767 22.5922 15.2997 22.6511 14.858 22.6848C14.4163 22.7184 14.0595 22.7352 13.7876 22.7352C13.5837 22.7352 13.3289 22.7268 13.023 22.71C12.7342 22.6932 12.4539 22.6427 12.182 22.5586C11.9272 22.4745 11.7063 22.3483 11.5194 22.1801C11.3325 22.0119 11.2391 21.7848 11.2391 21.4988C11.2391 21.1455 11.3155 20.8343 11.4684 20.5652C11.6044 20.2792 11.7913 20.0269 12.0291 19.8082C12.267 19.5895 12.5303 19.4128 12.8192 19.2783C13.125 19.1437 13.4308 19.0428 13.7366 18.9755C13.8556 18.0502 13.966 17.1334 14.068 16.225C14.1699 15.2998 14.2379 14.3662 14.2718 13.4241C14.3058 12.4653 14.3398 11.5232 14.3738 10.598C14.4078 9.65597 14.4417 8.71393 14.4757 7.77188C14.3568 7.78871 14.2463 7.80553 14.1444 7.82235C14.0425 7.82235 13.949 7.82235 13.8641 7.82235C13.6262 7.82235 13.3714 7.79712 13.0995 7.74665C12.8277 7.69619 12.5728 7.61207 12.3349 7.49432C12.0971 7.35974 11.8932 7.19993 11.7233 7.01488C11.5704 6.82984 11.4939 6.59434 11.4939 6.30836C11.4939 5.7364 11.7318 5.26538 12.2075 4.89529C12.7002 4.5252 13.2779 4.23923 13.9405 4.03736C14.6201 3.83549 15.3082 3.70092 16.0048 3.63363C16.7014 3.54952 17.2621 3.50746 17.6869 3.50746C17.9247 3.50746 18.2391 3.52428 18.6298 3.55793C19.0206 3.59157 19.4029 3.66727 19.7767 3.78502C20.1675 3.90278 20.4988 4.06259 20.7706 4.26446C21.0595 4.46633 21.2039 4.74389 21.2039 5.09716Z",fill:"#758650"}),f.exports.createElement("path",{d:"M32.9781 16.1746C32.8252 16.9316 32.5789 17.7222 32.2391 18.5465C31.9162 19.354 31.4915 20.0941 30.9648 20.767C30.4551 21.4399 29.8434 21.9866 29.1298 22.4072C28.4162 22.8446 27.6007 23.0633 26.6832 23.0633C26.0036 23.0633 25.392 22.9287 24.8483 22.6595C24.3046 22.3904 23.8119 22.0287 23.3701 21.5745C22.9284 21.1203 22.5461 20.5988 22.2233 20.01C21.9005 19.4213 21.6286 18.8157 21.4077 18.1932C21.2039 17.554 21.051 16.9232 20.949 16.3007C20.8471 15.6783 20.7961 15.098 20.7961 14.5596C20.7961 13.8026 20.8641 12.9952 21 12.1372C21.1529 11.2625 21.3738 10.4046 21.6626 9.56345C21.9514 8.70552 22.3167 7.88964 22.7585 7.11582C23.2002 6.32518 23.7184 5.63547 24.3131 5.04669C24.9247 4.44109 25.6043 3.96166 26.3519 3.60839C27.1165 3.23831 27.966 3.05326 28.9005 3.05326C29.4951 3.05326 30.0473 3.17101 30.557 3.40652C31.0667 3.62521 31.5085 3.92801 31.8823 4.31492C32.256 4.68501 32.5449 5.1308 32.7488 5.65229C32.9696 6.17377 33.0801 6.7205 33.0801 7.29245V7.51955C33.0801 7.82235 33.0631 8.20085 33.0291 8.65505C33.0121 9.09243 32.9357 9.51299 32.7997 9.91672C32.6638 10.3205 32.4599 10.6737 32.1881 10.9765C31.9162 11.2625 31.534 11.4055 31.0412 11.4055C30.4466 11.4055 29.9963 11.2709 29.6905 11.0017C29.3847 10.7326 29.2318 10.2868 29.2318 9.66438C29.2318 9.42887 29.2403 9.19336 29.2573 8.95785C29.2743 8.72234 29.2827 8.48683 29.2827 8.25132C29.2827 7.89805 29.2233 7.6289 29.1043 7.44385C28.9854 7.24199 28.7391 7.14105 28.3653 7.14105C27.9405 7.14105 27.5582 7.27563 27.2184 7.54478C26.8786 7.81394 26.5813 8.16721 26.3264 8.60459C26.0716 9.04196 25.8507 9.53822 25.6638 10.0933C25.4769 10.6485 25.324 11.212 25.2051 11.784C25.0861 12.3391 25.0012 12.8774 24.9502 13.3989C24.8993 13.9204 24.8738 14.3662 24.8738 14.7363C24.8738 15.0391 24.8908 15.3923 24.9247 15.7961C24.9587 16.183 25.0267 16.5615 25.1286 16.9316C25.2476 17.2848 25.4175 17.5876 25.6383 17.84C25.8592 18.0923 26.148 18.2185 26.5048 18.2185C27.1165 18.2185 27.6092 18.0334 27.983 17.6633C28.3568 17.2764 28.6116 16.7886 28.7476 16.1998C28.5097 16.1662 28.2718 16.1157 28.034 16.0484C27.8131 15.9643 27.6007 15.8549 27.3968 15.7204C27.2099 15.569 27.057 15.3923 26.9381 15.1905C26.8192 14.9718 26.7597 14.7195 26.7597 14.4335C26.7597 13.912 26.9381 13.5083 27.2949 13.2223C27.6517 12.9195 28.0679 12.6924 28.5437 12.541C29.0364 12.3896 29.5376 12.2971 30.0473 12.2634C30.557 12.2129 30.9648 12.1877 31.2706 12.1877C31.4915 12.1877 31.8143 12.2045 32.2391 12.2382C32.6638 12.2718 33.0801 12.3475 33.4878 12.4653C33.9126 12.5662 34.2779 12.7176 34.5837 12.9195C34.8895 13.1213 35.0424 13.3821 35.0424 13.7017C35.0424 14.341 34.864 14.8961 34.5073 15.3671C34.1674 15.8213 33.6577 16.0905 32.9781 16.1746Z",fill:"#758650"}),f.exports.createElement("path",{d:"M12.1311 43.7103C12.1311 44.1309 11.9527 44.5262 11.5959 44.8963C11.2561 45.2664 10.8058 45.6028 10.2451 45.9056C9.70146 46.2084 9.0898 46.4776 8.41019 46.7131C7.73058 46.9318 7.05946 47.1168 6.39684 47.2682C5.73422 47.4365 5.10558 47.5626 4.51092 47.6467C3.93325 47.7308 3.47451 47.7729 3.13471 47.7729C2.81189 47.7729 2.46359 47.7393 2.08981 47.672C1.73301 47.6215 1.43568 47.4953 1.19782 47.2935C1.0619 47.1925 0.942964 46.9654 0.841023 46.6122C0.739081 46.2589 0.637137 45.8383 0.535196 45.3505C0.450244 44.8627 0.373788 44.3412 0.305827 43.786C0.237866 43.2141 0.178398 42.659 0.127427 42.1206C0.0934468 41.5823 0.0594706 41.0861 0.0254901 40.6319C0.00849982 40.1777 0 39.8244 0 39.5721C0 39.1515 0.00849982 38.6469 0.0254901 38.0581C0.0594706 37.4525 0.101943 36.8132 0.152914 36.1404C0.203884 35.4506 0.271844 34.7525 0.356796 34.046C0.441747 33.3395 0.535195 32.675 0.637137 32.0526C0.756069 31.4133 0.891989 30.8414 1.0449 30.3367C1.2148 29.832 1.39321 29.4367 1.5801 29.1507C1.90292 28.6965 2.31068 28.4694 2.8034 28.4694C3.1432 28.4694 3.43204 28.5872 3.6699 28.8227C3.90777 29.0414 4.09466 29.3358 4.23058 29.7059C4.38349 30.0591 4.49393 30.4629 4.56189 30.9171C4.64685 31.3544 4.70631 31.7918 4.74029 32.2292C4.77427 32.6666 4.79126 33.0703 4.79126 33.4404C4.79126 33.8105 4.79126 34.1049 4.79126 34.3236C4.79126 35.6357 4.75728 36.9394 4.68932 38.2347C4.63835 39.5132 4.61286 40.8085 4.61286 42.1206V43.1047C5.37743 42.8692 6.20995 42.6505 7.11044 42.4487C8.01092 42.23 8.86893 42.1206 9.68447 42.1206C9.9733 42.1206 10.2621 42.1375 10.551 42.1711C10.8568 42.2048 11.1201 42.2805 11.341 42.3982C11.5789 42.4991 11.7658 42.659 11.9017 42.8776C12.0546 43.0795 12.1311 43.3571 12.1311 43.7103Z",fill:"#758650"}),f.exports.createElement("path",{d:"M25.6383 43.458C25.6383 43.7945 25.6043 44.1982 25.5364 44.6692C25.4854 45.1402 25.375 45.5944 25.2051 46.0318C25.0352 46.4524 24.8058 46.814 24.517 47.1168C24.2281 47.4028 23.8459 47.5458 23.3701 47.5458C22.7415 47.5458 22.2658 47.3187 21.943 46.8645C21.6371 46.4103 21.4163 45.872 21.2803 45.2496C21.1444 44.6103 21.0595 43.9627 21.0255 43.3066C21.0085 42.6505 20.9915 42.1291 20.9745 41.7421C19.7512 41.944 18.5449 42.1206 17.3556 42.272C17.3216 42.659 17.2451 43.1384 17.1262 43.7103C17.0243 44.2823 16.8544 44.8374 16.6165 45.3757C16.3956 45.8972 16.0983 46.3514 15.7245 46.7383C15.3677 47.1253 14.926 47.3187 14.3993 47.3187C13.9915 47.3187 13.6687 47.1757 13.4308 46.8897C13.2099 46.5869 13.04 46.2337 12.9211 45.8299C12.8022 45.4262 12.7257 45.0141 12.6917 44.5935C12.6748 44.1561 12.6663 43.7945 12.6663 43.5085C12.6663 42.5496 12.7427 41.6076 12.8956 40.6823C13.0485 39.7403 13.2269 38.8067 13.4308 37.8815C13.5328 37.3936 13.6687 36.8217 13.8386 36.1656C14.0085 35.5095 14.2124 34.8366 14.4502 34.1469C14.7051 33.4404 14.9939 32.7507 15.3167 32.0778C15.6565 31.3881 16.0388 30.7741 16.4636 30.2358C16.8883 29.6975 17.3726 29.2601 17.9163 28.9236C18.4599 28.5872 19.0631 28.419 19.7257 28.419C20.3713 28.419 20.932 28.562 21.4078 28.8479C21.8835 29.1339 22.2997 29.5124 22.6565 29.9834C23.0133 30.4545 23.3107 30.9928 23.5485 31.5984C23.7864 32.1871 23.9818 32.7927 24.1347 33.4152C24.3046 34.0208 24.4405 34.618 24.5425 35.2067C24.6614 35.7955 24.7633 36.317 24.8483 36.7712C25.0692 37.8646 25.256 38.9749 25.409 40.102C25.5619 41.2122 25.6383 42.3309 25.6383 43.458ZM20.7196 37.3263C20.7196 37.1245 20.7027 36.7964 20.6687 36.3422C20.6517 35.8712 20.6007 35.4086 20.5158 34.9544C20.4308 34.4834 20.2949 34.0712 20.108 33.718C19.9381 33.3479 19.7002 33.1628 19.3944 33.1628C19.2245 33.1628 19.0631 33.2806 18.9102 33.5161C18.7573 33.7348 18.6213 34.0208 18.5024 34.374C18.3835 34.7105 18.273 35.089 18.1711 35.5095C18.0862 35.9301 18.0097 36.3338 17.9417 36.7207C17.8738 37.1076 17.8228 37.4609 17.7888 37.7805C17.7548 38.0833 17.7294 38.302 17.7124 38.4366C18.7318 38.3525 19.7342 38.2263 20.7196 38.0581V37.3263Z",fill:"#758650"}),f.exports.createElement("path",{d:"M39.1201 33.6675C39.1201 34.5759 38.9162 35.4675 38.5085 36.3422C38.1177 37.217 37.591 38.0076 36.9284 38.7141C36.2657 39.4039 35.5097 39.9758 34.6602 40.43C33.8107 40.8674 32.9357 41.1113 32.0352 41.1618C32.0182 41.4646 32.0012 41.8515 31.9842 42.3225C31.9842 42.7767 31.9587 43.2561 31.9077 43.7608C31.8568 44.2655 31.7803 44.7701 31.6784 45.2748C31.5934 45.7795 31.4575 46.2337 31.2706 46.6374C31.1007 47.0411 30.8713 47.3692 30.5825 47.6215C30.3107 47.8738 29.9709 48 29.5631 48C29.0874 48 28.7051 47.8402 28.4162 47.5206C28.1444 47.2178 27.932 46.8477 27.7791 46.4103C27.6432 45.9729 27.5497 45.5187 27.4988 45.0477C27.4478 44.5599 27.4138 44.1477 27.3968 43.8113C27.3628 43.3234 27.3374 42.844 27.3204 42.373C27.3204 41.902 27.3204 41.4225 27.3204 40.9347C27.3204 40.716 27.3204 40.3123 27.3204 39.7235C27.3204 39.1179 27.3204 38.4366 27.3204 37.6796C27.3374 36.9058 27.3543 36.1067 27.3713 35.2824C27.3883 34.4413 27.4138 33.6675 27.4478 32.961C27.4818 32.2376 27.5158 31.6236 27.5497 31.1189C27.6007 30.6143 27.6602 30.3199 27.7281 30.2358C27.7451 30.2189 27.7961 30.1853 27.8811 30.1348C27.966 30.0675 28.0595 30.0087 28.1614 29.9582C28.2633 29.8909 28.3568 29.832 28.4417 29.7816C28.5267 29.7311 28.5861 29.6975 28.6201 29.6806C29.4017 29.2433 30.2597 28.8648 31.1942 28.5451C32.1286 28.2255 33.0546 28.0657 33.9721 28.0657C34.7536 28.0657 35.4587 28.2255 36.0873 28.5451C36.733 28.8479 37.2767 29.2601 37.7184 29.7816C38.1772 30.2862 38.5255 30.8834 38.7633 31.5731C39.0012 32.246 39.1201 32.9441 39.1201 33.6675ZM34.7111 34.2479C34.7111 33.9114 34.6262 33.617 34.4563 33.3647C34.3034 33.1124 34.04 32.9862 33.6662 32.9862C33.3434 32.9862 33.0206 33.0535 32.6978 33.1881C32.375 33.3058 32.0777 33.432 31.8058 33.5666C31.8568 34.1553 31.8993 34.7273 31.9332 35.2824C31.9842 35.8376 31.9927 36.4095 31.9587 36.9983C32.2306 36.8637 32.5279 36.7123 32.8507 36.5441C33.1735 36.359 33.4708 36.1572 33.7427 35.9385C34.0145 35.7198 34.2439 35.4759 34.4308 35.2067C34.6177 34.9207 34.7111 34.6011 34.7111 34.2479Z",fill:"#758650"}),f.exports.createElement("path",{d:"M52.0922 43.458C52.0922 43.7945 52.0582 44.1982 51.9903 44.6692C51.9393 45.1402 51.8288 45.5944 51.6589 46.0318C51.489 46.4524 51.2597 46.814 50.9708 47.1168C50.682 47.4028 50.2997 47.5458 49.824 47.5458C49.1954 47.5458 48.7196 47.3187 48.3968 46.8645C48.091 46.4103 47.8701 45.872 47.7342 45.2496C47.5983 44.6103 47.5133 43.9627 47.4793 43.3066C47.4623 42.6505 47.4454 42.1291 47.4284 41.7421C46.2051 41.944 44.9988 42.1206 43.8094 42.272C43.7755 42.659 43.699 43.1384 43.5801 43.7103C43.4781 44.2823 43.3082 44.8374 43.0704 45.3757C42.8495 45.8972 42.5522 46.3514 42.1784 46.7383C41.8216 47.1253 41.3798 47.3187 40.8531 47.3187C40.4454 47.3187 40.1225 47.1757 39.8847 46.8897C39.6638 46.5869 39.4939 46.2337 39.375 45.8299C39.256 45.4262 39.1796 45.0141 39.1456 44.5935C39.1286 44.1561 39.1201 43.7945 39.1201 43.5085C39.1201 42.5496 39.1966 41.6076 39.3495 40.6823C39.5024 39.7403 39.6808 38.8067 39.8847 37.8815C39.9866 37.3936 40.1225 36.8217 40.2924 36.1656C40.4623 35.5095 40.6662 34.8366 40.9041 34.1469C41.159 33.4404 41.4478 32.7507 41.7706 32.0778C42.1104 31.3881 42.4927 30.7741 42.9174 30.2358C43.3422 29.6975 43.8264 29.2601 44.3701 28.9236C44.9138 28.5872 45.517 28.419 46.1796 28.419C46.8252 28.419 47.3859 28.562 47.8616 28.8479C48.3374 29.1339 48.7536 29.5124 49.1104 29.9834C49.4672 30.4545 49.7645 30.9928 50.0024 31.5984C50.2403 32.1871 50.4357 32.7927 50.5886 33.4152C50.7585 34.0208 50.8944 34.618 50.9963 35.2067C51.1153 35.7955 51.2172 36.317 51.3021 36.7712C51.523 37.8646 51.7099 38.9749 51.8628 40.102C52.0157 41.2122 52.0922 42.3309 52.0922 43.458ZM47.1735 37.3263C47.1735 37.1245 47.1565 36.7964 47.1225 36.3422C47.1056 35.8712 47.0546 35.4086 46.9696 34.9544C46.8847 34.4834 46.7488 34.0712 46.5619 33.718C46.392 33.3479 46.1541 33.1628 45.8483 33.1628C45.6784 33.1628 45.517 33.2806 45.364 33.5161C45.2111 33.7348 45.0752 34.0208 44.9563 34.374C44.8374 34.7105 44.7269 35.089 44.625 35.5095C44.54 35.9301 44.4636 36.3338 44.3956 36.7207C44.3276 37.1076 44.2767 37.4609 44.2427 37.7805C44.2087 38.0833 44.1832 38.302 44.1662 38.4366C45.1856 38.3525 46.1881 38.2263 47.1735 38.0581V37.3263Z",fill:"#758650"}),f.exports.createElement("path",{d:"M57.2817 1.09879C53.6383 0.62618 52.6744 8.18767 56.141 8.63861C59.5488 9.0825 60.8661 1.56431 57.2817 1.09879ZM50.2933 0.0267887C50.2393 0.0186128 50.1852 0.0138761 50.1289 0.00910539C46.4695 -0.298862 45.9141 7.30568 49.3961 7.6C52.7655 7.88527 53.6992 0.545837 50.2933 0.0267887ZM43.9644 4.48051C43.8573 4.46077 43.7489 4.44845 43.64 4.44365C39.9737 4.28077 39.7774 11.9105 43.2659 12.0668C46.5882 12.216 47.2082 5.07309 43.9644 4.48051ZM62.0768 7.66507C58.4675 6.98011 56.9746 14.4554 60.4088 15.1085C63.7844 15.7508 65.6277 8.33947 62.0768 7.66507ZM51.8882 10.383C48.1643 9.83004 50.3674 14.1158 43.4251 15.2017C38.0443 16.0433 40.2244 21.722 44.5718 22.4834C46.9579 22.9014 48.1354 21.1807 50.0887 21.5232C52.3066 21.9118 52.1923 23.6165 55.4388 24.1852C59.5841 24.9111 62.8887 20.138 58.4498 17.5662C52.7981 14.2918 55.956 11.1173 52.0712 10.4143C52.009 10.4032 51.9473 10.3918 51.8882 10.383Z",fill:"#758650"})),Zp=g.header`
  width: 100%;
  height: 96px;
  padding: 24px 0;
  border-bottom: 1px solid #cdcdcd66;
  /* text */
  color: ${z.colors.dark};
  /* Desktop & 1280 px/H3 */
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  /* Flex */
  display: flex;
  align-items: center;
  gap: 2.7%;
`,Wp=g(Up)``;function Qp(){return v(Zp,{children:[s(t1,{to:".",end:!0,children:s(Wp,{})}),"\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u044C"]})}const Gp=e=>f.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:4,height:29,viewBox:"0 0 4 29",fill:"none",...e},f.exports.createElement("path",{d:"M2 2L2 27",stroke:"#758650",strokeWidth:4,strokeLinecap:"round"})),Kp=g.span`
  font-size: calc(10px + 0.7vw);
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  text-align: left;
  overflow: visible;
  margin-left: 40px;

  @media screen and (max-width: 1279px) {
    font-size: 0;
    margin-left: 0px;
  }
`,Xp=g(Gp)`
  display: ${({$active:e})=>!e&&" none"};
  height: 100%;
  position: absolute;
  left: -16px;
`,Yp=g.button`
  display: flex;
  align-content: center;
  /* height: 30px; */
  height: fit-content;
  margin-bottom: 40px;

  & svg {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    overflow: visible;
    position: absolute;
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
`;function J4(e){const{children:t,text:n,link:u}=e;return s(Yp,{children:v(e1,{to:u,children:[s(Xp,{$active:(()=>s1().pathname===u)()})," ",t," ",s(Kp,{children:n})]})})}const qp=g.div`
  display: flex;
  flex-direction: column;
  flex: 25% 0 0;
  max-width: 250px;
  height: calc(100vh - 96px);
  padding: 40px 17px 0 0;
  border-right: 1px solid #cdcdcd66;
  /* overflow-y: auto; */

  position: sticky;
  @media screen and (max-width: 1279px) {
    display: block;
    padding: none;
    width: 40px;
    max-width: 40px;
  }
`,Jp=e=>f.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},f.exports.createElement("path",{d:"M3 18.5831C3.13419 18.2799 3.37368 18.1711 3.71043 18.1859C4.11081 18.2035 4.51301 18.1978 4.91411 18.188C5.46074 18.1749 5.99567 18.2052 6.50537 18.5138C6.50976 18.425 6.51451 18.3648 6.51488 18.3046C6.52073 17.4086 6.49294 16.5112 6.53755 15.6173C6.63554 13.6454 7.55877 12.075 9.13979 10.8462C9.47545 10.5852 9.8239 10.3394 10.1599 10.0784C11.2345 9.24403 11.7764 8.15928 11.7947 6.8301C11.8163 5.26531 12.9077 3.94634 14.4865 3.59345C14.7447 3.53569 15.0152 3.51315 15.2807 3.50681C15.8277 3.49378 16.375 3.50857 16.922 3.50011C17.1582 3.49659 17.34 3.57408 17.5038 3.73573C17.9667 4.19217 18.4361 4.64298 18.9107 5.08886C18.9718 5.14627 19.0756 5.18888 19.1605 5.18994C19.7864 5.19839 20.4128 5.19381 21.0391 5.19487C21.4735 5.19557 21.6852 5.40055 21.6834 5.82318C21.6815 6.25039 21.7155 6.68253 21.6618 7.10411C21.5119 8.27656 20.5616 9.06371 19.3294 9.07604C18.9528 9.07991 18.5765 9.07674 18.1685 9.07674V9.28982C18.1685 10.5549 18.1604 11.82 18.1707 13.0847C18.1824 14.5308 17.6504 15.7321 16.4902 16.6654C16.4434 16.7031 16.4098 16.782 16.4087 16.8422C16.4017 17.2754 16.4087 17.709 16.4025 18.1422C16.401 18.2419 16.4419 18.2824 16.5308 18.3218C17.2156 18.6272 17.563 19.1498 17.5794 19.8743C17.5864 20.1905 17.5696 20.5072 17.5842 20.8227C17.5992 21.1475 17.4789 21.3778 17.1593 21.5H5.00699C4.97993 21.4891 4.95397 21.4732 4.92581 21.4687C4.22123 21.3464 3.67314 20.9932 3.32396 20.3941C3.17587 20.1402 3.10567 19.8436 3 19.5668C3 19.2386 3 18.9107 3 18.5824V18.5831ZM16.4858 20.4371C16.4858 20.248 16.4891 20.0676 16.4851 19.8873C16.4763 19.5002 16.2624 19.2812 15.8639 19.2446C15.5202 19.2129 15.3147 19.0139 15.3121 18.6832C15.3063 17.9509 15.3096 17.2187 15.311 16.4865C15.3114 16.2939 15.3845 16.1329 15.5531 16.0192C16.6215 15.2982 17.091 14.2991 17.0778 13.0548C17.0624 11.5963 17.0741 10.1379 17.0741 8.67947C17.0741 8.2033 17.2624 8.02439 17.7579 8.02227C18.3414 8.01981 18.9261 8.03214 19.5086 8.00537C19.9992 7.98248 20.4373 7.62676 20.5367 7.16645C20.6 6.87448 20.5861 6.56736 20.608 6.24969C20.0084 6.24969 19.4504 6.24405 18.8925 6.2525C18.6625 6.25603 18.4855 6.18171 18.3261 6.02464C17.8581 5.56432 17.3835 5.11034 16.9067 4.65813C16.8558 4.60988 16.7765 4.56303 16.7096 4.56233C16.1867 4.55529 15.6631 4.54613 15.141 4.56303C14.0445 4.59861 13.0536 5.43577 12.9337 6.4846C12.8627 7.10411 12.8832 7.73594 12.9018 8.36108C12.9121 8.7087 13.1377 8.95876 13.4763 9.08872C14.077 9.3194 14.7117 8.89924 14.7209 8.26C14.73 7.61584 14.7202 6.97133 14.7249 6.32717C14.7275 5.99998 14.9629 5.7626 15.2708 5.76049C15.5812 5.75838 15.8156 5.99329 15.8167 6.32189C15.8193 6.99528 15.8273 7.66938 15.8112 8.34242C15.7922 9.14154 15.2544 9.82902 14.469 10.0956C13.6982 10.3573 12.8371 10.1379 12.2945 9.54164C12.2594 9.50325 12.2229 9.46591 12.1995 9.44091C11.9643 9.73429 11.7687 10.0562 11.4974 10.2996C10.9651 10.7771 10.4023 11.2258 9.83048 11.6597C8.3544 12.779 7.63263 14.2483 7.61398 16.0428C7.59936 17.4424 7.61106 18.8427 7.61106 20.2423C7.61106 20.305 7.61106 20.3677 7.61106 20.4371H13.4448C13.3179 19.8303 12.5943 19.2812 11.8872 19.2477C11.3793 19.2238 11.221 19.0516 11.2067 18.5585C11.1976 18.2447 11.2104 17.9136 11.112 17.6224C10.8477 16.8405 10.2429 16.4594 9.3972 16.4119C9.06557 16.3932 8.85386 16.159 8.87032 15.8565C8.88567 15.5705 9.12809 15.3532 9.44729 15.3648C9.65863 15.3725 9.87326 15.3937 10.0788 15.4405C11.3705 15.7367 12.2627 16.8046 12.3073 18.0894C12.3091 18.1436 12.3351 18.2313 12.3728 18.2447C12.5625 18.313 12.7596 18.3623 12.9666 18.4218C12.9666 18.3444 12.9666 18.2806 12.9666 18.2165C12.9666 17.6424 12.9647 17.0684 12.9673 16.4943C12.9684 16.2132 13.1318 16.0033 13.3845 15.9452C13.7432 15.8624 14.0591 16.1111 14.0602 16.4855C14.0631 17.3698 14.0609 18.2545 14.062 19.1389C14.062 19.1963 14.0518 19.2685 14.0818 19.3094C14.3359 19.6517 14.5052 20.0296 14.5999 20.4364H16.4869L16.4858 20.4371ZM4.1013 19.2551C4.09253 19.8137 4.47571 20.3057 5.02344 20.4054C5.29438 20.4547 5.57848 20.4381 5.85709 20.4452C6.07319 20.4505 6.28928 20.4462 6.50354 20.4462C6.52804 19.8482 6.08562 19.3129 5.49146 19.2629C5.03514 19.2245 4.57224 19.2551 4.1013 19.2551Z",fill:"#2E2E2E",stroke:"#2E2E2E",strokeWidth:.346154})),ef=e=>f.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},f.exports.createElement("path",{d:"M17.4775 20.5676L17.4802 20.5664C17.7625 20.4383 18.0549 20.1843 18.2722 19.8563C18.4905 19.5271 18.5922 19.1861 18.5806 18.9116L17.4775 20.5676ZM17.4775 20.5676C16.8707 20.8456 16.1515 20.7269 15.1446 20.403C14.9831 20.351 14.8074 20.2915 14.625 20.2298C14.2937 20.1176 13.94 19.9978 13.608 19.9018C13.0725 19.7468 12.4893 19.6194 11.8899 19.6194C11.2866 19.6194 10.6994 19.7529 10.1625 19.9136C9.83697 20.011 9.48639 20.1332 9.15846 20.2476C8.96963 20.3134 8.78831 20.3766 8.62362 20.431C7.61425 20.7641 6.91651 20.8725 6.33836 20.5801L6.33838 20.5801M17.4775 20.5676L6.33838 20.5801M6.33838 20.5801L6.32992 20.5759M6.33838 20.5801L6.32992 20.5759M6.32992 20.5759C5.99748 20.413 5.679 20.0924 5.4562 19.6795M6.32992 20.5759L5.4562 19.6795M5.4562 19.6795C5.23321 19.2662 5.14162 18.8263 5.18449 18.4694M5.4562 19.6795L5.18449 18.4694M5.18449 18.4694C5.23924 18.0162 5.54314 17.6031 6.11628 17.106C6.33346 16.9177 6.56256 16.739 6.8087 16.547C6.88364 16.4885 6.96015 16.4288 7.03839 16.3673C7.35968 16.1144 7.70261 15.8353 8.00396 15.526C8.40049 15.1288 8.75584 14.658 9.08021 14.21C9.16171 14.0975 9.24096 13.9868 9.31884 13.878C9.5632 13.5368 9.79403 13.2144 10.0383 12.9119C10.6945 12.0996 11.2516 11.6894 11.8899 11.6894C12.5298 11.6894 13.1003 12.0984 13.7587 12.9013C14.035 13.2382 14.2973 13.6065 14.5743 13.9957C14.6199 14.0597 14.6658 14.1242 14.7123 14.1893C15.0309 14.6353 15.3746 15.1057 15.748 15.5073C16.0549 15.8441 16.4052 16.1601 16.7338 16.4519C16.7739 16.4876 16.8137 16.5228 16.8531 16.5577C17.1474 16.8186 17.4223 17.0621 17.673 17.3144C18.25 17.8949 18.558 18.3874 18.5806 18.9113L5.18449 18.4694ZM10.4048 6.54809L10.405 6.5489C10.5605 7.31346 10.4879 7.99542 10.2897 8.47327C10.0909 8.95236 9.80984 9.1494 9.55681 9.18799L9.55586 9.18814C9.29345 9.22851 8.91442 9.1154 8.5079 8.69687C8.11032 8.28754 7.76351 7.65316 7.60421 6.88678L7.60404 6.88596C7.44508 6.12554 7.5192 5.44586 7.72016 4.9673C7.92043 4.49038 8.20515 4.2849 8.463 4.2409C8.73399 4.20445 9.11272 4.32412 9.5125 4.73875C9.90744 5.14835 10.2498 5.78189 10.4048 6.54809ZM14.303 9.18799L14.3021 9.18785C14.0423 9.14856 13.7602 8.94948 13.5627 8.47327C13.3651 7.99708 13.2944 7.31667 13.4541 6.55288L13.455 6.54809C13.61 5.78189 13.9525 5.14797 14.3467 4.73808C14.7469 4.32194 15.1231 4.20477 15.3869 4.2409C15.6502 4.28503 15.935 4.49103 16.1364 4.96844C16.3383 5.44709 16.4148 6.12687 16.2652 6.88837C16.1005 7.65518 15.7536 8.28847 15.3569 8.69687C14.9515 9.11431 14.5721 9.22904 14.303 9.18799ZM3.298 8.78764C3.58841 8.66369 4.00896 8.6836 4.50602 8.96313C4.99558 9.23845 5.4851 9.73181 5.82942 10.3858C6.14963 11.0567 6.23536 11.7063 6.15368 12.201C6.07217 12.6946 5.84339 12.9734 5.57153 13.0913C5.28633 13.215 4.87181 13.1975 4.38282 12.9198C3.89932 12.6451 3.41521 12.1487 3.07987 11.4823C2.74561 10.818 2.65637 10.1671 2.73657 9.67018C2.81671 9.17372 3.04523 8.8988 3.298 8.78764ZM20.7018 8.78762C20.9545 8.89876 21.1831 9.17368 21.2632 9.67018C21.3434 10.1671 21.2542 10.818 20.9199 11.4823C20.5846 12.1487 20.1005 12.6451 19.617 12.9198C19.128 13.1975 18.7135 13.215 18.4283 13.0913C18.1564 12.9734 17.9276 12.6946 17.8461 12.201C17.7645 11.7063 17.8502 11.0567 18.1704 10.3858C18.5147 9.73181 19.0042 9.23845 19.4938 8.96313C19.9908 8.68362 20.4113 8.6637 20.7018 8.78762Z",stroke:"#2E2E2E",strokeWidth:1.5})),tf=e=>f.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},f.exports.createElement("path",{d:"M15 8.5H15.01M3 6.5C3 5.70435 3.31607 4.94129 3.87868 4.37868C4.44129 3.81607 5.20435 3.5 6 3.5H18C18.7956 3.5 19.5587 3.81607 20.1213 4.37868C20.6839 4.94129 21 5.70435 21 6.5V18.5C21 19.2956 20.6839 20.0587 20.1213 20.6213C19.5587 21.1839 18.7956 21.5 18 21.5H6C5.20435 21.5 4.44129 21.1839 3.87868 20.6213C3.31607 20.0587 3 19.2956 3 18.5V6.5Z",stroke:"#2E2E2E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),f.exports.createElement("path",{d:"M3 16.4998L8 11.4998C8.928 10.6068 10.072 10.6068 11 11.4998L16 16.4998",stroke:"#2E2E2E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),f.exports.createElement("path",{d:"M14 14.4998L15 13.4998C15.928 12.6068 17.072 12.6068 18 13.4998L21 16.4998",stroke:"#2E2E2E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),nf=e=>f.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},f.exports.createElement("path",{d:"M15.75 13.5C15.75 13.3011 15.671 13.1103 15.5303 12.9697C15.3897 12.829 15.1989 12.75 15 12.75H9C8.80109 12.75 8.61032 12.829 8.46967 12.9697C8.32902 13.1103 8.25 13.3011 8.25 13.5C8.25 13.6989 8.32902 13.8897 8.46967 14.0303C8.61032 14.171 8.80109 14.25 9 14.25H15C15.1989 14.25 15.3897 14.171 15.5303 14.0303C15.671 13.8897 15.75 13.6989 15.75 13.5ZM15.75 17.5C15.75 17.3011 15.671 17.1103 15.5303 16.9697C15.3897 16.829 15.1989 16.75 15 16.75H9C8.80109 16.75 8.61032 16.829 8.46967 16.9697C8.32902 17.1103 8.25 17.3011 8.25 17.5C8.25 17.6989 8.32902 17.8897 8.46967 18.0303C8.61032 18.171 8.80109 18.25 9 18.25H15C15.1989 18.25 15.3897 18.171 15.5303 18.0303C15.671 17.8897 15.75 17.6989 15.75 17.5Z",fill:"#2E2E2E"}),f.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2.75C6.27065 2.75 5.57118 3.03973 5.05546 3.55546C4.53973 4.07118 4.25 4.77065 4.25 5.5V19.5C4.25 20.2293 4.53973 20.9288 5.05546 21.4445C5.57118 21.9603 6.27065 22.25 7 22.25H17C17.7293 22.25 18.4288 21.9603 18.9445 21.4445C19.4603 20.9288 19.75 20.2293 19.75 19.5V8.468C19.75 8.087 19.626 7.717 19.396 7.413L16.398 3.445C16.2349 3.22912 16.0239 3.054 15.7817 2.93341C15.5395 2.81282 15.2726 2.75004 15.002 2.75H7ZM5.75 5.5C5.75 4.81 6.31 4.25 7 4.25H14.25V8.647C14.25 9.061 14.586 9.397 15 9.397H18.25V19.5C18.25 20.19 17.69 20.75 17 20.75H7C6.31 20.75 5.75 20.19 5.75 19.5V5.5Z",fill:"#2E2E2E"})),uf=e=>f.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},f.exports.createElement("path",{d:"M21.8881 17.4201V20.4201C21.8892 20.6986 21.8322 20.9743 21.7206 21.2294C21.6091 21.4846 21.4454 21.7137 21.2402 21.902C21.035 22.0902 20.7927 22.2336 20.5289 22.3228C20.265 22.412 19.9855 22.4452 19.7081 22.4201C16.631 22.0857 13.6751 21.0342 11.0781 19.3501C8.66194 17.8148 6.61345 15.7663 5.07812 13.3501C3.38809 10.7413 2.33636 7.77109 2.00812 4.6801C1.98313 4.40356 2.01599 4.12486 2.10462 3.86172C2.19324 3.59859 2.33569 3.35679 2.52288 3.15172C2.71008 2.94665 2.93792 2.78281 3.19191 2.67062C3.44589 2.55843 3.72046 2.50036 3.99812 2.5001H6.99812C7.48342 2.49532 7.95391 2.66718 8.32188 2.98363C8.68985 3.30008 8.93019 3.73954 8.99812 4.2201C9.12474 5.18016 9.35957 6.12282 9.69812 7.0301C9.83266 7.38802 9.86178 7.77701 9.78202 8.15098C9.70227 8.52494 9.51698 8.86821 9.24812 9.1401L7.97812 10.4101C9.40167 12.9136 11.4746 14.9865 13.9781 16.4101L15.2481 15.1401C15.52 14.8712 15.8633 14.6859 16.2372 14.6062C16.6112 14.5264 17.0002 14.5556 17.3581 14.6901C18.2654 15.0286 19.2081 15.2635 20.1681 15.3901C20.6539 15.4586 21.0975 15.7033 21.4146 16.0776C21.7318 16.4519 21.9003 16.9297 21.8881 17.4201Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),rf=e=>f.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:21,viewBox:"0 0 20 21",fill:"none",...e},f.exports.createElement("path",{d:"M17.4298 11.48C17.4698 11.16 17.4998 10.84 17.4998 10.5C17.4998 10.16 17.4698 9.84005 17.4298 9.52005L19.5398 7.87005C19.7298 7.72005 19.7798 7.45005 19.6598 7.23005L17.6598 3.77005C17.6009 3.66687 17.5071 3.58807 17.3953 3.54775C17.2836 3.50744 17.1611 3.50825 17.0498 3.55005L14.5598 4.55005C14.0398 4.15005 13.4798 3.82005 12.8698 3.57005L12.4898 0.920047C12.4733 0.802388 12.4144 0.694807 12.3242 0.617483C12.234 0.540158 12.1186 0.498402 11.9998 0.500047H7.99984C7.74984 0.500047 7.53984 0.680047 7.50984 0.920047L7.12984 3.57005C6.51984 3.82005 5.95984 4.16005 5.43984 4.55005L2.94984 3.55005C2.89186 3.53038 2.83107 3.52025 2.76984 3.52005C2.59984 3.52005 2.42984 3.61005 2.33984 3.77005L0.339839 7.23005C0.209839 7.45005 0.26984 7.72005 0.45984 7.87005L2.56984 9.52005C2.52984 9.84005 2.49984 10.17 2.49984 10.5C2.49984 10.83 2.52984 11.16 2.56984 11.48L0.45984 13.13C0.26984 13.28 0.219839 13.55 0.339839 13.77L2.33984 17.23C2.39879 17.3332 2.49256 17.412 2.60434 17.4523C2.71612 17.4927 2.8386 17.4918 2.94984 17.45L5.43984 16.45C5.95984 16.85 6.51984 17.18 7.12984 17.43L7.50984 20.08C7.53984 20.32 7.74984 20.5 7.99984 20.5H11.9998C12.2498 20.5 12.4598 20.32 12.4898 20.08L12.8698 17.43C13.4798 17.18 14.0398 16.84 14.5598 16.45L17.0498 17.45C17.1098 17.47 17.1698 17.48 17.2298 17.48C17.3998 17.48 17.5698 17.39 17.6598 17.23L19.6598 13.77C19.7798 13.55 19.7298 13.28 19.5398 13.13L17.4298 11.48ZM15.4498 9.77005C15.4898 10.08 15.4998 10.29 15.4998 10.5C15.4998 10.71 15.4798 10.93 15.4498 11.23L15.3098 12.36L16.1998 13.06L17.2798 13.9L16.5798 15.11L15.3098 14.6L14.2698 14.18L13.3698 14.86C12.9398 15.18 12.5298 15.42 12.1198 15.59L11.0598 16.02L10.8998 17.15L10.6998 18.5H9.29984L9.10984 17.15L8.94984 16.02L7.88984 15.59C7.45984 15.41 7.05984 15.18 6.65984 14.88L5.74984 14.18L4.68984 14.61L3.41984 15.12L2.71984 13.91L3.79984 13.07L4.68984 12.37L4.54984 11.24C4.51984 10.93 4.49984 10.7 4.49984 10.5C4.49984 10.3 4.51984 10.07 4.54984 9.77005L4.68984 8.64005L3.79984 7.94005L2.71984 7.10005L3.41984 5.89005L4.68984 6.40005L5.72984 6.82005L6.62984 6.14005C7.05984 5.82005 7.46984 5.58005 7.87984 5.41005L8.93984 4.98005L9.09984 3.85005L9.29984 2.50005H10.6898L10.8798 3.85005L11.0398 4.98005L12.0998 5.41005C12.5298 5.59005 12.9298 5.82005 13.3298 6.12005L14.2398 6.82005L15.2998 6.39005L16.5698 5.88005L17.2698 7.09005L16.1998 7.94005L15.3098 8.64005L15.4498 9.77005ZM9.99984 6.50005C7.78984 6.50005 5.99984 8.29005 5.99984 10.5C5.99984 12.71 7.78984 14.5 9.99984 14.5C12.2098 14.5 13.9998 12.71 13.9998 10.5C13.9998 8.29005 12.2098 6.50005 9.99984 6.50005ZM9.99984 12.5C8.89984 12.5 7.99984 11.6 7.99984 10.5C7.99984 9.40005 8.89984 8.50005 9.99984 8.50005C11.0998 8.50005 11.9998 9.40005 11.9998 10.5C11.9998 11.6 11.0998 12.5 9.99984 12.5Z",fill:"#2E2E2E"})),of=e=>f.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},f.exports.createElement("path",{d:"M17 8.5L15.6 9.9L17.2 11.5H9V13.5H17.2L15.6 15.1L17 16.5L21 12.5L17 8.5ZM5 5.5H12V3.5H5C3.9 3.5 3 4.4 3 5.5V19.5C3 20.6 3.9 21.5 5 21.5H12V19.5H5V5.5Z",fill:"#FF4141"}));function lf(){return v(qp,{children:[s(J4,{link:"/admin",text:"\u041A\u0430\u0440\u0442\u043A\u0438 \u0441\u043E\u0431\u0430\u043A",children:s(Jp,{})}),s(J4,{link:"/admin/partners",text:"\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u0438",children:s(ef,{})}),s(J4,{link:"/admin/sliders",text:"\u0421\u043B\u0430\u0439\u0434\u0435\u0440\u0438",children:s(tf,{})}),s(J4,{link:"/admin/reports",text:"\u0417\u0432\u0456\u0442\u043D\u0456\u0441\u0442\u044C",children:s(nf,{})}),s(J4,{link:"/admin/contacts",text:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",children:s(uf,{})}),s(J4,{link:"/admin/settings",text:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",children:s(rf,{})}),s(J4,{link:"/logout",text:"Log out",children:s(of,{})})]})}function af(){return v(J,{style:{padding:"0 2.7%"},children:[s(Pl,{}),s(Qp,{}),v(he,{children:[s(lf,{}),s(il,{})]})]})}function sf(){return s(sa,{theme:z,children:s(o7,{basename:"/",children:v(ol,{children:[v(re,{element:s(Xa,{}),children:[s(re,{index:!0,path:"/",element:s(qc,{})}),s(re,{path:"dogs",element:s(Ws,{})}),s(re,{path:"dog/:id/:name",element:s(dp,{})}),s(re,{path:"about",element:s(Cs,{})}),s(re,{path:"contacts",element:s(zd,{})}),s(re,{path:"*",element:s(Il,{})})]}),s(re,{element:s(af,{}),children:s(re,{path:"admin/*",element:s(Vp,{})})})]})})})}s6.render(s(Ne.StrictMode,{children:s(sf,{})}),document.getElementById("root"));
