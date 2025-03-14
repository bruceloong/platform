import{ao as Oe,b9 as Qn,r as t,F as j,_ as A,y as k,g as he,a3 as ze,A as P,a9 as er,a8 as on,J as se,a7 as tr,an as Se,aO as ln,az as sn,ab as un,D,ac as nr,aa as cn,h as Ue,ai as rr,a5 as fn,ay as ar,o as kt,w as ir,am as or,z as lr,x as sr,e as ur,al as cr,a4 as fr,I as dr}from"./index-CbcJRL3k.js";import{R as dn,T as vn,b as pt}from"./roundedArrow-ZXwI2xFQ.js";const vr=new Oe("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),mr=new Oe("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),pr=new Oe("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),gr=new Oe("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),yr=new Oe("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),hr=new Oe("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),Cr=new Oe("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),br=new Oe("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),Rr={"slide-up":{inKeyframes:vr,outKeyframes:mr},"slide-down":{inKeyframes:pr,outKeyframes:gr},"slide-left":{inKeyframes:yr,outKeyframes:hr},"slide-right":{inKeyframes:Cr,outKeyframes:br}},Ea=(e,r)=>{const{antCls:a}=e,n=`${a}-${r}`,{inKeyframes:o,outKeyframes:i}=Rr[r];return[Qn(n,o,i,e.motionDurationMid),{[`
      ${n}-enter,
      ${n}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},[`${n}-leave`]:{animationTimingFunction:e.motionEaseInQuint}}]};var Sr=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],Be=void 0;function Ir(e,r){var a=e.prefixCls,n=e.invalidate,o=e.item,i=e.renderItem,l=e.responsive,s=e.responsiveDisabled,f=e.registerSize,c=e.itemKey,h=e.className,u=e.style,v=e.children,S=e.display,m=e.order,I=e.component,p=I===void 0?"div":I,x=j(e,Sr),M=l&&!S;function C(g){f(c,g)}t.useEffect(function(){return function(){C(null)}},[]);var R=i&&o!==Be?i(o,{index:m}):v,b;n||(b={opacity:M?0:1,height:M?0:Be,overflowY:M?"hidden":Be,order:l?m:Be,pointerEvents:M?"none":Be,position:M?"absolute":Be});var d={};M&&(d["aria-hidden"]=!0);var _=t.createElement(p,A({className:he(!n&&a,h),style:k(k({},b),u)},d,x,{ref:r}),R);return l&&(_=t.createElement(dn,{onResize:function(U){var L=U.offsetWidth;C(L)},disabled:s},_)),_}var lt=t.forwardRef(Ir);lt.displayName="Item";function Mr(e){if(typeof MessageChannel>"u")ze(e);else{var r=new MessageChannel;r.port1.onmessage=function(){return e()},r.port2.postMessage(void 0)}}function Er(){var e=t.useRef(null),r=function(n){e.current||(e.current=[],Mr(function(){on.unstable_batchedUpdates(function(){e.current.forEach(function(o){o()}),e.current=null})})),e.current.push(n)};return r}function rt(e,r){var a=t.useState(r),n=P(a,2),o=n[0],i=n[1],l=er(function(s){e(function(){i(s)})});return[o,l]}var ht=se.createContext(null),wr=["component"],xr=["className"],Nr=["className"],Pr=function(r,a){var n=t.useContext(ht);if(!n){var o=r.component,i=o===void 0?"div":o,l=j(r,wr);return t.createElement(i,A({},l,{ref:a}))}var s=n.className,f=j(n,xr),c=r.className,h=j(r,Nr);return t.createElement(ht.Provider,{value:null},t.createElement(lt,A({ref:a,className:he(s,c)},f,h)))},mn=t.forwardRef(Pr);mn.displayName="RawItem";var _r=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],pn="responsive",gn="invalidate";function Or(e){return"+ ".concat(e.length," ...")}function Kr(e,r){var a=e.prefixCls,n=a===void 0?"rc-overflow":a,o=e.data,i=o===void 0?[]:o,l=e.renderItem,s=e.renderRawItem,f=e.itemKey,c=e.itemWidth,h=c===void 0?10:c,u=e.ssr,v=e.style,S=e.className,m=e.maxCount,I=e.renderRest,p=e.renderRawRest,x=e.suffix,M=e.component,C=M===void 0?"div":M,R=e.itemComponent,b=e.onVisibleChange,d=j(e,_r),_=u==="full",g=Er(),U=rt(g,null),L=P(U,2),O=L[0],Y=L[1],K=O||0,ee=rt(g,new Map),W=P(ee,2),G=W[0],X=W[1],q=rt(g,0),H=P(q,2),te=H[0],re=H[1],Ce=rt(g,0),de=P(Ce,2),z=de[0],B=de[1],ve=rt(g,0),J=P(ve,2),T=J[0],V=J[1],ue=t.useState(null),me=P(ue,2),xe=me[0],Ke=me[1],Ie=t.useState(null),Ne=P(Ie,2),Pe=Ne[0],$e=Ne[1],pe=t.useMemo(function(){return Pe===null&&_?Number.MAX_SAFE_INTEGER:Pe||0},[Pe,O]),We=t.useState(!1),ke=P(We,2),qe=ke[0],Ye=ke[1],ae="".concat(n,"-item"),Xe=Math.max(te,z),Ae=m===pn,ie=i.length&&Ae,De=m===gn,Je=ie||typeof m=="number"&&i.length>m,Z=t.useMemo(function(){var y=i;return ie?O===null&&_?y=i:y=i.slice(0,Math.min(i.length,K/h)):typeof m=="number"&&(y=i.slice(0,m)),y},[i,h,O,m,ie]),Me=t.useMemo(function(){return ie?i.slice(pe+1):i.slice(Z.length)},[i,Z,ie,pe]),ge=t.useCallback(function(y,E){var N;return typeof f=="function"?f(y):(N=f&&(y==null?void 0:y[f]))!==null&&N!==void 0?N:E},[f]),Le=t.useCallback(l||function(y){return y},[l]);function be(y,E,N){Pe===y&&(E===void 0||E===xe)||($e(y),N||(Ye(y<i.length-1),b==null||b(y)),E!==void 0&&Ke(E))}function oe(y,E){Y(E.clientWidth)}function le(y,E){X(function(N){var ye=new Map(N);return E===null?ye.delete(y):ye.set(y,E),ye})}function ne(y,E){B(E),re(z)}function St(y,E){V(E)}function He(y){return G.get(ge(Z[y],y))}tr(function(){if(K&&typeof Xe=="number"&&Z){var y=T,E=Z.length,N=E-1;if(!E){be(0,null);return}for(var ye=0;ye<E;ye+=1){var Te=He(ye);if(_&&(Te=Te||0),Te===void 0){be(ye-1,void 0,!0);break}if(y+=Te,N===0&&y<=K||ye===N-1&&y+He(N)<=K){be(N,null);break}else if(y+Xe>K){be(ye-1,y-Te-T+z);break}}x&&He(0)+T>K&&Ke(null)}},[K,G,z,T,ge,Z]);var ct=qe&&!!Me.length,ft={};xe!==null&&ie&&(ft={position:"absolute",left:xe,top:0});var Ee={prefixCls:ae,responsive:ie,component:R,invalidate:De},It=s?function(y,E){var N=ge(y,E);return t.createElement(ht.Provider,{key:N,value:k(k({},Ee),{},{order:E,item:y,itemKey:N,registerSize:le,display:E<=pe})},s(y,E))}:function(y,E){var N=ge(y,E);return t.createElement(lt,A({},Ee,{order:E,key:N,item:y,renderItem:Le,itemKey:N,registerSize:le,display:E<=pe}))},Ze={order:ct?pe:Number.MAX_SAFE_INTEGER,className:"".concat(ae,"-rest"),registerSize:ne,display:ct},_e=I||Or,Qe=p?t.createElement(ht.Provider,{value:k(k({},Ee),Ze)},p(Me)):t.createElement(lt,A({},Ee,Ze),typeof _e=="function"?_e(Me):_e),et=t.createElement(C,A({className:he(!De&&n,S),style:v,ref:r},d),Z.map(It),Je?Qe:null,x&&t.createElement(lt,A({},Ee,{responsive:Ae,responsiveDisabled:!ie,order:pe,className:"".concat(ae,"-suffix"),registerSize:St,display:!0,style:ft}),x));return Ae?t.createElement(dn,{onResize:oe,disabled:!ie},et):et}var we=t.forwardRef(Kr);we.displayName="Overflow";we.Item=mn;we.RESPONSIVE=pn;we.INVALIDATE=gn;var $r=Se.ESC,kr=Se.TAB;function Ar(e){var r=e.visible,a=e.triggerRef,n=e.onVisibleChange,o=e.autoFocus,i=e.overlayRef,l=t.useRef(!1),s=function(){if(r){var u,v;(u=a.current)===null||u===void 0||(v=u.focus)===null||v===void 0||v.call(u),n==null||n(!1)}},f=function(){var u;return(u=i.current)!==null&&u!==void 0&&u.focus?(i.current.focus(),l.current=!0,!0):!1},c=function(u){switch(u.keyCode){case $r:s();break;case kr:{var v=!1;l.current||(v=f()),v?u.preventDefault():s();break}}};t.useEffect(function(){return r?(window.addEventListener("keydown",c),o&&ze(f,3),function(){window.removeEventListener("keydown",c),l.current=!1}):function(){l.current=!1}},[r])}var Dr=t.forwardRef(function(e,r){var a=e.overlay,n=e.arrow,o=e.prefixCls,i=t.useMemo(function(){var s;return typeof a=="function"?s=a():s=a,s},[a]),l=ln(r,sn(i));return se.createElement(se.Fragment,null,n&&se.createElement("div",{className:"".concat(o,"-arrow")}),se.cloneElement(i,{ref:un(i)?l:void 0}))}),je={adjustX:1,adjustY:1},Ge=[0,0],Lr={topLeft:{points:["bl","tl"],overflow:je,offset:[0,-4],targetOffset:Ge},top:{points:["bc","tc"],overflow:je,offset:[0,-4],targetOffset:Ge},topRight:{points:["br","tr"],overflow:je,offset:[0,-4],targetOffset:Ge},bottomLeft:{points:["tl","bl"],overflow:je,offset:[0,4],targetOffset:Ge},bottom:{points:["tc","bc"],overflow:je,offset:[0,4],targetOffset:Ge},bottomRight:{points:["tr","br"],overflow:je,offset:[0,4],targetOffset:Ge}},Tr=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function Vr(e,r){var a,n=e.arrow,o=n===void 0?!1:n,i=e.prefixCls,l=i===void 0?"rc-dropdown":i,s=e.transitionName,f=e.animation,c=e.align,h=e.placement,u=h===void 0?"bottomLeft":h,v=e.placements,S=v===void 0?Lr:v,m=e.getPopupContainer,I=e.showAction,p=e.hideAction,x=e.overlayClassName,M=e.overlayStyle,C=e.visible,R=e.trigger,b=R===void 0?["hover"]:R,d=e.autoFocus,_=e.overlay,g=e.children,U=e.onVisibleChange,L=j(e,Tr),O=se.useState(),Y=P(O,2),K=Y[0],ee=Y[1],W="visible"in e?C:K,G=se.useRef(null),X=se.useRef(null),q=se.useRef(null);se.useImperativeHandle(r,function(){return G.current});var H=function(T){ee(T),U==null||U(T)};Ar({visible:W,triggerRef:q,onVisibleChange:H,autoFocus:d,overlayRef:X});var te=function(T){var V=e.onOverlayClick;ee(!1),V&&V(T)},re=function(){return se.createElement(Dr,{ref:X,overlay:_,prefixCls:l,arrow:o})},Ce=function(){return typeof _=="function"?re:re()},de=function(){var T=e.minOverlayWidthMatchTrigger,V=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?T:!V},z=function(){var T=e.openClassName;return T!==void 0?T:"".concat(l,"-open")},B=se.cloneElement(g,{className:he((a=g.props)===null||a===void 0?void 0:a.className,W&&z()),ref:un(g)?ln(q,sn(g)):void 0}),ve=p;return!ve&&b.indexOf("contextMenu")!==-1&&(ve=["click"]),se.createElement(vn,A({builtinPlacements:S},L,{prefixCls:l,ref:G,popupClassName:he(x,D({},"".concat(l,"-show-arrow"),o)),popupStyle:M,action:b,showAction:I,hideAction:ve,popupPlacement:u,popupAlign:c,popupTransitionName:s,popupAnimation:f,popupVisible:W,stretch:de()?"minWidth":"",popup:Ce(),onPopupVisibleChange:H,onPopupClick:te,getPopupContainer:m}),B)}const wa=se.forwardRef(Vr);var yn=t.createContext(null);function hn(e,r){return e===void 0?null:"".concat(e,"-").concat(r)}function Cn(e){var r=t.useContext(yn);return hn(r,e)}var Fr=["children","locked"],Re=t.createContext(null);function zr(e,r){var a=k({},e);return Object.keys(r).forEach(function(n){var o=r[n];o!==void 0&&(a[n]=o)}),a}function st(e){var r=e.children,a=e.locked,n=j(e,Fr),o=t.useContext(Re),i=nr(function(){return zr(o,n)},[o,n],function(l,s){return!a&&(l[0]!==s[0]||!cn(l[1],s[1],!0))});return t.createElement(Re.Provider,{value:i},r)}var Ur=[],bn=t.createContext(null);function bt(){return t.useContext(bn)}var Rn=t.createContext(Ur);function ut(e){var r=t.useContext(Rn);return t.useMemo(function(){return e!==void 0?[].concat(Ue(r),[e]):r},[r,e])}var Sn=t.createContext(null),At=t.createContext({});function Qt(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(rr(e)){var a=e.nodeName.toLowerCase(),n=["input","select","textarea","button"].includes(a)||e.isContentEditable||a==="a"&&!!e.getAttribute("href"),o=e.getAttribute("tabindex"),i=Number(o),l=null;return o&&!Number.isNaN(i)?l=i:n&&l===null&&(l=0),n&&e.disabled&&(l=null),l!==null&&(l>=0||r&&l<0)}return!1}function Wr(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=Ue(e.querySelectorAll("*")).filter(function(n){return Qt(n,r)});return Qt(e,r)&&a.unshift(e),a}var Nt=Se.LEFT,Pt=Se.RIGHT,_t=Se.UP,gt=Se.DOWN,yt=Se.ENTER,In=Se.ESC,at=Se.HOME,it=Se.END,en=[_t,gt,Nt,Pt];function Yr(e,r,a,n){var o,i="prev",l="next",s="children",f="parent";if(e==="inline"&&n===yt)return{inlineTrigger:!0};var c=D(D({},_t,i),gt,l),h=D(D(D(D({},Nt,a?l:i),Pt,a?i:l),gt,s),yt,s),u=D(D(D(D(D(D({},_t,i),gt,l),yt,s),In,f),Nt,a?s:f),Pt,a?f:s),v={inline:c,horizontal:h,vertical:u,inlineSub:c,horizontalSub:u,verticalSub:u},S=(o=v["".concat(e).concat(r?"":"Sub")])===null||o===void 0?void 0:o[n];switch(S){case i:return{offset:-1,sibling:!0};case l:return{offset:1,sibling:!0};case f:return{offset:-1,sibling:!1};case s:return{offset:1,sibling:!1};default:return null}}function Xr(e){for(var r=e;r;){if(r.getAttribute("data-menu-list"))return r;r=r.parentElement}return null}function Hr(e,r){for(var a=e||document.activeElement;a;){if(r.has(a))return a;a=a.parentElement}return null}function Dt(e,r){var a=Wr(e,!0);return a.filter(function(n){return r.has(n)})}function tn(e,r,a){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!e)return null;var o=Dt(e,r),i=o.length,l=o.findIndex(function(s){return a===s});return n<0?l===-1?l=i-1:l-=1:n>0&&(l+=1),l=(l+i)%i,o[l]}var Ot=function(r,a){var n=new Set,o=new Map,i=new Map;return r.forEach(function(l){var s=document.querySelector("[data-menu-id='".concat(hn(a,l),"']"));s&&(n.add(s),i.set(s,l),o.set(l,s))}),{elements:n,key2element:o,element2key:i}};function Br(e,r,a,n,o,i,l,s,f,c){var h=t.useRef(),u=t.useRef();u.current=r;var v=function(){ze.cancel(h.current)};return t.useEffect(function(){return function(){v()}},[]),function(S){var m=S.which;if([].concat(en,[yt,In,at,it]).includes(m)){var I=i(),p=Ot(I,n),x=p,M=x.elements,C=x.key2element,R=x.element2key,b=C.get(r),d=Hr(b,M),_=R.get(d),g=Yr(e,l(_,!0).length===1,a,m);if(!g&&m!==at&&m!==it)return;(en.includes(m)||[at,it].includes(m))&&S.preventDefault();var U=function(X){if(X){var q=X,H=X.querySelector("a");H!=null&&H.getAttribute("href")&&(q=H);var te=R.get(X);s(te),v(),h.current=ze(function(){u.current===te&&q.focus()})}};if([at,it].includes(m)||g.sibling||!d){var L;!d||e==="inline"?L=o.current:L=Xr(d);var O,Y=Dt(L,M);m===at?O=Y[0]:m===it?O=Y[Y.length-1]:O=tn(L,M,d,g.offset),U(O)}else if(g.inlineTrigger)f(_);else if(g.offset>0)f(_,!0),v(),h.current=ze(function(){p=Ot(I,n);var G=d.getAttribute("aria-controls"),X=document.getElementById(G),q=tn(X,p.elements);U(q)},5);else if(g.offset<0){var K=l(_,!0),ee=K[K.length-2],W=C.get(ee);f(ee,!1),U(W)}}c==null||c(S)}}function jr(e){Promise.resolve().then(e)}var Lt="__RC_UTIL_PATH_SPLIT__",nn=function(r){return r.join(Lt)},Gr=function(r){return r.split(Lt)},Kt="rc-menu-more";function qr(){var e=t.useState({}),r=P(e,2),a=r[1],n=t.useRef(new Map),o=t.useRef(new Map),i=t.useState([]),l=P(i,2),s=l[0],f=l[1],c=t.useRef(0),h=t.useRef(!1),u=function(){h.current||a({})},v=t.useCallback(function(C,R){var b=nn(R);o.current.set(b,C),n.current.set(C,b),c.current+=1;var d=c.current;jr(function(){d===c.current&&u()})},[]),S=t.useCallback(function(C,R){var b=nn(R);o.current.delete(b),n.current.delete(C)},[]),m=t.useCallback(function(C){f(C)},[]),I=t.useCallback(function(C,R){var b=n.current.get(C)||"",d=Gr(b);return R&&s.includes(d[0])&&d.unshift(Kt),d},[s]),p=t.useCallback(function(C,R){return C.filter(function(b){return b!==void 0}).some(function(b){var d=I(b,!0);return d.includes(R)})},[I]),x=function(){var R=Ue(n.current.keys());return s.length&&R.push(Kt),R},M=t.useCallback(function(C){var R="".concat(n.current.get(C)).concat(Lt),b=new Set;return Ue(o.current.keys()).forEach(function(d){d.startsWith(R)&&b.add(o.current.get(d))}),b},[]);return t.useEffect(function(){return function(){h.current=!0}},[]),{registerPath:v,unregisterPath:S,refreshOverflowKeys:m,isSubPathKey:p,getKeyPath:I,getKeys:x,getSubPathKeys:M}}function ot(e){var r=t.useRef(e);r.current=e;var a=t.useCallback(function(){for(var n,o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return(n=r.current)===null||n===void 0?void 0:n.call.apply(n,[r].concat(i))},[]);return e?a:void 0}var Jr=Math.random().toFixed(5).toString().slice(2),rn=0;function Zr(e){var r=pt(e,{value:e}),a=P(r,2),n=a[0],o=a[1];return t.useEffect(function(){rn+=1;var i="".concat(Jr,"-").concat(rn);o("rc-menu-uuid-".concat(i))},[]),n}function Mn(e,r,a,n){var o=t.useContext(Re),i=o.activeKey,l=o.onActive,s=o.onInactive,f={active:i===e};return r||(f.onMouseEnter=function(c){a==null||a({key:e,domEvent:c}),l(e)},f.onMouseLeave=function(c){n==null||n({key:e,domEvent:c}),s(e)}),f}function En(e){var r=t.useContext(Re),a=r.mode,n=r.rtl,o=r.inlineIndent;if(a!=="inline")return null;var i=e;return n?{paddingRight:i*o}:{paddingLeft:i*o}}function wn(e){var r=e.icon,a=e.props,n=e.children,o;return r===null||r===!1?null:(typeof r=="function"?o=t.createElement(r,k({},a)):typeof r!="boolean"&&(o=r),o||n||null)}var Qr=["item"];function Ct(e){var r=e.item,a=j(e,Qr);return Object.defineProperty(a,"item",{get:function(){return fn(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),r}}),a}var ea=["title","attribute","elementRef"],ta=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],na=["active"],ra=function(e){ir(a,e);var r=or(a);function a(){return lr(this,a),r.apply(this,arguments)}return sr(a,[{key:"render",value:function(){var o=this.props,i=o.title,l=o.attribute,s=o.elementRef,f=j(o,ea),c=kt(f,["eventKey","popupClassName","popupOffset","onTitleClick"]);return fn(!l,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),t.createElement(we.Item,A({},l,{title:typeof i=="string"?i:void 0},c,{ref:s}))}}]),a}(t.Component),aa=t.forwardRef(function(e,r){var a=e.style,n=e.className,o=e.eventKey;e.warnKey;var i=e.disabled,l=e.itemIcon,s=e.children,f=e.role,c=e.onMouseEnter,h=e.onMouseLeave,u=e.onClick,v=e.onKeyDown,S=e.onFocus,m=j(e,ta),I=Cn(o),p=t.useContext(Re),x=p.prefixCls,M=p.onItemClick,C=p.disabled,R=p.overflowDisabled,b=p.itemIcon,d=p.selectedKeys,_=p.onActive,g=t.useContext(At),U=g._internalRenderMenuItem,L="".concat(x,"-item"),O=t.useRef(),Y=t.useRef(),K=C||i,ee=ar(r,Y),W=ut(o),G=function(V){return{key:o,keyPath:Ue(W).reverse(),item:O.current,domEvent:V}},X=l||b,q=Mn(o,K,c,h),H=q.active,te=j(q,na),re=d.includes(o),Ce=En(W.length),de=function(V){if(!K){var ue=G(V);u==null||u(Ct(ue)),M(ue)}},z=function(V){if(v==null||v(V),V.which===Se.ENTER){var ue=G(V);u==null||u(Ct(ue)),M(ue)}},B=function(V){_(o),S==null||S(V)},ve={};e.role==="option"&&(ve["aria-selected"]=re);var J=t.createElement(ra,A({ref:O,elementRef:ee,role:f===null?"none":f||"menuitem",tabIndex:i?null:-1,"data-menu-id":R&&I?null:I},kt(m,["extra"]),te,ve,{component:"li","aria-disabled":i,style:k(k({},Ce),a),className:he(L,D(D(D({},"".concat(L,"-active"),H),"".concat(L,"-selected"),re),"".concat(L,"-disabled"),K),n),onClick:de,onKeyDown:z,onFocus:B}),s,t.createElement(wn,{props:k(k({},e),{},{isSelected:re}),icon:X}));return U&&(J=U(J,e,{selected:re})),J});function ia(e,r){var a=e.eventKey,n=bt(),o=ut(a);return t.useEffect(function(){if(n)return n.registerPath(a,o),function(){n.unregisterPath(a,o)}},[o]),n?null:t.createElement(aa,A({},e,{ref:r}))}const Tt=t.forwardRef(ia);var oa=["className","children"],la=function(r,a){var n=r.className,o=r.children,i=j(r,oa),l=t.useContext(Re),s=l.prefixCls,f=l.mode,c=l.rtl;return t.createElement("ul",A({className:he(s,c&&"".concat(s,"-rtl"),"".concat(s,"-sub"),"".concat(s,"-").concat(f==="inline"?"inline":"vertical"),n),role:"menu"},i,{"data-menu-list":!0,ref:a}),o)},Vt=t.forwardRef(la);Vt.displayName="SubMenuList";function Ft(e,r){return ur(e).map(function(a,n){if(t.isValidElement(a)){var o,i,l=a.key,s=(o=(i=a.props)===null||i===void 0?void 0:i.eventKey)!==null&&o!==void 0?o:l,f=s==null;f&&(s="tmp_key-".concat([].concat(Ue(r),[n]).join("-")));var c={key:s,eventKey:s};return t.cloneElement(a,c)}return a})}var Q={adjustX:1,adjustY:1},sa={topLeft:{points:["bl","tl"],overflow:Q},topRight:{points:["br","tr"],overflow:Q},bottomLeft:{points:["tl","bl"],overflow:Q},bottomRight:{points:["tr","br"],overflow:Q},leftTop:{points:["tr","tl"],overflow:Q},leftBottom:{points:["br","bl"],overflow:Q},rightTop:{points:["tl","tr"],overflow:Q},rightBottom:{points:["bl","br"],overflow:Q}},ua={topLeft:{points:["bl","tl"],overflow:Q},topRight:{points:["br","tr"],overflow:Q},bottomLeft:{points:["tl","bl"],overflow:Q},bottomRight:{points:["tr","br"],overflow:Q},rightTop:{points:["tr","tl"],overflow:Q},rightBottom:{points:["br","bl"],overflow:Q},leftTop:{points:["tl","tr"],overflow:Q},leftBottom:{points:["bl","br"],overflow:Q}};function xn(e,r,a){if(r)return r;if(a)return a[e]||a.other}var ca={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function fa(e){var r=e.prefixCls,a=e.visible,n=e.children,o=e.popup,i=e.popupStyle,l=e.popupClassName,s=e.popupOffset,f=e.disabled,c=e.mode,h=e.onVisibleChange,u=t.useContext(Re),v=u.getPopupContainer,S=u.rtl,m=u.subMenuOpenDelay,I=u.subMenuCloseDelay,p=u.builtinPlacements,x=u.triggerSubMenuAction,M=u.forceSubMenuRender,C=u.rootClassName,R=u.motion,b=u.defaultMotions,d=t.useState(!1),_=P(d,2),g=_[0],U=_[1],L=S?k(k({},ua),p):k(k({},sa),p),O=ca[c],Y=xn(c,R,b),K=t.useRef(Y);c!=="inline"&&(K.current=Y);var ee=k(k({},K.current),{},{leavedClassName:"".concat(r,"-hidden"),removeOnLeave:!1,motionAppear:!0}),W=t.useRef();return t.useEffect(function(){return W.current=ze(function(){U(a)}),function(){ze.cancel(W.current)}},[a]),t.createElement(vn,{prefixCls:r,popupClassName:he("".concat(r,"-popup"),D({},"".concat(r,"-rtl"),S),l,C),stretch:c==="horizontal"?"minWidth":null,getPopupContainer:v,builtinPlacements:L,popupPlacement:O,popupVisible:g,popup:o,popupStyle:i,popupAlign:s&&{offset:s},action:f?[]:[x],mouseEnterDelay:m,mouseLeaveDelay:I,onPopupVisibleChange:h,forceRender:M,popupMotion:ee,fresh:!0},n)}function da(e){var r=e.id,a=e.open,n=e.keyPath,o=e.children,i="inline",l=t.useContext(Re),s=l.prefixCls,f=l.forceSubMenuRender,c=l.motion,h=l.defaultMotions,u=l.mode,v=t.useRef(!1);v.current=u===i;var S=t.useState(!v.current),m=P(S,2),I=m[0],p=m[1],x=v.current?a:!1;t.useEffect(function(){v.current&&p(!1)},[u]);var M=k({},xn(i,c,h));n.length>1&&(M.motionAppear=!1);var C=M.onVisibleChanged;return M.onVisibleChanged=function(R){return!v.current&&!R&&p(!0),C==null?void 0:C(R)},I?null:t.createElement(st,{mode:i,locked:!v.current},t.createElement(cr,A({visible:x},M,{forceRender:f,removeOnLeave:!1,leavedClassName:"".concat(s,"-hidden")}),function(R){var b=R.className,d=R.style;return t.createElement(Vt,{id:r,className:b,style:d},o)}))}var va=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","popupStyle","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],ma=["active"],pa=t.forwardRef(function(e,r){var a=e.style,n=e.className,o=e.title,i=e.eventKey;e.warnKey;var l=e.disabled,s=e.internalPopupClose,f=e.children,c=e.itemIcon,h=e.expandIcon,u=e.popupClassName,v=e.popupOffset,S=e.popupStyle,m=e.onClick,I=e.onMouseEnter,p=e.onMouseLeave,x=e.onTitleClick,M=e.onTitleMouseEnter,C=e.onTitleMouseLeave,R=j(e,va),b=Cn(i),d=t.useContext(Re),_=d.prefixCls,g=d.mode,U=d.openKeys,L=d.disabled,O=d.overflowDisabled,Y=d.activeKey,K=d.selectedKeys,ee=d.itemIcon,W=d.expandIcon,G=d.onItemClick,X=d.onOpenChange,q=d.onActive,H=t.useContext(At),te=H._internalRenderSubMenuItem,re=t.useContext(Sn),Ce=re.isSubPathKey,de=ut(),z="".concat(_,"-submenu"),B=L||l,ve=t.useRef(),J=t.useRef(),T=c??ee,V=h??W,ue=U.includes(i),me=!O&&ue,xe=Ce(K,i),Ke=Mn(i,B,M,C),Ie=Ke.active,Ne=j(Ke,ma),Pe=t.useState(!1),$e=P(Pe,2),pe=$e[0],We=$e[1],ke=function(ne){B||We(ne)},qe=function(ne){ke(!0),I==null||I({key:i,domEvent:ne})},Ye=function(ne){ke(!1),p==null||p({key:i,domEvent:ne})},ae=t.useMemo(function(){return Ie||(g!=="inline"?pe||Ce([Y],i):!1)},[g,Ie,Y,pe,i,Ce]),Xe=En(de.length),Ae=function(ne){B||(x==null||x({key:i,domEvent:ne}),g==="inline"&&X(i,!ue))},ie=ot(function(le){m==null||m(Ct(le)),G(le)}),De=function(ne){g!=="inline"&&X(i,ne)},Je=function(){q(i)},Z=b&&"".concat(b,"-popup"),Me=t.useMemo(function(){return t.createElement(wn,{icon:g!=="horizontal"?V:void 0,props:k(k({},e),{},{isOpen:me,isSubMenu:!0})},t.createElement("i",{className:"".concat(z,"-arrow")}))},[g,V,e,me,z]),ge=t.createElement("div",A({role:"menuitem",style:Xe,className:"".concat(z,"-title"),tabIndex:B?null:-1,ref:ve,title:typeof o=="string"?o:null,"data-menu-id":O&&b?null:b,"aria-expanded":me,"aria-haspopup":!0,"aria-controls":Z,"aria-disabled":B,onClick:Ae,onFocus:Je},Ne),o,Me),Le=t.useRef(g);if(g!=="inline"&&de.length>1?Le.current="vertical":Le.current=g,!O){var be=Le.current;ge=t.createElement(fa,{mode:be,prefixCls:z,visible:!s&&me&&g!=="inline",popupClassName:u,popupOffset:v,popupStyle:S,popup:t.createElement(st,{mode:be==="horizontal"?"vertical":be},t.createElement(Vt,{id:Z,ref:J},f)),disabled:B,onVisibleChange:De},ge)}var oe=t.createElement(we.Item,A({ref:r,role:"none"},R,{component:"li",style:a,className:he(z,"".concat(z,"-").concat(g),n,D(D(D(D({},"".concat(z,"-open"),me),"".concat(z,"-active"),ae),"".concat(z,"-selected"),xe),"".concat(z,"-disabled"),B)),onMouseEnter:qe,onMouseLeave:Ye}),ge,!O&&t.createElement(da,{id:Z,open:me,keyPath:de},f));return te&&(oe=te(oe,e,{selected:xe,active:ae,open:me,disabled:B})),t.createElement(st,{onItemClick:ie,mode:g==="horizontal"?"vertical":g,itemIcon:T,expandIcon:V},oe)}),zt=t.forwardRef(function(e,r){var a=e.eventKey,n=e.children,o=ut(a),i=Ft(n,o),l=bt();t.useEffect(function(){if(l)return l.registerPath(a,o),function(){l.unregisterPath(a,o)}},[o]);var s;return l?s=i:s=t.createElement(pa,A({ref:r},e),i),t.createElement(Rn.Provider,{value:o},s)});function Nn(e){var r=e.className,a=e.style,n=t.useContext(Re),o=n.prefixCls,i=bt();return i?null:t.createElement("li",{role:"separator",className:he("".concat(o,"-item-divider"),r),style:a})}var ga=["className","title","eventKey","children"],ya=t.forwardRef(function(e,r){var a=e.className,n=e.title;e.eventKey;var o=e.children,i=j(e,ga),l=t.useContext(Re),s=l.prefixCls,f="".concat(s,"-item-group");return t.createElement("li",A({ref:r,role:"presentation"},i,{onClick:function(h){return h.stopPropagation()},className:he(f,a)}),t.createElement("div",{role:"presentation",className:"".concat(f,"-title"),title:typeof n=="string"?n:void 0},n),t.createElement("ul",{role:"group",className:"".concat(f,"-list")},o))}),Pn=t.forwardRef(function(e,r){var a=e.eventKey,n=e.children,o=ut(a),i=Ft(n,o),l=bt();return l?i:t.createElement(ya,A({ref:r},kt(e,["warnKey"])),i)}),ha=["label","children","key","type","extra"];function $t(e,r,a){var n=r.item,o=r.group,i=r.submenu,l=r.divider;return(e||[]).map(function(s,f){if(s&&fr(s)==="object"){var c=s,h=c.label,u=c.children,v=c.key,S=c.type,m=c.extra,I=j(c,ha),p=v??"tmp-".concat(f);return u||S==="group"?S==="group"?t.createElement(o,A({key:p},I,{title:h}),$t(u,r,a)):t.createElement(i,A({key:p},I,{title:h}),$t(u,r,a)):S==="divider"?t.createElement(l,A({key:p},I)):t.createElement(n,A({key:p},I,{extra:m}),h,(!!m||m===0)&&t.createElement("span",{className:"".concat(a,"-item-extra")},m))}return null}).filter(function(s){return s})}function an(e,r,a,n,o){var i=e,l=k({divider:Nn,item:Tt,group:Pn,submenu:zt},n);return r&&(i=$t(r,l,o)),Ft(i,a)}var Ca=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem","_internalComponents"],Fe=[],ba=t.forwardRef(function(e,r){var a,n=e,o=n.prefixCls,i=o===void 0?"rc-menu":o,l=n.rootClassName,s=n.style,f=n.className,c=n.tabIndex,h=c===void 0?0:c,u=n.items,v=n.children,S=n.direction,m=n.id,I=n.mode,p=I===void 0?"vertical":I,x=n.inlineCollapsed,M=n.disabled,C=n.disabledOverflow,R=n.subMenuOpenDelay,b=R===void 0?.1:R,d=n.subMenuCloseDelay,_=d===void 0?.1:d,g=n.forceSubMenuRender,U=n.defaultOpenKeys,L=n.openKeys,O=n.activeKey,Y=n.defaultActiveFirst,K=n.selectable,ee=K===void 0?!0:K,W=n.multiple,G=W===void 0?!1:W,X=n.defaultSelectedKeys,q=n.selectedKeys,H=n.onSelect,te=n.onDeselect,re=n.inlineIndent,Ce=re===void 0?24:re,de=n.motion,z=n.defaultMotions,B=n.triggerSubMenuAction,ve=B===void 0?"hover":B,J=n.builtinPlacements,T=n.itemIcon,V=n.expandIcon,ue=n.overflowedIndicator,me=ue===void 0?"...":ue,xe=n.overflowedIndicatorPopupClassName,Ke=n.getPopupContainer,Ie=n.onClick,Ne=n.onOpenChange,Pe=n.onKeyDown;n.openAnimation,n.openTransitionName;var $e=n._internalRenderMenuItem,pe=n._internalRenderSubMenuItem,We=n._internalComponents,ke=j(n,Ca),qe=t.useMemo(function(){return[an(v,u,Fe,We,i),an(v,u,Fe,{},i)]},[v,u,We]),Ye=P(qe,2),ae=Ye[0],Xe=Ye[1],Ae=t.useState(!1),ie=P(Ae,2),De=ie[0],Je=ie[1],Z=t.useRef(),Me=Zr(m),ge=S==="rtl",Le=pt(U,{value:L,postState:function(w){return w||Fe}}),be=P(Le,2),oe=be[0],le=be[1],ne=function(w){var $=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function ce(){le(w),Ne==null||Ne(w)}$?on.flushSync(ce):ce()},St=t.useState(oe),He=P(St,2),ct=He[0],ft=He[1],Ee=t.useRef(!1),It=t.useMemo(function(){return(p==="inline"||p==="vertical")&&x?["vertical",x]:[p,!1]},[p,x]),Ze=P(It,2),_e=Ze[0],Qe=Ze[1],et=_e==="inline",y=t.useState(_e),E=P(y,2),N=E[0],ye=E[1],Te=t.useState(Qe),Ut=P(Te,2),_n=Ut[0],On=Ut[1];t.useEffect(function(){ye(_e),On(Qe),Ee.current&&(et?le(ct):ne(Fe))},[_e,Qe]);var Kn=t.useState(0),Wt=P(Kn,2),dt=Wt[0],$n=Wt[1],Mt=dt>=ae.length-1||N!=="horizontal"||C;t.useEffect(function(){et&&ft(oe)},[oe]),t.useEffect(function(){return Ee.current=!0,function(){Ee.current=!1}},[]);var Ve=qr(),Yt=Ve.registerPath,Xt=Ve.unregisterPath,kn=Ve.refreshOverflowKeys,Ht=Ve.isSubPathKey,An=Ve.getKeyPath,Bt=Ve.getKeys,Dn=Ve.getSubPathKeys,Ln=t.useMemo(function(){return{registerPath:Yt,unregisterPath:Xt}},[Yt,Xt]),Tn=t.useMemo(function(){return{isSubPathKey:Ht}},[Ht]);t.useEffect(function(){kn(Mt?Fe:ae.slice(dt+1).map(function(F){return F.key}))},[dt,Mt]);var Vn=pt(O||Y&&((a=ae[0])===null||a===void 0?void 0:a.key),{value:O}),jt=P(Vn,2),tt=jt[0],Et=jt[1],Fn=ot(function(F){Et(F)}),zn=ot(function(){Et(void 0)});t.useImperativeHandle(r,function(){return{list:Z.current,focus:function(w){var $,ce=Bt(),fe=Ot(ce,Me),mt=fe.elements,wt=fe.key2element,Jn=fe.element2key,Jt=Dt(Z.current,mt),Zt=tt??(Jt[0]?Jn.get(Jt[0]):($=ae.find(function(Zn){return!Zn.props.disabled}))===null||$===void 0?void 0:$.key),nt=wt.get(Zt);if(Zt&&nt){var xt;nt==null||(xt=nt.focus)===null||xt===void 0||xt.call(nt,w)}}}});var Un=pt(X||[],{value:q,postState:function(w){return Array.isArray(w)?w:w==null?Fe:[w]}}),Gt=P(Un,2),vt=Gt[0],Wn=Gt[1],Yn=function(w){if(ee){var $=w.key,ce=vt.includes($),fe;G?ce?fe=vt.filter(function(wt){return wt!==$}):fe=[].concat(Ue(vt),[$]):fe=[$],Wn(fe);var mt=k(k({},w),{},{selectedKeys:fe});ce?te==null||te(mt):H==null||H(mt)}!G&&oe.length&&N!=="inline"&&ne(Fe)},Xn=ot(function(F){Ie==null||Ie(Ct(F)),Yn(F)}),qt=ot(function(F,w){var $=oe.filter(function(fe){return fe!==F});if(w)$.push(F);else if(N!=="inline"){var ce=Dn(F);$=$.filter(function(fe){return!ce.has(fe)})}cn(oe,$,!0)||ne($,!0)}),Hn=function(w,$){var ce=$??!oe.includes(w);qt(w,ce)},Bn=Br(N,tt,ge,Me,Z,Bt,An,Et,Hn,Pe);t.useEffect(function(){Je(!0)},[]);var jn=t.useMemo(function(){return{_internalRenderMenuItem:$e,_internalRenderSubMenuItem:pe}},[$e,pe]),Gn=N!=="horizontal"||C?ae:ae.map(function(F,w){return t.createElement(st,{key:F.key,overflowDisabled:w>dt},F)}),qn=t.createElement(we,A({id:m,ref:Z,prefixCls:"".concat(i,"-overflow"),component:"ul",itemComponent:Tt,className:he(i,"".concat(i,"-root"),"".concat(i,"-").concat(N),f,D(D({},"".concat(i,"-inline-collapsed"),_n),"".concat(i,"-rtl"),ge),l),dir:S,style:s,role:"menu",tabIndex:h,data:Gn,renderRawItem:function(w){return w},renderRawRest:function(w){var $=w.length,ce=$?ae.slice(-$):null;return t.createElement(zt,{eventKey:Kt,title:me,disabled:Mt,internalPopupClose:$===0,popupClassName:xe},ce)},maxCount:N!=="horizontal"||C?we.INVALIDATE:we.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(w){$n(w)},onKeyDown:Bn},ke));return t.createElement(At.Provider,{value:jn},t.createElement(yn.Provider,{value:Me},t.createElement(st,{prefixCls:i,rootClassName:l,mode:N,openKeys:oe,rtl:ge,disabled:M,motion:De?de:null,defaultMotions:De?z:null,activeKey:tt,onActive:Fn,onInactive:zn,selectedKeys:vt,inlineIndent:Ce,subMenuOpenDelay:b,subMenuCloseDelay:_,forceSubMenuRender:g,builtinPlacements:J,triggerSubMenuAction:ve,getPopupContainer:Ke,itemIcon:T,expandIcon:V,onItemClick:Xn,onOpenChange:qt},t.createElement(Sn.Provider,{value:Tn},qn),t.createElement("div",{style:{display:"none"},"aria-hidden":!0},t.createElement(bn.Provider,{value:Ln},Xe)))))}),Rt=ba;Rt.Item=Tt;Rt.SubMenu=zt;Rt.ItemGroup=Pn;Rt.Divider=Nn;var Ra={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},Sa=function(r,a){return t.createElement(dr,A({},r,{ref:a,icon:Ra}))},xa=t.forwardRef(Sa);export{Nn as D,Rt as E,we as F,Tt as M,xa as R,zt as S,Pn as a,mr as b,pr as c,vr as d,wa as e,Ea as i,gr as s,ut as u};
