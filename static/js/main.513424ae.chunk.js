(this.webpackJsonparcdevelopment=this.webpackJsonparcdevelopment||[]).push([[0],{63:function(e,t,a){e.exports=a.p+"static/media/logo.ea0de06c.svg"},69:function(e,t,a){e.exports=a(81)},81:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),c=a.n(r),i=a(27),l=a(10),m=a(121),s=a(65),u=Object(s.a)({palette:{common:{blue:"#0B72B9",orange:"#FFBA60"},primary:{main:"#0B72B9"},secondary:{main:"#FFBA60"}},typography:{tab:{fontFamily:"Raleway",textTransform:"none",fontWeight:700,fontSize:"1rem"},estimate:{fontFamily:"Pacifico",fontSize:"1rem",textTransform:"none",color:"white"}}}),d=a(35),p=a(28),b=a(34),v=a(111),E=a(113),f=a(123),h=a(114),g=a(115),x=a(126),w=a(117),I=a(124),k=a(116),y=a(84),O=a(127),j=a(118),C=a(119),S=a(120),N=a(64),B=a.n(N),F=a(17),M=a(122),P=a(112),R=a(63),T=a.n(R);function L(e){var t=e.children,a=Object(v.a)({disableHysteresis:!0,threshold:0});return o.a.cloneElement(t,{elevation:a?4:0})}var A=Object(M.a)((function(e){var t,a;return Object(P.a)({toolbarMargin:Object(b.a)({},e.mixins.toolbar,(t={marginBottom:"3em"},Object(p.a)(t,e.breakpoints.down("md"),{marginBottom:"2em"}),Object(p.a)(t,e.breakpoints.down("xs"),{marginBottom:"1.25em"}),t)),logo:(a={height:"8em"},Object(p.a)(a,e.breakpoints.down("md"),{height:"7em"}),Object(p.a)(a,e.breakpoints.down("xs"),{height:"5.5em"}),a),logoContainer:{padding:0,"&:hover":{backgroundColor:"transparent"}},tabContainer:{marginLeft:"auto"},tab:Object(b.a)({},e.typography.tab,{minWidth:10,marginLeft:"25px"}),button:Object(b.a)({},e.typography.estimate,{borderRadius:"50px",marginLeft:"50px",marginRight:"25px",height:"45px"}),menu:{backgroundColor:e.palette.common.blue,color:"white",borderRadius:"0px"},menuItem:Object(b.a)({},e.typography.tab,{opacity:.7,"&:hover":{opacity:1}}),drawer:{backgroundColor:e.palette.common.blue},drawerItem:Object(b.a)({},e.typography.tab,{color:"white",opacity:.7}),drawerItemEstimate:{backgroundColor:e.palette.common.orange},drawerIconContainer:{marginLeft:"auto","&:hover":{backgroundColor:"transparent"}},drawerIcon:{height:"50px",width:"50px"},drawerItemSelected:{"& .MuiListItemText-root":{opacity:1}},appbar:{zIndex:e.zIndex.modal+1}})})),z=function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),l=Object(d.a)(c,2),m=l[0],s=l[1],u=Object(n.useState)(!1),p=Object(d.a)(u,2),b=p[0],v=p[1],N=Object(n.useState)(!1),M=Object(d.a)(N,2),P=M[0],R=M[1],z=Object(n.useState)(0),D=Object(d.a)(z,2),W=D[0],H=D[1],J=A(),G=Object(F.a)(),q=Object(E.a)(G.breakpoints.down("md")),K=window&&/iPad|iPhone|iPod/.test(navigator.userAgent),Q=function(e){s(null),v(!1)},U=[{name:"Services",link:"/services",activeIndex:1,selectedIndex:0},{name:"Custom Software Development",link:"/customsoftware",activeIndex:1,selectedIndex:1},{name:"Mobile App Development",link:"/mobileapps",activeIndex:1,selectedIndex:2},{name:"Website Development",link:"/websites",activeIndex:1,selectedIndex:3}],V=[{name:"Home",link:"/",activeIndex:0},{name:"Services",link:"/services",activeIndex:1,ariaOwns:m?"simple-meny":void 0,ariaPopup:m?"true":void 0,mouseOver:function(e){s(e.currentTarget),v(!0)}},{name:"The Revolution",link:"/revolution",activeIndex:2},{name:"About us",link:"/about",activeIndex:3},{name:"Contact",link:"/contact",activeIndex:4}];Object(n.useEffect)((function(){[].concat(U,V).forEach((function(e){switch(window.location.pathname){case"".concat(e.link):a!==e.activeIndex&&(r(e.activeIndex),e.selectedIndex&&e.selectedIndex!==W&&H(e.selectedIndex))}}))}),[a,U,W,V]);var X=o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{className:J.tabContainer,value:a,onChange:function(e,t){r(t)},indicatorColor:"primary"},V.map((function(e){return o.a.createElement(h.a,{className:J.tab,component:i.b,to:e.link,label:e.name,"aria-owns":e.ariaOwns,"aria-haspopup":e.ariaPopup,onMouseOver:e.mouseOver,key:e.name})}))),o.a.createElement(g.a,{variant:"contained",color:"secondary",className:J.button},"Free Estimate"),o.a.createElement(x.a,{id:"simple-menu",anchorEl:m,open:b,onClose:Q,classes:{paper:J.menu},MenuListProps:{onMouseLeave:Q},elevation:0,style:{zIndex:1302},keepMounted:!0},U.map((function(e,t){return o.a.createElement(w.a,{onClick:function(e){var a;a=t,s(null),v(!1),H(a),r(1)},component:i.b,to:e.link,classes:{root:J.menuItem},key:e.name,selected:t===W&&1===a},e.name)})))),Y=o.a.createElement(o.a.Fragment,null,o.a.createElement(I.a,{disableBackdropTransition:!K,disableDiscovery:K,open:P,onClose:function(){return R(!1)},onOpen:function(){return R(!0)},classes:{paper:J.drawer}},o.a.createElement("div",{className:J.toolbarMargin}),o.a.createElement(k.a,{disablePadding:!0},V.map((function(e){return o.a.createElement(y.a,{onClick:function(){R(!1),r(e.activeIndex)},divider:!0,button:!0,component:i.b,to:e.link,selected:a===e.activeIndex,key:e.name,classes:{selected:J.drawerItemSelected}},o.a.createElement(O.a,{className:J.drawerItem,disableTypography:!0},e.name))})),o.a.createElement(y.a,{onClick:function(){R(!1),r(5)},divider:!0,button:!0,component:i.b,to:"/estimate",classes:{root:J.drawerItemEstimate,selected:J.drawerItemSelected},selected:5===a},o.a.createElement(O.a,{className:J.drawerItem,disableTypography:!0},"Free Estimate")))),o.a.createElement(j.a,{onClick:function(){return R(!P)},disableRipple:!0,className:J.drawerIconContainer},o.a.createElement(B.a,{className:J.drawerIcon})));return o.a.createElement(o.a.Fragment,null,o.a.createElement(L,null,o.a.createElement(C.a,{position:"fixed",className:J.appbar},o.a.createElement(S.a,{disableGutters:!0},o.a.createElement(g.a,{component:i.b,to:"/",className:J.logoContainer,disableRipple:!0,onClick:function(){return r(0)}},o.a.createElement("img",{src:T.a,alt:"company logo",className:J.logo})),q?Y:X))),o.a.createElement("div",{className:J.toolbarMargin}))};var D=function(){return o.a.createElement(m.a,{theme:u},o.a.createElement(i.a,{basename:"".concat("/arcdevelopment","/")},o.a.createElement(z,null),o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:"/",component:function(){return o.a.createElement("div",null,"Home")}}),o.a.createElement(l.a,{exact:!0,path:"/services",component:function(){return o.a.createElement("div",null,"Services")}}),o.a.createElement(l.a,{exact:!0,path:"/customsoftware",component:function(){return o.a.createElement("div",null,"Custom software")}}),o.a.createElement(l.a,{exact:!0,path:"/mobileapps",component:function(){return o.a.createElement("div",null,"Mobile apps")}}),o.a.createElement(l.a,{exact:!0,path:"/websites",component:function(){return o.a.createElement("div",null,"Websites")}}),o.a.createElement(l.a,{exact:!0,path:"/revolution",component:function(){return o.a.createElement("div",null,"Revolution")}}),o.a.createElement(l.a,{exact:!0,path:"/about",component:function(){return o.a.createElement("div",null,"About")}}),o.a.createElement(l.a,{exact:!0,path:"/contact",component:function(){return o.a.createElement("div",null,"Contact")}}),o.a.createElement(l.a,{exact:!0,path:"/estimate",component:function(){return o.a.createElement("div",null,"Estimate")}}))))};c.a.render(o.a.createElement(D,null),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.513424ae.chunk.js.map