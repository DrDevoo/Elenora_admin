import{H as m}from"./Header-0ce778d7.js";import{a as f}from"./axios-bff3f665.js";import{_ as r}from"./_plugin-vue_export-helper-c27b6911.js";import{o,c as n,a as t,F as _,j as g,t as a,p as c,e as p,f as d}from"./index-d2ec8250.js";const v={name:"GetInvetory",data(){return{products:[]}},mounted(){f.get("https://egoncompany.hu:444/invetory/getall").then(e=>this.products=e.data)}},l=e=>(c("data-v-2b34d037"),e=e(),p(),e),y={class:"listprod"},b={cellspacing:"0",cellpadding:"0"},x=l(()=>t("thead",null,[t("tr",null,[t("th",null,"Dátum"),t("th",null,"Állapot"),t("th",null,"Megrendelő"),t("th",null,"Termék(ek)"),t("th",null,"Összeg"),t("th"),t("th")])],-1)),I=l(()=>t("td",null,"0",-1)),k=l(()=>t("td",null,"+ /-",-1));function O(e,u,i,L,h,j){return o(),n("section",y,[t("table",b,[x,t("tbody",null,[(o(!0),n(_,null,g(h.products,s=>(o(),n("tr",{key:s._id},[t("td",null,a(s.prodname),1),t("td",null,a(s.price)+" Ft",1),t("td",null,a(s.collections),1),I,k]))),128))])])])}const $=r(v,[["render",O],["__scopeId","data-v-2b34d037"]]);const S=e=>(c("data-v-63b25480"),e=e(),p(),e),w=S(()=>t("h1",{class:"title"},"Rendelések",-1)),B={data(){return{showAdd:!1}}},F=Object.assign(B,{__name:"Orders",setup(e){return(u,i)=>(o(),n(_,null,[d(m),w,t("main",null,[d($)])],64))}}),z=r(F,[["__scopeId","data-v-63b25480"]]);export{z as default};
