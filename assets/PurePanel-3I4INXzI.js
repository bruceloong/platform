import{ao as n,b9 as j,r as t,aV as x,C as R}from"./index-CbcJRL3k.js";import{b as E}from"./roundedArrow-ZXwI2xFQ.js";const $=new n("antMoveDownIn",{"0%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),z=new n("antMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0}}),S=new n("antMoveLeftIn",{"0%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),D=new n("antMoveLeftOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),L=new n("antMoveRightIn",{"0%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),U=new n("antMoveRightOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),W=new n("antMoveUpIn",{"0%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),H=new n("antMoveUpOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0}}),T={"move-up":{inKeyframes:W,outKeyframes:H},"move-down":{inKeyframes:$,outKeyframes:z},"move-left":{inKeyframes:S,outKeyframes:D},"move-right":{inKeyframes:L,outKeyframes:U}},V=(e,r)=>{const{antCls:c}=e,o=`${c}-${r}`,{inKeyframes:s,outKeyframes:l}=T[r];return[j(o,s,l,e.motionDurationMid),{[`
        ${o}-enter,
        ${o}-appear
      `]:{opacity:0,animationTimingFunction:e.motionEaseOutCirc},[`${o}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]};function B(e){return r=>t.createElement(x,{theme:{token:{motion:!1,zIndexPopupBase:0}}},t.createElement(e,Object.assign({},r)))}const X=(e,r,c,o,s)=>B(m=>{const{prefixCls:y,style:w}=m,f=t.useRef(null),[h,P]=t.useState(0),[b,C]=t.useState(0),[u,M]=E(!1,{value:m.open}),{getPrefixCls:I}=t.useContext(R),p=I(o||"select",y);t.useEffect(()=>{if(M(!0),typeof ResizeObserver<"u"){const d=new ResizeObserver(a=>{const i=a[0].target;P(i.offsetHeight+8),C(i.offsetWidth)}),v=setInterval(()=>{var a;const i=s?`.${s(p)}`:`.${p}-dropdown`,O=(a=f.current)===null||a===void 0?void 0:a.querySelector(i);O&&(clearInterval(v),d.observe(O))},10);return()=>{clearInterval(v),d.disconnect()}}},[]);let g=Object.assign(Object.assign({},m),{style:Object.assign(Object.assign({},w),{margin:0}),open:u,visible:u,getPopupContainer:()=>f.current});r&&Object.assign(g,{[r]:{overflow:{adjustX:!1,adjustY:!1}}});const K={paddingBottom:h,position:"relative",minWidth:b};return t.createElement("div",{ref:f,style:K},t.createElement(e,Object.assign({},g)))});export{X as g,V as i};
