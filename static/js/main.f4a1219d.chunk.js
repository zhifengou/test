(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),l=(a(16),a(9)),o=a(1),s=a(2),m=a(4),u=a(3),d=a(5),h=(a(17),function(e){var t=e.imgObj,a=e.clickHandler;return r.a.createElement("div",{className:"center"},r.a.createElement("h2",{className:"text"},t.name),r.a.createElement("img",{src:t.img,onClick:function(){return a(t)},alt:""}))}),g=function(e){var t=e.clickHandler,a=e.images.map(function(e){return r.a.createElement(h,{key:e.name,imgObj:e,clickHandler:t})});return r.a.createElement("div",null,a)},b=a(8),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={img:"",name:""},a.changeHandler=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a.submitHandler=function(e){e.preventDefault(),a.props.submitHandler(a.state),a.setState({name:"",img:""})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.img;return r.a.createElement("form",{className:"center",onSubmit:this.submitHandler},r.a.createElement("input",{className:"center",type:"text",name:"img",value:a,placeholder:"Enter Url",onChange:this.changeHandler}),r.a.createElement("br",null),r.a.createElement("input",{className:"center",type:"text",name:"name",value:t,placeholder:"Name",onChange:this.changeHandler}),r.a.createElement("button",{className:"button"},"New Post"))}}]),t}(n.Component),p=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={images:[]},a.submitHandler=function(e){var t=[].concat(Object(l.a)(a.state.images),[e]);a.setState({images:t})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{submitHandler:this.submitHandler}),r.a.createElement(g,{images:this.state.images,clickHandler:this.clickHandler}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.f4a1219d.chunk.js.map