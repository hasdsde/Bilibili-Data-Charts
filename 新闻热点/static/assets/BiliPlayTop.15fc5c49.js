import{ab as g,r as o,v,ac as c,ai as F,aq as a,ar as s,ad as w,as as y,ag as n,ae as i,a8 as E,N as D,ah as k}from"./index.59bf5afc.js";import{u as A,Q as C,i as B,a as x,b as N,c as T,d as S,S as P,e as V,U as q}from"./index.esm.min.1a15a494.js";import{a as Q}from"./axios.69e829fa.js";import"./format.48f854e4.js";import"./use-timeout.7c71c578.js";const $={class:"q-mt-lg tmp"},z={class:"row"},U=a("div",{class:"col-1"},null,-1),L={class:"col-6"},W=a("div",{class:"col-1"},null,-1),j={class:"q-pa-md fit row wrap justify-center items-center content-center"},K=g({__name:"BiliPlayTop",setup(I){A([B,x,N,T,S]);let u=o(!0);v(()=>{u.value=!1,console.log("onUnmounted")});const p={sortby:"score",rowsPerPage:"50"};let d=[],l=o([]);Q.get("/bili_bangumi_list").then(t=>{d=t.data,l.value=f(d.data.list)});function f(t){const r=[];return t.forEach((e,b)=>{if(e.order.includes("\u4EBF")){e.order=e.order.replace(/[^0-9.]/ig,"");const h=Number.parseFloat(e.order)*1e4;e.order=h.toString()}e.order=e.order.replace(/[^0-9.]/ig,""),r.push({name:e.title,value:Number.parseFloat(e.order),link:e.link,score:e.score,index:b})}),r}E(q,"white");const _=o({title:{text:"\u756A\u5267 Top250 \u64AD\u653E\u91CF\u5360\u6BD4",left:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:["Direct","Email","Ad Networks","Video Ads","Search Engines"]},series:[{name:"\u64AD\u653E\u91CF(\u5355\u4F4D\uFF1A\u4E07)",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:40,fontWeight:"bold"}},labelLine:{show:!1},data:l}]}),m=[{name:"index",label:"#",field:"index",align:"center"},{name:"name",required:!0,label:"\u6807\u9898",align:"left",field:"name",sortable:!0},{name:"\u64AD\u653E\u91CF(\u5355\u4F4D\uFF1A\u4E07)",align:"center",label:"\u64AD\u653E\u91CF(\u5355\u4F4D\uFF1A\u4E07)",field:"value",sortable:!0},{name:"\u8BC4\u5206",label:"\u8BC4\u5206",field:"score",sortable:!0},{name:"link",label:"\u94FE\u63A5",field:"link",align:"center"}];return(t,r)=>(c(),F("div",$,[a("div",z,[U,a("div",L,[s(u)?(c(),w(s(P),{key:0,class:"chart",option:_.value,autoresize:""},null,8,["option"])):y("",!0)]),W]),a("div",j,[n(C,{style:{width:"50vw"},title:"\u756A\u5267Top250\u4FE1\u606F",rows:s(l),columns:m,pagination:p,"row-key":"index"},{"body-cell-link":i(e=>[n(V,{props:e},{default:i(()=>[n(D,{color:"primary",size:"sm",href:e.value,target:"_blank"},{default:i(()=>[k("\u8DF3\u8F6C")]),_:2},1032,["href"])]),_:2},1032,["props"])]),_:1},8,["rows"])])]))}});export{K as default};
