import{H as x}from"./Header-6d717b3a.js";import{a as v}from"./axios-bff3f665.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{r as k,o as n,c as o,a as e,F as a,j as p,e as u,l as c,t,g as f,p as z,h as I}from"./index-52d9b1c1.js";const S={name:"GetInvetory",data(){return{orders:[],p_order:[],details:!1,imgurl:"https://elenora.hu:444/getimage/"}},mounted(){v.get("https://elenora.hu:444/orders/getall").then(_=>this.orders=_.data.r_orders)},methods:{openitemdetails(_){v.get("https://elenora.hu:444/orders/getbyid/"+_).then(i=>this.p_order=i.data),this.details=!0}}},s=_=>(z("data-v-abc364ae"),_=_(),I(),_),T={class:"listprod"},C={cellspacing:"0",cellpadding:"0"},N=s(()=>e("thead",null,[e("tr",null,[e("th",null,"Dátum/rendeles szam"),e("th",null,"Állapot"),e("th",null,"Megrendelő"),e("th",null,"Termék(ek)"),e("th",null,"Összeg"),e("th"),e("th")])],-1)),O=s(()=>e("br",null,null,-1)),F=s(()=>e("td",null,null,-1)),M=s(()=>e("br",null,null,-1)),R={class:"itemname"},V=s(()=>e("td",null,null,-1)),j=["onClick"],B={key:0,class:"details_box"},L={class:"d_container"},q={style:{"text-align":"center"}},w={class:"customer_b"},D={class:"box"},E=s(()=>e("h5",null,"Megrendelő adatai:",-1)),H={class:"flex"},$=s(()=>e("b",null,[e("p",null,"Teljes név:")],-1)),A={class:"flex"},G=s(()=>e("b",null,[e("p",null,"E-mail:")],-1)),U={class:"flex"},J=s(()=>e("b",null,[e("p",null,"Tel.:")],-1)),K={class:"box"},P=s(()=>e("h5",null,"Szállítás, számlázás:",-1)),Q={class:"flex"},W=s(()=>e("b",null,[e("p",null,"helység:")],-1)),X={class:"flex"},Y=s(()=>e("b",null,[e("p",null,"Utca:")],-1)),Z={class:"box"},ee=s(()=>e("h5",null,"Rendelés adatai:",-1)),se={key:0,class:"flex"},te=s(()=>e("b",null,[e("p",null,"Idő:")],-1)),le=s(()=>e("div",{class:"flex"},[e("b",null,[e("p",null,"Státusz:")]),e("p")],-1)),ne=s(()=>e("h4",{style:{"text-align":"center"}},"Rendelt termékek",-1)),oe=["src"],_e=s(()=>e("div",null,null,-1)),de={class:"flex"},ie=s(()=>e("b",null,[e("p",null,"Neve:")],-1)),re={class:"flex"},ce=s(()=>e("b",null,[e("p",null,"Mennyiség:")],-1)),ae={class:"flex"},ue=s(()=>e("b",null,[e("p",null,"Méret:")],-1)),he={class:"flex"},pe=s(()=>e("b",null,[e("p",null,"Ára:")],-1));function me(_,i,b,ge,r,g){const m=k("ion-icon");return n(),o(a,null,[e("section",T,[e("table",C,[N,e("tbody",null,[(n(!0),o(a,null,p(r.orders,l=>(n(),o("tr",{key:l._id},[e("td",null,[c(t(l.createdtime.split("T")[0])+" ",1),O,c(" "+t(l.orderid),1)]),F,e("td",null,[c(t(l.u_firstname+" "+l.u_name)+" ",1),M,c(" "+t(l.u_email),1)]),e("td",null,[(n(!0),o(a,null,p(l.cart,(d,h)=>(n(),o("h6",R,t(d.name),1))),256))]),e("td",null,t(l.cart.reduce((d,h)=>d+h.price*h.quantity,0))+" Ft ",1),V,e("td",{onClick:d=>g.openitemdetails(l._id)},[u(m,{name:"eye-outline"})],8,j)]))),128))])])]),r.details?(n(),o("section",B,[e("div",L,[u(m,{onClick:i[0]||(i[0]=l=>r.details=!r.details),style:{"font-size":"24pt",position:"sticky",top:"0"},name:"close-outline"}),e("h3",q,[c(" Rendekés összesítő - "),e("i",null,t(this.p_order.orderid),1)]),e("div",w,[e("div",D,[E,e("div",H,[$,e("p",null,t(this.p_order.u_firstname)+" "+t(this.p_order.u_name),1)]),e("div",A,[G,e("p",null,t(this.p_order.u_email),1)]),e("div",U,[J,e("p",null,t(this.p_order.u_tel),1)])]),e("div",K,[P,e("div",Q,[W,e("p",null,t(this.p_order.u_postnumber)+", "+t(this.p_order.u_city),1)]),e("div",X,[Y,e("p",null,t(this.p_order.u_addresse),1)])]),e("div",Z,[ee,this.p_order.createdtime?(n(),o("div",se,[te,e("p",null,t(this.p_order.createdtime.split("T")[0]),1)])):f("",!0),le])]),e("div",null,[ne,(n(!0),o(a,null,p(this.p_order.cart,(l,d)=>(n(),o("div",{class:"cartprod",key:d},[e("img",{class:"prodimg",src:r.imgurl+l.img},null,8,oe),_e,e("div",null,[e("div",de,[ie,e("p",null,t(l.name),1)]),e("div",re,[ce,e("p",null,t(l.quantity),1)]),e("div",ae,[ue,e("p",null,t(l.size),1)]),e("div",he,[pe,e("p",null,t(l.price)+" Ft",1)])])]))),128))])])])):f("",!0)],64)}const ve=y(S,[["render",me],["__scopeId","data-v-abc364ae"]]);const fe=e("h1",{class:"title"},"Rendelések",-1),be={data(){return{showAdd:!1}}},Ie=Object.assign(be,{__name:"Orders",setup(_){return(i,b)=>(n(),o(a,null,[u(x),fe,e("main",null,[u(ve)])],64))}});export{Ie as default};
