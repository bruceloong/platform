import{r as f,C as A,bt as I,g as G,bu as _}from"./index-CbcJRL3k.js";import{r as v,a as J}from"./roundedArrow-ZXwI2xFQ.js";const k=f.createContext({});var M=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n};function R(e){return typeof e=="number"?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const z=["xs","sm","md","lg","xl","xxl"],H=f.forwardRef((e,a)=>{const{getPrefixCls:n,direction:t}=f.useContext(A),{gutter:r,wrap:c}=f.useContext(k),{prefixCls:u,span:i,order:g,offset:$,push:O,pull:C,className:E,children:b,flex:x,style:j}=e,p=M(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),o=n("col",u),[N,P,m]=I(o),w={};let d={};z.forEach(l=>{let s={};const S=e[l];typeof S=="number"?s.span=S:typeof S=="object"&&(s=S||{}),delete p[l],d=Object.assign(Object.assign({},d),{[`${o}-${l}-${s.span}`]:s.span!==void 0,[`${o}-${l}-order-${s.order}`]:s.order||s.order===0,[`${o}-${l}-offset-${s.offset}`]:s.offset||s.offset===0,[`${o}-${l}-push-${s.push}`]:s.push||s.push===0,[`${o}-${l}-pull-${s.pull}`]:s.pull||s.pull===0,[`${o}-rtl`]:t==="rtl"}),s.flex&&(d[`${o}-${l}-flex`]=!0,w[`--${o}-${l}-flex`]=R(s.flex))});const h=G(o,{[`${o}-${i}`]:i!==void 0,[`${o}-order-${g}`]:g,[`${o}-offset-${$}`]:$,[`${o}-push-${O}`]:O,[`${o}-pull-${C}`]:C},E,d,P,m),y={};if(r&&r[0]>0){const l=r[0]/2;y.paddingLeft=l,y.paddingRight=l}return x&&(y.flex=R(x),c===!1&&!y.minWidth&&(y.minWidth=0)),N(f.createElement("div",Object.assign({},p,{style:Object.assign(Object.assign(Object.assign({},y),j),w),className:h,ref:a}),b))});function B(e,a){const n=[void 0,void 0],t=Array.isArray(e)?e:[e,void 0],r=a||{xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0};return t.forEach((c,u)=>{if(typeof c=="object"&&c!==null)for(let i=0;i<v.length;i++){const g=v[i];if(r[g]&&c[g]!==void 0){n[u]=c[g];break}}else n[u]=c}),n}var L=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n};function V(e,a){const[n,t]=f.useState(typeof e=="string"?e:""),r=()=>{if(typeof e=="string"&&t(e),typeof e=="object")for(let c=0;c<v.length;c++){const u=v[c];if(!a||!a[u])continue;const i=e[u];if(i!==void 0){t(i);return}}};return f.useEffect(()=>{r()},[JSON.stringify(e),a]),n}const q=f.forwardRef((e,a)=>{const{prefixCls:n,justify:t,align:r,className:c,style:u,children:i,gutter:g=0,wrap:$}=e,O=L(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:C,direction:E}=f.useContext(A),b=J(!0,null),x=V(r,b),j=V(t,b),p=C("row",n),[o,N,P]=_(p),m=B(g,b),w=G(p,{[`${p}-no-wrap`]:$===!1,[`${p}-${j}`]:j,[`${p}-${x}`]:x,[`${p}-rtl`]:E==="rtl"},c,N,P),d={},h=m[0]!=null&&m[0]>0?m[0]/-2:void 0;h&&(d.marginLeft=h,d.marginRight=h);const[y,l]=m;d.rowGap=l;const s=f.useMemo(()=>({gutter:[y,l],wrap:$}),[y,l,$]);return o(f.createElement(k.Provider,{value:s},f.createElement("div",Object.assign({},O,{className:w,style:Object.assign(Object.assign({},d),u),ref:a}),i)))});export{H as C,q as R};
