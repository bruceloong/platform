import{k as re,l as ae,M,r as p,f as ie,g as _,p as se,al as le,aO as $e,aR as Ie,N as Se,P as je,aS as Ne,Q as Pe,aI as Ee,w as we,x as Ae,z as Oe,J as P,A as ce,D as K,F as de,an as U,_ as F,y as Me,e as me,a5 as Re,a4 as Be,h as ke,C as _e,m as Te,aE as ze,aC as He,V as Ke,q as Y,ar as De,o as Z,j as s,B as Le,S as Ge,aH as Fe,L as ee}from"./index-CbcJRL3k.js";import{F as W}from"./index-DzUoQKQC.js";import{C as Ve}from"./index-yT7z0R9N.js";import{_ as We}from"./callSuper-Bhg8_cnS.js";import{T as Xe}from"./index-C_orHkpq.js";import{D as qe}from"./index-U494ttLB.js";import{T as Je}from"./index-IXaqDtfn.js";import{R as Qe}from"./RightOutlined-BLpIbDbF.js";import{b as Ue}from"./roundedArrow-ZXwI2xFQ.js";import{g as Ye}from"./collapse-BbEVqHco.js";import"./row-oqDN9NaK.js";import"./index-BKzotca0.js";import"./EllipsisOutlined-Dh0XXIS3.js";import"./useVariants-DE2B2smb.js";import"./DownOutlined-DkPoV1du.js";import"./TextArea-BLJSUrB-.js";import"./index-BqCjM9dL.js";import"./EditOutlined-ZsrA_iia.js";import"./styleChecker-wZ6_H3ZI.js";const X=(n,e,t,o,a)=>({background:n,border:`${M(o.lineWidth)} ${o.lineType} ${e}`,[`${a}-icon`]:{color:t}}),Ze=n=>{const{componentCls:e,motionDurationSlow:t,marginXS:o,marginSM:a,fontSize:l,fontSizeLG:d,lineHeight:r,borderRadiusLG:i,motionEaseInOutCirc:u,withDescriptionIconSize:y,colorText:g,colorTextHeading:x,withDescriptionPadding:m,defaultPadding:c}=n;return{[e]:Object.assign(Object.assign({},ae(n)),{position:"relative",display:"flex",alignItems:"center",padding:c,wordWrap:"break-word",borderRadius:i,[`&${e}-rtl`]:{direction:"rtl"},[`${e}-content`]:{flex:1,minWidth:0},[`${e}-icon`]:{marginInlineEnd:o,lineHeight:0},"&-description":{display:"none",fontSize:l,lineHeight:r},"&-message":{color:x},[`&${e}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${t} ${u}, opacity ${t} ${u},
        padding-top ${t} ${u}, padding-bottom ${t} ${u},
        margin-bottom ${t} ${u}`},[`&${e}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${e}-with-description`]:{alignItems:"flex-start",padding:m,[`${e}-icon`]:{marginInlineEnd:a,fontSize:y,lineHeight:0},[`${e}-message`]:{display:"block",marginBottom:o,color:x,fontSize:d},[`${e}-description`]:{display:"block",color:g}},[`${e}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},en=n=>{const{componentCls:e,colorSuccess:t,colorSuccessBorder:o,colorSuccessBg:a,colorWarning:l,colorWarningBorder:d,colorWarningBg:r,colorError:i,colorErrorBorder:u,colorErrorBg:y,colorInfo:g,colorInfoBorder:x,colorInfoBg:m}=n;return{[e]:{"&-success":X(a,o,t,n,e),"&-info":X(m,x,g,n,e),"&-warning":X(r,d,l,n,e),"&-error":Object.assign(Object.assign({},X(y,u,i,n,e)),{[`${e}-description > pre`]:{margin:0,padding:0}})}}},nn=n=>{const{componentCls:e,iconCls:t,motionDurationMid:o,marginXS:a,fontSizeIcon:l,colorIcon:d,colorIconHover:r}=n;return{[e]:{"&-action":{marginInlineStart:a},[`${e}-close-icon`]:{marginInlineStart:a,padding:0,overflow:"hidden",fontSize:l,lineHeight:M(l),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${t}-close`]:{color:d,transition:`color ${o}`,"&:hover":{color:r}}},"&-close-text":{color:d,transition:`color ${o}`,"&:hover":{color:r}}}}},tn=n=>({withDescriptionIconSize:n.fontSizeHeading3,defaultPadding:`${n.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${n.paddingMD}px ${n.paddingContentHorizontalLG}px`}),on=re("Alert",n=>[Ze(n),en(n),nn(n)],tn);var ne=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(n);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(n,o[a])&&(t[o[a]]=n[o[a]]);return t};const rn={success:Pe,info:Ne,error:je,warning:Se},an=n=>{const{icon:e,prefixCls:t,type:o}=n,a=rn[o]||null;return e?Ie(e,p.createElement("span",{className:`${t}-icon`},e),()=>({className:_(`${t}-icon`,e.props.className)})):p.createElement(a,{className:`${t}-icon`})},sn=n=>{const{isClosable:e,prefixCls:t,closeIcon:o,handleClose:a,ariaProps:l}=n,d=o===!0||o===void 0?p.createElement(Ee,null):o;return e?p.createElement("button",Object.assign({type:"button",onClick:a,className:`${t}-close-icon`,tabIndex:0},l),d):null},ue=p.forwardRef((n,e)=>{const{description:t,prefixCls:o,message:a,banner:l,className:d,rootClassName:r,style:i,onMouseEnter:u,onMouseLeave:y,onClick:g,afterClose:x,showIcon:m,closable:c,closeText:b,closeIcon:h,action:$,id:v}=n,N=ne(n,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action","id"]),[C,E]=p.useState(!1),j=p.useRef(null);p.useImperativeHandle(e,()=>({nativeElement:j.current}));const{getPrefixCls:w,direction:S,closable:I,closeIcon:A,className:R,style:D}=ie("alert"),f=w("alert",o),[O,k,T]=on(f),B=z=>{var G;E(!0),(G=n.onClose)===null||G===void 0||G.call(n,z)},L=p.useMemo(()=>n.type!==void 0?n.type:l?"warning":"info",[n.type,l]),V=p.useMemo(()=>typeof c=="object"&&c.closeIcon||b?!0:typeof c=="boolean"?c:h!==!1&&h!==null&&h!==void 0?!0:!!I,[b,h,c,I]),J=l&&m===void 0?!0:m,he=_(f,`${f}-${L}`,{[`${f}-with-description`]:!!t,[`${f}-no-icon`]:!J,[`${f}-banner`]:!!l,[`${f}-rtl`]:S==="rtl"},R,d,r,T,k),xe=se(N,{aria:!0,data:!0}),ye=p.useMemo(()=>typeof c=="object"&&c.closeIcon?c.closeIcon:b||(h!==void 0?h:typeof I=="object"&&I.closeIcon?I.closeIcon:A),[h,c,b,A]),be=p.useMemo(()=>{const z=c??I;if(typeof z=="object"){const{closeIcon:G}=z;return ne(z,["closeIcon"])}return{}},[c,I]);return O(p.createElement(le,{visible:!C,motionName:`${f}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:z=>({maxHeight:z.offsetHeight}),onLeaveEnd:x},(z,G)=>{let{className:Q,style:Ce}=z;return p.createElement("div",Object.assign({id:v,ref:$e(j,G),"data-show":!C,className:_(he,Q),style:Object.assign(Object.assign(Object.assign({},D),i),Ce),onMouseEnter:u,onMouseLeave:y,onClick:g,role:"alert"},xe),J?p.createElement(an,{description:t,icon:n.icon,prefixCls:f,type:L}):null,p.createElement("div",{className:`${f}-content`},a?p.createElement("div",{className:`${f}-message`},a):null,t?p.createElement("div",{className:`${f}-description`},t):null),$?p.createElement("div",{className:`${f}-action`},$):null,p.createElement(sn,{isClosable:V,prefixCls:f,closeIcon:ye,handleClose:B,ariaProps:be}))}))});let ln=function(n){function e(){var t;return Oe(this,e),t=We(this,e,arguments),t.state={error:void 0,info:{componentStack:""}},t}return we(e,n),Ae(e,[{key:"componentDidCatch",value:function(o,a){this.setState({error:o,info:a})}},{key:"render",value:function(){const{message:o,description:a,id:l,children:d}=this.props,{error:r,info:i}=this.state,u=(i==null?void 0:i.componentStack)||null,y=typeof o>"u"?(r||"").toString():o,g=typeof a>"u"?u:a;return r?p.createElement(ue,{id:l,type:"error",message:y,description:p.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},g)}):d}}])}(p.Component);const pe=ue;pe.ErrorBoundary=ln;var ge=P.forwardRef(function(n,e){var t=n.prefixCls,o=n.forceRender,a=n.className,l=n.style,d=n.children,r=n.isActive,i=n.role,u=n.classNames,y=n.styles,g=P.useState(r||o),x=ce(g,2),m=x[0],c=x[1];return P.useEffect(function(){(o||r)&&c(!0)},[o,r]),m?P.createElement("div",{ref:e,className:_("".concat(t,"-content"),K(K({},"".concat(t,"-content-active"),r),"".concat(t,"-content-inactive"),!r),a),style:l,role:i},P.createElement("div",{className:_("".concat(t,"-content-box"),u==null?void 0:u.body),style:y==null?void 0:y.body},d)):null});ge.displayName="PanelContent";var cn=["showArrow","headerClass","isActive","onItemClick","forceRender","className","classNames","styles","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],fe=P.forwardRef(function(n,e){var t=n.showArrow,o=t===void 0?!0:t,a=n.headerClass,l=n.isActive,d=n.onItemClick,r=n.forceRender,i=n.className,u=n.classNames,y=u===void 0?{}:u,g=n.styles,x=g===void 0?{}:g,m=n.prefixCls,c=n.collapsible,b=n.accordion,h=n.panelKey,$=n.extra,v=n.header,N=n.expandIcon,C=n.openMotion,E=n.destroyInactivePanel,j=n.children,w=de(n,cn),S=c==="disabled",I=$!=null&&typeof $!="boolean",A=K(K(K({onClick:function(){d==null||d(h)},onKeyDown:function(B){(B.key==="Enter"||B.keyCode===U.ENTER||B.which===U.ENTER)&&(d==null||d(h))},role:b?"tab":"button"},"aria-expanded",l),"aria-disabled",S),"tabIndex",S?-1:0),R=typeof N=="function"?N(n):P.createElement("i",{className:"arrow"}),D=R&&P.createElement("div",F({className:"".concat(m,"-expand-icon")},["header","icon"].includes(c)?A:{}),R),f=_("".concat(m,"-item"),K(K({},"".concat(m,"-item-active"),l),"".concat(m,"-item-disabled"),S),i),O=_(a,"".concat(m,"-header"),K({},"".concat(m,"-collapsible-").concat(c),!!c),y.header),k=Me({className:O,style:x.header},["header","icon"].includes(c)?{}:A);return P.createElement("div",F({},w,{ref:e,className:f}),P.createElement("div",k,o&&D,P.createElement("span",F({className:"".concat(m,"-header-text")},c==="header"?A:{}),v),I&&P.createElement("div",{className:"".concat(m,"-extra")},$)),P.createElement(le,F({visible:l,leavedClassName:"".concat(m,"-content-hidden")},C,{forceRender:r,removeOnLeave:E}),function(T,B){var L=T.className,V=T.style;return P.createElement(ge,{ref:B,prefixCls:m,className:L,classNames:y,style:V,styles:x,isActive:l,forceRender:r,role:b?"tabpanel":void 0},j)}))}),dn=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],mn=function(e,t){var o=t.prefixCls,a=t.accordion,l=t.collapsible,d=t.destroyInactivePanel,r=t.onItemClick,i=t.activeKey,u=t.openMotion,y=t.expandIcon;return e.map(function(g,x){var m=g.children,c=g.label,b=g.key,h=g.collapsible,$=g.onItemClick,v=g.destroyInactivePanel,N=de(g,dn),C=String(b??x),E=h??l,j=v??d,w=function(A){E!=="disabled"&&(r(A),$==null||$(A))},S=!1;return a?S=i[0]===C:S=i.indexOf(C)>-1,P.createElement(fe,F({},N,{prefixCls:o,key:C,panelKey:C,isActive:S,accordion:a,openMotion:u,expandIcon:y,header:c,collapsible:E,onItemClick:w,destroyInactivePanel:j}),m)})},un=function(e,t,o){if(!e)return null;var a=o.prefixCls,l=o.accordion,d=o.collapsible,r=o.destroyInactivePanel,i=o.onItemClick,u=o.activeKey,y=o.openMotion,g=o.expandIcon,x=e.key||String(t),m=e.props,c=m.header,b=m.headerClass,h=m.destroyInactivePanel,$=m.collapsible,v=m.onItemClick,N=!1;l?N=u[0]===x:N=u.indexOf(x)>-1;var C=$??d,E=function(S){C!=="disabled"&&(i(S),v==null||v(S))},j={key:x,panelKey:x,header:c,headerClass:b,isActive:N,prefixCls:a,destroyInactivePanel:h??r,openMotion:y,accordion:l,children:e.props.children,onItemClick:E,expandIcon:g,collapsible:C};return typeof e.type=="string"?e:(Object.keys(j).forEach(function(w){typeof j[w]>"u"&&delete j[w]}),P.cloneElement(e,j))};function pn(n,e,t){return Array.isArray(n)?mn(n,t):me(e).map(function(o,a){return un(o,a,t)})}function gn(n){var e=n;if(!Array.isArray(e)){var t=Be(e);e=t==="number"||t==="string"?[e]:[]}return e.map(function(o){return String(o)})}var fn=P.forwardRef(function(n,e){var t=n.prefixCls,o=t===void 0?"rc-collapse":t,a=n.destroyInactivePanel,l=a===void 0?!1:a,d=n.style,r=n.accordion,i=n.className,u=n.children,y=n.collapsible,g=n.openMotion,x=n.expandIcon,m=n.activeKey,c=n.defaultActiveKey,b=n.onChange,h=n.items,$=_(o,i),v=Ue([],{value:m,onChange:function(I){return b==null?void 0:b(I)},defaultValue:c,postState:gn}),N=ce(v,2),C=N[0],E=N[1],j=function(I){return E(function(){if(r)return C[0]===I?[]:[I];var A=C.indexOf(I),R=A>-1;return R?C.filter(function(D){return D!==I}):[].concat(ke(C),[I])})};Re(!u,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var w=pn(h,u,{prefixCls:o,accordion:r,openMotion:g,expandIcon:x,collapsible:y,destroyInactivePanel:l,onItemClick:j,activeKey:C});return P.createElement("div",F({ref:e,className:$,style:d,role:r?"tablist":void 0},se(n,{aria:!0,data:!0})),w)});const q=Object.assign(fn,{Panel:fe});q.Panel;const vn=p.forwardRef((n,e)=>{const{getPrefixCls:t}=p.useContext(_e),{prefixCls:o,className:a,showArrow:l=!0}=n,d=t("collapse",o),r=_({[`${d}-no-arrow`]:!l},a);return p.createElement(q.Panel,Object.assign({ref:e},n,{prefixCls:d,className:r}))}),hn=n=>{const{componentCls:e,contentBg:t,padding:o,headerBg:a,headerPadding:l,collapseHeaderPaddingSM:d,collapseHeaderPaddingLG:r,collapsePanelBorderRadius:i,lineWidth:u,lineType:y,colorBorder:g,colorText:x,colorTextHeading:m,colorTextDisabled:c,fontSizeLG:b,lineHeight:h,lineHeightLG:$,marginSM:v,paddingSM:N,paddingLG:C,paddingXS:E,motionDurationSlow:j,fontSizeIcon:w,contentPadding:S,fontHeight:I,fontHeightLG:A}=n,R=`${M(u)} ${y} ${g}`;return{[e]:Object.assign(Object.assign({},ae(n)),{backgroundColor:a,border:R,borderRadius:i,"&-rtl":{direction:"rtl"},[`& > ${e}-item`]:{borderBottom:R,"&:first-child":{[`
            &,
            & > ${e}-header`]:{borderRadius:`${M(i)} ${M(i)} 0 0`}},"&:last-child":{[`
            &,
            & > ${e}-header`]:{borderRadius:`0 0 ${M(i)} ${M(i)}`}},[`> ${e}-header`]:Object.assign(Object.assign({position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:l,color:m,lineHeight:h,cursor:"pointer",transition:`all ${j}, visibility 0s`},ze(n)),{[`> ${e}-header-text`]:{flex:"auto"},[`${e}-expand-icon`]:{height:I,display:"flex",alignItems:"center",paddingInlineEnd:v},[`${e}-arrow`]:Object.assign(Object.assign({},He()),{fontSize:w,transition:`transform ${j}`,svg:{transition:`transform ${j}`}}),[`${e}-header-text`]:{marginInlineEnd:"auto"}}),[`${e}-collapsible-header`]:{cursor:"default",[`${e}-header-text`]:{flex:"none",cursor:"pointer"}},[`${e}-collapsible-icon`]:{cursor:"unset",[`${e}-expand-icon`]:{cursor:"pointer"}}},[`${e}-content`]:{color:x,backgroundColor:t,borderTop:R,[`& > ${e}-content-box`]:{padding:S},"&-hidden":{display:"none"}},"&-small":{[`> ${e}-item`]:{[`> ${e}-header`]:{padding:d,paddingInlineStart:E,[`> ${e}-expand-icon`]:{marginInlineStart:n.calc(N).sub(E).equal()}},[`> ${e}-content > ${e}-content-box`]:{padding:N}}},"&-large":{[`> ${e}-item`]:{fontSize:b,lineHeight:$,[`> ${e}-header`]:{padding:r,paddingInlineStart:o,[`> ${e}-expand-icon`]:{height:A,marginInlineStart:n.calc(C).sub(o).equal()}},[`> ${e}-content > ${e}-content-box`]:{padding:C}}},[`${e}-item:last-child`]:{borderBottom:0,[`> ${e}-content`]:{borderRadius:`0 0 ${M(i)} ${M(i)}`}},[`& ${e}-item-disabled > ${e}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:c,cursor:"not-allowed"}},[`&${e}-icon-position-end`]:{[`& > ${e}-item`]:{[`> ${e}-header`]:{[`${e}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:v}}}}})}},xn=n=>{const{componentCls:e}=n,t=`> ${e}-item > ${e}-header ${e}-arrow`;return{[`${e}-rtl`]:{[t]:{transform:"rotate(180deg)"}}}},yn=n=>{const{componentCls:e,headerBg:t,paddingXXS:o,colorBorder:a}=n;return{[`${e}-borderless`]:{backgroundColor:t,border:0,[`> ${e}-item`]:{borderBottom:`1px solid ${a}`},[`
        > ${e}-item:last-child,
        > ${e}-item:last-child ${e}-header
      `]:{borderRadius:0},[`> ${e}-item:last-child`]:{borderBottom:0},[`> ${e}-item > ${e}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${e}-item > ${e}-content > ${e}-content-box`]:{paddingTop:o}}}},bn=n=>{const{componentCls:e,paddingSM:t}=n;return{[`${e}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${e}-item`]:{borderBottom:0,[`> ${e}-content`]:{backgroundColor:"transparent",border:0,[`> ${e}-content-box`]:{paddingBlock:t}}}}}},Cn=n=>({headerPadding:`${n.paddingSM}px ${n.padding}px`,headerBg:n.colorFillAlter,contentPadding:`${n.padding}px 16px`,contentBg:n.colorBgContainer}),$n=re("Collapse",n=>{const e=Te(n,{collapseHeaderPaddingSM:`${M(n.paddingXS)} ${M(n.paddingSM)}`,collapseHeaderPaddingLG:`${M(n.padding)} ${M(n.paddingLG)}`,collapsePanelBorderRadius:n.borderRadiusLG});return[hn(e),yn(e),bn(e),xn(e),Ye(e)]},Cn),In=p.forwardRef((n,e)=>{const{getPrefixCls:t,direction:o,expandIcon:a,className:l,style:d}=ie("collapse"),{prefixCls:r,className:i,rootClassName:u,style:y,bordered:g=!0,ghost:x,size:m,expandIconPosition:c="start",children:b,expandIcon:h}=n,$=Ke(f=>{var O;return(O=m??f)!==null&&O!==void 0?O:"middle"}),v=t("collapse",r),N=t(),[C,E,j]=$n(v),w=p.useMemo(()=>c==="left"?"start":c==="right"?"end":c,[c]),S=h??a,I=p.useCallback(function(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const O=typeof S=="function"?S(f):p.createElement(Qe,{rotate:f.isActive?o==="rtl"?-90:90:void 0,"aria-label":f.isActive?"expanded":"collapsed"});return Y(O,()=>{var k;return{className:_((k=O==null?void 0:O.props)===null||k===void 0?void 0:k.className,`${v}-arrow`)}})},[S,v]),A=_(`${v}-icon-position-${w}`,{[`${v}-borderless`]:!g,[`${v}-rtl`]:o==="rtl",[`${v}-ghost`]:!!x,[`${v}-${$}`]:$!=="middle"},l,i,u,E,j),R=Object.assign(Object.assign({},De(N)),{motionAppear:!1,leavedClassName:`${v}-content-hidden`}),D=p.useMemo(()=>b?me(b).map((f,O)=>{var k,T;const B=f.props;if(B!=null&&B.disabled){const L=(k=f.key)!==null&&k!==void 0?k:String(O),V=Object.assign(Object.assign({},Z(f.props,["disabled"])),{key:L,collapsible:(T=B.collapsible)!==null&&T!==void 0?T:"disabled"});return Y(f,V)}return f}):null,[b]);return C(p.createElement(q,Object.assign({ref:e,openMotion:R},Z(n,["rootClassName"]),{expandIcon:I,prefixCls:v,className:A,style:Object.assign(Object.assign({},d),y)}),D))}),ve=Object.assign(In,{Panel:vn}),{Panel:Sn}=ve,{Title:te,Paragraph:oe,Text:H}=Je,Fn=()=>{const[n]=W.useForm(),[e,t]=p.useState(!1),[o,a]=p.useState([]),l=async r=>{try{t(!0);const i=await Fe.generateFormConfig(r.count);i.success&&(a(i.data),ee.success(`成功生成 ${i.data.length} 个表单配置`))}catch(i){console.error("生成表单配置失败:",i),ee.error("生成表单配置失败")}finally{t(!1)}},d=r=>s.jsxs("div",{style:{marginBottom:"8px",padding:"8px",border:"1px dashed #d9d9d9",borderRadius:"4px"},children:[s.jsxs("div",{children:[s.jsx(H,{strong:!0,children:"字段名称:"})," ",r.name]}),s.jsxs("div",{children:[s.jsx(H,{strong:!0,children:"标签:"})," ",r.label]}),s.jsxs("div",{children:[s.jsx(H,{strong:!0,children:"类型:"})," ",r.type]}),s.jsxs("div",{children:[s.jsx(H,{strong:!0,children:"是否必填:"})," ",r.required?"是":"否"]}),r.placeholder&&s.jsxs("div",{children:[s.jsx(H,{strong:!0,children:"占位符:"})," ",r.placeholder]}),r.defaultValue!==void 0&&s.jsxs("div",{children:[s.jsx(H,{strong:!0,children:"默认值:"})," ",typeof r.defaultValue=="object"?JSON.stringify(r.defaultValue):String(r.defaultValue)]}),r.options&&s.jsxs("div",{children:[s.jsx(H,{strong:!0,children:"选项:"}),s.jsx("ul",{style:{margin:"4px 0",paddingLeft:"20px"},children:r.options.map((i,u)=>s.jsxs("li",{children:[i.label," (",i.value,")"]},u))})]})]},r.name);return s.jsx("div",{children:s.jsxs(Ve,{title:"表单生成器",children:[s.jsx(pe,{message:"表单生成器",description:"这个工具可以帮助你生成多种表单组合，用于测试和开发。你可以指定要生成的表单数量，最多可以生成1000个不同的表单配置。",type:"info",showIcon:!0,style:{marginBottom:"24px"}}),s.jsxs(W,{form:n,onFinish:l,initialValues:{count:10},layout:"inline",children:[s.jsx(W.Item,{name:"count",label:"生成数量",rules:[{required:!0,message:"请输入要生成的表单数量"},{type:"number",min:1,max:1e3,message:"数量必须在1-1000之间"}],children:s.jsx(Xe,{min:1,max:1e3})}),s.jsx(W.Item,{children:s.jsx(Le,{type:"primary",htmlType:"submit",loading:e,children:"生成表单"})})]}),s.jsx(qe,{}),e?s.jsx("div",{style:{textAlign:"center",padding:"40px 0"},children:s.jsx(Ge,{size:"large",tip:"正在生成表单配置..."})}):o.length>0?s.jsxs("div",{children:[s.jsxs(te,{level:4,children:["已生成 ",o.length," 个表单配置"]}),s.jsx(oe,{children:"以下是生成的表单配置，你可以点击展开查看详情。每个表单都有不同的字段组合和验证规则。"}),s.jsx(ve,{children:o.map((r,i)=>s.jsx(Sn,{header:`表单 ${i+1}: ${r.name}`,children:s.jsxs("div",{children:[s.jsxs(te,{level:5,children:["表单名称: ",r.name]}),s.jsxs(oe,{children:["字段数量: ",r.fields.length]}),s.jsxs("div",{style:{marginTop:"16px"},children:[s.jsx(H,{strong:!0,children:"表单字段:"}),s.jsx("div",{style:{marginTop:"8px"},children:r.fields.map(u=>d(u))})]})]})},i))})]}):s.jsx("div",{style:{textAlign:"center",padding:"40px 0",color:"#999"},children:s.jsx("p",{children:'点击"生成表单"按钮开始生成表单配置'})})]})})};export{Fn as default};
