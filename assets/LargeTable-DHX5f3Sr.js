import{a1 as pt,r as L,_ as vt,a2 as Y,j as T,S as gt,B as G,X as It}from"./index-DNKwSigP.js";import{R as wt}from"./roundedArrow-lmzeC9YX.js";import{C as St}from"./index-ju4Agrhi.js";import{S as Ct}from"./index-DJwFW-wy.js";import{I as xt}from"./index-BEW0C3a_.js";import{R as Rt}from"./SearchOutlined-BoZBueDv.js";import{R as Mt}from"./ReloadOutlined-BVNyfYyl.js";import{F as Tt}from"./Table-CviPWcWE.js";import"./EllipsisOutlined-BvIdc74o.js";import"./useVariants-DGRfSi4p.js";import"./index-5mpMU4X_.js";import"./TextArea-BLZ2eM8T.js";import"./styleChecker-BtChOqs9.js";import"./index-C4_E_p9z.js";import"./PurePanel-CuWGgxen.js";import"./useIcons-B87gjmAx.js";import"./DownOutlined-DHwEt_XM.js";import"./index-CDSZdq6m.js";import"./useBubbleLock-Km5IXhiq.js";import"./index-CwPdWqEn.js";import"./LeftOutlined-e1Y9aKzm.js";import"./RightOutlined-BjygEm6M.js";import"./index-CVwkEasZ.js";import"./Sider-Zob35Zsc.js";import"./collapse-BbEVqHco.js";import"./index-AnwF1dWy.js";import"./Pagination-DwGNua8v.js";function yt(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,pt(o,t)}var tt=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function bt(o,t){return!!(o===t||tt(o)&&tt(t))}function Lt(o,t){if(o.length!==t.length)return!1;for(var r=0;r<o.length;r++)if(!bt(o[r],t[r]))return!1;return!0}function X(o,t){t===void 0&&(t=Lt);var r,n=[],i,s=!1;function a(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return s&&r===this&&t(l,n)||(i=o.apply(this,l),s=!0,r=this,n=l),i}return a}var Ot=typeof performance=="object"&&typeof performance.now=="function",et=Ot?function(){return performance.now()}:function(){return Date.now()};function rt(o){cancelAnimationFrame(o.id)}function zt(o,t){var r=et();function n(){et()-r>=t?o.call(null):i.id=requestAnimationFrame(n)}var i={id:requestAnimationFrame(n)};return i}var Z=-1;function _t(o){if(o===void 0&&(o=!1),Z===-1||o){var t=document.createElement("div"),r=t.style;r.width="50px",r.height="50px",r.overflow="scroll",document.body.appendChild(t),Z=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return Z}var N=null;function ot(o){if(o===void 0&&(o=!1),N===null||o){var t=document.createElement("div"),r=t.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";var n=document.createElement("div"),i=n.style;return i.width="100px",i.height="100px",t.appendChild(n),document.body.appendChild(t),t.scrollLeft>0?N="positive-descending":(t.scrollLeft=1,t.scrollLeft===0?N="negative":N="positive-ascending"),document.body.removeChild(t),N}return N}var At=150,Wt=function(t){var r=t.columnIndex;t.data;var n=t.rowIndex;return n+":"+r};function Ft(o){var t,r=o.getColumnOffset,n=o.getColumnStartIndexForOffset,i=o.getColumnStopIndexForStartIndex,s=o.getColumnWidth,a=o.getEstimatedTotalHeight,l=o.getEstimatedTotalWidth,d=o.getOffsetForColumnAndAlignment,v=o.getOffsetForRowAndAlignment,p=o.getRowHeight,h=o.getRowOffset,R=o.getRowStartIndexForOffset,y=o.getRowStopIndexForStartIndex,k=o.initInstanceProps,D=o.shouldResetStyleCacheOnItemSizeChange,_=o.validateProps;return t=function(j){yt(H,j);function H(O){var e;return e=j.call(this,O)||this,e._instanceProps=k(e.props,Y(e)),e._resetIsScrollingTimeoutId=null,e._outerRef=void 0,e.state={instance:Y(e),isScrolling:!1,horizontalScrollDirection:"forward",scrollLeft:typeof e.props.initialScrollLeft=="number"?e.props.initialScrollLeft:0,scrollTop:typeof e.props.initialScrollTop=="number"?e.props.initialScrollTop:0,scrollUpdateWasRequested:!1,verticalScrollDirection:"forward"},e._callOnItemsRendered=void 0,e._callOnItemsRendered=X(function(u,c,f,g,m,I,S,M){return e.props.onItemsRendered({overscanColumnStartIndex:u,overscanColumnStopIndex:c,overscanRowStartIndex:f,overscanRowStopIndex:g,visibleColumnStartIndex:m,visibleColumnStopIndex:I,visibleRowStartIndex:S,visibleRowStopIndex:M})}),e._callOnScroll=void 0,e._callOnScroll=X(function(u,c,f,g,m){return e.props.onScroll({horizontalScrollDirection:f,scrollLeft:u,scrollTop:c,verticalScrollDirection:g,scrollUpdateWasRequested:m})}),e._getItemStyle=void 0,e._getItemStyle=function(u,c){var f=e.props,g=f.columnWidth,m=f.direction,I=f.rowHeight,S=e._getItemStyleCache(D&&g,D&&m,D&&I),M=u+":"+c,C;if(S.hasOwnProperty(M))C=S[M];else{var x=r(e.props,c,e._instanceProps),w=m==="rtl";S[M]=C={position:"absolute",left:w?void 0:x,right:w?x:void 0,top:h(e.props,u,e._instanceProps),height:p(e.props,u,e._instanceProps),width:s(e.props,c,e._instanceProps)}}return C},e._getItemStyleCache=void 0,e._getItemStyleCache=X(function(u,c,f){return{}}),e._onScroll=function(u){var c=u.currentTarget,f=c.clientHeight,g=c.clientWidth,m=c.scrollLeft,I=c.scrollTop,S=c.scrollHeight,M=c.scrollWidth;e.setState(function(C){if(C.scrollLeft===m&&C.scrollTop===I)return null;var x=e.props.direction,w=m;if(x==="rtl")switch(ot()){case"negative":w=-m;break;case"positive-descending":w=M-g-m;break}w=Math.max(0,Math.min(w,M-g));var b=Math.max(0,Math.min(I,S-f));return{isScrolling:!0,horizontalScrollDirection:C.scrollLeft<m?"forward":"backward",scrollLeft:w,scrollTop:b,verticalScrollDirection:C.scrollTop<I?"forward":"backward",scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._outerRefSetter=function(u){var c=e.props.outerRef;e._outerRef=u,typeof c=="function"?c(u):c!=null&&typeof c=="object"&&c.hasOwnProperty("current")&&(c.current=u)},e._resetIsScrollingDebounced=function(){e._resetIsScrollingTimeoutId!==null&&rt(e._resetIsScrollingTimeoutId),e._resetIsScrollingTimeoutId=zt(e._resetIsScrolling,At)},e._resetIsScrolling=function(){e._resetIsScrollingTimeoutId=null,e.setState({isScrolling:!1},function(){e._getItemStyleCache(-1)})},e}H.getDerivedStateFromProps=function(e,u){return Et(e,u),_(e),null};var A=H.prototype;return A.scrollTo=function(e){var u=e.scrollLeft,c=e.scrollTop;u!==void 0&&(u=Math.max(0,u)),c!==void 0&&(c=Math.max(0,c)),this.setState(function(f){return u===void 0&&(u=f.scrollLeft),c===void 0&&(c=f.scrollTop),f.scrollLeft===u&&f.scrollTop===c?null:{horizontalScrollDirection:f.scrollLeft<u?"forward":"backward",scrollLeft:u,scrollTop:c,scrollUpdateWasRequested:!0,verticalScrollDirection:f.scrollTop<c?"forward":"backward"}},this._resetIsScrollingDebounced)},A.scrollToItem=function(e){var u=e.align,c=u===void 0?"auto":u,f=e.columnIndex,g=e.rowIndex,m=this.props,I=m.columnCount,S=m.height,M=m.rowCount,C=m.width,x=this.state,w=x.scrollLeft,b=x.scrollTop,z=_t();f!==void 0&&(f=Math.max(0,Math.min(f,I-1))),g!==void 0&&(g=Math.max(0,Math.min(g,M-1)));var W=a(this.props,this._instanceProps),F=l(this.props,this._instanceProps),P=F>C?z:0,U=W>S?z:0;this.scrollTo({scrollLeft:f!==void 0?d(this.props,f,c,w,this._instanceProps,U):w,scrollTop:g!==void 0?v(this.props,g,c,b,this._instanceProps,P):b})},A.componentDidMount=function(){var e=this.props,u=e.initialScrollLeft,c=e.initialScrollTop;if(this._outerRef!=null){var f=this._outerRef;typeof u=="number"&&(f.scrollLeft=u),typeof c=="number"&&(f.scrollTop=c)}this._callPropsCallbacks()},A.componentDidUpdate=function(){var e=this.props.direction,u=this.state,c=u.scrollLeft,f=u.scrollTop,g=u.scrollUpdateWasRequested;if(g&&this._outerRef!=null){var m=this._outerRef;if(e==="rtl")switch(ot()){case"negative":m.scrollLeft=-c;break;case"positive-ascending":m.scrollLeft=c;break;default:var I=m.clientWidth,S=m.scrollWidth;m.scrollLeft=S-I-c;break}else m.scrollLeft=Math.max(0,c);m.scrollTop=Math.max(0,f)}this._callPropsCallbacks()},A.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&rt(this._resetIsScrollingTimeoutId)},A.render=function(){var e=this.props,u=e.children,c=e.className,f=e.columnCount,g=e.direction,m=e.height,I=e.innerRef,S=e.innerElementType,M=e.innerTagName,C=e.itemData,x=e.itemKey,w=x===void 0?Wt:x,b=e.outerElementType,z=e.outerTagName,W=e.rowCount,F=e.style,P=e.useIsScrolling,U=e.width,B=this.state.isScrolling,V=this._getHorizontalRangeToRender(),K=V[0],dt=V[1],J=this._getVerticalRangeToRender(),ut=J[0],mt=J[1],Q=[];if(f>0&&W)for(var $=ut;$<=mt;$++)for(var q=K;q<=dt;q++)Q.push(L.createElement(u,{columnIndex:q,data:C,isScrolling:P?B:void 0,key:w({columnIndex:q,data:C,rowIndex:$}),rowIndex:$,style:this._getItemStyle($,q)}));var ft=a(this.props,this._instanceProps),ht=l(this.props,this._instanceProps);return L.createElement(b||z||"div",{className:c,onScroll:this._onScroll,ref:this._outerRefSetter,style:vt({position:"relative",height:m,width:U,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:g},F)},L.createElement(S||M||"div",{children:Q,ref:I,style:{height:ft,pointerEvents:B?"none":void 0,width:ht}}))},A._callPropsCallbacks=function(){var e=this.props,u=e.columnCount,c=e.onItemsRendered,f=e.onScroll,g=e.rowCount;if(typeof c=="function"&&u>0&&g>0){var m=this._getHorizontalRangeToRender(),I=m[0],S=m[1],M=m[2],C=m[3],x=this._getVerticalRangeToRender(),w=x[0],b=x[1],z=x[2],W=x[3];this._callOnItemsRendered(I,S,w,b,M,C,z,W)}if(typeof f=="function"){var F=this.state,P=F.horizontalScrollDirection,U=F.scrollLeft,B=F.scrollTop,V=F.scrollUpdateWasRequested,K=F.verticalScrollDirection;this._callOnScroll(U,B,P,K,V)}},A._getHorizontalRangeToRender=function(){var e=this.props,u=e.columnCount,c=e.overscanColumnCount,f=e.overscanColumnsCount,g=e.overscanCount,m=e.rowCount,I=this.state,S=I.horizontalScrollDirection,M=I.isScrolling,C=I.scrollLeft,x=c||f||g||1;if(u===0||m===0)return[0,0,0,0];var w=n(this.props,C,this._instanceProps),b=i(this.props,w,C,this._instanceProps),z=!M||S==="backward"?Math.max(1,x):1,W=!M||S==="forward"?Math.max(1,x):1;return[Math.max(0,w-z),Math.max(0,Math.min(u-1,b+W)),w,b]},A._getVerticalRangeToRender=function(){var e=this.props,u=e.columnCount,c=e.overscanCount,f=e.overscanRowCount,g=e.overscanRowsCount,m=e.rowCount,I=this.state,S=I.isScrolling,M=I.verticalScrollDirection,C=I.scrollTop,x=f||g||c||1;if(u===0||m===0)return[0,0,0,0];var w=R(this.props,C,this._instanceProps),b=y(this.props,w,C,this._instanceProps),z=!S||M==="backward"?Math.max(1,x):1,W=!S||M==="forward"?Math.max(1,x):1;return[Math.max(0,w-z),Math.max(0,Math.min(m-1,b+W)),w,b]},H}(L.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,useIsScrolling:!1},t}var Et=function(t,r){t.children,t.direction,t.height,t.innerTagName,t.outerTagName,t.overscanColumnsCount,t.overscanCount,t.overscanRowsCount,t.width,r.instance},nt=50,lt=function(t,r){var n=t.rowCount,i=r.rowMetadataMap,s=r.estimatedRowHeight,a=r.lastMeasuredRowIndex,l=0;if(a>=n&&(a=n-1),a>=0){var d=i[a];l=d.offset+d.size}var v=n-a-1,p=v*s;return l+p},st=function(t,r){var n=t.columnCount,i=r.columnMetadataMap,s=r.estimatedColumnWidth,a=r.lastMeasuredColumnIndex,l=0;if(a>=n&&(a=n-1),a>=0){var d=i[a];l=d.offset+d.size}var v=n-a-1,p=v*s;return l+p},E=function(t,r,n,i){var s,a,l;if(t==="column"?(s=i.columnMetadataMap,a=r.columnWidth,l=i.lastMeasuredColumnIndex):(s=i.rowMetadataMap,a=r.rowHeight,l=i.lastMeasuredRowIndex),n>l){var d=0;if(l>=0){var v=s[l];d=v.offset+v.size}for(var p=l+1;p<=n;p++){var h=a(p);s[p]={offset:d,size:h},d+=h}t==="column"?i.lastMeasuredColumnIndex=n:i.lastMeasuredRowIndex=n}return s[n]},at=function(t,r,n,i){var s,a;t==="column"?(s=n.columnMetadataMap,a=n.lastMeasuredColumnIndex):(s=n.rowMetadataMap,a=n.lastMeasuredRowIndex);var l=a>0?s[a].offset:0;return l>=i?ct(t,r,n,a,0,i):kt(t,r,n,Math.max(0,a),i)},ct=function(t,r,n,i,s,a){for(;s<=i;){var l=s+Math.floor((i-s)/2),d=E(t,r,l,n).offset;if(d===a)return l;d<a?s=l+1:d>a&&(i=l-1)}return s>0?s-1:0},kt=function(t,r,n,i,s){for(var a=t==="column"?r.columnCount:r.rowCount,l=1;i<a&&E(t,r,i,n).offset<s;)i+=l,l*=2;return ct(t,r,n,Math.min(i,a-1),Math.floor(i/2),s)},it=function(t,r,n,i,s,a,l){var d=t==="column"?r.width:r.height,v=E(t,r,n,a),p=t==="column"?st(r,a):lt(r,a),h=Math.max(0,Math.min(p-d,v.offset)),R=Math.max(0,v.offset-d+l+v.size);switch(i==="smart"&&(s>=R-d&&s<=h+d?i="auto":i="center"),i){case"start":return h;case"end":return R;case"center":return Math.round(R+(h-R)/2);case"auto":default:return s>=R&&s<=h?s:R>h||s<R?R:h}},jt=Ft({getColumnOffset:function(t,r,n){return E("column",t,r,n).offset},getColumnStartIndexForOffset:function(t,r,n){return at("column",t,n,r)},getColumnStopIndexForStartIndex:function(t,r,n,i){for(var s=t.columnCount,a=t.width,l=E("column",t,r,i),d=n+a,v=l.offset+l.size,p=r;p<s-1&&v<d;)p++,v+=E("column",t,p,i).size;return p},getColumnWidth:function(t,r,n){return n.columnMetadataMap[r].size},getEstimatedTotalHeight:lt,getEstimatedTotalWidth:st,getOffsetForColumnAndAlignment:function(t,r,n,i,s,a){return it("column",t,r,n,i,s,a)},getOffsetForRowAndAlignment:function(t,r,n,i,s,a){return it("row",t,r,n,i,s,a)},getRowOffset:function(t,r,n){return E("row",t,r,n).offset},getRowHeight:function(t,r,n){return n.rowMetadataMap[r].size},getRowStartIndexForOffset:function(t,r,n){return at("row",t,n,r)},getRowStopIndexForStartIndex:function(t,r,n,i){for(var s=t.rowCount,a=t.height,l=E("row",t,r,i),d=n+a,v=l.offset+l.size,p=r;p<s-1&&v<d;)p++,v+=E("row",t,p,i).size;return p},initInstanceProps:function(t,r){var n=t,i=n.estimatedColumnWidth,s=n.estimatedRowHeight,a={columnMetadataMap:{},estimatedColumnWidth:i||nt,estimatedRowHeight:s||nt,lastMeasuredColumnIndex:-1,lastMeasuredRowIndex:-1,rowMetadataMap:{}};return r.resetAfterColumnIndex=function(l,d){d===void 0&&(d=!0),r.resetAfterIndices({columnIndex:l,shouldForceUpdate:d})},r.resetAfterRowIndex=function(l,d){d===void 0&&(d=!0),r.resetAfterIndices({rowIndex:l,shouldForceUpdate:d})},r.resetAfterIndices=function(l){var d=l.columnIndex,v=l.rowIndex,p=l.shouldForceUpdate,h=p===void 0?!0:p;typeof d=="number"&&(a.lastMeasuredColumnIndex=Math.min(a.lastMeasuredColumnIndex,d-1)),typeof v=="number"&&(a.lastMeasuredRowIndex=Math.min(a.lastMeasuredRowIndex,v-1)),r._getItemStyleCache(-1),h&&r.forceUpdate()},a},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.columnWidth,t.rowHeight}});const Ht=o=>{const{columns:t,scroll:r}=o,[n,i]=L.useState(0),s=t.filter(({width:h})=>!h).length,a=t.map(h=>h.width?h:{...h,width:Math.floor(n/s)}),l=L.useRef(null),[d]=L.useState(()=>{const h={};return Object.defineProperty(h,"scrollLeft",{get:()=>{var R,y;return l.current?(y=(R=l.current)==null?void 0:R.state)==null?void 0:y.scrollLeft:null},set:R=>{l.current&&l.current.scrollTo({scrollLeft:R})}}),h}),v=()=>{var h;(h=l.current)==null||h.resetAfterIndices({columnIndex:0,rowIndex:0,shouldForceUpdate:!0})};L.useEffect(()=>v,[n]);const p=(h,{scrollbarSize:R,ref:y,onScroll:k})=>{y.current=d;const D=h.length*54;return T.jsx(jt,{ref:l,className:"virtual-grid",columnCount:a.length,columnWidth:_=>{const{width:j}=a[_];return D>r.y&&_===a.length-1?j-R-1:j},height:r.y,rowCount:h.length,rowHeight:()=>54,width:n,onScroll:({scrollLeft:_})=>{k({scrollLeft:_})},children:({columnIndex:_,rowIndex:j,style:H})=>T.jsx("div",{className:`virtual-table-cell ${_===a.length-1?"virtual-table-cell-last":""}`,style:H,children:h[j][a[_].dataIndex]})})};return T.jsx(wt,{onResize:({width:h})=>{i(h)},children:T.jsx(Tt,{...o,className:"virtual-table",columns:a,pagination:!1,components:{body:p}})})},me=()=>{const[o,t]=L.useState([]),[r,n]=L.useState(!0),[i,s]=L.useState(""),[a,l]=L.useState([]),d=[{title:"ID",dataIndex:"id",key:"id",width:80},{title:"姓名",dataIndex:"name",key:"name",width:120},{title:"年龄",dataIndex:"age",key:"age",width:80},{title:"地址",dataIndex:"address",key:"address",width:200},{title:"邮箱",dataIndex:"email",key:"email",width:200},{title:"电话",dataIndex:"phone",key:"phone",width:150},{title:"状态",dataIndex:"status",key:"status",width:100},{title:"创建时间",dataIndex:"createdAt",key:"createdAt",width:180},{title:"更新时间",dataIndex:"updatedAt",key:"updatedAt",width:180}],v=async()=>{try{n(!0);const y=await It.getLargeData({current:1,pageSize:1e5});y.success&&(t(y.data.list),l(y.data.list))}catch(y){console.error("获取表格数据失败:",y)}finally{n(!1)}};L.useEffect(()=>{v()},[]);const p=()=>{if(!i){l(o);return}const y=o.filter(k=>k.name.toLowerCase().includes(i.toLowerCase())||k.address.toLowerCase().includes(i.toLowerCase())||k.email.toLowerCase().includes(i.toLowerCase()));l(y)},h=()=>{s(""),l(o)},R=()=>{v()};return r?T.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"400px"},children:T.jsx(gt,{size:"large",tip:"加载中..."})}):T.jsx("div",{children:T.jsxs(St,{title:"大数据表格 (10万行)",extra:T.jsx(G,{icon:T.jsx(Mt,{}),onClick:R,children:"刷新"}),children:[T.jsx("div",{style:{marginBottom:16},children:T.jsxs(Ct,{children:[T.jsx(xt,{placeholder:"搜索姓名、地址或邮箱",value:i,onChange:y=>s(y.target.value),onPressEnter:p,style:{width:300}}),T.jsx(G,{type:"primary",icon:T.jsx(Rt,{}),onClick:p,children:"搜索"}),T.jsx(G,{onClick:h,children:"重置"})]})}),T.jsx("div",{style:{marginBottom:16},children:T.jsxs("span",{children:["共 ",a.length," 条数据"]})}),T.jsx(Ht,{columns:d,dataSource:a,scroll:{y:500,x:"100vw"},rowKey:"id"})]})})};export{me as default};
