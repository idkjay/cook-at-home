(this["webpackJsonpcook-at-home"]=this["webpackJsonpcook-at-home"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t(17)},function(e,a,t){},,,,,function(e,a,t){},,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);t(7);var n=t(0),l=t.n(n),c=t(4),r=t.n(c),s=(t(12),t(13),t(2)),i=t.n(s),o=t(5),m=t(1),u=(t(15),function(e){return e.ingredients.map((function(e){return l.a.createElement("ul",{className:"ingredient-list"},l.a.createElement("li",{className:"ingredient-text"},e.text),l.a.createElement("li",{className:"ingredient-weight"},"Weight: ",e.weight.toFixed(0)," grams"))}))}),d=function(e){var a=e.dietLabels,t=e.healthLabels,n=e.calories;return l.a.createElement("ul",{className:"ingredient-list"},l.a.createElement("li",{className:"ingredient-text"},"Health Labels: ",t.join(", ")),l.a.createElement("li",{className:"ingredient-text"},"Diet Labels: ",a.join(", ")),l.a.createElement("li",{className:"ingredient-text"},"Total Calories: ",n.toFixed(2)))},E=function(e){var a=e.recipe,t=Object(n.useState)(!1),c=Object(m.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)(!1),o=Object(m.a)(i,2),E=o[0],h=o[1],f=a.recipe,p=f.label,b=f.image,g=f.ingredients,v=f.url,N=f.dietLabels,w=f.healthLabels,j=f.calories;return l.a.createElement("div",{className:"recipe"},l.a.createElement("h2",null,p),l.a.createElement("img",{className:"image",src:b,alt:""}),l.a.createElement("div",{className:"btn-holder"},l.a.createElement("a",{href:v},l.a.createElement("button",null,"Directions")),l.a.createElement("button",{onClick:function(){return s(!r)}},"Ingredients"),l.a.createElement("button",{onClick:function(){return h(!E)}},"Other Info")),r&&l.a.createElement(u,{ingredients:g}),E&&l.a.createElement(d,{dietLabels:N,healthLabels:w,calories:j}))},h=(t(16),function(){return l.a.createElement("div",{className:"main-footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("h4",null,"pls work"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,"dsadsad"),l.a.createElement("li",null,"dsadsad"),l.a.createElement("li",null,"dsadsad"))),l.a.createElement("div",{className:"col"},l.a.createElement("h4",null,"pls work 2"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,"dsadsad"),l.a.createElement("li",null,"dsadsad"),l.a.createElement("li",null,"dsadsad"))),l.a.createElement("div",{className:"col"},l.a.createElement("h4",null,"pls work 3"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,"dsadsad"),l.a.createElement("li",null,"dsadsad"),l.a.createElement("li",null,"dsadsad")))),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("p",{className:"col-sm"},"\xa9",(new Date).getFullYear()," Jordan Chu"))))}),f=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(""),s=Object(m.a)(r,2),u=s[0],d=s[1],f=Object(n.useState)("chicken"),p=Object(m.a)(f,2),b=p[0],g=p[1];Object(n.useEffect)((function(){v()}),[b]);var v=function(){var e=Object(o.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(b,"&app_id=").concat("30cd12a7","&app_key=").concat("8384a09737074e2b9dace4d37a377de1"));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,c(t.hits),console.log(t.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"App"},l.a.createElement("h1",{className:"tag"}," Cook at home "),l.a.createElement("div",{className:"form-holder"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),g(u),d("")},className:"search-form"},l.a.createElement("input",{className:"search-bar",type:"text",value:u,onChange:function(e){d(e.target.value)},placeholder:"Enter Available Ingredients Here"}),l.a.createElement("button",{className:"search-button",type:"submit"},"Search"))),l.a.createElement("div",{className:"recipes"},t.map((function(e){return l.a.createElement(E,{recipe:e})}))),l.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.810995a6.chunk.js.map