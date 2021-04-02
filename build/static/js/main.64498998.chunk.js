(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[1],{13:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return m})),n.d(e,"c",(function(){return k}));var r,c,a,u=n(3),s=n(2),o=n(4),i=n(10),b={name:null,email:null},l=Object(o.c)(b,(r={},Object(s.a)(r,u.a.registerSuccess,(function(t,e){return e.payload.user})),Object(s.a)(r,u.a.loginSuccess,(function(t,e){return e.payload.user})),Object(s.a)(r,u.a.logoutSuccess,(function(){return b})),Object(s.a)(r,u.a.getCurrentUserSuccess,(function(t,e){return e.payload})),r)),j=Object(o.c)(null,(c={},Object(s.a)(c,u.a.registerSuccess,(function(t,e){return e.payload.token})),Object(s.a)(c,u.a.loginSuccess,(function(t,e){return e.payload.token})),Object(s.a)(c,u.a.logoutSuccess,(function(){return null})),c)),d=Object(o.c)(!1,(a={},Object(s.a)(a,u.a.registerSuccess,(function(){return!0})),Object(s.a)(a,u.a.loginSuccess,(function(){return!0})),Object(s.a)(a,u.a.getCurrentUserSuccess,(function(){return!0})),Object(s.a)(a,u.a.registerError,(function(){return!1})),Object(s.a)(a,u.a.loginError,(function(){return!1})),Object(s.a)(a,u.a.getCurrentUserError,(function(){return!1})),Object(s.a)(a,u.a.logoutSuccess,(function(){return!1})),a)),f=Object(i.c)({user:l,isAuthenticated:d,token:j}),O=n(12),h=n.n(O),g=n(20),p=n(16),v=n.n(p);v.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var x=function(t){v.a.defaults.headers.common.Authorization="Bearer ".concat(t)},C=function(){v.a.defaults.headers.common.Authorization=""},m={register:function(t){return function(){var e=Object(g.a)(h.a.mark((function e(n){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(u.a.registerRequest()),e.prev=1,e.next=4,v.a.post("/users/signup",t);case 4:r=e.sent,x(r.data.token),n(u.a.registerSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(u.a.registerError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(g.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(u.a.logoutRequest()),t.prev=1,t.next=4,v.a.post("/users/logout");case 4:C(),e(u.a.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(u.a.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(g.a)(h.a.mark((function e(n){var r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(u.a.loginRequest()),e.prev=1,e.next=4,v.a.post("/users/login",t);case 4:r=e.sent,c=r.data,n(u.a.loginSuccess(c)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),n(u.a.loginError(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(g.a)(h.a.mark((function t(e,n){var r,c,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),c=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return x(c),e(u.a.getCurrentUserRequest()),t.prev=5,t.next=8,v.a.get("/users/current");case 8:a=t.sent,e(u.a.getCurrentUserSuccess(a.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(u.a.getCurrentUserError(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},k={getIsAuthenticated:function(t){return t.auth.isAuthenticated},getUserName:function(t){return t.auth.user.name},getToken:function(t){return t.auth.token}}},26:function(t,e,n){t.exports={link:"Navigation_link__12o2K",activeLink:"Navigation_activeLink__2rUFB"}},27:function(t,e,n){t.exports={link:"AuthNav_link__2ejsg",activeLink:"AuthNav_activeLink__3huQJ"}},3:function(t,e,n){"use strict";var r=n(4),c=Object(r.b)("auth/registerRequest"),a=Object(r.b)("auth/registerSuccess"),u=Object(r.b)("auth/registerError"),s=Object(r.b)("auth/loginRequest"),o=Object(r.b)("auth/loginSuccess"),i=Object(r.b)("auth/loginError"),b=Object(r.b)("auth/logoutRequest"),l=Object(r.b)("auth/logoutSuccess"),j=Object(r.b)("auth/logoutError"),d=Object(r.b)("auth/getCurrentUserRequest"),f=Object(r.b)("auth/getCurrentUserSuccess"),O=Object(r.b)("auth/getCurrentUserError");e.a={registerRequest:c,registerSuccess:a,registerError:u,loginRequest:s,loginSuccess:o,loginError:i,logoutRequest:b,logoutSuccess:l,logoutError:j,getCurrentUserRequest:d,getCurrentUserSuccess:f,getCurrentUserError:O}},30:function(t,e,n){t.exports={appear:"PageHeading_appear__xfYdo",appearActive:"PageHeading_appearActive__181zX",position:"PageHeading_position__HA01O",title:"PageHeading_title__1ffyz"}},33:function(t,e,n){t.exports={Container:"UserMenu_Container__2f4HK",Avatar:"UserMenu_Avatar__38zOu",Name:"UserMenu_Name__1deHt"}},42:function(t,e,n){"use strict";n.d(e,"b",(function(){return v})),n.d(e,"d",(function(){return S})),n.d(e,"a",(function(){return i.a})),n.d(e,"c",(function(){return T}));var r,c=n(12),a=n.n(c),u=n(20),s=n(16),o=n.n(s),i=n(6),b=i.a.fetchContactsRequest,l=i.a.fetchContactsSuccess,j=i.a.fetchContactsError,d=i.a.addContactRequest,f=i.a.addContactSuccess,O=i.a.addContactError,h=i.a.deleteContactRequest,g=i.a.deleteContactSuccess,p=i.a.deleteContactError,v={fetchContacts:function(){return function(){var t=Object(u.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(b()),t.prev=1,t.next=4,o.a.get("/contacts");case 4:n=t.sent,r=n.data,e(l(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(j(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t,e){return function(){var n=Object(u.a)(a.a.mark((function n(r){var c,u,s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={name:t,number:e},r(d()),n.prev=2,n.next=5,o.a.post("/contacts",c);case 5:u=n.sent,s=u.data,r(f(s)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),r(O(n.t0.message));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t){return n.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(u.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(h()),e.prev=1,e.next=4,o.a.delete("/contacts/".concat(t));case 4:n(g(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(p(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}},x=n(29),C=function(t){return t.contacts.filter},m=function(t){return t.contacts.items},k=Object(x.a)([m],(function(t){return t.length})),S={getFilter:C,getvisibleContacts:Object(x.a)([m,C],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),getTotalContactCount:k,getAllContacts:m},_=n(2),E=n(31),R=n(10),y=n(4),q=i.a.fetchContactsSuccess,U=i.a.addContactSuccess,w=i.a.deleteContactSuccess,N=i.a.changeFilter,A=Object(y.c)([],(r={},Object(_.a)(r,q,(function(t,e){return e.payload})),Object(_.a)(r,U,(function(t,e){return[e.payload].concat(Object(E.a)(t))})),Object(_.a)(r,w,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),L=Object(y.c)("",Object(_.a)({},N,(function(t,e){return e.payload}))),T=Object(R.c)({items:A,filter:L})},43:function(t,e,n){t.exports={Button:"Button_Button__3R1xi"}},44:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(1),c=n(55),a=n.n(c);function u(t){var e=t.children;return Object(r.jsx)("div",{styles:a.a.container,children:e})}},55:function(t,e,n){t.exports={container:"Container_container__3RIox"}},56:function(t,e,n){t.exports={header:"AppBar_header__1Yk8v"}},6:function(t,e,n){"use strict";var r=n(4),c=Object(r.b)("contacts/fetchContactsRequest"),a=Object(r.b)("contacts/fetchContactsSuccess"),u=Object(r.b)("contacts/fetchContactsError"),s=Object(r.b)("contacts/addContactRequest"),o=Object(r.b)("contacts/addContactSuccess"),i=Object(r.b)("contacts/addContactError"),b=Object(r.b)("contacts/deleteContactRequest"),l=Object(r.b)("contacts/deleteContactSuccess"),j=Object(r.b)("contacts/deleteContactError"),d=Object(r.b)("contacts/changeFilter");e.a={fetchContactsRequest:c,fetchContactsSuccess:a,fetchContactsError:u,addContactRequest:s,addContactSuccess:o,addContactError:i,deleteContactRequest:b,deleteContactSuccess:l,deleteContactError:j,changeFilter:d}},64:function(t,e,n){},72:function(t,e,n){},95:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(0),a=n.n(c),u=(n(64),n(9)),s=(n(72),n(7)),o=n(44),i=n(56),b=n.n(i),l=n(18),j=n(13),d=n(26),f=n.n(d);function O(){var t=Object(u.c)(j.c.getIsAuthenticated);return Object(r.jsx)("nav",{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(l.b,{to:"/",exact:!0,className:f.a.link,activeClassName:f.a.activeLink,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),t&&Object(r.jsx)(l.b,{to:"/contacts",exact:!0,className:f.a.link,activeClassName:f.a.activeLink,children:"\u0417\u0430\u043c\u0435\u0442\u043a\u0438"})]})})}var h=n(33),g=n.n(h),p=n.p+"static/media/default-avatar.e44fc4e2.png",v=n(43),x=n.n(v);function C(){var t=Object(u.b)(),e=Object(c.useCallback)((function(){t(j.a.logOut())}),[t]),n=Object(u.c)(j.c.getUserName);return Object(r.jsxs)("div",{className:g.a.Container,children:[Object(r.jsx)("img",{src:p,alt:"",width:"32",styles:g.a.Avatar}),Object(r.jsxs)("span",{className:g.a.Name,children:["Welcome, ",n]}),Object(r.jsx)("button",{className:x.a.Button,type:"button",onClick:e,children:" Logout"})]})}var m=n(27),k=n.n(m),S=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(l.b,{to:"/register",exact:!0,className:k.a.link,activeClassName:k.a.activeLink,children:" \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(r.jsx)(l.b,{to:"/login",exact:!0,className:k.a.link,activeClassName:k.a.activeLink,children:" \u041b\u043e\u0433\u0438\u043d"})]})},_=n(30),E=n.n(_);function R(t){var e=t.text;return Object(r.jsx)("h1",{className:E.a.title,children:e})}var y=n(97);function q(){var t=Object(u.c)(j.c.getIsAuthenticated);return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(y.a,{classNames:E.a,in:!0,appear:!0,timeout:500,unmountOnExit:!0,children:Object(r.jsx)(R,{text:"Phonebook"})})}),Object(r.jsx)("div",{children:Object(r.jsxs)("header",{className:b.a.header,children:[Object(r.jsx)("div",{children:Object(r.jsx)(O,{})}),t?Object(r.jsx)(C,{}):Object(r.jsx)(S,{})]})})]})}var U=n(37),w=(n(60),n(23)),N=n(32);function A(t){var e=t.redirectTo,n=t.children,c=Object(N.a)(t,["redirectTo","children"]),a=Object(u.c)(j.c.getToken);return Object(r.jsxs)(s.b,Object(w.a)(Object(w.a)({},c),{},{children:[" ",a?n:Object(r.jsx)(s.a,{to:e})]}))}function L(t){t.path;var e=t.redirectTo,n=t.children,c=Object(N.a)(t,["path","redirectTo","children"]),a=Object(u.c)(j.c.getIsAuthenticated);return Object(r.jsx)(s.b,Object(w.a)(Object(w.a)({},c),{},{children:a&&c.restricted?Object(r.jsx)(s.a,{to:e}):n}))}var T=Object(c.lazy)((function(){return n.e(0).then(n.bind(null,107))})),z=Object(c.lazy)((function(){return n.e(0).then(n.bind(null,108))})),B=Object(c.lazy)((function(){return n.e(0).then(n.bind(null,109))})),H=Object(c.lazy)((function(){return n.e(0).then(n.bind(null,106))}));function I(){var t=Object(u.b)();Object(c.useEffect)((function(){t(j.a.getCurrentUser())}),[t]);var e=Object(u.c)((function(t){return t.loading})),n=Object(u.c)((function(t){return t.error}));return null!==n&&U.b.error(n),Object(r.jsxs)(o.a,{children:[Object(r.jsx)(q,{}),Object(r.jsxs)(c.Suspense,{fallback:Object(r.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."}),children:[e&&Object(r.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."}),Object(r.jsxs)(s.d,{children:[Object(r.jsx)(L,{exact:!0,path:"/",children:Object(r.jsx)(T,{})}),Object(r.jsx)(A,{path:"/contacts",redirectTo:"/login",children:Object(r.jsx)(H,{})}),Object(r.jsx)(L,{path:"/register",restricted:!0,redirectTo:"/contacts",children:Object(r.jsx)(z,{})}),Object(r.jsx)(L,{path:"/login",restricted:!0,redirectTo:"/contacts",children:Object(r.jsx)(B,{})})]})]}),Object(r.jsx)(U.a,{})]})}var F,P,M=n(2),J=n(31),K=n(42),Y=n(4),Q=n(3),W=n(57),X=n.n(W),D=n(21),G=n(58),V=n.n(G),Z=n(6),$=Q.a.registerRequest,tt=Q.a.registerSuccess,et=Q.a.registerError,nt=Q.a.loginRequest,rt=Q.a.loginSuccess,ct=Q.a.loginError,at=Q.a.logoutRequest,ut=Q.a.logoutSuccess,st=Q.a.logoutError,ot=Q.a.getCurrentUserRequest,it=Q.a.getCurrentUserSuccess,bt=Q.a.getCurrentUserError,lt=Z.a.fetchContactsRequest,jt=Z.a.fetchContactsSuccess,dt=Z.a.fetchContactsError,ft=Z.a.addContactRequest,Ot=Z.a.addContactSuccess,ht=Z.a.addContactError,gt=Z.a.deleteContactRequest,pt=Z.a.deleteContactSuccess,vt=Z.a.deleteContactError,xt=(Z.a.changeFilter,[].concat(Object(J.a)(Object(Y.d)({serializableCheck:{ignoredActions:[D.a,D.f,D.b,D.c,D.d,D.e]}})),[X.a])),Ct={key:"auth",storage:V.a,whitelist:["token"]},mt=Object(Y.a)({reducer:{auth:Object(D.g)(Ct,j.b),contacts:K.c,error:Object(Y.c)(null,(F={},Object(M.a)(F,Q.a.registerError,(function(t,e){return e.payload})),Object(M.a)(F,Q.a.loginError,(function(t,e){return e.payload})),Object(M.a)(F,Q.a.logoutError,(function(t,e){return e.payload})),Object(M.a)(F,Q.a.getCurrentUserError,(function(t,e){return e.payload})),F)),loading:Object(Y.c)(!1,(P={},Object(M.a)(P,$,(function(){return!0})),Object(M.a)(P,tt,(function(){return!1})),Object(M.a)(P,et,(function(){return!1})),Object(M.a)(P,nt,(function(){return!0})),Object(M.a)(P,rt,(function(){return!1})),Object(M.a)(P,ct,(function(){return!1})),Object(M.a)(P,at,(function(){return!0})),Object(M.a)(P,ut,(function(){return!1})),Object(M.a)(P,st,(function(){return!1})),Object(M.a)(P,ot,(function(){return!0})),Object(M.a)(P,it,(function(){return!1})),Object(M.a)(P,bt,(function(){return!1})),Object(M.a)(P,ft,(function(){return!0})),Object(M.a)(P,Ot,(function(){return!1})),Object(M.a)(P,ht,(function(){return!1})),Object(M.a)(P,gt,(function(){return!0})),Object(M.a)(P,pt,(function(){return!1})),Object(M.a)(P,vt,(function(){return!1})),Object(M.a)(P,lt,(function(){return!0})),Object(M.a)(P,jt,(function(){return!1})),Object(M.a)(P,dt,(function(){return!1})),P)),middleware:xt,devTools:!1}}),kt={store:mt,persistor:Object(D.h)(mt)},St=n(19),_t=n(59);Object(St.render)(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(u.a,{store:kt.store,children:Object(r.jsx)(_t.a,{loading:null,persistor:kt.persistor,children:Object(r.jsx)(l.a,{children:Object(r.jsx)(I,{})})})})}),document.getElementById("root"))}},[[95,2,3]]]);
//# sourceMappingURL=main.64498998.chunk.js.map