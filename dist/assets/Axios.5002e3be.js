import{G as Z,d as Re,k as Q,c as C,b as j,i as ee,w as B,p as _e,a as $e,g as re,H as Ne,o as O,I as je,h as D,J as L,j as Pe}from"./vendor.4af2f137.js";import{_ as ke}from"./index.8d5d1092.js";var V={exports:{}},de=function(e,t){return function(){for(var s=new Array(arguments.length),o=0;o<s.length;o++)s[o]=arguments[o];return e.apply(t,s)}},Te=de,w=Object.prototype.toString;function z(r){return w.call(r)==="[object Array]"}function H(r){return typeof r=="undefined"}function Ue(r){return r!==null&&!H(r)&&r.constructor!==null&&!H(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function Be(r){return w.call(r)==="[object ArrayBuffer]"}function De(r){return typeof FormData!="undefined"&&r instanceof FormData}function Le(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&r.buffer instanceof ArrayBuffer,e}function Ie(r){return typeof r=="string"}function qe(r){return typeof r=="number"}function pe(r){return r!==null&&typeof r=="object"}function $(r){if(w.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function Fe(r){return w.call(r)==="[object Date]"}function Me(r){return w.call(r)==="[object File]"}function He(r){return w.call(r)==="[object Blob]"}function he(r){return w.call(r)==="[object Function]"}function Je(r){return pe(r)&&he(r.pipe)}function Ve(r){return typeof URLSearchParams!="undefined"&&r instanceof URLSearchParams}function ze(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Ke(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function K(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),z(r))for(var t=0,n=r.length;t<n;t++)e.call(null,r[t],t,r);else for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.call(null,r[s],s,r)}function J(){var r={};function e(s,o){$(r[o])&&$(s)?r[o]=J(r[o],s):$(s)?r[o]=J({},s):z(s)?r[o]=s.slice():r[o]=s}for(var t=0,n=arguments.length;t<n;t++)K(arguments[t],e);return r}function Xe(r,e,t){return K(e,function(s,o){t&&typeof s=="function"?r[o]=Te(s,t):r[o]=s}),r}function We(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var m={isArray:z,isArrayBuffer:Be,isBuffer:Ue,isFormData:De,isArrayBufferView:Le,isString:Ie,isNumber:qe,isObject:pe,isPlainObject:$,isUndefined:H,isDate:Fe,isFile:Me,isBlob:He,isFunction:he,isStream:Je,isURLSearchParams:Ve,isStandardBrowserEnv:Ke,forEach:K,merge:J,extend:Xe,trim:ze,stripBOM:We},E=m;function te(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var me=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(E.isURLSearchParams(t))s=t.toString();else{var o=[];E.forEach(t,function(a,h){a===null||typeof a=="undefined"||(E.isArray(a)?h=h+"[]":a=[a],E.forEach(a,function(f){E.isDate(f)?f=f.toISOString():E.isObject(f)&&(f=JSON.stringify(f)),o.push(te(h)+"="+te(f))}))}),s=o.join("&")}if(s){var i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e},Ge=m;function k(){this.handlers=[]}k.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};k.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};k.prototype.forEach=function(e){Ge.forEach(this.handlers,function(n){n!==null&&e(n)})};var Ye=k,Ze=m,Qe=function(e,t){Ze.forEach(e,function(s,o){o!==t&&o.toUpperCase()===t.toUpperCase()&&(e[t]=s,delete e[o])})},ve=function(e,t,n,s,o){return e.config=t,n&&(e.code=n),e.request=s,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},er=ve,be=function(e,t,n,s,o){var i=new Error(e);return er(i,t,n,s,o)},rr=be,tr=function(e,t,n){var s=n.config.validateStatus;!n.status||!s||s(n.status)?e(n):t(rr("Request failed with status code "+n.status,n.config,null,n.request,n))},R=m,nr=R.isStandardBrowserEnv()?function(){return{write:function(t,n,s,o,i,u){var a=[];a.push(t+"="+encodeURIComponent(n)),R.isNumber(s)&&a.push("expires="+new Date(s).toGMTString()),R.isString(o)&&a.push("path="+o),R.isString(i)&&a.push("domain="+i),u===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var n=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),sr=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},ar=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},or=sr,ir=ar,ur=function(e,t){return e&&!or(t)?ir(e,t):t},I=m,cr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],lr=function(e){var t={},n,s,o;return e&&I.forEach(e.split(`
`),function(u){if(o=u.indexOf(":"),n=I.trim(u.substr(0,o)).toLowerCase(),s=I.trim(u.substr(o+1)),n){if(t[n]&&cr.indexOf(n)>=0)return;n==="set-cookie"?t[n]=(t[n]?t[n]:[]).concat([s]):t[n]=t[n]?t[n]+", "+s:s}}),t},ne=m,fr=ne.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),n;function s(o){var i=o;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return n=s(window.location.href),function(i){var u=ne.isString(i)?s(i):i;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}(),_=m,dr=tr,pr=nr,hr=me,mr=ur,vr=lr,br=fr,q=be,se=function(e){return new Promise(function(n,s){var o=e.data,i=e.headers,u=e.responseType;_.isFormData(o)&&delete i["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.Authorization="Basic "+btoa(h+":"+y)}var f=mr(e.baseURL,e.url);a.open(e.method.toUpperCase(),hr(f,e.params,e.paramsSerializer),!0),a.timeout=e.timeout;function l(){if(!!a){var b="getAllResponseHeaders"in a?vr(a.getAllResponseHeaders()):null,g=!u||u==="text"||u==="json"?a.responseText:a.response,S={data:g,status:a.status,statusText:a.statusText,headers:b,config:e,request:a};dr(n,s,S),a=null}}if("onloadend"in a?a.onloadend=l:a.onreadystatechange=function(){!a||a.readyState!==4||a.status===0&&!(a.responseURL&&a.responseURL.indexOf("file:")===0)||setTimeout(l)},a.onabort=function(){!a||(s(q("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){s(q("Network Error",e,null,a)),a=null},a.ontimeout=function(){var g="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),s(q(g,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",a)),a=null},_.isStandardBrowserEnv()){var c=(e.withCredentials||br(f))&&e.xsrfCookieName?pr.read(e.xsrfCookieName):void 0;c&&(i[e.xsrfHeaderName]=c)}"setRequestHeader"in a&&_.forEach(i,function(g,S){typeof o=="undefined"&&S.toLowerCase()==="content-type"?delete i[S]:a.setRequestHeader(S,g)}),_.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),u&&u!=="json"&&(a.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&a.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(g){!a||(a.abort(),s(g),a=null)}),o||(o=null),a.send(o)})},d=m,ae=Qe,yr=ve,gr={"Content-Type":"application/x-www-form-urlencoded"};function oe(r,e){!d.isUndefined(r)&&d.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function wr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=se),r}function Er(r,e,t){if(d.isString(r))try{return(e||JSON.parse)(r),d.trim(r)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(r)}var T={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:wr(),transformRequest:[function(e,t){return ae(t,"Accept"),ae(t,"Content-Type"),d.isFormData(e)||d.isArrayBuffer(e)||d.isBuffer(e)||d.isStream(e)||d.isFile(e)||d.isBlob(e)?e:d.isArrayBufferView(e)?e.buffer:d.isURLSearchParams(e)?(oe(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):d.isObject(e)||t&&t["Content-Type"]==="application/json"?(oe(t,"application/json"),Er(e)):e}],transformResponse:[function(e){var t=this.transitional,n=t&&t.silentJSONParsing,s=t&&t.forcedJSONParsing,o=!n&&this.responseType==="json";if(o||s&&d.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(o)throw i.name==="SyntaxError"?yr(i,this,"E_JSON_PARSE"):i}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};T.headers={common:{Accept:"application/json, text/plain, */*"}};d.forEach(["delete","get","head"],function(e){T.headers[e]={}});d.forEach(["post","put","patch"],function(e){T.headers[e]=d.merge(gr)});var X=T,xr=m,Sr=X,Cr=function(e,t,n){var s=this||Sr;return xr.forEach(n,function(i){e=i.call(s,e,t)}),e},ye=function(e){return!!(e&&e.__CANCEL__)},ie=m,F=Cr,Or=ye,Ar=X;function M(r){r.cancelToken&&r.cancelToken.throwIfRequested()}var Rr=function(e){M(e),e.headers=e.headers||{},e.data=F.call(e,e.data,e.headers,e.transformRequest),e.headers=ie.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ie.forEach(["delete","get","head","post","put","patch","common"],function(s){delete e.headers[s]});var t=e.adapter||Ar.adapter;return t(e).then(function(s){return M(e),s.data=F.call(e,s.data,s.headers,e.transformResponse),s},function(s){return Or(s)||(M(e),s&&s.response&&(s.response.data=F.call(e,s.response.data,s.response.headers,e.transformResponse))),Promise.reject(s)})},p=m,ge=function(e,t){t=t||{};var n={},s=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],u=["validateStatus"];function a(l,c){return p.isPlainObject(l)&&p.isPlainObject(c)?p.merge(l,c):p.isPlainObject(c)?p.merge({},c):p.isArray(c)?c.slice():c}function h(l){p.isUndefined(t[l])?p.isUndefined(e[l])||(n[l]=a(void 0,e[l])):n[l]=a(e[l],t[l])}p.forEach(s,function(c){p.isUndefined(t[c])||(n[c]=a(void 0,t[c]))}),p.forEach(o,h),p.forEach(i,function(c){p.isUndefined(t[c])?p.isUndefined(e[c])||(n[c]=a(void 0,e[c])):n[c]=a(void 0,t[c])}),p.forEach(u,function(c){c in t?n[c]=a(e[c],t[c]):c in e&&(n[c]=a(void 0,e[c]))});var y=s.concat(o).concat(i).concat(u),f=Object.keys(e).concat(Object.keys(t)).filter(function(c){return y.indexOf(c)===-1});return p.forEach(f,h),n};const _r="axios",$r="0.21.4",Nr="Promise based HTTP client for the browser and node.js",jr="index.js",Pr={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},kr={type:"git",url:"https://github.com/axios/axios.git"},Tr=["xhr","http","ajax","promise","node"],Ur="Matt Zabriskie",Br="MIT",Dr={url:"https://github.com/axios/axios/issues"},Lr="https://axios-http.com",Ir={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},qr={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},Fr="dist/axios.min.js",Mr="dist/axios.min.js",Hr="./index.d.ts",Jr={"follow-redirects":"^1.14.0"},Vr=[{path:"./dist/axios.min.js",threshold:"5kB"}];var zr={name:_r,version:$r,description:Nr,main:jr,scripts:Pr,repository:kr,keywords:Tr,author:Ur,license:Br,bugs:Dr,homepage:Lr,devDependencies:Ir,browser:qr,jsdelivr:Fr,unpkg:Mr,typings:Hr,dependencies:Jr,bundlesize:Vr},we=zr,W={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){W[r]=function(n){return typeof n===r||"a"+(e<1?"n ":" ")+r}});var ue={},Kr=we.version.split(".");function Ee(r,e){for(var t=e?e.split("."):Kr,n=r.split("."),s=0;s<3;s++){if(t[s]>n[s])return!0;if(t[s]<n[s])return!1}return!1}W.transitional=function(e,t,n){var s=t&&Ee(t);function o(i,u){return"[Axios v"+we.version+"] Transitional option '"+i+"'"+u+(n?". "+n:"")}return function(i,u,a){if(e===!1)throw new Error(o(u," has been removed in "+t));return s&&!ue[u]&&(ue[u]=!0,console.warn(o(u," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(i,u,a):!0}};function Xr(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var n=Object.keys(r),s=n.length;s-- >0;){var o=n[s],i=e[o];if(i){var u=r[o],a=u===void 0||i(u,o,r);if(a!==!0)throw new TypeError("option "+o+" must be "+a);continue}if(t!==!0)throw Error("Unknown option "+o)}}var Wr={isOlderVersion:Ee,assertOptions:Xr,validators:W},xe=m,Gr=me,ce=Ye,le=Rr,U=ge,Se=Wr,x=Se.validators;function A(r){this.defaults=r,this.interceptors={request:new ce,response:new ce}}A.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=U(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;t!==void 0&&Se.assertOptions(t,{silentJSONParsing:x.transitional(x.boolean,"1.0.0"),forcedJSONParsing:x.transitional(x.boolean,"1.0.0"),clarifyTimeoutError:x.transitional(x.boolean,"1.0.0")},!1);var n=[],s=!0;this.interceptors.request.forEach(function(l){typeof l.runWhen=="function"&&l.runWhen(e)===!1||(s=s&&l.synchronous,n.unshift(l.fulfilled,l.rejected))});var o=[];this.interceptors.response.forEach(function(l){o.push(l.fulfilled,l.rejected)});var i;if(!s){var u=[le,void 0];for(Array.prototype.unshift.apply(u,n),u=u.concat(o),i=Promise.resolve(e);u.length;)i=i.then(u.shift(),u.shift());return i}for(var a=e;n.length;){var h=n.shift(),y=n.shift();try{a=h(a)}catch(f){y(f);break}}try{i=le(a)}catch(f){return Promise.reject(f)}for(;o.length;)i=i.then(o.shift(),o.shift());return i};A.prototype.getUri=function(e){return e=U(this.defaults,e),Gr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};xe.forEach(["delete","get","head","options"],function(e){A.prototype[e]=function(t,n){return this.request(U(n||{},{method:e,url:t,data:(n||{}).data}))}});xe.forEach(["post","put","patch"],function(e){A.prototype[e]=function(t,n,s){return this.request(U(s||{},{method:e,url:t,data:n}))}});var Yr=A;function G(r){this.message=r}G.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};G.prototype.__CANCEL__=!0;var Ce=G,Zr=Ce;function P(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(s){e=s});var t=this;r(function(s){t.reason||(t.reason=new Zr(s),e(t.reason))})}P.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};P.source=function(){var e,t=new P(function(s){e=s});return{token:t,cancel:e}};var Qr=P,et=function(e){return function(n){return e.apply(null,n)}},rt=function(e){return typeof e=="object"&&e.isAxiosError===!0},fe=m,tt=de,N=Yr,nt=ge,st=X;function Oe(r){var e=new N(r),t=tt(N.prototype.request,e);return fe.extend(t,N.prototype,e),fe.extend(t,e),t}var v=Oe(st);v.Axios=N;v.create=function(e){return Oe(nt(v.defaults,e))};v.Cancel=Ce;v.CancelToken=Qr;v.isCancel=ye;v.all=function(e){return Promise.all(e)};v.spread=et;v.isAxiosError=rt;V.exports=v;V.exports.default=v;var at=V.exports;const ot="https://api.github.com",Y=at.create({baseURL:ot,timeout:2e4});Y.interceptors.request.use(r=>r,r=>Promise.reject(r));Y.interceptors.response.use(r=>r,r=>{if(r.response&&r.response.data){const e=r.response.status,t=r.response.data.message;Z.error(`Code: ${e}, Message: ${t}`),console.error("[Axios Error]",r.response)}else Z.error(`${r}`);return Promise.reject(r)});const it=Re({name:"Axios",setup(){const r=Q(null),e=Q(!1);return{userInfo:r,loading:e,getUserInfo:()=>{e.value=!0,Y.get("/users/XPoet").then(n=>{console.log("response: ",n.data),r.value=n.data,e.value=!1}).catch(n=>{e.value=!1,console.error(n)})}}}}),Ae=r=>(_e("data-v-3dbd4432"),r=r(),$e(),r),ut={class:"axios-container page-container"},ct=Ae(()=>j("div",{class:"page-title"},"Axios Test Page",-1)),lt={class:"user-info-container"},ft={class:"card-header"},dt=Ae(()=>j("span",null,"XPoet",-1)),pt=Pe("\u70B9\u51FB\u83B7\u53D6XPoet\u4FE1\u606F "),ht={class:"info-list-box"},mt={key:0,class:"text item"},vt={key:1,class:"text item"},bt={key:2,class:"text item"};function yt(r,e,t,n,s,o){const i=re("el-button"),u=re("el-card"),a=Ne("loading");return O(),C("div",ut,[ct,j("div",lt,[ee(u,{class:"box-card"},{header:B(()=>[j("div",ft,[dt,ee(i,{class:"button",type:"text",onClick:r.getUserInfo},{default:B(()=>[pt]),_:1},8,["onClick"])])]),default:B(()=>{var h,y,f,l,c,b;return[je((O(),C("div",ht,[(h=r.userInfo)!=null&&h.name?(O(),C("div",mt,"name: "+D((y=r.userInfo)==null?void 0:y.name),1)):L("",!0),(f=r.userInfo)!=null&&f.bio?(O(),C("div",vt,"bio: "+D((l=r.userInfo)==null?void 0:l.bio),1)):L("",!0),(c=r.userInfo)!=null&&c.blog?(O(),C("div",bt,"blog: "+D((b=r.userInfo)==null?void 0:b.blog),1)):L("",!0)])),[[a,r.loading]])]}),_:1})])])}var Et=ke(it,[["render",yt],["__scopeId","data-v-3dbd4432"]]);export{Et as default};
