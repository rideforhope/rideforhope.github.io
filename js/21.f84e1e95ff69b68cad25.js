webpackJsonp([21],{149:function(t,s,e){"use strict";function a(t){e(253)}Object.defineProperty(s,"__esModule",{value:!0});var r=e(255),i=e(256),o=e(13),c=a,n=o(r.a,i.a,!1,c,"data-v-3409390d",null);s.default=n.exports},253:function(t,s,e){var a=e(254);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(141)("1c58e3f4",a,!0)},254:function(t,s,e){s=t.exports=e(140)(void 0),s.push([t.i,".last[data-v-3409390d]{margin-bottom:1rem}.rest[data-v-3409390d]{max-height:3rem}.top[data-v-3409390d]{padding-top:1rem}.btn[data-v-3409390d]{margin:.5rem .5rem .5rem 0;background-color:rgba(197,7,7,.8);color:#fff}.yellow[data-v-3409390d]{background-color:rgba(253,237,0,.939);color:#000}.small[data-v-3409390d]{font-size:.5rem}.white-text[data-v-3409390d]{color:#fff}.map[data-v-3409390d]{height:90vh;width:100%}.promo[data-v-3409390d]{background-color:rgba(0,128,128,.6)}",""])},255:function(t,s,e){"use strict";var a=e(1);s.a={name:"Nineteen",data:function(){return{route:[]}},components:{QLayout:a.s,QInput:a.o,QBtn:a.c,QGallery:a.m,QTransition:a.E,QCard:a.d,QCardMedia:a.g,QCardActions:a.e,QParallax:a.w,QCollapsible:a.k,QItem:a.p,QItemSide:a.r,QItemMain:a.q,QListHeader:a.u},mounted:function(){var t=this;this.$store.state.routes.forEach(function(s){if(s.url==t.$route.path)return t.route=s})},computed:{pictures:function(){return this.$store.state.pictures},routes:function(){return this.$store.state.routes},openRegistration:function(){return this.$store.state.openRegistration}},methods:{launch:function(t){Object(a.L)(t)}}}},256:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-layout",{staticClass:"black"},[e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"col-xs-11 col-md-10 black-back shadow-24"},[e("div",{staticClass:"row wrap justify-center"},[e("div",{staticClass:"col-xs-12"},[e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"col-xs-12 text-center"},[e("h2",{staticClass:"headline text-center white"},[t._v(t._s(t.route.length)+" Ride")]),t._v(" "),e("h5",{staticClass:"headline text-center white"},[t._v("\n                "+t._s(t.route.headline)+"\n              ")]),t._v(" "),e("hr",{staticClass:"hr"})])])])]),t._v(" "),e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"col-xs-12 col-lg-4 r-links"},[e("div",{staticClass:"row wrap justify-center"},[e("div",{staticClass:"col-xs-11 text-center spacers"},[t.openRegistration?e("q-btn",{staticClass:"btn",attrs:{"no-caps":""},on:{click:function(s){t.launch("https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D71518%26z%3D1546310361813")}}},[t._v("\n                Register\n                Now\n              ")]):e("q-btn",{staticClass:"btn",attrs:{"no-caps":""},on:{click:function(s){t.$router.push("/register")}}},[t._v("Register Now\n              ")]),t._v(" "),e("div",{staticClass:"top"},[t._v("\n                Regular Registration: "+t._s(t.route.reg)+"\n              ")]),t._v(" "),e("div",{staticClass:"top"},[t._v("\n                Early Registration: "+t._s(t.route.earlyReg)+"\n              ")]),t._v(" "),e("div",{staticClass:"top"},[t._v("\n                Discount offered for teams of 5 or more and for families. Contact for more details.\n              ")])],1)]),t._v(" "),e("div",{staticClass:"row wrap justify-center"},[e("div",{staticClass:"light-paragraph text-center col-xs-11 col-md-11 spacers"},[e("p",[t._v("Ride Day Registration opens at 6:00 AM")]),t._v(" "),e("hr",{staticClass:"ihr"}),t._v(" "),e("h4",[t._v(t._s(t.route.length)+" Start Time")]),t._v(" "),e("h5",[t._v(t._s(t.route.startTime))]),t._v(" "),e("hr",{staticClass:"ihr"}),t._v(" "),e("p",[t._v("\n                *Please be at the start line ready to ride at least 15 minutes\n                before posted start time.\n              ")])])]),t._v(" "),e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"col-xs-11 col-md-11 text-center border spacers"},[e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"col-xs-4"},[e("img",{staticClass:"responsive rest",attrs:{src:"https://res.cloudinary.com/treverscloud/image/upload/v1517598415/Bathroom_sign_xybmya.jpg",alt:"rest stop"}})]),t._v(" "),e("div",{staticClass:"col-xs-12 self-center"},[e("h5",[t._v("Rest Stops")]),t._v(" "),e("hr",{staticClass:"hr"})]),t._v(" "),t._l(t.route.restStops,function(s){return e("div",{staticClass:"col-xs-12 self-center"},[e("h6",[t._v(t._s(s))])])})],2)])]),t._v(" "),e("div",{staticClass:"row justify-center desktop-only"},[e("div",{staticClass:"col-xs-11 text-center spacers"},[e("div",{staticClass:"row justify-center"},[e("h5",{staticClass:"col-xs-12"},[t._v("Quick Links To Other Routes")]),t._v(" "),e("div",{staticClass:"col-xs-12"},[e("hr",{staticClass:"ihr"})]),t._v(" "),t._l(t.routes,function(s){return s.length!=t.route.length?e("q-btn",{staticClass:"col-xs-4 r-btn",attrs:{"no-caps":""},on:{click:function(e){t.$router.push(s.url.trim("/"))}}},[t._v(t._s(s.length))]):t._e()})],2)])]),t._v(" "),e("div",{staticClass:"row wrap justify-center desktop-only last"},[e("div",{staticClass:"col-xs-11 text-center spacers"},[e("q-btn",{staticClass:"btn",attrs:{"no-caps":""},on:{click:function(s){t.$router.push("climbs")}}},[t._v("Information About Climbs")])],1)])]),t._v(" "),e("div",{staticClass:"col-xs-12 col-lg-7 top-marg"},[e("div",{staticClass:"row wrap justify-center"},[e("q-card",{staticClass:"route col-xs-11 col-md-11 shadow-24"},[e("q-transition",{attrs:{appear:"",enter:"zoomIn",leave:"fadeOut"}},[e("div",[e("q-card-media",{staticClass:"desktop-only"},[e("iframe",{attrs:{id:"mapmyfitness_route",src:t.route.frame,height:"650px",width:"100%",frameborder:"0"}})]),t._v(" "),e("q-card-media",{staticClass:"mobile-only"},[e("iframe",{attrs:{id:"mapmyfitness_route",src:t.route.frameMobile,height:"650px",width:"100%",frameborder:"0"}})]),t._v(" "),e("div",{staticClass:"white small",attrs:{align:"center",label:"View More Map Options"}},t._l(t.route.otherMaps,function(s){return e("q-btn",{class:t.route.btnClass,attrs:{"no-caps":""},on:{click:function(e){t.launch(s.link)}}},[t._v("\n                      "+t._s(s.title))])}))],1)])],1)],1),t._v(" "),e("div",{staticClass:"row wrap justify-center"},[e("h6",{staticClass:"white text-center col-xs-11 spacers description text-justify"},[t._v("\n              "+t._s(t.route.description)+"\n            ")])]),t._v(" "),e("div",{staticClass:"row justify-center mobile-only"},[e("div",{staticClass:"col-xs-11 text-center spacers white"},[e("div",{staticClass:"row justify-center white"},[e("h5",{staticClass:"col-xs-12 text-center"},[t._v("Quick Links To Other Routes")]),t._v(" "),e("div",{staticClass:"col-xs-12"},[e("hr",{staticClass:"ihr"})]),t._v(" "),t._l(t.routes,function(s){return s.length!=t.route.length?e("q-btn",{staticClass:"col-xs-4 r-btn",attrs:{"no-caps":""},on:{click:function(e){t.$router.push(s.url.trim("/"))}}},[t._v(t._s(s.length))]):t._e()})],2)])]),t._v(" "),e("div",{staticClass:"row wrap justify-center mobile-only"},[e("div",{staticClass:"col-xs-11 text-center spacers bot-link"},[e("q-btn",{staticClass:"btn",attrs:{"no-caps":""},on:{click:function(s){t.$router.push("climbs")}}},[t._v("Information About Climbs")])],1)])])])])])])},r=[],i={render:a,staticRenderFns:r};s.a=i}});