(this["webpackJsonpuao-front"]=this["webpackJsonpuao-front"]||[]).push([[0],{243:function(e,t,n){e.exports=n(433)},248:function(e,t,n){},433:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),c=n.n(l),o=(n(248),n(215)),i=n(26),u=n(50),s=n(67),d=n(19),m=n.n(d),v=n(42),p=n(129),f=Object(p.a)("USER/LOGIN"),E={name:"",token:"",email:"",role:"",id:0,lastName:"",cc:"",uaoCode:"",loading:!1,error:null,username:"",photo:""},g=Object(p.a)("MEETING/SEARCH"),b={loading:!1,error:null,meetings:[]},h=n(39),O=n(164),j=n(218),x=n.n(j),w=n(18),y=n(120),S=n.n(y),I=function(e){return S.a.post("".concat("ec2-18-222-244-202.us-east-2.compute.amazonaws.com","/auth/local"),e)},k=m.a.mark(C),R=m.a.mark(U),T=m.a.mark(L);function C(e){var t,n,a,r,l,c,o,i,u;return m.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=(null===e||void 0===e?void 0:e.payload)||{},n=t.user,a=t.password,s.prev=1,s.next=4,Object(w.c)(f.request());case 4:return s.next=6,Object(w.b)(I,{identifier:n,password:a});case 6:if(r=s.sent,!(l=r.data).jwt){s.next=11;break}return s.next=11,Object(w.c)(f.success({name:l.user.name,token:l.jwt,email:l.user.email,role:null===(c=l.user)||void 0===c?void 0:null===(o=c.role)||void 0===o?void 0:o.name,id:l.user.id,lastName:l.user.last_name,cc:l.user.identification,uaoCode:l.user.uao_code,username:l.user.username,photo:null===l||void 0===l?void 0:null===(i=l.user)||void 0===i?void 0:null===(u=i.photo)||void 0===u?void 0:u.url}));case 11:s.next=17;break;case 13:return s.prev=13,s.t0=s.catch(1),s.next=17,Object(w.c)(f.failure(s.t0));case 17:return s.prev=17,s.next=20,Object(w.c)(f.fulfill());case 20:return s.finish(17);case 21:case"end":return s.stop()}}),k,null,[[1,13,17,21]])}function U(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.c)({type:"USER/LOGOUT"});case 2:return e.next=4,Object(w.c)({type:"MEETINGS/DELTE_ALL"});case 4:case"end":return e.stop()}}),R)}function L(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.a)([Object(w.h)(f.TRIGGER,C),Object(w.h)("USER/LOGOUT_SAGA",U)]);case 2:case"end":return e.stop()}}),T)}var A=function(e,t){return S()({method:"POST",url:"".concat("ec2-18-222-244-202.us-east-2.compute.amazonaws.com","/graphql"),data:{query:"\n   query {\n     meetings(where: {".concat(t,":{id:").concat(e,"}}) {\n       subject\n       description\n       start\n       end\n       id\n       state\n       consultor {\n        name\n        last_name\n        photo {\n          url\n          }\n        }\n        emprendedor {\n          name\n          last_name\n          photo {\n            url\n            }\n        }\n     }\n   }\n ")}})},_=m.a.mark(N),G=m.a.mark(F);function N(){var e,t,n,a,r,l,c;return m.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,Object(w.e)((function(e){return null===e||void 0===e?void 0:e.userReducer}));case 3:return t=o.sent,console.log(t),n=t.id,a=t.role,o.next=8,Object(w.c)(g.request());case 8:return o.next=10,Object(w.b)(A,n,a);case 10:if(r=o.sent,l=r.data,!(null===(e=l.data)||void 0===e?void 0:e.meetings)){o.next=15;break}return o.next=15,Object(w.c)(g.success(null===(c=l.data)||void 0===c?void 0:c.meetings.map((function(e){var t,n,a,r,l,c,o,i;return Object(v.a)({},e,{consultor:{name:null===e||void 0===e?void 0:null===(t=e.consultor)||void 0===t?void 0:t.name,lastName:null===e||void 0===e?void 0:null===(n=e.consultor)||void 0===n?void 0:n.last_name,photo:null===e||void 0===e?void 0:null===(a=e.consultor)||void 0===a?void 0:null===(r=a.photo)||void 0===r?void 0:r.url},emprendedor:{name:null===e||void 0===e?void 0:null===(l=e.emprendedor)||void 0===l?void 0:l.name,lastName:null===e||void 0===e?void 0:null===(c=e.emprendedor)||void 0===c?void 0:c.last_name,photo:null===e||void 0===e?void 0:null===(o=e.emprendedor)||void 0===o?void 0:null===(i=o.photo)||void 0===i?void 0:i.url}})}))));case 15:o.next=21;break;case 17:return o.prev=17,o.t0=o.catch(0),o.next=21,Object(w.c)(g.failure(o.t0));case 21:return o.prev=21,o.next=24,Object(w.c)(g.fulfill());case 24:return o.finish(21);case 25:case"end":return o.stop()}}),_,null,[[0,17,21,25]])}function F(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.a)([Object(w.h)(g.TRIGGER,N)]);case 2:case"end":return e.stop()}}),G)}var D=n(238),M=m.a.mark(P);function P(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(w.a)([Object(w.b)(L),Object(w.b)(F)]);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),M,null,[[0,5]])}var q=Object(h.c)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.REQUEST:return Object(v.a)({},e,{loading:!0});case f.SUCCESS:return Object(v.a)({},e,{},null===t||void 0===t?void 0:t.payload);case f.FAILURE:var n;return Object(v.a)({},e,{error:null===t||void 0===t?void 0:null===(n=t.payload)||void 0===n?void 0:n.message});case f.FULFILL:return Object(v.a)({},e,{error:null,loading:!1});case"USER/LOGOUT":return E;default:return e}},meetingReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.REQUEST:return Object(v.a)({},e,{loading:!0});case g.SUCCESS:return Object(v.a)({},e,{meetings:null===t||void 0===t?void 0:t.payload});case g.FAILURE:return Object(v.a)({},e,{error:null===t||void 0===t?void 0:t.payload});case g.FULFILL:return Object(v.a)({},e,{loading:!1});case"MEETINGS/DELTE_ALL":return b;default:return e}}}),B={key:"root",whitelist:["userReducer","meetingReducer"],storage:x.a},V=Object(D.a)(),z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||h.d,Y=[V],J=[h.a.apply(void 0,Y)],W=Object(O.a)(B,q),X=n(30),Q=n(68),H=n(31);function K(){var e=Object(X.a)(["\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));\n  grid-gap: 20px;\n  align-content: flex-start;\n  @media screen and (max-width: 576px) {\n    grid-template-columns: repeat(auto-fill, minmax(90%, 1fr));\n  }\n  @media screen and (min-width: 576px) and (max-width: 768px) {\n    grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));\n  }\n  @media screen and (min-width: 768px) and (max-width: 1200px) {\n    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));\n  }\n"]);return K=function(){return e},e}function $(){var e=Object(X.a)(["\n  background: radial-gradient(50% 50% at 50% 50%, #ffffff 0%, #e2e2e2 100%);\n"]);return $=function(){return e},e}function Z(){var e=Object(X.a)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return Z=function(){return e},e}var ee=H.a.div(Z(),Q.d,Q.e,Q.c,Q.g,Q.f,Q.b,Q.a),te=Object(H.a)(ee)($()),ne=H.a.div(K());function ae(){var e=Object(X.a)(["\nwidth: 4rem;\n"]);return ae=function(){return e},e}function re(){var e=Object(X.a)(["\nwidth: 6rem;\n"]);return re=function(){return e},e}var le=H.a.img(re()),ce=H.a.img(ae()),oe=n(448),ie=n(442),ue=n(444),se=n(446),de=n(40);function me(){var e=Object(X.a)(["\n  width: 100%;\n  background-color: #e1243f;\n  border-color: #e1243f;\n"]);return me=function(){return e},e}var ve=Object(H.a)(de.a)(me()),pe=n(454),fe=n(455),Ee=n(456),ge=function(){var e=Object(i.b)(),t=Object(s.g)(),n=Object(a.useRef)(),l=Object(a.useRef)(),c=Object(i.c)((function(e){var t=e.userReducer;return{loading:t.loading,error:t.error,token:t.token}})),o=c.loading,u=c.error,d=c.token;Object(a.useEffect)((function(){u&&oe.a.error("errorStatus")}),[u]);return d&&t.push("/schedules/meetings"),r.a.createElement(te,{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},r.a.createElement(ee,{display:"flex",flexDirection:"column",alignItems:"center",width:"90vw",maxWidth:"27rem"},r.a.createElement(le,{src:"https://i.imgur.com/RFJPfyp.png"}),r.a.createElement(ee,{py:"0.3rem"},r.a.createElement(ie.a.Text,null,"SINAPSIS")),r.a.createElement(ee,{py:"1.4rem"},r.a.createElement(ie.a.Text,{strong:!0},"INGRESAR")),r.a.createElement(ee,null,r.a.createElement(ue.a,{onFinish:function(){var t,a,r,c,o,i,u,s;console.log({user:null===n||void 0===n?void 0:null===(t=n.current)||void 0===t?void 0:null===(a=t.input)||void 0===a?void 0:a.value,pass:null===l||void 0===l?void 0:null===(r=l.current)||void 0===r?void 0:null===(c=r.input)||void 0===c?void 0:c.value}),e(f.trigger({user:null===n||void 0===n?void 0:null===(o=n.current)||void 0===o?void 0:null===(i=o.input)||void 0===i?void 0:i.value,password:null===l||void 0===l?void 0:null===(u=l.current)||void 0===u?void 0:null===(s=u.input)||void 0===s?void 0:s.value}))},layout:"vertical"},r.a.createElement(ue.a.Item,{name:"email",rules:[{type:"email",message:"Ingrese un correo v\xe1lido"},{required:!0,message:"Es necesario un correo"}]},r.a.createElement(se.a,{ref:n,prefix:r.a.createElement(pe.a,null),placeholder:"Correo institucional"})),r.a.createElement(ue.a.Item,{name:"password",rules:[{required:!0,message:"Ingrese su constrase\xf1a"},{min:4,message:"minimo 4 caracteres"}]},r.a.createElement(se.a.Password,{ref:l,prefix:r.a.createElement(fe.a,null),placeholder:"Contrase\xf1a"})),r.a.createElement(ue.a.Item,null,r.a.createElement(ve,{type:"primary",htmlType:"submit"},o?"Loading ":"Ingresar"))),r.a.createElement(ee,{display:"flex",justifyContent:"space-between",alignItems:"center"},r.a.createElement(ee,{borderBottom:"solid 1px #000",flex:.4},r.a.createElement("span",null)),r.a.createElement(ee,{p:".4rem",borderRadius:"50%",border:"solid 1px #000"},r.a.createElement("span",null)),r.a.createElement(ee,{borderBottom:"solid 1px #000",flex:.4},r.a.createElement("span",null))),r.a.createElement(ee,{my:"1rem"},r.a.createElement(de.a,{icon:r.a.createElement(Ee.a,null),style:{width:"100%"},type:"default",htmlType:"submit"},"Ingresar con Google")))))},be=function(){return r.a.createElement("div",null,r.a.createElement(ge,null))},he=n(101),Oe=function(e){return e.userReducer},je=Object(he.a)(Oe,(function(e){return e.token})),xe=Object(he.a)(Oe,(function(e){return e.role})),we=function(){var e=Object(i.c)(je),t=Object(s.g)();e||t.push("/login")},ye=n(443);function Se(){var e=Object(X.a)(["\n  border: 1px solid rgb(235, 237, 240);\n  background-color: #fff;\n"]);return Se=function(){return e},e}var Ie=Object(H.a)(ye.a)(Se()),ke=function(){var e,t=Object(s.g)(),n=Object(i.c)(xe);return r.a.createElement(Ie,{onBack:function(){return t.go(-1)},title:"SINAPSIS",subTitle:(null===(e=n[0])||void 0===e?void 0:e.toUpperCase())+(null===n||void 0===n?void 0:n.slice(1))})},Re=n(165),Te=n(460),Ce=n(461),Ue=n(462),Le=function(){var e=Object(i.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,{display:"flex",justifyContent:"center",alignItems:"center",height:"4.125rem"},r.a.createElement(ce,{src:"https://i.imgur.com/RFJPfyp.png"})),r.a.createElement(Re.a,{defaultSelectedKeys:["2"],mode:"inline",theme:"dark"},r.a.createElement(Re.a.Item,{key:"2"},r.a.createElement(Te.a,null),r.a.createElement("span",null,"Meetings")),r.a.createElement(Re.a.Item,{key:"3"},r.a.createElement(Ce.a,null),r.a.createElement("span",null,"Task")),r.a.createElement(Re.a.Item,{key:"logout",onClick:function(){e({type:"USER/LOGOUT_SAGA"})}},r.a.createElement(Ue.a,null),r.a.createElement("span",null,"Logout"))))},Ae=n(438),_e=n(86),Ge=n(440),Ne=n(231),Fe=n(447),De=n(437),Me=n(466),Pe=n(467),qe=n(453),Be=n(451),Ve=n(452),ze=n(464),Ye=function(e){e.width,e.height;return r.a.createElement("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",enableBackground:"0 0 512 512",viewBox:"0 0 512 512",xmlSpace:"preserve"},r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M256,74.667 c67.635,0,122.667,55.031,122.667,122.667S323.635,320,256,320s-122.667-55.031-122.667-122.667S188.365,74.667,256,74.667z M256,469.333c-69.707,0-131.52-33.755-170.473-85.615c42.676-20.534,103.621-42.385,170.473-42.385 c66.857,0,127.807,21.854,170.474,42.383C387.521,435.577,325.708,469.333,256,469.333z"}))))},Je=n(85),We=n.n(Je),Xe=n(439),Qe=n(441),He=n(445),Ke=n(465);function $e(){var e=Object(X.a)(["\n  & [class*='-upload-list-rtl'] .ant-upload-list-item {\n    float: right;\n  }\n  & .ant-upload-list-item {\n    float: left;\n    width: 200px;\n    margin-right: 8px;\n  }\n  & .ant-upload-animate-enter {\n    animation-name: uploadAnimateInlineIn;\n  }\n  & .ant-upload-animate-leave {\n    animation-name: uploadAnimateInlineOut;\n  }\n"]);return $e=function(){return e},e}var Ze=ue.a.Item,et=Object(H.a)(Xe.a)($e()),tt=function(e){return r.a.createElement(Qe.a,{destroyOnClose:!0,onCancel:function(){e.setVisible(!1)},visible:e.visible,title:"Update meeting"},r.a.createElement(ue.a,{layout:"vertical"},r.a.createElement(Ze,{label:"Subject"},r.a.createElement(se.a,{defaultValue:e.subject})),r.a.createElement(Ze,{label:"Description"},r.a.createElement(se.a.TextArea,{defaultValue:e.description})),r.a.createElement(Ze,{label:"Start"},r.a.createElement(He.a,{defaultValue:We()(new Date(e.start)),showTime:!0})),r.a.createElement(Ze,{label:"End"},r.a.createElement(He.a,{defaultValue:We()(new Date(e.end)),showTime:!0})),r.a.createElement(Ze,{label:"Attachments"},r.a.createElement(et,{listType:"picture"},r.a.createElement(de.a,null,r.a.createElement(Ke.a,null),r.a.createElement("span",null,"Upload"))))))};function nt(){var e=Object(X.a)([""]);return nt=function(){return e},e}var at=Ge.a.Meta,rt=ie.a.Paragraph,lt=function(e){var t=e.imageUuid;return e.loading?r.a.createElement(Ne.a,null):r.a.createElement(Ne.a,{icon:t?void 0:r.a.createElement(Ye,null),src:t?"".concat("ec2-18-222-244-202.us-east-2.compute.amazonaws.com").concat(t):void 0})},ct=function(e,t){return r.a.createElement(Ge.a,{key:"loading_".concat(t),actions:[r.a.createElement(Me.a,{title:"Testing mode"}),r.a.createElement(Pe.a,{title:"Production mode"})]},r.a.createElement(Fe.a,{loading:!0,avatar:!0,active:!0},r.a.createElement(at,{avatar:r.a.createElement(lt,null),title:"",description:""})))},ot=Object(H.a)(rt)(nt()),it=function(e){var t=e.description;return r.a.createElement(ot,{type:"secondary"},"".concat(t.substring(0,130),"\n    ").concat(t.length>130?"...":""))},ut=function(e,t){var n=e.subject,l=e.description,c=void 0===l?"":l,o=e.start,s=e.id,d=e.consultor,m=e.emprendedor,v=Object(a.useState)(!1),p=Object(_e.a)(v,2),f=p[0],E=p[1],g=Object(i.c)(xe);return r.a.createElement(Ge.a,{key:"".concat(s,"meet").concat(t),actions:[r.a.createElement(u.b,{to:"/schedules/detail-meeting/".concat(s)},r.a.createElement(qe.a,null)),r.a.createElement(Be.a,{onClick:function(){E(!0)}}),r.a.createElement(De.a,{onConfirm:function(){},title:"Already you arrived?"},r.a.createElement(Ve.a,null)),r.a.createElement(De.a,{onConfirm:function(){},title:"Cancel meeting?"},r.a.createElement(ze.a,null))]},r.a.createElement(Fe.a,{loading:!1,avatar:!0,active:!0},r.a.createElement(at,{avatar:r.a.createElement(lt,{imageUuid:"emprendedor"===g?d.photo:m.photo}),title:n,description:r.a.createElement(rt,null,r.a.createElement(it,{description:c}),r.a.createElement("span",null,We()(new Date(o)).format("M/D/YYYY h:mm a")))})),r.a.createElement(tt,Object.assign({},e,{setVisible:E,visible:f})))},st=function(){var e=Object(a.useRef)(Array.from(Array(16)).map((function(e,t){return{uuid:"".concat(t,"ed")}}))),t=Object(i.b)(),n=Object(i.c)((function(e){return null===e||void 0===e?void 0:e.meetingReducer}));console.log(n),Object(a.useEffect)((function(){t(g.trigger())}),[]);var l=n.loading?e.current:n.meetings;return r.a.createElement(ee,{width:"100%",height:"100%",overflow:"auto"},r.a.createElement(ee,{p:20,flexGrow:1,overflowX:"hidden",overflowY:"auto"},r.a.createElement(ne,null,l.map((function(e){return n.loading?r.a.createElement(ct,e):r.a.createElement(ut,e)})))))},dt=Object(he.a)((function(e){var t;return null===(t=e.meetingReducer)||void 0===t?void 0:t.meetings}),(function(e,t){return t.meetingId}),(function(e,t){return e.find((function(e){return e.id.toString()==t}))})),mt=n(239),vt=ie.a.Title,pt=ie.a.Paragraph,ft={scheduled:"cyan",canceled:"default",later:"warning",done:"success",inprogress:"processing",modified:"default"},Et=function(){var e=Object(s.h)().meeting,t=Object(i.c)((function(t){return dt(t,{meetingId:e||""})}));return console.log("id meting: ".concat(e)),console.log(t),r.a.createElement(ee,null,r.a.createElement(vt,null,r.a.createElement("span",null,null===t||void 0===t?void 0:t.subject),r.a.createElement(mt.a,{style:{marginLeft:"0.5rem"},color:ft[null===t||void 0===t?void 0:t.state]},null===t||void 0===t?void 0:t.state)),r.a.createElement(pt,{style:{width:"50rem"}},null===t||void 0===t?void 0:t.description),r.a.createElement("h4",null,"Tareas"))},gt=Ae.a.Sider,bt=Ae.a.Content,ht=Ae.a.Footer,Ot=function(){return we(),r.a.createElement(Ae.a,{style:{width:"100vw",height:"100vh"}},r.a.createElement(gt,{breakpoint:"lg",collapsedWidth:"0"},r.a.createElement(Le,null)),r.a.createElement(Ae.a,null,r.a.createElement(ke,null),r.a.createElement(bt,{style:{margin:"24px 16px 0"}},r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/schedules/meetings"},r.a.createElement(st,null)),r.a.createElement(s.b,{path:"/schedules/detail-meeting/:meeting"},r.a.createElement(Et,null)),r.a.createElement(s.b,null,r.a.createElement(s.a,{to:"/schedules/meetings"})))),r.a.createElement(ht,{style:{textAlign:"center"}},"UAO 2020 Created by Ingesoft")))},jt=function(){var e=Object(h.e)(W,z.apply(void 0,J)),t=Object(O.b)(e);return V.run(P),{store:e,persistor:t}}(),xt=jt.store,wt=jt.persistor,yt=function(){return r.a.createElement(i.a,{store:xt},r.a.createElement(o.a,{loading:null,persistor:wt},r.a.createElement(u.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/login"},r.a.createElement(be,null)),r.a.createElement(s.b,{path:"/consultor-schedule"},r.a.createElement(Ot,null)),r.a.createElement(s.b,{path:"/schedules"},r.a.createElement(Ot,null)),r.a.createElement(s.b,{path:"/admin-dashboard"},r.a.createElement(Ot,null)),r.a.createElement(s.b,null,r.a.createElement(s.a,{to:"/login"}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(432);c.a.render(r.a.createElement(yt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[243,1,2]]]);
//# sourceMappingURL=main.151cd1fc.chunk.js.map