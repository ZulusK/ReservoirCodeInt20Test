webpackJsonp([1],{"+6W6":function(e,t){},"+GGk":function(e,t,n){"use strict";var r=n("zIVT");function s(){this.handlers=[]}s.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},s.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},s.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=s},"/VWB":function(e,t,n){"use strict";var r=n("RlDD");function s(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}s.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},s.source=function(){var e;return{token:new s(function(t){e=t}),cancel:e}},e.exports=s},"0l+G":function(e,t,n){"use strict";var r=n("obgR");e.exports=function(e,t,n,s,i){var a=new Error(e);return r(a,t,n,s,i)}},"1Cva":function(e,t){},"1DmB":function(e,t,n){"use strict";var r=n("zIVT");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function s(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=s(window.location.href),function(t){var n=r.isString(t)?s(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},"4nb4":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},"5W1q":function(e,t){},"5aBc":function(e,t,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function s(){this.message="String contains an invalid character"}s.prototype=new Error,s.prototype.code=5,s.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,i=String(e),a="",o=0,c=r;i.charAt(0|o)||(c="=",o%1);a+=c.charAt(63&t>>8-o%1*8)){if((n=i.charCodeAt(o+=.75))>255)throw new s;t=t<<8|n}return a}},"6ko8":function(e,t){},"6wec":function(e,t){},"7LYE":function(e,t,n){"use strict";var r=n("zIVT"),s=n("wZW9"),i=n("RS1v"),a=n("9T8H"),o=n("1DmB"),c=n("0l+G"),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n("5aBc");e.exports=function(e){return new Promise(function(t,l){var d=e.data,f=e.headers;r.isFormData(d)&&delete f["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||o(e.url)||(p=new window.XDomainRequest,h="onload",m=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var v=e.auth.username||"",g=e.auth.password||"";f.Authorization="Basic "+u(v+":"+g)}if(p.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[h]=function(){if(p&&(4===p.readyState||m)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?a(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:e,request:p};s(t,l,r),p=null}},p.onerror=function(){l(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){l(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var k=n("OhlP"),w=(e.withCredentials||o(e.url))&&e.xsrfCookieName?k.read(e.xsrfCookieName):void 0;w&&(f[e.xsrfHeaderName]=w)}if("setRequestHeader"in p&&r.forEach(f,function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),l(e),p=null)}),void 0===d&&(d=null),p.send(d)})}},"9RB6":function(e,t,n){"use strict";var r=n("T2kP"),s=n("zIVT"),i=n("+GGk"),a=n("U2+V");function o(e){this.defaults=e,this.interceptors={request:new i,response:new i}}o.prototype.request=function(e){"string"==typeof e&&(e=s.merge({url:arguments[0]},arguments[1])),(e=s.merge(r,this.defaults,{method:"get"},e)).method=e.method.toLowerCase();var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},s.forEach(["delete","get","head","options"],function(e){o.prototype[e]=function(t,n){return this.request(s.merge(n||{},{method:e,url:t}))}}),s.forEach(["post","put","patch"],function(e){o.prototype[e]=function(t,n,r){return this.request(s.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=o},"9T8H":function(e,t,n){"use strict";var r=n("zIVT"),s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&s.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}}),a):a}},BTEd:function(e,t){},BTlr:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},C9l1:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"Ex+b":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"GFI/":function(e,t){},"H/op":function(e,t){},HXpE:function(e,t,n){"use strict";var r=n("zIVT"),s=n("4nb4"),i=n("9RB6"),a=n("T2kP");function o(e){var t=new i(e),n=s(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=o(a);c.Axios=i,c.create=function(e){return o(r.merge(a,e))},c.Cancel=n("RlDD"),c.CancelToken=n("/VWB"),c.isCancel=n("C9l1"),c.all=function(e){return Promise.all(e)},c.spread=n("Kbjq"),e.exports=c,e.exports.default=c},JCHG:function(e,t){},Kbjq:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),s=n("NYxO"),i=n("424j");r.a.use(s.a);var a=new s.a.Store({strict:!0,state:{tokens:{access:null,refresh:null},user:null},plugins:[Object(i.a)()],getters:{isLogged:function(e){return function(){return Boolean(e.user)}},isNotLogged:function(e){return function(){return!Boolean(e.user)}}},mutations:{setToken_refresh:function(e,t){e.tokens.refresh=t},setToken_access:function(e,t){e.tokens.access=t},setUser:function(e,t){e.user=t}},actions:{setToken_refresh:function(e,t){(0,e.commit)("setToken_refresh",t)},setToken_access:function(e,t){(0,e.commit)("setToken_access",t)},setUser:function(e,t){(0,e.commit)("setUser",t)}}}),o=new r.a,c=[];c.push({title:"Home",class:"is-hidden-desktop",icon:{name:"home",pack:"fa"},to:{name:"Index"},tooltip:"Back to home"}),c.push({title:"Login",class:"is-hidden-desktop",handler:function(){o.$emit("login")},icon:{name:"sign-in",pack:"fa"},tooltip:"Enter to your account",condition:function(){return a.getters.isNotLogged()}}),c.push({title:"register",class:"is-hidden-desktop",handler:function(){o.$emit("register")},icon:{name:"account",pack:"mdi"},tooltip:"Create new account",condition:function(){return a.getters.isNotLogged()}}),c.push({title:"Logout",class:"is-hidden-desktop",handler:function(){o.$emit("logout")},icon:{name:"sign-out",pack:"fa"},tooltip:"Exit from your account",condition:function(){return a.getters.isLogged()}}),c.push({title:"Discover",tooltip:"All our memes is for you",children:[{title:"Top",icon:{name:"fire",pack:"mdi"},tooltip:"Show the best memes"},{title:"New",icon:{name:"timelapse",pack:"mdi"},tooltip:"Show new memes"}]});var u=c,l={name:"PlainLink",props:{link:{type:Object,required:!0}},methods:{handleClick:function(){this.hasHandler?this.link.handler():this.link.to&&this.$router.push(this.link.to)}},computed:{hasChildren:function(){return this.link.children&&this.link.children.length>0},hasTooltip:function(){return this.link.tooltip&&this.link.tooltip.length>0},hasIcon:function(){return this.link.icon},hasHandler:function(){return this.link.handler}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{ref:"btn",staticClass:"navbar-item",on:{click:function(t){e.handleClick()}}},[e.hasIcon?n("b-icon",{class:e.link.icon.class,attrs:{pack:e.link.icon.pack||"fa",icon:e.link.icon.name,size:e.link.icon.size||"is-small"}}):e._e(),n("span",{class:e.link.class},[e._v(" "+e._s(e.link.title))]),n("ui-ripple-ink",{staticClass:"ripple",attrs:{trigger:"btn"}}),e.hasTooltip?n("ui-tooltip",{attrs:{trigger:"btn",position:"bottom center"}},[e._v(e._s(e.link.tooltip))]):e._e()],1)},staticRenderFns:[]};var f=n("VU/8")(l,d,!1,function(e){n("BTEd")},"data-v-5efc7037",null).exports,p={name:"DropdownLink",components:{PlainLink:f},props:{link:{type:Object,required:!0}},methods:{handleClick:function(){this.hasHandler?this.link.handler():this.link.to&&this.$router.push(this.link.to)}},computed:{hasChildren:function(){return this.link.children&&this.link.children.length>0},hasTooltip:function(){return this.link.tooltip&&this.link.tooltip.length>0},hasIcon:function(){return this.link.icon},hasHandler:function(){return this.link.handler}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[n("a",{ref:"btn",staticClass:"navbar-link",on:{click:function(t){e.hasHandler&&e.link.handler}}},[e.hasIcon?n("b-icon",{class:e.link.icon.class,attrs:{pack:e.link.icon.pack||"fa",icon:e.link.icon.name,size:e.link.icon.size||"is-small"}}):e._e(),n("span",{class:e.link.class},[e._v(" "+e._s(e.link.title))]),n("ui-ripple-ink",{staticClass:"ripple",attrs:{trigger:"btn"}}),e.hasTooltip?n("ui-tooltip",{attrs:{trigger:"btn",position:"right middle"}},[e._v(e._s(e.link.tooltip))]):e._e()],1),n("div",{staticClass:"navbar-dropdown"},e._l(e.link.children,function(e,t){return n("plain-link",{key:t,attrs:{link:e}})}))])},staticRenderFns:[]};var m={name:"HeaderLink",components:{PlainLink:f,DropdownLink:n("VU/8")(p,h,!1,function(e){n("QNNa")},"data-v-38bdbf7a",null).exports},props:{link:{type:Object,required:!0}},computed:{hasChildren:function(){return this.link.children&&this.link.children.length>0},hasTooltip:function(){return this.link.tooltip&&this.link.tooltip.length>0},hasIcon:function(){return this.link.icon}}},v={render:function(){var e=this.$createElement,t=this._self._c||e;return this.hasChildren?t("dropdown-link",{attrs:{link:this.link}}):t("plain-link",{attrs:{link:this.link}})},staticRenderFns:[]};var g={components:{HeaderLink:n("VU/8")(m,v,!1,function(e){n("o4YP")},"data-v-7a8165ff",null).exports},name:"app-header",data:function(){return{UI:{isShown:!0},links:u}},methods:{showAllMenu:function(){var e=this.$refs.burger,t=this.$refs.menu;e.classList.toggle("is-active"),t.classList.toggle("is-active")}}},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("nav",{staticClass:"navbar is-white",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-brand"},[n("p",{staticClass:"navbar-item brand-text"},[e._v("Int20Test")]),n("a",{ref:"burger",staticClass:"navbar-burger burger round-percent-50",attrs:{"data-target":"menu"},on:{click:function(t){e.showAllMenu()}}},[n("span"),n("span"),n("span")])]),n("div",{ref:"menu",staticClass:"navbar-menu",attrs:{id:"menu"}},[n("div",{staticClass:"navbar-start"},e._l(e.links,function(t,r){return"condition"in t&&!t.condition()?e._e():n("header-link",{key:r,attrs:{link:t}})}))])])])])},staticRenderFns:[]};var w=n("VU/8")(g,k,!1,function(e){n("6wec")},"data-v-7a0f38e0",null).exports,x=n("Xxa5"),b=n.n(x),y=n("exGp"),C=n.n(y),E={name:"InputText",data:function(){return{data:""}},methods:{},computed:{errorMessage:function(){return this.isValid?"":this.errors.first(this.label)},isValid:function(){return!this.errors.has(this.label)}},watch:{value:function(){this.data=this.value}},props:{rules:{type:Object},icon:{type:String},label:{type:String,required:!0},placeholder:{type:String},type:{type:String,default:"text"},reveal:{type:Boolean,default:!1},value:{type:String,default:""}}},$={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-field",{attrs:{type:e.isValid?e.data?"is-success":"":"is-danger",message:e.errorMessage}},[n("b-input",{directives:[{name:"validate",rawName:"v-validate.initial",value:e.rules,expression:"rules",modifiers:{initial:!0}}],attrs:{type:e.type,icon:e.icon,value:e.value,name:e.label,placeholder:e.placeholder,"password-reveal":e.reveal},on:{input:function(t){e.$emit("action")}},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}})],1)},staticRenderFns:[]};var _=n("VU/8")(E,$,!1,function(e){n("dHmm")},"data-v-7abb1e62",null).exports,T=n("VU/8")({methods:{showErrorBox:function(e){this.$toast.open({duration:5e3,message:e||"Something is going wrong",position:"is-top",queue:!1,type:"is-danger"})},showSuccessBox:function(e){this.$toast.open({duration:5e3,message:e||"All is ok",position:"is-top",queue:!1,type:"is-success"})}}},null,!1,null,null,null).exports,L=n("uj17"),U=n.n(L),S={ROOT_URL:"production".startsWith("dev")?"http://localhost:"+(Object({NODE_ENV:"production"}).PORT||3e3):"https://meme-picker.herokuapp.com",PLACEHOLDER:"/static/img/placeholder.png",PAGINATION_LIMIT:20},I=function(e,t){var n={};return n.baseURL=S.ROOT_URL,n.auth={username:e,password:t},U.a.create(n)},R=function(){var e={};return e.baseURL=S.ROOT_URL,a.getters.isLogged()&&(e.headers={Authorization:"Bearer "+a.state.tokens.access}),U.a.create(e)},A=function(){var e={};return e.baseURL=S.ROOT_URL,a.getters.isLogged()&&(e.headers={Authorization:"Bearer "+a.state.tokens.refresh}),U.a.create(e)},B=function(){var e={};return e.baseURL=S.ROOT_URL,e.headers={"Access-Control-Allow-Origin":"*"},U.a.create(e)},H=function(e){return B().post("/api/v1/auth/activate/send-again",e)},V=function(e){return console.log(e),B().post("/api/v1/auth/activate/"+e.token)},O=function(){return R().post("/api/v1/auth/logout")},N=function(e){return I(e.email,e.password).post("/api/v1/auth/login")},q=function(e){return B().post("/api/v1/auth/register/",e)},j=function(){return R().get("/api/v1/auth/check/access")},P=function(){return A().get("/api/v1/auth/check/refresh")},D=function(){return A().get("/api/v1/auth/token")},z={mixins:{MessageMixin:T},methods:{checkTimeOfTokens:function(){var e=this;return C()(b.a.mark(function t(){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isNotLogged()){t.next=2;break}return t.abrupt("return");case 2:return console.log(0),t.next=5,e.isValidAccessToken();case 5:if(!t.sent){t.next=7;break}return t.abrupt("return");case 7:return console.log(1),t.next=10,e.isValidRefreshToken();case 10:if(t.sent){t.next=13;break}return e.logout(),t.abrupt("return");case 13:return console.log(2),t.next=16,e.updateAccessToken();case 16:case"end":return t.stop()}},t,e)}))()},updateAccessToken:function(){var e=this;return C()(b.a.mark(function t(){var n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D();case 3:n=t.sent,result.success?e.$store.dispatch("setToken_access",n.data.tokens.access):(e.logout,e.logout()),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.logout();case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()},isValidRefreshToken:function(){var e=this;return C()(b.a.mark(function t(){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P();case 3:return n=e.sent,console.log(n.data),e.abrupt("return",n.data.success);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",!1);case 11:case"end":return e.stop()}},t,e,[[0,8]])}))()},isValidAccessToken:function(){var e=this;return C()(b.a.mark(function t(){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j();case 3:return n=e.sent,e.abrupt("return",n.data.success);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}},t,e,[[0,7]])}))()},logout:function(){this.$store.dispatch("setToken_access",null),this.$store.dispatch("setToken_refresh",null),this.$store.dispatch("setUser",null)},fullLogout:function(){var e=this;return C()(b.a.mark(function t(){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.$store.dispatch("setToken_access",null),e.$store.dispatch("setToken_refresh",null),e.$store.dispatch("setUser",null),t.prev=3,t.next=6,O();case 6:t.next=10;break;case 8:t.prev=8,t.t0=t.catch(3);case 10:case"end":return t.stop()}},t,e,[[3,8]])}))()},isLogged:function(){return this.$store.getters.isLogged()},isAdmin:function(){return this.isLogged()&&this.$store.state.user.isAdmin},isNotLogged:function(){return!this.isLogged()},login:function(e){var t=this;return C()(b.a.mark(function e(){var n,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o.$emit("load-login-start"),n=!1,e.prev=2,e.next=5,N(t.credentials);case 5:(r=e.sent).data.success?(t.$store.dispatch("setToken_access",r.data.tokens.access),t.$store.dispatch("setToken_refresh",r.data.tokens.refresh),t.$store.dispatch("setUser",r.data.user),t.showSuccessBox("Hello, "+r.data.user.email),n=!0):t.showErrorBox(r.data.message),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t.showErrorBox(401==e.t0.response.status?"Invalid credentials":e.t0.response.data.message||e.t0.message);case 12:return o.$emit("load-login-end"),e.abrupt("return",n);case 14:case"end":return e.stop()}},e,t,[[2,9]])}))()},register:function(e){var t=this;return C()(b.a.mark(function e(){var n,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o.$emit("load-register-start"),n=!1,e.prev=2,e.next=5,q(t.credentials);case 5:(r=e.sent).data.success?n=!0:t.showErrorBox(r.message),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t.showErrorBox(401==e.t0.response.status?"Invalid credentials":e.t0.response.data.message||e.t0.message);case 12:return o.$emit("load-register-end"),e.abrupt("return",n);case 14:case"end":return e.stop()}},e,t,[[2,9]])}))()},sendActivationCode:function(e){var t=this;return C()(b.a.mark(function n(){var r,s;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o.$emit("load-activate-start"),r=!1,n.prev=2,n.next=5,V(e);case 5:(s=n.sent).data.success?(t.UI.isShown=!1,t.showSuccessBox("Your account was successful activated. You can login now"),r=!0):t.showErrorBox(s.message),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),t.showErrorBox(n.t0.response.data.message||n.t0.message);case 12:return o.$emit("load-activate-end"),n.abrupt("return",r);case 14:case"end":return n.stop()}},n,t,[[2,9]])}))()},sendActivationCodeAgain:function(e){var t=this;return C()(b.a.mark(function n(){var r,s;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o.$emit("load-confirm-start"),r=!1,n.prev=2,n.next=5,H(t.credentials);case 5:(s=n.sent).data.success?(t.UI.isShown=!1,t.showSuccessBox("Mail was send again to '"+e.email+"'"),r=!0):t.showErrorBox(s.message),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),t.showErrorBox(401==n.t0.response.status?"Invalid credentials":n.t0.response.data.message||n.t0.message);case 12:return o.$emit("load-confirm-end"),n.abrupt("return",r);case 14:case"end":return n.stop()}},n,t,[[2,9]])}))()}}},F=n("VU/8")(z,null,!1,null,null,null).exports,M={mixins:[F,T],name:"login",components:{InputText:_},data:function(){return{UI:{isShown:!1,isLoading:!1}}},methods:{loadStart:function(){this.UI.isLoading=!0},loadEnd:function(){this.UI.isLoading=!1},isValidCredentials:function(){return(!this.$refs.email||this.$refs.email.isValid)&&(!this.$refs.password||this.$refs.password.isValid)},toggle:function(){this.UI.isShown=!this.UI.isShown},loginHandler:function(){var e=this;return C()(b.a.mark(function t(){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isValidCredentials()){t.next=7;break}return t.next=3,e.login(e.credentials);case 3:if(!t.sent){t.next=5;break}e.UI.isShown=!1;case 5:t.next=8;break;case 7:e.showErrorBox("Looks like, there are some problems with your input");case 8:case"end":return t.stop()}},t,e)}))()},addEventHandlers:function(){o.$on("load-login-start",this.loadStart),o.$on("load-login-end",this.loadEnd)},removeEventHandlers:function(){o.$off("load-login-start",this.loadStart),o.$off("load-login-end",this.loadEnd)}},mounted:function(){this.addEventHandlers()},beforeDestroy:function(){this.removeEventHandlers()},computed:{isInvalidEmail:function(){return!(this.$refs.email&&this.$refs.email.data)},credentials:function(){return{email:this.$refs.email.data,password:this.$refs.password.data}}}},G={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isNotLogged?n("b-modal",{staticClass:"modal",attrs:{active:e.UI.isShown,scroll:"keep",animation:"zoom-out",width:"400px"},on:{"update:active":function(t){e.$set(e.UI,"isShown",t)}}},[n("b-loading",{attrs:{active:e.UI.isLoading}}),n("div",{staticClass:"box has-text-centered"},[n("figure",{staticClass:"avatar"},[e.isInvalidEmail?n("img",{staticClass:"avatar-image",attrs:{src:"/static/img/user.png",width:"140px",alt:""}}):e._e()]),n("h3",{staticClass:"title has-text-grey"},[e._v("Login")]),n("p",{staticClass:"subtitle has-text-grey"},[e._v("Please login to proceed.")]),n("form",{staticClass:"has-text-left"},[n("input-text",{ref:"email",attrs:{label:"email",placeholder:"Your email",rules:{required:!0,email:!0},icon:"email",type:"email"}}),n("input-text",{ref:"password",attrs:{label:"password",placeholder:"Your password",rules:{required:!0},icon:"lock",reveal:!0,type:"password"}})],1),n("br"),n("a",{staticClass:"button is-block is-info is-medium",on:{click:function(t){e.loginHandler()}}},[e._v("Login")]),n("hr"),n("p",{staticClass:"has-text-grey is-size-6"}),n("a",{on:{click:function(t){e.$emit("register"),e.UI.isShown=!1}}},[e._v("Sign Up")]),n("span",[e._v(" · ")]),n("a",{attrs:{href:"#"}},[e._v("Forgot Password")])])],1):e._e()},staticRenderFns:[]};var X={mixins:[F,T],name:"register",components:{InputText:_},data:function(){return{UI:{isShown:!1,isLoading:!1}}},methods:{loadStart:function(){this.UI.isLoading=!0},loadEnd:function(){this.UI.isLoading=!1},addEventHandlers:function(){o.$on("load-register-start",this.loadStart),o.$on("load-register-end",this.loadEnd)},removeEventHandlers:function(){o.$off("load-register-start",this.loadStart),o.$off("load-register-end",this.loadEnd)},isValidCredentials:function(){return(!this.$refs.email||this.$refs.email.isValid)&&(!this.$refs.password||this.$refs.password.isValid)},toggle:function(){this.UI.isShown=!this.UI.isShown},registerHandler:function(){var e=this;return C()(b.a.mark(function t(){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isValidCredentials()){t.next=8;break}return t.next=3,e.register(e.credentials);case 3:if(!t.sent){t.next=6;break}e.UI.isShown=!1,e.$router.push({name:"ConfirmMail",query:{email:e.credentials.email}});case 6:t.next=9;break;case 8:e.showErrorBox("Looks like, there are some problems with your input");case 9:case"end":return t.stop()}},t,e)}))()}},mounted:function(){this.addEventHandlers()},beforeDestroy:function(){this.removeEventHandlers()},computed:{isInvalidEmail:function(){return!(this.$refs.email&&this.$refs.email.data)},credentials:function(){return{email:this.$refs.email.data,password:this.$refs.password.data}}}},Y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isNotLogged?n("b-modal",{staticClass:"modal",attrs:{active:e.UI.isShown,scroll:"keep",animation:"zoom-out",width:"400px"},on:{"update:active":function(t){e.$set(e.UI,"isShown",t)}}},[n("b-loading",{attrs:{active:e.UI.isLoading}}),n("div",{staticClass:"box has-text-centered"},[n("figure",{staticClass:"avatar"},[e.isInvalidEmail?n("img",{staticClass:"avatar-image",attrs:{src:"/static/img/user.png",width:"140px",alt:""}}):e._e()]),n("h3",{staticClass:"title has-text-grey"},[e._v("Sign up")]),n("p",{staticClass:"subtitle has-text-grey"},[e._v("Join us now")]),n("form",{staticClass:"has-text-left"},[n("input-text",{ref:"email",attrs:{label:"email",placeholder:"Your email",rules:{required:!0,email:!0},icon:"email",type:"email"}}),n("input-text",{ref:"password",attrs:{label:"password",placeholder:"Your password",rules:{required:!0},icon:"lock",reveal:!0,type:"password"}})],1),n("br"),n("a",{staticClass:"button is-block is-info is-medium",on:{click:function(t){e.registerHandler()}}},[e._v("Send")]),n("hr"),n("p",{staticClass:"has-text-grey is-size-6"},[e._v("Are you already registered?"),n("a",{on:{click:function(t){e.$emit("register"),e.UI.isShown=!1}}},[e._v("Login")])])])],1):e._e()},staticRenderFns:[]};var W={mixins:[F,T],name:"App",data:function(){return{UI:{isLoading:!1}}},components:{AppHeader:w,AppLogin:n("VU/8")(M,G,!1,function(e){n("GFI/")},"data-v-9dceb38a",null).exports,AppRegister:n("VU/8")(X,Y,!1,function(e){n("+6W6")},"data-v-722c9276",null).exports},methods:{loadStart:function(){this.UI.isLoading=!0},loadEnd:function(){this.UI.isLoading=!1},addEventHandlers:function(){o.$on("login",this.$refs.login.toggle),o.$on("register",this.$refs.register.toggle),o.$on("logout",this.logout),o.$on("load-start",this.loadStart),o.$on("load-end",this.loadEnd)},removeEventHandlers:function(){o.$off("login",this.$refs.login.toggle),o.$off("register",this.$refs.register.toggle),o.$off("logout",this.logout),o.$off("load-start",this.loadStart),o.$off("load-end",this.loadEnd)}},mounted:function(){this.addEventHandlers()},beforeDestroy:function(){this.removeEventHandlers()}},J={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("b-loading",{attrs:{active:this.UI.isLoading}}),t("app-login",{ref:"login"}),t("app-register",{ref:"register"}),t("app-header"),t("router-view")],1)},staticRenderFns:[]};var K=n("VU/8")(W,J,!1,function(e){n("6ko8")},null,null).exports,Q=n("/ocq"),Z={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var ee=n("VU/8")({name:"Index"},Z,!1,function(e){n("1Cva")},"data-v-2c4ecdd7",null).exports,te={mixins:[F,T],name:"ConfirmMail",components:{InputText:_},data:function(){return{email:null,UI:{isShown:!0,isLoading:!1}}},methods:{loadStart:function(){this.UI.isLoading=!0},loadEnd:function(){this.UI.isLoading=!1},addEventHandlers:function(){o.$on("load-confirm-start",this.loadStart),o.$on("load-confirm-end",this.loadEnd)},removeEventHandlers:function(){o.$off("load-confirm-start",this.loadStart),o.$off("load-confirm-end",this.loadEnd)},isValidCredentials:function(){return!this.$refs.email||this.$refs.email.isValid},handleSend:function(){var e=this;return C()(b.a.mark(function t(){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isValidCredentials()){t.next=6;break}return t.next=3,e.sendActivationCodeAgain(e.credentials);case 3:if(!t.sent){t.next=4;break}case 4:t.next=7;break;case 6:e.showErrorBox("Looks like, there are some problems with your input");case 7:case"end":return t.stop()}},t,e)}))()}},computed:{credentials:function(){return{email:this.$refs.email.data}}},props:[],beforeRouteUpdate:function(e,t){this.email=e.query.email||"",console.log(this.email)},mounted:function(){this.email=this.$route.query.email||"",console.log(this.email)}},ne={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isNotLogged?n("section",{staticClass:"hero is-info is-fullheight"},[n("b-loading",{attrs:{active:e.UI.isLoading}}),n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container has-text-centered"},[n("div",{staticClass:"column is-6 is-offset-3 content"},[n("h1",{staticClass:"title"},[e._v("Attention!")]),e._m(0),n("div",{staticClass:"box"},[n("input-text",{ref:"email",attrs:{label:"email",placeholder:"Your email",rules:{required:!0,email:!0},icon:"email",type:"email",button:!0,value:e.email}}),n("div",{staticClass:"field is-grouped is-grouped-centered"},[n("div",{staticClass:"control"},[n("button",{staticClass:"button is-link",on:{click:function(t){t.stopPropagation(),e.handleSend(t)}}},[e._v("Send again")])])])],1)])])])],1):e._e()},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("We send mail with activation code to your email."),t("br"),this._v("If you don't receive it, you can send code again"),t("br"),this._v("Just enter your email in form below")])}]};var re=n("VU/8")(te,ne,!1,function(e){n("hpXs")},"data-v-5b5bc762",null).exports,se={mixins:[F,T],name:"activate-account",data:function(){return{UI:{isShown:!0,isLoading:!1}}},methods:{loadStart:function(){this.UI.isLoading=!0},loadEnd:function(){this.UI.isLoading=!1},addEventHandlers:function(){o.$on("load-activate-start",this.loadStart),o.$on("load-activate-end",this.loadEnd)},removeEventHandlers:function(){o.$off("load-activate-start",this.loadStart),o.$off("load-activate-end",this.loadEnd)},handleActivate:function(){var e=this;return C()(b.a.mark(function t(){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.sendActivationCode({token:e.token});case 2:if(!t.sent){t.next=5;break}e.$router.push({name:"Index"}),o.$emit(login);case 5:case"end":return t.stop()}},t,e)}))()}},computed:{credentials:function(){return{email:this.$refs.email.data}}},props:[],beforeRouteUpdate:function(e,t){var n=this;return C()(b.a.mark(function t(){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.token=e.params.token||"",t.next=3,n.handleActivate();case 3:console.log(n.token);case 4:case"end":return t.stop()}},t,n)}))()},mounted:function(){var e=this;return C()(b.a.mark(function t(){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.token=e.$route.params.token||"",t.next=3,e.handleActivate();case 3:console.log(e.token);case 4:case"end":return t.stop()}},t,e)}))()}},ie={render:function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"hero is-info is-fullheight"},[t("b-loading",{attrs:{active:this.UI.isLoading}}),this._m(0)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hero-body"},[t("div",{staticClass:"container has-text-centered"},[t("div",{staticClass:"column is-6 is-offset-3 content"},[t("p",{staticClass:"title"},[this._v("Your account now is activating")])])])])}]};var ae=n("VU/8")(se,ie,!1,function(e){n("e4qn")},"data-v-6cac85ec",null).exports;r.a.use(Q.a);var oe=new Q.a({routes:[{path:"/",name:"Index",component:ee},{path:"/confirm-mail",name:"ConfirmMail",component:re},{path:"/activate/:token",name:"ActivateAccount",component:ae}]}),ce=n("9JMe"),ue=(n("siN1"),n("doPI"),n("H/op"),n("5W1q"),n("JCHG"),n("PTkT"),n("MMSg")),le=n.n(ue),de=n("kxCb"),fe=n.n(de),pe=n("WQHf"),he=n("IBsQ"),me=n.n(he),ve=n("sUu7");r.a.component("v-gravatar",me.a),pe.a.color="rgba(255,255,255,0.25)",r.a.directive("ripple",pe.a),r.a.use(fe.a),r.a.use(le.a),r.a.use(ve.a),r.a.config.productionTip=!1,Object(ce.sync)(a,oe),new r.a({el:"#app",router:oe,store:a,template:"<App/>",components:{App:K}})},OhlP:function(e,t,n){"use strict";var r=n("zIVT");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,s,i,a){var o=[];o.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),r.isString(s)&&o.push("path="+s),r.isString(i)&&o.push("domain="+i),!0===a&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},PTkT:function(e,t){},QNNa:function(e,t){},RS1v:function(e,t,n){"use strict";var r=n("zIVT");function s(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,function(e,t){null!==e&&void 0!==e&&(r.isArray(e)&&(t+="[]"),r.isArray(e)||(e=[e]),r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(s(t)+"="+s(e))}))}),i=a.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},RlDD:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},T2kP:function(e,t,n){"use strict";(function(t){var r=n("zIVT"),s=n("TOXd"),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o,c={adapter:("undefined"!=typeof XMLHttpRequest?o=n("7LYE"):void 0!==t&&(o=n("7LYE")),o),transformRequest:[function(e,t){return s(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){c.headers[e]={}}),r.forEach(["post","put","patch"],function(e){c.headers[e]=r.merge(i)}),e.exports=c}).call(t,n("W2nU"))},TOXd:function(e,t,n){"use strict";var r=n("zIVT");e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},"U2+V":function(e,t,n){"use strict";var r=n("zIVT"),s=n("i7gz"),i=n("C9l1"),a=n("T2kP"),o=n("Ex+b"),c=n("BTlr");function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.baseURL&&!o(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return u(e),t.data=s(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},ZH5x:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},dHmm:function(e,t){},doPI:function(e,t){},e4qn:function(e,t){},hpXs:function(e,t){},i7gz:function(e,t,n){"use strict";var r=n("zIVT");e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},o4YP:function(e,t){},obgR:function(e,t,n){"use strict";e.exports=function(e,t,n,r,s){return e.config=t,n&&(e.code=n),e.request=r,e.response=s,e}},siN1:function(e,t){},uj17:function(e,t,n){e.exports=n("HXpE")},wZW9:function(e,t,n){"use strict";var r=n("0l+G");e.exports=function(e,t,n){var s=n.config.validateStatus;n.status&&s&&!s(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},zIVT:function(e,t,n){"use strict";var r=n("4nb4"),s=n("ZH5x"),i=Object.prototype.toString;function a(e){return"[object Array]"===i.call(e)}function o(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===i.call(e)}function u(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:s,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:o,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:c,isStream:function(e){return o(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,s=arguments.length;r<s;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,function(t,s){e[s]=n&&"function"==typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}}},["NHnr"]);
//# sourceMappingURL=app.7c52dc17e9f7ca616bb3.js.map