"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{623:function(e,t,n){n.d(t,{Aj:function(){return u},Jh:function(){return d},XT:function(){return l},_r:function(){return h},s_:function(){return p}});var r=n(861),c=n(687),a=n.n(c),s=n(912),i="https://api.themoviedb.org/3",o="ced4c166bd9d448eb708ac1c947ec551",u=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(t,"&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},135:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(439),c=n(791),a=n(623),s=n(87),i=n(689),o=n(966),u="MovieDetails_Description__DW17q",p=n(184);function d(){var e,t,n=(0,c.useState)(),d=(0,r.Z)(n,2),h=d[0],l=d[1],f=(0,c.useState)(),v=(0,r.Z)(f,2),x=v[0],m=v[1],j=(0,c.useState)(),w=(0,r.Z)(j,2),k=w[0],_=w[1],g=(0,c.useState)(),Z=(0,r.Z)(g,2),b=Z[0],y=Z[1],S=(0,c.useState)([]),C=(0,r.Z)(S,2),U=C[0],z=C[1],D=(0,c.useState)(),E=(0,r.Z)(D,2),M=E[0],T=E[1],q=(0,c.useState)(null),A=(0,r.Z)(q,2),G=A[0],H=A[1],J=(0,i.UO)().id,L=null!==(e=null===(t=(0,i.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies";return(0,c.useEffect)((function(){(0,a.s_)(J).then((function(e){l(e.title),m(e.poster_path),_(e.vote_average),y(e.overview),z(e.genres),T(e.release_date)})).catch((function(e){return H(e)}))}),[J]),(0,p.jsxs)("div",{children:[G&&(0,p.jsx)("h1",{children:"Error!"}),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.rU,{to:L,children:"Go back"}),(0,p.jsxs)("div",{className:u,children:[(0,p.jsx)("img",{src:x?"https://image.tmdb.org/t/p/w200/".concat(x):"https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns=",alt:h}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("h1",{children:[h,"(",M,")"]}),(0,p.jsxs)("p",{children:["User score: ",Math.round(10*k),"%"]}),(0,p.jsx)("h2",{children:"Overview"}),(0,p.jsx)("p",{children:b}),(0,p.jsx)("h2",{children:"Genres"}),(0,p.jsx)("p",{children:U.map((function(e){return e.name})).join(", ")})]})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h3",{children:"Additional information"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"Cast",state:{from:L},children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"Reviews",state:{from:L},children:"Reviews"})})]})]}),(0,p.jsx)(c.Suspense,{fallback:(0,p.jsx)(o.a,{}),children:(0,p.jsx)(i.j3,{})})]})]})}}}]);
//# sourceMappingURL=135.d0d4d0cb.chunk.js.map