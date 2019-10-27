(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["a2a21826"],{"1b99":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-layout",{staticClass:"black"},[e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"col-xs-11 col-md-10 black-back shadow-24"},[e("div",{staticClass:"row wrap justify-center"},[e("div",{staticClass:"col-xs-12"},[e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"col-xs-12 text-center"},[e("h2",{staticClass:"headline text-center white"},[t._v(t._s(t.route.length)+" Ride")]),e("h5",{staticClass:"headline text-center white"},[t._v("\n                "+t._s(t.route.headline)+"\n              ")]),e("hr",{staticClass:"hr"})])])])]),e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"col-xs-12 col-lg-4 r-links"},[e("div",{staticClass:"row wrap justify-center"},[e("div",{staticClass:"col-xs-11 text-center spacers"},[t.openRegistration?e("q-btn",{staticClass:"btn spacers",attrs:{"no-caps":""},on:{click:function(s){return t.openURL("https://www.imathlete.com/#/legacy?url=%2Fevents%2FEventOverview.aspx%3FfEID%3D71518%26z%3D1546310361813")}}},[t._v("\n                Register\n                Now\n              ")]):e("q-btn",{staticClass:"btn spacers",attrs:{"no-caps":""},on:{click:function(s){return t.$router.push("/register")}}},[t._v("Register Now\n              ")]),e("div",{staticClass:"top"},[t._v("\n                Regular Registration: "+t._s(t.route.reg)+"\n              ")]),e("div",{staticClass:"top"},[t._v("\n                Early Registration: "+t._s(t.route.earlyReg)+"\n              ")]),e("div",{staticClass:"top"},[t._v("\n                Discount offered for teams of 5 or more and for families. Contact for more details.\n              ")])],1)]),e("div",{staticClass:"row wrap justify-center"},[e("div",{staticClass:"light-paragraph text-center col-xs-11 col-md-11 spacers"},[e("p",[t._v("Ride Day Registration opens at 6:00 AM")]),e("hr",{staticClass:"width_90"}),e("h4",[t._v(t._s(t.route.length)+" Start Time")]),e("h5",[t._v(t._s(t.route.startTime))]),e("hr",{staticClass:"width_90"}),e("p",[t._v("\n                *Please be at the start line ready to ride at least 15 minutes\n                before posted start time.\n              ")])])]),e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"col-xs-11 col-md-11 text-center border spacers"},[e("div",{staticClass:"row justify-center"},[e("div",{staticClass:"col-xs-4"},[e("img",{staticClass:"responsive rest",attrs:{src:"https://res.cloudinary.com/treverscloud/image/upload/v1517598415/Bathroom_sign_xybmya.jpg",alt:"rest stop"}})]),e("div",{staticClass:"col-xs-12 self-center"},[e("h5",[t._v("Rest Stops")]),e("hr",{staticClass:"hr"})]),t._l(t.route.restStops,function(s){return e("div",{staticClass:"text-h6 q-mt-sm"},[t._v(t._s(s))])})],2)])]),e("div",{staticClass:"row justify-center desktop-only"},[e("div",{staticClass:"col-xs-11 text-center spacers"},[e("div",{staticClass:"row justify-center"},[e("h5",{staticClass:"col-xs-12"},[t._v("Quick Links To Other Routes")]),e("div",{staticClass:"col-xs-12"},[e("hr",{staticClass:"width_90"})]),t._l(t.routes,function(s){return s.length!=t.route.length?e("q-btn",{staticClass:"col-xs-4 btn spacers",attrs:{"no-caps":""},on:{click:function(e){t.$router.push(s.url.trim("/"))}}},[t._v("\n                  "+t._s(s.length))]):t._e()})],2)])]),e("div",{staticClass:"row wrap justify-center desktop-only last"},[e("div",{staticClass:"col-xs-11 text-center spacers"},[e("div",{staticClass:"row justify-center"},[e("h5",{staticClass:"col-xs-12"},[t._v("Resources")]),e("div",{staticClass:"col-xs-12"},[e("hr",{staticClass:"width_90"})]),e("q-btn",{staticClass:"btn spacers",attrs:{"no-caps":""},on:{click:function(s){return t.$router.push("climbs")}}},[t._v("Information About Climbs")]),e("q-btn",{staticClass:"btn spacers",attrs:{"no-caps":""},on:{click:function(s){return t.$router.push("rules")}}},[t._v("Rules Of The Road")])],1)])])]),e("div",{staticClass:"col-xs-12 col-lg-7 top-marg"},[e("div",{staticClass:"row wrap justify-center"},[e("q-card",{staticClass:"route col-xs-11 col-md-11 shadow-24"},[e("q-card-section",{staticClass:"desktop-only"},[e("iframe",{attrs:{id:"mapmyfitness_route",src:t.route.frame,height:"650px",width:"100%",frameborder:"0"}})]),e("q-card-section",{staticClass:"mobile-only"},[e("iframe",{attrs:{id:"mapmyfitness_route",src:t.route.frameMobile,height:"650px",width:"100%",frameborder:"0"}})]),e("div",{staticClass:"white small",attrs:{align:"center",label:"View More Map Options"}},t._l(t.route.otherMaps,function(s){return e("q-btn",{class:t.route.btnClass,attrs:{"no-caps":""},on:{click:function(e){return t.openURL(s.link)}}},[t._v("\n                  "+t._s(s.title))])}),1)],1)],1),e("div",{staticClass:"row wrap justify-center"},[e("h6",{staticClass:"white text-center col-xs-11 spacers description text-justify"},[t._v("\n              "+t._s(t.route.description)+"\n            ")])]),e("div",{staticClass:"row justify-center mobile-only"},[e("div",{staticClass:"col-xs-11 text-center spacers white"},[e("div",{staticClass:"row justify-center white"},[e("h5",{staticClass:"col-xs-12 text-center"},[t._v("Quick Links To Other Routes")]),e("div",{staticClass:"col-xs-12"},[e("hr",{staticClass:"width_90"})]),t._l(t.routes,function(s){return s.length!=t.route.length?e("q-btn",{staticClass:"col-xs-4 btn spacers",attrs:{"no-caps":""},on:{click:function(e){t.$router.push(s.url.trim("/"))}}},[t._v("\n                  "+t._s(s.length))]):t._e()})],2)])]),e("div",{staticClass:"row wrap justify-center mobile-only bot-link"},[e("div",{staticClass:"col-xs-11 text-center spacers white"},[e("div",{staticClass:"row justify-center white"},[e("h5",{staticClass:"col-xs-12 text-center"},[t._v("Resources")]),e("div",{staticClass:"col-xs-12"},[e("hr",{staticClass:"width_90"})]),e("div",{staticClass:"col-xs-11 text-center"},[e("q-btn",{staticClass:"btn spacers",attrs:{"no-caps":""},on:{click:function(s){return t.$router.push("climbs")}}},[t._v("Information About Climbs\n                  ")]),e("q-btn",{staticClass:"btn spacers",attrs:{"no-caps":""},on:{click:function(s){return t.$router.push("rules")}}},[t._v("Rules Of The Road\n                  ")])],1)])])])])])])])])},r=[],i=e("b06b"),o={name:"Nine",data:function(){return{route:[]}},mounted:function(){var t=this;this.$store.state.routes.routes.forEach(function(s){if(s.url==t.$route.path)return t.route=s})},computed:{pictures:function(){return this.$store.state.gallery.pictures},routes:function(){return this.$store.state.routes.routes},openRegistration:function(){return this.$store.state.state.openRegistration}},methods:{openURL:i["a"]}},c=o,n=(e("f597"),e("2877")),l=Object(n["a"])(c,a,r,!1,null,"e8c1718a",null);s["default"]=l.exports},a6d6:function(t,s,e){},b06b:function(t,s,e){"use strict";var a=e("0967"),r=e("2b0e");s["a"]=function(t,s){var e=window.open;if(!0===a["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)e=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(t,{openExternal:!0})}else if(void 0!==r["a"].prototype.$q.electron)return r["a"].prototype.$q.electron.shell.openExternal(t);var i=e(t,"_blank");if(i)return i.focus(),i;s&&s()}},f597:function(t,s,e){"use strict";var a=e("a6d6"),r=e.n(a);r.a}}]);