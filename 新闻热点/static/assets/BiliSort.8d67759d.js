import{ab as v,r as i,v as g,ac as m,ai as b,aq as o,ar as r,ad as w,as as y,ag as u,ae as c,a8 as C,N as x,ah as B}from"./index.59bf5afc.js";import{u as F,Q as k,i as S,a as D,b as N,c as q,d as A,S as E,e as Q,U as T}from"./index.esm.min.1a15a494.js";import{a as V}from"./axios.69e829fa.js";import"./format.48f854e4.js";import"./use-timeout.7c71c578.js";const $={class:"q-mt-lg tmp"},P={class:"row"},U=o("div",{class:"col-1"},null,-1),j={class:"col-6"},z=o("div",{class:"col-1"},null,-1),O={class:"q-pa-md fit row wrap justify-center items-center content-center"},L=v({__name:"BiliSort",setup(H){F([S,D,N,q,A]);let s=[],l=[],n=i([]);V.get("/bili_bangumi_sort").then(t=>{s=Object.keys(t.data),console.log(t.data.\u539F\u521B);for(let a in s){const e=s[a];l.push({name:e,value:t.data[e]})}console.log(l),n.value=_(l)});function _(t){return t.sort((a,e)=>e.value-a.value),t.forEach((a,e)=>{a.index=e}),t}const p={sortby:"score",rowsPerPage:"50"};C(T,"white");let d=i(!0);g(()=>{d.value=!1,console.log("onUnmounted")});const f=i({title:{text:"\u756A\u5267\u5206\u7C7B\u6392\u884C",left:"center"},tooltip:{trigger:"item"},legend:{left:"center",top:"5%"},series:[{name:"\u89C6\u9891\u6570\u91CF(\u5355\u4F4D\uFF1A\u4E2A)",type:"pie",radius:"50%",data:n,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}),h=[{name:"index",label:"#",field:"index",align:"center"},{name:"name",required:!0,label:"\u6807\u9898",align:"center",field:"name",sortable:!0},{name:"count",align:"center",label:"\u6570\u91CF",field:"value",sortable:!0}];return(t,a)=>(m(),b("div",$,[o("div",P,[U,o("div",j,[r(d)?(m(),w(r(E),{key:0,class:"chart",option:f.value,autoresize:""},null,8,["option"])):y("",!0)]),z]),o("div",O,[u(k,{style:{width:"30vw"},title:"\u756A\u5267Top250\u4FE1\u606F",rows:r(n),columns:h,pagination:p,"row-key":"index"},{"body-cell-link":c(e=>[u(Q,{props:e},{default:c(()=>[u(x,{color:"primary",size:"sm",href:e.value,target:"_blank"},{default:c(()=>[B("\u8DF3\u8F6C")]),_:2},1032,["href"])]),_:2},1032,["props"])]),_:1},8,["rows"])])]))}});export{L as default};
