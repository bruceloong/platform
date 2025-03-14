import{k as Q,m as U,l as G,M as T,ap as Y,J as Z,r as n,C as L,aM as ee,aL as re,aO as oe,aw as q,g as M,aP as ae,aQ as te,o as le,h as k}from"./index-CbcJRL3k.js";import{u as ne,C as se}from"./useBubbleLock-DGQtOuMD.js";const ie=e=>{const{checkboxCls:r}=e,o=`${r}-wrapper`;return[{[`${r}-group`]:Object.assign(Object.assign({},G(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,[`> ${e.antCls}-row`]:{flex:1}}),[o]:Object.assign(Object.assign({},G(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${o}`]:{marginInlineStart:0},[`&${o}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[r]:Object.assign(Object.assign({},G(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center",[`${r}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${r}-inner`]:Object.assign({},Y(e))},[`${r}-inner`]:{boxSizing:"border-box",display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${T(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"25%",display:"table",width:e.calc(e.checkboxSize).div(14).mul(5).equal(),height:e.calc(e.checkboxSize).div(14).mul(8).equal(),border:`${T(e.lineWidthBold)} solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[`
        ${o}:not(${o}-disabled),
        ${r}:not(${r}-disabled)
      `]:{[`&:hover ${r}-inner`]:{borderColor:e.colorPrimary}},[`${o}:not(${o}-disabled)`]:{[`&:hover ${r}-checked:not(${r}-disabled) ${r}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${r}-checked:not(${r}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${r}-checked`]:{[`${r}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}}},[`
        ${o}-checked:not(${o}-disabled),
        ${r}-checked:not(${r}-disabled)
      `]:{[`&:hover ${r}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}}},{[r]:{"&-indeterminate":{[`${r}-inner`]:{backgroundColor:`${e.colorBgContainer} !important`,borderColor:`${e.colorBorder} !important`,"&:after":{top:"50%",insetInlineStart:"50%",width:e.calc(e.fontSizeLG).div(2).equal(),height:e.calc(e.fontSizeLG).div(2).equal(),backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}},[`&:hover ${r}-inner`]:{backgroundColor:`${e.colorBgContainer} !important`,borderColor:`${e.colorPrimary} !important`}}}},{[`${o}-disabled`]:{cursor:"not-allowed"},[`${r}-disabled`]:{[`&, ${r}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${r}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${r}-indeterminate ${r}-inner::after`]:{background:e.colorTextDisabled}}}]};function ce(e,r){const o=U(r,{checkboxCls:`.${e}`,checkboxSize:r.controlInteractiveSize});return[ie(o)]}const F=Q("Checkbox",(e,r)=>{let{prefixCls:o}=r;return[ce(o,e)]}),H=Z.createContext(null);var de=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)r.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};const ue=(e,r)=>{var o;const{prefixCls:t,className:s,rootClassName:I,children:v,indeterminate:h=!1,style:E,onMouseEnter:x,onMouseLeave:d,skipGroup:y=!1,disabled:j}=e,i=de(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:S,direction:V,checkbox:u}=n.useContext(L),l=n.useContext(H),{isFormItemInput:N}=n.useContext(ee),z=n.useContext(re),$=(o=(l==null?void 0:l.disabled)||j)!==null&&o!==void 0?o:z,b=n.useRef(i.value),C=n.useRef(null),O=oe(r,C);n.useEffect(()=>{l==null||l.registerValue(i.value)},[]),n.useEffect(()=>{if(!y)return i.value!==b.current&&(l==null||l.cancelValue(b.current),l==null||l.registerValue(i.value),b.current=i.value),()=>l==null?void 0:l.cancelValue(i.value)},[i.value]),n.useEffect(()=>{var g;!((g=C.current)===null||g===void 0)&&g.input&&(C.current.input.indeterminate=h)},[h]);const c=S("checkbox",t),w=q(c),[R,P,B]=F(c,w),p=Object.assign({},i);l&&!y&&(p.onChange=function(){i.onChange&&i.onChange.apply(i,arguments),l.toggleOption&&l.toggleOption({label:v,value:i.value})},p.name=l.name,p.checked=l.value.includes(i.value));const _=M(`${c}-wrapper`,{[`${c}-rtl`]:V==="rtl",[`${c}-wrapper-checked`]:p.checked,[`${c}-wrapper-disabled`]:$,[`${c}-wrapper-in-form-item`]:N},u==null?void 0:u.className,s,I,B,w,P),a=M({[`${c}-indeterminate`]:h},ae,P),[f,m]=ne(p.onClick);return R(n.createElement(te,{component:"Checkbox",disabled:$},n.createElement("label",{className:_,style:Object.assign(Object.assign({},u==null?void 0:u.style),E),onMouseEnter:x,onMouseLeave:d,onClick:f},n.createElement(se,Object.assign({},p,{onClick:m,prefixCls:c,className:a,disabled:$,ref:O})),v!==void 0&&n.createElement("span",{className:`${c}-label`},v))))},W=n.forwardRef(ue);var be=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)r.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};const pe=n.forwardRef((e,r)=>{const{defaultValue:o,children:t,options:s=[],prefixCls:I,className:v,rootClassName:h,style:E,onChange:x}=e,d=be(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:y,direction:j}=n.useContext(L),[i,S]=n.useState(d.value||o||[]),[V,u]=n.useState([]);n.useEffect(()=>{"value"in d&&S(d.value||[])},[d.value]);const l=n.useMemo(()=>s.map(a=>typeof a=="string"||typeof a=="number"?{label:a,value:a}:a),[s]),N=a=>{u(f=>f.filter(m=>m!==a))},z=a=>{u(f=>[].concat(k(f),[a]))},$=a=>{const f=i.indexOf(a.value),m=k(i);f===-1?m.push(a.value):m.splice(f,1),"value"in d||S(m),x==null||x(m.filter(g=>V.includes(g)).sort((g,X)=>{const J=l.findIndex(D=>D.value===g),K=l.findIndex(D=>D.value===X);return J-K}))},b=y("checkbox",I),C=`${b}-group`,O=q(b),[c,w,R]=F(b,O),P=le(d,["value","disabled"]),B=s.length?l.map(a=>n.createElement(W,{prefixCls:b,key:a.value.toString(),disabled:"disabled"in a?a.disabled:d.disabled,value:a.value,checked:i.includes(a.value),onChange:a.onChange,className:`${C}-item`,style:a.style,title:a.title,id:a.id,required:a.required},a.label)):t,p={toggleOption:$,value:i,disabled:d.disabled,name:d.name,registerValue:z,cancelValue:N},_=M(C,{[`${C}-rtl`]:j==="rtl"},v,h,R,O,w);return c(n.createElement("div",Object.assign({className:_,style:E},P,{ref:r}),n.createElement(H.Provider,{value:p},B)))}),A=W;A.Group=pe;A.__ANT_CHECKBOX=!0;export{A as C,ce as g};
