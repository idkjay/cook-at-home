(this["webpackJsonpcook-at-home"]=this["webpackJsonpcook-at-home"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(16)},function(e,t,a){},,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(7);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),i=(a(12),a(13),a(2)),s=a.n(i),l=a(5),m=a(1),u=function(e){return e.ingredients.map((function(e){return c.a.createElement("ul",{className:"ingredient-list"},c.a.createElement("li",{className:"ingredient-text"},e.text),c.a.createElement("li",{className:"ingredient-weight"},"Weight - ",e.weight))}))},h=function(e){var t=e.recipe,a=Object(n.useState)(!1),r=Object(m.a)(a,2),o=r[0],i=r[1],s=t.recipe,l=s.label,h=s.image,p=s.ingredients,d=s.url;return c.a.createElement("div",{className:"recipe"},c.a.createElement("h2",null,l),c.a.createElement("img",{className:"image",src:h,alt:""}),c.a.createElement("button",{onClick:function(){return i(!o)}},"Ingredients"),o&&c.a.createElement(u,{ingredients:p}),c.a.createElement("form",{action:d,method:"get"},c.a.createElement("button",null,"Directions")))},p=(a(15),function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),i=Object(m.a)(o,2),u=i[0],p=i[1],d=Object(n.useState)("chicken"),f=Object(m.a)(d,2),g=f[0],E=f[1];Object(n.useEffect)((function(){b()}),[g]);var b=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(g,"&app_id=").concat("30cd12a7","&app_key=").concat("8384a09737074e2b9dace4d37a377de1"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits),console.log(a.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"tag"}," Cook at home "),c.a.createElement("div",{className:"form-holder"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E(u),p("")},className:"search-form"},c.a.createElement("input",{className:"search-bar",type:"text",value:u,onChange:function(e){p(e.target.value)},placeholder:"Enter Available Ingredients Here"}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search"))),c.a.createElement("div",{className:"recipes"},a.map((function(e){return c.a.createElement(h,{recipe:e})}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.0fc3016b.chunk.js.map