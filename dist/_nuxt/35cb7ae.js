(window.webpackJsonp=window.webpackJsonp||[]).push([[31,15,16],{457:function(e,t,r){var content=r(489);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("1a6aab9a",content,!0,{sourceMap:!1})},458:function(e,t,r){var content=r(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("6481bc4e",content,!0,{sourceMap:!1})},488:function(e,t,r){"use strict";r(457)},489:function(e,t,r){var n=r(14)(!1);n.push([e.i,".memberRegister[data-v-ec240204]{width:100%;min-width:600px;padding:0 40px}.title[data-v-ec240204]{text-align:center;margin-top:2%}.register_input[data-v-ec240204]{margin-bottom:2%}.register_btn[data-v-ec240204]{margin-top:5%}[data-v-ec240204] .el-divider--horizontal{margin:16px 0}@media (max-width:415px){.memberRegister[data-v-ec240204]{min-width:300px}}",""]),e.exports=n},490:function(e,t,r){(function(r){var n;!function(r,o){e.exports=function(r){"use strict";var o,c=(r=r||{}).Base64,l="2.6.4",d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h=function(e){for(var t={},i=0,r=e.length;i<r;i++)t[e.charAt(i)]=i;return t}(d),m=String.fromCharCode,f=function(e){if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?m(192|t>>>6)+m(128|63&t):m(224|t>>>12&15)+m(128|t>>>6&63)+m(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return m(240|t>>>18&7)+m(128|t>>>12&63)+m(128|t>>>6&63)+m(128|63&t)},v=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,x=function(u){return u.replace(v,f)},w=function(e){var t=[0,2,1][e.length%3],r=e.charCodeAt(0)<<16|(e.length>1?e.charCodeAt(1):0)<<8|(e.length>2?e.charCodeAt(2):0);return[d.charAt(r>>>18),d.charAt(r>>>12&63),t>=2?"=":d.charAt(r>>>6&63),t>=1?"=":d.charAt(63&r)].join("")},_=r.btoa&&"function"==typeof r.btoa?function(b){return r.btoa(b)}:function(b){if(b.match(/[^\x00-\xFF]/))throw new RangeError("The string contains invalid characters.");return b.replace(/[\s\S]{1,3}/g,w)},A=function(u){return _(x(String(u)))},y=function(e){return e.replace(/[+\/]/g,(function(e){return"+"==e?"-":"_"})).replace(/=/g,"")},C=function(u,e){return e?y(A(u)):A(u)},k=function(u){return C(u,!0)};r.Uint8Array&&(o=function(a,e){for(var t="",i=0,r=a.length;i<r;i+=3){var n=a[i],o=a[i+1],c=a[i+2],l=n<<16|o<<8|c;t+=d.charAt(l>>>18)+d.charAt(l>>>12&63)+(void 0!==o?d.charAt(l>>>6&63):"=")+(void 0!==c?d.charAt(63&l):"=")}return e?y(t):t});var S,B=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,F=function(e){switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return m(55296+(t>>>10))+m(56320+(1023&t));case 3:return m((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return m((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},I=function(b){return b.replace(B,F)},j=function(e){var t=e.length,r=t%4,n=(t>0?h[e.charAt(0)]<<18:0)|(t>1?h[e.charAt(1)]<<12:0)|(t>2?h[e.charAt(2)]<<6:0)|(t>3?h[e.charAt(3)]:0),o=[m(n>>>16),m(n>>>8&255),m(255&n)];return o.length-=[0,0,2,1][r],o.join("")},R=r.atob&&"function"==typeof r.atob?function(a){return r.atob(a)}:function(a){return a.replace(/\S{1,4}/g,j)},M=function(a){return R(String(a).replace(/[^A-Za-z0-9\+\/]/g,""))},O=function(a){return I(R(a))},$=function(a){return String(a).replace(/[-_]/g,(function(e){return"-"==e?"+":"/"})).replace(/[^A-Za-z0-9\+\/]/g,"")},E=function(a){return O($(a))};r.Uint8Array&&(S=function(a){return Uint8Array.from(M($(a)),(function(e){return e.charCodeAt(0)}))});var U=function(){var e=r.Base64;return r.Base64=c,e};if(r.Base64={VERSION:l,atob:M,btoa:_,fromBase64:E,toBase64:C,utob:x,encode:C,encodeURI:k,btou:I,decode:E,noConflict:U,fromUint8Array:o,toUint8Array:S},"function"==typeof Object.defineProperty){var D=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}};r.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",D((function(){return E(this)}))),Object.defineProperty(String.prototype,"toBase64",D((function(e){return C(this,e)}))),Object.defineProperty(String.prototype,"toBase64URI",D((function(){return C(this,!0)})))}}r.Meteor&&(Base64=r.Base64);e.exports?e.exports.Base64=r.Base64:void 0===(n=function(){return r.Base64}.apply(t,[]))||(e.exports=n);return{Base64:r.Base64}}(r)}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==r?r:this)}).call(this,r(26))},491:function(e,t,r){"use strict";r(458)},492:function(e,t,r){var n=r(14)(!1);n.push([e.i,".memberLogin[data-v-172eca53]{width:100%;min-width:600px;padding:0 40px}.title[data-v-172eca53]{text-align:center;margin-top:2%}.login_input[data-v-172eca53]{margin-bottom:4%}[data-v-172eca53] .el-divider--horizontal{margin:16px 0}@media (max-width:415px){.memberLogin[data-v-172eca53]{min-width:300px;padding:0 40px}}",""]),e.exports=n},535:function(e,t,r){var content=r(579);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("eac7f0fc",content,!0,{sourceMap:!1})},557:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{username:"",email:"",password:"",sex:"",birth:""}},methods:{register:function(){this.$message({showClose:!0,message:"註冊成功"})}}},o=(r(488),r(4)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"memberRegister"},[r("div",{staticClass:"title"},[r("h4",[e._v("註冊帳號")]),e._v(" "),r("el-divider")],1),e._v(" "),r("div",{staticClass:"username register_input"},[r("el-input",{attrs:{placeholder:"請輸入用戶名稱"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e._v(" "),r("div",{staticClass:"email register_input"},[r("el-input",{attrs:{placeholder:"請輸入電子郵件"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),r("div",{staticClass:"password register_input"},[r("el-input",{attrs:{placeholder:"請輸入密碼"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),r("div",{staticClass:"sex register_input"},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"請輸入性別"},model:{value:e.sex,callback:function(t){e.sex=t},expression:"sex"}},[r("el-option",{attrs:{value:"男"}},[e._v("男")]),e._v(" "),r("el-option",{attrs:{value:"女"}},[e._v("女")])],1)],1),e._v(" "),r("div",{staticClass:"birth register_input"},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"請輸入生日"},model:{value:e.birth,callback:function(t){e.birth=t},expression:"birth"}})],1),e._v(" "),r("div",{staticClass:"register_btn register_input"},[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:e.register}},[e._v("註冊")])],1)])}),[],!1,null,"ec240204",null);t.default=component.exports},558:function(e,t,r){"use strict";r.r(t);var n=r(490).Base64,o={layout:"prod_layout",data:function(){return{checked:!1,email:"",password:""}},mounted:function(){localStorage.getItem("userId")&&(this.email=localStorage.getItem("userId"),this.password=n.decode(localStorage.getItem("password")),this.checked=!0)},methods:{login:function(){if(this.checked){var e=n.encode(this.password);localStorage.setItem("userId",this.email),localStorage.setItem("password",e)}else localStorage.removeItem("userId"),localStorage.removeItem("password");if(localStorage.setItem("username","perry"),"123456"===this.email&&"123456"===this.password){var data={email:this.email,username:"Perry",password:this.password,auth:"user",token:"123456"};this.$store.dispatch("member/setdata",data),this.$router.push("/home/products")}else if("Admin"===this.email&&"Admin"===this.password){var t={email:this.email,username:"Admin",password:this.password,auth:"Admin",token:"Admin"};this.$store.dispatch("member/setdata",t),this.$router.push("/admin/admhome")}else this.$router.push("/login")}}},c=(r(491),r(4)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"memberLogin"},[r("div",{staticClass:"title"},[r("h4",[e._v("登入")]),e._v(" "),r("el-divider")],1),e._v(" "),r("div",{staticClass:"username login_input"},[r("el-input",{attrs:{placeholder:"請輸入電子郵件"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),r("div",{staticClass:"password login_input"},[r("el-input",{attrs:{placeholder:"請輸入密碼"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),r("div",{staticClass:"remember login_input"},[r("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("Remember Me")])],1),e._v(" "),r("div",{staticClass:"loginBtn login_input"},[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:e.login}},[e._v("登入")])],1),e._v(" "),r("div",{staticClass:"forgetpsw login_input"},[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"success"}},[e._v("忘記密碼？")])],1)])}),[],!1,null,"172eca53",null);t.default=component.exports},578:function(e,t,r){"use strict";r(535)},579:function(e,t,r){var n=r(14)(!1);n.push([e.i,".login[data-v-781f5622]{margin-top:3%;display:flex;justify-content:center;align-items:center;width:100vw}@media (max-width:415px){.login[data-v-781f5622]{margin-top:12%}}",""]),e.exports=n},625:function(e,t,r){"use strict";r.r(t);var n=r(557),o=r(558),c={layout:"prod_layout",data:function(){return{activeName:"login"}},methods:{handleClick:function(e,t){console.log(e,t)}},components:{memberRegister:n.default,memberLogin:o.default}},l=(r(578),r(4)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("el-tabs",{attrs:{type:"border-card",stretch:!0},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"註冊會員",name:"register"}},[r("memberRegister")],1),e._v(" "),r("el-tab-pane",{attrs:{label:"會員登入",name:"login"}},[r("memberLogin")],1)],1)],1)}),[],!1,null,"781f5622",null);t.default=component.exports}}]);