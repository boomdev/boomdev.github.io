import{r as t,a as e,h as s,g as o}from"./p-f7de5752.js";import{s as n,a,c as i,b as r,h,d as c,e as l,f as u,l as p}from"./p-4d64b7b7.js";import{s as d,a as f,b as g,g as y,i as m,c as b}from"./p-00694519.js";import{A as P}from"./p-5db5115d.js";const w=(t,...e)=>{t||console.warn(...e)},v=()=>{let t,e=[];return{setPrompt:e=>(w(null==t,"A history supports only one prompt at a time"),t=e,()=>{t===e&&(t=null)}),confirmTransitionTo:(e,s,o,n)=>{if(null!=t){const a="function"==typeof t?t(e,s):t;"string"==typeof a?"function"==typeof o?o(a,n):(w(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),n(!0)):n(!1!==a)}else n(!0)},appendListener:t=>{let s=!0;const o=(...e)=>{s&&t(...e)};return e.push(o),()=>{s=!1,e=e.filter((t=>t!==o))}},notifyListeners:(...t)=>{e.forEach((e=>e(...t)))}}},k=(t,e="scrollPositions")=>{let s=new Map;const o=(e,o)=>{if(s.set(e,o),d(t,"sessionStorage")){const e=[];s.forEach(((t,s)=>{e.push([s,t])})),t.sessionStorage.setItem("scrollPositions",JSON.stringify(e))}};if(d(t,"sessionStorage")){const o=t.sessionStorage.getItem(e);s=o?new Map(JSON.parse(o)):s}return"scrollRestoration"in t.history&&(history.scrollRestoration="manual"),{set:o,get:t=>s.get(t),has:t=>s.has(t),capture:e=>{o(e,[t.scrollX,t.scrollY])}}},j={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+u(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:u,decodePath:a},slash:{encodePath:a,decodePath:a}},H=(t,e)=>{const s=0==t.pathname.indexOf(e)?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:s})},O={browser:(t,e={})=>{let s=!1;const o=t.history,u=t.location,p=t.navigator,d=f(t),b=!g(p),P=k(t),j=null!=e.forceRefresh&&e.forceRefresh,H=null!=e.getUserConfirmation?e.getUserConfirmation:y,O=null!=e.keyLength?e.keyLength:6,L=e.basename?n(a(e.basename)):"",S=()=>{try{return t.history.state||{}}catch(t){return{}}},U=t=>{t=t||{};const{key:e,state:s}=t,{pathname:o,search:n,hash:a}=u;let l=o+n+a;return w(!L||h(l,L),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+l+'" to begin with "'+L+'".'),L&&(l=c(l,L)),i(l,s,e||r(O))},A=v(),T=t=>{P.capture(V.location.key),Object.assign(V,t),V.location.scrollPosition=P.get(V.location.key),V.length=o.length,A.notifyListeners(V.location,V.action)},E=t=>{m(p,t)||x(U(t.state))},R=()=>{x(U(S()))},x=t=>{if(s)s=!1,T();else{const e="POP";A.confirmTransitionTo(t,e,H,(s=>{s?T({action:e,location:t}):B(t)}))}},B=t=>{let e=M.indexOf(V.location.key),o=M.indexOf(t.key);-1===e&&(e=0),-1===o&&(o=0);const n=e-o;n&&(s=!0,N(n))},C=U(S());let M=[C.key],Y=0,F=!1;const J=t=>L+l(t),N=t=>{o.go(t)},q=e=>{Y+=e,1===Y?(t.addEventListener("popstate",E),b&&t.addEventListener("hashchange",R)):0===Y&&(t.removeEventListener("popstate",E),b&&t.removeEventListener("hashchange",R))},V={length:o.length,action:"POP",location:C,createHref:J,push:(t,e)=>{w(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const s="PUSH",n=i(t,e,r(O),V.location);A.confirmTransitionTo(n,s,H,(t=>{if(!t)return;const e=J(n),{key:a,state:i}=n;if(d)if(o.pushState({key:a,state:i},"",e),j)u.href=e;else{const t=M.indexOf(V.location.key),e=M.slice(0,-1===t?0:t+1);e.push(n.key),M=e,T({action:s,location:n})}else w(void 0===i,"Browser history cannot push state in browsers that do not support HTML5 history"),u.href=e}))},replace:(t,e)=>{w(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const s="REPLACE",n=i(t,e,r(O),V.location);A.confirmTransitionTo(n,s,H,(t=>{if(!t)return;const e=J(n),{key:a,state:i}=n;if(d)if(o.replaceState({key:a,state:i},"",e),j)u.replace(e);else{const t=M.indexOf(V.location.key);-1!==t&&(M[t]=n.key),T({action:s,location:n})}else w(void 0===i,"Browser history cannot replace state in browsers that do not support HTML5 history"),u.replace(e)}))},go:N,goBack:()=>N(-1),goForward:()=>N(1),block:(t="")=>{const e=A.setPrompt(t);return F||(q(1),F=!0),()=>(F&&(F=!1,q(-1)),e())},listen:t=>{const e=A.appendListener(t);return q(1),()=>{q(-1),e()}},win:t};return V},hash:(t,e={})=>{let s=!1,o=null,u=0,d=!1;const f=t.location,g=t.history,m=b(t.navigator),P=null!=e.keyLength?e.keyLength:6,{getUserConfirmation:k=y,hashType:H="slash"}=e,O=e.basename?n(a(e.basename)):"",{encodePath:L,decodePath:S}=j[H],U=()=>{const t=f.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},A=t=>{const e=f.href.indexOf("#");f.replace(f.href.slice(0,e>=0?e:0)+"#"+t)},T=()=>{let t=S(U());return w(!O||h(t,O),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+O+'".'),O&&(t=c(t,O)),i(t,void 0,r(P))},E=v(),R=t=>{Object.assign(V,t),V.length=g.length,E.notifyListeners(V.location,V.action)},x=()=>{const t=U(),e=L(t);if(t!==e)A(e);else{const t=T(),e=V.location;if(!s&&p(e,t))return;if(o===l(t))return;o=null,B(t)}},B=t=>{if(s)s=!1,R();else{const e="POP";E.confirmTransitionTo(t,e,k,(s=>{s?R({action:e,location:t}):C(t)}))}},C=t=>{let e=J.lastIndexOf(l(V.location)),o=J.lastIndexOf(l(t));-1===e&&(e=0),-1===o&&(o=0);const n=e-o;n&&(s=!0,N(n))},M=U(),Y=L(M);M!==Y&&A(Y);const F=T();let J=[l(F)];const N=t=>{w(m,"Hash history go(n) causes a full page reload in this browser"),g.go(t)},q=(t,e)=>{u+=e,1===u?t.addEventListener("hashchange",x):0===u&&t.removeEventListener("hashchange",x)},V={length:g.length,action:"POP",location:F,createHref:t=>"#"+L(O+l(t)),push:(t,e)=>{w(void 0===e,"Hash history cannot push state; it is ignored");const s="PUSH",n=i(t,void 0,r(P),V.location);E.confirmTransitionTo(n,s,k,(t=>{if(!t)return;const e=l(n),a=L(O+e);if(U()!==a){o=e,(t=>{f.hash=t})(a);const t=J.lastIndexOf(l(V.location)),i=J.slice(0,-1===t?0:t+1);i.push(e),J=i,R({action:s,location:n})}else w(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),R()}))},replace:(t,e)=>{w(void 0===e,"Hash history cannot replace state; it is ignored");const s="REPLACE",n=i(t,void 0,r(P),V.location);E.confirmTransitionTo(n,s,k,(t=>{if(!t)return;const e=l(n),a=L(O+e);U()!==a&&(o=e,A(a));const i=J.indexOf(l(V.location));-1!==i&&(J[i]=e),R({action:s,location:n})}))},go:N,goBack:()=>N(-1),goForward:()=>N(1),block:(e="")=>{const s=E.setPrompt(e);return d||(q(t,1),d=!0),()=>(d&&(d=!1,q(t,-1)),s())},listen:e=>{const s=E.appendListener(e);return q(t,1),()=>{q(t,-1),s()}},win:t};return V}};let L=class{constructor(s){t(this,s),this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=(t={})=>{if(this.history&&t.scrollToId&&"browser"===this.historyType){const e=this.history.win.document.getElementById(t.scrollToId);if(e)return e.scrollIntoView()}this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)},this.isServer=e(this,"isServer"),this.queue=e(this,"queue")}componentWillLoad(){this.history=O[this.historyType](this.el.ownerDocument.defaultView),this.history.listen((t=>{t=H(t,this.root),this.location=t})),this.location=H(this.history.location,this.root)}scrollTo(t){const e=this.history;if(null!=t&&!this.isServer&&e)return"POP"===e.action&&Array.isArray(e.location.scrollPosition)?this.queue.write((()=>{e&&e.location&&Array.isArray(e.location.scrollPosition)&&e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])})):this.queue.write((()=>{e.win.scrollTo(0,t)}))}render(){if(this.location&&this.history)return s(P.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},s("slot",null))}get el(){return o(this)}};export{L as stencil_router}