import{o as d,c as u,f as p,a as t,b as l,i as _,v as r,F as h,p as m,e as c}from"./index-d2ec8250.js";import{H as g}from"./Header-0ce778d7.js";import{a as n}from"./axios-bff3f665.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const i=e=>(m("data-v-b68cb099"),e=e(),c(),e),f=i(()=>t("h1",{class:"title"},"Oldal beállítások",-1)),S={class:"s_b"},b=i(()=>t("h2",null,"Oldal megjelenése",-1)),y=i(()=>t("option",{value:"online"},"Nyitott (alap)",-1)),T=i(()=>t("option",{value:"offline"},"Nem elérhető",-1)),x=i(()=>t("option",{value:"wait"},"Nyitás előtt",-1)),z=[y,T,x],k={class:"s_b"},B=i(()=>t("h2",null,"Fejléc szöveg",-1)),N={data(){return{showAdd:!1,siteStatus:null,siteText:null}},methods:{saveStatus(){confirm("Biztos átállítod az oldal státuszát?")&&n.get("https://egoncompany.hu:444/settings/update/status/"+this.siteStatus)},saveText(){confirm("Biztos átállítod az oldal szövegét?")&&n.get("https://egoncompany.hu:444/settings/update/headertitle/"+this.siteText)}},mounted(){n.get("https://egoncompany.hu:444/settings/get/header_title").then(e=>this.siteText=e.data.value),n.get("https://egoncompany.hu:444/settings/get/sitestatus").then(e=>this.siteStatus=e.data.value)}},w=Object.assign(N,{__name:"Settings",setup(e){return(s,o)=>(d(),u(h,null,[p(g),f,t("main",null,[t("div",S,[b,l(t("select",{name:"sitestatus",id:"sitestatus","onUpdate:modelValue":o[0]||(o[0]=a=>s.siteStatus=a)},z,512),[[_,s.siteStatus]]),t("button",{onClick:o[1]||(o[1]=(...a)=>s.saveStatus&&s.saveStatus(...a))},"Mentés")]),t("div",k,[B,l(t("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=a=>s.siteText=a)},null,512),[[r,s.siteText]]),t("button",{onClick:o[3]||(o[3]=(...a)=>s.saveText&&s.saveText(...a))},"Mentés")])])],64))}}),F=v(w,[["__scopeId","data-v-b68cb099"]]);export{F as default};
