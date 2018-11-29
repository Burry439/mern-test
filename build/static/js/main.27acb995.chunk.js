(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,n){e.exports=n(79)},47:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(5),c=n.n(o),i=n(6),l=n(7),m=n(9),s=n(8),u=n(10),p=(n(45),n(47),n(12)),d=n(11),E=n(37),h=n(39),f=n(13),g={items:[],loading:!1},b=Object(d.c)({item:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ITEM":return Object(f.a)({},e,{items:t.payload,loading:!1});case"DELETE_ITEM":return Object(f.a)({},e,{items:e.items.filter(function(e){return e._id!==t.payload})});case"ADD_ITEM":return Object(f.a)({},e,{items:[t.payload].concat(Object(h.a)(e.items))});case"ITEMS_LOADING":return Object(f.a)({},e,{loading:!0});default:return e}}}),O=[E.a],j=Object(d.e)(b,{},Object(d.d)(d.a.apply(void 0,O),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),v=n(3),y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},n.toggle=function(){n.setState({isOpen:!n.state.isOpen})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.p,{color:"dark",dark:!0,expand:"sm",className:"mb-5"},r.a.createElement(v.c,null,r.a.createElement(v.q,{href:"/"},"Shopping List"),r.a.createElement(v.r,{onClick:this.toggle}),r.a.createElement(v.b,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(v.m,{className:"ml-auto",navbar:!0},r.a.createElement(v.n,null,r.a.createElement(v.o,{href:"#"},"Github")))))))}}]),t}(r.a.Component),I=n(25),_=n(17),k=n.n(_),w=function(){return{type:"ITEMS_LOADING"}},T=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).onDeleteClick=function(e){console.log(e),n.props.deleteItem(e)},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getItems()}},{key:"render",value:function(){var e=this,t=this.props.item.items;return r.a.createElement(v.c,null,r.a.createElement(v.h,null,r.a.createElement(I.TransitionGroup,{className:"shopping-list"},t.map(function(t){var n=t._id,a=t.name;return r.a.createElement(I.CSSTransition,{key:n,timeout:500,classNames:"fade"},r.a.createElement(v.i,null,r.a.createElement(v.a,{className:"remove-btn",color:"danger",size:"sm",onClick:e.onDeleteClick.bind(e,n)},"\xd7"),a))}))))}}]),t}(r.a.Component),S=Object(p.b)(function(e){return{item:e.item}},{getItems:function(){return function(e){e(w()),k.a.get("/api/items/").then(function(t){return e({type:"GET_ITEM",payload:t.data})})}},deleteItem:function(e){return function(t){k.a.delete("/api/items/".concat(e)).then(function(n){t({type:"DELETE_ITEM",payload:e})})}}})(T),D=n(15),C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1,name:""},n.toggle=function(){n.setState({modal:!n.state.modal})},n.onChange=function(e){n.setState(Object(D.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){e.preventDefault();var t={name:n.state.name};n.props.addItem(t),n.toggle()},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.a,{color:"dark",style:{marginBottom:"2rem"},onClick:this.toggle},"Add Item"),r.a.createElement(v.j,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(v.l,{toggle:this.toggle},"Add To Shopping List"),r.a.createElement(v.k,null,r.a.createElement(v.d,{onSubmit:this.onSubmit},r.a.createElement(v.e,null,r.a.createElement(v.g,{for:"item"},"Item"),r.a.createElement(v.f,{type:"text",name:"name",id:"item",placeholder:"Add Shopping Item",onChange:this.onChange}),r.a.createElement(v.a,{color:"dark",style:{marginTop:"2rem"},block:!0},"Add Item"))))))}}]),t}(r.a.Component),A=Object(p.b)(function(e){return{item:e.item}},{addItem:function(e){return function(t){k.a.post("/api/items/",e).then(function(e){return t({type:"ADD_ITEM",payload:e.data})})}}})(C),N=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{store:j},r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement(v.c,null,r.a.createElement(A,null),r.a.createElement(S,null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,2,1]]]);
//# sourceMappingURL=main.27acb995.chunk.js.map