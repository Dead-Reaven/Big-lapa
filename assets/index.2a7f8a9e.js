function M8(e,t){return t.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(u){if(u!=="default"&&!(u in e)){var r=Object.getOwnPropertyDescriptor(n,u);Object.defineProperty(e,u,r.get?r:{enumerable:!0,get:function(){return n[u]}})}})}),Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}const O8=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};O8();var p={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var In=Symbol.for("react.element"),T8=Symbol.for("react.portal"),I8=Symbol.for("react.fragment"),N8=Symbol.for("react.strict_mode"),z8=Symbol.for("react.profiler"),j8=Symbol.for("react.provider"),H8=Symbol.for("react.context"),$8=Symbol.for("react.forward_ref"),U8=Symbol.for("react.suspense"),V8=Symbol.for("react.memo"),W8=Symbol.for("react.lazy"),k2=Symbol.iterator;function Q8(e){return e===null||typeof e!="object"?null:(e=k2&&e[k2]||e["@@iterator"],typeof e=="function"?e:null)}var Vs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ws=Object.assign,Qs={};function b0(e,t,n){this.props=e,this.context=t,this.refs=Qs,this.updater=n||Vs}b0.prototype.isReactComponent={};b0.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};b0.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zs(){}Zs.prototype=b0.prototype;function oi(e,t,n){this.props=e,this.context=t,this.refs=Qs,this.updater=n||Vs}var si=oi.prototype=new Zs;si.constructor=oi;Ws(si,b0.prototype);si.isPureReactComponent=!0;var F2=Array.isArray,_s=Object.prototype.hasOwnProperty,li={current:null},qs={key:!0,ref:!0,__self:!0,__source:!0};function Gs(e,t,n){var u,r={},i=null,o=null;if(t!=null)for(u in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)_s.call(t,u)&&!qs.hasOwnProperty(u)&&(r[u]=t[u]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}if(e&&e.defaultProps)for(u in s=e.defaultProps,s)r[u]===void 0&&(r[u]=s[u]);return{$$typeof:In,type:e,key:i,ref:o,props:r,_owner:li.current}}function Z8(e,t){return{$$typeof:In,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ai(e){return typeof e=="object"&&e!==null&&e.$$typeof===In}function _8(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var D2=/\/+/g;function n1(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_8(""+e.key):t.toString(36)}function yu(e,t,n,u,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case In:case T8:o=!0}}if(o)return o=e,r=r(o),e=u===""?"."+n1(o,0):u,F2(r)?(n="",e!=null&&(n=e.replace(D2,"$&/")+"/"),yu(r,t,n,"",function(c){return c})):r!=null&&(ai(r)&&(r=Z8(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(D2,"$&/")+"/")+e)),t.push(r)),1;if(o=0,u=u===""?".":u+":",F2(e))for(var s=0;s<e.length;s++){i=e[s];var l=u+n1(i,s);o+=yu(i,t,n,l,r)}else if(l=Q8(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=u+n1(i,s++),o+=yu(i,t,n,l,r);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function qn(e,t,n){if(e==null)return e;var u=[],r=0;return yu(e,u,"","",function(i){return t.call(n,i,r++)}),u}function q8(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},vu={transition:null},G8={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:vu,ReactCurrentOwner:li};j.Children={map:qn,forEach:function(e,t,n){qn(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qn(e,function(){t++}),t},toArray:function(e){return qn(e,function(t){return t})||[]},only:function(e){if(!ai(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=b0;j.Fragment=I8;j.Profiler=z8;j.PureComponent=oi;j.StrictMode=N8;j.Suspense=U8;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G8;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var u=Ws({},e.props),r=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=li.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)_s.call(t,l)&&!qs.hasOwnProperty(l)&&(u[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)u.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];u.children=s}return{$$typeof:In,type:e.type,key:r,ref:i,props:u,_owner:o}};j.createContext=function(e){return e={$$typeof:H8,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:j8,_context:e},e.Consumer=e};j.createElement=Gs;j.createFactory=function(e){var t=Gs.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:$8,render:e}};j.isValidElement=ai;j.lazy=function(e){return{$$typeof:W8,_payload:{_status:-1,_result:e},_init:q8}};j.memo=function(e,t){return{$$typeof:V8,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=vu.transition;vu.transition={};try{e()}finally{vu.transition=t}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(e,t){return Le.current.useCallback(e,t)};j.useContext=function(e){return Le.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};j.useEffect=function(e,t){return Le.current.useEffect(e,t)};j.useId=function(){return Le.current.useId()};j.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return Le.current.useMemo(e,t)};j.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};j.useRef=function(e){return Le.current.useRef(e)};j.useState=function(e){return Le.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return Le.current.useTransition()};j.version="18.2.0";p.exports=j;var be=p.exports,Ks=M8({__proto__:null,default:be},[p.exports]);/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pn(){return pn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},pn.apply(this,arguments)}var Yt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Yt||(Yt={}));const b2="popstate";function K8(e){e===void 0&&(e={});function t(r,i){let{pathname:o="/",search:s="",hash:l=""}=z4(r.location.hash.substr(1));return W1("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){let o=r.document.querySelector("base"),s="";if(o&&o.getAttribute("href")){let l=r.location.href,c=l.indexOf("#");s=c===-1?l:l.slice(0,c)}return s+"#"+(typeof i=="string"?i:$u(i))}function u(r,i){Er(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return J8(t,n,u,e)}function oe(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}function Er(e,t){if(!e){typeof console!="undefined"&&console.warn(t);try{throw new Error(t)}catch{}}}function X8(){return Math.random().toString(36).substr(2,8)}function A2(e,t){return{usr:e.state,key:e.key,idx:t}}function W1(e,t,n,u){return n===void 0&&(n=null),pn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?z4(t):t,{state:n,key:t&&t.key||u||X8()})}function $u(e){let{pathname:t="/",search:n="",hash:u=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),u&&u!=="#"&&(t+=u.charAt(0)==="#"?u:"#"+u),t}function z4(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let u=e.indexOf("?");u>=0&&(t.search=e.substr(u),e=e.substr(0,u)),e&&(t.pathname=e)}return t}function J8(e,t,n,u){u===void 0&&(u={});let{window:r=document.defaultView,v5Compat:i=!1}=u,o=r.history,s=Yt.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(pn({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function m(){s=Yt.Pop;let b=d(),h=b==null?null:b-c;c=b,l&&l({action:s,location:E.location,delta:h})}function g(b,h){s=Yt.Push;let f=W1(E.location,b,h);n&&n(f,b),c=d()+1;let C=A2(f,c),k=E.createHref(f);try{o.pushState(C,"",k)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;r.location.assign(k)}i&&l&&l({action:s,location:E.location,delta:1})}function v(b,h){s=Yt.Replace;let f=W1(E.location,b,h);n&&n(f,b),c=d();let C=A2(f,c),k=E.createHref(f);o.replaceState(C,"",k),i&&l&&l({action:s,location:E.location,delta:0})}function y(b){let h=r.location.origin!=="null"?r.location.origin:r.location.href,f=typeof b=="string"?b:$u(b);return oe(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let E={get action(){return s},get location(){return e(r,o)},listen(b){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(b2,m),l=b,()=>{r.removeEventListener(b2,m),l=null}},createHref(b){return t(r,b)},createURL:y,encodeLocation(b){let h=y(b);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:v,go(b){return o.go(b)}};return E}var L2;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(L2||(L2={}));function Y8(e,t,n){n===void 0&&(n="/");let u=typeof t=="string"?z4(t):t,r=ci(u.pathname||"/",n);if(r==null)return null;let i=Xs(e);e6(i);let o=null;for(let s=0;o==null&&s<i.length;++s)o=a6(i[s],p6(r));return o}function Xs(e,t,n,u){t===void 0&&(t=[]),n===void 0&&(n=[]),u===void 0&&(u="");let r=(i,o,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(oe(l.relativePath.startsWith(u),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+u+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(u.length));let c=n4([u,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(oe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Xs(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:s6(c,i.index),routesMeta:d})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))r(i,o);else for(let l of Js(i.path))r(i,o,l)}),t}function Js(e){let t=e.split("/");if(t.length===0)return[];let[n,...u]=t,r=n.endsWith("?"),i=n.replace(/\?$/,"");if(u.length===0)return r?[i,""]:[i];let o=Js(u.join("/")),s=[];return s.push(...o.map(l=>l===""?i:[i,l].join("/"))),r&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function e6(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:l6(t.routesMeta.map(u=>u.childrenIndex),n.routesMeta.map(u=>u.childrenIndex)))}const t6=/^:\w+$/,n6=3,u6=2,r6=1,i6=10,o6=-2,B2=e=>e==="*";function s6(e,t){let n=e.split("/"),u=n.length;return n.some(B2)&&(u+=o6),t&&(u+=u6),n.filter(r=>!B2(r)).reduce((r,i)=>r+(t6.test(i)?n6:i===""?r6:i6),u)}function l6(e,t){return e.length===t.length&&e.slice(0,-1).every((u,r)=>u===t[r])?e[e.length-1]-t[t.length-1]:0}function a6(e,t){let{routesMeta:n}=e,u={},r="/",i=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,c=r==="/"?t:t.slice(r.length)||"/",d=c6({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},c);if(!d)return null;Object.assign(u,d.params);let m=s.route;i.push({params:u,pathname:n4([r,d.pathname]),pathnameBase:C6(n4([r,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(r=n4([r,d.pathnameBase]))}return i}function c6(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,u]=d6(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],o=i.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:u.reduce((c,d,m)=>{if(d==="*"){let g=s[m]||"";o=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}return c[d]=f6(s[m]||"",d),c},{}),pathname:i,pathnameBase:o,pattern:e}}function d6(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Er(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let u=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,s)=>(u.push(s),"/([^\\/]+)"));return e.endsWith("*")?(u.push("*"),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),u]}function p6(e){try{return decodeURI(e)}catch(t){return Er(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function f6(e,t){try{return decodeURIComponent(e)}catch(n){return Er(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ci(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,u=e.charAt(n);return u&&u!=="/"?null:e.slice(n)||"/"}function h6(e,t){t===void 0&&(t="/");let{pathname:n,search:u="",hash:r=""}=typeof e=="string"?z4(e):e;return{pathname:n?n.startsWith("/")?n:m6(n,t):t,search:g6(u),hash:x6(r)}}function m6(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function u1(e,t,n,u){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(u)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function di(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function pi(e,t,n,u){u===void 0&&(u=!1);let r;typeof e=="string"?r=z4(e):(r=pn({},e),oe(!r.pathname||!r.pathname.includes("?"),u1("?","pathname","search",r)),oe(!r.pathname||!r.pathname.includes("#"),u1("#","pathname","hash",r)),oe(!r.search||!r.search.includes("#"),u1("#","search","hash",r)));let i=e===""||r.pathname==="",o=i?"/":r.pathname,s;if(u||o==null)s=n;else{let m=t.length-1;if(o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;r.pathname=g.join("/")}s=m>=0?t[m]:"/"}let l=h6(r,s),c=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const n4=e=>e.join("/").replace(/\/\/+/g,"/"),C6=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),g6=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,x6=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function y6(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const v6=["post","put","patch","delete"];[...v6];/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uu(){return Uu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},Uu.apply(this,arguments)}const fi=p.exports.createContext(null),Ys=p.exports.createContext(null),j4=p.exports.createContext(null),Sr=p.exports.createContext(null),St=p.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),el=p.exports.createContext(null);function w6(e,t){let{relative:n}=t===void 0?{}:t;A0()||oe(!1);let{basename:u,navigator:r}=p.exports.useContext(j4),{hash:i,pathname:o,search:s}=mi(e,{relative:n}),l=o;return u!=="/"&&(l=o==="/"?u:n4([u,o])),r.createHref({pathname:l,search:s,hash:i})}function A0(){return p.exports.useContext(Sr)!=null}function Ht(){return A0()||oe(!1),p.exports.useContext(Sr).location}function tl(e){p.exports.useContext(j4).static||p.exports.useLayoutEffect(e)}function hi(){let{isDataRoute:e}=p.exports.useContext(St);return e?N6():E6()}function E6(){A0()||oe(!1);let e=p.exports.useContext(fi),{basename:t,navigator:n}=p.exports.useContext(j4),{matches:u}=p.exports.useContext(St),{pathname:r}=Ht(),i=JSON.stringify(di(u).map(l=>l.pathnameBase)),o=p.exports.useRef(!1);return tl(()=>{o.current=!0}),p.exports.useCallback(function(l,c){if(c===void 0&&(c={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let d=pi(l,JSON.parse(i),r,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:n4([t,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[t,n,i,r,e])}const S6=p.exports.createContext(null);function k6(e){let t=p.exports.useContext(St).outlet;return t&&p.exports.createElement(S6.Provider,{value:e},t)}function F6(){let{matches:e}=p.exports.useContext(St),t=e[e.length-1];return t?t.params:{}}function mi(e,t){let{relative:n}=t===void 0?{}:t,{matches:u}=p.exports.useContext(St),{pathname:r}=Ht(),i=JSON.stringify(di(u).map(o=>o.pathnameBase));return p.exports.useMemo(()=>pi(e,JSON.parse(i),r,n==="path"),[e,i,r,n])}function D6(e,t){return b6(e,t)}function b6(e,t,n){A0()||oe(!1);let{navigator:u}=p.exports.useContext(j4),{matches:r}=p.exports.useContext(St),i=r[r.length-1],o=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let l=Ht(),c;if(t){var d;let E=typeof t=="string"?z4(t):t;s==="/"||((d=E.pathname)==null?void 0:d.startsWith(s))||oe(!1),c=E}else c=l;let m=c.pathname||"/",g=s==="/"?m:m.slice(s.length)||"/",v=Y8(e,{pathname:g}),y=R6(v&&v.map(E=>Object.assign({},E,{params:Object.assign({},o,E.params),pathname:n4([s,u.encodeLocation?u.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?s:n4([s,u.encodeLocation?u.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),r,n);return t&&y?p.exports.createElement(Sr.Provider,{value:{location:Uu({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Yt.Pop}},y):y}function A6(){let e=I6(),t=y6(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return p.exports.createElement(p.exports.Fragment,null,p.exports.createElement("h2",null,"Unexpected Application Error!"),p.exports.createElement("h3",{style:{fontStyle:"italic"}},t),n?p.exports.createElement("pre",{style:r},n):null,i)}const L6=p.exports.createElement(A6,null);class B6 extends p.exports.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?p.exports.createElement(St.Provider,{value:this.props.routeContext},p.exports.createElement(el.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function P6(e){let{routeContext:t,match:n,children:u}=e,r=p.exports.useContext(fi);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),p.exports.createElement(St.Provider,{value:t},u)}function R6(e,t,n){var u;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var r;if((r=n)!=null&&r.errors)e=n.matches;else return null}let i=e,o=(u=n)==null?void 0:u.errors;if(o!=null){let s=i.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));s>=0||oe(!1),i=i.slice(0,Math.min(i.length,s+1))}return i.reduceRight((s,l,c)=>{let d=l.route.id?o==null?void 0:o[l.route.id]:null,m=null;n&&(m=l.route.errorElement||L6);let g=t.concat(i.slice(0,c+1)),v=()=>{let y;return d?y=m:l.route.Component?y=p.exports.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=s,p.exports.createElement(P6,{match:l,routeContext:{outlet:s,matches:g,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?p.exports.createElement(B6,{location:n.location,revalidation:n.revalidation,component:m,error:d,children:v(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):v()},null)}var Q1;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Q1||(Q1={}));var fn;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(fn||(fn={}));function M6(e){let t=p.exports.useContext(fi);return t||oe(!1),t}function O6(e){let t=p.exports.useContext(Ys);return t||oe(!1),t}function T6(e){let t=p.exports.useContext(St);return t||oe(!1),t}function nl(e){let t=T6(),n=t.matches[t.matches.length-1];return n.route.id||oe(!1),n.route.id}function I6(){var e;let t=p.exports.useContext(el),n=O6(fn.UseRouteError),u=nl(fn.UseRouteError);return t||((e=n.errors)==null?void 0:e[u])}function N6(){let{router:e}=M6(Q1.UseNavigateStable),t=nl(fn.UseNavigateStable),n=p.exports.useRef(!1);return tl(()=>{n.current=!0}),p.exports.useCallback(function(r,i){i===void 0&&(i={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,Uu({fromRouteId:t},i)))},[e,t])}const z6="startTransition";Ks[z6];function j6(e){let{to:t,replace:n,state:u,relative:r}=e;A0()||oe(!1);let{matches:i}=p.exports.useContext(St),{pathname:o}=Ht(),s=hi(),l=pi(t,di(i).map(d=>d.pathnameBase),o,r==="path"),c=JSON.stringify(l);return p.exports.useEffect(()=>s(JSON.parse(c),{replace:n,state:u,relative:r}),[s,c,r,n,u]),null}function kr(e){return k6(e.context)}function W(e){oe(!1)}function H6(e){let{basename:t="/",children:n=null,location:u,navigationType:r=Yt.Pop,navigator:i,static:o=!1}=e;A0()&&oe(!1);let s=t.replace(/^\/*/,"/"),l=p.exports.useMemo(()=>({basename:s,navigator:i,static:o}),[s,i,o]);typeof u=="string"&&(u=z4(u));let{pathname:c="/",search:d="",hash:m="",state:g=null,key:v="default"}=u,y=p.exports.useMemo(()=>{let E=ci(c,s);return E==null?null:{location:{pathname:E,search:d,hash:m,state:g,key:v},navigationType:r}},[s,c,d,m,g,v,r]);return y==null?null:p.exports.createElement(j4.Provider,{value:l},p.exports.createElement(Sr.Provider,{children:n,value:y}))}function Ci(e){let{children:t,location:n}=e;return D6(Z1(t),n)}var P2;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(P2||(P2={}));new Promise(()=>{});function Z1(e,t){t===void 0&&(t=[]);let n=[];return p.exports.Children.forEach(e,(u,r)=>{if(!p.exports.isValidElement(u))return;let i=[...t,r];if(u.type===p.exports.Fragment){n.push.apply(n,Z1(u.props.children,i));return}u.type!==W&&oe(!1),!u.props.index||!u.props.children||oe(!1);let o={id:u.props.id||i.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(o.children=Z1(u.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vu(){return Vu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},Vu.apply(this,arguments)}function ul(e,t){if(e==null)return{};var n={},u=Object.keys(e),r,i;for(i=0;i<u.length;i++)r=u[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function $6(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function U6(e,t){return e.button===0&&(!t||t==="_self")&&!$6(e)}const V6=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],W6=["aria-current","caseSensitive","className","end","style","to","children"],Q6="startTransition",R2=Ks[Q6];function Z6(e){let{basename:t,children:n,future:u,window:r}=e,i=p.exports.useRef();i.current==null&&(i.current=K8({window:r,v5Compat:!0}));let o=i.current,[s,l]=p.exports.useState({action:o.action,location:o.location}),{v7_startTransition:c}=u||{},d=p.exports.useCallback(m=>{c&&R2?R2(()=>l(m)):l(m)},[l,c]);return p.exports.useLayoutEffect(()=>o.listen(d),[o,d]),p.exports.createElement(H6,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}const _6=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",q6=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Et=p.exports.forwardRef(function(t,n){let{onClick:u,relative:r,reloadDocument:i,replace:o,state:s,target:l,to:c,preventScrollReset:d}=t,m=ul(t,V6),{basename:g}=p.exports.useContext(j4),v,y=!1;if(typeof c=="string"&&q6.test(c)&&(v=c,_6))try{let f=new URL(window.location.href),C=c.startsWith("//")?new URL(f.protocol+c):new URL(c),k=ci(C.pathname,g);C.origin===f.origin&&k!=null?c=k+C.search+C.hash:y=!0}catch{}let E=w6(c,{relative:r}),b=G6(c,{replace:o,state:s,target:l,preventScrollReset:d,relative:r});function h(f){u&&u(f),f.defaultPrevented||b(f)}return p.exports.createElement("a",Vu({},m,{href:v||E,onClick:y||i?u:h,ref:n,target:l}))}),pt=p.exports.forwardRef(function(t,n){let{"aria-current":u="page",caseSensitive:r=!1,className:i="",end:o=!1,style:s,to:l,children:c}=t,d=ul(t,W6),m=mi(l,{relative:d.relative}),g=Ht(),v=p.exports.useContext(Ys),{navigator:y}=p.exports.useContext(j4),E=y.encodeLocation?y.encodeLocation(m).pathname:m.pathname,b=g.pathname,h=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;r||(b=b.toLowerCase(),h=h?h.toLowerCase():null,E=E.toLowerCase());let f=b===E||!o&&b.startsWith(E)&&b.charAt(E.length)==="/",C=h!=null&&(h===E||!o&&h.startsWith(E)&&h.charAt(E.length)==="/"),k=f?u:void 0,D;typeof i=="function"?D=i({isActive:f,isPending:C}):D=[i,f?"active":null,C?"pending":null].filter(Boolean).join(" ");let F=typeof s=="function"?s({isActive:f,isPending:C}):s;return p.exports.createElement(Et,Vu({},d,{"aria-current":k,className:D,ref:n,style:F,to:l}),typeof c=="function"?c({isActive:f,isPending:C}):c)});var M2;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(M2||(M2={}));var O2;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(O2||(O2={}));function G6(e,t){let{target:n,replace:u,state:r,preventScrollReset:i,relative:o}=t===void 0?{}:t,s=hi(),l=Ht(),c=mi(e,{relative:o});return p.exports.useCallback(d=>{if(U6(d,n)){d.preventDefault();let m=u!==void 0?u:$u(l)===$u(c);s(e,{replace:m,state:r,preventScrollReset:i,relative:o})}},[l,s,c,u,r,n,e,i,o])}var Ce=function(){return Ce=Object.assign||function(t){for(var n,u=1,r=arguments.length;u<r;u++){n=arguments[u];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ce.apply(this,arguments)};function hn(e,t,n){if(n||arguments.length===2)for(var u=0,r=t.length,i;u<r;u++)(i||!(u in t))&&(i||(i=Array.prototype.slice.call(t,0,u)),i[u]=t[u]);return e.concat(i||Array.prototype.slice.call(t))}var Z="-ms-",en="-moz-",U="-webkit-",rl="comm",Fr="rule",gi="decl",K6="@import",il="@keyframes",X6="@layer",J6=Math.abs,xi=String.fromCharCode,_1=Object.assign;function Y6(e,t){return he(e,0)^45?(((t<<2^he(e,0))<<2^he(e,1))<<2^he(e,2))<<2^he(e,3):0}function ol(e){return e.trim()}function At(e,t){return(e=t.exec(e))?e[0]:e}function z(e,t,n){return e.replace(t,n)}function wu(e,t){return e.indexOf(t)}function he(e,t){return e.charCodeAt(t)|0}function h0(e,t,n){return e.slice(t,n)}function gt(e){return e.length}function sl(e){return e.length}function q0(e,t){return t.push(e),e}function e9(e,t){return e.map(t).join("")}function T2(e,t){return e.filter(function(n){return!At(n,t)})}var Dr=1,m0=1,ll=0,nt=0,se=0,L0="";function br(e,t,n,u,r,i,o,s){return{value:e,root:t,parent:n,type:u,props:r,children:i,line:Dr,column:m0,length:o,return:"",siblings:s}}function _t(e,t){return _1(br("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function V4(e){for(;e.root;)e=_t(e.root,{children:[e]});q0(e,e.siblings)}function t9(){return se}function n9(){return se=nt>0?he(L0,--nt):0,m0--,se===10&&(m0=1,Dr--),se}function at(){return se=nt<ll?he(L0,nt++):0,m0++,se===10&&(m0=1,Dr++),se}function A4(){return he(L0,nt)}function Eu(){return nt}function Ar(e,t){return h0(L0,e,t)}function q1(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function u9(e){return Dr=m0=1,ll=gt(L0=e),nt=0,[]}function r9(e){return L0="",e}function r1(e){return ol(Ar(nt-1,G1(e===91?e+2:e===40?e+1:e)))}function i9(e){for(;(se=A4())&&se<33;)at();return q1(e)>2||q1(se)>3?"":" "}function o9(e,t){for(;--t&&at()&&!(se<48||se>102||se>57&&se<65||se>70&&se<97););return Ar(e,Eu()+(t<6&&A4()==32&&at()==32))}function G1(e){for(;at();)switch(se){case e:return nt;case 34:case 39:e!==34&&e!==39&&G1(se);break;case 40:e===41&&G1(e);break;case 92:at();break}return nt}function s9(e,t){for(;at()&&e+se!==47+10;)if(e+se===42+42&&A4()===47)break;return"/*"+Ar(t,nt-1)+"*"+xi(e===47?e:at())}function l9(e){for(;!q1(A4());)at();return Ar(e,nt)}function a9(e){return r9(Su("",null,null,null,[""],e=u9(e),0,[0],e))}function Su(e,t,n,u,r,i,o,s,l){for(var c=0,d=0,m=o,g=0,v=0,y=0,E=1,b=1,h=1,f=0,C="",k=r,D=i,F=u,S=C;b;)switch(y=f,f=at()){case 40:if(y!=108&&he(S,m-1)==58){wu(S+=z(r1(f),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:S+=r1(f);break;case 9:case 10:case 13:case 32:S+=i9(y);break;case 92:S+=o9(Eu()-1,7);continue;case 47:switch(A4()){case 42:case 47:q0(c9(s9(at(),Eu()),t,n,l),l);break;default:S+="/"}break;case 123*E:s[c++]=gt(S)*h;case 125*E:case 59:case 0:switch(f){case 0:case 125:b=0;case 59+d:h==-1&&(S=z(S,/\f/g,"")),v>0&&gt(S)-m&&q0(v>32?N2(S+";",u,n,m-1,l):N2(z(S," ","")+";",u,n,m-2,l),l);break;case 59:S+=";";default:if(q0(F=I2(S,t,n,c,d,r,s,C,k=[],D=[],m,i),i),f===123)if(d===0)Su(S,t,F,F,k,i,m,s,D);else switch(g===99&&he(S,3)===110?100:g){case 100:case 108:case 109:case 115:Su(e,F,F,u&&q0(I2(e,F,F,0,0,r,s,C,r,k=[],m,D),D),r,D,m,s,u?k:D);break;default:Su(S,F,F,F,[""],D,0,s,D)}}c=d=v=0,E=h=1,C=S="",m=o;break;case 58:m=1+gt(S),v=y;default:if(E<1){if(f==123)--E;else if(f==125&&E++==0&&n9()==125)continue}switch(S+=xi(f),f*E){case 38:h=d>0?1:(S+="\f",-1);break;case 44:s[c++]=(gt(S)-1)*h,h=1;break;case 64:A4()===45&&(S+=r1(at())),g=A4(),d=m=gt(C=S+=l9(Eu())),f++;break;case 45:y===45&&gt(S)==2&&(E=0)}}return i}function I2(e,t,n,u,r,i,o,s,l,c,d,m){for(var g=r-1,v=r===0?i:[""],y=sl(v),E=0,b=0,h=0;E<u;++E)for(var f=0,C=h0(e,g+1,g=J6(b=o[E])),k=e;f<y;++f)(k=ol(b>0?v[f]+" "+C:z(C,/&\f/g,v[f])))&&(l[h++]=k);return br(e,t,n,r===0?Fr:s,l,c,d,m)}function c9(e,t,n,u){return br(e,t,n,rl,xi(t9()),h0(e,2,-2),0,u)}function N2(e,t,n,u,r){return br(e,t,n,gi,h0(e,0,u),h0(e,u+1,-1),u,r)}function al(e,t,n){switch(Y6(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 4789:return en+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+en+e+Z+e+e;case 5936:switch(he(e,t+11)){case 114:return U+e+Z+z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+Z+z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+Z+z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return U+e+Z+e+e;case 6165:return U+e+Z+"flex-"+e+e;case 5187:return U+e+z(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return U+e+Z+"flex-item-"+z(e,/flex-|-self/g,"")+(At(e,/flex-|baseline/)?"":Z+"grid-row-"+z(e,/flex-|-self/g,""))+e;case 4675:return U+e+Z+"flex-line-pack"+z(e,/align-content|flex-|-self/g,"")+e;case 5548:return U+e+Z+z(e,"shrink","negative")+e;case 5292:return U+e+Z+z(e,"basis","preferred-size")+e;case 6060:return U+"box-"+z(e,"-grow","")+U+e+Z+z(e,"grow","positive")+e;case 4554:return U+z(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return z(z(z(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return z(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return z(z(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4200:if(!At(e,/flex-|baseline/))return Z+"grid-column-align"+h0(e,t)+e;break;case 2592:case 3360:return Z+z(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(u,r){return t=r,At(u.props,/grid-\w+-end/)})?~wu(e+(n=n[t].value),"span")?e:Z+z(e,"-start","")+e+Z+"grid-row-span:"+(~wu(n,"span")?At(n,/\d+/):+At(n,/\d+/)-+At(e,/\d+/))+";":Z+z(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(u){return At(u.props,/grid-\w+-start/)})?e:Z+z(z(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return z(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gt(e)-1-t>6)switch(he(e,t+1)){case 109:if(he(e,t+4)!==45)break;case 102:return z(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+en+(he(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~wu(e,"stretch")?al(z(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return z(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,r,i,o,s,l,c){return Z+r+":"+i+c+(o?Z+r+"-span:"+(s?l:+l-+i)+c:"")+e});case 4949:if(he(e,t+6)===121)return z(e,":",":"+U)+e;break;case 6444:switch(he(e,he(e,14)===45?18:11)){case 120:return z(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+U+(he(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+Z+"$2box$3")+e;case 100:return z(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return z(e,"scroll-","scroll-snap-")+e}return e}function Wu(e,t){for(var n="",u=0;u<e.length;u++)n+=t(e[u],u,e,t)||"";return n}function d9(e,t,n,u){switch(e.type){case X6:if(e.children.length)break;case K6:case gi:return e.return=e.return||e.value;case rl:return"";case il:return e.return=e.value+"{"+Wu(e.children,u)+"}";case Fr:if(!gt(e.value=e.props.join(",")))return""}return gt(n=Wu(e.children,u))?e.return=e.value+"{"+n+"}":""}function p9(e){var t=sl(e);return function(n,u,r,i){for(var o="",s=0;s<t;s++)o+=e[s](n,u,r,i)||"";return o}}function f9(e){return function(t){t.root||(t=t.return)&&e(t)}}function h9(e,t,n,u){if(e.length>-1&&!e.return)switch(e.type){case gi:e.return=al(e.value,e.length,n);return;case il:return Wu([_t(e,{value:z(e.value,"@","@"+U)})],u);case Fr:if(e.length)return e9(n=e.props,function(r){switch(At(r,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":V4(_t(e,{props:[z(r,/:(read-\w+)/,":"+en+"$1")]})),V4(_t(e,{props:[r]})),_1(e,{props:T2(n,u)});break;case"::placeholder":V4(_t(e,{props:[z(r,/:(plac\w+)/,":"+U+"input-$1")]})),V4(_t(e,{props:[z(r,/:(plac\w+)/,":"+en+"$1")]})),V4(_t(e,{props:[z(r,/:(plac\w+)/,Z+"input-$1")]})),V4(_t(e,{props:[r]})),_1(e,{props:T2(n,u)});break}return""})}}var m9={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},C0=typeof process!="undefined"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",yi=typeof window!="undefined"&&"HTMLElement"in window,C9=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),g9={},Lr=Object.freeze([]),g0=Object.freeze({});function cl(e,t,n){return n===void 0&&(n=g0),e.theme!==n.theme&&e.theme||t||n.theme}var dl=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),x9=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,y9=/(^-|-$)/g;function z2(e){return e.replace(x9,"-").replace(y9,"")}var v9=/(a)(d)/gi,j2=function(e){return String.fromCharCode(e+(e>25?39:97))};function K1(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=j2(t%52)+n;return(j2(t%52)+n).replace(v9,"$1-$2")}var i1,q4=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},pl=function(e){return q4(5381,e)};function fl(e){return K1(pl(e)>>>0)}function w9(e){return e.displayName||e.name||"Component"}function o1(e){return typeof e=="string"&&!0}var hl=typeof Symbol=="function"&&Symbol.for,ml=hl?Symbol.for("react.memo"):60115,E9=hl?Symbol.for("react.forward_ref"):60112,S9={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},k9={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Cl={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},F9=((i1={})[E9]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i1[ml]=Cl,i1);function H2(e){return("type"in(t=e)&&t.type.$$typeof)===ml?Cl:"$$typeof"in e?F9[e.$$typeof]:S9;var t}var D9=Object.defineProperty,b9=Object.getOwnPropertyNames,$2=Object.getOwnPropertySymbols,A9=Object.getOwnPropertyDescriptor,L9=Object.getPrototypeOf,U2=Object.prototype;function gl(e,t,n){if(typeof t!="string"){if(U2){var u=L9(t);u&&u!==U2&&gl(e,u,n)}var r=b9(t);$2&&(r=r.concat($2(t)));for(var i=H2(e),o=H2(t),s=0;s<r.length;++s){var l=r[s];if(!(l in k9||n&&n[l]||o&&l in o||i&&l in i)){var c=A9(t,l);try{D9(e,l,c)}catch{}}}}return e}function P4(e){return typeof e=="function"}function vi(e){return typeof e=="object"&&"styledComponentId"in e}function S4(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function X1(e,t){if(e.length===0)return"";for(var n=e[0],u=1;u<e.length;u++)n+=t?t+e[u]:e[u];return n}function mn(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function J1(e,t,n){if(n===void 0&&(n=!1),!n&&!mn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var u=0;u<t.length;u++)e[u]=J1(e[u],t[u]);else if(mn(t))for(var u in t)e[u]=J1(e[u],t[u]);return e}function wi(e,t){Object.defineProperty(e,"toString",{value:t})}function R4(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var B9=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,u=0;u<t;u++)n+=this.groupSizes[u];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var u=this.groupSizes,r=u.length,i=r;t>=i;)if((i<<=1)<0)throw R4(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(u),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],u=this.indexOfGroup(t),r=u+n;this.groupSizes[t]=0;for(var i=u;i<r;i++)this.tag.deleteRule(u)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var u=this.groupSizes[t],r=this.indexOfGroup(t),i=r+u,o=r;o<i;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),ku=new Map,Qu=new Map,s1=1,Gn=function(e){if(ku.has(e))return ku.get(e);for(;Qu.has(s1);)s1++;var t=s1++;return ku.set(e,t),Qu.set(t,e),t},P9=function(e,t){ku.set(e,t),Qu.set(t,e)},R9="style[".concat(C0,"][").concat("data-styled-version",'="').concat("6.0.5",'"]'),M9=new RegExp("^".concat(C0,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),O9=function(e,t,n){for(var u,r=n.split(","),i=0,o=r.length;i<o;i++)(u=r[i])&&e.registerName(t,u)},T9=function(e,t){for(var n,u=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),r=[],i=0,o=u.length;i<o;i++){var s=u[i].trim();if(s){var l=s.match(M9);if(l){var c=0|parseInt(l[1],10),d=l[2];c!==0&&(P9(d,c),O9(e,d,l[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(s)}}};function I9(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var xl=function(e){var t=document.head,n=e||t,u=document.createElement("style"),r=function(s){var l=Array.from(s.querySelectorAll("style[".concat(C0,"]")));return l[l.length-1]}(n),i=r!==void 0?r.nextSibling:null;u.setAttribute(C0,"active"),u.setAttribute("data-styled-version","6.0.5");var o=I9();return o&&u.setAttribute("nonce",o),n.insertBefore(u,i),u},N9=function(){function e(t){this.element=xl(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var u=document.styleSheets,r=0,i=u.length;r<i;r++){var o=u[r];if(o.ownerNode===n)return o}throw R4(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),z9=function(){function e(t){this.element=xl(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var u=document.createTextNode(n);return this.element.insertBefore(u,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),j9=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),V2=yi,H9={isServer:!yi,useCSSOMInjection:!C9},Zu=function(){function e(t,n,u){t===void 0&&(t=g0),n===void 0&&(n={});var r=this;this.options=Ce(Ce({},H9),t),this.gs=n,this.names=new Map(u),this.server=!!t.isServer,!this.server&&yi&&V2&&(V2=!1,function(i){for(var o=document.querySelectorAll(R9),s=0,l=o.length;s<l;s++){var c=o[s];c&&c.getAttribute(C0)!=="active"&&(T9(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),wi(this,function(){return function(i){for(var o=i.getTag(),s=o.length,l="",c=function(m){var g=function(h){return Qu.get(h)}(m);if(g===void 0)return"continue";var v=i.names.get(g),y=o.getGroup(m);if(v===void 0||y.length===0)return"continue";var E="".concat(C0,".g").concat(m,'[id="').concat(g,'"]'),b="";v!==void 0&&v.forEach(function(h){h.length>0&&(b+="".concat(h,","))}),l+="".concat(y).concat(E,'{content:"').concat(b,'"}').concat(`/*!sc*/
`)},d=0;d<s;d++)c(d);return l}(r)})}return e.registerId=function(t){return Gn(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ce(Ce({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var u=n.useCSSOMInjection,r=n.target;return n.isServer?new j9(r):u?new N9(r):new z9(r)}(this.options),new B9(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Gn(t),this.names.has(t))this.names.get(t).add(n);else{var u=new Set;u.add(n),this.names.set(t,u)}},e.prototype.insertRules=function(t,n,u){this.registerName(t,n),this.getTag().insertRules(Gn(t),u)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Gn(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),$9=/&/g,U9=/^\s*\/\/.*$/gm;function yl(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(u){return"".concat(t," ").concat(u)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=yl(n.children,t)),n})}function V9(e){var t,n,u,r=e===void 0?g0:e,i=r.options,o=i===void 0?g0:i,s=r.plugins,l=s===void 0?Lr:s,c=function(g,v,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):g},d=l.slice();d.push(function(g){g.type===Fr&&g.value.includes("&")&&(g.props[0]=g.props[0].replace($9,n).replace(u,c))}),o.prefix&&d.push(h9),d.push(d9);var m=function(g,v,y,E){v===void 0&&(v=""),y===void 0&&(y=""),E===void 0&&(E="&"),t=E,n=v,u=new RegExp("\\".concat(n,"\\b"),"g");var b=g.replace(U9,""),h=a9(y||v?"".concat(y," ").concat(v," { ").concat(b," }"):b);o.namespace&&(h=yl(h,o.namespace));var f=[];return Wu(h,p9(d.concat(f9(function(C){return f.push(C)})))),f};return m.hash=l.length?l.reduce(function(g,v){return v.name||R4(15),q4(g,v.name)},5381).toString():"",m}var W9=new Zu,Y1=V9(),vl=be.createContext({shouldForwardProp:void 0,styleSheet:W9,stylis:Y1});vl.Consumer;be.createContext(void 0);function e3(){return p.exports.useContext(vl)}var Q9=function(){function e(t,n){var u=this;this.inject=function(r,i){i===void 0&&(i=Y1);var o=u.name+i.hash;r.hasNameForId(u.id,o)||r.insertRules(u.id,o,i(u.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,wi(this,function(){throw R4(12,String(u.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Y1),this.name+t.hash},e}(),Z9=function(e){return e>="A"&&e<="Z"};function W2(e){for(var t="",n=0;n<e.length;n++){var u=e[n];if(n===1&&u==="-"&&e[0]==="-")return e;Z9(u)?t+="-"+u.toLowerCase():t+=u}return t.startsWith("ms-")?"-"+t:t}var wl=function(e){return e==null||e===!1||e===""},El=function(e){var t,n,u=[];for(var r in e){var i=e[r];e.hasOwnProperty(r)&&!wl(i)&&(Array.isArray(i)&&i.isCss||P4(i)?u.push("".concat(W2(r),":"),i,";"):mn(i)?u.push.apply(u,hn(hn(["".concat(r," {")],El(i),!1),["}"],!1)):u.push("".concat(W2(r),": ").concat((t=r,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in m9||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return u};function u4(e,t,n,u){if(wl(e))return[];if(vi(e))return[".".concat(e.styledComponentId)];if(P4(e)){if(!P4(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var r=e(t);return u4(r,t,n,u)}var i;return e instanceof Q9?n?(e.inject(n,u),[e.getName(u)]):[e]:mn(e)?El(e):Array.isArray(e)?Array.prototype.concat.apply(Lr,e.map(function(o){return u4(o,t,n,u)})):[e.toString()]}function Sl(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(P4(n)&&!vi(n))return!1}return!0}var _9=pl("6.0.5"),q9=function(){function e(t,n,u){this.rules=t,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&Sl(t),this.componentId=n,this.baseHash=q4(_9,n),this.baseStyle=u,Zu.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,u){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=S4(r,this.staticRulesId);else{var i=X1(u4(this.rules,t,n,u)),o=K1(q4(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=u(i,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}r=S4(r,o),this.staticRulesId=o}else{for(var l=q4(this.baseHash,u.hash),c="",d=0;d<this.rules.length;d++){var m=this.rules[d];if(typeof m=="string")c+=m;else if(m){var g=X1(u4(m,t,n,u));l=q4(l,g),c+=g}}if(c){var v=K1(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,u(c,".".concat(v),void 0,this.componentId)),r=S4(r,v)}}return r},e}(),Cn=be.createContext(void 0);Cn.Consumer;function G9(e){var t=be.useContext(Cn),n=p.exports.useMemo(function(){return function(u,r){if(!u)throw R4(14);if(P4(u)){var i=u(r);return i}if(Array.isArray(u)||typeof u!="object")throw R4(8);return r?Ce(Ce({},r),u):u}(e.theme,t)},[e.theme,t]);return e.children?be.createElement(Cn.Provider,{value:n},e.children):null}var l1={};function K9(e,t,n){var u=vi(e),r=e,i=!o1(e),o=t.attrs,s=o===void 0?Lr:o,l=t.componentId,c=l===void 0?function(C,k){var D=typeof C!="string"?"sc":z2(C);l1[D]=(l1[D]||0)+1;var F="".concat(D,"-").concat(fl("6.0.5"+D+l1[D]));return k?"".concat(k,"-").concat(F):F}(t.displayName,t.parentComponentId):l,d=t.displayName;d===void 0&&function(C){return o1(C)?"styled.".concat(C):"Styled(".concat(w9(C),")")}(e);var m=t.displayName&&t.componentId?"".concat(z2(t.displayName),"-").concat(t.componentId):t.componentId||c,g=u&&r.attrs?r.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(u&&r.shouldForwardProp){var y=r.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;v=function(C,k){return y(C,k)&&E(C,k)}}else v=y}var b=new q9(n,m,u?r.componentStyle:void 0);function h(C,k){return function(D,F,S){var A=D.attrs,N=D.componentStyle,I=D.defaultProps,xe=D.foldedComponentIds,Ut=D.styledComponentId,Ft=D.target,Zn=be.useContext(Cn),e1=e3(),x4=D.shouldForwardProp||e1.shouldForwardProp,_e=function(Dt,ze,Vt){for(var je,qe=Ce(Ce({},ze),{className:void 0,theme:Vt}),t1=0;t1<Dt.length;t1+=1){var _n=P4(je=Dt[t1])?je(qe):je;for(var Wt in _n)qe[Wt]=Wt==="className"?S4(qe[Wt],_n[Wt]):Wt==="style"?Ce(Ce({},qe[Wt]),_n[Wt]):_n[Wt]}return ze.className&&(qe.className=S4(qe.className,ze.className)),qe}(A,F,cl(F,Zn,I)||g0),P=_e.as||Ft,O={};for(var T in _e)_e[T]===void 0||T[0]==="$"||T==="as"||T==="theme"||(T==="forwardedAs"?O.as=_e.forwardedAs:x4&&!x4(T,P)||(O[T]=_e[T]));var G=function(Dt,ze){var Vt=e3(),je=Dt.generateAndInjectStyles(ze,Vt.styleSheet,Vt.stylis);return je}(N,_e),ee=S4(xe,Ut);return G&&(ee+=" "+G),_e.className&&(ee+=" "+_e.className),O[o1(P)&&!dl.has(P)?"class":"className"]=ee,O.ref=S,p.exports.createElement(P,O)}(f,C,k)}var f=be.forwardRef(h);return f.attrs=g,f.componentStyle=b,f.shouldForwardProp=v,f.foldedComponentIds=u?S4(r.foldedComponentIds,r.styledComponentId):"",f.styledComponentId=m,f.target=u?r.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=u?function(k){for(var D=[],F=1;F<arguments.length;F++)D[F-1]=arguments[F];for(var S=0,A=D;S<A.length;S++)J1(k,A[S],!0);return k}({},r.defaultProps,C):C}}),wi(f,function(){return".".concat(f.styledComponentId)}),i&&gl(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function Q2(e,t){for(var n=[e[0]],u=0,r=t.length;u<r;u+=1)n.push(t[u],e[u+1]);return n}var Z2=function(e){return Object.assign(e,{isCss:!0})};function Mt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(P4(e)||mn(e)){var u=e;return Z2(u4(Q2(Lr,hn([u],t,!0))))}var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?u4(r):Z2(u4(Q2(r,t)))}function t3(e,t,n){if(n===void 0&&(n=g0),!t)throw R4(1,t);var u=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,Mt.apply(void 0,hn([r],i,!1)))};return u.attrs=function(r){return t3(e,t,Ce(Ce({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},u.withConfig=function(r){return t3(e,t,Ce(Ce({},n),r))},u}var kl=function(e){return t3(K9,e)},x=kl;dl.forEach(function(e){x[e]=kl(e)});var X9=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Sl(t),Zu.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,u,r){var i=r(X1(u4(this.rules,n,u,r)),""),o=this.componentId+t;u.insertRules(o,o,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,u,r){t>2&&Zu.registerId(this.componentId+t),this.removeStyles(t,u),this.createStyles(t,n,u,r)},e}();function J9(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var u=Mt.apply(void 0,hn([e],t,!1)),r="sc-global-".concat(fl(JSON.stringify(u))),i=new X9(u,r),o=function(l){var c=e3(),d=be.useContext(Cn),m=be.useRef(c.styleSheet.allocateGSInstance(r)).current;return c.styleSheet.server&&s(m,l,c.styleSheet,d,c.stylis),be.useLayoutEffect(function(){if(!c.styleSheet.server)return s(m,l,c.styleSheet,d,c.stylis),function(){return i.removeStyles(m,c.styleSheet)}},[m,l,c.styleSheet,d,c.stylis]),null};function s(l,c,d,m,g){if(i.isStatic)i.renderStyles(l,g9,d,g);else{var v=Ce(Ce({},c),{theme:cl(c,m,o.defaultProps)});i.renderStyles(l,v,d,g)}}return be.memo(o)}const M={colors:{background:"#F9F9F9",grey:"#ACABAB",lightGrey:"#CDCDCD",dark:"#2E2E2E",green:"#758650",lightGreen:"#B5C268",lightYellow:"#FFE27C",yellow:"#E8B535",midYellow:"#D7A323",darkYellow:"#B58200"},fonts:{openSans:"Open Sans"},fontSizes:{subheadline:"1rem",bodyText:"1.125rem",buttonText:"1.125rem",h3:"1.5rem",h2:"2.5rem",h1:"3.5rem",mobileSubheadline:"0.75rem",mobileBodyText:"1rem",mobileButtonText:"1rem",tabletH3:"1.5rem",tabletH2:"2.25rem",tabletH1:"2.625rem",mobileH3:"1.25rem",mobileH2:"1.75rem",mobileH1:"2rem"},fontWeights:{regular:400,semiBold:600,bold:700},lineHeights:{h1:1.2,normal:1.4},paddings:{container:"0 84px",containerTablet:"0 40px",containerMobile:"0 16px",button:"15.5px 24px",buttonTablet:"17px 12.5px",input:"12px"},transitions:{long:"all ease 0.3s",quick:"all ease 0.1s"},headerHeight:"96px"},re=x.div`
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
`,de=x.div`
  display: flex;
  flex-direction: ${({$direction:e})=>e};
  align-items: ${({$align:e})=>e};
  justify-content: ${({$justify:e})=>e};
  gap: ${({$gap:e})=>e};
  height: ${({$fullheight:e,$height:t})=>e?"calc(100vh - 96px)":t};
  width: ${({$width:e})=>e||"auto"};
`,Ei=J9`
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
`,Y9=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:64,height:48,viewBox:"0 0 64 48",fill:"none",...e},p.exports.createElement("path",{d:"M11.2391 7.31769C11.2391 8.47842 10.9502 9.53822 10.3726 10.4971C9.79489 11.4391 9.02184 12.2298 8.05339 12.869C8.5631 12.9699 9.00485 13.1466 9.37863 13.3989C9.75242 13.6344 10.0582 13.9288 10.2961 14.2821C10.551 14.6353 10.7379 15.0391 10.8568 15.4933C10.9927 15.9307 11.0607 16.3933 11.0607 16.8811C11.0607 17.84 10.8313 18.6811 10.3726 19.4044C9.93082 20.111 9.35315 20.6997 8.63956 21.1708C7.92596 21.625 7.12742 21.9698 6.24393 22.2053C5.37742 22.424 4.51092 22.5334 3.64441 22.5334C3.16869 22.5334 2.69296 22.4997 2.21723 22.4324C1.7415 22.3651 1.29126 22.2474 0.866504 22.0792C0.713592 22.0287 0.586164 21.8268 0.484223 21.4736C0.382281 21.1035 0.29733 20.6577 0.229369 20.1362C0.178398 19.6147 0.135922 19.0512 0.101942 18.4456C0.0679611 17.84 0.0424757 17.2596 0.0254854 16.7045C0.00849513 16.1493 0 15.6615 0 15.2409C0 14.8204 0 14.526 0 14.3578C0 13.769 0 13.1802 0 12.5914C0 11.9858 0.0169903 11.3887 0.0509708 10.7999C0.0509708 10.6485 0.0509708 10.413 0.0509708 10.0933C0.0679611 9.77373 0.0764562 9.42046 0.0764562 9.03355C0.0934465 8.62982 0.110437 8.20926 0.127427 7.77188C0.161408 7.33451 0.195388 6.93078 0.229369 6.56069C0.28034 6.17378 0.339805 5.84575 0.407766 5.57659C0.492718 5.30744 0.586165 5.13921 0.688106 5.07193C1.07888 4.81959 1.51213 4.58408 1.98786 4.36539C2.46359 4.12988 2.95631 3.92802 3.46602 3.75979C3.97573 3.59157 4.48543 3.45699 4.99514 3.35606C5.50485 3.25513 5.98907 3.20466 6.44781 3.20466C7.07645 3.20466 7.67961 3.29718 8.25728 3.48222C8.85194 3.65045 9.36164 3.91119 9.7864 4.26446C10.2281 4.61773 10.5764 5.0551 10.8313 5.57659C11.1031 6.08126 11.2391 6.66162 11.2391 7.31769ZM7.00849 8.65505C7.00849 8.36907 6.91504 8.1588 6.72815 8.02422C6.55825 7.88964 6.32888 7.82235 6.04004 7.82235C5.80218 7.82235 5.54733 7.87282 5.27548 7.97375C5.02063 8.07468 4.79975 8.20926 4.61286 8.37749C4.56189 8.42795 4.51092 8.57094 4.45995 8.80645C4.42597 9.04196 4.39199 9.31112 4.35801 9.61392C4.34102 9.89989 4.32403 10.1775 4.30704 10.4466C4.30704 10.6989 4.30704 10.8672 4.30704 10.9513C4.30704 10.9849 4.30704 11.0438 4.30704 11.1279C4.30704 11.1952 4.30704 11.2709 4.30704 11.355C4.32403 11.4391 4.34102 11.5148 4.35801 11.5821C4.375 11.6494 4.40048 11.683 4.43446 11.683C4.7233 11.683 5.02063 11.5821 5.32645 11.3802C5.63228 11.1616 5.90412 10.9008 6.14199 10.598C6.39684 10.2784 6.60072 9.94195 6.75364 9.58868C6.92354 9.23542 7.00849 8.92421 7.00849 8.65505ZM6.90655 15.9475C6.90655 15.6615 6.80461 15.4596 6.60072 15.3419C6.39684 15.2241 6.16747 15.1652 5.91262 15.1652C5.67475 15.1652 5.4199 15.2241 5.14805 15.3419C4.8932 15.4428 4.68082 15.569 4.51092 15.7204C4.45995 15.754 4.41747 15.8381 4.38349 15.9727C4.3665 16.1073 4.34951 16.2587 4.33252 16.4269C4.33252 16.5783 4.32403 16.7297 4.30704 16.8811C4.30704 17.0157 4.30704 17.1082 4.30704 17.1587C4.30704 17.1923 4.30704 17.2596 4.30704 17.3605C4.30704 17.4615 4.30704 17.5708 4.30704 17.6886C4.32403 17.7895 4.34102 17.8904 4.35801 17.9914C4.39199 18.0755 4.42597 18.1175 4.45995 18.1175C4.69781 18.1175 4.96116 18.0502 5.25 17.9157C5.53883 17.7811 5.80218 17.6129 6.04004 17.411C6.2949 17.2091 6.49878 16.982 6.65169 16.7297C6.8216 16.4605 6.90655 16.1998 6.90655 15.9475Z",fill:"#758650"}),p.exports.createElement("path",{d:"M21.2039 5.09716C21.2039 5.41678 21.1274 5.70275 20.9745 5.95509C20.8386 6.20742 20.6517 6.42611 20.4138 6.61115C20.176 6.77938 19.9126 6.92236 19.6238 7.04012C19.3349 7.15787 19.0546 7.24199 18.7828 7.29245C18.7488 9.19336 18.6723 11.027 18.5534 12.7933C18.4514 14.5596 18.2815 16.3848 18.0437 18.2689H18.1966C18.4684 18.2689 18.7318 18.3026 18.9866 18.3699C19.2585 18.4203 19.4963 18.5213 19.7002 18.6727C19.9211 18.8072 20.091 18.9839 20.2099 19.2026C20.3459 19.4044 20.4138 19.6568 20.4138 19.9596C20.4138 20.3465 20.2864 20.6829 20.0315 20.9689C19.7937 21.2549 19.4709 21.4988 19.0631 21.7007C18.6723 21.9025 18.2306 22.0708 17.7378 22.2053C17.2451 22.3399 16.7524 22.4408 16.2597 22.5081C15.767 22.5922 15.2997 22.6511 14.858 22.6848C14.4163 22.7184 14.0595 22.7352 13.7876 22.7352C13.5837 22.7352 13.3289 22.7268 13.023 22.71C12.7342 22.6932 12.4539 22.6427 12.182 22.5586C11.9272 22.4745 11.7063 22.3483 11.5194 22.1801C11.3325 22.0119 11.2391 21.7848 11.2391 21.4988C11.2391 21.1455 11.3155 20.8343 11.4684 20.5652C11.6044 20.2792 11.7913 20.0269 12.0291 19.8082C12.267 19.5895 12.5303 19.4128 12.8192 19.2783C13.125 19.1437 13.4308 19.0428 13.7366 18.9755C13.8556 18.0502 13.966 17.1334 14.068 16.225C14.1699 15.2998 14.2379 14.3662 14.2718 13.4241C14.3058 12.4653 14.3398 11.5232 14.3738 10.598C14.4078 9.65597 14.4417 8.71393 14.4757 7.77188C14.3568 7.78871 14.2463 7.80553 14.1444 7.82235C14.0425 7.82235 13.949 7.82235 13.8641 7.82235C13.6262 7.82235 13.3714 7.79712 13.0995 7.74665C12.8277 7.69619 12.5728 7.61207 12.3349 7.49432C12.0971 7.35974 11.8932 7.19993 11.7233 7.01488C11.5704 6.82984 11.4939 6.59434 11.4939 6.30836C11.4939 5.7364 11.7318 5.26538 12.2075 4.89529C12.7002 4.5252 13.2779 4.23923 13.9405 4.03736C14.6201 3.83549 15.3082 3.70092 16.0048 3.63363C16.7014 3.54952 17.2621 3.50746 17.6869 3.50746C17.9247 3.50746 18.2391 3.52428 18.6298 3.55793C19.0206 3.59157 19.4029 3.66727 19.7767 3.78502C20.1675 3.90278 20.4988 4.06259 20.7706 4.26446C21.0595 4.46633 21.2039 4.74389 21.2039 5.09716Z",fill:"#758650"}),p.exports.createElement("path",{d:"M32.9781 16.1746C32.8252 16.9316 32.5789 17.7222 32.2391 18.5465C31.9162 19.354 31.4915 20.0941 30.9648 20.767C30.4551 21.4399 29.8434 21.9866 29.1298 22.4072C28.4162 22.8446 27.6007 23.0633 26.6832 23.0633C26.0036 23.0633 25.392 22.9287 24.8483 22.6595C24.3046 22.3904 23.8119 22.0287 23.3701 21.5745C22.9284 21.1203 22.5461 20.5988 22.2233 20.01C21.9005 19.4213 21.6286 18.8157 21.4077 18.1932C21.2039 17.554 21.051 16.9232 20.949 16.3007C20.8471 15.6783 20.7961 15.098 20.7961 14.5596C20.7961 13.8026 20.8641 12.9952 21 12.1372C21.1529 11.2625 21.3738 10.4046 21.6626 9.56345C21.9514 8.70552 22.3167 7.88964 22.7585 7.11582C23.2002 6.32518 23.7184 5.63547 24.3131 5.04669C24.9247 4.44109 25.6043 3.96166 26.3519 3.60839C27.1165 3.23831 27.966 3.05326 28.9005 3.05326C29.4951 3.05326 30.0473 3.17101 30.557 3.40652C31.0667 3.62521 31.5085 3.92801 31.8823 4.31492C32.256 4.68501 32.5449 5.1308 32.7488 5.65229C32.9696 6.17377 33.0801 6.7205 33.0801 7.29245V7.51955C33.0801 7.82235 33.0631 8.20085 33.0291 8.65505C33.0121 9.09243 32.9357 9.51299 32.7997 9.91672C32.6638 10.3205 32.4599 10.6737 32.1881 10.9765C31.9162 11.2625 31.534 11.4055 31.0412 11.4055C30.4466 11.4055 29.9963 11.2709 29.6905 11.0017C29.3847 10.7326 29.2318 10.2868 29.2318 9.66438C29.2318 9.42887 29.2403 9.19336 29.2573 8.95785C29.2743 8.72234 29.2827 8.48683 29.2827 8.25132C29.2827 7.89805 29.2233 7.6289 29.1043 7.44385C28.9854 7.24199 28.7391 7.14105 28.3653 7.14105C27.9405 7.14105 27.5582 7.27563 27.2184 7.54478C26.8786 7.81394 26.5813 8.16721 26.3264 8.60459C26.0716 9.04196 25.8507 9.53822 25.6638 10.0933C25.4769 10.6485 25.324 11.212 25.2051 11.784C25.0861 12.3391 25.0012 12.8774 24.9502 13.3989C24.8993 13.9204 24.8738 14.3662 24.8738 14.7363C24.8738 15.0391 24.8908 15.3923 24.9247 15.7961C24.9587 16.183 25.0267 16.5615 25.1286 16.9316C25.2476 17.2848 25.4175 17.5876 25.6383 17.84C25.8592 18.0923 26.148 18.2185 26.5048 18.2185C27.1165 18.2185 27.6092 18.0334 27.983 17.6633C28.3568 17.2764 28.6116 16.7886 28.7476 16.1998C28.5097 16.1662 28.2718 16.1157 28.034 16.0484C27.8131 15.9643 27.6007 15.8549 27.3968 15.7204C27.2099 15.569 27.057 15.3923 26.9381 15.1905C26.8192 14.9718 26.7597 14.7195 26.7597 14.4335C26.7597 13.912 26.9381 13.5083 27.2949 13.2223C27.6517 12.9195 28.0679 12.6924 28.5437 12.541C29.0364 12.3896 29.5376 12.2971 30.0473 12.2634C30.557 12.2129 30.9648 12.1877 31.2706 12.1877C31.4915 12.1877 31.8143 12.2045 32.2391 12.2382C32.6638 12.2718 33.0801 12.3475 33.4878 12.4653C33.9126 12.5662 34.2779 12.7176 34.5837 12.9195C34.8895 13.1213 35.0424 13.3821 35.0424 13.7017C35.0424 14.341 34.864 14.8961 34.5073 15.3671C34.1674 15.8213 33.6577 16.0905 32.9781 16.1746Z",fill:"#758650"}),p.exports.createElement("path",{d:"M12.1311 43.7103C12.1311 44.1309 11.9527 44.5262 11.5959 44.8963C11.2561 45.2664 10.8058 45.6028 10.2451 45.9056C9.70146 46.2084 9.0898 46.4776 8.41019 46.7131C7.73058 46.9318 7.05946 47.1168 6.39684 47.2682C5.73422 47.4365 5.10558 47.5626 4.51092 47.6467C3.93325 47.7308 3.47451 47.7729 3.13471 47.7729C2.81189 47.7729 2.46359 47.7393 2.08981 47.672C1.73301 47.6215 1.43568 47.4953 1.19782 47.2935C1.0619 47.1925 0.942964 46.9654 0.841023 46.6122C0.739081 46.2589 0.637137 45.8383 0.535196 45.3505C0.450244 44.8627 0.373788 44.3412 0.305827 43.786C0.237866 43.2141 0.178398 42.659 0.127427 42.1206C0.0934468 41.5823 0.0594706 41.0861 0.0254901 40.6319C0.00849982 40.1777 0 39.8244 0 39.5721C0 39.1515 0.00849982 38.6469 0.0254901 38.0581C0.0594706 37.4525 0.101943 36.8132 0.152914 36.1404C0.203884 35.4506 0.271844 34.7525 0.356796 34.046C0.441747 33.3395 0.535195 32.675 0.637137 32.0526C0.756069 31.4133 0.891989 30.8414 1.0449 30.3367C1.2148 29.832 1.39321 29.4367 1.5801 29.1507C1.90292 28.6965 2.31068 28.4694 2.8034 28.4694C3.1432 28.4694 3.43204 28.5872 3.6699 28.8227C3.90777 29.0414 4.09466 29.3358 4.23058 29.7059C4.38349 30.0591 4.49393 30.4629 4.56189 30.9171C4.64685 31.3544 4.70631 31.7918 4.74029 32.2292C4.77427 32.6666 4.79126 33.0703 4.79126 33.4404C4.79126 33.8105 4.79126 34.1049 4.79126 34.3236C4.79126 35.6357 4.75728 36.9394 4.68932 38.2347C4.63835 39.5132 4.61286 40.8085 4.61286 42.1206V43.1047C5.37743 42.8692 6.20995 42.6505 7.11044 42.4487C8.01092 42.23 8.86893 42.1206 9.68447 42.1206C9.9733 42.1206 10.2621 42.1375 10.551 42.1711C10.8568 42.2048 11.1201 42.2805 11.341 42.3982C11.5789 42.4991 11.7658 42.659 11.9017 42.8776C12.0546 43.0795 12.1311 43.3571 12.1311 43.7103Z",fill:"#758650"}),p.exports.createElement("path",{d:"M25.6383 43.458C25.6383 43.7945 25.6043 44.1982 25.5364 44.6692C25.4854 45.1402 25.375 45.5944 25.2051 46.0318C25.0352 46.4524 24.8058 46.814 24.517 47.1168C24.2281 47.4028 23.8459 47.5458 23.3701 47.5458C22.7415 47.5458 22.2658 47.3187 21.943 46.8645C21.6371 46.4103 21.4163 45.872 21.2803 45.2496C21.1444 44.6103 21.0595 43.9627 21.0255 43.3066C21.0085 42.6505 20.9915 42.1291 20.9745 41.7421C19.7512 41.944 18.5449 42.1206 17.3556 42.272C17.3216 42.659 17.2451 43.1384 17.1262 43.7103C17.0243 44.2823 16.8544 44.8374 16.6165 45.3757C16.3956 45.8972 16.0983 46.3514 15.7245 46.7383C15.3677 47.1253 14.926 47.3187 14.3993 47.3187C13.9915 47.3187 13.6687 47.1757 13.4308 46.8897C13.2099 46.5869 13.04 46.2337 12.9211 45.8299C12.8022 45.4262 12.7257 45.0141 12.6917 44.5935C12.6748 44.1561 12.6663 43.7945 12.6663 43.5085C12.6663 42.5496 12.7427 41.6076 12.8956 40.6823C13.0485 39.7403 13.2269 38.8067 13.4308 37.8815C13.5328 37.3936 13.6687 36.8217 13.8386 36.1656C14.0085 35.5095 14.2124 34.8366 14.4502 34.1469C14.7051 33.4404 14.9939 32.7507 15.3167 32.0778C15.6565 31.3881 16.0388 30.7741 16.4636 30.2358C16.8883 29.6975 17.3726 29.2601 17.9163 28.9236C18.4599 28.5872 19.0631 28.419 19.7257 28.419C20.3713 28.419 20.932 28.562 21.4078 28.8479C21.8835 29.1339 22.2997 29.5124 22.6565 29.9834C23.0133 30.4545 23.3107 30.9928 23.5485 31.5984C23.7864 32.1871 23.9818 32.7927 24.1347 33.4152C24.3046 34.0208 24.4405 34.618 24.5425 35.2067C24.6614 35.7955 24.7633 36.317 24.8483 36.7712C25.0692 37.8646 25.256 38.9749 25.409 40.102C25.5619 41.2122 25.6383 42.3309 25.6383 43.458ZM20.7196 37.3263C20.7196 37.1245 20.7027 36.7964 20.6687 36.3422C20.6517 35.8712 20.6007 35.4086 20.5158 34.9544C20.4308 34.4834 20.2949 34.0712 20.108 33.718C19.9381 33.3479 19.7002 33.1628 19.3944 33.1628C19.2245 33.1628 19.0631 33.2806 18.9102 33.5161C18.7573 33.7348 18.6213 34.0208 18.5024 34.374C18.3835 34.7105 18.273 35.089 18.1711 35.5095C18.0862 35.9301 18.0097 36.3338 17.9417 36.7207C17.8738 37.1076 17.8228 37.4609 17.7888 37.7805C17.7548 38.0833 17.7294 38.302 17.7124 38.4366C18.7318 38.3525 19.7342 38.2263 20.7196 38.0581V37.3263Z",fill:"#758650"}),p.exports.createElement("path",{d:"M39.1201 33.6675C39.1201 34.5759 38.9162 35.4675 38.5085 36.3422C38.1177 37.217 37.591 38.0076 36.9284 38.7141C36.2657 39.4039 35.5097 39.9758 34.6602 40.43C33.8107 40.8674 32.9357 41.1113 32.0352 41.1618C32.0182 41.4646 32.0012 41.8515 31.9842 42.3225C31.9842 42.7767 31.9587 43.2561 31.9077 43.7608C31.8568 44.2655 31.7803 44.7701 31.6784 45.2748C31.5934 45.7795 31.4575 46.2337 31.2706 46.6374C31.1007 47.0411 30.8713 47.3692 30.5825 47.6215C30.3107 47.8738 29.9709 48 29.5631 48C29.0874 48 28.7051 47.8402 28.4162 47.5206C28.1444 47.2178 27.932 46.8477 27.7791 46.4103C27.6432 45.9729 27.5497 45.5187 27.4988 45.0477C27.4478 44.5599 27.4138 44.1477 27.3968 43.8113C27.3628 43.3234 27.3374 42.844 27.3204 42.373C27.3204 41.902 27.3204 41.4225 27.3204 40.9347C27.3204 40.716 27.3204 40.3123 27.3204 39.7235C27.3204 39.1179 27.3204 38.4366 27.3204 37.6796C27.3374 36.9058 27.3543 36.1067 27.3713 35.2824C27.3883 34.4413 27.4138 33.6675 27.4478 32.961C27.4818 32.2376 27.5158 31.6236 27.5497 31.1189C27.6007 30.6143 27.6602 30.3199 27.7281 30.2358C27.7451 30.2189 27.7961 30.1853 27.8811 30.1348C27.966 30.0675 28.0595 30.0087 28.1614 29.9582C28.2633 29.8909 28.3568 29.832 28.4417 29.7816C28.5267 29.7311 28.5861 29.6975 28.6201 29.6806C29.4017 29.2433 30.2597 28.8648 31.1942 28.5451C32.1286 28.2255 33.0546 28.0657 33.9721 28.0657C34.7536 28.0657 35.4587 28.2255 36.0873 28.5451C36.733 28.8479 37.2767 29.2601 37.7184 29.7816C38.1772 30.2862 38.5255 30.8834 38.7633 31.5731C39.0012 32.246 39.1201 32.9441 39.1201 33.6675ZM34.7111 34.2479C34.7111 33.9114 34.6262 33.617 34.4563 33.3647C34.3034 33.1124 34.04 32.9862 33.6662 32.9862C33.3434 32.9862 33.0206 33.0535 32.6978 33.1881C32.375 33.3058 32.0777 33.432 31.8058 33.5666C31.8568 34.1553 31.8993 34.7273 31.9332 35.2824C31.9842 35.8376 31.9927 36.4095 31.9587 36.9983C32.2306 36.8637 32.5279 36.7123 32.8507 36.5441C33.1735 36.359 33.4708 36.1572 33.7427 35.9385C34.0145 35.7198 34.2439 35.4759 34.4308 35.2067C34.6177 34.9207 34.7111 34.6011 34.7111 34.2479Z",fill:"#758650"}),p.exports.createElement("path",{d:"M52.0922 43.458C52.0922 43.7945 52.0582 44.1982 51.9903 44.6692C51.9393 45.1402 51.8288 45.5944 51.6589 46.0318C51.489 46.4524 51.2597 46.814 50.9708 47.1168C50.682 47.4028 50.2997 47.5458 49.824 47.5458C49.1954 47.5458 48.7196 47.3187 48.3968 46.8645C48.091 46.4103 47.8701 45.872 47.7342 45.2496C47.5983 44.6103 47.5133 43.9627 47.4793 43.3066C47.4623 42.6505 47.4454 42.1291 47.4284 41.7421C46.2051 41.944 44.9988 42.1206 43.8094 42.272C43.7755 42.659 43.699 43.1384 43.5801 43.7103C43.4781 44.2823 43.3082 44.8374 43.0704 45.3757C42.8495 45.8972 42.5522 46.3514 42.1784 46.7383C41.8216 47.1253 41.3798 47.3187 40.8531 47.3187C40.4454 47.3187 40.1225 47.1757 39.8847 46.8897C39.6638 46.5869 39.4939 46.2337 39.375 45.8299C39.256 45.4262 39.1796 45.0141 39.1456 44.5935C39.1286 44.1561 39.1201 43.7945 39.1201 43.5085C39.1201 42.5496 39.1966 41.6076 39.3495 40.6823C39.5024 39.7403 39.6808 38.8067 39.8847 37.8815C39.9866 37.3936 40.1225 36.8217 40.2924 36.1656C40.4623 35.5095 40.6662 34.8366 40.9041 34.1469C41.159 33.4404 41.4478 32.7507 41.7706 32.0778C42.1104 31.3881 42.4927 30.7741 42.9174 30.2358C43.3422 29.6975 43.8264 29.2601 44.3701 28.9236C44.9138 28.5872 45.517 28.419 46.1796 28.419C46.8252 28.419 47.3859 28.562 47.8616 28.8479C48.3374 29.1339 48.7536 29.5124 49.1104 29.9834C49.4672 30.4545 49.7645 30.9928 50.0024 31.5984C50.2403 32.1871 50.4357 32.7927 50.5886 33.4152C50.7585 34.0208 50.8944 34.618 50.9963 35.2067C51.1153 35.7955 51.2172 36.317 51.3021 36.7712C51.523 37.8646 51.7099 38.9749 51.8628 40.102C52.0157 41.2122 52.0922 42.3309 52.0922 43.458ZM47.1735 37.3263C47.1735 37.1245 47.1565 36.7964 47.1225 36.3422C47.1056 35.8712 47.0546 35.4086 46.9696 34.9544C46.8847 34.4834 46.7488 34.0712 46.5619 33.718C46.392 33.3479 46.1541 33.1628 45.8483 33.1628C45.6784 33.1628 45.517 33.2806 45.364 33.5161C45.2111 33.7348 45.0752 34.0208 44.9563 34.374C44.8374 34.7105 44.7269 35.089 44.625 35.5095C44.54 35.9301 44.4636 36.3338 44.3956 36.7207C44.3276 37.1076 44.2767 37.4609 44.2427 37.7805C44.2087 38.0833 44.1832 38.302 44.1662 38.4366C45.1856 38.3525 46.1881 38.2263 47.1735 38.0581V37.3263Z",fill:"#758650"}),p.exports.createElement("path",{d:"M57.2817 1.09879C53.6383 0.62618 52.6744 8.18767 56.141 8.63861C59.5488 9.0825 60.8661 1.56431 57.2817 1.09879ZM50.2933 0.0267887C50.2393 0.0186128 50.1852 0.0138761 50.1289 0.00910539C46.4695 -0.298862 45.9141 7.30568 49.3961 7.6C52.7655 7.88527 53.6992 0.545837 50.2933 0.0267887ZM43.9644 4.48051C43.8573 4.46077 43.7489 4.44845 43.64 4.44365C39.9737 4.28077 39.7774 11.9105 43.2659 12.0668C46.5882 12.216 47.2082 5.07309 43.9644 4.48051ZM62.0768 7.66507C58.4675 6.98011 56.9746 14.4554 60.4088 15.1085C63.7844 15.7508 65.6277 8.33947 62.0768 7.66507ZM51.8882 10.383C48.1643 9.83004 50.3674 14.1158 43.4251 15.2017C38.0443 16.0433 40.2244 21.722 44.5718 22.4834C46.9579 22.9014 48.1354 21.1807 50.0887 21.5232C52.3066 21.9118 52.1923 23.6165 55.4388 24.1852C59.5841 24.9111 62.8887 20.138 58.4498 17.5662C52.7981 14.2918 55.956 11.1173 52.0712 10.4143C52.009 10.4032 51.9473 10.3918 51.8882 10.383Z",fill:"#758650"})),e7=x.header`
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
`,t7=x(Y9)``;var Br={exports:{}},Pr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n7=p.exports,u7=Symbol.for("react.element"),r7=Symbol.for("react.fragment"),i7=Object.prototype.hasOwnProperty,o7=n7.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s7={key:!0,ref:!0,__self:!0,__source:!0};function Fl(e,t,n){var u,r={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(u in t)i7.call(t,u)&&!s7.hasOwnProperty(u)&&(r[u]=t[u]);if(e&&e.defaultProps)for(u in t=e.defaultProps,t)r[u]===void 0&&(r[u]=t[u]);return{$$typeof:u7,type:e,key:i,ref:o,props:r,_owner:o7.current}}Pr.Fragment=r7;Pr.jsx=Fl;Pr.jsxs=Fl;Br.exports=Pr;const a=Br.exports.jsx,w=Br.exports.jsxs,Ue=Br.exports.Fragment;function Dl(){return w(e7,{children:[a(pt,{to:".",end:!0,children:a(t7,{})}),"\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u044C"]})}const l7=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:4,height:29,viewBox:"0 0 4 29",fill:"none",...e},p.exports.createElement("path",{d:"M2 2L2 27",stroke:"#758650",strokeWidth:4,strokeLinecap:"round"})),a7=x.span`
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
`,c7=x(l7)`
  display: ${({$active:e})=>!e&&" none"};
  height: 100%;
  position: absolute;
  left: -16px;
`,d7=x.button`
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
`;function y4(e){const{children:t,text:n,link:u}=e;return a(d7,{children:w(Et,{to:u,children:[a(c7,{$active:(()=>Ht().pathname===u)()})," ",t," ",a(a7,{children:n})]})})}const p7=x.div`
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
`,f7=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},p.exports.createElement("path",{d:"M3 18.5831C3.13419 18.2799 3.37368 18.1711 3.71043 18.1859C4.11081 18.2035 4.51301 18.1978 4.91411 18.188C5.46074 18.1749 5.99567 18.2052 6.50537 18.5138C6.50976 18.425 6.51451 18.3648 6.51488 18.3046C6.52073 17.4086 6.49294 16.5112 6.53755 15.6173C6.63554 13.6454 7.55877 12.075 9.13979 10.8462C9.47545 10.5852 9.8239 10.3394 10.1599 10.0784C11.2345 9.24403 11.7764 8.15928 11.7947 6.8301C11.8163 5.26531 12.9077 3.94634 14.4865 3.59345C14.7447 3.53569 15.0152 3.51315 15.2807 3.50681C15.8277 3.49378 16.375 3.50857 16.922 3.50011C17.1582 3.49659 17.34 3.57408 17.5038 3.73573C17.9667 4.19217 18.4361 4.64298 18.9107 5.08886C18.9718 5.14627 19.0756 5.18888 19.1605 5.18994C19.7864 5.19839 20.4128 5.19381 21.0391 5.19487C21.4735 5.19557 21.6852 5.40055 21.6834 5.82318C21.6815 6.25039 21.7155 6.68253 21.6618 7.10411C21.5119 8.27656 20.5616 9.06371 19.3294 9.07604C18.9528 9.07991 18.5765 9.07674 18.1685 9.07674V9.28982C18.1685 10.5549 18.1604 11.82 18.1707 13.0847C18.1824 14.5308 17.6504 15.7321 16.4902 16.6654C16.4434 16.7031 16.4098 16.782 16.4087 16.8422C16.4017 17.2754 16.4087 17.709 16.4025 18.1422C16.401 18.2419 16.4419 18.2824 16.5308 18.3218C17.2156 18.6272 17.563 19.1498 17.5794 19.8743C17.5864 20.1905 17.5696 20.5072 17.5842 20.8227C17.5992 21.1475 17.4789 21.3778 17.1593 21.5H5.00699C4.97993 21.4891 4.95397 21.4732 4.92581 21.4687C4.22123 21.3464 3.67314 20.9932 3.32396 20.3941C3.17587 20.1402 3.10567 19.8436 3 19.5668C3 19.2386 3 18.9107 3 18.5824V18.5831ZM16.4858 20.4371C16.4858 20.248 16.4891 20.0676 16.4851 19.8873C16.4763 19.5002 16.2624 19.2812 15.8639 19.2446C15.5202 19.2129 15.3147 19.0139 15.3121 18.6832C15.3063 17.9509 15.3096 17.2187 15.311 16.4865C15.3114 16.2939 15.3845 16.1329 15.5531 16.0192C16.6215 15.2982 17.091 14.2991 17.0778 13.0548C17.0624 11.5963 17.0741 10.1379 17.0741 8.67947C17.0741 8.2033 17.2624 8.02439 17.7579 8.02227C18.3414 8.01981 18.9261 8.03214 19.5086 8.00537C19.9992 7.98248 20.4373 7.62676 20.5367 7.16645C20.6 6.87448 20.5861 6.56736 20.608 6.24969C20.0084 6.24969 19.4504 6.24405 18.8925 6.2525C18.6625 6.25603 18.4855 6.18171 18.3261 6.02464C17.8581 5.56432 17.3835 5.11034 16.9067 4.65813C16.8558 4.60988 16.7765 4.56303 16.7096 4.56233C16.1867 4.55529 15.6631 4.54613 15.141 4.56303C14.0445 4.59861 13.0536 5.43577 12.9337 6.4846C12.8627 7.10411 12.8832 7.73594 12.9018 8.36108C12.9121 8.7087 13.1377 8.95876 13.4763 9.08872C14.077 9.3194 14.7117 8.89924 14.7209 8.26C14.73 7.61584 14.7202 6.97133 14.7249 6.32717C14.7275 5.99998 14.9629 5.7626 15.2708 5.76049C15.5812 5.75838 15.8156 5.99329 15.8167 6.32189C15.8193 6.99528 15.8273 7.66938 15.8112 8.34242C15.7922 9.14154 15.2544 9.82902 14.469 10.0956C13.6982 10.3573 12.8371 10.1379 12.2945 9.54164C12.2594 9.50325 12.2229 9.46591 12.1995 9.44091C11.9643 9.73429 11.7687 10.0562 11.4974 10.2996C10.9651 10.7771 10.4023 11.2258 9.83048 11.6597C8.3544 12.779 7.63263 14.2483 7.61398 16.0428C7.59936 17.4424 7.61106 18.8427 7.61106 20.2423C7.61106 20.305 7.61106 20.3677 7.61106 20.4371H13.4448C13.3179 19.8303 12.5943 19.2812 11.8872 19.2477C11.3793 19.2238 11.221 19.0516 11.2067 18.5585C11.1976 18.2447 11.2104 17.9136 11.112 17.6224C10.8477 16.8405 10.2429 16.4594 9.3972 16.4119C9.06557 16.3932 8.85386 16.159 8.87032 15.8565C8.88567 15.5705 9.12809 15.3532 9.44729 15.3648C9.65863 15.3725 9.87326 15.3937 10.0788 15.4405C11.3705 15.7367 12.2627 16.8046 12.3073 18.0894C12.3091 18.1436 12.3351 18.2313 12.3728 18.2447C12.5625 18.313 12.7596 18.3623 12.9666 18.4218C12.9666 18.3444 12.9666 18.2806 12.9666 18.2165C12.9666 17.6424 12.9647 17.0684 12.9673 16.4943C12.9684 16.2132 13.1318 16.0033 13.3845 15.9452C13.7432 15.8624 14.0591 16.1111 14.0602 16.4855C14.0631 17.3698 14.0609 18.2545 14.062 19.1389C14.062 19.1963 14.0518 19.2685 14.0818 19.3094C14.3359 19.6517 14.5052 20.0296 14.5999 20.4364H16.4869L16.4858 20.4371ZM4.1013 19.2551C4.09253 19.8137 4.47571 20.3057 5.02344 20.4054C5.29438 20.4547 5.57848 20.4381 5.85709 20.4452C6.07319 20.4505 6.28928 20.4462 6.50354 20.4462C6.52804 19.8482 6.08562 19.3129 5.49146 19.2629C5.03514 19.2245 4.57224 19.2551 4.1013 19.2551Z",fill:"#2E2E2E",stroke:"#2E2E2E",strokeWidth:.346154})),h7=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},p.exports.createElement("path",{d:"M17.4775 20.5676L17.4802 20.5664C17.7625 20.4383 18.0549 20.1843 18.2722 19.8563C18.4905 19.5271 18.5922 19.1861 18.5806 18.9116L17.4775 20.5676ZM17.4775 20.5676C16.8707 20.8456 16.1515 20.7269 15.1446 20.403C14.9831 20.351 14.8074 20.2915 14.625 20.2298C14.2937 20.1176 13.94 19.9978 13.608 19.9018C13.0725 19.7468 12.4893 19.6194 11.8899 19.6194C11.2866 19.6194 10.6994 19.7529 10.1625 19.9136C9.83697 20.011 9.48639 20.1332 9.15846 20.2476C8.96963 20.3134 8.78831 20.3766 8.62362 20.431C7.61425 20.7641 6.91651 20.8725 6.33836 20.5801L6.33838 20.5801M17.4775 20.5676L6.33838 20.5801M6.33838 20.5801L6.32992 20.5759M6.33838 20.5801L6.32992 20.5759M6.32992 20.5759C5.99748 20.413 5.679 20.0924 5.4562 19.6795M6.32992 20.5759L5.4562 19.6795M5.4562 19.6795C5.23321 19.2662 5.14162 18.8263 5.18449 18.4694M5.4562 19.6795L5.18449 18.4694M5.18449 18.4694C5.23924 18.0162 5.54314 17.6031 6.11628 17.106C6.33346 16.9177 6.56256 16.739 6.8087 16.547C6.88364 16.4885 6.96015 16.4288 7.03839 16.3673C7.35968 16.1144 7.70261 15.8353 8.00396 15.526C8.40049 15.1288 8.75584 14.658 9.08021 14.21C9.16171 14.0975 9.24096 13.9868 9.31884 13.878C9.5632 13.5368 9.79403 13.2144 10.0383 12.9119C10.6945 12.0996 11.2516 11.6894 11.8899 11.6894C12.5298 11.6894 13.1003 12.0984 13.7587 12.9013C14.035 13.2382 14.2973 13.6065 14.5743 13.9957C14.6199 14.0597 14.6658 14.1242 14.7123 14.1893C15.0309 14.6353 15.3746 15.1057 15.748 15.5073C16.0549 15.8441 16.4052 16.1601 16.7338 16.4519C16.7739 16.4876 16.8137 16.5228 16.8531 16.5577C17.1474 16.8186 17.4223 17.0621 17.673 17.3144C18.25 17.8949 18.558 18.3874 18.5806 18.9113L5.18449 18.4694ZM10.4048 6.54809L10.405 6.5489C10.5605 7.31346 10.4879 7.99542 10.2897 8.47327C10.0909 8.95236 9.80984 9.1494 9.55681 9.18799L9.55586 9.18814C9.29345 9.22851 8.91442 9.1154 8.5079 8.69687C8.11032 8.28754 7.76351 7.65316 7.60421 6.88678L7.60404 6.88596C7.44508 6.12554 7.5192 5.44586 7.72016 4.9673C7.92043 4.49038 8.20515 4.2849 8.463 4.2409C8.73399 4.20445 9.11272 4.32412 9.5125 4.73875C9.90744 5.14835 10.2498 5.78189 10.4048 6.54809ZM14.303 9.18799L14.3021 9.18785C14.0423 9.14856 13.7602 8.94948 13.5627 8.47327C13.3651 7.99708 13.2944 7.31667 13.4541 6.55288L13.455 6.54809C13.61 5.78189 13.9525 5.14797 14.3467 4.73808C14.7469 4.32194 15.1231 4.20477 15.3869 4.2409C15.6502 4.28503 15.935 4.49103 16.1364 4.96844C16.3383 5.44709 16.4148 6.12687 16.2652 6.88837C16.1005 7.65518 15.7536 8.28847 15.3569 8.69687C14.9515 9.11431 14.5721 9.22904 14.303 9.18799ZM3.298 8.78764C3.58841 8.66369 4.00896 8.6836 4.50602 8.96313C4.99558 9.23845 5.4851 9.73181 5.82942 10.3858C6.14963 11.0567 6.23536 11.7063 6.15368 12.201C6.07217 12.6946 5.84339 12.9734 5.57153 13.0913C5.28633 13.215 4.87181 13.1975 4.38282 12.9198C3.89932 12.6451 3.41521 12.1487 3.07987 11.4823C2.74561 10.818 2.65637 10.1671 2.73657 9.67018C2.81671 9.17372 3.04523 8.8988 3.298 8.78764ZM20.7018 8.78762C20.9545 8.89876 21.1831 9.17368 21.2632 9.67018C21.3434 10.1671 21.2542 10.818 20.9199 11.4823C20.5846 12.1487 20.1005 12.6451 19.617 12.9198C19.128 13.1975 18.7135 13.215 18.4283 13.0913C18.1564 12.9734 17.9276 12.6946 17.8461 12.201C17.7645 11.7063 17.8502 11.0567 18.1704 10.3858C18.5147 9.73181 19.0042 9.23845 19.4938 8.96313C19.9908 8.68362 20.4113 8.6637 20.7018 8.78762Z",stroke:"#2E2E2E",strokeWidth:1.5})),m7=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},p.exports.createElement("path",{d:"M15 8.5H15.01M3 6.5C3 5.70435 3.31607 4.94129 3.87868 4.37868C4.44129 3.81607 5.20435 3.5 6 3.5H18C18.7956 3.5 19.5587 3.81607 20.1213 4.37868C20.6839 4.94129 21 5.70435 21 6.5V18.5C21 19.2956 20.6839 20.0587 20.1213 20.6213C19.5587 21.1839 18.7956 21.5 18 21.5H6C5.20435 21.5 4.44129 21.1839 3.87868 20.6213C3.31607 20.0587 3 19.2956 3 18.5V6.5Z",stroke:"#2E2E2E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.exports.createElement("path",{d:"M3 16.4998L8 11.4998C8.928 10.6068 10.072 10.6068 11 11.4998L16 16.4998",stroke:"#2E2E2E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.exports.createElement("path",{d:"M14 14.4998L15 13.4998C15.928 12.6068 17.072 12.6068 18 13.4998L21 16.4998",stroke:"#2E2E2E",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),C7=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},p.exports.createElement("path",{d:"M15.75 13.5C15.75 13.3011 15.671 13.1103 15.5303 12.9697C15.3897 12.829 15.1989 12.75 15 12.75H9C8.80109 12.75 8.61032 12.829 8.46967 12.9697C8.32902 13.1103 8.25 13.3011 8.25 13.5C8.25 13.6989 8.32902 13.8897 8.46967 14.0303C8.61032 14.171 8.80109 14.25 9 14.25H15C15.1989 14.25 15.3897 14.171 15.5303 14.0303C15.671 13.8897 15.75 13.6989 15.75 13.5ZM15.75 17.5C15.75 17.3011 15.671 17.1103 15.5303 16.9697C15.3897 16.829 15.1989 16.75 15 16.75H9C8.80109 16.75 8.61032 16.829 8.46967 16.9697C8.32902 17.1103 8.25 17.3011 8.25 17.5C8.25 17.6989 8.32902 17.8897 8.46967 18.0303C8.61032 18.171 8.80109 18.25 9 18.25H15C15.1989 18.25 15.3897 18.171 15.5303 18.0303C15.671 17.8897 15.75 17.6989 15.75 17.5Z",fill:"#2E2E2E"}),p.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 2.75C6.27065 2.75 5.57118 3.03973 5.05546 3.55546C4.53973 4.07118 4.25 4.77065 4.25 5.5V19.5C4.25 20.2293 4.53973 20.9288 5.05546 21.4445C5.57118 21.9603 6.27065 22.25 7 22.25H17C17.7293 22.25 18.4288 21.9603 18.9445 21.4445C19.4603 20.9288 19.75 20.2293 19.75 19.5V8.468C19.75 8.087 19.626 7.717 19.396 7.413L16.398 3.445C16.2349 3.22912 16.0239 3.054 15.7817 2.93341C15.5395 2.81282 15.2726 2.75004 15.002 2.75H7ZM5.75 5.5C5.75 4.81 6.31 4.25 7 4.25H14.25V8.647C14.25 9.061 14.586 9.397 15 9.397H18.25V19.5C18.25 20.19 17.69 20.75 17 20.75H7C6.31 20.75 5.75 20.19 5.75 19.5V5.5Z",fill:"#2E2E2E"})),g7=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},p.exports.createElement("path",{d:"M21.8881 17.4201V20.4201C21.8892 20.6986 21.8322 20.9743 21.7206 21.2294C21.6091 21.4846 21.4454 21.7137 21.2402 21.902C21.035 22.0902 20.7927 22.2336 20.5289 22.3228C20.265 22.412 19.9855 22.4452 19.7081 22.4201C16.631 22.0857 13.6751 21.0342 11.0781 19.3501C8.66194 17.8148 6.61345 15.7663 5.07812 13.3501C3.38809 10.7413 2.33636 7.77109 2.00812 4.6801C1.98313 4.40356 2.01599 4.12486 2.10462 3.86172C2.19324 3.59859 2.33569 3.35679 2.52288 3.15172C2.71008 2.94665 2.93792 2.78281 3.19191 2.67062C3.44589 2.55843 3.72046 2.50036 3.99812 2.5001H6.99812C7.48342 2.49532 7.95391 2.66718 8.32188 2.98363C8.68985 3.30008 8.93019 3.73954 8.99812 4.2201C9.12474 5.18016 9.35957 6.12282 9.69812 7.0301C9.83266 7.38802 9.86178 7.77701 9.78202 8.15098C9.70227 8.52494 9.51698 8.86821 9.24812 9.1401L7.97812 10.4101C9.40167 12.9136 11.4746 14.9865 13.9781 16.4101L15.2481 15.1401C15.52 14.8712 15.8633 14.6859 16.2372 14.6062C16.6112 14.5264 17.0002 14.5556 17.3581 14.6901C18.2654 15.0286 19.2081 15.2635 20.1681 15.3901C20.6539 15.4586 21.0975 15.7033 21.4146 16.0776C21.7318 16.4519 21.9003 16.9297 21.8881 17.4201Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),x7=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:21,viewBox:"0 0 20 21",fill:"none",...e},p.exports.createElement("path",{d:"M17.4298 11.48C17.4698 11.16 17.4998 10.84 17.4998 10.5C17.4998 10.16 17.4698 9.84005 17.4298 9.52005L19.5398 7.87005C19.7298 7.72005 19.7798 7.45005 19.6598 7.23005L17.6598 3.77005C17.6009 3.66687 17.5071 3.58807 17.3953 3.54775C17.2836 3.50744 17.1611 3.50825 17.0498 3.55005L14.5598 4.55005C14.0398 4.15005 13.4798 3.82005 12.8698 3.57005L12.4898 0.920047C12.4733 0.802388 12.4144 0.694807 12.3242 0.617483C12.234 0.540158 12.1186 0.498402 11.9998 0.500047H7.99984C7.74984 0.500047 7.53984 0.680047 7.50984 0.920047L7.12984 3.57005C6.51984 3.82005 5.95984 4.16005 5.43984 4.55005L2.94984 3.55005C2.89186 3.53038 2.83107 3.52025 2.76984 3.52005C2.59984 3.52005 2.42984 3.61005 2.33984 3.77005L0.339839 7.23005C0.209839 7.45005 0.26984 7.72005 0.45984 7.87005L2.56984 9.52005C2.52984 9.84005 2.49984 10.17 2.49984 10.5C2.49984 10.83 2.52984 11.16 2.56984 11.48L0.45984 13.13C0.26984 13.28 0.219839 13.55 0.339839 13.77L2.33984 17.23C2.39879 17.3332 2.49256 17.412 2.60434 17.4523C2.71612 17.4927 2.8386 17.4918 2.94984 17.45L5.43984 16.45C5.95984 16.85 6.51984 17.18 7.12984 17.43L7.50984 20.08C7.53984 20.32 7.74984 20.5 7.99984 20.5H11.9998C12.2498 20.5 12.4598 20.32 12.4898 20.08L12.8698 17.43C13.4798 17.18 14.0398 16.84 14.5598 16.45L17.0498 17.45C17.1098 17.47 17.1698 17.48 17.2298 17.48C17.3998 17.48 17.5698 17.39 17.6598 17.23L19.6598 13.77C19.7798 13.55 19.7298 13.28 19.5398 13.13L17.4298 11.48ZM15.4498 9.77005C15.4898 10.08 15.4998 10.29 15.4998 10.5C15.4998 10.71 15.4798 10.93 15.4498 11.23L15.3098 12.36L16.1998 13.06L17.2798 13.9L16.5798 15.11L15.3098 14.6L14.2698 14.18L13.3698 14.86C12.9398 15.18 12.5298 15.42 12.1198 15.59L11.0598 16.02L10.8998 17.15L10.6998 18.5H9.29984L9.10984 17.15L8.94984 16.02L7.88984 15.59C7.45984 15.41 7.05984 15.18 6.65984 14.88L5.74984 14.18L4.68984 14.61L3.41984 15.12L2.71984 13.91L3.79984 13.07L4.68984 12.37L4.54984 11.24C4.51984 10.93 4.49984 10.7 4.49984 10.5C4.49984 10.3 4.51984 10.07 4.54984 9.77005L4.68984 8.64005L3.79984 7.94005L2.71984 7.10005L3.41984 5.89005L4.68984 6.40005L5.72984 6.82005L6.62984 6.14005C7.05984 5.82005 7.46984 5.58005 7.87984 5.41005L8.93984 4.98005L9.09984 3.85005L9.29984 2.50005H10.6898L10.8798 3.85005L11.0398 4.98005L12.0998 5.41005C12.5298 5.59005 12.9298 5.82005 13.3298 6.12005L14.2398 6.82005L15.2998 6.39005L16.5698 5.88005L17.2698 7.09005L16.1998 7.94005L15.3098 8.64005L15.4498 9.77005ZM9.99984 6.50005C7.78984 6.50005 5.99984 8.29005 5.99984 10.5C5.99984 12.71 7.78984 14.5 9.99984 14.5C12.2098 14.5 13.9998 12.71 13.9998 10.5C13.9998 8.29005 12.2098 6.50005 9.99984 6.50005ZM9.99984 12.5C8.89984 12.5 7.99984 11.6 7.99984 10.5C7.99984 9.40005 8.89984 8.50005 9.99984 8.50005C11.0998 8.50005 11.9998 9.40005 11.9998 10.5C11.9998 11.6 11.0998 12.5 9.99984 12.5Z",fill:"#2E2E2E"})),y7=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:25,viewBox:"0 0 24 25",fill:"none",...e},p.exports.createElement("path",{d:"M17 8.5L15.6 9.9L17.2 11.5H9V13.5H17.2L15.6 15.1L17 16.5L21 12.5L17 8.5ZM5 5.5H12V3.5H5C3.9 3.5 3 4.4 3 5.5V19.5C3 20.6 3.9 21.5 5 21.5H12V19.5H5V5.5Z",fill:"#FF4141"}));function v7(){return w(p7,{children:[a(y4,{link:"/admin",text:"\u041A\u0430\u0440\u0442\u043A\u0438 \u0441\u043E\u0431\u0430\u043A",children:a(f7,{})}),a(y4,{link:"/admin/partners",text:"\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u0438",children:a(h7,{})}),a(y4,{link:"/admin/sliders",text:"\u0421\u043B\u0430\u0439\u0434\u0435\u0440\u0438",children:a(m7,{})}),a(y4,{link:"/admin/reports",text:"\u0417\u0432\u0456\u0442\u043D\u0456\u0441\u0442\u044C",children:a(C7,{})}),a(y4,{link:"/admin/contacts",text:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",children:a(g7,{})}),a(y4,{link:"/admin/settings",text:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",children:a(x7,{})}),a(y4,{link:"/logout",text:"Log out",children:a(y7,{})})]})}function w7(){return w(re,{style:{padding:"0 2.7%"},children:[a(Ei,{}),a(Dl,{}),w(de,{children:[a(v7,{}),a(kr,{})]})]})}class B0{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){const n={listener:t};return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}const gn=typeof window=="undefined"||"Deno"in window;function Ge(){}function E7(e,t){return typeof e=="function"?e(t):e}function n3(e){return typeof e=="number"&&e>=0&&e!==1/0}function bl(e,t){return Math.max(e+(t||0)-Date.now(),0)}function G0(e,t,n){return Nn(e)?typeof t=="function"?{...n,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function S7(e,t,n){return Nn(e)?typeof t=="function"?{...n,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:typeof e=="function"?{...t,mutationFn:e}:{...e}}function qt(e,t,n){return Nn(e)?[{...t,queryKey:e},n]:[e||{},t]}function _2(e,t){const{type:n="all",exact:u,fetchStatus:r,predicate:i,queryKey:o,stale:s}=e;if(Nn(o)){if(u){if(t.queryHash!==Si(o,t.options))return!1}else if(!_u(t.queryKey,o))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof s=="boolean"&&t.isStale()!==s||typeof r!="undefined"&&r!==t.state.fetchStatus||i&&!i(t))}function q2(e,t){const{exact:n,fetching:u,predicate:r,mutationKey:i}=e;if(Nn(i)){if(!t.options.mutationKey)return!1;if(n){if(k4(t.options.mutationKey)!==k4(i))return!1}else if(!_u(t.options.mutationKey,i))return!1}return!(typeof u=="boolean"&&t.state.status==="loading"!==u||r&&!r(t))}function Si(e,t){return((t==null?void 0:t.queryKeyHashFn)||k4)(e)}function k4(e){return JSON.stringify(e,(t,n)=>r3(n)?Object.keys(n).sort().reduce((u,r)=>(u[r]=n[r],u),{}):n)}function _u(e,t){return Al(e,t)}function Al(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!Al(e[n],t[n])):!1}function Ll(e,t){if(e===t)return e;const n=G2(e)&&G2(t);if(n||r3(e)&&r3(t)){const u=n?e.length:Object.keys(e).length,r=n?t:Object.keys(t),i=r.length,o=n?[]:{};let s=0;for(let l=0;l<i;l++){const c=n?l:r[l];o[c]=Ll(e[c],t[c]),o[c]===e[c]&&s++}return u===i&&s===u?e:o}return t}function u3(e,t){if(e&&!t||t&&!e)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function G2(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function r3(e){if(!K2(e))return!1;const t=e.constructor;if(typeof t=="undefined")return!0;const n=t.prototype;return!(!K2(n)||!n.hasOwnProperty("isPrototypeOf"))}function K2(e){return Object.prototype.toString.call(e)==="[object Object]"}function Nn(e){return Array.isArray(e)}function Bl(e){return new Promise(t=>{setTimeout(t,e)})}function X2(e){Bl(0).then(e)}function k7(){if(typeof AbortController=="function")return new AbortController}function i3(e,t,n){return n.isDataEqual!=null&&n.isDataEqual(e,t)?e:typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Ll(e,t):t}class F7 extends B0{constructor(){super(),this.setup=t=>{if(!gn&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),()=>{window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var n;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(u=>{typeof u=="boolean"?this.setFocused(u):this.onFocus()})}setFocused(t){this.focused!==t&&(this.focused=t,this.onFocus())}onFocus(){this.listeners.forEach(({listener:t})=>{t()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document=="undefined"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const qu=new F7,J2=["online","offline"];class D7 extends B0{constructor(){super(),this.setup=t=>{if(!gn&&window.addEventListener){const n=()=>t();return J2.forEach(u=>{window.addEventListener(u,n,!1)}),()=>{J2.forEach(u=>{window.removeEventListener(u,n)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var n;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(u=>{typeof u=="boolean"?this.setOnline(u):this.onOnline()})}setOnline(t){this.online!==t&&(this.online=t,this.onOnline())}onOnline(){this.listeners.forEach(({listener:t})=>{t()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator=="undefined"||typeof navigator.onLine=="undefined"?!0:navigator.onLine}}const Gu=new D7;function b7(e){return Math.min(1e3*2**e,3e4)}function Rr(e){return(e!=null?e:"online")==="online"?Gu.isOnline():!0}class Pl{constructor(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}}function Fu(e){return e instanceof Pl}function Rl(e){let t=!1,n=0,u=!1,r,i,o;const s=new Promise((b,h)=>{i=b,o=h}),l=b=>{u||(v(new Pl(b)),e.abort==null||e.abort())},c=()=>{t=!0},d=()=>{t=!1},m=()=>!qu.isFocused()||e.networkMode!=="always"&&!Gu.isOnline(),g=b=>{u||(u=!0,e.onSuccess==null||e.onSuccess(b),r==null||r(),i(b))},v=b=>{u||(u=!0,e.onError==null||e.onError(b),r==null||r(),o(b))},y=()=>new Promise(b=>{r=h=>{const f=u||!m();return f&&b(h),f},e.onPause==null||e.onPause()}).then(()=>{r=void 0,u||e.onContinue==null||e.onContinue()}),E=()=>{if(u)return;let b;try{b=e.fn()}catch(h){b=Promise.reject(h)}Promise.resolve(b).then(g).catch(h=>{var f,C;if(u)return;const k=(f=e.retry)!=null?f:3,D=(C=e.retryDelay)!=null?C:b7,F=typeof D=="function"?D(n,h):D,S=k===!0||typeof k=="number"&&n<k||typeof k=="function"&&k(n,h);if(t||!S){v(h);return}n++,e.onFail==null||e.onFail(n,h),Bl(F).then(()=>{if(m())return y()}).then(()=>{t?v(h):E()})})};return Rr(e.networkMode)?E():y().then(E),{promise:s,cancel:l,continue:()=>(r==null?void 0:r())?s:Promise.resolve(),cancelRetry:c,continueRetry:d}}const ki=console;function A7(){let e=[],t=0,n=d=>{d()},u=d=>{d()};const r=d=>{let m;t++;try{m=d()}finally{t--,t||s()}return m},i=d=>{t?e.push(d):X2(()=>{n(d)})},o=d=>(...m)=>{i(()=>{d(...m)})},s=()=>{const d=e;e=[],d.length&&X2(()=>{u(()=>{d.forEach(m=>{n(m)})})})};return{batch:r,batchCalls:o,schedule:i,setNotifyFunction:d=>{n=d},setBatchNotifyFunction:d=>{u=d}}}const ne=A7();class Ml{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),n3(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,t!=null?t:gn?1/0:5*60*1e3)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class L7 extends Ml{constructor(t){super(),this.abortSignalConsumed=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.logger=t.logger||ki,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||B7(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(t,n){const u=i3(this.state.data,t,this.options);return this.dispatch({data:u,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),u}setState(t,n){this.dispatch({type:"setState",state:t,setStateOptions:n})}cancel(t){var n;const u=this.promise;return(n=this.retryer)==null||n.cancel(t),u?u.then(Ge).catch(Ge):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!bl(this.state.dataUpdatedAt,t)}onFocus(){var t;const n=this.observers.find(u=>u.shouldFetchOnWindowFocus());n&&n.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}onOnline(){var t;const n=this.observers.find(u=>u.shouldFetchOnReconnect());n&&n.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(t,n){var u,r;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&n!=null&&n.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var i;return(i=this.retryer)==null||i.continueRetry(),this.promise}}if(t&&this.setOptions(t),!this.options.queryFn){const v=this.observers.find(y=>y.options.queryFn);v&&this.setOptions(v.options)}Array.isArray(this.options.queryKey);const o=k7(),s={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},l=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>{if(o)return this.abortSignalConsumed=!0,o.signal}})};l(s);const c=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(s)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),d={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:c};if(l(d),(u=this.options.behavior)==null||u.onFetch(d),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((r=d.fetchOptions)==null?void 0:r.meta)){var m;this.dispatch({type:"fetch",meta:(m=d.fetchOptions)==null?void 0:m.meta})}const g=v=>{if(Fu(v)&&v.silent||this.dispatch({type:"error",error:v}),!Fu(v)){var y,E,b,h;(y=(E=this.cache.config).onError)==null||y.call(E,v,this),(b=(h=this.cache.config).onSettled)==null||b.call(h,this.state.data,v,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=Rl({fn:d.fetchFn,abort:o==null?void 0:o.abort.bind(o),onSuccess:v=>{var y,E,b,h;if(typeof v=="undefined"){g(new Error(this.queryHash+" data is undefined"));return}this.setData(v),(y=(E=this.cache.config).onSuccess)==null||y.call(E,v,this),(b=(h=this.cache.config).onSettled)==null||b.call(h,v,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:g,onFail:(v,y)=>{this.dispatch({type:"failed",failureCount:v,error:y})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:d.options.retry,retryDelay:d.options.retryDelay,networkMode:d.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(t){const n=u=>{var r,i;switch(t.type){case"failed":return{...u,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...u,fetchStatus:"paused"};case"continue":return{...u,fetchStatus:"fetching"};case"fetch":return{...u,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(r=t.meta)!=null?r:null,fetchStatus:Rr(this.options.networkMode)?"fetching":"paused",...!u.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...u,data:t.data,dataUpdateCount:u.dataUpdateCount+1,dataUpdatedAt:(i=t.dataUpdatedAt)!=null?i:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=t.error;return Fu(o)&&o.revert&&this.revertState?{...this.revertState}:{...u,error:o,errorUpdateCount:u.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:u.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...u,isInvalidated:!0};case"setState":return{...u,...t.state}}};this.state=n(this.state),ne.batch(()=>{this.observers.forEach(u=>{u.onQueryUpdate(t)}),this.cache.notify({query:this,type:"updated",action:t})})}}function B7(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=typeof t!="undefined",u=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?u!=null?u:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}class P7 extends B0{constructor(t){super(),this.config=t||{},this.queries=[],this.queriesMap={}}build(t,n,u){var r;const i=n.queryKey,o=(r=n.queryHash)!=null?r:Si(i,n);let s=this.get(o);return s||(s=new L7({cache:this,logger:t.getLogger(),queryKey:i,queryHash:o,options:t.defaultQueryOptions(n),state:u,defaultOptions:t.getQueryDefaults(i)}),this.add(s)),s}add(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"added",query:t}))}remove(t){const n=this.queriesMap[t.queryHash];n&&(t.destroy(),this.queries=this.queries.filter(u=>u!==t),n===t&&delete this.queriesMap[t.queryHash],this.notify({type:"removed",query:t}))}clear(){ne.batch(()=>{this.queries.forEach(t=>{this.remove(t)})})}get(t){return this.queriesMap[t]}getAll(){return this.queries}find(t,n){const[u]=qt(t,n);return typeof u.exact=="undefined"&&(u.exact=!0),this.queries.find(r=>_2(u,r))}findAll(t,n){const[u]=qt(t,n);return Object.keys(u).length>0?this.queries.filter(r=>_2(u,r)):this.queries}notify(t){ne.batch(()=>{this.listeners.forEach(({listener:n})=>{n(t)})})}onFocus(){ne.batch(()=>{this.queries.forEach(t=>{t.onFocus()})})}onOnline(){ne.batch(()=>{this.queries.forEach(t=>{t.onOnline()})})}}class R7 extends Ml{constructor(t){super(),this.defaultOptions=t.defaultOptions,this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||ki,this.observers=[],this.state=t.state||Ol(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter(n=>n!==t),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var t,n;return(t=(n=this.retryer)==null?void 0:n.continue())!=null?t:this.execute()}async execute(){const t=()=>{var S;return this.retryer=Rl({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(A,N)=>{this.dispatch({type:"failed",failureCount:A,error:N})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(S=this.options.retry)!=null?S:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},n=this.state.status==="loading";try{var u,r,i,o,s,l,c,d;if(!n){var m,g,v,y;this.dispatch({type:"loading",variables:this.options.variables}),await((m=(g=this.mutationCache.config).onMutate)==null?void 0:m.call(g,this.state.variables,this));const A=await((v=(y=this.options).onMutate)==null?void 0:v.call(y,this.state.variables));A!==this.state.context&&this.dispatch({type:"loading",context:A,variables:this.state.variables})}const S=await t();return await((u=(r=this.mutationCache.config).onSuccess)==null?void 0:u.call(r,S,this.state.variables,this.state.context,this)),await((i=(o=this.options).onSuccess)==null?void 0:i.call(o,S,this.state.variables,this.state.context)),await((s=(l=this.mutationCache.config).onSettled)==null?void 0:s.call(l,S,null,this.state.variables,this.state.context,this)),await((c=(d=this.options).onSettled)==null?void 0:c.call(d,S,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:S}),S}catch(S){try{var E,b,h,f,C,k,D,F;throw await((E=(b=this.mutationCache.config).onError)==null?void 0:E.call(b,S,this.state.variables,this.state.context,this)),await((h=(f=this.options).onError)==null?void 0:h.call(f,S,this.state.variables,this.state.context)),await((C=(k=this.mutationCache.config).onSettled)==null?void 0:C.call(k,void 0,S,this.state.variables,this.state.context,this)),await((D=(F=this.options).onSettled)==null?void 0:D.call(F,void 0,S,this.state.variables,this.state.context)),S}finally{this.dispatch({type:"error",error:S})}}}dispatch(t){const n=u=>{switch(t.type){case"failed":return{...u,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...u,isPaused:!0};case"continue":return{...u,isPaused:!1};case"loading":return{...u,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!Rr(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...u,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...u,data:void 0,error:t.error,failureCount:u.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...u,...t.state}}};this.state=n(this.state),ne.batch(()=>{this.observers.forEach(u=>{u.onMutationUpdate(t)}),this.mutationCache.notify({mutation:this,type:"updated",action:t})})}}function Ol(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class M7 extends B0{constructor(t){super(),this.config=t||{},this.mutations=[],this.mutationId=0}build(t,n,u){const r=new R7({mutationCache:this,logger:t.getLogger(),mutationId:++this.mutationId,options:t.defaultMutationOptions(n),state:u,defaultOptions:n.mutationKey?t.getMutationDefaults(n.mutationKey):void 0});return this.add(r),r}add(t){this.mutations.push(t),this.notify({type:"added",mutation:t})}remove(t){this.mutations=this.mutations.filter(n=>n!==t),this.notify({type:"removed",mutation:t})}clear(){ne.batch(()=>{this.mutations.forEach(t=>{this.remove(t)})})}getAll(){return this.mutations}find(t){return typeof t.exact=="undefined"&&(t.exact=!0),this.mutations.find(n=>q2(t,n))}findAll(t){return this.mutations.filter(n=>q2(t,n))}notify(t){ne.batch(()=>{this.listeners.forEach(({listener:n})=>{n(t)})})}resumePausedMutations(){var t;return this.resuming=((t=this.resuming)!=null?t:Promise.resolve()).then(()=>{const n=this.mutations.filter(u=>u.state.isPaused);return ne.batch(()=>n.reduce((u,r)=>u.then(()=>r.continue().catch(Ge)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function O7(){return{onFetch:e=>{e.fetchFn=()=>{var t,n,u,r,i,o;const s=(t=e.fetchOptions)==null||(n=t.meta)==null?void 0:n.refetchPage,l=(u=e.fetchOptions)==null||(r=u.meta)==null?void 0:r.fetchMore,c=l==null?void 0:l.pageParam,d=(l==null?void 0:l.direction)==="forward",m=(l==null?void 0:l.direction)==="backward",g=((i=e.state.data)==null?void 0:i.pages)||[],v=((o=e.state.data)==null?void 0:o.pageParams)||[];let y=v,E=!1;const b=F=>{Object.defineProperty(F,"signal",{enumerable:!0,get:()=>{var S;if((S=e.signal)!=null&&S.aborted)E=!0;else{var A;(A=e.signal)==null||A.addEventListener("abort",()=>{E=!0})}return e.signal}})},h=e.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+e.options.queryHash+"'")),f=(F,S,A,N)=>(y=N?[S,...y]:[...y,S],N?[A,...F]:[...F,A]),C=(F,S,A,N)=>{if(E)return Promise.reject("Cancelled");if(typeof A=="undefined"&&!S&&F.length)return Promise.resolve(F);const I={queryKey:e.queryKey,pageParam:A,meta:e.options.meta};b(I);const xe=h(I);return Promise.resolve(xe).then(Ft=>f(F,A,Ft,N))};let k;if(!g.length)k=C([]);else if(d){const F=typeof c!="undefined",S=F?c:Y2(e.options,g);k=C(g,F,S)}else if(m){const F=typeof c!="undefined",S=F?c:T7(e.options,g);k=C(g,F,S,!0)}else{y=[];const F=typeof e.options.getNextPageParam=="undefined";k=(s&&g[0]?s(g[0],0,g):!0)?C([],F,v[0]):Promise.resolve(f([],v[0],g[0]));for(let A=1;A<g.length;A++)k=k.then(N=>{if(s&&g[A]?s(g[A],A,g):!0){const xe=F?v[A]:Y2(e.options,N);return C(N,F,xe)}return Promise.resolve(f(N,v[A],g[A]))})}return k.then(F=>({pages:F,pageParams:y}))}}}}function Y2(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function T7(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}class I7{constructor(t={}){this.queryCache=t.queryCache||new P7,this.mutationCache=t.mutationCache||new M7,this.logger=t.logger||ki,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=qu.subscribe(()=>{qu.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=Gu.subscribe(()=>{Gu.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var t,n;this.mountCount--,this.mountCount===0&&((t=this.unsubscribeFocus)==null||t.call(this),this.unsubscribeFocus=void 0,(n=this.unsubscribeOnline)==null||n.call(this),this.unsubscribeOnline=void 0)}isFetching(t,n){const[u]=qt(t,n);return u.fetchStatus="fetching",this.queryCache.findAll(u).length}isMutating(t){return this.mutationCache.findAll({...t,fetching:!0}).length}getQueryData(t,n){var u;return(u=this.queryCache.find(t,n))==null?void 0:u.state.data}ensureQueryData(t,n,u){const r=G0(t,n,u),i=this.getQueryData(r.queryKey);return i?Promise.resolve(i):this.fetchQuery(r)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:n,state:u})=>{const r=u.data;return[n,r]})}setQueryData(t,n,u){const r=this.queryCache.find(t),i=r==null?void 0:r.state.data,o=E7(n,i);if(typeof o=="undefined")return;const s=G0(t),l=this.defaultQueryOptions(s);return this.queryCache.build(this,l).setData(o,{...u,manual:!0})}setQueriesData(t,n,u){return ne.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:r})=>[r,this.setQueryData(r,n,u)]))}getQueryState(t,n){var u;return(u=this.queryCache.find(t,n))==null?void 0:u.state}removeQueries(t,n){const[u]=qt(t,n),r=this.queryCache;ne.batch(()=>{r.findAll(u).forEach(i=>{r.remove(i)})})}resetQueries(t,n,u){const[r,i]=qt(t,n,u),o=this.queryCache,s={type:"active",...r};return ne.batch(()=>(o.findAll(r).forEach(l=>{l.reset()}),this.refetchQueries(s,i)))}cancelQueries(t,n,u){const[r,i={}]=qt(t,n,u);typeof i.revert=="undefined"&&(i.revert=!0);const o=ne.batch(()=>this.queryCache.findAll(r).map(s=>s.cancel(i)));return Promise.all(o).then(Ge).catch(Ge)}invalidateQueries(t,n,u){const[r,i]=qt(t,n,u);return ne.batch(()=>{var o,s;if(this.queryCache.findAll(r).forEach(c=>{c.invalidate()}),r.refetchType==="none")return Promise.resolve();const l={...r,type:(o=(s=r.refetchType)!=null?s:r.type)!=null?o:"active"};return this.refetchQueries(l,i)})}refetchQueries(t,n,u){const[r,i]=qt(t,n,u),o=ne.batch(()=>this.queryCache.findAll(r).filter(l=>!l.isDisabled()).map(l=>{var c;return l.fetch(void 0,{...i,cancelRefetch:(c=i==null?void 0:i.cancelRefetch)!=null?c:!0,meta:{refetchPage:r.refetchPage}})}));let s=Promise.all(o).then(Ge);return i!=null&&i.throwOnError||(s=s.catch(Ge)),s}fetchQuery(t,n,u){const r=G0(t,n,u),i=this.defaultQueryOptions(r);typeof i.retry=="undefined"&&(i.retry=!1);const o=this.queryCache.build(this,i);return o.isStaleByTime(i.staleTime)?o.fetch(i):Promise.resolve(o.state.data)}prefetchQuery(t,n,u){return this.fetchQuery(t,n,u).then(Ge).catch(Ge)}fetchInfiniteQuery(t,n,u){const r=G0(t,n,u);return r.behavior=O7(),this.fetchQuery(r)}prefetchInfiniteQuery(t,n,u){return this.fetchInfiniteQuery(t,n,u).then(Ge).catch(Ge)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(t){this.defaultOptions=t}setQueryDefaults(t,n){const u=this.queryDefaults.find(r=>k4(t)===k4(r.queryKey));u?u.defaultOptions=n:this.queryDefaults.push({queryKey:t,defaultOptions:n})}getQueryDefaults(t){if(!t)return;const n=this.queryDefaults.find(u=>_u(t,u.queryKey));return n==null?void 0:n.defaultOptions}setMutationDefaults(t,n){const u=this.mutationDefaults.find(r=>k4(t)===k4(r.mutationKey));u?u.defaultOptions=n:this.mutationDefaults.push({mutationKey:t,defaultOptions:n})}getMutationDefaults(t){if(!t)return;const n=this.mutationDefaults.find(u=>_u(t,u.mutationKey));return n==null?void 0:n.defaultOptions}defaultQueryOptions(t){if(t!=null&&t._defaulted)return t;const n={...this.defaultOptions.queries,...this.getQueryDefaults(t==null?void 0:t.queryKey),...t,_defaulted:!0};return!n.queryHash&&n.queryKey&&(n.queryHash=Si(n.queryKey,n)),typeof n.refetchOnReconnect=="undefined"&&(n.refetchOnReconnect=n.networkMode!=="always"),typeof n.useErrorBoundary=="undefined"&&(n.useErrorBoundary=!!n.suspense),n}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...this.defaultOptions.mutations,...this.getMutationDefaults(t==null?void 0:t.mutationKey),...t,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}class N7 extends B0{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),eo(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return o3(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return o3(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const u=this.options,r=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),u3(u,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled!="undefined"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=u.queryKey),this.updateQuery();const i=this.hasListeners();i&&to(this.currentQuery,r,this.options,u)&&this.executeFetch(),this.updateResult(n),i&&(this.currentQuery!==r||this.options.enabled!==u.enabled||this.options.staleTime!==u.staleTime)&&this.updateStaleTimeout();const o=this.computeRefetchInterval();i&&(this.currentQuery!==r||this.options.enabled!==u.enabled||o!==this.currentRefetchInterval)&&this.updateRefetchInterval(o)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t),u=this.createResult(n,t);return j7(this,u,t)&&(this.currentResult=u,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),u}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(u=>{Object.defineProperty(n,u,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(u),t[u])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),u=this.client.getQueryCache().build(this.client,n);return u.isFetchingOptimistic=!0,u.fetch().then(()=>this.createResult(u,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(Ge)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),gn||this.currentResult.isStale||!n3(this.options.staleTime))return;const n=bl(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(gn||this.options.enabled===!1||!n3(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||qu.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const u=this.currentQuery,r=this.options,i=this.currentResult,o=this.currentResultState,s=this.currentResultOptions,l=t!==u,c=l?t.state:this.currentQueryInitialState,d=l?this.currentResult:this.previousQueryResult,{state:m}=t;let{dataUpdatedAt:g,error:v,errorUpdatedAt:y,fetchStatus:E,status:b}=m,h=!1,f=!1,C;if(n._optimisticResults){const A=this.hasListeners(),N=!A&&eo(t,n),I=A&&to(t,u,n,r);(N||I)&&(E=Rr(t.options.networkMode)?"fetching":"paused",g||(b="loading")),n._optimisticResults==="isRestoring"&&(E="idle")}if(n.keepPreviousData&&!m.dataUpdatedAt&&d!=null&&d.isSuccess&&b!=="error")C=d.data,g=d.dataUpdatedAt,b=d.status,h=!0;else if(n.select&&typeof m.data!="undefined")if(i&&m.data===(o==null?void 0:o.data)&&n.select===this.selectFn)C=this.selectResult;else try{this.selectFn=n.select,C=n.select(m.data),C=i3(i==null?void 0:i.data,C,n),this.selectResult=C,this.selectError=null}catch(A){this.selectError=A}else C=m.data;if(typeof n.placeholderData!="undefined"&&typeof C=="undefined"&&b==="loading"){let A;if(i!=null&&i.isPlaceholderData&&n.placeholderData===(s==null?void 0:s.placeholderData))A=i.data;else if(A=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof A!="undefined")try{A=n.select(A),this.selectError=null}catch(N){this.selectError=N}typeof A!="undefined"&&(b="success",C=i3(i==null?void 0:i.data,A,n),f=!0)}this.selectError&&(v=this.selectError,C=this.selectResult,y=Date.now(),b="error");const k=E==="fetching",D=b==="loading",F=b==="error";return{status:b,fetchStatus:E,isLoading:D,isSuccess:b==="success",isError:F,isInitialLoading:D&&k,data:C,dataUpdatedAt:g,error:v,errorUpdatedAt:y,failureCount:m.fetchFailureCount,failureReason:m.fetchFailureReason,errorUpdateCount:m.errorUpdateCount,isFetched:m.dataUpdateCount>0||m.errorUpdateCount>0,isFetchedAfterMount:m.dataUpdateCount>c.dataUpdateCount||m.errorUpdateCount>c.errorUpdateCount,isFetching:k,isRefetching:k&&!D,isLoadingError:F&&m.dataUpdatedAt===0,isPaused:E==="paused",isPlaceholderData:f,isPreviousData:h,isRefetchError:F&&m.dataUpdatedAt!==0,isStale:Fi(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,u=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,u3(u,n))return;this.currentResult=u;const r={cache:!0},i=()=>{if(!n)return!0;const{notifyOnChangeProps:o}=this.options,s=typeof o=="function"?o():o;if(s==="all"||!s&&!this.trackedProps.size)return!0;const l=new Set(s!=null?s:this.trackedProps);return this.options.useErrorBoundary&&l.add("error"),Object.keys(this.currentResult).some(c=>{const d=c;return this.currentResult[d]!==n[d]&&l.has(d)})};(t==null?void 0:t.listeners)!==!1&&i()&&(r.listeners=!0),this.notify({...r,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!Fu(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){ne.batch(()=>{if(t.onSuccess){var n,u,r,i;(n=(u=this.options).onSuccess)==null||n.call(u,this.currentResult.data),(r=(i=this.options).onSettled)==null||r.call(i,this.currentResult.data,null)}else if(t.onError){var o,s,l,c;(o=(s=this.options).onError)==null||o.call(s,this.currentResult.error),(l=(c=this.options).onSettled)==null||l.call(c,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(({listener:d})=>{d(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function z7(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function eo(e,t){return z7(e,t)||e.state.dataUpdatedAt>0&&o3(e,t,t.refetchOnMount)}function o3(e,t,n){if(t.enabled!==!1){const u=typeof n=="function"?n(e):n;return u==="always"||u!==!1&&Fi(e,t)}return!1}function to(e,t,n,u){return n.enabled!==!1&&(e!==t||u.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Fi(e,n)}function Fi(e,t){return e.isStaleByTime(t.staleTime)}function j7(e,t,n){return n.keepPreviousData?!1:n.placeholderData!==void 0?t.isPlaceholderData:e.getCurrentResult()!==t}class H7 extends B0{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const u=this.options;this.options=this.client.defaultMutationOptions(t),u3(u,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t!="undefined"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:Ol(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){ne.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,u,r,i;(n=(u=this.mutateOptions).onSuccess)==null||n.call(u,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(r=(i=this.mutateOptions).onSettled)==null||r.call(i,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var o,s,l,c;(o=(s=this.mutateOptions).onError)==null||o.call(s,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(l=(c=this.mutateOptions).onSettled)==null||l.call(c,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(({listener:d})=>{d(this.currentResult)})})}}var Tl={exports:{}},Qe={},Il={exports:{}},Nl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,O){var T=P.length;P.push(O);e:for(;0<T;){var G=T-1>>>1,ee=P[G];if(0<r(ee,O))P[G]=O,P[T]=ee,T=G;else break e}}function n(P){return P.length===0?null:P[0]}function u(P){if(P.length===0)return null;var O=P[0],T=P.pop();if(T!==O){P[0]=T;e:for(var G=0,ee=P.length,Dt=ee>>>1;G<Dt;){var ze=2*(G+1)-1,Vt=P[ze],je=ze+1,qe=P[je];if(0>r(Vt,T))je<ee&&0>r(qe,Vt)?(P[G]=qe,P[je]=T,G=je):(P[G]=Vt,P[ze]=T,G=ze);else if(je<ee&&0>r(qe,T))P[G]=qe,P[je]=T,G=je;else break e}}return O}function r(P,O){var T=P.sortIndex-O.sortIndex;return T!==0?T:P.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],c=[],d=1,m=null,g=3,v=!1,y=!1,E=!1,b=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(P){for(var O=n(c);O!==null;){if(O.callback===null)u(c);else if(O.startTime<=P)u(c),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(c)}}function k(P){if(E=!1,C(P),!y)if(n(l)!==null)y=!0,x4(D);else{var O=n(c);O!==null&&_e(k,O.startTime-P)}}function D(P,O){y=!1,E&&(E=!1,h(A),A=-1),v=!0;var T=g;try{for(C(O),m=n(l);m!==null&&(!(m.expirationTime>O)||P&&!xe());){var G=m.callback;if(typeof G=="function"){m.callback=null,g=m.priorityLevel;var ee=G(m.expirationTime<=O);O=e.unstable_now(),typeof ee=="function"?m.callback=ee:m===n(l)&&u(l),C(O)}else u(l);m=n(l)}if(m!==null)var Dt=!0;else{var ze=n(c);ze!==null&&_e(k,ze.startTime-O),Dt=!1}return Dt}finally{m=null,g=T,v=!1}}var F=!1,S=null,A=-1,N=5,I=-1;function xe(){return!(e.unstable_now()-I<N)}function Ut(){if(S!==null){var P=e.unstable_now();I=P;var O=!0;try{O=S(!0,P)}finally{O?Ft():(F=!1,S=null)}}else F=!1}var Ft;if(typeof f=="function")Ft=function(){f(Ut)};else if(typeof MessageChannel!="undefined"){var Zn=new MessageChannel,e1=Zn.port2;Zn.port1.onmessage=Ut,Ft=function(){e1.postMessage(null)}}else Ft=function(){b(Ut,0)};function x4(P){S=P,F||(F=!0,Ft())}function _e(P,O){A=b(function(){P(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,x4(D))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var O=3;break;default:O=g}var T=g;g=O;try{return P()}finally{g=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,O){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var T=g;g=P;try{return O()}finally{g=T}},e.unstable_scheduleCallback=function(P,O,T){var G=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?G+T:G):T=G,P){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=T+ee,P={id:d++,callback:O,priorityLevel:P,startTime:T,expirationTime:ee,sortIndex:-1},T>G?(P.sortIndex=T,t(c,P),n(l)===null&&P===n(c)&&(E?(h(A),A=-1):E=!0,_e(k,T-G))):(P.sortIndex=ee,t(l,P),y||v||(y=!0,x4(D))),P},e.unstable_shouldYield=xe,e.unstable_wrapCallback=function(P){var O=g;return function(){var T=g;g=O;try{return P.apply(this,arguments)}finally{g=T}}}})(Nl);Il.exports=Nl;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zl=p.exports,We=Il.exports;function B(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jl=new Set,xn={};function H4(e,t){x0(e,t),x0(e+"Capture",t)}function x0(e,t){for(xn[e]=t,e=0;e<t.length;e++)jl.add(t[e])}var It=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),s3=Object.prototype.hasOwnProperty,$7=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,no={},uo={};function U7(e){return s3.call(uo,e)?!0:s3.call(no,e)?!1:$7.test(e)?uo[e]=!0:(no[e]=!0,!1)}function V7(e,t,n,u){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return u?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function W7(e,t,n,u){if(t===null||typeof t=="undefined"||V7(e,t,n,u))return!0;if(u)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Be(e,t,n,u,r,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=u,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Be(e,5,!1,e.toLowerCase(),null,!1,!1)});var Di=/[\-:]([a-z])/g;function bi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Di,bi);we[t]=new Be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Di,bi);we[t]=new Be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Di,bi);we[t]=new Be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Be(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Be(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ai(e,t,n,u){var r=we.hasOwnProperty(t)?we[t]:null;(r!==null?r.type!==0:u||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(W7(t,n,r,u)&&(n=null),u||r===null?U7(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,u=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,u?e.setAttributeNS(u,t,n):e.setAttribute(t,n))))}var $t=zl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Kn=Symbol.for("react.element"),G4=Symbol.for("react.portal"),K4=Symbol.for("react.fragment"),Li=Symbol.for("react.strict_mode"),l3=Symbol.for("react.profiler"),Hl=Symbol.for("react.provider"),$l=Symbol.for("react.context"),Bi=Symbol.for("react.forward_ref"),a3=Symbol.for("react.suspense"),c3=Symbol.for("react.suspense_list"),Pi=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),Ul=Symbol.for("react.offscreen"),ro=Symbol.iterator;function z0(e){return e===null||typeof e!="object"?null:(e=ro&&e[ro]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,a1;function K0(e){if(a1===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);a1=t&&t[1]||""}return`
`+a1+e}var c1=!1;function d1(e,t){if(!e||c1)return"";c1=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var u=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){u=c}e.call(t.prototype)}else{try{throw Error()}catch(c){u=c}e()}}catch(c){if(c&&u&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),i=u.stack.split(`
`),o=r.length-1,s=i.length-1;1<=o&&0<=s&&r[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(r[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||r[o]!==i[s]){var l=`
`+r[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{c1=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?K0(e):""}function Q7(e){switch(e.tag){case 5:return K0(e.type);case 16:return K0("Lazy");case 13:return K0("Suspense");case 19:return K0("SuspenseList");case 0:case 2:case 15:return e=d1(e.type,!1),e;case 11:return e=d1(e.type.render,!1),e;case 1:return e=d1(e.type,!0),e;default:return""}}function d3(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K4:return"Fragment";case G4:return"Portal";case l3:return"Profiler";case Li:return"StrictMode";case a3:return"Suspense";case c3:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $l:return(e.displayName||"Context")+".Consumer";case Hl:return(e._context.displayName||"Context")+".Provider";case Bi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pi:return t=e.displayName||null,t!==null?t:d3(e.type)||"Memo";case Gt:t=e._payload,e=e._init;try{return d3(e(t))}catch{}}return null}function Z7(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return d3(t);case 8:return t===Li?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function f4(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _7(e){var t=Vl(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),u=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(o){u=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return u},setValue:function(o){u=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xn(e){e._valueTracker||(e._valueTracker=_7(e))}function Wl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),u="";return e&&(u=Vl(e)?e.checked?"true":"false":e.value),e=u,e!==n?(t.setValue(e),!0):!1}function Ku(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function p3(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function io(e,t){var n=t.defaultValue==null?"":t.defaultValue,u=t.checked!=null?t.checked:t.defaultChecked;n=f4(t.value!=null?t.value:n),e._wrapperState={initialChecked:u,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ql(e,t){t=t.checked,t!=null&&Ai(e,"checked",t,!1)}function f3(e,t){Ql(e,t);var n=f4(t.value),u=t.type;if(n!=null)u==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(u==="submit"||u==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?h3(e,t.type,n):t.hasOwnProperty("defaultValue")&&h3(e,t.type,f4(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function oo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var u=t.type;if(!(u!=="submit"&&u!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function h3(e,t,n){(t!=="number"||Ku(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var X0=Array.isArray;function s0(e,t,n,u){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&u&&(e[n].defaultSelected=!0)}else{for(n=""+f4(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,u&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function m3(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(B(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function so(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(B(92));if(X0(n)){if(1<n.length)throw Error(B(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:f4(n)}}function Zl(e,t){var n=f4(t.value),u=f4(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),u!=null&&(e.defaultValue=""+u)}function lo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _l(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function C3(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_l(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Jn,ql=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,u,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,u,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Jn=Jn||document.createElement("div"),Jn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Jn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},q7=["Webkit","ms","Moz","O"];Object.keys(tn).forEach(function(e){q7.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),tn[t]=tn[e]})});function Gl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||tn.hasOwnProperty(e)&&tn[e]?(""+t).trim():t+"px"}function Kl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var u=n.indexOf("--")===0,r=Gl(n,t[n],u);n==="float"&&(n="cssFloat"),u?e.setProperty(n,r):e[n]=r}}var G7=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function g3(e,t){if(t){if(G7[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(B(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(B(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(B(61))}if(t.style!=null&&typeof t.style!="object")throw Error(B(62))}}function x3(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var y3=null;function Ri(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var v3=null,l0=null,a0=null;function ao(e){if(e=Hn(e)){if(typeof v3!="function")throw Error(B(280));var t=e.stateNode;t&&(t=Nr(t),v3(e.stateNode,e.type,t))}}function Xl(e){l0?a0?a0.push(e):a0=[e]:l0=e}function Jl(){if(l0){var e=l0,t=a0;if(a0=l0=null,ao(e),t)for(e=0;e<t.length;e++)ao(t[e])}}function Yl(e,t){return e(t)}function ea(){}var p1=!1;function ta(e,t,n){if(p1)return e(t,n);p1=!0;try{return Yl(e,t,n)}finally{p1=!1,(l0!==null||a0!==null)&&(ea(),Jl())}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var u=Nr(n);if(u===null)return null;n=u[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(B(231,t,typeof n));return n}var w3=!1;if(It)try{var j0={};Object.defineProperty(j0,"passive",{get:function(){w3=!0}}),window.addEventListener("test",j0,j0),window.removeEventListener("test",j0,j0)}catch{w3=!1}function K7(e,t,n,u,r,i,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var nn=!1,Xu=null,Ju=!1,E3=null,X7={onError:function(e){nn=!0,Xu=e}};function J7(e,t,n,u,r,i,o,s,l){nn=!1,Xu=null,K7.apply(X7,arguments)}function Y7(e,t,n,u,r,i,o,s,l){if(J7.apply(this,arguments),nn){if(nn){var c=Xu;nn=!1,Xu=null}else throw Error(B(198));Ju||(Ju=!0,E3=c)}}function $4(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function na(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function co(e){if($4(e)!==e)throw Error(B(188))}function ec(e){var t=e.alternate;if(!t){if(t=$4(e),t===null)throw Error(B(188));return t!==e?null:e}for(var n=e,u=t;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(u=r.return,u!==null){n=u;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return co(r),e;if(i===u)return co(r),t;i=i.sibling}throw Error(B(188))}if(n.return!==u.return)n=r,u=i;else{for(var o=!1,s=r.child;s;){if(s===n){o=!0,n=r,u=i;break}if(s===u){o=!0,u=r,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,u=r;break}if(s===u){o=!0,u=i,n=r;break}s=s.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==u)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?e:t}function ua(e){return e=ec(e),e!==null?ra(e):null}function ra(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ra(e);if(t!==null)return t;e=e.sibling}return null}var ia=We.unstable_scheduleCallback,po=We.unstable_cancelCallback,tc=We.unstable_shouldYield,nc=We.unstable_requestPaint,ie=We.unstable_now,uc=We.unstable_getCurrentPriorityLevel,Mi=We.unstable_ImmediatePriority,oa=We.unstable_UserBlockingPriority,Yu=We.unstable_NormalPriority,rc=We.unstable_LowPriority,sa=We.unstable_IdlePriority,Mr=null,vt=null;function ic(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(Mr,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:lc,oc=Math.log,sc=Math.LN2;function lc(e){return e>>>=0,e===0?32:31-(oc(e)/sc|0)|0}var Yn=64,eu=4194304;function J0(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function er(e,t){var n=e.pendingLanes;if(n===0)return 0;var u=0,r=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~r;s!==0?u=J0(s):(i&=o,i!==0&&(u=J0(i)))}else o=n&~r,o!==0?u=J0(o):i!==0&&(u=J0(i));if(u===0)return 0;if(t!==0&&t!==u&&(t&r)===0&&(r=u&-u,i=t&-t,r>=i||r===16&&(i&4194240)!==0))return t;if((u&4)!==0&&(u|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=u;0<t;)n=31-ct(t),r=1<<n,u|=e[n],t&=~r;return u}function ac(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cc(e,t){for(var n=e.suspendedLanes,u=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-ct(i),s=1<<o,l=r[o];l===-1?((s&n)===0||(s&u)!==0)&&(r[o]=ac(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function S3(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function la(){var e=Yn;return Yn<<=1,(Yn&4194240)===0&&(Yn=64),e}function f1(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function dc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var u=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-ct(n),i=1<<r;t[r]=0,u[r]=-1,e[r]=-1,n&=~i}}function Oi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var u=31-ct(n),r=1<<u;r&t|e[u]&t&&(e[u]|=t),n&=~r}}var V=0;function aa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ca,Ti,da,pa,fa,k3=!1,tu=[],r4=null,i4=null,o4=null,wn=new Map,En=new Map,Xt=[],pc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fo(e,t){switch(e){case"focusin":case"focusout":r4=null;break;case"dragenter":case"dragleave":i4=null;break;case"mouseover":case"mouseout":o4=null;break;case"pointerover":case"pointerout":wn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":En.delete(t.pointerId)}}function H0(e,t,n,u,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:u,nativeEvent:i,targetContainers:[r]},t!==null&&(t=Hn(t),t!==null&&Ti(t)),e):(e.eventSystemFlags|=u,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function fc(e,t,n,u,r){switch(t){case"focusin":return r4=H0(r4,e,t,n,u,r),!0;case"dragenter":return i4=H0(i4,e,t,n,u,r),!0;case"mouseover":return o4=H0(o4,e,t,n,u,r),!0;case"pointerover":var i=r.pointerId;return wn.set(i,H0(wn.get(i)||null,e,t,n,u,r)),!0;case"gotpointercapture":return i=r.pointerId,En.set(i,H0(En.get(i)||null,e,t,n,u,r)),!0}return!1}function ha(e){var t=F4(e.target);if(t!==null){var n=$4(t);if(n!==null){if(t=n.tag,t===13){if(t=na(n),t!==null){e.blockedOn=t,fa(e.priority,function(){da(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Du(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=F3(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var u=new n.constructor(n.type,n);y3=u,n.target.dispatchEvent(u),y3=null}else return t=Hn(n),t!==null&&Ti(t),e.blockedOn=n,!1;t.shift()}return!0}function ho(e,t,n){Du(e)&&n.delete(t)}function hc(){k3=!1,r4!==null&&Du(r4)&&(r4=null),i4!==null&&Du(i4)&&(i4=null),o4!==null&&Du(o4)&&(o4=null),wn.forEach(ho),En.forEach(ho)}function $0(e,t){e.blockedOn===t&&(e.blockedOn=null,k3||(k3=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,hc)))}function Sn(e){function t(r){return $0(r,e)}if(0<tu.length){$0(tu[0],e);for(var n=1;n<tu.length;n++){var u=tu[n];u.blockedOn===e&&(u.blockedOn=null)}}for(r4!==null&&$0(r4,e),i4!==null&&$0(i4,e),o4!==null&&$0(o4,e),wn.forEach(t),En.forEach(t),n=0;n<Xt.length;n++)u=Xt[n],u.blockedOn===e&&(u.blockedOn=null);for(;0<Xt.length&&(n=Xt[0],n.blockedOn===null);)ha(n),n.blockedOn===null&&Xt.shift()}var c0=$t.ReactCurrentBatchConfig,tr=!0;function mc(e,t,n,u){var r=V,i=c0.transition;c0.transition=null;try{V=1,Ii(e,t,n,u)}finally{V=r,c0.transition=i}}function Cc(e,t,n,u){var r=V,i=c0.transition;c0.transition=null;try{V=4,Ii(e,t,n,u)}finally{V=r,c0.transition=i}}function Ii(e,t,n,u){if(tr){var r=F3(e,t,n,u);if(r===null)S1(e,t,u,nr,n),fo(e,u);else if(fc(r,e,t,n,u))u.stopPropagation();else if(fo(e,u),t&4&&-1<pc.indexOf(e)){for(;r!==null;){var i=Hn(r);if(i!==null&&ca(i),i=F3(e,t,n,u),i===null&&S1(e,t,u,nr,n),i===r)break;r=i}r!==null&&u.stopPropagation()}else S1(e,t,u,null,n)}}var nr=null;function F3(e,t,n,u){if(nr=null,e=Ri(u),e=F4(e),e!==null)if(t=$4(e),t===null)e=null;else if(n=t.tag,n===13){if(e=na(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return nr=e,null}function ma(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uc()){case Mi:return 1;case oa:return 4;case Yu:case rc:return 16;case sa:return 536870912;default:return 16}default:return 16}}var e4=null,Ni=null,bu=null;function Ca(){if(bu)return bu;var e,t=Ni,n=t.length,u,r="value"in e4?e4.value:e4.textContent,i=r.length;for(e=0;e<n&&t[e]===r[e];e++);var o=n-e;for(u=1;u<=o&&t[n-u]===r[i-u];u++);return bu=r.slice(e,1<u?1-u:void 0)}function Au(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function nu(){return!0}function mo(){return!1}function Ze(e){function t(n,u,r,i,o){this._reactName=n,this._targetInst=r,this.type=u,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?nu:mo,this.isPropagationStopped=mo,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nu)},persist:function(){},isPersistent:nu}),t}var P0={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zi=Ze(P0),jn=Y({},P0,{view:0,detail:0}),gc=Ze(jn),h1,m1,U0,Or=Y({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ji,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==U0&&(U0&&e.type==="mousemove"?(h1=e.screenX-U0.screenX,m1=e.screenY-U0.screenY):m1=h1=0,U0=e),h1)},movementY:function(e){return"movementY"in e?e.movementY:m1}}),Co=Ze(Or),xc=Y({},Or,{dataTransfer:0}),yc=Ze(xc),vc=Y({},jn,{relatedTarget:0}),C1=Ze(vc),wc=Y({},P0,{animationName:0,elapsedTime:0,pseudoElement:0}),Ec=Ze(wc),Sc=Y({},P0,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kc=Ze(Sc),Fc=Y({},P0,{data:0}),go=Ze(Fc),Dc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ac={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ac[e])?!!t[e]:!1}function ji(){return Lc}var Bc=Y({},jn,{key:function(e){if(e.key){var t=Dc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Au(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ji,charCode:function(e){return e.type==="keypress"?Au(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Au(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pc=Ze(Bc),Rc=Y({},Or,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xo=Ze(Rc),Mc=Y({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ji}),Oc=Ze(Mc),Tc=Y({},P0,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ic=Ze(Tc),Nc=Y({},Or,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zc=Ze(Nc),jc=[9,13,27,32],Hi=It&&"CompositionEvent"in window,un=null;It&&"documentMode"in document&&(un=document.documentMode);var Hc=It&&"TextEvent"in window&&!un,ga=It&&(!Hi||un&&8<un&&11>=un),yo=String.fromCharCode(32),vo=!1;function xa(e,t){switch(e){case"keyup":return jc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ya(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var X4=!1;function $c(e,t){switch(e){case"compositionend":return ya(t);case"keypress":return t.which!==32?null:(vo=!0,yo);case"textInput":return e=t.data,e===yo&&vo?null:e;default:return null}}function Uc(e,t){if(X4)return e==="compositionend"||!Hi&&xa(e,t)?(e=Ca(),bu=Ni=e4=null,X4=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ga&&t.locale!=="ko"?null:t.data;default:return null}}var Vc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vc[e.type]:t==="textarea"}function va(e,t,n,u){Xl(u),t=ur(t,"onChange"),0<t.length&&(n=new zi("onChange","change",null,n,u),e.push({event:n,listeners:t}))}var rn=null,kn=null;function Wc(e){Pa(e,0)}function Tr(e){var t=e0(e);if(Wl(t))return e}function Qc(e,t){if(e==="change")return t}var wa=!1;if(It){var g1;if(It){var x1="oninput"in document;if(!x1){var Eo=document.createElement("div");Eo.setAttribute("oninput","return;"),x1=typeof Eo.oninput=="function"}g1=x1}else g1=!1;wa=g1&&(!document.documentMode||9<document.documentMode)}function So(){rn&&(rn.detachEvent("onpropertychange",Ea),kn=rn=null)}function Ea(e){if(e.propertyName==="value"&&Tr(kn)){var t=[];va(t,kn,e,Ri(e)),ta(Wc,t)}}function Zc(e,t,n){e==="focusin"?(So(),rn=t,kn=n,rn.attachEvent("onpropertychange",Ea)):e==="focusout"&&So()}function _c(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tr(kn)}function qc(e,t){if(e==="click")return Tr(t)}function Gc(e,t){if(e==="input"||e==="change")return Tr(t)}function Kc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Kc;function Fn(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),u=Object.keys(t);if(n.length!==u.length)return!1;for(u=0;u<n.length;u++){var r=n[u];if(!s3.call(t,r)||!ft(e[r],t[r]))return!1}return!0}function ko(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fo(e,t){var n=ko(e);e=0;for(var u;n;){if(n.nodeType===3){if(u=e+n.textContent.length,e<=t&&u>=t)return{node:n,offset:t-e};e=u}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ko(n)}}function Sa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ka(){for(var e=window,t=Ku();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ku(e.document)}return t}function $i(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xc(e){var t=ka(),n=e.focusedElem,u=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sa(n.ownerDocument.documentElement,n)){if(u!==null&&$i(n)){if(t=u.start,e=u.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,i=Math.min(u.start,r);u=u.end===void 0?i:Math.min(u.end,r),!e.extend&&i>u&&(r=u,u=i,i=r),r=Fo(n,i);var o=Fo(n,u);r&&o&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),i>u?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jc=It&&"documentMode"in document&&11>=document.documentMode,J4=null,D3=null,on=null,b3=!1;function Do(e,t,n){var u=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;b3||J4==null||J4!==Ku(u)||(u=J4,"selectionStart"in u&&$i(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),on&&Fn(on,u)||(on=u,u=ur(D3,"onSelect"),0<u.length&&(t=new zi("onSelect","select",null,t,n),e.push({event:t,listeners:u}),t.target=J4)))}function uu(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Y4={animationend:uu("Animation","AnimationEnd"),animationiteration:uu("Animation","AnimationIteration"),animationstart:uu("Animation","AnimationStart"),transitionend:uu("Transition","TransitionEnd")},y1={},Fa={};It&&(Fa=document.createElement("div").style,"AnimationEvent"in window||(delete Y4.animationend.animation,delete Y4.animationiteration.animation,delete Y4.animationstart.animation),"TransitionEvent"in window||delete Y4.transitionend.transition);function Ir(e){if(y1[e])return y1[e];if(!Y4[e])return e;var t=Y4[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fa)return y1[e]=t[n];return e}var Da=Ir("animationend"),ba=Ir("animationiteration"),Aa=Ir("animationstart"),La=Ir("transitionend"),Ba=new Map,bo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function m4(e,t){Ba.set(e,t),H4(t,[e])}for(var v1=0;v1<bo.length;v1++){var w1=bo[v1],Yc=w1.toLowerCase(),ed=w1[0].toUpperCase()+w1.slice(1);m4(Yc,"on"+ed)}m4(Da,"onAnimationEnd");m4(ba,"onAnimationIteration");m4(Aa,"onAnimationStart");m4("dblclick","onDoubleClick");m4("focusin","onFocus");m4("focusout","onBlur");m4(La,"onTransitionEnd");x0("onMouseEnter",["mouseout","mouseover"]);x0("onMouseLeave",["mouseout","mouseover"]);x0("onPointerEnter",["pointerout","pointerover"]);x0("onPointerLeave",["pointerout","pointerover"]);H4("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));H4("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));H4("onBeforeInput",["compositionend","keypress","textInput","paste"]);H4("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));H4("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));H4("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Y0="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),td=new Set("cancel close invalid load scroll toggle".split(" ").concat(Y0));function Ao(e,t,n){var u=e.type||"unknown-event";e.currentTarget=n,Y7(u,t,void 0,e),e.currentTarget=null}function Pa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var u=e[n],r=u.event;u=u.listeners;e:{var i=void 0;if(t)for(var o=u.length-1;0<=o;o--){var s=u[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==i&&r.isPropagationStopped())break e;Ao(r,s,c),i=l}else for(o=0;o<u.length;o++){if(s=u[o],l=s.instance,c=s.currentTarget,s=s.listener,l!==i&&r.isPropagationStopped())break e;Ao(r,s,c),i=l}}}if(Ju)throw e=E3,Ju=!1,E3=null,e}function _(e,t){var n=t[R3];n===void 0&&(n=t[R3]=new Set);var u=e+"__bubble";n.has(u)||(Ra(t,e,2,!1),n.add(u))}function E1(e,t,n){var u=0;t&&(u|=4),Ra(n,e,u,t)}var ru="_reactListening"+Math.random().toString(36).slice(2);function Dn(e){if(!e[ru]){e[ru]=!0,jl.forEach(function(n){n!=="selectionchange"&&(td.has(n)||E1(n,!1,e),E1(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ru]||(t[ru]=!0,E1("selectionchange",!1,t))}}function Ra(e,t,n,u){switch(ma(t)){case 1:var r=mc;break;case 4:r=Cc;break;default:r=Ii}n=r.bind(null,t,n,e),r=void 0,!w3||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),u?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function S1(e,t,n,u,r){var i=u;if((t&1)===0&&(t&2)===0&&u!==null)e:for(;;){if(u===null)return;var o=u.tag;if(o===3||o===4){var s=u.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(o===4)for(o=u.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;s!==null;){if(o=F4(s),o===null)return;if(l=o.tag,l===5||l===6){u=i=o;continue e}s=s.parentNode}}u=u.return}ta(function(){var c=i,d=Ri(n),m=[];e:{var g=Ba.get(e);if(g!==void 0){var v=zi,y=e;switch(e){case"keypress":if(Au(n)===0)break e;case"keydown":case"keyup":v=Pc;break;case"focusin":y="focus",v=C1;break;case"focusout":y="blur",v=C1;break;case"beforeblur":case"afterblur":v=C1;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Co;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=yc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Oc;break;case Da:case ba:case Aa:v=Ec;break;case La:v=Ic;break;case"scroll":v=gc;break;case"wheel":v=zc;break;case"copy":case"cut":case"paste":v=kc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=xo}var E=(t&4)!==0,b=!E&&e==="scroll",h=E?g!==null?g+"Capture":null:g;E=[];for(var f=c,C;f!==null;){C=f;var k=C.stateNode;if(C.tag===5&&k!==null&&(C=k,h!==null&&(k=vn(f,h),k!=null&&E.push(bn(f,k,C)))),b)break;f=f.return}0<E.length&&(g=new v(g,y,null,n,d),m.push({event:g,listeners:E}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==y3&&(y=n.relatedTarget||n.fromElement)&&(F4(y)||y[Nt]))break e;if((v||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=c,y=y?F4(y):null,y!==null&&(b=$4(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(E=Co,k="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(E=xo,k="onPointerLeave",h="onPointerEnter",f="pointer"),b=v==null?g:e0(v),C=y==null?g:e0(y),g=new E(k,f+"leave",v,n,d),g.target=b,g.relatedTarget=C,k=null,F4(d)===c&&(E=new E(h,f+"enter",y,n,d),E.target=C,E.relatedTarget=b,k=E),b=k,v&&y)t:{for(E=v,h=y,f=0,C=E;C;C=W4(C))f++;for(C=0,k=h;k;k=W4(k))C++;for(;0<f-C;)E=W4(E),f--;for(;0<C-f;)h=W4(h),C--;for(;f--;){if(E===h||h!==null&&E===h.alternate)break t;E=W4(E),h=W4(h)}E=null}else E=null;v!==null&&Lo(m,g,v,E,!1),y!==null&&b!==null&&Lo(m,b,y,E,!0)}}e:{if(g=c?e0(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var D=Qc;else if(wo(g))if(wa)D=Gc;else{D=_c;var F=Zc}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(D=qc);if(D&&(D=D(e,c))){va(m,D,n,d);break e}F&&F(e,g,c),e==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&h3(g,"number",g.value)}switch(F=c?e0(c):window,e){case"focusin":(wo(F)||F.contentEditable==="true")&&(J4=F,D3=c,on=null);break;case"focusout":on=D3=J4=null;break;case"mousedown":b3=!0;break;case"contextmenu":case"mouseup":case"dragend":b3=!1,Do(m,n,d);break;case"selectionchange":if(Jc)break;case"keydown":case"keyup":Do(m,n,d)}var S;if(Hi)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else X4?xa(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(ga&&n.locale!=="ko"&&(X4||A!=="onCompositionStart"?A==="onCompositionEnd"&&X4&&(S=Ca()):(e4=d,Ni="value"in e4?e4.value:e4.textContent,X4=!0)),F=ur(c,A),0<F.length&&(A=new go(A,e,null,n,d),m.push({event:A,listeners:F}),S?A.data=S:(S=ya(n),S!==null&&(A.data=S)))),(S=Hc?$c(e,n):Uc(e,n))&&(c=ur(c,"onBeforeInput"),0<c.length&&(d=new go("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:c}),d.data=S))}Pa(m,t)})}function bn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ur(e,t){for(var n=t+"Capture",u=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=vn(e,n),i!=null&&u.unshift(bn(e,i,r)),i=vn(e,t),i!=null&&u.push(bn(e,i,r))),e=e.return}return u}function W4(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Lo(e,t,n,u,r){for(var i=t._reactName,o=[];n!==null&&n!==u;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===u)break;s.tag===5&&c!==null&&(s=c,r?(l=vn(n,i),l!=null&&o.unshift(bn(n,l,s))):r||(l=vn(n,i),l!=null&&o.push(bn(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var nd=/\r\n?/g,ud=/\u0000|\uFFFD/g;function Bo(e){return(typeof e=="string"?e:""+e).replace(nd,`
`).replace(ud,"")}function iu(e,t,n){if(t=Bo(t),Bo(e)!==t&&n)throw Error(B(425))}function rr(){}var A3=null,L3=null;function B3(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var P3=typeof setTimeout=="function"?setTimeout:void 0,rd=typeof clearTimeout=="function"?clearTimeout:void 0,Po=typeof Promise=="function"?Promise:void 0,id=typeof queueMicrotask=="function"?queueMicrotask:typeof Po!="undefined"?function(e){return Po.resolve(null).then(e).catch(od)}:P3;function od(e){setTimeout(function(){throw e})}function k1(e,t){var n=t,u=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(u===0){e.removeChild(r),Sn(t);return}u--}else n!=="$"&&n!=="$?"&&n!=="$!"||u++;n=r}while(n);Sn(t)}function s4(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ro(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var R0=Math.random().toString(36).slice(2),xt="__reactFiber$"+R0,An="__reactProps$"+R0,Nt="__reactContainer$"+R0,R3="__reactEvents$"+R0,sd="__reactListeners$"+R0,ld="__reactHandles$"+R0;function F4(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ro(e);e!==null;){if(n=e[xt])return n;e=Ro(e)}return t}e=n,n=e.parentNode}return null}function Hn(e){return e=e[xt]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function e0(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(B(33))}function Nr(e){return e[An]||null}var M3=[],t0=-1;function C4(e){return{current:e}}function q(e){0>t0||(e.current=M3[t0],M3[t0]=null,t0--)}function Q(e,t){t0++,M3[t0]=e.current,e.current=t}var h4={},Fe=C4(h4),Oe=C4(!1),M4=h4;function y0(e,t){var n=e.type.contextTypes;if(!n)return h4;var u=e.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===t)return u.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in n)r[i]=t[i];return u&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function Te(e){return e=e.childContextTypes,e!=null}function ir(){q(Oe),q(Fe)}function Mo(e,t,n){if(Fe.current!==h4)throw Error(B(168));Q(Fe,t),Q(Oe,n)}function Ma(e,t,n){var u=e.stateNode;if(t=t.childContextTypes,typeof u.getChildContext!="function")return n;u=u.getChildContext();for(var r in u)if(!(r in t))throw Error(B(108,Z7(e)||"Unknown",r));return Y({},n,u)}function or(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||h4,M4=Fe.current,Q(Fe,e),Q(Oe,Oe.current),!0}function Oo(e,t,n){var u=e.stateNode;if(!u)throw Error(B(169));n?(e=Ma(e,t,M4),u.__reactInternalMemoizedMergedChildContext=e,q(Oe),q(Fe),Q(Fe,e)):q(Oe),Q(Oe,n)}var Bt=null,zr=!1,F1=!1;function Oa(e){Bt===null?Bt=[e]:Bt.push(e)}function ad(e){zr=!0,Oa(e)}function g4(){if(!F1&&Bt!==null){F1=!0;var e=0,t=V;try{var n=Bt;for(V=1;e<n.length;e++){var u=n[e];do u=u(!0);while(u!==null)}Bt=null,zr=!1}catch(r){throw Bt!==null&&(Bt=Bt.slice(e+1)),ia(Mi,g4),r}finally{V=t,F1=!1}}return null}var n0=[],u0=0,sr=null,lr=0,Ke=[],Xe=0,O4=null,Pt=1,Rt="";function v4(e,t){n0[u0++]=lr,n0[u0++]=sr,sr=e,lr=t}function Ta(e,t,n){Ke[Xe++]=Pt,Ke[Xe++]=Rt,Ke[Xe++]=O4,O4=e;var u=Pt;e=Rt;var r=32-ct(u)-1;u&=~(1<<r),n+=1;var i=32-ct(t)+r;if(30<i){var o=r-r%5;i=(u&(1<<o)-1).toString(32),u>>=o,r-=o,Pt=1<<32-ct(t)+r|n<<r|u,Rt=i+e}else Pt=1<<i|n<<r|u,Rt=e}function Ui(e){e.return!==null&&(v4(e,1),Ta(e,1,0))}function Vi(e){for(;e===sr;)sr=n0[--u0],n0[u0]=null,lr=n0[--u0],n0[u0]=null;for(;e===O4;)O4=Ke[--Xe],Ke[Xe]=null,Rt=Ke[--Xe],Ke[Xe]=null,Pt=Ke[--Xe],Ke[Xe]=null}var Ve=null,$e=null,K=!1,lt=null;function Ia(e,t){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function To(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,$e=s4(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=O4!==null?{id:Pt,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,$e=null,!0):!1;default:return!1}}function O3(e){return(e.mode&1)!==0&&(e.flags&128)===0}function T3(e){if(K){var t=$e;if(t){var n=t;if(!To(e,t)){if(O3(e))throw Error(B(418));t=s4(n.nextSibling);var u=Ve;t&&To(e,t)?Ia(u,n):(e.flags=e.flags&-4097|2,K=!1,Ve=e)}}else{if(O3(e))throw Error(B(418));e.flags=e.flags&-4097|2,K=!1,Ve=e}}}function Io(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function ou(e){if(e!==Ve)return!1;if(!K)return Io(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!B3(e.type,e.memoizedProps)),t&&(t=$e)){if(O3(e))throw Na(),Error(B(418));for(;t;)Ia(e,t),t=s4(t.nextSibling)}if(Io(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=s4(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=Ve?s4(e.stateNode.nextSibling):null;return!0}function Na(){for(var e=$e;e;)e=s4(e.nextSibling)}function v0(){$e=Ve=null,K=!1}function Wi(e){lt===null?lt=[e]:lt.push(e)}var cd=$t.ReactCurrentBatchConfig;function ot(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ar=C4(null),cr=null,r0=null,Qi=null;function Zi(){Qi=r0=cr=null}function _i(e){var t=ar.current;q(ar),e._currentValue=t}function I3(e,t,n){for(;e!==null;){var u=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,u!==null&&(u.childLanes|=t)):u!==null&&(u.childLanes&t)!==t&&(u.childLanes|=t),e===n)break;e=e.return}}function d0(e,t){cr=e,Qi=r0=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Re=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(Qi!==e)if(e={context:e,memoizedValue:t,next:null},r0===null){if(cr===null)throw Error(B(308));r0=e,cr.dependencies={lanes:0,firstContext:e}}else r0=r0.next=e;return t}var D4=null;function qi(e){D4===null?D4=[e]:D4.push(e)}function za(e,t,n,u){var r=t.interleaved;return r===null?(n.next=n,qi(t)):(n.next=r.next,r.next=n),t.interleaved=n,zt(e,u)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kt=!1;function Gi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ja(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function l4(e,t,n){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,($&2)!==0){var r=u.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),u.pending=t,zt(e,n)}return r=u.interleaved,r===null?(t.next=t,qi(u)):(t.next=r.next,r.next=t),u.interleaved=t,zt(e,n)}function Lu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var u=t.lanes;u&=e.pendingLanes,n|=u,t.lanes=n,Oi(e,n)}}function No(e,t){var n=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,n===u)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?r=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?r=i=t:i=i.next=t}else r=i=t;n={baseState:u.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:u.shared,effects:u.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function dr(e,t,n,u){var r=e.updateQueue;Kt=!1;var i=r.firstBaseUpdate,o=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,c=l.next;l.next=null,o===null?i=c:o.next=c,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=l))}if(i!==null){var m=r.baseState;o=0,d=c=l=null,s=i;do{var g=s.lane,v=s.eventTime;if((u&g)===g){d!==null&&(d=d.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,E=s;switch(g=t,v=n,E.tag){case 1:if(y=E.payload,typeof y=="function"){m=y.call(v,m,g);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=E.payload,g=typeof y=="function"?y.call(v,m,g):y,g==null)break e;m=Y({},m,g);break e;case 2:Kt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=r.effects,g===null?r.effects=[s]:g.push(s))}else v={eventTime:v,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=v,l=m):d=d.next=v,o|=g;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;g=s,s=g.next,g.next=null,r.lastBaseUpdate=g,r.shared.pending=null}}while(1);if(d===null&&(l=m),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,t=r.shared.interleaved,t!==null){r=t;do o|=r.lane,r=r.next;while(r!==t)}else i===null&&(r.shared.lanes=0);I4|=o,e.lanes=o,e.memoizedState=m}}function zo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var u=e[t],r=u.callback;if(r!==null){if(u.callback=null,u=n,typeof r!="function")throw Error(B(191,r));r.call(u)}}}var Ha=new zl.Component().refs;function N3(e,t,n,u){t=e.memoizedState,n=n(u,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jr={isMounted:function(e){return(e=e._reactInternals)?$4(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var u=Ae(),r=c4(e),i=Ot(u,r);i.payload=t,n!=null&&(i.callback=n),t=l4(e,i,r),t!==null&&(dt(t,e,r,u),Lu(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var u=Ae(),r=c4(e),i=Ot(u,r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=l4(e,i,r),t!==null&&(dt(t,e,r,u),Lu(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),u=c4(e),r=Ot(n,u);r.tag=2,t!=null&&(r.callback=t),t=l4(e,r,u),t!==null&&(dt(t,e,u,n),Lu(t,e,u))}};function jo(e,t,n,u,r,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,i,o):t.prototype&&t.prototype.isPureReactComponent?!Fn(n,u)||!Fn(r,i):!0}function $a(e,t,n){var u=!1,r=h4,i=t.contextType;return typeof i=="object"&&i!==null?i=ut(i):(r=Te(t)?M4:Fe.current,u=t.contextTypes,i=(u=u!=null)?y0(e,r):h4),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jr,e.stateNode=t,t._reactInternals=e,u&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ho(e,t,n,u){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,u),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,u),t.state!==e&&jr.enqueueReplaceState(t,t.state,null)}function z3(e,t,n,u){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs=Ha,Gi(e);var i=t.contextType;typeof i=="object"&&i!==null?r.context=ut(i):(i=Te(t)?M4:Fe.current,r.context=y0(e,i)),r.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(N3(e,t,i,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&jr.enqueueReplaceState(r,r.state,null),dr(e,n,r,u),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function V0(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var u=n.stateNode}if(!u)throw Error(B(147,e));var r=u,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=r.refs;s===Ha&&(s=r.refs={}),o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,e))}return e}function su(e,t){throw e=Object.prototype.toString.call(t),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $o(e){var t=e._init;return t(e._payload)}function Ua(e){function t(h,f){if(e){var C=h.deletions;C===null?(h.deletions=[f],h.flags|=16):C.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function u(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function r(h,f){return h=d4(h,f),h.index=0,h.sibling=null,h}function i(h,f,C){return h.index=C,e?(C=h.alternate,C!==null?(C=C.index,C<f?(h.flags|=2,f):C):(h.flags|=2,f)):(h.flags|=1048576,f)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,f,C,k){return f===null||f.tag!==6?(f=R1(C,h.mode,k),f.return=h,f):(f=r(f,C),f.return=h,f)}function l(h,f,C,k){var D=C.type;return D===K4?d(h,f,C.props.children,k,C.key):f!==null&&(f.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Gt&&$o(D)===f.type)?(k=r(f,C.props),k.ref=V0(h,f,C),k.return=h,k):(k=Tu(C.type,C.key,C.props,null,h.mode,k),k.ref=V0(h,f,C),k.return=h,k)}function c(h,f,C,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==C.containerInfo||f.stateNode.implementation!==C.implementation?(f=M1(C,h.mode,k),f.return=h,f):(f=r(f,C.children||[]),f.return=h,f)}function d(h,f,C,k,D){return f===null||f.tag!==7?(f=B4(C,h.mode,k,D),f.return=h,f):(f=r(f,C),f.return=h,f)}function m(h,f,C){if(typeof f=="string"&&f!==""||typeof f=="number")return f=R1(""+f,h.mode,C),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Kn:return C=Tu(f.type,f.key,f.props,null,h.mode,C),C.ref=V0(h,null,f),C.return=h,C;case G4:return f=M1(f,h.mode,C),f.return=h,f;case Gt:var k=f._init;return m(h,k(f._payload),C)}if(X0(f)||z0(f))return f=B4(f,h.mode,C,null),f.return=h,f;su(h,f)}return null}function g(h,f,C,k){var D=f!==null?f.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return D!==null?null:s(h,f,""+C,k);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Kn:return C.key===D?l(h,f,C,k):null;case G4:return C.key===D?c(h,f,C,k):null;case Gt:return D=C._init,g(h,f,D(C._payload),k)}if(X0(C)||z0(C))return D!==null?null:d(h,f,C,k,null);su(h,C)}return null}function v(h,f,C,k,D){if(typeof k=="string"&&k!==""||typeof k=="number")return h=h.get(C)||null,s(f,h,""+k,D);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Kn:return h=h.get(k.key===null?C:k.key)||null,l(f,h,k,D);case G4:return h=h.get(k.key===null?C:k.key)||null,c(f,h,k,D);case Gt:var F=k._init;return v(h,f,C,F(k._payload),D)}if(X0(k)||z0(k))return h=h.get(C)||null,d(f,h,k,D,null);su(f,k)}return null}function y(h,f,C,k){for(var D=null,F=null,S=f,A=f=0,N=null;S!==null&&A<C.length;A++){S.index>A?(N=S,S=null):N=S.sibling;var I=g(h,S,C[A],k);if(I===null){S===null&&(S=N);break}e&&S&&I.alternate===null&&t(h,S),f=i(I,f,A),F===null?D=I:F.sibling=I,F=I,S=N}if(A===C.length)return n(h,S),K&&v4(h,A),D;if(S===null){for(;A<C.length;A++)S=m(h,C[A],k),S!==null&&(f=i(S,f,A),F===null?D=S:F.sibling=S,F=S);return K&&v4(h,A),D}for(S=u(h,S);A<C.length;A++)N=v(S,h,A,C[A],k),N!==null&&(e&&N.alternate!==null&&S.delete(N.key===null?A:N.key),f=i(N,f,A),F===null?D=N:F.sibling=N,F=N);return e&&S.forEach(function(xe){return t(h,xe)}),K&&v4(h,A),D}function E(h,f,C,k){var D=z0(C);if(typeof D!="function")throw Error(B(150));if(C=D.call(C),C==null)throw Error(B(151));for(var F=D=null,S=f,A=f=0,N=null,I=C.next();S!==null&&!I.done;A++,I=C.next()){S.index>A?(N=S,S=null):N=S.sibling;var xe=g(h,S,I.value,k);if(xe===null){S===null&&(S=N);break}e&&S&&xe.alternate===null&&t(h,S),f=i(xe,f,A),F===null?D=xe:F.sibling=xe,F=xe,S=N}if(I.done)return n(h,S),K&&v4(h,A),D;if(S===null){for(;!I.done;A++,I=C.next())I=m(h,I.value,k),I!==null&&(f=i(I,f,A),F===null?D=I:F.sibling=I,F=I);return K&&v4(h,A),D}for(S=u(h,S);!I.done;A++,I=C.next())I=v(S,h,A,I.value,k),I!==null&&(e&&I.alternate!==null&&S.delete(I.key===null?A:I.key),f=i(I,f,A),F===null?D=I:F.sibling=I,F=I);return e&&S.forEach(function(Ut){return t(h,Ut)}),K&&v4(h,A),D}function b(h,f,C,k){if(typeof C=="object"&&C!==null&&C.type===K4&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Kn:e:{for(var D=C.key,F=f;F!==null;){if(F.key===D){if(D=C.type,D===K4){if(F.tag===7){n(h,F.sibling),f=r(F,C.props.children),f.return=h,h=f;break e}}else if(F.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Gt&&$o(D)===F.type){n(h,F.sibling),f=r(F,C.props),f.ref=V0(h,F,C),f.return=h,h=f;break e}n(h,F);break}else t(h,F);F=F.sibling}C.type===K4?(f=B4(C.props.children,h.mode,k,C.key),f.return=h,h=f):(k=Tu(C.type,C.key,C.props,null,h.mode,k),k.ref=V0(h,f,C),k.return=h,h=k)}return o(h);case G4:e:{for(F=C.key;f!==null;){if(f.key===F)if(f.tag===4&&f.stateNode.containerInfo===C.containerInfo&&f.stateNode.implementation===C.implementation){n(h,f.sibling),f=r(f,C.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=M1(C,h.mode,k),f.return=h,h=f}return o(h);case Gt:return F=C._init,b(h,f,F(C._payload),k)}if(X0(C))return y(h,f,C,k);if(z0(C))return E(h,f,C,k);su(h,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,f!==null&&f.tag===6?(n(h,f.sibling),f=r(f,C),f.return=h,h=f):(n(h,f),f=R1(C,h.mode,k),f.return=h,h=f),o(h)):n(h,f)}return b}var w0=Ua(!0),Va=Ua(!1),$n={},wt=C4($n),Ln=C4($n),Bn=C4($n);function b4(e){if(e===$n)throw Error(B(174));return e}function Ki(e,t){switch(Q(Bn,t),Q(Ln,e),Q(wt,$n),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:C3(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=C3(t,e)}q(wt),Q(wt,t)}function E0(){q(wt),q(Ln),q(Bn)}function Wa(e){b4(Bn.current);var t=b4(wt.current),n=C3(t,e.type);t!==n&&(Q(Ln,e),Q(wt,n))}function Xi(e){Ln.current===e&&(q(wt),q(Ln))}var X=C4(0);function pr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var D1=[];function Ji(){for(var e=0;e<D1.length;e++)D1[e]._workInProgressVersionPrimary=null;D1.length=0}var Bu=$t.ReactCurrentDispatcher,b1=$t.ReactCurrentBatchConfig,T4=0,J=null,ce=null,me=null,fr=!1,sn=!1,Pn=0,dd=0;function Ee(){throw Error(B(321))}function Yi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function e2(e,t,n,u,r,i){if(T4=i,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Bu.current=e===null||e.memoizedState===null?md:Cd,e=n(u,r),sn){i=0;do{if(sn=!1,Pn=0,25<=i)throw Error(B(301));i+=1,me=ce=null,t.updateQueue=null,Bu.current=gd,e=n(u,r)}while(sn)}if(Bu.current=hr,t=ce!==null&&ce.next!==null,T4=0,me=ce=J=null,fr=!1,t)throw Error(B(300));return e}function t2(){var e=Pn!==0;return Pn=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?J.memoizedState=me=e:me=me.next=e,me}function rt(){if(ce===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=me===null?J.memoizedState:me.next;if(t!==null)me=t,ce=e;else{if(e===null)throw Error(B(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},me===null?J.memoizedState=me=e:me=me.next=e}return me}function Rn(e,t){return typeof t=="function"?t(e):t}function A1(e){var t=rt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var u=ce,r=u.baseQueue,i=n.pending;if(i!==null){if(r!==null){var o=r.next;r.next=i.next,i.next=o}u.baseQueue=r=i,n.pending=null}if(r!==null){i=r.next,u=u.baseState;var s=o=null,l=null,c=i;do{var d=c.lane;if((T4&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),u=c.hasEagerState?c.eagerState:e(u,c.action);else{var m={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=m,o=u):l=l.next=m,J.lanes|=d,I4|=d}c=c.next}while(c!==null&&c!==i);l===null?o=u:l.next=s,ft(u,t.memoizedState)||(Re=!0),t.memoizedState=u,t.baseState=o,t.baseQueue=l,n.lastRenderedState=u}if(e=n.interleaved,e!==null){r=e;do i=r.lane,J.lanes|=i,I4|=i,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function L1(e){var t=rt(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var u=n.dispatch,r=n.pending,i=t.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do i=e(i,o.action),o=o.next;while(o!==r);ft(i,t.memoizedState)||(Re=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,u]}function Qa(){}function Za(e,t){var n=J,u=rt(),r=t(),i=!ft(u.memoizedState,r);if(i&&(u.memoizedState=r,Re=!0),u=u.queue,n2(Ga.bind(null,n,u,e),[e]),u.getSnapshot!==t||i||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,Mn(9,qa.bind(null,n,u,r,t),void 0,null),ge===null)throw Error(B(349));(T4&30)!==0||_a(n,t,r)}return r}function _a(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qa(e,t,n,u){t.value=n,t.getSnapshot=u,Ka(t)&&Xa(e)}function Ga(e,t,n){return n(function(){Ka(t)&&Xa(e)})}function Ka(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function Xa(e){var t=zt(e,1);t!==null&&dt(t,e,1,-1)}function Uo(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:e},t.queue=e,e=e.dispatch=hd.bind(null,J,e),[t.memoizedState,e]}function Mn(e,t,n,u){return e={tag:e,create:t,destroy:n,deps:u,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(u=n.next,n.next=e,e.next=u,t.lastEffect=e)),e}function Ja(){return rt().memoizedState}function Pu(e,t,n,u){var r=Ct();J.flags|=e,r.memoizedState=Mn(1|t,n,void 0,u===void 0?null:u)}function Hr(e,t,n,u){var r=rt();u=u===void 0?null:u;var i=void 0;if(ce!==null){var o=ce.memoizedState;if(i=o.destroy,u!==null&&Yi(u,o.deps)){r.memoizedState=Mn(t,n,i,u);return}}J.flags|=e,r.memoizedState=Mn(1|t,n,i,u)}function Vo(e,t){return Pu(8390656,8,e,t)}function n2(e,t){return Hr(2048,8,e,t)}function Ya(e,t){return Hr(4,2,e,t)}function e5(e,t){return Hr(4,4,e,t)}function t5(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function n5(e,t,n){return n=n!=null?n.concat([e]):null,Hr(4,4,t5.bind(null,t,e),n)}function u2(){}function u5(e,t){var n=rt();t=t===void 0?null:t;var u=n.memoizedState;return u!==null&&t!==null&&Yi(t,u[1])?u[0]:(n.memoizedState=[e,t],e)}function r5(e,t){var n=rt();t=t===void 0?null:t;var u=n.memoizedState;return u!==null&&t!==null&&Yi(t,u[1])?u[0]:(e=e(),n.memoizedState=[e,t],e)}function i5(e,t,n){return(T4&21)===0?(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n):(ft(n,t)||(n=la(),J.lanes|=n,I4|=n,e.baseState=!0),t)}function pd(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var u=b1.transition;b1.transition={};try{e(!1),t()}finally{V=n,b1.transition=u}}function o5(){return rt().memoizedState}function fd(e,t,n){var u=c4(e);if(n={lane:u,action:n,hasEagerState:!1,eagerState:null,next:null},s5(e))l5(t,n);else if(n=za(e,t,n,u),n!==null){var r=Ae();dt(n,e,u,r),a5(n,t,u)}}function hd(e,t,n){var u=c4(e),r={lane:u,action:n,hasEagerState:!1,eagerState:null,next:null};if(s5(e))l5(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(r.hasEagerState=!0,r.eagerState=s,ft(s,o)){var l=t.interleaved;l===null?(r.next=r,qi(t)):(r.next=l.next,l.next=r),t.interleaved=r;return}}catch{}finally{}n=za(e,t,r,u),n!==null&&(r=Ae(),dt(n,e,u,r),a5(n,t,u))}}function s5(e){var t=e.alternate;return e===J||t!==null&&t===J}function l5(e,t){sn=fr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function a5(e,t,n){if((n&4194240)!==0){var u=t.lanes;u&=e.pendingLanes,n|=u,t.lanes=n,Oi(e,n)}}var hr={readContext:ut,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},md={readContext:ut,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:Vo,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pu(4194308,4,t5.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pu(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pu(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var u=Ct();return t=n!==void 0?n(t):t,u.memoizedState=u.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},u.queue=e,e=e.dispatch=fd.bind(null,J,e),[u.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:Uo,useDebugValue:u2,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=Uo(!1),t=e[0];return e=pd.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var u=J,r=Ct();if(K){if(n===void 0)throw Error(B(407));n=n()}else{if(n=t(),ge===null)throw Error(B(349));(T4&30)!==0||_a(u,t,n)}r.memoizedState=n;var i={value:n,getSnapshot:t};return r.queue=i,Vo(Ga.bind(null,u,i,e),[e]),u.flags|=2048,Mn(9,qa.bind(null,u,i,n,t),void 0,null),n},useId:function(){var e=Ct(),t=ge.identifierPrefix;if(K){var n=Rt,u=Pt;n=(u&~(1<<32-ct(u)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=dd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Cd={readContext:ut,useCallback:u5,useContext:ut,useEffect:n2,useImperativeHandle:n5,useInsertionEffect:Ya,useLayoutEffect:e5,useMemo:r5,useReducer:A1,useRef:Ja,useState:function(){return A1(Rn)},useDebugValue:u2,useDeferredValue:function(e){var t=rt();return i5(t,ce.memoizedState,e)},useTransition:function(){var e=A1(Rn)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Qa,useSyncExternalStore:Za,useId:o5,unstable_isNewReconciler:!1},gd={readContext:ut,useCallback:u5,useContext:ut,useEffect:n2,useImperativeHandle:n5,useInsertionEffect:Ya,useLayoutEffect:e5,useMemo:r5,useReducer:L1,useRef:Ja,useState:function(){return L1(Rn)},useDebugValue:u2,useDeferredValue:function(e){var t=rt();return ce===null?t.memoizedState=e:i5(t,ce.memoizedState,e)},useTransition:function(){var e=L1(Rn)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Qa,useSyncExternalStore:Za,useId:o5,unstable_isNewReconciler:!1};function S0(e,t){try{var n="",u=t;do n+=Q7(u),u=u.return;while(u);var r=n}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:r,digest:null}}function B1(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function j3(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xd=typeof WeakMap=="function"?WeakMap:Map;function c5(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var u=t.value;return n.callback=function(){Cr||(Cr=!0,G3=u),j3(e,t)},n}function d5(e,t,n){n=Ot(-1,n),n.tag=3;var u=e.type.getDerivedStateFromError;if(typeof u=="function"){var r=t.value;n.payload=function(){return u(r)},n.callback=function(){j3(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){j3(e,t),typeof u!="function"&&(a4===null?a4=new Set([this]):a4.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Wo(e,t,n){var u=e.pingCache;if(u===null){u=e.pingCache=new xd;var r=new Set;u.set(t,r)}else r=u.get(t),r===void 0&&(r=new Set,u.set(t,r));r.has(n)||(r.add(n),e=Rd.bind(null,e,t,n),t.then(e,e))}function Qo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Zo(e,t,n,u,r){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,l4(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=r,e)}var yd=$t.ReactCurrentOwner,Re=!1;function De(e,t,n,u){t.child=e===null?Va(t,null,n,u):w0(t,e.child,n,u)}function _o(e,t,n,u,r){n=n.render;var i=t.ref;return d0(t,r),u=e2(e,t,n,u,i,r),n=t2(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,jt(e,t,r)):(K&&n&&Ui(t),t.flags|=1,De(e,t,u,r),t.child)}function qo(e,t,n,u,r){if(e===null){var i=n.type;return typeof i=="function"&&!d2(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,p5(e,t,i,u,r)):(e=Tu(n.type,null,u,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&r)===0){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Fn,n(o,u)&&e.ref===t.ref)return jt(e,t,r)}return t.flags|=1,e=d4(i,u),e.ref=t.ref,e.return=t,t.child=e}function p5(e,t,n,u,r){if(e!==null){var i=e.memoizedProps;if(Fn(i,u)&&e.ref===t.ref)if(Re=!1,t.pendingProps=u=i,(e.lanes&r)!==0)(e.flags&131072)!==0&&(Re=!0);else return t.lanes=e.lanes,jt(e,t,r)}return H3(e,t,n,u,r)}function f5(e,t,n){var u=t.pendingProps,r=u.children,i=e!==null?e.memoizedState:null;if(u.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(o0,He),He|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(o0,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=i!==null?i.baseLanes:n,Q(o0,He),He|=u}else i!==null?(u=i.baseLanes|n,t.memoizedState=null):u=n,Q(o0,He),He|=u;return De(e,t,r,n),t.child}function h5(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function H3(e,t,n,u,r){var i=Te(n)?M4:Fe.current;return i=y0(t,i),d0(t,r),n=e2(e,t,n,u,i,r),u=t2(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,jt(e,t,r)):(K&&u&&Ui(t),t.flags|=1,De(e,t,n,r),t.child)}function Go(e,t,n,u,r){if(Te(n)){var i=!0;or(t)}else i=!1;if(d0(t,r),t.stateNode===null)Ru(e,t),$a(t,n,u),z3(t,n,u,r),u=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ut(c):(c=Te(n)?M4:Fe.current,c=y0(t,c));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==u||l!==c)&&Ho(t,o,u,c),Kt=!1;var g=t.memoizedState;o.state=g,dr(t,u,o,r),l=t.memoizedState,s!==u||g!==l||Oe.current||Kt?(typeof d=="function"&&(N3(t,n,d,u),l=t.memoizedState),(s=Kt||jo(t,n,s,u,g,l,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=u,t.memoizedState=l),o.props=u,o.state=l,o.context=c,u=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),u=!1)}else{o=t.stateNode,ja(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ot(t.type,s),o.props=c,m=t.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ut(l):(l=Te(n)?M4:Fe.current,l=y0(t,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==m||g!==l)&&Ho(t,o,u,l),Kt=!1,g=t.memoizedState,o.state=g,dr(t,u,o,r);var y=t.memoizedState;s!==m||g!==y||Oe.current||Kt?(typeof v=="function"&&(N3(t,n,v,u),y=t.memoizedState),(c=Kt||jo(t,n,c,u,g,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(u,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(u,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=u,t.memoizedState=y),o.props=u,o.state=y,o.context=l,u=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),u=!1)}return $3(e,t,n,u,i,r)}function $3(e,t,n,u,r,i){h5(e,t);var o=(t.flags&128)!==0;if(!u&&!o)return r&&Oo(t,n,!1),jt(e,t,i);u=t.stateNode,yd.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:u.render();return t.flags|=1,e!==null&&o?(t.child=w0(t,e.child,null,i),t.child=w0(t,null,s,i)):De(e,t,s,i),t.memoizedState=u.state,r&&Oo(t,n,!0),t.child}function m5(e){var t=e.stateNode;t.pendingContext?Mo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mo(e,t.context,!1),Ki(e,t.containerInfo)}function Ko(e,t,n,u,r){return v0(),Wi(r),t.flags|=256,De(e,t,n,u),t.child}var U3={dehydrated:null,treeContext:null,retryLane:0};function V3(e){return{baseLanes:e,cachePool:null,transitions:null}}function C5(e,t,n){var u=t.pendingProps,r=X.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(r&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),Q(X,r&1),e===null)return T3(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=u.children,e=u.fallback,i?(u=t.mode,i=t.child,o={mode:"hidden",children:o},(u&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Vr(o,u,0,null),e=B4(e,u,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=V3(n),t.memoizedState=U3,e):r2(t,o));if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return vd(e,t,o,u,s,r,n);if(i){i=u.fallback,o=t.mode,r=e.child,s=r.sibling;var l={mode:"hidden",children:u.children};return(o&1)===0&&t.child!==r?(u=t.child,u.childLanes=0,u.pendingProps=l,t.deletions=null):(u=d4(r,l),u.subtreeFlags=r.subtreeFlags&14680064),s!==null?i=d4(s,i):(i=B4(i,o,n,null),i.flags|=2),i.return=t,u.return=t,u.sibling=i,t.child=u,u=i,i=t.child,o=e.child.memoizedState,o=o===null?V3(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=U3,u}return i=e.child,e=i.sibling,u=d4(i,{mode:"visible",children:u.children}),(t.mode&1)===0&&(u.lanes=n),u.return=t,u.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=u,t.memoizedState=null,u}function r2(e,t){return t=Vr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function lu(e,t,n,u){return u!==null&&Wi(u),w0(t,e.child,null,n),e=r2(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vd(e,t,n,u,r,i,o){if(n)return t.flags&256?(t.flags&=-257,u=B1(Error(B(422))),lu(e,t,o,u)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=u.fallback,r=t.mode,u=Vr({mode:"visible",children:u.children},r,0,null),i=B4(i,r,o,null),i.flags|=2,u.return=t,i.return=t,u.sibling=i,t.child=u,(t.mode&1)!==0&&w0(t,e.child,null,o),t.child.memoizedState=V3(o),t.memoizedState=U3,i);if((t.mode&1)===0)return lu(e,t,o,null);if(r.data==="$!"){if(u=r.nextSibling&&r.nextSibling.dataset,u)var s=u.dgst;return u=s,i=Error(B(419)),u=B1(i,u,void 0),lu(e,t,o,u)}if(s=(o&e.childLanes)!==0,Re||s){if(u=ge,u!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(u.suspendedLanes|o))!==0?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,zt(e,r),dt(u,e,r,-1))}return c2(),u=B1(Error(B(421))),lu(e,t,o,u)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=Md.bind(null,e),r._reactRetry=t,null):(e=i.treeContext,$e=s4(r.nextSibling),Ve=t,K=!0,lt=null,e!==null&&(Ke[Xe++]=Pt,Ke[Xe++]=Rt,Ke[Xe++]=O4,Pt=e.id,Rt=e.overflow,O4=t),t=r2(t,u.children),t.flags|=4096,t)}function Xo(e,t,n){e.lanes|=t;var u=e.alternate;u!==null&&(u.lanes|=t),I3(e.return,t,n)}function P1(e,t,n,u,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:u,tail:n,tailMode:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=u,i.tail=n,i.tailMode=r)}function g5(e,t,n){var u=t.pendingProps,r=u.revealOrder,i=u.tail;if(De(e,t,u.children,n),u=X.current,(u&2)!==0)u=u&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xo(e,n,t);else if(e.tag===19)Xo(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}u&=1}if(Q(X,u),(t.mode&1)===0)t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&pr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),P1(t,!1,r,n,i);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&pr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}P1(t,!0,n,null,i);break;case"together":P1(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ru(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),I4|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(B(153));if(t.child!==null){for(e=t.child,n=d4(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=d4(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wd(e,t,n){switch(t.tag){case 3:m5(t),v0();break;case 5:Wa(t);break;case 1:Te(t.type)&&or(t);break;case 4:Ki(t,t.stateNode.containerInfo);break;case 10:var u=t.type._context,r=t.memoizedProps.value;Q(ar,u._currentValue),u._currentValue=r;break;case 13:if(u=t.memoizedState,u!==null)return u.dehydrated!==null?(Q(X,X.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?C5(e,t,n):(Q(X,X.current&1),e=jt(e,t,n),e!==null?e.sibling:null);Q(X,X.current&1);break;case 19:if(u=(n&t.childLanes)!==0,(e.flags&128)!==0){if(u)return g5(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Q(X,X.current),u)break;return null;case 22:case 23:return t.lanes=0,f5(e,t,n)}return jt(e,t,n)}var x5,W3,y5,v5;x5=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};W3=function(){};y5=function(e,t,n,u){var r=e.memoizedProps;if(r!==u){e=t.stateNode,b4(wt.current);var i=null;switch(n){case"input":r=p3(e,r),u=p3(e,u),i=[];break;case"select":r=Y({},r,{value:void 0}),u=Y({},u,{value:void 0}),i=[];break;case"textarea":r=m3(e,r),u=m3(e,u),i=[];break;default:typeof r.onClick!="function"&&typeof u.onClick=="function"&&(e.onclick=rr)}g3(n,u);var o;n=null;for(c in r)if(!u.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var s=r[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in u){var l=u[c];if(s=r!=null?r[c]:void 0,u.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xn.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_("scroll",e),i||s===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};v5=function(e,t,n,u){n!==u&&(t.flags|=4)};function W0(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var u=null;n!==null;)n.alternate!==null&&(u=n),n=n.sibling;u===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,u=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,u|=r.subtreeFlags&14680064,u|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,u|=r.subtreeFlags,u|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=u,e.childLanes=n,t}function Ed(e,t,n){var u=t.pendingProps;switch(Vi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Te(t.type)&&ir(),Se(t),null;case 3:return u=t.stateNode,E0(),q(Oe),q(Fe),Ji(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(e===null||e.child===null)&&(ou(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,lt!==null&&(J3(lt),lt=null))),W3(e,t),Se(t),null;case 5:Xi(t);var r=b4(Bn.current);if(n=t.type,e!==null&&t.stateNode!=null)y5(e,t,n,u,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!u){if(t.stateNode===null)throw Error(B(166));return Se(t),null}if(e=b4(wt.current),ou(t)){u=t.stateNode,n=t.type;var i=t.memoizedProps;switch(u[xt]=t,u[An]=i,e=(t.mode&1)!==0,n){case"dialog":_("cancel",u),_("close",u);break;case"iframe":case"object":case"embed":_("load",u);break;case"video":case"audio":for(r=0;r<Y0.length;r++)_(Y0[r],u);break;case"source":_("error",u);break;case"img":case"image":case"link":_("error",u),_("load",u);break;case"details":_("toggle",u);break;case"input":io(u,i),_("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!i.multiple},_("invalid",u);break;case"textarea":so(u,i),_("invalid",u)}g3(n,i),r=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?u.textContent!==s&&(i.suppressHydrationWarning!==!0&&iu(u.textContent,s,e),r=["children",s]):typeof s=="number"&&u.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&iu(u.textContent,s,e),r=["children",""+s]):xn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&_("scroll",u)}switch(n){case"input":Xn(u),oo(u,i,!0);break;case"textarea":Xn(u),lo(u);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(u.onclick=rr)}u=r,t.updateQueue=u,u!==null&&(t.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_l(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof u.is=="string"?e=o.createElement(n,{is:u.is}):(e=o.createElement(n),n==="select"&&(o=e,u.multiple?o.multiple=!0:u.size&&(o.size=u.size))):e=o.createElementNS(e,n),e[xt]=t,e[An]=u,x5(e,t,!1,!1),t.stateNode=e;e:{switch(o=x3(n,u),n){case"dialog":_("cancel",e),_("close",e),r=u;break;case"iframe":case"object":case"embed":_("load",e),r=u;break;case"video":case"audio":for(r=0;r<Y0.length;r++)_(Y0[r],e);r=u;break;case"source":_("error",e),r=u;break;case"img":case"image":case"link":_("error",e),_("load",e),r=u;break;case"details":_("toggle",e),r=u;break;case"input":io(e,u),r=p3(e,u),_("invalid",e);break;case"option":r=u;break;case"select":e._wrapperState={wasMultiple:!!u.multiple},r=Y({},u,{value:void 0}),_("invalid",e);break;case"textarea":so(e,u),r=m3(e,u),_("invalid",e);break;default:r=u}g3(n,r),s=r;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?Kl(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ql(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&yn(e,l):typeof l=="number"&&yn(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(xn.hasOwnProperty(i)?l!=null&&i==="onScroll"&&_("scroll",e):l!=null&&Ai(e,i,l,o))}switch(n){case"input":Xn(e),oo(e,u,!1);break;case"textarea":Xn(e),lo(e);break;case"option":u.value!=null&&e.setAttribute("value",""+f4(u.value));break;case"select":e.multiple=!!u.multiple,i=u.value,i!=null?s0(e,!!u.multiple,i,!1):u.defaultValue!=null&&s0(e,!!u.multiple,u.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=rr)}switch(n){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Se(t),null;case 6:if(e&&t.stateNode!=null)v5(e,t,e.memoizedProps,u);else{if(typeof u!="string"&&t.stateNode===null)throw Error(B(166));if(n=b4(Bn.current),b4(wt.current),ou(t)){if(u=t.stateNode,n=t.memoizedProps,u[xt]=t,(i=u.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:iu(u.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&iu(u.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else u=(n.nodeType===9?n:n.ownerDocument).createTextNode(u),u[xt]=t,t.stateNode=u}return Se(t),null;case 13:if(q(X),u=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&$e!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Na(),v0(),t.flags|=98560,i=!1;else if(i=ou(t),u!==null&&u.dehydrated!==null){if(e===null){if(!i)throw Error(B(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(B(317));i[xt]=t}else v0(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),i=!1}else lt!==null&&(J3(lt),lt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(u=u!==null,u!==(e!==null&&e.memoizedState!==null)&&u&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(X.current&1)!==0?pe===0&&(pe=3):c2())),t.updateQueue!==null&&(t.flags|=4),Se(t),null);case 4:return E0(),W3(e,t),e===null&&Dn(t.stateNode.containerInfo),Se(t),null;case 10:return _i(t.type._context),Se(t),null;case 17:return Te(t.type)&&ir(),Se(t),null;case 19:if(q(X),i=t.memoizedState,i===null)return Se(t),null;if(u=(t.flags&128)!==0,o=i.rendering,o===null)if(u)W0(i,!1);else{if(pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=pr(e),o!==null){for(t.flags|=128,W0(i,!1),u=o.updateQueue,u!==null&&(t.updateQueue=u,t.flags|=4),t.subtreeFlags=0,u=n,n=t.child;n!==null;)i=n,e=u,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(X,X.current&1|2),t.child}e=e.sibling}i.tail!==null&&ie()>k0&&(t.flags|=128,u=!0,W0(i,!1),t.lanes=4194304)}else{if(!u)if(e=pr(o),e!==null){if(t.flags|=128,u=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),W0(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!K)return Se(t),null}else 2*ie()-i.renderingStartTime>k0&&n!==1073741824&&(t.flags|=128,u=!0,W0(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ie(),t.sibling=null,n=X.current,Q(X,u?n&1|2:n&1),t):(Se(t),null);case 22:case 23:return a2(),u=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==u&&(t.flags|=8192),u&&(t.mode&1)!==0?(He&1073741824)!==0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),null;case 24:return null;case 25:return null}throw Error(B(156,t.tag))}function Sd(e,t){switch(Vi(t),t.tag){case 1:return Te(t.type)&&ir(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return E0(),q(Oe),q(Fe),Ji(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Xi(t),null;case 13:if(q(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(B(340));v0()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(X),null;case 4:return E0(),null;case 10:return _i(t.type._context),null;case 22:case 23:return a2(),null;case 24:return null;default:return null}}var au=!1,ke=!1,kd=typeof WeakSet=="function"?WeakSet:Set,R=null;function i0(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(u){te(e,t,u)}else n.current=null}function Q3(e,t,n){try{n()}catch(u){te(e,t,u)}}var Jo=!1;function Fd(e,t){if(A3=tr,e=ka(),$i(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var u=n.getSelection&&n.getSelection();if(u&&u.rangeCount!==0){n=u.anchorNode;var r=u.anchorOffset,i=u.focusNode;u=u.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,c=0,d=0,m=e,g=null;t:for(;;){for(var v;m!==n||r!==0&&m.nodeType!==3||(s=o+r),m!==i||u!==0&&m.nodeType!==3||(l=o+u),m.nodeType===3&&(o+=m.nodeValue.length),(v=m.firstChild)!==null;)g=m,m=v;for(;;){if(m===e)break t;if(g===n&&++c===r&&(s=o),g===i&&++d===u&&(l=o),(v=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(L3={focusedElem:e,selectionRange:n},tr=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var E=y.memoizedProps,b=y.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?E:ot(t.type,E),b);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(k){te(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return y=Jo,Jo=!1,y}function ln(e,t,n){var u=t.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var r=u=u.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&Q3(t,n,i)}r=r.next}while(r!==u)}}function $r(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var u=n.create;n.destroy=u()}n=n.next}while(n!==t)}}function Z3(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function w5(e){var t=e.alternate;t!==null&&(e.alternate=null,w5(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[An],delete t[R3],delete t[sd],delete t[ld])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function E5(e){return e.tag===5||e.tag===3||e.tag===4}function Yo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||E5(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _3(e,t,n){var u=e.tag;if(u===5||u===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=rr));else if(u!==4&&(e=e.child,e!==null))for(_3(e,t,n),e=e.sibling;e!==null;)_3(e,t,n),e=e.sibling}function q3(e,t,n){var u=e.tag;if(u===5||u===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(u!==4&&(e=e.child,e!==null))for(q3(e,t,n),e=e.sibling;e!==null;)q3(e,t,n),e=e.sibling}var ye=null,st=!1;function Qt(e,t,n){for(n=n.child;n!==null;)S5(e,t,n),n=n.sibling}function S5(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(Mr,n)}catch{}switch(n.tag){case 5:ke||i0(n,t);case 6:var u=ye,r=st;ye=null,Qt(e,t,n),ye=u,st=r,ye!==null&&(st?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(st?(e=ye,n=n.stateNode,e.nodeType===8?k1(e.parentNode,n):e.nodeType===1&&k1(e,n),Sn(e)):k1(ye,n.stateNode));break;case 4:u=ye,r=st,ye=n.stateNode.containerInfo,st=!0,Qt(e,t,n),ye=u,st=r;break;case 0:case 11:case 14:case 15:if(!ke&&(u=n.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){r=u=u.next;do{var i=r,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&Q3(n,t,o),r=r.next}while(r!==u)}Qt(e,t,n);break;case 1:if(!ke&&(i0(n,t),u=n.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=n.memoizedProps,u.state=n.memoizedState,u.componentWillUnmount()}catch(s){te(n,t,s)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(ke=(u=ke)||n.memoizedState!==null,Qt(e,t,n),ke=u):Qt(e,t,n);break;default:Qt(e,t,n)}}function es(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new kd),t.forEach(function(u){var r=Od.bind(null,e,u);n.has(u)||(n.add(u),u.then(r,r))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var u=0;u<n.length;u++){var r=n[u];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ye=s.stateNode,st=!1;break e;case 3:ye=s.stateNode.containerInfo,st=!0;break e;case 4:ye=s.stateNode.containerInfo,st=!0;break e}s=s.return}if(ye===null)throw Error(B(160));S5(i,o,r),ye=null,st=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){te(r,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)k5(t,e),t=t.sibling}function k5(e,t){var n=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),mt(e),u&4){try{ln(3,e,e.return),$r(3,e)}catch(E){te(e,e.return,E)}try{ln(5,e,e.return)}catch(E){te(e,e.return,E)}}break;case 1:it(t,e),mt(e),u&512&&n!==null&&i0(n,n.return);break;case 5:if(it(t,e),mt(e),u&512&&n!==null&&i0(n,n.return),e.flags&32){var r=e.stateNode;try{yn(r,"")}catch(E){te(e,e.return,E)}}if(u&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Ql(r,i),x3(s,o);var c=x3(s,i);for(o=0;o<l.length;o+=2){var d=l[o],m=l[o+1];d==="style"?Kl(r,m):d==="dangerouslySetInnerHTML"?ql(r,m):d==="children"?yn(r,m):Ai(r,d,m,c)}switch(s){case"input":f3(r,i);break;case"textarea":Zl(r,i);break;case"select":var g=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?s0(r,!!i.multiple,v,!1):g!==!!i.multiple&&(i.defaultValue!=null?s0(r,!!i.multiple,i.defaultValue,!0):s0(r,!!i.multiple,i.multiple?[]:"",!1))}r[An]=i}catch(E){te(e,e.return,E)}}break;case 6:if(it(t,e),mt(e),u&4){if(e.stateNode===null)throw Error(B(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(E){te(e,e.return,E)}}break;case 3:if(it(t,e),mt(e),u&4&&n!==null&&n.memoizedState.isDehydrated)try{Sn(t.containerInfo)}catch(E){te(e,e.return,E)}break;case 4:it(t,e),mt(e);break;case 13:it(t,e),mt(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(s2=ie())),u&4&&es(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(c=ke)||d,it(t,e),ke=c):it(t,e),mt(e),u&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&(e.mode&1)!==0)for(R=e,d=e.child;d!==null;){for(m=R=d;R!==null;){switch(g=R,v=g.child,g.tag){case 0:case 11:case 14:case 15:ln(4,g,g.return);break;case 1:i0(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){u=g,n=g.return;try{t=u,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(E){te(u,n,E)}}break;case 5:i0(g,g.return);break;case 22:if(g.memoizedState!==null){ns(m);continue}}v!==null?(v.return=g,R=v):ns(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{r=m.stateNode,c?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,l=m.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Gl("display",o))}catch(E){te(e,e.return,E)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(E){te(e,e.return,E)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:it(t,e),mt(e),u&4&&es(e);break;case 21:break;default:it(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(E5(n)){var u=n;break e}n=n.return}throw Error(B(160))}switch(u.tag){case 5:var r=u.stateNode;u.flags&32&&(yn(r,""),u.flags&=-33);var i=Yo(e);q3(e,i,r);break;case 3:case 4:var o=u.stateNode.containerInfo,s=Yo(e);_3(e,s,o);break;default:throw Error(B(161))}}catch(l){te(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dd(e,t,n){R=e,F5(e)}function F5(e,t,n){for(var u=(e.mode&1)!==0;R!==null;){var r=R,i=r.child;if(r.tag===22&&u){var o=r.memoizedState!==null||au;if(!o){var s=r.alternate,l=s!==null&&s.memoizedState!==null||ke;s=au;var c=ke;if(au=o,(ke=l)&&!c)for(R=r;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?us(r):l!==null?(l.return=o,R=l):us(r);for(;i!==null;)R=i,F5(i),i=i.sibling;R=r,au=s,ke=c}ts(e)}else(r.subtreeFlags&8772)!==0&&i!==null?(i.return=r,R=i):ts(e)}}function ts(e){for(;R!==null;){var t=R;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ke||$r(5,t);break;case 1:var u=t.stateNode;if(t.flags&4&&!ke)if(n===null)u.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);u.componentDidUpdate(r,n.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&zo(t,i,u);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}zo(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&Sn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}ke||t.flags&512&&Z3(t)}catch(g){te(t,t.return,g)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function ns(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function us(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{$r(4,t)}catch(l){te(t,n,l)}break;case 1:var u=t.stateNode;if(typeof u.componentDidMount=="function"){var r=t.return;try{u.componentDidMount()}catch(l){te(t,r,l)}}var i=t.return;try{Z3(t)}catch(l){te(t,i,l)}break;case 5:var o=t.return;try{Z3(t)}catch(l){te(t,o,l)}}}catch(l){te(t,t.return,l)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var bd=Math.ceil,mr=$t.ReactCurrentDispatcher,i2=$t.ReactCurrentOwner,et=$t.ReactCurrentBatchConfig,$=0,ge=null,le=null,ve=0,He=0,o0=C4(0),pe=0,On=null,I4=0,Ur=0,o2=0,an=null,Pe=null,s2=0,k0=1/0,Lt=null,Cr=!1,G3=null,a4=null,cu=!1,t4=null,gr=0,cn=0,K3=null,Mu=-1,Ou=0;function Ae(){return($&6)!==0?ie():Mu!==-1?Mu:Mu=ie()}function c4(e){return(e.mode&1)===0?1:($&2)!==0&&ve!==0?ve&-ve:cd.transition!==null?(Ou===0&&(Ou=la()),Ou):(e=V,e!==0||(e=window.event,e=e===void 0?16:ma(e.type)),e)}function dt(e,t,n,u){if(50<cn)throw cn=0,K3=null,Error(B(185));zn(e,n,u),(($&2)===0||e!==ge)&&(e===ge&&(($&2)===0&&(Ur|=n),pe===4&&Jt(e,ve)),Ie(e,u),n===1&&$===0&&(t.mode&1)===0&&(k0=ie()+500,zr&&g4()))}function Ie(e,t){var n=e.callbackNode;cc(e,t);var u=er(e,e===ge?ve:0);if(u===0)n!==null&&po(n),e.callbackNode=null,e.callbackPriority=0;else if(t=u&-u,e.callbackPriority!==t){if(n!=null&&po(n),t===1)e.tag===0?ad(rs.bind(null,e)):Oa(rs.bind(null,e)),id(function(){($&6)===0&&g4()}),n=null;else{switch(aa(u)){case 1:n=Mi;break;case 4:n=oa;break;case 16:n=Yu;break;case 536870912:n=sa;break;default:n=Yu}n=M5(n,D5.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function D5(e,t){if(Mu=-1,Ou=0,($&6)!==0)throw Error(B(327));var n=e.callbackNode;if(p0()&&e.callbackNode!==n)return null;var u=er(e,e===ge?ve:0);if(u===0)return null;if((u&30)!==0||(u&e.expiredLanes)!==0||t)t=xr(e,u);else{t=u;var r=$;$|=2;var i=A5();(ge!==e||ve!==t)&&(Lt=null,k0=ie()+500,L4(e,t));do try{Bd();break}catch(s){b5(e,s)}while(1);Zi(),mr.current=i,$=r,le!==null?t=0:(ge=null,ve=0,t=pe)}if(t!==0){if(t===2&&(r=S3(e),r!==0&&(u=r,t=X3(e,r))),t===1)throw n=On,L4(e,0),Jt(e,u),Ie(e,ie()),n;if(t===6)Jt(e,u);else{if(r=e.current.alternate,(u&30)===0&&!Ad(r)&&(t=xr(e,u),t===2&&(i=S3(e),i!==0&&(u=i,t=X3(e,i))),t===1))throw n=On,L4(e,0),Jt(e,u),Ie(e,ie()),n;switch(e.finishedWork=r,e.finishedLanes=u,t){case 0:case 1:throw Error(B(345));case 2:w4(e,Pe,Lt);break;case 3:if(Jt(e,u),(u&130023424)===u&&(t=s2+500-ie(),10<t)){if(er(e,0)!==0)break;if(r=e.suspendedLanes,(r&u)!==u){Ae(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=P3(w4.bind(null,e,Pe,Lt),t);break}w4(e,Pe,Lt);break;case 4:if(Jt(e,u),(u&4194240)===u)break;for(t=e.eventTimes,r=-1;0<u;){var o=31-ct(u);i=1<<o,o=t[o],o>r&&(r=o),u&=~i}if(u=r,u=ie()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*bd(u/1960))-u,10<u){e.timeoutHandle=P3(w4.bind(null,e,Pe,Lt),u);break}w4(e,Pe,Lt);break;case 5:w4(e,Pe,Lt);break;default:throw Error(B(329))}}}return Ie(e,ie()),e.callbackNode===n?D5.bind(null,e):null}function X3(e,t){var n=an;return e.current.memoizedState.isDehydrated&&(L4(e,t).flags|=256),e=xr(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&J3(t)),e}function J3(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function Ad(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var u=0;u<n.length;u++){var r=n[u],i=r.getSnapshot;r=r.value;try{if(!ft(i(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jt(e,t){for(t&=~o2,t&=~Ur,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),u=1<<n;e[n]=-1,t&=~u}}function rs(e){if(($&6)!==0)throw Error(B(327));p0();var t=er(e,0);if((t&1)===0)return Ie(e,ie()),null;var n=xr(e,t);if(e.tag!==0&&n===2){var u=S3(e);u!==0&&(t=u,n=X3(e,u))}if(n===1)throw n=On,L4(e,0),Jt(e,t),Ie(e,ie()),n;if(n===6)throw Error(B(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,w4(e,Pe,Lt),Ie(e,ie()),null}function l2(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(k0=ie()+500,zr&&g4())}}function N4(e){t4!==null&&t4.tag===0&&($&6)===0&&p0();var t=$;$|=1;var n=et.transition,u=V;try{if(et.transition=null,V=1,e)return e()}finally{V=u,et.transition=n,$=t,($&6)===0&&g4()}}function a2(){He=o0.current,q(o0)}function L4(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rd(n)),le!==null)for(n=le.return;n!==null;){var u=n;switch(Vi(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ir();break;case 3:E0(),q(Oe),q(Fe),Ji();break;case 5:Xi(u);break;case 4:E0();break;case 13:q(X);break;case 19:q(X);break;case 10:_i(u.type._context);break;case 22:case 23:a2()}n=n.return}if(ge=e,le=e=d4(e.current,null),ve=He=t,pe=0,On=null,o2=Ur=I4=0,Pe=an=null,D4!==null){for(t=0;t<D4.length;t++)if(n=D4[t],u=n.interleaved,u!==null){n.interleaved=null;var r=u.next,i=n.pending;if(i!==null){var o=i.next;i.next=r,u.next=o}n.pending=u}D4=null}return e}function b5(e,t){do{var n=le;try{if(Zi(),Bu.current=hr,fr){for(var u=J.memoizedState;u!==null;){var r=u.queue;r!==null&&(r.pending=null),u=u.next}fr=!1}if(T4=0,me=ce=J=null,sn=!1,Pn=0,i2.current=null,n===null||n.return===null){pe=1,On=t,le=null;break}e:{var i=e,o=n.return,s=n,l=t;if(t=ve,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=s,m=d.tag;if((d.mode&1)===0&&(m===0||m===11||m===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Qo(o);if(v!==null){v.flags&=-257,Zo(v,o,s,i,t),v.mode&1&&Wo(i,c,t),t=v,l=c;var y=t.updateQueue;if(y===null){var E=new Set;E.add(l),t.updateQueue=E}else y.add(l);break e}else{if((t&1)===0){Wo(i,c,t),c2();break e}l=Error(B(426))}}else if(K&&s.mode&1){var b=Qo(o);if(b!==null){(b.flags&65536)===0&&(b.flags|=256),Zo(b,o,s,i,t),Wi(S0(l,s));break e}}i=l=S0(l,s),pe!==4&&(pe=2),an===null?an=[i]:an.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=c5(i,l,t);No(i,h);break e;case 1:s=l;var f=i.type,C=i.stateNode;if((i.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(a4===null||!a4.has(C)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=d5(i,s,t);No(i,k);break e}}i=i.return}while(i!==null)}B5(n)}catch(D){t=D,le===n&&n!==null&&(le=n=n.return);continue}break}while(1)}function A5(){var e=mr.current;return mr.current=hr,e===null?hr:e}function c2(){(pe===0||pe===3||pe===2)&&(pe=4),ge===null||(I4&268435455)===0&&(Ur&268435455)===0||Jt(ge,ve)}function xr(e,t){var n=$;$|=2;var u=A5();(ge!==e||ve!==t)&&(Lt=null,L4(e,t));do try{Ld();break}catch(r){b5(e,r)}while(1);if(Zi(),$=n,mr.current=u,le!==null)throw Error(B(261));return ge=null,ve=0,pe}function Ld(){for(;le!==null;)L5(le)}function Bd(){for(;le!==null&&!tc();)L5(le)}function L5(e){var t=R5(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?B5(e):le=t,i2.current=null}function B5(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Ed(n,t,He),n!==null){le=n;return}}else{if(n=Sd(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,le=null;return}}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);pe===0&&(pe=5)}function w4(e,t,n){var u=V,r=et.transition;try{et.transition=null,V=1,Pd(e,t,n,u)}finally{et.transition=r,V=u}return null}function Pd(e,t,n,u){do p0();while(t4!==null);if(($&6)!==0)throw Error(B(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(B(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(dc(e,i),e===ge&&(le=ge=null,ve=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||cu||(cu=!0,M5(Yu,function(){return p0(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=et.transition,et.transition=null;var o=V;V=1;var s=$;$|=4,i2.current=null,Fd(e,n),k5(n,e),Xc(L3),tr=!!A3,L3=A3=null,e.current=n,Dd(n),nc(),$=s,V=o,et.transition=i}else e.current=n;if(cu&&(cu=!1,t4=e,gr=r),i=e.pendingLanes,i===0&&(a4=null),ic(n.stateNode),Ie(e,ie()),t!==null)for(u=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],u(r.value,{componentStack:r.stack,digest:r.digest});if(Cr)throw Cr=!1,e=G3,G3=null,e;return(gr&1)!==0&&e.tag!==0&&p0(),i=e.pendingLanes,(i&1)!==0?e===K3?cn++:(cn=0,K3=e):cn=0,g4(),null}function p0(){if(t4!==null){var e=aa(gr),t=et.transition,n=V;try{if(et.transition=null,V=16>e?16:e,t4===null)var u=!1;else{if(e=t4,t4=null,gr=0,($&6)!==0)throw Error(B(331));var r=$;for($|=4,R=e.current;R!==null;){var i=R,o=i.child;if((R.flags&16)!==0){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(R=c;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:ln(8,d,i)}var m=d.child;if(m!==null)m.return=d,R=m;else for(;R!==null;){d=R;var g=d.sibling,v=d.return;if(w5(d),d===c){R=null;break}if(g!==null){g.return=v,R=g;break}R=v}}}var y=i.alternate;if(y!==null){var E=y.child;if(E!==null){y.child=null;do{var b=E.sibling;E.sibling=null,E=b}while(E!==null)}}R=i}}if((i.subtreeFlags&2064)!==0&&o!==null)o.return=i,R=o;else e:for(;R!==null;){if(i=R,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:ln(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,R=h;break e}R=i.return}}var f=e.current;for(R=f;R!==null;){o=R;var C=o.child;if((o.subtreeFlags&2064)!==0&&C!==null)C.return=o,R=C;else e:for(o=f;R!==null;){if(s=R,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:$r(9,s)}}catch(D){te(s,s.return,D)}if(s===o){R=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,R=k;break e}R=s.return}}if($=r,g4(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(Mr,e)}catch{}u=!0}return u}finally{V=n,et.transition=t}}return!1}function is(e,t,n){t=S0(n,t),t=c5(e,t,1),e=l4(e,t,1),t=Ae(),e!==null&&(zn(e,1,t),Ie(e,t))}function te(e,t,n){if(e.tag===3)is(e,e,n);else for(;t!==null;){if(t.tag===3){is(t,e,n);break}else if(t.tag===1){var u=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(a4===null||!a4.has(u))){e=S0(n,e),e=d5(t,e,1),t=l4(t,e,1),e=Ae(),t!==null&&(zn(t,1,e),Ie(t,e));break}}t=t.return}}function Rd(e,t,n){var u=e.pingCache;u!==null&&u.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(ve&n)===n&&(pe===4||pe===3&&(ve&130023424)===ve&&500>ie()-s2?L4(e,0):o2|=n),Ie(e,t)}function P5(e,t){t===0&&((e.mode&1)===0?t=1:(t=eu,eu<<=1,(eu&130023424)===0&&(eu=4194304)));var n=Ae();e=zt(e,t),e!==null&&(zn(e,t,n),Ie(e,n))}function Md(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),P5(e,n)}function Od(e,t){var n=0;switch(e.tag){case 13:var u=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:u=e.stateNode;break;default:throw Error(B(314))}u!==null&&u.delete(t),P5(e,n)}var R5;R5=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)Re=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Re=!1,wd(e,t,n);Re=(e.flags&131072)!==0}else Re=!1,K&&(t.flags&1048576)!==0&&Ta(t,lr,t.index);switch(t.lanes=0,t.tag){case 2:var u=t.type;Ru(e,t),e=t.pendingProps;var r=y0(t,Fe.current);d0(t,n),r=e2(null,t,u,e,r,n);var i=t2();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Te(u)?(i=!0,or(t)):i=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Gi(t),r.updater=jr,t.stateNode=r,r._reactInternals=t,z3(t,u,e,n),t=$3(null,t,u,!0,i,n)):(t.tag=0,K&&i&&Ui(t),De(null,t,r,n),t=t.child),t;case 16:u=t.elementType;e:{switch(Ru(e,t),e=t.pendingProps,r=u._init,u=r(u._payload),t.type=u,r=t.tag=Id(u),e=ot(u,e),r){case 0:t=H3(null,t,u,e,n);break e;case 1:t=Go(null,t,u,e,n);break e;case 11:t=_o(null,t,u,e,n);break e;case 14:t=qo(null,t,u,ot(u.type,e),n);break e}throw Error(B(306,u,""))}return t;case 0:return u=t.type,r=t.pendingProps,r=t.elementType===u?r:ot(u,r),H3(e,t,u,r,n);case 1:return u=t.type,r=t.pendingProps,r=t.elementType===u?r:ot(u,r),Go(e,t,u,r,n);case 3:e:{if(m5(t),e===null)throw Error(B(387));u=t.pendingProps,i=t.memoizedState,r=i.element,ja(e,t),dr(t,u,null,n);var o=t.memoizedState;if(u=o.element,i.isDehydrated)if(i={element:u,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){r=S0(Error(B(423)),t),t=Ko(e,t,u,n,r);break e}else if(u!==r){r=S0(Error(B(424)),t),t=Ko(e,t,u,n,r);break e}else for($e=s4(t.stateNode.containerInfo.firstChild),Ve=t,K=!0,lt=null,n=Va(t,null,u,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(v0(),u===r){t=jt(e,t,n);break e}De(e,t,u,n)}t=t.child}return t;case 5:return Wa(t),e===null&&T3(t),u=t.type,r=t.pendingProps,i=e!==null?e.memoizedProps:null,o=r.children,B3(u,r)?o=null:i!==null&&B3(u,i)&&(t.flags|=32),h5(e,t),De(e,t,o,n),t.child;case 6:return e===null&&T3(t),null;case 13:return C5(e,t,n);case 4:return Ki(t,t.stateNode.containerInfo),u=t.pendingProps,e===null?t.child=w0(t,null,u,n):De(e,t,u,n),t.child;case 11:return u=t.type,r=t.pendingProps,r=t.elementType===u?r:ot(u,r),_o(e,t,u,r,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(u=t.type._context,r=t.pendingProps,i=t.memoizedProps,o=r.value,Q(ar,u._currentValue),u._currentValue=o,i!==null)if(ft(i.value,o)){if(i.children===r.children&&!Oe.current){t=jt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var l=s.firstContext;l!==null;){if(l.context===u){if(i.tag===1){l=Ot(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),I3(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(B(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),I3(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}De(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,u=t.pendingProps.children,d0(t,n),r=ut(r),u=u(r),t.flags|=1,De(e,t,u,n),t.child;case 14:return u=t.type,r=ot(u,t.pendingProps),r=ot(u.type,r),qo(e,t,u,r,n);case 15:return p5(e,t,t.type,t.pendingProps,n);case 17:return u=t.type,r=t.pendingProps,r=t.elementType===u?r:ot(u,r),Ru(e,t),t.tag=1,Te(u)?(e=!0,or(t)):e=!1,d0(t,n),$a(t,u,r),z3(t,u,r,n),$3(null,t,u,!0,e,n);case 19:return g5(e,t,n);case 22:return f5(e,t,n)}throw Error(B(156,t.tag))};function M5(e,t){return ia(e,t)}function Td(e,t,n,u){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,t,n,u){return new Td(e,t,n,u)}function d2(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Id(e){if(typeof e=="function")return d2(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bi)return 11;if(e===Pi)return 14}return 2}function d4(e,t){var n=e.alternate;return n===null?(n=Ye(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Tu(e,t,n,u,r,i){var o=2;if(u=e,typeof e=="function")d2(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case K4:return B4(n.children,r,i,t);case Li:o=8,r|=8;break;case l3:return e=Ye(12,n,t,r|2),e.elementType=l3,e.lanes=i,e;case a3:return e=Ye(13,n,t,r),e.elementType=a3,e.lanes=i,e;case c3:return e=Ye(19,n,t,r),e.elementType=c3,e.lanes=i,e;case Ul:return Vr(n,r,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hl:o=10;break e;case $l:o=9;break e;case Bi:o=11;break e;case Pi:o=14;break e;case Gt:o=16,u=null;break e}throw Error(B(130,e==null?e:typeof e,""))}return t=Ye(o,n,t,r),t.elementType=e,t.type=u,t.lanes=i,t}function B4(e,t,n,u){return e=Ye(7,e,u,t),e.lanes=n,e}function Vr(e,t,n,u){return e=Ye(22,e,u,t),e.elementType=Ul,e.lanes=n,e.stateNode={isHidden:!1},e}function R1(e,t,n){return e=Ye(6,e,null,t),e.lanes=n,e}function M1(e,t,n){return t=Ye(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Nd(e,t,n,u,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=f1(0),this.expirationTimes=f1(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=f1(0),this.identifierPrefix=u,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function p2(e,t,n,u,r,i,o,s,l){return e=new Nd(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ye(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:u,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gi(i),e}function zd(e,t,n){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:G4,key:u==null?null:""+u,children:e,containerInfo:t,implementation:n}}function O5(e){if(!e)return h4;e=e._reactInternals;e:{if($4(e)!==e||e.tag!==1)throw Error(B(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Te(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(B(171))}if(e.tag===1){var n=e.type;if(Te(n))return Ma(e,n,t)}return t}function T5(e,t,n,u,r,i,o,s,l){return e=p2(n,u,!0,e,r,i,o,s,l),e.context=O5(null),n=e.current,u=Ae(),r=c4(n),i=Ot(u,r),i.callback=t!=null?t:null,l4(n,i,r),e.current.lanes=r,zn(e,r,u),Ie(e,u),e}function Wr(e,t,n,u){var r=t.current,i=Ae(),o=c4(r);return n=O5(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(i,o),t.payload={element:e},u=u===void 0?null:u,u!==null&&(t.callback=u),e=l4(r,t,o),e!==null&&(dt(e,r,o,i),Lu(e,r,o)),o}function yr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function os(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function f2(e,t){os(e,t),(e=e.alternate)&&os(e,t)}function jd(){return null}var I5=typeof reportError=="function"?reportError:function(e){console.error(e)};function h2(e){this._internalRoot=e}Qr.prototype.render=h2.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(B(409));Wr(e,t,null,null)};Qr.prototype.unmount=h2.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;N4(function(){Wr(null,e,null,null)}),t[Nt]=null}};function Qr(e){this._internalRoot=e}Qr.prototype.unstable_scheduleHydration=function(e){if(e){var t=pa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xt.length&&t!==0&&t<Xt[n].priority;n++);Xt.splice(n,0,e),n===0&&ha(e)}};function m2(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ss(){}function Hd(e,t,n,u,r){if(r){if(typeof u=="function"){var i=u;u=function(){var c=yr(o);i.call(c)}}var o=T5(t,u,e,0,null,!1,!1,"",ss);return e._reactRootContainer=o,e[Nt]=o.current,Dn(e.nodeType===8?e.parentNode:e),N4(),o}for(;r=e.lastChild;)e.removeChild(r);if(typeof u=="function"){var s=u;u=function(){var c=yr(l);s.call(c)}}var l=p2(e,0,!1,null,null,!1,!1,"",ss);return e._reactRootContainer=l,e[Nt]=l.current,Dn(e.nodeType===8?e.parentNode:e),N4(function(){Wr(t,l,n,u)}),l}function _r(e,t,n,u,r){var i=n._reactRootContainer;if(i){var o=i;if(typeof r=="function"){var s=r;r=function(){var l=yr(o);s.call(l)}}Wr(t,o,e,r)}else o=Hd(n,t,e,r,u);return yr(o)}ca=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=J0(t.pendingLanes);n!==0&&(Oi(t,n|1),Ie(t,ie()),($&6)===0&&(k0=ie()+500,g4()))}break;case 13:N4(function(){var u=zt(e,1);if(u!==null){var r=Ae();dt(u,e,1,r)}}),f2(e,1)}};Ti=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=Ae();dt(t,e,134217728,n)}f2(e,134217728)}};da=function(e){if(e.tag===13){var t=c4(e),n=zt(e,t);if(n!==null){var u=Ae();dt(n,e,t,u)}f2(e,t)}};pa=function(){return V};fa=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};v3=function(e,t,n){switch(t){case"input":if(f3(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var u=n[t];if(u!==e&&u.form===e.form){var r=Nr(u);if(!r)throw Error(B(90));Wl(u),f3(u,r)}}}break;case"textarea":Zl(e,n);break;case"select":t=n.value,t!=null&&s0(e,!!n.multiple,t,!1)}};Yl=l2;ea=N4;var $d={usingClientEntryPoint:!1,Events:[Hn,e0,Nr,Xl,Jl,l2]},Q0={findFiberByHostInstance:F4,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ud={bundleType:Q0.bundleType,version:Q0.version,rendererPackageName:Q0.rendererPackageName,rendererConfig:Q0.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ua(e),e===null?null:e.stateNode},findFiberByHostInstance:Q0.findFiberByHostInstance||jd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!du.isDisabled&&du.supportsFiber)try{Mr=du.inject(Ud),vt=du}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$d;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m2(t))throw Error(B(200));return zd(e,t,null,n)};Qe.createRoot=function(e,t){if(!m2(e))throw Error(B(299));var n=!1,u="",r=I5;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(u=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=p2(e,1,!1,null,null,n,!1,u,r),e[Nt]=t.current,Dn(e.nodeType===8?e.parentNode:e),new h2(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(B(188)):(e=Object.keys(e).join(","),Error(B(268,e)));return e=ua(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return N4(e)};Qe.hydrate=function(e,t,n){if(!Zr(t))throw Error(B(200));return _r(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!m2(e))throw Error(B(405));var u=n!=null&&n.hydratedSources||null,r=!1,i="",o=I5;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=T5(t,null,e,1,n!=null?n:null,r,!1,i,o),e[Nt]=t.current,Dn(e),u)for(e=0;e<u.length;e++)n=u[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new Qr(t)};Qe.render=function(e,t,n){if(!Zr(t))throw Error(B(200));return _r(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!Zr(e))throw Error(B(40));return e._reactRootContainer?(N4(function(){_r(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1};Qe.unstable_batchedUpdates=l2;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,u){if(!Zr(n))throw Error(B(200));if(e==null||e._reactInternals===void 0)throw Error(B(38));return _r(e,t,n,!1,u)};Qe.version="18.2.0-next-9e3b772b8-20220608";function N5(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N5)}catch(e){console.error(e)}}N5(),Tl.exports=Qe;var z5={exports:{}},j5={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0=p.exports;function Vd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wd=typeof Object.is=="function"?Object.is:Vd,Qd=F0.useState,Zd=F0.useEffect,_d=F0.useLayoutEffect,qd=F0.useDebugValue;function Gd(e,t){var n=t(),u=Qd({inst:{value:n,getSnapshot:t}}),r=u[0].inst,i=u[1];return _d(function(){r.value=n,r.getSnapshot=t,O1(r)&&i({inst:r})},[e,n,t]),Zd(function(){return O1(r)&&i({inst:r}),e(function(){O1(r)&&i({inst:r})})},[e]),qd(n),n}function O1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wd(e,n)}catch{return!0}}function Kd(e,t){return t()}var Xd=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?Kd:Gd;j5.useSyncExternalStore=F0.useSyncExternalStore!==void 0?F0.useSyncExternalStore:Xd;z5.exports=j5;const H5=z5.exports.useSyncExternalStore,ls=p.exports.createContext(void 0),$5=p.exports.createContext(!1);function U5(e,t){return e||(t&&typeof window!="undefined"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=ls),window.ReactQueryClientContext):ls)}const Un=({context:e}={})=>{const t=p.exports.useContext(U5(e,p.exports.useContext($5)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},Jd=({client:e,children:t,context:n,contextSharing:u=!1})=>{p.exports.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);const r=U5(n,u);return p.exports.createElement($5.Provider,{value:!n&&u},p.exports.createElement(r.Provider,{value:e},t))},V5=p.exports.createContext(!1),Yd=()=>p.exports.useContext(V5);V5.Provider;function ep(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}const tp=p.exports.createContext(ep()),np=()=>p.exports.useContext(tp);function W5(e,t){return typeof e=="function"?e(...t):!!e}const up=(e,t)=>{(e.suspense||e.useErrorBoundary)&&(t.isReset()||(e.retryOnMount=!1))},rp=e=>{p.exports.useEffect(()=>{e.clearReset()},[e])},ip=({result:e,errorResetBoundary:t,useErrorBoundary:n,query:u})=>e.isError&&!t.isReset()&&!e.isFetching&&W5(n,[e.error,u]),op=e=>{e.suspense&&typeof e.staleTime!="number"&&(e.staleTime=1e3)},sp=(e,t)=>e.isLoading&&e.isFetching&&!t,lp=(e,t,n)=>(e==null?void 0:e.suspense)&&sp(t,n),ap=(e,t,n)=>t.fetchOptimistic(e).then(({data:u})=>{e.onSuccess==null||e.onSuccess(u),e.onSettled==null||e.onSettled(u,null)}).catch(u=>{n.clearReset(),e.onError==null||e.onError(u),e.onSettled==null||e.onSettled(void 0,u)});function cp(e,t){const n=Un({context:e.context}),u=Yd(),r=np(),i=n.defaultQueryOptions(e);i._optimisticResults=u?"isRestoring":"optimistic",i.onError&&(i.onError=ne.batchCalls(i.onError)),i.onSuccess&&(i.onSuccess=ne.batchCalls(i.onSuccess)),i.onSettled&&(i.onSettled=ne.batchCalls(i.onSettled)),op(i),up(i,r),rp(r);const[o]=p.exports.useState(()=>new t(n,i)),s=o.getOptimisticResult(i);if(H5(p.exports.useCallback(l=>{const c=u?()=>{}:o.subscribe(ne.batchCalls(l));return o.updateResult(),c},[o,u]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),p.exports.useEffect(()=>{o.setOptions(i,{listeners:!1})},[i,o]),lp(i,s,u))throw ap(i,o,r);if(ip({result:s,errorResetBoundary:r,useErrorBoundary:i.useErrorBoundary,query:o.getCurrentQuery()}))throw s.error;return i.notifyOnChangeProps?s:o.trackResult(s)}function C2(e,t,n){const u=G0(e,t,n);return cp(u,N7)}function p4(e,t,n){const u=S7(e,t,n),r=Un({context:u.context}),[i]=p.exports.useState(()=>new H7(r,u));p.exports.useEffect(()=>{i.setOptions(u)},[i,u]);const o=H5(p.exports.useCallback(l=>i.subscribe(ne.batchCalls(l)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),s=p.exports.useCallback((l,c)=>{i.mutate(l,c).catch(dp)},[i]);if(o.error&&W5(i.options.useErrorBoundary,[o.error]))throw o.error;return{...o,mutate:s,mutateAsync:o.mutate}}function dp(){}const pp=()=>w(re,{style:{padding:"0 2.7%"},children:[a(Ei,{}),a(Dl,{}),a(kr,{})]});/*! *****************************************************************************
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
***************************************************************************** */var Y3=function(){return Y3=Object.assign||function(t){for(var n,u=1,r=arguments.length;u<r;u++){n=arguments[u];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Y3.apply(this,arguments)};function fp(e,t){var n={};for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&t.indexOf(u)<0&&(n[u]=e[u]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,u=Object.getOwnPropertySymbols(e);r<u.length;r++)t.indexOf(u[r])<0&&Object.prototype.propertyIsEnumerable.call(e,u[r])&&(n[u[r]]=e[u[r]]);return n}var f0="",dn=null,Iu=null,Q5=null;function g2(){f0="",dn!==null&&dn.disconnect(),Iu!==null&&(window.clearTimeout(Iu),Iu=null)}function as(e){var t=["BUTTON","INPUT","SELECT","TEXTAREA"],n=["A","AREA"];return t.includes(e.tagName)&&!e.hasAttribute("disabled")||n.includes(e.tagName)&&e.hasAttribute("href")}function cs(){var e=null;if(f0==="#")e=document.body;else{var t=f0.replace("#","");e=document.getElementById(t),e===null&&f0==="#top"&&(e=document.body)}if(e!==null){Q5(e);var n=e.getAttribute("tabindex");return n===null&&!as(e)&&e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),n===null&&!as(e)&&(e.blur(),e.removeAttribute("tabindex")),g2(),!0}return!1}function hp(e){window.setTimeout(function(){cs()===!1&&(dn===null&&(dn=new MutationObserver(cs)),dn.observe(document,{attributes:!0,childList:!0,subtree:!0}),Iu=window.setTimeout(function(){g2()},e||1e4))},0)}function Z5(e){return be.forwardRef(function(t,n){var u="";typeof t.to=="string"&&t.to.includes("#")?u="#"+t.to.split("#").slice(1).join("#"):typeof t.to=="object"&&typeof t.to.hash=="string"&&(u=t.to.hash);var r={};e===pt&&(r.isActive=function(s,l){return s&&s.isExact&&l.hash===u});function i(s){g2(),f0=t.elementId?"#"+t.elementId:u,t.onClick&&t.onClick(s),f0!==""&&!s.defaultPrevented&&s.button===0&&(!t.target||t.target==="_self")&&!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&(Q5=t.scroll||function(l){return t.smooth?l.scrollIntoView({behavior:"smooth"}):l.scrollIntoView()},hp(t.timeout))}var o=fp(t,["scroll","smooth","timeout","elementId"]);return be.createElement(e,Y3({},r,o,{onClick:i,ref:n}),t.children)})}var mp=Z5(Et);Z5(pt);const Cp=e=>p.exports.createElement("svg",{width:64,height:48,viewBox:"0 0 64 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M11.2391 7.31769C11.2391 8.47842 10.9502 9.53822 10.3726 10.4971C9.79489 11.4391 9.02184 12.2298 8.05339 12.869C8.5631 12.9699 9.00485 13.1466 9.37863 13.3989C9.75242 13.6344 10.0582 13.9288 10.2961 14.2821C10.551 14.6353 10.7379 15.0391 10.8568 15.4933C10.9927 15.9307 11.0607 16.3933 11.0607 16.8811C11.0607 17.84 10.8313 18.6811 10.3726 19.4044C9.93082 20.111 9.35315 20.6997 8.63956 21.1708C7.92596 21.625 7.12742 21.9698 6.24393 22.2053C5.37742 22.424 4.51092 22.5334 3.64441 22.5334C3.16869 22.5334 2.69296 22.4997 2.21723 22.4324C1.7415 22.3651 1.29126 22.2474 0.866504 22.0792C0.713592 22.0287 0.586164 21.8268 0.484223 21.4736C0.382281 21.1035 0.29733 20.6577 0.229369 20.1362C0.178398 19.6147 0.135922 19.0512 0.101942 18.4456C0.0679611 17.84 0.0424757 17.2596 0.0254854 16.7045C0.00849513 16.1493 0 15.6615 0 15.2409C0 14.8204 0 14.526 0 14.3578C0 13.769 0 13.1802 0 12.5914C0 11.9858 0.0169903 11.3887 0.0509708 10.7999C0.0509708 10.6485 0.0509708 10.413 0.0509708 10.0933C0.0679611 9.77373 0.0764562 9.42046 0.0764562 9.03355C0.0934465 8.62982 0.110437 8.20926 0.127427 7.77188C0.161408 7.33451 0.195388 6.93078 0.229369 6.56069C0.28034 6.17378 0.339805 5.84575 0.407766 5.57659C0.492718 5.30744 0.586165 5.13921 0.688106 5.07193C1.07888 4.81959 1.51213 4.58408 1.98786 4.36539C2.46359 4.12988 2.95631 3.92802 3.46602 3.75979C3.97573 3.59157 4.48543 3.45699 4.99514 3.35606C5.50485 3.25513 5.98907 3.20466 6.44781 3.20466C7.07645 3.20466 7.67961 3.29718 8.25728 3.48222C8.85194 3.65045 9.36164 3.91119 9.7864 4.26446C10.2281 4.61773 10.5764 5.0551 10.8313 5.57659C11.1031 6.08126 11.2391 6.66162 11.2391 7.31769ZM7.00849 8.65505C7.00849 8.36907 6.91504 8.1588 6.72815 8.02422C6.55825 7.88964 6.32888 7.82235 6.04004 7.82235C5.80218 7.82235 5.54733 7.87282 5.27548 7.97375C5.02063 8.07468 4.79975 8.20926 4.61286 8.37749C4.56189 8.42795 4.51092 8.57094 4.45995 8.80645C4.42597 9.04196 4.39199 9.31112 4.35801 9.61392C4.34102 9.89989 4.32403 10.1775 4.30704 10.4466C4.30704 10.6989 4.30704 10.8672 4.30704 10.9513C4.30704 10.9849 4.30704 11.0438 4.30704 11.1279C4.30704 11.1952 4.30704 11.2709 4.30704 11.355C4.32403 11.4391 4.34102 11.5148 4.35801 11.5821C4.375 11.6494 4.40048 11.683 4.43446 11.683C4.7233 11.683 5.02063 11.5821 5.32645 11.3802C5.63228 11.1616 5.90412 10.9008 6.14199 10.598C6.39684 10.2784 6.60072 9.94195 6.75364 9.58868C6.92354 9.23542 7.00849 8.92421 7.00849 8.65505ZM6.90655 15.9475C6.90655 15.6615 6.80461 15.4596 6.60072 15.3419C6.39684 15.2241 6.16747 15.1652 5.91262 15.1652C5.67475 15.1652 5.4199 15.2241 5.14805 15.3419C4.8932 15.4428 4.68082 15.569 4.51092 15.7204C4.45995 15.754 4.41747 15.8381 4.38349 15.9727C4.3665 16.1073 4.34951 16.2587 4.33252 16.4269C4.33252 16.5783 4.32403 16.7297 4.30704 16.8811C4.30704 17.0157 4.30704 17.1082 4.30704 17.1587C4.30704 17.1923 4.30704 17.2596 4.30704 17.3605C4.30704 17.4615 4.30704 17.5708 4.30704 17.6886C4.32403 17.7895 4.34102 17.8904 4.35801 17.9914C4.39199 18.0755 4.42597 18.1175 4.45995 18.1175C4.69781 18.1175 4.96116 18.0502 5.25 17.9157C5.53883 17.7811 5.80218 17.6129 6.04004 17.411C6.2949 17.2091 6.49878 16.982 6.65169 16.7297C6.8216 16.4605 6.90655 16.1998 6.90655 15.9475Z",fill:"#758650"}),p.exports.createElement("path",{d:"M21.2039 5.09716C21.2039 5.41678 21.1274 5.70275 20.9745 5.95509C20.8386 6.20742 20.6517 6.42611 20.4138 6.61115C20.176 6.77938 19.9126 6.92236 19.6238 7.04012C19.3349 7.15787 19.0546 7.24199 18.7828 7.29245C18.7488 9.19336 18.6723 11.027 18.5534 12.7933C18.4514 14.5596 18.2815 16.3848 18.0437 18.2689H18.1966C18.4684 18.2689 18.7318 18.3026 18.9866 18.3699C19.2585 18.4203 19.4963 18.5213 19.7002 18.6727C19.9211 18.8072 20.091 18.9839 20.2099 19.2026C20.3459 19.4044 20.4138 19.6568 20.4138 19.9596C20.4138 20.3465 20.2864 20.6829 20.0315 20.9689C19.7937 21.2549 19.4709 21.4988 19.0631 21.7007C18.6723 21.9025 18.2306 22.0708 17.7378 22.2053C17.2451 22.3399 16.7524 22.4408 16.2597 22.5081C15.767 22.5922 15.2997 22.6511 14.858 22.6848C14.4163 22.7184 14.0595 22.7352 13.7876 22.7352C13.5837 22.7352 13.3289 22.7268 13.023 22.71C12.7342 22.6932 12.4539 22.6427 12.182 22.5586C11.9272 22.4745 11.7063 22.3483 11.5194 22.1801C11.3325 22.0119 11.2391 21.7848 11.2391 21.4988C11.2391 21.1455 11.3155 20.8343 11.4684 20.5652C11.6044 20.2792 11.7913 20.0269 12.0291 19.8082C12.267 19.5895 12.5303 19.4128 12.8192 19.2783C13.125 19.1437 13.4308 19.0428 13.7366 18.9755C13.8556 18.0502 13.966 17.1334 14.068 16.225C14.1699 15.2998 14.2379 14.3662 14.2718 13.4241C14.3058 12.4653 14.3398 11.5232 14.3738 10.598C14.4078 9.65597 14.4417 8.71393 14.4757 7.77188C14.3568 7.78871 14.2463 7.80553 14.1444 7.82235C14.0425 7.82235 13.949 7.82235 13.8641 7.82235C13.6262 7.82235 13.3714 7.79712 13.0995 7.74665C12.8277 7.69619 12.5728 7.61207 12.3349 7.49432C12.0971 7.35974 11.8932 7.19993 11.7233 7.01488C11.5704 6.82984 11.4939 6.59434 11.4939 6.30836C11.4939 5.7364 11.7318 5.26538 12.2075 4.89529C12.7002 4.5252 13.2779 4.23923 13.9405 4.03736C14.6201 3.83549 15.3082 3.70092 16.0048 3.63363C16.7014 3.54952 17.2621 3.50746 17.6869 3.50746C17.9247 3.50746 18.2391 3.52428 18.6298 3.55793C19.0206 3.59157 19.4029 3.66727 19.7767 3.78502C20.1675 3.90278 20.4988 4.06259 20.7706 4.26446C21.0595 4.46633 21.2039 4.74389 21.2039 5.09716Z",fill:"#758650"}),p.exports.createElement("path",{d:"M32.9781 16.1746C32.8252 16.9316 32.5789 17.7222 32.2391 18.5465C31.9162 19.354 31.4915 20.0941 30.9648 20.767C30.4551 21.4399 29.8434 21.9866 29.1298 22.4072C28.4162 22.8446 27.6007 23.0633 26.6832 23.0633C26.0036 23.0633 25.392 22.9287 24.8483 22.6595C24.3046 22.3904 23.8119 22.0287 23.3701 21.5745C22.9284 21.1203 22.5461 20.5988 22.2233 20.01C21.9005 19.4213 21.6286 18.8157 21.4077 18.1932C21.2039 17.554 21.051 16.9232 20.949 16.3007C20.8471 15.6783 20.7961 15.098 20.7961 14.5596C20.7961 13.8026 20.8641 12.9952 21 12.1372C21.1529 11.2625 21.3738 10.4046 21.6626 9.56345C21.9514 8.70552 22.3167 7.88964 22.7585 7.11582C23.2002 6.32518 23.7184 5.63547 24.3131 5.04669C24.9247 4.44109 25.6043 3.96166 26.3519 3.60839C27.1165 3.23831 27.966 3.05326 28.9005 3.05326C29.4951 3.05326 30.0473 3.17101 30.557 3.40652C31.0667 3.62521 31.5085 3.92801 31.8823 4.31492C32.256 4.68501 32.5449 5.1308 32.7488 5.65229C32.9696 6.17377 33.0801 6.7205 33.0801 7.29245V7.51955C33.0801 7.82235 33.0631 8.20085 33.0291 8.65505C33.0121 9.09243 32.9357 9.51299 32.7997 9.91672C32.6638 10.3205 32.4599 10.6737 32.1881 10.9765C31.9162 11.2625 31.534 11.4055 31.0412 11.4055C30.4466 11.4055 29.9963 11.2709 29.6905 11.0017C29.3847 10.7326 29.2318 10.2868 29.2318 9.66438C29.2318 9.42887 29.2403 9.19336 29.2573 8.95785C29.2743 8.72234 29.2827 8.48683 29.2827 8.25132C29.2827 7.89805 29.2233 7.6289 29.1043 7.44385C28.9854 7.24199 28.7391 7.14105 28.3653 7.14105C27.9405 7.14105 27.5582 7.27563 27.2184 7.54478C26.8786 7.81394 26.5813 8.16721 26.3264 8.60459C26.0716 9.04196 25.8507 9.53822 25.6638 10.0933C25.4769 10.6485 25.324 11.212 25.2051 11.784C25.0861 12.3391 25.0012 12.8774 24.9502 13.3989C24.8993 13.9204 24.8738 14.3662 24.8738 14.7363C24.8738 15.0391 24.8908 15.3923 24.9247 15.7961C24.9587 16.183 25.0267 16.5615 25.1286 16.9316C25.2476 17.2848 25.4175 17.5876 25.6383 17.84C25.8592 18.0923 26.148 18.2185 26.5048 18.2185C27.1165 18.2185 27.6092 18.0334 27.983 17.6633C28.3568 17.2764 28.6116 16.7886 28.7476 16.1998C28.5097 16.1662 28.2718 16.1157 28.034 16.0484C27.8131 15.9643 27.6007 15.8549 27.3968 15.7204C27.2099 15.569 27.057 15.3923 26.9381 15.1905C26.8192 14.9718 26.7597 14.7195 26.7597 14.4335C26.7597 13.912 26.9381 13.5083 27.2949 13.2223C27.6517 12.9195 28.0679 12.6924 28.5437 12.541C29.0364 12.3896 29.5376 12.2971 30.0473 12.2634C30.557 12.2129 30.9648 12.1877 31.2706 12.1877C31.4915 12.1877 31.8143 12.2045 32.2391 12.2382C32.6638 12.2718 33.0801 12.3475 33.4878 12.4653C33.9126 12.5662 34.2779 12.7176 34.5837 12.9195C34.8895 13.1213 35.0424 13.3821 35.0424 13.7017C35.0424 14.341 34.864 14.8961 34.5073 15.3671C34.1674 15.8213 33.6577 16.0905 32.9781 16.1746Z",fill:"#758650"}),p.exports.createElement("path",{d:"M12.1311 43.7103C12.1311 44.1309 11.9527 44.5262 11.5959 44.8963C11.2561 45.2664 10.8058 45.6028 10.2451 45.9056C9.70146 46.2084 9.0898 46.4776 8.41019 46.7131C7.73058 46.9318 7.05946 47.1168 6.39684 47.2682C5.73422 47.4365 5.10558 47.5626 4.51092 47.6467C3.93325 47.7308 3.47451 47.7729 3.13471 47.7729C2.81189 47.7729 2.46359 47.7393 2.08981 47.672C1.73301 47.6215 1.43568 47.4953 1.19782 47.2935C1.0619 47.1925 0.942964 46.9654 0.841023 46.6122C0.739081 46.2589 0.637137 45.8383 0.535196 45.3505C0.450244 44.8627 0.373788 44.3412 0.305827 43.786C0.237866 43.2141 0.178398 42.659 0.127427 42.1206C0.0934468 41.5823 0.0594706 41.0861 0.0254901 40.6319C0.00849982 40.1777 0 39.8244 0 39.5721C0 39.1515 0.00849982 38.6469 0.0254901 38.0581C0.0594706 37.4525 0.101943 36.8132 0.152914 36.1404C0.203884 35.4506 0.271844 34.7525 0.356796 34.046C0.441747 33.3395 0.535195 32.675 0.637137 32.0526C0.756069 31.4133 0.891989 30.8414 1.0449 30.3367C1.2148 29.832 1.39321 29.4367 1.5801 29.1507C1.90292 28.6965 2.31068 28.4694 2.8034 28.4694C3.1432 28.4694 3.43204 28.5872 3.6699 28.8227C3.90777 29.0414 4.09466 29.3358 4.23058 29.7059C4.38349 30.0591 4.49393 30.4629 4.56189 30.9171C4.64685 31.3544 4.70631 31.7918 4.74029 32.2292C4.77427 32.6666 4.79126 33.0703 4.79126 33.4404C4.79126 33.8105 4.79126 34.1049 4.79126 34.3236C4.79126 35.6357 4.75728 36.9394 4.68932 38.2347C4.63835 39.5132 4.61286 40.8085 4.61286 42.1206V43.1047C5.37743 42.8692 6.20995 42.6505 7.11044 42.4487C8.01092 42.23 8.86893 42.1206 9.68447 42.1206C9.9733 42.1206 10.2621 42.1375 10.551 42.1711C10.8568 42.2048 11.1201 42.2805 11.341 42.3982C11.5789 42.4991 11.7658 42.659 11.9017 42.8776C12.0546 43.0795 12.1311 43.3571 12.1311 43.7103Z",fill:"#758650"}),p.exports.createElement("path",{d:"M25.6383 43.458C25.6383 43.7945 25.6043 44.1982 25.5364 44.6692C25.4854 45.1402 25.375 45.5944 25.2051 46.0318C25.0352 46.4524 24.8058 46.814 24.517 47.1168C24.2281 47.4028 23.8459 47.5458 23.3701 47.5458C22.7415 47.5458 22.2658 47.3187 21.943 46.8645C21.6371 46.4103 21.4163 45.872 21.2803 45.2496C21.1444 44.6103 21.0595 43.9627 21.0255 43.3066C21.0085 42.6505 20.9915 42.1291 20.9745 41.7421C19.7512 41.944 18.5449 42.1206 17.3556 42.272C17.3216 42.659 17.2451 43.1384 17.1262 43.7103C17.0243 44.2823 16.8544 44.8374 16.6165 45.3757C16.3956 45.8972 16.0983 46.3514 15.7245 46.7383C15.3677 47.1253 14.926 47.3187 14.3993 47.3187C13.9915 47.3187 13.6687 47.1757 13.4308 46.8897C13.2099 46.5869 13.04 46.2337 12.9211 45.8299C12.8022 45.4262 12.7257 45.0141 12.6917 44.5935C12.6748 44.1561 12.6663 43.7945 12.6663 43.5085C12.6663 42.5496 12.7427 41.6076 12.8956 40.6823C13.0485 39.7403 13.2269 38.8067 13.4308 37.8815C13.5328 37.3936 13.6687 36.8217 13.8386 36.1656C14.0085 35.5095 14.2124 34.8366 14.4502 34.1469C14.7051 33.4404 14.9939 32.7507 15.3167 32.0778C15.6565 31.3881 16.0388 30.7741 16.4636 30.2358C16.8883 29.6975 17.3726 29.2601 17.9163 28.9236C18.4599 28.5872 19.0631 28.419 19.7257 28.419C20.3713 28.419 20.932 28.562 21.4078 28.8479C21.8835 29.1339 22.2997 29.5124 22.6565 29.9834C23.0133 30.4545 23.3107 30.9928 23.5485 31.5984C23.7864 32.1871 23.9818 32.7927 24.1347 33.4152C24.3046 34.0208 24.4405 34.618 24.5425 35.2067C24.6614 35.7955 24.7633 36.317 24.8483 36.7712C25.0692 37.8646 25.256 38.9749 25.409 40.102C25.5619 41.2122 25.6383 42.3309 25.6383 43.458ZM20.7196 37.3263C20.7196 37.1245 20.7027 36.7964 20.6687 36.3422C20.6517 35.8712 20.6007 35.4086 20.5158 34.9544C20.4308 34.4834 20.2949 34.0712 20.108 33.718C19.9381 33.3479 19.7002 33.1628 19.3944 33.1628C19.2245 33.1628 19.0631 33.2806 18.9102 33.5161C18.7573 33.7348 18.6213 34.0208 18.5024 34.374C18.3835 34.7105 18.273 35.089 18.1711 35.5095C18.0862 35.9301 18.0097 36.3338 17.9417 36.7207C17.8738 37.1076 17.8228 37.4609 17.7888 37.7805C17.7548 38.0833 17.7294 38.302 17.7124 38.4366C18.7318 38.3525 19.7342 38.2263 20.7196 38.0581V37.3263Z",fill:"#758650"}),p.exports.createElement("path",{d:"M39.1201 33.6675C39.1201 34.5759 38.9162 35.4675 38.5085 36.3422C38.1177 37.217 37.591 38.0076 36.9284 38.7141C36.2657 39.4039 35.5097 39.9758 34.6602 40.43C33.8107 40.8674 32.9357 41.1113 32.0352 41.1618C32.0182 41.4646 32.0012 41.8515 31.9842 42.3225C31.9842 42.7767 31.9587 43.2561 31.9077 43.7608C31.8568 44.2655 31.7803 44.7701 31.6784 45.2748C31.5934 45.7795 31.4575 46.2337 31.2706 46.6374C31.1007 47.0411 30.8713 47.3692 30.5825 47.6215C30.3107 47.8738 29.9709 48 29.5631 48C29.0874 48 28.7051 47.8402 28.4162 47.5206C28.1444 47.2178 27.932 46.8477 27.7791 46.4103C27.6432 45.9729 27.5497 45.5187 27.4988 45.0477C27.4478 44.5599 27.4138 44.1477 27.3968 43.8113C27.3628 43.3234 27.3374 42.844 27.3204 42.373C27.3204 41.902 27.3204 41.4225 27.3204 40.9347C27.3204 40.716 27.3204 40.3123 27.3204 39.7235C27.3204 39.1179 27.3204 38.4366 27.3204 37.6796C27.3374 36.9058 27.3543 36.1067 27.3713 35.2824C27.3883 34.4413 27.4138 33.6675 27.4478 32.961C27.4818 32.2376 27.5158 31.6236 27.5497 31.1189C27.6007 30.6143 27.6602 30.3199 27.7281 30.2358C27.7451 30.2189 27.7961 30.1853 27.8811 30.1348C27.966 30.0675 28.0595 30.0087 28.1614 29.9582C28.2633 29.8909 28.3568 29.832 28.4417 29.7816C28.5267 29.7311 28.5861 29.6975 28.6201 29.6806C29.4017 29.2433 30.2597 28.8648 31.1942 28.5451C32.1286 28.2255 33.0546 28.0657 33.9721 28.0657C34.7536 28.0657 35.4587 28.2255 36.0873 28.5451C36.733 28.8479 37.2767 29.2601 37.7184 29.7816C38.1772 30.2862 38.5255 30.8834 38.7633 31.5731C39.0012 32.246 39.1201 32.9441 39.1201 33.6675ZM34.7111 34.2479C34.7111 33.9114 34.6262 33.617 34.4563 33.3647C34.3034 33.1124 34.04 32.9862 33.6662 32.9862C33.3434 32.9862 33.0206 33.0535 32.6978 33.1881C32.375 33.3058 32.0777 33.432 31.8058 33.5666C31.8568 34.1553 31.8993 34.7273 31.9332 35.2824C31.9842 35.8376 31.9927 36.4095 31.9587 36.9983C32.2306 36.8637 32.5279 36.7123 32.8507 36.5441C33.1735 36.359 33.4708 36.1572 33.7427 35.9385C34.0145 35.7198 34.2439 35.4759 34.4308 35.2067C34.6177 34.9207 34.7111 34.6011 34.7111 34.2479Z",fill:"#758650"}),p.exports.createElement("path",{d:"M52.0922 43.458C52.0922 43.7945 52.0582 44.1982 51.9903 44.6692C51.9393 45.1402 51.8288 45.5944 51.6589 46.0318C51.489 46.4524 51.2597 46.814 50.9708 47.1168C50.682 47.4028 50.2997 47.5458 49.824 47.5458C49.1954 47.5458 48.7196 47.3187 48.3968 46.8645C48.091 46.4103 47.8701 45.872 47.7342 45.2496C47.5983 44.6103 47.5133 43.9627 47.4793 43.3066C47.4623 42.6505 47.4454 42.1291 47.4284 41.7421C46.2051 41.944 44.9988 42.1206 43.8094 42.272C43.7755 42.659 43.699 43.1384 43.5801 43.7103C43.4781 44.2823 43.3082 44.8374 43.0704 45.3757C42.8495 45.8972 42.5522 46.3514 42.1784 46.7383C41.8216 47.1253 41.3798 47.3187 40.8531 47.3187C40.4454 47.3187 40.1225 47.1757 39.8847 46.8897C39.6638 46.5869 39.4939 46.2337 39.375 45.8299C39.256 45.4262 39.1796 45.0141 39.1456 44.5935C39.1286 44.1561 39.1201 43.7945 39.1201 43.5085C39.1201 42.5496 39.1966 41.6076 39.3495 40.6823C39.5024 39.7403 39.6808 38.8067 39.8847 37.8815C39.9866 37.3936 40.1225 36.8217 40.2924 36.1656C40.4623 35.5095 40.6662 34.8366 40.9041 34.1469C41.159 33.4404 41.4478 32.7507 41.7706 32.0778C42.1104 31.3881 42.4927 30.7741 42.9174 30.2358C43.3422 29.6975 43.8264 29.2601 44.3701 28.9236C44.9138 28.5872 45.517 28.419 46.1796 28.419C46.8252 28.419 47.3859 28.562 47.8616 28.8479C48.3374 29.1339 48.7536 29.5124 49.1104 29.9834C49.4672 30.4545 49.7645 30.9928 50.0024 31.5984C50.2403 32.1871 50.4357 32.7927 50.5886 33.4152C50.7585 34.0208 50.8944 34.618 50.9963 35.2067C51.1153 35.7955 51.2172 36.317 51.3021 36.7712C51.523 37.8646 51.7099 38.9749 51.8628 40.102C52.0157 41.2122 52.0922 42.3309 52.0922 43.458ZM47.1735 37.3263C47.1735 37.1245 47.1565 36.7964 47.1225 36.3422C47.1056 35.8712 47.0546 35.4086 46.9696 34.9544C46.8847 34.4834 46.7488 34.0712 46.5619 33.718C46.392 33.3479 46.1541 33.1628 45.8483 33.1628C45.6784 33.1628 45.517 33.2806 45.364 33.5161C45.2111 33.7348 45.0752 34.0208 44.9563 34.374C44.8374 34.7105 44.7269 35.089 44.625 35.5095C44.54 35.9301 44.4636 36.3338 44.3956 36.7207C44.3276 37.1076 44.2767 37.4609 44.2427 37.7805C44.2087 38.0833 44.1832 38.302 44.1662 38.4366C45.1856 38.3525 46.1881 38.2263 47.1735 38.0581V37.3263Z",fill:"#758650"}),p.exports.createElement("path",{d:"M57.2817 1.09879C53.6383 0.62618 52.6744 8.18767 56.141 8.63861C59.5488 9.0825 60.8661 1.56431 57.2817 1.09879ZM50.2933 0.0267887C50.2393 0.0186128 50.1852 0.0138761 50.1289 0.00910539C46.4695 -0.298862 45.9141 7.30568 49.3961 7.6C52.7655 7.88527 53.6992 0.545837 50.2933 0.0267887ZM43.9644 4.48051C43.8573 4.46077 43.7489 4.44845 43.64 4.44365C39.9737 4.28077 39.7774 11.9105 43.2659 12.0668C46.5882 12.216 47.2082 5.07309 43.9644 4.48051ZM62.0768 7.66507C58.4675 6.98011 56.9746 14.4554 60.4088 15.1085C63.7844 15.7508 65.6277 8.33947 62.0768 7.66507ZM51.8882 10.383C48.1643 9.83004 50.3674 14.1158 43.4251 15.2017C38.0443 16.0433 40.2244 21.722 44.5718 22.4834C46.9579 22.9014 48.1354 21.1807 50.0887 21.5232C52.3066 21.9118 52.1923 23.6165 55.4388 24.1852C59.5841 24.9111 62.8887 20.138 58.4498 17.5662C52.7981 14.2918 55.956 11.1173 52.0712 10.4143C52.009 10.4032 51.9473 10.3918 51.8882 10.383Z",fill:"#758650"})),ae=x.button`
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
`,gp=x.header`
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.background};
  height: ${({theme:e})=>e.headerHeight};
`,xp=x(de)`
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
`,yp=x.nav`
  @media (max-width: 1279px) {
    width: 100%;
  }
`,vp=x(de)`
  @media (max-width: 1279px) {
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 40px;
  }
`,wp=x.li`
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
`,Ep=x(de)`
  @media (max-width: 1279px) {
    width: 315px;
  }

  @media (max-width: 767px) {
    width: 240px;
    ${({$extendNavbar:e})=>e&&"flex-direction: row-reverse;"}
  }
`,Sp=x(ae)`
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
`,kp=x.button`
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

    ${({$isActive:e})=>e&&Mt`
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
`;function Fp({title:e,to:t,testId:n,setExtendNavbar:u}){return a(wp,{children:a(pt,{to:t,end:!0,"data-testid":n,onClick:()=>{u(r=>!r)},children:e})})}const Dp=[{id:Math.random().toString(),title:"\u041F\u0440\u043E \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A",to:"about",testId:"about-link"},{id:Math.random().toString(),title:"\u041D\u0430\u0448\u0456 \u0445\u0432\u043E\u0441\u0442\u0438",to:"dogs",testId:"dogs-link"},{id:Math.random().toString(),title:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",to:"contacts",testId:"contacts-link"}],bp=({setExtendNavbar:e})=>a(yp,{children:a("ul",{children:a(vp,{$gap:"20px",children:Dp.map(t=>a(Fp,{title:t.title,to:t.to,testId:t.testId,setExtendNavbar:e},t.id))})})});function Ap({className:e,extendNavbar:t,setExtendNavbar:n}){return a(xp,{$align:"center",$justify:"space-between",$gap:"10px",className:e,$extendNavbar:t,children:a(bp,{setExtendNavbar:n})})}function Lp({className:e,children:t,extendNavbar:n}){return a(Ep,{$justify:"space-between",$align:"center",className:e,$extendNavbar:n,children:t})}function Bp({className:e,onClick:t,isActive:n}){return a(kp,{className:e,onClick:t,$isActive:n,children:a("span",{})})}const Pp=()=>{const[e,t]=p.exports.useState(!1);return a(gp,{children:a(re,{children:w(de,{$justify:"space-between",$align:"center",$gap:"20px",children:[a(pt,{to:".",end:!0,"data-testid":"home-link",children:a(Cp,{})}),a(Ap,{extendNavbar:e,setExtendNavbar:t}),w(Lp,{extendNavbar:e,children:[a(mp,{smooth:!0,to:"/#donation",children:a(Sp,{$extendNavbar:e,children:a("span",{children:"\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A"})})}),a(Bp,{isActive:e,onClick:()=>{t(n=>!n)}})]})]})})})},Rp=[{id:0,src:"./testPhoto.png",name:"\u0421\u043A\u0430\u0439",sex:"\u0425\u043B\u043E\u043F\u0447\u0438\u043A",age:"2 \u0440\u043E\u043A\u0438",haschip:!1,hasbreed:!1,breed:"",size:"medium"},{id:1,src:"./testPhoto.png",name:"\u0421\u043A\u0430\u0439",sex:"\u0425\u043B\u043E\u043F\u0447\u0438\u043A",age:"2 \u0440\u043E\u043A\u0438",haschip:!1,hasbreed:!0,breed:"\u041B\u0430\u0431\u0440\u0430\u0434\u043E\u0440",size:"medium"},{id:2,src:"./testPhoto.png",name:"\u0411\u0435\u043B\u043B\u0430",sex:"\u0414\u0456\u0432\u0447\u0438\u043D\u043A\u0430",age:"3 \u0440\u043E\u043A\u0438",haschip:!0,hasbreed:!0,breed:"\u041C\u043E\u043F\u0441",size:"small"},{id:3,src:"./testPhoto.png",name:"\u041C\u0430\u043A\u0441",sex:"\u0425\u043B\u043E\u043F\u0447\u0438\u043A",age:"1 \u0440\u0456\u043A",haschip:!0,hasbreed:!1,breed:"",size:"small"},{id:4,src:"./testPhoto.png",name:"\u041B\u044E\u0441\u0456",sex:"\u0414\u0456\u0432\u0447\u0438\u043D\u043A\u0430",age:"3 \u0440\u0456\u043A",haschip:!0,hasbreed:!0,breed:"\u041A\u043E\u0440\u0433\u0456",size:"big"},{id:5,src:"./testPhoto.png",name:"\u0411\u043E\u0431\u0456\u043A",sex:"\u0414\u0456\u0432\u0447\u0438\u043D\u043A\u0430",age:"5 \u0440\u0456\u043A",haschip:!0,hasbreed:!0,breed:"\u0411\u0443\u043B\u044C\u0434\u043E\u0433",size:"big"}];var Mp={data:Rp};function _5(e,t){return function(){return e.apply(t,arguments)}}const{toString:Op}=Object.prototype,{getPrototypeOf:x2}=Object,qr=(e=>t=>{const n=Op.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),kt=e=>(e=e.toLowerCase(),t=>qr(t)===e),Gr=e=>t=>typeof t===e,{isArray:M0}=Array,Tn=Gr("undefined");function Tp(e){return e!==null&&!Tn(e)&&e.constructor!==null&&!Tn(e.constructor)&&tt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const q5=kt("ArrayBuffer");function Ip(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&q5(e.buffer),t}const Np=Gr("string"),tt=Gr("function"),G5=Gr("number"),Kr=e=>e!==null&&typeof e=="object",zp=e=>e===!0||e===!1,Nu=e=>{if(qr(e)!=="object")return!1;const t=x2(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},jp=kt("Date"),Hp=kt("File"),$p=kt("Blob"),Up=kt("FileList"),Vp=e=>Kr(e)&&tt(e.pipe),Wp=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||tt(e.append)&&((t=qr(e))==="formdata"||t==="object"&&tt(e.toString)&&e.toString()==="[object FormData]"))},Qp=kt("URLSearchParams"),Zp=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Vn(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e=="undefined")return;let u,r;if(typeof e!="object"&&(e=[e]),M0(e))for(u=0,r=e.length;u<r;u++)t.call(null,e[u],u,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let s;for(u=0;u<o;u++)s=i[u],t.call(null,e[s],s,e)}}function K5(e,t){t=t.toLowerCase();const n=Object.keys(e);let u=n.length,r;for(;u-- >0;)if(r=n[u],t===r.toLowerCase())return r;return null}const X5=(()=>typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:global)(),J5=e=>!Tn(e)&&e!==X5;function ei(){const{caseless:e}=J5(this)&&this||{},t={},n=(u,r)=>{const i=e&&K5(t,r)||r;Nu(t[i])&&Nu(u)?t[i]=ei(t[i],u):Nu(u)?t[i]=ei({},u):M0(u)?t[i]=u.slice():t[i]=u};for(let u=0,r=arguments.length;u<r;u++)arguments[u]&&Vn(arguments[u],n);return t}const _p=(e,t,n,{allOwnKeys:u}={})=>(Vn(t,(r,i)=>{n&&tt(r)?e[i]=_5(r,n):e[i]=r},{allOwnKeys:u}),e),qp=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Gp=(e,t,n,u)=>{e.prototype=Object.create(t.prototype,u),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Kp=(e,t,n,u)=>{let r,i,o;const s={};if(t=t||{},e==null)return t;do{for(r=Object.getOwnPropertyNames(e),i=r.length;i-- >0;)o=r[i],(!u||u(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&x2(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Xp=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const u=e.indexOf(t,n);return u!==-1&&u===n},Jp=e=>{if(!e)return null;if(M0(e))return e;let t=e.length;if(!G5(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Yp=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&x2(Uint8Array)),ef=(e,t)=>{const u=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=u.next())&&!r.done;){const i=r.value;t.call(e,i[0],i[1])}},tf=(e,t)=>{let n;const u=[];for(;(n=e.exec(t))!==null;)u.push(n);return u},nf=kt("HTMLFormElement"),uf=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,u,r){return u.toUpperCase()+r}),ds=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),rf=kt("RegExp"),Y5=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),u={};Vn(n,(r,i)=>{t(r,i,e)!==!1&&(u[i]=r)}),Object.defineProperties(e,u)},of=e=>{Y5(e,(t,n)=>{if(tt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const u=e[n];if(!!tt(u)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},sf=(e,t)=>{const n={},u=r=>{r.forEach(i=>{n[i]=!0})};return M0(e)?u(e):u(String(e).split(t)),n},lf=()=>{},af=(e,t)=>(e=+e,Number.isFinite(e)?e:t),T1="abcdefghijklmnopqrstuvwxyz",ps="0123456789",e8={DIGIT:ps,ALPHA:T1,ALPHA_DIGIT:T1+T1.toUpperCase()+ps},cf=(e=16,t=e8.ALPHA_DIGIT)=>{let n="";const{length:u}=t;for(;e--;)n+=t[Math.random()*u|0];return n};function df(e){return!!(e&&tt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const pf=e=>{const t=new Array(10),n=(u,r)=>{if(Kr(u)){if(t.indexOf(u)>=0)return;if(!("toJSON"in u)){t[r]=u;const i=M0(u)?[]:{};return Vn(u,(o,s)=>{const l=n(o,r+1);!Tn(l)&&(i[s]=l)}),t[r]=void 0,i}}return u};return n(e,0)},ff=kt("AsyncFunction"),hf=e=>e&&(Kr(e)||tt(e))&&tt(e.then)&&tt(e.catch);var L={isArray:M0,isArrayBuffer:q5,isBuffer:Tp,isFormData:Wp,isArrayBufferView:Ip,isString:Np,isNumber:G5,isBoolean:zp,isObject:Kr,isPlainObject:Nu,isUndefined:Tn,isDate:jp,isFile:Hp,isBlob:$p,isRegExp:rf,isFunction:tt,isStream:Vp,isURLSearchParams:Qp,isTypedArray:Yp,isFileList:Up,forEach:Vn,merge:ei,extend:_p,trim:Zp,stripBOM:qp,inherits:Gp,toFlatObject:Kp,kindOf:qr,kindOfTest:kt,endsWith:Xp,toArray:Jp,forEachEntry:ef,matchAll:tf,isHTMLForm:nf,hasOwnProperty:ds,hasOwnProp:ds,reduceDescriptors:Y5,freezeMethods:of,toObjectSet:sf,toCamelCase:uf,noop:lf,toFiniteNumber:af,findKey:K5,global:X5,isContextDefined:J5,ALPHABET:e8,generateString:cf,isSpecCompliantForm:df,toJSONObject:pf,isAsyncFn:ff,isThenable:hf};function H(e,t,n,u,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),u&&(this.request=u),r&&(this.response=r)}L.inherits(H,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const t8=H.prototype,n8={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{n8[e]={value:e}});Object.defineProperties(H,n8);Object.defineProperty(t8,"isAxiosError",{value:!0});H.from=(e,t,n,u,r,i)=>{const o=Object.create(t8);return L.toFlatObject(e,o,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),H.call(o,e.message,t,n,u,r),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};var mf=null;function ti(e){return L.isPlainObject(e)||L.isArray(e)}function u8(e){return L.endsWith(e,"[]")?e.slice(0,-2):e}function fs(e,t,n){return e?e.concat(t).map(function(r,i){return r=u8(r),!n&&i?"["+r+"]":r}).join(n?".":""):t}function Cf(e){return L.isArray(e)&&!e.some(ti)}const gf=L.toFlatObject(L,{},null,function(t){return/^is[A-Z]/.test(t)});function Xr(e,t,n){if(!L.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(E,b){return!L.isUndefined(b[E])});const u=n.metaTokens,r=n.visitor||d,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob!="undefined"&&Blob)&&L.isSpecCompliantForm(t);if(!L.isFunction(r))throw new TypeError("visitor must be a function");function c(y){if(y===null)return"";if(L.isDate(y))return y.toISOString();if(!l&&L.isBlob(y))throw new H("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(y)||L.isTypedArray(y)?l&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,E,b){let h=y;if(y&&!b&&typeof y=="object"){if(L.endsWith(E,"{}"))E=u?E:E.slice(0,-2),y=JSON.stringify(y);else if(L.isArray(y)&&Cf(y)||(L.isFileList(y)||L.endsWith(E,"[]"))&&(h=L.toArray(y)))return E=u8(E),h.forEach(function(C,k){!(L.isUndefined(C)||C===null)&&t.append(o===!0?fs([E],k,i):o===null?E:E+"[]",c(C))}),!1}return ti(y)?!0:(t.append(fs(b,E,i),c(y)),!1)}const m=[],g=Object.assign(gf,{defaultVisitor:d,convertValue:c,isVisitable:ti});function v(y,E){if(!L.isUndefined(y)){if(m.indexOf(y)!==-1)throw Error("Circular reference detected in "+E.join("."));m.push(y),L.forEach(y,function(h,f){(!(L.isUndefined(h)||h===null)&&r.call(t,h,L.isString(f)?f.trim():f,E,g))===!0&&v(h,E?E.concat(f):[f])}),m.pop()}}if(!L.isObject(e))throw new TypeError("data must be an object");return v(e),t}function hs(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(u){return t[u]})}function y2(e,t){this._pairs=[],e&&Xr(e,this,t)}const r8=y2.prototype;r8.append=function(t,n){this._pairs.push([t,n])};r8.toString=function(t){const n=t?function(u){return t.call(this,u,hs)}:hs;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function xf(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function i8(e,t,n){if(!t)return e;const u=n&&n.encode||xf,r=n&&n.serialize;let i;if(r?i=r(t,n):i=L.isURLSearchParams(t)?t.toString():new y2(t,n).toString(u),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class yf{constructor(){this.handlers=[]}use(t,n,u){return this.handlers.push({fulfilled:t,rejected:n,synchronous:u?u.synchronous:!1,runWhen:u?u.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){L.forEach(this.handlers,function(u){u!==null&&t(u)})}}var ms=yf,o8={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},vf=typeof URLSearchParams!="undefined"?URLSearchParams:y2,wf=typeof FormData!="undefined"?FormData:null,Ef=typeof Blob!="undefined"?Blob:null;const Sf=(()=>{let e;return typeof navigator!="undefined"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"})(),kf=(()=>typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")();var yt={isBrowser:!0,classes:{URLSearchParams:vf,FormData:wf,Blob:Ef},isStandardBrowserEnv:Sf,isStandardBrowserWebWorkerEnv:kf,protocols:["http","https","file","blob","url","data"]};function Ff(e,t){return Xr(e,new yt.classes.URLSearchParams,Object.assign({visitor:function(n,u,r,i){return yt.isNode&&L.isBuffer(n)?(this.append(u,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Df(e){return L.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function bf(e){const t={},n=Object.keys(e);let u;const r=n.length;let i;for(u=0;u<r;u++)i=n[u],t[i]=e[i];return t}function s8(e){function t(n,u,r,i){let o=n[i++];const s=Number.isFinite(+o),l=i>=n.length;return o=!o&&L.isArray(r)?r.length:o,l?(L.hasOwnProp(r,o)?r[o]=[r[o],u]:r[o]=u,!s):((!r[o]||!L.isObject(r[o]))&&(r[o]=[]),t(n,u,r[o],i)&&L.isArray(r[o])&&(r[o]=bf(r[o])),!s)}if(L.isFormData(e)&&L.isFunction(e.entries)){const n={};return L.forEachEntry(e,(u,r)=>{t(Df(u),r,n,0)}),n}return null}const Af={"Content-Type":void 0};function Lf(e,t,n){if(L.isString(e))try{return(t||JSON.parse)(e),L.trim(e)}catch(u){if(u.name!=="SyntaxError")throw u}return(n||JSON.stringify)(e)}const Jr={transitional:o8,adapter:["xhr","http"],transformRequest:[function(t,n){const u=n.getContentType()||"",r=u.indexOf("application/json")>-1,i=L.isObject(t);if(i&&L.isHTMLForm(t)&&(t=new FormData(t)),L.isFormData(t))return r&&r?JSON.stringify(s8(t)):t;if(L.isArrayBuffer(t)||L.isBuffer(t)||L.isStream(t)||L.isFile(t)||L.isBlob(t))return t;if(L.isArrayBufferView(t))return t.buffer;if(L.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(u.indexOf("application/x-www-form-urlencoded")>-1)return Ff(t,this.formSerializer).toString();if((s=L.isFileList(t))||u.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Xr(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||r?(n.setContentType("application/json",!1),Lf(t)):t}],transformResponse:[function(t){const n=this.transitional||Jr.transitional,u=n&&n.forcedJSONParsing,r=this.responseType==="json";if(t&&L.isString(t)&&(u&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(t)}catch(s){if(o)throw s.name==="SyntaxError"?H.from(s,H.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:yt.classes.FormData,Blob:yt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};L.forEach(["delete","get","head"],function(t){Jr.headers[t]={}});L.forEach(["post","put","patch"],function(t){Jr.headers[t]=L.merge(Af)});var v2=Jr;const Bf=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Pf=e=>{const t={};let n,u,r;return e&&e.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),u=o.substring(r+1).trim(),!(!n||t[n]&&Bf[n])&&(n==="set-cookie"?t[n]?t[n].push(u):t[n]=[u]:t[n]=t[n]?t[n]+", "+u:u)}),t};const Cs=Symbol("internals");function Z0(e){return e&&String(e).trim().toLowerCase()}function zu(e){return e===!1||e==null?e:L.isArray(e)?e.map(zu):String(e)}function Rf(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let u;for(;u=n.exec(e);)t[u[1]]=u[2];return t}const Mf=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function I1(e,t,n,u,r){if(L.isFunction(u))return u.call(this,t,n);if(r&&(t=n),!!L.isString(t)){if(L.isString(u))return t.indexOf(u)!==-1;if(L.isRegExp(u))return u.test(t)}}function Of(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,u)=>n.toUpperCase()+u)}function Tf(e,t){const n=L.toCamelCase(" "+t);["get","set","has"].forEach(u=>{Object.defineProperty(e,u+n,{value:function(r,i,o){return this[u].call(this,t,r,i,o)},configurable:!0})})}class Yr{constructor(t){t&&this.set(t)}set(t,n,u){const r=this;function i(s,l,c){const d=Z0(l);if(!d)throw new Error("header name must be a non-empty string");const m=L.findKey(r,d);(!m||r[m]===void 0||c===!0||c===void 0&&r[m]!==!1)&&(r[m||l]=zu(s))}const o=(s,l)=>L.forEach(s,(c,d)=>i(c,d,l));return L.isPlainObject(t)||t instanceof this.constructor?o(t,n):L.isString(t)&&(t=t.trim())&&!Mf(t)?o(Pf(t),n):t!=null&&i(n,t,u),this}get(t,n){if(t=Z0(t),t){const u=L.findKey(this,t);if(u){const r=this[u];if(!n)return r;if(n===!0)return Rf(r);if(L.isFunction(n))return n.call(this,r,u);if(L.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Z0(t),t){const u=L.findKey(this,t);return!!(u&&this[u]!==void 0&&(!n||I1(this,this[u],u,n)))}return!1}delete(t,n){const u=this;let r=!1;function i(o){if(o=Z0(o),o){const s=L.findKey(u,o);s&&(!n||I1(u,u[s],s,n))&&(delete u[s],r=!0)}}return L.isArray(t)?t.forEach(i):i(t),r}clear(t){const n=Object.keys(this);let u=n.length,r=!1;for(;u--;){const i=n[u];(!t||I1(this,this[i],i,t,!0))&&(delete this[i],r=!0)}return r}normalize(t){const n=this,u={};return L.forEach(this,(r,i)=>{const o=L.findKey(u,i);if(o){n[o]=zu(r),delete n[i];return}const s=t?Of(i):String(i).trim();s!==i&&delete n[i],n[s]=zu(r),u[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return L.forEach(this,(u,r)=>{u!=null&&u!==!1&&(n[r]=t&&L.isArray(u)?u.join(", "):u)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const u=new this(t);return n.forEach(r=>u.set(r)),u}static accessor(t){const u=(this[Cs]=this[Cs]={accessors:{}}).accessors,r=this.prototype;function i(o){const s=Z0(o);u[s]||(Tf(r,o),u[s]=!0)}return L.isArray(t)?t.forEach(i):i(t),this}}Yr.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);L.freezeMethods(Yr.prototype);L.freezeMethods(Yr);var Tt=Yr;function N1(e,t){const n=this||v2,u=t||n,r=Tt.from(u.headers);let i=u.data;return L.forEach(e,function(s){i=s.call(n,i,r.normalize(),t?t.status:void 0)}),r.normalize(),i}function l8(e){return!!(e&&e.__CANCEL__)}function Wn(e,t,n){H.call(this,e==null?"canceled":e,H.ERR_CANCELED,t,n),this.name="CanceledError"}L.inherits(Wn,H,{__CANCEL__:!0});function If(e,t,n){const u=n.config.validateStatus;!n.status||!u||u(n.status)?e(n):t(new H("Request failed with status code "+n.status,[H.ERR_BAD_REQUEST,H.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}var Nf=yt.isStandardBrowserEnv?function(){return{write:function(n,u,r,i,o,s){const l=[];l.push(n+"="+encodeURIComponent(u)),L.isNumber(r)&&l.push("expires="+new Date(r).toGMTString()),L.isString(i)&&l.push("path="+i),L.isString(o)&&l.push("domain="+o),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const u=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return u?decodeURIComponent(u[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function zf(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function jf(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function a8(e,t){return e&&!zf(t)?jf(e,t):t}var Hf=yt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let u;function r(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return u=r(window.location.href),function(o){const s=L.isString(o)?r(o):o;return s.protocol===u.protocol&&s.host===u.host}}():function(){return function(){return!0}}();function $f(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Uf(e,t){e=e||10;const n=new Array(e),u=new Array(e);let r=0,i=0,o;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),d=u[i];o||(o=c),n[r]=l,u[r]=c;let m=i,g=0;for(;m!==r;)g+=n[m++],m=m%e;if(r=(r+1)%e,r===i&&(i=(i+1)%e),c-o<t)return;const v=d&&c-d;return v?Math.round(g*1e3/v):void 0}}function gs(e,t){let n=0;const u=Uf(50,250);return r=>{const i=r.loaded,o=r.lengthComputable?r.total:void 0,s=i-n,l=u(s),c=i<=o;n=i;const d={loaded:i,total:o,progress:o?i/o:void 0,bytes:s,rate:l||void 0,estimated:l&&o&&c?(o-i)/l:void 0,event:r};d[t?"download":"upload"]=!0,e(d)}}const Vf=typeof XMLHttpRequest!="undefined";var Wf=Vf&&function(e){return new Promise(function(n,u){let r=e.data;const i=Tt.from(e.headers).normalize(),o=e.responseType;let s;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}L.isFormData(r)&&(yt.isStandardBrowserEnv||yt.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(v+":"+y))}const d=a8(e.baseURL,e.url);c.open(e.method.toUpperCase(),i8(d,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function m(){if(!c)return;const v=Tt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),E={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:v,config:e,request:c};If(function(h){n(h),l()},function(h){u(h),l()},E),c=null}if("onloadend"in c?c.onloadend=m:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(m)},c.onabort=function(){!c||(u(new H("Request aborted",H.ECONNABORTED,e,c)),c=null)},c.onerror=function(){u(new H("Network Error",H.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let y=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const E=e.transitional||o8;e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),u(new H(y,E.clarifyTimeoutError?H.ETIMEDOUT:H.ECONNABORTED,e,c)),c=null},yt.isStandardBrowserEnv){const v=(e.withCredentials||Hf(d))&&e.xsrfCookieName&&Nf.read(e.xsrfCookieName);v&&i.set(e.xsrfHeaderName,v)}r===void 0&&i.setContentType(null),"setRequestHeader"in c&&L.forEach(i.toJSON(),function(y,E){c.setRequestHeader(E,y)}),L.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",gs(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",gs(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=v=>{!c||(u(!v||v.type?new Wn(null,e,c):v),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const g=$f(d);if(g&&yt.protocols.indexOf(g)===-1){u(new H("Unsupported protocol "+g+":",H.ERR_BAD_REQUEST,e));return}c.send(r||null)})};const ju={http:mf,xhr:Wf};L.forEach(ju,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});var Qf={getAdapter:e=>{e=L.isArray(e)?e:[e];const{length:t}=e;let n,u;for(let r=0;r<t&&(n=e[r],!(u=L.isString(n)?ju[n.toLowerCase()]:n));r++);if(!u)throw u===!1?new H(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(L.hasOwnProp(ju,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!L.isFunction(u))throw new TypeError("adapter is not a function");return u},adapters:ju};function z1(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Wn(null,e)}function xs(e){return z1(e),e.headers=Tt.from(e.headers),e.data=N1.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Qf.getAdapter(e.adapter||v2.adapter)(e).then(function(u){return z1(e),u.data=N1.call(e,e.transformResponse,u),u.headers=Tt.from(u.headers),u},function(u){return l8(u)||(z1(e),u&&u.response&&(u.response.data=N1.call(e,e.transformResponse,u.response),u.response.headers=Tt.from(u.response.headers))),Promise.reject(u)})}const ys=e=>e instanceof Tt?e.toJSON():e;function D0(e,t){t=t||{};const n={};function u(c,d,m){return L.isPlainObject(c)&&L.isPlainObject(d)?L.merge.call({caseless:m},c,d):L.isPlainObject(d)?L.merge({},d):L.isArray(d)?d.slice():d}function r(c,d,m){if(L.isUndefined(d)){if(!L.isUndefined(c))return u(void 0,c,m)}else return u(c,d,m)}function i(c,d){if(!L.isUndefined(d))return u(void 0,d)}function o(c,d){if(L.isUndefined(d)){if(!L.isUndefined(c))return u(void 0,c)}else return u(void 0,d)}function s(c,d,m){if(m in t)return u(c,d);if(m in e)return u(void 0,c)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(c,d)=>r(ys(c),ys(d),!0)};return L.forEach(Object.keys(Object.assign({},e,t)),function(d){const m=l[d]||r,g=m(e[d],t[d],d);L.isUndefined(g)&&m!==s||(n[d]=g)}),n}const c8="1.4.0",w2={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{w2[e]=function(u){return typeof u===e||"a"+(t<1?"n ":" ")+e}});const vs={};w2.transitional=function(t,n,u){function r(i,o){return"[Axios v"+c8+"] Transitional option '"+i+"'"+o+(u?". "+u:"")}return(i,o,s)=>{if(t===!1)throw new H(r(o," has been removed"+(n?" in "+n:"")),H.ERR_DEPRECATED);return n&&!vs[o]&&(vs[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,s):!0}};function Zf(e,t,n){if(typeof e!="object")throw new H("options must be an object",H.ERR_BAD_OPTION_VALUE);const u=Object.keys(e);let r=u.length;for(;r-- >0;){const i=u[r],o=t[i];if(o){const s=e[i],l=s===void 0||o(s,i,e);if(l!==!0)throw new H("option "+i+" must be "+l,H.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new H("Unknown option "+i,H.ERR_BAD_OPTION)}}var ni={assertOptions:Zf,validators:w2};const Zt=ni.validators;class vr{constructor(t){this.defaults=t,this.interceptors={request:new ms,response:new ms}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=D0(this.defaults,n);const{transitional:u,paramsSerializer:r,headers:i}=n;u!==void 0&&ni.assertOptions(u,{silentJSONParsing:Zt.transitional(Zt.boolean),forcedJSONParsing:Zt.transitional(Zt.boolean),clarifyTimeoutError:Zt.transitional(Zt.boolean)},!1),r!=null&&(L.isFunction(r)?n.paramsSerializer={serialize:r}:ni.assertOptions(r,{encode:Zt.function,serialize:Zt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&L.merge(i.common,i[n.method]),o&&L.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=Tt.concat(o,i);const s=[];let l=!0;this.interceptors.request.forEach(function(E){typeof E.runWhen=="function"&&E.runWhen(n)===!1||(l=l&&E.synchronous,s.unshift(E.fulfilled,E.rejected))});const c=[];this.interceptors.response.forEach(function(E){c.push(E.fulfilled,E.rejected)});let d,m=0,g;if(!l){const y=[xs.bind(this),void 0];for(y.unshift.apply(y,s),y.push.apply(y,c),g=y.length,d=Promise.resolve(n);m<g;)d=d.then(y[m++],y[m++]);return d}g=s.length;let v=n;for(m=0;m<g;){const y=s[m++],E=s[m++];try{v=y(v)}catch(b){E.call(this,b);break}}try{d=xs.call(this,v)}catch(y){return Promise.reject(y)}for(m=0,g=c.length;m<g;)d=d.then(c[m++],c[m++]);return d}getUri(t){t=D0(this.defaults,t);const n=a8(t.baseURL,t.url);return i8(n,t.params,t.paramsSerializer)}}L.forEach(["delete","get","head","options"],function(t){vr.prototype[t]=function(n,u){return this.request(D0(u||{},{method:t,url:n,data:(u||{}).data}))}});L.forEach(["post","put","patch"],function(t){function n(u){return function(i,o,s){return this.request(D0(s||{},{method:t,headers:u?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}vr.prototype[t]=n(),vr.prototype[t+"Form"]=n(!0)});var Hu=vr;class E2{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const u=this;this.promise.then(r=>{if(!u._listeners)return;let i=u._listeners.length;for(;i-- >0;)u._listeners[i](r);u._listeners=null}),this.promise.then=r=>{let i;const o=new Promise(s=>{u.subscribe(s),i=s}).then(r);return o.cancel=function(){u.unsubscribe(i)},o},t(function(i,o,s){u.reason||(u.reason=new Wn(i,o,s),n(u.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new E2(function(r){t=r}),cancel:t}}}var _f=E2;function qf(e){return function(n){return e.apply(null,n)}}function Gf(e){return L.isObject(e)&&e.isAxiosError===!0}const ui={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ui).forEach(([e,t])=>{ui[t]=e});var Kf=ui;function d8(e){const t=new Hu(e),n=_5(Hu.prototype.request,t);return L.extend(n,Hu.prototype,t,{allOwnKeys:!0}),L.extend(n,t,null,{allOwnKeys:!0}),n.create=function(r){return d8(D0(e,r))},n}const fe=d8(v2);fe.Axios=Hu;fe.CanceledError=Wn;fe.CancelToken=_f;fe.isCancel=l8;fe.VERSION=c8;fe.toFormData=Xr;fe.AxiosError=H;fe.Cancel=fe.CanceledError;fe.all=function(t){return Promise.all(t)};fe.spread=qf;fe.isAxiosError=Gf;fe.mergeConfig=D0;fe.AxiosHeaders=Tt;fe.formToJSON=e=>s8(L.isHTMLForm(e)?new FormData(e):e);fe.HttpStatusCode=Kf;fe.default=fe;var ht=fe;const Xf="https://big-lapa-api-production.up.railway.app/api/images/",p8=e=>ht.get(Xf+e,{responseType:"arraybuffer"}).then(t=>{console.log("fetched partner img",{id:e});const n=new Uint8Array(t.data),r=`data:image/png;base64, ${btoa(n.reduce((i,o)=>i+String.fromCharCode(o),""))}`;return{id:e,src:r,encodedBase64:r}});function O0({category:e,state:t,setState:n}){const[u,r]=p.exports.useState([]),[i,o]=p.exports.useState({pending:!1,resolve:!1,reject:!1,massage:""});if(p.exports.useEffect(()=>{if(e==="contacts"&&(console.log("contacts api called"),(async l=>{const d=await(await fetch("https://big-lapa-api-production.up.railway.app/api/main/get")).json();l(d)})(n)),e==="dogs"){console.log("dogs api called");const s=async c=>{c(Mp)},l=window.setTimeout(()=>{s(n)},1e3);return()=>window.clearTimeout(l)}e==="partners"&&(console.log("partners api called"),(async()=>{const c=await(await fetch("https://big-lapa-api-production.up.railway.app/api/images/category/Logo")).json();r(c)})())},[]),p.exports.useEffect(()=>{e==="partners"&&u.length&&!i.pending&&(console.log("useEffect: [partnersID] called",u.length),Promise.all(u.map(s=>p8(s))).then(s=>{console.log({resolved:s}),n(s),o({...i,pending:!1,resolve:!0,massage:"\u041B\u043E\u0433\u043E \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0456\u0432 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u0456"})}).catch(s=>{console.log(s),o({...i,pending:!1,reject:!0,massage:s})}),o({...i,pending:!0,resolve:!0}))},[u]),e==="contacts"||e==="dogs")return t;if(e==="partners")return i}const Jf=e=>p.exports.createElement("svg",{width:26,height:44,viewBox:"0 0 26 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M24 2H18C15.3478 2 12.8043 3.05357 10.9289 4.92893C9.05357 6.8043 8 9.34784 8 12V18H2V26H8V42H16V26H22L24 18H16V12C16 11.4696 16.2107 10.9609 16.5858 10.5858C16.9609 10.2107 17.4696 10 18 10H24V2Z",stroke:"#F9F9F9",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})),Yf=e=>p.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M11.6 0H28.4C34.8 0 40 5.2 40 11.6V28.4C40 31.4765 38.7779 34.427 36.6024 36.6024C34.427 38.7779 31.4765 40 28.4 40H11.6C5.2 40 0 34.8 0 28.4V11.6C0 8.52349 1.22214 5.57298 3.39756 3.39756C5.57298 1.22214 8.52349 0 11.6 0ZM11.2 4C9.29044 4 7.45909 4.75857 6.10883 6.10883C4.75857 7.45909 4 9.29044 4 11.2V28.8C4 32.78 7.22 36 11.2 36H28.8C30.7096 36 32.5409 35.2414 33.8912 33.8912C35.2414 32.5409 36 30.7096 36 28.8V11.2C36 7.22 32.78 4 28.8 4H11.2ZM30.5 7C31.163 7 31.7989 7.26339 32.2678 7.73223C32.7366 8.20107 33 8.83696 33 9.5C33 10.163 32.7366 10.7989 32.2678 11.2678C31.7989 11.7366 31.163 12 30.5 12C29.837 12 29.2011 11.7366 28.7322 11.2678C28.2634 10.7989 28 10.163 28 9.5C28 8.83696 28.2634 8.20107 28.7322 7.73223C29.2011 7.26339 29.837 7 30.5 7ZM20 10C22.6522 10 25.1957 11.0536 27.0711 12.9289C28.9464 14.8043 30 17.3478 30 20C30 22.6522 28.9464 25.1957 27.0711 27.0711C25.1957 28.9464 22.6522 30 20 30C17.3478 30 14.8043 28.9464 12.9289 27.0711C11.0536 25.1957 10 22.6522 10 20C10 17.3478 11.0536 14.8043 12.9289 12.9289C14.8043 11.0536 17.3478 10 20 10ZM20 14C18.4087 14 16.8826 14.6321 15.7574 15.7574C14.6321 16.8826 14 18.4087 14 20C14 21.5913 14.6321 23.1174 15.7574 24.2426C16.8826 25.3679 18.4087 26 20 26C21.5913 26 23.1174 25.3679 24.2426 24.2426C25.3679 23.1174 26 21.5913 26 20C26 18.4087 25.3679 16.8826 24.2426 15.7574C23.1174 14.6321 21.5913 14 20 14Z",fill:"#F9F9F9"})),eh=x.footer`
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
`,th=x.div`
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
`,nh=x.ul`
  /* @media (max-width: 767px) {
    margin-top: 18%;
    margin-bottom: 18%;
  } */
`,Q4=x.li`
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
`,j1=x.a`
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
`,uh=x.ul`
  /* @media (max-width: 767px) {
    margin-bottom: 18%;
  } */
`,_0=x.li`
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
`,H1=x.p`
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
`,rh=x.ul`
  display: flex;
  gap: 24px;
`,ws=x.a`
  &:hover svg {
    transition: ${({theme:e})=>e.transitions.long};
    stroke: ${({theme:e})=>e.colors.yellow};
  }
`,ih=x(Jf)`
  &:hover path {
    stroke: ${({theme:e})=>e.colors.yellow};
  }
`,oh=x(Yf)`
  &:hover path {
    fill: ${({theme:e})=>e.colors.yellow};
  }
`,sh=x.p`
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
`,lh=e=>p.exports.createElement("svg",{width:140,height:105,viewBox:"0 0 140 105",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M24.5855 16.0074C24.5855 18.5465 23.9536 20.8649 22.69 22.9624C21.4263 25.0231 19.7353 26.7526 17.6168 28.151C18.7318 28.3718 19.6981 28.7581 20.5158 29.3101C21.3334 29.8253 22.0024 30.4693 22.5227 31.242C23.0802 32.0148 23.4891 32.898 23.7492 33.8915C24.0466 34.8483 24.1952 35.8603 24.1952 36.9274C24.1952 39.0249 23.6935 40.8649 22.69 42.4472C21.7237 43.9927 20.46 45.2807 18.899 46.311C17.338 47.3046 15.5912 48.059 13.6586 48.5742C11.7631 49.0525 9.86764 49.2917 7.97216 49.2917C6.9315 49.2917 5.89085 49.2181 4.85019 49.0709C3.80954 48.9237 2.82463 48.6661 1.89548 48.2982C1.56098 48.1878 1.28223 47.7462 1.05924 46.9734C0.83624 46.1638 0.650409 45.1887 0.501744 44.0479C0.390246 42.9072 0.29733 41.6744 0.222997 40.3497C0.148665 39.0249 0.0929156 37.7554 0.0557493 36.541C0.0185831 35.3267 0 34.2595 0 33.3396C0 32.4196 0 31.7756 0 31.4076C0 30.1197 0 28.8317 0 27.5438C0 26.219 0.0371662 24.9127 0.111499 23.6247C0.111499 23.2935 0.111499 22.7784 0.111499 22.0792C0.148665 21.38 0.167248 20.6073 0.167248 19.7609C0.204414 18.8777 0.24158 17.9578 0.278747 17.001C0.353079 16.0442 0.427412 15.1611 0.501744 14.3515C0.613243 13.5051 0.743324 12.7876 0.891989 12.1988C1.07782 11.61 1.28224 11.242 1.50523 11.0948C2.36006 10.5429 3.3078 10.0277 4.34845 9.54929C5.3891 9.03411 6.46693 8.59254 7.58191 8.22455C8.6969 7.85656 9.81189 7.56217 10.9269 7.34138C12.0419 7.12059 13.1011 7.0102 14.1046 7.0102C15.4797 7.0102 16.7991 7.21258 18.0628 7.61736C19.3636 7.98535 20.4786 8.55574 21.4078 9.32851C22.3741 10.1013 23.136 11.058 23.6935 12.1988C24.2881 13.3028 24.5855 14.5723 24.5855 16.0074ZM15.3311 18.9329C15.3311 18.3073 15.1267 17.8474 14.7178 17.553C14.3462 17.2586 13.8444 17.1114 13.2126 17.1114C12.6923 17.1114 12.1348 17.2218 11.5401 17.4426C10.9826 17.6634 10.4995 17.9578 10.0906 18.3257C9.97913 18.4361 9.86764 18.7489 9.75614 19.2641C9.68181 19.7793 9.60747 20.3681 9.53314 21.0304C9.49598 21.656 9.45881 22.2632 9.42164 22.852C9.42164 23.4039 9.42164 23.7719 9.42164 23.9559C9.42164 24.0295 9.42164 24.1583 9.42164 24.3423C9.42164 24.4895 9.42164 24.6551 9.42164 24.8391C9.45881 25.0231 9.49598 25.1887 9.53314 25.3359C9.57031 25.4831 9.62605 25.5567 9.70039 25.5567C10.3322 25.5567 10.9826 25.3359 11.6516 24.8943C12.3206 24.4159 12.9153 23.8455 13.4356 23.1832C13.9931 22.484 14.4391 21.748 14.7736 20.9752C15.1452 20.2025 15.3311 19.5217 15.3311 18.9329ZM15.1081 34.8851C15.1081 34.2595 14.8851 33.8179 14.4391 33.5603C13.9931 33.3027 13.4913 33.174 12.9339 33.174C12.4135 33.174 11.856 33.3027 11.2614 33.5603C10.7039 33.7811 10.2393 34.0571 9.86763 34.3883C9.75614 34.4619 9.66322 34.6459 9.58889 34.9403C9.55172 35.2347 9.51456 35.5659 9.47739 35.9339C9.47739 36.265 9.45881 36.5962 9.42164 36.9274C9.42164 37.2218 9.42164 37.4242 9.42164 37.5346C9.42164 37.6082 9.42164 37.7554 9.42164 37.9762C9.42164 38.197 9.42164 38.4362 9.42164 38.6937C9.45881 38.9145 9.49598 39.1353 9.53314 39.3561C9.60747 39.5401 9.68181 39.6321 9.75614 39.6321C10.2765 39.6321 10.8525 39.4849 11.4844 39.1905C12.1162 38.8961 12.6923 38.5281 13.2126 38.0866C13.7701 37.645 14.2161 37.1482 14.5506 36.5962C14.9222 36.0074 15.1081 35.4371 15.1081 34.8851Z",fill:"#F9F9F9"}),p.exports.createElement("path",{d:"M46.3835 11.15C46.3835 11.8492 46.2162 12.4748 45.8817 13.0268C45.5844 13.5787 45.1756 14.0571 44.6552 14.4619C44.1349 14.8299 43.5588 15.1427 42.927 15.4003C42.2952 15.6578 41.6819 15.8418 41.0873 15.9522C41.0129 20.1105 40.8457 24.1215 40.5855 27.9854C40.3625 31.8492 39.9909 35.8418 39.4705 39.9633H39.805C40.3997 39.9633 40.9758 40.0369 41.5333 40.1841C42.1279 40.2945 42.6483 40.5153 43.0943 40.8465C43.5774 41.1408 43.9491 41.5272 44.2092 42.0056C44.5066 42.4472 44.6552 42.9992 44.6552 43.6615C44.6552 44.5079 44.3765 45.2439 43.819 45.8695C43.2987 46.495 42.5925 47.0286 41.7005 47.4702C40.8457 47.9118 39.8794 48.2798 38.8015 48.5742C37.7237 48.8685 36.6459 49.0893 35.5681 49.2365C34.4903 49.4205 33.4682 49.5493 32.5019 49.6229C31.5355 49.6965 30.7551 49.7333 30.1604 49.7333C29.7144 49.7333 29.1569 49.7149 28.4879 49.6781C27.8561 49.6413 27.2428 49.5309 26.6482 49.3469C26.0907 49.1629 25.6075 48.8869 25.1987 48.519C24.7899 48.151 24.5855 47.6542 24.5855 47.0286C24.5855 46.2559 24.7527 45.5751 25.0872 44.9863C25.3845 44.3607 25.7934 43.8087 26.3137 43.3304C26.834 42.852 27.4101 42.4656 28.0419 42.1712C28.7109 41.8768 29.3799 41.656 30.0489 41.5088C30.3091 39.4849 30.5506 37.4794 30.7736 35.4923C30.9966 33.4683 31.1453 31.426 31.2196 29.3653C31.294 27.2678 31.3683 25.2071 31.4426 23.1832C31.517 21.1224 31.5913 19.0617 31.6656 17.001C31.4055 17.0378 31.1639 17.0746 30.9409 17.1114C30.7179 17.1114 30.5135 17.1114 30.3276 17.1114C29.8073 17.1114 29.2498 17.0562 28.6552 16.9458C28.0605 16.8354 27.503 16.6514 26.9827 16.3938C26.4624 16.0994 26.0164 15.7498 25.6447 15.3451C25.3102 14.9403 25.143 14.4251 25.143 13.7995C25.143 12.5484 25.6633 11.518 26.7039 10.7084C27.7818 9.89888 29.0454 9.27331 30.4949 8.83172C31.9815 8.39014 33.4868 8.09576 35.0106 7.94856C36.5344 7.76457 37.7609 7.67256 38.69 7.67256C39.2104 7.67256 39.898 7.70937 40.7528 7.78297C41.6076 7.85657 42.4438 8.02215 43.2615 8.27974C44.1163 8.53733 44.8411 8.88692 45.4357 9.32851C46.0676 9.77009 46.3835 10.3773 46.3835 11.15Z",fill:"#F9F9F9"}),p.exports.createElement("path",{d:"M72.1397 35.3819C71.8052 37.0378 71.2663 38.7673 70.5229 40.5705C69.8168 42.3368 68.8876 43.9559 67.7355 45.4279C66.6205 46.8998 65.2825 48.0958 63.7215 49.0157C62.1605 49.9725 60.3766 50.4509 58.3696 50.4509C56.8829 50.4509 55.5449 50.1565 54.3556 49.5677C53.1663 48.9789 52.0885 48.1878 51.1222 47.1942C50.1558 46.2006 49.3196 45.0599 48.6134 43.7719C47.9073 42.484 47.3126 41.1592 46.8295 39.7977C46.3835 38.3994 46.049 37.0194 45.826 35.6579C45.603 34.2963 45.4915 33.0268 45.4915 31.8492C45.4915 30.1933 45.6401 28.427 45.9375 26.5502C46.272 24.6367 46.7551 22.76 47.387 20.9201C48.0188 19.0433 48.8178 17.2586 49.7842 15.5659C50.7505 13.8363 51.8841 12.3276 53.1849 11.0396C54.5229 9.71489 56.0095 8.66613 57.6448 7.89336C59.3173 7.08379 61.1756 6.679 63.2198 6.679C64.5206 6.679 65.7285 6.93659 66.8435 7.45177C67.9585 7.93015 68.9248 8.59253 69.7424 9.4389C70.5601 10.2485 71.1919 11.2236 71.6379 12.3644C72.1211 13.5051 72.3627 14.7011 72.3627 15.9522V16.449C72.3627 17.1114 72.3255 17.9394 72.2512 18.9329C72.214 19.8897 72.0467 20.8097 71.7494 21.6928C71.4521 22.576 71.0061 23.3487 70.4114 24.0111C69.8168 24.6367 68.9805 24.9495 67.9027 24.9495C66.6019 24.9495 65.617 24.6551 64.948 24.0663C64.279 23.4775 63.9445 22.5024 63.9445 21.1408C63.9445 20.6257 63.9631 20.1105 64.0003 19.5953C64.0374 19.0801 64.056 18.5649 64.056 18.0498C64.056 17.277 63.9259 16.6882 63.6658 16.2834C63.4056 15.8418 62.8667 15.6211 62.049 15.6211C61.1199 15.6211 60.2836 15.9154 59.5403 16.5042C58.797 17.093 58.1466 17.8658 57.5891 18.8225C57.0316 19.7793 56.5484 20.8648 56.1396 22.0792C55.7308 23.2936 55.3963 24.5263 55.1361 25.7775C54.8759 26.9918 54.6901 28.1694 54.5786 29.3101C54.4671 30.4509 54.4114 31.426 54.4114 32.2356C54.4114 32.898 54.4485 33.6707 54.5229 34.5539C54.5972 35.4003 54.7459 36.2282 54.9689 37.0378C55.229 37.8106 55.6007 38.4729 56.0839 39.0249C56.567 39.5769 57.1988 39.8529 57.9793 39.8529C59.3173 39.8529 60.3951 39.4481 61.2128 38.6385C62.0305 37.7922 62.5879 36.725 62.8853 35.4371C62.3649 35.3635 61.8446 35.2531 61.3243 35.1059C60.8411 34.9219 60.3766 34.6827 59.9306 34.3883C59.5217 34.0571 59.1872 33.6707 58.9271 33.2292C58.6669 32.7508 58.5368 32.1988 58.5368 31.5732C58.5368 30.4325 58.9271 29.5493 59.7076 28.9237C60.4881 28.2614 61.3986 27.7646 62.4393 27.4334C63.5171 27.1022 64.6135 26.8998 65.7285 26.8262C66.8435 26.7158 67.7355 26.6606 68.4045 26.6606C68.8876 26.6606 69.5938 26.6974 70.5229 26.771C71.4521 26.8446 72.3627 27.0102 73.2547 27.2678C74.1838 27.4886 74.9829 27.8198 75.6519 28.2614C76.3209 28.7029 76.6554 29.2733 76.6554 29.9725C76.6554 31.3708 76.2651 32.5852 75.4846 33.6155C74.7413 34.6091 73.6263 35.1979 72.1397 35.3819Z",fill:"#F9F9F9"}),p.exports.createElement("path",{d:"M26.5367 95.6164C26.5367 96.5363 26.1465 97.4011 25.366 98.2107C24.6226 99.0202 23.6377 99.7562 22.4113 100.419C21.2219 101.081 19.8839 101.67 18.3973 102.185C16.9106 102.663 15.4426 103.068 13.9931 103.399C12.5436 103.767 11.1685 104.043 9.86763 104.227C8.60398 104.411 7.6005 104.503 6.85717 104.503C6.15101 104.503 5.38911 104.43 4.57145 104.282C3.79096 104.172 3.14056 103.896 2.62023 103.454C2.3229 103.234 2.06273 102.737 1.83974 101.964C1.61674 101.191 1.39374 100.271 1.17074 99.2042C0.984909 98.1371 0.817662 96.9963 0.668997 95.782C0.520332 94.5308 0.390246 93.3165 0.278747 92.1389C0.204415 90.9614 0.130092 89.8758 0.0557596 88.8822C0.0185934 87.8887 0 87.1159 0 86.5639C0 85.644 0.0185934 84.54 0.0557596 83.2521C0.130092 81.9273 0.223 80.529 0.334499 79.057C0.445997 77.5483 0.59466 76.0211 0.780491 74.4756C0.966322 72.9301 1.17074 71.4765 1.39374 70.115C1.6539 68.7166 1.95123 67.4655 2.28572 66.3615C2.65738 65.2576 3.04764 64.3928 3.45647 63.7672C4.16263 62.7737 5.05461 62.2769 6.13243 62.2769C6.87576 62.2769 7.50759 62.5345 8.02791 63.0497C8.54824 63.528 8.95707 64.172 9.2544 64.9816C9.58889 65.7544 9.83048 66.6375 9.97915 67.6311C10.165 68.5878 10.2951 69.5446 10.3694 70.5014C10.4437 71.4581 10.4809 72.3413 10.4809 73.1509C10.4809 73.9604 10.4809 74.6044 10.4809 75.0828C10.4809 77.9531 10.4065 80.805 10.2579 83.6385C10.1464 86.4352 10.0906 89.2686 10.0906 92.1389V94.2916C11.7631 93.7765 13.5843 93.2981 15.5541 92.8565C17.5239 92.3781 19.4008 92.1389 21.1848 92.1389C21.8166 92.1389 22.4484 92.1757 23.0802 92.2493C23.7492 92.3229 24.3253 92.4885 24.8085 92.7461C25.3288 92.9669 25.7376 93.3165 26.035 93.7948C26.3695 94.2364 26.5367 94.8436 26.5367 95.6164Z",fill:"#F9F9F9"}),p.exports.createElement("path",{d:"M56.0839 95.0644C56.0839 95.8004 56.0095 96.6835 55.8609 97.7139C55.7494 98.7442 55.5078 99.7378 55.1361 100.695C54.7645 101.615 54.2627 102.406 53.6309 103.068C52.9991 103.694 52.1628 104.006 51.1222 104.006C49.747 104.006 48.7064 103.51 48.0002 102.516C47.3312 101.523 46.8481 100.345 46.5507 98.9834C46.2534 97.5851 46.0676 96.1683 45.9932 94.7332C45.9561 93.2981 45.9189 92.1573 45.8817 91.3109C43.2058 91.7525 40.567 92.1389 37.9653 92.4701C37.891 93.3165 37.7237 94.3652 37.4636 95.6164C37.2406 96.8675 36.8689 98.0819 36.3486 99.2594C35.8654 100.4 35.215 101.394 34.3974 102.24C33.6169 103.086 32.6505 103.51 31.4984 103.51C30.6064 103.51 29.9002 103.197 29.3799 102.571C28.8968 101.909 28.5251 101.136 28.2649 100.253C28.0048 99.3698 27.8375 98.4683 27.7632 97.5483C27.726 96.5915 27.7074 95.8004 27.7074 95.1748C27.7074 93.0773 27.8747 91.0166 28.2092 88.9926C28.5437 86.9319 28.9339 84.8896 29.3799 82.8657C29.6029 81.7985 29.9002 80.5474 30.2719 79.1122C30.6436 77.6771 31.0896 76.2051 31.6099 74.6964C32.1674 73.1509 32.7992 71.6421 33.5054 70.1702C34.2487 68.6614 35.0849 67.3183 36.0141 66.1407C36.9432 64.9632 38.0025 64.0064 39.1918 63.2705C40.3811 62.5345 41.7005 62.1665 43.15 62.1665C44.5623 62.1665 45.7888 62.4793 46.8295 63.1049C47.8701 63.7304 48.7807 64.5584 49.5612 65.5888C50.3417 66.6191 50.9921 67.7967 51.5124 69.1214C52.0328 70.4094 52.4601 71.7341 52.7946 73.0957C53.1663 74.4204 53.4636 75.7268 53.6866 77.0147C53.9468 78.3027 54.1698 79.4434 54.3556 80.437C54.8388 82.8289 55.2476 85.2576 55.5821 87.7231C55.9166 90.1518 56.0839 92.5989 56.0839 95.0644ZM45.3242 81.6513C45.3242 81.2097 45.2871 80.4922 45.2127 79.4986C45.1756 78.4682 45.0641 77.4563 44.8782 76.4627C44.6924 75.4324 44.3951 74.5308 43.9862 73.758C43.6146 72.9485 43.0943 72.5437 42.4253 72.5437C42.0536 72.5437 41.7005 72.8013 41.366 73.3165C41.0315 73.7948 40.7342 74.4204 40.474 75.1932C40.2139 75.9291 39.9723 76.7571 39.7493 77.6771C39.5635 78.597 39.3962 79.4802 39.2476 80.3266C39.0989 81.173 38.9874 81.9457 38.9131 82.6449C38.8387 83.3073 38.783 83.7856 38.7458 84.08C40.9758 83.896 43.1686 83.62 45.3242 83.2521V81.6513Z",fill:"#F9F9F9"}),p.exports.createElement("path",{d:"M85.5753 73.6476C85.5753 75.6348 85.1293 77.5851 84.2373 79.4986C83.3824 81.4121 82.2303 83.1417 80.7808 84.6872C79.3313 86.1959 77.6774 87.4471 75.8191 88.4406C73.9608 89.3974 72.0467 89.931 70.0769 90.0414C70.0398 90.7038 70.0026 91.5501 69.9655 92.5805C69.9655 93.5741 69.9097 94.6228 69.7982 95.7268C69.6867 96.8307 69.5194 97.9347 69.2965 99.0386C69.1106 100.143 68.8133 101.136 68.4045 102.019C68.0328 102.902 67.531 103.62 66.8992 104.172C66.3046 104.724 65.5612 105 64.6693 105C63.6286 105 62.7924 104.65 62.1605 103.951C61.5659 103.289 61.1013 102.479 60.7668 101.523C60.4695 100.566 60.265 99.5722 60.1535 98.5419C60.0421 97.4747 59.9677 96.5731 59.9306 95.8371C59.8562 94.77 59.8005 93.7212 59.7633 92.6909C59.7633 91.6605 59.7633 90.6118 59.7633 89.5446C59.7633 89.0662 59.7633 88.1831 59.7633 86.8951C59.7633 85.5704 59.7633 84.08 59.7633 82.4241C59.8005 80.7314 59.8376 78.9834 59.8748 77.1803C59.912 75.3404 59.9677 73.6476 60.0421 72.1021C60.1164 70.5198 60.1907 69.1766 60.2651 68.0727C60.3766 66.9687 60.5066 66.3247 60.6553 66.1407C60.6925 66.1039 60.804 66.0303 60.9898 65.92C61.1756 65.7728 61.3801 65.644 61.6031 65.5336C61.826 65.3864 62.0304 65.2576 62.2163 65.1472C62.4021 65.0368 62.5322 64.9632 62.6065 64.9264C64.3162 63.9696 66.1931 63.1417 68.2372 62.4425C70.2814 61.7433 72.3069 61.3937 74.3139 61.3937C76.0235 61.3937 77.5659 61.7433 78.9411 62.4425C80.3534 63.1049 81.5427 64.0064 82.509 65.1472C83.5125 66.2511 84.2744 67.5575 84.7948 69.0662C85.3151 70.5382 85.5753 72.0653 85.5753 73.6476ZM75.9306 74.9172C75.9306 74.1812 75.7448 73.5372 75.3731 72.9853C75.0386 72.4333 74.4625 72.1573 73.6449 72.1573C72.9387 72.1573 72.2326 72.3045 71.5264 72.5989C70.8203 72.8565 70.1699 73.1325 69.5752 73.4269C69.6867 74.7148 69.7796 75.966 69.854 77.1803C69.9654 78.3947 69.984 79.6458 69.9097 80.9337C70.5044 80.6394 71.1548 80.3082 71.8609 79.9402C72.5671 79.5354 73.2175 79.0938 73.8121 78.6154C74.4068 78.1371 74.9086 77.6035 75.3174 77.0147C75.7262 76.3891 75.9306 75.69 75.9306 74.9172Z",fill:"#F9F9F9"}),p.exports.createElement("path",{d:"M113.952 95.0644C113.952 95.8004 113.877 96.6835 113.729 97.7139C113.617 98.7442 113.376 99.7378 113.004 100.695C112.632 101.615 112.131 102.406 111.499 103.068C110.867 103.694 110.031 104.006 108.99 104.006C107.615 104.006 106.574 103.51 105.868 102.516C105.199 101.523 104.716 100.345 104.419 98.9834C104.121 97.5851 103.935 96.1683 103.861 94.7332C103.824 93.2981 103.787 92.1573 103.75 91.3109C101.074 91.7525 98.4348 92.1389 95.8331 92.4701C95.7588 93.3165 95.5916 94.3652 95.3314 95.6164C95.1084 96.8675 94.7367 98.0819 94.2164 99.2594C93.7332 100.4 93.0828 101.394 92.2652 102.24C91.4847 103.086 90.5184 103.51 89.3662 103.51C88.4742 103.51 87.7681 103.197 87.2477 102.571C86.7646 101.909 86.3929 101.136 86.1328 100.253C85.8726 99.3698 85.7053 98.4683 85.631 97.5483C85.5938 96.5915 85.5753 95.8004 85.5753 95.1748C85.5753 93.0773 85.7425 91.0166 86.077 88.9926C86.4115 86.9319 86.8017 84.8896 87.2477 82.8657C87.4707 81.7985 87.7681 80.5474 88.1397 79.1122C88.5114 77.6771 88.9574 76.2051 89.4777 74.6964C90.0352 73.1509 90.667 71.6421 91.3732 70.1702C92.1165 68.6614 92.9527 67.3183 93.8819 66.1407C94.8111 64.9632 95.8703 64.0064 97.0596 63.2705C98.2489 62.5345 99.5684 62.1665 101.018 62.1665C102.43 62.1665 103.657 62.4793 104.697 63.1049C105.738 63.7304 106.649 64.5584 107.429 65.5888C108.21 66.6191 108.86 67.7967 109.38 69.1214C109.901 70.4094 110.328 71.7341 110.662 73.0957C111.034 74.4204 111.331 75.7268 111.554 77.0147C111.815 78.3027 112.038 79.4434 112.223 80.437C112.707 82.8289 113.115 85.2576 113.45 87.7231C113.784 90.1518 113.952 92.5989 113.952 95.0644ZM103.192 81.6513C103.192 81.2097 103.155 80.4922 103.081 79.4986C103.043 78.4682 102.932 77.4563 102.746 76.4627C102.56 75.4324 102.263 74.5308 101.854 73.758C101.482 72.9485 100.962 72.5437 100.293 72.5437C99.9214 72.5437 99.5684 72.8013 99.2339 73.3165C98.8994 73.7948 98.602 74.4204 98.3419 75.1932C98.0817 75.9291 97.8401 76.7571 97.6172 77.6771C97.4313 78.597 97.264 79.4802 97.1154 80.3266C96.9667 81.173 96.8552 81.9457 96.7809 82.6449C96.7065 83.3073 96.6508 83.7856 96.6136 84.08C98.8436 83.896 101.036 83.62 103.192 83.2521V81.6513Z",fill:"#F9F9F9"}),p.exports.createElement("path",{d:"M125.304 2.40361C117.334 1.36977 115.225 17.9105 122.808 18.897C130.263 19.868 133.145 3.42192 125.304 2.40361ZM110.017 0.0586003C109.898 0.0407156 109.78 0.0303541 109.657 0.019918C101.652 -0.65376 100.437 15.9812 108.054 16.625C115.425 17.249 117.467 1.19402 110.017 0.0586003ZM96.1722 9.80112C95.9378 9.75794 95.7007 9.73099 95.4625 9.72047C87.4425 9.36419 87.013 26.0542 94.6442 26.3961C101.912 26.7224 103.268 11.0974 96.1722 9.80112ZM135.793 16.7673C127.898 15.269 124.632 31.6212 132.144 33.0499C139.528 34.455 143.561 18.2426 135.793 16.7673ZM113.506 22.7128C105.36 21.5032 110.179 30.8783 94.9925 33.2538C83.2219 35.0947 87.9909 47.5169 97.5008 49.1824C102.72 50.0968 105.296 46.3328 109.569 47.0821C114.421 47.9322 114.171 51.661 121.272 52.9052C130.34 54.4931 137.569 44.0519 127.859 38.4261C115.496 31.2634 122.404 24.3192 113.906 22.7814C113.77 22.757 113.635 22.732 113.506 22.7128Z",fill:"#F9F9F9"})),Es=e=>p.exports.createElement("svg",{width:22,height:22,viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M20.9999 15.9201V18.9201C21.0011 19.1986 20.944 19.4743 20.8324 19.7294C20.7209 19.9846 20.5572 20.2137 20.352 20.402C20.1468 20.5902 19.9045 20.7336 19.6407 20.8228C19.3769 20.912 19.0973 20.9452 18.8199 20.9201C15.7428 20.5857 12.7869 19.5342 10.1899 17.8501C7.77376 16.3148 5.72527 14.2663 4.18993 11.8501C2.49991 9.2413 1.44818 6.27109 1.11993 3.1801C1.09494 2.90356 1.12781 2.62486 1.21643 2.36172C1.30506 2.09859 1.4475 1.85679 1.6347 1.65172C1.82189 1.44665 2.04974 1.28281 2.30372 1.17062C2.55771 1.05843 2.83227 1.00036 3.10993 1.0001H6.10993C6.59524 0.995321 7.06572 1.16718 7.43369 1.48363C7.80166 1.80008 8.04201 2.23954 8.10993 2.7201C8.23656 3.68016 8.47138 4.62282 8.80993 5.5301C8.94448 5.88802 8.9736 6.27701 8.89384 6.65098C8.81408 7.02494 8.6288 7.36821 8.35993 7.6401L7.08993 8.9101C8.51349 11.4136 10.5864 13.4865 13.0899 14.9101L14.3599 13.6401C14.6318 13.3712 14.9751 13.1859 15.3491 13.1062C15.723 13.0264 16.112 13.0556 16.4699 13.1901C17.3772 13.5286 18.3199 13.7635 19.2799 13.8901C19.7657 13.9586 20.2093 14.2033 20.5265 14.5776C20.8436 14.9519 21.0121 15.4297 20.9999 15.9201Z",stroke:"#F9F9F9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),ah=e=>p.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z",stroke:"#F9F9F9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),p.exports.createElement("path",{d:"M22 6L12 13L2 6",stroke:"#F9F9F9",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));function ch(){const[e,t]=p.exports.useState({email:"",first_phoneNumber:"",second_phoneNumber:""});return O0({category:"contacts",state:e,setState:t}),a(eh,{children:w(re,{children:[w(th,{color:M.colors.green,children:[a(lh,{}),w(nh,{children:[a(Q4,{children:a(pt,{to:"about",children:"\u041F\u0440\u043E \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A"})}),a(Q4,{children:a(pt,{to:"dogs",children:"\u041D\u0430\u0448\u0456 \u0445\u0432\u043E\u0441\u0442\u0438"})}),a(Q4,{children:a(j1,{href:"path/to/confdentiality/agreement",target:"_blank",children:"\u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456"})}),a(Q4,{children:a(j1,{href:"path/to/rules",target:"_blank",children:"\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442\u0456"})}),a(Q4,{children:a(j1,{href:"path/to/reports",target:"_blank",children:"\u0417\u0432\u0456\u0442\u043D\u0456\u0441\u0442\u044C"})})]}),w(uh,{children:[w(_0,{children:[a(Es,{}),a(H1,{children:a("a",{href:`tel:${e==null?void 0:e.first_phoneNumber}`,children:e==null?void 0:e.first_phoneNumber})})]}),w(_0,{children:[a(Es,{}),a(H1,{children:a("a",{href:`tel:${e==null?void 0:e.second_phoneNumber}`,children:e==null?void 0:e.second_phoneNumber})})]}),w(_0,{children:[a(ah,{}),a(H1,{children:a("a",{href:`mailto:${e==null?void 0:e.email}`,children:e==null?void 0:e.email})})]}),a(_0,{children:w(rh,{children:[a(Q4,{children:a(ws,{href:"path/to/insta",children:a(oh,{})})}),a(_0,{children:a(ws,{href:"path/to/fb",children:a(ih,{})})})]})})]})]}),a(sh,{children:"\u0420\u043E\u0437\u0440\u043E\u0431\u043A\u0430 Baza Trainee Ukraine 2023 \xA9 \u0423\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u0456"})]})})}const dh=x.div`
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

  ${({$scrolledToBottom:e})=>e&&Mt`
      margin-bottom: 100px;
    `}

  ${ae} {
    font-size: ${({theme:e})=>e.fontSizes.h3};
    padding: 24px;
  }

  @media (max-width: 767px) {
    padding: 20px 0;
    p {
      font-size: 0.75rem;
    }
  }
`;function ph(){const[e,t]=p.exports.useState(!localStorage.getItem("cookieAgreement")),[n,u]=p.exports.useState(!1),r=()=>{localStorage.setItem("cookieAgreement","true"),t(!1)};return p.exports.useEffect(()=>{const i=()=>{const o=window.innerHeight,s=document.documentElement.scrollHeight,l=window.scrollY;u(l+o>=s-100)};return window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[]),a(Ue,{children:e&&a(dh,{$scrolledToBottom:n,children:a(re,{children:w(de,{$align:"center",$justify:"space-between",$gap:"30px",children:[w("p",{children:["\u0426\u0435\u0439 \u0441\u0430\u0439\u0442 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \u0444\u0430\u0439\u043B\u0438 cookies \u0434\u043B\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0457 \u0440\u043E\u0431\u043E\u0442\u0438 \u0456 \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u0441\u0435\u0440\u0432\u0456\u0441\u0443. ",a("br",{}),"\u042F\u043A\u0449\u043E \u0432\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044C \u0437 \u0457\u0445\u043D\u0456\u043C \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F\u043C, \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u041E\u041A. \u0411\u0456\u043B\u044C\u0448\u0435 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u0432 \xA0",a("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/Dead-Reaven/Big-lapa",children:"\u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456."})]}),a(ae,{onClick:r,children:"OK"})]})})})})}function fh(){return w(Ue,{children:[a(Ei,{}),a(Pp,{}),a(kr,{}),a(ph,{}),a(ch,{})]})}const hh=x.div`
  color: ${({theme:e})=>e.colors.dark};
  margin-top: ${({theme:e})=>e.headerHeight};
`,Ne=x.h2`
  font-size: ${({theme:e})=>e.fontSizes.h2};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  margin-bottom: ${({$marginBottom:e})=>e||"45px"};

  @media (max-width: 1279px) {
    font-size: ${({theme:e})=>e.fontSizes.tabletH2};
  }

  @media (max-width: 767px) {
    font-size: ${({theme:e})=>e.fontSizes.mobileH2};
  }
`,ue=x.h3`
  font-size: ${({theme:e})=>e.fontSizes.h3};
  font-weight: ${({theme:e})=>e.fontWeights.semiBold};
  margin-bottom: ${({$marginBottom:e})=>e||"5px"};

  @media (max-width: 1279px) {
    font-size: ${({theme:e})=>e.fontSizes.tabletH3};
  }

  @media (max-width: 767px) {
    font-size: ${({theme:e})=>e.fontSizes.mobileH3};
  }
`,mh=x.section`
  padding: 105px 0 110px;

  @media (max-width: 1023px) {
    padding: 85px 0;
  }

  @media (max-width: 767px) {
    padding: 65px 0;
  }
`,Ch=x(Ne)`
  max-width: 624px;
  margin-bottom: 70px;

  @media (max-width: 1023px) {
    margin-bottom: 60px;
  }

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`,gh=x.div`
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
`,$1=x.div`
  &:nth-of-type(1) {
    grid-column: span 2;
  }
  img {
    height: 100%;
    width: 100%;
  }
`,xh=x.div`
  max-width: 1056px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 90px;
`,Z4=x.div`
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
`,yh=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,vh=x.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 25px;
`,wh=x(ue)`
  margin-bottom: 40px;
`;var Eh="/Big-lapa/assets/01.3b9dd8d2.png",Sh="/Big-lapa/assets/02.1d5755f4.png",kh="/Big-lapa/assets/03.49d74eb1.png";const _4=e=>p.exports.createElement("svg",{width:42,height:37,viewBox:"0 0 42 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M13.6998 0.500789C16.0598 0.160789 18.5598 2.74079 19.2798 6.30079C19.9998 9.84079 18.6998 13.0008 16.3398 13.3608C13.9998 13.7208 11.4798 11.1408 10.7398 7.58079C9.99981 4.04079 11.3398 0.880789 13.6998 0.500789ZM27.9998 0.500789C30.3798 0.880789 31.6998 4.04079 30.9998 7.58079C30.2398 11.1408 27.7398 13.7208 25.3798 13.3608C22.9998 13.0008 21.6998 9.84079 22.4398 6.30079C23.1598 2.74079 25.6598 0.160789 27.9998 0.500789ZM2.99981 9.70079C5.27981 8.72079 8.37981 10.5008 9.99981 13.6008C11.5198 16.7608 10.9998 20.0808 8.73981 21.0608C6.47981 22.0408 3.39981 20.2808 1.81981 17.1408C0.239813 14.0008 0.799813 10.6608 2.99981 9.70079ZM38.9998 9.70079C41.1998 10.6608 41.7598 14.0008 40.1798 17.1408C38.5998 20.2808 35.5198 22.0408 33.2598 21.0608C30.9998 20.0808 30.4798 16.7608 31.9998 13.6008C33.6198 10.5008 36.7198 8.72079 38.9998 9.70079ZM35.6598 31.2608C35.7398 33.1408 34.2998 35.2208 32.5798 36.0008C28.9998 37.6408 24.7598 34.2408 20.7798 34.2408C16.7998 34.2408 12.5198 37.7808 8.99981 36.0008C6.99981 35.0208 5.61981 32.4208 5.87981 30.2608C6.23981 27.2808 9.81981 25.6808 11.9398 23.5008C14.7598 20.6808 16.7598 15.3808 20.7798 15.3808C24.7798 15.3808 26.8998 20.6008 29.5998 23.5008C31.8198 25.9408 35.5198 28.0008 35.6598 31.2608Z",fill:"#758650"})),f8=e=>p.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),p.exports.createElement("path",{d:"M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));function Fh(){return a(mh,{children:w(re,{children:[a(Ch,{children:"\u041B\u0430\u0441\u043A\u0430\u0432\u043E \u043F\u0440\u043E\u0441\u0438\u043C\u043E \u0434\u043E Big Lapa - \u043F\u0440\u0438\u0442\u0443\u043B\u043A\u0443 \u0434\u043B\u044F \u0441\u043E\u0431\u0430\u043A!"}),w(gh,{children:[a($1,{children:a("img",{src:Eh,alt:"dogs"})}),a($1,{children:a("img",{src:Sh,alt:"dogs"})}),a($1,{children:a("img",{src:kh,alt:"dogs"})})]}),w(xh,{children:[w(Z4,{children:[a(_4,{}),a("span",{children:"\u041C\u0438 - \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0435\u043D\u0442\u0443\u0437\u0456\u0430\u0441\u0442\u0456\u0432, \u0449\u043E \u043F\u0440\u0438\u0441\u0432\u044F\u0442\u0438\u043B\u0438 \u0441\u0432\u043E\u0454 \u0436\u0438\u0442\u0442\u044F \u0434\u043E\u043F\u043E\u043C\u043E\u0437\u0456 \u0431\u0435\u0437\u043F\u0440\u0438\u0442\u0443\u043B\u044C\u043D\u0438\u043C \u0441\u043E\u0431\u0430\u043A\u0430\u043C. \u041D\u0430\u0448\u0430 \u043C\u0456\u0441\u0456\u044F \u043F\u043E\u043B\u044F\u0433\u0430\u0454 \u0432 \u0442\u043E\u043C\u0443, \u0449\u043E\u0431 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0442\u0438\u043C\u0447\u0430\u0441\u043E\u0432\u0438\u0439 \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A, \u043C\u0435\u0434\u0438\u0447\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434 \u0456 \u0448\u0430\u043D\u0441 \u043D\u0430 \u043D\u043E\u0432\u0435 \u0436\u0438\u0442\u0442\u044F \u0434\u043B\u044F \u0445\u0432\u043E\u0441\u0442\u0438\u043A\u0456\u0432, \u044F\u043A\u0456 \u043E\u043F\u0438\u043D\u0438\u043B\u0438\u0441\u044F \u043D\u0430 \u0432\u0443\u043B\u0438\u0446\u0456"})]}),w(Z4,{children:[a(_4,{}),a("p",{children:"\u0423 \u043D\u0430\u0441 \u0454 \u0434\u043E\u0441\u0432\u0456\u0434 \u0440\u043E\u0431\u043E\u0442\u0438 \u0437 \u0440\u0456\u0437\u043D\u0438\u043C\u0438 \u043F\u043E\u0440\u043E\u0434\u0430\u043C\u0438 \u0441\u043E\u0431\u0430\u043A. \u041C\u0438 \u0432\u0456\u0440\u0438\u043C\u043E, \u0449\u043E \u043A\u043E\u0436\u043D\u0438\u0439 \u0441\u043E\u0431\u0430\u043A\u0430 \u0437\u0430\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0454 \u043D\u0430\u0448\u043E\u0457 \u0443\u0432\u0430\u0433\u0438, \u043D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u043E \u0432\u0456\u0434 \u0439\u043E\u0433\u043E \u043C\u0438\u043D\u0443\u043B\u043E\u0433\u043E. \u041C\u0438 \u0434\u043E\u043A\u043B\u0430\u0434\u0430\u0454\u043C\u043E \u0432\u0441\u0456\u0445 \u0437\u0443\u0441\u0438\u043B\u044C, \u0449\u043E\u0431 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u043D\u0430\u0448\u0438\u043C \u0445\u0432\u043E\u0441\u0442\u0438\u043A\u0430\u043C \u0437\u0430\u0442\u0438\u0448\u043D\u0435 \u043C\u0456\u0441\u0446\u0435, \u044F\u043A\u0456\u0441\u043D\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F, \u0432\u0435\u0442\u0435\u0440\u0438\u043D\u0430\u0440\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434 \u0442\u0430 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u0456 \u043F\u0440\u043E\u0433\u0443\u043B\u044F\u043D\u043A\u0438"})]}),w(Z4,{children:[a(_4,{}),a("p",{children:"\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0432\u043E\u043B\u043E\u043D\u0442\u0435\u0440\u0456\u0432 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u044C \u0447\u0430\u0441 \u0437 \u043A\u043E\u0436\u043D\u0438\u043C \u0441\u043E\u0431\u0430\u043A\u043E\u044E, \u0434\u0430\u0440\u0443\u044E\u0447\u0438 \u0457\u043C \u043B\u044E\u0431\u043E\u0432 \u0442\u0430 \u0443\u0432\u0430\u0433\u0443. \u041C\u0438 \u0432\u0456\u0440\u0438\u043C\u043E, \u0449\u043E \u0441\u043E\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u0456 \u0432\u0437\u0430\u0454\u043C\u043E\u0434\u0456\u044F \u0437 \u043B\u044E\u0434\u044C\u043C\u0438 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u044E\u0442\u044C \u0441\u043E\u0431\u0430\u043A\u0430\u043C \u043F\u0456\u0434\u0433\u043E\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0434\u043E \u043D\u043E\u0432\u0438\u0445 \u0434\u043E\u043C\u0456\u0432\u043E\u043A \u0456 \u043F\u043E\u043A\u0440\u0430\u0449\u0443\u044E\u0442\u044C \u0457\u0445 \u0448\u0430\u043D\u0441\u0438 \u043D\u0430 \u0443\u0441\u043F\u0456\u0448\u043D\u0443 \u0430\u0434\u0430\u043F\u0442\u0430\u0446\u0456\u044E"})]}),w(Z4,{children:[a(_4,{}),a("p",{children:"\u042F\u043A\u0449\u043E \u0432\u0438 \u0437\u0430\u0446\u0456\u043A\u0430\u0432\u043B\u0435\u043D\u0456 \u0443 \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u0456 \u0441\u043E\u0431\u0430\u043A\u0438, \u043C\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0435\u043C\u043E \u0432\u0430\u043C \u0437\u043D\u0430\u0439\u0442\u0438 \u0441\u0430\u043C\u0435 \u0442\u043E\u0433\u043E, \u0445\u0442\u043E \u0441\u0442\u0430\u043D\u0435 \u0447\u0443\u0434\u043E\u0432\u0438\u043C \u043A\u043E\u043C\u043F\u0430\u043D\u044C\u0439\u043E\u043D\u043E\u043C \u0434\u043B\u044F \u0432\u0430\u0441 \u0456 \u0432\u0430\u0448\u043E\u0457 \u0440\u043E\u0434\u0438\u043D\u0438. \u041D\u0430\u0448\u0456 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0438 \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u043E \u043E\u0437\u043D\u0430\u0439\u043E\u043C\u043B\u044F\u0442\u044C \u0432\u0430\u0441 \u0437 \u043A\u043E\u0436\u043D\u0438\u043C \u0441\u043E\u0431\u0430\u043A\u043E\u044E, \u0457\u0445\u043D\u0456\u043C\u0438 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0430\u043C\u0438 \u0442\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u0430\u043C\u0438, \u0449\u043E\u0431 \u0432\u0438 \u043C\u043E\u0433\u043B\u0438 \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0432\u0438\u0431\u0456\u0440"})]}),w(Z4,{children:[a(_4,{}),a("p",{children:"\u0412\u0430\u0448\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 - \u0446\u0435 \u043A\u0440\u043E\u043A \u0434\u043E \u0449\u0430\u0441\u043B\u0438\u0432\u043E\u0433\u043E \u0436\u0438\u0442\u0442\u044F \u043A\u043E\u0436\u043D\u043E\u0457 \u0431\u0435\u0437\u043F\u0440\u0438\u0442\u0443\u043B\u044C\u043D\u043E\u0457 \u0441\u043E\u0431\u0430\u043A\u0438. \u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430, \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u044C\u043D\u0456 \u0440\u0435\u0441\u0443\u0440\u0441\u0438 \u0430\u0431\u043E \u0432\u0430\u0448\u0456 \u0432\u043B\u0430\u0441\u043D\u0456 \u043D\u0430\u0432\u0438\u0447\u043A\u0438 \u0456 \u0447\u0430\u0441 - \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0432\u043D\u0435\u0441\u043E\u043A \u043D\u0430\u043C \u0434\u0443\u0436\u0435 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454. \u0420\u0430\u0437\u043E\u043C \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0441\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u0440\u0430\u0449\u0435 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u0454 \u0434\u043B\u044F \u043D\u0430\u0448\u0438\u0445 \u0447\u043E\u0442\u0438\u0440\u0438\u043B\u0430\u043F\u0438\u0445 \u0434\u0440\u0443\u0437\u0456\u0432"})]}),w(Z4,{children:[a(_4,{}),a("p",{children:"\u041D\u0430 \u043D\u0430\u0448\u043E\u043C\u0443 \u0441\u0430\u0439\u0442\u0456 \u0432\u0438 \u0437\u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0456\u0437\u043D\u0430\u0442\u0438\u0441\u044F \u0431\u0456\u043B\u044C\u0448\u0435 \u043F\u0440\u043E \u0434\u0456\u044F\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u043F\u0440\u0438\u0442\u0443\u043B\u043A\u0443, \u043F\u0440\u043E \u043D\u0430\u0448\u0438\u0445 \u0445\u0432\u043E\u0441\u0442\u0430\u0442\u0438\u0445 \u043C\u0435\u0448\u043A\u0430\u043D\u0446\u0456\u0432 \u0442\u0430 \u0441\u043F\u043E\u0441\u043E\u0431\u0438 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0432'\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043D\u0430\u043C\u0438, \u044F\u043A\u0449\u043E \u0443 \u0432\u0430\u0441 \u0454 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u043F\u0438\u0442\u0430\u043D\u043D\u044F. \u0414\u044F\u043A\u0443\u0454\u043C\u043E \u0432\u0430\u043C \u0437\u0430 \u0432\u0430\u0448\u0443 \u043B\u044E\u0431\u043E\u0432, \u0434\u043E\u0431\u0440\u043E\u0442\u0443 \u0442\u0430 \u0432\u0456\u0434\u0434\u0430\u043D\u0456\u0441\u0442\u044C!"})]})]}),w(yh,{children:[a(wh,{children:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430 Big Lapa"}),w(vh,{children:[a(f8,{}),w("div",{children:[a(ue,{children:"\u0417\u043D\u0430\u0439\u0442\u0438 \u043D\u0430\u0441 \u043C\u043E\u0436\u043D\u0430 \u0437\u0430 \u0430\u0434\u0440\u0435\u0441\u043E\u044E:"}),a("p",{children:"\u043C\u0456\u0441\u0442\u043E \u041B\u044C\u0432\u0456\u0432, \u0432\u0443\u043B. \u0413\u043E\u0440\u043E\u0434\u043E\u0446\u044C\u043A\u0430, 397"})]})]})]})]})})}const Qn=x.h1`
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
`;var Ss="/Big-lapa/assets/main_photo.4c1331c3.png";const Dh=e=>p.exports.createElement("svg",{width:130,height:17,viewBox:"0 0 130 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("rect",{x:.5,y:.5,width:16,height:16,rx:8,stroke:"#F9F9F9"}),p.exports.createElement("line",{x1:28,y1:8,x2:45,y2:8,stroke:"#F9F9F9"}),p.exports.createElement("rect",{x:56,width:17,height:17,rx:8.5,fill:"#F9F9F9"}),p.exports.createElement("line",{x1:84,y1:8,x2:101,y2:8,stroke:"#F9F9F9"}),p.exports.createElement("rect",{x:112.5,y:.5,width:17,height:16,rx:8,stroke:"#F9F9F9"})),bh=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${M.colors.background};
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%),
    url(${Ss}) center/cover no-repeat;

  @media screen and (max-width: 767px) {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%),
      url(${Ss}) center/cover no-repeat;
  }

  ${re} {
    height: calc(100vh - 96px);
    display: flex;
    align-items: center;
  }
`,Ah=x.div`
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
`,Lh=x.button`
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
`,Bh=x(Dh)`
  position: absolute;
  bottom: 44px;
  z-index: 1;
  @media screen and (max-width: 767px) {
    left: 50%;
    bottom: 130px;
    transform: translate(-50%);
  }
`;function Ph(){return a(bh,{children:w(re,{children:[w(Ah,{children:[a(Qn,{children:"\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0439 \u0434\u0440\u0443\u0433\u0430, \u0432\u0440\u044F\u0442\u0443\u0439 \u0442\u0432\u0430\u0440\u0438\u043D\u0443!"}),a(Lh,{children:"\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"})]}),a(Bh,{})]})})}function Rh(){return w(hh,{"data-testid":"about-page",children:[a(Ph,{}),a(Fh,{})]})}x.div`
  svg {
    z-index: 3;
  }
`;const Mh=x.div`
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
`,Oh=x.b`
  padding: 0 12px 12px 0;
  color: #2e2e2e;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
`,Th=x.div`
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
`,ri=x.input`
  height: 56px;
  padding: 0 8px;
  flex: 100% 0 1;
`,h8=x.form`
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
    ${ri} {
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
    ${ri} {
      padding: 0 8px;
    }
  }
  @media screen and (max-width: 393px) {
    font-size: 4vw;
  }
`,Ih=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e},p.exports.createElement("path",{d:"M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),p.exports.createElement("path",{d:"M20.9999 21.0004L16.6499 16.6504",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Nh=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:20,viewBox:"0 0 16 20",fill:"none",...e},p.exports.createElement("path",{d:"M5 3.0005C4.73478 3.0005 4.48043 3.10585 4.29289 3.29339C4.10536 3.48093 4 3.73528 4 4.0005C4 4.26571 4.10536 4.52007 4.29289 4.7076C4.48043 4.89514 4.73478 5.0005 5 5.0005C5.26522 5.0005 5.51957 4.89514 5.70711 4.7076C5.89464 4.52007 6 4.26571 6 4.0005C6 3.73528 5.89464 3.48093 5.70711 3.29339C5.51957 3.10585 5.26522 3.0005 5 3.0005ZM2.17 3.0005C2.3766 2.41496 2.75974 1.90793 3.2666 1.54929C3.77346 1.19064 4.37909 0.998047 5 0.998047C5.62091 0.998047 6.22654 1.19064 6.7334 1.54929C7.24026 1.90793 7.6234 2.41496 7.83 3.0005H15C15.2652 3.0005 15.5196 3.10585 15.7071 3.29339C15.8946 3.48093 16 3.73528 16 4.0005C16 4.26571 15.8946 4.52007 15.7071 4.7076C15.5196 4.89514 15.2652 5.0005 15 5.0005H7.83C7.6234 5.58603 7.24026 6.09306 6.7334 6.45171C6.22654 6.81035 5.62091 7.00295 5 7.00295C4.37909 7.00295 3.77346 6.81035 3.2666 6.45171C2.75974 6.09306 2.3766 5.58603 2.17 5.0005H1C0.734784 5.0005 0.48043 4.89514 0.292893 4.7076C0.105357 4.52007 0 4.26571 0 4.0005C0 3.73528 0.105357 3.48093 0.292893 3.29339C0.48043 3.10585 0.734784 3.0005 1 3.0005H2.17ZM11 9.0005C10.7348 9.0005 10.4804 9.10585 10.2929 9.29339C10.1054 9.48093 10 9.73528 10 10.0005C10 10.2657 10.1054 10.5201 10.2929 10.7076C10.4804 10.8951 10.7348 11.0005 11 11.0005C11.2652 11.0005 11.5196 10.8951 11.7071 10.7076C11.8946 10.5201 12 10.2657 12 10.0005C12 9.73528 11.8946 9.48093 11.7071 9.29339C11.5196 9.10585 11.2652 9.0005 11 9.0005ZM8.17 9.0005C8.3766 8.41496 8.75974 7.90793 9.2666 7.54929C9.77346 7.19064 10.3791 6.99805 11 6.99805C11.6209 6.99805 12.2265 7.19064 12.7334 7.54929C13.2403 7.90793 13.6234 8.41496 13.83 9.0005H15C15.2652 9.0005 15.5196 9.10585 15.7071 9.29339C15.8946 9.48093 16 9.73528 16 10.0005C16 10.2657 15.8946 10.5201 15.7071 10.7076C15.5196 10.8951 15.2652 11.0005 15 11.0005H13.83C13.6234 11.586 13.2403 12.0931 12.7334 12.4517C12.2265 12.8104 11.6209 13.0029 11 13.0029C10.3791 13.0029 9.77346 12.8104 9.2666 12.4517C8.75974 12.0931 8.3766 11.586 8.17 11.0005H1C0.734784 11.0005 0.48043 10.8951 0.292893 10.7076C0.105357 10.5201 0 10.2657 0 10.0005C0 9.73528 0.105357 9.48093 0.292893 9.29339C0.48043 9.10585 0.734784 9.0005 1 9.0005H8.17ZM5 15.0005C4.73478 15.0005 4.48043 15.1059 4.29289 15.2934C4.10536 15.4809 4 15.7353 4 16.0005C4 16.2657 4.10536 16.5201 4.29289 16.7076C4.48043 16.8951 4.73478 17.0005 5 17.0005C5.26522 17.0005 5.51957 16.8951 5.70711 16.7076C5.89464 16.5201 6 16.2657 6 16.0005C6 15.7353 5.89464 15.4809 5.70711 15.2934C5.51957 15.1059 5.26522 15.0005 5 15.0005ZM2.17 15.0005C2.3766 14.415 2.75974 13.9079 3.2666 13.5493C3.77346 13.1906 4.37909 12.998 5 12.998C5.62091 12.998 6.22654 13.1906 6.7334 13.5493C7.24026 13.9079 7.6234 14.415 7.83 15.0005H15C15.2652 15.0005 15.5196 15.1059 15.7071 15.2934C15.8946 15.4809 16 15.7353 16 16.0005C16 16.2657 15.8946 16.5201 15.7071 16.7076C15.5196 16.8951 15.2652 17.0005 15 17.0005H7.83C7.6234 17.586 7.24026 18.0931 6.7334 18.4517C6.22654 18.8104 5.62091 19.0029 5 19.0029C4.37909 19.0029 3.77346 18.8104 3.2666 18.4517C2.75974 18.0931 2.3766 17.586 2.17 17.0005H1C0.734784 17.0005 0.48043 16.8951 0.292893 16.7076C0.105357 16.5201 0 16.2657 0 16.0005C0 15.7353 0.105357 15.4809 0.292893 15.2934C0.48043 15.1059 0.734784 15.0005 1 15.0005H2.17Z",fill:"#2E2E2E"})),pu=({title:e,options:t,onChange:n})=>w(Th,{children:[a(Oh,{children:e}),t.map(({label:u,name:r,checked:i})=>w("div",{children:[a("input",{type:"checkbox",name:r,checked:i,onChange:o=>{const s={...t.reduce((l,{name:c,checked:d})=>(l[c]=d||!1,l),{}),[r]:o.target.checked};n(s)}}),a("label",{htmlFor:r,children:u})]},r))]});function zh(){const{search:e}=Ht(),t=hi(),n={isOpen:!0,searchInput:"",genders:{male:!0,female:!0},sizes:{small:!0,medium:!0,big:!0},chips:{hasChip:!0,noChip:!0},breeds:{hasBreed:!0,noBreed:!0}},u=new URLSearchParams(e),r=u.get("search"),i=u.get("isOpen")==="true",o=u.getAll("gender"),s=u.getAll("size"),l=u.getAll("chip"),c=u.getAll("breed"),d={isOpen:i!=null?i:n.isOpen,searchInput:r!=null?r:n.searchInput,genders:o.length?o.reduce((S,A)=>({...S,[A]:!0}),{}):n.genders,sizes:s.length?s.reduce((S,A)=>({...S,[A]:!0}),{}):n.sizes,chips:l.length?l.reduce((S,A)=>({...S,[A]:!0}),{}):n.chips,breeds:c.length?c.reduce((S,A)=>({...S,[A]:!0}),{}):n.breeds},[m,g]=p.exports.useState(d.isOpen),[v,y]=p.exports.useState(d.searchInput),[E,b]=p.exports.useState(d.genders),[h,f]=p.exports.useState(d.sizes),[C,k]=p.exports.useState(d.chips),[D,F]=p.exports.useState(d.breeds);return p.exports.useEffect(()=>{const S=new URLSearchParams;S.set("isOpen",m.toString()),S.set("search",v);for(const A in E)E[A]&&S.append("gender",A);for(const A in h)h[A]&&S.append("size",A);for(const A in C)C[A]&&S.append("chip",A);for(const A in D)D[A]&&S.append("breed",A);t({search:S.toString()})},[m,v,E,h,C,D,t]),[{isOpen:m,searchInput:v,genders:E,sizes:h,chips:C,breeds:D},{setIsOpen:g,setSearchInput:y,setGenders:b,setSizes:f,setChips:k,setBreeds:F}]}function m8({options:e,setState:t}){const[{breeds:n,chips:u,genders:r,isOpen:i,sizes:o,searchInput:s},{setBreeds:l,setChips:c,setGenders:d,setIsOpen:m,setSizes:g,setSearchInput:v}]=zh(),y=b=>m(!b),E=()=>{if(e!=null&&e.data){const b=e==null?void 0:e.data.filter(({sex:h})=>{if(r.female&&r.male)return!0;if(r.male)return h.includes("\u0425\u043B\u043E\u043F\u0447\u0438\u043A");if(r.female)return h.includes("\u0414\u0456\u0432\u0447\u0438\u043D\u043A\u0430")}).filter(({size:h})=>{if(o.small&&o.medium&&o.big)return!0;if(o.small&&o.medium)return h.includes("small")||h.includes("medium");if(o.small&&o.big)return h.includes("small")||h.includes("big");if(o.medium&&o.big)return h.includes("medium")||h.includes("big");if(o.small)return h.includes("small");if(o.medium)return h.includes("medium");if(o.big)return h.includes("big")}).filter(({haschip:h})=>{if(u.hasChip&&u.noChip)return!0;if(u.hasChip)return h;if(u.noChip)return!h}).filter(({hasbreed:h})=>{if(n.hasBreed&&n.noBreed)return!0;if(n.hasBreed)return h;if(n.noBreed)return!h}).filter(({name:h})=>h.toLowerCase().includes(s.toLowerCase()));t({data:b})}};return p.exports.useEffect(()=>{e&&t(e),E()},[s,r,o,u,n,e]),w(Ue,{children:[w(h8,{children:[a(Ih,{}),a(ri,{type:"text",placeholder:"\u041F\u043E\u0448\u0443\u043A \u0441\u043E\u0431\u0430\u043A\u0438 \u0437\u0430 \u043A\u043B\u0438\u0447\u043A\u043E\u044E",value:s,onChange:b=>v(b.target.value)}),a(Nh,{type:"button",onClick:()=>y(i),style:{cursor:"pointer"}})]}),i&&w(Mh,{children:[a(pu,{title:"\u0421\u0442\u0430\u0442\u044C",options:[{name:"male",label:"\u0425\u043B\u043E\u043F\u0435\u0446\u044C",checked:r.male},{name:"female",label:"\u0414\u0456\u0432\u0447\u0438\u043D\u0430",checked:r.female}],onChange:d}),a(pu,{title:"\u0420\u043E\u0437\u043C\u0456\u0440",options:[{name:"small",label:"\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0430",checked:o.small},{name:"medium",label:"\u0421\u0435\u0440\u0435\u0434\u043D\u044F",checked:o.medium},{name:"big",label:"\u0412\u0435\u043B\u0438\u043A\u0430",checked:o.big}],onChange:g}),a(pu,{title:"\u041D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u0447\u0438\u043F\u0443",options:[{name:"hasChip",label:"\u0422\u0430\u043A",checked:u.hasChip},{name:"noChip",label:"\u041D\u0456",checked:u.noChip}],onChange:c}),a(pu,{title:"\u041D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u043F\u043E\u0440\u043E\u0434\u0438",options:[{name:"hasBreed",label:"\u0422\u0430\u043A",checked:n.hasBreed},{name:"noBreed",label:"\u041D\u0456",checked:n.noBreed}],onChange:l})]})]})}const jh=x.section`
  margin-bottom: 110px;

  @media (max-width: 1279px) {
    margin-bottom: 80px;
  }

  @media (max-width: 767px) {
    margin-bottom: 60px;
  }

  ${({$admin:e})=>e&&Mt`
      ${re} {
        padding: 0;
        margin: 0;
        width: 100%;
      }

      ${de} {
        align-items: end;

        @media (max-width: 1439px) {
          align-items: center;
        }

        @media (max-width: 1024px) {
          align-items: end;
        }
      }

      ${C8} {
        align-self: flex-end;
      }

      ${g8} {
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;

        @media (max-width: 1439px) {
          gap: 17px;
          grid-template-columns: repeat(2, 1fr);
        }
      }

      ${x8} {
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
`,C8=x(ue)`
  align-self: start;
  margin-bottom: 40px;
  span {
    color: ${M.colors.grey};
  }
`,g8=x.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 40px;
  margin-bottom: 55px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,x8=x.div`
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
`,Hh=x.div`
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
`,$h=x.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Uh=x.button`
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
`,Vh=x.ul`
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
`;var Wh="/Big-lapa/assets/Dog_photo.ba816c06.png";const Qh=e=>p.exports.createElement("svg",{width:25,height:24,viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M15.5 6.84375C15.5 6.84375 16.6419 6.28125 12.5 6.28125C11.0166 6.28125 9.5666 6.72112 8.33323 7.54523C7.09986 8.36934 6.13856 9.54068 5.57091 10.9111C5.00325 12.2816 4.85472 13.7896 5.14411 15.2444C5.4335 16.6993 6.14781 18.0357 7.1967 19.0846C8.2456 20.1334 9.58197 20.8478 11.0368 21.1371C12.4917 21.4265 13.9997 21.278 15.3701 20.7103C16.7406 20.1427 17.9119 19.1814 18.736 17.948C19.5601 16.7147 20 15.2646 20 13.7812",stroke:"#2E2E2E",strokeWidth:2,strokeMiterlimit:10,strokeLinecap:"round"}),p.exports.createElement("path",{d:"M12.5 2.71875L16.25 6.46875L12.5 10.2188",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Zh=e=>p.exports.createElement("svg",{width:147,height:174,viewBox:"0 0 147 174",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M60.9597 35.3807C63.5832 32.2251 69.5621 32.9001 74.3497 36.9439C79.1156 40.9604 80.9057 46.7609 78.3039 49.9438C75.7276 53.1039 69.7233 52.4517 64.9103 48.4307C60.119 44.4371 58.3797 38.591 60.9597 35.3807ZM79.0984 19.0752C82.5309 16.8807 87.6442 19.6937 90.6089 25.3293C93.5193 31.0607 93.156 37.4369 89.7707 39.6359C86.36 41.8578 81.272 39.0219 78.358 33.3407C75.3969 27.6549 75.7602 21.2787 79.0984 19.0752ZM57.3997 60.1533C59.2252 56.2143 65.0946 55.1119 70.5232 57.5009C75.8903 60.0859 78.8439 65.2157 77.0437 69.1318C75.2436 73.0479 69.4214 74.1548 63.9999 71.6656C58.5785 69.1763 55.6539 63.9736 57.3997 60.1533ZM103.064 19.1043C106.899 17.9076 111.244 21.8333 112.657 27.9257C114.071 34.0181 112.079 39.9351 108.146 41.1729C104.213 42.4107 99.94 38.4668 98.429 32.4155C97.1101 26.3321 99.1051 20.3649 103.064 19.1043ZM122.291 52.3747C124.438 54.8525 124.876 59.3368 123.543 62.3639C120.786 68.6871 111.708 68.8756 106.66 73.4138C101.611 77.952 100.035 87.6697 93.6328 89.251C90.0294 90.1923 85.4493 88.2129 83.4284 84.9648C80.6419 80.4821 83.4416 74.2136 83.7582 68.8173C84.2662 61.7482 81.0351 52.2252 86.1342 47.6414C91.208 43.0804 99.578 47.7963 106.159 48.6805C111.63 49.4834 118.565 48.0795 122.291 52.3747Z",fill:"#B5C268"}),p.exports.createElement("path",{d:"M28.7398 107.017C31.7828 104.656 37.2287 106.565 40.9262 111.34C44.6086 116.086 45.1792 121.846 42.1512 124.238C39.1512 126.614 33.6774 124.72 29.9519 119.96C26.2415 115.231 25.7269 109.439 28.7398 107.017ZM48.7359 95.7984C52.3512 94.5013 56.5854 98.2061 58.2821 104.066C59.9101 110.002 58.3643 115.834 54.7921 117.146C51.192 118.473 46.9858 114.752 45.3449 108.861C43.661 102.956 45.2068 97.1242 48.7359 95.7984ZM20.7312 129.213C23.1786 125.954 28.8588 126.192 33.4672 129.572C37.981 133.12 39.7632 138.508 37.3437 141.751C34.9242 144.994 29.2871 144.771 24.7044 141.3C20.1218 137.829 18.3804 132.379 20.7312 129.213ZM71.0711 100.97C74.873 100.684 78.1806 105.255 78.3445 111.205C78.5084 117.155 75.5318 122.211 71.6308 122.514C67.7299 122.817 64.4934 118.245 64.2305 112.312C64.1527 106.391 67.1422 101.288 71.0711 100.97ZM82.6962 135.933C84.229 138.69 83.7875 142.94 81.9719 145.46C78.2054 150.729 69.7067 148.955 64.1413 152.077C58.576 155.2 55.2667 163.868 48.9992 163.959C45.4619 164.058 41.567 161.24 40.298 157.796C38.5491 153.043 42.3458 147.834 43.6626 142.901C45.4745 136.458 44.2653 126.938 49.8866 123.785C55.4799 120.647 62.3897 126.814 68.3571 129.046C73.3056 130.965 80.0364 131.152 82.6962 135.933Z",fill:"#B5C268"})),_h=e=>p.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M4 7H20M10 11V17M14 11V17M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}));function qh({dog:e,src:t,admin:n}){const{id:u,name:r,sex:i,age:o}=e;return w(x8,{children:[!n&&w(Et,{to:`/dog/${u}/${r}`,children:[a("img",{src:t,alt:"/dog"}),a(ue,{children:r}),w("p",{children:[i,", ",o]}),a(Zh,{})]}),n&&w(Et,{to:"/admin/edit-card",children:[a("img",{src:t,alt:"/dog"}),a(ue,{children:r}),w("p",{children:[i,", ",o]}),w(Hh,{children:[a(ae,{children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"}),a(ae,{children:a(_h,{})})]})]})]})}function y8({admin:e,state:t}){const n=t==null?void 0:t.data;return a(jh,{$admin:e,children:a(re,{children:w(de,{$direction:"column",$align:"center",children:[w(C8,{children:[a("span",{children:"\u0417\u043D\u0430\u0439\u0434\u0435\u043D\u043E:"})," ",n==null?void 0:n.length," \u0441\u043E\u0431\u0430\u043A"]}),a(g8,{children:n==null?void 0:n.map(u=>a(qh,{dog:u,src:Wh,admin:e},u.id))}),w($h,{children:[w(Uh,{children:[a(Qh,{}),"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0449\u0435"]}),w(Vh,{children:[a("li",{children:"1"}),a("li",{children:"2"}),a("li",{children:"3"}),a("li",{children:"4"}),a("li",{children:"5"}),a("li",{children:"..."}),a("li",{children:"16"})]})]})]})})})}var Gh="/Big-lapa/assets/main_photo.01c83128.png";const Kh=e=>p.exports.createElement("svg",{width:130,height:17,viewBox:"0 0 130 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("rect",{width:17,height:17,rx:8.5,fill:"#F9F9F9"}),p.exports.createElement("line",{x1:28,y1:8,x2:45,y2:8,stroke:"#F9F9F9"}),p.exports.createElement("rect",{x:56.5,y:.5,width:16,height:16,rx:8,stroke:"#F9F9F9"}),p.exports.createElement("line",{x1:84,y1:8,x2:101,y2:8,stroke:"#F9F9F9"}),p.exports.createElement("rect",{x:112.5,y:.5,width:17,height:16,rx:8,stroke:"#F9F9F9"})),Xh=x.div`
  height: calc(100vh - 96px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${M.colors.background};
  background-color: ${M.colors.green};
  margin-bottom: 120px;

  @media (max-width: 1279px) {
    margin-bottom: 80px;
  }

  @media (max-width: 767px) {
    margin-bottom: 60px;
  }
`,Jh=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2vh;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`,Yh=x.div`
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
`,v8=x.button`
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
`,em=x(v8)`
  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 767px) {
    display: block;
  }
`,tm=x.div`
  flex: 0 1 50%;
  aspect-ratio: 1/1;
  max-height: 70vh;
  background: ${M.colors.yellow} url(${Gh}) bottom no-repeat;
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
`,nm=x(Kh)`
  position: absolute;
  bottom: 0;
  z-index: 1;
  @media screen and (max-width: 767px) {
    left: 50%;
    bottom: 85px;
    transform: translate(-50%);
  }
`;function um(){return a(Xh,{children:a(re,{children:w(Jh,{children:[w(Yh,{children:[a(Qn,{children:"\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0439 \u0434\u0440\u0443\u0433\u0430, \u0432\u0440\u044F\u0442\u0443\u0439 \u0442\u0432\u0430\u0440\u0438\u043D\u0443!"}),a(v8,{children:"\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"})]}),a(tm,{}),a(em,{children:"\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"}),a(nm,{})]})})})}const rm=x.div`
  color: ${({theme:e})=>e.colors.dark};
  margin-top: ${({theme:e})=>e.headerHeight};

  ${h8} {
    margin-bottom: 110px;

    @media (max-width: 1279px) {
      margin-bottom: 90px;
    }

    @media (max-width: 767px) {
      margin-bottom: 70px;
    }
  }
`;function im(){const[e,t]=p.exports.useState({data:[]});O0({category:"dogs",state:e,setState:t});const[n,u]=p.exports.useState(e);return w(rm,{"data-testid":"dogs-page",children:[a(um,{}),a(re,{children:a(m8,{state:n,setState:u,options:e})}),a(y8,{state:n})]})}var om="/Big-lapa/assets/dogs donation.cf24a6d2.webp",sm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAlCAYAAAC05kydAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAx5SURBVHgB7VoLcFTVGf7PubvZPAh5bAJZdkMguxGI1KIo+KpgRVqxPhFRqsXqVJ3RwbbWR31rpzNWndGOWmfaQUqLwjAWW2tFrZXIWKij+EKRkM17A2Szm002ZJPs7j2n37mbDZsQkmx2o47mm7m5e8//n9f/n3P+xwnRJL6Z8Nld17Y5nNu9ttnfo0mMG4zSAL/d9QvG6FFJlCEleTXiywtaDnxCk0ganFIAFMB8DtfdUOvvlDJUGRQzTZL+907H7EU0iaQx7h2ilNHucD2IBu7Bb/MxdEltjKIXW1sa/keTGDPGpRCljA57xX2CyUdGYQ0JXSwpPlT3AU1iTEj6yIIyeMDhumsMylDIZhrf6bWVn01fAwTtc60eu93xwTA7+uuCpHeI3+F6GK8HkqmDTtqFFFcWtdT9h1IE+v8Mq2ImbFWQmfWzCurrG+O0dofzDknsPtAZafSAtcn9lCr3zii/3sT5vVLK2WScptSHMe3QOFuX3+yujdWt2A/6jIRBh8Hai7be6gmab3d07fcPGccNoD/OiAmNxBl5nroaSgOS2iFy6VITXk2S5Dr14PeDmFzvcdibuWT3Kz5B8iEz045QWsBCEFYO+rWLCJ+XSBHEz8FrqloBOCp75cKFZl+p6xmN8/XgL2ecdWLGXijTAu9jhS7lB76SmPMBehD1co2Hy240cQTCLgLf2uyp0T8k9lPjcqG+vI4ky0U9qxTsMkoTUnZ720tde7DkThlaLiV7qailZhWlGdK2MDtgCjZjNRfqJFdM89Ruj9P8jopXwXEhFsFje12l9y6oaV4jGNtoDEfSJjOOWS0sukIZbKHG+CPQwkLQDmtd4cru7OK+LK2zSQkY6ryicGrmG+3BiNoFT6Gso8jjLoj302ErP1XnfDekBxKZIcSPOk3RM2c3NPRSikjJ7VXARMVw5cw4GdIPdmhPyBDvSDyc9Z5bVRXVObs7Nha23VqSd0Oep9Y9xVvfOs1T95ouxdUgqWOoREwxrbaj3XiruuScQqEokyIu4EHHldDYlWjUhHHsxG7rRLWTsyL8LEoDTCMR0ZHmtzt/TUzbUOQ50EJpgr/EVSlN0dwiT8N7lAI0Yi/67RUd8W/sDFt8y9fPmpXPojRX/cZOepHt2RNJrAul1Pgczo+hrPMEse8OapfRhkDUFMD8S/r7efpoH3D3paEQrGa2USDoQvFyM+OrQXubGSzjx3F3iPKm/KWu5zHguzjxQkojpFmeQNL0zzbHrCWUGvJxls+KPxCG5SjBgKEfCHRYIcH2h403GywHMHeirBM7Lai+4ZCsbrHZstXvVrvzXLQ6E1wBoeynlMaiwu66pHW6s5hSBB9+oMTb7c71mMZPpPJXJgDY6sWcTNv9M2afT+MEY2yN6NXs8QcCHvDiChoaOqANwwODU7FiaF3lAvOYDVEKq0ukSSlusja755sjcq5UxxVjZ2TznJWKBoNxKxmKZsqmvAja/f3zmWYxU8rH1jEKUVE3clMb0cN1NAZgsluhuP8Oeoh2EtPfGEP1LOLaK2328gtpHIhK0VHsqz4Yf9gQjw/fG/rflwZKy38aL8dqL4qwyNMgTMOEj1g081+Gax9RLeQjI7F5UvHh6SflQC7nGW1K2oHFupUxuQXtu/t5rqEUMciGdMz8TkG73vMctL2axohiT+3jeD1O40cmPJ6/tcGvL/a4X6A0oi+S/YTJ3H0Ojt3vC8n+hFTP7VBABwQ5H+Q8iLVbcnlXTuMXhxLrYec9iUV5j3EUEoMdkZ2ayfQyY6GPcTRNBcthwfi1cbvqLXWu1iTbDN6LYHPvt7bU/obGiYEdopShi57HKAllpAvYlRaci8+rVSzTlIFWKGn9tNsSZVdBAdgBLIK2T4ThPwNn0hSQ6+Ag3l3U7B6IMcDXpt5QoAuLcmEsDpENqHdffmN1Pd7O2HDpX4lOjmZhcL3ZXlIZAMlKKQUYO6Q+f1Z+VPQ8A0msoa8IsdQ9ewa2y0wttX8ciRcB3SqkZLSw3vPRoDaY/jA8wqeyo6I6XpZ72N2Gtq9vn+l6TAhawBnLhA0/SBnRXda6us7E+mYyXxzh0TL1W9N12WdiPWZNfh7nk5wt13ShR8KW9xPrWd3uYIut8qIcHq2IsGgzpQBjNXbNdFWGBakEYNZQBkymB8Z3caFn/15KE3ylzkuZZC8PS5TyXWz5b+0ll3Fk5Ta59wkmbmBDAqCvAJ8xIX9MEwSJkwDJRetWmhjPMR0YMOrFzXWbEXdkYUs8R/2XTV8msBj2mi3Zy3JrP/WOxOezO9+C0S0ZoaVu5NBujN9YGoGcrXwdcX5lO6OyLNL4eQ6X3yflK5Yo/T63tdYrp0/PaTfnGvEEvKfaAtZ7FfN4elods0/SpPZn2JOMQr17ETt0KNR/D/Q6WO0w8F0RPXp1htm0CR3lH2dAYJM7ijy1KvdHHQ7nzxBJ3qryCahzgbXF7UlkHuRlwfd+Ht6FSrIpb2dMSgnaTijq08T8xDIL0/VQmFeXYLI0JshP9d7Osws97q7ROJXBxatshLYIVwOn4ccnSnjwejZAgWv7iYLFElA2lM3vM8tVbUVlS+rCwVC+mU6M1aaZPpGDwI+qmZQIxqlSTYkiEWNXHS5xFUEwy42xqOBR405UOmuUMefgtc4YD7EbsfhUX7jpFirX92Qi7zFxCDT2EmN8bSz9PDqimtyGRnYkPhGp7TRljM0Vxup5PxKh84t9vlGVoSD6tO9ggu2xwYuVrFvkq8dEGVa01e++SsM2BhwVv1LKwAfmwp7I0Nh8U4ZpHub2S5D9aKeCZZo3lwcCQallVvZ3gdBCHtfTO0qT6vJtWabgAYrtgvd7pKkIv/cbfIJuQVxyLiWkUjpL58Bzo8qjk2dXD21/2FxWYfOBLe1l5UES/OXRUoQYSNawAxcsi2i0uriTOKJfXtTR0EFjBALALhwZxqgixHqmBWpjHlBgqand4dEH2q6szAgEw3cYY5H0bEFLzZ0JeaYD3rLyai3K/4FVvsRrd52u6eEmSgLICiCEYaH8w+59lLCwcU9ijEFyva/YU1+VSItI/Uf4UCmYXWhgEVR/WnDG7DlTD9YPeIXHzWUVNta9hqlcx8a4U5KcDE4VudvaLS4rSEIZyeBwKDQD0jdySzrjW4Ym/bw5mW9hrRupFazKxTTBUHczEPYVsQ+5EXJ9V/3s07SbEvlGTL8XNNdsEaQtk6FoI6URmRbaXSBCy1hgcByQTmhR7eju1yk4lH7ivn0qJWKkRSQTFppg+L1dCyh2XIUZF1/AmL2kyrmg1XLVqgGvb8T0u7GqmqvT/g8KuW53G00w+qivJZsylcDN3BRdSv1nexx+2wlzYJHsxofODky0I4y7FbUTlP3JEFL7NxKbmmGNGM3o3PWhynq/rfhSv6CKnYnHljMypzMNkixK4baidyP4lEJb12ZzLozTgohFmCZ/i8Hl4mmLiiNv0gSirWiOuupd2f9Zgz7fg//2HoRnnDw6sYFjy0RJwm8rvw03ZoanAG3motEThhe7vCDgcG1qI3kk1hHbXOBxV9GXADgiN+MSbBc3me+U4chiyeQ8TWPbYXDfgRPC4Qxg/HIuGHXYs1tLWlu7fY48I45Q9+1M05/zO5zwnhgWmzSpdeW35L/gd+RFKckYzVtcOUWzhP8qY1c0fq7r5+fftNZIr/jXb7pZORzocxnu/m9BXu3ZpBWic/GORiZ1NRoLzo6zB+BSWjCINcqRB8vrvkzaTROKKlzeVfSqKAOu7incrFsL6t2fB2fM+UGE68pbVP8QcTmPxSHqZAgwLm8pbK7dqmp3c0toiggpBZkx+qWJMzH+MroocbIQpOCZ0dBoo8rMEJYwyUVKCriqeNN6qL6RHnrIoEmXa317r/Ffn4UY1amqLGmFTGtp+Dhgn3WB4KYqzCxv1ApSbvdnscsq3O4+ShPg3/8cicIMxBUH4mXqH028pK/QhHY2rmxZhtC+UOVTD1ZX17hcJ0/toyUIjRfDVYUeqJ5p4Vfzm5oC8fplTXsD/jLnOXokdu07GsxM1uMSrOEYgiYe1CM8T3BmJCC7RGdPpjnnNsQlFos0b09kZZCJr6xiEYvQ6XA7G/rnMT74bBXzyCR3YKVMPw6L+v+HbVbXzKtYVVWUJjEmpGR0/WVzzyQR3UbHKkX5/G8WZtIlLI0749uAlLwsa+P+XYLTCuWpDKawbZFI18pJZSSPlN3e4kb3h1yjHx5VitwWNEWuUZ4LTeKrg3dWxQKfw/Wo+m8OmsQkvin4PwXbCP2lUbdoAAAAAElFTkSuQmCC",lm="/Big-lapa/assets/First_green_rectangle.95519e92.svg",am="/Big-lapa/assets/Second_green_rectangle.572f60f1.svg";const cm=x.section`
  scroll-margin-top: 96px;
  background-image: url(${lm}), url(${am});
  background-repeat: no-repeat;
  background-position: left top, right bottom;

  @media (max-width: 1279px) {
    background-position: -50px top, right bottom;
  }

  @media (max-width: 767px) {
    background-position: -150px top, right bottom;
  }
`,dm=x(re)`
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
`,pm=x.div`
  z-index: 2;
`,fm=x(de)`
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 60px;
  }
  @media (max-width: 767px) {
    gap: 40px;
  }
`,ks=x.div`
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
`,Fs=x.div`
  text-align: center;
`,hm=x.div`
  display: grid;
  grid-gap: 20px 40px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;

  label:last-child {
    grid-column: span 2;
  }
`,Ds=x.label`
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
`,mm=x(ae)`
  max-width: 194px;
  @media (max-width: 500px) {
    max-width: 100%;
    width: 100%;
  }
`,Cm=x.div`
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

    ${de} {
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
`,gm=x.img`
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
`;function xm({setIsModalOpen:e}){const[t,n]=p.exports.useState(0),[u,r]=p.exports.useState(!1),i=[20,50,100,200],o=c=>{n(+c.target.value),r(!1)},s=c=>{n(+c.target.value),r(!0)},l=()=>{e(!0)};return w(de,{$direction:"column",$align:"center",$gap:"35px",children:[w(hm,{children:[i.map(c=>w(Ds,{children:[a("input",{type:"radio",name:"radio",value:c,onChange:o}),a("span",{children:w("span",{children:[c," \u0433\u0440\u043D"]})})]},c)),w(Ds,{children:[a("input",{type:"radio",name:"radio",value:t,checked:u}),a("input",{type:"number",placeholder:"\u0406\u043D\u0448\u0430 \u0441\u0443\u043C\u0430, UAH",onKeyDown:c=>["e","E","+","-"].includes(c.key)&&c.preventDefault(),onChange:s,onClick:()=>r(!0)})]})]}),a(mm,{onClick:l,children:"\u0417\u0440\u043E\u0431\u0438\u0442\u0438 \u0432\u043D\u0435\u0441\u043E\u043A"})]})}const ym=x.div`
  z-index: 10;
`,vm=x.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
`,wm=x.div`
  z-index: 15;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${M.colors.background};
  border-radius: 4px 0 0 4px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1056px;
  height: 800px;
  max-height: 80vh;
  font-size: ${M.fontSizes.bodyText};

  @media (max-width: 1279px) {
    max-width: 768px;
    max-height: 512px;
    flex-direction: column;
    padding-top: 31px;
  }

  @media (max-width: 767px) {
    max-width: 393px;
    padding-top: 0;
    height: 608px;
    max-height: 100%;
    justify-content: center;
    font-size: ${M.fontSizes.mobileBodyText};
    a {
      width: 100%;
    }
  }
`,Em=x.div`
  flex: 38%;
  height: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 1279px) {
    width: 126px;
    max-height: 126px;
    border-radius: 50%;
    overflow: hidden;

    img {
      object-position: 100% 25%;
    }
  }
`,Sm=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 54px;

  @media (max-width: 767px) {
    margin: 0 16px;
  }

  ${ae} {
    margin-bottom: 12px;

    @media (max-width: 767px) {
      width: 100%;
    }
  }
`,km=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
  margin-bottom: 60px;
`,Fm=x(Qn)`
  text-align: center;

  @media (max-width: 1279px) {
    font-size: ${M.fontSizes.h1};
  }

  @media (max-width: 767px) {
    font-size: ${M.fontSizes.mobileH1};
    max-width: 206px;
  }
`,Dm=x.div`
  max-width: 540px;
  text-align: left;

  @media (max-width: 767px) {
    text-align: center;
  }
`,bm=x.p`
  color: ${M.colors.grey};
  font-size: ${M.fontSizes.subheadline};

  @media (max-width: 767px) {
    font-size: ${M.fontSizes.mobileSubheadline};
  }
`,Am=x.button`
  position: absolute;
  top: 20px;
  right: 20px;
`,Lm=e=>p.exports.createElement("svg",{width:28,height:28,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M2.8 28L0 25.2L11.2 14L0 2.8L2.8 0L14 11.2L25.2 0L28 2.8L16.8 14L28 25.2L25.2 28L14 16.8L2.8 28Z",fill:"#2E2E2E"}));function w8({title:e,body:t,image:n,isOpen:u,onClose:r}){return a(Ue,{children:u&&a(ym,{children:a(vm,{onClick:r,children:w(wm,{onClick:i=>i.stopPropagation(),children:[a(Em,{children:a("img",{src:n,alt:"dog"})}),w(Sm,{children:[w(km,{children:[a(Fm,{children:e}),a(Dm,{children:t})]}),a(Et,{to:"/",children:a(ae,{onClick:r,children:"\u041D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443"})}),a(bm,{children:"\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443, \u044F\u043A\u0449\u043E \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044F \u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443"})]}),a(Am,{onClick:r,children:a(Lm,{})})]})})})})}var Bm="/Big-lapa/assets/photoModal.d1c9ad50.webp";function Pm(){const[e,t]=p.exports.useState(!1);return w(cm,{id:"donation",children:[a(w8,{title:"\u0414\u044F\u043A\u0443\u0454\u043C\u043E \u0437\u0430 \u0434\u043E\u043D\u0430\u0442!",body:"\u0417\u0430\u0432\u0434\u044F\u043A\u0438 \u0432\u0430\u0448\u0456\u0439 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0446\u0456, \u043C\u0438 \u043C\u0430\u0454\u043C\u043E \u0437\u043C\u043E\u0433\u0443 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0441\u043E\u0431\u0430\u043A \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E\u044E \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044E \u0457\u0436\u0456, \u043C\u0435\u0434\u0438\u043A\u0430\u043C\u0435\u043D\u0442\u0456\u0432 \u0442\u0430 \u0437\u0430\u0441\u043E\u0431\u0456\u0432 \u0434\u043B\u044F \u0434\u043E\u0433\u043B\u044F\u0434\u0443. \u0414\u044F\u043A\u0443\u0454\u043C\u043E, \u0449\u043E \u043F\u0456\u043A\u043B\u0443\u0454\u0442\u0435\u0441\u044F \u043F\u0440\u043E \u043D\u0430\u0448\u0438\u0445 \u0445\u0432\u043E\u0441\u0442\u0438\u043A\u0456\u0432!",image:Bm,isOpen:e,onClose:()=>t(!1)}),w(dm,{children:[a(pm,{children:w(de,{$direction:"column",$align:"center",children:[a(Ne,{children:"\u0411\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u0439 \u0434\u043E\u043D\u0430\u0442"}),w(fm,{$gap:"24px",$width:"100%",children:[a(ks,{children:w(de,{$direction:"column",$align:"center",$gap:"35px",children:[w(Fs,{children:[a(ue,{children:"\u0420\u0430\u0437\u043E\u0432\u0438\u0439 \u0432\u043D\u0435\u0441\u043E\u043A"}),w("span",{children:["\u041D\u0430\u0433\u043E\u0434\u0443\u0439 \u043F\u0441\u0430 \u0432\u0436\u0435 \u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456 \u2013",a("br",{})," \u0442\u0432\u043E\u044F \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u0432\u0430\u0436\u043B\u0438\u0432\u0430!"]})]}),a(xm,{setIsModalOpen:t})]})}),a(ks,{children:w(de,{$direction:"column",$align:"center",$gap:"35px",children:[w(Fs,{children:[a(ue,{children:"\u041D\u0435\u0433\u0440\u043E\u0448\u043E\u0432\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430"}),w("p",{children:["\u0406\u0441\u043D\u0443\u0454 \u0431\u0430\u0433\u0430\u0442\u043E \u0441\u043F\u043E\u0441\u043E\u0431\u0456\u0432 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0438 \u2013 \u043E\u0431\u0435\u0440\u0456\u0442\u044C \u0441\u0432\u0456\u0439!",a("br",{})," \u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u0432\u0443\u043B\u0438\u0447\u043D\u0438\u043C \u0441\u043E\u0431\u0430\u043A\u0430\u043C \u043D\u0435 \u043E\u0431\u043C\u0435\u0436\u0443\u0454\u0442\u044C\u0441\u044F \u043B\u0438\u0448\u0435 \u0444\u0456\u043D\u0430\u043D\u0441\u0430\u043C\u0438. \u041C\u0438 \u043F\u043E\u0441\u0442\u0456\u0439\u043D\u043E \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u0454\u043C\u043E \u043A\u043E\u0440\u043C\u0456\u0432, \u043C\u0435\u0434\u0438\u043A\u0430\u043C\u0435\u043D\u0442\u0456\u0432, \u0440\u043E\u0437\u043F\u043E\u0432\u0441\u044E\u0434\u0436\u0435\u043D\u043D\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u0442\u043E\u0449\u043E."]})]}),a(Cm,{children:w(de,{$justify:"space-between",$align:"flex-start",children:[w("div",{children:[a("p",{children:"\u041D\u0430\u0448\u0435 \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043F\u043E\u0441\u0438\u043B\u043E\u043A:"}),w("p",{children:["\u0412\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F \u2116 19, \u043C. \u041A\u0440\u0438\u0432\u0438\u0439 \u0420\u0456\u0433, \u041C\u0443\u0441\u043E\u0440\u0433\u0441\u043A\u043E\u0433\u043E 3",a("br",{})," \u041F\u0440\u0438\u0442\u0443\u043B\u043E\u043A \u0434\u043B\u044F \u0442\u0432\u0430\u0440\u0438\u043D \u201C\u0411\u0456\u0433 \u041B\u0430\u043F\u0430\u201D"]})]}),a("img",{src:sm,alt:"nova poshta logo"})]})})]})})]})]})}),a(gm,{src:om})]})]})}const Rm=x.div`
  color: ${({theme:e})=>e.colors.dark};
  margin-top: ${({theme:e})=>e.headerHeight};
`,Mm=x.div`
  display: grid;
  /* grid-template-rows: repeat(3, calc(100vh - 100px)); */
  grid-template-areas: 'main' 'dontation' 'shelterBlock';
`;var Om="data:image/webp;base64,UklGRuYHAABXRUJQVlA4WAoAAAAQAAAA2wAA5QAAQUxQSEoAAAABP0AQQJLyqJs8QRoREbh6AzWRJEXhxXwCfnIcIAEJOKDwb2Hijej/BLzmQK9Nh/oTy3asGUb+l//lf/lf/te+PUxkOZPlv0SyDFZQOCB2BwAAMDgAnQEq3ADmAD6dTKJMJDMsLCMWaeCwE4llbuFx2/hIXj9KOil2EnZU9RO4YcQdoWz7IXVCbVW8AGuEfBPq4o0VwlnEizfTj4Ju9vHiSmYDfVnkkFLoLIpJuS8YNbkqj2O4E+QVJAYuvDBFiR+7plu8TKc6H3Z9XELH7PCK9uKizAfJDerJaVrFrxtY4qeJ11sqCb3HNv9qsKk+dkI+CbYELLe4JFR80SiG3tbgemuw4HeI3fY/RS8muQQhoBqvSZ6urZ5JBkWuMP5e3cj3hU1UwDZ3jefLWH6Shwv1sTijRW56dPdhfQ2COVIVmR3hMlltJlB2QhKLKRty6xHWeSQUFmNoTLnxikZ+fnVJyr9bh62r0nFrPxRucUaGuEYzEDW0dThw/BLyAHI4tI6h8QrTC4eUrf4jzREhE0YqkFnD9Bi5+t+DLE+g8D8yO3+jhPKE6NDq80XFasGzHaIJ6kFm6M+Yf1vIFSqsnJNeVaOova98aCZvE6XYJ8ekT6uIOR72W0GafphS4aGxmWXtpbiyBxl9dgbbR2pW6KAxMX2oHzVxWcC96aCL99GrX56HmsnBwW0XlOMQeOxrFtptT9nxFSWqKJ5wrrwA/v6kAAGGm5ddXrNBIJj5ckxLDNeknDlR0ene4aDOfG8XvZNuIr8uNOdlsN8yTVMoukImcAcjex6woBaRyTYiywm6mbfQ+NqjnE38cW6v2Qk6bMtFn5oecJxysUkUeMmJR2n4eJnss/Al7+LDIkg/SpES4mehqfmHxa/NImBS/kgAwDS/BBbD2+3010+IDblXZ5vrO2MTlAN0Jdv5JHF8BOdghzyqO/+G8eIYtiJh7TzgEr17Y7jzUm27IzHELDRNy+ChbCmwqD8vqImn4YAgliosC9+5J/8HQB/W7jl2w9PUBdy6ntcIOddIcUx/IiMGd36M8+J5fgUBvgYmCyV741pq6D1eEW6JWI2PjkQG39jBz96e9a/MwMnDZA6SJqMrZL0eg/CmFSfGRh7c1UQJHQGhrOCCz2QUOArqu2YVpNV0kHcJfjYvNoxZRCMZWuyYtazPfXLivHs9G83XlB2hXdOUT3vOLzdQ3U/SOeY62h1dUGyY/xqUDDD+ScC7Ybb0ESwUhbxIFMPj5YGKIwVAbB/4EA52PpP/Jl37VWt2tela2jrrhhtVAh1nWiBwwVJdHeW9IkiG/gMOH0WAtXqMD0H2bHnB5UsF6Gjx/WBZ7NkXTJmO8ZEFDVQWrgi4TdBvXAoMMW9AE5ihUOYcsLNF0V3cYU2duFfGTA0sagWaPEcT/a4IwMluTkjv5b1t6ZpEOjgZnBKWqFJ72+MFOpk8zIk0+0md4jneWqknRPmqb/BQbBKmFgZzMLCXruPk9gSAdCwO9O0+HCngYp6LYZIHhidQ2hpoWcsoykZgSLieUa6s8zAJkTXm/0GdML5UH2EM032Jkr/Ea3EM2/XWArT7ot4zp1/vkUoJ5SGc22D37CuMunk8DLzmowa8DXVO87P4CJbKc+QZ6fcXjiur7w/pZcyX/iXV8hhgN1WvZERfMo/WZGfIurjlfOOhRs2WS5pgfDSoToCBqM6FWUIkJ8Uyqe7kEPblw4M2i9DObmJ5mhehNlbS23ilXYxQMAhLo0QsywbkJckAbGI7hyhzbqI18UAh0JBkdZ1NlloQ69CvaBajgvanv+Es2YF6hyP3VPqYUfN3V/chfQMsNAm2ILbKuB5c6zraVDY606ohSce62FD/iCJAbTCnhh9U7oMAQoslFGANwB89KibVNrPYASpH/n51UC00anH8P7vODFDtDUvy1/x/q5QoB8mCUJs7tNXe3kXAVWu4jC5BTyp+Ri+Ibuci1zixC1cY93yl55JCBehJDIPuGuGY8myVRVx0MVPlNBt5f6saHl5SOWAq9oS39ucMY/CQy4t4IkO/dRa6trOjteNMmLCproGUuoiAaRK9Psmlfec8Tte6hjBkELWtaPhJCAXof650Y3Q4hCmKDL/jX575lZpW1T/l2BlZ3aaqI3l6EBO2sBSnU54aYZ0OOpMc1aO3wh5VBCxT/ibCfYUrfFdN+/as+ODKG48sl3GnePdJUUKwSD5CBYRO9DwUwmfm/aNVOxaN8+FnF6w1bV1KOUMBfMgzdZKkBN+qWOq8xHK34T06/74VmD5gUB+JbjeRrSO6Aoj6lU5rHE4N+RFEb0XZ5J53rLDJMoDfGk0OoVopm8egJ8a4FxtjcwN+c/nhwXCOj6ZCY0mkhf13VrZCiBBVhG0RaQg1k4MHaJh297HrwYKDrX1rgupZVZz4cpZE2PLNcDo8O8wrYEJJHqGVm7wuU0/PfIT1ApdH+CV1sNhA0jzgqfMfv9c9dNATUMLodptMLBb1eUYWGSH6a6A1Uv0EeSYbVPG6w7D8XDIoOkJ7ijG89/uGSE0t/p0tzNVebEH3/YyQlLQTrs+JiOSI5ZAMkUCUXiYIppcHOgjpcc8UnKqTTQToNmPe9mTeT+fIwWNgmAvJiL4owav5knsbVKa4UPDcFinWWMKpcHOzzGB8WDy8S7KAAAA=",Tm="data:image/webp;base64,UklGRnYLAABXRUJQVlA4WAoAAAAQAAAA2wAA5gAAQUxQSFYAAAABd2CQbeTcHcHV4BU+IiIergNgE9m2k/eTgd9SgZusAQV0mKLDAFJyjk5ufSP6PwFSN0BjaX+owYmlerH0P/1P/9P/9D/9z+rfWLoFS1G+SHonYQTUC1ZQOCD6CgAA8D0AnQEq3ADnAD6dTJ9MJiUnJCQ1WkCwE4lpbt1frzw/9d4f1/MTvurz49tMvUGFygFhI8Z3zv2wc8RVeT6QSAHJYtww26qvJ9IJCLVww26qvJ9IJCLVwklkVIRd7P+HHH9BxszwgGnkXRO///98t+sh6BpYWbWPw3+gG05AOKtY8in8Ij9dza45brYt0ZqZzB0KR9nrm2TykEDx/nNuYRwW7YUAI2CXlWdHWpvgA+HWxGZFMKFrGiRCS9Ke1CkddFP6BH4yGFTVW7obxQClvBN2Bh3tBo13HXU+kEqrbO3lKKTagxJPesRTQvqkaUdHANM7IcFELVEdhJ+RLlNeb8zAwf5QUWsx+QjsLjosAZ0X9DjtnCdemc2IRZErJ9KD0dTPDbqjJpApFMQ1SZuGdU7tJUFHBNeK/3eujEXPl+qvFnslR4BLMjXDPIQ32MNbRBOXRIsq5qmUimsPLnYO4wnGuPYTtAbL+StxU8RVQCslhT6zc14T37C486qWeZYuLBpf4eQquCfZVBIRY4K2fqczQ8yRPJNyMSzyjT9l8ApMeXcMAi/Bz9fF8FcXDDQcVXCdun4wjj/6y5PdCWmh5ZNi6v3jpOJKgb/CWvmbJ/ZRYYmINLsSZC5kkFl7PafuIRcJM+en1fWFIc7c1VJKVvWlGb7ybWOAAP72Jxwq8Rl/WhJKAAAAAAXDvp40+NHR//5cRNJ4vFoLaEujJkh707NFYI9Xh+ZFxqFEGefn6UJ0k+kSsJEHyCIPMrdXQ/9ZcQl8Yqo+1M7ujG9T3NcBiG14qViRdH2ZedftE0BI3EvRQAWuDt5t+qQ+OVvsIKSq6lbcUwAJK3f/YfFB7IA5FbyuEZfhJbQ10rbDTU6FEgpGhzgXGXP/F3Uyz900lBakTi1LPwW6DK8/G/+Mrm/vkHqz3D5gc///yXoSC93z9YgZkrEA/X147V/OJ81r/rBj7wiwTEGiYporAdStrd8/trhE/6/f0MGFnLS7eHhiqJQnrpZDU7zJZNG6adF7F60P5Tr0mEyUqqGlh61AUkA5NTzN6pAXOllDZa/iP5+Ej8grTAX++/XFmw985/4HOcg14Z4Zq8BZr16Lnx6l2Jk8rinTynNAooTeJf7oRVtIjQBGuJVKzAMAZoBl15VwMx2L9xoE/+qdeck4lB6wKDVSSTOZzK+K2k/nGjuULonhrour4JcYjXDRB6VaMckAInIPBxFBXOW3ElO3+lYmAl1Y6gXqnWuY2dnNm48s0pnD7pxNP2/XQ1MU+a7qnOKy8/IR8htP0tc0RTp1CJ5XVYDpRxEHIv/D/wWjuV1/oWFhCajm7HX8mxLKOKmNRVRWoi7Yh5zHN+fABvB+cGSKhAQ7MPxxAfDZT6vdInbLge1oR22xESPDAN8LmlLoBRbpZr+UAxjhVK9Ws70K2kV9dxZ8uE/4GcqztG0Pw7yMuVsoftJYZCvxTVR+79dXsmUJTa5jcVh8E5ffxlq3CtJQ0epWUnl50AS8LeXxZL1TPCjo9K1uxPce3psw0e6oz9aHKgG7ikLG569hU0F9C1h19z2oVYcEl15rOyXWpLSaqIQPk6e2it74hhAmbG/u93LziKf/VLVqOK36ZQ4oq7nAhZE0YhsnJvaBWH7GQCVg1NnjtYDc10ZVXraIFwjJw8X5dgWKRwQW26wTC/9kiNb95uR6W16x5zVumjOOy7J9SV+mrFR6/xmyx8te0nYHA1uMAhD87byDq54qNsqcowqgOqqP4ogBIQbtju7QVxJPeoe/2xSPR1iWdeNSW/QKQRakRwUl97D2P497gg7aGzjCudaBuqTd+sNa2bd5isNd+HskIPidBod507aiAjJ35qNEwZpQr4n1PrzeTj9I51e1/k7D9f+ox792RpWpnuXXvD2nyAtxktQQhWqhpK3mxgDGxAdN5Z1+63BypojgOVeNEWQ64WN8ANPZiq+bfRCP+wokMwL9/ZBuDgRkAcJD2W+gOu5JvqLJULyOmFm7CxEK8BaJGkmpWYiOMm5CiAgx6IsdPD8RsBCbDKZzz1ZT0EVRit2zc6/7DwbqX1hMJSs3dRBB1GBAzWSTCgKUaYnyPonHxwN5NKmowVDS4ZUPh5Duj3YzYQ/QjUELU95+hdtLdDenAlKxPja39ocs99Vj+dvgLl1PDRCttncMtLbjUn/Of1q25/QY9r/iY2k7+EHji2NDQSYqjJ19Zm5TOhwxgJGnl/nbdhB7XTXfIZXJO603naANbEIVxl2TmCs65wbfZhL/yTu3kobduAkDouxQHzc5poVLHSGNyMc+TS/76JcNM54G4L2JsPaUOhYVm9NR7QWESCeIM3Np+zekS0489iw/pckVAQ/e00VWJtGVnUcl9m5IxfNk5kBUxjMrk8v9NWGsGH8m+ho5kQq/inyvVUQrAz7JoBEKioAqNdq+U1ZU1G5L309LcnQuyjyT7J/xoGinGlmHl2Yay3V7NHgu2JBBy8+6n+p0HIKPks7xPgUHhBKtkb6MzeMMo6P1z7zQQ/f79k1Kbi9sVXZ4FZ4tCEs6IRUz6umpEiJPnUCB/KrRh03wk3h4tyOt6kORp4NrDy6egWabxAzPENpJKA5GamlJyWQn5T8SRxpRbt++7zcN9GtPkBIYHvtgC55yUFLtCVjxTlZ10vBdnXt4OMhxCFbNXzyi0JXw0ArTLg5MMgCjsM5l02pIB6jnYbQsYAFh3YP4S219FHLlFW59A20DIwMsAv1gwYlU1+TlMQpBexP91HXGn5RPNMF6AZDS7Ujz5y2+Of0Rge7aWszzi9K+xHLso0bQxC+pMl4hN3l5BypRtfFxrEXUfxGjglFW4b4osPk9hrDq8PbB2WkLc/XibB2cII/X65iU8NekFTC2bqlFeZFiSq0W2DrDCFU5sojm8vZz4QubdCGprT9ZnCNcgcf3Oa2GkQ1P3pNdt79GUl77NEHcR712yY1yifQHAFH2yj8Ea+KHi/S6sgBNGbdXo+qjhaaaq/KOagJXUGV4rbsqa0in/zV80/hxPS2PeIjjuKTr/RsDMiYT3t3May0abEgRd7RnDOBuSloL8D2+ot9kLoNVpS8pCZVKqCuboyrpqsLXH3NYRd8npbRyYc/dfDZuEKYWfJa0G3rx3FDK0w6eUaxVoPbeikaCiqGT+87vahwYXXZrahNzsa90BiHNFGcU+mRZigzc/Td44grk++rOkilpS/Hb70wX3BZ89IKZy/KiDsz807QZCCIV16oWnaNn/hGBM7SM50VwEfCyzKN3fETXuMjhoA+Bk3e+lRg6m0q8XHKQikBIA/D5rCW5VYIfDP2B6ABvYgrDjluvuG/v7W8JWIG7+UYEA1NoU5UFkKckrZx+sA01YuLQZUmu1GJ5Ne28qU7Fd+fQnPrpv0BKyz54fnLdRbTxxTUoNch6UTajxYNsZrGvaceShGKwVU2+tWTodksJYPfu2BvGDrM0GB4LRFMTK/5j5qYIgZIlu6Euc7gUgEfwAs8uyN0eVxEgovFkbfgYAlm5I7CFYIf1Lr9hBTdRv0xlzHJWbYEvWRPpojLN+Jp8AiMqOqqUaRE+be7ic0vdT7XlnyaNlTs6gIfTo081csIP+vmmIglTo2KdGR7pehSAWS6vVh0TdSTlaqhZNsBr7I23p9n8Pi9NULeb9FFFtABQKC7mmspasa3B5TZL3QSGjW0fc1IRINmFrVtw9WnDdWynxNMFvZw+PMOTWmqs53HA59iGe9i3QrSh7tyituweBJzAAAA=",Im="data:image/webp;base64,UklGRioJAABXRUJQVlA4WAoAAAAQAAAA2wAA5QAAQUxQSEoAAAABP0AQQJLyqJs8QRoREbh6AzWRJEXhxXwCfnIcIAEJOKDwb2Hijej/BLzmQK9Nh/oTy3asGUb+l//lf/lf/te+PUxkOZPlv0SyDFZQOCC6CAAAEDsAnQEq3ADmAD6dTJ9MqCsnKaOzWaCwE4lnbt1fheYRXGu03MfbLs0/E8d3/v3UXR2VFG7ejEyEBNyU7JeVzhBXi/o//yUwFFETZqluIp58R1pOVXMrS8Fli0vxz8lxFbQ1IZ2DIyLkvQTCyW13YW1jthjo80a++hUNejtkAXphwks3jXzgiAacXAEwuIrP7CdM+cDDcIYZjwgMkArvGWahYCbxKaKZ1Q6j/Li1YMb2nU1UW3mj1zIbnC3ZToGUeqKb3MLOZpCDpqZBnRzvqOWDByzFVGBuDsjSnvGRjxXBQzvhtWj0D4SFS+8Rqc1MaaHvPOlVrQukHZbRI6b+6eITF/hWRQ07f4C5LZfCfB6VzCeBGJOcml2ar5mswPml8YLf+zrLOW2tw8kA/ZTqYnOHVNesJE0VOx0TUFSMOJmIdSXxuwT7WNQGttR/DNV44+1S8fGjIbGhcb4S9FUT+Fnzkm5hy6MW91v1G4mzkivDH+zPMatIn1YVvqcrxaDExQ1YYmM/KFLvMiznoU+eKMtWlwLkx+j2PW3PXsIQQ1kVEozEQ6EZQmuAwnoyvBNcgczjOIvyOVlS+6y3P9jb7UzEaydhe/TTLw3UU1K/+k7xg5d66lmC2FVGYfmF7K0YAAD++XCcVsDDUVvZ1MaOk9Dn1AK3Zfza57prJBreLDShoJ/qH+IuhrgAABRpH3dHhGTGug/EyTXY6OcgpmrZIZ9YbVUXWtoY8D1H3mbzznQVOQ1ZWxaY5XPW9F1rwx5cUpBryXO5oCMMQJFDWIJe+UrqIIbQio2Bbqx/pTofzZaImvehcTv7rXJxhnR+vuPfJjfCObhHFzOj0vMcwt+sFNP05bLNJjsKWFGDiRxr9TI4kABV7pdxZk5Lf7Y+hwiDPFJo5i2KuWD4hKpjBpb6NFESh6PKHXF9NH+Si30GqXRRm8AebiEou1iJZrA6k+zzhaObqYhwhSWd5dBfvuXtqV6zIro8fV+7OcIPsT7XMthskeWHEhdQj21zqA54R6fCaTpthG2KCrt2r3N8hOh2lhY6Qp7XNKKxkL14CWkvmHlqFKq+yhPbS3n8lz81iCmfTAYVIku5zTae2pCL5ohqhQVX6z9GcBDjjmCIKh7trJOAa7TZ2E8lwNKvn8lJGE8/hvWlZXpiWOJhPwMuYyIu8t0ChMqhuVErRgjR76U1rO4Khj6kgkIs9FH7/2pmhp4imyOynFV1Oc3QgYhqdcb4+pv/W5a2Sc6gAPmI/GOPh+d9Gqy36Cnbn0hXZGv87JR7YtjPY6PktLgbscWyNJk4uGr08Mm1BE2rx+IqC6HRmryibNyt2vDdf/qkYpQjcE5QiHPkrbY8HzEPC3cVwQntKLgvkl22WIDp+WWhYkAItSvzhDDq/G4siEimcbFDqUlzU0mJdqwqbCCspOtW0lhSml3RSFLcdtaJzi4LUohtl7tq6XG30ZfL/+ckA/UeNGYzvTF2yhx4Qk5G8FA20PdY00e/3D4UkfRnEWwp7HbL/ABLys6mY1RBeTPONwm8UQ3Y+DCnzjsuNzsGr6kMowZ1nY0gBZw5I9DX5Wn3aIN5MD6bXKCHO4bhTtzf3Per5UY3nihWqefO4ehJzuFKj+UycwSheS1M4ViS+XV7FTFzp9XmHRoyTtIolJTue6Xdxj77S2B442TCQJZTlbhLtTNQB9T73P9HxC/56SYSEwMtX2JVXfYWrG0d3H/Nq6PQfwLsu6/hN0Q9VSAeP5gRvqsUVQvBb/3b147BWd1OjfWXar5jkoMLgBgroWpjbv77DVcK2IQOaqBauGbD2bKlWn0cZiR30NUWJLjpFq47j0NIBYlnSwS/0SyW9wLSA9fgZvxjAvK27FVVsdiqCcCa3agREk19ePQ0QBxW8Xx2/MH4Q+gIWbFaIKUt3ZXPOOENRpTXSXvEmoCGmlyKzx1ItcPCvoJtdBU61p4ENct0V1Sb094/G0JQABOahQq0ErCpvOGi5DemlP1raJs/4PwAHm1uXrG3l3zgLLQlLNri1tWxfTyPiqtjlJ4pKBqF3O/tlNhQVgZSfVyQMFjyDMkKImXNxFZtBQihiV3J/6R7VlSwVNDduieMqoKRxLULr6in+PCnx+TE5U/sTNBRfH/uwtPEc5N49MdZLtIihdzzETmAZiwi8YwYTuoiBMzcJIcG2EHJeqeciqSpSLIIVQ4Jy693fHuFCUyzI1Phw0kOmQz0323ClZzcmXdWavDemhxLI+Lmoti6AftIsb/pPqvdPa/WHVj26Lq9waKEp77Blo9R71eXOsS1COm9GLC4EQz04UsSofcgz1G5vexTmhgq5wmmJUvxgon5g5bJZzyJbbRG7H7/UA1uFCHJT9QHOYg9GjYRbY+dOX86lH8yEbcdEPEPetwfQMpkOVXl5Lj2/kytBH6QTgC+GhSdxITrT2kLv/WuvVEEf9Bm0kVUBkYRBHVAgXhze1KjZIzD1iYJnEMZUr7KFQueEuEhTl6ERQtWDeaFxd0a6FLcwYeghc8kDjtnglbAQ5nhlLNkso4bNMFNPK0TIn5bRGpe30K81K64GychX6umhI91mSnr2JEmabdOGfV3Pt+dY4jJXh+y/YmlbiWkcsFQYAexbto4fsCz/KLLL+0dr2yepE0jpoR7dvEHAXZvsEssRqEp6ABfskyusBRQX7jhcw2ZjN3MKWf4wlEDUdchIFMFZh7Y2sFWCyOmCCoitGDOFn4XjbkENJrvXzeEMZslf6844AXu8Se2MXV9CZQq5YOJAK2inZacSG+5Hn4+nKuOHe9/7RyGksFpaz5q9gCZ0LR3uwFyZebTeKsga3xGCDwfET4A0alLeqCy/MVRdD6TAJAF93LSFd+CkVdXILsjD7eDf1QW83XseYwWPiXDla5B3lMpHm+EmEoWbQzfwxyp/oVIGpcfGi9c9AIEu/oGYYQbZZEl9gdtBIoMs1cxiTeOzZLeLQJrVzXOHItkyYgDf4AAAAA=",Nm="data:image/webp;base64,UklGRiIPAABXRUJQVlA4WAoAAAAQAAAA2wAA5QAAQUxQSEoAAAABP0AQQJLyqJs8QRoREbh6AzWRJEXhxXwCfnIcIAEJOKDwb2Hijej/BLzmQK9Nh/oTy3asGUb+l//lf/lf/te+PUxkOZPlv0SyDFZQOCCyDgAA8FIAnQEq3ADmAD6dSp9LKCWpJqXzuyiwE4lnbt1eq5oXblAu+xsxm8mdSINvlPELTizyXf7/cN+AWzeWSVaVN5ZJVpU3lklWlTeVMbpdggnI1xwLIj1Fup0EiIFHM8km1qeTsgHarvO0/xqNIHrCjtGzZxrdq6L9Funvud1GVCa840E0KwmWBidl7Hoy41VJL56TgtdvZ+/NSia1XAUmZgJgQN2aQ+6EXpf+PsEZgmhTGdfZyTk33uoglnTYjbUCkSIknICIuVeVS5+rBIdI8jFBalgpQ39PNqYTAIIJvPcpyM+QAvpSytUVEFA4LC2MvUP2C2b+v30b74heeemCXJrcXhqgr9tsyaVmdDUySDduVXEiG32Fr85zme17xky0VFRs3R3eRpF99NGDn+QdqivhhOG+rFHTkaFGVV2GEDw0GCQUClJw7r3+Q3z3Wsb9aoOAZlLxAZyiP5ixssfEu+eDJtS3lM37vOHDBcrPTsSeN2G55cbKqvJLElC4jGmGgxif4CzFc7AmnU6q7mKrQTXxywGRV4oN3hJaAlaG6nszKzjpBjOHDusZAkgxzLw9TeR2hqDeOiXtdE/XxI4XnumaWKsn6jQCyhVppa+ytq+flw3sQqYyYMREUSjzyIvEtaN0AU9s6j8xjLMs6S0Peu0DKptQukzjSR2zaA/6WFQtpRU0RLh/15aq4RwE+RTEB6E1fMTqlBlflYYwvP0YAELASyOr+W8GbBxxRrlju/zeFW1HNg6CXEwpqHWExjalMuPL4Qa29wbQeyDm2Ta9hZroZdmqYfTh5wP447aoRqyvTaBbRSOBjKxDXQougQuvJrzmiZS96dZM2xSTMs8uLNhlCDD/Fd1dHR7/T42jvJkroQ8CdTCV9U1Ku+6wDEwAAP73sAAAAAAAEGfY32odsU0AIR6jvU0XDt5mRptYNsDbXe76qSYJ4NEqCReoYJtmmDmrR+F2JBYBC/XUFcWDBeoonjRSNqIFiqG37KAF/MrnXlYtWcVgixZxc7+q/LY9Mna0iB1ClMFqFq6+juwRoyqQe78+pqVqRywREt4ahLmAQiUUhlfWn2SRmBehiSarSNNyHbCWYmlWL85ndQqbIhnXeztGGD5vcgBVKqrupVk8Mv+XBAG9UtcUtXhUz8jYZJXJK6kTgbijqNlrpk1dnqpnK2PcyppFcwbyKgXmX6F1F/UucS1dOGk/szNwtVoFub7VjGbUIVZwg62iF3BCKmMsbzgBvBJDwD8B83pq9sUCMnokNLzUUJRzZs+eRgfE3wIWZFs2A+VreNmFyKe69TQDO+zfjid20uBebPR7snT/TVTcy73/IFOCEMCgnlQn55WOmEODHKKPV91Tbv+aKXQn1E4BKeJ2Ba7gPa3NDXU9MmRi/C/8bKswn2+ZEXriyY7zUA3pidEaUPyFg9qFFKLCaf6U8stpE0clOZTl3a5IzxeV5F05u97FSZ63f9b8kM1dT3TZbX/rfNf1MmZdyfDEa8IjQ4ksdKxyT96Y2RkqY3kJHQDOnKqQ78OpVvLkK03/sk7LUw6f33lyO8noTNwH6bbKFrwiyGPMWDhKKifHqtAv31eNDaZDERn5nWmjWtk4yyb9KGyppxJv3uiKK66mv1SXbofaXbY/tTL9qeQx75dxuLjYZPgjZZFApJWXw6DLSfy2YPs9UhJLc80QIwBpzSW+7+0bnSJPEoun7AVjxX9eK6+swGiPwGJswma6K0/IUz8i3avzZSxf6KSUbMFFnjnnlpGpVRdAcIE7MdvCc8WIfB/zJqK44gOHSrUVvSwpbRSVodB1YhQYw/jEMHoWjRH53uz2sA4ov+l3TJUyQuTEop93b8nCY877IYrg+aJqN94LFJgzSLmc/LjelzAW4UjUSBks6P/5uCJ3866WrHo8zipMNaryY8XhpA+XuhLy3g7K72FwHJH6u5JnZviW9vAiEcVx/P8WjKZnPJy3IcpWgLBCW9lSK6cJNDzv68Xmc8TK6H9h3/D5U2UbKkWO8+yE+JK9IWzBH6EM8z9lhDC7Rx1YEZxLHp7ZtE8MN+EQqzw+SdBqfkJdFlMjSRu0b8c3GGF0kRNNTP142tGoV1TRFRHKvtrCbvz5Vdrm0J3KSRDR9evMg/45Cte1fuJAZXh2uRW0hSLW7xXA0Po4mEjRJFSslwiQczTUuMChPEIdk2Hhr8OBMrqbG5gWrXUVclj9cgXfTAzVUjkiDxNPyprQFWSEAFBqAZ44WnsTOd6cNa4NE/LG4pAp1XHM7V96rSvee/X4YTMB/cPnyNqSxsIQSxl1icfmujW3ySoj+LuRl1TSi2DbmoWMqp+HZvm2T7RA7+dahjirugzxbCG81Mpr+ejAm6QhyJKsZIthM45gUC5UiMfMSVmI82REIWkIXw+VKG6PR6IxdSJ2gZe+jeKD2GqVEcu1tpjiw1ljwUFERhOD4nJL6G3qmpwRZckVTi4WgRfne9HnC0OOUaNQADpX8lNAZRXdV6n6D4rC8m27GM1URh7gLn+Es+fALbJp7yFua9Dq0JmqBNGXWLyuuWkfVOViEcgHi7YUQ0ysWtlEMksWB7JUsFo8rhYVR+62cCkY5YcRijZr8jSIaRExzf/J7/dgbbdADeAJAe0HES2E5F52ZVwsH0lLAiy+3PB412RidsbKIzYU0IWKSzsHTbwFeru1zoXtljAgqRzBhhvhlEjvYR903VYWg166mip/wrnV9UlK6fGwmYqN9LC4Tc17FYHALQU5g5rXja4E0CfyfjPkjy62USbB7GmHdFhC5njLFqPH4Zot2uCVCWEf+DCO2Bzekobg8CEpDveoGUbI9K4iu0zGKbkPdOFGgI5yxepmvcxkD3UVptwUwGORUIq/oZ2vN9c/O6Qio2qOnATSEztg0ITYbHl2fIdKysHc4yU5oHUbF+qSOjL6a6uv+ti0qFfWX7mn+sPxrxfgcZEf1m2KGq9+YULRwz4w4hTvRzg8Myf5/Mlju81yI88j1ASiDdFVa9wzWK3WsmHGm6rPZC5UWmGQmC7ipasvVcKLaOEuYP9cpB4psXGliOr9FFOJGaUbfD3vdppCeh8SrswWf4hVjOpmLat8imyUyYvoDYZwUjrKGZ6h/vDM6Zrl0JN/HizPHoEw8qlr3BCzLxoxnKKrXiZDO4DFB/THV7XaqiR6m7+KETvNkrOmvhn02W0XJmkAOfUT7P5yZZN6utmT8vx7i/kY+azZfB68UQ1BxTxtkDl59LWBxQtzyN/g3whqxz9kATf0uTR1QEHy9kGtfvHNXgjIUKOJFJqDYCGocDJmpK8pSBUDXW1nRC3xHeMZRj0MGkHOLwjtXndd6/ejEVKu3TkQoIiKXeY/muG++MTF334uw/k+NHgIxwLkvyP2RNxTCSsqefvjG4C3qxEgKYgnRpW4xdOZ8FeCpf5tVYpohZg0DuRLOXnbmFMIVngpFnV3xw91iCllBZ0ZqX9mZoMfY4zfiRbiN/TH2x96sJhqbJFv2z8ER/9oPAm+p8ydbm4Y76TTugno2fh63kzz2eT22zUsKyey1oUcST486no9sR2bQFJ79zTdOErBJ9Dl0mJUjvds6KlcoPd0T9QqHeBg08TsAPjcXGMhcxYI181Ap9x/1dOm/l7/DN6en9WxfT94BNgDEyvqMWT5Vowj8nbdKsmFR+Ogyj3twXeG1VV2Xi6TxrPT/6ER8EPqQcc3ReVcsLrnBN9STGbApCEPBVtJ+mgZEVT3H7cXF0NmWXES2QI7mFFS+vNvo+dzp6Y4L3CN282KZaF4Q6FRcSXyFlExFxhjo5h6dM2hVPTZFYUFNj7/zgmumOeuy/m0QQlEbZBq/D7wwmj/8vysNFrB43zdsKGHmpom5y9lZXpfeTi6qDqvlG5tx+UFyCvMWRuW6O26Kdps0F1Pm5venSNtjvGiGpSnx5//6AUuEtshw/wQBiM5qjau5bJLD5DPFYFuEPhX9x+bcnfMDqlMXey6mlVQyk46TgEcAvnB6SrgOyKrFwUFjlpV7IMhhpBEY7Z/r73t0kaYdZn7PEAGNWXmMyNmFtmiJOh/XP9N619RFQ5WIXLVLdLPCCFJCklOmoYJ1oWQL0natxyn3/IUtu4jZnLqIHdl06VgEb0RD8SRyqOR5P4zvw5R8F6Lfk2ZsN+HIuBW1DPBD9ElDpEN90IopXOXspaE8kBxgniXpHX9X+INuLjCpefYpXslkNl+kqDgGAOHQouykcMxUIOq0do6iB2SUxSBX4jjkC7Ir/KjsDFkpY74KyvxkTIHntXCQ/4bxmFtEcN1vez8V5Chrd8uQhtrS+11RzsbOgrPet6j8nDb3JmorFUZE2+MHGM9u3rCWBukNua3ZWBeGEP9NybHFMY6ygfG7kDSzHvWn2L+lgsk9lXiyxc2PCz1H8J12yuhuyRZ/suJGl4pnTrH1P14/Nbih168Z6ElJKnDIWZUeoq5nDW45vGbbhcC5qheOgfDlyVU9USaqPGDi9wNSRbCrrrmtqH0+4U9/aFhXIgpBFa7Otz7xggyFPUJky77HCB6CuXKJrOVfLPMiEMKdZeV1vVTautkP1BfjUYT2d64IijefR8L5GM0kmwrMVcanUXwxCVkyE4gqQoUN+UOappsI+KLAmZYFChpq20Cg+yihNWm7MUfu29lsfnxrZliKgZqQ1Ea6Er0v+gZkMU16hlJTKyJ9zc3RJ+MSqhA8SdS7CXeN4MNAe4AJI/JtLDVSgz3UL4jnBYH8tbrBC36f/YDdS9I4wVcGPVl4HaDPcDWn8DE1WbcwBuJkCwSQ1EAVbqNwKZDv9833+j2qTI0pQQQ6fSjBp0c9EVScyd36YbgFobBgFbyO21puQqNPfN0cDwA2pVSRVjgISCmBH7xpbTGJCiXq/TRnoNZU4w7xaG6o6S3GWXBkoXt6ybstHj4yOk50/FiIKZuSyRj8+HfU5aJrBGOiTEPW+nlVC236lk1YFXY3Rzl7E40S+B86hQ8J0HEZ4jT4BV5L6BtGvATCvghnjZB3Qo+ME8cqYERSAAA",bs="/Big-lapa/assets/rectangle2.c1bba7be.png";const zm=x.section`
  padding: 120px 0;

  @media (max-width: 767px) {
    padding: 80px 0;
  }
`,jm=x(re)`
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
`,Hm=x.div`
  background-image: url(${bs}), url(${bs});
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
`,fu=x.img`
  width: 100%;
`,$m=x.div`
  flex: 0 0 60%;
  max-width: 624px;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`,Um=x(Ne)`
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 767px) {
    margin-bottom: 25px;
  }
`,U1=x.p`
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`;function Vm(){return a(zm,{children:w(jm,{children:[w(Hm,{children:[w("div",{children:[a(fu,{src:Om,alt:"dog1"}),a(fu,{src:Im,alt:"dog3"})]}),w("div",{children:[a(fu,{src:Tm,alt:"dog2"}),a(fu,{src:Nm,alt:"dog4"})]})]}),w($m,{children:[a("li",{children:w(Um,{children:["\u041F\u043E\u0434\u0430\u0440\u0443\u0439 \u0441\u043E\u0431\u0430\u043A\u0430\u043C \u043D\u043E\u0432\u0443 \u043D\u0430\u0434\u0456\u044E ",a("br",{})," \u043D\u0430 \u0449\u0430\u0441\u043B\u0438\u0432\u0435 \u0436\u0438\u0442\u0442\u044F!"]})}),w("li",{children:[a(U1,{children:"\u041F\u0440\u0438\u0454\u0434\u043D\u0443\u0439\u0442\u0435\u0441\u044C \u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u0441\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0438 \u043B\u044E\u0434\u0435\u0439 \u0437 \u0432\u0435\u043B\u0438\u043A\u0438\u043C \u0441\u0435\u0440\u0446\u0435\u043C, \u044F\u043A\u0456 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u044E\u0442\u044C \u0446\u0438\u043C \u0431\u0435\u0437\u0437\u0430\u0445\u0438\u0441\u043D\u0438\u043C \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C \u0437\u043D\u0430\u0439\u0442\u0438 \u0441\u0432\u043E\u0457\u0445 \u0432\u0456\u0440\u043D\u0438\u0445 \u0434\u0440\u0443\u0437\u0456\u0432. \u041D\u0430\u0448 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u0434\u043B\u044F \u0437\u0431\u043E\u0440\u0443 \u043F\u043E\u0436\u0435\u0440\u0442\u0432 \u0454 \u0437\u0432`\u044F\u0437\u043A\u043E\u043C \u043C\u0456\u0436 \u0432\u0430\u043C\u0438 \u0442\u0430 \u0446\u0438\u043C\u0438 \u0442\u0432\u0430\u0440\u0438\u043D\u0430\u043C\u0438, \u044F\u043A\u0456 \u043F\u043E\u0442\u0440\u0435\u0431\u0443\u044E\u0442\u044C \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0438. \u0420\u0430\u0437\u043E\u043C \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0437\u043C\u0456\u043D\u0438\u0442\u0438 \u0457\u0445\u043D\u0454 \u0436\u0438\u0442\u0442\u044F \u043D\u0430 \u043A\u0440\u0430\u0449\u0435"}),a(U1,{children:"\u041A\u043E\u0436\u0435\u043D \u0432\u0430\u0448 \u0432\u043A\u043B\u0430\u0434 \u043C\u0430\u0454 \u0432\u0435\u043B\u0438\u043A\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043F\u043E\u043B\u0456\u043F\u0448\u0435\u043D\u043D\u044F \u0457\u0445\u043D\u044C\u043E\u0433\u043E \u0434\u043E\u0431\u0440\u043E\u0431\u0443\u0442\u0443. \u0412\u0430\u0448\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454 \u043D\u0430\u043C \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0443\u0432\u0430\u0442\u0438 \u0431\u0435\u0437\u043F\u0435\u0440\u0435\u0431\u0456\u0439\u043D\u0443 \u043C\u0435\u0434\u0438\u0447\u043D\u0443 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443, \u043D\u0430\u043B\u0435\u0436\u043D\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F, \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u0439 \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A \u0442\u0430 \u0432\u0441\u0435\u0431\u0456\u0447\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434 \u0434\u043B\u044F \u0441\u043E\u0431\u0430\u043A"}),a(U1,{children:"\u0412\u0430\u0448\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u043C\u0430\u0454 \u0432\u0435\u043B\u0438\u043A\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u0436\u0438\u0442\u0442\u044F \u0446\u0438\u0445 \u0442\u0432\u0430\u0440\u0438\u043D. \u041A\u043E\u0436\u0435\u043D \u0432\u0430\u0448 \u0432\u043D\u0435\u0441\u043E\u043A \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454 \u043D\u0430\u043C \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0441\u043E\u0431\u0430\u043A\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0443 \u043C\u0435\u0434\u0438\u0447\u043D\u0443 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443, \u043D\u0430\u043B\u0435\u0436\u043D\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043D\u043D\u044F, \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0435 \u043C\u0456\u0441\u0446\u0435 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F \u0456 \u043D\u0430\u043B\u0435\u0436\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434."})]})]})]})})}var Wm="/Big-lapa/assets/financial-support.ff00ef78.webp",Qm="/Big-lapa/assets/other-support_1.704056d3.webp";const Zm=x.section`
  @media (max-width: 767px) {
    padding-bottom: 80px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-bottom: 100px;
  }
  @media (min-width: 1280px) {
    padding-bottom: 120px;
  }
`,_m=x(Ne)`
  text-align: center;
  margin-bottom: 60px;
`,qm=x.div`
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
`,As=x.div`
  text-align: center;
  flex: 0 1 43%;
  @media (max-width: 1024px) {
    width: 75%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`,Ls=x.img`
  border-radius: 4px 4px 0 0;
  width: 100%;
`,Bs=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.green};
  height: 33%;
  padding: 24px 0;
  border-radius: 0 0 4px 4px;
`,Ps=x(ue)`
  text-align: center;
  margin-bottom: 16px;
  color: ${({theme:e})=>e.colors.background};
  @media (max-width: 767px) {
    margin-bottom: 8px;
  }
`,Rs=x.p`
  color: ${({theme:e})=>e.colors.background};
  max-width: 440px;
`;function Gm(){return a(Zm,{children:w(re,{children:[a(_m,{children:"\u042F\u043A \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A "}),w(qm,{children:[w(As,{children:[a(Ls,{src:Wm,alt:"bowl with dog food"}),w(Bs,{children:[a(Ps,{children:"\u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430"}),a(Rs,{children:"\u041E\u0434\u0438\u043D \u043A\u043B\u0456\u043A - \u043E\u0434\u043D\u0430 \u043F\u043E\u0440\u0446\u0456\u044F \u043A\u043E\u0440\u043C\u0443"})]})]}),w(As,{children:[a(Ls,{src:Qm,alt:"dog toys"}),w(Bs,{children:[a(Ps,{children:"\u041A\u043E\u0440\u043C, \u043B\u0456\u043A\u0438, \u0456\u0433\u0440\u0430\u0448\u043A\u0438"}),a(Rs,{children:"\u0417 \u0440\u0430\u0434\u0456\u0441\u0442\u044E \u043F\u0440\u0438\u0439\u043C\u0430\u0454\u043C\u043E \u043A\u043E\u0440\u043C, \u0437\u0430\u0441\u043E\u0431\u0438 \u0434\u043B\u044F \u043E\u0431\u0440\u043E\u0431\u043A\u0438, \u043B\u0456\u0436\u0430\u043A\u0438 \u0442\u0430 \u0456\u0433\u0440\u0430\u0448\u043A\u0438 \u0434\u043B\u044F \u0446\u0443\u0446\u0435\u043D\u044F\u0442"})]})]})]})]})})}const Km=x.section`
  padding: 120px 0;

  @media (max-width: 1279px) {
    padding: 100px 0;
  }
  @media (max-width: 767px) {
    padding: 80px 0;
  }
`,Xm=x(Ne)`
  text-align: center;
`,Jm=x(de)`
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
`;function Ym(){const[e,t]=p.exports.useState([]);return O0({category:"partners",state:e,setState:t}),a(Ue,{children:e.length!==0&&a(Km,{children:w(re,{children:[a(Xm,{children:"\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u0438"}),a(Jm,{children:e.map(n=>{var u;return a("img",{src:(u=n==null?void 0:n.encodedBase64)!=null?u:n.src,alt:"partner"},n.id)})})]})})})}var eC="/Big-lapa/assets/1441.e039445f.png",tC="/Big-lapa/assets/1442.b833e787.png",nC="/Big-lapa/assets/1443.a9de4269.png",uC="/Big-lapa/assets/1444.a6b10b3e.png";const hu=[{image:eC,title:"dog 1",heading:"Big Lapa - \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A \u0434\u043B\u044F \u0441\u043E\u0431\u0430\u043A",paragraph:"\u0417\u043D\u0430\u0439\u0434\u0456\u0442\u044C \u0441\u0432\u043E\u0433\u043E \u0432\u0456\u0440\u043D\u043E\u0433\u043E \u0445\u0432\u043E\u0441\u0442\u0430 \u0443 \u043D\u0430\u0448\u043E\u043C\u0443 \u043F\u0440\u0438\u0442\u0443\u043B\u043A\u0443",id:0},{image:tC,title:"dog 2",heading:"\u041D\u0430\u0448\u0430 \u043C\u0456\u0441\u0456\u044F",paragraph:"\u0414\u0456\u0437\u043D\u0430\u0439\u0442\u0435\u0441\u044F \u0431\u0456\u043B\u044C\u0448\u0435 \u043F\u0440\u043E \u043F\u0440\u0438\u0442\u0443\u043B\u043E\u043A \u0442\u0430 \u0439\u043E\u0433\u043E \u0434\u0456\u044F\u043B\u044C\u043D\u0456\u0441\u0442\u044C",id:1},{image:nC,title:"dog 3",heading:"\u0425\u0432\u043E\u0441\u0442\u0438 \u0448\u0443\u043A\u0430\u044E\u0442\u044C \u043B\u044E\u0431\u043B\u044F\u0447\u0438\u0439 \u0434\u0456\u043C",paragraph:"\u041F\u043E\u0437\u043D\u0430\u0439\u043E\u043C\u0442\u0435\u0441\u044F \u0437 \u043D\u0430\u0448\u0438\u043C\u0438 \u0447\u0443\u0434\u043E\u0432\u0438\u043C\u0438 \u043C\u0435\u0448\u043A\u0430\u043D\u0446\u044F\u043C\u0438",id:2},{image:uC,title:"dog 4",heading:"\u0417\u0432\u2019\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043D\u0430\u043C\u0438",paragraph:"\u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u043D\u0430\u043C, \u044F\u043A\u0449\u043E \u0443 \u0432\u0430\u0441 \u0437\u0430\u043B\u0438\u0448\u0438\u043B\u0438\u0441\u044F \u043F\u0438\u0442\u0430\u043D\u043D\u044F, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0434\u0456\u0437\u043D\u0430\u0439\u0442\u0435\u0441\u044F \u0430\u0434\u0440\u0435\u0441\u0443 \u043F\u0440\u0438\u0442\u0443\u043B\u043A\u0443",id:3}],rC=e=>p.exports.createElement("svg",{width:27,height:47,viewBox:"0 0 27 47",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M0.620401 25.1881L22.9124 46.4281C23.2844 46.7827 23.7785 46.9805 24.2924 46.9805C24.8063 46.9805 25.3004 46.7827 25.6724 46.4281L25.6964 46.4041C25.8773 46.2322 26.0214 46.0253 26.1199 45.796C26.2183 45.5666 26.2691 45.3197 26.2691 45.0701C26.2691 44.8205 26.2183 44.5736 26.1199 44.3442C26.0214 44.1149 25.8773 43.908 25.6964 43.7361L4.7044 23.7361L25.6964 3.74409C25.8773 3.5722 26.0214 3.36529 26.1199 3.13596C26.2183 2.90663 26.2691 2.65966 26.2691 2.41009C26.2691 2.16052 26.2183 1.91356 26.1199 1.68422C26.0214 1.45489 25.8773 1.24798 25.6964 1.07609L25.6724 1.05209C25.3004 0.69751 24.8063 0.499706 24.2924 0.499706C23.7785 0.499706 23.2844 0.69751 22.9124 1.05209L0.620401 22.2921C0.424352 22.4789 0.268276 22.7035 0.161633 22.9524C0.0549895 23.2013 0 23.4693 0 23.7401C0 24.0109 0.0549895 24.2788 0.161633 24.5277C0.268276 24.7766 0.424352 25.0013 0.620401 25.1881Z",fill:"#F9F9F9"})),iC=e=>p.exports.createElement("svg",{width:27,height:47,viewBox:"0 0 27 47",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M26.3796 25.1881L4.0876 46.4281C3.71565 46.7827 3.22148 46.9805 2.7076 46.9805C2.19372 46.9805 1.69955 46.7827 1.3276 46.4281L1.3036 46.4041C1.12266 46.2322 0.97858 46.0253 0.880125 45.796C0.78167 45.5666 0.730898 45.3197 0.730898 45.0701C0.730898 44.8205 0.78167 44.5736 0.880125 44.3442C0.97858 44.1149 1.12266 43.908 1.3036 43.7361L22.2956 23.7361L1.3036 3.74409C1.12266 3.5722 0.97858 3.36529 0.880125 3.13596C0.78167 2.90663 0.730898 2.65966 0.730898 2.41009C0.730898 2.16052 0.78167 1.91356 0.880125 1.68422C0.97858 1.45489 1.12266 1.24798 1.3036 1.07609L1.3276 1.05209C1.69955 0.69751 2.19372 0.499706 2.7076 0.499706C3.22148 0.499706 3.71565 0.69751 4.0876 1.05209L26.3796 22.2921C26.5756 22.4789 26.7317 22.7035 26.8384 22.9524C26.945 23.2013 27 23.4693 27 23.7401C27 24.0109 26.945 24.2788 26.8384 24.5277C26.7317 24.7766 26.5756 25.0013 26.3796 25.1881Z",fill:"#F9F9F9"})),oC=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 96px);
  user-select: none;
  color: white;
`,sC=x.div`
  height: 100%;
  width: 100%;
`,lC=x(re)`
  /* padding: 25px; */
`,aC=x.div`
  width: 100%;
  height: 100%;
  display: ${({$isActive:e})=>e?"flex":"none"};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({$background:e,$isActive:t})=>t?`url(${e}) no-repeat`:"none"};

  background-size: cover;
  background-position: center top;

  @media screen and (max-width: 400px) {
    background-position: center;
  }

  h1,
  h2,
  h3 {
    text-align: center;
    padding: 0px 30px;
    @media screen and (max-width: 900px) {
      padding: 0px;
    }
  }
`,cC=x(rC)`
  position: absolute;
  z-index: 5;
  left: calc(4%);
  @media screen and (max-width: 900px) {
    left: calc(20%);
    bottom: 15%;
  }
  &:hover {
    cursor: pointer;
  }
`,dC=x(iC)`
  position: absolute;
  z-index: 5;
  right: calc(4%);
  @media screen and (max-width: 900px) {
    right: calc(20%);
    bottom: 15%;
  }
  &:hover {
    cursor: pointer;
  }
`,pC=x.span`
  position: absolute;
  display: flex;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 50%);

  @media screen and (min-width: 768px) {
    bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    bottom: 60px;
  }
`,fC=x.button`
  position: relative;
  background-color: ${e=>e.$isActive?"#f9f9f9":"transparent"};
  height: 17px;
  width: 17px;
  border-radius: 100%;
  border: 1px solid #f9f9f9;
  outline: none;
  cursor: pointer;
  margin-left: 40px;

  &::after {
    content: ' ';
    position: absolute;
    width: 17px;
    height: 1px;
    background-color: #f9f9f9;
    left: 150%;
  }
  &:last-child::after {
    display: none;
  }
  &:first-child {
    margin-left: 0;
  }
`;function hC(){const[e,t]=p.exports.useState(0),n=()=>{t(e===hu.length-1?0:e+1)},u=()=>{t(e===0?hu.length-1:e-1)};return w(oC,{children:[a(sC,{children:hu.map((r,i)=>w(aC,{$isActive:e===i,$background:r.image,children:[a(cC,{type:"button",onClick:u}),w(lC,{children:[a(Qn,{children:r.heading}),a(ue,{children:r.paragraph})]}),a(dC,{type:"button",onClick:n})]},i))}),a(pC,{children:hu.map((r,i)=>a(fC,{$isActive:e===i,onClick:()=>t(i)},i))})]})}function mC(){return a(Rm,{"data-testid":"home-page",children:w(Mm,{children:[a(hC,{}),a(Vm,{}),a(Gm,{}),a(Pm,{}),a(Ym,{})]})})}var CC="/Big-lapa/assets/dogM2x.b4dcdf99.png";const Ms=e=>p.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M21.9999 16.9201V19.9201C22.0011 20.1986 21.944 20.4743 21.8324 20.7294C21.7209 20.9846 21.5572 21.2137 21.352 21.402C21.1468 21.5902 20.9045 21.7336 20.6407 21.8228C20.3769 21.912 20.0973 21.9452 19.8199 21.9201C16.7428 21.5857 13.7869 20.5342 11.1899 18.8501C8.77376 17.3148 6.72527 15.2663 5.18993 12.8501C3.49991 10.2413 2.44818 7.27109 2.11993 4.1801C2.09494 3.90356 2.12781 3.62486 2.21643 3.36172C2.30506 3.09859 2.4475 2.85679 2.6347 2.65172C2.82189 2.44665 3.04974 2.28281 3.30372 2.17062C3.55771 2.05843 3.83227 2.00036 4.10993 2.0001H7.10993C7.59524 1.99532 8.06572 2.16718 8.43369 2.48363C8.80166 2.80008 9.04201 3.23954 9.10993 3.7201C9.23656 4.68016 9.47138 5.62282 9.80993 6.5301C9.94448 6.88802 9.9736 7.27701 9.89384 7.65098C9.81408 8.02494 9.6288 8.36821 9.35993 8.6401L8.08993 9.9101C9.51349 12.4136 11.5864 14.4865 14.0899 15.9101L15.3599 14.6401C15.6318 14.3712 15.9751 14.1859 16.3491 14.1062C16.723 14.0264 17.112 14.0556 17.4699 14.1901C18.3772 14.5286 19.3199 14.7635 20.2799 14.8901C20.7657 14.9586 21.2093 15.2033 21.5265 15.5776C21.8436 15.9519 22.0121 16.4297 21.9999 16.9201Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),gC=e=>p.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),p.exports.createElement("path",{d:"M22 6L12 13L2 6",stroke:"#2E2E2E",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),xC=e=>p.exports.createElement("svg",{width:26,height:44,viewBox:"0 0 26 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M24 2H18C15.3478 2 12.8043 3.05357 10.9289 4.92893C9.05357 6.8043 8 9.34784 8 12V18H2V26H8V42H16V26H22L24 18H16V12C16 11.4696 16.2107 10.9609 16.5858 10.5858C16.9609 10.2107 17.4696 10 18 10H24V2Z",stroke:"#2E2E2E",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"})),yC=e=>p.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M11.6 0H28.4C34.8 0 40 5.2 40 11.6V28.4C40 31.4765 38.7779 34.427 36.6024 36.6024C34.427 38.7779 31.4765 40 28.4 40H11.6C5.2 40 0 34.8 0 28.4V11.6C0 8.52349 1.22214 5.57298 3.39756 3.39756C5.57298 1.22214 8.52349 0 11.6 0ZM11.2 4C9.29044 4 7.45909 4.75857 6.10883 6.10883C4.75857 7.45909 4 9.29044 4 11.2V28.8C4 32.78 7.22 36 11.2 36H28.8C30.7096 36 32.5409 35.2414 33.8912 33.8912C35.2414 32.5409 36 30.7096 36 28.8V11.2C36 7.22 32.78 4 28.8 4H11.2ZM30.5 7C31.163 7 31.7989 7.26339 32.2678 7.73223C32.7366 8.20107 33 8.83696 33 9.5C33 10.163 32.7366 10.7989 32.2678 11.2678C31.7989 11.7366 31.163 12 30.5 12C29.837 12 29.2011 11.7366 28.7322 11.2678C28.2634 10.7989 28 10.163 28 9.5C28 8.83696 28.2634 8.20107 28.7322 7.73223C29.2011 7.26339 29.837 7 30.5 7ZM20 10C22.6522 10 25.1957 11.0536 27.0711 12.9289C28.9464 14.8043 30 17.3478 30 20C30 22.6522 28.9464 25.1957 27.0711 27.0711C25.1957 28.9464 22.6522 30 20 30C17.3478 30 14.8043 28.9464 12.9289 27.0711C11.0536 25.1957 10 22.6522 10 20C10 17.3478 11.0536 14.8043 12.9289 12.9289C14.8043 11.0536 17.3478 10 20 10ZM20 14C18.4087 14 16.8826 14.6321 15.7574 15.7574C14.6321 16.8826 14 18.4087 14 20C14 21.5913 14.6321 23.1174 15.7574 24.2426C16.8826 25.3679 18.4087 26 20 26C21.5913 26 23.1174 25.3679 24.2426 24.2426C25.3679 23.1174 26 21.5913 26 20C26 18.4087 25.3679 16.8826 24.2426 15.7574C23.1174 14.6321 21.5913 14 20 14Z",fill:"#2E2E2E"})),wr=x.input`
  width: ${({width:e})=>e||"80%"};
  padding: ${({theme:e})=>e.paddings.input};
  background-color: ${({theme:e})=>e.colors.background};
  caret-color: ${({theme:e})=>e.colors.yellow};
  color: ${({theme:e})=>e.colors.dark};

  ${({withSvg:e})=>!e&&Mt`
      padding: ${({theme:t})=>t.paddings.input};
      outline: 1px solid ${({theme:t})=>t.colors.yellow};
      border-radius: 4px;
      &:focus {
        outline: 2px solid ${({theme:t})=>t.colors.yellow};
      }
    `}
  ${({iserror:e})=>e&&Mt`
      border-radius: 4px;
      border: 2px solid #ff4141;
      background: #ffebeb;
    `}
    ${({changecolor:e})=>!e&&Mt`
      border-radius: 4px;
      border: 2px solid #e8b535;
      background: #f9f9f9;
    `}
`,vC=x.section`
  margin-bottom: 80px;
  @media (min-width: 767px) {
    margin-bottom: 100px;
  }
  @media (min-width: 1279px) {
    margin-bottom: 80px;
  }
`,wC=x(Ne)`
  text-align: center;
  margin-bottom: 60px;
`,EC=x.img`
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
`,SC=x.ul`
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
`,mu=x.li`
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
`,kC=x.div`
  display: flex;
  gap: 20px;
  margin-left: 14px;
  @media (min-width: 767px) {
    margin-left: 32px;
  }
  @media (min-width: 1279px) {
    margin-left: 32px;
  }
`,FC=x(xC)`
  &:hover path {
    stroke: ${({theme:e})=>e.colors.yellow};
  }
`,DC=x(yC)`
  &:hover path {
    fill: ${({theme:e})=>e.colors.yellow};
  }
`,bC=x.div`
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
`,AC=x.div`
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
`,LC=x.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 40px 0 44px;
`,BC=x.div`
  display: flex;
  flex-direction: column;
  gap: 61px;
  @media (min-width: 1279px) {
    flex-direction: row;
    gap: 24px;
  }
`,Os=x(wr)`
  width: 100%;
`,PC=x.textarea`
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
`,RC=x(ae)`
  width: 100%;
`;function MC({setIsModalOpen:e}){const[t,n]=p.exports.useState({email:"",first_phoneNumber:"",second_phoneNumber:""});O0({category:"contacts",state:t,setState:n});const u=r=>{r.preventDefault(),e(!0)};return a(vC,{children:w(re,{children:[a(wC,{children:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438"}),w(BC,{children:[w(bC,{children:[a(EC,{src:CC,alt:"cute dog"}),w(SC,{children:[w(mu,{children:[a(Ms,{}),a("a",{href:`tel:${t==null?void 0:t.first_phoneNumber}`,children:t==null?void 0:t.first_phoneNumber})]}),w(mu,{children:[a(Ms,{}),a("a",{href:`tel:${t==null?void 0:t.second_phoneNumber}`,children:t==null?void 0:t.second_phoneNumber})]}),w(mu,{children:[a(gC,{}),a("a",{href:`mailto:${t==null?void 0:t.email}`,children:t==null?void 0:t.email})]}),w(mu,{children:[a(f8,{})," ",a("p",{children:"\u0410\u0434\u0440\u0435\u0441\u0430: \u043C\u0456\u0441\u0442\u043E \u041B\u044C\u0432\u0456\u0432, \u0432\u0443\u043B. \u0413\u043E\u0440\u043E\u0434\u043E\u0446\u044C\u043A\u0430, 397"})]})]}),w(kC,{children:[a(DC,{}),a(FC,{})]})]}),w(AC,{children:[a(Ne,{$marginBottom:"24px",children:"\u0417\u0432`\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043D\u0430\u043C\u0438"}),a("p",{children:"\u042F\u043A\u0449\u043E \u0437\u0430\u043B\u0438\u0448\u0438\u043B\u0438\u0441\u044F \u043F\u0438\u0442\u0430\u043D\u043D\u044F, \u043D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u043D\u0430\u043C"}),w("form",{onSubmit:u,children:[w(LC,{children:[a(Os,{className:"name",placeholder:"\u0406\u043C\u2019\u044F"}),a(Os,{type:"email",className:"email",placeholder:"\u041F\u043E\u0448\u0442\u0430"}),a(PC,{name:"questions",placeholder:"\u041F\u0438\u0442\u0430\u043D\u043D\u044F"})]}),a(RC,{type:"submit",children:"\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438"})]})]})]})]})})}var OC="/Big-lapa/assets/lapasS.0d643802.png",TC="/Big-lapa/assets/lapaM12x.a8af177e.png",IC="/Big-lapa/assets/lapaM22x.963d85d6.png",NC="/Big-lapa/assets/lapaL12x.af319c02.png",zC="/Big-lapa/assets/lapaL22x.ce776028.png",jC="/Big-lapa/assets/lapaXL12x.cdb594b4.png",HC="/Big-lapa/assets/lapaXL22x.b91ba78e.png";const $C=x.section`
  background-image: url(${OC});
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: contain;
  background-color: ${M.colors.green};
  color: ${M.colors.background};
  margin-bottom: 80px;
  padding-bottom: 18px;

  @media (min-width: 767px) {
    background-image: url(${TC}), url(${IC});
    background-repeat: no-repeat;
    background-position: 10% 0, 90% 100%;
    background-size: 60%;
    margin-bottom: 100px;
    padding-bottom: 32px;
  }
  @media (min-width: 1279px) {
    background-image: url(${NC}), url(${zC});
    background-repeat: no-repeat;
    background-position: 10% 0, 90% 100%;
    background-size: 60%;
    margin-bottom: 120px;
    padding-bottom: 52px;
  }
  @media (min-width: 1439px) {
    background-image: url(${jC}), url(${HC});
    background-repeat: no-repeat;
    background-position: 0 0, 100% 100%;
    background-size: 60%;
    margin-bottom: 120px;
    padding-bottom: 44px;
  }
`,UC=x(Qn)`
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
`,VC=x.div`
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
`,WC=x(pt)`
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
`,QC=e=>p.exports.createElement("svg",{width:130,height:17,viewBox:"0 0 130 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("rect",{x:.5,y:.5,width:16,height:16,rx:8,stroke:"#F9F9F9"}),p.exports.createElement("line",{x1:28,y1:8,x2:45,y2:8,stroke:"#F9F9F9"}),p.exports.createElement("rect",{x:56.5,y:.5,width:17,height:16,rx:8,stroke:"#F9F9F9"}),p.exports.createElement("line",{x1:85,y1:8,x2:102,y2:8,stroke:"#F9F9F9"}),p.exports.createElement("rect",{x:113,width:17,height:17,rx:8.5,fill:"#F9F9F9"}));function ZC(){return a($C,{children:w(re,{children:[w(UC,{children:["\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u0439 \u0434\u0440\u0443\u0433\u0430,",a("br",{})," \u0432\u0440\u044F\u0442\u0443\u0439 \u0442\u0432\u0430\u0440\u0438\u043D\u0443!"]}),w(VC,{children:[a(QC,{}),a(WC,{to:".",end:!0,children:"\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"})]})]})})}const _C=x.div`
  color: ${({theme:e})=>e.colors.dark};
  margin-top: ${({theme:e})=>e.headerHeight};
`,qC=x.div`
  display: grid;
  /* grid-template-rows: repeat(3, calc(100vh - 100px)); */
  grid-template-areas: 'main' 'dontation' 'shelterBlock';
`;var GC="/Big-lapa/assets/ModalPhoto.8202d827.webp";function KC(){const[e,t]=p.exports.useState(!1);return a(_C,{"data-testid":"contacts-page",children:w(qC,{children:[a(w8,{title:"\u0414\u044F\u043A\u0443\u0454\u043C\u043E \u0437\u0430 \u0437\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F!",image:GC,isOpen:e,onClose:()=>t(!1)}),a(ZC,{}),a(MC,{setIsModalOpen:t})]})})}const XC=x.section`
  color: ${M.colors.dark};
  margin-top: ${M.headerHeight};
  padding-top: 24px;
  padding-bottom: 48px;

  @media (max-width: 1279px) {
    background-color: rgb(181, 194, 104, 50%);
    padding-top: 50px;
  }

  @media (max-width: 767px) {
    padding-top: 25px;
  }
`,JC=x.div`
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
`,YC=x(de)`
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
`,eg=x.div`
  flex: 1;
`,tg=x.div`
  flex: 1.2;
  max-width: 560px;

  @media (max-width: 1279px) {
    max-width: 100%;
  }
`,ng=x.div`
  display: flex;
  align-items: end;
  gap: 16px;
  margin-bottom: 30px;
  line-height: 1;
  h2,
  h3 {
    margin: 0;
  }
`,ug=x(de)`
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    margin-bottom: 0px;
  }
`,rg=x.p`
  font-size: ${M.fontSizes.subheadline};
  margin-bottom: 8px;

  @media (max-width: 767px) {
    font-size: ${M.fontSizes.mobileSubheadline};
  }
`,ig=x.div`
  font-weight: ${M.fontWeights.semiBold};
  padding: 8px 16px;
  background-color: ${M.colors.background};
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
`,og=x.div`
  p {
    white-space: pre-line;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`,sg=x.div`
  display: none;
  p {
    white-space: pre-line;
  }
  @media (max-width: 1024px) {
    display: block;
  }
`;function Cu({text:e,value:t,children:n}){return w("div",{children:[a(rg,{children:e}),w(ig,{children:[n,t]})]})}const lg=x.img`
  cursor: pointer;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ag=x.div`
  aspect-ratio: 1 / 1;
  min-height: 100%;

  border: ${e=>e.$isActive?"2px solid white":"1px solid transparent"};
  border-radius: 3px;
  @media (min-width: 768px) {
    min-height: 100%;
  }
`,cg=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,dg=x.div`
  overflow: hidden;
  position: relative;
  width: 290px;
  min-height: 67px;

  @media (min-width: 768px) {
    width: 456px;
    min-height: 88px;
  }
`,pg=x.div`
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
`,fg=x.div`
  position: relative;
  overflow: hidden;
  display: flex;
  gap: 16px;
  padding: 0 10px;
  max-width: 476px;
`,hg=x.div`
  display: flex;
  justify-content: center;
  height: 455px;
  margin-bottom: 18px;
  @media (min-width: 768px) {
    height: 600px;
    width: 476px;
    margin-bottom: 24px;
  }
`,mg=x.img`
  width: 100%;

  border-radius: 4px;
  object-fit: cover;
`,Cg=x.button`
  padding-left: 6px;
`,gg=x.button`
  padding-right: 6px;
`;var xg="/Big-lapa/assets/dog2.62884c98.png",Ts="/Big-lapa/assets/dog3.7d00b5dd.png",yg="/Big-lapa/assets/dog4.64488f8b.png",vg="/Big-lapa/assets/dog5.0e3db84d.png";const wg=e=>p.exports.createElement("svg",{width:14,height:24,viewBox:"0 0 14 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M0.310201 12.344L11.4562 22.964C11.6422 23.1413 11.8893 23.2402 12.1462 23.2402C12.4031 23.2402 12.6502 23.1413 12.8362 22.964L12.8482 22.952C12.9387 22.8661 13.0107 22.7626 13.0599 22.648C13.1092 22.5333 13.1346 22.4098 13.1346 22.285C13.1346 22.1603 13.1092 22.0368 13.0599 21.9221C13.0107 21.8074 12.9387 21.704 12.8482 21.618L2.3522 11.618L12.8482 1.62205C12.9387 1.5361 13.0107 1.43265 13.0599 1.31798C13.1092 1.20331 13.1346 1.07983 13.1346 0.955046C13.1346 0.830259 13.1092 0.706778 13.0599 0.592112C13.0107 0.477446 12.9387 0.373991 12.8482 0.288046L12.8362 0.276045C12.6502 0.0987549 12.4031 -0.000146866 12.1462 -0.000146866C11.8893 -0.000146866 11.6422 0.0987549 11.4562 0.276045L0.310201 10.896C0.212176 10.9894 0.134138 11.1018 0.0808163 11.2262C0.0274948 11.3507 0 11.4847 0 11.62C0 11.7554 0.0274948 11.8894 0.0808163 12.0139C0.134138 12.1383 0.212176 12.2507 0.310201 12.344Z",fill:"#2E2E2E"})),Eg=e=>p.exports.createElement("svg",{width:14,height:24,viewBox:"0 0 14 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M13.6898 12.344L2.5438 22.964C2.35782 23.1413 2.11074 23.2402 1.8538 23.2402C1.59686 23.2402 1.34978 23.1413 1.1638 22.964L1.1518 22.952C1.06133 22.8661 0.98929 22.7626 0.940063 22.648C0.890835 22.5333 0.865449 22.4098 0.865449 22.285C0.865449 22.1603 0.890835 22.0368 0.940063 21.9221C0.98929 21.8074 1.06133 21.704 1.1518 21.618L11.6478 11.618L1.1518 1.62205C1.06133 1.5361 0.98929 1.43265 0.940063 1.31798C0.890835 1.20331 0.865449 1.07983 0.865449 0.955046C0.865449 0.830259 0.890835 0.706778 0.940063 0.592112C0.98929 0.477446 1.06133 0.373991 1.1518 0.288046L1.1638 0.276045C1.34978 0.0987549 1.59686 -0.000146866 1.8538 -0.000146866C2.11074 -0.000146866 2.35782 0.0987549 2.5438 0.276045L13.6898 10.896C13.7878 10.9894 13.8659 11.1018 13.9192 11.2262C13.9725 11.3507 14 11.4847 14 11.62C14 11.7554 13.9725 11.8894 13.9192 12.0139C13.8659 12.1383 13.7878 12.2507 13.6898 12.344Z",fill:"#2E2E2E"}));function Sg({src:e}){const t=[{image:e,title:"dog 1",id:0},{image:xg,title:"dog 2",id:1},{image:Ts,title:"dog 3",id:2},{image:yg,title:"dog 4",id:3},{image:vg,title:"dog 5",id:4},{image:Ts,title:"dog 5",id:5}],[n,u]=p.exports.useState(0),r=l=>{u(l)},i=()=>{u(n===0?t.length-1:n-1)},o=()=>{u(n===t.length-1?0:n+1)},s=t[n];return w(cg,{children:[a(hg,{children:a(mg,{src:s.image,alt:s.title})}),w(fg,{children:[a(Cg,{onClick:i,children:a(wg,{})}),a(dg,{children:a(pg,{$left:n,children:t.map(({id:l,image:c,title:d},m)=>a(ag,{$isActive:n===m,children:a(lg,{src:c,onClick:()=>r(m),alt:d})},l))})}),a(gg,{onClick:o,children:a(Eg,{})})]})]})}const kg=e=>p.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M30.0816 8.59172C30.0439 8.56106 29.9148 8.45645 29.7964 8.35554C28.1822 7.02139 26.0394 6.21225 23.9509 6.15057C21.7773 6.08774 19.7271 6.76087 17.9328 8.13094C17.6045 8.38372 16.7905 9.18693 16.5411 9.50462C15.7495 10.5228 15.2583 11.4562 14.8997 12.6238C14.0957 15.2363 14.4846 18.0475 15.9838 20.4603C16.1831 20.7787 16.5573 21.2998 16.6669 21.4095L16.7137 21.4562L15.0772 23.0927L13.4408 24.7291L12.1229 23.4043L10.8068 22.0777L10.1645 22.72L9.52037 23.3641L10.8417 24.6854L12.1631 26.0068L10.1241 28.0458L8.08507 30.0848L8.75024 30.75L9.41542 31.4152L11.4544 29.3762L13.4934 27.3372L14.8148 28.6585L16.1362 29.9799L16.7803 29.3358L17.4226 28.6935L16.096 27.3773L14.7711 26.0595L16.4076 24.423L18.044 22.7866L18.0908 22.8333C18.2004 22.943 18.7216 23.3171 19.04 23.5165C21.4528 25.0156 24.2639 25.4045 26.8764 24.6006C28.044 24.242 28.9775 23.7507 29.9956 22.9591C30.3133 22.7098 31.1165 21.8958 31.3693 21.5675C32.0962 20.6141 32.5701 19.7123 32.9139 18.6315C33.8703 15.6219 33.2469 12.3801 31.2132 9.78638C31.0328 9.55693 30.2393 8.71799 30.0816 8.59172ZM29.7592 10.8737C30.5925 11.91 31.1553 13.1414 31.3963 14.4501C31.7329 16.2708 31.3525 18.1937 30.3365 19.8066C29.2284 21.5618 27.352 22.7623 25.1996 23.0953C24.7978 23.1555 24.2165 23.1868 23.8154 23.1672C21.2082 23.0454 18.8178 21.6316 17.4828 19.425C16.302 17.4741 16.0128 15.2177 16.6785 13.139C17.4207 10.8183 19.0884 9.12904 21.3893 8.36704C23.5224 7.66132 25.8214 7.94399 27.7922 9.15522C28.2161 9.41808 28.4328 9.57885 28.9477 10.0132C29.0841 10.1285 29.5986 10.6746 29.7592 10.8737Z",fill:"#2E2E2E",stroke:"#2E2E2E"})),Fg=e=>p.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M32.7041 7.0232C32.617 7.03164 32.1199 7.08439 31.5994 7.13502C31.0789 7.18776 30.2716 7.27004 29.8043 7.31645C29.3369 7.36287 28.0028 7.49789 26.8407 7.61392C25.6786 7.72996 24.3658 7.86076 23.9239 7.90506C23.4841 7.94936 23.1187 7.98945 23.1145 7.99367C23.1038 8.00844 23.3035 9.92826 23.3184 9.94303C23.3269 9.95147 23.5797 9.93248 23.8814 9.90295C24.1831 9.87341 25.5193 9.73839 26.8513 9.60548C28.1833 9.47257 29.5069 9.33966 29.7915 9.31223C30.0783 9.2827 30.3141 9.2616 30.3184 9.26371C30.3205 9.26793 29.6853 9.91139 28.9056 10.6962C24.7821 14.846 23.7284 15.9029 23.7114 15.9029C23.7029 15.9029 23.5818 15.8186 23.4459 15.7173C22.1457 14.7405 20.6225 14.0844 18.991 13.7932C18.0329 13.6245 16.8963 13.6013 15.9318 13.7299C13.6693 14.0359 11.5767 15.0591 10.0047 16.6287C8.9637 17.6688 8.20316 18.8439 7.6678 20.2384C7.15369 21.5823 6.92851 23.0506 7.01986 24.4367C7.2323 27.6266 8.93396 30.5654 11.5597 32.2806C11.9485 32.5337 12.127 32.6392 12.5115 32.8354C14.57 33.8945 16.8517 34.2405 19.0738 33.8354C20.7351 33.5316 22.3688 32.7932 23.6647 31.7595C24.3211 31.2362 24.865 30.6856 25.3664 30.0379C26.522 28.5422 27.2273 26.7911 27.4483 24.8692C27.4929 24.4704 27.512 23.5422 27.4802 23.1498C27.3697 21.7384 27.0192 20.4789 26.3988 19.2468C26.129 18.7088 25.6956 18.0253 25.3324 17.5612L25.1348 17.3122L25.4726 16.9726C25.6595 16.7848 26.1928 16.2468 26.6623 15.7764C27.5524 14.8818 30.8027 11.6118 31.4061 11.0042C31.5994 10.8101 31.7566 10.6519 31.7587 10.6561C31.7609 10.6582 31.7502 10.789 31.7354 10.9451C31.7205 11.1013 31.6886 11.4473 31.6653 11.7152C31.6419 11.981 31.6015 12.4156 31.5782 12.6793C31.5548 12.9451 31.5166 13.3755 31.4932 13.6392C31.353 15.2025 31.1533 17.4683 31.149 17.5485L31.1427 17.6413L32.1305 17.7299C32.6744 17.7764 33.1205 17.8143 33.1226 17.8143C33.1247 17.8122 33.1757 17.2658 33.2352 16.5991C33.2947 15.9325 33.3605 15.1772 33.3839 14.9219C33.4073 14.6667 33.454 14.1308 33.4901 13.7299C33.5241 13.3291 33.5645 12.9029 33.5751 12.7806C33.5857 12.6582 33.624 12.2321 33.6601 11.8312C33.6962 11.4304 33.7323 11.0042 33.7451 10.8818C33.7557 10.7595 33.7961 10.3333 33.83 9.93248C33.8662 9.53164 33.9193 8.94514 33.9469 8.62869C33.9873 8.20253 34 7.91561 34 7.52742V7L33.4328 7.00211C33.1184 7.00422 32.7912 7.01266 32.7041 7.0232ZM18.1943 15.6793C19.5816 15.8692 20.7755 16.308 21.8589 17.0274C23.6604 18.2236 24.9054 20.0886 25.343 22.2426C25.4641 22.8481 25.4917 23.1329 25.4917 23.8354C25.4896 24.4958 25.4683 24.7363 25.3642 25.3017C24.9776 27.3734 23.7624 29.2848 22.0778 30.4662C21.0155 31.2109 19.8322 31.6962 18.5788 31.905C18.0668 31.9894 17.8268 32.0084 17.2489 32.0084C16.4268 32.0084 15.8171 31.9261 15.0268 31.7046C11.7254 30.7763 9.41195 28.0316 9.03593 24.5949C8.97645 24.0633 9.00194 23.1962 9.09329 22.6118C9.43957 20.3987 10.6696 18.405 12.4584 17.1561C13.716 16.2785 15.099 15.7827 16.686 15.6413C16.9112 15.6223 17.9606 15.6477 18.1943 15.6793Z",fill:"#2E2E2E",stroke:"#2E2E2E"})),Dg=e=>p.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M3.00252 3.57694C6.55117 3.13885 10.036 2.64571 13.5362 2.29248C17.0316 1.94041 20.5424 1.94041 24.0545 2.11243C27.6102 2.2856 31.1175 2.82347 34.633 3.31431C35.3907 3.41982 36.1567 3.47716 36.9854 3.56318V4.04943C36.9854 8.51521 37.0232 12.981 36.9771 17.4456C36.8991 24.8576 32.9828 33.5839 22.0567 36.7067C20.5354 37.1414 19.1559 37.0771 17.6794 36.6184C13.4239 35.2949 9.7842 33.1228 7.08193 29.6112C4.89151 26.7636 3.64203 23.5399 3.1822 20.0294C3.05571 19.0672 3.01434 18.0901 3.01079 17.1188C2.99306 12.7826 3.00252 8.4464 3.00252 4.10907V3.57694ZM5.74627 5.59408C5.74391 5.64798 5.73209 5.76037 5.73209 5.87276C5.73209 9.66419 5.69544 13.4568 5.74273 17.2482C5.74627 22.1065 7.47557 25.5162 8.96501 27.9658C11.211 31.6563 14.6202 32.8856 18.8083 34.0129C19.6181 34.2308 20.3687 34.2205 21.1796 34.0129C30.2179 31.6929 34.2177 25.6773 34.2523 16.8606C34.2665 13.2412 34.2546 9.62061 34.2546 6.00006C34.2546 5.83606 34.2546 5.67092 34.2546 5.58834C25.3192 4.15595 14.6652 4.15365 5.74509 5.59408H5.74627Z",fill:"#2E2E2E"}),p.exports.createElement("path",{d:"M29.3403 14.5419C29.1191 14.0197 28.7517 13.6432 28.2775 13.4536L28.2711 13.4512C28.0553 13.3672 27.8255 13.3243 27.5937 13.3246H27.5682C26.4827 13.3408 25.3745 14.2572 24.811 15.6052C24.3978 16.5909 24.3503 17.651 24.6843 18.4412C24.905 18.9637 25.2733 19.3402 25.7494 19.5298L25.7546 19.5318C25.9705 19.6157 26.2003 19.6587 26.4321 19.6585C27.5279 19.6585 28.6477 18.742 29.2215 17.3763C29.6296 16.3918 29.6746 15.3324 29.3403 14.5419ZM25.0031 20.3556C24.377 19.9819 23.7853 19.6284 23.3987 18.9934C22.3324 17.2358 21.6884 16.1748 20 16.1748C18.3116 16.1748 17.666 17.2358 16.5973 18.9934C16.2099 19.6292 15.617 19.9831 14.989 20.3584C14.2689 20.7883 13.5249 21.2325 13.2037 22.1065C13.0788 22.4216 13.0159 22.7576 13.0184 23.0962C13.0184 24.5194 14.1342 25.6773 15.505 25.6773C16.2123 25.6773 16.9651 25.4338 17.7617 25.1761C18.5276 24.9283 19.3194 24.6722 20.004 24.6722C20.6886 24.6722 21.4784 24.9283 22.2415 25.1761C23.0365 25.4323 23.7857 25.6757 24.495 25.6757C25.8638 25.6757 26.9776 24.5178 26.9776 23.0946C26.9787 22.7558 26.9145 22.4198 26.7883 22.105C26.4671 21.2301 25.7228 20.7855 25.0031 20.3556ZM15.776 14.7833C16.2502 15.3744 16.8519 15.6998 17.4704 15.6998C17.5548 15.6998 17.6391 15.6936 17.7226 15.6812C19.0125 15.4927 19.8163 13.929 19.5525 12.1183C19.4421 11.3571 19.1472 10.6481 18.7248 10.1224C18.2514 9.53251 17.6489 9.2075 17.0308 9.2075C16.9464 9.2075 16.8621 9.21372 16.7786 9.22611C15.4887 9.41454 14.6849 10.9782 14.9487 12.7889C15.0587 13.549 15.3536 14.2572 15.776 14.7833ZM22.2778 15.6812C22.3613 15.6936 22.4456 15.6998 22.53 15.6998C23.1489 15.6998 23.7502 15.3744 24.2244 14.7833C24.6464 14.2572 24.9397 13.549 25.0513 12.7881C25.3151 10.9782 24.5113 9.41454 23.2214 9.22531C23.1379 9.21293 23.0536 9.20671 22.9692 9.20671C22.3511 9.2075 21.7486 9.53251 21.2752 10.1224C20.8528 10.6481 20.5579 11.3571 20.4479 12.1191C20.1841 13.929 20.9879 15.4927 22.2778 15.6812ZM14.2454 19.5318L14.2509 19.5298C14.7263 19.3402 15.0942 18.9641 15.3145 18.442C15.6485 17.6502 15.6014 16.5913 15.189 15.6056C14.618 14.2414 13.4986 13.3246 12.4039 13.3246C12.1721 13.3242 11.9423 13.3672 11.7265 13.4512L11.7209 13.4532C11.2467 13.6412 10.8789 14.0189 10.6585 14.5411C10.3246 15.3328 10.3716 16.3918 10.7841 17.3775C11.3551 18.7416 12.4745 19.6585 13.5691 19.6585C13.8005 19.6587 14.0299 19.6157 14.2454 19.5318Z",fill:"#2E2E2E"})),bg=e=>p.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M15.5 15.5H24.5V24.5H15.5V15.5Z",fill:"#2E2E2E"}),p.exports.createElement("path",{d:"M32 11C32 9.3455 30.6545 8 29 8H26V5H23V8H17V5H14V8H11C9.3455 8 8 9.3455 8 11V14H5V17H8V23H5V26H8V29C8 30.6545 9.3455 32 11 32H14V35H17V32H23V35H26V32H29C30.6545 32 32 30.6545 32 29V26H35V23H32V17H35V14H32V11ZM11 29V11H29L29.003 29H11Z",fill:"#2E2E2E"})),Ag=e=>p.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M30.1894 29.5462C30.0648 29.4141 29.9969 29.2394 30.0001 29.059C30.0033 28.8785 30.0772 28.7063 30.2064 28.5785C30.3359 28.4511 30.5104 28.3782 30.6933 28.375C30.8761 28.3719 31.0531 28.4389 31.187 28.5618L33.2763 30.6234V9.37664L31.187 11.4382C31.0531 11.5611 30.8761 11.6281 30.6933 11.625C30.5104 11.6218 30.3359 11.5489 30.2064 11.4215C30.0772 11.2937 30.0033 11.1215 30.0001 10.941C29.9969 10.7606 30.0648 10.5859 30.1894 10.4538L33.4833 7.20368C33.6156 7.07326 33.795 7 33.9821 7C34.1691 7 34.3485 7.07326 34.4809 7.20368L37.7748 10.4538C37.8677 10.539 37.9356 10.6472 37.9714 10.7673C38.0071 10.8873 38.0094 11.0146 37.978 11.1358C37.9466 11.257 37.8827 11.3676 37.7929 11.456C37.7031 11.5443 37.5909 11.6071 37.468 11.6378C37.3453 11.6689 37.2163 11.6667 37.0948 11.6316C36.9732 11.5964 36.8635 11.5296 36.7772 11.4382L34.6879 9.37664V30.6234L36.7772 28.5618C36.8635 28.4702 36.9732 28.4031 37.0948 28.3678C37.2165 28.3325 37.3455 28.3303 37.4683 28.3613C37.5912 28.3922 37.7033 28.4554 37.7928 28.5439C37.8823 28.6325 37.946 28.7433 37.9771 28.8646C38.0085 28.9856 38.0063 29.1128 37.9707 29.2328C37.9351 29.3527 37.8674 29.461 37.7748 29.5462L34.4809 32.7963C34.3485 32.9267 34.1691 33 33.9821 33C33.795 33 33.6156 32.9267 33.4833 32.7963L30.1894 29.5462Z",fill:"#2E2E2E",stroke:"#2E2E2E",strokeWidth:.5}),p.exports.createElement("path",{d:"M1 28.7868C1.19383 28.3487 1.53976 28.1915 2.02618 28.2129C2.6045 28.2383 3.18546 28.2302 3.76483 28.216C4.55441 28.1971 5.32708 28.2409 6.06331 28.6865C6.06965 28.5583 6.07652 28.4713 6.07704 28.3844C6.08549 27.0902 6.04536 25.7939 6.10979 24.5028C6.25133 21.6545 7.58489 19.3861 9.86859 17.6111C10.3534 17.2342 10.8567 16.8791 11.3421 16.5021C12.8943 15.2969 13.677 13.7301 13.7034 11.8101C13.7346 9.54989 15.3111 7.64472 17.5916 7.13498C17.9645 7.05155 18.3553 7.01899 18.7388 7.00983C19.5289 6.99101 20.3195 7.01238 21.1096 7.00017C21.4508 6.99508 21.7133 7.107 21.9499 7.3405C22.6185 7.99981 23.2966 8.65097 23.9822 9.29502C24.0704 9.37794 24.2204 9.43949 24.3429 9.44102C25.2471 9.45323 26.1518 9.44662 27.0565 9.44814C27.6839 9.44916 27.9897 9.74524 27.9871 10.3557C27.9844 10.9728 28.0336 11.597 27.9559 12.2059C27.7394 13.8995 26.3667 15.0365 24.5869 15.0543C24.0429 15.0599 23.4994 15.0553 22.91 15.0553V15.3631C22.91 17.1904 22.8984 19.0177 22.9132 20.8446C22.9301 22.9334 22.1617 24.6686 20.4859 26.0168C20.4183 26.0712 20.3697 26.1851 20.3681 26.2721C20.358 26.8979 20.3681 27.5241 20.3591 28.1498C20.357 28.2938 20.4161 28.3523 20.5445 28.4093C21.5337 28.8503 22.0354 29.6053 22.0592 30.6517C22.0692 31.1086 22.0449 31.5659 22.0661 32.0217C22.0877 32.4908 21.914 32.8235 21.4524 33H3.89898C3.8599 32.9842 3.8224 32.9613 3.78173 32.9547C2.764 32.7782 1.97231 32.2679 1.46794 31.4026C1.25404 31.0358 1.15263 30.6075 1 30.2076C1 29.7335 1 29.2599 1 28.7857V28.7868ZM20.4795 31.4647C20.4795 31.1915 20.4843 30.931 20.4785 30.6706C20.4658 30.1115 20.1568 29.795 19.5812 29.7421C19.0847 29.6964 18.7879 29.4089 18.7842 28.9312C18.7757 27.8736 18.7805 26.816 18.7826 25.7583C18.7831 25.4801 18.8888 25.2476 19.1322 25.0832C20.6755 24.0419 21.3536 22.5986 21.3346 20.8013C21.3124 18.6947 21.3293 16.5881 21.3293 14.4815C21.3293 13.7937 21.6013 13.5352 22.3169 13.5322C23.1599 13.5286 24.0044 13.5464 24.8457 13.5078C25.5545 13.4747 26.1872 12.9609 26.3308 12.296C26.4222 11.8742 26.4021 11.4306 26.4338 10.9718C25.5677 10.9718 24.7617 10.9636 23.9558 10.9758C23.6236 10.9809 23.3679 10.8736 23.1377 10.6467C22.4616 9.98179 21.7761 9.32605 21.0874 8.67285C21.014 8.60315 20.8994 8.53549 20.8027 8.53448C20.0475 8.5243 19.2912 8.51107 18.537 8.53549C16.9531 8.58687 15.5218 9.79611 15.3486 11.3111C15.2461 12.2059 15.2757 13.1186 15.3027 14.0216C15.3174 14.5237 15.6433 14.8849 16.1324 15.0726C17.0001 15.4058 17.917 14.7989 17.9302 13.8756C17.9434 12.9451 17.9291 12.0141 17.936 11.0837C17.9397 10.6111 18.2798 10.2682 18.7245 10.2652C19.1729 10.2621 19.5114 10.6014 19.513 11.0761C19.5167 12.0487 19.5283 13.0224 19.5051 13.9946C19.4776 15.1489 18.7007 16.1419 17.5663 16.527C16.453 16.905 15.2092 16.5881 14.4254 15.7268C14.3747 15.6714 14.3219 15.6174 14.2881 15.5813C13.9485 16.0051 13.6659 16.4701 13.2741 16.8216C12.5051 17.5114 11.6923 18.1595 10.8663 18.7863C8.73414 20.403 7.69158 22.5254 7.66464 25.1173C7.64352 27.139 7.66042 29.1617 7.66042 31.1833C7.66042 31.2739 7.66042 31.3645 7.66042 31.4647H16.087C15.9037 30.5881 14.8585 29.795 13.8371 29.7467C13.1035 29.7121 12.8748 29.4634 12.8542 28.7511C12.841 28.2979 12.8595 27.8197 12.7174 27.399C12.3355 26.2696 11.462 25.7192 10.2404 25.6505C9.76138 25.6235 9.45558 25.2852 9.47935 24.8482C9.50153 24.4351 9.85169 24.1213 10.3128 24.138C10.618 24.1492 10.928 24.1798 11.2249 24.2474C13.0908 24.6753 14.3795 26.2177 14.4439 28.0735C14.4465 28.1519 14.484 28.2785 14.5384 28.2979C14.8125 28.3966 15.0972 28.4678 15.3961 28.5538C15.3961 28.4418 15.3961 28.3498 15.3961 28.2572C15.3961 27.428 15.3935 26.5987 15.3972 25.7695C15.3988 25.3636 15.6349 25.0604 15.9998 24.9764C16.5179 24.8569 16.9742 25.216 16.9758 25.7568C16.98 27.0342 16.9769 28.3121 16.9785 29.5895C16.9785 29.6724 16.9637 29.7767 17.007 29.8357C17.374 30.3302 17.6186 30.8761 17.7554 31.4637H20.4811L20.4795 31.4647ZM2.59077 29.7574C2.57809 30.5642 3.13159 31.2749 3.92275 31.4189C4.3141 31.4901 4.72447 31.4662 5.12691 31.4764C5.43905 31.484 5.75118 31.4779 6.06067 31.4779C6.09606 30.6141 5.457 29.8408 4.59877 29.7686C3.93965 29.7131 3.27102 29.7574 2.59077 29.7574Z",fill:"#2E2E2E",stroke:"#2E2E2E",strokeWidth:.5}));function Lg(){const[e,t]=p.exports.useState({data:[]});O0({category:"dogs",state:e,setState:t});const{id:n}=F6(),u=n?+n:0,r=e==null?void 0:e.data[u],{name:i,age:o,sex:s,size:l,hasbreed:c,breed:d,haschip:m}=r||{};return a(XC,{"data-testid":"dogs-page",children:a(re,{children:a(JC,{children:w(YC,{children:[w(sg,{children:[a(ue,{$marginBottom:"24px",children:"\u041F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D\u043A\u0443:"}),w("p",{children:[i," - \u0447\u0430\u0440\u0456\u0432\u043D\u0430 \u0442\u0430 \u0435\u043D\u0435\u0440\u0433\u0456\u0439\u043D\u0430 \u0441\u043E\u0431\u0430\u0447\u043A\u0430, \u044F\u043A\u0430 \u0432\u0456\u0434\u043C\u0456\u043D\u043D\u043E \u043B\u0430\u0434\u043D\u0430\u0454 \u0437 \u0456\u043D\u0448\u0438\u043C\u0438 \u0441\u043E\u0431\u0430\u043A\u0430\u043C\u0438 \u0456 \u043B\u044E\u0434\u044C\u043C\u0438. \u0412\u043E\u043D\u0430 \u043E\u0431\u043E\u0436\u043D\u044E\u0454 \u043F\u0440\u043E\u0433\u0443\u043B\u044F\u043D\u043A\u0438 \u0456 \u0433\u0440\u0430\u0442\u0438\u0441\u044F \u0437 \u043C'\u044F\u0447\u0438\u043A\u043E\u043C."," ",a("br",{}),a("br",{})," ",i," \u043C\u0430\u0454 \u043F\u0435\u0432\u043D\u0456 \u043C\u0435\u0434\u0438\u0447\u043D\u0456 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438, \u0456 \u0434\u043B\u044F \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438 \u0457\u0457 \u0437\u0434\u043E\u0440\u043E\u0432'\u044F \u0457\u0439 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0456 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u0456 \u043B\u0456\u043A\u0438 \u0442\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434. \u041D\u0435\u0437\u0432\u0430\u0436\u0430\u044E\u0447\u0438 \u043D\u0430 \u0441\u0432\u043E\u0457 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438, ",i," \u0454 \u043D\u0430\u0434\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E \u043B\u0430\u0433\u0456\u0434\u043D\u043E\u044E \u0442\u0430 \u043B\u044E\u0431\u043B\u044F\u0447\u043E\u044E \u0441\u043E\u0431\u0430\u043A\u043E\u044E.",a("br",{}),a("br",{})," \u0412\u0430\u0448\u0456 \u043F\u043E\u0436\u0435\u0440\u0442\u0432\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0443\u0442\u044C \u043D\u0430\u043C \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 ",i," \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u043C\u0438 \u043B\u0456\u043A\u0430\u043C\u0438, \u043C\u0435\u0434\u0438\u0447\u043D\u0438\u043C \u0442\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u043C \u0434\u043E\u0433\u043B\u044F\u0434\u043E\u043C. \u0412\u0430\u0448\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u0434\u043E\u0437\u0432\u043E\u043B\u0438\u0442\u044C \u043D\u0430\u043C \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u0432\u0441\u0435 \u043C\u043E\u0436\u043B\u0438\u0432\u0435 \u0434\u043B\u044F \u043F\u043E\u043B\u0456\u043F\u0448\u0435\u043D\u043D\u044F \u0457\u0457 \u0441\u0442\u0430\u043D\u0443 \u0456 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0457\u0439 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0456 \u0443\u043C\u043E\u0432\u0438 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F."]})]}),a(eg,{children:a(Sg,{src:"https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"})}),w(tg,{children:[w(ng,{children:[a(Ne,{children:i}),a(ue,{children:o})]}),w(ug,{children:[a(Cu,{text:"\u0421\u0442\u0430\u0442\u044C",value:s,children:s==="\u0414\u0456\u0432\u0447\u0438\u043D\u043A\u0430"?a(kg,{}):a(Fg,{})}),a(Cu,{text:"\u041F\u043E\u0440\u043E\u0434\u0430",value:c?d:"\u0411\u0435\u0437 \u043F\u043E\u0440\u043E\u0434\u0438",children:a(Dg,{})}),a(Cu,{text:"\u0420\u043E\u0437\u043C\u0456\u0440",value:l,children:a(Ag,{})}),a(Cu,{text:"\u041D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u0447\u0456\u043F\u0430",value:m?"\u0422\u0430\u043A":"\u041D\u0456",children:a(bg,{})})]}),w(og,{children:[a(ue,{$marginBottom:"24px",children:"\u041F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D\u043A\u0443:"}),w("p",{children:[i," - \u0447\u0430\u0440\u0456\u0432\u043D\u0430 \u0442\u0430 \u0435\u043D\u0435\u0440\u0433\u0456\u0439\u043D\u0430 \u0441\u043E\u0431\u0430\u0447\u043A\u0430, \u044F\u043A\u0430 \u0432\u0456\u0434\u043C\u0456\u043D\u043D\u043E \u043B\u0430\u0434\u043D\u0430\u0454 \u0437 \u0456\u043D\u0448\u0438\u043C\u0438 \u0441\u043E\u0431\u0430\u043A\u0430\u043C\u0438 \u0456 \u043B\u044E\u0434\u044C\u043C\u0438. \u0412\u043E\u043D\u0430 \u043E\u0431\u043E\u0436\u043D\u044E\u0454 \u043F\u0440\u043E\u0433\u0443\u043B\u044F\u043D\u043A\u0438 \u0456 \u0433\u0440\u0430\u0442\u0438\u0441\u044F \u0437 \u043C'\u044F\u0447\u0438\u043A\u043E\u043C."," ",a("br",{}),a("br",{})," ",i," \u043C\u0430\u0454 \u043F\u0435\u0432\u043D\u0456 \u043C\u0435\u0434\u0438\u0447\u043D\u0456 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438, \u0456 \u0434\u043B\u044F \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438 \u0457\u0457 \u0437\u0434\u043E\u0440\u043E\u0432'\u044F \u0457\u0439 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0456 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u0456 \u043B\u0456\u043A\u0438 \u0442\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434. \u041D\u0435\u0437\u0432\u0430\u0436\u0430\u044E\u0447\u0438 \u043D\u0430 \u0441\u0432\u043E\u0457 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438, ",i," \u0454 \u043D\u0430\u0434\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E \u043B\u0430\u0433\u0456\u0434\u043D\u043E\u044E \u0442\u0430 \u043B\u044E\u0431\u043B\u044F\u0447\u043E\u044E \u0441\u043E\u0431\u0430\u043A\u043E\u044E.",a("br",{}),a("br",{})," \u0412\u0430\u0448\u0456 \u043F\u043E\u0436\u0435\u0440\u0442\u0432\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0443\u0442\u044C \u043D\u0430\u043C \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 ",i," \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u043C\u0438 \u043B\u0456\u043A\u0430\u043C\u0438, \u043C\u0435\u0434\u0438\u0447\u043D\u0438\u043C \u0442\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u043C \u0434\u043E\u0433\u043B\u044F\u0434\u043E\u043C. \u0412\u0430\u0448\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u0434\u043E\u0437\u0432\u043E\u043B\u0438\u0442\u044C \u043D\u0430\u043C \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u0432\u0441\u0435 \u043C\u043E\u0436\u043B\u0438\u0432\u0435 \u0434\u043B\u044F \u043F\u043E\u043B\u0456\u043F\u0448\u0435\u043D\u043D\u044F \u0457\u0457 \u0441\u0442\u0430\u043D\u0443 \u0456 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0457\u0439 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0456 \u0443\u043C\u043E\u0432\u0438 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F."]})]})]})]})})})})}const Bg=x(re)`
  color: ${({theme:e})=>e.colors.dark};
  margin-top: ${({theme:e})=>e.headerHeight};
  padding: 95px 16px 117px;
  max-width: 624px;

  ${ue} {
    margin-bottom: 27px;
  }

  p {
    margin-bottom: 72px;
    font-size: ${({theme:e})=>e.fontSizes.bodyText};
    text-align: start;
  }

  ${ae} {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 100px;
  }

  @media (max-width: 1279px) {
    padding-top: 0;
    padding-bottom: 40px;

    ${ue} {
      margin-bottom: 6px;
    }

    p {
      margin-bottom: 40px;
    }
  }

  @media (max-width: 767px) {
    padding-top: 160px;
    padding-bottom: 180px;

    ${ue} {
      margin-bottom: 20px;
    }

    p {
      font-size: ${({theme:e})=>e.fontSizes.mobileBodyText};
    }
  }
`,Pg=x(Ne)`
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
`,Rg=e=>p.exports.createElement("svg",{width:19,height:16,viewBox:"0 0 19 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M17.5 9C18.0523 9 18.5 8.55228 18.5 8C18.5 7.44772 18.0523 7 17.5 7V9ZM0.792892 7.29289C0.402369 7.68342 0.402369 8.31658 0.792892 8.70711L7.15685 15.0711C7.54738 15.4616 8.18054 15.4616 8.57107 15.0711C8.96159 14.6805 8.96159 14.0474 8.57107 13.6569L2.91421 8L8.57107 2.34315C8.96159 1.95262 8.96159 1.31946 8.57107 0.928932C8.18054 0.538408 7.54738 0.538408 7.15685 0.928932L0.792892 7.29289ZM17.5 7L1.5 7V9L17.5 9V7Z",fill:"#2E2E2E"}));function S2(){return a(Bg,{"data-testid":"not-found-page",children:w(de,{$align:"center",$direction:"column",children:[a(Pg,{children:"404"}),a(ue,{children:"Page not found"}),a("p",{children:"\u0412\u0438\u0431\u0430\u0447\u0442\u0435, \u0430\u043B\u0435 \u043C\u0438 \u043D\u0435 \u0437\u043C\u043E\u0433\u043B\u0438 \u0437\u043D\u0430\u0439\u0442\u0438 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443, \u044F\u043A\u0443 \u0432\u0438 \u0448\u0443\u043A\u0430\u0454\u0442\u0435. \u0421\u0445\u043E\u0436\u0435, \u0449\u043E \u0441\u0442\u0430\u043B\u0430\u0441\u044F \u043F\u043E\u043C\u0438\u043B\u043A\u0430 \u0430\u0431\u043E \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430 \u0431\u0443\u043B\u0430 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0430. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456\u0441\u0442\u044C URL-\u0430\u0434\u0440\u0435\u0441\u0438 \u0430\u0431\u043E \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0456\u043D\u0448\u0435 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F."}),a(Et,{to:".",children:w(ae,{children:[a(Rg,{}),"\u041D\u0430\u0437\u0430\u0434"]})})]})})}const Mg=x.div`
  width: 100%;
  height: calc(100vh - 96px);
  padding: 40px;

  @media screen and (max-width: 1279px) {
    padding: 20px;
  }

  @media screen and (max-width: 767px) {
    padding: 20px 16px;
  }
`,Og=x.div`
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
`,Tg=x(ae)`
  align-self: flex-end;
  max-width: 400px;
  width: 100%;

  @media (max-width: 1439px) {
    align-self: center;
  }

  @media (max-width: 1279px) {
    align-self: flex-end;
  }
`;function Ig(){const[e,t]=p.exports.useState({data:[]});O0({category:"dogs",state:e,setState:t});const[n,u]=p.exports.useState(e);return w(Og,{children:[a(Tg,{children:a(Et,{to:"/admin/new-card",children:"\u0414\u043E\u0434\u0430\u0442\u0438 \u043D\u043E\u0432\u0443 \u043A\u0430\u0440\u0442\u043A\u0443"})}),a(m8,{state:n,setState:u,options:e}),a(y8,{state:n,admin:!0})]})}const Ng=e=>p.exports.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M26 12H26.02M2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2H32C33.5913 2 35.1174 2.63214 36.2426 3.75736C37.3679 4.88258 38 6.4087 38 8V32C38 33.5913 37.3679 35.1174 36.2426 36.2426C35.1174 37.3679 33.5913 38 32 38H8C6.4087 38 4.88258 37.3679 3.75736 36.2426C2.63214 35.1174 2 33.5913 2 32V8Z",stroke:"#2E2E2E",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.exports.createElement("path",{d:"M2 27.9997L12 17.9997C13.856 16.2137 16.144 16.2137 18 17.9997L28 27.9997",stroke:"#2E2E2E",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}),p.exports.createElement("path",{d:"M24 23.9997L26 21.9997C27.856 20.2137 30.144 20.2137 32 21.9997L38 27.9997",stroke:"#2E2E2E",strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"}));var zg="/Big-lapa/assets/photoIco.cede2c46.svg",jg="/Big-lapa/assets/CloseIco.8640a101.svg";const Hg=x.div`
  padding-bottom: 80px;

  ${Ne} {
    margin-bottom: 0;
    @media (max-width: 767px) {
      text-align: center;
    }
  }

  ${({newCard:e})=>!e&&Mt`
      ${E8} {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      ${E4} {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        button {
          position: absolute;
          background: ${M.colors.background} url(${jg}) center / 14px no-repeat;
          top: 4px;
          right: 4px;
          width: 18px;
          height: 18px;
          border-radius: 4px;
        }
      }

      ${ii} {
      }
    `}
`,$g=x.div`
  max-width: 83px;
  margin-bottom: 20px;
  a {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: ${M.fontSizes.subheadline};
  }
`,Ug=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
  max-width: 920px;

  label {
    font-size: ${M.fontSizes.subheadline};
    margin-bottom: 12px;
  }

  ${ae} {
    width: 400px;
  }

  @media (max-width: 767px) {
    gap: 40px;

    ${ae} {
      width: 100%;
    }
  }
`,Vg=x.div`
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
`,E8=x.div`
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
    ${ue} {
      font-size: 16px;
    }
  }
`,Wg=x.div`
  width: 28%;
`,Qg=x.div`
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
`,E4=x.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #fff url(${zg}) center / 20px no-repeat;
`,Zg=x.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1439px) {
    flex-direction: column;
    gap: 30px;
  }
`,ii=x.div`
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
`,_g=x.div`
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
`,gu=x.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 1279px) {
    &:nth-of-type(1) {
      margin-right: 63px;
    }
  }
`,bt=x.label`
  cursor: pointer;
  max-width: 220px;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 100%;
    transition: ${M.transitions.quick};
    padding: 8px 16px 8px 8px;
    font-size: ${M.fontSizes.buttonText};
    font-weight: ${M.fontWeights.semiBold};

    svg {
      min-width: 40px;
      min-height: 40px;
    }

    @media (max-width: 767px) {
      font-size: ${M.fontSizes.mobileButtonText};
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
      outline: 1px solid ${M.colors.dark};
      border-radius: 4px;
      z-index: 1;
    }
  }

  input[type='text'] {
    background-color: transparent;
    display: block;
    width: 100%;

    &::placeholder {
      color: ${M.colors.grey};
    }
  }
`,qg=x.div`
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
`;var Is="/Big-lapa/assets/dog1.1423b256.png";const Gg=e=>p.exports.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("g",{clipPath:"url(#clip0_1278_6081)"},p.exports.createElement("path",{d:"M5.3102 12.346L16.4562 22.966C16.6422 23.1433 16.8893 23.2422 17.1462 23.2422C17.4031 23.2422 17.6502 23.1433 17.8362 22.966L17.8482 22.954C17.9387 22.8681 18.0107 22.7646 18.0599 22.6499C18.1092 22.5353 18.1346 22.4118 18.1346 22.287C18.1346 22.1622 18.1092 22.0387 18.0599 21.9241C18.0107 21.8094 17.9387 21.7059 17.8482 21.62L7.3522 11.62L17.8482 1.624C17.9387 1.53805 18.0107 1.4346 18.0599 1.31993C18.1092 1.20527 18.1346 1.08179 18.1346 0.956999C18.1346 0.832212 18.1092 0.708731 18.0599 0.594065C18.0107 0.479399 17.9387 0.375944 17.8482 0.289999L17.8362 0.277998C17.6502 0.100708 17.4031 0.00180626 17.1462 0.00180626C16.8893 0.00180626 16.6422 0.100708 16.4562 0.277998L5.3102 10.898C5.21218 10.9914 5.13414 11.1037 5.08082 11.2282C5.02749 11.3526 5 11.4866 5 11.622C5 11.7574 5.02749 11.8914 5.08082 12.0158C5.13414 12.1403 5.21218 12.2526 5.3102 12.346Z",fill:"#2E2E2E"})),p.exports.createElement("defs",null,p.exports.createElement("clipPath",{id:"clip0_1278_6081"},p.exports.createElement("rect",{y:24,width:24,height:24,rx:12,transform:"rotate(-90 0 24)",fill:"white"})))),Kg=e=>p.exports.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M24.0656 6.87357C24.0355 6.84904 23.9322 6.76536 23.8375 6.68463C22.5461 5.61731 20.8319 4.97 19.1611 4.92065C17.4223 4.87039 15.7821 5.40889 14.3466 6.50494C14.084 6.70717 13.4328 7.34974 13.2333 7.6039C12.6 8.4184 12.207 9.16517 11.9201 10.0992C11.277 12.1892 11.5881 14.4382 12.7874 16.3684C12.9469 16.6231 13.2462 17.04 13.3339 17.1278L13.3713 17.1652L12.0622 18.4743L10.753 19.7835L9.69871 18.7236L8.64582 17.6623L8.13195 18.1762L7.61669 18.6915L8.67378 19.7485L9.73086 20.8056L8.09966 22.4368L6.46845 24.0681L7.00059 24.6002L7.53273 25.1323L9.16394 23.5011L10.7951 21.8699L11.8522 22.927L12.9093 23.9841L13.4246 23.4688L13.9385 22.955L12.8772 21.9021L11.8173 20.8478L13.1264 19.5386L14.4356 18.2294L14.473 18.2668C14.5607 18.3546 14.9777 18.6539 15.2324 18.8134C17.1626 20.0127 19.4115 20.3238 21.5015 19.6806C22.4356 19.3938 23.1824 19.0008 23.9969 18.3675C24.251 18.168 24.8936 17.5168 25.0958 17.2542C25.6773 16.4915 26.0564 15.7701 26.3315 14.9054C27.0967 12.4977 26.5979 9.90431 24.971 7.8293C24.8266 7.64574 24.1919 6.97459 24.0656 6.87357ZM23.8077 8.69913C24.4744 9.52821 24.9246 10.5133 25.1174 11.5602C25.3867 13.0169 25.0824 14.5552 24.2696 15.8454C23.3831 17.2497 21.882 18.21 20.1601 18.4764C19.8386 18.5246 19.3736 18.5496 19.0527 18.534C16.9669 18.4365 15.0547 17.3055 13.9867 15.5402C13.042 13.9795 12.8107 12.1743 13.3432 10.5114C13.937 8.65483 15.2711 7.30343 17.1118 6.69383C18.8183 6.12925 20.6575 6.35539 22.2341 7.32437C22.5732 7.53466 22.7467 7.66327 23.1586 8.01076C23.2676 8.10303 23.6793 8.53991 23.8077 8.69913Z",fill:"#2E2E2E",stroke:"#2E2E2E"})),Xg=e=>p.exports.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M26.1629 5.61876C26.0932 5.62551 25.6955 5.66771 25.2791 5.70821C24.8627 5.75041 24.2169 5.81623 23.843 5.85336C23.4691 5.89049 22.4018 5.99851 21.4722 6.09133C20.5425 6.18416 19.4922 6.2888 19.1387 6.32425C18.7869 6.35969 18.4946 6.39175 18.4912 6.39513C18.4827 6.40694 18.6424 7.94281 18.6543 7.95462C18.6611 7.96137 18.8634 7.94618 19.1047 7.92255C19.3461 7.89893 20.4151 7.79091 21.4807 7.68458C22.5463 7.57825 23.6051 7.47192 23.8328 7.44998C24.0623 7.42635 24.2509 7.40948 24.2543 7.41116C24.256 7.41454 23.7479 7.9293 23.1241 8.55715C19.8253 11.877 18.9824 12.7225 18.9688 12.7225C18.962 12.7225 18.8651 12.655 18.7563 12.574C17.7162 11.7926 16.4976 11.2677 15.1924 11.0348C14.4259 10.8998 13.5166 10.8812 12.7451 10.9842C10.935 11.2289 9.261 12.0474 8.00334 13.3031C7.17057 14.1352 6.56214 15.0753 6.13385 16.1909C5.72256 17.266 5.54241 18.4407 5.61549 19.5495C5.78545 22.1014 7.14678 24.4525 9.2474 25.8246C9.55842 26.0272 9.70118 26.1116 10.0088 26.2685C11.6556 27.1158 13.481 27.3926 15.2587 27.0685C16.5877 26.8255 17.8946 26.2348 18.9314 25.4078C19.4565 24.9892 19.8916 24.5487 20.2927 24.0305C21.2172 22.8339 21.7815 21.4331 21.9582 19.8955C21.9939 19.5765 22.0092 18.8339 21.9837 18.52C21.8954 17.3909 21.6149 16.3833 21.1187 15.3976C20.9028 14.9673 20.5561 14.4204 20.2655 14.0491L20.1074 13.85L20.3777 13.5782C20.5272 13.428 20.9538 12.9977 21.3294 12.6213C22.0415 11.9057 24.6418 9.28964 25.1245 8.80357C25.2791 8.64829 25.4049 8.52171 25.4066 8.52509C25.4083 8.52677 25.3998 8.63141 25.3879 8.75631C25.376 8.8812 25.3505 9.158 25.3318 9.37234C25.3131 9.585 25.2808 9.93268 25.2621 10.1436C25.2434 10.3563 25.2129 10.7006 25.1942 10.9116C25.082 12.1622 24.9222 13.9749 24.9188 14.039L24.9137 14.1133L25.704 14.1841C26.1391 14.2213 26.4977 14.2517 26.4977 14.2517C26.4994 14.25 26.5402 13.8128 26.5878 13.2795C26.6354 12.7462 26.6881 12.142 26.7067 11.9377C26.7254 11.7335 26.7628 11.3048 26.7917 10.9842C26.8189 10.6635 26.8512 10.3226 26.8597 10.2247C26.8682 10.1268 26.8988 9.78584 26.9277 9.46517C26.9566 9.14449 26.9855 8.80357 26.9957 8.70568C27.0042 8.60778 27.0365 8.26686 27.0636 7.94618C27.0925 7.62551 27.135 7.15631 27.1571 6.90315C27.1894 6.56222 27.1996 6.33268 27.1996 6.02213V5.60019L26.7458 5.60188C26.4943 5.60357 26.2326 5.61032 26.1629 5.61876ZM14.5551 12.5436C15.6649 12.6955 16.62 13.0466 17.4868 13.6221C18.928 14.5791 19.9239 16.0711 20.274 17.7943C20.3709 18.2787 20.393 18.5065 20.393 19.0685C20.3913 19.5968 20.3743 19.7892 20.291 20.2415C19.9817 21.8989 19.0095 23.428 17.6618 24.3732C16.812 24.9689 15.8654 25.3571 14.8627 25.5242C14.4531 25.5917 14.261 25.6069 13.7988 25.6069C13.141 25.6069 12.6533 25.5411 12.021 25.3639C9.37997 24.6213 7.52917 22.4255 7.22835 19.6761C7.18077 19.2508 7.20116 18.5571 7.27424 18.0896C7.55127 16.3192 8.5353 14.7242 9.96631 13.7251C10.9724 13.023 12.0788 12.6263 13.3484 12.5133C13.5285 12.4981 14.3681 12.5183 14.5551 12.5436Z",fill:"#2E2E2E",stroke:"#2E2E2E"})),V1=e=>p.exports.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M24.6671 24.0775C24.5661 23.9657 24.5111 23.818 24.5136 23.6653C24.5162 23.5126 24.5761 23.3669 24.6808 23.2588C24.7858 23.1509 24.9274 23.0892 25.0756 23.0866C25.2239 23.0839 25.3674 23.1406 25.476 23.2446L27.1699 24.989V7.01101L25.476 8.75537C25.3674 8.85941 25.2239 8.91607 25.0756 8.91343C24.9274 8.91079 24.7858 8.84907 24.6808 8.74123C24.5761 8.63311 24.5162 8.48739 24.5136 8.3347C24.5111 8.18202 24.5661 8.03426 24.6671 7.92248L27.3378 5.17235C27.4451 5.06199 27.5906 5 27.7422 5C27.8939 5 28.0394 5.06199 28.1467 5.17235L30.8174 7.92248C30.8927 7.99451 30.9478 8.08613 30.9768 8.18769C31.0058 8.28924 31.0077 8.39698 30.9822 8.49954C30.9567 8.6021 30.9049 8.69568 30.8321 8.77044C30.7593 8.8452 30.6683 8.89835 30.5686 8.92431C30.4691 8.95057 30.3646 8.94873 30.266 8.91901C30.1675 8.88928 30.0785 8.83275 30.0085 8.75537L28.3145 7.01101V24.989L30.0085 23.2446C30.0785 23.1671 30.1674 23.1103 30.2661 23.0805C30.3647 23.0506 30.4693 23.0487 30.5689 23.0749C30.6685 23.1011 30.7594 23.1545 30.832 23.2295C30.9046 23.3044 30.9562 23.3982 30.9814 23.5008C31.0069 23.6032 31.0051 23.7108 30.9763 23.8123C30.9474 23.9138 30.8925 24.0054 30.8174 24.0775L28.1467 26.8277C28.0394 26.938 27.8939 27 27.7422 27C27.5906 27 27.4451 26.938 27.3378 26.8277L24.6671 24.0775Z",fill:"#2E2E2E"}),p.exports.createElement("path",{d:"M1 23.4349C1.15716 23.0643 1.43764 22.9313 1.83204 22.9494C2.30094 22.9709 2.77199 22.964 3.24175 22.952C3.88194 22.936 4.50843 22.9731 5.10538 23.3501C5.11052 23.2417 5.11608 23.1681 5.11651 23.0945C5.12336 21.9994 5.09082 20.9026 5.14306 19.8101C5.25782 17.3999 6.33909 15.4805 8.19073 13.9786C8.58384 13.6597 8.99193 13.3592 9.38547 13.0402C10.644 12.0205 11.2786 10.6947 11.3001 9.07012C11.3253 7.1576 12.6036 5.54553 14.4526 5.11421C14.755 5.04362 15.0718 5.01607 15.3827 5.00832C16.0234 4.99239 16.6644 5.01047 17.305 5.00014C17.5817 4.99584 17.7945 5.09054 17.9863 5.28812C18.5285 5.84599 19.0783 6.39698 19.6341 6.94194C19.7057 7.0121 19.8273 7.06419 19.9266 7.06548C20.6597 7.07581 21.3933 7.07021 22.1268 7.07151C22.6356 7.07237 22.8835 7.32289 22.8814 7.83944C22.8792 8.36159 22.919 8.88976 22.8561 9.40502C22.6805 10.838 21.5676 11.8001 20.1245 11.8152C19.6834 11.8199 19.2427 11.816 18.7648 11.816V12.0764C18.7648 13.6226 18.7554 15.1689 18.7674 16.7146C18.7811 18.4821 18.1581 19.9504 16.7993 21.0911C16.7445 21.1372 16.7051 21.2336 16.7038 21.3072C16.6957 21.8367 16.7038 22.3665 16.6965 22.896C16.6948 23.0178 16.7428 23.0673 16.8468 23.1155C17.6489 23.4888 18.0557 24.1276 18.075 25.013C18.0831 25.3996 18.0634 25.7865 18.0805 26.1722C18.0981 26.5691 17.9572 26.8506 17.5829 27H3.35052C3.31883 26.9867 3.28843 26.9673 3.25545 26.9617C2.43027 26.8123 1.78836 26.3806 1.37941 25.6484C1.20598 25.338 1.12376 24.9756 1 24.6372C1 24.236 1 23.8361 1 23.4349ZM16.7942 25.7009C16.7942 25.4697 16.798 25.2493 16.7933 25.0289C16.783 24.5559 16.5325 24.2881 16.0658 24.2433C15.6632 24.2046 15.4226 23.9614 15.4196 23.5572C15.4127 22.6623 15.4166 21.7674 15.4183 20.8724C15.4187 20.637 15.5044 20.4402 15.7018 20.3012C16.953 19.4201 17.5029 18.1989 17.4875 16.678C17.4695 14.8955 17.4832 13.113 17.4832 11.3305C17.4832 10.7485 17.7037 10.5298 18.284 10.5272C18.9674 10.5242 19.6521 10.5393 20.3343 10.5066C20.909 10.4786 21.422 10.0438 21.5384 9.48121C21.6125 9.12436 21.5963 8.749 21.622 8.36073C20.9197 8.36073 20.2662 8.35384 19.6127 8.36417C19.3434 8.36848 19.1361 8.27765 18.9494 8.08567C18.4013 7.52306 17.8454 6.9682 17.287 6.41549C17.2275 6.35651 17.1346 6.29926 17.0562 6.2984C16.4439 6.28979 15.8307 6.2786 15.2192 6.29926C13.9349 6.34274 12.7744 7.36594 12.634 8.64784C12.5509 9.40502 12.5749 10.1773 12.5967 10.9413C12.6087 11.3662 12.8729 11.6718 13.2695 11.8307C13.973 12.1126 14.7164 11.5991 14.7271 10.8178C14.7378 10.0305 14.7263 9.24274 14.7318 8.45543C14.7348 8.05553 15.0106 7.7654 15.3712 7.76282C15.7347 7.76024 16.0092 8.04735 16.0105 8.44897C16.0135 9.27201 16.0229 10.0959 16.0041 10.9185C15.9818 11.8952 15.3519 12.7355 14.4321 13.0613C13.5294 13.3812 12.5209 13.113 11.8854 12.3842C11.8443 12.3373 11.8015 12.2917 11.7741 12.2611C11.4988 12.6197 11.2697 13.0131 10.9519 13.3106C10.3284 13.8943 9.66938 14.4427 8.99964 14.973C7.2709 16.341 6.42559 18.1369 6.40375 20.3301C6.38662 22.0407 6.40032 23.7522 6.40032 25.4628C6.40032 25.5395 6.40032 25.6161 6.40032 25.7009H13.2326C13.084 24.9592 12.2366 24.2881 11.4084 24.2472C10.8136 24.2179 10.6282 24.0075 10.6115 23.4048C10.6008 23.0213 10.6158 22.6166 10.5006 22.2607C10.191 21.305 9.48268 20.8393 8.4922 20.7812C8.1038 20.7584 7.85586 20.4721 7.87513 20.1023C7.89311 19.7528 8.17702 19.4872 8.55086 19.5014C8.79838 19.5109 9.04974 19.5367 9.2904 19.594C10.8033 19.956 11.8482 21.2611 11.9004 22.8314C11.9026 22.8977 11.933 23.0049 11.9771 23.0213C12.1993 23.1048 12.4301 23.165 12.6725 23.2378C12.6725 23.1431 12.6725 23.0652 12.6725 22.9868C12.6725 22.2852 12.6704 21.5835 12.6734 20.8819C12.6747 20.5384 12.8661 20.2818 13.162 20.2108C13.5821 20.1097 13.952 20.4136 13.9533 20.8711C13.9568 21.952 13.9542 23.0333 13.9555 24.1142C13.9555 24.1844 13.9435 24.2726 13.9786 24.3225C14.2762 24.741 14.4745 25.2028 14.5854 25.7H16.7954L16.7942 25.7009ZM2.28981 24.2563C2.27953 24.939 2.72831 25.5403 3.36979 25.6621C3.6871 25.7224 4.01983 25.7022 4.34614 25.7108C4.59922 25.7172 4.8523 25.7121 5.10324 25.7121C5.13193 24.9812 4.61378 24.3269 3.91791 24.2657C3.38349 24.2188 2.84136 24.2563 2.28981 24.2563Z",fill:"#2E2E2E"}),p.exports.createElement("path",{d:"M24.6671 24.0775C24.5661 23.9657 24.5111 23.818 24.5136 23.6653C24.5162 23.5126 24.5761 23.3669 24.6808 23.2588C24.7858 23.1509 24.9274 23.0892 25.0756 23.0866C25.2239 23.0839 25.3674 23.1406 25.476 23.2446L27.1699 24.989V7.01101L25.476 8.75537C25.3674 8.85941 25.2239 8.91607 25.0756 8.91343C24.9274 8.91079 24.7858 8.84907 24.6808 8.74123C24.5761 8.63311 24.5162 8.48739 24.5136 8.3347C24.5111 8.18202 24.5661 8.03426 24.6671 7.92248L27.3378 5.17235C27.4451 5.06199 27.5906 5 27.7422 5C27.8939 5 28.0394 5.06199 28.1467 5.17235L30.8174 7.92248C30.8927 7.99451 30.9478 8.08613 30.9768 8.18769C31.0058 8.28924 31.0077 8.39698 30.9822 8.49954C30.9567 8.6021 30.9049 8.69568 30.8321 8.77044C30.7593 8.8452 30.6683 8.89835 30.5686 8.92431C30.4691 8.95057 30.3646 8.94873 30.266 8.91901C30.1675 8.88928 30.0785 8.83275 30.0085 8.75537L28.3145 7.01101V24.989L30.0085 23.2446C30.0785 23.1671 30.1674 23.1103 30.2661 23.0805C30.3647 23.0506 30.4693 23.0487 30.5689 23.0749C30.6685 23.1011 30.7594 23.1545 30.832 23.2295C30.9046 23.3044 30.9562 23.3982 30.9814 23.5008C31.0069 23.6032 31.0051 23.7108 30.9763 23.8123C30.9474 23.9138 30.8925 24.0054 30.8174 24.0775L28.1467 26.8277C28.0394 26.938 27.8939 27 27.7422 27C27.5906 27 27.4451 26.938 27.3378 26.8277L24.6671 24.0775Z",stroke:"#2E2E2E",strokeWidth:.5}),p.exports.createElement("path",{d:"M1 23.4349C1.15716 23.0643 1.43764 22.9313 1.83204 22.9494C2.30094 22.9709 2.77199 22.964 3.24175 22.952C3.88194 22.936 4.50843 22.9731 5.10538 23.3501C5.11052 23.2417 5.11608 23.1681 5.11651 23.0945C5.12336 21.9994 5.09082 20.9026 5.14306 19.8101C5.25782 17.3999 6.33909 15.4805 8.19073 13.9786C8.58384 13.6597 8.99193 13.3592 9.38547 13.0402C10.644 12.0205 11.2786 10.6947 11.3001 9.07012C11.3253 7.1576 12.6036 5.54553 14.4526 5.11421C14.755 5.04362 15.0718 5.01607 15.3827 5.00832C16.0234 4.99239 16.6644 5.01047 17.305 5.00014C17.5817 4.99584 17.7945 5.09054 17.9863 5.28812C18.5285 5.84599 19.0783 6.39698 19.6341 6.94194C19.7057 7.0121 19.8273 7.06419 19.9266 7.06548C20.6597 7.07581 21.3933 7.07021 22.1268 7.07151C22.6356 7.07237 22.8835 7.32289 22.8814 7.83944C22.8792 8.36159 22.919 8.88976 22.8561 9.40502C22.6805 10.838 21.5676 11.8001 20.1245 11.8152C19.6834 11.8199 19.2427 11.816 18.7648 11.816V12.0764C18.7648 13.6226 18.7554 15.1689 18.7674 16.7146C18.7811 18.4821 18.1581 19.9504 16.7993 21.0911C16.7445 21.1372 16.7051 21.2336 16.7038 21.3072C16.6957 21.8367 16.7038 22.3665 16.6965 22.896C16.6948 23.0178 16.7428 23.0673 16.8468 23.1155C17.6489 23.4888 18.0557 24.1276 18.075 25.013C18.0831 25.3996 18.0634 25.7865 18.0805 26.1722C18.0981 26.5691 17.9572 26.8506 17.5829 27H3.35052C3.31883 26.9867 3.28843 26.9673 3.25545 26.9617C2.43027 26.8123 1.78836 26.3806 1.37941 25.6484C1.20598 25.338 1.12376 24.9756 1 24.6372C1 24.236 1 23.8361 1 23.4349ZM16.7942 25.7009C16.7942 25.4697 16.798 25.2493 16.7933 25.0289C16.783 24.5559 16.5325 24.2881 16.0658 24.2433C15.6632 24.2046 15.4226 23.9614 15.4196 23.5572C15.4127 22.6623 15.4166 21.7674 15.4183 20.8724C15.4187 20.637 15.5044 20.4402 15.7018 20.3012C16.953 19.4201 17.5029 18.1989 17.4875 16.678C17.4695 14.8955 17.4832 13.113 17.4832 11.3305C17.4832 10.7485 17.7037 10.5298 18.284 10.5272C18.9674 10.5242 19.6521 10.5393 20.3343 10.5066C20.909 10.4786 21.422 10.0438 21.5384 9.48121C21.6125 9.12436 21.5963 8.749 21.622 8.36073C20.9197 8.36073 20.2662 8.35384 19.6127 8.36417C19.3434 8.36848 19.1361 8.27765 18.9494 8.08567C18.4013 7.52306 17.8454 6.9682 17.287 6.41549C17.2275 6.35651 17.1346 6.29926 17.0562 6.2984C16.4439 6.28979 15.8307 6.2786 15.2192 6.29926C13.9349 6.34274 12.7744 7.36594 12.634 8.64784C12.5509 9.40502 12.5749 10.1773 12.5967 10.9413C12.6087 11.3662 12.8729 11.6718 13.2695 11.8307C13.973 12.1126 14.7164 11.5991 14.7271 10.8178C14.7378 10.0305 14.7263 9.24274 14.7318 8.45543C14.7348 8.05553 15.0106 7.7654 15.3712 7.76282C15.7347 7.76024 16.0092 8.04735 16.0105 8.44897C16.0135 9.27201 16.0229 10.0959 16.0041 10.9185C15.9818 11.8952 15.3519 12.7355 14.4321 13.0613C13.5294 13.3812 12.5209 13.113 11.8854 12.3842C11.8443 12.3373 11.8015 12.2917 11.7741 12.2611C11.4988 12.6197 11.2697 13.0131 10.9519 13.3106C10.3284 13.8943 9.66938 14.4427 8.99964 14.973C7.2709 16.341 6.42559 18.1369 6.40375 20.3301C6.38662 22.0407 6.40032 23.7522 6.40032 25.4628C6.40032 25.5395 6.40032 25.6161 6.40032 25.7009H13.2326C13.084 24.9592 12.2366 24.2881 11.4084 24.2472C10.8136 24.2179 10.6282 24.0075 10.6115 23.4048C10.6008 23.0213 10.6158 22.6166 10.5006 22.2607C10.191 21.305 9.48268 20.8393 8.4922 20.7812C8.1038 20.7584 7.85586 20.4721 7.87513 20.1023C7.89311 19.7528 8.17702 19.4872 8.55086 19.5014C8.79838 19.5109 9.04974 19.5367 9.2904 19.594C10.8033 19.956 11.8482 21.2611 11.9004 22.8314C11.9026 22.8977 11.933 23.0049 11.9771 23.0213C12.1993 23.1048 12.4301 23.165 12.6725 23.2378C12.6725 23.1431 12.6725 23.0652 12.6725 22.9868C12.6725 22.2852 12.6704 21.5835 12.6734 20.8819C12.6747 20.5384 12.8661 20.2818 13.162 20.2108C13.5821 20.1097 13.952 20.4136 13.9533 20.8711C13.9568 21.952 13.9542 23.0333 13.9555 24.1142C13.9555 24.1844 13.9435 24.2726 13.9786 24.3225C14.2762 24.741 14.4745 25.2028 14.5854 25.7H16.7954L16.7942 25.7009ZM2.28981 24.2563C2.27953 24.939 2.72831 25.5403 3.36979 25.6621C3.6871 25.7224 4.01983 25.7022 4.34614 25.7108C4.59922 25.7172 4.8523 25.7121 5.10324 25.7121C5.13193 24.9812 4.61378 24.3269 3.91791 24.2657C3.38349 24.2188 2.84136 24.2563 2.28981 24.2563Z",stroke:"#2E2E2E",strokeWidth:.5})),Ns=e=>p.exports.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M2.002 4.2165C4.82005 3.87854 7.5874 3.49812 10.367 3.22563C13.1428 2.95403 15.9308 2.95403 18.7197 3.08673C21.5434 3.22032 24.3286 3.63525 27.1203 4.0139C27.7221 4.09529 28.3304 4.13953 28.9884 4.20588V4.58099C28.9884 8.02602 29.0184 11.471 28.9818 14.9152C28.9199 20.633 25.8099 27.3647 17.1333 29.7737C15.9251 30.109 14.8296 30.0595 13.6572 29.7056C10.2778 28.6847 7.38745 27.009 5.24153 24.3001C3.50208 22.1034 2.50985 19.6165 2.14469 16.9084C2.04424 16.1662 2.01139 15.4124 2.00857 14.663C1.99449 11.318 2.002 7.97294 2.002 4.627V4.2165ZM4.18086 5.77257C4.17899 5.81415 4.1696 5.90085 4.1696 5.98756C4.1696 8.91238 4.1405 11.8381 4.17805 14.7629C4.18086 18.5108 5.55413 21.141 6.73692 23.0308C8.52049 25.8777 11.2278 26.826 14.5537 27.6957C15.1967 27.8638 15.7928 27.8558 16.4367 27.6957C23.6142 25.9059 26.7905 21.2653 26.818 14.4639C26.8293 11.6718 26.8199 8.87876 26.8199 6.08576C26.8199 5.95925 26.8199 5.83185 26.8199 5.76815C19.7241 4.66316 11.2635 4.66139 4.17992 5.77257H4.18086Z",fill:"#2E2E2E"}),p.exports.createElement("path",{d:"M22.9173 12.6751C22.7416 12.2723 22.4499 11.9819 22.0733 11.8356L22.0682 11.8338C21.8968 11.769 21.7143 11.7359 21.5303 11.7361H21.51C20.648 11.7486 19.768 12.4556 19.3205 13.4954C18.9923 14.2558 18.9547 15.0736 19.2199 15.6832C19.3952 16.0863 19.6876 16.3767 20.0657 16.523L20.0699 16.5245C20.2413 16.5893 20.4237 16.6224 20.6078 16.6223C21.4781 16.6223 22.3673 15.9153 22.823 14.8617C23.147 14.1022 23.1828 13.285 22.9173 12.6751ZM19.473 17.16C18.9759 16.8718 18.506 16.599 18.199 16.1092C17.3522 14.7533 16.8408 13.9349 15.5 13.9349C14.1592 13.9349 13.6466 14.7533 12.7978 16.1092C12.4902 16.5997 12.0194 16.8727 11.5206 17.1622C10.9488 17.4938 10.358 17.8365 10.1029 18.5108C10.0038 18.7538 9.95384 19.013 9.9558 19.2742C9.9558 20.3721 10.8419 21.2653 11.9304 21.2653C12.4921 21.2653 13.0899 21.0775 13.7225 20.8787C14.3307 20.6876 14.9595 20.49 15.5032 20.49C16.0468 20.49 16.674 20.6876 17.28 20.8787C17.9113 21.0763 18.5063 21.2641 19.0696 21.2641C20.1566 21.2641 21.041 20.3709 21.041 19.273C21.0419 19.0116 20.9909 18.7524 20.8907 18.5095C20.6357 17.8346 20.0445 17.4917 19.473 17.16ZM12.1456 12.8614C12.5222 13.3174 13 13.5684 13.4912 13.5684C13.5582 13.5684 13.6252 13.5636 13.6915 13.554C14.7158 13.4087 15.3541 12.2024 15.1446 10.8056C15.057 10.2183 14.8228 9.67137 14.4874 9.26582C14.1114 8.81079 13.6329 8.56007 13.1421 8.56007C13.0751 8.56007 13.0081 8.56487 12.9418 8.57442C11.9175 8.71979 11.2792 9.92606 11.4887 11.3229C11.576 11.9092 11.8102 12.4556 12.1456 12.8614ZM17.3088 13.554C17.3751 13.5636 17.4421 13.5684 17.5091 13.5684C18.0006 13.5684 18.4781 13.3174 18.8547 12.8614C19.1898 12.4556 19.4227 11.9092 19.5113 11.3223C19.7208 9.92606 19.0825 8.71979 18.0582 8.57381C17.9919 8.56426 17.9249 8.55946 17.8579 8.55946C17.3671 8.56007 16.8886 8.81079 16.5126 9.26582C16.1772 9.67137 15.943 10.2183 15.8557 10.8062C15.6462 12.2024 16.2845 13.4087 17.3088 13.554ZM10.9301 16.5245L10.9346 16.523C11.3121 16.3767 11.6042 16.0866 11.7792 15.6838C12.0444 15.073 12.007 14.2561 11.6795 13.4957C11.226 12.4434 10.3371 11.7361 9.46783 11.7361C9.28375 11.7358 9.10125 11.769 8.92987 11.8338L8.92544 11.8353C8.54886 11.9804 8.25678 12.2717 8.08178 12.6745C7.8166 13.2853 7.85394 14.1022 8.18146 14.8626C8.63493 15.915 9.52384 16.6223 10.3931 16.6223C10.5769 16.6224 10.7591 16.5892 10.9301 16.5245Z",fill:"#2E2E2E"})),zs=e=>p.exports.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M12.6398 12.6398H19.3598V19.3598H12.6398V12.6398Z",fill:"#2E2E2E"}),p.exports.createElement("path",{d:"M24.9598 9.2798C24.9598 8.04444 23.9552 7.0398 22.7198 7.0398H20.4798V4.7998H18.2398V7.0398H13.7598V4.7998H11.5198V7.0398H9.2798C8.04444 7.0398 7.0398 8.04444 7.0398 9.2798V11.5198H4.7998V13.7598H7.0398V18.2398H4.7998V20.4798H7.0398V22.7198C7.0398 23.9552 8.04444 24.9598 9.2798 24.9598H11.5198V27.1998H13.7598V24.9598H18.2398V27.1998H20.4798V24.9598H22.7198C23.9552 24.9598 24.9598 23.9552 24.9598 22.7198V20.4798H27.1998V18.2398H24.9598V13.7598H27.1998V11.5198H24.9598V9.2798ZM9.2798 22.7198V9.2798H22.7198L22.722 22.7198H9.2798Z",fill:"#2E2E2E"}));function S8({newCard:e}){const t={name:"\u0414\u0436\u0443\u043B\u0456",age:"10 \u043C\u0456\u0441\u044F\u0446\u0456\u0432",sex:"\u0414\u0456\u0432\u0447\u0438\u043D\u043A\u0430",size:"\u0412\u0435\u043B\u0438\u043A\u0438\u0439",breed:"\u041B\u0430\u0431\u0440\u0430\u0434\u043E\u0440",chip:"\u0422\u0430\u043A",description:`\u0414\u0436\u0443\u043B\u0456 - \u0447\u0430\u0440\u0456\u0432\u043D\u0430 \u0442\u0430 \u0435\u043D\u0435\u0440\u0433\u0456\u0439\u043D\u0430 \u0441\u043E\u0431\u0430\u0447\u043A\u0430, \u044F\u043A\u0430 \u0432\u0456\u0434\u043C\u0456\u043D\u043D\u043E \u043B\u0430\u0434\u043D\u0430\u0454 \u0437 \u0456\u043D\u0448\u0438\u043C\u0438 \u0441\u043E\u0431\u0430\u043A\u0430\u043C\u0438 \u0456 \u043B\u044E\u0434\u044C\u043C\u0438. \u0412\u043E\u043D\u0430 \u043E\u0431\u043E\u0436\u043D\u044E\u0454 \u043F\u0440\u043E\u0433\u0443\u043B\u044F\u043D\u043A\u0438 \u0456 \u0433\u0440\u0430\u0442\u0438\u0441\u044F \u0437 \u043C'\u044F\u0447\u0438\u043A\u043E\u043C.

    \u0414\u0436\u0443\u043B\u0456 \u043C\u0430\u0454 \u043F\u0435\u0432\u043D\u0456 \u043C\u0435\u0434\u0438\u0447\u043D\u0456 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438, \u0456 \u0434\u043B\u044F \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438 \u0457\u0457 \u0437\u0434\u043E\u0440\u043E\u0432'\u044F \u0457\u0439 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0456 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u0456 \u043B\u0456\u043A\u0438 \u0442\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u0439 \u0434\u043E\u0433\u043B\u044F\u0434. \u041D\u0435\u0437\u0432\u0430\u0436\u0430\u044E\u0447\u0438 \u043D\u0430 \u0441\u0432\u043E\u0457 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438, \u0414\u0436\u0443\u043B\u0456 \u0454 \u043D\u0430\u0434\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E \u043B\u0430\u0433\u0456\u0434\u043D\u043E\u044E \u0442\u0430 \u043B\u044E\u0431\u043B\u044F\u0447\u043E\u044E \u0441\u043E\u0431\u0430\u043A\u043E\u044E.

    \u0412\u0430\u0448\u0456 \u043F\u043E\u0436\u0435\u0440\u0442\u0432\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0443\u0442\u044C \u043D\u0430\u043C \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0414\u0436\u0443\u043B\u0456 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u043C\u0438 \u043B\u0456\u043A\u0430\u043C\u0438, \u043C\u0435\u0434\u0438\u0447\u043D\u0438\u043C \u0442\u0430 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u043C \u0434\u043E\u0433\u043B\u044F\u0434\u043E\u043C.
    \u0412\u0430\u0448\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 \u0434\u043E\u0437\u0432\u043E\u043B\u0438\u0442\u044C \u043D\u0430\u043C \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u0432\u0441\u0435 \u043C\u043E\u0436\u043B\u0438\u0432\u0435 \u0434\u043B\u044F \u043F\u043E\u043B\u0456\u043F\u0448\u0435\u043D\u043D\u044F \u0457\u0457 \u0441\u0442\u0430\u043D\u0443 \u0456 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0457\u0439 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0456 \u0443\u043C\u043E\u0432\u0438 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F.`};return w(Hg,{newCard:e,children:[a($g,{children:w(Et,{to:"/admin",children:[a(Gg,{}),"\u041D\u0430\u0437\u0430\u0434"]})}),w(Ug,{children:[a(Ne,{children:e?"\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u043D\u043E\u0432\u043E\u0457 \u043A\u0430\u0440\u0442\u043A\u0438":"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F"}),w(Vg,{children:[a(E8,{children:e?w(Ue,{children:[a(Ng,{}),a(ue,{children:"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u043E\u0442\u043E"})]}):a("img",{src:Is,alt:"dog1"})}),a(Wg,{children:w(Qg,{children:[a(E4,{children:e?a(Ue,{}):w(Ue,{children:[a("img",{src:Is,alt:"dog1"}),a("button",{})]})}),a(E4,{}),a(E4,{}),a(E4,{}),a(E4,{}),a(E4,{})]})})]}),w(Zg,{children:[w(ii,{children:[a("label",{htmlFor:"dog-name",children:"\u041A\u043B\u0438\u0447\u043A\u0430 \u0441\u043E\u0431\u0430\u043A\u0438:"}),a(wr,{type:"text",placeholder:e?"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043B\u0438\u0447\u043A\u0443 \u0441\u043E\u0431\u0430\u043A\u0438":t.name,id:"dog-name"})]}),w(ii,{children:[a("label",{htmlFor:"dog-age",children:"\u0412\u0456\u043A \u0441\u043E\u0431\u0430\u043A\u0438:"}),a(wr,{type:"text",placeholder:e?"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0456\u043A \u0441\u043E\u0431\u0430\u043A\u0438":t.age,id:"dog-age"})]})]}),w(_g,{children:[w(gu,{children:[w(bt,{children:[a("input",{type:"radio",name:"sex",defaultChecked:!e}),w("span",{children:[a(Kg,{})," \u0414\u0456\u0432\u0447\u0438\u043D\u043A\u0430"]})]}),w(bt,{children:[a("input",{type:"radio",name:"sex"}),w("span",{children:[a(Xg,{}),"\u0425\u043B\u043E\u043F\u0447\u0438\u043A"]})]})]}),w(gu,{children:[w(bt,{children:[a("input",{type:"radio",name:"size",defaultChecked:!e}),w("span",{children:[a(V1,{}),"\u0412\u0435\u043B\u0438\u043A\u0438\u0439"]})]}),w(bt,{children:[a("input",{type:"radio",name:"size"}),w("span",{children:[a(V1,{}),"\u0421\u0435\u0440\u0435\u0434\u043D\u0456\u0439"]})]}),w(bt,{children:[a("input",{type:"radio",name:"size"}),w("span",{children:[a(V1,{}),"\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439"]})]})]}),w(gu,{children:[w(bt,{children:[a("input",{type:"radio",name:"breed",defaultChecked:!e}),w("span",{children:[a(Ns,{}),"\u0411\u0435\u0437 \u043F\u043E\u0440\u043E\u0434\u0438"]})]}),w(bt,{children:[a("input",{type:"radio",name:"breed"}),w("span",{children:[a(Ns,{}),a("input",{type:"text",placeholder:e?"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0456\u043A \u0441\u043E\u0431\u0430\u043A\u0438":t.breed})]})]})]}),w(gu,{children:[w(bt,{children:[a("input",{type:"radio",name:"chip",defaultChecked:!e}),w("span",{children:[a(zs,{}),"\u0422\u0430\u043A"]})]}),w(bt,{children:[a("input",{type:"radio",name:"chip"}),w("span",{children:[a(zs,{}),"H\u0456"]})]})]})]}),w(qg,{children:[a("label",{htmlFor:"dog-about",children:"\u041F\u0440\u043E \u0442\u0432\u0430\u0440\u0438\u043D\u043A\u0443:"}),a("textarea",{placeholder:"\u041E\u043F\u0438\u0448\u0456\u0442\u044C \u0442\u0432\u0430\u0440\u0438\u043D\u043A\u0443",id:"dog-about",defaultValue:e?"":t.description})]}),a(ae,{children:e?"\u0414\u043E\u0434\u0430\u0442\u0438 \u043A\u0430\u0440\u0442\u043A\u0443":"\u041E\u043D\u043E\u0432\u0438\u0442\u0438 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E"})]})]})}function Jg(){return a(S8,{newCard:!0})}function Yg(){return a(S8,{newCard:!1})}const ex=localStorage.getItem("access_token"),tx="https://big-lapa-api-production.up.railway.app/api/auth/change-password",nx={Authorization:`Bearer ${ex}`,"Content-Type":"application/json"},ux=async e=>{const t=await ht.patch(tx,e,{headers:nx}).catch(n=>e.setIsError(n.message));t&&console.log(t.data)},T0=x.form`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`,I0=x(ae)`
  width: 100%;
`,N0=x(re)`
  width: 100%;
  max-width: 400px;
  padding: 0;
`,U4=x(Ne)`
  width: 100%;
  text-align: center;
`,xu=x.div`
  padding: 1px;
  color: var(--grey, #acabab);
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`,rx=x(wr)`
  width: 100%;
  margin-bottom: 32px;
`,ix=x.p`
  /* Desktop & 1280 px/Subheadline */
  font-size: 16px;
  margin-bottom: 12px;
`;function Me(e){const{placeholder:t,label:n,onChange:u,state:r,onBlur:i,iserror:o,changecolor:s}=e;return w(Ue,{children:[a(ix,{children:n}),a(rx,{placeholder:t||"",onChange:l=>u(l.target.value),value:r,onBlur:i,iserror:o==null?void 0:o.toString(),changecolor:s})]})}function ox(){const[e,t]=p.exports.useState(""),[n,u]=p.exports.useState(""),[r,i]=p.exports.useState(""),o=Un(),{mutate:s}=p4(ux,{onSuccess:()=>{o.invalidateQueries({queryKey:["patch"]})}}),l=()=>{s({oldPassword:e,newPassword:n,setIsError:i}),t(""),u("")};return w(T0,{onSubmit:()=>l(),children:[a(U4,{children:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F"}),a("p",{style:{fontWeight:"700",marginBottom:"20px"},children:"\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C"}),w(N0,{children:[r&&w("h1",{style:{color:"red"},children:["Error: ",r]}),a(Me,{state:e,onChange:c=>t(c),label:"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0441\u0442\u0430\u0440\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",placeholder:"*********"}),a(Me,{state:n,onChange:c=>u(c),label:"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",placeholder:"*********"}),a(Me,{state:n,onChange:c=>u(c),label:"\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044C \u043D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",placeholder:"*********"}),a(I0,{children:"\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438"})]})]})}const sx=()=>ht.get("https://big-lapa-api-production.up.railway.app/api/main/get").then(e=>(console.log("Contacts api call"),e.data)),lx=e=>ht.post("https://big-lapa-api-production.up.railway.app/api/main/create",e,{headers:{"Content-Type":"application/json"}}).then(t=>{console.log("Post successfully called"),t.data}),ax=x.div`
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
`,Je=({children:e,mode:t,hasButton:n,delay:u=3e3})=>{const[r,i]=p.exports.useState(!0),o=()=>{i(!1)};return p.exports.useEffect(()=>{const s=setTimeout(()=>{o()},u);return()=>{clearTimeout(s)}},[]),r?w(ax,{mode:t,children:[e,u!==3e3&&a("button",{onClick:o,children:"OK"})]}):null},js={email:"",first_phoneNumber:"",second_phoneNumber:""};function cx(){const[e,t]=p.exports.useState(js);C2({queryKey:["contacts"],initialData:js,queryFn:sx,onSuccess:o=>{t(o)}});const n=Un(),{mutate:u,isSuccess:r}=p4(()=>lx(e),{onSuccess:()=>{n.invalidateQueries({queryKey:["contacts"]})}});return w(T0,{onSubmit:o=>{o.preventDefault(),u()},children:[a(U4,{children:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u0438 \u0442\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430"}),w(N0,{children:[a(Me,{state:e.first_phoneNumber,onChange:o=>t({...e,first_phoneNumber:o}),label:"\u041F\u0435\u0440\u0448\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443",placeholder:"+380"}),a(Me,{state:e.second_phoneNumber,label:"\u0414\u0440\u0443\u0433\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443",placeholder:"+380",onChange:o=>t({...e,second_phoneNumber:o})}),a(Me,{state:e.email,label:"\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430",placeholder:"example@mail.com",onChange:o=>t({...e,email:o})}),a(I0,{type:"submit",children:"\u041E\u043D\u043E\u0432\u0438\u0442\u0438"})]}),r&&a(Je,{mode:"green",children:"\u0423\u0441\u043F\u0456\u0445! \u2714\uFE0F"})]})}const k8=x.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`,F8=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,dx=x.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  ${ue} {
    color: ${M.colors.grey};
  }
`,D8=x.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`,px=x.div`
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
`,b8=x.div`
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;

    p {
      font-size: ${M.fontSizes.buttonText};
      font-weight: ${M.fontWeights.semiBold};
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
`,A8=x(ae)`
  width: 100%;
  max-width: 400px;
`,fx=x.div`
  z-index: 10;
`,hx=x.div`
  background-color: rgba(217, 217, 217, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,mx=x.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${M.colors.background};
  border: 1px solid ${M.colors.grey};
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
`,Cx=x.div`
  text-align: center;
`,gx=x(ue)`
  margin-bottom: 20px;
`,xx=x.div``,yx=x.div`
  display: flex;
  gap: 40px;

  ${ae} {
    width: 150px;
  }

  @media (max-width: 767px) {
    gap: 8px;
  }
`;function L8({title:e,body:t,isOpen:n,onCancel:u,onSubmit:r,logoId:i}){return a(Ue,{children:n&&a(fx,{children:a(hx,{children:w(mx,{children:[w(Cx,{children:[a(gx,{children:e}),a(xx,{children:t})]}),w(yx,{children:[a(ae,{onClick:u,children:"\u041D\u0456"}),a(ae,{onClick:()=>r(i),children:"\u0422\u0430\u043A"})]})]})})})})}const Hs=e=>p.exports.createElement("svg",{width:80,height:80,viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M40 7.5C33.5721 7.5 27.2886 9.40609 21.944 12.9772C16.5994 16.5484 12.4338 21.6242 9.97393 27.5628C7.51408 33.5014 6.87047 40.0361 8.12449 46.3404C9.37851 52.6448 12.4738 58.4358 17.019 62.981C21.5643 67.5262 27.3552 70.6215 33.6596 71.8755C39.964 73.1295 46.4986 72.4859 52.4372 70.0261C58.3758 67.5662 63.4516 63.4006 67.0228 58.056C70.5939 52.7114 72.5 46.4279 72.5 40C72.4909 31.3833 69.0639 23.122 62.9709 17.0291C56.878 10.9361 48.6168 7.5091 40 7.5ZM40 67.5C34.561 67.5 29.2442 65.8872 24.7218 62.8654C20.1995 59.8437 16.6747 55.5488 14.5933 50.5238C12.5119 45.4988 11.9673 39.9695 13.0284 34.635C14.0895 29.3005 16.7086 24.4005 20.5546 20.5546C24.4005 16.7086 29.3006 14.0895 34.635 13.0284C39.9695 11.9673 45.4988 12.5119 50.5238 14.5933C55.5488 16.6747 59.8437 20.1995 62.8654 24.7218C65.8872 29.2442 67.5 34.561 67.5 40C67.4917 47.2909 64.5918 54.2808 59.4363 59.4363C54.2809 64.5918 47.2909 67.4917 40 67.5ZM25 33.75C25 33.0083 25.2199 32.2833 25.632 31.6666C26.0441 31.0499 26.6297 30.5693 27.315 30.2855C28.0002 30.0016 28.7542 29.9274 29.4816 30.0721C30.209 30.2167 30.8772 30.5739 31.4017 31.0983C31.9261 31.6228 32.2833 32.291 32.428 33.0184C32.5727 33.7458 32.4984 34.4998 32.2146 35.1851C31.9307 35.8703 31.4501 36.456 30.8334 36.868C30.2167 37.2801 29.4917 37.5 28.75 37.5C27.7555 37.5 26.8016 37.1049 26.0984 36.4017C25.3951 35.6984 25 34.7446 25 33.75ZM55 33.75C55 34.4917 54.7801 35.2167 54.368 35.8334C53.956 36.4501 53.3703 36.9307 52.6851 37.2145C51.9999 37.4984 51.2459 37.5726 50.5184 37.4279C49.791 37.2833 49.1228 36.9261 48.5984 36.4017C48.0739 35.8772 47.7168 35.209 47.5721 34.4816C47.4274 33.7542 47.5016 33.0002 47.7855 32.3149C48.0693 31.6297 48.5499 31.044 49.1666 30.632C49.7833 30.2199 50.5083 30 51.25 30C52.2446 30 53.1984 30.3951 53.9017 31.0983C54.6049 31.8016 55 32.7554 55 33.75ZM54.6625 53.75C54.8434 54.0345 54.9649 54.3527 55.0196 54.6854C55.0743 55.0181 55.0612 55.3585 54.9809 55.686C54.9007 56.0135 54.7551 56.3213 54.5528 56.5911C54.3505 56.8608 54.0957 57.0869 53.8038 57.2556C53.5119 57.4243 53.1889 57.5323 52.8542 57.5729C52.5195 57.6136 52.18 57.5861 51.8562 57.4922C51.5324 57.3982 51.2309 57.2398 50.9699 57.0263C50.7089 56.8128 50.4938 56.5488 50.3375 56.25C48.0031 52.2156 44.3344 50 40 50C35.6656 50 31.9969 52.2188 29.6625 56.25C29.5062 56.5488 29.2911 56.8128 29.0301 57.0263C28.7691 57.2398 28.4677 57.3982 28.1439 57.4922C27.82 57.5861 27.4806 57.6136 27.1458 57.5729C26.8111 57.5323 26.4881 57.4243 26.1962 57.2556C25.9043 57.0869 25.6495 56.8608 25.4472 56.5911C25.2449 56.3213 25.0993 56.0135 25.0191 55.686C24.9389 55.3585 24.9257 55.0181 24.9804 54.6854C25.0352 54.3527 25.1566 54.0345 25.3375 53.75C28.5531 48.1906 33.8969 45 40 45C46.1031 45 51.4469 48.1875 54.6625 53.75Z",fill:"#ACABAB"})),B8=e=>p.exports.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M6.18091 25.7789L6.18091 21.8191H22.0201L22.0201 5.9799H25.9799L25.9799 21.8191H41.8191L41.8191 25.7789L25.9799 25.7789V41.6181H22.0201V25.7789L6.18091 25.7789Z",fill:"#2E2E2E"})),P8=e=>p.exports.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},p.exports.createElement("path",{d:"M3.4 16L2 14.6L7.6 9L2 3.4L3.4 2L9 7.6L14.6 2L16 3.4L10.4 9L16 14.6L14.6 16L9 10.4L3.4 16Z",fill:"#2E2E2E"})),vx=e=>p.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:49,height:48,viewBox:"0 0 49 48",fill:"none",...e},p.exports.createElement("path",{d:"M32 26C32 25.6022 31.842 25.2206 31.5607 24.9393C31.2794 24.658 30.8978 24.5 30.5 24.5H18.5C18.1022 24.5 17.7206 24.658 17.4393 24.9393C17.158 25.2206 17 25.6022 17 26C17 26.3978 17.158 26.7794 17.4393 27.0607C17.7206 27.342 18.1022 27.5 18.5 27.5H30.5C30.8978 27.5 31.2794 27.342 31.5607 27.0607C31.842 26.7794 32 26.3978 32 26ZM32 34C32 33.6022 31.842 33.2206 31.5607 32.9393C31.2794 32.658 30.8978 32.5 30.5 32.5H18.5C18.1022 32.5 17.7206 32.658 17.4393 32.9393C17.158 33.2206 17 33.6022 17 34C17 34.3978 17.158 34.7794 17.4393 35.0607C17.7206 35.342 18.1022 35.5 18.5 35.5H30.5C30.8978 35.5 31.2794 35.342 31.5607 35.0607C31.842 34.7794 32 34.3978 32 34Z",fill:"#2E2E2E"}),p.exports.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.5 4.5C13.0413 4.5 11.6424 5.07946 10.6109 6.11091C9.57946 7.14236 9 8.54131 9 10V38C9 39.4587 9.57946 40.8576 10.6109 41.8891C11.6424 42.9205 13.0413 43.5 14.5 43.5H34.5C35.9587 43.5 37.3576 42.9205 38.3891 41.8891C39.4205 40.8576 40 39.4587 40 38V15.936C40 15.174 39.752 14.434 39.292 13.826L33.296 5.89C32.9698 5.45823 32.5478 5.108 32.0634 4.86682C31.5789 4.62563 31.0452 4.50007 30.504 4.5H14.5ZM12 10C12 8.62 13.12 7.5 14.5 7.5H29V16.294C29 17.122 29.672 17.794 30.5 17.794H37V38C37 39.38 35.88 40.5 34.5 40.5H14.5C13.12 40.5 12 39.38 12 38V10Z",fill:"#2E2E2E"})),wx=x.div`
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

  /* cursor: pointer; */

  button {
    position: absolute;
    right: 0px;
    top: -15px;
  }
  svg {
    margin-bottom: 15px;
  }

  a:active {
    border: none;
    appearance: none;
    background: none;
  }
`,Ex="https://big-lapa-api-production.up.railway.app/api/images/documents/category/Doc",Sx=()=>ht.get(Ex).then(e=>(console.log("getReportsID api called"),e.data)),kx=" https://big-lapa-api-production.up.railway.app/api/images/documents",Fx=e=>{const t=new FormData;return t.append("document",e),t.append("description",File.name),t.append("category","Doc"),ht.post(kx,t,{headers:{"Content-Type":"multipart/form-data"}}).then(n=>(console.log("postReport successfully called"),n.data))},Dx="https://big-lapa-api-production.up.railway.app/api/images/documents/",bx=e=>ht.delete(Dx+e).then(t=>(console.log("Delete report successfully called"),t.data)),Ax="https://big-lapa-api-production.up.railway.app/api/images/documents/";function Lx(){const[e,t]=p.exports.useState([]),[n,u]=p.exports.useState(""),[r,i]=p.exports.useState(!1),[o,s]=p.exports.useState(null),{isError:l,isLoading:c}=C2({queryKey:["reportsId"],initialData:[],queryFn:Sx,onSuccess:D=>{const F=D.map(S=>({id:S,name:S,src:null}));t(F)},refetchOnWindowFocus:!1}),{mutate:d,isError:m,isSuccess:g}=p4(Fx,{onError:D=>{console.log(D)}}),{mutate:v,isError:y,isSuccess:E}=p4(bx),b=()=>{i(D=>!D)},h=D=>{v(n),t(F=>F==null?void 0:F.filter(({id:S})=>S!==D)),i(F=>!F),s(null)},f=D=>{var S;const F=(S=D.target.files)==null?void 0:S[0];if(F){console.log(F==null?void 0:F.name);const A={id:Date.now().toString(),name:F.name,src:F};s(F),t(N=>[...N,A])}},C=D=>{i(!0),u(D)};return w("form",{onSubmit:D=>{D.preventDefault(),o instanceof File?(console.log("Posted",o),d(o),s(null)):console.log("unexpected file type")},style:{height:"100%"},children:[a(L8,{title:"\u0412\u0438 \u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0437\u0432\u0456\u0442?",body:"\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u0434\u0456\u044E \u0431\u0443\u0434\u0435 \u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E",isOpen:r,onCancel:b,onSubmit:h,logoId:n}),w(k8,{children:[w(F8,{children:[a(Ne,{children:"\u0417\u0432\u0456\u0442\u043D\u0456\u0441\u0442\u044C"}),a(D8,{children:e.map(({id:D,name:F})=>w(wx,{children:[w("a",{href:Ax+D,children:[a(vx,{id:"ico-report"}),a("p",{children:F.length<60?F:F.slice(0,60-3)+"... "})]}),a("button",{type:"button",onClick:()=>C(D),children:a(P8,{})})]},D))}),!o&&w(b8,{children:[a("input",{type:"file",name:"partner",id:"partner",onChange:f}),w("label",{htmlFor:"partner",children:[a(B8,{}),a("p",{children:"\u0414\u043E\u0434\u0430\u0442\u0438 \u0437\u0432\u0456\u0442"})]})]})]}),o&&a(A8,{type:"submit",children:"\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438"})]}),c&&a(Je,{mode:"green",children:"\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430 \u0437\u0430\u0447\u0435\u043A\u0430\u0439\u0442\u0435 \u231B"}),l&&a(Je,{mode:"red",children:"\u0421\u0445\u043E\u0436\u0435, \u0441\u0442\u0430\u043B\u0430\u0441\u044F \u043F\u043E\u043C\u0438\u043B\u043A\u0430 \u26D4"}),g&&a(Je,{mode:"green",children:"\u0417\u0432\u0456\u0442 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0432\u0441\u044F! \u2714\uFE0F"}),m&&a(Je,{mode:"red",delay:25e4,children:w("div",{children:["\u0421\u0445\u043E\u0436\u0435, \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043B \u26D4 ",a("br",{}),"\u041C\u043E\u0436\u043B\u0438\u0432\u043E \u0444\u043E\u0440\u043C\u0430\u0442 \u0444\u0430\u0439\u043B\u0443 \u043D\u0435 \u043F\u0456\u0434\u0445\u043E\u0434\u0438\u0442\u044C \u0447\u0438 \u0444\u0430\u0439\u043B \u0437\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0438\u0439"]})}),E&&a(Je,{mode:"green",children:"\u0417\u0432\u0456\u0442 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0438\u0432\u0441\u044F \u2714\uFE0F"}),y&&a(Je,{mode:"red",children:" \u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0432\u043A\u0430\u0437\u0430\u043D\u0438\u0439 \u0437\u0432\u0456\u0442 \u26D4"})]})}function Bx(){return a("div",{children:"Sliders"})}function Px({setIsModalOpen:e,partner:t,setDeleteLogoId:n}){var r;return w(px,{children:[a("button",{type:"button",onClick:()=>{e(!0),n(t.id)},children:a(P8,{})}),a("img",{src:(r=t==null?void 0:t.encodedBase64)!=null?r:t.src,alt:"partner"})]})}function Rx({selectedFile:e,setPartners:t,setSelectedFile:n}){const u=r=>{var o;const i=(o=r.target.files)==null?void 0:o[0];if(i){const s=new FileReader;s.onload=function(l){var m;const c=(m=l.target)==null?void 0:m.result,d={id:Date.now().toString(),src:i,encodedBase64:c};n(i),t(g=>[...g,d])},s.readAsDataURL(i),r.target.value=""}n(null)};return e?a(Ue,{}):w(b8,{children:[a("input",{type:"file",accept:"image/*",name:"partner",id:"partner",onChange:u}),w("label",{htmlFor:"partner",children:[a(B8,{}),a("p",{children:"\u0414\u043E\u0434\u0430\u0442\u0438 \u043B\u043E\u0433\u043E"})]})]})}const Mx="https://big-lapa-api-production.up.railway.app/api/images/category/Logo",Ox=()=>ht.get(Mx).then(e=>(console.log("getPartnersId called"),e.data)),Tx="https://big-lapa-api-production.up.railway.app/api/images",Ix=async e=>{const t="Optional description here",n="Logo",u=new FormData;return u.append("image",e),u.append("description",t),u.append("category",n),ht.post(Tx,u,{headers:{"Content-Type":"multipart/form-data"}}).then(r=>(console.log("post partner successfully called"),r.data))},Nx="https://big-lapa-api-production.up.railway.app/api/images/",zx=e=>ht.delete(Nx+e).then(t=>{console.log("deletePartner api call"),t.data});function jx(){const[e,t]=p.exports.useState([]),[n,u]=p.exports.useState(""),[r,i]=p.exports.useState(!1),[o,s]=p.exports.useState(null);C2({queryKey:["partnersId"],initialData:[],queryFn:Ox,onSuccess:F=>c(F),refetchOnWindowFocus:!1});const l=F=>Promise.all(F.map(S=>p8(S))),{mutate:c,isLoading:d,isSuccess:m,isError:g}=p4(l,{onSuccess:F=>t(F)}),{mutate:v,isSuccess:y,isError:E}=p4(Ix),{mutate:b,isSuccess:h,isError:f}=p4(zx);return w("form",{onSubmit:F=>{F.preventDefault(),o instanceof File?(v(o),s(null)):console.log("unexpected file type")},style:{height:"100%"},children:[a(L8,{title:"\u0412\u0438 \u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043B\u043E\u0433\u043E?",body:"\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u0434\u0456\u044E \u0431\u0443\u0434\u0435 \u043D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E",isOpen:r,onCancel:()=>{i(F=>!F)},onSubmit:F=>{b(F),t(S=>S==null?void 0:S.filter(({id:A})=>A!==F)),i(S=>!S),s(null)},logoId:n}),w(k8,{children:[w(F8,{children:[a(Ne,{children:"\u041B\u043E\u0433\u043E \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0456\u0432"}),w(dx,{children:[d&&a(ue,{children:"\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430 \u0437\u0430\u0447\u0435\u043A\u0430\u0439\u0442\u0435 \u231B"}),m&&e.length===0&&w(Ue,{children:[a(ue,{children:"\u0421\u0445\u043E\u0436\u0435, \u0443 \u043F\u0440\u0438\u0442\u0443\u043B\u043A\u0443 \u043F\u043E\u043A\u0438 \u0449\u043E \u043D\u0435\u043C\u0430\u0454 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0456\u0432"}),a(Hs,{})]})]}),w(D8,{children:[e==null?void 0:e.map(F=>a(Px,{setIsModalOpen:i,partner:F,setDeleteLogoId:u},F.id)),a(Rx,{selectedFile:o,setPartners:t,setSelectedFile:s})]})]}),o&&a(A8,{type:"submit",children:"\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438"})]}),g&&a(Je,{mode:"red",children:"\u0421\u0445\u043E\u0436\u0435, \u0441\u0442\u0430\u043B\u0430\u0441\u044F \u043F\u043E\u043C\u0438\u043B\u043A\u0430 \u26D4"}),y&&a(Je,{mode:"green",children:"\u041B\u043E\u0433\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u043B\u043E\u0441\u044C! \u2714\uFE0F"}),E&&w(Je,{mode:"red",delay:25e4,children:[w("div",{children:["\u0421\u0445\u043E\u0436\u0435, \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043B ",a("br",{}),"\u041C\u043E\u0436\u043B\u0438\u0432\u043E \u0444\u043E\u0440\u043C\u0430\u0442 \u0444\u0430\u0439\u043B\u0443 \u043D\u0435 \u043F\u0456\u0434\u0445\u043E\u0434\u0438\u0442\u044C \u0447\u0438 \u0444\u0430\u0439\u043B \u0437\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0438\u0439"]}),a(Hs,{})]}),h&&a(Je,{mode:"green",children:"\u041F\u0430\u0440\u0442\u043D\u0435\u0440 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0438\u0432\u0441\u044F! \u2714\uFE0F"}),f&&a(Je,{mode:"red",children:"\u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0432\u043A\u0430\u0437\u0430\u043D\u0438\u0439 \u0444\u0430\u0439\u043B \u26D4"})]})}function Hx(){return a(Mg,{children:w(Ci,{children:[a(W,{index:!0,path:"/",element:a(Ig,{})}),a(W,{path:"/new-card",element:a(Jg,{})}),a(W,{path:"/edit-card",element:a(Yg,{})}),a(W,{path:"/partners",element:a(jx,{})}),a(W,{path:"/sliders",element:a(Bx,{})}),a(W,{path:"/reports",element:a(Lx,{})}),a(W,{path:"/contacts",element:a(cx,{})}),a(W,{path:"/settings",element:a(ox,{})}),a(W,{path:"*",element:a(S2,{})})]})})}const $x=x.div`
  width: 100%;
  height: calc(100vh - 96px);
  padding: 40px 10px;

  @media screen and (max-width: 767px) {
    margin-left: 40px;
  }
`,Ux=()=>{function e(){let t=!1;return localStorage.getItem("access_token")?t=!0:t=!1,t}return e()?a(kr,{}):a(j6,{to:"/login"})},Vx=x(U4)`
  color: var(--dark, #2e2e2e);
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  font-family: Open Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`,Wx=()=>{const[e,t]=p.exports.useState("");return w(T0,{children:[a(Vx,{children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043E\u0434 \u0456\u0437 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F"}),w(N0,{children:[a(Me,{state:e,onChange:n=>t(n),label:"\u041A\u043E\u0434 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F",placeholder:"****"}),a(pt,{to:"recovery",children:a(I0,{type:"submit",children:"\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438"})})]})]})},Qx=x.p`
  color: var(--dark, #2e2e2e);
  text-align: center;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 35px;
`,Zx=x.button`
  color: var(--grey, #acabab);
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-left: 265px;
  bottom: 25px;
  margin-top: 35px;
`;x(U4)`
  color: red;
`;const _x=()=>{const[e,t]=p.exports.useState("");return w(T0,{children:[a(U4,{children:"\u0417\u0430\u0431\u0443\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?"}),w(N0,{children:[a(Qx,{children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438, \u0456 \u043C\u0438 \u043D\u0430\u0434\u0456\u0448\u043B\u0435\u043C\u043E \u0432\u0430\u043C \u043A\u043E\u0434 \u0434\u043B\u044F \u0437\u043C\u0456\u043D\u0438 \u043F\u0430\u0440\u043E\u043B\u044F"}),a(Me,{state:e,onChange:n=>t(n),label:"\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430:",placeholder:"email@gmail.com"}),a(pt,{to:"confirmation",children:a(I0,{type:"submit",children:"\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438"})})]})]})},qx="https://big-lapa-api-production.up.railway.app/api/auth/login",Gx={"Content-Type":"application/json"},Kx=async e=>{await ht.post(qx,e,{headers:Gx}).then(t=>(localStorage.setItem("access_token",t.data.access_token),t.data))},Xx=e=>{const{value:t,validations:n}=e,[u,r]=p.exports.useState(!0),[i,o]=p.exports.useState(!1),[s,l]=p.exports.useState(!1),[c,d]=p.exports.useState(!1),[m,g]=p.exports.useState(!1);return p.exports.useEffect(()=>{for(const v in n)switch(v){case"isEmpty":r(!t);break;case"minLength":t.length<n[v]?o(!0):o(!1);break;case"maxLength":t.length>n[v]?l(!0):l(!1);break;case"isEmailErr":default:/^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i.test(String(t).toLowerCase())?d(!1):d(!0);break}},[t]),p.exports.useEffect(()=>{g(!(u||i||s||c))},[u,i,s,c]),{isEmpty:u,minLengthError:i,maxLengthError:s,inputDisabled:m,emailError:c}},$s=(e,t)=>{const[n,u]=p.exports.useState(e),[r,i]=p.exports.useState(!1),o=Xx({value:n,validations:t});return{value:n,isDirty:r,onChange:d=>{u(d)},handleClear:d=>{d.preventDefault(),u("")},onBlur:()=>{i(!0)},...o}},Jx=()=>{const e=Un(),{mutate:t,isError:n}=p4(Kx,{onSuccess:()=>{e.invalidateQueries({queryKey:["auth"]})}}),u=$s("",{isEmpty:!1,minLength:8,emailError:!1}),r=$s("",{isEmpty:!1,minLength:8,maxLength:12});return a(Ue,{children:w(T0,{onSubmit:o=>{const s={login:u.value,password:r.value};t(s),u.handleClear(o),r.handleClear(o)},children:[a(U4,{children:"\u0412\u0445\u0456\u0434 \u0434\u043E \u043F\u0430\u043D\u0435\u043B\u0456"}),w(N0,{children:[n&&u.emailError&&a(xu,{children:"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u0456\u0439\u0441\u043D\u0438\u0439 email"}),n?a(Me,{state:u.value,onChange:o=>u.onChange(o),onBlur:u.onBlur,label:"\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430:",placeholder:"email@gmail.com",iserror:n,changecolor:u.emailError}):a(Me,{state:u.value,onChange:o=>u.onChange(o),onBlur:u.onBlur,label:"\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430:",placeholder:"email@gmail.com"}),n?a(Me,{state:r.value,onChange:o=>r.onChange(o),onBlur:r.onBlur,label:"\u041F\u0430\u0440\u043E\u043B\u044C \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430:",placeholder:"********",iserror:n,changecolor:r.minLengthError||r.maxLengthError}):a(Me,{state:r.value,onChange:o=>r.onChange(o),onBlur:r.onBlur,label:"\u041F\u0430\u0440\u043E\u043B\u044C \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430:",placeholder:"********"}),n&&a(xu,{children:"\u041F\u043E\u0448\u0442\u0430 \u0430\u0431\u043E \u043F\u0430\u0440\u043E\u043B\u044C \u043D\u0435 \u0456\u0441\u043D\u0443\u044E\u0442\u044C"}),r.isDirty&&r.minLengthError&&a(xu,{children:"\u041F\u0430\u0440\u043E\u043B\u044C \u043C\u0430\u0454 \u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u043C\u0456\u043D\u0456\u043C\u0443\u043C 8 \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432"}),r.isDirty&&r.maxLengthError&&a(xu,{children:"\u041F\u0430\u0440\u043E\u043B\u044C \u043C\u0430\u0454 \u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C 12 \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432"}),a(Et,{to:"authorization",children:a(Zx,{children:"\u0417\u0430\u0431\u0443\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?"})}),a(I0,{type:"submit",disabled:!u.inputDisabled||!r.inputDisabled,children:"\u0423\u0432\u0456\u0439\u0442\u0438"})]})]})})},Yx=()=>{const[e,t]=p.exports.useState("");return w(T0,{children:[a(U4,{children:"\u0412\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0430\u0440\u043E\u043B\u044E"}),w(N0,{children:[a(Me,{state:e,onChange:n=>t(n),label:"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",placeholder:"********"}),a(Me,{state:e,onChange:n=>t(n),label:"\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C",placeholder:"********"}),a(pt,{to:"/login",children:a(I0,{type:"submit",children:"\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438"})})]})]})},ey=()=>a($x,{children:w(Ci,{children:[a(W,{index:!0,path:"/",element:a(Jx,{})}),w(W,{element:a(Ux,{}),children:[a(W,{path:"/authorization",element:a(_x,{})}),a(W,{path:"authorization/confirmation",element:a(Wx,{})}),a(W,{path:"authorization/confirmation/recovery",element:a(Yx,{})})]}),a(W,{path:"*",element:a(S2,{})})]})});function ty(){const{pathname:e}=Ht();return p.exports.useEffect(()=>{window.scrollTo(0,0)},[e]),null}const ny=new I7;function uy(){return a(Jd,{client:ny,children:a(G9,{theme:M,children:w(Z6,{basename:"/",children:[a(ty,{}),w(Ci,{children:[w(W,{element:a(fh,{}),children:[a(W,{index:!0,path:"/",element:a(mC,{})}),a(W,{path:"dogs",element:a(im,{})}),a(W,{path:"dog/:id/:name",element:a(Lg,{})}),a(W,{path:"about",element:a(Rh,{})}),a(W,{path:"contacts",element:a(KC,{})}),a(W,{path:"*",element:a(S2,{})})]}),a(W,{element:a(w7,{}),children:a(W,{path:"admin/*",element:a(Hx,{})})}),a(W,{element:a(pp,{}),children:a(W,{path:"login/*",element:a(ey,{})})})]})]})})})}var R8,Us=Tl.exports;R8=Us.createRoot,Us.hydrateRoot;const ry=document.getElementById("root"),iy=R8(ry);iy.render(a(be.StrictMode,{children:a(uy,{})}));
