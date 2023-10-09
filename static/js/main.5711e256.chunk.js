(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n,a=c(9),s=c.n(a),r=c(8),o=c(19),l=c(6),i=c(16),d=c(17),u=function(e){return{type:"currentTodo/SET",payload:e}},j=function(){return{type:"currentTodo/REMOVE"}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},h=c(4);!function(e){e.All="all",e.Active="active",e.Completed="completed"}(n||(n={}));var O=function(e){return{type:"filter/SET_STATUS",payload:e}},f=function(e){return{type:"filter/SET_QUERY",payload:e}},m=function(){return{type:"filter/CLEAR"}},x={query:"",status:n.All},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/SET_STATUS":return Object(h.a)(Object(h.a)({},e),{},{status:t.payload});case"filter/SET_QUERY":return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});case"filter/CLEAR":return Object(h.a)(Object(h.a)({},e),{},{query:""});default:return e}},v=c(10),y=function(e){return{type:"todos/SET",payload:e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET"===t.type?Object(v.a)(t.payload):e},g=Object(l.combineReducers)({currentTodo:b,filter:p,todos:N}),T=Object(l.createStore)(g,Object(i.composeWithDevTools)(Object(l.applyMiddleware)(d.a))),S=c(18),E=c(3),w=c(14),C=c.n(w),k=c(0),A=(c(28),c(29),c(11)),_=c.n(A),I=c(1),R=function(e){var t=e.todos,c=e.currentTodo,n=e.getTodoInfo;return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{children:"#"}),Object(I.jsx)("th",{children:Object(I.jsx)("span",{className:"icon",children:Object(I.jsx)("i",{className:"fas fa-check"})})}),Object(I.jsx)("th",{children:"Title"}),Object(I.jsx)("th",{children:" "})]})}),Object(I.jsx)("tbody",{children:t.map((function(e){return Object(I.jsxs)("tr",{"data-cy":"todo",className:_()({"has-background-info-light":(null===c||void 0===c?void 0:c.id)===e.id}),children:[Object(I.jsx)("td",{className:"is-vcentered",children:e.id}),Object(I.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(I.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(I.jsx)("i",{className:"fas fa-check"})})}),Object(I.jsx)("td",{className:"is-vcentered is-expanded",children:Object(I.jsx)("p",{className:_()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(I.jsx)("td",{className:"has-text-right is-vcentered",children:Object(I.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return n(e.userId,e)},children:Object(I.jsx)("span",{className:"icon",children:Object(I.jsx)("i",{className:_()("far",{"fa-eye":(null===c||void 0===c?void 0:c.id)!==e.id,"fa-eye-slash":(null===c||void 0===c?void 0:c.id)===e.id})})})})})]},e.id)}))})]})})},L=r.b,M=r.c,q=function(){var e=Object(k.useState)(""),t=Object(E.a)(e,2),c=t[0],a=t[1],s=L(),r=M((function(e){return e.filter})).status;return Object(I.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(I.jsx)("p",{className:"control",children:Object(I.jsx)("span",{className:"select",children:Object(I.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){s(O(e.target.value))},value:r,children:[Object(I.jsx)("option",{value:n.All,children:"All"}),Object(I.jsx)("option",{value:n.Active,children:"Active"}),Object(I.jsx)("option",{value:n.Completed,children:"Completed"})]})})}),Object(I.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(I.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){a(e.target.value),s(f(e.target.value))}}),Object(I.jsx)("span",{className:"icon is-left",children:Object(I.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(I.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:c&&Object(I.jsx)("button",{"aria-label":"none","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){s(m()),a("")}})})]})]})},U=(c(31),function(){return Object(I.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(I.jsx)("div",{className:"Loader__content"})})});function B(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var D=function(e){var t=e.userId,c=e.handleCloseModal,n=Object(k.useState)(null),a=Object(E.a)(n,2),s=a[0],r=a[1],o=M((function(e){return e.currentTodo}));return Object(k.useEffect)((function(){(function(e){return B("/users/".concat(e))})(t).then((function(e){return r(e)}))}),[t]),Object(I.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(I.jsx)("div",{className:"modal-background"}),s&&o?Object(I.jsxs)("div",{className:"modal-card",children:[Object(I.jsxs)("header",{className:"modal-card-head",children:[Object(I.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(o.id)}),Object(I.jsx)("button",{"aria-label":"none",type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(I.jsxs)("div",{className:"modal-card-body",children:[Object(I.jsx)("p",{className:"block","data-cy":"modal-title",children:o.title}),Object(I.jsxs)("p",{className:"block","data-cy":"modal-user",children:[o.completed?Object(I.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(I.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(I.jsx)("a",{href:"mailto:".concat(null===s||void 0===s?void 0:s.email),children:null===s||void 0===s?void 0:s.name})]})]})]}):Object(I.jsx)(U,{})]})},F=function(){var e=Object(k.useState)(0),t=Object(E.a)(e,2),c=t[0],a=t[1],s=Object(k.useState)(!1),r=Object(E.a)(s,2),o=r[0],l=r[1],i=Object(k.useState)(!1),d=Object(E.a)(i,2),b=d[0],h=d[1],O=L(),f=M((function(e){return e.todos})),m=M((function(e){return e.currentTodo})),x=M((function(e){return e.filter})),p=x.status,N=x.query;Object(k.useEffect)((function(){l(!0);var e=function(){var e=Object(S.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B("/todos");case 3:t=e.sent,O(y(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),h(!0);case 10:return e.prev=10,l(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var g=Object(k.useMemo)((function(){var e=Object(v.a)(f);e=e.filter((function(e){switch(p){case n.Completed:return e.completed;case n.Active:return!e.completed;default:return e}}));var t=N.trim().toLowerCase()||"";return t&&(e=e.filter((function(e){return e.title.toLowerCase().includes(t)}))),e}),[f,p,N]);return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("div",{className:"section",children:Object(I.jsx)("div",{className:"container",children:Object(I.jsxs)("div",{className:"box",children:[Object(I.jsx)("h1",{className:"title",children:"Todos:"}),Object(I.jsx)("div",{className:"block",children:Object(I.jsx)(q,{})}),o?Object(I.jsx)(U,{}):Object(I.jsx)("div",{className:"block",children:Object(I.jsx)(R,{todos:g,currentTodo:m,getTodoInfo:function(e,t){a(e),O(u(t))}})}),b&&Object(I.jsx)("p",{className:"notification is-warning",children:"There are no todos on server"}),!g.length&&N&&Object(I.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"})]})})}),m&&Object(I.jsx)(D,{userId:c,handleCloseModal:function(){a(0),O(j())}})]})},J=function(){return Object(I.jsx)(r.a,{store:T,children:Object(I.jsx)(o.a,{children:Object(I.jsx)(F,{})})})};s.a.render(Object(I.jsx)(J,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.5711e256.chunk.js.map