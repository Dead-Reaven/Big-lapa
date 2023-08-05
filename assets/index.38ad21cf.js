function A8(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in e)){var u=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,u.get?u:{enumerable:!0,get:function(){return n[r]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const B8=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const i of u)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(u){const i={};return u.integrity&&(i.integrity=u.integrity),u.referrerpolicy&&(i.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?i.credentials="include":u.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(u){if(u.ep)return;u.ep=!0;const i=n(u);fetch(u.href,i)}};B8();var p={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nn=Symbol.for("react.element"),R8=Symbol.for("react.portal"),O8=Symbol.for("react.fragment"),M8=Symbol.for("react.strict_mode"),$8=Symbol.for("react.profiler"),T8=Symbol.for("react.provider"),N8=Symbol.for("react.context"),I8=Symbol.for("react.forward_ref"),z8=Symbol.for("react.suspense"),_8=Symbol.for("react.memo"),H8=Symbol.for("react.lazy"),So=Symbol.iterator;function j8(e){return e===null||typeof e!="object"?null:(e=So&&e[So]||e["@@iterator"],typeof e=="function"?e:null)}var Hs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},js=Object.assign,Us={};function D0(e,t,n){this.props=e,this.context=t,this.refs=Us,this.updater=n||Hs}D0.prototype.isReactComponent={};D0.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};D0.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vs(){}Vs.prototype=D0.prototype;function ri(e,t,n){this.props=e,this.context=t,this.refs=Us,this.updater=n||Hs}var ui=ri.prototype=new Vs;ui.constructor=ri;js(ui,D0.prototype);ui.isPureReactComponent=!0;var ko=Array.isArray,Ws=Object.prototype.hasOwnProperty,ii={current:null},Zs={key:!0,ref:!0,__self:!0,__source:!0};function Qs(e,t,n){var r,u={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Ws.call(t,r)&&!Zs.hasOwnProperty(r)&&(u[r]=t[r]);var s=arguments.length-2;if(s===1)u.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];u.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)u[r]===void 0&&(u[r]=s[r]);return{$$typeof:Nn,type:e,key:i,ref:o,props:u,_owner:ii.current}}function U8(e,t){return{$$typeof:Nn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function oi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nn}function V8(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fo=/\/+/g;function Ju(e,t){return typeof e=="object"&&e!==null&&e.key!=null?V8(""+e.key):t.toString(36)}function Cr(e,t,n,r,u){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Nn:case R8:o=!0}}if(o)return o=e,u=u(o),e=r===""?"."+Ju(o,0):r,ko(u)?(n="",e!=null&&(n=e.replace(Fo,"$&/")+"/"),Cr(u,t,n,"",function(c){return c})):u!=null&&(oi(u)&&(u=U8(u,n+(!u.key||o&&o.key===u.key?"":(""+u.key).replace(Fo,"$&/")+"/")+e)),t.push(u)),1;if(o=0,r=r===""?".":r+":",ko(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+Ju(i,s);o+=Cr(i,t,n,l,u)}else if(l=j8(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+Ju(i,s++),o+=Cr(i,t,n,l,u);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Qn(e,t,n){if(e==null)return e;var r=[],u=0;return Cr(e,r,"","",function(i){return t.call(n,i,u++)}),r}function W8(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},gr={transition:null},Z8={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:gr,ReactCurrentOwner:ii};z.Children={map:Qn,forEach:function(e,t,n){Qn(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qn(e,function(){t++}),t},toArray:function(e){return Qn(e,function(t){return t})||[]},only:function(e){if(!oi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=D0;z.Fragment=O8;z.Profiler=$8;z.PureComponent=ri;z.StrictMode=M8;z.Suspense=z8;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z8;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=js({},e.props),u=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=ii.current),t.key!==void 0&&(u=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Ws.call(t,l)&&!Zs.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Nn,type:e.type,key:u,ref:i,props:r,_owner:o}};z.createContext=function(e){return e={$$typeof:N8,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:T8,_context:e},e.Consumer=e};z.createElement=Qs;z.createFactory=function(e){var t=Qs.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:I8,render:e}};z.isValidElement=oi;z.lazy=function(e){return{$$typeof:H8,_payload:{_status:-1,_result:e},_init:W8}};z.memo=function(e,t){return{$$typeof:_8,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=gr.transition;gr.transition={};try{e()}finally{gr.transition=t}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(e,t){return Pe.current.useCallback(e,t)};z.useContext=function(e){return Pe.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};z.useEffect=function(e,t){return Pe.current.useEffect(e,t)};z.useId=function(){return Pe.current.useId()};z.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return Pe.current.useMemo(e,t)};z.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};z.useRef=function(e){return Pe.current.useRef(e)};z.useState=function(e){return Pe.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return Pe.current.useTransition()};z.version="18.2.0";p.exports=z;var be=p.exports,qs=A8({__proto__:null,default:be},[p.exports]);/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pn(){return pn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pn.apply(this,arguments)}var Gt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Gt||(Gt={}));const Do="popstate";function Q8(e){e===void 0&&(e={});function t(u,i){let{pathname:o="/",search:s="",hash:l=""}=T4(u.location.hash.substr(1));return H1("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(u,i){let o=u.document.querySelector("base"),s="";if(o&&o.getAttribute("href")){let l=u.location.href,c=l.indexOf("#");s=c===-1?l:l.slice(0,c)}return s+"#"+(typeof i=="string"?i:Ir(i))}function r(u,i){yu(u.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return K8(t,n,r,e)}function ie(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}function yu(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}function q8(){return Math.random().toString(36).substr(2,8)}function bo(e,t){return{usr:e.state,key:e.key,idx:t}}function H1(e,t,n,r){return n===void 0&&(n=null),pn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?T4(t):t,{state:n,key:t&&t.key||r||q8()})}function Ir(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function T4(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function K8(e,t,n,r){r===void 0&&(r={});let{window:u=document.defaultView,v5Compat:i=!1}=r,o=u.history,s=Gt.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(pn({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function m(){s=Gt.Pop;let k=d(),f=k==null?null:k-c;c=k,l&&l({action:s,location:y.location,delta:f})}function g(k,f){s=Gt.Push;let h=H1(y.location,k,f);n&&n(h,k),c=d()+1;let C=bo(h,c),S=y.createHref(h);try{o.pushState(C,"",S)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;u.location.assign(S)}i&&l&&l({action:s,location:y.location,delta:1})}function w(k,f){s=Gt.Replace;let h=H1(y.location,k,f);n&&n(h,k),c=d();let C=bo(h,c),S=y.createHref(h);o.replaceState(C,"",S),i&&l&&l({action:s,location:y.location,delta:0})}function v(k){let f=u.location.origin!=="null"?u.location.origin:u.location.href,h=typeof k=="string"?k:Ir(k);return ie(f,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,f)}let y={get action(){return s},get location(){return e(u,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return u.addEventListener(Do,m),l=k,()=>{u.removeEventListener(Do,m),l=null}},createHref(k){return t(u,k)},createURL:v,encodeLocation(k){let f=v(k);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:w,go(k){return o.go(k)}};return y}var Lo;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Lo||(Lo={}));function G8(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?T4(t):t,u=si(r.pathname||"/",n);if(u==null)return null;let i=Ks(e);Y8(i);let o=null;for(let s=0;o==null&&s<i.length;++s)o=o6(i[s],a6(u));return o}function Ks(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let u=(i,o,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(ie(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Jt([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(ie(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ks(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:u6(c,i.index),routesMeta:d})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))u(i,o);else for(let l of Gs(i.path))u(i,o,l)}),t}function Gs(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,u=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return u?[i,""]:[i];let o=Gs(r.join("/")),s=[];return s.push(...o.map(l=>l===""?i:[i,l].join("/"))),u&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Y8(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:i6(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const X8=/^:\w+$/,J8=3,e6=2,t6=1,n6=10,r6=-2,Po=e=>e==="*";function u6(e,t){let n=e.split("/"),r=n.length;return n.some(Po)&&(r+=r6),t&&(r+=e6),n.filter(u=>!Po(u)).reduce((u,i)=>u+(X8.test(i)?J8:i===""?t6:n6),r)}function i6(e,t){return e.length===t.length&&e.slice(0,-1).every((r,u)=>r===t[u])?e[e.length-1]-t[t.length-1]:0}function o6(e,t){let{routesMeta:n}=e,r={},u="/",i=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,c=u==="/"?t:t.slice(u.length)||"/",d=s6({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},c);if(!d)return null;Object.assign(r,d.params);let m=s.route;i.push({params:r,pathname:Jt([u,d.pathname]),pathnameBase:f6(Jt([u,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(u=Jt([u,d.pathnameBase]))}return i}function s6(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=l6(e.path,e.caseSensitive,e.end),u=t.match(n);if(!u)return null;let i=u[0],o=i.replace(/(.)\/+$/,"$1"),s=u.slice(1);return{params:r.reduce((c,d,m)=>{if(d==="*"){let g=s[m]||"";o=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}return c[d]=c6(s[m]||"",d),c},{}),pathname:i,pathnameBase:o,pattern:e}}function l6(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),yu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],u="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),u+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?u+="\\/*$":e!==""&&e!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,t?void 0:"i"),r]}function a6(e){try{return decodeURI(e)}catch(t){return yu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function c6(e,t){try{return decodeURIComponent(e)}catch(n){return yu(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function si(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function d6(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:u=""}=typeof e=="string"?T4(e):e;return{pathname:n?n.startsWith("/")?n:p6(n,t):t,search:h6(r),hash:m6(u)}}function p6(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(u=>{u===".."?n.length>1&&n.pop():u!=="."&&n.push(u)}),n.length>1?n.join("/"):"/"}function e1(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function li(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ai(e,t,n,r){r===void 0&&(r=!1);let u;typeof e=="string"?u=T4(e):(u=pn({},e),ie(!u.pathname||!u.pathname.includes("?"),e1("?","pathname","search",u)),ie(!u.pathname||!u.pathname.includes("#"),e1("#","pathname","hash",u)),ie(!u.search||!u.search.includes("#"),e1("#","search","hash",u)));let i=e===""||u.pathname==="",o=i?"/":u.pathname,s;if(r||o==null)s=n;else{let m=t.length-1;if(o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;u.pathname=g.join("/")}s=m>=0?t[m]:"/"}let l=d6(u,s),c=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Jt=e=>e.join("/").replace(/\/\/+/g,"/"),f6=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),h6=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,m6=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function C6(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const g6=["post","put","patch","delete"];[...g6];/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zr(){return zr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zr.apply(this,arguments)}const ci=p.exports.createContext(null),Ys=p.exports.createContext(null),N4=p.exports.createContext(null),xu=p.exports.createContext(null),vt=p.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),Xs=p.exports.createContext(null);function y6(e,t){let{relative:n}=t===void 0?{}:t;b0()||ie(!1);let{basename:r,navigator:u}=p.exports.useContext(N4),{hash:i,pathname:o,search:s}=pi(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Jt([r,o])),u.createHref({pathname:l,search:s,hash:i})}function b0(){return p.exports.useContext(xu)!=null}function Nt(){return b0()||ie(!1),p.exports.useContext(xu).location}function Js(e){p.exports.useContext(N4).static||p.exports.useLayoutEffect(e)}function di(){let{isDataRoute:e}=p.exports.useContext(vt);return e?M6():x6()}function x6(){b0()||ie(!1);let e=p.exports.useContext(ci),{basename:t,navigator:n}=p.exports.useContext(N4),{matches:r}=p.exports.useContext(vt),{pathname:u}=Nt(),i=JSON.stringify(li(r).map(l=>l.pathnameBase)),o=p.exports.useRef(!1);return Js(()=>{o.current=!0}),p.exports.useCallback(function(l,c){if(c===void 0&&(c={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let d=ai(l,JSON.parse(i),u,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Jt([t,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[t,n,i,u,e])}const v6=p.exports.createContext(null);function w6(e){let t=p.exports.useContext(vt).outlet;return t&&p.exports.createElement(v6.Provider,{value:e},t)}function E6(){let{matches:e}=p.exports.useContext(vt),t=e[e.length-1];return t?t.params:{}}function pi(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=p.exports.useContext(vt),{pathname:u}=Nt(),i=JSON.stringify(li(r).map(o=>o.pathnameBase));return p.exports.useMemo(()=>ai(e,JSON.parse(i),u,n==="path"),[e,i,u,n])}function S6(e,t){return k6(e,t)}function k6(e,t,n){b0()||ie(!1);let{navigator:r}=p.exports.useContext(N4),{matches:u}=p.exports.useContext(vt),i=u[u.length-1],o=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let l=Nt(),c;if(t){var d;let y=typeof t=="string"?T4(t):t;s==="/"||((d=y.pathname)==null?void 0:d.startsWith(s))||ie(!1),c=y}else c=l;let m=c.pathname||"/",g=s==="/"?m:m.slice(s.length)||"/",w=G8(e,{pathname:g}),v=P6(w&&w.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Jt([s,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?s:Jt([s,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),u,n);return t&&v?p.exports.createElement(xu.Provider,{value:{location:zr({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Gt.Pop}},v):v}function F6(){let e=O6(),t=C6(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return p.exports.createElement(p.exports.Fragment,null,p.exports.createElement("h2",null,"Unexpected Application Error!"),p.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?p.exports.createElement("pre",{style:u},n):null,i)}const D6=p.exports.createElement(F6,null);class b6 extends p.exports.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?p.exports.createElement(vt.Provider,{value:this.props.routeContext},p.exports.createElement(Xs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function L6(e){let{routeContext:t,match:n,children:r}=e,u=p.exports.useContext(ci);return u&&u.static&&u.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=n.route.id),p.exports.createElement(vt.Provider,{value:t},r)}function P6(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var u;if((u=n)!=null&&u.errors)e=n.matches;else return null}let i=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let s=i.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));s>=0||ie(!1),i=i.slice(0,Math.min(i.length,s+1))}return i.reduceRight((s,l,c)=>{let d=l.route.id?o==null?void 0:o[l.route.id]:null,m=null;n&&(m=l.route.errorElement||D6);let g=t.concat(i.slice(0,c+1)),w=()=>{let v;return d?v=m:l.route.Component?v=p.exports.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=s,p.exports.createElement(L6,{match:l,routeContext:{outlet:s,matches:g,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?p.exports.createElement(b6,{location:n.location,revalidation:n.revalidation,component:m,error:d,children:w(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):w()},null)}var j1;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(j1||(j1={}));var fn;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(fn||(fn={}));function A6(e){let t=p.exports.useContext(ci);return t||ie(!1),t}function B6(e){let t=p.exports.useContext(Ys);return t||ie(!1),t}function R6(e){let t=p.exports.useContext(vt);return t||ie(!1),t}function el(e){let t=R6(),n=t.matches[t.matches.length-1];return n.route.id||ie(!1),n.route.id}function O6(){var e;let t=p.exports.useContext(Xs),n=B6(fn.UseRouteError),r=el(fn.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function M6(){let{router:e}=A6(j1.UseNavigateStable),t=el(fn.UseNavigateStable),n=p.exports.useRef(!1);return Js(()=>{n.current=!0}),p.exports.useCallback(function(u,i){i===void 0&&(i={}),n.current&&(typeof u=="number"?e.navigate(u):e.navigate(u,zr({fromRouteId:t},i)))},[e,t])}const $6="startTransition";qs[$6];function T6(e){let{to:t,replace:n,state:r,relative:u}=e;b0()||ie(!1);let{matches:i}=p.exports.useContext(vt),{pathname:o}=Nt(),s=di(),l=ai(t,li(i).map(d=>d.pathnameBase),o,u==="path"),c=JSON.stringify(l);return p.exports.useEffect(()=>s(JSON.parse(c),{replace:n,state:r,relative:u}),[s,c,u,n,r]),null}function vu(e){return w6(e.context)}function V(e){ie(!1)}function N6(e){let{basename:t="/",children:n=null,location:r,navigationType:u=Gt.Pop,navigator:i,static:o=!1}=e;b0()&&ie(!1);let s=t.replace(/^\/*/,"/"),l=p.exports.useMemo(()=>({basename:s,navigator:i,static:o}),[s,i,o]);typeof r=="string"&&(r=T4(r));let{pathname:c="/",search:d="",hash:m="",state:g=null,key:w="default"}=r,v=p.exports.useMemo(()=>{let y=si(c,s);return y==null?null:{location:{pathname:y,search:d,hash:m,state:g,key:w},navigationType:u}},[s,c,d,m,g,w,u]);return v==null?null:p.exports.createElement(N4.Provider,{value:l},p.exports.createElement(xu.Provider,{children:n,value:v}))}function fi(e){let{children:t,location:n}=e;return S6(U1(t),n)}var Ao;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Ao||(Ao={}));new Promise(()=>{});function U1(e,t){t===void 0&&(t=[]);let n=[];return p.exports.Children.forEach(e,(r,u)=>{if(!p.exports.isValidElement(r))return;let i=[...t,u];if(r.type===p.exports.Fragment){n.push.apply(n,U1(r.props.children,i));return}r.type!==V&&ie(!1),!r.props.index||!r.props.children||ie(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=U1(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _r(){return _r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_r.apply(this,arguments)}function tl(e,t){if(e==null)return{};var n={},r=Object.keys(e),u,i;for(i=0;i<r.length;i++)u=r[i],!(t.indexOf(u)>=0)&&(n[u]=e[u]);return n}function I6(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function z6(e,t){return e.button===0&&(!t||t==="_self")&&!I6(e)}const _6=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],H6=["aria-current","caseSensitive","className","end","style","to","children"],j6="startTransition",Bo=qs[j6];function U6(e){let{basename:t,children:n,future:r,window:u}=e,i=p.exports.useRef();i.current==null&&(i.current=Q8({window:u,v5Compat:!0}));let o=i.current,[s,l]=p.exports.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=p.exports.useCallback(m=>{c&&Bo?Bo(()=>l(m)):l(m)},[l,c]);return p.exports.useLayoutEffect(()=>o.listen(d),[o,d]),p.exports.createElement(N6,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}const V6=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",W6=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rt=p.exports.forwardRef(function(t,n){let{onClick:r,relative:u,reloadDocument:i,replace:o,state:s,target:l,to:c,preventScrollReset:d}=t,m=tl(t,_6),{basename:g}=p.exports.useContext(N4),w,v=!1;if(typeof c=="string"&&W6.test(c)&&(w=c,V6))try{let h=new URL(window.location.href),C=c.startsWith("//")?new URL(h.protocol+c):new URL(c),S=si(C.pathname,g);C.origin===h.origin&&S!=null?c=S+C.search+C.hash:v=!0}catch{}let y=y6(c,{relative:u}),k=Z6(c,{replace:o,state:s,target:l,preventScrollReset:d,relative:u});function f(h){r&&r(h),h.defaultPrevented||k(h)}return p.exports.createElement("a",_r({},m,{href:w||y,onClick:v||i?r:f,ref:n,target:l}))}),dt=p.exports.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:u=!1,className:i="",end:o=!1,style:s,to:l,children:c}=t,d=tl(t,H6),m=pi(l,{relative:d.relative}),g=Nt(),w=p.exports.useContext(Ys),{navigator:v}=p.exports.useContext(N4),y=v.encodeLocation?v.encodeLocation(m).pathname:m.pathname,k=g.pathname,f=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;u||(k=k.toLowerCase(),f=f?f.toLowerCase():null,y=y.toLowerCase());let h=k===y||!o&&k.startsWith(y)&&k.charAt(y.length)==="/",C=f!=null&&(f===y||!o&&f.startsWith(y)&&f.charAt(y.length)==="/"),S=h?r:void 0,P;typeof i=="function"?P=i({isActive:h,isPending:C}):P=[i,h?"active":null,C?"pending":null].filter(Boolean).join(" ");let D=typeof s=="function"?s({isActive:h,isPending:C}):s;return p.exports.createElement(Rt,_r({},d,{"aria-current":S,className:P,ref:n,style:D,to:l}),typeof c=="function"?c({isActive:h,isPending:C}):c)});var Ro;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Ro||(Ro={}));var Oo;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Oo||(Oo={}));function Z6(e,t){let{target:n,replace:r,state:u,preventScrollReset:i,relative:o}=t===void 0?{}:t,s=di(),l=Nt(),c=pi(e,{relative:o});return p.exports.useCallback(d=>{if(z6(d,n)){d.preventDefault();let m=r!==void 0?r:Ir(l)===Ir(c);s(e,{replace:m,state:u,preventScrollReset:i,relative:o})}},[l,s,c,r,u,n,e,i,o])}var Ce=function(){return Ce=Object.assign||function(t){for(var n,r=1,u=arguments.length;r<u;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ce.apply(this,arguments)};function hn(e,t,n){if(n||arguments.length===2)for(var r=0,u=t.length,i;r<u;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Z="-ms-",J0="-moz-",j="-webkit-",nl="comm",wu="rule",hi="decl",Q6="@import",rl="@keyframes",q6="@layer",K6=Math.abs,mi=String.fromCharCode,V1=Object.assign;function G6(e,t){return he(e,0)^45?(((t<<2^he(e,0))<<2^he(e,1))<<2^he(e,2))<<2^he(e,3):0}function ul(e){return e.trim()}function Ft(e,t){return(e=t.exec(e))?e[0]:e}function N(e,t,n){return e.replace(t,n)}function yr(e,t){return e.indexOf(t)}function he(e,t){return e.charCodeAt(t)|0}function f0(e,t,n){return e.slice(t,n)}function mt(e){return e.length}function il(e){return e.length}function Q0(e,t){return t.push(e),e}function Y6(e,t){return e.map(t).join("")}function Mo(e,t){return e.filter(function(n){return!Ft(n,t)})}var Eu=1,h0=1,ol=0,tt=0,oe=0,L0="";function Su(e,t,n,r,u,i,o,s){return{value:e,root:t,parent:n,type:r,props:u,children:i,line:Eu,column:h0,length:o,return:"",siblings:s}}function Vt(e,t){return V1(Su("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function j4(e){for(;e.root;)e=Vt(e.root,{children:[e]});Q0(e,e.siblings)}function X6(){return oe}function J6(){return oe=tt>0?he(L0,--tt):0,h0--,oe===10&&(h0=1,Eu--),oe}function lt(){return oe=tt<ol?he(L0,tt++):0,h0++,oe===10&&(h0=1,Eu++),oe}function D4(){return he(L0,tt)}function xr(){return tt}function ku(e,t){return f0(L0,e,t)}function W1(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function e9(e){return Eu=h0=1,ol=mt(L0=e),tt=0,[]}function t9(e){return L0="",e}function t1(e){return ul(ku(tt-1,Z1(e===91?e+2:e===40?e+1:e)))}function n9(e){for(;(oe=D4())&&oe<33;)lt();return W1(e)>2||W1(oe)>3?"":" "}function r9(e,t){for(;--t&&lt()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return ku(e,xr()+(t<6&&D4()==32&&lt()==32))}function Z1(e){for(;lt();)switch(oe){case e:return tt;case 34:case 39:e!==34&&e!==39&&Z1(oe);break;case 40:e===41&&Z1(e);break;case 92:lt();break}return tt}function u9(e,t){for(;lt()&&e+oe!==47+10;)if(e+oe===42+42&&D4()===47)break;return"/*"+ku(t,tt-1)+"*"+mi(e===47?e:lt())}function i9(e){for(;!W1(D4());)lt();return ku(e,tt)}function o9(e){return t9(vr("",null,null,null,[""],e=e9(e),0,[0],e))}function vr(e,t,n,r,u,i,o,s,l){for(var c=0,d=0,m=o,g=0,w=0,v=0,y=1,k=1,f=1,h=0,C="",S=u,P=i,D=r,F=C;k;)switch(v=h,h=lt()){case 40:if(v!=108&&he(F,m-1)==58){yr(F+=N(t1(h),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:F+=t1(h);break;case 9:case 10:case 13:case 32:F+=n9(v);break;case 92:F+=r9(xr()-1,7);continue;case 47:switch(D4()){case 42:case 47:Q0(s9(u9(lt(),xr()),t,n,l),l);break;default:F+="/"}break;case 123*y:s[c++]=mt(F)*f;case 125*y:case 59:case 0:switch(h){case 0:case 125:k=0;case 59+d:f==-1&&(F=N(F,/\f/g,"")),w>0&&mt(F)-m&&Q0(w>32?To(F+";",r,n,m-1,l):To(N(F," ","")+";",r,n,m-2,l),l);break;case 59:F+=";";default:if(Q0(D=$o(F,t,n,c,d,u,s,C,S=[],P=[],m,i),i),h===123)if(d===0)vr(F,t,D,D,S,i,m,s,P);else switch(g===99&&he(F,3)===110?100:g){case 100:case 108:case 109:case 115:vr(e,D,D,r&&Q0($o(e,D,D,0,0,u,s,C,u,S=[],m,P),P),u,P,m,s,r?S:P);break;default:vr(F,D,D,D,[""],P,0,s,P)}}c=d=w=0,y=f=1,C=F="",m=o;break;case 58:m=1+mt(F),w=v;default:if(y<1){if(h==123)--y;else if(h==125&&y++==0&&J6()==125)continue}switch(F+=mi(h),h*y){case 38:f=d>0?1:(F+="\f",-1);break;case 44:s[c++]=(mt(F)-1)*f,f=1;break;case 64:D4()===45&&(F+=t1(lt())),g=D4(),d=m=mt(C=F+=i9(xr())),h++;break;case 45:v===45&&mt(F)==2&&(y=0)}}return i}function $o(e,t,n,r,u,i,o,s,l,c,d,m){for(var g=u-1,w=u===0?i:[""],v=il(w),y=0,k=0,f=0;y<r;++y)for(var h=0,C=f0(e,g+1,g=K6(k=o[y])),S=e;h<v;++h)(S=ul(k>0?w[h]+" "+C:N(C,/&\f/g,w[h])))&&(l[f++]=S);return Su(e,t,n,u===0?wu:s,l,c,d,m)}function s9(e,t,n,r){return Su(e,t,n,nl,mi(X6()),f0(e,2,-2),0,r)}function To(e,t,n,r,u){return Su(e,t,n,hi,f0(e,0,r),f0(e,r+1,-1),r,u)}function sl(e,t,n){switch(G6(e,t)){case 5103:return j+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return j+e+e;case 4789:return J0+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return j+e+J0+e+Z+e+e;case 5936:switch(he(e,t+11)){case 114:return j+e+Z+N(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return j+e+Z+N(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return j+e+Z+N(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return j+e+Z+e+e;case 6165:return j+e+Z+"flex-"+e+e;case 5187:return j+e+N(e,/(\w+).+(:[^]+)/,j+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return j+e+Z+"flex-item-"+N(e,/flex-|-self/g,"")+(Ft(e,/flex-|baseline/)?"":Z+"grid-row-"+N(e,/flex-|-self/g,""))+e;case 4675:return j+e+Z+"flex-line-pack"+N(e,/align-content|flex-|-self/g,"")+e;case 5548:return j+e+Z+N(e,"shrink","negative")+e;case 5292:return j+e+Z+N(e,"basis","preferred-size")+e;case 6060:return j+"box-"+N(e,"-grow","")+j+e+Z+N(e,"grow","positive")+e;case 4554:return j+N(e,/([^-])(transform)/g,"$1"+j+"$2")+e;case 6187:return N(N(N(e,/(zoom-|grab)/,j+"$1"),/(image-set)/,j+"$1"),e,"")+e;case 5495:case 3959:return N(e,/(image-set\([^]*)/,j+"$1$`$1");case 4968:return N(N(e,/(.+:)(flex-)?(.*)/,j+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+j+e+e;case 4200:if(!Ft(e,/flex-|baseline/))return Z+"grid-column-align"+f0(e,t)+e;break;case 2592:case 3360:return Z+N(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,u){return t=u,Ft(r.props,/grid-\w+-end/)})?~yr(e+(n=n[t].value),"span")?e:Z+N(e,"-start","")+e+Z+"grid-row-span:"+(~yr(n,"span")?Ft(n,/\d+/):+Ft(n,/\d+/)-+Ft(e,/\d+/))+";":Z+N(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Ft(r.props,/grid-\w+-start/)})?e:Z+N(N(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return N(e,/(.+)-inline(.+)/,j+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mt(e)-1-t>6)switch(he(e,t+1)){case 109:if(he(e,t+4)!==45)break;case 102:return N(e,/(.+:)(.+)-([^]+)/,"$1"+j+"$2-$3$1"+J0+(he(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~yr(e,"stretch")?sl(N(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return N(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,u,i,o,s,l,c){return Z+u+":"+i+c+(o?Z+u+"-span:"+(s?l:+l-+i)+c:"")+e});case 4949:if(he(e,t+6)===121)return N(e,":",":"+j)+e;break;case 6444:switch(he(e,he(e,14)===45?18:11)){case 120:return N(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+j+(he(e,14)===45?"inline-":"")+"box$3$1"+j+"$2$3$1"+Z+"$2box$3")+e;case 100:return N(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return N(e,"scroll-","scroll-snap-")+e}return e}function Hr(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function l9(e,t,n,r){switch(e.type){case q6:if(e.children.length)break;case Q6:case hi:return e.return=e.return||e.value;case nl:return"";case rl:return e.return=e.value+"{"+Hr(e.children,r)+"}";case wu:if(!mt(e.value=e.props.join(",")))return""}return mt(n=Hr(e.children,r))?e.return=e.value+"{"+n+"}":""}function a9(e){var t=il(e);return function(n,r,u,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,u,i)||"";return o}}function c9(e){return function(t){t.root||(t=t.return)&&e(t)}}function d9(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case hi:e.return=sl(e.value,e.length,n);return;case rl:return Hr([Vt(e,{value:N(e.value,"@","@"+j)})],r);case wu:if(e.length)return Y6(n=e.props,function(u){switch(Ft(u,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":j4(Vt(e,{props:[N(u,/:(read-\w+)/,":"+J0+"$1")]})),j4(Vt(e,{props:[u]})),V1(e,{props:Mo(n,r)});break;case"::placeholder":j4(Vt(e,{props:[N(u,/:(plac\w+)/,":"+j+"input-$1")]})),j4(Vt(e,{props:[N(u,/:(plac\w+)/,":"+J0+"$1")]})),j4(Vt(e,{props:[N(u,/:(plac\w+)/,Z+"input-$1")]})),j4(Vt(e,{props:[u]})),V1(e,{props:Mo(n,r)});break}return""})}}var p9={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},m0=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ci=typeof window!="undefined"&&"HTMLElement"in window,f9=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),h9={},Fu=Object.freeze([]),C0=Object.freeze({});function ll(e,t,n){return n===void 0&&(n=C0),e.theme!==n.theme&&e.theme||t||n.theme}var al=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),m9=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,C9=/(^-|-$)/g;function No(e){return e.replace(m9,"-").replace(C9,"")}var g9=/(a)(d)/gi,Io=function(e){return String.fromCharCode(e+(e>25?39:97))};function Q1(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Io(t%52)+n;return(Io(t%52)+n).replace(g9,"$1-$2")}var n1,Q4=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},cl=function(e){return Q4(5381,e)};function dl(e){return Q1(cl(e)>>>0)}function y9(e){return e.displayName||e.name||"Component"}function r1(e){return typeof e=="string"&&!0}var pl=typeof Symbol=="function"&&Symbol.for,fl=pl?Symbol.for("react.memo"):60115,x9=pl?Symbol.for("react.forward_ref"):60112,v9={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},w9={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hl={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},E9=((n1={})[x9]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},n1[fl]=hl,n1);function zo(e){return("type"in(t=e)&&t.type.$$typeof)===fl?hl:"$$typeof"in e?E9[e.$$typeof]:v9;var t}var S9=Object.defineProperty,k9=Object.getOwnPropertyNames,_o=Object.getOwnPropertySymbols,F9=Object.getOwnPropertyDescriptor,D9=Object.getPrototypeOf,Ho=Object.prototype;function ml(e,t,n){if(typeof t!="string"){if(Ho){var r=D9(t);r&&r!==Ho&&ml(e,r,n)}var u=k9(t);_o&&(u=u.concat(_o(t)));for(var i=zo(e),o=zo(t),s=0;s<u.length;++s){var l=u[s];if(!(l in w9||n&&n[l]||o&&l in o||i&&l in i)){var c=F9(t,l);try{S9(e,l,c)}catch{}}}}return e}function P4(e){return typeof e=="function"}function gi(e){return typeof e=="object"&&"styledComponentId"in e}function w4(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function q1(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function mn(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function K1(e,t,n){if(n===void 0&&(n=!1),!n&&!mn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=K1(e[r],t[r]);else if(mn(t))for(var r in t)e[r]=K1(e[r],t[r]);return e}function yi(e,t){Object.defineProperty(e,"toString",{value:t})}function A4(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var b9=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,u=r.length,i=u;t>=i;)if((i<<=1)<0)throw A4(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=u;o<i;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),u=r+n;this.groupSizes[t]=0;for(var i=r;i<u;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],u=this.indexOfGroup(t),i=u+r,o=u;o<i;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),wr=new Map,jr=new Map,u1=1,qn=function(e){if(wr.has(e))return wr.get(e);for(;jr.has(u1);)u1++;var t=u1++;return wr.set(e,t),jr.set(t,e),t},L9=function(e,t){wr.set(e,t),jr.set(t,e)},P9="style[".concat(m0,"][").concat("data-styled-version",'="').concat("6.0.5",'"]'),A9=new RegExp("^".concat(m0,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),B9=function(e,t,n){for(var r,u=n.split(","),i=0,o=u.length;i<o;i++)(r=u[i])&&e.registerName(t,r)},R9=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),u=[],i=0,o=r.length;i<o;i++){var s=r[i].trim();if(s){var l=s.match(A9);if(l){var c=0|parseInt(l[1],10),d=l[2];c!==0&&(L9(d,c),B9(e,d,l[3]),e.getTag().insertRules(c,u)),u.length=0}else u.push(s)}}};function O9(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Cl=function(e){var t=document.head,n=e||t,r=document.createElement("style"),u=function(s){var l=Array.from(s.querySelectorAll("style[".concat(m0,"]")));return l[l.length-1]}(n),i=u!==void 0?u.nextSibling:null;r.setAttribute(m0,"active"),r.setAttribute("data-styled-version","6.0.5");var o=O9();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},M9=function(){function e(t){this.element=Cl(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,u=0,i=r.length;u<i;u++){var o=r[u];if(o.ownerNode===n)return o}throw A4(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),$9=function(){function e(t){this.element=Cl(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),T9=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),jo=Ci,N9={isServer:!Ci,useCSSOMInjection:!f9},Ur=function(){function e(t,n,r){t===void 0&&(t=C0),n===void 0&&(n={});var u=this;this.options=Ce(Ce({},N9),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ci&&jo&&(jo=!1,function(i){for(var o=document.querySelectorAll(P9),s=0,l=o.length;s<l;s++){var c=o[s];c&&c.getAttribute(m0)!=="active"&&(R9(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),yi(this,function(){return function(i){for(var o=i.getTag(),s=o.length,l="",c=function(m){var g=function(f){return jr.get(f)}(m);if(g===void 0)return"continue";var w=i.names.get(g),v=o.getGroup(m);if(w===void 0||v.length===0)return"continue";var y="".concat(m0,".g").concat(m,'[id="').concat(g,'"]'),k="";w!==void 0&&w.forEach(function(f){f.length>0&&(k+="".concat(f,","))}),l+="".concat(v).concat(y,'{content:"').concat(k,'"}').concat(`/*!sc*/
`)},d=0;d<s;d++)c(d);return l}(u)})}return e.registerId=function(t){return qn(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ce(Ce({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,u=n.target;return n.isServer?new T9(u):r?new M9(u):new $9(u)}(this.options),new b9(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(qn(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(qn(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(qn(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),I9=/&/g,z9=/^\s*\/\/.*$/gm;function gl(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=gl(n.children,t)),n})}function _9(e){var t,n,r,u=e===void 0?C0:e,i=u.options,o=i===void 0?C0:i,s=u.plugins,l=s===void 0?Fu:s,c=function(g,w,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):g},d=l.slice();d.push(function(g){g.type===wu&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(I9,n).replace(r,c))}),o.prefix&&d.push(d9),d.push(l9);var m=function(g,w,v,y){w===void 0&&(w=""),v===void 0&&(v=""),y===void 0&&(y="&"),t=y,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var k=g.replace(z9,""),f=o9(v||w?"".concat(v," ").concat(w," { ").concat(k," }"):k);o.namespace&&(f=gl(f,o.namespace));var h=[];return Hr(f,a9(d.concat(c9(function(C){return h.push(C)})))),h};return m.hash=l.length?l.reduce(function(g,w){return w.name||A4(15),Q4(g,w.name)},5381).toString():"",m}var H9=new Ur,G1=_9(),yl=be.createContext({shouldForwardProp:void 0,styleSheet:H9,stylis:G1});yl.Consumer;be.createContext(void 0);function Y1(){return p.exports.useContext(yl)}var j9=function(){function e(t,n){var r=this;this.inject=function(u,i){i===void 0&&(i=G1);var o=r.name+i.hash;u.hasNameForId(r.id,o)||u.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,yi(this,function(){throw A4(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=G1),this.name+t.hash},e}(),U9=function(e){return e>="A"&&e<="Z"};function Uo(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;U9(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var xl=function(e){return e==null||e===!1||e===""},vl=function(e){var t,n,r=[];for(var u in e){var i=e[u];e.hasOwnProperty(u)&&!xl(i)&&(Array.isArray(i)&&i.isCss||P4(i)?r.push("".concat(Uo(u),":"),i,";"):mn(i)?r.push.apply(r,hn(hn(["".concat(u," {")],vl(i),!1),["}"],!1)):r.push("".concat(Uo(u),": ").concat((t=u,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in p9||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function e4(e,t,n,r){if(xl(e))return[];if(gi(e))return[".".concat(e.styledComponentId)];if(P4(e)){if(!P4(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var u=e(t);return e4(u,t,n,r)}var i;return e instanceof j9?n?(e.inject(n,r),[e.getName(r)]):[e]:mn(e)?vl(e):Array.isArray(e)?Array.prototype.concat.apply(Fu,e.map(function(o){return e4(o,t,n,r)})):[e.toString()]}function wl(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(P4(n)&&!gi(n))return!1}return!0}var V9=cl("6.0.5"),W9=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&wl(t),this.componentId=n,this.baseHash=Q4(V9,n),this.baseStyle=r,Ur.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))u=w4(u,this.staticRulesId);else{var i=q1(e4(this.rules,t,n,r)),o=Q1(Q4(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=r(i,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}u=w4(u,o),this.staticRulesId=o}else{for(var l=Q4(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var m=this.rules[d];if(typeof m=="string")c+=m;else if(m){var g=q1(e4(m,t,n,r));l=Q4(l,g),c+=g}}if(c){var w=Q1(l>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(c,".".concat(w),void 0,this.componentId)),u=w4(u,w)}}return u},e}(),Cn=be.createContext(void 0);Cn.Consumer;function Z9(e){var t=be.useContext(Cn),n=p.exports.useMemo(function(){return function(r,u){if(!r)throw A4(14);if(P4(r)){var i=r(u);return i}if(Array.isArray(r)||typeof r!="object")throw A4(8);return u?Ce(Ce({},u),r):r}(e.theme,t)},[e.theme,t]);return e.children?be.createElement(Cn.Provider,{value:n},e.children):null}var i1={};function Q9(e,t,n){var r=gi(e),u=e,i=!r1(e),o=t.attrs,s=o===void 0?Fu:o,l=t.componentId,c=l===void 0?function(C,S){var P=typeof C!="string"?"sc":No(C);i1[P]=(i1[P]||0)+1;var D="".concat(P,"-").concat(dl("6.0.5"+P+i1[P]));return S?"".concat(S,"-").concat(D):D}(t.displayName,t.parentComponentId):l,d=t.displayName;d===void 0&&function(C){return r1(C)?"styled.".concat(C):"Styled(".concat(y9(C),")")}(e);var m=t.displayName&&t.componentId?"".concat(No(t.displayName),"-").concat(t.componentId):t.componentId||c,g=r&&u.attrs?u.attrs.concat(s).filter(Boolean):s,w=t.shouldForwardProp;if(r&&u.shouldForwardProp){var v=u.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;w=function(C,S){return v(C,S)&&y(C,S)}}else w=v}var k=new W9(n,m,r?u.componentStyle:void 0);function f(C,S){return function(P,D,F){var b=P.attrs,I=P.componentStyle,T=P.defaultProps,ye=P.foldedComponentIds,zt=P.styledComponentId,Et=P.target,Wn=be.useContext(Cn),Yu=Y1(),m4=P.shouldForwardProp||Yu.shouldForwardProp,We=function(St,Ne,_t){for(var Ie,Ze=Ce(Ce({},Ne),{className:void 0,theme:_t}),Xu=0;Xu<St.length;Xu+=1){var Zn=P4(Ie=St[Xu])?Ie(Ze):Ie;for(var Ht in Zn)Ze[Ht]=Ht==="className"?w4(Ze[Ht],Zn[Ht]):Ht==="style"?Ce(Ce({},Ze[Ht]),Zn[Ht]):Zn[Ht]}return Ne.className&&(Ze.className=w4(Ze.className,Ne.className)),Ze}(b,D,ll(D,Wn,T)||C0),B=We.as||Et,M={};for(var $ in We)We[$]===void 0||$[0]==="$"||$==="as"||$==="theme"||($==="forwardedAs"?M.as=We.forwardedAs:m4&&!m4($,B)||(M[$]=We[$]));var K=function(St,Ne){var _t=Y1(),Ie=St.generateAndInjectStyles(Ne,_t.styleSheet,_t.stylis);return Ie}(I,We),te=w4(ye,zt);return K&&(te+=" "+K),We.className&&(te+=" "+We.className),M[r1(B)&&!al.has(B)?"class":"className"]=te,M.ref=F,p.exports.createElement(B,M)}(h,C,S)}var h=be.forwardRef(f);return h.attrs=g,h.componentStyle=k,h.shouldForwardProp=w,h.foldedComponentIds=r?w4(u.foldedComponentIds,u.styledComponentId):"",h.styledComponentId=m,h.target=r?u.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(S){for(var P=[],D=1;D<arguments.length;D++)P[D-1]=arguments[D];for(var F=0,b=P;F<b.length;F++)K1(S,b[F],!0);return S}({},u.defaultProps,C):C}}),yi(h,function(){return".".concat(h.styledComponentId)}),i&&ml(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Vo(e,t){for(var n=[e[0]],r=0,u=t.length;r<u;r+=1)n.push(t[r],e[r+1]);return n}var Wo=function(e){return Object.assign(e,{isCss:!0})};function I4(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(P4(e)||mn(e)){var r=e;return Wo(e4(Vo(Fu,hn([r],t,!0))))}var u=e;return t.length===0&&u.length===1&&typeof u[0]=="string"?e4(u):Wo(e4(Vo(u,t)))}function X1(e,t,n){if(n===void 0&&(n=C0),!t)throw A4(1,t);var r=function(u){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,I4.apply(void 0,hn([u],i,!1)))};return r.attrs=function(u){return X1(e,t,Ce(Ce({},n),{attrs:Array.prototype.concat(n.attrs,u).filter(Boolean)}))},r.withConfig=function(u){return X1(e,t,Ce(Ce({},n),u))},r}var El=function(e){return X1(Q9,e)},x=El;al.forEach(function(e){x[e]=El(e)});var q9=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=wl(t),Ur.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,u){var i=u(q1(e4(this.rules,n,r,u)),""),o=this.componentId+t;r.insertRules(o,o,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,u){t>2&&Ur.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,u)},e}();function K9(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=I4.apply(void 0,hn([e],t,!1)),u="sc-global-".concat(dl(JSON.stringify(r))),i=new q9(r,u),o=function(l){var c=Y1(),d=be.useContext(Cn),m=be.useRef(c.styleSheet.allocateGSInstance(u)).current;return c.styleSheet.server&&s(m,l,c.styleSheet,d,c.stylis),be.useLayoutEffect(function(){if(!c.styleSheet.server)return s(m,l,c.styleSheet,d,c.stylis),function(){return i.removeStyles(m,c.styleSheet)}},[m,l,c.styleSheet,d,c.stylis]),null};function s(l,c,d,m,g){if(i.isStatic)i.renderStyles(l,h9,d,g);else{var w=Ce(Ce({},c),{theme:ll(c,m,o.defaultProps)});i.renderStyles(l,w,d,g)}}return be.memo(o)}const O={colors:{background:"#F9F9F9",grey:"#ACABAB",lightGrey:"#CDCDCD",dark:"#2E2E2E",green:"#758650",lightGreen:"#B5C268",lightYellow:"#FFE27C",yellow:"#E8B535",midYellow:"#D7A323",darkYellow:"#B58200"},fonts:{openSans:"Open Sans"},fontSizes:{subheadline:"1rem",bodyText:"1.125rem",buttonText:"1.125rem",h3:"1.5rem",h2:"2.5rem",h1:"3.5rem",mobileSubheadline:"0.75rem",mobileBodyText:"1rem",mobileButtonText:"1rem",tabletH3:"1.5rem",tabletH2:"2.25rem",tabletH1:"2.625rem",mobileH3:"1.25rem",mobileH2:"1.75rem",mobileH1:"2rem"},fontWeights:{regular:400,semiBold:600,bold:700},lineHeights:{h1:1.2,normal:1.4},paddings:{container:"0 84px",containerTablet:"0 40px",containerMobile:"0 16px",button:"15.5px 24px",buttonTablet:"17px 12.5px",input:"12px"},transitions:{long:"all ease 0.3s",quick:"all ease 0.1s"},headerHeight:"96px"},ee=x.div`
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
`,ce=x.div`
  display: flex;
  flex-direction: ${({$direction:e})=>e};
  align-items: ${({$align:e})=>e};
  justify-content: ${({$justify:e})=>e};
  gap: ${({$gap:e})=>e};
  height: ${({$fullheight:e,$height:t})=>e?"calc(100vh - 96px)":t};
  width: ${({$width:e})=>e||"auto"};
`,xi=K9`
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
  scroll-behavior: smooth;
}
html {
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
`,G9=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:64,height:48,viewBox:"0 0 64 48",fill:"none",...e},p.exports.createElement("path",{d:"M11.2391 7.31769C11.2391 8.47842 10.9502 9.53822 10.3726 10.4971C9.79489 11.4391 9.02184 12.2298 8.05339 12.869C8.5631 12.9699 9.00485 13.1466 9.37863 13.3989C9.75242 13.6344 10.0582 13.9288 10.2961 14.2821C10.551 14.6353 10.7379 15.0391 10.8568 15.4933C10.9927 15.9307 11.0607 16.3933 11.0607 16.8811C11.0607 17.84 10.8313 18.6811 10.3726 19.4044C9.93082 20.111 9.35315 20.6997 8.63956 21.1708C7.92596 21.625 7.12742 21.9698 6.24393 22.2053C5.37742 22.424 4.51092 22.5334 3.64441 22.5334C3.16869 22.5334 2.69296 22.4997 2.21723 22.4324C1.7415 22.3651 1.29126 22.2474 0.866504 22.0792C0.713592 22.0287 0.586164 21.8268 0.484223 21.4736C0.382281 21.1035 0.29733 20.6577 0.229369 20.1362C0.178398 19.6147 0.135922 19.0512 0.101942 18.4456C0.0679611 17.84 0.0424757 17.2596 0.0254854 16.7045C0.00849513 16.1493 0 15.6615 0 15.2409C0 14.8204 0 14.526 0 14.3578C0 13.769 0 13.1802 0 12.5914C0 11.9858 0.0169903 11.3887 0.0509708 10.7999C0.0509708 10.6485 0.0509708 10.413 0.0509708 10.0933C0.0679611 9.77373 0.0764562 9.42046 0.0764562 9.03355C0.0934465 8.62982 0.110437 8.20926 0.127427 7.77188C0.161408 7.33451 0.195388 6.93078 0.229369 6.56069C0.28034 6.17378 0.339805 5.84575 0.407766 5.57659C0.492718 5.30744 0.586165 5.13921 0.688106 5.07193C1.07888 4.81959 1.51213 4.58408 1.98786 4.36539C2.46359 4.12988 2.95631 3.92802 3.46602 3.75979C3.97573 3.59157 4.48543 3.45699 4.99514 3.35606C5.50485 3.25513 5.98907 3.20466 6.44781 3.20466C7.07645 3.20466 7.67961 3.29718 8.25728 3.48222C8.85194 3.65045 9.36164 3.91119 9.7864 4.26446C10.2281 4.61773 10.5764 5.0551 10.8313 5.57659C11.1031 6.08126 11.2391 6.66162 11.2391 7.31769ZM7.00849 8.65505C7.00849 8.36907 6.91504 8.1588 6.72815 8.02422C6.55825 7.88964 6.32888 7.82235 6.04004 7.82235C5.80218 7.82235 5.54733 7.87282 5.27548 7.97375C5.02063 8.07468 4.79975 8.20926 4.61286 8.37749C4.56189 8.42795 4.51092 8.57094 4.45995 8.80645C4.42597 9.04196 4.39199 9.31112 4.35801 9.61392C4.34102 9.89989 4.32403 10.1775 4.30704 10.4466C4.30704 10.6989 4.30704 10.8672 4.30704 10.9513C4.30704 10.9849 4.30704 11.0438 4.30704 11.1279C4.30704 11.1952 4.30704 11.2709 4.30704 11.355C4.32403 11.4391 4.34102 11.5148 4.35801 11.5821C4.375 11.6494 4.40048 11.683 4.43446 11.683C4.7233 11.683 5.02063 11.5821 5.32645 11.3802C5.63228 11.1616 5.90412 10.9008 6.14199 10.598C6.39684 10.2784 6.60072 9.94195 6.75364 9.58868C6.92354 9.23542 7.00849 8.92421 7.00849 8.65505ZM6.90655 15.9475C6.90655 15.6615 6.80461 15.4596 6.60072 15.3419C6.39684 15.2241 6.16747 15.1652 5.91262 15.1652C5.67475 15.1652 5.4199 15.2241 5.14805 15.3419C4.8932 15.4428 4.68082 15.569 4.51092 15.7204C4.45995 15.754 4.41747 15.8381 4.38349 15.9727C4.3665 16.1073 4.34951 16.2587 4.33252 16.4269C4.33252 16.5783 4.32403 16.7297 4.30704 16.8811C4.30704 17.0157 4.30704 17.1082 4.30704 17.1587C4.30704 17.1923 4.30704 17.2596 4.30704 17.3605C4.30704 17.4615 4.30704 17.5708 4.30704 17.6886C4.32403 17.7895 4.34102 17.8904 4.35801 17.9914C4.39199 18.0755 4.42597 18.1175 4.45995 18.1175C4.69781 18.1175 4.96116 18.0502 5.25 17.9157C5.53883 17.7811 5.80218 17.6129 6.04004 17.411C6.2949 17.2091 6.49878 16.982 6.65169 16.7297C6.8216 16.4605 6.90655 16.1998 6.90655 15.9475Z",fill:"#758650"}),p.exports.createElement("path",{d:"M21.2039 5.09716C21.2039 5.41678 21.1274 5.70275 20.9745 5.95509C20.8386 6.20742 20.6517 6.42611 20.4138 6.61115C20.176 6.77938 19.9126 6.92236 19.6238 7.04012C19.3349 7.15787 19.0546 7.24199 18.7828 7.29245C18.7488 9.19336 18.6723 11.027 18.5534 12.7933C18.4514 14.5596 18.2815 16.3848 18.0437 18.2689H18.1966C18.4684 18.2689 18.7318 18.3026 18.9866 18.3699C19.2585 18.4203 19.4963 18.5213 19.7002 18.6727C19.9211 18.8072 20.091 18.9839 20.2099 19.2026C20.3459 19.4044 20.4138 19.6568 20.4138 19.9596C20.4138 20.3465 20.2864 20.6829 20.0315 20.9689C19.7937 21.2549 19.4709 21.4988 19.0631 21.7007C18.6723 21.9025 18.2306 22.0708 17.7378 22.2053C17.2451 22.3399 16.7524 22.4408 16.2597 22.5081C15.767 22.5922 15.2997 22.6511 14.858 22.6848C14.4163 22.7184 14.0595 22.7352 13.7876 22.7352C13.5837 22.7352 13.3289 22.7268 13.023 22.71C12.7342 22.6932 12.4539 22.6427 12.182 22.5586C11.9272 22.4745 11.7063 22.3483 11.5194 22.1801C11.3325 22.0119 11.2391 21.7848 11.2391 21.4988C11.2391 21.1455 11.3155 20.8343 11.4684 20.5652C11.6044 20.2792 11.7913 20.0269 12.0291 19.8082C12.267 19.5895 12.5303 19.4128 12.8192 19.2783C13.125 19.1437 13.4308 19.0428 13.7366 18.9755C13.8556 18.0502 13.966 17.1334 14.068 16.225C14.1699 15.2998 14.2379 14.3662 14.2718 13.4241C14.3058 12.4653 14.3398 11.5232 14.3738 10.598C14.4078 9.65597 14.4417 8.71393 14.4757 7.77188C14.3568 7.78871 14.2463 7.80553 14.1444 7.82235C14.0425 7.82235 13.949 7.82235 13.8641 7.82235C13.6262 7.82235 13.3714 7.79712 13.0995 7.74665C12.8277 7.69619 12.5728 7.61207 12.3349 7.49432C12.0971 7.35974 11.8932 7.19993 11.7233 7.01488C11.5704 6.82984 11.4939 6.59434 11.4939 6.30836C11.4939 5.7364 11.7318 5.26538 12.2075 4.89529C12.7002 4.5252 13.2779 4.23923 13.9405 4.03736C14.6201 3.83549 15.3082 3.70092 16.0048 3.63363C16.7014 3.54952 17.2621 3.50746 17.6869 3.50746C17.9247 3.50746 18.2391 3.52428 18.6298 3.55793C19.0206 3.59157 19.4029 3.66727 19.7767 3.78502C20.1675 3.90278 20.4988 4.06259 20.7706 4.26446C21.0595 4.46633 21.2039 4.74389 21.2039 5.09716Z",fill:"#758650"}),p.exports.createElement("path",{d:"M32.9781 16.1746C32.8252 16.9316 32.5789 17.7222 32.2391 18.5465C31.9162 19.354 31.4915 20.0941 30.9648 20.767C30.4551 21.4399 29.8434 21.9866 29.1298 22.4072C28.4162 22.8446 27.6007 23.0633 26.6832 23.0633C26.0036 23.0633 25.392 22.9287 24.8483 22.6595C24.3046 22.3904 23.8119 22.0287 23.3701 21.5745C22.9284 21.1203 22.5461 20.5988 22.2233 20.01C21.9005 19.4213 21.6286 18.8157 21.4077 18.1932C21.2039 17.554 21.051 16.9232 20.949 16.3007C20.8471 15.6783 20.7961 15.098 20.7961 14.5596C20.7961 13.8026 20.8641 12.9952 21 12.1372C21.1529 11.2625 21.3738 10.4046 21.6626 9.56345C21.9514 8.70552 22.3167 7.88964 22.7585 7.11582C23.2002 6.32518 23.7184 5.63547 24.3131 5.04669C24.9247 4.44109 25.6043 3.96166 26.3519 3.60839C27.1165 3.23831 27.966 3.05326 28.9005 3.05326C29.4951 3.05326 30.0473 3.17101 30.557 3.40652C31.0667 3.62521 31.5085 3.92801 31.8823 4.31492C32.256 4.68501 32.5449 5.1308 32.7488 5.65229C32.9696 6.17377 33.0801 6.7205 33.0801 7.29245V7.51955C33.0801 7.82235 33.0631 8.20085 33.0291 8.65505C33.0121 9.09243 32.9357 9.51299 32.7997 9.91672C32.6638 10.3205 32.4599 10.6737 32.1881 10.9765C31.9162 11.2625 31.534 11.4055 31.0412 11.4055C30.4466 11.4055 29.9963 11.2709 29.6905 11.0017C29.3847 10.7326 29.2318 10.2868 29.2318 9.66438C29.2318 9.42887 29.2403 9.19336 29.2573 8.95785C29.2743 8.72234 29.2827 8.48683 29.2827 8.25132C29.2827 7.89805 29.2233 7.6289 29.1043 7.44385C28.9854 7.24199 28.7391 7.14105 28.3653 7.14105C27.9405 7.14105 27.5582 7.27563 27.2184 7.54478C26.8786 7.81394 26.5813 8.16721 26.3264 8.60459C26.0716 9.04196 25.8507 9.53822 25.6638 10.0933C25.4769 10.6485 25.324 11.212 25.2051 11.784C25.0861 12.3391 25.0012 12.8774 24.9502 13.3989C24.8993 13.9204 24.8738 14.3662 24.8738 14.7363C24.8738 15.0391 24.8908 15.3923 24.9247 15.7961C24.9587 16.183 25.0267 16.5615 25.1286 16.9316C25.2476 17.2848 25.4175 17.5876 25.6383 17.84C25.8592 18.0923 26.148 18.2185 26.5048 18.2185C27.1165 18.2185 27.6092 18.0334 27.983 17.6633C28.3568 17.2764 28.6116 16.7886 28.7476 16.1998C28.5097 16.1662 28.2718 16.1157 28.034 16.0484C27.8131 15.9643 27.6007 15.8549 27.3968 15.7204C27.2099 15.569 27.057 15.3923 26.9381 15.1905C26.8192 14.9718 26.7597 14.7195 26.7597 14.4335C26.7597 13.912 26.9381 13.5083 27.2949 13.2223C27.6517 12.9195 28.0679 12.6924 28.5437 12.541C29.0364 12.3896 29.5376 12.2971 30.0473 12.2634C30.557 12.2129 30.9648 12.1877 31.2706 12.1877C31.4915 12.1877 31.8143 12.2045 32.2391 12.2382C32.6638 12.2718 33.0801 12.3475 33.4878 12.4653C33.9126 12.5662 34.2779 12.7176 34.5837 12.9195C34.8895 13.1213 35.0424 13.3821 35.0424 13.7017C35.0424 14.341 34.864 14.8961 34.5073 15.3671C34.1674 15.8213 33.6577 16.0905 32.9781 16.1746Z",fill:"#758650"}),p.exports.createElement("path",{d:"M12.1311 43.7103C12.1311 44.1309 11.9527 44.5262 11.5959 44.8963C11.2561 45.2664 10.8058 45.6028 10.2451 45.9056C9.70146 46.2084 9.0898 46.4776 8.41019 46.7131C7.73058 46.9318 7.05946 47.1168 6.39684 47.2682C5.73422 47.4365 5.10558 47.5626 4.51092 47.6467C3.93325 47.7308 3.47451 47.7729 3.13471 47.7729C2.81189 47.7729 2.46359 47.7393 2.08981 47.672C1.73301 47.6215 1.43568 47.4953 1.19782 47.2935C1.0619 47.1925 0.942964 46.9654 0.841023 46.6122C0.739081 46.2589 0.637137 45.8383 0.535196 45.3505C0.450244 44.8627 0.373788 44.3412 0.305827 43.786C0.237866 43.2141 0.178398 42.659 0.127427 42.1206C0.0934468 41.5823 0.0594706 41.0861 0.0254901 40.6319C0.00849982 40.1777 0 39.8244 0 39.5721C0 39.1515 0.00849982 38.6469 0.0254901 38.0581C0.0594706 37.4525 0.101943 36.8132 0.152914 36.1404C0.203884 35.4506 0.271844 34.7525 0.356796 34.046C0.441747 33.3395 0.535195 32.675 0.637137 32.0526C0.756069 31.4133 0.891989 30.8414 1.0449 30.3367C1.2148 29.832 1.39321 29.4367 1.5801 29.1507C1.90292 28.6965 2.31068 28.4694 2.8034 28.4694C3.1432 28.4694 3.43204 28.5872 3.6699 28.8227C3.90777 29.0414 4.09466 29.3358 4.23058 29.7059C4.38349 30.0591 4.49393 30.4629 4.56189 30.9171C4.64685 31.3544 4.70631 31.7918 4.74029 32.2292C4.77427 32.6666 4.79126 33.0703 4.79126 33.4404C4.79126 33.8105 4.79126 34.1049 4.79126 34.3236C4.79126 35.6357 4.75728 36.9394 4.68932 38.2347C4.63835 39.5132 4.61286 40.8085 4.61286 42.1206V43.1047C5.37743 42.8692 6.20995 42.6505 7.11044 42.4487C8.01092 42.23 8.86893 42.1206 9.68447 42.1206C9.9733 42.1206 10.2621 42.1375 10.551 42.1711C10.8568 42.2048 11.1201 42.2805 11.341 42.3982C11.5789 42.4991 11.7658 42.659 11.9017 42.8776C12.0546 43.0795 12.1311 43.3571 12.1311 43.7103Z",fill:"#758650"}),p.exports.createElement("path",{d:"M25.6383 43.458C25.6383 43.7945 25.6043 44.1982 25.5364 44.6692C25.4854 45.1402 25.375 45.5944 25.2051 46.0318C25.0352 46.4524 24.8058 46.814 24.517 47.1168C24.2281 47.4028 23.8459 47.5458 23.3701 47.5458C22.7415 47.5458 22.2658 47.3187 21.943 46.8645C21.6371 46.4103 21.4163 45.872 21.2803 45.2496C21.1444 44.6103 21.0595 43.9627 21.0255 43.3066C21.0085 42.6505 20.9915 42.1291 20.9745 41.7421C19.7512 41.944 18.5449 42.1206 17.3556 42.272C17.3216 42.659 17.2451 43.1384 17.1262 43.7103C17.0243 44.2823 16.8544 44.8374 16.6165 45.3757C16.3956 45.8972 16.0983 46.3514 15.7245 46.7383C15.3677 47.1253 14.926 47.3187 14.3993 47.3187C13.9915 47.3187 13.6687 47.1757 13.4308 46.8897C13.2099 46.5869 13.04 46.2337 12.9211 45.8299C12.8022 45.4262 12.7257 45.0141 12.6917 44.5935C12.6748 44.1561 12.6663 43.7945 12.6663 43.5085C12.6663 42.5496 12.7427 41.6076 12.8956 40.6823C13.0485 39.7403 13.2269 38.8067 13.4308 37.8815C13.5328 37.3936 13.6687 36.8217 13.8386 36.1656C14.0085 35.5095 14.2124 34.8366 14.4502 34.1469C14.7051 33.4404 14.9939 32.7507 15.3167 32.0778C15.6565 31.3881 16.0388 30.7741 16.4636 30.2358C16.8883 29.6975 17.3726 29.2601 17.9163 28.9236C18.4599 28.5872 19.0631 28.419 19.7257 28.419C20.3713 28.419 20.932 28.562 21.4078 28.8479C21.8835 29.1339 22.2997 29.5124 22.6565 29.9834C23.0133 30.4545 23.3107 30.9928 23.5485 31.5984C23.7864 32.1871 23.9818 32.7927 24.1347 33.4152C24.3046 34.0208 24.4405 34.618 24.5425 35.2067C24.6614 35.7955 24.7633 36.317 24.8483 36.7712C25.0692 37.8646 25.256 38.9749 25.409 40.102C25.5619 41.2122 25.6383 42.3309 25.6383 43.458ZM20.7196 37.3263C20.7196 37.1245 20.7027 36.7964 20.6687 36.3422C20.6517 35.8712 20.6007 35.4086 20.5158 34.9544C20.4308 34.4834 20.2949 34.0712 20.108 33.718C19.9381 33.3479 19.7002 33.1628 19.3944 33.1628C19.2245 33.1628 19.0631 33.2806 18.9102 33.5161C18.7573 33.7348 18.6213 34.0208 18.5024 34.374C18.3835 34.7105 18.273 35.089 18.1711 35.5095C18.0862 35.9301 18.0097 36.3338 17.9417 36.7207C17.8738 37.1076 17.8228 37.4609 17.7888 37.7805C17.7548 38.0833 17.7294 38.302 17.7124 38.4366C18.7318 38.3525 19.7342 38.2263 20.7196 38.0581V37.3263Z",fill:"#758650"}),p.exports.createElement("path",{d:"M39.1201 33.6675C39.1201 34.5759 38.9162 35.4675 38.5085 36.3422C38.1177 37.217 37.591 38.0076 36.9284 38.7141C36.2657 39.4039 35.5097 39.9758 34.6602 40.43C33.8107 40.8674 32.9357 41.1113 32.0352 41.1618C32.0182 41.4646 32.0012 41.8515 31.9842 42.3225C31.9842 42.7767 31.9587 43.2561 31.9077 43.7608C31.8568 44.2655 31.7803 44.7701 31.6784 45.2748C31.5934 45.7795 31.4575 46.2337 31.2706 46.6374C31.1007 47.0411 30.8713 47.3692 30.5825 47.6215C30.3107 47.8738 29.9709 48 29.5631 48C29.0874 48 28.7051 47.8402 28.4162 47.5206C28.1444 47.2178 27.932 46.8477 27.7791 46.4103C27.6432 45.9729 27.5497 45.5187 27.4988 45.0477C27.4478 44.5599 27.4138 44.1477 27.3968 43.8113C27.3628 43.3234 27.3374 42.844 27.3204 42.373C27.3204 41.902 27.3204 41.4225 27.3204 40.9347C27.3204 40.716 27.3204 40.3123 27.3204 39.7235C27.3204 39.1179 27.3204 38.4366 27.3204 37.6796C27.3374 36.9058 27.3543 36.1067 27.3713 35.2824C27.3883 34.4413 27.4138 33.6675 27.4478 32.961C27.4818 32.2376 27.5158 31.6236 27.5497 31.1189C27.6007 30.6143 27.6602 30.3199 27.7281 30.2358C27.7451 30.2189 27.7961 30.1853 27.8811 30.1348C27.966 30.0675 28.0595 30.0087 28.1614 29.9582C28.2633 29.8909 28.3568 29.832 28.4417 29.7816C28.5267 29.7311 28.5861 29.6975 28.6201 29.6806C29.4017 29.2433 30.2597 28.8648 31.1942 28.5451C32.1286 28.2255 33.0546 28.0657 33.9721 28.0657C34.7536 28.0657 35.4587 28.2255 36.0873 28.5451C36.733 28.8479 37.2767 29.2601 37.7184 29.7816C38.1772 30.2862 38.5255 30.8834 38.7633 31.5731C39.0012 32.246 39.1201 32.9441 39.1201 33.6675ZM34.7111 34.2479C34.7111 33.9114 34.6262 33.617 34.4563 33.3647C34.3034 33.1124 34.04 32.9862 33.6662 32.9862C33.3434 32.9862 33.0206 33.0535 32.6978 33.1881C32.375 33.3058 32.0777 33.432 31.8058 33.5666C31.8568 34.1553 31.8993 34.7273 31.9332 35.2824C31.9842 35.8376 31.9927 36.4095 31.9587 36.9983C32.2306 36.8637 32.5279 36.7123 32.8507 36.5441C33.1735 36.359 33.4708 36.1572 33.7427 35.9385C34.0145 35.7198 34.2439 35.4759 34.4308 35.2067C34.6177 34.9207 34.7111 34.6011 34.7111 34.2479Z",fill:"#758650"}),p.exports.createElement("path",{d:"M52.0922 43.458C52.0922 43.7945 52.0582 44.1982 51.9903 44.6692C51.9393 45.1402 51.8288 45.5944 51.6589 46.0318C51.489 46.4524 51.2597 46.814 50.9708 47.1168C50.682 47.4028 50.2997 47.5458 49.824 47.5458C49.1954 47.5458 48.7196 47.3187 48.3968 46.8645C48.091 46.4103 47.8701 45.872 47.7342 45.2496C47.5983 44.6103 47.5133 43.9627 47.4793 43.3066C47.4623 42.6505 47.4454 42.1291 47.4284 41.7421C46.2051 41.944 44.9988 42.1206 43.8094 42.272C43.7755 42.659 43.699 43.1384 43.5801 43.7103C43.4781 44.2823 43.3082 44.8374 43.0704 45.3757C42.8495 45.8972 42.5522 46.3514 42.1784 46.7383C41.8216 47.1253 41.3798 47.3187 40.8531 47.3187C40.4454 47.3187 40.1225 47.1757 39.8847 46.8897C39.6638 46.5869 39.4939 46.2337 39.375 45.8299C39.256 45.4262 39.1796 45.0141 39.1456 44.5935C39.1286 44.1561 39.1201 43.7945 39.1201 43.5085C39.1201 42.5496 39.1966 41.6076 39.3495 40.6823C39.5024 39.7403 39.6808 38.8067 39.8847 37.8815C39.9866 37.3936 40.1225 36.8217 40.2924 36.1656C40.4623 35.5095 40.6662 34.8366 40.9041 34.1469C41.159 33.4404 41.4478 32.7507 41.7706 32.0778C42.1104 31.3881 42.4927 30.7741 42.9174 30.2358C43.3422 29.6975 43.8264 29.2601 44.3701 28.9236C44.9138 28.5872 45.517 28.419 46.1796 28.419C46.8252 28.419 47.3859 28.562 47.8616 28.8479C48.3374 29.1339 48.7536 29.5124 49.1104 29.9834C49.4672 30.4545 49.7645 30.9928 50.0024 31.5984C50.2403 32.1871 50.4357 32.7927 50.5886 33.4152C50.7585 34.0208 50.8944 34.618 50.9963 35.2067C51.1153 35.7955 51.2172 36.317 51.3021 36.7712C51.523 37.8646 51.7099 38.9749 51.8628 40.102C52.0157 41.2122 52.0922 42.3309 52.0922 43.458ZM47.1735 37.3263C47.1735 37.1245 47.1565 36.7964 47.1225 36.3422C47.1056 35.8712 47.0546 35.4086 46.9696 34.9544C46.8847 34.4834 46.7488 34.0712 46.5619 33.718C46.392 33.3479 46.1541 33.1628 45.8483 33.1628C45.6784 33.1628 45.517 33.2806 45.364 33.5161C45.2111 33.7348 45.0752 34.0208 44.9563 34.374C44.8374 34.7105 44.7269 35.089 44.625 35.5095C44.54 35.9301 44.4636 36.3338 44.3956 36.7207C44.3276 37.1076 44.2767 37.4609 44.2427 37.7805C44.2087 38.0833 44.1832 38.302 44.1662 38.4366C45.1856 38.3525 46.1881 38.2263 47.1735 38.0581V37.3263Z",fill:"#758650"}),p.exports.createElement("path",{d:"M57.2817 1.09879C53.6383 0.62618 52.6744 8.18767 56.141 8.63861C59.5488 9.0825 60.8661 1.56431 57.2817 1.09879ZM50.2933 0.0267887C50.2393 0.0186128 50.1852 0.0138761 50.1289 0.00910539C46.4695 -0.298862 45.9141 7.30568 49.3961 7.6C52.7655 7.88527 53.6992 0.545837 50.2933 0.0267887ZM43.9644 4.48051C43.8573 4.46077 43.7489 4.44845 43.64 4.44365C39.9737 4.28077 39.7774 11.9105 43.2659 12.0668C46.5882 12.216 47.2082 5.07309 43.9644 4.48051ZM62.0768 7.66507C58.4675 6.98011 56.9746 14.4554 60.4088 15.1085C63.7844 15.7508 65.6277 8.33947 62.0768 7.66507ZM51.8882 10.383C48.1643 9.83004 50.3674 14.1158 43.4251 15.2017C38.0443 16.0433 40.2244 21.722 44.5718 22.4834C46.9579 22.9014 48.1354 21.1807 50.0887 21.5232C52.3066 21.9118 52.1923 23.6165 55.4388 24.1852C59.5841 24.9111 62.8887 20.138 58.4498 17.5662C52.7981 14.2918 55.956 11.1173 52.0712 10.4143C52.009 10.4032 51.9473 10.3918 51.8882 10.383Z",fill:"#758650"})),Y9=x.header`
  width: 100%;
  height: 96px;
  padding: 24px 0;
  border-bottom: 1px solid #cdcdcd66;
  /* text */
  color: ${O.colors.dark};
  /* Desktop & 1280 px/H3 */
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  /* Flex */
  display: flex;
  align-items: center;
  gap: 2.7%;
`,X9=x(G9)``;var Du={exports:{}},bu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J9=p.exports,e7=Symbol.for("react.element"),t7=Symbol.for("react.fragment"),n7=Object.prototype.hasOwnProperty,r7=J9.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u7={key:!0,ref:!0,__self:!0,__source:!0};function Sl(e,t,n){var r,u={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)n7.call(t,r)&&!u7.hasOwnProperty(r)&&(u[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)u[r]===void 0&&(u[r]=t[r]);return{$$typeof:e7,type:e,key:i,ref:o,props:u,_owner:r7.current}}bu.Fragment=t7;bu.jsx=Sl;bu.jsxs=Sl;Du.exports=bu;const a=Du.exports.jsx,E=Du.exports.jsxs,Ye=Du.exports.Fragment;function kl(){return E(Y9,{children:[a(dt,{to:".",end:!0,children:a(X9,{})}),"\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u044C"]})}const i7=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:4,height:29,viewBox:"0 0 4 29",fill:"none",...e},p.exports.createElement("path",{d:"M2 2L2 27",stroke:"#758650",strokeWidth:4,strokeLinecap:"round"})),o7=x.span`
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
`,s7=x(i7)`
  display: ${({$active:e})=>!e&&" none"};
  height: 100%;
  position: absolute;
  left: -16px;
`,l7=x.button`
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
`;function C4(e){const{children:t,text:n,link:r}=e;return a(l7,{children:E(Rt,{to:r,children:[a(s7,{$active:(()=>Nt().pathname===r)()})," ",t," ",a(o7,{children:n})]})})}const a7=x.div`
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
`,c7=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},p.exports.createElement("path",{d:"M3 18.5831C3.13419 18.2799 3.37368 18.1711 3.71043 18.1859C4.11081 18.2035 4.51301 18.1978 4.91411 18.188C5.46074 18.1749 5.99567 18.2052 6.50537 18.5138C6.50976 18.425 6.51451 18.3648 6.51488 18.3046C6.52073 17.4086 6.49294 16.5112 6.53755 15.6173C6.63554 13.6454 7.55877 12.075 9.13979 10.8462C9.47545 10.5852 9.8239 10.3394 10.1599 10.0784C11.2345 9.24403 11.7764 8.15928 11.7947 6.8301C11.8163 5.26531 12.9077 3.94634 14.4865 3.59345C14.7447 3.53569 15.0152 3.51315 15.2807 3.50681C15.8277 3.49378 16.375 3.50857 16.922 3.50011C17.1582 3.49659 17.34 3.57408 17.5038 3.73573C17.9667 4.19217 18.4361 4.64298 18.9107 5.08886C18.9718 5.14627 19.0756 5.18888 19.1605 5.18994C19.7864 5.19839 20.4128 5.19381 21.0391 5.19487C21.4735 5.19557 21.6852 5.40055 21.6834 5.82318C21.6815 6.25039 21.7155 6.68253 21.6618 7.10411C21.5119 8.27656 20.5616 9.06371 19.3294 9.07604C18.9528 9.07991 18.5765 9.07674 18.1685 9.07674V9.28982C18.1685 10.5549 18.1604 11.82 18.1707 13.0847C18.1824 14.5308 17.6504 15.7321 16.4902 16.6654C16.4434 16.7031 16.4098 16.782 16.4087 16.8422C16.4017 17.2754 16.4087 17.709 16.4025 18.1422C16.401 18.2419 16.4419 18.2824 16.5308 18.3218C17.2156 18.6272 17.563 19.1498 17.5794 19.8743C17.5864 20.1905 17.5696 20.5072 17.5842 20.8227C17.5992 21.1475 17.4789 21.3778 17.1593 21.5H5.00699C4.97993 21.4891 4.95397 21.4732 4.92581 21.4687C4.22123 21.3464 3.67314 20.9932 3.32396 20.3941C3.17587 20.1402 3.10567 19.8436 3 19.5668C3 19.2386 3 18.9107 3 18.5824V18.5831ZM16.4858 20.4371C16.4858 20.248 16.4891 20.0676 16.4851 19.8873C16.4763 19.5002 16.2624 19.2812 15.8639 19.2446C15.5202 19.2129 15.3147 19.0139 15.3121 18.6832C15.3063 17.9509 15.3096 17.2187 15.311 16.4865C15.3114 16.2939 15.3845 16.1329 15.5531 16.0192C16.6215 15.2982 17.091 14.2991 17.0778 13.0548C17.0624 11.5963 17.0741 10.1379 17.0741 8.67947C17.0741 8.2033 17.2624 8.02439 17.7579 8.02227C18.3414 8.01981 18.9261 8.03214 19.5086 8.00537C19.9992 7.98248 20.4373 7.62676 20.5367 7.16645C20.6 6.87448 20.5861 6.56736 20.608 6.24969C20.0084 6.24969 19.4504 6.24405 18.8925 6.2525C18.6625 6.25603 18.4855 6.18171 18.3261 6.02464C17.8581 5.56432 17.3835 5.11034 16.9067 4.65813C16.8558 4.60988 16.7765 4.56303 16.7096 4.56233C16.1867 4.55529 15.6631 4.54613 15.141 4.56303C14.0445 4.59861 13.0536 5.43577 12.9337 6.4846C12.8627 7.10411 12.8832 7.73594 12.9018 8.36108C12.9121 8.7087 13.1377 8.95876 13.4763 9.08872C14.077 9.3194 14.7117 8.89924 14.7209 8.26C14.73 7.61584 14.7202 6.97133 14.7249 6.32717C14.7275 5.99998 14.9629 5.7626 15.2708 5.76049C15.5812 5.75838 15.8156 5.99329 15.8167 6.32189C15.8193 6.99528 15.8273 7.66938 15.8112 8.34242C15.7922 9.14154 15.2544 9.82902 14.469 10.0956C13.6982 10.3573 12.8371 10.1379 12.2945 9.54164C12.2594 9.50325 12.2229 9.46591 12.1995 9.44091C11.9643 9.73429 11.7687 10.0562 11.4974 10.2996C10.9651 10.7771 10.4023 11.2258 9.83048 11.6597C8.3544 12.779 7.63263 14.2483 7.61398 16.0428C7.59936 17.4424 7.61106 18.8427 7.61106 20.2423C7.61106 20.305 7.61106 20.3677 7.61106 20.4371H13.4448C13.3179 19.8303 12.5943 19.2812 11.8872 19.2477C11.3793 19.2238 11.221 19.0516 11.2067 18.5585C11.1976 18.2447 11.2104 17.9136 11.112 17.6224C10.8477 16.8405 10.2429 16.4594 9.3972 16.4119C9.06557 16.3932 8.85386 16.159 8.87032 15.8565C8.88567 15.5705 9.12809 15.3532 9.44729 15.3648C9.65863 15.3725 9.87326 15.3937 10.0788 15.4405C11.3705 15.7367 12.2627 16.8046 12.3073 18.0894C12.3091 18.1436 12.3351 18.2313 12.3728 18.2447C12.5625 18.313 12.7596 18.3623 12.9666 18.4218C12.9666 18.3444 12.9666 18.2806 12.9666 18.2165C12.9666 17.6424 12.9647 17.0684 12.9673 16.4943C12.9684 16.2132 13.1318 16.0033 13.3845 15.9452C13.7432 15.8624 14.0591 16.1111 14.0602 16.4855C14.0631 17.3698 14.0609 18.2545 14.062 19.1389C14.062 19.1963 14.0518 19.2685 14.0818 19.3094C14.3359 19.6517 14.5052 20.0296 14.5999 20.4364H16.4869L16.4858 20.4371ZM4.1013 19.2551C4.09253 19.8137 4.47571 20.3057 5.02344 20.4054C5.29438 20.4547 5.57848 20.4381 5.85709 20.4452C6.07319 20.4505 6.28928 20.4462 6.50354 20.4462C6.52804 19.8482 6.08562 19.3129 5.49146 19.2629C5.03514 19.2245 4.57224 19.2551 4.1013 19.2551Z",fill:"#2E2E2E",stroke:"#2E2E2E",strokeWidth:.346154})),d7=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},p.exports.createElement("path",{d:"M17.4775 20.5676L17.4802 20.5664C17.7625 20.4383 18.0549 20.1843 18.2722 19.8563C18.4905 19.5271 18.5922 19.1861 18.5806 18.9116L17.4775 20.5676ZM17.4775 20.5676C16.8707 20.8456 16.1515 20.7269 15.1446 20.403C14.9831 20.351 14.8074 20.2915 14.625 20.2298C14.2937 20.1176 13.94 19.9978 13.608 19.9018C13.0725 19.7468 12.4893 19.6194 11.8899 19.6194C11.2866 19.6194 10.6994 19.7529 10.1625 19.9136C9.83697 20.011 9.48639 20.1332 9.15846 20.2476C8.96963 20.3134 8.78831 20.3766 8.62362 20.431C7.61425 20.7641 6.91651 20.8725 6.33836 20.5801L6.33838 20.5801M17.4775 20.5676L6.33838 20.5801M6.33838 20.5801L6.32992 20.5759M6.33838 20.5801L6.32992 20.5759M6.32992 20.5759C5.99748 20.413 5.679 20.0924 5.4562 19.6795M6.32992 20.5759L5.4562 19.6795M5.4562 19.6795C5.23321 19.2662 5.14162 18.8263 5.18449 18.4694M5.4562 19.6795L5.18449 18.4694M5.18449 18.4694C5.23924 18.0162 5.54314 17.6031 6.11628 17.106C6.33346 16.9177 6.56256 16.739 6.8087 16.547C6.88364 16.4885 6.96015 16.4288 7.03839 16.3673C7.35968 16.1144 7.70261 15.8353 8.00396 15.526C8.40049 15.1288 8.75584 14.658 9.08021 14.21C9.16171 14.0975 9.24096 13.9868 9.31884 13.878C9.5632 13.5368 9.79403 13.2144 10.0383 12.9119C10.6945 12.0996 11.2516 11.6894 11.8899 11.6894C12.5298 11.6894 13.1003 12.0984 13.7587 12.9013C14.035 13.2382 14.2973 13.6065 14.5743 13.9957C14.6199 14.0597 14.6658 14.1242 14.7123 14.1893C15.0309 14.6353 15.3746 15.1057 15.748 15.5073C16.0549 15.8441 16.4052 16.1601 16.7338 16.4519C16.7739 16.4876 16.8137 16.5228 16.8531 16.5577C17.1474 16.8186 17.4223 17.0621 17.673 17.3144C18.25 17.8949 18.558 18.3874 18.5806 18.9113L5.18449 18.4694ZM10.4048 6.54809L10.405 6.5489C10.5605 7.31346 10.4879 7.99542 10.2897 8.47327C10.0909 8.95236 9.80984 9.1494 9.55681 9.18799L9.55586 9.18814C9.29345 9.22851 8.91442 9.1154 8.5079 8.69687C8.11032 8.28754 7.76351 7.65316 7.60421 6.88678L7.60404 6.88596C7.44508 6.12554 7.5192 5.44586 7.72016 4.9673C7.92043 4.49038 8.20515 4.2849 8.463 4.2409C8.73399 4.20445 9.11272 4.32412 9.5125 4.73875C9.90744 5.14835 10.2498 5.78189 10.4048 6.54809ZM14.303 9.18799L14.3021 9.18785C14.0423 9.14856 13.7602 8.94948 13.5627 8.47327C13.3651 7.99708 13.2944 7.31667 13.4541 6.55288L13.455 6.54809C13.61 5.78189 13.9525 5.14797 14.3467 4.73808C14.7469 4.32194 15.1231 4.20477 15.3869 4.2409C15.6502 4.28503 15.935 4.49103 16.1364 4.96844C16.3383 5.44709 16.4148 6.12687 16.2652 6.88837C16.1005 7.65518 15.7536 8.28847 15.3569 8.69687C14.9515 9.11431 14.5721 9.22904 14.303 9.18799ZM3.298 8.78764C3.58841 8.66369 4.00896 8.6836 4.50602 8.96313C4.99558 9.23845 5.4851 9.73181 5.82942 10.3858C6.14963 11.0567 6.23536 11.7063 6.15368 12.201C6.07217 12.6946 5.84339 12.9734 5.57153 13.0913C5.28633 13.215 4.87181 13.1975 4.38282 12.9198C3.89932 12.6451 3.41521 12.1487 3.07987 11.4823C2.74561 10.818 2.65637 10.1671 2.73657 9.67018C2.81671 9.17372 3.04523 8.8988 3.298 8.78764ZM20.7018 8.78762C20.9545 8.89876 21.1831 9.17368 21.2632 9.67018C21.3434 10.1671 21.2542 10.818 20.9199 11.4823C20.5846 12.1487 20.1005 12.6451 19.617 12.9198C19.128 13.1975 18.7135 13.215 18.4283 13.0913C18.1564 12.9734 17.9276 12.6946 17.8461 12.201C17.7645 11.7063 17.8502 11.0567 18.1704 10.3858C18.5147 9.73181 19.0042 9.23845 19.4938 8.96313C19.9908 8.68362 20.4113 8.6637 20.7018 8.78762Z",stroke:"#2E2E2E",strokeWidth:1.5})),p7=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},p.exports.createElement("path",{d:"M15 8.5H15.01M3 6.5C3 5.70435 3.31607 4.94129 3.87868 4.37868C4.44129 3.81607 5.20435 3.5 6 3.5H18C18.7956 3.5 19.5587 3.81607 20.1213 4.37868C20.6839 4.94129 21 5.70435 21 6.5V18.5C21 19.2956 20.6839 20.0587 20.1213 20.6213C19.5587 21.1839 18.7956 21.5 18 21.5H6C5.20435 21.5 4.44129 21.1839 3.87868 20.6213C3.31607 20.0587 3 19.2956 3 18.5V6.5Z",stroke:"#2E2E2E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.exports.createElement("path",{d:"M3 16.4998L8 11.4998C8.928 10.6068 10.072 10.6068 11 11.4998L16 16.4998",stroke:"#2E2E2E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.exports.createElement("path",{d:"M14 14.4998L15 13.4998C15.928 12.6068 17.072 12.6068 18 13.4998L21 16.4998",stroke:"#2E2E2E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),f7=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},p.exports.createElement("path",{d:"M15.75 13.5C15.75 13.3011 15.671 13.1103 15.5303 12.9697C15.3897 12.829 15.1989 12.75 15 12.75H9C8.80109 12.75 8.61032 12.829 8.46967 12.9697C8.32902 13.1103 8.25 13.3011 8.25 13.5C8.25 13.6989 8.32902 13.8897 8.46967 14.0303C8.61032 14.171 8.80109 14.25 9 14.25H15C15.1989 14.25 15.3897 14.171 15.5303 14.0303C15.671 13.8897 15.75 13.6989 15.75 13.5ZM15.75 17.5C15.75 17.3011 15.671 17.1103 15.5303 16.9697C15.3897 16.829 15.1989 16.75 15 16.75H9C8.80109 16.75 8.61032 16.829 8.46967 16.9697C8.32902 17.1103 8.25 17.3011 8.25 17.5C8.25 17.6989 8.32902 17.8897 8.46967 18.0303C8.61032 18.171 8.80109 18.25 9 18.25H15C15.1989 18.25 15.3897 18.171 15.5303 18.0303C15.671 17.8897 15.75 17.6989 15.75 17.5Z",fill:"#2E2E2E"}),p.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2.75C6.27065 2.75 5.57118 3.03973 5.05546 3.55546C4.53973 4.07118 4.25 4.77065 4.25 5.5V19.5C4.25 20.2293 4.53973 20.9288 5.05546 21.4445C5.57118 21.9603 6.27065 22.25 7 22.25H17C17.7293 22.25 18.4288 21.9603 18.9445 21.4445C19.4603 20.9288 19.75 20.2293 19.75 19.5V8.468C19.75 8.087 19.626 7.717 19.396 7.413L16.398 3.445C16.2349 3.22912 16.0239 3.054 15.7817 2.93341C15.5395 2.81282 15.2726 2.75004 15.002 2.75H7ZM5.75 5.5C5.75 4.81 6.31 4.25 7 4.25H14.25V8.647C14.25 9.061 14.586 9.397 15 9.397H18.25V19.5C18.25 20.19 17.69 20.75 17 20.75H7C6.31 20.75 5.75 20.19 5.75 19.5V5.5Z",fill:"#2E2E2E"})),h7=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},p.exports.createElement("path",{d:"M21.8881 17.4201V20.4201C21.8892 20.6986 21.8322 20.9743 21.7206 21.2294C21.6091 21.4846 21.4454 21.7137 21.2402 21.902C21.035 22.0902 20.7927 22.2336 20.5289 22.3228C20.265 22.412 19.9855 22.4452 19.7081 22.4201C16.631 22.0857 13.6751 21.0342 11.0781 19.3501C8.66194 17.8148 6.61345 15.7663 5.07812 13.3501C3.38809 10.7413 2.33636 7.77109 2.00812 4.6801C1.98313 4.40356 2.01599 4.12486 2.10462 3.86172C2.19324 3.59859 2.33569 3.35679 2.52288 3.15172C2.71008 2.94665 2.93792 2.78281 3.19191 2.67062C3.44589 2.55843 3.72046 2.50036 3.99812 2.5001H6.99812C7.48342 2.49532 7.95391 2.66718 8.32188 2.98363C8.68985 3.30008 8.93019 3.73954 8.99812 4.2201C9.12474 5.18016 9.35957 6.12282 9.69812 7.0301C9.83266 7.38802 9.86178 7.77701 9.78202 8.15098C9.70227 8.52494 9.51698 8.86821 9.24812 9.1401L7.97812 10.4101C9.40167 12.9136 11.4746 14.9865 13.9781 16.4101L15.2481 15.1401C15.52 14.8712 15.8633 14.6859 16.2372 14.6062C16.6112 14.5264 17.0002 14.5556 17.3581 14.6901C18.2654 15.0286 19.2081 15.2635 20.1681 15.3901C20.6539 15.4586 21.0975 15.7033 21.4146 16.0776C21.7318 16.4519 21.9003 16.9297 21.8881 17.4201Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),m7=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:21,viewBox:"0 0 20 21",fill:"none",...e},p.exports.createElement("path",{d:"M17.4298 11.48C17.4698 11.16 17.4998 10.84 17.4998 10.5C17.4998 10.16 17.4698 9.84005 17.4298 9.52005L19.5398 7.87005C19.7298 7.72005 19.7798 7.45005 19.6598 7.23005L17.6598 3.77005C17.6009 3.66687 17.5071 3.58807 17.3953 3.54775C17.2836 3.50744 17.1611 3.50825 17.0498 3.55005L14.5598 4.55005C14.0398 4.15005 13.4798 3.82005 12.8698 3.57005L12.4898 0.920047C12.4733 0.802388 12.4144 0.694807 12.3242 0.617483C12.234 0.540158 12.1186 0.498402 11.9998 0.500047H7.99984C7.74984 0.500047 7.53984 0.680047 7.50984 0.920047L7.12984 3.57005C6.51984 3.82005 5.95984 4.16005 5.43984 4.55005L2.94984 3.55005C2.89186 3.53038 2.83107 3.52025 2.76984 3.52005C2.59984 3.52005 2.42984 3.61005 2.33984 3.77005L0.339839 7.23005C0.209839 7.45005 0.26984 7.72005 0.45984 7.87005L2.56984 9.52005C2.52984 9.84005 2.49984 10.17 2.49984 10.5C2.49984 10.83 2.52984 11.16 2.56984 11.48L0.45984 13.13C0.26984 13.28 0.219839 13.55 0.339839 13.77L2.33984 17.23C2.39879 17.3332 2.49256 17.412 2.60434 17.4523C2.71612 17.4927 2.8386 17.4918 2.94984 17.45L5.43984 16.45C5.95984 16.85 6.51984 17.18 7.12984 17.43L7.50984 20.08C7.53984 20.32 7.74984 20.5 7.99984 20.5H11.9998C12.2498 20.5 12.4598 20.32 12.4898 20.08L12.8698 17.43C13.4798 17.18 14.0398 16.84 14.5598 16.45L17.0498 17.45C17.1098 17.47 17.1698 17.48 17.2298 17.48C17.3998 17.48 17.5698 17.39 17.6598 17.23L19.6598 13.77C19.7798 13.55 19.7298 13.28 19.5398 13.13L17.4298 11.48ZM15.4498 9.77005C15.4898 10.08 15.4998 10.29 15.4998 10.5C15.4998 10.71 15.4798 10.93 15.4498 11.23L15.3098 12.36L16.1998 13.06L17.2798 13.9L16.5798 15.11L15.3098 14.6L14.2698 14.18L13.3698 14.86C12.9398 15.18 12.5298 15.42 12.1198 15.59L11.0598 16.02L10.8998 17.15L10.6998 18.5H9.29984L9.10984 17.15L8.94984 16.02L7.88984 15.59C7.45984 15.41 7.05984 15.18 6.65984 14.88L5.74984 14.18L4.68984 14.61L3.41984 15.12L2.71984 13.91L3.79984 13.07L4.68984 12.37L4.54984 11.24C4.51984 10.93 4.49984 10.7 4.49984 10.5C4.49984 10.3 4.51984 10.07 4.54984 9.77005L4.68984 8.64005L3.79984 7.94005L2.71984 7.10005L3.41984 5.89005L4.68984 6.40005L5.72984 6.82005L6.62984 6.14005C7.05984 5.82005 7.46984 5.58005 7.87984 5.41005L8.93984 4.98005L9.09984 3.85005L9.29984 2.50005H10.6898L10.8798 3.85005L11.0398 4.98005L12.0998 5.41005C12.5298 5.59005 12.9298 5.82005 13.3298 6.12005L14.2398 6.82005L15.2998 6.39005L16.5698 5.88005L17.2698 7.09005L16.1998 7.94005L15.3098 8.64005L15.4498 9.77005ZM9.99984 6.50005C7.78984 6.50005 5.99984 8.29005 5.99984 10.5C5.99984 12.71 7.78984 14.5 9.99984 14.5C12.2098 14.5 13.9998 12.71 13.9998 10.5C13.9998 8.29005 12.2098 6.50005 9.99984 6.50005ZM9.99984 12.5C8.89984 12.5 7.99984 11.6 7.99984 10.5C7.99984 9.40005 8.89984 8.50005 9.99984 8.50005C11.0998 8.50005 11.9998 9.40005 11.9998 10.5C11.9998 11.6 11.0998 12.5 9.99984 12.5Z",fill:"#2E2E2E"})),C7=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},p.exports.createElement("path",{d:"M17 8.5L15.6 9.9L17.2 11.5H9V13.5H17.2L15.6 15.1L17 16.5L21 12.5L17 8.5ZM5 5.5H12V3.5H5C3.9 3.5 3 4.4 3 5.5V19.5C3 20.6 3.9 21.5 5 21.5H12V19.5H5V5.5Z",fill:"#FF4141"}));function g7(){return E(a7,{children:[a(C4,{link:"/admin",text:"\u041A\u0430\u0440\u0442\u043A\u0438 \u0441\u043E\u0431\u0430\u043A",children:a(c7,{})}),a(C4,{link:"/admin/partners",text:"\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u0438",children:a(d7,{})}),a(C4,{link:"/admin/sliders",text:"\u0421\u043B\u0430\u0439\u0434\u0435\u0440\u0438",children:a(p7,{})}),a(C4,{link:"/admin/reports",text:"\u0417\u0432\u0456\u0442\u043D\u0456\u0441\u0442\u044C",children:a(f7,{})}),a(C4,{link:"/admin/contacts",text:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",children:a(h7,{})}),a(C4,{link:"/admin/settings",text:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",children:a(m7,{})}),a(C4,{link:"/logout",text:"Log out",children:a(C7,{})})]})}function y7(){return E(ee,{style:{padding:"0 2.7%"},children:[a(xi,{}),a(kl,{}),E(ce,{children:[a(g7,{}),a(vu,{})]})]})}class P0{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){const n={listener:t};return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}const gn=typeof window=="undefined"||"Deno"in window;function Qe(){}function x7(e,t){return typeof e=="function"?e(t):e}function J1(e){return typeof e=="number"&&e>=0&&e!==1/0}function Fl(e,t){return Math.max(e+(t||0)-Date.now(),0)}function q0(e,t,n){return In(e)?typeof t=="function"?{...n,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function v7(e,t,n){return In(e)?typeof t=="function"?{...n,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:typeof e=="function"?{...t,mutationFn:e}:{...e}}function Wt(e,t,n){return In(e)?[{...t,queryKey:e},n]:[e||{},t]}function Zo(e,t){const{type:n="all",exact:r,fetchStatus:u,predicate:i,queryKey:o,stale:s}=e;if(In(o)){if(r){if(t.queryHash!==vi(o,t.options))return!1}else if(!Vr(t.queryKey,o))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof s=="boolean"&&t.isStale()!==s||typeof u!="undefined"&&u!==t.state.fetchStatus||i&&!i(t))}function Qo(e,t){const{exact:n,fetching:r,predicate:u,mutationKey:i}=e;if(In(i)){if(!t.options.mutationKey)return!1;if(n){if(E4(t.options.mutationKey)!==E4(i))return!1}else if(!Vr(t.options.mutationKey,i))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||u&&!u(t))}function vi(e,t){return((t==null?void 0:t.queryKeyHashFn)||E4)(e)}function E4(e){return JSON.stringify(e,(t,n)=>t3(n)?Object.keys(n).sort().reduce((r,u)=>(r[u]=n[u],r),{}):n)}function Vr(e,t){return Dl(e,t)}function Dl(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!Dl(e[n],t[n])):!1}function bl(e,t){if(e===t)return e;const n=qo(e)&&qo(t);if(n||t3(e)&&t3(t)){const r=n?e.length:Object.keys(e).length,u=n?t:Object.keys(t),i=u.length,o=n?[]:{};let s=0;for(let l=0;l<i;l++){const c=n?l:u[l];o[c]=bl(e[c],t[c]),o[c]===e[c]&&s++}return r===i&&s===r?e:o}return t}function e3(e,t){if(e&&!t||t&&!e)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function qo(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function t3(e){if(!Ko(e))return!1;const t=e.constructor;if(typeof t=="undefined")return!0;const n=t.prototype;return!(!Ko(n)||!n.hasOwnProperty("isPrototypeOf"))}function Ko(e){return Object.prototype.toString.call(e)==="[object Object]"}function In(e){return Array.isArray(e)}function Ll(e){return new Promise(t=>{setTimeout(t,e)})}function Go(e){Ll(0).then(e)}function w7(){if(typeof AbortController=="function")return new AbortController}function n3(e,t,n){return n.isDataEqual!=null&&n.isDataEqual(e,t)?e:typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?bl(e,t):t}class E7 extends P0{constructor(){super(),this.setup=t=>{if(!gn&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),()=>{window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var n;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(t){this.focused!==t&&(this.focused=t,this.onFocus())}onFocus(){this.listeners.forEach(({listener:t})=>{t()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document=="undefined"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const Wr=new E7,Yo=["online","offline"];class S7 extends P0{constructor(){super(),this.setup=t=>{if(!gn&&window.addEventListener){const n=()=>t();return Yo.forEach(r=>{window.addEventListener(r,n,!1)}),()=>{Yo.forEach(r=>{window.removeEventListener(r,n)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var n;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(r=>{typeof r=="boolean"?this.setOnline(r):this.onOnline()})}setOnline(t){this.online!==t&&(this.online=t,this.onOnline())}onOnline(){this.listeners.forEach(({listener:t})=>{t()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator=="undefined"||typeof navigator.onLine=="undefined"?!0:navigator.onLine}}const Zr=new S7;function k7(e){return Math.min(1e3*2**e,3e4)}function Lu(e){return(e!=null?e:"online")==="online"?Zr.isOnline():!0}class Pl{constructor(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}}function Er(e){return e instanceof Pl}function Al(e){let t=!1,n=0,r=!1,u,i,o;const s=new Promise((k,f)=>{i=k,o=f}),l=k=>{r||(w(new Pl(k)),e.abort==null||e.abort())},c=()=>{t=!0},d=()=>{t=!1},m=()=>!Wr.isFocused()||e.networkMode!=="always"&&!Zr.isOnline(),g=k=>{r||(r=!0,e.onSuccess==null||e.onSuccess(k),u==null||u(),i(k))},w=k=>{r||(r=!0,e.onError==null||e.onError(k),u==null||u(),o(k))},v=()=>new Promise(k=>{u=f=>{const h=r||!m();return h&&k(f),h},e.onPause==null||e.onPause()}).then(()=>{u=void 0,r||e.onContinue==null||e.onContinue()}),y=()=>{if(r)return;let k;try{k=e.fn()}catch(f){k=Promise.reject(f)}Promise.resolve(k).then(g).catch(f=>{var h,C;if(r)return;const S=(h=e.retry)!=null?h:3,P=(C=e.retryDelay)!=null?C:k7,D=typeof P=="function"?P(n,f):P,F=S===!0||typeof S=="number"&&n<S||typeof S=="function"&&S(n,f);if(t||!F){w(f);return}n++,e.onFail==null||e.onFail(n,f),Ll(D).then(()=>{if(m())return v()}).then(()=>{t?w(f):y()})})};return Lu(e.networkMode)?y():v().then(y),{promise:s,cancel:l,continue:()=>(u==null?void 0:u())?s:Promise.resolve(),cancelRetry:c,continueRetry:d}}const wi=console;function F7(){let e=[],t=0,n=d=>{d()},r=d=>{d()};const u=d=>{let m;t++;try{m=d()}finally{t--,t||s()}return m},i=d=>{t?e.push(d):Go(()=>{n(d)})},o=d=>(...m)=>{i(()=>{d(...m)})},s=()=>{const d=e;e=[],d.length&&Go(()=>{r(()=>{d.forEach(m=>{n(m)})})})};return{batch:u,batchCalls:o,schedule:i,setNotifyFunction:d=>{n=d},setBatchNotifyFunction:d=>{r=d}}}const re=F7();class Bl{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),J1(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,t!=null?t:gn?1/0:5*60*1e3)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class D7 extends Bl{constructor(t){super(),this.abortSignalConsumed=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.logger=t.logger||wi,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||b7(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(t,n){const r=n3(this.state.data,t,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){this.dispatch({type:"setState",state:t,setStateOptions:n})}cancel(t){var n;const r=this.promise;return(n=this.retryer)==null||n.cancel(t),r?r.then(Qe).catch(Qe):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!Fl(this.state.dataUpdatedAt,t)}onFocus(){var t;const n=this.observers.find(r=>r.shouldFetchOnWindowFocus());n&&n.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}onOnline(){var t;const n=this.observers.find(r=>r.shouldFetchOnReconnect());n&&n.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(t,n){var r,u;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&n!=null&&n.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var i;return(i=this.retryer)==null||i.continueRetry(),this.promise}}if(t&&this.setOptions(t),!this.options.queryFn){const w=this.observers.find(v=>v.options.queryFn);w&&this.setOptions(w.options)}Array.isArray(this.options.queryKey);const o=w7(),s={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},l=w=>{Object.defineProperty(w,"signal",{enumerable:!0,get:()=>{if(o)return this.abortSignalConsumed=!0,o.signal}})};l(s);const c=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(s)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),d={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:c};if(l(d),(r=this.options.behavior)==null||r.onFetch(d),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((u=d.fetchOptions)==null?void 0:u.meta)){var m;this.dispatch({type:"fetch",meta:(m=d.fetchOptions)==null?void 0:m.meta})}const g=w=>{if(Er(w)&&w.silent||this.dispatch({type:"error",error:w}),!Er(w)){var v,y,k,f;(v=(y=this.cache.config).onError)==null||v.call(y,w,this),(k=(f=this.cache.config).onSettled)==null||k.call(f,this.state.data,w,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=Al({fn:d.fetchFn,abort:o==null?void 0:o.abort.bind(o),onSuccess:w=>{var v,y,k,f;if(typeof w=="undefined"){g(new Error(this.queryHash+" data is undefined"));return}this.setData(w),(v=(y=this.cache.config).onSuccess)==null||v.call(y,w,this),(k=(f=this.cache.config).onSettled)==null||k.call(f,w,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:g,onFail:(w,v)=>{this.dispatch({type:"failed",failureCount:w,error:v})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:d.options.retry,retryDelay:d.options.retryDelay,networkMode:d.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(t){const n=r=>{var u,i;switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(u=t.meta)!=null?u:null,fetchStatus:Lu(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(i=t.dataUpdatedAt)!=null?i:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=t.error;return Er(o)&&o.revert&&this.revertState?{...this.revertState}:{...r,error:o,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),re.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate(t)}),this.cache.notify({query:this,type:"updated",action:t})})}}function b7(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=typeof t!="undefined",r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r!=null?r:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}class L7 extends P0{constructor(t){super(),this.config=t||{},this.queries=[],this.queriesMap={}}build(t,n,r){var u;const i=n.queryKey,o=(u=n.queryHash)!=null?u:vi(i,n);let s=this.get(o);return s||(s=new D7({cache:this,logger:t.getLogger(),queryKey:i,queryHash:o,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(i)}),this.add(s)),s}add(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"added",query:t}))}remove(t){const n=this.queriesMap[t.queryHash];n&&(t.destroy(),this.queries=this.queries.filter(r=>r!==t),n===t&&delete this.queriesMap[t.queryHash],this.notify({type:"removed",query:t}))}clear(){re.batch(()=>{this.queries.forEach(t=>{this.remove(t)})})}get(t){return this.queriesMap[t]}getAll(){return this.queries}find(t,n){const[r]=Wt(t,n);return typeof r.exact=="undefined"&&(r.exact=!0),this.queries.find(u=>Zo(r,u))}findAll(t,n){const[r]=Wt(t,n);return Object.keys(r).length>0?this.queries.filter(u=>Zo(r,u)):this.queries}notify(t){re.batch(()=>{this.listeners.forEach(({listener:n})=>{n(t)})})}onFocus(){re.batch(()=>{this.queries.forEach(t=>{t.onFocus()})})}onOnline(){re.batch(()=>{this.queries.forEach(t=>{t.onOnline()})})}}class P7 extends Bl{constructor(t){super(),this.defaultOptions=t.defaultOptions,this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||wi,this.observers=[],this.state=t.state||Rl(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter(n=>n!==t),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var t,n;return(t=(n=this.retryer)==null?void 0:n.continue())!=null?t:this.execute()}async execute(){const t=()=>{var F;return this.retryer=Al({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(b,I)=>{this.dispatch({type:"failed",failureCount:b,error:I})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(F=this.options.retry)!=null?F:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},n=this.state.status==="loading";try{var r,u,i,o,s,l,c,d;if(!n){var m,g,w,v;this.dispatch({type:"loading",variables:this.options.variables}),await((m=(g=this.mutationCache.config).onMutate)==null?void 0:m.call(g,this.state.variables,this));const b=await((w=(v=this.options).onMutate)==null?void 0:w.call(v,this.state.variables));b!==this.state.context&&this.dispatch({type:"loading",context:b,variables:this.state.variables})}const F=await t();return await((r=(u=this.mutationCache.config).onSuccess)==null?void 0:r.call(u,F,this.state.variables,this.state.context,this)),await((i=(o=this.options).onSuccess)==null?void 0:i.call(o,F,this.state.variables,this.state.context)),await((s=(l=this.mutationCache.config).onSettled)==null?void 0:s.call(l,F,null,this.state.variables,this.state.context,this)),await((c=(d=this.options).onSettled)==null?void 0:c.call(d,F,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:F}),F}catch(F){try{var y,k,f,h,C,S,P,D;throw await((y=(k=this.mutationCache.config).onError)==null?void 0:y.call(k,F,this.state.variables,this.state.context,this)),await((f=(h=this.options).onError)==null?void 0:f.call(h,F,this.state.variables,this.state.context)),await((C=(S=this.mutationCache.config).onSettled)==null?void 0:C.call(S,void 0,F,this.state.variables,this.state.context,this)),await((P=(D=this.options).onSettled)==null?void 0:P.call(D,void 0,F,this.state.variables,this.state.context)),F}finally{this.dispatch({type:"error",error:F})}}}dispatch(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"loading":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!Lu(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...r,...t.state}}};this.state=n(this.state),re.batch(()=>{this.observers.forEach(r=>{r.onMutationUpdate(t)}),this.mutationCache.notify({mutation:this,type:"updated",action:t})})}}function Rl(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class A7 extends P0{constructor(t){super(),this.config=t||{},this.mutations=[],this.mutationId=0}build(t,n,r){const u=new P7({mutationCache:this,logger:t.getLogger(),mutationId:++this.mutationId,options:t.defaultMutationOptions(n),state:r,defaultOptions:n.mutationKey?t.getMutationDefaults(n.mutationKey):void 0});return this.add(u),u}add(t){this.mutations.push(t),this.notify({type:"added",mutation:t})}remove(t){this.mutations=this.mutations.filter(n=>n!==t),this.notify({type:"removed",mutation:t})}clear(){re.batch(()=>{this.mutations.forEach(t=>{this.remove(t)})})}getAll(){return this.mutations}find(t){return typeof t.exact=="undefined"&&(t.exact=!0),this.mutations.find(n=>Qo(t,n))}findAll(t){return this.mutations.filter(n=>Qo(t,n))}notify(t){re.batch(()=>{this.listeners.forEach(({listener:n})=>{n(t)})})}resumePausedMutations(){var t;return this.resuming=((t=this.resuming)!=null?t:Promise.resolve()).then(()=>{const n=this.mutations.filter(r=>r.state.isPaused);return re.batch(()=>n.reduce((r,u)=>r.then(()=>u.continue().catch(Qe)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function B7(){return{onFetch:e=>{e.fetchFn=()=>{var t,n,r,u,i,o;const s=(t=e.fetchOptions)==null||(n=t.meta)==null?void 0:n.refetchPage,l=(r=e.fetchOptions)==null||(u=r.meta)==null?void 0:u.fetchMore,c=l==null?void 0:l.pageParam,d=(l==null?void 0:l.direction)==="forward",m=(l==null?void 0:l.direction)==="backward",g=((i=e.state.data)==null?void 0:i.pages)||[],w=((o=e.state.data)==null?void 0:o.pageParams)||[];let v=w,y=!1;const k=D=>{Object.defineProperty(D,"signal",{enumerable:!0,get:()=>{var F;if((F=e.signal)!=null&&F.aborted)y=!0;else{var b;(b=e.signal)==null||b.addEventListener("abort",()=>{y=!0})}return e.signal}})},f=e.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+e.options.queryHash+"'")),h=(D,F,b,I)=>(v=I?[F,...v]:[...v,F],I?[b,...D]:[...D,b]),C=(D,F,b,I)=>{if(y)return Promise.reject("Cancelled");if(typeof b=="undefined"&&!F&&D.length)return Promise.resolve(D);const T={queryKey:e.queryKey,pageParam:b,meta:e.options.meta};k(T);const ye=f(T);return Promise.resolve(ye).then(Et=>h(D,b,Et,I))};let S;if(!g.length)S=C([]);else if(d){const D=typeof c!="undefined",F=D?c:Xo(e.options,g);S=C(g,D,F)}else if(m){const D=typeof c!="undefined",F=D?c:R7(e.options,g);S=C(g,D,F,!0)}else{v=[];const D=typeof e.options.getNextPageParam=="undefined";S=(s&&g[0]?s(g[0],0,g):!0)?C([],D,w[0]):Promise.resolve(h([],w[0],g[0]));for(let b=1;b<g.length;b++)S=S.then(I=>{if(s&&g[b]?s(g[b],b,g):!0){const ye=D?w[b]:Xo(e.options,I);return C(I,D,ye)}return Promise.resolve(h(I,w[b],g[b]))})}return S.then(D=>({pages:D,pageParams:v}))}}}}function Xo(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function R7(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}class O7{constructor(t={}){this.queryCache=t.queryCache||new L7,this.mutationCache=t.mutationCache||new A7,this.logger=t.logger||wi,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=Wr.subscribe(()=>{Wr.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=Zr.subscribe(()=>{Zr.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var t,n;this.mountCount--,this.mountCount===0&&((t=this.unsubscribeFocus)==null||t.call(this),this.unsubscribeFocus=void 0,(n=this.unsubscribeOnline)==null||n.call(this),this.unsubscribeOnline=void 0)}isFetching(t,n){const[r]=Wt(t,n);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(t){return this.mutationCache.findAll({...t,fetching:!0}).length}getQueryData(t,n){var r;return(r=this.queryCache.find(t,n))==null?void 0:r.state.data}ensureQueryData(t,n,r){const u=q0(t,n,r),i=this.getQueryData(u.queryKey);return i?Promise.resolve(i):this.fetchQuery(u)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:n,state:r})=>{const u=r.data;return[n,u]})}setQueryData(t,n,r){const u=this.queryCache.find(t),i=u==null?void 0:u.state.data,o=x7(n,i);if(typeof o=="undefined")return;const s=q0(t),l=this.defaultQueryOptions(s);return this.queryCache.build(this,l).setData(o,{...r,manual:!0})}setQueriesData(t,n,r){return re.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:u})=>[u,this.setQueryData(u,n,r)]))}getQueryState(t,n){var r;return(r=this.queryCache.find(t,n))==null?void 0:r.state}removeQueries(t,n){const[r]=Wt(t,n),u=this.queryCache;re.batch(()=>{u.findAll(r).forEach(i=>{u.remove(i)})})}resetQueries(t,n,r){const[u,i]=Wt(t,n,r),o=this.queryCache,s={type:"active",...u};return re.batch(()=>(o.findAll(u).forEach(l=>{l.reset()}),this.refetchQueries(s,i)))}cancelQueries(t,n,r){const[u,i={}]=Wt(t,n,r);typeof i.revert=="undefined"&&(i.revert=!0);const o=re.batch(()=>this.queryCache.findAll(u).map(s=>s.cancel(i)));return Promise.all(o).then(Qe).catch(Qe)}invalidateQueries(t,n,r){const[u,i]=Wt(t,n,r);return re.batch(()=>{var o,s;if(this.queryCache.findAll(u).forEach(c=>{c.invalidate()}),u.refetchType==="none")return Promise.resolve();const l={...u,type:(o=(s=u.refetchType)!=null?s:u.type)!=null?o:"active"};return this.refetchQueries(l,i)})}refetchQueries(t,n,r){const[u,i]=Wt(t,n,r),o=re.batch(()=>this.queryCache.findAll(u).filter(l=>!l.isDisabled()).map(l=>{var c;return l.fetch(void 0,{...i,cancelRefetch:(c=i==null?void 0:i.cancelRefetch)!=null?c:!0,meta:{refetchPage:u.refetchPage}})}));let s=Promise.all(o).then(Qe);return i!=null&&i.throwOnError||(s=s.catch(Qe)),s}fetchQuery(t,n,r){const u=q0(t,n,r),i=this.defaultQueryOptions(u);typeof i.retry=="undefined"&&(i.retry=!1);const o=this.queryCache.build(this,i);return o.isStaleByTime(i.staleTime)?o.fetch(i):Promise.resolve(o.state.data)}prefetchQuery(t,n,r){return this.fetchQuery(t,n,r).then(Qe).catch(Qe)}fetchInfiniteQuery(t,n,r){const u=q0(t,n,r);return u.behavior=B7(),this.fetchQuery(u)}prefetchInfiniteQuery(t,n,r){return this.fetchInfiniteQuery(t,n,r).then(Qe).catch(Qe)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(t){this.defaultOptions=t}setQueryDefaults(t,n){const r=this.queryDefaults.find(u=>E4(t)===E4(u.queryKey));r?r.defaultOptions=n:this.queryDefaults.push({queryKey:t,defaultOptions:n})}getQueryDefaults(t){if(!t)return;const n=this.queryDefaults.find(r=>Vr(t,r.queryKey));return n==null?void 0:n.defaultOptions}setMutationDefaults(t,n){const r=this.mutationDefaults.find(u=>E4(t)===E4(u.mutationKey));r?r.defaultOptions=n:this.mutationDefaults.push({mutationKey:t,defaultOptions:n})}getMutationDefaults(t){if(!t)return;const n=this.mutationDefaults.find(r=>Vr(t,r.mutationKey));return n==null?void 0:n.defaultOptions}defaultQueryOptions(t){if(t!=null&&t._defaulted)return t;const n={...this.defaultOptions.queries,...this.getQueryDefaults(t==null?void 0:t.queryKey),...t,_defaulted:!0};return!n.queryHash&&n.queryKey&&(n.queryHash=vi(n.queryKey,n)),typeof n.refetchOnReconnect=="undefined"&&(n.refetchOnReconnect=n.networkMode!=="always"),typeof n.useErrorBoundary=="undefined"&&(n.useErrorBoundary=!!n.suspense),n}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...this.defaultOptions.mutations,...this.getMutationDefaults(t==null?void 0:t.mutationKey),...t,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}class M7 extends P0{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),Jo(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return r3(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return r3(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const r=this.options,u=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),e3(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled!="undefined"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();const i=this.hasListeners();i&&e2(this.currentQuery,u,this.options,r)&&this.executeFetch(),this.updateResult(n),i&&(this.currentQuery!==u||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();const o=this.computeRefetchInterval();i&&(this.currentQuery!==u||this.options.enabled!==r.enabled||o!==this.currentRefetchInterval)&&this.updateRefetchInterval(o)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t),r=this.createResult(n,t);return T7(this,r,t)&&(this.currentResult=r,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),r}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(r=>{Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),t[r])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),r=this.client.getQueryCache().build(this.client,n);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(Qe)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),gn||this.currentResult.isStale||!J1(this.options.staleTime))return;const n=Fl(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(gn||this.options.enabled===!1||!J1(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||Wr.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const r=this.currentQuery,u=this.options,i=this.currentResult,o=this.currentResultState,s=this.currentResultOptions,l=t!==r,c=l?t.state:this.currentQueryInitialState,d=l?this.currentResult:this.previousQueryResult,{state:m}=t;let{dataUpdatedAt:g,error:w,errorUpdatedAt:v,fetchStatus:y,status:k}=m,f=!1,h=!1,C;if(n._optimisticResults){const b=this.hasListeners(),I=!b&&Jo(t,n),T=b&&e2(t,r,n,u);(I||T)&&(y=Lu(t.options.networkMode)?"fetching":"paused",g||(k="loading")),n._optimisticResults==="isRestoring"&&(y="idle")}if(n.keepPreviousData&&!m.dataUpdatedAt&&d!=null&&d.isSuccess&&k!=="error")C=d.data,g=d.dataUpdatedAt,k=d.status,f=!0;else if(n.select&&typeof m.data!="undefined")if(i&&m.data===(o==null?void 0:o.data)&&n.select===this.selectFn)C=this.selectResult;else try{this.selectFn=n.select,C=n.select(m.data),C=n3(i==null?void 0:i.data,C,n),this.selectResult=C,this.selectError=null}catch(b){this.selectError=b}else C=m.data;if(typeof n.placeholderData!="undefined"&&typeof C=="undefined"&&k==="loading"){let b;if(i!=null&&i.isPlaceholderData&&n.placeholderData===(s==null?void 0:s.placeholderData))b=i.data;else if(b=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof b!="undefined")try{b=n.select(b),this.selectError=null}catch(I){this.selectError=I}typeof b!="undefined"&&(k="success",C=n3(i==null?void 0:i.data,b,n),h=!0)}this.selectError&&(w=this.selectError,C=this.selectResult,v=Date.now(),k="error");const S=y==="fetching",P=k==="loading",D=k==="error";return{status:k,fetchStatus:y,isLoading:P,isSuccess:k==="success",isError:D,isInitialLoading:P&&S,data:C,dataUpdatedAt:g,error:w,errorUpdatedAt:v,failureCount:m.fetchFailureCount,failureReason:m.fetchFailureReason,errorUpdateCount:m.errorUpdateCount,isFetched:m.dataUpdateCount>0||m.errorUpdateCount>0,isFetchedAfterMount:m.dataUpdateCount>c.dataUpdateCount||m.errorUpdateCount>c.errorUpdateCount,isFetching:S,isRefetching:S&&!P,isLoadingError:D&&m.dataUpdatedAt===0,isPaused:y==="paused",isPlaceholderData:h,isPreviousData:f,isRefetchError:D&&m.dataUpdatedAt!==0,isStale:Ei(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,e3(r,n))return;this.currentResult=r;const u={cache:!0},i=()=>{if(!n)return!0;const{notifyOnChangeProps:o}=this.options,s=typeof o=="function"?o():o;if(s==="all"||!s&&!this.trackedProps.size)return!0;const l=new Set(s!=null?s:this.trackedProps);return this.options.useErrorBoundary&&l.add("error"),Object.keys(this.currentResult).some(c=>{const d=c;return this.currentResult[d]!==n[d]&&l.has(d)})};(t==null?void 0:t.listeners)!==!1&&i()&&(u.listeners=!0),this.notify({...u,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!Er(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){re.batch(()=>{if(t.onSuccess){var n,r,u,i;(n=(r=this.options).onSuccess)==null||n.call(r,this.currentResult.data),(u=(i=this.options).onSettled)==null||u.call(i,this.currentResult.data,null)}else if(t.onError){var o,s,l,c;(o=(s=this.options).onError)==null||o.call(s,this.currentResult.error),(l=(c=this.options).onSettled)==null||l.call(c,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(({listener:d})=>{d(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function $7(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Jo(e,t){return $7(e,t)||e.state.dataUpdatedAt>0&&r3(e,t,t.refetchOnMount)}function r3(e,t,n){if(t.enabled!==!1){const r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Ei(e,t)}return!1}function e2(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Ei(e,n)}function Ei(e,t){return e.isStaleByTime(t.staleTime)}function T7(e,t,n){return n.keepPreviousData?!1:n.placeholderData!==void 0?t.isPlaceholderData:e.getCurrentResult()!==t}class N7 extends P0{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const r=this.options;this.options=this.client.defaultMutationOptions(t),e3(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t!="undefined"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:Rl(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){re.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,r,u,i;(n=(r=this.mutateOptions).onSuccess)==null||n.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(u=(i=this.mutateOptions).onSettled)==null||u.call(i,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var o,s,l,c;(o=(s=this.mutateOptions).onError)==null||o.call(s,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(l=(c=this.mutateOptions).onSettled)==null||l.call(c,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(({listener:d})=>{d(this.currentResult)})})}}var Ol={exports:{}},Ue={},Ml={exports:{}},$l={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(B,M){var $=B.length;B.push(M);e:for(;0<$;){var K=$-1>>>1,te=B[K];if(0<u(te,M))B[K]=M,B[$]=te,$=K;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var M=B[0],$=B.pop();if($!==M){B[0]=$;e:for(var K=0,te=B.length,St=te>>>1;K<St;){var Ne=2*(K+1)-1,_t=B[Ne],Ie=Ne+1,Ze=B[Ie];if(0>u(_t,$))Ie<te&&0>u(Ze,_t)?(B[K]=Ze,B[Ie]=$,K=Ie):(B[K]=_t,B[Ne]=$,K=Ne);else if(Ie<te&&0>u(Ze,$))B[K]=Ze,B[Ie]=$,K=Ie;else break e}}return M}function u(B,M){var $=B.sortIndex-M.sortIndex;return $!==0?$:B.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],c=[],d=1,m=null,g=3,w=!1,v=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(B){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=B)r(c),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(c)}}function S(B){if(y=!1,C(B),!v)if(n(l)!==null)v=!0,m4(P);else{var M=n(c);M!==null&&We(S,M.startTime-B)}}function P(B,M){v=!1,y&&(y=!1,f(b),b=-1),w=!0;var $=g;try{for(C(M),m=n(l);m!==null&&(!(m.expirationTime>M)||B&&!ye());){var K=m.callback;if(typeof K=="function"){m.callback=null,g=m.priorityLevel;var te=K(m.expirationTime<=M);M=e.unstable_now(),typeof te=="function"?m.callback=te:m===n(l)&&r(l),C(M)}else r(l);m=n(l)}if(m!==null)var St=!0;else{var Ne=n(c);Ne!==null&&We(S,Ne.startTime-M),St=!1}return St}finally{m=null,g=$,w=!1}}var D=!1,F=null,b=-1,I=5,T=-1;function ye(){return!(e.unstable_now()-T<I)}function zt(){if(F!==null){var B=e.unstable_now();T=B;var M=!0;try{M=F(!0,B)}finally{M?Et():(D=!1,F=null)}}else D=!1}var Et;if(typeof h=="function")Et=function(){h(zt)};else if(typeof MessageChannel!="undefined"){var Wn=new MessageChannel,Yu=Wn.port2;Wn.port1.onmessage=zt,Et=function(){Yu.postMessage(null)}}else Et=function(){k(zt,0)};function m4(B){F=B,D||(D=!0,Et())}function We(B,M){b=k(function(){B(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,m4(P))},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(B){switch(g){case 1:case 2:case 3:var M=3;break;default:M=g}var $=g;g=M;try{return B()}finally{g=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(B,M){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var $=g;g=B;try{return M()}finally{g=$}},e.unstable_scheduleCallback=function(B,M,$){var K=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?K+$:K):$=K,B){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=$+te,B={id:d++,callback:M,priorityLevel:B,startTime:$,expirationTime:te,sortIndex:-1},$>K?(B.sortIndex=$,t(c,B),n(l)===null&&B===n(c)&&(y?(f(b),b=-1):y=!0,We(S,$-K))):(B.sortIndex=te,t(l,B),v||w||(v=!0,m4(P))),B},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(B){var M=g;return function(){var $=g;g=M;try{return B.apply(this,arguments)}finally{g=$}}}})($l);Ml.exports=$l;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tl=p.exports,je=Ml.exports;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nl=new Set,yn={};function z4(e,t){g0(e,t),g0(e+"Capture",t)}function g0(e,t){for(yn[e]=t,e=0;e<t.length;e++)Nl.add(t[e])}var Ot=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),u3=Object.prototype.hasOwnProperty,I7=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,t2={},n2={};function z7(e){return u3.call(n2,e)?!0:u3.call(t2,e)?!1:I7.test(e)?n2[e]=!0:(t2[e]=!0,!1)}function _7(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H7(e,t,n,r){if(t===null||typeof t=="undefined"||_7(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,n,r,u,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=u,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Si=/[\-:]([a-z])/g;function ki(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Si,ki);we[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Si,ki);we[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Si,ki);we[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fi(e,t,n,r){var u=we.hasOwnProperty(t)?we[t]:null;(u!==null?u.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(H7(t,n,u,r)&&(n=null),r||u===null?z7(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):u.mustUseProperty?e[u.propertyName]=n===null?u.type===3?!1:"":n:(t=u.attributeName,r=u.attributeNamespace,n===null?e.removeAttribute(t):(u=u.type,n=u===3||u===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=Tl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Kn=Symbol.for("react.element"),q4=Symbol.for("react.portal"),K4=Symbol.for("react.fragment"),Di=Symbol.for("react.strict_mode"),i3=Symbol.for("react.profiler"),Il=Symbol.for("react.provider"),zl=Symbol.for("react.context"),bi=Symbol.for("react.forward_ref"),o3=Symbol.for("react.suspense"),s3=Symbol.for("react.suspense_list"),Li=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),_l=Symbol.for("react.offscreen"),r2=Symbol.iterator;function N0(e){return e===null||typeof e!="object"?null:(e=r2&&e[r2]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,o1;function K0(e){if(o1===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);o1=t&&t[1]||""}return`
`+o1+e}var s1=!1;function l1(e,t){if(!e||s1)return"";s1=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var u=c.stack.split(`
`),i=r.stack.split(`
`),o=u.length-1,s=i.length-1;1<=o&&0<=s&&u[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(u[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||u[o]!==i[s]){var l=`
`+u[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{s1=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?K0(e):""}function j7(e){switch(e.tag){case 5:return K0(e.type);case 16:return K0("Lazy");case 13:return K0("Suspense");case 19:return K0("SuspenseList");case 0:case 2:case 15:return e=l1(e.type,!1),e;case 11:return e=l1(e.type.render,!1),e;case 1:return e=l1(e.type,!0),e;default:return""}}function l3(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K4:return"Fragment";case q4:return"Portal";case i3:return"Profiler";case Di:return"StrictMode";case o3:return"Suspense";case s3:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zl:return(e.displayName||"Context")+".Consumer";case Il:return(e._context.displayName||"Context")+".Provider";case bi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Li:return t=e.displayName||null,t!==null?t:l3(e.type)||"Memo";case Zt:t=e._payload,e=e._init;try{return l3(e(t))}catch{}}return null}function U7(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return l3(t);case 8:return t===Di?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function a4(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function V7(e){var t=Hl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var u=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gn(e){e._valueTracker||(e._valueTracker=V7(e))}function jl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hl(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function a3(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function u2(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=a4(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ul(e,t){t=t.checked,t!=null&&Fi(e,"checked",t,!1)}function c3(e,t){Ul(e,t);var n=a4(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?d3(e,t.type,n):t.hasOwnProperty("defaultValue")&&d3(e,t.type,a4(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function i2(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function d3(e,t,n){(t!=="number"||Qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var G0=Array.isArray;function o0(e,t,n,r){if(e=e.options,t){t={};for(var u=0;u<n.length;u++)t["$"+n[u]]=!0;for(n=0;n<e.length;n++)u=t.hasOwnProperty("$"+e[n].value),e[n].selected!==u&&(e[n].selected=u),u&&r&&(e[n].defaultSelected=!0)}else{for(n=""+a4(n),t=null,u=0;u<e.length;u++){if(e[u].value===n){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function p3(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function o2(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(G0(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:a4(n)}}function Vl(e,t){var n=a4(t.value),r=a4(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function s2(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function f3(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yn,Zl=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,u){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,u)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yn=Yn||document.createElement("div"),Yn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var en={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},W7=["Webkit","ms","Moz","O"];Object.keys(en).forEach(function(e){W7.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),en[t]=en[e]})});function Ql(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||en.hasOwnProperty(e)&&en[e]?(""+t).trim():t+"px"}function ql(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,u=Ql(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,u):e[n]=u}}var Z7=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function h3(e,t){if(t){if(Z7[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function m3(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var C3=null;function Pi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var g3=null,s0=null,l0=null;function l2(e){if(e=Hn(e)){if(typeof g3!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Ou(t),g3(e.stateNode,e.type,t))}}function Kl(e){s0?l0?l0.push(e):l0=[e]:s0=e}function Gl(){if(s0){var e=s0,t=l0;if(l0=s0=null,l2(e),t)for(e=0;e<t.length;e++)l2(t[e])}}function Yl(e,t){return e(t)}function Xl(){}var a1=!1;function Jl(e,t,n){if(a1)return e(t,n);a1=!0;try{return Yl(e,t,n)}finally{a1=!1,(s0!==null||l0!==null)&&(Xl(),Gl())}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ou(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var y3=!1;if(Ot)try{var I0={};Object.defineProperty(I0,"passive",{get:function(){y3=!0}}),window.addEventListener("test",I0,I0),window.removeEventListener("test",I0,I0)}catch{y3=!1}function Q7(e,t,n,r,u,i,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var tn=!1,qr=null,Kr=!1,x3=null,q7={onError:function(e){tn=!0,qr=e}};function K7(e,t,n,r,u,i,o,s,l){tn=!1,qr=null,Q7.apply(q7,arguments)}function G7(e,t,n,r,u,i,o,s,l){if(K7.apply(this,arguments),tn){if(tn){var c=qr;tn=!1,qr=null}else throw Error(A(198));Kr||(Kr=!0,x3=c)}}function _4(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ea(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function a2(e){if(_4(e)!==e)throw Error(A(188))}function Y7(e){var t=e.alternate;if(!t){if(t=_4(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var u=n.return;if(u===null)break;var i=u.alternate;if(i===null){if(r=u.return,r!==null){n=r;continue}break}if(u.child===i.child){for(i=u.child;i;){if(i===n)return a2(u),e;if(i===r)return a2(u),t;i=i.sibling}throw Error(A(188))}if(n.return!==r.return)n=u,r=i;else{for(var o=!1,s=u.child;s;){if(s===n){o=!0,n=u,r=i;break}if(s===r){o=!0,r=u,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=u;break}if(s===r){o=!0,r=i,n=u;break}s=s.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function ta(e){return e=Y7(e),e!==null?na(e):null}function na(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=na(e);if(t!==null)return t;e=e.sibling}return null}var ra=je.unstable_scheduleCallback,c2=je.unstable_cancelCallback,X7=je.unstable_shouldYield,J7=je.unstable_requestPaint,ue=je.unstable_now,ec=je.unstable_getCurrentPriorityLevel,Ai=je.unstable_ImmediatePriority,ua=je.unstable_UserBlockingPriority,Gr=je.unstable_NormalPriority,tc=je.unstable_LowPriority,ia=je.unstable_IdlePriority,Pu=null,yt=null;function nc(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Pu,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:ic,rc=Math.log,uc=Math.LN2;function ic(e){return e>>>=0,e===0?32:31-(rc(e)/uc|0)|0}var Xn=64,Jn=4194304;function Y0(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,u=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~u;s!==0?r=Y0(s):(i&=o,i!==0&&(r=Y0(i)))}else o=n&~u,o!==0?r=Y0(o):i!==0&&(r=Y0(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&u)===0&&(u=r&-r,i=t&-t,u>=i||u===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-at(t),u=1<<n,r|=e[n],t&=~u;return r}function oc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-at(i),s=1<<o,l=u[o];l===-1?((s&n)===0||(s&r)!==0)&&(u[o]=oc(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function v3(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function oa(){var e=Xn;return Xn<<=1,(Xn&4194240)===0&&(Xn=64),e}function c1(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function lc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var u=31-at(n),i=1<<u;t[u]=0,r[u]=-1,e[u]=-1,n&=~i}}function Bi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),u=1<<r;u&t|e[r]&t&&(e[r]|=t),n&=~u}}var U=0;function sa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var la,Ri,aa,ca,da,w3=!1,er=[],t4=null,n4=null,r4=null,wn=new Map,En=new Map,qt=[],ac="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function d2(e,t){switch(e){case"focusin":case"focusout":t4=null;break;case"dragenter":case"dragleave":n4=null;break;case"mouseover":case"mouseout":r4=null;break;case"pointerover":case"pointerout":wn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":En.delete(t.pointerId)}}function z0(e,t,n,r,u,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[u]},t!==null&&(t=Hn(t),t!==null&&Ri(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function cc(e,t,n,r,u){switch(t){case"focusin":return t4=z0(t4,e,t,n,r,u),!0;case"dragenter":return n4=z0(n4,e,t,n,r,u),!0;case"mouseover":return r4=z0(r4,e,t,n,r,u),!0;case"pointerover":var i=u.pointerId;return wn.set(i,z0(wn.get(i)||null,e,t,n,r,u)),!0;case"gotpointercapture":return i=u.pointerId,En.set(i,z0(En.get(i)||null,e,t,n,r,u)),!0}return!1}function pa(e){var t=S4(e.target);if(t!==null){var n=_4(t);if(n!==null){if(t=n.tag,t===13){if(t=ea(n),t!==null){e.blockedOn=t,da(e.priority,function(){aa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=E3(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);C3=r,n.target.dispatchEvent(r),C3=null}else return t=Hn(n),t!==null&&Ri(t),e.blockedOn=n,!1;t.shift()}return!0}function p2(e,t,n){Sr(e)&&n.delete(t)}function dc(){w3=!1,t4!==null&&Sr(t4)&&(t4=null),n4!==null&&Sr(n4)&&(n4=null),r4!==null&&Sr(r4)&&(r4=null),wn.forEach(p2),En.forEach(p2)}function _0(e,t){e.blockedOn===t&&(e.blockedOn=null,w3||(w3=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,dc)))}function Sn(e){function t(u){return _0(u,e)}if(0<er.length){_0(er[0],e);for(var n=1;n<er.length;n++){var r=er[n];r.blockedOn===e&&(r.blockedOn=null)}}for(t4!==null&&_0(t4,e),n4!==null&&_0(n4,e),r4!==null&&_0(r4,e),wn.forEach(t),En.forEach(t),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)pa(n),n.blockedOn===null&&qt.shift()}var a0=It.ReactCurrentBatchConfig,Xr=!0;function pc(e,t,n,r){var u=U,i=a0.transition;a0.transition=null;try{U=1,Oi(e,t,n,r)}finally{U=u,a0.transition=i}}function fc(e,t,n,r){var u=U,i=a0.transition;a0.transition=null;try{U=4,Oi(e,t,n,r)}finally{U=u,a0.transition=i}}function Oi(e,t,n,r){if(Xr){var u=E3(e,t,n,r);if(u===null)v1(e,t,r,Jr,n),d2(e,r);else if(cc(u,e,t,n,r))r.stopPropagation();else if(d2(e,r),t&4&&-1<ac.indexOf(e)){for(;u!==null;){var i=Hn(u);if(i!==null&&la(i),i=E3(e,t,n,r),i===null&&v1(e,t,r,Jr,n),i===u)break;u=i}u!==null&&r.stopPropagation()}else v1(e,t,r,null,n)}}var Jr=null;function E3(e,t,n,r){if(Jr=null,e=Pi(r),e=S4(e),e!==null)if(t=_4(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ea(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jr=e,null}function fa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ec()){case Ai:return 1;case ua:return 4;case Gr:case tc:return 16;case ia:return 536870912;default:return 16}default:return 16}}var Yt=null,Mi=null,kr=null;function ha(){if(kr)return kr;var e,t=Mi,n=t.length,r,u="value"in Yt?Yt.value:Yt.textContent,i=u.length;for(e=0;e<n&&t[e]===u[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===u[i-r];r++);return kr=u.slice(e,1<r?1-r:void 0)}function Fr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function tr(){return!0}function f2(){return!1}function Ve(e){function t(n,r,u,i,o){this._reactName=n,this._targetInst=u,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?tr:f2,this.isPropagationStopped=f2,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tr)},persist:function(){},isPersistent:tr}),t}var A0={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$i=Ve(A0),_n=J({},A0,{view:0,detail:0}),hc=Ve(_n),d1,p1,H0,Au=J({},_n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ti,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==H0&&(H0&&e.type==="mousemove"?(d1=e.screenX-H0.screenX,p1=e.screenY-H0.screenY):p1=d1=0,H0=e),d1)},movementY:function(e){return"movementY"in e?e.movementY:p1}}),h2=Ve(Au),mc=J({},Au,{dataTransfer:0}),Cc=Ve(mc),gc=J({},_n,{relatedTarget:0}),f1=Ve(gc),yc=J({},A0,{animationName:0,elapsedTime:0,pseudoElement:0}),xc=Ve(yc),vc=J({},A0,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wc=Ve(vc),Ec=J({},A0,{data:0}),m2=Ve(Ec),Sc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fc[e])?!!t[e]:!1}function Ti(){return Dc}var bc=J({},_n,{key:function(e){if(e.key){var t=Sc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ti,charCode:function(e){return e.type==="keypress"?Fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lc=Ve(bc),Pc=J({},Au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),C2=Ve(Pc),Ac=J({},_n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ti}),Bc=Ve(Ac),Rc=J({},A0,{propertyName:0,elapsedTime:0,pseudoElement:0}),Oc=Ve(Rc),Mc=J({},Au,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$c=Ve(Mc),Tc=[9,13,27,32],Ni=Ot&&"CompositionEvent"in window,nn=null;Ot&&"documentMode"in document&&(nn=document.documentMode);var Nc=Ot&&"TextEvent"in window&&!nn,ma=Ot&&(!Ni||nn&&8<nn&&11>=nn),g2=String.fromCharCode(32),y2=!1;function Ca(e,t){switch(e){case"keyup":return Tc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ga(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var G4=!1;function Ic(e,t){switch(e){case"compositionend":return ga(t);case"keypress":return t.which!==32?null:(y2=!0,g2);case"textInput":return e=t.data,e===g2&&y2?null:e;default:return null}}function zc(e,t){if(G4)return e==="compositionend"||!Ni&&Ca(e,t)?(e=ha(),kr=Mi=Yt=null,G4=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ma&&t.locale!=="ko"?null:t.data;default:return null}}var _c={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function x2(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_c[e.type]:t==="textarea"}function ya(e,t,n,r){Kl(r),t=eu(t,"onChange"),0<t.length&&(n=new $i("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var rn=null,kn=null;function Hc(e){Pa(e,0)}function Bu(e){var t=J4(e);if(jl(t))return e}function jc(e,t){if(e==="change")return t}var xa=!1;if(Ot){var h1;if(Ot){var m1="oninput"in document;if(!m1){var v2=document.createElement("div");v2.setAttribute("oninput","return;"),m1=typeof v2.oninput=="function"}h1=m1}else h1=!1;xa=h1&&(!document.documentMode||9<document.documentMode)}function w2(){rn&&(rn.detachEvent("onpropertychange",va),kn=rn=null)}function va(e){if(e.propertyName==="value"&&Bu(kn)){var t=[];ya(t,kn,e,Pi(e)),Jl(Hc,t)}}function Uc(e,t,n){e==="focusin"?(w2(),rn=t,kn=n,rn.attachEvent("onpropertychange",va)):e==="focusout"&&w2()}function Vc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bu(kn)}function Wc(e,t){if(e==="click")return Bu(t)}function Zc(e,t){if(e==="input"||e==="change")return Bu(t)}function Qc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:Qc;function Fn(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var u=n[r];if(!u3.call(t,u)||!pt(e[u],t[u]))return!1}return!0}function E2(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function S2(e,t){var n=E2(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=E2(n)}}function wa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ea(){for(var e=window,t=Qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qr(e.document)}return t}function Ii(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qc(e){var t=Ea(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wa(n.ownerDocument.documentElement,n)){if(r!==null&&Ii(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var u=n.textContent.length,i=Math.min(r.start,u);r=r.end===void 0?i:Math.min(r.end,u),!e.extend&&i>r&&(u=r,r=i,i=u),u=S2(n,i);var o=S2(n,r);u&&o&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kc=Ot&&"documentMode"in document&&11>=document.documentMode,Y4=null,S3=null,un=null,k3=!1;function k2(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;k3||Y4==null||Y4!==Qr(r)||(r=Y4,"selectionStart"in r&&Ii(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),un&&Fn(un,r)||(un=r,r=eu(S3,"onSelect"),0<r.length&&(t=new $i("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Y4)))}function nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var X4={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionend:nr("Transition","TransitionEnd")},C1={},Sa={};Ot&&(Sa=document.createElement("div").style,"AnimationEvent"in window||(delete X4.animationend.animation,delete X4.animationiteration.animation,delete X4.animationstart.animation),"TransitionEvent"in window||delete X4.transitionend.transition);function Ru(e){if(C1[e])return C1[e];if(!X4[e])return e;var t=X4[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sa)return C1[e]=t[n];return e}var ka=Ru("animationend"),Fa=Ru("animationiteration"),Da=Ru("animationstart"),ba=Ru("transitionend"),La=new Map,F2="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function d4(e,t){La.set(e,t),z4(t,[e])}for(var g1=0;g1<F2.length;g1++){var y1=F2[g1],Gc=y1.toLowerCase(),Yc=y1[0].toUpperCase()+y1.slice(1);d4(Gc,"on"+Yc)}d4(ka,"onAnimationEnd");d4(Fa,"onAnimationIteration");d4(Da,"onAnimationStart");d4("dblclick","onDoubleClick");d4("focusin","onFocus");d4("focusout","onBlur");d4(ba,"onTransitionEnd");g0("onMouseEnter",["mouseout","mouseover"]);g0("onMouseLeave",["mouseout","mouseover"]);g0("onPointerEnter",["pointerout","pointerover"]);g0("onPointerLeave",["pointerout","pointerover"]);z4("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));z4("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));z4("onBeforeInput",["compositionend","keypress","textInput","paste"]);z4("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));z4("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));z4("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var X0="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xc=new Set("cancel close invalid load scroll toggle".split(" ").concat(X0));function D2(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,G7(r,t,void 0,e),e.currentTarget=null}function Pa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],u=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==i&&u.isPropagationStopped())break e;D2(u,s,c),i=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,c=s.currentTarget,s=s.listener,l!==i&&u.isPropagationStopped())break e;D2(u,s,c),i=l}}}if(Kr)throw e=x3,Kr=!1,x3=null,e}function Q(e,t){var n=t[P3];n===void 0&&(n=t[P3]=new Set);var r=e+"__bubble";n.has(r)||(Aa(t,e,2,!1),n.add(r))}function x1(e,t,n){var r=0;t&&(r|=4),Aa(n,e,r,t)}var rr="_reactListening"+Math.random().toString(36).slice(2);function Dn(e){if(!e[rr]){e[rr]=!0,Nl.forEach(function(n){n!=="selectionchange"&&(Xc.has(n)||x1(n,!1,e),x1(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rr]||(t[rr]=!0,x1("selectionchange",!1,t))}}function Aa(e,t,n,r){switch(fa(t)){case 1:var u=pc;break;case 4:u=fc;break;default:u=Oi}n=u.bind(null,t,n,e),u=void 0,!y3||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(t,n,{capture:!0,passive:u}):e.addEventListener(t,n,!0):u!==void 0?e.addEventListener(t,n,{passive:u}):e.addEventListener(t,n,!1)}function v1(e,t,n,r,u){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===u||s.nodeType===8&&s.parentNode===u)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===u||l.nodeType===8&&l.parentNode===u))return;o=o.return}for(;s!==null;){if(o=S4(s),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Jl(function(){var c=i,d=Pi(n),m=[];e:{var g=La.get(e);if(g!==void 0){var w=$i,v=e;switch(e){case"keypress":if(Fr(n)===0)break e;case"keydown":case"keyup":w=Lc;break;case"focusin":v="focus",w=f1;break;case"focusout":v="blur",w=f1;break;case"beforeblur":case"afterblur":w=f1;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=h2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Cc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Bc;break;case ka:case Fa:case Da:w=xc;break;case ba:w=Oc;break;case"scroll":w=hc;break;case"wheel":w=$c;break;case"copy":case"cut":case"paste":w=wc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=C2}var y=(t&4)!==0,k=!y&&e==="scroll",f=y?g!==null?g+"Capture":null:g;y=[];for(var h=c,C;h!==null;){C=h;var S=C.stateNode;if(C.tag===5&&S!==null&&(C=S,f!==null&&(S=vn(h,f),S!=null&&y.push(bn(h,S,C)))),k)break;h=h.return}0<y.length&&(g=new w(g,v,null,n,d),m.push({event:g,listeners:y}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==C3&&(v=n.relatedTarget||n.fromElement)&&(S4(v)||v[Mt]))break e;if((w||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=c,v=v?S4(v):null,v!==null&&(k=_4(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=c),w!==v)){if(y=h2,S="onMouseLeave",f="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=C2,S="onPointerLeave",f="onPointerEnter",h="pointer"),k=w==null?g:J4(w),C=v==null?g:J4(v),g=new y(S,h+"leave",w,n,d),g.target=k,g.relatedTarget=C,S=null,S4(d)===c&&(y=new y(f,h+"enter",v,n,d),y.target=C,y.relatedTarget=k,S=y),k=S,w&&v)t:{for(y=w,f=v,h=0,C=y;C;C=U4(C))h++;for(C=0,S=f;S;S=U4(S))C++;for(;0<h-C;)y=U4(y),h--;for(;0<C-h;)f=U4(f),C--;for(;h--;){if(y===f||f!==null&&y===f.alternate)break t;y=U4(y),f=U4(f)}y=null}else y=null;w!==null&&b2(m,g,w,y,!1),v!==null&&k!==null&&b2(m,k,v,y,!0)}}e:{if(g=c?J4(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var P=jc;else if(x2(g))if(xa)P=Zc;else{P=Vc;var D=Uc}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(P=Wc);if(P&&(P=P(e,c))){ya(m,P,n,d);break e}D&&D(e,g,c),e==="focusout"&&(D=g._wrapperState)&&D.controlled&&g.type==="number"&&d3(g,"number",g.value)}switch(D=c?J4(c):window,e){case"focusin":(x2(D)||D.contentEditable==="true")&&(Y4=D,S3=c,un=null);break;case"focusout":un=S3=Y4=null;break;case"mousedown":k3=!0;break;case"contextmenu":case"mouseup":case"dragend":k3=!1,k2(m,n,d);break;case"selectionchange":if(Kc)break;case"keydown":case"keyup":k2(m,n,d)}var F;if(Ni)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else G4?Ca(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(ma&&n.locale!=="ko"&&(G4||b!=="onCompositionStart"?b==="onCompositionEnd"&&G4&&(F=ha()):(Yt=d,Mi="value"in Yt?Yt.value:Yt.textContent,G4=!0)),D=eu(c,b),0<D.length&&(b=new m2(b,e,null,n,d),m.push({event:b,listeners:D}),F?b.data=F:(F=ga(n),F!==null&&(b.data=F)))),(F=Nc?Ic(e,n):zc(e,n))&&(c=eu(c,"onBeforeInput"),0<c.length&&(d=new m2("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:c}),d.data=F))}Pa(m,t)})}function bn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function eu(e,t){for(var n=t+"Capture",r=[];e!==null;){var u=e,i=u.stateNode;u.tag===5&&i!==null&&(u=i,i=vn(e,n),i!=null&&r.unshift(bn(e,i,u)),i=vn(e,t),i!=null&&r.push(bn(e,i,u))),e=e.return}return r}function U4(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function b2(e,t,n,r,u){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,u?(l=vn(n,i),l!=null&&o.unshift(bn(n,l,s))):u||(l=vn(n,i),l!=null&&o.push(bn(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Jc=/\r\n?/g,ed=/\u0000|\uFFFD/g;function L2(e){return(typeof e=="string"?e:""+e).replace(Jc,`
`).replace(ed,"")}function ur(e,t,n){if(t=L2(t),L2(e)!==t&&n)throw Error(A(425))}function tu(){}var F3=null,D3=null;function b3(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var L3=typeof setTimeout=="function"?setTimeout:void 0,td=typeof clearTimeout=="function"?clearTimeout:void 0,P2=typeof Promise=="function"?Promise:void 0,nd=typeof queueMicrotask=="function"?queueMicrotask:typeof P2!="undefined"?function(e){return P2.resolve(null).then(e).catch(rd)}:L3;function rd(e){setTimeout(function(){throw e})}function w1(e,t){var n=t,r=0;do{var u=n.nextSibling;if(e.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(r===0){e.removeChild(u),Sn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=u}while(n);Sn(t)}function u4(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function A2(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var B0=Math.random().toString(36).slice(2),Ct="__reactFiber$"+B0,Ln="__reactProps$"+B0,Mt="__reactContainer$"+B0,P3="__reactEvents$"+B0,ud="__reactListeners$"+B0,id="__reactHandles$"+B0;function S4(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=A2(e);e!==null;){if(n=e[Ct])return n;e=A2(e)}return t}e=n,n=e.parentNode}return null}function Hn(e){return e=e[Ct]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function J4(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Ou(e){return e[Ln]||null}var A3=[],e0=-1;function p4(e){return{current:e}}function q(e){0>e0||(e.current=A3[e0],A3[e0]=null,e0--)}function W(e,t){e0++,A3[e0]=e.current,e.current=t}var c4={},Fe=p4(c4),Me=p4(!1),B4=c4;function y0(e,t){var n=e.type.contextTypes;if(!n)return c4;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var u={},i;for(i in n)u[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=u),u}function $e(e){return e=e.childContextTypes,e!=null}function nu(){q(Me),q(Fe)}function B2(e,t,n){if(Fe.current!==c4)throw Error(A(168));W(Fe,t),W(Me,n)}function Ba(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var u in r)if(!(u in t))throw Error(A(108,U7(e)||"Unknown",u));return J({},n,r)}function ru(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||c4,B4=Fe.current,W(Fe,e),W(Me,Me.current),!0}function R2(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=Ba(e,t,B4),r.__reactInternalMemoizedMergedChildContext=e,q(Me),q(Fe),W(Fe,e)):q(Me),W(Me,n)}var bt=null,Mu=!1,E1=!1;function Ra(e){bt===null?bt=[e]:bt.push(e)}function od(e){Mu=!0,Ra(e)}function f4(){if(!E1&&bt!==null){E1=!0;var e=0,t=U;try{var n=bt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}bt=null,Mu=!1}catch(u){throw bt!==null&&(bt=bt.slice(e+1)),ra(Ai,f4),u}finally{U=t,E1=!1}}return null}var t0=[],n0=0,uu=null,iu=0,qe=[],Ke=0,R4=null,Lt=1,Pt="";function g4(e,t){t0[n0++]=iu,t0[n0++]=uu,uu=e,iu=t}function Oa(e,t,n){qe[Ke++]=Lt,qe[Ke++]=Pt,qe[Ke++]=R4,R4=e;var r=Lt;e=Pt;var u=32-at(r)-1;r&=~(1<<u),n+=1;var i=32-at(t)+u;if(30<i){var o=u-u%5;i=(r&(1<<o)-1).toString(32),r>>=o,u-=o,Lt=1<<32-at(t)+u|n<<u|r,Pt=i+e}else Lt=1<<i|n<<u|r,Pt=e}function zi(e){e.return!==null&&(g4(e,1),Oa(e,1,0))}function _i(e){for(;e===uu;)uu=t0[--n0],t0[n0]=null,iu=t0[--n0],t0[n0]=null;for(;e===R4;)R4=qe[--Ke],qe[Ke]=null,Pt=qe[--Ke],qe[Ke]=null,Lt=qe[--Ke],qe[Ke]=null}var He=null,_e=null,G=!1,st=null;function Ma(e,t){var n=Ge(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function O2(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,_e=u4(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=R4!==null?{id:Lt,overflow:Pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ge(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,_e=null,!0):!1;default:return!1}}function B3(e){return(e.mode&1)!==0&&(e.flags&128)===0}function R3(e){if(G){var t=_e;if(t){var n=t;if(!O2(e,t)){if(B3(e))throw Error(A(418));t=u4(n.nextSibling);var r=He;t&&O2(e,t)?Ma(r,n):(e.flags=e.flags&-4097|2,G=!1,He=e)}}else{if(B3(e))throw Error(A(418));e.flags=e.flags&-4097|2,G=!1,He=e}}}function M2(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function ir(e){if(e!==He)return!1;if(!G)return M2(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!b3(e.type,e.memoizedProps)),t&&(t=_e)){if(B3(e))throw $a(),Error(A(418));for(;t;)Ma(e,t),t=u4(t.nextSibling)}if(M2(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=u4(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=He?u4(e.stateNode.nextSibling):null;return!0}function $a(){for(var e=_e;e;)e=u4(e.nextSibling)}function x0(){_e=He=null,G=!1}function Hi(e){st===null?st=[e]:st.push(e)}var sd=It.ReactCurrentBatchConfig;function it(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ou=p4(null),su=null,r0=null,ji=null;function Ui(){ji=r0=su=null}function Vi(e){var t=ou.current;q(ou),e._currentValue=t}function O3(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function c0(e,t){su=e,ji=r0=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Oe=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(ji!==e)if(e={context:e,memoizedValue:t,next:null},r0===null){if(su===null)throw Error(A(308));r0=e,su.dependencies={lanes:0,firstContext:e}}else r0=r0.next=e;return t}var k4=null;function Wi(e){k4===null?k4=[e]:k4.push(e)}function Ta(e,t,n,r){var u=t.interleaved;return u===null?(n.next=n,Wi(t)):(n.next=u.next,u.next=n),t.interleaved=n,$t(e,r)}function $t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qt=!1;function Zi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Na(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function i4(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(H&2)!==0){var u=r.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),r.pending=t,$t(e,n)}return u=r.interleaved,u===null?(t.next=t,Wi(r)):(t.next=u.next,u.next=t),r.interleaved=t,$t(e,n)}function Dr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bi(e,n)}}function $2(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var u=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?u=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?u=i=t:i=i.next=t}else u=i=t;n={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function lu(e,t,n,r){var u=e.updateQueue;Qt=!1;var i=u.firstBaseUpdate,o=u.lastBaseUpdate,s=u.shared.pending;if(s!==null){u.shared.pending=null;var l=s,c=l.next;l.next=null,o===null?i=c:o.next=c,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=l))}if(i!==null){var m=u.baseState;o=0,d=c=l=null,s=i;do{var g=s.lane,w=s.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,y=s;switch(g=t,w=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){m=v.call(w,m,g);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,g=typeof v=="function"?v.call(w,m,g):v,g==null)break e;m=J({},m,g);break e;case 2:Qt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=u.effects,g===null?u.effects=[s]:g.push(s))}else w={eventTime:w,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=w,l=m):d=d.next=w,o|=g;if(s=s.next,s===null){if(s=u.shared.pending,s===null)break;g=s,s=g.next,g.next=null,u.lastBaseUpdate=g,u.shared.pending=null}}while(1);if(d===null&&(l=m),u.baseState=l,u.firstBaseUpdate=c,u.lastBaseUpdate=d,t=u.shared.interleaved,t!==null){u=t;do o|=u.lane,u=u.next;while(u!==t)}else i===null&&(u.shared.lanes=0);M4|=o,e.lanes=o,e.memoizedState=m}}function T2(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],u=r.callback;if(u!==null){if(r.callback=null,r=n,typeof u!="function")throw Error(A(191,u));u.call(r)}}}var Ia=new Tl.Component().refs;function M3(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $u={isMounted:function(e){return(e=e._reactInternals)?_4(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),u=s4(e),i=At(r,u);i.payload=t,n!=null&&(i.callback=n),t=i4(e,i,u),t!==null&&(ct(t,e,u,r),Dr(t,e,u))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),u=s4(e),i=At(r,u);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=i4(e,i,u),t!==null&&(ct(t,e,u,r),Dr(t,e,u))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=s4(e),u=At(n,r);u.tag=2,t!=null&&(u.callback=t),t=i4(e,u,r),t!==null&&(ct(t,e,r,n),Dr(t,e,r))}};function N2(e,t,n,r,u,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Fn(n,r)||!Fn(u,i):!0}function za(e,t,n){var r=!1,u=c4,i=t.contextType;return typeof i=="object"&&i!==null?i=nt(i):(u=$e(t)?B4:Fe.current,r=t.contextTypes,i=(r=r!=null)?y0(e,u):c4),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$u,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=i),t}function I2(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$u.enqueueReplaceState(t,t.state,null)}function $3(e,t,n,r){var u=e.stateNode;u.props=n,u.state=e.memoizedState,u.refs=Ia,Zi(e);var i=t.contextType;typeof i=="object"&&i!==null?u.context=nt(i):(i=$e(t)?B4:Fe.current,u.context=y0(e,i)),u.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(M3(e,t,i,n),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(t=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),t!==u.state&&$u.enqueueReplaceState(u,u.state,null),lu(e,n,u,r),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function j0(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var u=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=u.refs;s===Ia&&(s=u.refs={}),o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function or(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function z2(e){var t=e._init;return t(e._payload)}function _a(e){function t(f,h){if(e){var C=f.deletions;C===null?(f.deletions=[h],f.flags|=16):C.push(h)}}function n(f,h){if(!e)return null;for(;h!==null;)t(f,h),h=h.sibling;return null}function r(f,h){for(f=new Map;h!==null;)h.key!==null?f.set(h.key,h):f.set(h.index,h),h=h.sibling;return f}function u(f,h){return f=l4(f,h),f.index=0,f.sibling=null,f}function i(f,h,C){return f.index=C,e?(C=f.alternate,C!==null?(C=C.index,C<h?(f.flags|=2,h):C):(f.flags|=2,h)):(f.flags|=1048576,h)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,h,C,S){return h===null||h.tag!==6?(h=P1(C,f.mode,S),h.return=f,h):(h=u(h,C),h.return=f,h)}function l(f,h,C,S){var P=C.type;return P===K4?d(f,h,C.props.children,S,C.key):h!==null&&(h.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Zt&&z2(P)===h.type)?(S=u(h,C.props),S.ref=j0(f,h,C),S.return=f,S):(S=Rr(C.type,C.key,C.props,null,f.mode,S),S.ref=j0(f,h,C),S.return=f,S)}function c(f,h,C,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==C.containerInfo||h.stateNode.implementation!==C.implementation?(h=A1(C,f.mode,S),h.return=f,h):(h=u(h,C.children||[]),h.return=f,h)}function d(f,h,C,S,P){return h===null||h.tag!==7?(h=L4(C,f.mode,S,P),h.return=f,h):(h=u(h,C),h.return=f,h)}function m(f,h,C){if(typeof h=="string"&&h!==""||typeof h=="number")return h=P1(""+h,f.mode,C),h.return=f,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Kn:return C=Rr(h.type,h.key,h.props,null,f.mode,C),C.ref=j0(f,null,h),C.return=f,C;case q4:return h=A1(h,f.mode,C),h.return=f,h;case Zt:var S=h._init;return m(f,S(h._payload),C)}if(G0(h)||N0(h))return h=L4(h,f.mode,C,null),h.return=f,h;or(f,h)}return null}function g(f,h,C,S){var P=h!==null?h.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return P!==null?null:s(f,h,""+C,S);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Kn:return C.key===P?l(f,h,C,S):null;case q4:return C.key===P?c(f,h,C,S):null;case Zt:return P=C._init,g(f,h,P(C._payload),S)}if(G0(C)||N0(C))return P!==null?null:d(f,h,C,S,null);or(f,C)}return null}function w(f,h,C,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(C)||null,s(h,f,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Kn:return f=f.get(S.key===null?C:S.key)||null,l(h,f,S,P);case q4:return f=f.get(S.key===null?C:S.key)||null,c(h,f,S,P);case Zt:var D=S._init;return w(f,h,C,D(S._payload),P)}if(G0(S)||N0(S))return f=f.get(C)||null,d(h,f,S,P,null);or(h,S)}return null}function v(f,h,C,S){for(var P=null,D=null,F=h,b=h=0,I=null;F!==null&&b<C.length;b++){F.index>b?(I=F,F=null):I=F.sibling;var T=g(f,F,C[b],S);if(T===null){F===null&&(F=I);break}e&&F&&T.alternate===null&&t(f,F),h=i(T,h,b),D===null?P=T:D.sibling=T,D=T,F=I}if(b===C.length)return n(f,F),G&&g4(f,b),P;if(F===null){for(;b<C.length;b++)F=m(f,C[b],S),F!==null&&(h=i(F,h,b),D===null?P=F:D.sibling=F,D=F);return G&&g4(f,b),P}for(F=r(f,F);b<C.length;b++)I=w(F,f,b,C[b],S),I!==null&&(e&&I.alternate!==null&&F.delete(I.key===null?b:I.key),h=i(I,h,b),D===null?P=I:D.sibling=I,D=I);return e&&F.forEach(function(ye){return t(f,ye)}),G&&g4(f,b),P}function y(f,h,C,S){var P=N0(C);if(typeof P!="function")throw Error(A(150));if(C=P.call(C),C==null)throw Error(A(151));for(var D=P=null,F=h,b=h=0,I=null,T=C.next();F!==null&&!T.done;b++,T=C.next()){F.index>b?(I=F,F=null):I=F.sibling;var ye=g(f,F,T.value,S);if(ye===null){F===null&&(F=I);break}e&&F&&ye.alternate===null&&t(f,F),h=i(ye,h,b),D===null?P=ye:D.sibling=ye,D=ye,F=I}if(T.done)return n(f,F),G&&g4(f,b),P;if(F===null){for(;!T.done;b++,T=C.next())T=m(f,T.value,S),T!==null&&(h=i(T,h,b),D===null?P=T:D.sibling=T,D=T);return G&&g4(f,b),P}for(F=r(f,F);!T.done;b++,T=C.next())T=w(F,f,b,T.value,S),T!==null&&(e&&T.alternate!==null&&F.delete(T.key===null?b:T.key),h=i(T,h,b),D===null?P=T:D.sibling=T,D=T);return e&&F.forEach(function(zt){return t(f,zt)}),G&&g4(f,b),P}function k(f,h,C,S){if(typeof C=="object"&&C!==null&&C.type===K4&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Kn:e:{for(var P=C.key,D=h;D!==null;){if(D.key===P){if(P=C.type,P===K4){if(D.tag===7){n(f,D.sibling),h=u(D,C.props.children),h.return=f,f=h;break e}}else if(D.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Zt&&z2(P)===D.type){n(f,D.sibling),h=u(D,C.props),h.ref=j0(f,D,C),h.return=f,f=h;break e}n(f,D);break}else t(f,D);D=D.sibling}C.type===K4?(h=L4(C.props.children,f.mode,S,C.key),h.return=f,f=h):(S=Rr(C.type,C.key,C.props,null,f.mode,S),S.ref=j0(f,h,C),S.return=f,f=S)}return o(f);case q4:e:{for(D=C.key;h!==null;){if(h.key===D)if(h.tag===4&&h.stateNode.containerInfo===C.containerInfo&&h.stateNode.implementation===C.implementation){n(f,h.sibling),h=u(h,C.children||[]),h.return=f,f=h;break e}else{n(f,h);break}else t(f,h);h=h.sibling}h=A1(C,f.mode,S),h.return=f,f=h}return o(f);case Zt:return D=C._init,k(f,h,D(C._payload),S)}if(G0(C))return v(f,h,C,S);if(N0(C))return y(f,h,C,S);or(f,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,h!==null&&h.tag===6?(n(f,h.sibling),h=u(h,C),h.return=f,f=h):(n(f,h),h=P1(C,f.mode,S),h.return=f,f=h),o(f)):n(f,h)}return k}var v0=_a(!0),Ha=_a(!1),jn={},xt=p4(jn),Pn=p4(jn),An=p4(jn);function F4(e){if(e===jn)throw Error(A(174));return e}function Qi(e,t){switch(W(An,t),W(Pn,e),W(xt,jn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:f3(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=f3(t,e)}q(xt),W(xt,t)}function w0(){q(xt),q(Pn),q(An)}function ja(e){F4(An.current);var t=F4(xt.current),n=f3(t,e.type);t!==n&&(W(Pn,e),W(xt,n))}function qi(e){Pn.current===e&&(q(xt),q(Pn))}var Y=p4(0);function au(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var S1=[];function Ki(){for(var e=0;e<S1.length;e++)S1[e]._workInProgressVersionPrimary=null;S1.length=0}var br=It.ReactCurrentDispatcher,k1=It.ReactCurrentBatchConfig,O4=0,X=null,ae=null,me=null,cu=!1,on=!1,Bn=0,ld=0;function Ee(){throw Error(A(321))}function Gi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function Yi(e,t,n,r,u,i){if(O4=i,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,br.current=e===null||e.memoizedState===null?pd:fd,e=n(r,u),on){i=0;do{if(on=!1,Bn=0,25<=i)throw Error(A(301));i+=1,me=ae=null,t.updateQueue=null,br.current=hd,e=n(r,u)}while(on)}if(br.current=du,t=ae!==null&&ae.next!==null,O4=0,me=ae=X=null,cu=!1,t)throw Error(A(300));return e}function Xi(){var e=Bn!==0;return Bn=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?X.memoizedState=me=e:me=me.next=e,me}function rt(){if(ae===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=me===null?X.memoizedState:me.next;if(t!==null)me=t,ae=e;else{if(e===null)throw Error(A(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},me===null?X.memoizedState=me=e:me=me.next=e}return me}function Rn(e,t){return typeof t=="function"?t(e):t}function F1(e){var t=rt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=ae,u=r.baseQueue,i=n.pending;if(i!==null){if(u!==null){var o=u.next;u.next=i.next,i.next=o}r.baseQueue=u=i,n.pending=null}if(u!==null){i=u.next,r=r.baseState;var s=o=null,l=null,c=i;do{var d=c.lane;if((O4&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=m,o=r):l=l.next=m,X.lanes|=d,M4|=d}c=c.next}while(c!==null&&c!==i);l===null?o=r:l.next=s,pt(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){u=e;do i=u.lane,X.lanes|=i,M4|=i,u=u.next;while(u!==e)}else u===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function D1(e){var t=rt(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,u=n.pending,i=t.memoizedState;if(u!==null){n.pending=null;var o=u=u.next;do i=e(i,o.action),o=o.next;while(o!==u);pt(i,t.memoizedState)||(Oe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ua(){}function Va(e,t){var n=X,r=rt(),u=t(),i=!pt(r.memoizedState,u);if(i&&(r.memoizedState=u,Oe=!0),r=r.queue,Ji(Qa.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,On(9,Za.bind(null,n,r,u,t),void 0,null),ge===null)throw Error(A(349));(O4&30)!==0||Wa(n,t,u)}return u}function Wa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Za(e,t,n,r){t.value=n,t.getSnapshot=r,qa(t)&&Ka(e)}function Qa(e,t,n){return n(function(){qa(t)&&Ka(e)})}function qa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function Ka(e){var t=$t(e,1);t!==null&&ct(t,e,1,-1)}function _2(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:e},t.queue=e,e=e.dispatch=dd.bind(null,X,e),[t.memoizedState,e]}function On(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ga(){return rt().memoizedState}function Lr(e,t,n,r){var u=ht();X.flags|=e,u.memoizedState=On(1|t,n,void 0,r===void 0?null:r)}function Tu(e,t,n,r){var u=rt();r=r===void 0?null:r;var i=void 0;if(ae!==null){var o=ae.memoizedState;if(i=o.destroy,r!==null&&Gi(r,o.deps)){u.memoizedState=On(t,n,i,r);return}}X.flags|=e,u.memoizedState=On(1|t,n,i,r)}function H2(e,t){return Lr(8390656,8,e,t)}function Ji(e,t){return Tu(2048,8,e,t)}function Ya(e,t){return Tu(4,2,e,t)}function Xa(e,t){return Tu(4,4,e,t)}function Ja(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function e5(e,t,n){return n=n!=null?n.concat([e]):null,Tu(4,4,Ja.bind(null,t,e),n)}function eo(){}function t5(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function n5(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function r5(e,t,n){return(O4&21)===0?(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n):(pt(n,t)||(n=oa(),X.lanes|=n,M4|=n,e.baseState=!0),t)}function ad(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=k1.transition;k1.transition={};try{e(!1),t()}finally{U=n,k1.transition=r}}function u5(){return rt().memoizedState}function cd(e,t,n){var r=s4(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},i5(e))o5(t,n);else if(n=Ta(e,t,n,r),n!==null){var u=Le();ct(n,e,r,u),s5(n,t,r)}}function dd(e,t,n){var r=s4(e),u={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(i5(e))o5(t,u);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(u.hasEagerState=!0,u.eagerState=s,pt(s,o)){var l=t.interleaved;l===null?(u.next=u,Wi(t)):(u.next=l.next,l.next=u),t.interleaved=u;return}}catch{}finally{}n=Ta(e,t,u,r),n!==null&&(u=Le(),ct(n,e,r,u),s5(n,t,r))}}function i5(e){var t=e.alternate;return e===X||t!==null&&t===X}function o5(e,t){on=cu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function s5(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bi(e,n)}}var du={readContext:nt,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},pd={readContext:nt,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:H2,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Lr(4194308,4,Ja.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lr(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cd.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:_2,useDebugValue:eo,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=_2(!1),t=e[0];return e=ad.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,u=ht();if(G){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),ge===null)throw Error(A(349));(O4&30)!==0||Wa(r,t,n)}u.memoizedState=n;var i={value:n,getSnapshot:t};return u.queue=i,H2(Qa.bind(null,r,i,e),[e]),r.flags|=2048,On(9,Za.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ht(),t=ge.identifierPrefix;if(G){var n=Pt,r=Lt;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Bn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ld++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fd={readContext:nt,useCallback:t5,useContext:nt,useEffect:Ji,useImperativeHandle:e5,useInsertionEffect:Ya,useLayoutEffect:Xa,useMemo:n5,useReducer:F1,useRef:Ga,useState:function(){return F1(Rn)},useDebugValue:eo,useDeferredValue:function(e){var t=rt();return r5(t,ae.memoizedState,e)},useTransition:function(){var e=F1(Rn)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Ua,useSyncExternalStore:Va,useId:u5,unstable_isNewReconciler:!1},hd={readContext:nt,useCallback:t5,useContext:nt,useEffect:Ji,useImperativeHandle:e5,useInsertionEffect:Ya,useLayoutEffect:Xa,useMemo:n5,useReducer:D1,useRef:Ga,useState:function(){return D1(Rn)},useDebugValue:eo,useDeferredValue:function(e){var t=rt();return ae===null?t.memoizedState=e:r5(t,ae.memoizedState,e)},useTransition:function(){var e=D1(Rn)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Ua,useSyncExternalStore:Va,useId:u5,unstable_isNewReconciler:!1};function E0(e,t){try{var n="",r=t;do n+=j7(r),r=r.return;while(r);var u=n}catch(i){u=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:u,digest:null}}function b1(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function T3(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var md=typeof WeakMap=="function"?WeakMap:Map;function l5(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fu||(fu=!0,Z3=r),T3(e,t)},n}function a5(e,t,n){n=At(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var u=t.value;n.payload=function(){return r(u)},n.callback=function(){T3(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){T3(e,t),typeof r!="function"&&(o4===null?o4=new Set([this]):o4.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function j2(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new md;var u=new Set;r.set(t,u)}else u=r.get(t),u===void 0&&(u=new Set,r.set(t,u));u.has(n)||(u.add(n),e=Pd.bind(null,e,t,n),t.then(e,e))}function U2(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function V2(e,t,n,r,u){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,i4(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var Cd=It.ReactCurrentOwner,Oe=!1;function De(e,t,n,r){t.child=e===null?Ha(t,null,n,r):v0(t,e.child,n,r)}function W2(e,t,n,r,u){n=n.render;var i=t.ref;return c0(t,u),r=Yi(e,t,n,r,i,u),n=Xi(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,Tt(e,t,u)):(G&&n&&zi(t),t.flags|=1,De(e,t,r,u),t.child)}function Z2(e,t,n,r,u){if(e===null){var i=n.type;return typeof i=="function"&&!lo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,c5(e,t,i,r,u)):(e=Rr(n.type,null,r,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&u)===0){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Fn,n(o,r)&&e.ref===t.ref)return Tt(e,t,u)}return t.flags|=1,e=l4(i,r),e.ref=t.ref,e.return=t,t.child=e}function c5(e,t,n,r,u){if(e!==null){var i=e.memoizedProps;if(Fn(i,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=i,(e.lanes&u)!==0)(e.flags&131072)!==0&&(Oe=!0);else return t.lanes=e.lanes,Tt(e,t,u)}return N3(e,t,n,r,u)}function d5(e,t,n){var r=t.pendingProps,u=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(i0,ze),ze|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(i0,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(i0,ze),ze|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(i0,ze),ze|=r;return De(e,t,u,n),t.child}function p5(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function N3(e,t,n,r,u){var i=$e(n)?B4:Fe.current;return i=y0(t,i),c0(t,u),n=Yi(e,t,n,r,i,u),r=Xi(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,Tt(e,t,u)):(G&&r&&zi(t),t.flags|=1,De(e,t,n,u),t.child)}function Q2(e,t,n,r,u){if($e(n)){var i=!0;ru(t)}else i=!1;if(c0(t,u),t.stateNode===null)Pr(e,t),za(t,n,r),$3(t,n,r,u),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=nt(c):(c=$e(n)?B4:Fe.current,c=y0(t,c));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==c)&&I2(t,o,r,c),Qt=!1;var g=t.memoizedState;o.state=g,lu(t,r,o,u),l=t.memoizedState,s!==r||g!==l||Me.current||Qt?(typeof d=="function"&&(M3(t,n,d,r),l=t.memoizedState),(s=Qt||N2(t,n,s,r,g,l,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Na(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:it(t.type,s),o.props=c,m=t.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=nt(l):(l=$e(n)?B4:Fe.current,l=y0(t,l));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==m||g!==l)&&I2(t,o,r,l),Qt=!1,g=t.memoizedState,o.state=g,lu(t,r,o,u);var v=t.memoizedState;s!==m||g!==v||Me.current||Qt?(typeof w=="function"&&(M3(t,n,w,r),v=t.memoizedState),(c=Qt||N2(t,n,c,r,g,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return I3(e,t,n,r,i,u)}function I3(e,t,n,r,u,i){p5(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return u&&R2(t,n,!1),Tt(e,t,i);r=t.stateNode,Cd.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=v0(t,e.child,null,i),t.child=v0(t,null,s,i)):De(e,t,s,i),t.memoizedState=r.state,u&&R2(t,n,!0),t.child}function f5(e){var t=e.stateNode;t.pendingContext?B2(e,t.pendingContext,t.pendingContext!==t.context):t.context&&B2(e,t.context,!1),Qi(e,t.containerInfo)}function q2(e,t,n,r,u){return x0(),Hi(u),t.flags|=256,De(e,t,n,r),t.child}var z3={dehydrated:null,treeContext:null,retryLane:0};function _3(e){return{baseLanes:e,cachePool:null,transitions:null}}function h5(e,t,n){var r=t.pendingProps,u=Y.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(u&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),W(Y,u&1),e===null)return R3(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=zu(o,r,0,null),e=L4(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=_3(n),t.memoizedState=z3,e):to(t,o));if(u=e.memoizedState,u!==null&&(s=u.dehydrated,s!==null))return gd(e,t,o,r,s,u,n);if(i){i=r.fallback,o=t.mode,u=e.child,s=u.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==u?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=l4(u,l),r.subtreeFlags=u.subtreeFlags&14680064),s!==null?i=l4(s,i):(i=L4(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?_3(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=z3,r}return i=e.child,e=i.sibling,r=l4(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function to(e,t){return t=zu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function sr(e,t,n,r){return r!==null&&Hi(r),v0(t,e.child,null,n),e=to(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gd(e,t,n,r,u,i,o){if(n)return t.flags&256?(t.flags&=-257,r=b1(Error(A(422))),sr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,u=t.mode,r=zu({mode:"visible",children:r.children},u,0,null),i=L4(i,u,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&v0(t,e.child,null,o),t.child.memoizedState=_3(o),t.memoizedState=z3,i);if((t.mode&1)===0)return sr(e,t,o,null);if(u.data==="$!"){if(r=u.nextSibling&&u.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(A(419)),r=b1(i,r,void 0),sr(e,t,o,r)}if(s=(o&e.childLanes)!==0,Oe||s){if(r=ge,r!==null){switch(o&-o){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(r.suspendedLanes|o))!==0?0:u,u!==0&&u!==i.retryLane&&(i.retryLane=u,$t(e,u),ct(r,e,u,-1))}return so(),r=b1(Error(A(421))),sr(e,t,o,r)}return u.data==="$?"?(t.flags|=128,t.child=e.child,t=Ad.bind(null,e),u._reactRetry=t,null):(e=i.treeContext,_e=u4(u.nextSibling),He=t,G=!0,st=null,e!==null&&(qe[Ke++]=Lt,qe[Ke++]=Pt,qe[Ke++]=R4,Lt=e.id,Pt=e.overflow,R4=t),t=to(t,r.children),t.flags|=4096,t)}function K2(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),O3(e.return,t,n)}function L1(e,t,n,r,u){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:u}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=u)}function m5(e,t,n){var r=t.pendingProps,u=r.revealOrder,i=r.tail;if(De(e,t,r.children,n),r=Y.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&K2(e,n,t);else if(e.tag===19)K2(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Y,r),(t.mode&1)===0)t.memoizedState=null;else switch(u){case"forwards":for(n=t.child,u=null;n!==null;)e=n.alternate,e!==null&&au(e)===null&&(u=n),n=n.sibling;n=u,n===null?(u=t.child,t.child=null):(u=n.sibling,n.sibling=null),L1(t,!1,u,n,i);break;case"backwards":for(n=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&au(e)===null){t.child=u;break}e=u.sibling,u.sibling=n,n=u,u=e}L1(t,!0,n,null,i);break;case"together":L1(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pr(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),M4|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=l4(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=l4(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yd(e,t,n){switch(t.tag){case 3:f5(t),x0();break;case 5:ja(t);break;case 1:$e(t.type)&&ru(t);break;case 4:Qi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,u=t.memoizedProps.value;W(ou,r._currentValue),r._currentValue=u;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Y,Y.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?h5(e,t,n):(W(Y,Y.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);W(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return m5(e,t,n);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),W(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,d5(e,t,n)}return Tt(e,t,n)}var C5,H3,g5,y5;C5=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};H3=function(){};g5=function(e,t,n,r){var u=e.memoizedProps;if(u!==r){e=t.stateNode,F4(xt.current);var i=null;switch(n){case"input":u=a3(e,u),r=a3(e,r),i=[];break;case"select":u=J({},u,{value:void 0}),r=J({},r,{value:void 0}),i=[];break;case"textarea":u=p3(e,u),r=p3(e,r),i=[];break;default:typeof u.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=tu)}h3(n,r);var o;n=null;for(c in u)if(!r.hasOwnProperty(c)&&u.hasOwnProperty(c)&&u[c]!=null)if(c==="style"){var s=u[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(yn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var l=r[c];if(s=u!=null?u[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(yn.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Q("scroll",e),i||s===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};y5=function(e,t,n,r){n!==r&&(t.flags|=4)};function U0(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var u=e.child;u!==null;)n|=u.lanes|u.childLanes,r|=u.subtreeFlags&14680064,r|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)n|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xd(e,t,n){var r=t.pendingProps;switch(_i(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return $e(t.type)&&nu(),Se(t),null;case 3:return r=t.stateNode,w0(),q(Me),q(Fe),Ki(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ir(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,st!==null&&(K3(st),st=null))),H3(e,t),Se(t),null;case 5:qi(t);var u=F4(An.current);if(n=t.type,e!==null&&t.stateNode!=null)g5(e,t,n,r,u),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Se(t),null}if(e=F4(xt.current),ir(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ct]=t,r[Ln]=i,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(u=0;u<X0.length;u++)Q(X0[u],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":u2(r,i),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Q("invalid",r);break;case"textarea":o2(r,i),Q("invalid",r)}h3(n,i),u=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&ur(r.textContent,s,e),u=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&ur(r.textContent,s,e),u=["children",""+s]):yn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":Gn(r),i2(r,i,!0);break;case"textarea":Gn(r),s2(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=tu)}r=u,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ct]=t,e[Ln]=r,C5(e,t,!1,!1),t.stateNode=e;e:{switch(o=m3(n,r),n){case"dialog":Q("cancel",e),Q("close",e),u=r;break;case"iframe":case"object":case"embed":Q("load",e),u=r;break;case"video":case"audio":for(u=0;u<X0.length;u++)Q(X0[u],e);u=r;break;case"source":Q("error",e),u=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),u=r;break;case"details":Q("toggle",e),u=r;break;case"input":u2(e,r),u=a3(e,r),Q("invalid",e);break;case"option":u=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},u=J({},r,{value:void 0}),Q("invalid",e);break;case"textarea":o2(e,r),u=p3(e,r),Q("invalid",e);break;default:u=r}h3(n,u),s=u;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?ql(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Zl(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xn(e,l):typeof l=="number"&&xn(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(yn.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Q("scroll",e):l!=null&&Fi(e,i,l,o))}switch(n){case"input":Gn(e),i2(e,r,!1);break;case"textarea":Gn(e),s2(e);break;case"option":r.value!=null&&e.setAttribute("value",""+a4(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?o0(e,!!r.multiple,i,!1):r.defaultValue!=null&&o0(e,!!r.multiple,r.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=tu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Se(t),null;case 6:if(e&&t.stateNode!=null)y5(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=F4(An.current),F4(xt.current),ir(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(i=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:ur(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ur(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return Se(t),null;case 13:if(q(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&_e!==null&&(t.mode&1)!==0&&(t.flags&128)===0)$a(),x0(),t.flags|=98560,i=!1;else if(i=ir(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(A(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(A(317));i[Ct]=t}else x0(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),i=!1}else st!==null&&(K3(st),st=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Y.current&1)!==0?de===0&&(de=3):so())),t.updateQueue!==null&&(t.flags|=4),Se(t),null);case 4:return w0(),H3(e,t),e===null&&Dn(t.stateNode.containerInfo),Se(t),null;case 10:return Vi(t.type._context),Se(t),null;case 17:return $e(t.type)&&nu(),Se(t),null;case 19:if(q(Y),i=t.memoizedState,i===null)return Se(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)U0(i,!1);else{if(de!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=au(e),o!==null){for(t.flags|=128,U0(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&ue()>S0&&(t.flags|=128,r=!0,U0(i,!1),t.lanes=4194304)}else{if(!r)if(e=au(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),U0(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!G)return Se(t),null}else 2*ue()-i.renderingStartTime>S0&&n!==1073741824&&(t.flags|=128,r=!0,U0(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ue(),t.sibling=null,n=Y.current,W(Y,r?n&1|2:n&1),t):(Se(t),null);case 22:case 23:return oo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ze&1073741824)!==0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function vd(e,t){switch(_i(t),t.tag){case 1:return $e(t.type)&&nu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return w0(),q(Me),q(Fe),Ki(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return qi(t),null;case 13:if(q(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));x0()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(Y),null;case 4:return w0(),null;case 10:return Vi(t.type._context),null;case 22:case 23:return oo(),null;case 24:return null;default:return null}}var lr=!1,ke=!1,wd=typeof WeakSet=="function"?WeakSet:Set,R=null;function u0(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function j3(e,t,n){try{n()}catch(r){ne(e,t,r)}}var G2=!1;function Ed(e,t){if(F3=Xr,e=Ea(),Ii(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var u=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,c=0,d=0,m=e,g=null;t:for(;;){for(var w;m!==n||u!==0&&m.nodeType!==3||(s=o+u),m!==i||r!==0&&m.nodeType!==3||(l=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(w=m.firstChild)!==null;)g=m,m=w;for(;;){if(m===e)break t;if(g===n&&++c===u&&(s=o),g===i&&++d===r&&(l=o),(w=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=w}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(D3={focusedElem:e,selectionRange:n},Xr=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var v=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,k=v.memoizedState,f=t.stateNode,h=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:it(t.type,y),k);f.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(S){ne(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return v=G2,G2=!1,v}function sn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var u=r=r.next;do{if((u.tag&e)===e){var i=u.destroy;u.destroy=void 0,i!==void 0&&j3(t,n,i)}u=u.next}while(u!==r)}}function Nu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function U3(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function x5(e){var t=e.alternate;t!==null&&(e.alternate=null,x5(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[Ln],delete t[P3],delete t[ud],delete t[id])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function v5(e){return e.tag===5||e.tag===3||e.tag===4}function Y2(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||v5(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function V3(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=tu));else if(r!==4&&(e=e.child,e!==null))for(V3(e,t,n),e=e.sibling;e!==null;)V3(e,t,n),e=e.sibling}function W3(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(W3(e,t,n),e=e.sibling;e!==null;)W3(e,t,n),e=e.sibling}var xe=null,ot=!1;function jt(e,t,n){for(n=n.child;n!==null;)w5(e,t,n),n=n.sibling}function w5(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Pu,n)}catch{}switch(n.tag){case 5:ke||u0(n,t);case 6:var r=xe,u=ot;xe=null,jt(e,t,n),xe=r,ot=u,xe!==null&&(ot?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(ot?(e=xe,n=n.stateNode,e.nodeType===8?w1(e.parentNode,n):e.nodeType===1&&w1(e,n),Sn(e)):w1(xe,n.stateNode));break;case 4:r=xe,u=ot,xe=n.stateNode.containerInfo,ot=!0,jt(e,t,n),xe=r,ot=u;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){u=r=r.next;do{var i=u,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&j3(n,t,o),u=u.next}while(u!==r)}jt(e,t,n);break;case 1:if(!ke&&(u0(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ne(n,t,s)}jt(e,t,n);break;case 21:jt(e,t,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,jt(e,t,n),ke=r):jt(e,t,n);break;default:jt(e,t,n)}}function X2(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wd),t.forEach(function(r){var u=Bd.bind(null,e,r);n.has(r)||(n.add(r),r.then(u,u))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var u=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:xe=s.stateNode,ot=!1;break e;case 3:xe=s.stateNode.containerInfo,ot=!0;break e;case 4:xe=s.stateNode.containerInfo,ot=!0;break e}s=s.return}if(xe===null)throw Error(A(160));w5(i,o,u),xe=null,ot=!1;var l=u.alternate;l!==null&&(l.return=null),u.return=null}catch(c){ne(u,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)E5(t,e),t=t.sibling}function E5(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),ft(e),r&4){try{sn(3,e,e.return),Nu(3,e)}catch(y){ne(e,e.return,y)}try{sn(5,e,e.return)}catch(y){ne(e,e.return,y)}}break;case 1:ut(t,e),ft(e),r&512&&n!==null&&u0(n,n.return);break;case 5:if(ut(t,e),ft(e),r&512&&n!==null&&u0(n,n.return),e.flags&32){var u=e.stateNode;try{xn(u,"")}catch(y){ne(e,e.return,y)}}if(r&4&&(u=e.stateNode,u!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Ul(u,i),m3(s,o);var c=m3(s,i);for(o=0;o<l.length;o+=2){var d=l[o],m=l[o+1];d==="style"?ql(u,m):d==="dangerouslySetInnerHTML"?Zl(u,m):d==="children"?xn(u,m):Fi(u,d,m,c)}switch(s){case"input":c3(u,i);break;case"textarea":Vl(u,i);break;case"select":var g=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?o0(u,!!i.multiple,w,!1):g!==!!i.multiple&&(i.defaultValue!=null?o0(u,!!i.multiple,i.defaultValue,!0):o0(u,!!i.multiple,i.multiple?[]:"",!1))}u[Ln]=i}catch(y){ne(e,e.return,y)}}break;case 6:if(ut(t,e),ft(e),r&4){if(e.stateNode===null)throw Error(A(162));u=e.stateNode,i=e.memoizedProps;try{u.nodeValue=i}catch(y){ne(e,e.return,y)}}break;case 3:if(ut(t,e),ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Sn(t.containerInfo)}catch(y){ne(e,e.return,y)}break;case 4:ut(t,e),ft(e);break;case 13:ut(t,e),ft(e),u=e.child,u.flags&8192&&(i=u.memoizedState!==null,u.stateNode.isHidden=i,!i||u.alternate!==null&&u.alternate.memoizedState!==null||(uo=ue())),r&4&&X2(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(c=ke)||d,ut(t,e),ke=c):ut(t,e),ft(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&(e.mode&1)!==0)for(R=e,d=e.child;d!==null;){for(m=R=d;R!==null;){switch(g=R,w=g.child,g.tag){case 0:case 11:case 14:case 15:sn(4,g,g.return);break;case 1:u0(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){ne(r,n,y)}}break;case 5:u0(g,g.return);break;case 22:if(g.memoizedState!==null){es(m);continue}}w!==null?(w.return=g,R=w):es(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{u=m.stateNode,c?(i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,l=m.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Ql("display",o))}catch(y){ne(e,e.return,y)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(y){ne(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ut(t,e),ft(e),r&4&&X2(e);break;case 21:break;default:ut(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(v5(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var u=r.stateNode;r.flags&32&&(xn(u,""),r.flags&=-33);var i=Y2(e);W3(e,i,u);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Y2(e);V3(e,s,o);break;default:throw Error(A(161))}}catch(l){ne(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sd(e,t,n){R=e,S5(e)}function S5(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var u=R,i=u.child;if(u.tag===22&&r){var o=u.memoizedState!==null||lr;if(!o){var s=u.alternate,l=s!==null&&s.memoizedState!==null||ke;s=lr;var c=ke;if(lr=o,(ke=l)&&!c)for(R=u;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?ts(u):l!==null?(l.return=o,R=l):ts(u);for(;i!==null;)R=i,S5(i),i=i.sibling;R=u,lr=s,ke=c}J2(e)}else(u.subtreeFlags&8772)!==0&&i!==null?(i.return=u,R=i):J2(e)}}function J2(e){for(;R!==null;){var t=R;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ke||Nu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(n===null)r.componentDidMount();else{var u=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(u,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&T2(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}T2(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&Sn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}ke||t.flags&512&&U3(t)}catch(g){ne(t,t.return,g)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function es(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function ts(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Nu(4,t)}catch(l){ne(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var u=t.return;try{r.componentDidMount()}catch(l){ne(t,u,l)}}var i=t.return;try{U3(t)}catch(l){ne(t,i,l)}break;case 5:var o=t.return;try{U3(t)}catch(l){ne(t,o,l)}}}catch(l){ne(t,t.return,l)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var kd=Math.ceil,pu=It.ReactCurrentDispatcher,no=It.ReactCurrentOwner,Xe=It.ReactCurrentBatchConfig,H=0,ge=null,se=null,ve=0,ze=0,i0=p4(0),de=0,Mn=null,M4=0,Iu=0,ro=0,ln=null,Re=null,uo=0,S0=1/0,Dt=null,fu=!1,Z3=null,o4=null,ar=!1,Xt=null,hu=0,an=0,Q3=null,Ar=-1,Br=0;function Le(){return(H&6)!==0?ue():Ar!==-1?Ar:Ar=ue()}function s4(e){return(e.mode&1)===0?1:(H&2)!==0&&ve!==0?ve&-ve:sd.transition!==null?(Br===0&&(Br=oa()),Br):(e=U,e!==0||(e=window.event,e=e===void 0?16:fa(e.type)),e)}function ct(e,t,n,r){if(50<an)throw an=0,Q3=null,Error(A(185));zn(e,n,r),((H&2)===0||e!==ge)&&(e===ge&&((H&2)===0&&(Iu|=n),de===4&&Kt(e,ve)),Te(e,r),n===1&&H===0&&(t.mode&1)===0&&(S0=ue()+500,Mu&&f4()))}function Te(e,t){var n=e.callbackNode;sc(e,t);var r=Yr(e,e===ge?ve:0);if(r===0)n!==null&&c2(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&c2(n),t===1)e.tag===0?od(ns.bind(null,e)):Ra(ns.bind(null,e)),nd(function(){(H&6)===0&&f4()}),n=null;else{switch(sa(r)){case 1:n=Ai;break;case 4:n=ua;break;case 16:n=Gr;break;case 536870912:n=ia;break;default:n=Gr}n=B5(n,k5.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function k5(e,t){if(Ar=-1,Br=0,(H&6)!==0)throw Error(A(327));var n=e.callbackNode;if(d0()&&e.callbackNode!==n)return null;var r=Yr(e,e===ge?ve:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=mu(e,r);else{t=r;var u=H;H|=2;var i=D5();(ge!==e||ve!==t)&&(Dt=null,S0=ue()+500,b4(e,t));do try{bd();break}catch(s){F5(e,s)}while(1);Ui(),pu.current=i,H=u,se!==null?t=0:(ge=null,ve=0,t=de)}if(t!==0){if(t===2&&(u=v3(e),u!==0&&(r=u,t=q3(e,u))),t===1)throw n=Mn,b4(e,0),Kt(e,r),Te(e,ue()),n;if(t===6)Kt(e,r);else{if(u=e.current.alternate,(r&30)===0&&!Fd(u)&&(t=mu(e,r),t===2&&(i=v3(e),i!==0&&(r=i,t=q3(e,i))),t===1))throw n=Mn,b4(e,0),Kt(e,r),Te(e,ue()),n;switch(e.finishedWork=u,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:y4(e,Re,Dt);break;case 3:if(Kt(e,r),(r&130023424)===r&&(t=uo+500-ue(),10<t)){if(Yr(e,0)!==0)break;if(u=e.suspendedLanes,(u&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=L3(y4.bind(null,e,Re,Dt),t);break}y4(e,Re,Dt);break;case 4:if(Kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,u=-1;0<r;){var o=31-at(r);i=1<<o,o=t[o],o>u&&(u=o),r&=~i}if(r=u,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kd(r/1960))-r,10<r){e.timeoutHandle=L3(y4.bind(null,e,Re,Dt),r);break}y4(e,Re,Dt);break;case 5:y4(e,Re,Dt);break;default:throw Error(A(329))}}}return Te(e,ue()),e.callbackNode===n?k5.bind(null,e):null}function q3(e,t){var n=ln;return e.current.memoizedState.isDehydrated&&(b4(e,t).flags|=256),e=mu(e,t),e!==2&&(t=Re,Re=n,t!==null&&K3(t)),e}function K3(e){Re===null?Re=e:Re.push.apply(Re,e)}function Fd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var u=n[r],i=u.getSnapshot;u=u.value;try{if(!pt(i(),u))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kt(e,t){for(t&=~ro,t&=~Iu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function ns(e){if((H&6)!==0)throw Error(A(327));d0();var t=Yr(e,0);if((t&1)===0)return Te(e,ue()),null;var n=mu(e,t);if(e.tag!==0&&n===2){var r=v3(e);r!==0&&(t=r,n=q3(e,r))}if(n===1)throw n=Mn,b4(e,0),Kt(e,t),Te(e,ue()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,y4(e,Re,Dt),Te(e,ue()),null}function io(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(S0=ue()+500,Mu&&f4())}}function $4(e){Xt!==null&&Xt.tag===0&&(H&6)===0&&d0();var t=H;H|=1;var n=Xe.transition,r=U;try{if(Xe.transition=null,U=1,e)return e()}finally{U=r,Xe.transition=n,H=t,(H&6)===0&&f4()}}function oo(){ze=i0.current,q(i0)}function b4(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,td(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(_i(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nu();break;case 3:w0(),q(Me),q(Fe),Ki();break;case 5:qi(r);break;case 4:w0();break;case 13:q(Y);break;case 19:q(Y);break;case 10:Vi(r.type._context);break;case 22:case 23:oo()}n=n.return}if(ge=e,se=e=l4(e.current,null),ve=ze=t,de=0,Mn=null,ro=Iu=M4=0,Re=ln=null,k4!==null){for(t=0;t<k4.length;t++)if(n=k4[t],r=n.interleaved,r!==null){n.interleaved=null;var u=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=u,r.next=o}n.pending=r}k4=null}return e}function F5(e,t){do{var n=se;try{if(Ui(),br.current=du,cu){for(var r=X.memoizedState;r!==null;){var u=r.queue;u!==null&&(u.pending=null),r=r.next}cu=!1}if(O4=0,me=ae=X=null,on=!1,Bn=0,no.current=null,n===null||n.return===null){de=1,Mn=t,se=null;break}e:{var i=e,o=n.return,s=n,l=t;if(t=ve,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=s,m=d.tag;if((d.mode&1)===0&&(m===0||m===11||m===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=U2(o);if(w!==null){w.flags&=-257,V2(w,o,s,i,t),w.mode&1&&j2(i,c,t),t=w,l=c;var v=t.updateQueue;if(v===null){var y=new Set;y.add(l),t.updateQueue=y}else v.add(l);break e}else{if((t&1)===0){j2(i,c,t),so();break e}l=Error(A(426))}}else if(G&&s.mode&1){var k=U2(o);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),V2(k,o,s,i,t),Hi(E0(l,s));break e}}i=l=E0(l,s),de!==4&&(de=2),ln===null?ln=[i]:ln.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=l5(i,l,t);$2(i,f);break e;case 1:s=l;var h=i.type,C=i.stateNode;if((i.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(o4===null||!o4.has(C)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=a5(i,s,t);$2(i,S);break e}}i=i.return}while(i!==null)}L5(n)}catch(P){t=P,se===n&&n!==null&&(se=n=n.return);continue}break}while(1)}function D5(){var e=pu.current;return pu.current=du,e===null?du:e}function so(){(de===0||de===3||de===2)&&(de=4),ge===null||(M4&268435455)===0&&(Iu&268435455)===0||Kt(ge,ve)}function mu(e,t){var n=H;H|=2;var r=D5();(ge!==e||ve!==t)&&(Dt=null,b4(e,t));do try{Dd();break}catch(u){F5(e,u)}while(1);if(Ui(),H=n,pu.current=r,se!==null)throw Error(A(261));return ge=null,ve=0,de}function Dd(){for(;se!==null;)b5(se)}function bd(){for(;se!==null&&!X7();)b5(se)}function b5(e){var t=A5(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?L5(e):se=t,no.current=null}function L5(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=xd(n,t,ze),n!==null){se=n;return}}else{if(n=vd(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,se=null;return}}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);de===0&&(de=5)}function y4(e,t,n){var r=U,u=Xe.transition;try{Xe.transition=null,U=1,Ld(e,t,n,r)}finally{Xe.transition=u,U=r}return null}function Ld(e,t,n,r){do d0();while(Xt!==null);if((H&6)!==0)throw Error(A(327));n=e.finishedWork;var u=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(lc(e,i),e===ge&&(se=ge=null,ve=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ar||(ar=!0,B5(Gr,function(){return d0(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Xe.transition,Xe.transition=null;var o=U;U=1;var s=H;H|=4,no.current=null,Ed(e,n),E5(n,e),qc(D3),Xr=!!F3,D3=F3=null,e.current=n,Sd(n),J7(),H=s,U=o,Xe.transition=i}else e.current=n;if(ar&&(ar=!1,Xt=e,hu=u),i=e.pendingLanes,i===0&&(o4=null),nc(n.stateNode),Te(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)u=t[n],r(u.value,{componentStack:u.stack,digest:u.digest});if(fu)throw fu=!1,e=Z3,Z3=null,e;return(hu&1)!==0&&e.tag!==0&&d0(),i=e.pendingLanes,(i&1)!==0?e===Q3?an++:(an=0,Q3=e):an=0,f4(),null}function d0(){if(Xt!==null){var e=sa(hu),t=Xe.transition,n=U;try{if(Xe.transition=null,U=16>e?16:e,Xt===null)var r=!1;else{if(e=Xt,Xt=null,hu=0,(H&6)!==0)throw Error(A(331));var u=H;for(H|=4,R=e.current;R!==null;){var i=R,o=i.child;if((R.flags&16)!==0){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(R=c;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:sn(8,d,i)}var m=d.child;if(m!==null)m.return=d,R=m;else for(;R!==null;){d=R;var g=d.sibling,w=d.return;if(x5(d),d===c){R=null;break}if(g!==null){g.return=w,R=g;break}R=w}}}var v=i.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}R=i}}if((i.subtreeFlags&2064)!==0&&o!==null)o.return=i,R=o;else e:for(;R!==null;){if(i=R,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:sn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,R=f;break e}R=i.return}}var h=e.current;for(R=h;R!==null;){o=R;var C=o.child;if((o.subtreeFlags&2064)!==0&&C!==null)C.return=o,R=C;else e:for(o=h;R!==null;){if(s=R,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Nu(9,s)}}catch(P){ne(s,s.return,P)}if(s===o){R=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,R=S;break e}R=s.return}}if(H=u,f4(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Pu,e)}catch{}r=!0}return r}finally{U=n,Xe.transition=t}}return!1}function rs(e,t,n){t=E0(n,t),t=l5(e,t,1),e=i4(e,t,1),t=Le(),e!==null&&(zn(e,1,t),Te(e,t))}function ne(e,t,n){if(e.tag===3)rs(e,e,n);else for(;t!==null;){if(t.tag===3){rs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(o4===null||!o4.has(r))){e=E0(n,e),e=a5(t,e,1),t=i4(t,e,1),e=Le(),t!==null&&(zn(t,1,e),Te(t,e));break}}t=t.return}}function Pd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(ve&n)===n&&(de===4||de===3&&(ve&130023424)===ve&&500>ue()-uo?b4(e,0):ro|=n),Te(e,t)}function P5(e,t){t===0&&((e.mode&1)===0?t=1:(t=Jn,Jn<<=1,(Jn&130023424)===0&&(Jn=4194304)));var n=Le();e=$t(e,t),e!==null&&(zn(e,t,n),Te(e,n))}function Ad(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),P5(e,n)}function Bd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(n=u.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),P5(e,n)}var A5;A5=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Me.current)Oe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Oe=!1,yd(e,t,n);Oe=(e.flags&131072)!==0}else Oe=!1,G&&(t.flags&1048576)!==0&&Oa(t,iu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pr(e,t),e=t.pendingProps;var u=y0(t,Fe.current);c0(t,n),u=Yi(null,t,r,e,u,n);var i=Xi();return t.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(i=!0,ru(t)):i=!1,t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Zi(t),u.updater=$u,t.stateNode=u,u._reactInternals=t,$3(t,r,e,n),t=I3(null,t,r,!0,i,n)):(t.tag=0,G&&i&&zi(t),De(null,t,u,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pr(e,t),e=t.pendingProps,u=r._init,r=u(r._payload),t.type=r,u=t.tag=Od(r),e=it(r,e),u){case 0:t=N3(null,t,r,e,n);break e;case 1:t=Q2(null,t,r,e,n);break e;case 11:t=W2(null,t,r,e,n);break e;case 14:t=Z2(null,t,r,it(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,u=t.pendingProps,u=t.elementType===r?u:it(r,u),N3(e,t,r,u,n);case 1:return r=t.type,u=t.pendingProps,u=t.elementType===r?u:it(r,u),Q2(e,t,r,u,n);case 3:e:{if(f5(t),e===null)throw Error(A(387));r=t.pendingProps,i=t.memoizedState,u=i.element,Na(e,t),lu(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){u=E0(Error(A(423)),t),t=q2(e,t,r,n,u);break e}else if(r!==u){u=E0(Error(A(424)),t),t=q2(e,t,r,n,u);break e}else for(_e=u4(t.stateNode.containerInfo.firstChild),He=t,G=!0,st=null,n=Ha(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(x0(),r===u){t=Tt(e,t,n);break e}De(e,t,r,n)}t=t.child}return t;case 5:return ja(t),e===null&&R3(t),r=t.type,u=t.pendingProps,i=e!==null?e.memoizedProps:null,o=u.children,b3(r,u)?o=null:i!==null&&b3(r,i)&&(t.flags|=32),p5(e,t),De(e,t,o,n),t.child;case 6:return e===null&&R3(t),null;case 13:return h5(e,t,n);case 4:return Qi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=v0(t,null,r,n):De(e,t,r,n),t.child;case 11:return r=t.type,u=t.pendingProps,u=t.elementType===r?u:it(r,u),W2(e,t,r,u,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,u=t.pendingProps,i=t.memoizedProps,o=u.value,W(ou,r._currentValue),r._currentValue=o,i!==null)if(pt(i.value,o)){if(i.children===u.children&&!Me.current){t=Tt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=At(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),O3(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(A(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),O3(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}De(e,t,u.children,n),t=t.child}return t;case 9:return u=t.type,r=t.pendingProps.children,c0(t,n),u=nt(u),r=r(u),t.flags|=1,De(e,t,r,n),t.child;case 14:return r=t.type,u=it(r,t.pendingProps),u=it(r.type,u),Z2(e,t,r,u,n);case 15:return c5(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,u=t.pendingProps,u=t.elementType===r?u:it(r,u),Pr(e,t),t.tag=1,$e(r)?(e=!0,ru(t)):e=!1,c0(t,n),za(t,r,u),$3(t,r,u,n),I3(null,t,r,!0,e,n);case 19:return m5(e,t,n);case 22:return d5(e,t,n)}throw Error(A(156,t.tag))};function B5(e,t){return ra(e,t)}function Rd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(e,t,n,r){return new Rd(e,t,n,r)}function lo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Od(e){if(typeof e=="function")return lo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bi)return 11;if(e===Li)return 14}return 2}function l4(e,t){var n=e.alternate;return n===null?(n=Ge(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rr(e,t,n,r,u,i){var o=2;if(r=e,typeof e=="function")lo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case K4:return L4(n.children,u,i,t);case Di:o=8,u|=8;break;case i3:return e=Ge(12,n,t,u|2),e.elementType=i3,e.lanes=i,e;case o3:return e=Ge(13,n,t,u),e.elementType=o3,e.lanes=i,e;case s3:return e=Ge(19,n,t,u),e.elementType=s3,e.lanes=i,e;case _l:return zu(n,u,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Il:o=10;break e;case zl:o=9;break e;case bi:o=11;break e;case Li:o=14;break e;case Zt:o=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=Ge(o,n,t,u),t.elementType=e,t.type=r,t.lanes=i,t}function L4(e,t,n,r){return e=Ge(7,e,r,t),e.lanes=n,e}function zu(e,t,n,r){return e=Ge(22,e,r,t),e.elementType=_l,e.lanes=n,e.stateNode={isHidden:!1},e}function P1(e,t,n){return e=Ge(6,e,null,t),e.lanes=n,e}function A1(e,t,n){return t=Ge(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Md(e,t,n,r,u){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=c1(0),this.expirationTimes=c1(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=c1(0),this.identifierPrefix=r,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function ao(e,t,n,r,u,i,o,s,l){return e=new Md(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ge(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zi(i),e}function $d(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q4,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function R5(e){if(!e)return c4;e=e._reactInternals;e:{if(_4(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if($e(n))return Ba(e,n,t)}return t}function O5(e,t,n,r,u,i,o,s,l){return e=ao(n,r,!0,e,u,i,o,s,l),e.context=R5(null),n=e.current,r=Le(),u=s4(n),i=At(r,u),i.callback=t!=null?t:null,i4(n,i,u),e.current.lanes=u,zn(e,u,r),Te(e,r),e}function _u(e,t,n,r){var u=t.current,i=Le(),o=s4(u);return n=R5(n),t.context===null?t.context=n:t.pendingContext=n,t=At(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=i4(u,t,o),e!==null&&(ct(e,u,o,i),Dr(e,u,o)),o}function Cu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function us(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function co(e,t){us(e,t),(e=e.alternate)&&us(e,t)}function Td(){return null}var M5=typeof reportError=="function"?reportError:function(e){console.error(e)};function po(e){this._internalRoot=e}Hu.prototype.render=po.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));_u(e,t,null,null)};Hu.prototype.unmount=po.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$4(function(){_u(null,e,null,null)}),t[Mt]=null}};function Hu(e){this._internalRoot=e}Hu.prototype.unstable_scheduleHydration=function(e){if(e){var t=ca();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qt.length&&t!==0&&t<qt[n].priority;n++);qt.splice(n,0,e),n===0&&pa(e)}};function fo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ju(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function is(){}function Nd(e,t,n,r,u){if(u){if(typeof r=="function"){var i=r;r=function(){var c=Cu(o);i.call(c)}}var o=O5(t,r,e,0,null,!1,!1,"",is);return e._reactRootContainer=o,e[Mt]=o.current,Dn(e.nodeType===8?e.parentNode:e),$4(),o}for(;u=e.lastChild;)e.removeChild(u);if(typeof r=="function"){var s=r;r=function(){var c=Cu(l);s.call(c)}}var l=ao(e,0,!1,null,null,!1,!1,"",is);return e._reactRootContainer=l,e[Mt]=l.current,Dn(e.nodeType===8?e.parentNode:e),$4(function(){_u(t,l,n,r)}),l}function Uu(e,t,n,r,u){var i=n._reactRootContainer;if(i){var o=i;if(typeof u=="function"){var s=u;u=function(){var l=Cu(o);s.call(l)}}_u(t,o,e,u)}else o=Nd(n,t,e,u,r);return Cu(o)}la=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Y0(t.pendingLanes);n!==0&&(Bi(t,n|1),Te(t,ue()),(H&6)===0&&(S0=ue()+500,f4()))}break;case 13:$4(function(){var r=$t(e,1);if(r!==null){var u=Le();ct(r,e,1,u)}}),co(e,1)}};Ri=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var n=Le();ct(t,e,134217728,n)}co(e,134217728)}};aa=function(e){if(e.tag===13){var t=s4(e),n=$t(e,t);if(n!==null){var r=Le();ct(n,e,t,r)}co(e,t)}};ca=function(){return U};da=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};g3=function(e,t,n){switch(t){case"input":if(c3(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var u=Ou(r);if(!u)throw Error(A(90));jl(r),c3(r,u)}}}break;case"textarea":Vl(e,n);break;case"select":t=n.value,t!=null&&o0(e,!!n.multiple,t,!1)}};Yl=io;Xl=$4;var Id={usingClientEntryPoint:!1,Events:[Hn,J4,Ou,Kl,Gl,io]},V0={findFiberByHostInstance:S4,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},zd={bundleType:V0.bundleType,version:V0.version,rendererPackageName:V0.rendererPackageName,rendererConfig:V0.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ta(e),e===null?null:e.stateNode},findFiberByHostInstance:V0.findFiberByHostInstance||Td,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var cr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cr.isDisabled&&cr.supportsFiber)try{Pu=cr.inject(zd),yt=cr}catch{}}Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Id;Ue.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fo(t))throw Error(A(200));return $d(e,t,null,n)};Ue.createRoot=function(e,t){if(!fo(e))throw Error(A(299));var n=!1,r="",u=M5;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=ao(e,1,!1,null,null,n,!1,r,u),e[Mt]=t.current,Dn(e.nodeType===8?e.parentNode:e),new po(t)};Ue.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=ta(t),e=e===null?null:e.stateNode,e};Ue.flushSync=function(e){return $4(e)};Ue.hydrate=function(e,t,n){if(!ju(t))throw Error(A(200));return Uu(null,e,t,!0,n)};Ue.hydrateRoot=function(e,t,n){if(!fo(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,u=!1,i="",o=M5;if(n!=null&&(n.unstable_strictMode===!0&&(u=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=O5(t,null,e,1,n!=null?n:null,u,!1,i,o),e[Mt]=t.current,Dn(e),r)for(e=0;e<r.length;e++)n=r[e],u=n._getVersion,u=u(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,u]:t.mutableSourceEagerHydrationData.push(n,u);return new Hu(t)};Ue.render=function(e,t,n){if(!ju(t))throw Error(A(200));return Uu(null,e,t,!1,n)};Ue.unmountComponentAtNode=function(e){if(!ju(e))throw Error(A(40));return e._reactRootContainer?($4(function(){Uu(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};Ue.unstable_batchedUpdates=io;Ue.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ju(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return Uu(e,t,n,!1,r)};Ue.version="18.2.0-next-9e3b772b8-20220608";function $5(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($5)}catch(e){console.error(e)}}$5(),Ol.exports=Ue;var T5={exports:{}},N5={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0=p.exports;function _d(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Hd=typeof Object.is=="function"?Object.is:_d,jd=k0.useState,Ud=k0.useEffect,Vd=k0.useLayoutEffect,Wd=k0.useDebugValue;function Zd(e,t){var n=t(),r=jd({inst:{value:n,getSnapshot:t}}),u=r[0].inst,i=r[1];return Vd(function(){u.value=n,u.getSnapshot=t,B1(u)&&i({inst:u})},[e,n,t]),Ud(function(){return B1(u)&&i({inst:u}),e(function(){B1(u)&&i({inst:u})})},[e]),Wd(n),n}function B1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Hd(e,n)}catch{return!0}}function Qd(e,t){return t()}var qd=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?Qd:Zd;N5.useSyncExternalStore=k0.useSyncExternalStore!==void 0?k0.useSyncExternalStore:qd;T5.exports=N5;const I5=T5.exports.useSyncExternalStore,os=p.exports.createContext(void 0),z5=p.exports.createContext(!1);function _5(e,t){return e||(t&&typeof window!="undefined"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=os),window.ReactQueryClientContext):os)}const ho=({context:e}={})=>{const t=p.exports.useContext(_5(e,p.exports.useContext(z5)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},Kd=({client:e,children:t,context:n,contextSharing:r=!1})=>{p.exports.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);const u=_5(n,r);return p.exports.createElement(z5.Provider,{value:!n&&r},p.exports.createElement(u.Provider,{value:e},t))},H5=p.exports.createContext(!1),Gd=()=>p.exports.useContext(H5);H5.Provider;function Yd(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}const Xd=p.exports.createContext(Yd()),Jd=()=>p.exports.useContext(Xd);function j5(e,t){return typeof e=="function"?e(...t):!!e}const ep=(e,t)=>{(e.suspense||e.useErrorBoundary)&&(t.isReset()||(e.retryOnMount=!1))},tp=e=>{p.exports.useEffect(()=>{e.clearReset()},[e])},np=({result:e,errorResetBoundary:t,useErrorBoundary:n,query:r})=>e.isError&&!t.isReset()&&!e.isFetching&&j5(n,[e.error,r]),rp=e=>{e.suspense&&typeof e.staleTime!="number"&&(e.staleTime=1e3)},up=(e,t)=>e.isLoading&&e.isFetching&&!t,ip=(e,t,n)=>(e==null?void 0:e.suspense)&&up(t,n),op=(e,t,n)=>t.fetchOptimistic(e).then(({data:r})=>{e.onSuccess==null||e.onSuccess(r),e.onSettled==null||e.onSettled(r,null)}).catch(r=>{n.clearReset(),e.onError==null||e.onError(r),e.onSettled==null||e.onSettled(void 0,r)});function sp(e,t){const n=ho({context:e.context}),r=Gd(),u=Jd(),i=n.defaultQueryOptions(e);i._optimisticResults=r?"isRestoring":"optimistic",i.onError&&(i.onError=re.batchCalls(i.onError)),i.onSuccess&&(i.onSuccess=re.batchCalls(i.onSuccess)),i.onSettled&&(i.onSettled=re.batchCalls(i.onSettled)),rp(i),ep(i,u),tp(u);const[o]=p.exports.useState(()=>new t(n,i)),s=o.getOptimisticResult(i);if(I5(p.exports.useCallback(l=>{const c=r?()=>{}:o.subscribe(re.batchCalls(l));return o.updateResult(),c},[o,r]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),p.exports.useEffect(()=>{o.setOptions(i,{listeners:!1})},[i,o]),ip(i,s,r))throw op(i,o,u);if(np({result:s,errorResetBoundary:u,useErrorBoundary:i.useErrorBoundary,query:o.getCurrentQuery()}))throw s.error;return i.notifyOnChangeProps?s:o.trackResult(s)}function mo(e,t,n){const r=q0(e,t,n);return sp(r,M7)}function cn(e,t,n){const r=v7(e,t,n),u=ho({context:r.context}),[i]=p.exports.useState(()=>new N7(u,r));p.exports.useEffect(()=>{i.setOptions(r)},[i,r]);const o=I5(p.exports.useCallback(l=>i.subscribe(re.batchCalls(l)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),s=p.exports.useCallback((l,c)=>{i.mutate(l,c).catch(lp)},[i]);if(o.error&&j5(i.options.useErrorBoundary,[o.error]))throw o.error;return{...o,mutate:s,mutateAsync:o.mutate}}function lp(){}const ap=()=>E(ee,{style:{padding:"0 2.7%"},children:[a(xi,{}),a(kl,{}),a(vu,{})]});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var G3=function(){return G3=Object.assign||function(t){for(var n,r=1,u=arguments.length;r<u;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},G3.apply(this,arguments)};function cp(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,r=Object.getOwnPropertySymbols(e);u<r.length;u++)t.indexOf(r[u])<0&&Object.prototype.propertyIsEnumerable.call(e,r[u])&&(n[r[u]]=e[r[u]]);return n}var p0="",dn=null,Or=null,U5=null;function Co(){p0="",dn!==null&&dn.disconnect(),Or!==null&&(window.clearTimeout(Or),Or=null)}function ss(e){var t=["BUTTON","INPUT","SELECT","TEXTAREA"],n=["A","AREA"];return t.includes(e.tagName)&&!e.hasAttribute("disabled")||n.includes(e.tagName)&&e.hasAttribute("href")}function ls(){var e=null;if(p0==="#")e=document.body;else{var t=p0.replace("#","");e=document.getElementById(t),e===null&&p0==="#top"&&(e=document.body)}if(e!==null){U5(e);var n=e.getAttribute("tabindex");return n===null&&!ss(e)&&e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),n===null&&!ss(e)&&(e.blur(),e.removeAttribute("tabindex")),Co(),!0}return!1}function dp(e){window.setTimeout(function(){ls()===!1&&(dn===null&&(dn=new MutationObserver(ls)),dn.observe(document,{attributes:!0,childList:!0,subtree:!0}),Or=window.setTimeout(function(){Co()},e||1e4))},0)}function V5(e){return be.forwardRef(function(t,n){var r="";typeof t.to=="string"&&t.to.includes("#")?r="#"+t.to.split("#").slice(1).join("#"):typeof t.to=="object"&&typeof t.to.hash=="string"&&(r=t.to.hash);var u={};e===dt&&(u.isActive=function(s,l){return s&&s.isExact&&l.hash===r});function i(s){Co(),p0=t.elementId?"#"+t.elementId:r,t.onClick&&t.onClick(s),p0!==""&&!s.defaultPrevented&&s.button===0&&(!t.target||t.target==="_self")&&!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&(U5=t.scroll||function(l){return t.smooth?l.scrollIntoView({behavior:"smooth"}):l.scrollIntoView()},dp(t.timeout))}var o=cp(t,["scroll","smooth","timeout","elementId"]);return be.createElement(e,G3({},u,o,{onClick:i,ref:n}),t.children)})}var pp=V5(Rt);V5(dt);const fp=e=>p.exports.createElement("svg",{width:64,height:48,viewBox:"0 0 64 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M11.2391 7.31769C11.2391 8.47842 10.9502 9.53822 10.3726 10.4971C9.79489 11.4391 9.02184 12.2298 8.05339 12.869C8.5631 12.9699 9.00485 13.1466 9.37863 13.3989C9.75242 13.6344 10.0582 13.9288 10.2961 14.2821C10.551 14.6353 10.7379 15.0391 10.8568 15.4933C10.9927 15.9307 11.0607 16.3933 11.0607 16.8811C11.0607 17.84 10.8313 18.6811 10.3726 19.4044C9.93082 20.111 9.35315 20.6997 8.63956 21.1708C7.92596 21.625 7.12742 21.9698 6.24393 22.2053C5.37742 22.424 4.51092 22.5334 3.64441 22.5334C3.16869 22.5334 2.69296 22.4997 2.21723 22.4324C1.7415 22.3651 1.29126 22.2474 0.866504 22.0792C0.713592 22.0287 0.586164 21.8268 0.484223 21.4736C0.382281 21.1035 0.29733 20.6577 0.229369 20.1362C0.178398 19.6147 0.135922 19.0512 0.101942 18.4456C0.0679611 17.84 0.0424757 17.2596 0.0254854 16.7045C0.00849513 16.1493 0 15.6615 0 15.2409C0 14.8204 0 14.526 0 14.3578C0 13.769 0 13.1802 0 12.5914C0 11.9858 0.0169903 11.3887 0.0509708 10.7999C0.0509708 10.6485 0.0509708 10.413 0.0509708 10.0933C0.0679611 9.77373 0.0764562 9.42046 0.0764562 9.03355C0.0934465 8.62982 0.110437 8.20926 0.127427 7.77188C0.161408 7.33451 0.195388 6.93078 0.229369 6.56069C0.28034 6.17378 0.339805 5.84575 0.407766 5.57659C0.492718 5.30744 0.586165 5.13921 0.688106 5.07193C1.07888 4.81959 1.51213 4.58408 1.98786 4.36539C2.46359 4.12988 2.95631 3.92802 3.46602 3.75979C3.97573 3.59157 4.48543 3.45699 4.99514 3.35606C5.50485 3.25513 5.98907 3.20466 6.44781 3.20466C7.07645 3.20466 7.67961 3.29718 8.25728 3.48222C8.85194 3.65045 9.36164 3.91119 9.7864 4.26446C10.2281 4.61773 10.5764 5.0551 10.8313 5.57659C11.1031 6.08126 11.2391 6.66162 11.2391 7.31769ZM7.00849 8.65505C7.00849 8.36907 6.91504 8.1588 6.72815 8.02422C6.55825 7.88964 6.32888 7.82235 6.04004 7.82235C5.80218 7.82235 5.54733 7.87282 5.27548 7.97375C5.02063 8.07468 4.79975 8.20926 4.61286 8.37749C4.56189 8.42795 4.51092 8.57094 4.45995 8.80645C4.42597 9.04196 4.39199 9.31112 4.35801 9.61392C4.34102 9.89989 4.32403 10.1775 4.30704 10.4466C4.30704 10.6989 4.30704 10.8672 4.30704 10.9513C4.30704 10.9849 4.30704 11.0438 4.30704 11.1279C4.30704 11.1952 4.30704 11.2709 4.30704 11.355C4.32403 11.4391 4.34102 11.5148 4.35801 11.5821C4.375 11.6494 4.40048 11.683 4.43446 11.683C4.7233 11.683 5.02063 11.5821 5.32645 11.3802C5.63228 11.1616 5.90412 10.9008 6.14199 10.598C6.39684 10.2784 6.60072 9.94195 6.75364 9.58868C6.92354 9.23542 7.00849 8.92421 7.00849 8.65505ZM6.90655 15.9475C6.90655 15.6615 6.80461 15.4596 6.60072 15.3419C6.39684 15.2241 6.16747 15.1652 5.91262 15.1652C5.67475 15.1652 5.4199 15.2241 5.14805 15.3419C4.8932 15.4428 4.68082 15.569 4.51092 15.7204C4.45995 15.754 4.41747 15.8381 4.38349 15.9727C4.3665 16.1073 4.34951 16.2587 4.33252 16.4269C4.33252 16.5783 4.32403 16.7297 4.30704 16.8811C4.30704 17.0157 4.30704 17.1082 4.30704 17.1587C4.30704 17.1923 4.30704 17.2596 4.30704 17.3605C4.30704 17.4615 4.30704 17.5708 4.30704 17.6886C4.32403 17.7895 4.34102 17.8904 4.35801 17.9914C4.39199 18.0755 4.42597 18.1175 4.45995 18.1175C4.69781 18.1175 4.96116 18.0502 5.25 17.9157C5.53883 17.7811 5.80218 17.6129 6.04004 17.411C6.2949 17.2091 6.49878 16.982 6.65169 16.7297C6.8216 16.4605 6.90655 16.1998 6.90655 15.9475Z",fill:"#758650"}),p.exports.createElement("path",{d:"M21.2039 5.09716C21.2039 5.41678 21.1274 5.70275 20.9745 5.95509C20.8386 6.20742 20.6517 6.42611 20.4138 6.61115C20.176 6.77938 19.9126 6.92236 19.6238 7.04012C19.3349 7.15787 19.0546 7.24199 18.7828 7.29245C18.7488 9.19336 18.6723 11.027 18.5534 12.7933C18.4514 14.5596 18.2815 16.3848 18.0437 18.2689H18.1966C18.4684 18.2689 18.7318 18.3026 18.9866 18.3699C19.2585 18.4203 19.4963 18.5213 19.7002 18.6727C19.9211 18.8072 20.091 18.9839 20.2099 19.2026C20.3459 19.4044 20.4138 19.6568 20.4138 19.9596C20.4138 20.3465 20.2864 20.6829 20.0315 20.9689C19.7937 21.2549 19.4709 21.4988 19.0631 21.7007C18.6723 21.9025 18.2306 22.0708 17.7378 22.2053C17.2451 22.3399 16.7524 22.4408 16.2597 22.5081C15.767 22.5922 15.2997 22.6511 14.858 22.6848C14.4163 22.7184 14.0595 22.7352 13.7876 22.7352C13.5837 22.7352 13.3289 22.7268 13.023 22.71C12.7342 22.6932 12.4539 22.6427 12.182 22.5586C11.9272 22.4745 11.7063 22.3483 11.5194 22.1801C11.3325 22.0119 11.2391 21.7848 11.2391 21.4988C11.2391 21.1455 11.3155 20.8343 11.4684 20.5652C11.6044 20.2792 11.7913 20.0269 12.0291 19.8082C12.267 19.5895 12.5303 19.4128 12.8192 19.2783C13.125 19.1437 13.4308 19.0428 13.7366 18.9755C13.8556 18.0502 13.966 17.1334 14.068 16.225C14.1699 15.2998 14.2379 14.3662 14.2718 13.4241C14.3058 12.4653 14.3398 11.5232 14.3738 10.598C14.4078 9.65597 14.4417 8.71393 14.4757 7.77188C14.3568 7.78871 14.2463 7.80553 14.1444 7.82235C14.0425 7.82235 13.949 7.82235 13.8641 7.82235C13.6262 7.82235 13.3714 7.79712 13.0995 7.74665C12.8277 7.69619 12.5728 7.61207 12.3349 7.49432C12.0971 7.35974 11.8932 7.19993 11.7233 7.01488C11.5704 6.82984 11.4939 6.59434 11.4939 6.30836C11.4939 5.7364 11.7318 5.26538 12.2075 4.89529C12.7002 4.5252 13.2779 4.23923 13.9405 4.03736C14.6201 3.83549 15.3082 3.70092 16.0048 3.63363C16.7014 3.54952 17.2621 3.50746 17.6869 3.50746C17.9247 3.50746 18.2391 3.52428 18.6298 3.55793C19.0206 3.59157 19.4029 3.66727 19.7767 3.78502C20.1675 3.90278 20.4988 4.06259 20.7706 4.26446C21.0595 4.46633 21.2039 4.74389 21.2039 5.09716Z",fill:"#758650"}),p.exports.createElement("path",{d:"M32.9781 16.1746C32.8252 16.9316 32.5789 17.7222 32.2391 18.5465C31.9162 19.354 31.4915 20.0941 30.9648 20.767C30.4551 21.4399 29.8434 21.9866 29.1298 22.4072C28.4162 22.8446 27.6007 23.0633 26.6832 23.0633C26.0036 23.0633 25.392 22.9287 24.8483 22.6595C24.3046 22.3904 23.8119 22.0287 23.3701 21.5745C22.9284 21.1203 22.5461 20.5988 22.2233 20.01C21.9005 19.4213 21.6286 18.8157 21.4077 18.1932C21.2039 17.554 21.051 16.9232 20.949 16.3007C20.8471 15.6783 20.7961 15.098 20.7961 14.5596C20.7961 13.8026 20.8641 12.9952 21 12.1372C21.1529 11.2625 21.3738 10.4046 21.6626 9.56345C21.9514 8.70552 22.3167 7.88964 22.7585 7.11582C23.2002 6.32518 23.7184 5.63547 24.3131 5.04669C24.9247 4.44109 25.6043 3.96166 26.3519 3.60839C27.1165 3.23831 27.966 3.05326 28.9005 3.05326C29.4951 3.05326 30.0473 3.17101 30.557 3.40652C31.0667 3.62521 31.5085 3.92801 31.8823 4.31492C32.256 4.68501 32.5449 5.1308 32.7488 5.65229C32.9696 6.17377 33.0801 6.7205 33.0801 7.29245V7.51955C33.0801 7.82235 33.0631 8.20085 33.0291 8.65505C33.0121 9.09243 32.9357 9.51299 32.7997 9.91672C32.6638 10.3205 32.4599 10.6737 32.1881 10.9765C31.9162 11.2625 31.534 11.4055 31.0412 11.4055C30.4466 11.4055 29.9963 11.2709 29.6905 11.0017C29.3847 10.7326 29.2318 10.2868 29.2318 9.66438C29.2318 9.42887 29.2403 9.19336 29.2573 8.95785C29.2743 8.72234 29.2827 8.48683 29.2827 8.25132C29.2827 7.89805 29.2233 7.6289 29.1043 7.44385C28.9854 7.24199 28.7391 7.14105 28.3653 7.14105C27.9405 7.14105 27.5582 7.27563 27.2184 7.54478C26.8786 7.81394 26.5813 8.16721 26.3264 8.60459C26.0716 9.04196 25.8507 9.53822 25.6638 10.0933C25.4769 10.6485 25.324 11.212 25.2051 11.784C25.0861 12.3391 25.0012 12.8774 24.9502 13.3989C24.8993 13.9204 24.8738 14.3662 24.8738 14.7363C24.8738 15.0391 24.8908 15.3923 24.9247 15.7961C24.9587 16.183 25.0267 16.5615 25.1286 16.9316C25.2476 17.2848 25.4175 17.5876 25.6383 17.84C25.8592 18.0923 26.148 18.2185 26.5048 18.2185C27.1165 18.2185 27.6092 18.0334 27.983 17.6633C28.3568 17.2764 28.6116 16.7886 28.7476 16.1998C28.5097 16.1662 28.2718 16.1157 28.034 16.0484C27.8131 15.9643 27.6007 15.8549 27.3968 15.7204C27.2099 15.569 27.057 15.3923 26.9381 15.1905C26.8192 14.9718 26.7597 14.7195 26.7597 14.4335C26.7597 13.912 26.9381 13.5083 27.2949 13.2223C27.6517 12.9195 28.0679 12.6924 28.5437 12.541C29.0364 12.3896 29.5376 12.2971 30.0473 12.2634C30.557 12.2129 30.9648 12.1877 31.2706 12.1877C31.4915 12.1877 31.8143 12.2045 32.2391 12.2382C32.6638 12.2718 33.0801 12.3475 33.4878 12.4653C33.9126 12.5662 34.2779 12.7176 34.5837 12.9195C34.8895 13.1213 35.0424 13.3821 35.0424 13.7017C35.0424 14.341 34.864 14.8961 34.5073 15.3671C34.1674 15.8213 33.6577 16.0905 32.9781 16.1746Z",fill:"#758650"}),p.exports.createElement("path",{d:"M12.1311 43.7103C12.1311 44.1309 11.9527 44.5262 11.5959 44.8963C11.2561 45.2664 10.8058 45.6028 10.2451 45.9056C9.70146 46.2084 9.0898 46.4776 8.41019 46.7131C7.73058 46.9318 7.05946 47.1168 6.39684 47.2682C5.73422 47.4365 5.10558 47.5626 4.51092 47.6467C3.93325 47.7308 3.47451 47.7729 3.13471 47.7729C2.81189 47.7729 2.46359 47.7393 2.08981 47.672C1.73301 47.6215 1.43568 47.4953 1.19782 47.2935C1.0619 47.1925 0.942964 46.9654 0.841023 46.6122C0.739081 46.2589 0.637137 45.8383 0.535196 45.3505C0.450244 44.8627 0.373788 44.3412 0.305827 43.786C0.237866 43.2141 0.178398 42.659 0.127427 42.1206C0.0934468 41.5823 0.0594706 41.0861 0.0254901 40.6319C0.00849982 40.1777 0 39.8244 0 39.5721C0 39.1515 0.00849982 38.6469 0.0254901 38.0581C0.0594706 37.4525 0.101943 36.8132 0.152914 36.1404C0.203884 35.4506 0.271844 34.7525 0.356796 34.046C0.441747 33.3395 0.535195 32.675 0.637137 32.0526C0.756069 31.4133 0.891989 30.8414 1.0449 30.3367C1.2148 29.832 1.39321 29.4367 1.5801 29.1507C1.90292 28.6965 2.31068 28.4694 2.8034 28.4694C3.1432 28.4694 3.43204 28.5872 3.6699 28.8227C3.90777 29.0414 4.09466 29.3358 4.23058 29.7059C4.38349 30.0591 4.49393 30.4629 4.56189 30.9171C4.64685 31.3544 4.70631 31.7918 4.74029 32.2292C4.77427 32.6666 4.79126 33.0703 4.79126 33.4404C4.79126 33.8105 4.79126 34.1049 4.79126 34.3236C4.79126 35.6357 4.75728 36.9394 4.68932 38.2347C4.63835 39.5132 4.61286 40.8085 4.61286 42.1206V43.1047C5.37743 42.8692 6.20995 42.6505 7.11044 42.4487C8.01092 42.23 8.86893 42.1206 9.68447 42.1206C9.9733 42.1206 10.2621 42.1375 10.551 42.1711C10.8568 42.2048 11.1201 42.2805 11.341 42.3982C11.5789 42.4991 11.7658 42.659 11.9017 42.8776C12.0546 43.0795 12.1311 43.3571 12.1311 43.7103Z",fill:"#758650"}),p.exports.createElement("path",{d:"M25.6383 43.458C25.6383 43.7945 25.6043 44.1982 25.5364 44.6692C25.4854 45.1402 25.375 45.5944 25.2051 46.0318C25.0352 46.4524 24.8058 46.814 24.517 47.1168C24.2281 47.4028 23.8459 47.5458 23.3701 47.5458C22.7415 47.5458 22.2658 47.3187 21.943 46.8645C21.6371 46.4103 21.4163 45.872 21.2803 45.2496C21.1444 44.6103 21.0595 43.9627 21.0255 43.3066C21.0085 42.6505 20.9915 42.1291 20.9745 41.7421C19.7512 41.944 18.5449 42.1206 17.3556 42.272C17.3216 42.659 17.2451 43.1384 17.1262 43.7103C17.0243 44.2823 16.8544 44.8374 16.6165 45.3757C16.3956 45.8972 16.0983 46.3514 15.7245 46.7383C15.3677 47.1253 14.926 47.3187 14.3993 47.3187C13.9915 47.3187 13.6687 47.1757 13.4308 46.8897C13.2099 46.5869 13.04 46.2337 12.9211 45.8299C12.8022 45.4262 12.7257 45.0141 12.6917 44.5935C12.6748 44.1561 12.6663 43.7945 12.6663 43.5085C12.6663 42.5496 12.7427 41.6076 12.8956 40.6823C13.0485 39.7403 13.2269 38.8067 13.4308 37.8815C13.5328 37.3936 13.6687 36.8217 13.8386 36.1656C14.0085 35.5095 14.2124 34.8366 14.4502 34.1469C14.7051 33.4404 14.9939 32.7507 15.3167 32.0778C15.6565 31.3881 16.0388 30.7741 16.4636 30.2358C16.8883 29.6975 17.3726 29.2601 17.9163 28.9236C18.4599 28.5872 19.0631 28.419 19.7257 28.419C20.3713 28.419 20.932 28.562 21.4078 28.8479C21.8835 29.1339 22.2997 29.5124 22.6565 29.9834C23.0133 30.4545 23.3107 30.9928 23.5485 31.5984C23.7864 32.1871 23.9818 32.7927 24.1347 33.4152C24.3046 34.0208 24.4405 34.618 24.5425 35.2067C24.6614 35.7955 24.7633 36.317 24.8483 36.7712C25.0692 37.8646 25.256 38.9749 25.409 40.102C25.5619 41.2122 25.6383 42.3309 25.6383 43.458ZM20.7196 37.3263C20.7196 37.1245 20.7027 36.7964 20.6687 36.3422C20.6517 35.8712 20.6007 35.4086 20.5158 34.9544C20.4308 34.4834 20.2949 34.0712 20.108 33.718C19.9381 33.3479 19.7002 33.1628 19.3944 33.1628C19.2245 33.1628 19.0631 33.2806 18.9102 33.5161C18.7573 33.7348 18.6213 34.0208 18.5024 34.374C18.3835 34.7105 18.273 35.089 18.1711 35.5095C18.0862 35.9301 18.0097 36.3338 17.9417 36.7207C17.8738 37.1076 17.8228 37.4609 17.7888 37.7805C17.7548 38.0833 17.7294 38.302 17.7124 38.4366C18.7318 38.3525 19.7342 38.2263 20.7196 38.0581V37.3263Z",fill:"#758650"}),p.exports.createElement("path",{d:"M39.1201 33.6675C39.1201 34.5759 38.9162 35.4675 38.5085 36.3422C38.1177 37.217 37.591 38.0076 36.9284 38.7141C36.2657 39.4039 35.5097 39.9758 34.6602 40.43C33.8107 40.8674 32.9357 41.1113 32.0352 41.1618C32.0182 41.4646 32.0012 41.8515 31.9842 42.3225C31.9842 42.7767 31.9587 43.2561 31.9077 43.7608C31.8568 44.2655 31.7803 44.7701 31.6784 45.2748C31.5934 45.7795 31.4575 46.2337 31.2706 46.6374C31.1007 47.0411 30.8713 47.3692 30.5825 47.6215C30.3107 47.8738 29.9709 48 29.5631 48C29.0874 48 28.7051 47.8402 28.4162 47.5206C28.1444 47.2178 27.932 46.8477 27.7791 46.4103C27.6432 45.9729 27.5497 45.5187 27.4988 45.0477C27.4478 44.5599 27.4138 44.1477 27.3968 43.8113C27.3628 43.3234 27.3374 42.844 27.3204 42.373C27.3204 41.902 27.3204 41.4225 27.3204 40.9347C27.3204 40.716 27.3204 40.3123 27.3204 39.7235C27.3204 39.1179 27.3204 38.4366 27.3204 37.6796C27.3374 36.9058 27.3543 36.1067 27.3713 35.2824C27.3883 34.4413 27.4138 33.6675 27.4478 32.961C27.4818 32.2376 27.5158 31.6236 27.5497 31.1189C27.6007 30.6143 27.6602 30.3199 27.7281 30.2358C27.7451 30.2189 27.7961 30.1853 27.8811 30.1348C27.966 30.0675 28.0595 30.0087 28.1614 29.9582C28.2633 29.8909 28.3568 29.832 28.4417 29.7816C28.5267 29.7311 28.5861 29.6975 28.6201 29.6806C29.4017 29.2433 30.2597 28.8648 31.1942 28.5451C32.1286 28.2255 33.0546 28.0657 33.9721 28.0657C34.7536 28.0657 35.4587 28.2255 36.0873 28.5451C36.733 28.8479 37.2767 29.2601 37.7184 29.7816C38.1772 30.2862 38.5255 30.8834 38.7633 31.5731C39.0012 32.246 39.1201 32.9441 39.1201 33.6675ZM34.7111 34.2479C34.7111 33.9114 34.6262 33.617 34.4563 33.3647C34.3034 33.1124 34.04 32.9862 33.6662 32.9862C33.3434 32.9862 33.0206 33.0535 32.6978 33.1881C32.375 33.3058 32.0777 33.432 31.8058 33.5666C31.8568 34.1553 31.8993 34.7273 31.9332 35.2824C31.9842 35.8376 31.9927 36.4095 31.9587 36.9983C32.2306 36.8637 32.5279 36.7123 32.8507 36.5441C33.1735 36.359 33.4708 36.1572 33.7427 35.9385C34.0145 35.7198 34.2439 35.4759 34.4308 35.2067C34.6177 34.9207 34.7111 34.6011 34.7111 34.2479Z",fill:"#758650"}),p.exports.createElement("path",{d:"M52.0922 43.458C52.0922 43.7945 52.0582 44.1982 51.9903 44.6692C51.9393 45.1402 51.8288 45.5944 51.6589 46.0318C51.489 46.4524 51.2597 46.814 50.9708 47.1168C50.682 47.4028 50.2997 47.5458 49.824 47.5458C49.1954 47.5458 48.7196 47.3187 48.3968 46.8645C48.091 46.4103 47.8701 45.872 47.7342 45.2496C47.5983 44.6103 47.5133 43.9627 47.4793 43.3066C47.4623 42.6505 47.4454 42.1291 47.4284 41.7421C46.2051 41.944 44.9988 42.1206 43.8094 42.272C43.7755 42.659 43.699 43.1384 43.5801 43.7103C43.4781 44.2823 43.3082 44.8374 43.0704 45.3757C42.8495 45.8972 42.5522 46.3514 42.1784 46.7383C41.8216 47.1253 41.3798 47.3187 40.8531 47.3187C40.4454 47.3187 40.1225 47.1757 39.8847 46.8897C39.6638 46.5869 39.4939 46.2337 39.375 45.8299C39.256 45.4262 39.1796 45.0141 39.1456 44.5935C39.1286 44.1561 39.1201 43.7945 39.1201 43.5085C39.1201 42.5496 39.1966 41.6076 39.3495 40.6823C39.5024 39.7403 39.6808 38.8067 39.8847 37.8815C39.9866 37.3936 40.1225 36.8217 40.2924 36.1656C40.4623 35.5095 40.6662 34.8366 40.9041 34.1469C41.159 33.4404 41.4478 32.7507 41.7706 32.0778C42.1104 31.3881 42.4927 30.7741 42.9174 30.2358C43.3422 29.6975 43.8264 29.2601 44.3701 28.9236C44.9138 28.5872 45.517 28.419 46.1796 28.419C46.8252 28.419 47.3859 28.562 47.8616 28.8479C48.3374 29.1339 48.7536 29.5124 49.1104 29.9834C49.4672 30.4545 49.7645 30.9928 50.0024 31.5984C50.2403 32.1871 50.4357 32.7927 50.5886 33.4152C50.7585 34.0208 50.8944 34.618 50.9963 35.2067C51.1153 35.7955 51.2172 36.317 51.3021 36.7712C51.523 37.8646 51.7099 38.9749 51.8628 40.102C52.0157 41.2122 52.0922 42.3309 52.0922 43.458ZM47.1735 37.3263C47.1735 37.1245 47.1565 36.7964 47.1225 36.3422C47.1056 35.8712 47.0546 35.4086 46.9696 34.9544C46.8847 34.4834 46.7488 34.0712 46.5619 33.718C46.392 33.3479 46.1541 33.1628 45.8483 33.1628C45.6784 33.1628 45.517 33.2806 45.364 33.5161C45.2111 33.7348 45.0752 34.0208 44.9563 34.374C44.8374 34.7105 44.7269 35.089 44.625 35.5095C44.54 35.9301 44.4636 36.3338 44.3956 36.7207C44.3276 37.1076 44.2767 37.4609 44.2427 37.7805C44.2087 38.0833 44.1832 38.302 44.1662 38.4366C45.1856 38.3525 46.1881 38.2263 47.1735 38.0581V37.3263Z",fill:"#758650"}),p.exports.createElement("path",{d:"M57.2817 1.09879C53.6383 0.62618 52.6744 8.18767 56.141 8.63861C59.5488 9.0825 60.8661 1.56431 57.2817 1.09879ZM50.2933 0.0267887C50.2393 0.0186128 50.1852 0.0138761 50.1289 0.00910539C46.4695 -0.298862 45.9141 7.30568 49.3961 7.6C52.7655 7.88527 53.6992 0.545837 50.2933 0.0267887ZM43.9644 4.48051C43.8573 4.46077 43.7489 4.44845 43.64 4.44365C39.9737 4.28077 39.7774 11.9105 43.2659 12.0668C46.5882 12.216 47.2082 5.07309 43.9644 4.48051ZM62.0768 7.66507C58.4675 6.98011 56.9746 14.4554 60.4088 15.1085C63.7844 15.7508 65.6277 8.33947 62.0768 7.66507ZM51.8882 10.383C48.1643 9.83004 50.3674 14.1158 43.4251 15.2017C38.0443 16.0433 40.2244 21.722 44.5718 22.4834C46.9579 22.9014 48.1354 21.1807 50.0887 21.5232C52.3066 21.9118 52.1923 23.6165 55.4388 24.1852C59.5841 24.9111 62.8887 20.138 58.4498 17.5662C52.7981 14.2918 55.956 11.1173 52.0712 10.4143C52.009 10.4032 51.9473 10.3918 51.8882 10.383Z",fill:"#758650"})),pe=x.button`
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
`,hp=x.header`
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.background};
  height: ${({theme:e})=>e.headerHeight};
`,mp=x(ce)`
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
`,Cp=x.nav`
  @media (max-width: 1279px) {
    width: 100%;
  }
`,gp=x(ce)`
  @media (max-width: 1279px) {
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 40px;
  }
`,yp=x.li`
  transition: ${({theme:e})=>e.transitions.quick};
  &:hover {
    color: ${({theme:e})=>e.colors.green};
  }

  a.active {
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
`,xp=x(ce)`
  @media (max-width: 1279px) {
    width: 315px;
  }

  @media (max-width: 767px) {
    width: 240px;
    ${({$extendNavbar:e})=>e&&"flex-direction: row-reverse;"}
  }
`,vp=x(pe)`
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
`,wp=x.button`
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

    ${({$isActive:e})=>e&&I4`
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
`;function Ep({title:e,to:t,testId:n,setExtendNavbar:r}){return a(yp,{children:a(dt,{to:t,end:!0,"data-testid":n,onClick:()=>{r(u=>!u)},children:e})})}const Sp=[{id:Math.random().toString(),title:"\u041F\u0440\u043E \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A",to:"about",testId:"about-link"},{id:Math.random().toString(),title:"\u041D\u0430\u0448\u0456 \u0445\u0432\u043E\u0441\u0442\u0438",to:"dogs",testId:"dogs-link"},{id:Math.random().toString(),title:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",to:"contacts",testId:"contacts-link"}],kp=({setExtendNavbar:e})=>a(Cp,{children:a("ul",{children:a(gp,{$gap:"20px",children:Sp.map(t=>a(Ep,{title:t.title,to:t.to,testId:t.testId,setExtendNavbar:e},t.id))})})});function Fp({className:e,extendNavbar:t,setExtendNavbar:n}){return a(mp,{$align:"center",$justify:"space-between",$gap:"10px",className:e,$extendNavbar:t,children:a(kp,{setExtendNavbar:n})})}function Dp({className:e,children:t,extendNavbar:n}){return a(xp,{$justify:"space-between",$align:"center",className:e,$extendNavbar:n,children:t})}function bp({className:e,onClick:t,isActive:n}){return a(wp,{className:e,onClick:t,$isActive:n,children:a("span",{})})}const Lp=()=>{const[e,t]=p.exports.useState(!1);return a(hp,{children:a(ee,{children:E(ce,{$justify:"space-between",$align:"center",$gap:"20px",children:[a(dt,{to:".",end:!0,"data-testid":"home-link",children:a(fp,{})}),a(Fp,{extendNavbar:e,setExtendNavbar:t}),E(Dp,{extendNavbar:e,children:[a(pp,{smooth:!0,to:"/#donation",children:a(vp,{$extendNavbar:e,children:a("span",{children:"\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A"})})}),a(bp,{isActive:e,onClick:()=>{t(n=>!n)}})]})]})})})},Pp=[{id:0,src:"./testPhoto.png",name:"\u0421\u043A\u0430\u0439",sex:"\u0425\u043B\u043E\u043F\u0447\u0438\u043A",age:"2 \u0440\u043E\u043A\u0438",haschip:!1,hasbreed:!1,breed:"",size:"medium"},{id:1,src:"./testPhoto.png",name:"\u0421\u043A\u0430\u0439",sex:"\u0425\u043B\u043E\u043F\u0447\u0438\u043A",age:"2 \u0440\u043E\u043A\u0438",haschip:!1,hasbreed:!0,breed:"\u041B\u0430\u0431\u0440\u0430\u0434\u043E\u0440",size:"medium"},{id:2,src:"./testPhoto.png",name:"\u0411\u0435\u043B\u043B\u0430",sex:"\u0414\u0456\u0432\u0447\u0438\u043D\u043A\u0430",age:"3 \u0440\u043E\u043A\u0438",haschip:!0,hasbreed:!0,breed:"\u041C\u043E\u043F\u0441",size:"small"},{id:3,src:"./testPhoto.png",name:"\u041C\u0430\u043A\u0441",sex:"\u0425\u043B\u043E\u043F\u0447\u0438\u043A",age:"1 \u0440\u0456\u043A",haschip:!0,hasbreed:!1,breed:"",size:"small"},{id:4,src:"./testPhoto.png",name:"\u041B\u044E\u0441\u0456",sex:"\u0414\u0456\u0432\u0447\u0438\u043D\u043A\u0430",age:"3 \u0440\u0456\u043A",haschip:!0,hasbreed:!0,breed:"\u041A\u043E\u0440\u0433\u0456",size:"big"},{id:5,src:"./testPhoto.png",name:"\u0411\u043E\u0431\u0456\u043A",sex:"\u0414\u0456\u0432\u0447\u0438\u043D\u043A\u0430",age:"5 \u0440\u0456\u043A",haschip:!0,hasbreed:!0,breed:"\u0411\u0443\u043B\u044C\u0434\u043E\u0433",size:"big"}];var Ap={data:Pp};function W5(e,t){return function(){return e.apply(t,arguments)}}const{toString:Bp}=Object.prototype,{getPrototypeOf:go}=Object,Vu=(e=>t=>{const n=Bp.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),wt=e=>(e=e.toLowerCase(),t=>Vu(t)===e),Wu=e=>t=>typeof t===e,{isArray:R0}=Array,$n=Wu("undefined");function Rp(e){return e!==null&&!$n(e)&&e.constructor!==null&&!$n(e.constructor)&&Je(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Z5=wt("ArrayBuffer");function Op(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Z5(e.buffer),t}const Mp=Wu("string"),Je=Wu("function"),Q5=Wu("number"),Zu=e=>e!==null&&typeof e=="object",$p=e=>e===!0||e===!1,Mr=e=>{if(Vu(e)!=="object")return!1;const t=go(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Tp=wt("Date"),Np=wt("File"),Ip=wt("Blob"),zp=wt("FileList"),_p=e=>Zu(e)&&Je(e.pipe),Hp=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Je(e.append)&&((t=Vu(e))==="formdata"||t==="object"&&Je(e.toString)&&e.toString()==="[object FormData]"))},jp=wt("URLSearchParams"),Up=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Un(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e=="undefined")return;let r,u;if(typeof e!="object"&&(e=[e]),R0(e))for(r=0,u=e.length;r<u;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let s;for(r=0;r<o;r++)s=i[r],t.call(null,e[s],s,e)}}function q5(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,u;for(;r-- >0;)if(u=n[r],t===u.toLowerCase())return u;return null}const K5=(()=>typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:global)(),G5=e=>!$n(e)&&e!==K5;function Y3(){const{caseless:e}=G5(this)&&this||{},t={},n=(r,u)=>{const i=e&&q5(t,u)||u;Mr(t[i])&&Mr(r)?t[i]=Y3(t[i],r):Mr(r)?t[i]=Y3({},r):R0(r)?t[i]=r.slice():t[i]=r};for(let r=0,u=arguments.length;r<u;r++)arguments[r]&&Un(arguments[r],n);return t}const Vp=(e,t,n,{allOwnKeys:r}={})=>(Un(t,(u,i)=>{n&&Je(u)?e[i]=W5(u,n):e[i]=u},{allOwnKeys:r}),e),Wp=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Zp=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Qp=(e,t,n,r)=>{let u,i,o;const s={};if(t=t||{},e==null)return t;do{for(u=Object.getOwnPropertyNames(e),i=u.length;i-- >0;)o=u[i],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&go(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},qp=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Kp=e=>{if(!e)return null;if(R0(e))return e;let t=e.length;if(!Q5(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Gp=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&go(Uint8Array)),Yp=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let u;for(;(u=r.next())&&!u.done;){const i=u.value;t.call(e,i[0],i[1])}},Xp=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Jp=wt("HTMLFormElement"),ef=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,u){return r.toUpperCase()+u}),as=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),tf=wt("RegExp"),Y5=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Un(n,(u,i)=>{t(u,i,e)!==!1&&(r[i]=u)}),Object.defineProperties(e,r)},nf=e=>{Y5(e,(t,n)=>{if(Je(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(!!Je(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},rf=(e,t)=>{const n={},r=u=>{u.forEach(i=>{n[i]=!0})};return R0(e)?r(e):r(String(e).split(t)),n},uf=()=>{},of=(e,t)=>(e=+e,Number.isFinite(e)?e:t),R1="abcdefghijklmnopqrstuvwxyz",cs="0123456789",X5={DIGIT:cs,ALPHA:R1,ALPHA_DIGIT:R1+R1.toUpperCase()+cs},sf=(e=16,t=X5.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function lf(e){return!!(e&&Je(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const af=e=>{const t=new Array(10),n=(r,u)=>{if(Zu(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[u]=r;const i=R0(r)?[]:{};return Un(r,(o,s)=>{const l=n(o,u+1);!$n(l)&&(i[s]=l)}),t[u]=void 0,i}}return r};return n(e,0)},cf=wt("AsyncFunction"),df=e=>e&&(Zu(e)||Je(e))&&Je(e.then)&&Je(e.catch);var L={isArray:R0,isArrayBuffer:Z5,isBuffer:Rp,isFormData:Hp,isArrayBufferView:Op,isString:Mp,isNumber:Q5,isBoolean:$p,isObject:Zu,isPlainObject:Mr,isUndefined:$n,isDate:Tp,isFile:Np,isBlob:Ip,isRegExp:tf,isFunction:Je,isStream:_p,isURLSearchParams:jp,isTypedArray:Gp,isFileList:zp,forEach:Un,merge:Y3,extend:Vp,trim:Up,stripBOM:Wp,inherits:Zp,toFlatObject:Qp,kindOf:Vu,kindOfTest:wt,endsWith:qp,toArray:Kp,forEachEntry:Yp,matchAll:Xp,isHTMLForm:Jp,hasOwnProperty:as,hasOwnProp:as,reduceDescriptors:Y5,freezeMethods:nf,toObjectSet:rf,toCamelCase:ef,noop:uf,toFiniteNumber:of,findKey:q5,global:K5,isContextDefined:G5,ALPHABET:X5,generateString:sf,isSpecCompliantForm:lf,toJSONObject:af,isAsyncFn:cf,isThenable:df};function _(e,t,n,r,u){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),u&&(this.response=u)}L.inherits(_,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const J5=_.prototype,e8={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{e8[e]={value:e}});Object.defineProperties(_,e8);Object.defineProperty(J5,"isAxiosError",{value:!0});_.from=(e,t,n,r,u,i)=>{const o=Object.create(J5);return L.toFlatObject(e,o,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),_.call(o,e.message,t,n,r,u),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};var pf=null;function X3(e){return L.isPlainObject(e)||L.isArray(e)}function t8(e){return L.endsWith(e,"[]")?e.slice(0,-2):e}function ds(e,t,n){return e?e.concat(t).map(function(u,i){return u=t8(u),!n&&i?"["+u+"]":u}).join(n?".":""):t}function ff(e){return L.isArray(e)&&!e.some(X3)}const hf=L.toFlatObject(L,{},null,function(t){return/^is[A-Z]/.test(t)});function Qu(e,t,n){if(!L.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,k){return!L.isUndefined(k[y])});const r=n.metaTokens,u=n.visitor||d,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob!="undefined"&&Blob)&&L.isSpecCompliantForm(t);if(!L.isFunction(u))throw new TypeError("visitor must be a function");function c(v){if(v===null)return"";if(L.isDate(v))return v.toISOString();if(!l&&L.isBlob(v))throw new _("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(v)||L.isTypedArray(v)?l&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function d(v,y,k){let f=v;if(v&&!k&&typeof v=="object"){if(L.endsWith(y,"{}"))y=r?y:y.slice(0,-2),v=JSON.stringify(v);else if(L.isArray(v)&&ff(v)||(L.isFileList(v)||L.endsWith(y,"[]"))&&(f=L.toArray(v)))return y=t8(y),f.forEach(function(C,S){!(L.isUndefined(C)||C===null)&&t.append(o===!0?ds([y],S,i):o===null?y:y+"[]",c(C))}),!1}return X3(v)?!0:(t.append(ds(k,y,i),c(v)),!1)}const m=[],g=Object.assign(hf,{defaultVisitor:d,convertValue:c,isVisitable:X3});function w(v,y){if(!L.isUndefined(v)){if(m.indexOf(v)!==-1)throw Error("Circular reference detected in "+y.join("."));m.push(v),L.forEach(v,function(f,h){(!(L.isUndefined(f)||f===null)&&u.call(t,f,L.isString(h)?h.trim():h,y,g))===!0&&w(f,y?y.concat(h):[h])}),m.pop()}}if(!L.isObject(e))throw new TypeError("data must be an object");return w(e),t}function ps(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function yo(e,t){this._pairs=[],e&&Qu(e,this,t)}const n8=yo.prototype;n8.append=function(t,n){this._pairs.push([t,n])};n8.toString=function(t){const n=t?function(r){return t.call(this,r,ps)}:ps;return this._pairs.map(function(u){return n(u[0])+"="+n(u[1])},"").join("&")};function mf(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function r8(e,t,n){if(!t)return e;const r=n&&n.encode||mf,u=n&&n.serialize;let i;if(u?i=u(t,n):i=L.isURLSearchParams(t)?t.toString():new yo(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Cf{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){L.forEach(this.handlers,function(r){r!==null&&t(r)})}}var fs=Cf,u8={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},gf=typeof URLSearchParams!="undefined"?URLSearchParams:yo,yf=typeof FormData!="undefined"?FormData:null,xf=typeof Blob!="undefined"?Blob:null;const vf=(()=>{let e;return typeof navigator!="undefined"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"})(),wf=(()=>typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")();var gt={isBrowser:!0,classes:{URLSearchParams:gf,FormData:yf,Blob:xf},isStandardBrowserEnv:vf,isStandardBrowserWebWorkerEnv:wf,protocols:["http","https","file","blob","url","data"]};function Ef(e,t){return Qu(e,new gt.classes.URLSearchParams,Object.assign({visitor:function(n,r,u,i){return gt.isNode&&L.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Sf(e){return L.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function kf(e){const t={},n=Object.keys(e);let r;const u=n.length;let i;for(r=0;r<u;r++)i=n[r],t[i]=e[i];return t}function i8(e){function t(n,r,u,i){let o=n[i++];const s=Number.isFinite(+o),l=i>=n.length;return o=!o&&L.isArray(u)?u.length:o,l?(L.hasOwnProp(u,o)?u[o]=[u[o],r]:u[o]=r,!s):((!u[o]||!L.isObject(u[o]))&&(u[o]=[]),t(n,r,u[o],i)&&L.isArray(u[o])&&(u[o]=kf(u[o])),!s)}if(L.isFormData(e)&&L.isFunction(e.entries)){const n={};return L.forEachEntry(e,(r,u)=>{t(Sf(r),u,n,0)}),n}return null}const Ff={"Content-Type":void 0};function Df(e,t,n){if(L.isString(e))try{return(t||JSON.parse)(e),L.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const qu={transitional:u8,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",u=r.indexOf("application/json")>-1,i=L.isObject(t);if(i&&L.isHTMLForm(t)&&(t=new FormData(t)),L.isFormData(t))return u&&u?JSON.stringify(i8(t)):t;if(L.isArrayBuffer(t)||L.isBuffer(t)||L.isStream(t)||L.isFile(t)||L.isBlob(t))return t;if(L.isArrayBufferView(t))return t.buffer;if(L.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ef(t,this.formSerializer).toString();if((s=L.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Qu(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||u?(n.setContentType("application/json",!1),Df(t)):t}],transformResponse:[function(t){const n=this.transitional||qu.transitional,r=n&&n.forcedJSONParsing,u=this.responseType==="json";if(t&&L.isString(t)&&(r&&!this.responseType||u)){const o=!(n&&n.silentJSONParsing)&&u;try{return JSON.parse(t)}catch(s){if(o)throw s.name==="SyntaxError"?_.from(s,_.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:gt.classes.FormData,Blob:gt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};L.forEach(["delete","get","head"],function(t){qu.headers[t]={}});L.forEach(["post","put","patch"],function(t){qu.headers[t]=L.merge(Ff)});var xo=qu;const bf=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Lf=e=>{const t={};let n,r,u;return e&&e.split(`
`).forEach(function(o){u=o.indexOf(":"),n=o.substring(0,u).trim().toLowerCase(),r=o.substring(u+1).trim(),!(!n||t[n]&&bf[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t};const hs=Symbol("internals");function W0(e){return e&&String(e).trim().toLowerCase()}function $r(e){return e===!1||e==null?e:L.isArray(e)?e.map($r):String(e)}function Pf(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Af=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function O1(e,t,n,r,u){if(L.isFunction(r))return r.call(this,t,n);if(u&&(t=n),!!L.isString(t)){if(L.isString(r))return t.indexOf(r)!==-1;if(L.isRegExp(r))return r.test(t)}}function Bf(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Rf(e,t){const n=L.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(u,i,o){return this[r].call(this,t,u,i,o)},configurable:!0})})}class Ku{constructor(t){t&&this.set(t)}set(t,n,r){const u=this;function i(s,l,c){const d=W0(l);if(!d)throw new Error("header name must be a non-empty string");const m=L.findKey(u,d);(!m||u[m]===void 0||c===!0||c===void 0&&u[m]!==!1)&&(u[m||l]=$r(s))}const o=(s,l)=>L.forEach(s,(c,d)=>i(c,d,l));return L.isPlainObject(t)||t instanceof this.constructor?o(t,n):L.isString(t)&&(t=t.trim())&&!Af(t)?o(Lf(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=W0(t),t){const r=L.findKey(this,t);if(r){const u=this[r];if(!n)return u;if(n===!0)return Pf(u);if(L.isFunction(n))return n.call(this,u,r);if(L.isRegExp(n))return n.exec(u);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=W0(t),t){const r=L.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||O1(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let u=!1;function i(o){if(o=W0(o),o){const s=L.findKey(r,o);s&&(!n||O1(r,r[s],s,n))&&(delete r[s],u=!0)}}return L.isArray(t)?t.forEach(i):i(t),u}clear(t){const n=Object.keys(this);let r=n.length,u=!1;for(;r--;){const i=n[r];(!t||O1(this,this[i],i,t,!0))&&(delete this[i],u=!0)}return u}normalize(t){const n=this,r={};return L.forEach(this,(u,i)=>{const o=L.findKey(r,i);if(o){n[o]=$r(u),delete n[i];return}const s=t?Bf(i):String(i).trim();s!==i&&delete n[i],n[s]=$r(u),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return L.forEach(this,(r,u)=>{r!=null&&r!==!1&&(n[u]=t&&L.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(u=>r.set(u)),r}static accessor(t){const r=(this[hs]=this[hs]={accessors:{}}).accessors,u=this.prototype;function i(o){const s=W0(o);r[s]||(Rf(u,o),r[s]=!0)}return L.isArray(t)?t.forEach(i):i(t),this}}Ku.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);L.freezeMethods(Ku.prototype);L.freezeMethods(Ku);var Bt=Ku;function M1(e,t){const n=this||xo,r=t||n,u=Bt.from(r.headers);let i=r.data;return L.forEach(e,function(s){i=s.call(n,i,u.normalize(),t?t.status:void 0)}),u.normalize(),i}function o8(e){return!!(e&&e.__CANCEL__)}function Vn(e,t,n){_.call(this,e==null?"canceled":e,_.ERR_CANCELED,t,n),this.name="CanceledError"}L.inherits(Vn,_,{__CANCEL__:!0});function Of(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new _("Request failed with status code "+n.status,[_.ERR_BAD_REQUEST,_.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}var Mf=gt.isStandardBrowserEnv?function(){return{write:function(n,r,u,i,o,s){const l=[];l.push(n+"="+encodeURIComponent(r)),L.isNumber(u)&&l.push("expires="+new Date(u).toGMTString()),L.isString(i)&&l.push("path="+i),L.isString(o)&&l.push("domain="+o),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function $f(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Tf(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function s8(e,t){return e&&!$f(t)?Tf(e,t):t}var Nf=gt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function u(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=u(window.location.href),function(o){const s=L.isString(o)?u(o):o;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function If(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function zf(e,t){e=e||10;const n=new Array(e),r=new Array(e);let u=0,i=0,o;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),d=r[i];o||(o=c),n[u]=l,r[u]=c;let m=i,g=0;for(;m!==u;)g+=n[m++],m=m%e;if(u=(u+1)%e,u===i&&(i=(i+1)%e),c-o<t)return;const w=d&&c-d;return w?Math.round(g*1e3/w):void 0}}function ms(e,t){let n=0;const r=zf(50,250);return u=>{const i=u.loaded,o=u.lengthComputable?u.total:void 0,s=i-n,l=r(s),c=i<=o;n=i;const d={loaded:i,total:o,progress:o?i/o:void 0,bytes:s,rate:l||void 0,estimated:l&&o&&c?(o-i)/l:void 0,event:u};d[t?"download":"upload"]=!0,e(d)}}const _f=typeof XMLHttpRequest!="undefined";var Hf=_f&&function(e){return new Promise(function(n,r){let u=e.data;const i=Bt.from(e.headers).normalize(),o=e.responseType;let s;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}L.isFormData(u)&&(gt.isStandardBrowserEnv||gt.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(w+":"+v))}const d=s8(e.baseURL,e.url);c.open(e.method.toUpperCase(),r8(d,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function m(){if(!c)return;const w=Bt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),y={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:w,config:e,request:c};Of(function(f){n(f),l()},function(f){r(f),l()},y),c=null}if("onloadend"in c?c.onloadend=m:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(m)},c.onabort=function(){!c||(r(new _("Request aborted",_.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new _("Network Error",_.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let v=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const y=e.transitional||u8;e.timeoutErrorMessage&&(v=e.timeoutErrorMessage),r(new _(v,y.clarifyTimeoutError?_.ETIMEDOUT:_.ECONNABORTED,e,c)),c=null},gt.isStandardBrowserEnv){const w=(e.withCredentials||Nf(d))&&e.xsrfCookieName&&Mf.read(e.xsrfCookieName);w&&i.set(e.xsrfHeaderName,w)}u===void 0&&i.setContentType(null),"setRequestHeader"in c&&L.forEach(i.toJSON(),function(v,y){c.setRequestHeader(y,v)}),L.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",ms(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ms(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=w=>{!c||(r(!w||w.type?new Vn(null,e,c):w),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const g=If(d);if(g&&gt.protocols.indexOf(g)===-1){r(new _("Unsupported protocol "+g+":",_.ERR_BAD_REQUEST,e));return}c.send(u||null)})};const Tr={http:pf,xhr:Hf};L.forEach(Tr,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});var jf={getAdapter:e=>{e=L.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let u=0;u<t&&(n=e[u],!(r=L.isString(n)?Tr[n.toLowerCase()]:n));u++);if(!r)throw r===!1?new _(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(L.hasOwnProp(Tr,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!L.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Tr};function $1(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Vn(null,e)}function Cs(e){return $1(e),e.headers=Bt.from(e.headers),e.data=M1.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),jf.getAdapter(e.adapter||xo.adapter)(e).then(function(r){return $1(e),r.data=M1.call(e,e.transformResponse,r),r.headers=Bt.from(r.headers),r},function(r){return o8(r)||($1(e),r&&r.response&&(r.response.data=M1.call(e,e.transformResponse,r.response),r.response.headers=Bt.from(r.response.headers))),Promise.reject(r)})}const gs=e=>e instanceof Bt?e.toJSON():e;function F0(e,t){t=t||{};const n={};function r(c,d,m){return L.isPlainObject(c)&&L.isPlainObject(d)?L.merge.call({caseless:m},c,d):L.isPlainObject(d)?L.merge({},d):L.isArray(d)?d.slice():d}function u(c,d,m){if(L.isUndefined(d)){if(!L.isUndefined(c))return r(void 0,c,m)}else return r(c,d,m)}function i(c,d){if(!L.isUndefined(d))return r(void 0,d)}function o(c,d){if(L.isUndefined(d)){if(!L.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function s(c,d,m){if(m in t)return r(c,d);if(m in e)return r(void 0,c)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(c,d)=>u(gs(c),gs(d),!0)};return L.forEach(Object.keys(Object.assign({},e,t)),function(d){const m=l[d]||u,g=m(e[d],t[d],d);L.isUndefined(g)&&m!==s||(n[d]=g)}),n}const l8="1.4.0",vo={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{vo[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ys={};vo.transitional=function(t,n,r){function u(i,o){return"[Axios v"+l8+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,s)=>{if(t===!1)throw new _(u(o," has been removed"+(n?" in "+n:"")),_.ERR_DEPRECATED);return n&&!ys[o]&&(ys[o]=!0,console.warn(u(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,s):!0}};function Uf(e,t,n){if(typeof e!="object")throw new _("options must be an object",_.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let u=r.length;for(;u-- >0;){const i=r[u],o=t[i];if(o){const s=e[i],l=s===void 0||o(s,i,e);if(l!==!0)throw new _("option "+i+" must be "+l,_.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new _("Unknown option "+i,_.ERR_BAD_OPTION)}}var J3={assertOptions:Uf,validators:vo};const Ut=J3.validators;class gu{constructor(t){this.defaults=t,this.interceptors={request:new fs,response:new fs}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=F0(this.defaults,n);const{transitional:r,paramsSerializer:u,headers:i}=n;r!==void 0&&J3.assertOptions(r,{silentJSONParsing:Ut.transitional(Ut.boolean),forcedJSONParsing:Ut.transitional(Ut.boolean),clarifyTimeoutError:Ut.transitional(Ut.boolean)},!1),u!=null&&(L.isFunction(u)?n.paramsSerializer={serialize:u}:J3.assertOptions(u,{encode:Ut.function,serialize:Ut.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&L.merge(i.common,i[n.method]),o&&L.forEach(["delete","get","head","post","put","patch","common"],v=>{delete i[v]}),n.headers=Bt.concat(o,i);const s=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,s.unshift(y.fulfilled,y.rejected))});const c=[];this.interceptors.response.forEach(function(y){c.push(y.fulfilled,y.rejected)});let d,m=0,g;if(!l){const v=[Cs.bind(this),void 0];for(v.unshift.apply(v,s),v.push.apply(v,c),g=v.length,d=Promise.resolve(n);m<g;)d=d.then(v[m++],v[m++]);return d}g=s.length;let w=n;for(m=0;m<g;){const v=s[m++],y=s[m++];try{w=v(w)}catch(k){y.call(this,k);break}}try{d=Cs.call(this,w)}catch(v){return Promise.reject(v)}for(m=0,g=c.length;m<g;)d=d.then(c[m++],c[m++]);return d}getUri(t){t=F0(this.defaults,t);const n=s8(t.baseURL,t.url);return r8(n,t.params,t.paramsSerializer)}}L.forEach(["delete","get","head","options"],function(t){gu.prototype[t]=function(n,r){return this.request(F0(r||{},{method:t,url:n,data:(r||{}).data}))}});L.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,s){return this.request(F0(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}gu.prototype[t]=n(),gu.prototype[t+"Form"]=n(!0)});var Nr=gu;class wo{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(u=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](u);r._listeners=null}),this.promise.then=u=>{let i;const o=new Promise(s=>{r.subscribe(s),i=s}).then(u);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,s){r.reason||(r.reason=new Vn(i,o,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new wo(function(u){t=u}),cancel:t}}}var Vf=wo;function Wf(e){return function(n){return e.apply(null,n)}}function Zf(e){return L.isObject(e)&&e.isAxiosError===!0}const ei={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ei).forEach(([e,t])=>{ei[t]=e});var Qf=ei;function a8(e){const t=new Nr(e),n=W5(Nr.prototype.request,t);return L.extend(n,Nr.prototype,t,{allOwnKeys:!0}),L.extend(n,t,null,{allOwnKeys:!0}),n.create=function(u){return a8(F0(e,u))},n}const fe=a8(xo);fe.Axios=Nr;fe.CanceledError=Vn;fe.CancelToken=Vf;fe.isCancel=o8;fe.VERSION=l8;fe.toFormData=Qu;fe.AxiosError=_;fe.Cancel=fe.CanceledError;fe.all=function(t){return Promise.all(t)};fe.spread=Wf;fe.isAxiosError=Zf;fe.mergeConfig=F0;fe.AxiosHeaders=Bt;fe.formToJSON=e=>i8(L.isHTMLForm(e)?new FormData(e):e);fe.HttpStatusCode=Qf;fe.default=fe;var h4=fe;const qf="https://big-lapa-api-production.up.railway.app/api/images/",c8=e=>h4.get(qf+e,{responseType:"arraybuffer"}).then(t=>{console.log("fetched partner img",{id:e});const n=new Uint8Array(t.data),u=`data:image/png;base64, ${btoa(n.reduce((i,o)=>i+String.fromCharCode(o),""))}`;return{id:e,src:u,encodedBase64:u}});function O0({category:e,state:t,setState:n}){const[r,u]=p.exports.useState([]),[i,o]=p.exports.useState({pending:!1,resolve:!1,reject:!1,massage:""});if(p.exports.useEffect(()=>{if(e==="contacts"&&(console.log("contacts api called"),(async l=>{const d=await(await fetch("https://big-lapa-api-production.up.railway.app/api/main/get")).json();l(d)})(n)),e==="dogs"){console.log("dogs api called");const s=async c=>{c(Ap)},l=window.setTimeout(()=>{s(n)},1e3);return()=>window.clearTimeout(l)}e==="partners"&&(console.log("partners api called"),(async()=>{const c=await(await fetch("https://big-lapa-api-production.up.railway.app/api/images/category/Logo")).json();u(c)})())},[]),p.exports.useEffect(()=>{e==="partners"&&r.length&&!i.pending&&(console.log("useEffect: [partnersID] called",r.length),Promise.all(r.map(s=>c8(s))).then(s=>{console.log({resolved:s}),n(s),o({...i,pending:!1,resolve:!0,massage:"\u041B\u043E\u0433\u043E \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0456\u0432 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u0456"})}).catch(s=>{console.log(s),o({...i,pending:!1,reject:!0,massage:s})}),o({...i,pending:!0,resolve:!0}))},[r]),e==="contacts"||e==="dogs")return t;if(e==="partners")return i}const Kf=e=>p.exports.createElement("svg",{width:26,height:44,viewBox:"0 0 26 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M24 2H18C15.3478 2 12.8043 3.05357 10.9289 4.92893C9.05357 6.8043 8 9.34784 8 12V18H2V26H8V42H16V26H22L24 18H16V12C16 11.4696 16.2107 10.9609 16.5858 10.5858C16.9609 10.2107 17.4696 10 18 10H24V2Z",stroke:"#F9F9F9",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})),Gf=e=>p.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M11.6 0H28.4C34.8 0 40 5.2 40 11.6V28.4C40 31.4765 38.7779 34.427 36.6024 36.6024C34.427 38.7779 31.4765 40 28.4 40H11.6C5.2 40 0 34.8 0 28.4V11.6C0 8.52349 1.22214 5.57298 3.39756 3.39756C5.57298 1.22214 8.52349 0 11.6 0ZM11.2 4C9.29044 4 7.45909 4.75857 6.10883 6.10883C4.75857 7.45909 4 9.29044 4 11.2V28.8C4 32.78 7.22 36 11.2 36H28.8C30.7096 36 32.5409 35.2414 33.8912 33.8912C35.2414 32.5409 36 30.7096 36 28.8V11.2C36 7.22 32.78 4 28.8 4H11.2ZM30.5 7C31.163 7 31.7989 7.26339 32.2678 7.73223C32.7366 8.20107 33 8.83696 33 9.5C33 10.163 32.7366 10.7989 32.2678 11.2678C31.7989 11.7366 31.163 12 30.5 12C29.837 12 29.2011 11.7366 28.7322 11.2678C28.2634 10.7989 28 10.163 28 9.5C28 8.83696 28.2634 8.20107 28.7322 7.73223C29.2011 7.26339 29.837 7 30.5 7ZM20 10C22.6522 10 25.1957 11.0536 27.0711 12.9289C28.9464 14.8043 30 17.3478 30 20C30 22.6522 28.9464 25.1957 27.0711 27.0711C25.1957 28.9464 22.6522 30 20 30C17.3478 30 14.8043 28.9464 12.9289 27.0711C11.0536 25.1957 10 22.6522 10 20C10 17.3478 11.0536 14.8043 12.9289 12.9289C14.8043 11.0536 17.3478 10 20 10ZM20 14C18.4087 14 16.8826 14.6321 15.7574 15.7574C14.6321 16.8826 14 18.4087 14 20C14 21.5913 14.6321 23.1174 15.7574 24.2426C16.8826 25.3679 18.4087 26 20 26C21.5913 26 23.1174 25.3679 24.2426 24.2426C25.3679 23.1174 26 21.5913 26 20C26 18.4087 25.3679 16.8826 24.2426 15.7574C23.1174 14.6321 21.5913 14 20 14Z",fill:"#F9F9F9"})),Yf=x.footer`
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
`,Xf=x.div`
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
`,Jf=x.ul`
  /* @media (max-width: 767px) {
    margin-top: 18%;
    margin-bottom: 18%;
  } */
`,V4=x.li`
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
`,T1=x.a`
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
`,eh=x.ul`
  /* @media (max-width: 767px) {
    margin-bottom: 18%;
  } */
`,Z0=x.li`
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
`,N1=x.p`
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
`,th=x.ul`
  display: flex;
  gap: 24px;
`,xs=x.a`
  &:hover svg {
    transition: ${({theme:e})=>e.transitions.long};
    stroke: ${({theme:e})=>e.colors.yellow};
  }
`,nh=x(Kf)`
  &:hover path {
    stroke: ${({theme:e})=>e.colors.yellow};
  }
`,rh=x(Gf)`
  &:hover path {
    fill: ${({theme:e})=>e.colors.yellow};
  }
`,uh=x.p`
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
`,ih=e=>p.exports.createElement("svg",{width:140,height:105,viewBox:"0 0 140 105",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M24.5855 16.0074C24.5855 18.5465 23.9536 20.8649 22.69 22.9624C21.4263 25.0231 19.7353 26.7526 17.6168 28.151C18.7318 28.3718 19.6981 28.7581 20.5158 29.3101C21.3334 29.8253 22.0024 30.4693 22.5227 31.242C23.0802 32.0148 23.4891 32.898 23.7492 33.8915C24.0466 34.8483 24.1952 35.8603 24.1952 36.9274C24.1952 39.0249 23.6935 40.8649 22.69 42.4472C21.7237 43.9927 20.46 45.2807 18.899 46.311C17.338 47.3046 15.5912 48.059 13.6586 48.5742C11.7631 49.0525 9.86764 49.2917 7.97216 49.2917C6.9315 49.2917 5.89085 49.2181 4.85019 49.0709C3.80954 48.9237 2.82463 48.6661 1.89548 48.2982C1.56098 48.1878 1.28223 47.7462 1.05924 46.9734C0.83624 46.1638 0.650409 45.1887 0.501744 44.0479C0.390246 42.9072 0.29733 41.6744 0.222997 40.3497C0.148665 39.0249 0.0929156 37.7554 0.0557493 36.541C0.0185831 35.3267 0 34.2595 0 33.3396C0 32.4196 0 31.7756 0 31.4076C0 30.1197 0 28.8317 0 27.5438C0 26.219 0.0371662 24.9127 0.111499 23.6247C0.111499 23.2935 0.111499 22.7784 0.111499 22.0792C0.148665 21.38 0.167248 20.6073 0.167248 19.7609C0.204414 18.8777 0.24158 17.9578 0.278747 17.001C0.353079 16.0442 0.427412 15.1611 0.501744 14.3515C0.613243 13.5051 0.743324 12.7876 0.891989 12.1988C1.07782 11.61 1.28224 11.242 1.50523 11.0948C2.36006 10.5429 3.3078 10.0277 4.34845 9.54929C5.3891 9.03411 6.46693 8.59254 7.58191 8.22455C8.6969 7.85656 9.81189 7.56217 10.9269 7.34138C12.0419 7.12059 13.1011 7.0102 14.1046 7.0102C15.4797 7.0102 16.7991 7.21258 18.0628 7.61736C19.3636 7.98535 20.4786 8.55574 21.4078 9.32851C22.3741 10.1013 23.136 11.058 23.6935 12.1988C24.2881 13.3028 24.5855 14.5723 24.5855 16.0074ZM15.3311 18.9329C15.3311 18.3073 15.1267 17.8474 14.7178 17.553C14.3462 17.2586 13.8444 17.1114 13.2126 17.1114C12.6923 17.1114 12.1348 17.2218 11.5401 17.4426C10.9826 17.6634 10.4995 17.9578 10.0906 18.3257C9.97913 18.4361 9.86764 18.7489 9.75614 19.2641C9.68181 19.7793 9.60747 20.3681 9.53314 21.0304C9.49598 21.656 9.45881 22.2632 9.42164 22.852C9.42164 23.4039 9.42164 23.7719 9.42164 23.9559C9.42164 24.0295 9.42164 24.1583 9.42164 24.3423C9.42164 24.4895 9.42164 24.6551 9.42164 24.8391C9.45881 25.0231 9.49598 25.1887 9.53314 25.3359C9.57031 25.4831 9.62605 25.5567 9.70039 25.5567C10.3322 25.5567 10.9826 25.3359 11.6516 24.8943C12.3206 24.4159 12.9153 23.8455 13.4356 23.1832C13.9931 22.484 14.4391 21.748 14.7736 20.9752C15.1452 20.2025 15.3311 19.5217 15.3311 18.9329ZM15.1081 34.8851C15.1081 34.2595 14.8851 33.8179 14.4391 33.5603C13.9931 33.3027 13.4913 33.174 12.9339 33.174C12.4135 33.174 11.856 33.3027 11.2614 33.5603C10.7039 33.7811 10.2393 34.0571 9.86763 34.3883C9.75614 34.4619 9.66322 34.6459 9.58889 34.9403C9.55172 35.2347 9.51456 35.5659 9.47739 35.9339C9.47739 36.265 9.45881 36.5962 9.42164 36.9274C9.42164 37.2218 9.42164 37.4242 9.42164 37.5346C9.42164 37.6082 9.42164 37.7554 9.42164 37.9762C9.42164 38.197 9.42164 38.4362 9.42164 38.6937C9.45881 38.9145 9.49598 39.1353 9.53314 39.3561C9.60747 39.5401 9.68181 39.6321 9.75614 39.6321C10.2765 39.6321 10.8525 39.4849 11.4844 39.1905C12.1162 38.8961 12.6923 38.5281 13.2126 38.0866C13.7701 37.645 14.2161 37.1482 14.5506 36.5962C14.9222 36.0074 15.1081 35.4371 15.1081 34.8851Z",fill:"#F9F9F9"}),p.exports.createElement("path",{d:"M46.3835 11.15C46.3835 11.8492 46.2162 12.4748 45.8817 13.0268C45.5844 13.5787 45.1756 14.0571 44.6552 14.4619C44.1349 14.8299 43.5588 15.1427 42.927 15.4003C42.2952 15.6578 41.6819 15.8418 41.0873 15.9522C41.0129 20.1105 40.8457 24.1215 40.5855 27.9854C40.3625 31.8492 39.9909 35.8418 39.4705 39.9633H39.805C40.3997 39.9633 40.9758 40.0369 41.5333 40.1841C42.1279 40.2945 42.6483 40.5153 43.0943 40.8465C43.5774 41.1408 43.9491 41.5272 44.2092 42.0056C44.5066 42.4472 44.6552 42.9992 44.6552 43.6615C44.6552 44.5079 44.3765 45.2439 43.819 45.8695C43.2987 46.495 42.5925 47.0286 41.7005 47.4702C40.8457 47.9118 39.8794 48.2798 38.8015 48.5742C37.7237 48.8685 36.6459 49.0893 35.5681 49.2365C34.4903 49.4205 33.4682 49.5493 32.5019 49.6229C31.5355 49.6965 30.7551 49.7333 30.1604 49.7333C29.7144 49.7333 29.1569 49.7149 28.4879 49.6781C27.8561 49.6413 27.2428 49.5309 26.6482 49.3469C26.0907 49.1629 25.6075 48.8869 25.1987 48.519C24.7899 48.151 24.5855 47.6542 24.5855 47.0286C24.5855 46.2559 24.7527 45.5751 25.0872 44.9863C25.3845 44.3607 25.7934 43.8087 26.3137 43.3304C26.834 42.852 27.4101 42.4656 28.0419 42.1712C28.7109 41.8768 29.3799 41.656 30.0489 41.5088C30.3091 39.4849 30.5506 37.4794 30.7736 35.4923C30.9966 33.4683 31.1453 31.426 31.2196 29.3653C31.294 27.2678 31.3683 25.2071 31.4426 23.1832C31.517 21.1224 31.5913 19.0617 31.6656 17.001C31.4055 17.0378 31.1639 17.0746 30.9409 17.1114C30.7179 17.1114 30.5135 17.1114 30.3276 17.1114C29.8073 17.1114 29.2498 17.0562 28.6552 16.9458C28.0605 16.8354 27.503 16.6514 26.9827 16.3938C26.4624 16.0994 26.0164 15.7498 25.6447 15.3451C25.3102 14.9403 25.143 14.4251 25.143 13.7995C25.143 12.5484 25.6633 11.518 26.7039 10.7084C27.7818 9.89888 29.0454 9.27331 30.4949 8.83172C31.9815 8.39014 33.4868 8.09576 35.0106 7.94856C36.5344 7.76457 37.7609 7.67256 38.69 7.67256C39.2104 7.67256 39.898 7.70937 40.7528 7.78297C41.6076 7.85657 42.4438 8.02215 43.2615 8.27974C44.1163 8.53733 44.8411 8.88692 45.4357 9.32851C46.0676 9.77009 46.3835 10.3773 46.3835 11.15Z",fill:"#F9F9F9"}),p.exports.createElement("path",{d:"M72.1397 35.3819C71.8052 37.0378 71.2663 38.7673 70.5229 40.5705C69.8168 42.3368 68.8876 43.9559 67.7355 45.4279C66.6205 46.8998 65.2825 48.0958 63.7215 49.0157C62.1605 49.9725 60.3766 50.4509 58.3696 50.4509C56.8829 50.4509 55.5449 50.1565 54.3556 49.5677C53.1663 48.9789 52.0885 48.1878 51.1222 47.1942C50.1558 46.2006 49.3196 45.0599 48.6134 43.7719C47.9073 42.484 47.3126 41.1592 46.8295 39.7977C46.3835 38.3994 46.049 37.0194 45.826 35.6579C45.603 34.2963 45.4915 33.0268 45.4915 31.8492C45.4915 30.1933 45.6401 28.427 45.9375 26.5502C46.272 24.6367 46.7551 22.76 47.387 20.9201C48.0188 19.0433 48.8178 17.2586 49.7842 15.5659C50.7505 13.8363 51.8841 12.3276 53.1849 11.0396C54.5229 9.71489 56.0095 8.66613 57.6448 7.89336C59.3173 7.08379 61.1756 6.679 63.2198 6.679C64.5206 6.679 65.7285 6.93659 66.8435 7.45177C67.9585 7.93015 68.9248 8.59253 69.7424 9.4389C70.5601 10.2485 71.1919 11.2236 71.6379 12.3644C72.1211 13.5051 72.3627 14.7011 72.3627 15.9522V16.449C72.3627 17.1114 72.3255 17.9394 72.2512 18.9329C72.214 19.8897 72.0467 20.8097 71.7494 21.6928C71.4521 22.576 71.0061 23.3487 70.4114 24.0111C69.8168 24.6367 68.9805 24.9495 67.9027 24.9495C66.6019 24.9495 65.617 24.6551 64.948 24.0663C64.279 23.4775 63.9445 22.5024 63.9445 21.1408C63.9445 20.6257 63.9631 20.1105 64.0003 19.5953C64.0374 19.0801 64.056 18.5649 64.056 18.0498C64.056 17.277 63.9259 16.6882 63.6658 16.2834C63.4056 15.8418 62.8667 15.6211 62.049 15.6211C61.1199 15.6211 60.2836 15.9154 59.5403 16.5042C58.797 17.093 58.1466 17.8658 57.5891 18.8225C57.0316 19.7793 56.5484 20.8648 56.1396 22.0792C55.7308 23.2936 55.3963 24.5263 55.1361 25.7775C54.8759 26.9918 54.6901 28.1694 54.5786 29.3101C54.4671 30.4509 54.4114 31.426 54.4114 32.2356C54.4114 32.898 54.4485 33.6707 54.5229 34.5539C54.5972 35.4003 54.7459 36.2282 54.9689 37.0378C55.229 37.8106 55.6007 38.4729 56.0839 39.0249C56.567 39.5769 57.1988 39.8529 57.9793 39.8529C59.3173 39.8529 60.3951 39.4481 61.2128 38.6385C62.0305 37.7922 62.5879 36.725 62.8853 35.4371C62.3649 35.3635 61.8446 35.2531 61.3243 35.1059C60.8411 34.9219 60.3766 34.6827 59.9306 34.3883C59.5217 34.0571 59.1872 33.6707 58.9271 33.2292C58.6669 32.7508 58.5368 32.1988 58.5368 31.5732C58.5368 30.4325 58.9271 29.5493 59.7076 28.9237C60.4881 28.2614 61.3986 27.7646 62.4393 27.4334C63.5171 27.1022 64.6135 26.8998 65.7285 26.8262C66.8435 26.7158 67.7355 26.6606 68.4045 26.6606C68.8876 26.6606 69.5938 26.6974 70.5229 26.771C71.4521 26.8446 72.3627 27.0102 73.2547 27.2678C74.1838 27.4886 74.9829 27.8198 75.6519 28.2614C76.3209 28.7029 76.6554 29.2733 76.6554 29.9725C76.6554 31.3708 76.2651 32.5852 75.4846 33.6155C74.7413 34.6091 73.6263 35.1979 72.1397 35.3819Z",fill:"#F9F9F9"}),p.exports.createElement("path",{d:"M26.5367 95.6164C26.5367 96.5363 26.1465 97.4011 25.366 98.2107C24.6226 99.0202 23.6377 99.7562 22.4113 100.419C21.2219 101.081 19.8839 101.67 18.3973 102.185C16.9106 102.663 15.4426 103.068 13.9931 103.399C12.5436 103.767 11.1685 104.043 9.86763 104.227C8.60398 104.411 7.6005 104.503 6.85717 104.503C6.15101 104.503 5.38911 104.43 4.57145 104.282C3.79096 104.172 3.14056 103.896 2.62023 103.454C2.3229 103.234 2.06273 102.737 1.83974 101.964C1.61674 101.191 1.39374 100.271 1.17074 99.2042C0.984909 98.1371 0.817662 96.9963 0.668997 95.782C0.520332 94.5308 0.390246 93.3165 0.278747 92.1389C0.204415 90.9614 0.130092 89.8758 0.0557596 88.8822C0.0185934 87.8887 0 87.1159 0 86.5639C0 85.644 0.0185934 84.54 0.0557596 83.2521C0.130092 81.9273 0.223 80.529 0.334499 79.057C0.445997 77.5483 0.59466 76.0211 0.780491 74.4756C0.966322 72.9301 1.17074 71.4765 1.39374 70.115C1.6539 68.7166 1.95123 67.4655 2.28572 66.3615C2.65738 65.2576 3.04764 64.3928 3.45647 63.7672C4.16263 62.7737 5.05461 62.2769 6.13243 62.2769C6.87576 62.2769 7.50759 62.5345 8.02791 63.0497C8.54824 63.528 8.95707 64.172 9.2544 64.9816C9.58889 65.7544 9.83048 66.6375 9.97915 67.6311C10.165 68.5878 10.2951 69.5446 10.3694 70.5014C10.4437 71.4581 10.4809 72.3413 10.4809 73.1509C10.4809 73.9604 10.4809 74.6044 10.4809 75.0828C10.4809 77.9531 10.4065 80.805 10.2579 83.6385C10.1464 86.4352 10.0906 89.2686 10.0906 92.1389V94.2916C11.7631 93.7765 13.5843 93.2981 15.5541 92.8565C17.5239 92.3781 19.4008 92.1389 21.1848 92.1389C21.8166 92.1389 22.4484 92.1757 23.0802 92.2493C23.7492 92.3229 24.3253 92.4885 24.8085 92.7461C25.3288 92.9669 25.7376 93.3165 26.035 93.7948C26.3695 94.2364 26.5367 94.8436 26.5367 95.6164Z",fill:"#F9F9F9"}),p.exports.createElement("path",{d:"M56.0839 95.0644C56.0839 95.8004 56.0095 96.6835 55.8609 97.7139C55.7494 98.7442 55.5078 99.7378 55.1361 100.695C54.7645 101.615 54.2627 102.406 53.6309 103.068C52.9991 103.694 52.1628 104.006 51.1222 104.006C49.747 104.006 48.7064 103.51 48.0002 102.516C47.3312 101.523 46.8481 100.345 46.5507 98.9834C46.2534 97.5851 46.0676 96.1683 45.9932 94.7332C45.9561 93.2981 45.9189 92.1573 45.8817 91.3109C43.2058 91.7525 40.567 92.1389 37.9653 92.4701C37.891 93.3165 37.7237 94.3652 37.4636 95.6164C37.2406 96.8675 36.8689 98.0819 36.3486 99.2594C35.8654 100.4 35.215 101.394 34.3974 102.24C33.6169 103.086 32.6505 103.51 31.4984 103.51C30.6064 103.51 29.9002 103.197 29.3799 102.571C28.8968 101.909 28.5251 101.136 28.2649 100.253C28.0048 99.3698 27.8375 98.4683 27.7632 97.5483C27.726 96.5915 27.7074 95.8004 27.7074 95.1748C27.7074 93.0773 27.8747 91.0166 28.2092 88.9926C28.5437 86.9319 28.9339 84.8896 29.3799 82.8657C29.6029 81.7985 29.9002 80.5474 30.2719 79.1122C30.6436 77.6771 31.0896 76.2051 31.6099 74.6964C32.1674 73.1509 32.7992 71.6421 33.5054 70.1702C34.2487 68.6614 35.0849 67.3183 36.0141 66.1407C36.9432 64.9632 38.0025 64.0064 39.1918 63.2705C40.3811 62.5345 41.7005 62.1665 43.15 62.1665C44.5623 62.1665 45.7888 62.4793 46.8295 63.1049C47.8701 63.7304 48.7807 64.5584 49.5612 65.5888C50.3417 66.6191 50.9921 67.7967 51.5124 69.1214C52.0328 70.4094 52.4601 71.7341 52.7946 73.0957C53.1663 74.4204 53.4636 75.7268 53.6866 77.0147C53.9468 78.3027 54.1698 79.4434 54.3556 80.437C54.8388 82.8289 55.2476 85.2576 55.5821 87.7231C55.9166 90.1518 56.0839 92.5989 56.0839 95.0644ZM45.3242 81.6513C45.3242 81.2097 45.2871 80.4922 45.2127 79.4986C45.1756 78.4682 45.0641 77.4563 44.8782 76.4627C44.6924 75.4324 44.3951 74.5308 43.9862 73.758C43.6146 72.9485 43.0943 72.5437 42.4253 72.5437C42.0536 72.5437 41.7005 72.8013 41.366 73.3165C41.0315 73.7948 40.7342 74.4204 40.474 75.1932C40.2139 75.9291 39.9723 76.7571 39.7493 77.6771C39.5635 78.597 39.3962 79.4802 39.2476 80.3266C39.0989 81.173 38.9874 81.9457 38.9131 82.6449C38.8387 83.3073 38.783 83.7856 38.7458 84.08C40.9758 83.896 43.1686 83.62 45.3242 83.2521V81.6513Z",fill:"#F9F9F9"}),p.exports.createElement("path",{d:"M85.5753 73.6476C85.5753 75.6348 85.1293 77.5851 84.2373 79.4986C83.3824 81.4121 82.2303 83.1417 80.7808 84.6872C79.3313 86.1959 77.6774 87.4471 75.8191 88.4406C73.9608 89.3974 72.0467 89.931 70.0769 90.0414C70.0398 90.7038 70.0026 91.5501 69.9655 92.5805C69.9655 93.5741 69.9097 94.6228 69.7982 95.7268C69.6867 96.8307 69.5194 97.9347 69.2965 99.0386C69.1106 100.143 68.8133 101.136 68.4045 102.019C68.0328 102.902 67.531 103.62 66.8992 104.172C66.3046 104.724 65.5612 105 64.6693 105C63.6286 105 62.7924 104.65 62.1605 103.951C61.5659 103.289 61.1013 102.479 60.7668 101.523C60.4695 100.566 60.265 99.5722 60.1535 98.5419C60.0421 97.4747 59.9677 96.5731 59.9306 95.8371C59.8562 94.77 59.8005 93.7212 59.7633 92.6909C59.7633 91.6605 59.7633 90.6118 59.7633 89.5446C59.7633 89.0662 59.7633 88.1831 59.7633 86.8951C59.7633 85.5704 59.7633 84.08 59.7633 82.4241C59.8005 80.7314 59.8376 78.9834 59.8748 77.1803C59.912 75.3404 59.9677 73.6476 60.0421 72.1021C60.1164 70.5198 60.1907 69.1766 60.2651 68.0727C60.3766 66.9687 60.5066 66.3247 60.6553 66.1407C60.6925 66.1039 60.804 66.0303 60.9898 65.92C61.1756 65.7728 61.3801 65.644 61.6031 65.5336C61.826 65.3864 62.0304 65.2576 62.2163 65.1472C62.4021 65.0368 62.5322 64.9632 62.6065 64.9264C64.3162 63.9696 66.1931 63.1417 68.2372 62.4425C70.2814 61.7433 72.3069 61.3937 74.3139 61.3937C76.0235 61.3937 77.5659 61.7433 78.9411 62.4425C80.3534 63.1049 81.5427 64.0064 82.509 65.1472C83.5125 66.2511 84.2744 67.5575 84.7948 69.0662C85.3151 70.5382 85.5753 72.0653 85.5753 73.6476ZM75.9306 74.9172C75.9306 74.1812 75.7448 73.5372 75.3731 72.9853C75.0386 72.4333 74.4625 72.1573 73.6449 72.1573C72.9387 72.1573 72.2326 72.3045 71.5264 72.5989C70.8203 72.8565 70.1699 73.1325 69.5752 73.4269C69.6867 74.7148 69.7796 75.966 69.854 77.1803C69.9654 78.3947 69.984 79.6458 69.9097 80.9337C70.5044 80.6394 71.1548 80.3082 71.8609 79.9402C72.5671 79.5354 73.2175 79.0938 73.8121 78.6154C74.4068 78.1371 74.9086 77.6035 75.3174 77.0147C75.7262 76.3891 75.9306 75.69 75.9306 74.9172Z",fill:"#F9F9F9"}),p.exports.createElement("path",{d:"M113.952 95.0644C113.952 95.8004 113.877 96.6835 113.729 97.7139C113.617 98.7442 113.376 99.7378 113.004 100.695C112.632 101.615 112.131 102.406 111.499 103.068C110.867 103.694 110.031 104.006 108.99 104.006C107.615 104.006 106.574 103.51 105.868 102.516C105.199 101.523 104.716 100.345 104.419 98.9834C104.121 97.5851 103.935 96.1683 103.861 94.7332C103.824 93.2981 103.787 92.1573 103.75 91.3109C101.074 91.7525 98.4348 92.1389 95.8331 92.4701C95.7588 93.3165 95.5916 94.3652 95.3314 95.6164C95.1084 96.8675 94.7367 98.0819 94.2164 99.2594C93.7332 100.4 93.0828 101.394 92.2652 102.24C91.4847 103.086 90.5184 103.51 89.3662 103.51C88.4742 103.51 87.7681 103.197 87.2477 102.571C86.7646 101.909 86.3929 101.136 86.1328 100.253C85.8726 99.3698 85.7053 98.4683 85.631 97.5483C85.5938 96.5915 85.5753 95.8004 85.5753 95.1748C85.5753 93.0773 85.7425 91.0166 86.077 88.9926C86.4115 86.9319 86.8017 84.8896 87.2477 82.8657C87.4707 81.7985 87.7681 80.5474 88.1397 79.1122C88.5114 77.6771 88.9574 76.2051 89.4777 74.6964C90.0352 73.1509 90.667 71.6421 91.3732 70.1702C92.1165 68.6614 92.9527 67.3183 93.8819 66.1407C94.8111 64.9632 95.8703 64.0064 97.0596 63.2705C98.2489 62.5345 99.5684 62.1665 101.018 62.1665C102.43 62.1665 103.657 62.4793 104.697 63.1049C105.738 63.7304 106.649 64.5584 107.429 65.5888C108.21 66.6191 108.86 67.7967 109.38 69.1214C109.901 70.4094 110.328 71.7341 110.662 73.0957C111.034 74.4204 111.331 75.7268 111.554 77.0147C111.815 78.3027 112.038 79.4434 112.223 80.437C112.707 82.8289 113.115 85.2576 113.45 87.7231C113.784 90.1518 113.952 92.5989 113.952 95.0644ZM103.192 81.6513C103.192 81.2097 103.155 80.4922 103.081 79.4986C103.043 78.4682 102.932 77.4563 102.746 76.4627C102.56 75.4324 102.263 74.5308 101.854 73.758C101.482 72.9485 100.962 72.5437 100.293 72.5437C99.9214 72.5437 99.5684 72.8013 99.2339 73.3165C98.8994 73.7948 98.602 74.4204 98.3419 75.1932C98.0817 75.9291 97.8401 76.7571 97.6172 77.6771C97.4313 78.597 97.264 79.4802 97.1154 80.3266C96.9667 81.173 96.8552 81.9457 96.7809 82.6449C96.7065 83.3073 96.6508 83.7856 96.6136 84.08C98.8436 83.896 101.036 83.62 103.192 83.2521V81.6513Z",fill:"#F9F9F9"}),p.exports.createElement("path",{d:"M125.304 2.40361C117.334 1.36977 115.225 17.9105 122.808 18.897C130.263 19.868 133.145 3.42192 125.304 2.40361ZM110.017 0.0586003C109.898 0.0407156 109.78 0.0303541 109.657 0.019918C101.652 -0.65376 100.437 15.9812 108.054 16.625C115.425 17.249 117.467 1.19402 110.017 0.0586003ZM96.1722 9.80112C95.9378 9.75794 95.7007 9.73099 95.4625 9.72047C87.4425 9.36419 87.013 26.0542 94.6442 26.3961C101.912 26.7224 103.268 11.0974 96.1722 9.80112ZM135.793 16.7673C127.898 15.269 124.632 31.6212 132.144 33.0499C139.528 34.455 143.561 18.2426 135.793 16.7673ZM113.506 22.7128C105.36 21.5032 110.179 30.8783 94.9925 33.2538C83.2219 35.0947 87.9909 47.5169 97.5008 49.1824C102.72 50.0968 105.296 46.3328 109.569 47.0821C114.421 47.9322 114.171 51.661 121.272 52.9052C130.34 54.4931 137.569 44.0519 127.859 38.4261C115.496 31.2634 122.404 24.3192 113.906 22.7814C113.77 22.757 113.635 22.732 113.506 22.7128Z",fill:"#F9F9F9"})),vs=e=>p.exports.createElement("svg",{width:22,height:22,viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M20.9999 15.9201V18.9201C21.0011 19.1986 20.944 19.4743 20.8324 19.7294C20.7209 19.9846 20.5572 20.2137 20.352 20.402C20.1468 20.5902 19.9045 20.7336 19.6407 20.8228C19.3769 20.912 19.0973 20.9452 18.8199 20.9201C15.7428 20.5857 12.7869 19.5342 10.1899 17.8501C7.77376 16.3148 5.72527 14.2663 4.18993 11.8501C2.49991 9.2413 1.44818 6.27109 1.11993 3.1801C1.09494 2.90356 1.12781 2.62486 1.21643 2.36172C1.30506 2.09859 1.4475 1.85679 1.6347 1.65172C1.82189 1.44665 2.04974 1.28281 2.30372 1.17062C2.55771 1.05843 2.83227 1.00036 3.10993 1.0001H6.10993C6.59524 0.995321 7.06572 1.16718 7.43369 1.48363C7.80166 1.80008 8.04201 2.23954 8.10993 2.7201C8.23656 3.68016 8.47138 4.62282 8.80993 5.5301C8.94448 5.88802 8.9736 6.27701 8.89384 6.65098C8.81408 7.02494 8.6288 7.36821 8.35993 7.6401L7.08993 8.9101C8.51349 11.4136 10.5864 13.4865 13.0899 14.9101L14.3599 13.6401C14.6318 13.3712 14.9751 13.1859 15.3491 13.1062C15.723 13.0264 16.112 13.0556 16.4699 13.1901C17.3772 13.5286 18.3199 13.7635 19.2799 13.8901C19.7657 13.9586 20.2093 14.2033 20.5265 14.5776C20.8436 14.9519 21.0121 15.4297 20.9999 15.9201Z",stroke:"#F9F9F9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),oh=e=>p.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z",stroke:"#F9F9F9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),p.exports.createElement("path",{d:"M22 6L12 13L2 6",stroke:"#F9F9F9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));function sh(){const[e,t]=p.exports.useState({email:"",first_phoneNumber:"",second_phoneNumber:""});return O0({category:"contacts",state:e,setState:t}),a(Yf,{children:E(ee,{children:[E(Xf,{color:O.colors.green,children:[a(ih,{}),E(Jf,{children:[a(V4,{children:a(dt,{to:"about",children:"\u041F\u0440\u043E \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A"})}),a(V4,{children:a(dt,{to:"dogs",children:"\u041D\u0430\u0448\u0456 \u0445\u0432\u043E\u0441\u0442\u0438"})}),a(V4,{children:a(T1,{href:"path/to/confdentiality/agreement",target:"_blank",children:"\u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456"})}),a(V4,{children:a(T1,{href:"path/to/rules",target:"_blank",children:"\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442\u0456"})}),a(V4,{children:a(T1,{href:"path/to/reports",target:"_blank",children:"\u0417\u0432\u0456\u0442\u043D\u0456\u0441\u0442\u044C"})})]}),E(eh,{children:[E(Z0,{children:[a(vs,{}),a(N1,{children:a("a",{href:`tel:${e==null?void 0:e.first_phoneNumber}`,children:e==null?void 0:e.first_phoneNumber})})]}),E(Z0,{children:[a(vs,{}),a(N1,{children:a("a",{href:`tel:${e==null?void 0:e.second_phoneNumber}`,children:e==null?void 0:e.second_phoneNumber})})]}),E(Z0,{children:[a(oh,{}),a(N1,{children:a("a",{href:`mailto:${e==null?void 0:e.email}`,children:e==null?void 0:e.email})})]}),a(Z0,{children:E(th,{children:[a(V4,{children:a(xs,{href:"path/to/insta",children:a(rh,{})})}),a(Z0,{children:a(xs,{href:"path/to/fb",children:a(nh,{})})})]})})]})]}),a(uh,{children:"\u0420\u043E\u0437\u0440\u043E\u0431\u043A\u0430 Baza Trainee Ukraine 2023 \xA9 \u0423\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u0456"})]})})}const lh=x.div`
  background-color: ${({theme:e})=>e.colors.background};
  width: 100%;
  transition: all ease 0.5s;
  padding: 15px 0;
  margin-bottom: 0;
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

  ${({$scrolledToBottom:e})=>e&&I4`
      margin-bottom: 100px;
    `}

  ${pe} {
    font-size: ${({theme:e})=>e.fontSizes.h3};
    padding: 24px;
  }

  @media (max-width: 767px) {
    padding: 20px 0;
    p {
      font-size: 0.75rem;
    }
  }
`;function ah(){const[e,t]=p.exports.useState(!localStorage.getItem("cookieAgreement")),[n,r]=p.exports.useState(!1),u=()=>{localStorage.setItem("cookieAgreement","true"),t(!1)};return p.exports.useEffect(()=>{const i=()=>{const o=window.innerHeight,s=document.documentElement.scrollHeight,l=window.scrollY;r(l+o>=s-100)};return window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[]),a(Ye,{children:e&&a(lh,{$scrolledToBottom:n,children:a(ee,{children:E(ce,{$align:"center",$justify:"space-between",$gap:"30px",children:[E("p",{children:["\u0426\u0435\u0439 \u0441\u0430\u0439\u0442 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \u0444\u0430\u0439\u043B\u0438 cookies \u0434\u043B\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0457 \u0440\u043E\u0431\u043E\u0442\u0438 \u0456 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u0441\u0435\u0440\u0432\u0456\u0441\u0443. ",a("br",{}),"\u042F\u043A\u0449\u043E \u0432\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044C \u0437 \u0457\u0445\u043D\u0456\u043C \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F\u043C, \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u041E\u041A. \u0411\u0456\u043B\u044C\u0448\u0435 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u0432 \xA0",a("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/Dead-Reaven/Big-lapa",children:"\u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456."})]}),a(pe,{onClick:u,children:"OK"})]})})})})}function ch(){return E(Ye,{children:[a(xi,{}),a(Lp,{}),a(vu,{}),a(ah,{}),a(sh,{})]})}const dh=x.div`
  color: ${({theme:e})=>e.colors.dark};
  margin-top: ${({theme:e})=>e.headerHeight};
`,Be=x.h2`
  font-size: ${({theme:e})=>e.fontSizes.h2};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  margin-bottom: ${({$marginBottom:e})=>e||"45px"};

  @media (max-width: 1279px) {
    font-size: ${({theme:e})=>e.fontSizes.tabletH2};
  }

  @media (max-width: 767px) {
    font-size: ${({theme:e})=>e.fontSizes.mobileH2};
  }
`,le=x.h3`
  font-size: ${({theme:e})=>e.fontSizes.h3};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  margin-bottom: ${({$marginBottom:e})=>e||"5px"};

  @media (max-width: 1279px) {
    font-size: ${({theme:e})=>e.fontSizes.tabletH3};
  }

  @media (max-width: 767px) {
    font-size: ${({theme:e})=>e.fontSizes.mobileH3};
  }
`,ph=x.section`
  padding: 105px 0 110px;

  @media (max-width: 1023px) {
    padding: 85px 0;
  }

  @media (max-width: 767px) {
    padding: 65px 0;
  }
`,fh=x(Be)`
  max-width: 624px;
  margin-bottom: 70px;

  @media (max-width: 1023px) {
    margin-bottom: 60px;
  }

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`,hh=x.div`
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
`,I1=x.div`
  &:nth-of-type(1) {
    grid-column: span 2;
  }
  img {
    height: 100%;
    width: 100%;
  }
`,mh=x.div`
  max-width: 1056px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 90px;
`,W4=x.div`
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
      fill: ${O.colors.yellow};
    }
  }
`,Ch=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,gh=x.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 25px;
`,yh=x(le)`
  margin-bottom: 40px;
`;var xh="/Big-lapa/assets/01.3b9dd8d2.png",vh="/Big-lapa/assets/02.1d5755f4.png",wh="/Big-lapa/assets/03.49d74eb1.png";const Z4=e=>p.exports.createElement("svg",{width:42,height:37,viewBox:"0 0 42 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M13.6998 0.500789C16.0598 0.160789 18.5598 2.74079 19.2798 6.30079C19.9998 9.84079 18.6998 13.0008 16.3398 13.3608C13.9998 13.7208 11.4798 11.1408 10.7398 7.58079C9.99981 4.04079 11.3398 0.880789 13.6998 0.500789ZM27.9998 0.500789C30.3798 0.880789 31.6998 4.04079 30.9998 7.58079C30.2398 11.1408 27.7398 13.7208 25.3798 13.3608C22.9998 13.0008 21.6998 9.84079 22.4398 6.30079C23.1598 2.74079 25.6598 0.160789 27.9998 0.500789ZM2.99981 9.70079C5.27981 8.72079 8.37981 10.5008 9.99981 13.6008C11.5198 16.7608 10.9998 20.0808 8.73981 21.0608C6.47981 22.0408 3.39981 20.2808 1.81981 17.1408C0.239813 14.0008 0.799813 10.6608 2.99981 9.70079ZM38.9998 9.70079C41.1998 10.6608 41.7598 14.0008 40.1798 17.1408C38.5998 20.2808 35.5198 22.0408 33.2598 21.0608C30.9998 20.0808 30.4798 16.7608 31.9998 13.6008C33.6198 10.5008 36.7198 8.72079 38.9998 9.70079ZM35.6598 31.2608C35.7398 33.1408 34.2998 35.2208 32.5798 36.0008C28.9998 37.6408 24.7598 34.2408 20.7798 34.2408C16.7998 34.2408 12.5198 37.7808 8.99981 36.0008C6.99981 35.0208 5.61981 32.4208 5.87981 30.2608C6.23981 27.2808 9.81981 25.6808 11.9398 23.5008C14.7598 20.6808 16.7598 15.3808 20.7798 15.3808C24.7798 15.3808 26.8998 20.6008 29.5998 23.5008C31.8198 25.9408 35.5198 28.0008 35.6598 31.2608Z",fill:"#758650"})),d8=e=>p.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),p.exports.createElement("path",{d:"M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));function Eh(){return a(ph,{children:E(ee,{children:[a(fh,{children:"\u041B\u0430\u0441\u043A\u0430\u0432\u043E \u043F\u0440\u043E\u0441\u0438\u043C\u043E \u0434\u043E Big Lapa - \u043F\u0440\u0438\u0442\u0443\u043B\u043A\u0443 \u0434\u043B\u044F \u0441\u043E\u0431\u0430\u043A!"}),E(hh,{children:[a(I1,{children:a("img",{src:xh,alt:"dogs"})}),a(I1,{children:a("img",{src:vh,alt:"dogs"})}),a(I1,{children:a("img",{src:wh,alt:"dogs"})})]}),E(mh,{children:[E(W4,{children:[a(Z4,{}),a("span",{children:"\u041C\u0438 - \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0435\u043D\u0442\u0443\u0437\u0456\u0430\u0441\u0442\u0456\u0432, \u0449\u043E \u043F\u0440\u0438\u0441\u0432\u044F\u0442\u0438\u043B\u0438 \u0441\u0432\u043E\u0454 \u0436\u0438\u0442\u0442\u044F \u0434\u043E\u043F\u043E\u043C\u043E\u0437\u0456 \u0431\u0435\u0437\u043F\u0440\u0438\u0442\u0443\u043B\u044C\u043D\u0438\u043C \u0441\u043E\u0431\u0430\u043A\u0430\u043C. \u041D\u0430\u0448\u0430 \u043C\u0456\u0441\u0456\u044F \u043F\u043E\u043B\u044F\u0433\u0430\u0454 \u0432 \u0442\u043E\u043C\u0443, \u0449\u043E\u0431 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0442\u0438\u043C\u0447\u0430\u0441\u043E\u0432\u0438\u0439 \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A, \u043C\u0435\u0434\u0438\u0447\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434 \u0456 \u0448\u0430\u043D\u0441 \u043D\u0430 \u043D\u043E\u0432\u0435 \u0436\u0438\u0442\u0442\u044F \u0434\u043B\u044F \u0445\u0432\u043E\u0441\u0442\u0438\u043A\u0456\u0432, \u044F\u043A\u0456 \u043E\u043F\u0438\u043D\u0438\u043B\u0438\u0441\u044F \u043D\u0430 \u0432\u0443\u043B\u0438\u0446\u0456"})]}),E(W4,{children:[a(Z4,{}),a("p",{children:"\u0423 \u043D\u0430\u0441 \u0454 \u0434\u043E\u0441\u0432\u0456\u0434 \u0440\u043E\u0431\u043E\u0442\u0438 \u0437 \u0440\u0456\u0437\u043D\u0438\u043C\u0438 \u043F\u043E\u0440\u043E\u0434\u0430\u043C\u0438 \u0441\u043E\u0431\u0430\u043A. \u041C\u0438 \u0432\u0456\u0440\u0438\u043C\u043E, \u0449\u043E \u043A\u043E\u0436\u043D\u0438\u0439 \u0441\u043E\u0431\u0430\u043A\u0430 \u0437\u0430\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0454 \u043D\u0430\u0448\u043E\u0457 \u0443\u0432\u0430\u0433\u0438, \u043D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u043E \u0432\u0456\u0434 \u0439\u043E\u0433\u043E \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E. \u041C\u0438 \u0434\u043E\u043A\u043B\u0430\u0434\u0430\u0454\u043C\u043E \u0432\u0441\u0456\u0445 \u0437\u0443\u0441\u0438\u043B\u044C, \u0449\u043E\u0431 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u043D\u0430\u0448\u0438\u043C \u0445\u0432\u043E\u0441\u0442\u0438\u043A\u0430\u043C \u0437\u0430\u0442\u0438\u0448\u043D\u0435 \u043C\u0456\u0441\u0446\u0435, \u044F\u043A\u0456\u0441\u043D\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F, \u0432\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434 \u0442\u0430 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u0456 \u043F\u0440\u043E\u0433\u0443\u043B\u044F\u043D\u043A\u0438"})]}),E(W4,{children:[a(Z4,{}),a("p",{children:"\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0432\u043E\u043B\u043E\u043D\u0442\u0435\u0440\u0456\u0432 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u044C \u0447\u0430\u0441 \u0437 \u043A\u043E\u0436\u043D\u0438\u043C \u0441\u043E\u0431\u0430\u043A\u043E\u044E, \u0434\u0430\u0440\u0443\u044E\u0447\u0438 \u0457\u043C \u043B\u044E\u0431\u043E\u0432 \u0442\u0430 \u0443\u0432\u0430\u0433\u0443. \u041C\u0438 \u0432\u0456\u0440\u0438\u043C\u043E, \u0449\u043E \u0441\u043E\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u0456 \u0432\u0437\u0430\u0454\u043C\u043E\u0434\u0456\u044F \u0437 \u043B\u044E\u0434\u044C\u043C\u0438 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u044E\u0442\u044C \u0441\u043E\u0431\u0430\u043A\u0430\u043C \u043F\u0456\u0434\u0433\u043E\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0434\u043E \u043D\u043E\u0432\u0438\u0445 \u0434\u043E\u043C\u0456\u0432\u043E\u043A \u0456 \u043F\u043E\u043A\u0440\u0430\u0449\u0443\u044E\u0442\u044C \u0457\u0445 \u0448\u0430\u043D\u0441\u0438 \u043D\u0430 \u0443\u0441\u043F\u0456\u0448\u043D\u0443 \u0430\u0434\u0430\u043F\u0442\u0430\u0446\u0456\u044E"})]}),E(W4,{children:[a(Z4,{}),a("p",{children:"\u042F\u043A\u0449\u043E \u0432\u0438 \u0437\u0430\u0446\u0456\u043A\u0430\u0432\u043B\u0435\u043D\u0456 \u0443 \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u0456 \u0441\u043E\u0431\u0430\u043A\u0438, \u043C\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0435\u043C\u043E \u0432\u0430\u043C \u0437\u043D\u0430\u0439\u0442\u0438 \u0441\u0430\u043C\u0435 \u0442\u043E\u0433\u043E, \u0445\u0442\u043E \u0441\u0442\u0430\u043D\u0435 \u0447\u0443\u0434\u043E\u0432\u0438\u043C \u043A\u043E\u043C\u043F\u0430\u043D\u044C\u0439\u043E\u043D\u043E\u043C \u0434\u043B\u044F \u0432\u0430\u0441 \u0456 \u0432\u0430\u0448\u043E\u0457 \u0440\u043E\u0434\u0438\u043D\u0438. \u041D\u0430\u0448\u0456 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0438 \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u043E \u043E\u0437\u043D\u0430\u0439\u043E\u043C\u043B\u044F\u0442\u044C \u0432\u0430\u0441 \u0437 \u043A\u043E\u0436\u043D\u0438\u043C \u0441\u043E\u0431\u0430\u043A\u043E\u044E, \u0457\u0445\u043D\u0456\u043C\u0438 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0430\u043C\u0438 \u0442\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u0430\u043C\u0438, \u0449\u043E\u0431 \u0432\u0438 \u043C\u043E\u0433\u043B\u0438 \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0432\u0438\u0431\u0456\u0440"})]}),E(W4,{children:[a(Z4,{}),a("p",{children:"\u0412\u0430\u0448\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 - \u0446\u0435 \u043A\u0440\u043E\u043A \u0434\u043E \u0449\u0430\u0441\u043B\u0438\u0432\u043E\u0433\u043E \u0436\u0438\u0442\u0442\u044F \u043A\u043E\u0436\u043D\u043E\u0457 \u0431\u0435\u0437\u043F\u0440\u0438\u0442\u0443\u043B\u044C\u043D\u043E\u0457 \u0441\u043E\u0431\u0430\u043A\u0438. \u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430, \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u044C\u043D\u0456 \u0440\u0435\u0441\u0443\u0440\u0441\u0438 \u0430\u0431\u043E \u0432\u0430\u0448\u0456 \u0432\u043B\u0430\u0441\u043D\u0456 \u043D\u0430\u0432\u0438\u0447\u043A\u0438 \u0456 \u0447\u0430\u0441 - \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0432\u043D\u0435\u0441\u043E\u043A \u043D\u0430\u043C \u0434\u0443\u0436\u0435 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454. \u0420\u0430\u0437\u043E\u043C \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0441\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u0440\u0430\u0449\u0435 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u0454 \u0434\u043B\u044F \u043D\u0430\u0448\u0438\u0445 \u0447\u043E\u0442\u0438\u0440\u0438\u043B\u0430\u043F\u0438\u0445 \u0434\u0440\u0443\u0437\u0456\u0432"})]}),E(W4,{children:[a(Z4,{}),a("p",{children:"\u041D\u0430 \u043D\u0430\u0448\u043E\u043C\u0443 \u0441\u0430\u0439\u0442\u0456 \u0432\u0438 \u0437\u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0456\u0437\u043D\u0430\u0442\u0438\u0441\u044F \u0431\u0456\u043B\u044C\u0448\u0435 \u043F\u0440\u043E \u0434\u0456\u044F\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u043F\u0440\u0438\u0442\u0443\u043B\u043A\u0443, \u043F\u0440\u043E \u043D\u0430\u0448\u0438\u0445 \u0445\u0432\u043E\u0441\u0442\u0430\u0442\u0438\u0445 \u043C\u0435\u0448\u043A\u0430\u043D\u0446\u0456\u0432 \u0442\u0430 \u0441\u043F\u043E\u0441\u043E\u0431\u0438 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0432'\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043D\u0430\u043C\u0438, \u044F\u043A\u0449\u043E \u0443 \u0432\u0430\u0441 \u0454 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u043F\u0438\u0442\u0430\u043D\u043D\u044F. \u0414\u044F\u043A\u0443\u0454\u043C\u043E \u0432\u0430\u043C \u0437\u0430 \u0432\u0430\u0448\u0443 \u043B\u044E\u0431\u043E\u0432, \u0434\u043E\u0431\u0440\u043E\u0442\u0443 \u0442\u0430 \u0432\u0456\u0434\u0434\u0430\u043D\u0456\u0441\u0442\u044C!"})]})]}),E(Ch,{children:[a(yh,{children:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430 Big Lapa"}),E(gh,{children:[a(d8,{}),E("div",{children:[a(le,{children:"\u0417\u043D\u0430\u0439\u0442\u0438 \u043D\u0430\u0441 \u043C\u043E\u0436\u043D\u0430 \u0437\u0430 \u0430\u0434\u0440\u0435\u0441\u043E\u044E:"}),a("p",{children:"\u043C\u0456\u0441\u0442\u043E \u041B\u044C\u0432\u0456\u0432, \u0432\u0443\u043B. \u0413\u043E\u0440\u043E\u0434\u043E\u0446\u044C\u043A\u0430, 397"})]})]})]})]})})}const Gu=x.h1`
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
`;var ws="/Big-lapa/assets/main_photo.4c1331c3.png";const Sh=e=>p.exports.createElement("svg",{width:130,height:17,viewBox:"0 0 130 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("rect",{x:.5,y:.5,width:16,height:16,rx:8,stroke:"#F9F9F9"}),p.exports.createElement("line",{x1:28,y1:8,x2:45,y2:8,stroke:"#F9F9F9"}),p.exports.createElement("rect",{x:56,width:17,height:17,rx:8.5,fill:"#F9F9F9"}),p.exports.createElement("line",{x1:84,y1:8,x2:101,y2:8,stroke:"#F9F9F9"}),p.exports.createElement("rect",{x:112.5,y:.5,width:17,height:16,rx:8,stroke:"#F9F9F9"})),kh=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${O.colors.background};
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%),
    url(${ws}) center/cover no-repeat;

  @media screen and (max-width: 767px) {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%),
      url(${ws}) center/cover no-repeat;
  }

  ${ee} {
    height: calc(100vh - 96px);
    display: flex;
    align-items: center;
  }
`,Fh=x.div`
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
`,Dh=x.button`
  background: transparent;
  border: 1px solid ${O.colors.background};
  padding: ${O.paddings.button};
  border-radius: 4px;
  font-size: ${O.fontSizes.buttonText};
  font-weight: ${O.fontWeights.semiBold};
  line-height: ${O.lineHeights.normal};
  transition: ${O.transitions.quick};

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
`,bh=x(Sh)`
  position: absolute;
  bottom: 44px;
  z-index: 1;
  @media screen and (max-width: 767px) {
    left: 50%;
    bottom: 130px;
    transform: translate(-50%);
  }
`;function Lh(){return a(kh,{children:E(ee,{children:[E(Fh,{children:[a(Gu,{children:"\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0439 \u0434\u0440\u0443\u0433\u0430, \u0432\u0440\u044F\u0442\u0443\u0439 \u0442\u0432\u0430\u0440\u0438\u043D\u0443!"}),a(Dh,{children:"\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"})]}),a(bh,{})]})})}function Ph(){return E(dh,{"data-testid":"about-page",children:[a(Lh,{}),a(Eh,{})]})}x.div`
  svg {
    z-index: 3;
  }
`;const Ah=x.div`
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
`,Bh=x.b`
  padding: 0 12px 12px 0;
  color: #2e2e2e;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
`,Rh=x.div`
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
`,ti=x.input`
  height: 56px;
  padding: 0 8px;
  flex: 100% 0 1;
`,p8=x.form`
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
    ${ti} {
      padding: 0 50px 0 20px;
    }
  }
  @media screen and (max-width: 767px) {
    height: auto;
    font-size: 16px;
    svg {
      height: 24px;
      width: 24px;
      flex: 24px 0 0;
    }
    ${ti} {
      padding: 0 8px;
    }
  }
  @media screen and (max-width: 393px) {
    font-size: 4vw;
  }
`,Oh=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},p.exports.createElement("path",{d:"M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),p.exports.createElement("path",{d:"M20.9999 21.0004L16.6499 16.6504",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Mh=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:20,viewBox:"0 0 16 20",fill:"none",...e},p.exports.createElement("path",{d:"M5 3.0005C4.73478 3.0005 4.48043 3.10585 4.29289 3.29339C4.10536 3.48093 4 3.73528 4 4.0005C4 4.26571 4.10536 4.52007 4.29289 4.7076C4.48043 4.89514 4.73478 5.0005 5 5.0005C5.26522 5.0005 5.51957 4.89514 5.70711 4.7076C5.89464 4.52007 6 4.26571 6 4.0005C6 3.73528 5.89464 3.48093 5.70711 3.29339C5.51957 3.10585 5.26522 3.0005 5 3.0005ZM2.17 3.0005C2.3766 2.41496 2.75974 1.90793 3.2666 1.54929C3.77346 1.19064 4.37909 0.998047 5 0.998047C5.62091 0.998047 6.22654 1.19064 6.7334 1.54929C7.24026 1.90793 7.6234 2.41496 7.83 3.0005H15C15.2652 3.0005 15.5196 3.10585 15.7071 3.29339C15.8946 3.48093 16 3.73528 16 4.0005C16 4.26571 15.8946 4.52007 15.7071 4.7076C15.5196 4.89514 15.2652 5.0005 15 5.0005H7.83C7.6234 5.58603 7.24026 6.09306 6.7334 6.45171C6.22654 6.81035 5.62091 7.00295 5 7.00295C4.37909 7.00295 3.77346 6.81035 3.2666 6.45171C2.75974 6.09306 2.3766 5.58603 2.17 5.0005H1C0.734784 5.0005 0.48043 4.89514 0.292893 4.7076C0.105357 4.52007 0 4.26571 0 4.0005C0 3.73528 0.105357 3.48093 0.292893 3.29339C0.48043 3.10585 0.734784 3.0005 1 3.0005H2.17ZM11 9.0005C10.7348 9.0005 10.4804 9.10585 10.2929 9.29339C10.1054 9.48093 10 9.73528 10 10.0005C10 10.2657 10.1054 10.5201 10.2929 10.7076C10.4804 10.8951 10.7348 11.0005 11 11.0005C11.2652 11.0005 11.5196 10.8951 11.7071 10.7076C11.8946 10.5201 12 10.2657 12 10.0005C12 9.73528 11.8946 9.48093 11.7071 9.29339C11.5196 9.10585 11.2652 9.0005 11 9.0005ZM8.17 9.0005C8.3766 8.41496 8.75974 7.90793 9.2666 7.54929C9.77346 7.19064 10.3791 6.99805 11 6.99805C11.6209 6.99805 12.2265 7.19064 12.7334 7.54929C13.2403 7.90793 13.6234 8.41496 13.83 9.0005H15C15.2652 9.0005 15.5196 9.10585 15.7071 9.29339C15.8946 9.48093 16 9.73528 16 10.0005C16 10.2657 15.8946 10.5201 15.7071 10.7076C15.5196 10.8951 15.2652 11.0005 15 11.0005H13.83C13.6234 11.586 13.2403 12.0931 12.7334 12.4517C12.2265 12.8104 11.6209 13.0029 11 13.0029C10.3791 13.0029 9.77346 12.8104 9.2666 12.4517C8.75974 12.0931 8.3766 11.586 8.17 11.0005H1C0.734784 11.0005 0.48043 10.8951 0.292893 10.7076C0.105357 10.5201 0 10.2657 0 10.0005C0 9.73528 0.105357 9.48093 0.292893 9.29339C0.48043 9.10585 0.734784 9.0005 1 9.0005H8.17ZM5 15.0005C4.73478 15.0005 4.48043 15.1059 4.29289 15.2934C4.10536 15.4809 4 15.7353 4 16.0005C4 16.2657 4.10536 16.5201 4.29289 16.7076C4.48043 16.8951 4.73478 17.0005 5 17.0005C5.26522 17.0005 5.51957 16.8951 5.70711 16.7076C5.89464 16.5201 6 16.2657 6 16.0005C6 15.7353 5.89464 15.4809 5.70711 15.2934C5.51957 15.1059 5.26522 15.0005 5 15.0005ZM2.17 15.0005C2.3766 14.415 2.75974 13.9079 3.2666 13.5493C3.77346 13.1906 4.37909 12.998 5 12.998C5.62091 12.998 6.22654 13.1906 6.7334 13.5493C7.24026 13.9079 7.6234 14.415 7.83 15.0005H15C15.2652 15.0005 15.5196 15.1059 15.7071 15.2934C15.8946 15.4809 16 15.7353 16 16.0005C16 16.2657 15.8946 16.5201 15.7071 16.7076C15.5196 16.8951 15.2652 17.0005 15 17.0005H7.83C7.6234 17.586 7.24026 18.0931 6.7334 18.4517C6.22654 18.8104 5.62091 19.0029 5 19.0029C4.37909 19.0029 3.77346 18.8104 3.2666 18.4517C2.75974 18.0931 2.3766 17.586 2.17 17.0005H1C0.734784 17.0005 0.48043 16.8951 0.292893 16.7076C0.105357 16.5201 0 16.2657 0 16.0005C0 15.7353 0.105357 15.4809 0.292893 15.2934C0.48043 15.1059 0.734784 15.0005 1 15.0005H2.17Z",fill:"#2E2E2E"})),dr=({title:e,options:t,onChange:n})=>E(Rh,{children:[a(Bh,{children:e}),t.map(({label:r,name:u,checked:i})=>E("div",{children:[a("input",{type:"checkbox",name:u,checked:i,onChange:o=>{const s={...t.reduce((l,{name:c,checked:d})=>(l[c]=d||!1,l),{}),[u]:o.target.checked};n(s)}}),a("label",{htmlFor:u,children:r})]},u))]});function $h(){const{search:e}=Nt(),t=di(),n={isOpen:!0,searchInput:"",genders:{male:!0,female:!0},sizes:{small:!0,medium:!0,big:!0},chips:{hasChip:!0,noChip:!0},breeds:{hasBreed:!0,noBreed:!0}},r=new URLSearchParams(e),u=r.get("search"),i=r.get("isOpen")==="true",o=r.getAll("gender"),s=r.getAll("size"),l=r.getAll("chip"),c=r.getAll("breed"),d={isOpen:i!=null?i:n.isOpen,searchInput:u!=null?u:n.searchInput,genders:o.length?o.reduce((F,b)=>({...F,[b]:!0}),{}):n.genders,sizes:s.length?s.reduce((F,b)=>({...F,[b]:!0}),{}):n.sizes,chips:l.length?l.reduce((F,b)=>({...F,[b]:!0}),{}):n.chips,breeds:c.length?c.reduce((F,b)=>({...F,[b]:!0}),{}):n.breeds},[m,g]=p.exports.useState(d.isOpen),[w,v]=p.exports.useState(d.searchInput),[y,k]=p.exports.useState(d.genders),[f,h]=p.exports.useState(d.sizes),[C,S]=p.exports.useState(d.chips),[P,D]=p.exports.useState(d.breeds);return p.exports.useEffect(()=>{const F=new URLSearchParams;F.set("isOpen",m.toString()),F.set("search",w);for(const b in y)y[b]&&F.append("gender",b);for(const b in f)f[b]&&F.append("size",b);for(const b in C)C[b]&&F.append("chip",b);for(const b in P)P[b]&&F.append("breed",b);t({search:F.toString()})},[m,w,y,f,C,P,t]),[{isOpen:m,searchInput:w,genders:y,sizes:f,chips:C,breeds:P},{setIsOpen:g,setSearchInput:v,setGenders:k,setSizes:h,setChips:S,setBreeds:D}]}function f8({options:e,setState:t}){const[{breeds:n,chips:r,genders:u,isOpen:i,sizes:o,searchInput:s},{setBreeds:l,setChips:c,setGenders:d,setIsOpen:m,setSizes:g,setSearchInput:w}]=$h(),v=k=>m(!k),y=()=>{if(e!=null&&e.data){const k=e==null?void 0:e.data.filter(({sex:f})=>{if(u.female&&u.male)return!0;if(u.male)return f.includes("\u0425\u043B\u043E\u043F\u0447\u0438\u043A");if(u.female)return f.includes("\u0414\u0456\u0432\u0447\u0438\u043D\u043A\u0430")}).filter(({size:f})=>{if(o.small&&o.medium&&o.big)return!0;if(o.small&&o.medium)return f.includes("small")||f.includes("medium");if(o.small&&o.big)return f.includes("small")||f.includes("big");if(o.medium&&o.big)return f.includes("medium")||f.includes("big");if(o.small)return f.includes("small");if(o.medium)return f.includes("medium");if(o.big)return f.includes("big")}).filter(({haschip:f})=>{if(r.hasChip&&r.noChip)return!0;if(r.hasChip)return f;if(r.noChip)return!f}).filter(({hasbreed:f})=>{if(n.hasBreed&&n.noBreed)return!0;if(n.hasBreed)return f;if(n.noBreed)return!f}).filter(({name:f})=>f.toLowerCase().includes(s.toLowerCase()));t({data:k})}};return p.exports.useEffect(()=>{e&&t(e),y()},[s,u,o,r,n,e]),E(Ye,{children:[E(p8,{children:[a(Oh,{}),a(ti,{type:"text",placeholder:"\u041F\u043E\u0448\u0443\u043A \u0441\u043E\u0431\u0430\u043A\u0438 \u0437\u0430 \u043A\u043B\u0438\u0447\u043A\u043E\u044E",value:s,onChange:k=>w(k.target.value)}),a(Mh,{type:"button",onClick:()=>v(i),style:{cursor:"pointer"}})]}),i&&E(Ah,{children:[a(dr,{title:"\u0421\u0442\u0430\u0442\u044C",options:[{name:"male",label:"\u0425\u043B\u043E\u043F\u0435\u0446\u044C",checked:u.male},{name:"female",label:"\u0414\u0456\u0432\u0447\u0438\u043D\u0430",checked:u.female}],onChange:d}),a(dr,{title:"\u0420\u043E\u0437\u043C\u0456\u0440",options:[{name:"small",label:"\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0430",checked:o.small},{name:"medium",label:"\u0421\u0435\u0440\u0435\u0434\u043D\u044F",checked:o.medium},{name:"big",label:"\u0412\u0435\u043B\u0438\u043A\u0430",checked:o.big}],onChange:g}),a(dr,{title:"\u041D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u0447\u0438\u043F\u0443",options:[{name:"hasChip",label:"\u0422\u0430\u043A",checked:r.hasChip},{name:"noChip",label:"\u041D\u0456",checked:r.noChip}],onChange:c}),a(dr,{title:"\u041D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u043F\u043E\u0440\u043E\u0434\u0438",options:[{name:"hasBreed",label:"\u0422\u0430\u043A",checked:n.hasBreed},{name:"noBreed",label:"\u041D\u0456",checked:n.noBreed}],onChange:l})]})]})}const Th=x.section`
  margin-bottom: 110px;

  @media (max-width: 1279px) {
    margin-bottom: 80px;
  }

  @media (max-width: 767px) {
    margin-bottom: 60px;
  }

  ${({$admin:e})=>e&&I4`
      ${ee} {
        padding: 0;
        margin: 0;
        width: 100%;
      }

      ${ce} {
        align-items: end;

        @media (max-width: 1439px) {
          align-items: center;
        }

        @media (max-width: 1024px) {
          align-items: end;
        }
      }

      ${h8} {
        align-self: flex-end;
      }

      ${m8} {
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;

        @media (max-width: 1439px) {
          gap: 17px;
          grid-template-columns: repeat(2, 1fr);
        }
      }

      ${C8} {
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
`,h8=x(le)`
  align-self: start;
  margin-bottom: 40px;
  span {
    color: ${O.colors.grey};
  }
`,m8=x.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 40px;
  margin-bottom: 55px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,C8=x.div`
  background-color: ${O.colors.background};
  transition: ${O.transitions.long}, border 0s;
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
      border: 2px solid ${O.colors.lightGreen};
      border-radius: 4px;
      z-index: 5;

      svg {
        display: block;
      }
    }
  }
`,Nh=x.div`
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
`,Ih=x.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,zh=x.button`
  background: transparent;
  border: 1px solid ${O.colors.dark};
  padding: 15px 60px;
  border-radius: 4px;
  font-size: ${O.fontSizes.buttonText};
  font-weight: ${O.fontWeights.semiBold};
  line-height: ${O.lineHeights.normal};
  transition: ${O.transitions.quick};

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
`,_h=x.ul`
  display: flex;
  gap: 24px;

  li {
    color: ${O.colors.lightGrey};
    font-size: 24px;

    &:hover {
      transition: ${O.transitions.quick};
      cursor: pointer;
      color: ${O.colors.dark};
    }
  }
`;var Hh="/Big-lapa/assets/Dog_photo.ba816c06.png";const jh=e=>p.exports.createElement("svg",{width:25,height:24,viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M15.5 6.84375C15.5 6.84375 16.6419 6.28125 12.5 6.28125C11.0166 6.28125 9.5666 6.72112 8.33323 7.54523C7.09986 8.36934 6.13856 9.54068 5.57091 10.9111C5.00325 12.2816 4.85472 13.7896 5.14411 15.2444C5.4335 16.6993 6.14781 18.0357 7.1967 19.0846C8.2456 20.1334 9.58197 20.8478 11.0368 21.1371C12.4917 21.4265 13.9997 21.278 15.3701 20.7103C16.7406 20.1427 17.9119 19.1814 18.736 17.948C19.5601 16.7147 20 15.2646 20 13.7812",stroke:"#2E2E2E",strokeWidth:2,strokeMiterlimit:10,strokeLinecap:"round"}),p.exports.createElement("path",{d:"M12.5 2.71875L16.25 6.46875L12.5 10.2188",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Uh=e=>p.exports.createElement("svg",{width:147,height:174,viewBox:"0 0 147 174",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M60.9597 35.3807C63.5832 32.2251 69.5621 32.9001 74.3497 36.9439C79.1156 40.9604 80.9057 46.7609 78.3039 49.9438C75.7276 53.1039 69.7233 52.4517 64.9103 48.4307C60.119 44.4371 58.3797 38.591 60.9597 35.3807ZM79.0984 19.0752C82.5309 16.8807 87.6442 19.6937 90.6089 25.3293C93.5193 31.0607 93.156 37.4369 89.7707 39.6359C86.36 41.8578 81.272 39.0219 78.358 33.3407C75.3969 27.6549 75.7602 21.2787 79.0984 19.0752ZM57.3997 60.1533C59.2252 56.2143 65.0946 55.1119 70.5232 57.5009C75.8903 60.0859 78.8439 65.2157 77.0437 69.1318C75.2436 73.0479 69.4214 74.1548 63.9999 71.6656C58.5785 69.1763 55.6539 63.9736 57.3997 60.1533ZM103.064 19.1043C106.899 17.9076 111.244 21.8333 112.657 27.9257C114.071 34.0181 112.079 39.9351 108.146 41.1729C104.213 42.4107 99.94 38.4668 98.429 32.4155C97.1101 26.3321 99.1051 20.3649 103.064 19.1043ZM122.291 52.3747C124.438 54.8525 124.876 59.3368 123.543 62.3639C120.786 68.6871 111.708 68.8756 106.66 73.4138C101.611 77.952 100.035 87.6697 93.6328 89.251C90.0294 90.1923 85.4493 88.2129 83.4284 84.9648C80.6419 80.4821 83.4416 74.2136 83.7582 68.8173C84.2662 61.7482 81.0351 52.2252 86.1342 47.6414C91.208 43.0804 99.578 47.7963 106.159 48.6805C111.63 49.4834 118.565 48.0795 122.291 52.3747Z",fill:"#B5C268"}),p.exports.createElement("path",{d:"M28.7398 107.017C31.7828 104.656 37.2287 106.565 40.9262 111.34C44.6086 116.086 45.1792 121.846 42.1512 124.238C39.1512 126.614 33.6774 124.72 29.9519 119.96C26.2415 115.231 25.7269 109.439 28.7398 107.017ZM48.7359 95.7984C52.3512 94.5013 56.5854 98.2061 58.2821 104.066C59.9101 110.002 58.3643 115.834 54.7921 117.146C51.192 118.473 46.9858 114.752 45.3449 108.861C43.661 102.956 45.2068 97.1242 48.7359 95.7984ZM20.7312 129.213C23.1786 125.954 28.8588 126.192 33.4672 129.572C37.981 133.12 39.7632 138.508 37.3437 141.751C34.9242 144.994 29.2871 144.771 24.7044 141.3C20.1218 137.829 18.3804 132.379 20.7312 129.213ZM71.0711 100.97C74.873 100.684 78.1806 105.255 78.3445 111.205C78.5084 117.155 75.5318 122.211 71.6308 122.514C67.7299 122.817 64.4934 118.245 64.2305 112.312C64.1527 106.391 67.1422 101.288 71.0711 100.97ZM82.6962 135.933C84.229 138.69 83.7875 142.94 81.9719 145.46C78.2054 150.729 69.7067 148.955 64.1413 152.077C58.576 155.2 55.2667 163.868 48.9992 163.959C45.4619 164.058 41.567 161.24 40.298 157.796C38.5491 153.043 42.3458 147.834 43.6626 142.901C45.4745 136.458 44.2653 126.938 49.8866 123.785C55.4799 120.647 62.3897 126.814 68.3571 129.046C73.3056 130.965 80.0364 131.152 82.6962 135.933Z",fill:"#B5C268"})),Vh=e=>p.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M4 7H20M10 11V17M14 11V17M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));function Wh({dog:e,src:t,admin:n}){const{id:r,name:u,sex:i,age:o}=e;return E(C8,{children:[!n&&E(Rt,{to:`/dog/${r}/${u}`,children:[a("img",{src:t,alt:"/dog"}),a(le,{children:u}),E("p",{children:[i,", ",o]}),a(Uh,{})]}),n&&E(Rt,{to:"/admin/edit-card",children:[a("img",{src:t,alt:"/dog"}),a(le,{children:u}),E("p",{children:[i,", ",o]}),E(Nh,{children:[a(pe,{children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"}),a(pe,{children:a(Vh,{})})]})]})]})}function g8({admin:e,state:t}){const n=t==null?void 0:t.data;return a(Th,{$admin:e,children:a(ee,{children:E(ce,{$direction:"column",$align:"center",children:[E(h8,{children:[a("span",{children:"\u0417\u043D\u0430\u0439\u0434\u0435\u043D\u043E:"})," ",n==null?void 0:n.length," \u0441\u043E\u0431\u0430\u043A"]}),a(m8,{children:n==null?void 0:n.map(r=>a(Wh,{dog:r,src:Hh,admin:e},r.id))}),E(Ih,{children:[E(zh,{children:[a(jh,{}),"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0449\u0435"]}),E(_h,{children:[a("li",{children:"1"}),a("li",{children:"2"}),a("li",{children:"3"}),a("li",{children:"4"}),a("li",{children:"5"}),a("li",{children:"..."}),a("li",{children:"16"})]})]})]})})})}var Zh="/Big-lapa/assets/main_photo.01c83128.png";const Qh=e=>p.exports.createElement("svg",{width:130,height:17,viewBox:"0 0 130 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("rect",{width:17,height:17,rx:8.5,fill:"#F9F9F9"}),p.exports.createElement("line",{x1:28,y1:8,x2:45,y2:8,stroke:"#F9F9F9"}),p.exports.createElement("rect",{x:56.5,y:.5,width:16,height:16,rx:8,stroke:"#F9F9F9"}),p.exports.createElement("line",{x1:84,y1:8,x2:101,y2:8,stroke:"#F9F9F9"}),p.exports.createElement("rect",{x:112.5,y:.5,width:17,height:16,rx:8,stroke:"#F9F9F9"})),qh=x.div`
  height: calc(100vh - 96px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${O.colors.background};
  background-color: ${O.colors.green};
  margin-bottom: 120px;

  @media (max-width: 1279px) {
    margin-bottom: 80px;
  }

  @media (max-width: 767px) {
    margin-bottom: 60px;
  }
`,Kh=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2vh;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`,Gh=x.div`
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
`,y8=x.button`
  background: transparent;
  border: 1px solid ${O.colors.background};
  padding: ${O.paddings.button};
  border-radius: 4px;
  font-size: ${O.fontSizes.buttonText};
  font-weight: ${O.fontWeights.semiBold};
  line-height: ${O.lineHeights.normal};
  transition: ${O.transitions.quick};

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
`,Yh=x(y8)`
  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 767px) {
    display: block;
  }
`,Xh=x.div`
  flex: 0 1 50%;
  aspect-ratio: 1/1;
  max-height: 70vh;
  background: ${O.colors.yellow} url(${Zh}) bottom no-repeat;
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
`,Jh=x(Qh)`
  position: absolute;
  bottom: 0;
  z-index: 1;
  @media screen and (max-width: 767px) {
    left: 50%;
    bottom: 85px;
    transform: translate(-50%);
  }
`;function em(){return a(qh,{children:a(ee,{children:E(Kh,{children:[E(Gh,{children:[a(Gu,{children:"\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0439 \u0434\u0440\u0443\u0433\u0430, \u0432\u0440\u044F\u0442\u0443\u0439 \u0442\u0432\u0430\u0440\u0438\u043D\u0443!"}),a(y8,{children:"\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"})]}),a(Xh,{}),a(Yh,{children:"\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"}),a(Jh,{})]})})})}const tm=x.div`
  color: ${({theme:e})=>e.colors.dark};
  margin-top: ${({theme:e})=>e.headerHeight};

  ${p8} {
    margin-bottom: 110px;

    @media (max-width: 1279px) {
      margin-bottom: 90px;
    }

    @media (max-width: 767px) {
      margin-bottom: 70px;
    }
  }
`;function nm(){const[e,t]=p.exports.useState({data:[]});O0({category:"dogs",state:e,setState:t});const[n,r]=p.exports.useState(e);return E(tm,{"data-testid":"dogs-page",children:[a(em,{}),a(ee,{children:a(f8,{state:n,setState:r,options:e})}),a(g8,{state:n})]})}var rm="/Big-lapa/assets/Dogs_donation.818d994a.png",um="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAlCAYAAAC05kydAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAx5SURBVHgB7VoLcFTVGf7PubvZPAh5bAJZdkMguxGI1KIo+KpgRVqxPhFRqsXqVJ3RwbbWR31rpzNWndGOWmfaQUqLwjAWW2tFrZXIWKij+EKRkM17A2Szm002ZJPs7j2n37mbDZsQkmx2o47mm7m5e8//n9f/n3P+xwnRJL6Z8Nld17Y5nNu9ttnfo0mMG4zSAL/d9QvG6FFJlCEleTXiywtaDnxCk0ganFIAFMB8DtfdUOvvlDJUGRQzTZL+907H7EU0iaQx7h2ilNHucD2IBu7Bb/MxdEltjKIXW1sa/keTGDPGpRCljA57xX2CyUdGYQ0JXSwpPlT3AU1iTEj6yIIyeMDhumsMylDIZhrf6bWVn01fAwTtc60eu93xwTA7+uuCpHeI3+F6GK8HkqmDTtqFFFcWtdT9h1IE+v8Mq2ImbFWQmfWzCurrG+O0dofzDknsPtAZafSAtcn9lCr3zii/3sT5vVLK2WScptSHMe3QOFuX3+yujdWt2A/6jIRBh8Hai7be6gmab3d07fcPGccNoD/OiAmNxBl5nroaSgOS2iFy6VITXk2S5Dr14PeDmFzvcdibuWT3Kz5B8iEz045QWsBCEFYO+rWLCJ+XSBHEz8FrqloBOCp75cKFZl+p6xmN8/XgL2ecdWLGXijTAu9jhS7lB76SmPMBehD1co2Hy240cQTCLgLf2uyp0T8k9lPjcqG+vI4ky0U9qxTsMkoTUnZ720tde7DkThlaLiV7qailZhWlGdK2MDtgCjZjNRfqJFdM89Ruj9P8jopXwXEhFsFje12l9y6oaV4jGNtoDEfSJjOOWS0sukIZbKHG+CPQwkLQDmtd4cru7OK+LK2zSQkY6ryicGrmG+3BiNoFT6Gso8jjLoj302ErP1XnfDekBxKZIcSPOk3RM2c3NPRSikjJ7VXARMVw5cw4GdIPdmhPyBDvSDyc9Z5bVRXVObs7Nha23VqSd0Oep9Y9xVvfOs1T95ouxdUgqWOoREwxrbaj3XiruuScQqEokyIu4EHHldDYlWjUhHHsxG7rRLWTsyL8LEoDTCMR0ZHmtzt/TUzbUOQ50EJpgr/EVSlN0dwiT8N7lAI0Yi/67RUd8W/sDFt8y9fPmpXPojRX/cZOepHt2RNJrAul1Pgczo+hrPMEse8OapfRhkDUFMD8S/r7efpoH3D3paEQrGa2USDoQvFyM+OrQXubGSzjx3F3iPKm/KWu5zHguzjxQkojpFmeQNL0zzbHrCWUGvJxls+KPxCG5SjBgKEfCHRYIcH2h403GywHMHeirBM7Lai+4ZCsbrHZstXvVrvzXLQ6E1wBoeynlMaiwu66pHW6s5hSBB9+oMTb7c71mMZPpPJXJgDY6sWcTNv9M2afT+MEY2yN6NXs8QcCHvDiChoaOqANwwODU7FiaF3lAvOYDVEKq0ukSSlusja755sjcq5UxxVjZ2TznJWKBoNxKxmKZsqmvAja/f3zmWYxU8rH1jEKUVE3clMb0cN1NAZgsluhuP8Oeoh2EtPfGEP1LOLaK2328gtpHIhK0VHsqz4Yf9gQjw/fG/rflwZKy38aL8dqL4qwyNMgTMOEj1g081+Gax9RLeQjI7F5UvHh6SflQC7nGW1K2oHFupUxuQXtu/t5rqEUMciGdMz8TkG73vMctL2axohiT+3jeD1O40cmPJ6/tcGvL/a4X6A0oi+S/YTJ3H0Ojt3vC8n+hFTP7VBABwQ5H+Q8iLVbcnlXTuMXhxLrYec9iUV5j3EUEoMdkZ2ayfQyY6GPcTRNBcthwfi1cbvqLXWu1iTbDN6LYHPvt7bU/obGiYEdopShi57HKAllpAvYlRaci8+rVSzTlIFWKGn9tNsSZVdBAdgBLIK2T4ThPwNn0hSQ6+Ag3l3U7B6IMcDXpt5QoAuLcmEsDpENqHdffmN1Pd7O2HDpX4lOjmZhcL3ZXlIZAMlKKQUYO6Q+f1Z+VPQ8A0msoa8IsdQ9ewa2y0wttX8ciRcB3SqkZLSw3vPRoDaY/jA8wqeyo6I6XpZ72N2Gtq9vn+l6TAhawBnLhA0/SBnRXda6us7E+mYyXxzh0TL1W9N12WdiPWZNfh7nk5wt13ShR8KW9xPrWd3uYIut8qIcHq2IsGgzpQBjNXbNdFWGBakEYNZQBkymB8Z3caFn/15KE3ylzkuZZC8PS5TyXWz5b+0ll3Fk5Ta59wkmbmBDAqCvAJ8xIX9MEwSJkwDJRetWmhjPMR0YMOrFzXWbEXdkYUs8R/2XTV8msBj2mi3Zy3JrP/WOxOezO9+C0S0ZoaVu5NBujN9YGoGcrXwdcX5lO6OyLNL4eQ6X3yflK5Yo/T63tdYrp0/PaTfnGvEEvKfaAtZ7FfN4elods0/SpPZn2JOMQr17ETt0KNR/D/Q6WO0w8F0RPXp1htm0CR3lH2dAYJM7ijy1KvdHHQ7nzxBJ3qryCahzgbXF7UlkHuRlwfd+Ht6FSrIpb2dMSgnaTijq08T8xDIL0/VQmFeXYLI0JshP9d7Osws97q7ROJXBxatshLYIVwOn4ccnSnjwejZAgWv7iYLFElA2lM3vM8tVbUVlS+rCwVC+mU6M1aaZPpGDwI+qmZQIxqlSTYkiEWNXHS5xFUEwy42xqOBR405UOmuUMefgtc4YD7EbsfhUX7jpFirX92Qi7zFxCDT2EmN8bSz9PDqimtyGRnYkPhGp7TRljM0Vxup5PxKh84t9vlGVoSD6tO9ggu2xwYuVrFvkq8dEGVa01e++SsM2BhwVv1LKwAfmwp7I0Nh8U4ZpHub2S5D9aKeCZZo3lwcCQallVvZ3gdBCHtfTO0qT6vJtWabgAYrtgvd7pKkIv/cbfIJuQVxyLiWkUjpL58Bzo8qjk2dXD21/2FxWYfOBLe1l5UES/OXRUoQYSNawAxcsi2i0uriTOKJfXtTR0EFjBALALhwZxqgixHqmBWpjHlBgqand4dEH2q6szAgEw3cYY5H0bEFLzZ0JeaYD3rLyai3K/4FVvsRrd52u6eEmSgLICiCEYaH8w+59lLCwcU9ijEFyva/YU1+VSItI/Uf4UCmYXWhgEVR/WnDG7DlTD9YPeIXHzWUVNta9hqlcx8a4U5KcDE4VudvaLS4rSEIZyeBwKDQD0jdySzrjW4Ym/bw5mW9hrRupFazKxTTBUHczEPYVsQ+5EXJ9V/3s07SbEvlGTL8XNNdsEaQtk6FoI6URmRbaXSBCy1hgcByQTmhR7eju1yk4lH7ivn0qJWKkRSQTFppg+L1dCyh2XIUZF1/AmL2kyrmg1XLVqgGvb8T0u7GqmqvT/g8KuW53G00w+qivJZsylcDN3BRdSv1nexx+2wlzYJHsxofODky0I4y7FbUTlP3JEFL7NxKbmmGNGM3o3PWhynq/rfhSv6CKnYnHljMypzMNkixK4baidyP4lEJb12ZzLozTgohFmCZ/i8Hl4mmLiiNv0gSirWiOuupd2f9Zgz7fg//2HoRnnDw6sYFjy0RJwm8rvw03ZoanAG3motEThhe7vCDgcG1qI3kk1hHbXOBxV9GXADgiN+MSbBc3me+U4chiyeQ8TWPbYXDfgRPC4Qxg/HIuGHXYs1tLWlu7fY48I45Q9+1M05/zO5zwnhgWmzSpdeW35L/gd+RFKckYzVtcOUWzhP8qY1c0fq7r5+fftNZIr/jXb7pZORzocxnu/m9BXu3ZpBWic/GORiZ1NRoLzo6zB+BSWjCINcqRB8vrvkzaTROKKlzeVfSqKAOu7incrFsL6t2fB2fM+UGE68pbVP8QcTmPxSHqZAgwLm8pbK7dqmp3c0toiggpBZkx+qWJMzH+MroocbIQpOCZ0dBoo8rMEJYwyUVKCriqeNN6qL6RHnrIoEmXa317r/Ffn4UY1amqLGmFTGtp+Dhgn3WB4KYqzCxv1ApSbvdnscsq3O4+ShPg3/8cicIMxBUH4mXqH028pK/QhHY2rmxZhtC+UOVTD1ZX17hcJ0/toyUIjRfDVYUeqJ5p4Vfzm5oC8fplTXsD/jLnOXokdu07GsxM1uMSrOEYgiYe1CM8T3BmJCC7RGdPpjnnNsQlFos0b09kZZCJr6xiEYvQ6XA7G/rnMT74bBXzyCR3YKVMPw6L+v+HbVbXzKtYVVWUJjEmpGR0/WVzzyQR3UbHKkX5/G8WZtIlLI0749uAlLwsa+P+XYLTCuWpDKawbZFI18pJZSSPlN3e4kb3h1yjHx5VitwWNEWuUZ4LTeKrg3dWxQKfw/Wo+m8OmsQkvin4PwXbCP2lUbdoAAAAAElFTkSuQmCC",im="/Big-lapa/assets/First_green_rectangle.95519e92.svg",om="/Big-lapa/assets/Second_green_rectangle.572f60f1.svg";const sm=x.section`
  scroll-margin-top: 96px;
  background-image: url(${im}), url(${om});
  background-repeat: no-repeat;
  background-position: left top, right bottom;

  @media (max-width: 1279px) {
    background-position: -50px top, right bottom;
  }

  @media (max-width: 767px) {
    background-position: -150px top, right bottom;
  }
`,lm=x(ee)`
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
`,am=x.div`
  z-index: 2;
`,cm=x(ce)`
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 60px;
  }
  @media (max-width: 767px) {
    gap: 40px;
  }
`,Es=x.div`
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
`,Ss=x.div`
  text-align: center;
`,dm=x.div`
  display: grid;
  grid-gap: 20px 40px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;

  label:last-child {
    grid-column: span 2;
  }
`,ks=x.label`
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

    &:checked + span,
    &:checked + input[type='number'] {
      background-color: ${({theme:e})=>e.colors.lightGreen};
      z-index: 1;
    }
  }

  input[type='number'] {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    width: 100%;
    height: 100%;
    padding: 15px 37px;
    background-color: transparent;
    display: block;
    text-align: center;

    &:hover {
      background-color: ${({theme:e})=>e.colors.lightGreen};
    }

    &::placeholder {
      color: ${({theme:e})=>e.colors.dark};
    }

    &:focus {
      background-color: ${({theme:e})=>e.colors.lightGreen};
      &::placeholder {
        color: transparent;
      }
    }
  }
`,pm=x(pe)`
  max-width: 194px;
  @media (max-width: 500px) {
    max-width: 100%;
    width: 100%;
  }
`,fm=x.div`
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

    ${ce} {
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
`,hm=x.img`
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
`;function mm(){const[e,t]=p.exports.useState(0),[n,r]=p.exports.useState(!1),u=[20,50,100,200],i=l=>{t(+l.target.value),r(!1)},o=l=>{t(+l.target.value),r(!0)};function s(l,c){const d=window.$ipsp.get("button");d.setMerchantId(1397120),d.setAmount(l,"UAH"),d.setResponseUrl("http://example.com/result/"),d.setHost("pay.fondy.eu"),d.addField({label:"\u041F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u043E\u043F\u043B\u0430\u0442\u0438",name:"order_desc",value:c}),window.location.href=d.getUrl()}return E(ce,{$direction:"column",$align:"center",$gap:"35px",children:[E(dm,{children:[u.map(l=>E(ks,{children:[a("input",{type:"radio",name:"radio",value:l,onChange:i}),a("span",{children:E("span",{children:[l," \u0433\u0440\u043D"]})})]},l)),E(ks,{children:[a("input",{type:"radio",name:"radio",value:e,checked:n}),a("input",{type:"number",placeholder:"\u0406\u043D\u0448\u0430 \u0441\u0443\u043C\u0430, UAH",onKeyDown:l=>["e","E","+","-"].includes(l.key)&&l.preventDefault(),onChange:o,onClick:()=>r(!0)})]})]}),a(pm,{onClick:()=>{s(e,"\u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u043F\u0435\u0441\u0438\u043A\u0430\u043C")},children:"\u0417\u0440\u043E\u0431\u0438\u0442\u0438 \u0432\u043D\u0435\u0441\u043E\u043A"})]})}function Cm(){return a(sm,{id:"donation",children:E(lm,{children:[a(am,{children:E(ce,{$direction:"column",$align:"center",children:[a(Be,{children:"\u0411\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u0439 \u0434\u043E\u043D\u0430\u0442"}),E(cm,{$gap:"24px",$width:"100%",children:[a(Es,{children:E(ce,{$direction:"column",$align:"center",$gap:"35px",children:[E(Ss,{children:[a(le,{children:"\u0420\u0430\u0437\u043E\u0432\u0438\u0439 \u0432\u043D\u0435\u0441\u043E\u043A"}),E("span",{children:["\u041D\u0430\u0433\u043E\u0434\u0443\u0439 \u043F\u0441\u0430 \u0432\u0436\u0435 \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456 \u2013",a("br",{})," \u0442\u0432\u043E\u044F \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u0432\u0430\u0436\u043B\u0438\u0432\u0430!"]})]}),a(mm,{})]})}),a(Es,{children:E(ce,{$direction:"column",$align:"center",$gap:"35px",children:[E(Ss,{children:[a(le,{children:"\u041D\u0435\u0433\u0440\u043E\u0448\u043E\u0432\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430"}),E("p",{children:["\u0406\u0441\u043D\u0443\u0454 \u0431\u0430\u0433\u0430\u0442\u043E \u0441\u043F\u043E\u0441\u043E\u0431\u0456\u0432 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0438 \u2013 \u043E\u0431\u0435\u0440\u0456\u0442\u044C \u0441\u0432\u0456\u0439!",a("br",{})," \u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u0432\u0443\u043B\u0438\u0447\u043D\u0438\u043C \u0441\u043E\u0431\u0430\u043A\u0430\u043C \u043D\u0435 \u043E\u0431\u043C\u0435\u0436\u0443\u0454\u0442\u044C\u0441\u044F \u043B\u0438\u0448\u0435 \u0444\u0456\u043D\u0430\u043D\u0441\u0430\u043C\u0438. \u041C\u0438 \u043F\u043E\u0441\u0442\u0456\u0439\u043D\u043E \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u0454\u043C\u043E \u043A\u043E\u0440\u043C\u0456\u0432, \u043C\u0435\u0434\u0438\u043A\u0430\u043C\u0435\u043D\u0442\u0456\u0432, \u0440\u043E\u0437\u043F\u043E\u0432\u0441\u044E\u0434\u0436\u0435\u043D\u043D\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u0442\u043E\u0449\u043E."]})]}),a(fm,{children:E(ce,{$justify:"space-between",$align:"flex-start",children:[E("div",{children:[a("p",{children:"\u041D\u0430\u0448\u0435 \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043F\u043E\u0441\u0438\u043B\u043E\u043A:"}),E("p",{children:["\u0412\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F \u2116 19, \u043C. \u041A\u0440\u0438\u0432\u0438\u0439 \u0420\u0456\u0433, \u041C\u0443\u0441\u043E\u0440\u0433\u0441\u043A\u043E\u0433\u043E 3",a("br",{})," \u041F\u0440\u0438\u0442\u0443\u043B\u043E\u043A \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D \u201C\u0411\u0456\u0433 \u041B\u0430\u043F\u0430\u201D"]})]}),a("img",{src:um,alt:"nova poshta logo"})]})})]})})]})]})}),a(hm,{src:rm})]})})}var gm="/Big-lapa/assets/main_photo.2d061ceb.png";const ym=e=>p.exports.createElement("svg",{width:130,height:17,viewBox:"0 0 130 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("rect",{width:17,height:17,rx:8.5,fill:"#F9F9F9"}),p.exports.createElement("line",{x1:28,y1:8,x2:45,y2:8,stroke:"#F9F9F9"}),p.exports.createElement("rect",{x:56.5,y:.5,width:16,height:16,rx:8,stroke:"#F9F9F9"}),p.exports.createElement("line",{x1:84,y1:8,x2:101,y2:8,stroke:"#F9F9F9"}),p.exports.createElement("rect",{x:112.5,y:.5,width:17,height:16,rx:8,stroke:"#F9F9F9"})),xm=x.div`
  height: calc(100vh - 96px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${O.colors.background};
  background-color: ${O.colors.green};
`,vm=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2vh;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`,wm=x.div`
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
`,Em=x.div`
  flex: 0 1 50%;
  aspect-ratio: 1/1;
  max-height: 70vh;
  background: ${O.colors.yellow} url(${gm}) bottom no-repeat;
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
`,Sm=x(ym)`
  position: absolute;
  bottom: 0;
  z-index: 1;
  @media screen and (max-width: 767px) {
    left: 50%;
    bottom: 14px;
    transform: translate(-50%);
  }
`;function km(){return a(xm,{children:a(ee,{children:E(vm,{children:[E(wm,{children:[a(Gu,{children:"\u041F\u043E\u0434\u0430\u0440\u0443\u0439 \u0434\u0440\u0443\u0433\u0443 \u0448\u0430\u043D\u0441, \u0432\u0440\u044F\u0442\u0443\u0439 \u0442\u0432\u0430\u0440\u0438\u043D\u0443!"}),a("p",{children:"\u0414\u043E\u043F\u043E\u043C\u043E\u0436\u0438 \u0434\u043E\u043C\u0430\u0448\u043D\u0456\u043C \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0441\u044F \u0434\u043E\u0434\u043E\u043C\u0443. \u041C\u0438 \u0440\u043E\u0437\u0434\u0456\u043B\u044F\u0454\u043C\u043E \u0449\u0430\u0441\u0442\u044F, \u043E\u0431'\u0454\u0434\u043D\u0443\u044E\u0447\u0438 \u0442\u0432\u0430\u0440\u0438\u043D \u0442\u0430 \u0457\u0445 \u0433\u043E\u0441\u043F\u043E\u0434\u0430\u0440\u0456\u0432."})]}),a(Em,{}),a(Sm,{})]})})})}const Fm=x.div`
  color: ${({theme:e})=>e.colors.dark};
  margin-top: ${({theme:e})=>e.headerHeight};
`,Dm=x.div`
  display: grid;
  /* grid-template-rows: repeat(3, calc(100vh - 100px)); */
  grid-template-areas: 'main' 'dontation' 'shelterBlock';
`;var bm="/Big-lapa/assets/shelter-events.09b51187.png";const Tn=x.input`
  width: ${({width:e})=>e||"80%"};
  padding: ${({theme:e})=>e.paddings.input};
  background-color: ${({theme:e})=>e.colors.background};
  caret-color: ${({theme:e})=>e.colors.yellow};
  color: ${({theme:e})=>e.colors.dark};
  ${({withSvg:e})=>!e&&I4`
      padding: ${({theme:t})=>t.paddings.input};
      outline: 1px solid ${({theme:t})=>t.colors.yellow};
      border-radius: 4px;
      &:focus {
        outline: 2px solid ${({theme:t})=>t.colors.yellow};
      }
    `}
`,Lm=x.section`
  background-image: url(${bm});
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
`,Pm=x(ee)`
  @media (max-width: 1279px) {
    padding: 0 72px;
  }
  @media (max-width: 767px) {
    padding: 0 16px;
  }
`,Am=x(Be)`
  text-align: center;
  margin-bottom: 30px;
`,Bm=x.p`
  text-align: center;
  margin-bottom: 29px;
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  @media (max-width: 1279px) {
    margin-bottom: 16px;
  }
`,Rm=x.p`
  text-align: center;
  margin-bottom: 40px;
  @media (max-width: 767px) {
    margin-bottom: 28px;
  }
`,Om=x(Tn)`
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
`,Mm=x(pe)`
  @media (max-width: 767px) {
    width: 100%;
    max-width: 361px;
  }
`,$m=x.form`
  display: flex;
  justify-content: center;
  gap: 40px;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;function Tm(){return a(Lm,{children:E(Pm,{children:[a(Am,{children:"\u041F\u043E\u0434\u0456\u0457 \u043F\u0440\u0438\u0442\u0443\u043B\u043A\u0443"}),a(Bm,{children:"\u0421\u0442\u0435\u0436\u0442\u0435 \u0437\u0430 \u043E\u0441\u0442\u0430\u043D\u043D\u0456\u043C\u0438 \u043F\u043E\u0434\u0456\u044F\u043C\u0438 \u043F\u0440\u0438\u0442\u0443\u043B\u043A\u0443"}),a(Rm,{children:"\u0417\u0430\u043B\u0438\u0448\u0442\u0435 \u0441\u0432\u0456\u0439 email \u0456 \u043C\u0438 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u0438\u043C\u043E \u0432\u0430\u043C \u043F\u0440\u043E \u043D\u043E\u0432\u0438\u043D\u0438 \u043F\u0440\u0438\u0442\u0443\u043B\u043A\u0443"}),E($m,{children:[a(Om,{type:"email",placeholder:"email@gmail.com"}),a(Mm,{children:"\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438"})]})]})})}var Nm="/Big-lapa/assets/dog1.fb33c49d.png",Im="/Big-lapa/assets/dog2.b642c612.png",zm="/Big-lapa/assets/dog3.28c40050.png",_m="/Big-lapa/assets/dog4.7f8b8c96.png",Fs="/Big-lapa/assets/rectangle2.c1bba7be.png";const Hm=x.section`
  padding: 120px 0;

  @media (max-width: 767px) {
    padding: 80px 0;
  }
`,jm=x(ee)`
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
`,Um=x.div`
  background-image: url(${Fs}), url(${Fs});
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
`,pr=x.img`
  width: 100%;
`,Vm=x.div`
  flex: 0 0 60%;
  max-width: 624px;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`,Wm=x(Be)`
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 767px) {
    margin-bottom: 25px;
  }
`,z1=x.p`
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`;function Zm(){return a(Hm,{children:E(jm,{children:[E(Um,{children:[E("div",{children:[a(pr,{src:Nm,alt:"dog1"}),a(pr,{src:zm,alt:"dog3"})]}),E("div",{children:[a(pr,{src:Im,alt:"dog2"}),a(pr,{src:_m,alt:"dog4"})]})]}),E(Vm,{children:[a("li",{children:E(Wm,{children:["\u041F\u043E\u0434\u0430\u0440\u0443\u0439 \u0441\u043E\u0431\u0430\u043A\u0430\u043C \u043D\u043E\u0432\u0443 \u043D\u0430\u0434\u0456\u044E ",a("br",{})," \u043D\u0430 \u0449\u0430\u0441\u043B\u0438\u0432\u0435 \u0436\u0438\u0442\u0442\u044F!"]})}),E("li",{children:[a(z1,{children:"\u041F\u0440\u0438\u0454\u0434\u043D\u0443\u0439\u0442\u0435\u0441\u044C \u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u0441\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0438 \u043B\u044E\u0434\u0435\u0439 \u0437 \u0432\u0435\u043B\u0438\u043A\u0438\u043C \u0441\u0435\u0440\u0446\u0435\u043C, \u044F\u043A\u0456 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u044E\u0442\u044C \u0446\u0438\u043C \u0431\u0435\u0437\u0437\u0430\u0445\u0438\u0441\u043D\u0438\u043C \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C \u0437\u043D\u0430\u0439\u0442\u0438 \u0441\u0432\u043E\u0457\u0445 \u0432\u0456\u0440\u043D\u0438\u0445 \u0434\u0440\u0443\u0437\u0456\u0432. \u041D\u0430\u0448 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u0434\u043B\u044F \u0437\u0431\u043E\u0440\u0443 \u043F\u043E\u0436\u0435\u0440\u0442\u0432 \u0454 \u0437\u0432`\u044F\u0437\u043A\u043E\u043C \u043C\u0456\u0436 \u0432\u0430\u043C\u0438 \u0442\u0430 \u0446\u0438\u043C\u0438 \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C\u0438, \u044F\u043A\u0456 \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u044E\u0442\u044C \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0438. \u0420\u0430\u0437\u043E\u043C \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0437\u043C\u0456\u043D\u0438\u0442\u0438 \u0457\u0445\u043D\u0454 \u0436\u0438\u0442\u0442\u044F \u043D\u0430 \u043A\u0440\u0430\u0449\u0435"}),a(z1,{children:"\u041A\u043E\u0436\u0435\u043D \u0432\u0430\u0448 \u0432\u043A\u043B\u0430\u0434 \u043C\u0430\u0454 \u0432\u0435\u043B\u0438\u043A\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043F\u043E\u043B\u0456\u043F\u0448\u0435\u043D\u043D\u044F \u0457\u0445\u043D\u044C\u043E\u0433\u043E \u0434\u043E\u0431\u0440\u043E\u0431\u0443\u0442\u0443. \u0412\u0430\u0448\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454 \u043D\u0430\u043C \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0443\u0432\u0430\u0442\u0438 \u0431\u0435\u0437\u043F\u0435\u0440\u0435\u0431\u0456\u0439\u043D\u0443 \u043C\u0435\u0434\u0438\u0447\u043D\u0443 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443, \u043D\u0430\u043B\u0435\u0436\u043D\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F, \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u0439 \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A \u0442\u0430 \u0432\u0441\u0435\u0431\u0456\u0447\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434 \u0434\u043B\u044F \u0441\u043E\u0431\u0430\u043A"}),a(z1,{children:"\u0412\u0430\u0448\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u043C\u0430\u0454 \u0432\u0435\u043B\u0438\u043A\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u0436\u0438\u0442\u0442\u044F \u0446\u0438\u0445 \u0442\u0432\u0430\u0440\u0438\u043D. \u041A\u043E\u0436\u0435\u043D \u0432\u0430\u0448 \u0432\u043D\u0435\u0441\u043E\u043A \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454 \u043D\u0430\u043C \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0441\u043E\u0431\u0430\u043A\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0443 \u043C\u0435\u0434\u0438\u0447\u043D\u0443 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443, \u043D\u0430\u043B\u0435\u0436\u043D\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F, \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0435 \u043C\u0456\u0441\u0446\u0435 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F \u0456 \u043D\u0430\u043B\u0435\u0436\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434."})]})]})]})})}var Qm="/Big-lapa/assets/pic1.3bb1a2e6.png",qm="/Big-lapa/assets/pic2.6ca94d6e.png";const Km=x.section`
  @media (max-width: 767px) {
    padding-bottom: 80px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-bottom: 100px;
  }
  @media (min-width: 1280px) {
    padding-bottom: 120px;
  }
`,Gm=x(Be)`
  text-align: center;
  margin-bottom: 60px;
`,Ym=x.div`
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
`,Ds=x.div`
  text-align: center;
  flex: 0 1 43%;
  @media (max-width: 1024px) {
    width: 75%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`,bs=x.img`
  border-radius: 4px 4px 0 0;
  width: 100%;
`,Ls=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.green};
  height: 33%;
  padding: 24px 0;
  border-radius: 0 0 4px 4px;
`,Ps=x(le)`
  text-align: center;
  margin-bottom: 16px;
  color: ${({theme:e})=>e.colors.background};
  @media (max-width: 767px) {
    margin-bottom: 8px;
  }
`,As=x.p`
  color: ${({theme:e})=>e.colors.background};
  max-width: 440px;
`;function Xm(){return a(Km,{children:E(ee,{children:[a(Gm,{children:"\u042F\u043A \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A "}),E(Ym,{children:[E(Ds,{children:[a(bs,{src:Qm,alt:"bowl with dog food"}),E(Ls,{children:[a(Ps,{children:"\u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430"}),a(As,{children:"\u041E\u0434\u0438\u043D \u043A\u043B\u0456\u043A - \u043E\u0434\u043D\u0430 \u043F\u043E\u0440\u0446\u0456\u044F \u043A\u043E\u0440\u043C\u0443"})]})]}),E(Ds,{children:[a(bs,{src:qm,alt:"dog toys"}),E(Ls,{children:[a(Ps,{children:"\u041A\u043E\u0440\u043C, \u043B\u0456\u043A\u0438, \u0456\u0433\u0440\u0430\u0448\u043A\u0438"}),a(As,{children:"\u0417 \u0440\u0430\u0434\u0456\u0441\u0442\u044E \u043F\u0440\u0438\u0439\u043C\u0430\u0454\u043C\u043E \u043A\u043E\u0440\u043C, \u0437\u0430\u0441\u043E\u0431\u0438 \u0434\u043B\u044F \u043E\u0431\u0440\u043E\u0431\u043A\u0438, \u043B\u0456\u0436\u0430\u043A\u0438 \u0442\u0430 \u0456\u0433\u0440\u0430\u0448\u043A\u0438 \u0434\u043B\u044F \u0446\u0443\u0446\u0435\u043D\u044F\u0442"})]})]})]})]})})}const Jm=x.section`
  padding: 120px 0;

  @media (max-width: 1279px) {
    padding: 100px 0;
  }
  @media (max-width: 767px) {
    padding: 80px 0;
  }
`,eC=x(Be)`
  text-align: center;
`,tC=x(ce)`
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  column-gap: 60px;
  flex-wrap: wrap;

  img {
    max-height: 100px;
    object-fit: contain;
    vertical-align: bottom;
  }
`;function nC(){const[e,t]=p.exports.useState([]);return O0({category:"partners",state:e,setState:t}),a(Ye,{children:e.length!==0&&a(Jm,{children:E(ee,{children:[a(eC,{children:"\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u0438"}),a(tC,{children:e.map(n=>{var r;return a("img",{src:(r=n==null?void 0:n.encodedBase64)!=null?r:n.src,alt:"partner"},n.id)})})]})})})}function rC(){return a(Fm,{"data-testid":"home-page",children:E(Dm,{children:[a(km,{}),a(Zm,{}),a(Xm,{}),a(Cm,{}),a(Tm,{}),a(nC,{})]})})}var uC="/Big-lapa/assets/dogM2x.b4dcdf99.png";const Bs=e=>p.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M21.9999 16.9201V19.9201C22.0011 20.1986 21.944 20.4743 21.8324 20.7294C21.7209 20.9846 21.5572 21.2137 21.352 21.402C21.1468 21.5902 20.9045 21.7336 20.6407 21.8228C20.3769 21.912 20.0973 21.9452 19.8199 21.9201C16.7428 21.5857 13.7869 20.5342 11.1899 18.8501C8.77376 17.3148 6.72527 15.2663 5.18993 12.8501C3.49991 10.2413 2.44818 7.27109 2.11993 4.1801C2.09494 3.90356 2.12781 3.62486 2.21643 3.36172C2.30506 3.09859 2.4475 2.85679 2.6347 2.65172C2.82189 2.44665 3.04974 2.28281 3.30372 2.17062C3.55771 2.05843 3.83227 2.00036 4.10993 2.0001H7.10993C7.59524 1.99532 8.06572 2.16718 8.43369 2.48363C8.80166 2.80008 9.04201 3.23954 9.10993 3.7201C9.23656 4.68016 9.47138 5.62282 9.80993 6.5301C9.94448 6.88802 9.9736 7.27701 9.89384 7.65098C9.81408 8.02494 9.6288 8.36821 9.35993 8.6401L8.08993 9.9101C9.51349 12.4136 11.5864 14.4865 14.0899 15.9101L15.3599 14.6401C15.6318 14.3712 15.9751 14.1859 16.3491 14.1062C16.723 14.0264 17.112 14.0556 17.4699 14.1901C18.3772 14.5286 19.3199 14.7635 20.2799 14.8901C20.7657 14.9586 21.2093 15.2033 21.5265 15.5776C21.8436 15.9519 22.0121 16.4297 21.9999 16.9201Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),iC=e=>p.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),p.exports.createElement("path",{d:"M22 6L12 13L2 6",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),oC=e=>p.exports.createElement("svg",{width:26,height:44,viewBox:"0 0 26 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M24 2H18C15.3478 2 12.8043 3.05357 10.9289 4.92893C9.05357 6.8043 8 9.34784 8 12V18H2V26H8V42H16V26H22L24 18H16V12C16 11.4696 16.2107 10.9609 16.5858 10.5858C16.9609 10.2107 17.4696 10 18 10H24V2Z",stroke:"#2E2E2E",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})),sC=e=>p.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M11.6 0H28.4C34.8 0 40 5.2 40 11.6V28.4C40 31.4765 38.7779 34.427 36.6024 36.6024C34.427 38.7779 31.4765 40 28.4 40H11.6C5.2 40 0 34.8 0 28.4V11.6C0 8.52349 1.22214 5.57298 3.39756 3.39756C5.57298 1.22214 8.52349 0 11.6 0ZM11.2 4C9.29044 4 7.45909 4.75857 6.10883 6.10883C4.75857 7.45909 4 9.29044 4 11.2V28.8C4 32.78 7.22 36 11.2 36H28.8C30.7096 36 32.5409 35.2414 33.8912 33.8912C35.2414 32.5409 36 30.7096 36 28.8V11.2C36 7.22 32.78 4 28.8 4H11.2ZM30.5 7C31.163 7 31.7989 7.26339 32.2678 7.73223C32.7366 8.20107 33 8.83696 33 9.5C33 10.163 32.7366 10.7989 32.2678 11.2678C31.7989 11.7366 31.163 12 30.5 12C29.837 12 29.2011 11.7366 28.7322 11.2678C28.2634 10.7989 28 10.163 28 9.5C28 8.83696 28.2634 8.20107 28.7322 7.73223C29.2011 7.26339 29.837 7 30.5 7ZM20 10C22.6522 10 25.1957 11.0536 27.0711 12.9289C28.9464 14.8043 30 17.3478 30 20C30 22.6522 28.9464 25.1957 27.0711 27.0711C25.1957 28.9464 22.6522 30 20 30C17.3478 30 14.8043 28.9464 12.9289 27.0711C11.0536 25.1957 10 22.6522 10 20C10 17.3478 11.0536 14.8043 12.9289 12.9289C14.8043 11.0536 17.3478 10 20 10ZM20 14C18.4087 14 16.8826 14.6321 15.7574 15.7574C14.6321 16.8826 14 18.4087 14 20C14 21.5913 14.6321 23.1174 15.7574 24.2426C16.8826 25.3679 18.4087 26 20 26C21.5913 26 23.1174 25.3679 24.2426 24.2426C25.3679 23.1174 26 21.5913 26 20C26 18.4087 25.3679 16.8826 24.2426 15.7574C23.1174 14.6321 21.5913 14 20 14Z",fill:"#2E2E2E"})),lC=x.section`
  margin-bottom: 80px;
  @media (min-width: 767px) {
    margin-bottom: 100px;
  }
  @media (min-width: 1279px) {
    margin-bottom: 80px;
  }
`,aC=x(Be)`
  text-align: center;
  margin-bottom: 60px;
`,cC=x.img`
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
`,dC=x.ul`
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
`,fr=x.li`
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
`,pC=x.div`
  display: flex;
  gap: 20px;
  margin-left: 14px;
  @media (min-width: 767px) {
    margin-left: 32px;
  }
  @media (min-width: 1279px) {
    margin-left: 32px;
  }
`,fC=x(oC)`
  &:hover path {
    stroke: ${({theme:e})=>e.colors.yellow};
  }
`,hC=x(sC)`
  &:hover path {
    fill: ${({theme:e})=>e.colors.yellow};
  }
`,mC=x.div`
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
`,CC=x.div`
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
`,gC=x.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 40px 0 44px;
`,yC=x.div`
  display: flex;
  flex-direction: column;
  gap: 61px;
  @media (min-width: 1279px) {
    flex-direction: row;
    gap: 24px;
  }
`,Rs=x(Tn)`
  width: 100%;
`,xC=x.textarea`
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
`,vC=x(pe)`
  width: 100%;
`;function wC(){const[e,t]=p.exports.useState({email:"",first_phoneNumber:"",second_phoneNumber:""});return O0({category:"contacts",state:e,setState:t}),a(lC,{children:E(ee,{children:[a(aC,{children:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"}),E(yC,{children:[E(mC,{children:[a(cC,{src:uC,alt:"cute dog"}),E(dC,{children:[E(fr,{children:[a(Bs,{}),a("a",{href:`tel:${e==null?void 0:e.first_phoneNumber}`,children:e==null?void 0:e.first_phoneNumber})]}),E(fr,{children:[a(Bs,{}),a("a",{href:`tel:${e==null?void 0:e.second_phoneNumber}`,children:e==null?void 0:e.second_phoneNumber})]}),E(fr,{children:[a(iC,{}),a("a",{href:`mailto:${e==null?void 0:e.email}`,children:e==null?void 0:e.email})]}),E(fr,{children:[a(d8,{})," ",a("p",{children:"\u0410\u0434\u0440\u0435\u0441\u0430: \u043C\u0456\u0441\u0442\u043E \u041B\u044C\u0432\u0456\u0432, \u0432\u0443\u043B. \u0413\u043E\u0440\u043E\u0434\u043E\u0446\u044C\u043A\u0430, 397"})]})]}),E(pC,{children:[a(hC,{}),a(fC,{})]})]}),E(CC,{children:[a(Be,{$marginBottom:"24px",children:"\u0417\u0432`\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043D\u0430\u043C\u0438"}),a("p",{children:"\u042F\u043A\u0449\u043E \u0437\u0430\u043B\u0438\u0448\u0438\u043B\u0438\u0441\u044F \u043F\u0438\u0442\u0430\u043D\u043D\u044F, \u043D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u043D\u0430\u043C"}),E("form",{children:[E(gC,{children:[a(Rs,{className:"name",placeholder:"\u0406\u043C\u2019\u044F"}),a(Rs,{type:"email",className:"email",placeholder:"\u041F\u043E\u0448\u0442\u0430"}),a(xC,{name:"questions",placeholder:"\u041F\u0438\u0442\u0430\u043D\u043D\u044F"})]}),a(vC,{type:"submit",children:"\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438"})]})]})]})]})})}var EC="/Big-lapa/assets/lapasS.0d643802.png",SC="/Big-lapa/assets/lapaM12x.a8af177e.png",kC="/Big-lapa/assets/lapaM22x.963d85d6.png",FC="/Big-lapa/assets/lapaL12x.af319c02.png",DC="/Big-lapa/assets/lapaL22x.ce776028.png",bC="/Big-lapa/assets/lapaXL12x.cdb594b4.png",LC="/Big-lapa/assets/lapaXL22x.b91ba78e.png";const PC=x.section`
  background-image: url(${EC});
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: contain;
  background-color: ${O.colors.green};
  color: ${O.colors.background};
  margin-bottom: 80px;
  padding-bottom: 18px;

  @media (min-width: 767px) {
    background-image: url(${SC}), url(${kC});
    background-repeat: no-repeat;
    background-position: 10% 0, 90% 100%;
    background-size: 60%;
    margin-bottom: 100px;
    padding-bottom: 32px;
  }
  @media (min-width: 1279px) {
    background-image: url(${FC}), url(${DC});
    background-repeat: no-repeat;
    background-position: 10% 0, 90% 100%;
    background-size: 60%;
    margin-bottom: 120px;
    padding-bottom: 52px;
  }
  @media (min-width: 1439px) {
    background-image: url(${bC}), url(${LC});
    background-repeat: no-repeat;
    background-position: 0 0, 100% 100%;
    background-size: 60%;
    margin-bottom: 120px;
    padding-bottom: 44px;
  }
`,AC=x(Gu)`
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
`,BC=x.div`
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
`,RC=x(dt)`
  text-align: center;
  padding: 15px 24px;
  border: 1px solid ${O.colors.background};
  border-radius: 4px;
  width: 157px;
  &:hover {
    border: 2px solid ${O.colors.background};
  }
  &:focus {
    border: 3px solid ${O.colors.background};
  }
`,OC=e=>p.exports.createElement("svg",{width:130,height:17,viewBox:"0 0 130 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("rect",{x:.5,y:.5,width:16,height:16,rx:8,stroke:"#F9F9F9"}),p.exports.createElement("line",{x1:28,y1:8,x2:45,y2:8,stroke:"#F9F9F9"}),p.exports.createElement("rect",{x:56.5,y:.5,width:17,height:16,rx:8,stroke:"#F9F9F9"}),p.exports.createElement("line",{x1:85,y1:8,x2:102,y2:8,stroke:"#F9F9F9"}),p.exports.createElement("rect",{x:113,width:17,height:17,rx:8.5,fill:"#F9F9F9"}));function MC(){return a(PC,{children:E(ee,{children:[E(AC,{children:["\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0439 \u0434\u0440\u0443\u0433\u0430,",a("br",{})," \u0432\u0440\u044F\u0442\u0443\u0439 \u0442\u0432\u0430\u0440\u0438\u043D\u0443!"]}),E(BC,{children:[a(OC,{}),a(RC,{to:".",end:!0,children:"\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"})]})]})})}const $C=x.div`
  color: ${({theme:e})=>e.colors.dark};
  margin-top: ${({theme:e})=>e.headerHeight};
`,TC=x.div`
  display: grid;
  /* grid-template-rows: repeat(3, calc(100vh - 100px)); */
  grid-template-areas: 'main' 'dontation' 'shelterBlock';
`;function NC(){return a($C,{"data-testid":"contacts-page",children:E(TC,{children:[a(MC,{}),a(wC,{})]})})}const IC=x.section`
  color: ${O.colors.dark};
  margin-top: ${O.headerHeight};
  padding-top: 24px;
  padding-bottom: 48px;

  @media (max-width: 1279px) {
    background-color: rgb(181, 194, 104, 50%);
    padding-top: 50px;
  }

  @media (max-width: 767px) {
    padding-top: 25px;
  }
`,zC=x.div`
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
`,_C=x(ce)`
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
`,HC=x.div`
  flex: 1;
`,jC=x.div`
  flex: 1.2;
  max-width: 560px;

  @media (max-width: 1279px) {
    max-width: 100%;
  }
`,UC=x.div`
  display: flex;
  align-items: end;
  gap: 16px;
  margin-bottom: 30px;
  line-height: 1;
  h2,
  h3 {
    margin: 0;
  }
`,VC=x(ce)`
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    margin-bottom: 0px;
  }
`,WC=x.p`
  font-size: ${O.fontSizes.subheadline};
  margin-bottom: 8px;

  @media (max-width: 767px) {
    font-size: ${O.fontSizes.mobileSubheadline};
  }
`,ZC=x.div`
  font-weight: ${O.fontWeights.semiBold};
  padding: 8px 16px;
  background-color: ${O.colors.background};
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
`,QC=x.div`
  p {
    white-space: pre-line;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`,qC=x.div`
  display: none;
  p {
    white-space: pre-line;
  }
  @media (max-width: 1024px) {
    display: block;
  }
`;function hr({text:e,value:t,children:n}){return E("div",{children:[a(WC,{children:e}),E(ZC,{children:[n,t]})]})}const KC=x.img`
  cursor: pointer;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,GC=x.div`
  aspect-ratio: 1 / 1;
  min-height: 100%;

  border: ${e=>e.$isActive?"2px solid white":"1px solid transparent"};
  border-radius: 3px;
  @media (min-width: 768px) {
    min-height: 100%;
  }
`,YC=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,XC=x.div`
  overflow: hidden;
  position: relative;
  width: 290px;
  min-height: 67px;

  @media (min-width: 768px) {
    width: 456px;
    min-height: 88px;
  }
`,JC=x.div`
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
`,eg=x.div`
  position: relative;
  overflow: hidden;
  display: flex;
  gap: 16px;
  padding: 0 10px;
  max-width: 476px;
`,tg=x.div`
  display: flex;
  justify-content: center;
  height: 455px;
  margin-bottom: 18px;
  @media (min-width: 768px) {
    height: 600px;
    width: 476px;
    margin-bottom: 24px;
  }
`,ng=x.img`
  width: 100%;

  border-radius: 4px;
  object-fit: cover;
`,rg=x.button`
  padding-left: 6px;
`,ug=x.button`
  padding-right: 6px;
`;var ig="/Big-lapa/assets/dog2.62884c98.png",Os="/Big-lapa/assets/dog3.7d00b5dd.png",og="/Big-lapa/assets/dog4.64488f8b.png",sg="/Big-lapa/assets/dog5.0e3db84d.png";const lg=e=>p.exports.createElement("svg",{width:14,height:24,viewBox:"0 0 14 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M0.310201 12.344L11.4562 22.964C11.6422 23.1413 11.8893 23.2402 12.1462 23.2402C12.4031 23.2402 12.6502 23.1413 12.8362 22.964L12.8482 22.952C12.9387 22.8661 13.0107 22.7626 13.0599 22.648C13.1092 22.5333 13.1346 22.4098 13.1346 22.285C13.1346 22.1603 13.1092 22.0368 13.0599 21.9221C13.0107 21.8074 12.9387 21.704 12.8482 21.618L2.3522 11.618L12.8482 1.62205C12.9387 1.5361 13.0107 1.43265 13.0599 1.31798C13.1092 1.20331 13.1346 1.07983 13.1346 0.955046C13.1346 0.830259 13.1092 0.706778 13.0599 0.592112C13.0107 0.477446 12.9387 0.373991 12.8482 0.288046L12.8362 0.276045C12.6502 0.0987549 12.4031 -0.000146866 12.1462 -0.000146866C11.8893 -0.000146866 11.6422 0.0987549 11.4562 0.276045L0.310201 10.896C0.212176 10.9894 0.134138 11.1018 0.0808163 11.2262C0.0274948 11.3507 0 11.4847 0 11.62C0 11.7554 0.0274948 11.8894 0.0808163 12.0139C0.134138 12.1383 0.212176 12.2507 0.310201 12.344Z",fill:"#2E2E2E"})),ag=e=>p.exports.createElement("svg",{width:14,height:24,viewBox:"0 0 14 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M13.6898 12.344L2.5438 22.964C2.35782 23.1413 2.11074 23.2402 1.8538 23.2402C1.59686 23.2402 1.34978 23.1413 1.1638 22.964L1.1518 22.952C1.06133 22.8661 0.98929 22.7626 0.940063 22.648C0.890835 22.5333 0.865449 22.4098 0.865449 22.285C0.865449 22.1603 0.890835 22.0368 0.940063 21.9221C0.98929 21.8074 1.06133 21.704 1.1518 21.618L11.6478 11.618L1.1518 1.62205C1.06133 1.5361 0.98929 1.43265 0.940063 1.31798C0.890835 1.20331 0.865449 1.07983 0.865449 0.955046C0.865449 0.830259 0.890835 0.706778 0.940063 0.592112C0.98929 0.477446 1.06133 0.373991 1.1518 0.288046L1.1638 0.276045C1.34978 0.0987549 1.59686 -0.000146866 1.8538 -0.000146866C2.11074 -0.000146866 2.35782 0.0987549 2.5438 0.276045L13.6898 10.896C13.7878 10.9894 13.8659 11.1018 13.9192 11.2262C13.9725 11.3507 14 11.4847 14 11.62C14 11.7554 13.9725 11.8894 13.9192 12.0139C13.8659 12.1383 13.7878 12.2507 13.6898 12.344Z",fill:"#2E2E2E"}));function cg({src:e}){const t=[{image:e,title:"dog 1",id:0},{image:ig,title:"dog 2",id:1},{image:Os,title:"dog 3",id:2},{image:og,title:"dog 4",id:3},{image:sg,title:"dog 5",id:4},{image:Os,title:"dog 5",id:5}],[n,r]=p.exports.useState(0),u=l=>{r(l)},i=()=>{r(n===0?t.length-1:n-1)},o=()=>{r(n===t.length-1?0:n+1)},s=t[n];return E(YC,{children:[a(tg,{children:a(ng,{src:s.image,alt:s.title})}),E(eg,{children:[a(rg,{onClick:i,children:a(lg,{})}),a(XC,{children:a(JC,{$left:n,children:t.map(({id:l,image:c,title:d},m)=>a(GC,{$isActive:n===m,children:a(KC,{src:c,onClick:()=>u(m),alt:d})},l))})}),a(ug,{onClick:o,children:a(ag,{})})]})]})}const dg=e=>p.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M30.0816 8.59172C30.0439 8.56106 29.9148 8.45645 29.7964 8.35554C28.1822 7.02139 26.0394 6.21225 23.9509 6.15057C21.7773 6.08774 19.7271 6.76087 17.9328 8.13094C17.6045 8.38372 16.7905 9.18693 16.5411 9.50462C15.7495 10.5228 15.2583 11.4562 14.8997 12.6238C14.0957 15.2363 14.4846 18.0475 15.9838 20.4603C16.1831 20.7787 16.5573 21.2998 16.6669 21.4095L16.7137 21.4562L15.0772 23.0927L13.4408 24.7291L12.1229 23.4043L10.8068 22.0777L10.1645 22.72L9.52037 23.3641L10.8417 24.6854L12.1631 26.0068L10.1241 28.0458L8.08507 30.0848L8.75024 30.75L9.41542 31.4152L11.4544 29.3762L13.4934 27.3372L14.8148 28.6585L16.1362 29.9799L16.7803 29.3358L17.4226 28.6935L16.096 27.3773L14.7711 26.0595L16.4076 24.423L18.044 22.7866L18.0908 22.8333C18.2004 22.943 18.7216 23.3171 19.04 23.5165C21.4528 25.0156 24.2639 25.4045 26.8764 24.6006C28.044 24.242 28.9775 23.7507 29.9956 22.9591C30.3133 22.7098 31.1165 21.8958 31.3693 21.5675C32.0962 20.6141 32.5701 19.7123 32.9139 18.6315C33.8703 15.6219 33.2469 12.3801 31.2132 9.78638C31.0328 9.55693 30.2393 8.71799 30.0816 8.59172ZM29.7592 10.8737C30.5925 11.91 31.1553 13.1414 31.3963 14.4501C31.7329 16.2708 31.3525 18.1937 30.3365 19.8066C29.2284 21.5618 27.352 22.7623 25.1996 23.0953C24.7978 23.1555 24.2165 23.1868 23.8154 23.1672C21.2082 23.0454 18.8178 21.6316 17.4828 19.425C16.302 17.4741 16.0128 15.2177 16.6785 13.139C17.4207 10.8183 19.0884 9.12904 21.3893 8.36704C23.5224 7.66132 25.8214 7.94399 27.7922 9.15522C28.2161 9.41808 28.4328 9.57885 28.9477 10.0132C29.0841 10.1285 29.5986 10.6746 29.7592 10.8737Z",fill:"#2E2E2E",stroke:"#2E2E2E"})),pg=e=>p.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M32.7041 7.0232C32.617 7.03164 32.1199 7.08439 31.5994 7.13502C31.0789 7.18776 30.2716 7.27004 29.8043 7.31645C29.3369 7.36287 28.0028 7.49789 26.8407 7.61392C25.6786 7.72996 24.3658 7.86076 23.9239 7.90506C23.4841 7.94936 23.1187 7.98945 23.1145 7.99367C23.1038 8.00844 23.3035 9.92826 23.3184 9.94303C23.3269 9.95147 23.5797 9.93248 23.8814 9.90295C24.1831 9.87341 25.5193 9.73839 26.8513 9.60548C28.1833 9.47257 29.5069 9.33966 29.7915 9.31223C30.0783 9.2827 30.3141 9.2616 30.3184 9.26371C30.3205 9.26793 29.6853 9.91139 28.9056 10.6962C24.7821 14.846 23.7284 15.9029 23.7114 15.9029C23.7029 15.9029 23.5818 15.8186 23.4459 15.7173C22.1457 14.7405 20.6225 14.0844 18.991 13.7932C18.0329 13.6245 16.8963 13.6013 15.9318 13.7299C13.6693 14.0359 11.5767 15.0591 10.0047 16.6287C8.9637 17.6688 8.20316 18.8439 7.6678 20.2384C7.15369 21.5823 6.92851 23.0506 7.01986 24.4367C7.2323 27.6266 8.93396 30.5654 11.5597 32.2806C11.9485 32.5337 12.127 32.6392 12.5115 32.8354C14.57 33.8945 16.8517 34.2405 19.0738 33.8354C20.7351 33.5316 22.3688 32.7932 23.6647 31.7595C24.3211 31.2362 24.865 30.6856 25.3664 30.0379C26.522 28.5422 27.2273 26.7911 27.4483 24.8692C27.4929 24.4704 27.512 23.5422 27.4802 23.1498C27.3697 21.7384 27.0192 20.4789 26.3988 19.2468C26.129 18.7088 25.6956 18.0253 25.3324 17.5612L25.1348 17.3122L25.4726 16.9726C25.6595 16.7848 26.1928 16.2468 26.6623 15.7764C27.5524 14.8818 30.8027 11.6118 31.4061 11.0042C31.5994 10.8101 31.7566 10.6519 31.7587 10.6561C31.7609 10.6582 31.7502 10.789 31.7354 10.9451C31.7205 11.1013 31.6886 11.4473 31.6653 11.7152C31.6419 11.981 31.6015 12.4156 31.5782 12.6793C31.5548 12.9451 31.5166 13.3755 31.4932 13.6392C31.353 15.2025 31.1533 17.4683 31.149 17.5485L31.1427 17.6413L32.1305 17.7299C32.6744 17.7764 33.1205 17.8143 33.1226 17.8143C33.1247 17.8122 33.1757 17.2658 33.2352 16.5991C33.2947 15.9325 33.3605 15.1772 33.3839 14.9219C33.4073 14.6667 33.454 14.1308 33.4901 13.7299C33.5241 13.3291 33.5645 12.9029 33.5751 12.7806C33.5857 12.6582 33.624 12.2321 33.6601 11.8312C33.6962 11.4304 33.7323 11.0042 33.7451 10.8818C33.7557 10.7595 33.7961 10.3333 33.83 9.93248C33.8662 9.53164 33.9193 8.94514 33.9469 8.62869C33.9873 8.20253 34 7.91561 34 7.52742V7L33.4328 7.00211C33.1184 7.00422 32.7912 7.01266 32.7041 7.0232ZM18.1943 15.6793C19.5816 15.8692 20.7755 16.308 21.8589 17.0274C23.6604 18.2236 24.9054 20.0886 25.343 22.2426C25.4641 22.8481 25.4917 23.1329 25.4917 23.8354C25.4896 24.4958 25.4683 24.7363 25.3642 25.3017C24.9776 27.3734 23.7624 29.2848 22.0778 30.4662C21.0155 31.2109 19.8322 31.6962 18.5788 31.905C18.0668 31.9894 17.8268 32.0084 17.2489 32.0084C16.4268 32.0084 15.8171 31.9261 15.0268 31.7046C11.7254 30.7763 9.41195 28.0316 9.03593 24.5949C8.97645 24.0633 9.00194 23.1962 9.09329 22.6118C9.43957 20.3987 10.6696 18.405 12.4584 17.1561C13.716 16.2785 15.099 15.7827 16.686 15.6413C16.9112 15.6223 17.9606 15.6477 18.1943 15.6793Z",fill:"#2E2E2E",stroke:"#2E2E2E"})),fg=e=>p.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M3.00252 3.57694C6.55117 3.13885 10.036 2.64571 13.5362 2.29248C17.0316 1.94041 20.5424 1.94041 24.0545 2.11243C27.6102 2.2856 31.1175 2.82347 34.633 3.31431C35.3907 3.41982 36.1567 3.47716 36.9854 3.56318V4.04943C36.9854 8.51521 37.0232 12.981 36.9771 17.4456C36.8991 24.8576 32.9828 33.5839 22.0567 36.7067C20.5354 37.1414 19.1559 37.0771 17.6794 36.6184C13.4239 35.2949 9.7842 33.1228 7.08193 29.6112C4.89151 26.7636 3.64203 23.5399 3.1822 20.0294C3.05571 19.0672 3.01434 18.0901 3.01079 17.1188C2.99306 12.7826 3.00252 8.4464 3.00252 4.10907V3.57694ZM5.74627 5.59408C5.74391 5.64798 5.73209 5.76037 5.73209 5.87276C5.73209 9.66419 5.69544 13.4568 5.74273 17.2482C5.74627 22.1065 7.47557 25.5162 8.96501 27.9658C11.211 31.6563 14.6202 32.8856 18.8083 34.0129C19.6181 34.2308 20.3687 34.2205 21.1796 34.0129C30.2179 31.6929 34.2177 25.6773 34.2523 16.8606C34.2665 13.2412 34.2546 9.62061 34.2546 6.00006C34.2546 5.83606 34.2546 5.67092 34.2546 5.58834C25.3192 4.15595 14.6652 4.15365 5.74509 5.59408H5.74627Z",fill:"#2E2E2E"}),p.exports.createElement("path",{d:"M29.3403 14.5419C29.1191 14.0197 28.7517 13.6432 28.2775 13.4536L28.2711 13.4512C28.0553 13.3672 27.8255 13.3243 27.5937 13.3246H27.5682C26.4827 13.3408 25.3745 14.2572 24.811 15.6052C24.3978 16.5909 24.3503 17.651 24.6843 18.4412C24.905 18.9637 25.2733 19.3402 25.7494 19.5298L25.7546 19.5318C25.9705 19.6157 26.2003 19.6587 26.4321 19.6585C27.5279 19.6585 28.6477 18.742 29.2215 17.3763C29.6296 16.3918 29.6746 15.3324 29.3403 14.5419ZM25.0031 20.3556C24.377 19.9819 23.7853 19.6284 23.3987 18.9934C22.3324 17.2358 21.6884 16.1748 20 16.1748C18.3116 16.1748 17.666 17.2358 16.5973 18.9934C16.2099 19.6292 15.617 19.9831 14.989 20.3584C14.2689 20.7883 13.5249 21.2325 13.2037 22.1065C13.0788 22.4216 13.0159 22.7576 13.0184 23.0962C13.0184 24.5194 14.1342 25.6773 15.505 25.6773C16.2123 25.6773 16.9651 25.4338 17.7617 25.1761C18.5276 24.9283 19.3194 24.6722 20.004 24.6722C20.6886 24.6722 21.4784 24.9283 22.2415 25.1761C23.0365 25.4323 23.7857 25.6757 24.495 25.6757C25.8638 25.6757 26.9776 24.5178 26.9776 23.0946C26.9787 22.7558 26.9145 22.4198 26.7883 22.105C26.4671 21.2301 25.7228 20.7855 25.0031 20.3556ZM15.776 14.7833C16.2502 15.3744 16.8519 15.6998 17.4704 15.6998C17.5548 15.6998 17.6391 15.6936 17.7226 15.6812C19.0125 15.4927 19.8163 13.929 19.5525 12.1183C19.4421 11.3571 19.1472 10.6481 18.7248 10.1224C18.2514 9.53251 17.6489 9.2075 17.0308 9.2075C16.9464 9.2075 16.8621 9.21372 16.7786 9.22611C15.4887 9.41454 14.6849 10.9782 14.9487 12.7889C15.0587 13.549 15.3536 14.2572 15.776 14.7833ZM22.2778 15.6812C22.3613 15.6936 22.4456 15.6998 22.53 15.6998C23.1489 15.6998 23.7502 15.3744 24.2244 14.7833C24.6464 14.2572 24.9397 13.549 25.0513 12.7881C25.3151 10.9782 24.5113 9.41454 23.2214 9.22531C23.1379 9.21293 23.0536 9.20671 22.9692 9.20671C22.3511 9.2075 21.7486 9.53251 21.2752 10.1224C20.8528 10.6481 20.5579 11.3571 20.4479 12.1191C20.1841 13.929 20.9879 15.4927 22.2778 15.6812ZM14.2454 19.5318L14.2509 19.5298C14.7263 19.3402 15.0942 18.9641 15.3145 18.442C15.6485 17.6502 15.6014 16.5913 15.189 15.6056C14.618 14.2414 13.4986 13.3246 12.4039 13.3246C12.1721 13.3242 11.9423 13.3672 11.7265 13.4512L11.7209 13.4532C11.2467 13.6412 10.8789 14.0189 10.6585 14.5411C10.3246 15.3328 10.3716 16.3918 10.7841 17.3775C11.3551 18.7416 12.4745 19.6585 13.5691 19.6585C13.8005 19.6587 14.0299 19.6157 14.2454 19.5318Z",fill:"#2E2E2E"})),hg=e=>p.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M15.5 15.5H24.5V24.5H15.5V15.5Z",fill:"#2E2E2E"}),p.exports.createElement("path",{d:"M32 11C32 9.3455 30.6545 8 29 8H26V5H23V8H17V5H14V8H11C9.3455 8 8 9.3455 8 11V14H5V17H8V23H5V26H8V29C8 30.6545 9.3455 32 11 32H14V35H17V32H23V35H26V32H29C30.6545 32 32 30.6545 32 29V26H35V23H32V17H35V14H32V11ZM11 29V11H29L29.003 29H11Z",fill:"#2E2E2E"})),mg=e=>p.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M30.1894 29.5462C30.0648 29.4141 29.9969 29.2394 30.0001 29.059C30.0033 28.8785 30.0772 28.7063 30.2064 28.5785C30.3359 28.4511 30.5104 28.3782 30.6933 28.375C30.8761 28.3719 31.0531 28.4389 31.187 28.5618L33.2763 30.6234V9.37664L31.187 11.4382C31.0531 11.5611 30.8761 11.6281 30.6933 11.625C30.5104 11.6218 30.3359 11.5489 30.2064 11.4215C30.0772 11.2937 30.0033 11.1215 30.0001 10.941C29.9969 10.7606 30.0648 10.5859 30.1894 10.4538L33.4833 7.20368C33.6156 7.07326 33.795 7 33.9821 7C34.1691 7 34.3485 7.07326 34.4809 7.20368L37.7748 10.4538C37.8677 10.539 37.9356 10.6472 37.9714 10.7673C38.0071 10.8873 38.0094 11.0146 37.978 11.1358C37.9466 11.257 37.8827 11.3676 37.7929 11.456C37.7031 11.5443 37.5909 11.6071 37.468 11.6378C37.3453 11.6689 37.2163 11.6667 37.0948 11.6316C36.9732 11.5964 36.8635 11.5296 36.7772 11.4382L34.6879 9.37664V30.6234L36.7772 28.5618C36.8635 28.4702 36.9732 28.4031 37.0948 28.3678C37.2165 28.3325 37.3455 28.3303 37.4683 28.3613C37.5912 28.3922 37.7033 28.4554 37.7928 28.5439C37.8823 28.6325 37.946 28.7433 37.9771 28.8646C38.0085 28.9856 38.0063 29.1128 37.9707 29.2328C37.9351 29.3527 37.8674 29.461 37.7748 29.5462L34.4809 32.7963C34.3485 32.9267 34.1691 33 33.9821 33C33.795 33 33.6156 32.9267 33.4833 32.7963L30.1894 29.5462Z",fill:"#2E2E2E",stroke:"#2E2E2E",strokeWidth:.5}),p.exports.createElement("path",{d:"M1 28.7868C1.19383 28.3487 1.53976 28.1915 2.02618 28.2129C2.6045 28.2383 3.18546 28.2302 3.76483 28.216C4.55441 28.1971 5.32708 28.2409 6.06331 28.6865C6.06965 28.5583 6.07652 28.4713 6.07704 28.3844C6.08549 27.0902 6.04536 25.7939 6.10979 24.5028C6.25133 21.6545 7.58489 19.3861 9.86859 17.6111C10.3534 17.2342 10.8567 16.8791 11.3421 16.5021C12.8943 15.2969 13.677 13.7301 13.7034 11.8101C13.7346 9.54989 15.3111 7.64472 17.5916 7.13498C17.9645 7.05155 18.3553 7.01899 18.7388 7.00983C19.5289 6.99101 20.3195 7.01238 21.1096 7.00017C21.4508 6.99508 21.7133 7.107 21.9499 7.3405C22.6185 7.99981 23.2966 8.65097 23.9822 9.29502C24.0704 9.37794 24.2204 9.43949 24.3429 9.44102C25.2471 9.45323 26.1518 9.44662 27.0565 9.44814C27.6839 9.44916 27.9897 9.74524 27.9871 10.3557C27.9844 10.9728 28.0336 11.597 27.9559 12.2059C27.7394 13.8995 26.3667 15.0365 24.5869 15.0543C24.0429 15.0599 23.4994 15.0553 22.91 15.0553V15.3631C22.91 17.1904 22.8984 19.0177 22.9132 20.8446C22.9301 22.9334 22.1617 24.6686 20.4859 26.0168C20.4183 26.0712 20.3697 26.1851 20.3681 26.2721C20.358 26.8979 20.3681 27.5241 20.3591 28.1498C20.357 28.2938 20.4161 28.3523 20.5445 28.4093C21.5337 28.8503 22.0354 29.6053 22.0592 30.6517C22.0692 31.1086 22.0449 31.5659 22.0661 32.0217C22.0877 32.4908 21.914 32.8235 21.4524 33H3.89898C3.8599 32.9842 3.8224 32.9613 3.78173 32.9547C2.764 32.7782 1.97231 32.2679 1.46794 31.4026C1.25404 31.0358 1.15263 30.6075 1 30.2076C1 29.7335 1 29.2599 1 28.7857V28.7868ZM20.4795 31.4647C20.4795 31.1915 20.4843 30.931 20.4785 30.6706C20.4658 30.1115 20.1568 29.795 19.5812 29.7421C19.0847 29.6964 18.7879 29.4089 18.7842 28.9312C18.7757 27.8736 18.7805 26.816 18.7826 25.7583C18.7831 25.4801 18.8888 25.2476 19.1322 25.0832C20.6755 24.0419 21.3536 22.5986 21.3346 20.8013C21.3124 18.6947 21.3293 16.5881 21.3293 14.4815C21.3293 13.7937 21.6013 13.5352 22.3169 13.5322C23.1599 13.5286 24.0044 13.5464 24.8457 13.5078C25.5545 13.4747 26.1872 12.9609 26.3308 12.296C26.4222 11.8742 26.4021 11.4306 26.4338 10.9718C25.5677 10.9718 24.7617 10.9636 23.9558 10.9758C23.6236 10.9809 23.3679 10.8736 23.1377 10.6467C22.4616 9.98179 21.7761 9.32605 21.0874 8.67285C21.014 8.60315 20.8994 8.53549 20.8027 8.53448C20.0475 8.5243 19.2912 8.51107 18.537 8.53549C16.9531 8.58687 15.5218 9.79611 15.3486 11.3111C15.2461 12.2059 15.2757 13.1186 15.3027 14.0216C15.3174 14.5237 15.6433 14.8849 16.1324 15.0726C17.0001 15.4058 17.917 14.7989 17.9302 13.8756C17.9434 12.9451 17.9291 12.0141 17.936 11.0837C17.9397 10.6111 18.2798 10.2682 18.7245 10.2652C19.1729 10.2621 19.5114 10.6014 19.513 11.0761C19.5167 12.0487 19.5283 13.0224 19.5051 13.9946C19.4776 15.1489 18.7007 16.1419 17.5663 16.527C16.453 16.905 15.2092 16.5881 14.4254 15.7268C14.3747 15.6714 14.3219 15.6174 14.2881 15.5813C13.9485 16.0051 13.6659 16.4701 13.2741 16.8216C12.5051 17.5114 11.6923 18.1595 10.8663 18.7863C8.73414 20.403 7.69158 22.5254 7.66464 25.1173C7.64352 27.139 7.66042 29.1617 7.66042 31.1833C7.66042 31.2739 7.66042 31.3645 7.66042 31.4647H16.087C15.9037 30.5881 14.8585 29.795 13.8371 29.7467C13.1035 29.7121 12.8748 29.4634 12.8542 28.7511C12.841 28.2979 12.8595 27.8197 12.7174 27.399C12.3355 26.2696 11.462 25.7192 10.2404 25.6505C9.76138 25.6235 9.45558 25.2852 9.47935 24.8482C9.50153 24.4351 9.85169 24.1213 10.3128 24.138C10.618 24.1492 10.928 24.1798 11.2249 24.2474C13.0908 24.6753 14.3795 26.2177 14.4439 28.0735C14.4465 28.1519 14.484 28.2785 14.5384 28.2979C14.8125 28.3966 15.0972 28.4678 15.3961 28.5538C15.3961 28.4418 15.3961 28.3498 15.3961 28.2572C15.3961 27.428 15.3935 26.5987 15.3972 25.7695C15.3988 25.3636 15.6349 25.0604 15.9998 24.9764C16.5179 24.8569 16.9742 25.216 16.9758 25.7568C16.98 27.0342 16.9769 28.3121 16.9785 29.5895C16.9785 29.6724 16.9637 29.7767 17.007 29.8357C17.374 30.3302 17.6186 30.8761 17.7554 31.4637H20.4811L20.4795 31.4647ZM2.59077 29.7574C2.57809 30.5642 3.13159 31.2749 3.92275 31.4189C4.3141 31.4901 4.72447 31.4662 5.12691 31.4764C5.43905 31.484 5.75118 31.4779 6.06067 31.4779C6.09606 30.6141 5.457 29.8408 4.59877 29.7686C3.93965 29.7131 3.27102 29.7574 2.59077 29.7574Z",fill:"#2E2E2E",stroke:"#2E2E2E",strokeWidth:.5}));function Cg(){const[e,t]=p.exports.useState({data:[]});O0({category:"dogs",state:e,setState:t});const{id:n}=E6(),r=n?+n:0,u=e==null?void 0:e.data[r],{name:i,age:o,sex:s,size:l,hasbreed:c,breed:d,haschip:m}=u||{};return a(IC,{"data-testid":"dogs-page",children:a(ee,{children:a(zC,{children:E(_C,{children:[E(qC,{children:[a(le,{$marginBottom:"24px",children:"\u041F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D\u043A\u0443:"}),E("p",{children:[i," - \u0447\u0430\u0440\u0456\u0432\u043D\u0430 \u0442\u0430 \u0435\u043D\u0435\u0440\u0433\u0456\u0439\u043D\u0430 \u0441\u043E\u0431\u0430\u0447\u043A\u0430, \u044F\u043A\u0430 \u0432\u0456\u0434\u043C\u0456\u043D\u043D\u043E \u043B\u0430\u0434\u043D\u0430\u0454 \u0437 \u0456\u043D\u0448\u0438\u043C\u0438 \u0441\u043E\u0431\u0430\u043A\u0430\u043C\u0438 \u0456 \u043B\u044E\u0434\u044C\u043C\u0438. \u0412\u043E\u043D\u0430 \u043E\u0431\u043E\u0436\u043D\u044E\u0454 \u043F\u0440\u043E\u0433\u0443\u043B\u044F\u043D\u043A\u0438 \u0456 \u0433\u0440\u0430\u0442\u0438\u0441\u044F \u0437 \u043C'\u044F\u0447\u0438\u043A\u043E\u043C."," ",a("br",{}),a("br",{})," ",i," \u043C\u0430\u0454 \u043F\u0435\u0432\u043D\u0456 \u043C\u0435\u0434\u0438\u0447\u043D\u0456 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438, \u0456 \u0434\u043B\u044F \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438 \u0457\u0457 \u0437\u0434\u043E\u0440\u043E\u0432'\u044F \u0457\u0439 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0456 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u0456 \u043B\u0456\u043A\u0438 \u0442\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434. \u041D\u0435\u0437\u0432\u0430\u0436\u0430\u044E\u0447\u0438 \u043D\u0430 \u0441\u0432\u043E\u0457 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438, ",i," \u0454 \u043D\u0430\u0434\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E \u043B\u0430\u0433\u0456\u0434\u043D\u043E\u044E \u0442\u0430 \u043B\u044E\u0431\u043B\u044F\u0447\u043E\u044E \u0441\u043E\u0431\u0430\u043A\u043E\u044E.",a("br",{}),a("br",{})," \u0412\u0430\u0448\u0456 \u043F\u043E\u0436\u0435\u0440\u0442\u0432\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0443\u0442\u044C \u043D\u0430\u043C \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 ",i," \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u043C\u0438 \u043B\u0456\u043A\u0430\u043C\u0438, \u043C\u0435\u0434\u0438\u0447\u043D\u0438\u043C \u0442\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u043C \u0434\u043E\u0433\u043B\u044F\u0434\u043E\u043C. \u0412\u0430\u0448\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u0434\u043E\u0437\u0432\u043E\u043B\u0438\u0442\u044C \u043D\u0430\u043C \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u0432\u0441\u0435 \u043C\u043E\u0436\u043B\u0438\u0432\u0435 \u0434\u043B\u044F \u043F\u043E\u043B\u0456\u043F\u0448\u0435\u043D\u043D\u044F \u0457\u0457 \u0441\u0442\u0430\u043D\u0443 \u0456 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0457\u0439 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0456 \u0443\u043C\u043E\u0432\u0438 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F."]})]}),a(HC,{children:a(cg,{src:"https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"})}),E(jC,{children:[E(UC,{children:[a(Be,{children:i}),a(le,{children:o})]}),E(VC,{children:[a(hr,{text:"\u0421\u0442\u0430\u0442\u044C",value:s,children:s==="\u0414\u0456\u0432\u0447\u0438\u043D\u043A\u0430"?a(dg,{}):a(pg,{})}),a(hr,{text:"\u041F\u043E\u0440\u043E\u0434\u0430",value:c?d:"\u0411\u0435\u0437 \u043F\u043E\u0440\u043E\u0434\u0438",children:a(fg,{})}),a(hr,{text:"\u0420\u043E\u0437\u043C\u0456\u0440",value:l,children:a(mg,{})}),a(hr,{text:"\u041D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u0447\u0456\u043F\u0430",value:m?"\u0422\u0430\u043A":"\u041D\u0456",children:a(hg,{})})]}),E(QC,{children:[a(le,{$marginBottom:"24px",children:"\u041F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D\u043A\u0443:"}),E("p",{children:[i," - \u0447\u0430\u0440\u0456\u0432\u043D\u0430 \u0442\u0430 \u0435\u043D\u0435\u0440\u0433\u0456\u0439\u043D\u0430 \u0441\u043E\u0431\u0430\u0447\u043A\u0430, \u044F\u043A\u0430 \u0432\u0456\u0434\u043C\u0456\u043D\u043D\u043E \u043B\u0430\u0434\u043D\u0430\u0454 \u0437 \u0456\u043D\u0448\u0438\u043C\u0438 \u0441\u043E\u0431\u0430\u043A\u0430\u043C\u0438 \u0456 \u043B\u044E\u0434\u044C\u043C\u0438. \u0412\u043E\u043D\u0430 \u043E\u0431\u043E\u0436\u043D\u044E\u0454 \u043F\u0440\u043E\u0433\u0443\u043B\u044F\u043D\u043A\u0438 \u0456 \u0433\u0440\u0430\u0442\u0438\u0441\u044F \u0437 \u043C'\u044F\u0447\u0438\u043A\u043E\u043C."," ",a("br",{}),a("br",{})," ",i," \u043C\u0430\u0454 \u043F\u0435\u0432\u043D\u0456 \u043C\u0435\u0434\u0438\u0447\u043D\u0456 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438, \u0456 \u0434\u043B\u044F \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438 \u0457\u0457 \u0437\u0434\u043E\u0440\u043E\u0432'\u044F \u0457\u0439 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0456 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u0456 \u043B\u0456\u043A\u0438 \u0442\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434. \u041D\u0435\u0437\u0432\u0430\u0436\u0430\u044E\u0447\u0438 \u043D\u0430 \u0441\u0432\u043E\u0457 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438, ",i," \u0454 \u043D\u0430\u0434\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E \u043B\u0430\u0433\u0456\u0434\u043D\u043E\u044E \u0442\u0430 \u043B\u044E\u0431\u043B\u044F\u0447\u043E\u044E \u0441\u043E\u0431\u0430\u043A\u043E\u044E.",a("br",{}),a("br",{})," \u0412\u0430\u0448\u0456 \u043F\u043E\u0436\u0435\u0440\u0442\u0432\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0443\u0442\u044C \u043D\u0430\u043C \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 ",i," \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u043C\u0438 \u043B\u0456\u043A\u0430\u043C\u0438, \u043C\u0435\u0434\u0438\u0447\u043D\u0438\u043C \u0442\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u043C \u0434\u043E\u0433\u043B\u044F\u0434\u043E\u043C. \u0412\u0430\u0448\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u0434\u043E\u0437\u0432\u043E\u043B\u0438\u0442\u044C \u043D\u0430\u043C \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u0432\u0441\u0435 \u043C\u043E\u0436\u043B\u0438\u0432\u0435 \u0434\u043B\u044F \u043F\u043E\u043B\u0456\u043F\u0448\u0435\u043D\u043D\u044F \u0457\u0457 \u0441\u0442\u0430\u043D\u0443 \u0456 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0457\u0439 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0456 \u0443\u043C\u043E\u0432\u0438 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F."]})]})]})]})})})})}const gg=x(ee)`
  color: ${({theme:e})=>e.colors.dark};
  margin-top: ${({theme:e})=>e.headerHeight};
  padding: 95px 16px 117px;
  max-width: 624px;

  ${le} {
    margin-bottom: 27px;
  }

  p {
    margin-bottom: 72px;
    font-size: ${({theme:e})=>e.fontSizes.bodyText};
    text-align: start;
  }

  ${pe} {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 100px;
  }

  @media (max-width: 1279px) {
    padding-top: 0;
    padding-bottom: 40px;

    ${le} {
      margin-bottom: 6px;
    }

    p {
      margin-bottom: 40px;
    }
  }

  @media (max-width: 767px) {
    padding-top: 160px;
    padding-bottom: 180px;

    ${le} {
      margin-bottom: 20px;
    }

    p {
      font-size: ${({theme:e})=>e.fontSizes.mobileBodyText};
    }
  }
`,yg=x(Be)`
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
`,xg=e=>p.exports.createElement("svg",{width:19,height:16,viewBox:"0 0 19 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M17.5 9C18.0523 9 18.5 8.55228 18.5 8C18.5 7.44772 18.0523 7 17.5 7V9ZM0.792892 7.29289C0.402369 7.68342 0.402369 8.31658 0.792892 8.70711L7.15685 15.0711C7.54738 15.4616 8.18054 15.4616 8.57107 15.0711C8.96159 14.6805 8.96159 14.0474 8.57107 13.6569L2.91421 8L8.57107 2.34315C8.96159 1.95262 8.96159 1.31946 8.57107 0.928932C8.18054 0.538408 7.54738 0.538408 7.15685 0.928932L0.792892 7.29289ZM17.5 7L1.5 7V9L17.5 9V7Z",fill:"#2E2E2E"}));function Eo(){return a(gg,{"data-testid":"not-found-page",children:E(ce,{$align:"center",$direction:"column",children:[a(yg,{children:"404"}),a(le,{children:"Page not found"}),a("p",{children:"\u0412\u0438\u0431\u0430\u0447\u0442\u0435, \u0430\u043B\u0435 \u043C\u0438 \u043D\u0435 \u0437\u043C\u043E\u0433\u043B\u0438 \u0437\u043D\u0430\u0439\u0442\u0438 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443, \u044F\u043A\u0443 \u0432\u0438 \u0448\u0443\u043A\u0430\u0454\u0442\u0435. \u0421\u0445\u043E\u0436\u0435, \u0449\u043E \u0441\u0442\u0430\u043B\u0430\u0441\u044F \u043F\u043E\u043C\u0438\u043B\u043A\u0430 \u0430\u0431\u043E \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430 \u0431\u0443\u043B\u0430 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0430. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456\u0441\u0442\u044C URL-\u0430\u0434\u0440\u0435\u0441\u0438 \u0430\u0431\u043E \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0456\u043D\u0448\u0435 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F."}),a(Rt,{to:".",children:E(pe,{children:[a(xg,{}),"\u041D\u0430\u0437\u0430\u0434"]})})]})})}const vg=x.div`
  width: 100%;
  height: calc(100vh - 96px);
  padding: 40px;

  @media screen and (max-width: 1279px) {
    padding: 20px;
  }

  @media screen and (max-width: 767px) {
    padding: 20px 16px;
  }
`,wg=x.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1439px) {
    gap: 60px;
  }

  @media (max-width: 767px) {
    gap: 40px;
  }
`,Eg=x(pe)`
  align-self: flex-end;
  max-width: 400px;
  width: 100%;

  @media (max-width: 1439px) {
    align-self: center;
  }

  @media (max-width: 1279px) {
    align-self: flex-end;
  }
`;function Sg(){const[e,t]=p.exports.useState({data:[]});O0({category:"dogs",state:e,setState:t});const[n,r]=p.exports.useState(e);return E(wg,{children:[a(Eg,{children:a(Rt,{to:"/admin/new-card",children:"\u0414\u043E\u0434\u0430\u0442\u0438 \u043D\u043E\u0432\u0443 \u043A\u0430\u0440\u0442\u043A\u0443"})}),a(f8,{state:n,setState:r,options:e}),a(g8,{state:n,admin:!0})]})}const kg=e=>p.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M26 12H26.02M2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2H32C33.5913 2 35.1174 2.63214 36.2426 3.75736C37.3679 4.88258 38 6.4087 38 8V32C38 33.5913 37.3679 35.1174 36.2426 36.2426C35.1174 37.3679 33.5913 38 32 38H8C6.4087 38 4.88258 37.3679 3.75736 36.2426C2.63214 35.1174 2 33.5913 2 32V8Z",stroke:"#2E2E2E",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.exports.createElement("path",{d:"M2 27.9997L12 17.9997C13.856 16.2137 16.144 16.2137 18 17.9997L28 27.9997",stroke:"#2E2E2E",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.exports.createElement("path",{d:"M24 23.9997L26 21.9997C27.856 20.2137 30.144 20.2137 32 21.9997L38 27.9997",stroke:"#2E2E2E",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}));var Fg="/Big-lapa/assets/photoIco.cede2c46.svg",Dg="/Big-lapa/assets/Cross.8640a101.svg";const bg=x.div`
  padding-bottom: 80px;

  ${Be} {
    margin-bottom: 0;
    @media (max-width: 767px) {
      text-align: center;
    }
  }

  ${({newCard:e})=>!e&&I4`
      ${x8} {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      ${x4} {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        button {
          position: absolute;
          background: ${O.colors.background} url(${Dg}) center / 14px no-repeat;
          top: 4px;
          right: 4px;
          width: 18px;
          height: 18px;
          border-radius: 4px;
        }
      }

      ${ni} {
      }
    `}
`,Lg=x.div`
  max-width: 83px;
  margin-bottom: 20px;
  a {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: ${O.fontSizes.subheadline};
  }
`,Pg=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
  max-width: 920px;

  label {
    font-size: ${O.fontSizes.subheadline};
    margin-bottom: 12px;
  }

  ${pe} {
    width: 400px;
  }

  @media (max-width: 767px) {
    gap: 40px;

    ${pe} {
      width: 100%;
    }
  }
`,Ag=x.div`
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
`,x8=x.div`
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
    ${le} {
      font-size: 16px;
    }
  }
`,Bg=x.div`
  width: 28%;
`,Rg=x.div`
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
`,x4=x.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #fff url(${Fg}) center / 20px no-repeat;
`,Og=x.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1439px) {
    flex-direction: column;
    gap: 30px;
  }
`,ni=x.div`
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
`,Mg=x.div`
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
`,mr=x.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 1279px) {
    &:nth-of-type(1) {
      margin-right: 63px;
    }
  }
`,kt=x.label`
  cursor: pointer;
  max-width: 220px;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 100%;
    transition: ${O.transitions.quick};
    padding: 8px 16px 8px 8px;
    font-size: ${O.fontSizes.buttonText};
    font-weight: ${O.fontWeights.semiBold};

    svg {
      min-width: 40px;
      min-height: 40px;
    }

    @media (max-width: 767px) {
      font-size: ${O.fontSizes.mobileButtonText};
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
      outline: 1px solid ${O.colors.dark};
      border-radius: 4px;
      z-index: 1;
    }
  }

  input[type='text'] {
    background-color: transparent;
    display: block;
    width: 100%;

    &::placeholder {
      color: ${O.colors.grey};
    }
  }
`,$g=x.div`
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
`;var Ms="/Big-lapa/assets/dog1.1423b256.png";const Tg=e=>p.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("g",{clipPath:"url(#clip0_1278_6081)"},p.exports.createElement("path",{d:"M5.3102 12.346L16.4562 22.966C16.6422 23.1433 16.8893 23.2422 17.1462 23.2422C17.4031 23.2422 17.6502 23.1433 17.8362 22.966L17.8482 22.954C17.9387 22.8681 18.0107 22.7646 18.0599 22.6499C18.1092 22.5353 18.1346 22.4118 18.1346 22.287C18.1346 22.1622 18.1092 22.0387 18.0599 21.9241C18.0107 21.8094 17.9387 21.7059 17.8482 21.62L7.3522 11.62L17.8482 1.624C17.9387 1.53805 18.0107 1.4346 18.0599 1.31993C18.1092 1.20527 18.1346 1.08179 18.1346 0.956999C18.1346 0.832212 18.1092 0.708731 18.0599 0.594065C18.0107 0.479399 17.9387 0.375944 17.8482 0.289999L17.8362 0.277998C17.6502 0.100708 17.4031 0.00180626 17.1462 0.00180626C16.8893 0.00180626 16.6422 0.100708 16.4562 0.277998L5.3102 10.898C5.21218 10.9914 5.13414 11.1037 5.08082 11.2282C5.02749 11.3526 5 11.4866 5 11.622C5 11.7574 5.02749 11.8914 5.08082 12.0158C5.13414 12.1403 5.21218 12.2526 5.3102 12.346Z",fill:"#2E2E2E"})),p.exports.createElement("defs",null,p.exports.createElement("clipPath",{id:"clip0_1278_6081"},p.exports.createElement("rect",{y:24,width:24,height:24,rx:12,transform:"rotate(-90 0 24)",fill:"white"})))),Ng=e=>p.exports.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M24.0656 6.87357C24.0355 6.84904 23.9322 6.76536 23.8375 6.68463C22.5461 5.61731 20.8319 4.97 19.1611 4.92065C17.4223 4.87039 15.7821 5.40889 14.3466 6.50494C14.084 6.70717 13.4328 7.34974 13.2333 7.6039C12.6 8.4184 12.207 9.16517 11.9201 10.0992C11.277 12.1892 11.5881 14.4382 12.7874 16.3684C12.9469 16.6231 13.2462 17.04 13.3339 17.1278L13.3713 17.1652L12.0622 18.4743L10.753 19.7835L9.69871 18.7236L8.64582 17.6623L8.13195 18.1762L7.61669 18.6915L8.67378 19.7485L9.73086 20.8056L8.09966 22.4368L6.46845 24.0681L7.00059 24.6002L7.53273 25.1323L9.16394 23.5011L10.7951 21.8699L11.8522 22.927L12.9093 23.9841L13.4246 23.4688L13.9385 22.955L12.8772 21.9021L11.8173 20.8478L13.1264 19.5386L14.4356 18.2294L14.473 18.2668C14.5607 18.3546 14.9777 18.6539 15.2324 18.8134C17.1626 20.0127 19.4115 20.3238 21.5015 19.6806C22.4356 19.3938 23.1824 19.0008 23.9969 18.3675C24.251 18.168 24.8936 17.5168 25.0958 17.2542C25.6773 16.4915 26.0564 15.7701 26.3315 14.9054C27.0967 12.4977 26.5979 9.90431 24.971 7.8293C24.8266 7.64574 24.1919 6.97459 24.0656 6.87357ZM23.8077 8.69913C24.4744 9.52821 24.9246 10.5133 25.1174 11.5602C25.3867 13.0169 25.0824 14.5552 24.2696 15.8454C23.3831 17.2497 21.882 18.21 20.1601 18.4764C19.8386 18.5246 19.3736 18.5496 19.0527 18.534C16.9669 18.4365 15.0547 17.3055 13.9867 15.5402C13.042 13.9795 12.8107 12.1743 13.3432 10.5114C13.937 8.65483 15.2711 7.30343 17.1118 6.69383C18.8183 6.12925 20.6575 6.35539 22.2341 7.32437C22.5732 7.53466 22.7467 7.66327 23.1586 8.01076C23.2676 8.10303 23.6793 8.53991 23.8077 8.69913Z",fill:"#2E2E2E",stroke:"#2E2E2E"})),Ig=e=>p.exports.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M26.1629 5.61876C26.0932 5.62551 25.6955 5.66771 25.2791 5.70821C24.8627 5.75041 24.2169 5.81623 23.843 5.85336C23.4691 5.89049 22.4018 5.99851 21.4722 6.09133C20.5425 6.18416 19.4922 6.2888 19.1387 6.32425C18.7869 6.35969 18.4946 6.39175 18.4912 6.39513C18.4827 6.40694 18.6424 7.94281 18.6543 7.95462C18.6611 7.96137 18.8634 7.94618 19.1047 7.92255C19.3461 7.89893 20.4151 7.79091 21.4807 7.68458C22.5463 7.57825 23.6051 7.47192 23.8328 7.44998C24.0623 7.42635 24.2509 7.40948 24.2543 7.41116C24.256 7.41454 23.7479 7.9293 23.1241 8.55715C19.8253 11.877 18.9824 12.7225 18.9688 12.7225C18.962 12.7225 18.8651 12.655 18.7563 12.574C17.7162 11.7926 16.4976 11.2677 15.1924 11.0348C14.4259 10.8998 13.5166 10.8812 12.7451 10.9842C10.935 11.2289 9.261 12.0474 8.00334 13.3031C7.17057 14.1352 6.56214 15.0753 6.13385 16.1909C5.72256 17.266 5.54241 18.4407 5.61549 19.5495C5.78545 22.1014 7.14678 24.4525 9.2474 25.8246C9.55842 26.0272 9.70118 26.1116 10.0088 26.2685C11.6556 27.1158 13.481 27.3926 15.2587 27.0685C16.5877 26.8255 17.8946 26.2348 18.9314 25.4078C19.4565 24.9892 19.8916 24.5487 20.2927 24.0305C21.2172 22.8339 21.7815 21.4331 21.9582 19.8955C21.9939 19.5765 22.0092 18.8339 21.9837 18.52C21.8954 17.3909 21.6149 16.3833 21.1187 15.3976C20.9028 14.9673 20.5561 14.4204 20.2655 14.0491L20.1074 13.85L20.3777 13.5782C20.5272 13.428 20.9538 12.9977 21.3294 12.6213C22.0415 11.9057 24.6418 9.28964 25.1245 8.80357C25.2791 8.64829 25.4049 8.52171 25.4066 8.52509C25.4083 8.52677 25.3998 8.63141 25.3879 8.75631C25.376 8.8812 25.3505 9.158 25.3318 9.37234C25.3131 9.585 25.2808 9.93268 25.2621 10.1436C25.2434 10.3563 25.2129 10.7006 25.1942 10.9116C25.082 12.1622 24.9222 13.9749 24.9188 14.039L24.9137 14.1133L25.704 14.1841C26.1391 14.2213 26.4977 14.2517 26.4977 14.2517C26.4994 14.25 26.5402 13.8128 26.5878 13.2795C26.6354 12.7462 26.6881 12.142 26.7067 11.9377C26.7254 11.7335 26.7628 11.3048 26.7917 10.9842C26.8189 10.6635 26.8512 10.3226 26.8597 10.2247C26.8682 10.1268 26.8988 9.78584 26.9277 9.46517C26.9566 9.14449 26.9855 8.80357 26.9957 8.70568C27.0042 8.60778 27.0365 8.26686 27.0636 7.94618C27.0925 7.62551 27.135 7.15631 27.1571 6.90315C27.1894 6.56222 27.1996 6.33268 27.1996 6.02213V5.60019L26.7458 5.60188C26.4943 5.60357 26.2326 5.61032 26.1629 5.61876ZM14.5551 12.5436C15.6649 12.6955 16.62 13.0466 17.4868 13.6221C18.928 14.5791 19.9239 16.0711 20.274 17.7943C20.3709 18.2787 20.393 18.5065 20.393 19.0685C20.3913 19.5968 20.3743 19.7892 20.291 20.2415C19.9817 21.8989 19.0095 23.428 17.6618 24.3732C16.812 24.9689 15.8654 25.3571 14.8627 25.5242C14.4531 25.5917 14.261 25.6069 13.7988 25.6069C13.141 25.6069 12.6533 25.5411 12.021 25.3639C9.37997 24.6213 7.52917 22.4255 7.22835 19.6761C7.18077 19.2508 7.20116 18.5571 7.27424 18.0896C7.55127 16.3192 8.5353 14.7242 9.96631 13.7251C10.9724 13.023 12.0788 12.6263 13.3484 12.5133C13.5285 12.4981 14.3681 12.5183 14.5551 12.5436Z",fill:"#2E2E2E",stroke:"#2E2E2E"})),_1=e=>p.exports.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M24.6671 24.0775C24.5661 23.9657 24.5111 23.818 24.5136 23.6653C24.5162 23.5126 24.5761 23.3669 24.6808 23.2588C24.7858 23.1509 24.9274 23.0892 25.0756 23.0866C25.2239 23.0839 25.3674 23.1406 25.476 23.2446L27.1699 24.989V7.01101L25.476 8.75537C25.3674 8.85941 25.2239 8.91607 25.0756 8.91343C24.9274 8.91079 24.7858 8.84907 24.6808 8.74123C24.5761 8.63311 24.5162 8.48739 24.5136 8.3347C24.5111 8.18202 24.5661 8.03426 24.6671 7.92248L27.3378 5.17235C27.4451 5.06199 27.5906 5 27.7422 5C27.8939 5 28.0394 5.06199 28.1467 5.17235L30.8174 7.92248C30.8927 7.99451 30.9478 8.08613 30.9768 8.18769C31.0058 8.28924 31.0077 8.39698 30.9822 8.49954C30.9567 8.6021 30.9049 8.69568 30.8321 8.77044C30.7593 8.8452 30.6683 8.89835 30.5686 8.92431C30.4691 8.95057 30.3646 8.94873 30.266 8.91901C30.1675 8.88928 30.0785 8.83275 30.0085 8.75537L28.3145 7.01101V24.989L30.0085 23.2446C30.0785 23.1671 30.1674 23.1103 30.2661 23.0805C30.3647 23.0506 30.4693 23.0487 30.5689 23.0749C30.6685 23.1011 30.7594 23.1545 30.832 23.2295C30.9046 23.3044 30.9562 23.3982 30.9814 23.5008C31.0069 23.6032 31.0051 23.7108 30.9763 23.8123C30.9474 23.9138 30.8925 24.0054 30.8174 24.0775L28.1467 26.8277C28.0394 26.938 27.8939 27 27.7422 27C27.5906 27 27.4451 26.938 27.3378 26.8277L24.6671 24.0775Z",fill:"#2E2E2E"}),p.exports.createElement("path",{d:"M1 23.4349C1.15716 23.0643 1.43764 22.9313 1.83204 22.9494C2.30094 22.9709 2.77199 22.964 3.24175 22.952C3.88194 22.936 4.50843 22.9731 5.10538 23.3501C5.11052 23.2417 5.11608 23.1681 5.11651 23.0945C5.12336 21.9994 5.09082 20.9026 5.14306 19.8101C5.25782 17.3999 6.33909 15.4805 8.19073 13.9786C8.58384 13.6597 8.99193 13.3592 9.38547 13.0402C10.644 12.0205 11.2786 10.6947 11.3001 9.07012C11.3253 7.1576 12.6036 5.54553 14.4526 5.11421C14.755 5.04362 15.0718 5.01607 15.3827 5.00832C16.0234 4.99239 16.6644 5.01047 17.305 5.00014C17.5817 4.99584 17.7945 5.09054 17.9863 5.28812C18.5285 5.84599 19.0783 6.39698 19.6341 6.94194C19.7057 7.0121 19.8273 7.06419 19.9266 7.06548C20.6597 7.07581 21.3933 7.07021 22.1268 7.07151C22.6356 7.07237 22.8835 7.32289 22.8814 7.83944C22.8792 8.36159 22.919 8.88976 22.8561 9.40502C22.6805 10.838 21.5676 11.8001 20.1245 11.8152C19.6834 11.8199 19.2427 11.816 18.7648 11.816V12.0764C18.7648 13.6226 18.7554 15.1689 18.7674 16.7146C18.7811 18.4821 18.1581 19.9504 16.7993 21.0911C16.7445 21.1372 16.7051 21.2336 16.7038 21.3072C16.6957 21.8367 16.7038 22.3665 16.6965 22.896C16.6948 23.0178 16.7428 23.0673 16.8468 23.1155C17.6489 23.4888 18.0557 24.1276 18.075 25.013C18.0831 25.3996 18.0634 25.7865 18.0805 26.1722C18.0981 26.5691 17.9572 26.8506 17.5829 27H3.35052C3.31883 26.9867 3.28843 26.9673 3.25545 26.9617C2.43027 26.8123 1.78836 26.3806 1.37941 25.6484C1.20598 25.338 1.12376 24.9756 1 24.6372C1 24.236 1 23.8361 1 23.4349ZM16.7942 25.7009C16.7942 25.4697 16.798 25.2493 16.7933 25.0289C16.783 24.5559 16.5325 24.2881 16.0658 24.2433C15.6632 24.2046 15.4226 23.9614 15.4196 23.5572C15.4127 22.6623 15.4166 21.7674 15.4183 20.8724C15.4187 20.637 15.5044 20.4402 15.7018 20.3012C16.953 19.4201 17.5029 18.1989 17.4875 16.678C17.4695 14.8955 17.4832 13.113 17.4832 11.3305C17.4832 10.7485 17.7037 10.5298 18.284 10.5272C18.9674 10.5242 19.6521 10.5393 20.3343 10.5066C20.909 10.4786 21.422 10.0438 21.5384 9.48121C21.6125 9.12436 21.5963 8.749 21.622 8.36073C20.9197 8.36073 20.2662 8.35384 19.6127 8.36417C19.3434 8.36848 19.1361 8.27765 18.9494 8.08567C18.4013 7.52306 17.8454 6.9682 17.287 6.41549C17.2275 6.35651 17.1346 6.29926 17.0562 6.2984C16.4439 6.28979 15.8307 6.2786 15.2192 6.29926C13.9349 6.34274 12.7744 7.36594 12.634 8.64784C12.5509 9.40502 12.5749 10.1773 12.5967 10.9413C12.6087 11.3662 12.8729 11.6718 13.2695 11.8307C13.973 12.1126 14.7164 11.5991 14.7271 10.8178C14.7378 10.0305 14.7263 9.24274 14.7318 8.45543C14.7348 8.05553 15.0106 7.7654 15.3712 7.76282C15.7347 7.76024 16.0092 8.04735 16.0105 8.44897C16.0135 9.27201 16.0229 10.0959 16.0041 10.9185C15.9818 11.8952 15.3519 12.7355 14.4321 13.0613C13.5294 13.3812 12.5209 13.113 11.8854 12.3842C11.8443 12.3373 11.8015 12.2917 11.7741 12.2611C11.4988 12.6197 11.2697 13.0131 10.9519 13.3106C10.3284 13.8943 9.66938 14.4427 8.99964 14.973C7.2709 16.341 6.42559 18.1369 6.40375 20.3301C6.38662 22.0407 6.40032 23.7522 6.40032 25.4628C6.40032 25.5395 6.40032 25.6161 6.40032 25.7009H13.2326C13.084 24.9592 12.2366 24.2881 11.4084 24.2472C10.8136 24.2179 10.6282 24.0075 10.6115 23.4048C10.6008 23.0213 10.6158 22.6166 10.5006 22.2607C10.191 21.305 9.48268 20.8393 8.4922 20.7812C8.1038 20.7584 7.85586 20.4721 7.87513 20.1023C7.89311 19.7528 8.17702 19.4872 8.55086 19.5014C8.79838 19.5109 9.04974 19.5367 9.2904 19.594C10.8033 19.956 11.8482 21.2611 11.9004 22.8314C11.9026 22.8977 11.933 23.0049 11.9771 23.0213C12.1993 23.1048 12.4301 23.165 12.6725 23.2378C12.6725 23.1431 12.6725 23.0652 12.6725 22.9868C12.6725 22.2852 12.6704 21.5835 12.6734 20.8819C12.6747 20.5384 12.8661 20.2818 13.162 20.2108C13.5821 20.1097 13.952 20.4136 13.9533 20.8711C13.9568 21.952 13.9542 23.0333 13.9555 24.1142C13.9555 24.1844 13.9435 24.2726 13.9786 24.3225C14.2762 24.741 14.4745 25.2028 14.5854 25.7H16.7954L16.7942 25.7009ZM2.28981 24.2563C2.27953 24.939 2.72831 25.5403 3.36979 25.6621C3.6871 25.7224 4.01983 25.7022 4.34614 25.7108C4.59922 25.7172 4.8523 25.7121 5.10324 25.7121C5.13193 24.9812 4.61378 24.3269 3.91791 24.2657C3.38349 24.2188 2.84136 24.2563 2.28981 24.2563Z",fill:"#2E2E2E"}),p.exports.createElement("path",{d:"M24.6671 24.0775C24.5661 23.9657 24.5111 23.818 24.5136 23.6653C24.5162 23.5126 24.5761 23.3669 24.6808 23.2588C24.7858 23.1509 24.9274 23.0892 25.0756 23.0866C25.2239 23.0839 25.3674 23.1406 25.476 23.2446L27.1699 24.989V7.01101L25.476 8.75537C25.3674 8.85941 25.2239 8.91607 25.0756 8.91343C24.9274 8.91079 24.7858 8.84907 24.6808 8.74123C24.5761 8.63311 24.5162 8.48739 24.5136 8.3347C24.5111 8.18202 24.5661 8.03426 24.6671 7.92248L27.3378 5.17235C27.4451 5.06199 27.5906 5 27.7422 5C27.8939 5 28.0394 5.06199 28.1467 5.17235L30.8174 7.92248C30.8927 7.99451 30.9478 8.08613 30.9768 8.18769C31.0058 8.28924 31.0077 8.39698 30.9822 8.49954C30.9567 8.6021 30.9049 8.69568 30.8321 8.77044C30.7593 8.8452 30.6683 8.89835 30.5686 8.92431C30.4691 8.95057 30.3646 8.94873 30.266 8.91901C30.1675 8.88928 30.0785 8.83275 30.0085 8.75537L28.3145 7.01101V24.989L30.0085 23.2446C30.0785 23.1671 30.1674 23.1103 30.2661 23.0805C30.3647 23.0506 30.4693 23.0487 30.5689 23.0749C30.6685 23.1011 30.7594 23.1545 30.832 23.2295C30.9046 23.3044 30.9562 23.3982 30.9814 23.5008C31.0069 23.6032 31.0051 23.7108 30.9763 23.8123C30.9474 23.9138 30.8925 24.0054 30.8174 24.0775L28.1467 26.8277C28.0394 26.938 27.8939 27 27.7422 27C27.5906 27 27.4451 26.938 27.3378 26.8277L24.6671 24.0775Z",stroke:"#2E2E2E",strokeWidth:.5}),p.exports.createElement("path",{d:"M1 23.4349C1.15716 23.0643 1.43764 22.9313 1.83204 22.9494C2.30094 22.9709 2.77199 22.964 3.24175 22.952C3.88194 22.936 4.50843 22.9731 5.10538 23.3501C5.11052 23.2417 5.11608 23.1681 5.11651 23.0945C5.12336 21.9994 5.09082 20.9026 5.14306 19.8101C5.25782 17.3999 6.33909 15.4805 8.19073 13.9786C8.58384 13.6597 8.99193 13.3592 9.38547 13.0402C10.644 12.0205 11.2786 10.6947 11.3001 9.07012C11.3253 7.1576 12.6036 5.54553 14.4526 5.11421C14.755 5.04362 15.0718 5.01607 15.3827 5.00832C16.0234 4.99239 16.6644 5.01047 17.305 5.00014C17.5817 4.99584 17.7945 5.09054 17.9863 5.28812C18.5285 5.84599 19.0783 6.39698 19.6341 6.94194C19.7057 7.0121 19.8273 7.06419 19.9266 7.06548C20.6597 7.07581 21.3933 7.07021 22.1268 7.07151C22.6356 7.07237 22.8835 7.32289 22.8814 7.83944C22.8792 8.36159 22.919 8.88976 22.8561 9.40502C22.6805 10.838 21.5676 11.8001 20.1245 11.8152C19.6834 11.8199 19.2427 11.816 18.7648 11.816V12.0764C18.7648 13.6226 18.7554 15.1689 18.7674 16.7146C18.7811 18.4821 18.1581 19.9504 16.7993 21.0911C16.7445 21.1372 16.7051 21.2336 16.7038 21.3072C16.6957 21.8367 16.7038 22.3665 16.6965 22.896C16.6948 23.0178 16.7428 23.0673 16.8468 23.1155C17.6489 23.4888 18.0557 24.1276 18.075 25.013C18.0831 25.3996 18.0634 25.7865 18.0805 26.1722C18.0981 26.5691 17.9572 26.8506 17.5829 27H3.35052C3.31883 26.9867 3.28843 26.9673 3.25545 26.9617C2.43027 26.8123 1.78836 26.3806 1.37941 25.6484C1.20598 25.338 1.12376 24.9756 1 24.6372C1 24.236 1 23.8361 1 23.4349ZM16.7942 25.7009C16.7942 25.4697 16.798 25.2493 16.7933 25.0289C16.783 24.5559 16.5325 24.2881 16.0658 24.2433C15.6632 24.2046 15.4226 23.9614 15.4196 23.5572C15.4127 22.6623 15.4166 21.7674 15.4183 20.8724C15.4187 20.637 15.5044 20.4402 15.7018 20.3012C16.953 19.4201 17.5029 18.1989 17.4875 16.678C17.4695 14.8955 17.4832 13.113 17.4832 11.3305C17.4832 10.7485 17.7037 10.5298 18.284 10.5272C18.9674 10.5242 19.6521 10.5393 20.3343 10.5066C20.909 10.4786 21.422 10.0438 21.5384 9.48121C21.6125 9.12436 21.5963 8.749 21.622 8.36073C20.9197 8.36073 20.2662 8.35384 19.6127 8.36417C19.3434 8.36848 19.1361 8.27765 18.9494 8.08567C18.4013 7.52306 17.8454 6.9682 17.287 6.41549C17.2275 6.35651 17.1346 6.29926 17.0562 6.2984C16.4439 6.28979 15.8307 6.2786 15.2192 6.29926C13.9349 6.34274 12.7744 7.36594 12.634 8.64784C12.5509 9.40502 12.5749 10.1773 12.5967 10.9413C12.6087 11.3662 12.8729 11.6718 13.2695 11.8307C13.973 12.1126 14.7164 11.5991 14.7271 10.8178C14.7378 10.0305 14.7263 9.24274 14.7318 8.45543C14.7348 8.05553 15.0106 7.7654 15.3712 7.76282C15.7347 7.76024 16.0092 8.04735 16.0105 8.44897C16.0135 9.27201 16.0229 10.0959 16.0041 10.9185C15.9818 11.8952 15.3519 12.7355 14.4321 13.0613C13.5294 13.3812 12.5209 13.113 11.8854 12.3842C11.8443 12.3373 11.8015 12.2917 11.7741 12.2611C11.4988 12.6197 11.2697 13.0131 10.9519 13.3106C10.3284 13.8943 9.66938 14.4427 8.99964 14.973C7.2709 16.341 6.42559 18.1369 6.40375 20.3301C6.38662 22.0407 6.40032 23.7522 6.40032 25.4628C6.40032 25.5395 6.40032 25.6161 6.40032 25.7009H13.2326C13.084 24.9592 12.2366 24.2881 11.4084 24.2472C10.8136 24.2179 10.6282 24.0075 10.6115 23.4048C10.6008 23.0213 10.6158 22.6166 10.5006 22.2607C10.191 21.305 9.48268 20.8393 8.4922 20.7812C8.1038 20.7584 7.85586 20.4721 7.87513 20.1023C7.89311 19.7528 8.17702 19.4872 8.55086 19.5014C8.79838 19.5109 9.04974 19.5367 9.2904 19.594C10.8033 19.956 11.8482 21.2611 11.9004 22.8314C11.9026 22.8977 11.933 23.0049 11.9771 23.0213C12.1993 23.1048 12.4301 23.165 12.6725 23.2378C12.6725 23.1431 12.6725 23.0652 12.6725 22.9868C12.6725 22.2852 12.6704 21.5835 12.6734 20.8819C12.6747 20.5384 12.8661 20.2818 13.162 20.2108C13.5821 20.1097 13.952 20.4136 13.9533 20.8711C13.9568 21.952 13.9542 23.0333 13.9555 24.1142C13.9555 24.1844 13.9435 24.2726 13.9786 24.3225C14.2762 24.741 14.4745 25.2028 14.5854 25.7H16.7954L16.7942 25.7009ZM2.28981 24.2563C2.27953 24.939 2.72831 25.5403 3.36979 25.6621C3.6871 25.7224 4.01983 25.7022 4.34614 25.7108C4.59922 25.7172 4.8523 25.7121 5.10324 25.7121C5.13193 24.9812 4.61378 24.3269 3.91791 24.2657C3.38349 24.2188 2.84136 24.2563 2.28981 24.2563Z",stroke:"#2E2E2E",strokeWidth:.5})),$s=e=>p.exports.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M2.002 4.2165C4.82005 3.87854 7.5874 3.49812 10.367 3.22563C13.1428 2.95403 15.9308 2.95403 18.7197 3.08673C21.5434 3.22032 24.3286 3.63525 27.1203 4.0139C27.7221 4.09529 28.3304 4.13953 28.9884 4.20588V4.58099C28.9884 8.02602 29.0184 11.471 28.9818 14.9152C28.9199 20.633 25.8099 27.3647 17.1333 29.7737C15.9251 30.109 14.8296 30.0595 13.6572 29.7056C10.2778 28.6847 7.38745 27.009 5.24153 24.3001C3.50208 22.1034 2.50985 19.6165 2.14469 16.9084C2.04424 16.1662 2.01139 15.4124 2.00857 14.663C1.99449 11.318 2.002 7.97294 2.002 4.627V4.2165ZM4.18086 5.77257C4.17899 5.81415 4.1696 5.90085 4.1696 5.98756C4.1696 8.91238 4.1405 11.8381 4.17805 14.7629C4.18086 18.5108 5.55413 21.141 6.73692 23.0308C8.52049 25.8777 11.2278 26.826 14.5537 27.6957C15.1967 27.8638 15.7928 27.8558 16.4367 27.6957C23.6142 25.9059 26.7905 21.2653 26.818 14.4639C26.8293 11.6718 26.8199 8.87876 26.8199 6.08576C26.8199 5.95925 26.8199 5.83185 26.8199 5.76815C19.7241 4.66316 11.2635 4.66139 4.17992 5.77257H4.18086Z",fill:"#2E2E2E"}),p.exports.createElement("path",{d:"M22.9173 12.6751C22.7416 12.2723 22.4499 11.9819 22.0733 11.8356L22.0682 11.8338C21.8968 11.769 21.7143 11.7359 21.5303 11.7361H21.51C20.648 11.7486 19.768 12.4556 19.3205 13.4954C18.9923 14.2558 18.9547 15.0736 19.2199 15.6832C19.3952 16.0863 19.6876 16.3767 20.0657 16.523L20.0699 16.5245C20.2413 16.5893 20.4237 16.6224 20.6078 16.6223C21.4781 16.6223 22.3673 15.9153 22.823 14.8617C23.147 14.1022 23.1828 13.285 22.9173 12.6751ZM19.473 17.16C18.9759 16.8718 18.506 16.599 18.199 16.1092C17.3522 14.7533 16.8408 13.9349 15.5 13.9349C14.1592 13.9349 13.6466 14.7533 12.7978 16.1092C12.4902 16.5997 12.0194 16.8727 11.5206 17.1622C10.9488 17.4938 10.358 17.8365 10.1029 18.5108C10.0038 18.7538 9.95384 19.013 9.9558 19.2742C9.9558 20.3721 10.8419 21.2653 11.9304 21.2653C12.4921 21.2653 13.0899 21.0775 13.7225 20.8787C14.3307 20.6876 14.9595 20.49 15.5032 20.49C16.0468 20.49 16.674 20.6876 17.28 20.8787C17.9113 21.0763 18.5063 21.2641 19.0696 21.2641C20.1566 21.2641 21.041 20.3709 21.041 19.273C21.0419 19.0116 20.9909 18.7524 20.8907 18.5095C20.6357 17.8346 20.0445 17.4917 19.473 17.16ZM12.1456 12.8614C12.5222 13.3174 13 13.5684 13.4912 13.5684C13.5582 13.5684 13.6252 13.5636 13.6915 13.554C14.7158 13.4087 15.3541 12.2024 15.1446 10.8056C15.057 10.2183 14.8228 9.67137 14.4874 9.26582C14.1114 8.81079 13.6329 8.56007 13.1421 8.56007C13.0751 8.56007 13.0081 8.56487 12.9418 8.57442C11.9175 8.71979 11.2792 9.92606 11.4887 11.3229C11.576 11.9092 11.8102 12.4556 12.1456 12.8614ZM17.3088 13.554C17.3751 13.5636 17.4421 13.5684 17.5091 13.5684C18.0006 13.5684 18.4781 13.3174 18.8547 12.8614C19.1898 12.4556 19.4227 11.9092 19.5113 11.3223C19.7208 9.92606 19.0825 8.71979 18.0582 8.57381C17.9919 8.56426 17.9249 8.55946 17.8579 8.55946C17.3671 8.56007 16.8886 8.81079 16.5126 9.26582C16.1772 9.67137 15.943 10.2183 15.8557 10.8062C15.6462 12.2024 16.2845 13.4087 17.3088 13.554ZM10.9301 16.5245L10.9346 16.523C11.3121 16.3767 11.6042 16.0866 11.7792 15.6838C12.0444 15.073 12.007 14.2561 11.6795 13.4957C11.226 12.4434 10.3371 11.7361 9.46783 11.7361C9.28375 11.7358 9.10125 11.769 8.92987 11.8338L8.92544 11.8353C8.54886 11.9804 8.25678 12.2717 8.08178 12.6745C7.8166 13.2853 7.85394 14.1022 8.18146 14.8626C8.63493 15.915 9.52384 16.6223 10.3931 16.6223C10.5769 16.6224 10.7591 16.5892 10.9301 16.5245Z",fill:"#2E2E2E"})),Ts=e=>p.exports.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M12.6398 12.6398H19.3598V19.3598H12.6398V12.6398Z",fill:"#2E2E2E"}),p.exports.createElement("path",{d:"M24.9598 9.2798C24.9598 8.04444 23.9552 7.0398 22.7198 7.0398H20.4798V4.7998H18.2398V7.0398H13.7598V4.7998H11.5198V7.0398H9.2798C8.04444 7.0398 7.0398 8.04444 7.0398 9.2798V11.5198H4.7998V13.7598H7.0398V18.2398H4.7998V20.4798H7.0398V22.7198C7.0398 23.9552 8.04444 24.9598 9.2798 24.9598H11.5198V27.1998H13.7598V24.9598H18.2398V27.1998H20.4798V24.9598H22.7198C23.9552 24.9598 24.9598 23.9552 24.9598 22.7198V20.4798H27.1998V18.2398H24.9598V13.7598H27.1998V11.5198H24.9598V9.2798ZM9.2798 22.7198V9.2798H22.7198L22.722 22.7198H9.2798Z",fill:"#2E2E2E"}));function v8({newCard:e}){const t={name:"\u0414\u0436\u0443\u043B\u0456",age:"10 \u043C\u0456\u0441\u044F\u0446\u0456\u0432",sex:"\u0414\u0456\u0432\u0447\u0438\u043D\u043A\u0430",size:"\u0412\u0435\u043B\u0438\u043A\u0438\u0439",breed:"\u041B\u0430\u0431\u0440\u0430\u0434\u043E\u0440",chip:"\u0422\u0430\u043A",description:`\u0414\u0436\u0443\u043B\u0456 - \u0447\u0430\u0440\u0456\u0432\u043D\u0430 \u0442\u0430 \u0435\u043D\u0435\u0440\u0433\u0456\u0439\u043D\u0430 \u0441\u043E\u0431\u0430\u0447\u043A\u0430, \u044F\u043A\u0430 \u0432\u0456\u0434\u043C\u0456\u043D\u043D\u043E \u043B\u0430\u0434\u043D\u0430\u0454 \u0437 \u0456\u043D\u0448\u0438\u043C\u0438 \u0441\u043E\u0431\u0430\u043A\u0430\u043C\u0438 \u0456 \u043B\u044E\u0434\u044C\u043C\u0438. \u0412\u043E\u043D\u0430 \u043E\u0431\u043E\u0436\u043D\u044E\u0454 \u043F\u0440\u043E\u0433\u0443\u043B\u044F\u043D\u043A\u0438 \u0456 \u0433\u0440\u0430\u0442\u0438\u0441\u044F \u0437 \u043C'\u044F\u0447\u0438\u043A\u043E\u043C.

    \u0414\u0436\u0443\u043B\u0456 \u043C\u0430\u0454 \u043F\u0435\u0432\u043D\u0456 \u043C\u0435\u0434\u0438\u0447\u043D\u0456 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438, \u0456 \u0434\u043B\u044F \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438 \u0457\u0457 \u0437\u0434\u043E\u0440\u043E\u0432'\u044F \u0457\u0439 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0456 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u0456 \u043B\u0456\u043A\u0438 \u0442\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434. \u041D\u0435\u0437\u0432\u0430\u0436\u0430\u044E\u0447\u0438 \u043D\u0430 \u0441\u0432\u043E\u0457 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438, \u0414\u0436\u0443\u043B\u0456 \u0454 \u043D\u0430\u0434\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E \u043B\u0430\u0433\u0456\u0434\u043D\u043E\u044E \u0442\u0430 \u043B\u044E\u0431\u043B\u044F\u0447\u043E\u044E \u0441\u043E\u0431\u0430\u043A\u043E\u044E.

    \u0412\u0430\u0448\u0456 \u043F\u043E\u0436\u0435\u0440\u0442\u0432\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0443\u0442\u044C \u043D\u0430\u043C \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0414\u0436\u0443\u043B\u0456 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u043C\u0438 \u043B\u0456\u043A\u0430\u043C\u0438, \u043C\u0435\u0434\u0438\u0447\u043D\u0438\u043C \u0442\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u043C \u0434\u043E\u0433\u043B\u044F\u0434\u043E\u043C.
    \u0412\u0430\u0448\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u0434\u043E\u0437\u0432\u043E\u043B\u0438\u0442\u044C \u043D\u0430\u043C \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u0432\u0441\u0435 \u043C\u043E\u0436\u043B\u0438\u0432\u0435 \u0434\u043B\u044F \u043F\u043E\u043B\u0456\u043F\u0448\u0435\u043D\u043D\u044F \u0457\u0457 \u0441\u0442\u0430\u043D\u0443 \u0456 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0457\u0439 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0456 \u0443\u043C\u043E\u0432\u0438 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F.`};return E(bg,{newCard:e,children:[a(Lg,{children:E(Rt,{to:"/admin",children:[a(Tg,{}),"\u041D\u0430\u0437\u0430\u0434"]})}),E(Pg,{children:[a(Be,{children:e?"\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u043D\u043E\u0432\u043E\u0457 \u043A\u0430\u0440\u0442\u043A\u0438":"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F"}),E(Ag,{children:[a(x8,{children:e?E(Ye,{children:[a(kg,{}),a(le,{children:"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u043E\u0442\u043E"})]}):a("img",{src:Ms,alt:"dog1"})}),a(Bg,{children:E(Rg,{children:[a(x4,{children:e?a(Ye,{}):E(Ye,{children:[a("img",{src:Ms,alt:"dog1"}),a("button",{})]})}),a(x4,{}),a(x4,{}),a(x4,{}),a(x4,{}),a(x4,{})]})})]}),E(Og,{children:[E(ni,{children:[a("label",{htmlFor:"dog-name",children:"\u041A\u043B\u0438\u0447\u043A\u0430 \u0441\u043E\u0431\u0430\u043A\u0438:"}),a(Tn,{type:"text",placeholder:e?"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043B\u0438\u0447\u043A\u0443 \u0441\u043E\u0431\u0430\u043A\u0438":t.name,id:"dog-name"})]}),E(ni,{children:[a("label",{htmlFor:"dog-age",children:"\u0412\u0456\u043A \u0441\u043E\u0431\u0430\u043A\u0438:"}),a(Tn,{type:"text",placeholder:e?"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0456\u043A \u0441\u043E\u0431\u0430\u043A\u0438":t.age,id:"dog-age"})]})]}),E(Mg,{children:[E(mr,{children:[E(kt,{children:[a("input",{type:"radio",name:"sex",defaultChecked:!e}),E("span",{children:[a(Ng,{})," \u0414\u0456\u0432\u0447\u0438\u043D\u043A\u0430"]})]}),E(kt,{children:[a("input",{type:"radio",name:"sex"}),E("span",{children:[a(Ig,{}),"\u0425\u043B\u043E\u043F\u0447\u0438\u043A"]})]})]}),E(mr,{children:[E(kt,{children:[a("input",{type:"radio",name:"size",defaultChecked:!e}),E("span",{children:[a(_1,{}),"\u0412\u0435\u043B\u0438\u043A\u0438\u0439"]})]}),E(kt,{children:[a("input",{type:"radio",name:"size"}),E("span",{children:[a(_1,{}),"\u0421\u0435\u0440\u0435\u0434\u043D\u0456\u0439"]})]}),E(kt,{children:[a("input",{type:"radio",name:"size"}),E("span",{children:[a(_1,{}),"\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439"]})]})]}),E(mr,{children:[E(kt,{children:[a("input",{type:"radio",name:"breed",defaultChecked:!e}),E("span",{children:[a($s,{}),"\u0411\u0435\u0437 \u043F\u043E\u0440\u043E\u0434\u0438"]})]}),E(kt,{children:[a("input",{type:"radio",name:"breed"}),E("span",{children:[a($s,{}),a("input",{type:"text",placeholder:e?"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0456\u043A \u0441\u043E\u0431\u0430\u043A\u0438":t.breed})]})]})]}),E(mr,{children:[E(kt,{children:[a("input",{type:"radio",name:"chip",defaultChecked:!e}),E("span",{children:[a(Ts,{}),"\u0422\u0430\u043A"]})]}),E(kt,{children:[a("input",{type:"radio",name:"chip"}),E("span",{children:[a(Ts,{}),"H\u0456"]})]})]})]}),E($g,{children:[a("label",{htmlFor:"dog-about",children:"\u041F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D\u043A\u0443:"}),a("textarea",{placeholder:"\u041E\u043F\u0438\u0448\u0456\u0442\u044C \u0442\u0432\u0430\u0440\u0438\u043D\u043A\u0443",id:"dog-about",defaultValue:e?"":t.description})]}),a(pe,{children:e?"\u0414\u043E\u0434\u0430\u0442\u0438 \u043A\u0430\u0440\u0442\u043A\u0443":"\u041E\u043D\u043E\u0432\u0438\u0442\u0438 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E"})]})]})}function zg(){return a(v8,{newCard:!0})}function _g(){return a(v8,{newCard:!1})}function Hg(e){const t=localStorage.getItem("access_token");(async()=>{try{const r=await fetch("https://big-lapa-api-production.up.railway.app/api/auth/change-password",{method:"PATCH",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"},body:JSON.stringify(e)});if(r.ok){const u=await r.json();console.log(u,"data")}else r.ok||console.log(r.status)}catch(r){console.log("123",r)}})()}const M0=x.form`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`,$0=x(pe)`
  width: 100%;
`,T0=x(ee)`
  width: 100%;
  max-width: 400px;
  padding: 0;
`,H4=x(Be)`
  width: 100%;
  text-align: center;
`,jg=x(Tn)`
  width: 100%;
  margin-bottom: 32px;
`,Ug=x.p`
  /* Desktop & 1280 px/Subheadline */
  font-size: 16px;
  margin-bottom: 12px;
`;function et(e){const{placeholder:t,label:n,onChange:r,state:u,onBlur:i}=e;return E(Ye,{children:[a(Ug,{children:n}),a(jg,{placeholder:t||"",onChange:o=>r(o.target.value),value:u,onBlur:i})]})}function Vg(){const[e,t]=p.exports.useState(""),[n,r]=p.exports.useState(""),u=()=>{Hg({passwordOld:e,passwordNew:n})};return E(M0,{onSubmit:()=>u(),children:[a(H4,{children:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F"}),a("p",{style:{fontWeight:"700",marginBottom:"20px"},children:"\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C"}),E(T0,{children:[a(et,{state:e,onChange:i=>t(i),label:"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0441\u0442\u0430\u0440\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",placeholder:"*********"}),a(et,{state:n,onChange:i=>r(i),label:"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",placeholder:"*********"}),a(et,{state:n,onChange:i=>r(i),label:"\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044C \u043D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",placeholder:"*********"}),a($0,{children:"\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438"})]})]})}const Wg=()=>h4.get("https://big-lapa-api-production.up.railway.app/api/main/get").then(e=>(console.log("Contacts api call"),e.data)),Zg=e=>h4.post("https://big-lapa-api-production.up.railway.app/api/main/create",e,{headers:{"Content-Type":"application/json"}}).then(t=>{console.log("Post successfully called"),t.data}),Qg=x.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 20px;
  right: 0px;
  overflow: auto;
  padding: 10px;
  border: 2px solid;
  border-color: ${e=>e.mode==="green"?"none":"red"};
  background-color: ${e=>(e.mode==="green","white")};
  border-radius: 15px;
  color: black;
  z-index: 9999;
  button {
    margin-left: 15px;
    padding: 10px;
    background-color: orange;
    color: black;
    border-radius: 15px;
  }
`,v4=({children:e,mode:t,delay:n=3e3})=>{const[r,u]=p.exports.useState(!0),i=()=>{u(!1)};return p.exports.useEffect(()=>{const o=setTimeout(()=>{i()},n);return()=>{clearTimeout(o)}},[]),r?E(Qg,{mode:t,children:[e,a("button",{onClick:i,children:"OK"})]}):null},Ns={email:"",first_phoneNumber:"",second_phoneNumber:""};function qg(){const[e,t]=p.exports.useState(Ns);mo({queryKey:["contacts"],initialData:Ns,queryFn:Wg,onSuccess:o=>{t(o)}});const n=ho(),{mutate:r,isSuccess:u}=cn(()=>Zg(e),{onSuccess:()=>{n.invalidateQueries({queryKey:["contacts"]})}});return E(M0,{onSubmit:o=>{o.preventDefault(),r()},children:[a(H4,{children:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u0438 \u0442\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430"}),E(T0,{children:[a(et,{state:e.first_phoneNumber,onChange:o=>t({...e,first_phoneNumber:o}),label:"\u041F\u0435\u0440\u0448\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443",placeholder:"+380"}),a(et,{state:e.second_phoneNumber,label:"\u0414\u0440\u0443\u0433\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443",placeholder:"+380",onChange:o=>t({...e,second_phoneNumber:o})}),a(et,{state:e.email,label:"\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430",placeholder:"example@mail.com",onChange:o=>t({...e,email:o})}),a($0,{type:"submit",children:"\u041E\u043D\u043E\u0432\u0438\u0442\u0438"})]}),u&&a(v4,{mode:"green",children:"\u0423\u0441\u043F\u0456\u0445! \u2714\uFE0F"})]})}const w8=x.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`,E8=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Kg=x.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  ${le} {
    color: ${O.colors.grey};
  }
`,S8=x.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`,Gg=x.div`
  padding: 26px 10px;
  height: 100px;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    vertical-align: bottom;
  }

  button {
    z-index: 2;
    position: absolute;
    right: 0;
    top: 0;
  }
`,k8=x.div`
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;

    p {
      font-size: ${O.fontSizes.buttonText};
      font-weight: ${O.fontWeights.semiBold};
    }
  }

  input[type='file'] {
    height: 1px;
    width: 1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
`,F8=x(pe)`
  width: 100%;
  max-width: 400px;
`,Yg=x.div`
  z-index: 10;
`,Xg=x.div`
  background-color: rgba(217, 217, 217, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,Jg=x.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${O.colors.background};
  border: 1px solid ${O.colors.grey};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  padding: 60px 75px;

  @media (max-width: 1279px) {
    padding: 40px 35px;
  }

  @media (max-width: 767px) {
    padding: 26px;
  }
`,ey=x.div`
  text-align: center;
`,ty=x(le)`
  margin-bottom: 20px;
`,ny=x.div``,ry=x.div`
  display: flex;
  gap: 40px;

  ${pe} {
    width: 150px;
  }

  @media (max-width: 767px) {
    gap: 8px;
  }
`;function D8({title:e,body:t,isOpen:n,onCancel:r,onSubmit:u,logoId:i}){return a(Ye,{children:n&&a(Yg,{children:a(Xg,{children:E(Jg,{children:[E(ey,{children:[a(ty,{children:e}),a(ny,{children:t})]}),E(ry,{children:[a(pe,{onClick:r,children:"\u041D\u0456"}),a(pe,{onClick:()=>u(i),children:"\u0422\u0430\u043A"})]})]})})})})}const Is=e=>p.exports.createElement("svg",{width:80,height:80,viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M40 7.5C33.5721 7.5 27.2886 9.40609 21.944 12.9772C16.5994 16.5484 12.4338 21.6242 9.97393 27.5628C7.51408 33.5014 6.87047 40.0361 8.12449 46.3404C9.37851 52.6448 12.4738 58.4358 17.019 62.981C21.5643 67.5262 27.3552 70.6215 33.6596 71.8755C39.964 73.1295 46.4986 72.4859 52.4372 70.0261C58.3758 67.5662 63.4516 63.4006 67.0228 58.056C70.5939 52.7114 72.5 46.4279 72.5 40C72.4909 31.3833 69.0639 23.122 62.9709 17.0291C56.878 10.9361 48.6168 7.5091 40 7.5ZM40 67.5C34.561 67.5 29.2442 65.8872 24.7218 62.8654C20.1995 59.8437 16.6747 55.5488 14.5933 50.5238C12.5119 45.4988 11.9673 39.9695 13.0284 34.635C14.0895 29.3005 16.7086 24.4005 20.5546 20.5546C24.4005 16.7086 29.3006 14.0895 34.635 13.0284C39.9695 11.9673 45.4988 12.5119 50.5238 14.5933C55.5488 16.6747 59.8437 20.1995 62.8654 24.7218C65.8872 29.2442 67.5 34.561 67.5 40C67.4917 47.2909 64.5918 54.2808 59.4363 59.4363C54.2809 64.5918 47.2909 67.4917 40 67.5ZM25 33.75C25 33.0083 25.2199 32.2833 25.632 31.6666C26.0441 31.0499 26.6297 30.5693 27.315 30.2855C28.0002 30.0016 28.7542 29.9274 29.4816 30.0721C30.209 30.2167 30.8772 30.5739 31.4017 31.0983C31.9261 31.6228 32.2833 32.291 32.428 33.0184C32.5727 33.7458 32.4984 34.4998 32.2146 35.1851C31.9307 35.8703 31.4501 36.456 30.8334 36.868C30.2167 37.2801 29.4917 37.5 28.75 37.5C27.7555 37.5 26.8016 37.1049 26.0984 36.4017C25.3951 35.6984 25 34.7446 25 33.75ZM55 33.75C55 34.4917 54.7801 35.2167 54.368 35.8334C53.956 36.4501 53.3703 36.9307 52.6851 37.2145C51.9999 37.4984 51.2459 37.5726 50.5184 37.4279C49.791 37.2833 49.1228 36.9261 48.5984 36.4017C48.0739 35.8772 47.7168 35.209 47.5721 34.4816C47.4274 33.7542 47.5016 33.0002 47.7855 32.3149C48.0693 31.6297 48.5499 31.044 49.1666 30.632C49.7833 30.2199 50.5083 30 51.25 30C52.2446 30 53.1984 30.3951 53.9017 31.0983C54.6049 31.8016 55 32.7554 55 33.75ZM54.6625 53.75C54.8434 54.0345 54.9649 54.3527 55.0196 54.6854C55.0743 55.0181 55.0612 55.3585 54.9809 55.686C54.9007 56.0135 54.7551 56.3213 54.5528 56.5911C54.3505 56.8608 54.0957 57.0869 53.8038 57.2556C53.5119 57.4243 53.1889 57.5323 52.8542 57.5729C52.5195 57.6136 52.18 57.5861 51.8562 57.4922C51.5324 57.3982 51.2309 57.2398 50.9699 57.0263C50.7089 56.8128 50.4938 56.5488 50.3375 56.25C48.0031 52.2156 44.3344 50 40 50C35.6656 50 31.9969 52.2188 29.6625 56.25C29.5062 56.5488 29.2911 56.8128 29.0301 57.0263C28.7691 57.2398 28.4677 57.3982 28.1439 57.4922C27.82 57.5861 27.4806 57.6136 27.1458 57.5729C26.8111 57.5323 26.4881 57.4243 26.1962 57.2556C25.9043 57.0869 25.6495 56.8608 25.4472 56.5911C25.2449 56.3213 25.0993 56.0135 25.0191 55.686C24.9389 55.3585 24.9257 55.0181 24.9804 54.6854C25.0352 54.3527 25.1566 54.0345 25.3375 53.75C28.5531 48.1906 33.8969 45 40 45C46.1031 45 51.4469 48.1875 54.6625 53.75Z",fill:"#ACABAB"})),b8=e=>p.exports.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M6.18091 25.7789L6.18091 21.8191H22.0201L22.0201 5.9799H25.9799L25.9799 21.8191H41.8191L41.8191 25.7789L25.9799 25.7789V41.6181H22.0201V25.7789L6.18091 25.7789Z",fill:"#2E2E2E"})),L8=e=>p.exports.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M3.4 16L2 14.6L7.6 9L2 3.4L3.4 2L9 7.6L14.6 2L16 3.4L10.4 9L16 14.6L14.6 16L9 10.4L3.4 16Z",fill:"#2E2E2E"})),uy=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:49,height:48,viewBox:"0 0 49 48",fill:"none",...e},p.exports.createElement("path",{d:"M32 26C32 25.6022 31.842 25.2206 31.5607 24.9393C31.2794 24.658 30.8978 24.5 30.5 24.5H18.5C18.1022 24.5 17.7206 24.658 17.4393 24.9393C17.158 25.2206 17 25.6022 17 26C17 26.3978 17.158 26.7794 17.4393 27.0607C17.7206 27.342 18.1022 27.5 18.5 27.5H30.5C30.8978 27.5 31.2794 27.342 31.5607 27.0607C31.842 26.7794 32 26.3978 32 26ZM32 34C32 33.6022 31.842 33.2206 31.5607 32.9393C31.2794 32.658 30.8978 32.5 30.5 32.5H18.5C18.1022 32.5 17.7206 32.658 17.4393 32.9393C17.158 33.2206 17 33.6022 17 34C17 34.3978 17.158 34.7794 17.4393 35.0607C17.7206 35.342 18.1022 35.5 18.5 35.5H30.5C30.8978 35.5 31.2794 35.342 31.5607 35.0607C31.842 34.7794 32 34.3978 32 34Z",fill:"#2E2E2E"}),p.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.5 4.5C13.0413 4.5 11.6424 5.07946 10.6109 6.11091C9.57946 7.14236 9 8.54131 9 10V38C9 39.4587 9.57946 40.8576 10.6109 41.8891C11.6424 42.9205 13.0413 43.5 14.5 43.5H34.5C35.9587 43.5 37.3576 42.9205 38.3891 41.8891C39.4205 40.8576 40 39.4587 40 38V15.936C40 15.174 39.752 14.434 39.292 13.826L33.296 5.89C32.9698 5.45823 32.5478 5.108 32.0634 4.86682C31.5789 4.62563 31.0452 4.50007 30.504 4.5H14.5ZM12 10C12 8.62 13.12 7.5 14.5 7.5H29V16.294C29 17.122 29.672 17.794 30.5 17.794H37V38C37 39.38 35.88 40.5 34.5 40.5H14.5C13.12 40.5 12 39.38 12 38V10Z",fill:"#2E2E2E"})),iy=x.div`
  width: 165px;
  height: 165px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  word-wrap: break-word;
  word-break: break-all;
  text-align: center;
  text-decoration: underline;
  button {
    position: absolute;
    right: 0px;
    top: -15px;
  }
  svg {
    margin-bottom: 15px;
  }
`,oy="https://big-lapa-api-production.up.railway.app/api/images/documents/category/Doc",sy=()=>h4.get(oy).then(e=>(console.log("getReportsID api called"),e.data)),ly="https://big-lapa-api-production.up.railway.app/api/images/",ay=e=>h4.get(ly+e,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>(console.log("getReportFile api called"),console.log({res:t}),t.data));function cy(){const[e,t]=p.exports.useState([]),[n,r]=p.exports.useState(""),[u,i]=p.exports.useState(!1),[o,s]=p.exports.useState(null);mo({queryKey:["reportsId"],initialData:[],queryFn:sy,onSuccess:y=>{const k=y.map(f=>({id:f,name:"",src:null}));t(k),c(k)},refetchOnWindowFocus:!1});const l=y=>Promise.all(y.map(k=>ay(k.id))),{mutate:c}=cn(l,{onSuccess:y=>{console.log({data:y})}}),d=()=>{i(y=>!y)},m=y=>{t(k=>k==null?void 0:k.filter(({id:f})=>f!==y)),i(k=>!k),s(null)},g=y=>{var f;const k=(f=y.target.files)==null?void 0:f[0];if(k){console.log(k==null?void 0:k.name);const h={id:Date.now().toString(),name:k.name,src:k};s(k),t(C=>[...C,h])}},w=y=>{i(!0),r(y)};return E("form",{onSubmit:y=>{y.preventDefault(),o instanceof File?s(null):console.log("unexpected file type")},style:{height:"100%"},children:[a(D8,{title:"\u0412\u0438 \u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043B\u043E\u0433\u043E?",body:"\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u0434\u0456\u044E \u0431\u0443\u0434\u0435 \u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E",isOpen:u,onCancel:d,onSubmit:m,logoId:n}),E(w8,{children:[E(E8,{children:[a(Be,{children:"\u0417\u0432\u0456\u0442\u043D\u0456\u0441\u0442\u044C"}),a(S8,{children:e.map(y=>E(iy,{children:[a(uy,{id:"ico-report"}),a("p",{children:y.name.length<60?y.name:y.name.slice(0,60-3)+"... "}),a("button",{type:"button",onClick:()=>w(y.id),children:a(L8,{})})]},y.id))}),!o&&E(k8,{children:[a("input",{type:"file",name:"partner",id:"partner",onChange:g}),E("label",{htmlFor:"partner",children:[a(b8,{}),a("p",{children:"\u0414\u043E\u0434\u0430\u0442\u0438 \u0437\u0432\u0456\u0442"})]})]})]}),o&&a(F8,{type:"submit",children:"\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438"})]})]})}function dy(){return a("div",{children:"Sliders"})}function py({setIsModalOpen:e,partner:t,setDeleteLogoId:n}){var u;return E(Gg,{children:[a("button",{type:"button",onClick:()=>{e(!0),n(t.id)},children:a(L8,{})}),a("img",{src:(u=t==null?void 0:t.encodedBase64)!=null?u:t.src,alt:"partner"})]})}function fy({selectedFile:e,setPartners:t,setSelectedFile:n}){const r=u=>{var o;const i=(o=u.target.files)==null?void 0:o[0];if(i){const s=new FileReader;s.onload=function(l){var m;const c=(m=l.target)==null?void 0:m.result,d={id:Date.now().toString(),src:i,encodedBase64:c};n(i),t(g=>[...g,d])},s.readAsDataURL(i),u.target.value=""}n(null)};return e?a(Ye,{}):E(k8,{children:[a("input",{type:"file",accept:"image/*",name:"partner",id:"partner",onChange:r}),E("label",{htmlFor:"partner",children:[a(b8,{}),a("p",{children:"\u0414\u043E\u0434\u0430\u0442\u0438 \u043B\u043E\u0433\u043E"})]})]})}const hy="https://big-lapa-api-production.up.railway.app/api/images/category/Logo",my=()=>h4.get(hy).then(e=>(console.log("getPartnersId called"),e.data)),Cy="https://big-lapa-api-production.up.railway.app/api/images",gy=async e=>{const t="Optional description here",n="Logo",r=new FormData;return r.append("image",e),r.append("description",t),r.append("category",n),h4.post(Cy,r,{headers:{"Content-Type":"multipart/form-data"}}).then(u=>(console.log("post partner successfully called"),u.data))},yy="https://big-lapa-api-production.up.railway.app/api/images/",xy=e=>h4.delete(yy+e).then(t=>{console.log("deletePartner api call"),t.data});function vy(){const[e,t]=p.exports.useState([]),[n,r]=p.exports.useState(""),[u,i]=p.exports.useState(!1),[o,s]=p.exports.useState(null);mo({queryKey:["partnersId"],initialData:[],queryFn:my,onSuccess:D=>c(D),refetchOnWindowFocus:!1});const l=D=>Promise.all(D.map(F=>c8(F))),{mutate:c,isLoading:d,isSuccess:m,isError:g}=cn(l,{onSuccess:D=>t(D)}),{mutate:w,isSuccess:v,isError:y}=cn(gy),{mutate:k,isSuccess:f,isError:h}=cn(xy);return E("form",{onSubmit:D=>{D.preventDefault(),o instanceof File?(w(o),s(null)):console.log("unexpected file type")},style:{height:"100%"},children:[a(D8,{title:"\u0412\u0438 \u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043B\u043E\u0433\u043E?",body:"\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u0434\u0456\u044E \u0431\u0443\u0434\u0435 \u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E",isOpen:u,onCancel:()=>{i(D=>!D)},onSubmit:D=>{k(D),t(F=>F==null?void 0:F.filter(({id:b})=>b!==D)),i(F=>!F),s(null)},logoId:n}),E(w8,{children:[E(E8,{children:[a(Be,{children:"\u041B\u043E\u0433\u043E \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0456\u0432"}),a(Kg,{children:m&&e.length===0&&E(Ye,{children:[a(le,{children:"\u0421\u0445\u043E\u0436\u0435, \u0443 \u043F\u0440\u0438\u0442\u0443\u043B\u043A\u0443 \u043F\u043E\u043A\u0438 \u0449\u043E \u043D\u0435\u043C\u0430\u0454 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0456\u0432"}),a(Is,{})]})}),E(S8,{children:[e==null?void 0:e.map(D=>a(py,{setIsModalOpen:i,partner:D,setDeleteLogoId:r},D.id)),a(fy,{selectedFile:o,setPartners:t,setSelectedFile:s})]})]}),o&&a(F8,{type:"submit",children:"\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438"})]}),d&&a(v4,{mode:"green",children:"\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430 \u0437\u0430\u0447\u0435\u043A\u0430\u0439\u0442\u0435 \u231B"}),g&&a(v4,{mode:"red",children:"\u0421\u0445\u043E\u0436\u0435, \u0441\u0442\u0430\u043B\u0430\u0441\u044F \u043F\u043E\u043C\u0438\u043B\u043A\u0430 \u26D4"}),v&&a(v4,{mode:"green",children:"\u041B\u043E\u0433\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u043B\u043E\u0441\u044C! \u2714\uFE0F"}),y&&E(v4,{mode:"red",delay:25e4,children:[E("div",{children:["\u0421\u0445\u043E\u0436\u0435, \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043B ",a("br",{}),"\u041C\u043E\u0436\u043B\u0438\u0432\u043E \u0444\u043E\u0440\u043C\u0430\u0442 \u0444\u0430\u0439\u043B\u0443 \u043D\u0435 \u043F\u0456\u0434\u0445\u043E\u0434\u0438\u0442\u044C \u0447\u0438 \u0444\u0430\u0439\u043B \u0437\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0438\u0439"]}),a(Is,{})]}),f&&a(v4,{mode:"green",children:"\u041F\u0430\u0440\u0442\u043D\u0435\u0440 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0438\u0432\u0441\u044F! \u2714\uFE0F"}),h&&a(v4,{mode:"red",children:"\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0432\u043A\u0430\u0437\u0430\u043D\u0438\u0439 \u0444\u0430\u0439\u043B \u26D4"})]})}function wy(){return a(vg,{children:E(fi,{children:[a(V,{index:!0,path:"/",element:a(Sg,{})}),a(V,{path:"/new-card",element:a(zg,{})}),a(V,{path:"/edit-card",element:a(_g,{})}),a(V,{path:"/partners",element:a(vy,{})}),a(V,{path:"/sliders",element:a(dy,{})}),a(V,{path:"/reports",element:a(cy,{})}),a(V,{path:"/contacts",element:a(qg,{})}),a(V,{path:"/settings",element:a(Vg,{})}),a(V,{path:"*",element:a(Eo,{})})]})})}const Ey=x.div`
  width: 100%;
  height: calc(100vh - 96px);
  padding: 40px 10px;

  @media screen and (max-width: 767px) {
    margin-left: 40px;
  }
`,Sy=()=>{function e(){let t=!1;return localStorage.getItem("access_token")?t=!0:t=!1,t}return e()?a(vu,{}):a(T6,{to:"/login"})},ky=x(H4)`
  color: var(--dark, #2e2e2e);
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: Open Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`,Fy=()=>{const[e,t]=p.exports.useState("");return E(M0,{children:[a(ky,{children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043E\u0434 \u0456\u0437 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F"}),E(T0,{children:[a(et,{state:e,onChange:n=>t(n),label:"\u041A\u043E\u0434 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F",placeholder:"****"}),a(dt,{to:"recovery",children:a($0,{type:"submit",children:"\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438"})})]})]})},Dy=x.p`
  color: var(--dark, #2e2e2e);
  text-align: center;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 35px;
`,by=x.button`
  color: var(--grey, #acabab);
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-left: 265px;
  bottom: 25px;
`;x(H4)`
  color: red;
`;const Ly=()=>{const[e,t]=p.exports.useState("");return E(M0,{children:[a(H4,{children:"\u0417\u0430\u0431\u0443\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?"}),E(T0,{children:[a(Dy,{children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438, \u0456 \u043C\u0438 \u043D\u0430\u0434\u0456\u0448\u043B\u0435\u043C\u043E \u0432\u0430\u043C \u043A\u043E\u0434 \u0434\u043B\u044F \u0437\u043C\u0456\u043D\u0438 \u043F\u0430\u0440\u043E\u043B\u044F"}),a(et,{state:e,onChange:n=>t(n),label:"\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430:",placeholder:"email@gmail.com"}),a(dt,{to:"confirmation",children:a($0,{type:"submit",children:"\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438"})})]})]})},Py=e=>{(async()=>{try{const n=await fetch("https://big-lapa-api-production.up.railway.app/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(n.ok){const r=await n.json();localStorage.setItem("access_token",r.access_token)}else n.ok||console.log(n.status)}catch(n){console.log("123",n)}})()},Ay=e=>{const{value:t,validations:n}=e,[r,u]=p.exports.useState(!0),[i,o]=p.exports.useState(!1);return p.exports.useEffect(()=>{for(const s in n)switch(s){case"minLength":t.length<n[s]?o(!0):o(!1);break;case"isEmpty":u(!t);break}},[t]),{isEmpty:r,minLengthError:i}},zs=(e,t)=>{const[n,r]=p.exports.useState(e),[u,i]=p.exports.useState(!1),o=Ay({value:n,validations:t});return{value:n,isDirty:u,onChange:c=>{r(c)},onBlur:()=>{i(!0)},...o}},By=()=>{const e=zs("",{isEmpty:!1,minLength:4}),t=zs("",{isEmpty:!1,minLength:5}),n=()=>{const r={login:e.value,password:t.value};Py(r)};return a(Ye,{children:E(M0,{onSubmit:()=>n(),children:[a(H4,{children:"\u0412\u0445\u0456\u0434 \u0434\u043E \u043F\u0430\u043D\u0435\u043B\u0456"}),E(T0,{children:[e.isDirty&&e.isEmpty&&a("div",{style:{color:"red"},children:"\u041F\u043E\u043B\u0435 \u043F\u0443\u0441\u0442\u043E\u0435"}),a(et,{state:e.value,onChange:r=>e.onChange(r),onBlur:e.onBlur,label:"\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430:",placeholder:"email@gmail.com"}),t.isDirty&&e.isEmpty&&a("div",{style:{color:"red"},children:"\u041F\u043E\u043B\u0435 \u043F\u0443\u0441\u0442\u043E\u0435"}),a(et,{state:t.value,onChange:r=>t.onChange(r),onBlur:t.onBlur,label:"\u041F\u0430\u0440\u043E\u043B\u044C \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430:",placeholder:"********"}),a(Rt,{to:"authorization",children:a(by,{children:"\u0417\u0430\u0431\u0443\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?"})}),a($0,{type:"submit",children:"\u0423\u0432\u0456\u0439\u0442\u0438"})]})]})})},Ry=()=>{const[e,t]=p.exports.useState("");return E(M0,{children:[a(H4,{children:"\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0430\u0440\u043E\u043B\u044E"}),E(T0,{children:[a(et,{state:e,onChange:n=>t(n),label:"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",placeholder:"********"}),a(et,{state:e,onChange:n=>t(n),label:"\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C",placeholder:"********"}),a(dt,{to:"/login",children:a($0,{type:"submit",children:"\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438"})})]})]})},Oy=()=>a(Ey,{children:E(fi,{children:[a(V,{index:!0,path:"/",element:a(By,{})}),E(V,{element:a(Sy,{}),children:[a(V,{path:"/authorization",element:a(Ly,{})}),a(V,{path:"authorization/confirmation",element:a(Fy,{})}),a(V,{path:"authorization/confirmation/recovery",element:a(Ry,{})})]}),a(V,{path:"*",element:a(Eo,{})})]})});function My(){const{pathname:e}=Nt();return p.exports.useEffect(()=>{window.scrollTo(0,0)},[e]),null}const $y=new O7;function Ty(){return a(Kd,{client:$y,children:a(Z9,{theme:O,children:E(U6,{basename:"/",children:[a(My,{}),E(fi,{children:[E(V,{element:a(ch,{}),children:[a(V,{index:!0,path:"/",element:a(rC,{})}),a(V,{path:"dogs",element:a(nm,{})}),a(V,{path:"dog/:id/:name",element:a(Cg,{})}),a(V,{path:"about",element:a(Ph,{})}),a(V,{path:"contacts",element:a(NC,{})}),a(V,{path:"*",element:a(Eo,{})})]}),a(V,{element:a(y7,{}),children:a(V,{path:"admin/*",element:a(wy,{})})}),a(V,{element:a(ap,{}),children:a(V,{path:"login/*",element:a(Oy,{})})})]})]})})})}var P8,_s=Ol.exports;P8=_s.createRoot,_s.hydrateRoot;const Ny=document.getElementById("root"),Iy=P8(Ny);Iy.render(a(be.StrictMode,{children:a(Ty,{})}));
