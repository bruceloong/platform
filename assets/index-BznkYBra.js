import{l as U,n as Y,M,r as s,f as Z,h as v,p as ee,al as oe,aO as ne,aR as te,N as re,P as se,aS as ie,Q as ae,aI as ce,w as le,x as de,z as me}from"./index-CVvmjeEA.js";import{_ as pe}from"./callSuper-DfZ88zX_.js";const S=(e,o,t,n,r)=>({background:e,border:`${M(n.lineWidth)} ${n.lineType} ${o}`,[`${r}-icon`]:{color:t}}),ue=e=>{const{componentCls:o,motionDurationSlow:t,marginXS:n,marginSM:r,fontSize:i,fontSizeLG:l,lineHeight:d,borderRadiusLG:p,motionEaseInOutCirc:m,withDescriptionIconSize:f,colorText:g,colorTextHeading:C,withDescriptionPadding:b,defaultPadding:a}=e;return{[o]:Object.assign(Object.assign({},Y(e)),{position:"relative",display:"flex",alignItems:"center",padding:a,wordWrap:"break-word",borderRadius:p,[`&${o}-rtl`]:{direction:"rtl"},[`${o}-content`]:{flex:1,minWidth:0},[`${o}-icon`]:{marginInlineEnd:n,lineHeight:0},"&-description":{display:"none",fontSize:i,lineHeight:d},"&-message":{color:C},[`&${o}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${t} ${m}, opacity ${t} ${m},
        padding-top ${t} ${m}, padding-bottom ${t} ${m},
        margin-bottom ${t} ${m}`},[`&${o}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${o}-with-description`]:{alignItems:"flex-start",padding:b,[`${o}-icon`]:{marginInlineEnd:r,fontSize:f,lineHeight:0},[`${o}-message`]:{display:"block",marginBottom:n,color:C,fontSize:l},[`${o}-description`]:{display:"block",color:g}},[`${o}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},fe=e=>{const{componentCls:o,colorSuccess:t,colorSuccessBorder:n,colorSuccessBg:r,colorWarning:i,colorWarningBorder:l,colorWarningBg:d,colorError:p,colorErrorBorder:m,colorErrorBg:f,colorInfo:g,colorInfoBorder:C,colorInfoBg:b}=e;return{[o]:{"&-success":S(r,n,t,e,o),"&-info":S(b,C,g,e,o),"&-warning":S(d,l,i,e,o),"&-error":Object.assign(Object.assign({},S(f,m,p,e,o)),{[`${o}-description > pre`]:{margin:0,padding:0}})}}},ge=e=>{const{componentCls:o,iconCls:t,motionDurationMid:n,marginXS:r,fontSizeIcon:i,colorIcon:l,colorIconHover:d}=e;return{[o]:{"&-action":{marginInlineStart:r},[`${o}-close-icon`]:{marginInlineStart:r,padding:0,overflow:"hidden",fontSize:i,lineHeight:M(i),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${t}-close`]:{color:l,transition:`color ${n}`,"&:hover":{color:d}}},"&-close-text":{color:l,transition:`color ${n}`,"&:hover":{color:d}}}}},ye=e=>({withDescriptionIconSize:e.fontSizeHeading3,defaultPadding:`${e.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${e.paddingMD}px ${e.paddingContentHorizontalLG}px`}),$e=U("Alert",e=>[ue(e),fe(e),ge(e)],ye);var B=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)o.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Ce={success:ae,info:ie,error:se,warning:re},be=e=>{const{icon:o,prefixCls:t,type:n}=e,r=Ce[n]||null;return o?te(o,s.createElement("span",{className:`${t}-icon`},o),()=>({className:v(`${t}-icon`,o.props.className)})):s.createElement(r,{className:`${t}-icon`})},Ie=e=>{const{isClosable:o,prefixCls:t,closeIcon:n,handleClose:r,ariaProps:i}=e,l=n===!0||n===void 0?s.createElement(ce,null):n;return o?s.createElement("button",Object.assign({type:"button",onClick:r,className:`${t}-close-icon`,tabIndex:0},i),l):null},z=s.forwardRef((e,o)=>{const{description:t,prefixCls:n,message:r,banner:i,className:l,rootClassName:d,style:p,onMouseEnter:m,onMouseLeave:f,onClick:g,afterClose:C,showIcon:b,closable:a,closeText:h,closeIcon:y,action:x,id:H}=e,R=B(e,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action","id"]),[E,D]=s.useState(!1),w=s.useRef(null);s.useImperativeHandle(o,()=>({nativeElement:w.current}));const{getPrefixCls:T,direction:_,closable:$,closeIcon:N,className:A,style:L}=Z("alert"),c=T("alert",n),[k,W,G]=$e(c),V=u=>{var I;D(!0),(I=e.onClose)===null||I===void 0||I.call(e,u)},O=s.useMemo(()=>e.type!==void 0?e.type:i?"warning":"info",[e.type,i]),X=s.useMemo(()=>typeof a=="object"&&a.closeIcon||h?!0:typeof a=="boolean"?a:y!==!1&&y!==null&&y!==void 0?!0:!!$,[h,y,a,$]),j=i&&b===void 0?!0:b,F=v(c,`${c}-${O}`,{[`${c}-with-description`]:!!t,[`${c}-no-icon`]:!j,[`${c}-banner`]:!!i,[`${c}-rtl`]:_==="rtl"},A,l,d,G,W),Q=ee(R,{aria:!0,data:!0}),q=s.useMemo(()=>typeof a=="object"&&a.closeIcon?a.closeIcon:h||(y!==void 0?y:typeof $=="object"&&$.closeIcon?$.closeIcon:N),[y,a,h,N]),J=s.useMemo(()=>{const u=a??$;if(typeof u=="object"){const{closeIcon:I}=u;return B(u,["closeIcon"])}return{}},[a,$]);return k(s.createElement(oe,{visible:!E,motionName:`${c}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:u=>({maxHeight:u.offsetHeight}),onLeaveEnd:C},(u,I)=>{let{className:P,style:K}=u;return s.createElement("div",Object.assign({id:H,ref:ne(w,I),"data-show":!E,className:v(F,P),style:Object.assign(Object.assign(Object.assign({},L),p),K),onMouseEnter:m,onMouseLeave:f,onClick:g,role:"alert"},Q),j?s.createElement(be,{description:t,icon:e.icon,prefixCls:c,type:O}):null,s.createElement("div",{className:`${c}-content`},r?s.createElement("div",{className:`${c}-message`},r):null,t?s.createElement("div",{className:`${c}-description`},t):null),x?s.createElement("div",{className:`${c}-action`},x):null,s.createElement(Ie,{isClosable:X,prefixCls:c,closeIcon:q,handleClose:V,ariaProps:J}))}))});let he=function(e){function o(){var t;return me(this,o),t=pe(this,o,arguments),t.state={error:void 0,info:{componentStack:""}},t}return le(o,e),de(o,[{key:"componentDidCatch",value:function(n,r){this.setState({error:n,info:r})}},{key:"render",value:function(){const{message:n,description:r,id:i,children:l}=this.props,{error:d,info:p}=this.state,m=(p==null?void 0:p.componentStack)||null,f=typeof n>"u"?(d||"").toString():n,g=typeof r>"u"?m:r;return d?s.createElement(z,{id:i,type:"error",message:f,description:s.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},g)}):l}}])}(s.Component);const Se=z;Se.ErrorBoundary=he;export{Se as A};
