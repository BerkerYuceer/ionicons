/*! Built with http://stenciljs.com */
const{h:t}=window.DocsSite;import{a as e,b as o,c as s,d as i,e as n,f as r,g as a,h as c,i as l,j as h,k as u,l as d,m as p,n as y,o as f,p as g,q as m,r as w,s as b,t as v}from"./chunk-823bd299.js";class S{constructor(){this.isSticky=!1,this.query="",this.isSearchVisible=!1}handleScroll(){requestAnimationFrame(this.checkScroll.bind(this))}handleResize(){requestAnimationFrame(()=>{window.innerWidth>768&&(this.el.querySelector("nav").style.display="",this.el.classList.remove("show-mobile-menu"),document.body.classList.remove("no-scroll"),this.isMobileMenuShown=!1)})}checkScroll(){const t=document.documentElement.scrollTop||document.body.scrollTop;this.isSticky=t>30}showNav(){if(this.isMobileMenuShown)return;this.isMobileMenuShown=!0;const t=this.el.querySelector("nav");t.style.display="flex",setTimeout(()=>{t.classList.add("show-mobile-menu"),document.body.classList.add("no-scroll")},1)}hideNav(){if(!this.isMobileMenuShown)return;this.isMobileMenuShown=!1;const t=this.el.querySelector("nav");t.classList.remove("show-mobile-menu"),setTimeout(()=>{t.style.display="none",document.body.classList.remove("no-scroll")},300)}render(){return t("header",{class:`${this.isSearchVisible?"visible-search":""} ${this.isSticky?"overlay":""}`},t("div",{class:"container"},t("div",{class:"logo"},t("stencil-route-link",{url:"/",exact:!0},t("svg",{width:"32px",height:"32px",viewBox:"0 0 32 32"},t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},t("g",{id:"icon","fill-rule":"nonzero"},t("circle",{id:"circle",fill:"#EAEEF5",cx:"16",cy:"16",r:"16"}),t("circle",{id:"circle_copy",fill:"#B4C1D8",cx:"16",cy:"16",r:"11"}),t("circle",{id:"circle_copy_2",fill:"#647AA1",cx:"16",cy:"16",r:"6"}),t("circle",{id:"circle_copy_3",fill:"#647AA1",cx:"23.5",cy:"8.5",r:"2"})))),"Ionicons"),t("span",{class:"version"},this.version)),t("icon-search",{query:this.query,size:"small"}),t("nav",null,t("stencil-route-link",{class:"nav__item",url:"/",exact:!0,onClick:this.hideNav.bind(this)},"Icons"),t("stencil-route-link",{class:"nav__item",url:"/usage",onClick:()=>{this.toggleHeaderSearch.emit("hide"),this.hideNav()}},"Usage"),t("a",{class:"nav__item",href:"https://github.com/ionic-team/ionicons"},"Github",t("svg",{width:"12px",height:"12px",viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},t("g",{transform:"translate(0,1)"},t("rect",{id:"bg",fill:"#e3e8f1",x:"0",y:"2",width:"9",height:"9",rx:"1.5"}),t("path",{d:"M9.18198052,1 L6.5,1 L6.5,0 L11,0 L11,1 L11,4.5 L10,4.5 L10,1.59619408 L4.02512627,7.57106781 L3.31801948,6.86396103 L9.18198052,1 Z",id:"arrow",fill:"#A4AEC3"})))),t("span",{class:"close",onClick:this.hideNav.bind(this)},t("i",{class:"ion ion-md-close"}))),t("a",{class:"btn sm-hide",href:"/ionicons.designerpack.zip"},t("svg",{width:"9px",height:"11px",viewBox:"0 0 9 11",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},t("g",null,t("rect",{id:"bg",fill:"#BAC3D1",x:"0",y:"9",width:"9",height:"2",rx:"1"}),t("path",{d:"M5,6.26776695 L7.26776695,4 L7.97487373,4.70710678 L4.70710678,7.97487373 L4.48743687,7.75520382 L4.26776695,7.97487373 L1,4.70710678 L1.70710678,4 L4,6.29289322 L4,0 L5,0 L5,6.26776695 Z",id:"arrow",fill:"#94A0B8"}))),"Designer pack"),t("span",{class:"more",onClick:this.showNav.bind(this)},t("i",{class:"ion ion-md-more"}))))}static get is(){return"header-bar"}static get properties(){return{el:{elementRef:!0},isMobileMenuShown:{state:!0},isSearchVisible:{type:Boolean,attr:"is-search-visible"},isSticky:{state:!0},query:{type:String,attr:"query"},version:{type:String,attr:"version"}}}static get events(){return[{name:"toggleHeaderSearch",method:"toggleHeaderSearch",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"window:scroll",method:"handleScroll",passive:!0},{name:"window:resize",method:"handleResize",passive:!0}]}static get style(){return"header-bar header{-webkit-transition:border .6s;transition:border .6s;position:fixed;width:100%;top:0;left:0;right:0;background:#fff;z-index:999;border-bottom:1px solid transparent;height:64px}header-bar header.overlay{border-bottom:1px solid rgba(0,0,0,.05)}header-bar .container,header-bar .logo,header-bar .logo a,header-bar nav{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}header-bar .logo,header-bar nav{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}header-bar nav{-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}header-bar icon-search{-webkit-transition:opacity .5s;transition:opacity .5s;-webkit-box-flex:1;-ms-flex:1;flex:1;padding-left:60px;padding-right:60px;opacity:0;pointer-events:none}header-bar .visible-search icon-search{opacity:1;pointer-events:auto}header-bar .container{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-top:12px;padding-bottom:12px}header-bar .logo a{font-weight:700;font-size:16px;color:var(--color-shark)}header-bar .logo svg{margin-right:10px}header-bar .logo .version{margin-left:10px;font-size:10px;font-weight:600;color:var(--color-oslo-gray);background-color:var(--color-catskill-white);border-radius:4px;padding:1px 5px;position:relative;top:-2px}header-bar a{text-decoration:none}header-bar .nav__item+.nav__item,header-bar nav+.btn{margin-left:30px}header-bar .nav__item{font-size:13px;font-weight:600}header-bar .nav__item,header-bar .nav__item a{-webkit-transition:color .3s;transition:color .3s;color:var(--color-pale-sky)}header-bar .nav__item a:not(.link-active):hover,header-bar .nav__item:hover{color:var(--color-shark)}header-bar .nav__item .link-active{color:var(--color-heather);cursor:default}header-bar .nav__item svg{margin-left:6px}header-bar .nav__item:hover svg #arrow{-webkit-transform:translate(1px,-1px);transform:translate(1px,-1px)}header-bar .btn svg{margin-right:6px}header-bar .btn:hover svg #arrow{-webkit-transform:translate(0,1px);transform:translate(0,1px)}header-bar .more{padding:0 8px;font-size:28px;line-height:28px;color:var(--color-dodger-blue);cursor:pointer;display:none}header-bar nav span.close{display:none;font-size:28px}\@media screen and (max-width:992px){header-bar nav>*+*{margin-left:18px}header-bar icon-search{padding-left:30px;padding-right:30px}}\@media screen and (max-width:768px){header-bar .btn.sm-hide{display:none}header-bar .close,header-bar .more{cursor:pointer}header-bar .more{display:block}header-bar .nav__item+.nav__item,header-bar nav+.btn{margin-left:0;margin-top:30px}header-bar nav{-webkit-transition:opacity .3s;transition:opacity .3s;position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:99999;background-image:linear-gradient(-223deg,#363e49 0,#1c1e21 100%);-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0;display:none}header-bar nav .close{margin:0;position:absolute;top:14px;right:18px;color:#fff;cursor:pointer}header-bar .nav__item{-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s;-webkit-transform:translateY(8px);transform:translateY(8px)}header-bar .nav__item,header-bar .nav__item a{font-size:28px;color:rgba(255,255,255,.9)}header-bar .nav__item .link-active{color:rgba(255,255,255,.3)}header-bar .nav__item a:not(.link-active):hover,header-bar .nav__item:hover{color:rgba(255,255,255,.9)}header-bar .nav__item svg #bg{opacity:.2}header-bar nav.show-mobile-menu{opacity:1}header-bar nav.show-mobile-menu .nav__item{-webkit-transform:translateY(0);transform:translateY(0)}header-bar nav.show-mobile-menu .close{display:block}header-bar icon-search{padding-left:20px;padding-right:15px}}\@media screen and (max-width:520px){header-bar .version{display:none}}"}}class x{constructor(){this.data={version:void 0,icons:[]},this.query="",this.isHeaderSearchVisible=!1}handleScroll(){requestAnimationFrame(this.checkScroll.bind(this))}searchHandler(t){this.query=t.detail}toggleHandler(t){this.isHeaderSearchVisible="show"===t.detail}componentWillLoad(){this.loadData()}async loadData(){const t=await fetch("/data.json"),e=await t.json();this.data=e,this.data.icons=e.icons.map(t=>(t.icons=t.icons.reverse(),t.name=t.icons[0].split("-").slice(1).join("-"),t))}checkScroll(){const t=document.querySelector("header .search-input"),e=document.querySelector("icon-list .search-input");if(!e||!t)return;const o=t.querySelector("input"),s=e.querySelector("input");if(e.getBoundingClientRect().top<e.scrollHeight/2){if(this.isHeaderSearchVisible)return;this.isHeaderSearchVisible=!0,s===document.activeElement&&o.focus()}else{if(!this.isHeaderSearchVisible)return;this.isHeaderSearchVisible=!1,o===document.activeElement&&s.focus()}}render(){return[t("header-bar",{version:this.data.version,query:this.query,isSearchVisible:this.isHeaderSearchVisible}),t("stencil-router",null,t("stencil-router-scroll-top",null,t("stencil-route-switch",{scrollTopOffset:0},t("stencil-route",{url:"/",component:"landing-page",exact:!0,componentProps:{query:this.query,data:this.data}}),t("stencil-route",{url:"/usage",component:"usage-page",componentProps:{data:this.data}}),t("stencil-route",{component:"notfound-page"}))))]}static get is(){return"ionicons-site"}static get properties(){return{data:{state:!0},isHeaderSearchVisible:{state:!0},query:{state:!0}}}static get listeners(){return[{name:"window:scroll",method:"handleScroll",passive:!0},{name:"hasSearched",method:"searchHandler"},{name:"toggleHeaderSearch",method:"toggleHandler"}]}static get style(){return"stencil-router>div{height:100%}"}}class T{constructor(){this.group=null,this.groupMatch=null,this.componentUpdated=null,this.match=null,this.unsubscribe=(()=>{}),this.componentProps={},this.exact=!1,this.routeRender=null,this.scrollTopOffset=null,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(){return this.previousMatch=this.match,this.group?this.groupMatch?this.match=e(this.location.pathname,{path:this.url,exact:this.exact,strict:!0}):void 0:this.match=e(this.location.pathname,{path:this.url,exact:this.exact,strict:!0})}componentDidUpdate(){Promise.all(Array.from(this.el.children).map(t=>t.componentOnReady?t.componentOnReady():Promise.resolve(t))).then(()=>{"function"==typeof this.componentUpdated?this.componentUpdated({scrollTopOffset:this.scrollTopOffset}):this.match&&!o(this.match,this.previousMatch)&&this.routeViewsUpdated({scrollTopOffset:this.scrollTopOffset})})}render(){if(!this.match)return null;const e=Object.assign({},this.componentProps,{history:this.history,match:this.match});if(this.routeRender)return this.routeRender(Object.assign({},e,{component:this.component}));if(this.component){const o=this.component;return t(o,Object.assign({},e))}}static get is(){return"stencil-route"}static get properties(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},componentUpdated:{type:"Any",attr:"component-updated"},el:{elementRef:!0},exact:{type:Boolean,attr:"exact"},group:{type:String,attr:"group"},groupMatch:{type:"Any",attr:"group-match"},history:{type:"Any",attr:"history"},historyType:{type:String,attr:"history-type"},location:{type:"Any",attr:"location",watchCallbacks:["computeMatch"]},match:{state:!0},routeRender:{type:"Any",attr:"route-render"},routeViewsUpdated:{type:"Any",attr:"route-views-updated"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},url:{type:String,attr:"url"}}}static get style(){return"stencil-route.inactive{display:none}"}}s.injectProps(T,["location","history","historyType","routeViewsUpdated"]);var O=function(t,e,o,s){return new(o||(o=Promise))(function(i,n){function r(t){try{c(s.next(t))}catch(t){n(t)}}function a(t){try{c(s.throw(t))}catch(t){n(t)}}function c(t){t.done?i(t.value):new o(function(e){e(t.value)}).then(r,a)}c((s=s.apply(t,e||[])).next())})};class P{constructor(){this.group=window.crypto?([1e7].toString()+-1e3.toString()+-4e3.toString()+-8e3.toString()+-1e11.toString()).replace(/[018]/g,function(t){return(t^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}):(1e17*Math.random()).toString().match(/.{4}/g).join("-"),this.scrollTopOffset=null,this.activeIndex=null}componentWillLoad(){this.regenerateSubscribers(this.location)}regenerateSubscribers(t){return O(this,void 0,void 0,function*(){let o=null;var s,i,n;this.subscribers=Array.from(this.el.children).map((r,a)=>{const c=(s=t.pathname,i=r.url,n=r.exact,e(s,{path:i,exact:n,strict:!0}));return c&&null===o&&(o=a),{el:r,match:c}}),this.activeIndex!==o?(this.activeIndex=o,new Promise(t=>{const e=this.subscribers[this.activeIndex];e.el.scrollTopOffset=this.scrollTopOffset,e.el.group=this.group,e.el.groupMatch=e.match,e.el.componentUpdated=t}).then(t=>{this.queue.write(()=>{this.subscribers.forEach((t,e)=>{if(t.el.componentUpdated=null,e===this.activeIndex)return t.el.style.display=null;t.el.scrollTopOffset=this.scrollTopOffset,t.el.group=this.group,t.el.groupMatch=null,t.el.style.display="none"})}),this.routeViewsUpdated(Object.assign({scrollTopOffset:this.scrollTopOffset},t))})):this.subscribers[this.activeIndex].el.groupMatch=this.subscribers[this.activeIndex].match})}render(){return t("slot",null)}static get is(){return"stencil-route-switch"}static get properties(){return{el:{elementRef:!0},group:{type:String,attr:"group",reflectToAttr:!0},location:{type:"Any",attr:"location",watchCallbacks:["regenerateSubscribers"]},queue:{context:"queue"},routeViewsUpdated:{type:"Any",attr:"route-views-updated"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"}}}}function L(t,...e){t||console.error(...e)}function k(t,...e){t||console.warn(...e)}s.injectProps(P,["location","routeViewsUpdated"]);const A=()=>{let t,e=[];return{setPrompt:e=>(k(null==t,"A history supports only one prompt at a time"),t=e,()=>{t===e&&(t=null)}),confirmTransitionTo:(e,o,s,i)=>{if(null!=t){const n="function"==typeof t?t(e,o):t;"string"==typeof n?"function"==typeof s?s(n,i):(k(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),i(!0)):i(!1!==n)}else i(!0)},appendListener:t=>{let o=!0;const s=(...e)=>{o&&t(...e)};return e.push(s),()=>{o=!1,e=e.filter(t=>t!==s)}},notifyListeners:(...t)=>{e.forEach(e=>e(...t))}}},M=(t="scrollPositions")=>{let e=new Map;function o(t,o){if(e.set(t,o),i("sessionStorage")){const t=[];e.forEach((e,o)=>{t.push([o,e])}),window.sessionStorage.setItem("scrollPositions",JSON.stringify(t))}}return i("sessionStorage")&&(e=window.sessionStorage.getItem(t)?new Map(JSON.parse(window.sessionStorage.getItem(t))):e),"scrollRestoration"in history&&(history.scrollRestoration="manual"),{set:o,get:function(t){return e.get(t)},has:function(t){return e.has(t)},capture:function(t){o(t,[window.scrollX,window.scrollY])}}},H=()=>{try{return window.history.state||{}}catch(t){return{}}},q={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+b(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:b,decodePath:r},slash:{encodePath:r,decodePath:r}},U=()=>{const t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},R=t=>{const e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)};var V=function(t,e,o,s){return new(o||(o=Promise))(function(i,n){function r(t){try{c(s.next(t))}catch(t){n(t)}}function a(t){try{c(s.throw(t))}catch(t){n(t)}}function c(t){t.done?i(t.value):new o(function(e){e(t.value)}).then(r,a)}c((s=s.apply(t,e||[])).next())})};const E={browser:(t={})=>{L(u,"Browser history needs a DOM");const e=window.history,o=f(),s=!g(),i=M(),{forceRefresh:w=!1,getUserConfirmation:b=y,keyLength:v=6}=t,S=t.basename?a(r(t.basename)):"",x=t=>{t=t||{};const{key:e,state:o}=t,{pathname:s,search:i,hash:r}=window.location;let a=s+i+r;return k(!S||c(a,S),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+a+'" to begin with "'+S+'".'),S&&(a=l(a,S)),n(a,o,e)},T=()=>Math.random().toString(36).substr(2,v),O=A(),P=t=>{i.capture(z.location.key),Object.assign(z,t),z.location.scrollPosition=i.get(z.location.key),z.length=e.length,O.notifyListeners(z.location,z.action)},q=t=>{m(t)||V(x(t.state))},U=()=>{V(x(H()))};let R=!1;const V=t=>{if(R)R=!1,P();else{const e="POP";O.confirmTransitionTo(t,e,b,o=>{o?P({action:e,location:t}):E(t)})}},E=t=>{const e=z.location;let o=C.indexOf(e.key);-1===o&&(o=0);let s=C.indexOf(t.key);-1===s&&(s=0);const i=o-s;i&&(R=!0,B(i))},j=x(H());let C=[j.key];const I=t=>S+h(t),B=t=>{e.go(t)};let N=0;const _=t=>{1===(N+=t)?(d(window,"popstate",q),s&&d(window,"hashchange",U)):0===N&&(p(window,"popstate",q),s&&p(window,"hashchange",U))};let D=!1;const z={length:e.length,action:"POP",location:j,createHref:I,push:(t,s)=>{k(!("object"==typeof t&&void 0!==t.state&&void 0!==s),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const i=n(t,s,T(),z.location);O.confirmTransitionTo(i,"PUSH",b,t=>{if(!t)return;const s=I(i),{key:n,state:r}=i;if(o)if(e.pushState({key:n,state:r},null,s),w)window.location.href=s;else{const t=C.indexOf(z.location.key),e=C.slice(0,-1===t?0:t+1);e.push(i.key),C=e,P({action:"PUSH",location:i})}else k(void 0===r,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=s})},replace:(t,s)=>{k(!("object"==typeof t&&void 0!==t.state&&void 0!==s),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const i=n(t,s,T(),z.location);O.confirmTransitionTo(i,"REPLACE",b,t=>{if(!t)return;const s=I(i),{key:n,state:r}=i;if(o)if(e.replaceState({key:n,state:r},null,s),w)window.location.replace(s);else{const t=C.indexOf(z.location.key);-1!==t&&(C[t]=i.key),P({action:"REPLACE",location:i})}else k(void 0===r,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(s)})},go:B,goBack:()=>B(-1),goForward:()=>B(1),block:(t="")=>{const e=O.setPrompt(t);return D||(_(1),D=!0),()=>(D&&(D=!1,_(-1)),e())},listen:t=>{const e=O.appendListener(t);return _(1),()=>{_(-1),e()}}};return z},hash:(t={})=>{L(u,"Hash history needs a DOM");const e=window.history,o=v(),{getUserConfirmation:s=y,hashType:i="slash"}=t,f=t.basename?a(r(t.basename)):"",{encodePath:g,decodePath:m}=q[i],b=()=>{let t=m(U());return k(!f||c(t,f),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+f+'".'),f&&(t=l(t,f)),n(t)},S=A(),x=t=>{Object.assign(D,t),D.length=e.length,S.notifyListeners(D.location,D.action)};let T=!1,O=null;const P=()=>{const t=U(),e=g(t);if(t!==e)R(e);else{const t=b(),e=D.location;if(!T&&w(e,t))return;if(O===h(t))return;O=null,M(t)}},M=t=>{if(T)T=!1,x();else{const e="POP";S.confirmTransitionTo(t,e,s,o=>{o?x({action:e,location:t}):H(t)})}},H=t=>{const e=D.location;let o=C.lastIndexOf(h(e));-1===o&&(o=0);let s=C.lastIndexOf(h(t));-1===s&&(s=0);const i=o-s;i&&(T=!0,I(i))},V=U(),E=g(V);V!==E&&R(E);const j=b();let C=[h(j)];const I=t=>{k(o,"Hash history go(n) causes a full page reload in this browser"),e.go(t)};let B=0;const N=t=>{1===(B+=t)?d(window,"hashchange",P):0===B&&p(window,"hashchange",P)};let _=!1;const D={length:e.length,action:"POP",location:j,createHref:t=>"#"+g(f+h(t)),push:(t,e)=>{k(void 0===e,"Hash history cannot push state; it is ignored");const o=n(t,void 0,void 0,D.location);S.confirmTransitionTo(o,"PUSH",s,t=>{if(!t)return;const e=h(o),s=g(f+e);if(U()!==s){O=e,(t=>window.location.hash=t)(s);const t=C.lastIndexOf(h(D.location)),i=C.slice(0,-1===t?0:t+1);i.push(e),C=i,x({action:"PUSH",location:o})}else k(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),x()})},replace:(t,e)=>{k(void 0===e,"Hash history cannot replace state; it is ignored");const o=n(t,void 0,void 0,D.location);S.confirmTransitionTo(o,"REPLACE",s,t=>{if(!t)return;const e=h(o),s=g(f+e);U()!==s&&(O=e,R(s));const i=C.indexOf(h(D.location));-1!==i&&(C[i]=e),x({action:"REPLACE",location:o})})},go:I,goBack:()=>I(-1),goForward:()=>I(1),block:(t="")=>{const e=S.setPrompt(t);return _||(N(1),_=!0),()=>(_&&(_=!1,N(-1)),e())},listen:t=>{const e=S.appendListener(t);return N(1),()=>{N(-1),e()}}};return D}};class j{constructor(){this.root="/",this.historyType="browser",this.titleSuffix="",this.scrollTopOffset=null,this.routeViewsUpdated=((t={})=>{this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)})}componentWillLoad(){this.history=E[this.historyType](),this.history.listen(t=>V(this,void 0,void 0,function*(){t=this.getLocation(t),this.location=t})),this.location=this.getLocation(this.history.location)}scrollTo(t){if(null!=t&&!this.isServer&&this.history)return"POP"===this.history.action&&null!=this.history.location.scrollPosition?this.queue.write(()=>{window.scrollTo(this.history.location.scrollPosition[0],this.history.location.scrollPosition[1])}):this.queue.write(()=>{window.scrollTo(0,t)})}getLocation(t){const e=0==t.pathname.indexOf(this.root)?"/"+t.pathname.slice(this.root.length):t.pathname;return Object.assign({},t,{pathname:e})}render(){const e={historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated};return t(s.Provider,{state:e},t("slot",null))}static get is(){return"stencil-router"}static get properties(){return{history:{state:!0},historyType:{type:String,attr:"history-type"},isServer:{context:"isServer"},location:{state:!0},queue:{context:"queue"},root:{type:String,attr:"root"},scrollTopOffset:{type:Number,attr:"scroll-top-offset"},titleSuffix:{type:String,attr:"title-suffix"}}}}export{S as HeaderBar,x as IoniconsSite,T as StencilRoute,P as StencilRouteSwitch,j as StencilRouter};