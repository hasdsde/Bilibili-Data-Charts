import{ab as v,r as i,u as g,ac as m,ai as b,aq as s,ar as r,ad as w,as as y,ag as u,ae as c,a8 as B,N as C,ah as x}from"./index.8befc074.js";import{u as k,Q as F,i as S,a as D,b as N,c as q,d as A,S as E,e as Q,U as V}from"./index.esm.min.693d1109.js";import{a as $}from"./axios.c5028208.js";import"./QCardSection.2d2ea643.js";import"./use-dark.f161162c.js";import"./format.9e780ee0.js";import"./use-timeout.7d9ad920.js";const P={class:"q-mt-lg tmp"},T={class:"row"},j=s("div",{class:"col-1"},null,-1),z={class:"col-6"},O=s("div",{class:"col-1"},null,-1),U={class:"q-pa-md fit row wrap justify-center items-center content-center"},R=v({__name:"BiliSort",setup(H){k([S,D,N,q,A]);let l=[],o=[],n=i([]);$.get("/bili_bangumi_sort").then(t=>{l=Object.keys(t.data);for(let a in l){const e=l[a];o.push({name:e,value:t.data[e]})}console.log(o),n.value=_(o)});function _(t){return t.sort((a,e)=>e.value-a.value),t.forEach((a,e)=>{a.index=e}),t}const p={sortby:"score",rowsPerPage:"50"};B(V,"white");let d=i(!0);g(()=>{d.value=!1});const f=i({title:{text:"\u756A\u5267\u7C7B\u578B\u5206\u7C7B",left:"center"},tooltip:{trigger:"item"},legend:{left:"center",top:"5%"},series:[{name:"\u89C6\u9891\u6570\u91CF(\u5355\u4F4D\uFF1A\u4E2A)",type:"pie",radius:"50%",data:n,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}),h=[{name:"index",label:"#",field:"index",align:"center"},{name:"name",required:!0,label:"\u6807\u9898",align:"center",field:"name",sortable:!0},{name:"count",align:"center",label:"\u6570\u91CF",field:"value",sortable:!0}];return(t,a)=>(m(),b("div",P,[s("div",T,[j,s("div",z,[r(d)?(m(),w(r(E),{key:0,class:"chart",option:f.value,autoresize:""},null,8,["option"])):y("",!0)]),O]),s("div",U,[u(F,{style:{width:"30vw"},title:"\u756A\u5267\u5206\u7C7B\u4FE1\u606F",rows:r(n),columns:h,pagination:p,"row-key":"index"},{"body-cell-link":c(e=>[u(Q,{props:e},{default:c(()=>[u(C,{color:"primary",size:"sm",href:e.value,target:"_blank"},{default:c(()=>[x("\u8DF3\u8F6C")]),_:2},1032,["href"])]),_:2},1032,["props"])]),_:1},8,["rows"])])]))}});export{R as default};
