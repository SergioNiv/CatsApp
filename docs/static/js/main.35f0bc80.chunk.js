(this["webpackJsonpcats-app"]=this["webpackJsonpcats-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(4),s=a.n(c),i=a(3),r=a.n(i),o=a(5),u=a(6),l=a(0),m=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],s=a[1],i=function(){var e=Object(o.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.thecatapi.com/v1/images/search",e.next=3,fetch("https://api.thecatapi.com/v1/images/search");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n=a.map((function(e){return{id:e.id,url:e.url}})),console.log(n),s(n),document.querySelector("h1").classList.add("animate__animated","animate__bounce");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("header",{className:"Header",children:Object(l.jsx)("h1",{children:"CatsApp"})}),Object(l.jsx)("main",{className:"Main",children:Object(l.jsxs)("section",{className:"main__section",children:[Object(l.jsxs)("button",{onClick:function(){i(),document.querySelector("h1").classList.remove("animate__animated","animate__bounce")},children:[Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-search",viewBox:"0 0 16 16",children:Object(l.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})}),"Search"]}),Object(l.jsx)("figure",{className:"section--figure",children:c.map((function(e){return Object(l.jsx)("img",{src:e.url,alt:"Imagen de gatos",className:"animate__animated animate__fadeIn animate__delay-1s"},e.id)}))})]})})]})};a(13);s.a.render(Object(l.jsx)(m,{}),document.getElementById("app"))}},[[14,1,2]]]);
//# sourceMappingURL=main.35f0bc80.chunk.js.map