import{k as B,m as k,l as N,M as d,f as P,r as c,g as W}from"./index-CbcJRL3k.js";const j=t=>{const{componentCls:e,sizePaddingEdgeHorizontal:o,colorSplit:r,lineWidth:n,textPaddingInline:h,orientationMargin:l,verticalMarginInline:s}=t;return{[e]:Object.assign(Object.assign({},N(t)),{borderBlockStart:`${d(n)} solid ${r}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:s,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${d(n)} solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${d(t.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${e}-with-text`]:{display:"flex",alignItems:"center",margin:`${d(t.dividerHorizontalWithTextGutterMargin)} 0`,color:t.colorTextHeading,fontWeight:500,fontSize:t.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${d(n)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${e}-with-text-start`]:{"&::before":{width:`calc(${l} * 100%)`},"&::after":{width:`calc(100% - ${l} * 100%)`}},[`&-horizontal${e}-with-text-end`]:{"&::before":{width:`calc(100% - ${l} * 100%)`},"&::after":{width:`calc(${l} * 100%)`}},[`${e}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:h},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${d(n)} 0 0`},[`&-horizontal${e}-with-text${e}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${e}-dashed`]:{borderInlineStartWidth:n,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-dotted":{background:"none",borderColor:r,borderStyle:"dotted",borderWidth:`${d(n)} 0 0`},[`&-horizontal${e}-with-text${e}-dotted`]:{"&::before, &::after":{borderStyle:"dotted none none"}},[`&-vertical${e}-dotted`]:{borderInlineStartWidth:n,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${e}-with-text`]:{color:t.colorText,fontWeight:"normal",fontSize:t.fontSize},[`&-horizontal${e}-with-text-start${e}-no-default-orientation-margin-start`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${e}-inner-text`]:{paddingInlineStart:o}},[`&-horizontal${e}-with-text-end${e}-no-default-orientation-margin-end`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${e}-inner-text`]:{paddingInlineEnd:o}}})}},H=t=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:t.marginXS}),T=B("Divider",t=>{const e=k(t,{dividerHorizontalWithTextGutterMargin:t.margin,dividerHorizontalGutterMargin:t.marginLG,sizePaddingEdgeHorizontal:0});return[j(e)]},H,{unitless:{orientationMargin:!0}});var G=function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(o[r[n]]=t[r[n]]);return o};const A=t=>{const{getPrefixCls:e,direction:o,className:r,style:n}=P("divider"),{prefixCls:h,type:l="horizontal",orientation:s="center",orientationMargin:a,className:S,rootClassName:x,children:g,dashed:v,variant:m="solid",plain:y,style:w}=t,z=G(t,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","variant","plain","style"]),i=e("divider",h),[C,I,M]=T(i),b=!!g,f=c.useMemo(()=>s==="left"?o==="rtl"?"end":"start":s==="right"?o==="rtl"?"start":"end":s,[o,s]),p=f==="start"&&a!=null,$=f==="end"&&a!=null,O=W(i,r,I,M,`${i}-${l}`,{[`${i}-with-text`]:b,[`${i}-with-text-${f}`]:b,[`${i}-dashed`]:!!v,[`${i}-${m}`]:m!=="solid",[`${i}-plain`]:!!y,[`${i}-rtl`]:o==="rtl",[`${i}-no-default-orientation-margin-start`]:p,[`${i}-no-default-orientation-margin-end`]:$},S,x),u=c.useMemo(()=>typeof a=="number"?a:/^\d+$/.test(a)?Number(a):a,[a]),E={marginInlineStart:p?u:void 0,marginInlineEnd:$?u:void 0};return C(c.createElement("div",Object.assign({className:O,style:Object.assign(Object.assign({},n),w)},z,{role:"separator"}),g&&l!=="vertical"&&c.createElement("span",{className:`${i}-inner-text`,style:E},g)))};export{A as D};
