(this["webpackJsonpBreakingBar-React"]=this["webpackJsonpBreakingBar-React"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/breakingbad.7891d075.png"},17:function(e,t,a){e.exports=a(41)},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),o=a(3),i=a.n(o),s=a(14),u=a(2),m=(a(23),a(15)),d=a.n(m),E=function(e){var t=e.item;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:t.img,alt:"{item.name}"})),r.a.createElement("div",{className:"card-back"},r.a.createElement("h1",null,t.name),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Nombre del Actor:")," ",t.portrayed),r.a.createElement("li",null,r.a.createElement("strong",null,"Cumplea\xf1os:")," ",t.birthday),r.a.createElement("li",null,r.a.createElement("strong",null,"Nombre en la serie:")," ",t.nickname),r.a.createElement("li",null,r.a.createElement("strong",null,"\xbfVive en la serie?:")," ",t.status)))))},g=function(e){var t=e.items;return e.isLoading?r.a.createElement("h2",null,"Cargando..."):r.a.createElement("section",{className:"cards"},t.map((function(e){return r.a.createElement(E,{key:e.char_id,item:e})})))},f=a(16),p=a.n(f),h=function(){return r.a.createElement("header",{className:"center"},r.a.createElement("img",{src:p.a,alt:""}))},b=function(e){var t=e.getQuery,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],o=c[1];return r.a.createElement("section",{className:"search"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Busca tu personaje aqui",value:l,onChange:function(e){return a=e.target.value,o(a),void t(a);var a},autoFocus:!0})))},v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"center"},r.a.createElement("p",null,"React.js \ud83d\udc69\ud83c\udffb\u200d\ud83d\udcbb by https://github.com/LocalHostBit")))},w=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),o=Object(u.a)(l,2),m=o[0],E=o[1],f=Object(n.useState)(!0),p=Object(u.a)(f,2),w=p[0],j=p[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("https://www.breakingbadapi.com/api/characters?name=".concat(w));case 2:t=e.sent,console.log(t.data),c(t.data),E(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[w]),r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(b,{getQuery:function(e){return j(e)}}),r.a.createElement(g,{isLoading:m,items:a}),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.4a57fc5a.chunk.js.map