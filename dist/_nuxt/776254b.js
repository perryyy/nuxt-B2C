(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{459:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},460:function(t,e,r){var content=r(498);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("985a3cdc",content,!0,{sourceMap:!1})},493:function(t,e,r){"use strict";var n=r(13),o=r(2),l=r(3),c=r(140),d=r(22),f=r(17),v=r(287),m=r(50),_=r(139),h=r(286),x=r(5),w=r(93).f,C=r(43).f,N=r(19).f,E=r(459),I=r(494).trim,y="Number",k=o.Number,$=k.prototype,T=o.TypeError,F=l("".slice),S=l("".charCodeAt),A=function(t){var e=h(t,"number");return"bigint"==typeof e?e:M(e)},M=function(t){var e,r,n,o,l,c,d,code,f=h(t,"number");if(_(f))throw T("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=I(f),43===(e=S(f,0))||45===e){if(88===(r=S(f,2))||120===r)return NaN}else if(48===e){switch(S(f,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(c=(l=F(f,2)).length,d=0;d<c;d++)if((code=S(l,d))<48||code>o)return NaN;return parseInt(l,n)}return+f};if(c(y,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var z,O=function(t){var e=arguments.length<1?0:k(A(t)),r=this;return m($,r)&&x((function(){E(r)}))?v(Object(e),r,O):e},R=n?w(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;R.length>j;j++)f(k,z=R[j])&&!f(O,z)&&N(O,z,C(k,z));O.prototype=$,$.constructor=O,d(o,y,O)}},494:function(t,e,r){var n=r(3),o=r(27),l=r(16),c=r(495),d=n("".replace),f="["+c+"]",v=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),_=function(t){return function(e){var r=l(o(e));return 1&t&&(r=d(r,v,"")),2&t&&(r=d(r,m,"")),r}};t.exports={start:_(1),end:_(2),trim:_(3)}},495:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},496:function(t,e,r){"use strict";var n=r(7),o=r(2),l=r(3),c=r(60),d=r(459),f=r(288),v=r(5),m=o.RangeError,_=o.String,h=Math.floor,x=l(f),w=l("".slice),C=l(1..toFixed),N=function(t,e,r){return 0===e?r:e%2==1?N(t,e-1,r*t):N(t*t,e/2,r)},E=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=h(n/1e7)},I=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=h(r/t),r=r%t*1e7},y=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=_(data[t]);s=""===s?e:s+x("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:v((function(){return"0.000"!==C(8e-5,3)||"1"!==C(.9,0)||"1.25"!==C(1.255,2)||"1000000000000000128"!==C(0xde0b6b3a7640080,0)}))||!v((function(){C({})}))},{toFixed:function(t){var e,r,n,o,l=d(this),f=c(t),data=[0,0,0,0,0,0],v="",h="0";if(f<0||f>20)throw m("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return _(l);if(l<0&&(v="-",l=-l),l>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(l*N(2,69,1))-69)<0?l*N(2,-e,1):l/N(2,e,1),r*=4503599627370496,(e=52-e)>0){for(E(data,0,r),n=f;n>=7;)E(data,1e7,0),n-=7;for(E(data,N(10,n,1),0),n=e-1;n>=23;)I(data,1<<23),n-=23;I(data,1<<n),E(data,1,1),I(data,2),h=y(data)}else E(data,0,r),E(data,1<<-e,0),h=y(data)+x("0",f);return h=f>0?v+((o=h.length)<=f?"0."+x("0",f-o)+h:w(h,0,o-f)+"."+w(h,o-f)):v+h}})},497:function(t,e,r){"use strict";r(460)},498:function(t,e,r){var n=r(14)(!1);n.push([t.i,".memberdata[data-v-77909964]{padding:0 20px}.top[data-v-77909964]{display:flex}.left[data-v-77909964],.right[data-v-77909964]{width:50%;padding:0 20px}.bottom[data-v-77909964]{width:100%;display:flex;justify-content:end}.badge[data-v-77909964]{color:#fff}.target[data-v-77909964]{margin-top:2%;padding:10px;background-color:#f8f8f8}.content[data-v-77909964]{display:flex;width:100%;flex-direction:row}.upgrade[data-v-77909964]{color:#999;font-weight:700;width:20%;margin:0}.codition[data-v-77909964],.upgrade[data-v-77909964]{font-size:14px;line-height:14px}.codition[data-v-77909964]{color:#333}.role[data-v-77909964]{margin-top:2%;color:#337ab7}.edit_memberdata[data-v-77909964]{margin-top:6%}.edit_title[data-v-77909964]{font-size:18px}.edit_title[data-v-77909964],.icon[data-v-77909964]{color:#5b5b5b;font-weight:600}.icon[data-v-77909964]{font-size:20px}.dataform[data-v-77909964]{margin-top:4%}.amount[data-v-77909964]{margin-top:2%;padding-right:1%;width:100%;display:flex;justify-content:space-between;font-size:14px}.target_amt[data-v-77909964]{color:#999}.progress_area[data-v-77909964]{margin-top:2%}[data-v-77909964] .el-progress-bar{padding:0;margin:0}@media (max-width:415px){.left[data-v-77909964],.right[data-v-77909964]{width:100%}.content[data-v-77909964],.top[data-v-77909964]{display:flex;flex-direction:column}.content[data-v-77909964],.upgrade[data-v-77909964]{width:100%}.upgrade[data-v-77909964]{margin-bottom:4%}}",""]),t.exports=n},559:function(t,e,r){"use strict";r.r(e);r(493),r(496);var n={data:function(){return{email:"",phone:"",sex:"",birth:"",now_amt:85,target_amt:888}},computed:{percentage:function(){return Number((this.now_amt/this.target_amt*100).toFixed(2))},username:{get:function(){return this.$store.state.member.username},set:function(t){this.$store.commit("member/setusername",t)}},password:{get:function(){return this.$store.state.member.password},set:function(t){this.$store.commit("member/setpassword",t)}}}},o=(r(497),r(4)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"memberdata"},[r("div",{staticClass:"top"},[r("div",{staticClass:"left"},[r("div",{staticClass:"vip_level"},[r("div",{staticClass:"icon"},[r("i",{staticClass:"el-icon-user-solid"}),t._v(" "+t._s(t.username)+" "),r("span",{staticClass:"badge badge-pill badge-warning"},[t._v("一般會員")])]),t._v(" "),r("div",{staticClass:"target"},[t._m(0),t._v(" "),r("div",{staticClass:"role"},[r("el-link",{attrs:{type:"primary",underline:!1}},[t._v("查看會員等級資料")])],1)])]),t._v(" "),r("div",{staticClass:"edit_memberdata"},[t._m(1),t._v(" "),r("el-form",{staticClass:"dataform",attrs:{"label-width":"80px","label-position":"left"}},[r("el-form-item",{attrs:{label:"姓名"}},[r("el-input",{model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"電郵"}},[r("el-input",{model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"手機號碼"}},[r("el-input",{model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"密碼"}},[r("el-input",{attrs:{"show-password":""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"性別"}},[r("el-input",{model:{value:t.sex,callback:function(e){t.sex=e},expression:"sex"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"生日"}},[r("el-input",{model:{value:t.birth,callback:function(e){t.birth=e},expression:"birth"}})],1)],1)],1)]),t._v(" "),r("div",{staticClass:"right"},[t._m(2),t._v(" "),r("div",{staticClass:"amount"},[r("div",{staticClass:"now_amt"},[t._v("NT $ "+t._s(t.now_amt))]),t._v(" "),r("div",{staticClass:"target_amt"},[t._v("差NT $ "+t._s(t.target_amt-t.now_amt)+"升級")])]),t._v(" "),r("el-progress",{staticClass:"progress_area",staticStyle:{width:"100%"},attrs:{color:"#ffc107",percentage:t.percentage}})],1)]),t._v(" "),r("div",{staticClass:"bottom"},[r("el-button",{attrs:{type:"info",size:"medium"}},[t._v("儲存")])],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("p",{staticClass:"upgrade"},[r("i",{staticClass:"el-icon-medal-1"}),t._v("升級到銀卡")]),t._v(" "),r("span",{staticClass:"codition"},[t._v("2個月內累積消費額達NT＄888 即可升級")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"icon"},[r("i",{staticClass:"el-icon-edit"}),r("span",{staticClass:"edit_title"},[t._v(" 編輯會員資料")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"edit_title"},[r("i",{staticClass:"el-icon-medal-1"}),t._v(" 兩個月內累積消費額")])}],!1,null,"77909964",null);e.default=component.exports}}]);