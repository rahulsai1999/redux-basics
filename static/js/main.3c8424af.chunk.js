(this["webpackJsonptodo-redux"]=this["webpackJsonptodo-redux"]||[]).push([[0],{125:function(e,t,n){e.exports=n(221)},130:function(e,t,n){},131:function(e,t,n){},221:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),l=n.n(r),c=(n(130),n(131),n(122)),d=n(15),u=n(225),i=n(226),m=n(224),p=n(229),s=n(87),E=n(228),f=n(67),b=Object(f.b)({name:"todo",initialState:{todos:[]},reducers:{addTodo:function(e,t){var n=e.todos.length;e.todos.push({id:++n,text:t.payload,completed:!1})},removeTodo:function(e,t){var n=t.payload-1;e.todos.splice(n,1)},toggleTodo:function(e,t){var n=t.payload,a=e.todos.findIndex((function(e){return e.id===n}));e.todos[a].completed=!e.todos[a].completed}}}),h=b.actions,g=h.addTodo,v=(h.removeTodo,h.toggleTodo),x=function(e){return e.todo.todos},T=function(e){return e.todo.todos.filter((function(e){return!0===e.completed}))},y=function(e){return e.todo.todos.filter((function(e){return!1===e.completed}))},j=b.reducer,O=n(227),k=n(230),C=function(e){var t=Object(d.c)(x),n=Object(d.b)();return o.a.createElement(O.a,{size:"large",bordered:!0,dataSource:t,renderItem:function(e){return o.a.createElement(O.a.Item,null,o.a.createElement(m.a,null,o.a.createElement(k.a,{checked:e.completed,style:e.completed?{textDecorationLine:"line-through"}:{textDecorationLine:"none"},onChange:function(){return n(v(e.id))}},e.text)))}})},I=function(e){var t=Object(d.c)(T),n=Object(d.b)();return o.a.createElement(O.a,{size:"large",bordered:!0,dataSource:t,renderItem:function(e){return o.a.createElement(O.a.Item,null,o.a.createElement(m.a,null,o.a.createElement(k.a,{checked:e.completed,style:e.completed?{textDecorationLine:"line-through"}:{textDecorationLine:"none"},onChange:function(){return n(v(e.id))}},e.text)))}})},A=function(e){var t=Object(d.c)(y),n=Object(d.b)();return o.a.createElement(O.a,{size:"large",bordered:!0,dataSource:t,renderItem:function(e){return o.a.createElement(O.a.Item,null,o.a.createElement(m.a,null,o.a.createElement(k.a,{checked:e.completed,style:e.completed?{textDecorationLine:"line-through"}:{textDecorationLine:"none"},onChange:function(){return n(v(e.id))}},e.text)))}})},D=function(e){var t=Object(d.b)(),n=Object(a.useState)(""),r=Object(c.a)(n,2),l=r[0],f=r[1];return o.a.createElement("div",null,o.a.createElement("h2",null,"Todo App"),o.a.createElement(u.a,null,o.a.createElement(i.a,{span:24},o.a.createElement(m.a,null,o.a.createElement(p.a,{placeholder:"Enter Todo",value:l,onChange:function(e){return f(e.target.value)}}),o.a.createElement(s.a,{type:"primary",size:"middle",onClick:function(){t(g(l)),f("")}},"Add Todo")))),o.a.createElement("br",null),o.a.createElement(u.a,null,o.a.createElement(i.a,{span:24},o.a.createElement(E.a,{defaultActiveKey:"1",tabPosition:"top"},o.a.createElement(E.a.TabPane,{tab:"All",key:"All"},o.a.createElement(C,null)),o.a.createElement(E.a.TabPane,{tab:"Completed",key:"Completed"},o.a.createElement(I,null)),o.a.createElement(E.a.TabPane,{tab:"To Complete",key:"To Complete"},o.a.createElement(A,null))))))};var L=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App-header"},o.a.createElement(D,null)))},S=Object(f.a)({reducer:{todo:j}});l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d.a,{store:S},o.a.createElement(L,null))),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.3c8424af.chunk.js.map