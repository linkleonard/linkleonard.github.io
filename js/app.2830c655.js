(function(e){function a(a){for(var n,i,o=a[0],l=a[1],c=a[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(a);while(p.length)p.shift()();return s.push.apply(s,c||[]),t()}function t(){for(var e,a=0;a<s.length;a++){for(var t=s[a],n=!0,o=1;o<t.length;o++){var l=t[o];0!==r[l]&&(n=!1)}n&&(s.splice(a--,1),e=i(i.s=t[0]))}return e}var n={},r={app:0},s=[];function i(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)i.d(t,n,function(a){return e[a]}.bind(null,n));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var u=l;s.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},1458:function(e,a,t){},"1d9d":function(e,a,t){},"4b95":function(e,a,t){},"4f81":function(e,a,t){"use strict";var n=t("1d9d"),r=t.n(n);r.a},"50da":function(e,a,t){},"55ec":function(e,a,t){},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},s=[],i={name:"app"},o=i,l=(t("5c0b"),t("2877")),c=Object(l["a"])(o,r,s,!1,null,null,null),u=c.exports,d=t("8c4f"),p=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("site-header"),t("about"),t("skills"),t("projects"),t("site-footer")],1)},m=[],g=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"projects"},[t("h2",[e._v("Projects")]),t("ul",e._l(e.projects,(function(a){return t("li",{key:a.name},[t("a",{style:{backgroundImage:"url("+a.background+")"},attrs:{href:a.uri,target:"_blank"}},[t("span",[e._v(e._s(a.name))]),t("div",{staticClass:"overlay",style:{backgroundImage:"url("+a.backgroundBlur+")"}})]),t("div",{staticClass:"description"},e._l(a.description,(function(a){return t("p",{key:a.slice(0,5)},[e._v(e._s(a))])})),0)])})),0)])},f=[],v=t("83e4"),b=t.n(v),h=t("dd4a"),y=t.n(h),_=t("949a"),j=t.n(_),k=t("ce17"),w=t.n(k),S=t("af1b"),x=t.n(S),O=t("7f7b"),T=t.n(O),C=[{name:"Skate Smooth",uri:"https://www.leonaard.me/skate-smooth/",background:b.a,backgroundBlur:y.a,description:["A visual road quality index targeted towards skateboarders.","Features an integration with the Google Maps API, with data persistence powered by HTML5 Local Storage."]},{name:"Tapcat",uri:"https://play.google.com/store/apps/details?id=com.wildcardstudios.tapcat",background:j.a,backgroundBlur:w.a,description:["Simple infinite runner for iOS and Android.","High score system with social sharing capability via Facebook and high score tracking via Google Play Services."]},{name:"Area 52",uri:"https://play.google.com/store/apps/details?id=com.wildcardstudios.tap",background:x.a,backgroundBlur:T.a,description:["Arcade fidget-clicker for Android.","Rapid-prototyped arcade game built in Unity3D, heavily utilizing its animations engine, event system."]}],P={name:"HelloWorld",data:function(){return{projects:C}},components:{}},A=P,I=(t("58c4"),Object(l["a"])(A,g,f,!1,null,"59ec1982",null)),D=I.exports,E=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("nav",[t("img",{attrs:{src:e.Profile}}),t("h1",{staticClass:"username"},[e._v(e._s(e.username))])])},F=[],L=t("c3e7"),M=t.n(L),N={name:"About",data:function(){return{username:"Leonard Law",Profile:M.a}}},B=N,H=(t("4f81"),Object(l["a"])(B,E,F,!1,null,"6c2a3a58",null)),$=H.exports,R=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("footer",[e._v(" Home crafted by Leonard Law ")])},U=[],G={name:"SiteFooter",data:function(){return{}}},q=G,J=(t("8ebf"),Object(l["a"])(q,R,U,!1,null,"0577e451",null)),V=J.exports,W=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",[t("h2",[e._v("About")]),t("div",[e._v(e._s(e.roles))]),t("p",[e._v(" I believe that high quality code is correct, maintainable, and performant. I am well versed in the entire software development pipeline, with experience in rapid prototyping, agile development, and setting up automated production deployments. ")]),t("p",[e._v("I am also a classically trained pianist, and self-taught fledging guitarist.")]),t("p",[e._v(" I also have an interest in the game development and related fields. I occasionally immerse myself with Unity3D and experiment with small toy projects. ")]),t("ul",e._l(e.social,(function(a){return t("li",{key:a.name},[t("a",{staticClass:"social",attrs:{href:a.uri}},[t("icon",{attrs:{name:a.iconName}}),t("span",[e._v(e._s(a.name))])],1)])})),0),t("a",{staticClass:"button",attrs:{href:"https://static.linkleonard.me/upload/resume.pdf"}},[e._v("View my Resume")])])},Q=[],z=(t("a15b"),t("0874")),K=(t("fa3b"),t("31b7"),{name:"About",data:function(){return{roles:["Full Stack Engineer","Musician","Gamer"].join(", "),social:[{name:"GitHub",iconName:"brands/github-alt",uri:"https://github.com/linkleonard"},{name:"LinkedIn",iconName:"brands/linkedin",uri:"https://www.linkedin.com/in/leonard-law-502a9626/"}]}},components:{Icon:z["a"]}}),X=K,Y=(t("772e"),Object(l["a"])(X,W,Q,!1,null,"57181683",null)),Z=Y.exports,ee=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"projects"},[t("h2",[e._v("Skills")]),t("div",{staticClass:"filters"},[t("div",{staticClass:"label"},[e._v("Filters")]),t("div",{staticClass:"controls"},[e._l(e.allTags,(function(a){return t("button",{key:a,class:e.classNames({checked:e.selectedTags[a]}),on:{click:function(t){e.selectedTags[a]=!e.selectedTags[a]}}},[e._v(" "+e._s(a)+" ")])})),t("button",{on:{click:e.clearFilters}},[e._v("Clear All")])],2)]),t("ul",{class:e.classNames({expanded:e.expanded})},e._l(e.itemsToDisplay,(function(a){return t("li",{key:a.name,class:e.classNames({active:e.shouldShowItem(a)})},[t("div",{staticClass:"wrapper"},[t("div",[e._v(e._s(a.name))])]),t("div",{staticClass:"wrapper"},[t("div",[t("bar",{attrs:{fill:a.value}})],1)])])})),0),t("button",{staticClass:"show-more",on:{click:e.toggleExpand}},[e._v(" "+e._s(e.expanded?"Show less":"Show more")+" ")])])},ae=[],te=t("ade3"),ne=function(e,a){var t=a._c;return t("span",{staticClass:"wrapper"},[t("span",{style:{width:100*a.props.fill+"%"}})])},re=[],se=(t("a9e3"),{functional:!0,name:"Bar",props:{fill:{type:Number,required:!0}}}),ie=se,oe=(t("bb65"),Object(l["a"])(ie,ne,re,!0,null,"12e5cd49",null)),le=oe.exports,ce=t("4d26"),ue=t.n(ce),de=t("2ef0"),pe="tools",me="language",ge="platform",fe="misc",ve="framework",be="technology",he="backend",ye="frontend",_e={name:"Skills",methods:{classNames:ue.a,shouldShowItem:function(e){var a=Object(de["keys"])(Object(de["pickBy"])(this.selectedTags,(function(e){return e})));return 0===a.length||Object(de["intersection"])(e.tags,a).length>0},toggleExpand:function(){this.expanded=!this.expanded},clearFilters:function(){var e=this;Object(de["each"])(Object(de["keys"])(this.selectedTags),(function(a){e.selectedTags[a]=!1}))}},data:function(){var e;return{selectedTags:(e={},Object(te["a"])(e,pe,!1),Object(te["a"])(e,me,!1),Object(te["a"])(e,ge,!1),Object(te["a"])(e,fe,!1),Object(te["a"])(e,ve,!1),Object(te["a"])(e,be,!1),Object(te["a"])(e,he,!1),Object(te["a"])(e,ye,!1),e),allTags:[pe,me,ge,fe,ve,be,he,ye],items:[{name:"Apache",value:.75,tags:[be]},{name:"AWS",value:.5,tags:[ge]},{name:"Bash",value:.75,tags:[me,he]},{name:"C",value:.2,tags:[me]},{name:"C#",value:.75,tags:[me]},{name:"C++",value:.5,tags:[me]},{name:"Celery",value:.75,tags:[be,he]},{name:"CSS",value:1,tags:[me,ye]},{name:"Database Modeling",value:1,tags:[fe,he]},{name:"Django REST Framework",value:1,tags:[ve,he]},{name:"Django",value:1,tags:[ve,he]},{name:"Docker",value:.5,tags:[ge]},{name:"Functional Programming",value:.75,tags:[fe]},{name:"Git",value:1,tags:[pe]},{name:"Java",value:.5,tags:[me]},{name:"Javascript",value:1,tags:[me,ye]},{name:"Lodash",value:1,tags:[ve,ye]},{name:"Mailgun",value:.75,tags:[ge]},{name:"MySQL",value:1,tags:[be,he]},{name:"Nginx",value:.75,tags:[be]},{name:"PostgreSQL",value:1,tags:[be,he]},{name:"Python",value:1,tags:[me,he]},{name:"React",value:.75,tags:[ve,ye]},{name:"Redux",value:.75,tags:[ve,ye]},{name:"RESTful API Design",value:1,tags:[fe,he]},{name:"SCSS",value:1,tags:[me,ye]},{name:"Sentry",value:.75,tags:[ge]},{name:"Square",value:.75,tags:[ge]},{name:"SteamVR",value:.5,tags:[ve]},{name:"Stripe",value:.75,tags:[ge]},{name:"Supervisor",value:.75,tags:[be]},{name:"SVN",value:.75,tags:[pe]},{name:"Test Driven Development",value:1,tags:[fe]},{name:"Twilio",value:.5,tags:[ge]},{name:"Underscore",value:1,tags:[ve,ye]},{name:"Unit Testing",value:.9,tags:[fe]},{name:"Unity3D",value:.75,tags:[ve]},{name:"Unix Tools",value:.75,tags:[pe]},{name:"Websockets",value:.5,tags:[be]}],expanded:!1}},components:{Bar:le},computed:{itemsToDisplay:function(){return Object(de["sortBy"])(this.items,(function(e){return e.value}))}}},je=_e,ke=(t("db9c"),Object(l["a"])(je,ee,ae,!1,null,"09fc4233",null)),we=ke.exports,Se={name:"Home",components:{Projects:D,About:Z,Skills:we,SiteHeader:$,SiteFooter:V}},xe=Se,Oe=Object(l["a"])(xe,p,m,!1,null,null,null),Te=Oe.exports;n["a"].use(d["a"]);var Ce=new d["a"]({routes:[{path:"/",name:"Home",component:Te}]});n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(u)},router:Ce}).$mount("#app")},"58c4":function(e,a,t){"use strict";var n=t("1458"),r=t.n(n);r.a},"5c0b":function(e,a,t){"use strict";var n=t("9c0c"),r=t.n(n);r.a},"772e":function(e,a,t){"use strict";var n=t("be3e"),r=t.n(n);r.a},"7f7b":function(e,a,t){e.exports=t.p+"img/area-52-blur.300d2433.jpg"},"83e4":function(e,a,t){e.exports=t.p+"img/longboard.a18d6ab4.jpg"},"8ebf":function(e,a,t){"use strict";var n=t("55ec"),r=t.n(n);r.a},"949a":function(e,a,t){e.exports=t.p+"img/tapcat.21ba8168.jpg"},"9c0c":function(e,a,t){},af1b:function(e,a,t){e.exports=t.p+"img/area-52.a3d558a1.jpg"},bb65:function(e,a,t){"use strict";var n=t("4b95"),r=t.n(n);r.a},be3e:function(e,a,t){},c3e7:function(e,a,t){e.exports=t.p+"img/profile.e772d957.png"},ce17:function(e,a,t){e.exports=t.p+"img/tapcat-blur.2e1e817c.jpg"},db9c:function(e,a,t){"use strict";var n=t("50da"),r=t.n(n);r.a},dd4a:function(e,a,t){e.exports=t.p+"img/longboard-blur.694a1bbc.jpg"}});
//# sourceMappingURL=app.2830c655.js.map