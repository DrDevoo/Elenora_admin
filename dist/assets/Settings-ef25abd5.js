import{o as l,c as u,e as d,a as t,b as n,i as p,v as r,F as h}from"./index-349eb41a.js";import{H as m}from"./Header-afaaae18.js";import{a as i}from"./axios-bff3f665.js";import"./_plugin-vue_export-helper-c27b6911.js";const _=t("h1",{class:"title"},"Oldal beállítások",-1),g={class:"s_b"},v=t("h2",null,"Oldal megjelenése",-1),c=t("option",{value:"online"},"Nyitott (alap)",-1),f=t("option",{value:"offline"},"Nem elérhető",-1),S=t("option",{value:"wait"},"Nyitás előtt",-1),y=[c,f,S],T={class:"s_b"},b=t("h2",null,"Fejléc szöveg",-1),z={data(){return{showAdd:!1,siteStatus:null,siteText:null}},methods:{saveStatus(){confirm("Biztos átállítod az oldal státuszát?")&&i.get("https://egoncompany.hu:444/settings/update/status/"+this.siteStatus)},saveText(){confirm("Biztos átállítod az oldal szövegét?")&&i.get("https://egoncompany.hu:444/settings/update/headertitle/"+this.siteText)}},mounted(){i.get("https://egoncompany.hu:444/settings/get/header_title").then(a=>this.siteText=a.data.value),i.get("https://egoncompany.hu:444/settings/get/sitestatus").then(a=>this.siteStatus=a.data.value)}},M=Object.assign(z,{__name:"Settings",setup(a){return(e,s)=>(l(),u(h,null,[d(m),_,t("main",null,[t("div",g,[v,n(t("select",{name:"sitestatus",id:"sitestatus","onUpdate:modelValue":s[0]||(s[0]=o=>e.siteStatus=o)},y,512),[[p,e.siteStatus]]),t("button",{onClick:s[1]||(s[1]=(...o)=>e.saveStatus&&e.saveStatus(...o))},"Mentés")]),t("div",T,[b,n(t("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=o=>e.siteText=o)},null,512),[[r,e.siteText]]),t("button",{onClick:s[3]||(s[3]=(...o)=>e.saveText&&e.saveText(...o))},"Mentés")])])],64))}});export{M as default};
