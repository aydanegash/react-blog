(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{31:function(e,t,n){},50:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(25),c=n.n(r),o=n(8),u=n(1),i=n(12),m=n(15),s=n(10);n(31);var E=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var f=function(e){var t=e.children;return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},d=n(11),h=n.n(d),b=function(){return h.a.get("/api/books")},p=function(e){return h.a.get("/api/books/"+e)},v=function(e){return h.a.delete("/api/books/"+e)},g=function(e){return h.a.post("/api/books",e)};function j(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function O(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function k(e){var t=e.size,n=e.children;return l.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},n)}n(50);function N(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function y(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}function z(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function S(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function x(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var B=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({}),u=Object(s.a)(c,2),d=u[0],h=u[1];function p(){b().then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}function B(e){var t=e.target,n=t.name,a=t.value;h(Object(m.a)(Object(m.a)({},d),{},Object(i.a)({},n,a)))}return Object(a.useEffect)((function(){p()}),[]),l.a.createElement(j,{fluid:!0},l.a.createElement(O,null,l.a.createElement(k,{size:"md-6"},l.a.createElement(f,null,l.a.createElement("h1",null,"What Books Should I Read?")),l.a.createElement("form",null,l.a.createElement(z,{onChange:B,name:"title",placeholder:"Title (required)"}),l.a.createElement(z,{onChange:B,name:"author",placeholder:"Author (required)"}),l.a.createElement(S,{onChange:B,name:"synopsis",placeholder:"Synopsis (Optional)"}),l.a.createElement(x,{disabled:!(d.author&&d.title),onClick:function(e){e.preventDefault(),d.title&&d.author&&g({title:d.title,author:d.author,synopsis:d.synopsis}).then((function(e){return p()})).catch((function(e){return console.log(e)}))}},"Submit Blog"))),l.a.createElement(k,{size:"md-6 sm-12"},l.a.createElement(f,null,l.a.createElement("h1",null,"Blog List")),n.length?l.a.createElement(N,null,n.map((function(e){return l.a.createElement(y,{key:e._id},l.a.createElement(o.b,{to:"/books/"+e._id},l.a.createElement("strong",null,e.title," by ",e.author)),l.a.createElement(E,{onClick:function(){return t=e._id,void v(t).then((function(e){return p()})).catch((function(e){return console.log(e)}));var t}}))}))):l.a.createElement("h3",null,"No Results to Display"))))};var w=function(e){var t=Object(a.useState)({}),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(u.f)().id;return Object(a.useEffect)((function(){p(i).then((function(e){return c(e.data)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement(j,{fluid:!0},l.a.createElement(O,null,l.a.createElement(k,{size:"md-12"},l.a.createElement(f,null,l.a.createElement("h1",null,r.title," by ",r.author)))),l.a.createElement(O,null,l.a.createElement(k,{size:"md-10 md-offset-1"},l.a.createElement("article",null,l.a.createElement("h1",null,"Synopsis"),l.a.createElement("p",null,r.synopsis)))),l.a.createElement(O,null,l.a.createElement(k,{size:"md-2"},l.a.createElement(o.b,{to:"/"},"\u2190 Back to Authors"))))};var C=function(){return l.a.createElement(j,{fluid:!0},l.a.createElement(O,null,l.a.createElement(k,{size:"md-12"},l.a.createElement(f,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var R=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"React Reading List"))};var A=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(R,null),l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:["/","/books"]},l.a.createElement(B,null)),l.a.createElement(u.a,{exact:!0,path:"/books/:id"},l.a.createElement(w,null)),l.a.createElement(u.a,null,l.a.createElement(C,null)))))};c.a.render(l.a.createElement(A,null),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.b9f93cd6.chunk.js.map