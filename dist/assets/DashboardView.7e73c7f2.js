import{c as e,d as s,e as t,t as m,f as g,r as y,F as p,g as f,b as S,A as v,h as A,i as d,j as h,k}from"./index.26264214.js";const b={class:"track"},T=["src"],$={__name:"Track",props:{name:String,image:String},setup(c){return(a,n)=>(e(),s("li",b,[t("img",{src:c.image},null,8,T),t("p",null,m(c.name),1)]))}};const x=t("h2",{class:"green"},"Recently Played Artists",-1),C=["onClick"],B={__name:"Sidebar",setup(c){const a=g(),n=y([]);function i(){n.value=a.getArtists}function r(u){a.selectArtist(u)}function o(){a.selectArtist()}return i(),(u,l)=>(e(),s("aside",null,[x,t("ul",null,[(e(!0),s(p,null,f(n.value,_=>(e(),s("li",{key:_.id},[t("a",{onClick:D=>r(_.id)},m(_.name),9,C)]))),128))]),t("button",{type:"button",onClick:o},"Clear")]))}},F={class:"dashboard"},P={key:1},V={class:"tracks-container"},R={__name:"DashboardView",setup(c){const a="Recently played tracks",n=S(),i=g();v.getTracks(n.spotifyParams.accessToken).then(o=>{i.setPlayedTracks(o.items)});const r=A(()=>i.getTracks);return(o,u)=>(e(),s("div",F,[d(r).length>0?(e(),h(B,{key:0})):k("",!0),d(r).length>0?(e(),s("div",P,[t("h1",{class:"green"},m(a)),t("ul",V,[(e(!0),s(p,null,f(d(r),l=>(e(),h($,{key:l.track.id,name:l.track.name,image:l.track.album.images[1].url},null,8,["name","image"]))),128))])])):k("",!0)]))}};export{R as default};
