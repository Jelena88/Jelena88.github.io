(this["webpackJsonpfinal-project"]=this["webpackJsonpfinal-project"]||[]).push([[0],{16:function(e,t,n){e.exports=n.p+"static/media/logo.b51a526d.png"},19:function(e,t,n){e.exports=n(30)},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(15),r=n.n(c),o=(n(24),n(7)),u=n(16),s=n.n(u),i=Object(o.f)((function(){return l.a.createElement("div",{className:"forum-name",style:{textAlign:"center",display:"flex"}},l.a.createElement("div",null,l.a.createElement("img",{src:s.a,alt:"logo",className:"logo",style:{width:"30px"}})),l.a.createElement("div",null,l.a.createElement("h1",null,"Forum")))})),m=n(1),p="https://coetus.herokuapp.com/api/forum";var E=n(3),f={},b=function(){return f},d=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(m.a)(r,2),u=o[0],s=o[1];function i(){(function(e,t){return fetch("".concat(p).concat("/topics"),{headers:{"Content-Type":"application/json; charset=utf-8"},method:"PUT",body:JSON.stringify({title:t,user_id:e})}).then((function(e){return e.json()}))})(b().user_id,n).then((function(e){console.log(e),e.success&&console.log(e)}))}return console.log(u),console.log(n),console.log(b()),l.a.createElement("div",{className:"new-input"},l.a.createElement("h2",null,"Make New Topic"),l.a.createElement("input",{type:"text",placeholder:"Enter new topic title",onInput:function(e){c(e.target.value)}}),l.a.createElement("textarea",{type:"text",placeholder:"Enter new message",onInput:function(e){s(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),i()}},"Send"))},g=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){fetch("".concat(p).concat("/topics")).then((function(e){return e.json()})).then((function(e){c(e.topics)}))}),[]),console.log(n),l.a.createElement("div",null,l.a.createElement("h2",null,"Topics"),l.a.createElement("div",{className:"topics-container"},n.map((function(e){return l.a.createElement("div",{className:"topics-divs",key:e.topic_id},l.a.createElement("li",{className:"topics"},l.a.createElement(E.b,{to:{pathname:"/topic/".concat(e.topic_id),state:{topic:e}}},e.title.toString())))}))),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(d,null)),l.a.createElement("br",null),l.a.createElement(E.b,{to:"/"},l.a.createElement("button",null,"Back to Main Page")))},h=function(e){var t=e.match,n=Object(a.useState)(t.params.user_id),c=Object(m.a)(n,1)[0],r=Object(a.useState)({}),o=Object(m.a)(r,2),u=o[0],s=o[1];return Object(a.useEffect)((function(){var e;(e=c,fetch("".concat(p).concat("/users","/").concat(e)).then((function(e){return e.json()}))).then((function(e){s(e.user),console.log("a",e)}))}),[c]),l.a.createElement(l.a.Fragment,null," ",l.a.createElement("h2",null,"Profile"),l.a.createElement("div",{className:"profile"},l.a.createElement("p",null,l.a.createElement("b",null,"Name: "),u.name),l.a.createElement("p",null,l.a.createElement("b",null,"Surname: "),u.surname),l.a.createElement("p",null,l.a.createElement("b",null,"Email: "),u.email),l.a.createElement("p",null,l.a.createElement("b",null,"Username: "),u.username)),l.a.createElement(E.b,{to:"/topics"},l.a.createElement("button",{className:"back-btn",style:{marginTop:"20px"}},"Back to topics")))},v=Object(o.f)((function(e){var t=e.msg,n=t.username,a=t.message,c=t.timestamp,r=t.user_id,o=new Date(c).toLocaleTimeString({hour12:!0});return l.a.createElement("div",{className:"one-msg-container"},l.a.createElement("div",{className:"one-msg"},l.a.createElement("p",{onClick:function(){return e.history.push("/profile/".concat(r))}},"User: ",l.a.createElement("u",null,n),l.a.createElement("br",null),l.a.createElement("span",{className:"date"},o," ")),l.a.createElement("p",null,a.toString())))})),j=function(e){var t=e.topic_id,n=Object(a.useState)([]),c=Object(m.a)(n,2),r=c[0],o=c[1];function u(){(function(e,t,n){return fetch("".concat(p).concat("/message"),{headers:{"Content-Type":"application/json; charset=utf-8"},method:"PUT",body:JSON.stringify({username:e,topic_id:t,message:n})}).then((function(e){return e.json()}))})(b().username,t,r).then((function(e){console.log(e)}))}return l.a.createElement("form",null,l.a.createElement("textarea",{type:"text",placeholder:"Enter new message",onInput:function(e){o(e.target.value)}})," ",l.a.createElement("br",null),l.a.createElement("input",{style:{marginTop:"20px"},type:"submit",value:"Send message",onClick:function(e){e.preventDefault(),u()}}))},O=function(e){var t=e.location.state.topic;console.log(e.location);var n=t.topic_id,c=t.title;console.log(t);var r=Object(a.useState)([]),o=Object(m.a)(r,2),u=o[0],s=o[1];return Object(a.useEffect)((function(){var e;(e=n,fetch("".concat(p).concat("/message","/").concat(e)).then((function(e){return e.json()}))).then((function(e){e.success?(console.log(e),s(e.messages)):console.log(e)}))}),[n]),console.log(u),l.a.createElement(l.a.Fragment,null," ",l.a.createElement("h2",null,"Topic"),l.a.createElement("p",{key:n},l.a.createElement("span",{className:"titleTopic"}," ",l.a.createElement("h4",{className:"title"},"Title: ",l.a.createElement("br",null)," ",c)," ")),l.a.createElement("div",{className:"msg-container"},u.map((function(e){return l.a.createElement(v,{key:e.message_id,msg:e})}))),l.a.createElement("div",{className:"new-input"},l.a.createElement(j,{topic_id:n})),l.a.createElement("br",null),l.a.createElement(E.b,{to:"/topics"},l.a.createElement("button",{className:"back-btn"},"Back to topics")))},y=function(e){var t=e.history,n=Object(a.useState)(""),c=Object(m.a)(n,2),r=c[0],o=c[1],u=Object(a.useState)(""),s=Object(m.a)(u,2),i=s[0],E=s[1];function b(){var e;(e={username:r,password:i},fetch("".concat(p).concat("/users"),{headers:{"Content-Type":"application/json; charset=utf-8"},method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()}))).then((function(e){var n;!0===e.success?(console.log("Login successful"),n=e.user,f=n,console.log(e.user),t.push("/topics")):(console.log("Login failed"),alert("Invalid login"))}))}return console.log(r),console.log(i),l.a.createElement("div",{className:"reg-log-div"},l.a.createElement("form",{className:"login-form",style:{margin:"20px"}},l.a.createElement("label",{for:"name"},"Username:"),l.a.createElement("input",{type:"text",placeholder:"Enter username",onInput:function(e){o(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",{for:"name"},"Password:"),l.a.createElement("input",{type:"password",placeholder:"Enter password",onInput:function(e){E(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Confirm login",onClick:function(e){e.preventDefault(),b()}})))},S=function(e){var t=e.history,n=Object(a.useState)(""),c=Object(m.a)(n,2),r=c[0],u=c[1],s=Object(a.useState)(""),i=Object(m.a)(s,2),E=i[0],f=i[1],b=Object(a.useState)(""),d=Object(m.a)(b,2),g=d[0],h=d[1],v=Object(a.useState)(""),j=Object(m.a)(v,2),O=j[0],S=j[1],N=Object(a.useState)(""),w=Object(m.a)(N,2),x=w[0],k=w[1],T=Object(a.useState)(""),I=Object(m.a)(T,2),C=I[0],_=I[1],P=Object(a.useState)(!1),U=Object(m.a)(P,2),J=U[0],A=U[1],D=Object(a.useState)(!1),B=Object(m.a)(D,2),L=B[0],F=B[1];function z(){var e;J&&L?(e={name:r,surname:E,username:g,email:O,password:x},fetch("".concat(p).concat("/users"),{headers:{"Content-Type":"application/json; charset=utf-8"},method:"PUT",body:JSON.stringify(e)}).then((function(e){return e.json()}))).then((function(e){e.success?(console.log("User registered"),t.push("/topics")):console.log("Registration failed")})):console.log("neuspasna sifra")}return Object(a.useEffect)((function(){/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g.test(x)?A(!0):A(!1)}),[x]),Object(a.useEffect)((function(){F(C===x),console.log(C===x)}),[C,x]),l.a.createElement("div",{className:"reg-log-div"},l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h4",null,"Log In")),l.a.createElement(o.a,{path:"/",component:y})),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h4",null,"Sign In")),l.a.createElement("form",{className:"reg-log-form",style:{margin:"20px"}},l.a.createElement("label",{for:"name"},"Name:"),l.a.createElement("br",null),l.a.createElement("input",{id:"name",type:"text",placeholder:"Name",onInput:function(e){u(e.target.value)}}),l.a.createElement("label",{for:"surname"},"Surname:"),l.a.createElement("br",null),l.a.createElement("input",{id:"surname",type:"text",placeholder:"Surname",onInput:function(e){f(e.target.value)}}),l.a.createElement("label",null,"Username:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",placeholder:"Username",onInput:function(e){h(e.target.value)}}),l.a.createElement("label",null,"Email:"),l.a.createElement("br",null),l.a.createElement("input",{type:"email",placeholder:"Email",onInput:function(e){S(e.target.value)}}),l.a.createElement("label",null,"Password:"),l.a.createElement("br",null),l.a.createElement("input",{type:"password",placeholder:"Password",onInput:function(e){k(e.target.value)}}),l.a.createElement("label",null,"Confirm password:"),l.a.createElement("br",null),l.a.createElement("input",{type:"password",placeholder:"Confirm password",onInput:function(e){_(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{value:"Confirm registration",type:"submit",onClick:function(e){e.preventDefault(),z()}}))))},N=Object(o.f)((function(){return l.a.createElement("div",null,l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",component:S}),l.a.createElement(o.a,{path:"/profile/:user_id",component:h}),l.a.createElement(o.a,{path:"/topic/:topic_id",component:O}),l.a.createElement(o.a,{path:"/topics",component:g})))})),w=function(){return l.a.createElement("div",{className:"footer",style:{textAlign:"center",padding:"20px",color:"white"}},l.a.createElement("p",null,"\xa9 Jelena S"))};var x=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E.a,null,l.a.createElement(i,null),l.a.createElement(N,null),l.a.createElement(w,null)))};r.a.render(l.a.createElement(x,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.de0f6c86.chunk.js.map