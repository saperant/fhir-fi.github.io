"use strict";(self.webpackChunkfhir_demo_2023=self.webpackChunkfhir_demo_2023||[]).push([[352],{2186:function(e,t,A){A.d(t,{Z:function(){return u}});A(7207);var l=A(7294),r=A(1883),n=A(6226),a=A(3516),g=A(5867),c=A(6774);const s=(0,r.dq)("/");function u(e){let{children:t,location:A}=e;const{search:u,pathname:m}=A,{selectedFeatures:E={}}=l.useContext(g.Ym),d=Object.keys(E).sort(),o=Object.keys(a.D).filter((e=>{var t;return!d.length||(null===(t=a.D[e].features)||void 0===t?void 0:t.some((e=>d.some((t=>t===e)))))})),w=o.indexOf(m.replace(s,"").replaceAll("/","")),B=o.length>1?l.createElement("nav",{className:"prevNext"},l.createElement("div",null,w>0?l.createElement(r.rU,{to:"/"+o[w-1]+u},"Previous ",l.createElement("img",{src:c.Z,alt:""})):l.createElement(r.rU,{to:"/"+o[o.length-1]+u},"Last ",l.createElement("img",{src:c.Z,alt:""}))),l.createElement("div",null,w<o.length-1?l.createElement(r.rU,{to:"/"+o[w+1]+u},"Next ",l.createElement("img",{src:c.Z,alt:""})):l.createElement(r.rU,{to:"/"+o[0]+u},"First",l.createElement("img",{src:c.Z,alt:""})))):null;return l.createElement(n.Z,null,l.createElement("header",null,d.length?l.createElement(l.Fragment,null,l.createElement("hr",null),l.createElement("h3",null,"Showing demos with feature"+(d.length>1?"s":"")+":"),l.createElement(g.ZP,{list:d}),l.createElement("hr",null)):null,B),l.createElement("main",{className:"demo"},t),B,l.createElement("img",{className:"decoration",src:c.Z,alt:""}))}},1981:function(e,t,A){A.r(t),A.d(t,{Head:function(){return g},default:function(){return c}});var l=A(7294),r=A(2186),n=A(5867),a=A(3516);const g=()=>l.createElement("title",null,"FHIR Demo 2023: Buddy Healthcare");function c(e){let{location:t}=e;const A=a.D.buddy.features;return l.createElement(r.Z,{features:A,location:t},l.createElement("h1",null,l.createElement("a",{href:"https://www.buddyhealthcare.com/"},l.createElement("img",{src:"data:image/png;base64,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",alt:"Buddy Healthcare"}))),l.createElement(n.ZP,{list:A}),l.createElement("section",{id:"contact"},l.createElement("h3",null,"Contact"),l.createElement("div",{className:"business-card"},l.createElement("h3",null,"Markus Lind"),l.createElement("p",null,"VP of Product and Business Development"),l.createElement("address",null,l.createElement("a",{href:"mailto:markus@buddyhealthcare.com"},"markus@buddyhealthcare.com")))))}}}]);
//# sourceMappingURL=component---src-pages-buddy-js-eccf454d4105666b38da.js.map