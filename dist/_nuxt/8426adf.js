(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{442:function(e,t,n){var content=n(463);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("f3494cd0",content,!0,{sourceMap:!1})},462:function(e,t,n){"use strict";n(442)},463:function(e,t,n){var o=n(16)(!1);o.push([e.i,".memberdata[data-v-5d678fb4]{padding:0 10px}.title[data-v-5d678fb4]{width:100%;background-color:#e4e2e2;font-size:16px;text-align:left;line-height:16px;padding:10px;font-weight:600}.content[data-v-5d678fb4]{padding:20px;text-align:left}.form-control[data-v-5d678fb4]{margin-top:1%}.usermail[data-v-5d678fb4],.username[data-v-5d678fb4],.userphone[data-v-5d678fb4]{margin-top:2%}",""]),e.exports=o},485:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{email:"perry@gmail.com"}},computed:{username:{get:function(){return this.$store.state.member.username},set:function(e){this.$store.commit("member/setusername",e)}},phonenumber:{get:function(){return this.$store.state.member.phonenumber},set:function(e){this.$store.commit("member/setphonenumber",e)}}}},r=(n(462),n(4)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"memberdata"},[n("div",{staticClass:"border"},[n("div",{staticClass:"title"},[e._v("顧客資料")]),e._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"username"},[n("span",{staticClass:"spantitle"},[e._v("顧客名稱")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"usermail"},[n("span",{staticClass:"spantitle"},[e._v("電子信箱")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"userphone"},[n("span",{staticClass:"spantitle"},[e._v("電話號碼")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phonenumber,expression:"phonenumber"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Phone"},domProps:{value:e.phonenumber},on:{input:function(t){t.target.composing||(e.phonenumber=t.target.value)}}})])])])])}),[],!1,null,"5d678fb4",null);t.default=component.exports}}]);