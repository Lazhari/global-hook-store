(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,n){"use strict";n.r(t);var a,r=n(24),c=n(0),o=n.n(c),u=n(23),l=n(143),i=n(145),m=n(70),s=n(139),b=n(144),f=n(141),p=n(136),d=n(138),E=n(137),j=n(142),O=(n(80),n(21)),g=n(18),v=n(9),h=n(48),k=n(32),y=n.n(k),C=n(45),w={getRepo:function(e){return t="https://api.github.com/users/".concat(e,"/repos"),fetch(t).then(function(e){if(e.status>=400&&e.status<600)throw new Error("Error ".concat(e.status," from server"));return e.json()});var t}},x=Object(v.b)({},{toggleTodo:function(e,t){return e[t]=!e[t],Object(O.a)({},e)},addTodo:function(e,t){var n=t.value;return t.value="",Object(O.a)({},e,Object(g.a)({},n,!1))}}),F=Object(v.b)([],{push:function(e,t){return e.push(t),e}}),I=Object(v.b)({count:0},{increment:function(e){return{count:e.count+1}},decrement:function(e){return{count:e.count-1}},incrementByTen:function(){var e=Object(C.a)(y.a.mark(function e(t){var n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.count,e.next=3,new Promise(function(e){return setTimeout(e,3e3)});case 3:return e.abrupt("return",{count:n+10});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}),T=Object(v.b)({repos:Object(v.a)([]),userId:""},{setRepoId:function(e,t){return Object(O.a)({},e,{userId:t})},getUserRepos:function(){var e=Object(C.a)(y.a.mark(function e(t,n,a){var r,c;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.userId,c=a.asyncAction,e.abrupt("return",c("repos",w.getRepo(r)));case 3:case"end":return e.stop()}},e)}));return function(t,n,a){return e.apply(this,arguments)}}()}),N=Object(v.b)({count:0,name:"Willy wonka",get length(){return this.name.length}},{increment:function(e){var t=e.count,n=Object(h.a)(e,["count"]);return Object(O.a)({},n,{count:t+1})},decrement:function(e){var t=e.count,n=Object(h.a)(e,["count"]);return Object(O.a)({},n,{count:t-1})},updateName:function(e,t){return Object(O.a)({},e,{name:t})}}),R=Object(v.b)("Choose name",{kalle:function(){return"k\xe5lle"},ada:function(){return"ada"}}),A=function(){var e=Object(v.c)(N),t=e.state,n=t.name,a=t.length,r=e.actions.updateName,c=Object(v.c)(I).state.count;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,"Name: ",n),o.a.createElement("h4",null,"Count from counter example: ",c),o.a.createElement("input",{value:n,onChange:function(e){return r(e.target.value)}}),o.a.createElement("span",null,o.a.createElement("small",null,"Char length: ",a)))},P=function(e,t){return Array(e).fill(t).reduce(function(e,n,a){return e["".concat(t.name," component ").concat(a+1)]=n,e},{})},B=Object.entries((a={},Object(g.a)(a,"Counters",P(4,function(){var e=Object(v.c)(I),t=e.actions,n=e.state;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,"Count: ",n.count),o.a.createElement("button",{onClick:function(){return t.decrement()}},"-"),o.a.createElement("button",{onClick:function(){return t.increment()}},"+"))})),Object(g.a)(a,"Payload",Object(g.a)({Payload:A},"Payload in other component",A)),Object(g.a)(a,"Local store",P(4,function(){var e=Object(v.d)(I),t=e.state.count,n=e.actions;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,"Local count: ",t),o.a.createElement("button",{onClick:function(){return n.decrement()}},"-"),o.a.createElement("button",{onClick:function(){return n.increment()}},"+"))})),Object(g.a)(a,"Primitive & Array",Object(O.a)({},P(2,function(){var e=Object(v.c)(R),t=e.state,n=e.actions;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,"Name: ",t),o.a.createElement("button",{onClick:function(){return n.kalle()}},"K\xe5lle"),o.a.createElement("button",{onClick:function(){return n.ada()}},"Ada"))}),P(4,function(){var e=Object(v.c)(F),t=e.state,n=e.actions;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,t.map(function(e,t){return o.a.createElement("span",{key:t},e," ")})),o.a.createElement("button",{onClick:function(){return n.push("Value #".concat(t.length))}},"PUSH"))}))),Object(g.a)(a,"Todo list",P(2,function(){var e=Object(v.c)(x),t=e.state,n=e.actions,a=Object(c.useRef)(null);return o.a.createElement(o.a.Fragment,null,Object.entries(t).map(function(e,t){var a=Object(r.a)(e,2),c=a[0],u=a[1];return o.a.createElement("div",{onClick:function(){return n.toggleTodo(c)},key:t+c},c,u?" \u2714":" \u23f2")}),o.a.createElement("input",{ref:a}),o.a.createElement("button",{onClick:function(){return n.addTodo(a.current)}},"Add todo"))})),Object(g.a)(a,"Async",Object(O.a)({},P(2,function(){var e=Object(v.c)(I),t=e.actions,n=e.state.count;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,"Counter store count: ",n),o.a.createElement("button",{onClick:function(){return t.incrementByTen()}},"3s Delayed increment by 10"))}),P(2,function(){var e=Object(v.c)(T),t=e.state,n=t.repos,a=t.userId,r=e.actions,c=r.getUserRepos,u=r.setRepoId;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,(n.loading?"Loading...":n.error&&n.error.toString())||n.data.map(function(e,t){return o.a.createElement("p",{key:t},e.name)})),o.a.createElement("input",{placeholder:"Github username",value:a,onChange:function(e){return u(e.target.value)}}),o.a.createElement("button",{onClick:function(){return c()}},"Fetch repos"))}))),a)),S=n(140),G=Object(m.a)(),L=Object(l.a)(function(e){var t=e.spacing;return{root:{flexGrow:1,backgroundColor:G.palette.background.paper},grid:{padding:t(2)},example:{marginBottom:t(2)}}}),U=function(e){var t=e.title,n=e.children,a=L();return o.a.createElement(p.a,{className:a.example},o.a.createElement(E.a,null,o.a.createElement(d.a,{gutterBottom:!0,variant:"h5",component:"h2"},t),o.a.createElement(d.a,{component:"div"},n)))},H=document.getElementById("root");Object(u.render)(o.a.createElement(i.a,{theme:G},o.a.createElement(function(){var e=L(),t=Object(c.useState)(0),n=Object(r.a)(t,2),a=n[0],u=n[1],l=B[a],i=Object(r.a)(l,2),m=(i[0],i[1]);return o.a.createElement("div",{className:e.root},o.a.createElement(s.a,{position:"static"},o.a.createElement(S.a,{variant:"dense"},o.a.createElement(d.a,{variant:"h6",color:"inherit"},"Global Hook Store examples")),o.a.createElement(b.a,{value:a,onChange:function(e,t){u(t)}},B.map(function(e){var t=Object(r.a)(e,2),n=t[0];return t[1],o.a.createElement(f.a,{key:n,label:n})}))),o.a.createElement(j.a,{className:e.grid,spacing:2,direction:"row",justify:"flex-start",alignItems:"flex-start",container:!0},Object.entries(m).map(function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];return o.a.createElement(j.a,{key:n,item:!0,xs:12,md:6},o.a.createElement(U,{title:n},a&&o.a.createElement(a,null)))})))},null)),H)},75:function(e,t,n){e.exports=n(120)},80:function(e,t,n){}},[[75,1,2]]]);
//# sourceMappingURL=main.d2c015bb.chunk.js.map