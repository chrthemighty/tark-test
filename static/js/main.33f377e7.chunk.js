(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{10:function(e,t,r){e.exports={search_bar:"SearchBar_search_bar__199_m",search_bar__icon:"SearchBar_search_bar__icon__1CQkG",search_bar__input:"SearchBar_search_bar__input__3-01c"}},17:function(e,t,r){e.exports={git_search:"App_git_search__3EhtQ",git_search__title:"App_git_search__title__2VR_A"}},30:function(e,t,r){e.exports={users_list:"UserList_users_list__2tbOR"}},34:function(e,t,r){e.exports=r(82)},5:function(e,t,r){e.exports={user:"UserListItem_user__1Pdpw",user__info:"UserListItem_user__info__1t4xg",user__username:"UserListItem_user__username__3F1A5",user__avatar:"UserListItem_user__avatar__J4vTl",user__following:"UserListItem_user__following__2_ltb",user__followers:"UserListItem_user__followers__357-g"}},81:function(e,t,r){},82:function(e,t,r){"use strict";r.r(t);var a,n,s=r(0),c=r.n(s),u=r(9),i=r(4),o=r(29),l=r.n(o),_=function(e){var t=e.text;return c.a.createElement(s.Fragment,null,c.a.createElement("p",null,t))},m=r(5),d=r.n(m),f=function(e){var t=e.data,r=t.username,a=t.avatar,n=t.followers,s=t.following;return c.a.createElement("div",{className:d.a.user,onClick:function(){return window.open("https://github.com/".concat(r),"_blank")}},c.a.createElement("img",{src:a,alt:"Avatar",className:d.a.user__avatar}),c.a.createElement("div",{className:d.a.user__info},c.a.createElement("div",{className:d.a.user__username},r),c.a.createElement("div",{className:d.a.user__followers},n," followers"),c.a.createElement("div",{className:d.a.user__following},s," following")))},h=r(30),p=r.n(h),b=function(e){var t=e.users;return c.a.createElement("div",{className:p.a.users_list},t.map((function(e){return c.a.createElement(f,{key:e.username,data:e})})))};!function(e){e[e.Pending=0]="Pending",e[e.Fulfilled=1]="Fulfilled",e[e.Rejected=2]="Rejected"}(a||(a={})),function(e){e.None="",e.UsersNotFound="Users for your request were not found.",e.EmptyQuery="Enter something to search.",e.ServerIsUnavailable="GitSearch server is not available.",e.APILimitIsExceeded="Github API limit exceeded. Try again in a minute.",e.UnexpectedError="Unexpected error occured while fetching data."}(n||(n={}));var E,v={items:[],text:"",status:a.Fulfilled,error:n.None},g=r(31),w=r(33),x=function(e){return e.usersSearch.items},j=function(e){return e.usersSearch.status},y=function(e){return e.usersSearch.text},N=function(e){return e.usersSearch.error},U=r(15),k=r.n(U),O=r(32),S=r(16),I=r.n(S),L=r(6),A=Object(L.b)("usersSearch/searchUserByUsername",function(){var e=Object(O.a)(k.a.mark((function e(t){var r,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error(n.EmptyQuery);case 2:return E&&E.cancel(),E=I.a.CancelToken.source(),e.next=6,I.a.get("".concat("http://localhost:8080/api","/users/search?query=").concat(t),{cancelToken:E.token});case 6:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),F=r(7),P={setText:function(e,t){var r=t.payload;return Object(F.a)({},e,{text:r})}},R=Object(L.c)({name:"usersSearch",initialState:v,reducers:P,extraReducers:function(e){var t=e.addCase;t(A.pending,(function(e){return Object(F.a)({},e,{status:a.Pending,error:n.None})})),t(A.fulfilled,(function(e,t){var r=t.payload;return Object(F.a)({},e,{status:r.length?a.Fulfilled:a.Rejected,items:r,error:r.length?n.None:n.UsersNotFound})})),t(A.rejected,(function(e,t){var r,s=t.error.message;if("Cancel"===s)return Object(F.a)({},e);switch(s){case n.EmptyQuery:r=n.EmptyQuery;break;case"Error: Network Error":r=n.ServerIsUnavailable;break;case"Error: Request failed with status code 403":r=n.APILimitIsExceeded;break;default:r=n.UnexpectedError}return Object(F.a)({},e,{status:a.Rejected,error:r})}))}}),C=R.actions.setText,T=R.reducer,Q=r(10),B=r.n(Q),G=function(){var e=Object(i.c)(y),t=Object(i.b)();return c.a.createElement("div",{className:B.a.search_bar},c.a.createElement("input",{className:B.a.search_bar__input,type:"text",onKeyUp:function(r){"Enter"===r.key&&t(A(e))},onChange:function(e){t(C(e.target.value.toString().trim()))},value:e}),c.a.createElement("div",{onClick:function(){t(A(e))}},c.a.createElement(g.a,{icon:w.a,className:B.a.search_bar__icon})))},q=r(17),J=r.n(q),M=function(){var e=Object(i.c)(x),t=Object(i.c)(j),r=Object(i.c)(N),n=Object(s.useMemo)((function(){return r?c.a.createElement(_,{text:r}):t===a.Pending?c.a.createElement(l.a,{width:50,height:50,type:"ThreeDots",color:"#000000"}):c.a.createElement(b,{users:e})}),[r,t,e]);return c.a.createElement("div",{className:J.a.git_search},c.a.createElement("div",{className:J.a.git_search__title},"GitSearch"),c.a.createElement(G,null),n)},D=Object(L.a)({reducer:{usersSearch:T}});r(81);Object(u.render)(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,{store:D},c.a.createElement(M,null))),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.33f377e7.chunk.js.map