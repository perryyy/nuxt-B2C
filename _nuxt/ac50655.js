(window.webpackJsonp=window.webpackJsonp||[]).push([[47,2,3,9,10,20],{440:function(t,e,o){var content=o(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("6cffb622",content,!0,{sourceMap:!1})},441:function(t,e,o){var content=o(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("21f95a8a",content,!0,{sourceMap:!1})},455:function(t,e,o){"use strict";o(440)},456:function(t,e,o){var n=o(16)(!1);n.push([t.i,".cardlist[data-v-d83e57d6]{padding:0 40px}.close-icon[data-v-d83e57d6]{cursor:pointer}",""]),t.exports=n},457:function(t,e,o){var content=o(507);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("68e62cce",content,!0,{sourceMap:!1})},458:function(t,e,o){"use strict";o(441)},459:function(t,e,o){var n=o(16)(!1);n.push([t.i,".item[data-v-72dd2729]{width:100%;padding:10px;display:flex;flex-direction:column}.item_title[data-v-72dd2729]{padding-left:2%;font-size:12px;line-height:12px;text-align:left}.item_header[data-v-72dd2729]{width:100%;display:flex;align-items:start}.item_body[data-v-72dd2729]{width:100%;padding:0 10px;font-size:12px;line-height:12px;margin-top:2%}.item_price[data-v-72dd2729]{text-align:right}.item_footer[data-v-72dd2729]{width:100%;padding:0 10px 0 0;display:flex;justify-content:space-between;font-size:12px;line-height:12px;margin-top:2%}.border-bottom[data-v-72dd2729]{padding-bottom:10px;margin-top:5%}",""]),t.exports=n},460:function(t,e,o){var content=o(509);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("b8f0723a",content,!0,{sourceMap:!1})},461:function(t,e,o){var content=o(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("2af93515",content,!0,{sourceMap:!1})},483:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{}},methods:{handleClick:function(t){console.log(t),this.$router.push("/home/orderdetail")},removeitem:function(a){console.log(a),this.$store.dispatch("cart/removeCart",a)},goLink:function(t){console.log(t)}},created:function(){console.log(this.prod_details)},computed:{prod_details:function(){return this.$store.state.cart.carts},subtotal:function(){return(this.scope.row.itemprice-this.scope.row.itemsale)*this.scope.row.itemqty}}},r=(o(455),o(4)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cardlist"},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.prod_details}},[o("el-table-column",{attrs:{label:"商品資料",width:"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[o("img",{attrs:{src:t.row.img,"min-width":"60",height:"60"}})]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"itemname",label:"",width:"260",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"itemsale",label:"優惠",width:"180",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"itemprice",label:"單件價格",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"itemqty",label:"數量",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{label:"小計",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{staticClass:"little",on:{click:function(o){return t.goLink(e.row)}}},[t._v(t._s((e.row.itemprice-e.row.itemsale)*e.row.itemqty))])]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("i",{staticClass:"el-icon-circle-close close-icon",on:{click:function(o){return t.removeitem(e.$index)}}})]}}])})],1)],1)}),[],!1,null,"d83e57d6",null);e.default=component.exports},484:function(t,e,o){"use strict";o.r(e);var n={props:{data:Array},data:function(){return{fakeimg:"https://fakeimg.pl/60x60/",qty:1}},created:function(){console.log(this.data)}},r=(o(458),o(4)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"item"},t._l(t.data,(function(e,n){return o("div",{key:n,staticClass:"border-bottom"},[o("div",{staticClass:"item_header"},[o("div",{staticClass:"item_img"},[o("img",{attrs:{src:t.fakeimg,alt:""}})]),t._v(" "),o("div",{staticClass:"item_title"},[t._v(t._s(e.itemname))])]),t._v(" "),o("div",{staticClass:"item_body"},[o("div",{staticClass:"item_price"},[t._v("NT＄"+t._s(e.itemprice-e.itemsale))])]),t._v(" "),o("div",{staticClass:"item_footer"},[o("div",{staticClass:"item_qty"},[t._v("數量："+t._s(t.qty))]),t._v(" "),o("div",{staticClass:"item_subtotal"},[t._v("NT＄"+t._s(e.itemprice-e.itemsale*t.qty))])])])})),0)}),[],!1,null,"72dd2729",null);e.default=component.exports},506:function(t,e,o){"use strict";o(457)},507:function(t,e,o){var n=o(16)(!1);n.push([t.i,".ordercart[data-v-7ce2bdc7]{width:100%}.title[data-v-7ce2bdc7]{background-color:#e4e2e2;font-size:20px;line-height:20px;padding:16px;font-weight:600}.promotion[data-v-7ce2bdc7],.title[data-v-7ce2bdc7]{width:100%;text-align:left}.promotion[data-v-7ce2bdc7]{padding:40px;display:flex;flex-direction:column;border-top:1px solid #e4e2e2}.promotion_top[data-v-7ce2bdc7]{width:100%;display:flex;justify-content:space-between;font-weight:600}.promotion_right[data-v-7ce2bdc7]{text-decoration:underline;cursor:pointer}.promotion_bottom[data-v-7ce2bdc7]{width:100%;font-weight:600;margin-top:1%}.tag[data-v-7ce2bdc7]{background-color:#e4e2e2;font-size:14px;line-height:14px;padding:4px 20px;width:100px}.promotionmsg[data-v-7ce2bdc7]{margin-left:10%;width:100%}.msgarea[data-v-7ce2bdc7]{display:flex;margin-left:2%;width:90%}.green[data-v-7ce2bdc7]{color:#90ee90}.bottom_wrap[data-v-7ce2bdc7]{width:100%;display:flex}.rolemsg[data-v-7ce2bdc7]{margin-right:1%}",""]),t.exports=n},508:function(t,e,o){"use strict";o(460)},509:function(t,e,o){var n=o(16)(!1);n.push([t.i,".title[data-v-3f28b847]{background-color:#e4e2e2;font-size:20px;line-height:20px;padding:16px;font-weight:600}.promotion[data-v-3f28b847],.title[data-v-3f28b847]{width:100%;text-align:left}.promotion[data-v-3f28b847]{padding:10px;display:flex;flex-direction:column;border-top:1px solid #e4e2e2}.promotion_top[data-v-3f28b847]{width:100%;display:flex;justify-content:space-between;font-weight:600}.promotion_right[data-v-3f28b847]{text-decoration:underline;cursor:pointer}.promotion_bottom[data-v-3f28b847]{width:100%;font-weight:600;margin-top:3%}.tag[data-v-3f28b847]{background-color:#cbf0cb;font-size:10px;line-height:14px;padding:4px 10px;width:100px;text-align:center}.promotionmsg[data-v-3f28b847]{margin-left:10%;width:100%}.msgarea[data-v-3f28b847]{display:flex;margin-left:2%;width:90%;font-size:10px;line-height:14px;align-items:center}.green[data-v-3f28b847]{color:#90ee90}.bottom_wrap[data-v-3f28b847]{width:100%;display:flex}.rolemsg[data-v-3f28b847]{margin-right:1%}",""]),t.exports=n},510:function(t,e,o){"use strict";o(461)},511:function(t,e,o){var n=o(16)(!1);n.push([t.i,".cartdetail[data-v-44d074d1]{width:100%;padding:0;display:flex}.paymethods[data-v-44d074d1]{width:60%;padding:0 2% 0 0}.orderdetails[data-v-44d074d1]{width:40%}.title[data-v-44d074d1]{border-bottom:1px solid #e4e2e2;font-weight:600;background-color:#e4e2e2;font-size:20px;text-align:left;line-height:20px;padding:16px}.content[data-v-44d074d1]{padding:40px;text-align:left}.content[data-v-44d074d1],.location[data-v-44d074d1]{width:100%}[data-v-44d074d1] .el-select{width:80%}.delivermethods[data-v-44d074d1],.paymethod[data-v-44d074d1]{width:100%;margin-top:2%}.msg[data-v-44d074d1]{width:100%;text-align:left;padding:0 40px 40px}.form-control[data-v-44d074d1]{margin-top:2%}.between[data-v-44d074d1]{display:flex;justify-content:space-between;font-weight:600}[data-v-44d074d1] .el-button{width:100%}.checkout[data-v-44d074d1]{margin-top:2%}.sale[data-v-44d074d1]{width:100%;display:flex;flex-direction:column}.code[data-v-44d074d1]{font-weight:600;text-decoration:underline;color:#6495ed;cursor:pointer}.recommend[data-v-44d074d1]{margin-top:3%}.code_input[data-v-44d074d1]{margin-top:1%;display:flex}.Apply[data-v-44d074d1]{width:50%;margin-left:2%}@media (max-width:415px){.paymethods[data-v-44d074d1]{width:100%;padding:0}.orderdetails[data-v-44d074d1]{width:100%;margin-top:2%}.cartdetail[data-v-44d074d1]{display:flex;flex-direction:column;padding:0;align-items:center}}",""]),t.exports=n},545:function(t,e,o){var content=o(599);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("29d161ce",content,!0,{sourceMap:!1})},556:function(t,e,o){"use strict";o.r(e);o(48),o(34),o(27),o(10),o(72),o(35),o(73);var n=o(28),r=o(74);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{length:1}},methods:{continueShopping:function(){this.$router.push("/home/products")}},components:{cardlist:o(483).default},computed:l(l({},Object(r.b)({totalAmt:"cart/totalAmt"})),{},{balance:function(){return 488-this.totalAmt}})},v=(o(506),o(4)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ordercart"},[o("div",{staticClass:"card"},[o("div",{staticClass:"title"},[t._v("購物車 ("+t._s(t.length)+"件) "),o("i",{staticClass:"el-icon-share"})]),t._v(" "),o("div",{staticClass:"list"},[o("cardlist")],1),t._v(" "),o("div",{staticClass:"promotion"},[o("div",{staticClass:"promotion_top"},[o("div",{staticClass:"promotion_left"},[t._v("上有更多精彩優惠等著你！目前未享用：")]),t._v(" "),o("div",{staticClass:"promotion_right",on:{click:t.continueShopping}},[t._v("繼續選購")])]),t._v(" "),o("div",{staticClass:"promotion_bottom"},[o("div",{staticClass:"bottom_wrap"},[t._m(0),t._v(" "),o("div",{staticClass:"msgarea"},[o("p",{staticClass:"rolemsg"},[t._v("一般會員滿488免運")]),t.totalAmt<488?o("p",{staticClass:"green"},[t._v("再買NT＄"+t._s(t.balance)+"即可免運")]):t._e()])])])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("p",{staticClass:"tag"},[t._v(" 優惠促銷")])])}],!1,null,"7ce2bdc7",null);e.default=component.exports},557:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{length:1}},components:{item:o(484).default},computed:{cart:function(){return this.$store.state.cart.carts}}},r=(o(508),o(4)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mob_ordercart"},[o("div",{staticClass:"card"},[o("div",{staticClass:"title"},[t._v("購物車 ("+t._s(t.length)+"件) "),o("i",{staticClass:"el-icon-share"})]),t._v(" "),o("div",{staticClass:"list"},[o("item",{attrs:{data:t.cart}})],1),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"promotion"},[o("div",{staticClass:"promotion_top"}),t._v(" "),o("div",{staticClass:"promotion_bottom"},[o("div",{staticClass:"bottom_wrap"},[o("div",[o("p",{staticClass:"tag"},[t._v(" 優惠促銷")])]),t._v(" "),o("div",{staticClass:"msgarea"},[o("p",{staticClass:"rolemsg"},[t._v("一般會員滿488免運")])])])])])}],!1,null,"3f28b847",null);e.default=component.exports},558:function(t,e,o){"use strict";o.r(e);o(48),o(34),o(27),o(10),o(72),o(35),o(73);var n=o(28),r=o(74);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{location:"台灣",delivermethods:"買家自取",paymethod:"信用卡",msg1:"1.未完成刷卡請勿切換視窗或者瀏覽器，避免結帳失敗。",msg2:"",fee:0,recommendisShow:!1,discountisShow:!1,inputDiscount:"",inputRecommend:""}},methods:{test:function(){var data={location:this.location,delivermethods:this.delivermethods,paymethod:this.paymethod};console.log(data)},gocheckout:function(){this.$store.dispatch("setting/addactive"),this.$store.dispatch("cart/setfinallytotal",this.total),this.$router.push("/home/buy/inputdata"),document.body.scrollTop=0,document.documentElement.scrollTop=0}},watch:{delivermethods:function(t,e){"全家便利取貨付款"===t?(this.msg1="1. 購買一雙鞋以上會超過全家運送規定體積，請選宅配，否則視情況拆鞋盒後寄出",this.msg2="2. 收件者名稱必須要是本人全名同身分證，否則無法取貨"):(this.msg1="1.未完成刷卡請勿切換視窗或者瀏覽器，避免結帳失敗。",this.msg2="2.若購買後商品退換貨，將由系統做信用卡退刷")}},computed:l(l({},Object(r.b)({subtotal:"cart/totalAmt"})),{},{total:function(){return this.subtotal+this.freight+this.fee},freight:function(){return this.subtotal>=488?0:60}})},v=(o(510),o(4)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cartdetail"},[o("div",{staticClass:"paymethods"},[o("div",{staticClass:"card"},[o("div",{staticClass:"title"},[t._v("\n                選擇送貨或付款方式\n            ")]),t._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"location"},[o("span",{staticClass:"content_title"},[t._v("送餐地點：")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.location=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"台灣"}},[t._v("台灣")])])]),t._v(" "),o("div",{staticClass:"delivermethods"},[o("span",{staticClass:"content_title"},[t._v("送餐方式：")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.delivermethods,expression:"delivermethods"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.delivermethods=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"買家自取"}},[t._v("買家自取")]),t._v(" "),o("option",{attrs:{value:"商家外送"}},[t._v("商家外送")])])]),t._v(" "),o("div",{staticClass:"paymethod"},[o("span",{staticClass:"content_title"},[t._v("付款方式：")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.paymethod,expression:"paymethod"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.paymethod=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"信用卡"}},[t._v("信用卡")]),t._v(" "),o("option",{attrs:{value:"現金"}},[t._v("現金")])])])]),t._v(" "),o("div",{staticClass:"msg"},[o("div",{staticClass:"content_title"},[t._v("請注意：")]),t._v(" "),o("div",{staticClass:"msg1"},[t._v(t._s(t.msg1))]),t._v(" "),o("div",{staticClass:"msg2"},[t._v(t._s(t.msg2))])])])]),t._v(" "),o("div",{staticClass:"orderdetails"},[o("div",{staticClass:"card"},[o("div",{staticClass:"title"},[t._v("訂單資訊")]),t._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"subtotal between"},[o("span",[t._v("小計：")]),o("p",[t._v(t._s(t.subtotal))])]),t._v(" "),o("div",{staticClass:"freight between"},[o("span",[t._v("運費：")]),o("p",[t._v(t._s(t.freight))])]),t._v(" "),o("div",{staticClass:"fee between"},[o("span",[t._v("附加費：")]),o("p",[t._v(t._s(t.fee))])]),t._v(" "),o("div",{staticClass:"sale"},[o("div",{staticClass:"discount"},[o("span",{staticClass:"code",on:{click:function(e){t.discountisShow=!0}}},[t._v("優惠代碼")]),t._v(" "),t.discountisShow?o("div",{staticClass:"code_input"},[o("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.inputDiscount,callback:function(e){t.inputDiscount=e},expression:"inputDiscount"}}),t._v(" "),o("el-button",{staticClass:"Apply",attrs:{type:"info",plain:""}},[t._v("套用")])],1):t._e()]),t._v(" "),o("div",{staticClass:"recommend"},[o("span",{staticClass:"code",on:{click:function(e){t.recommendisShow=!0}}},[t._v("推薦代碼")]),t._v(" "),t.recommendisShow?o("div",{staticClass:"code_input"},[o("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.inputRecommend,callback:function(e){t.inputRecommend=e},expression:"inputRecommend"}}),t._v(" "),o("el-button",{staticClass:"Apply",attrs:{type:"info",plain:""}},[t._v("套用")])],1):t._e()])]),t._v(" "),o("el-divider"),t._v(" "),o("div",{staticClass:"total"},[o("div",{staticClass:"amt between"},[o("span",[t._v("合計：")]),o("p",[t._v("NT$"+t._s(t.total))])]),t._v(" "),o("div",{staticClass:"checkout"},[o("el-button",{staticStyle:{width:"'100%'"},attrs:{type:"success"},on:{click:function(e){return t.gocheckout()}}},[t._v("前往結帳")])],1)])],1)])])])}),[],!1,null,"44d074d1",null);e.default=component.exports},598:function(t,e,o){"use strict";o(545)},599:function(t,e,o){var n=o(16)(!1);n.push([t.i,".carts[data-v-0fc3b6d2],.details[data-v-0fc3b6d2]{width:100%;margin-top:3%}",""]),t.exports=n},628:function(t,e,o){"use strict";o.r(e);var n=o(556),r=o(557),c=o(558),l={components:{ordercart:n.default,cartdetail:c.default,mob_orderCart:r.default},data:function(){return{nowcart:"ordercart"}},created:function(){""===this.$store.state.member.token&&this.$router.push("/Login");var t=this.$store.state.setting.isMobile;this.nowcart=!1===t?"ordercart":"mob_orderCart"}},d=(o(598),o(4)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"buycart"},[o("div",{staticClass:"carts"},[o(t.nowcart,{tag:"component"})],1),t._v(" "),o("div",{staticClass:"details"},[o("cartdetail")],1)])}),[],!1,null,"0fc3b6d2",null);e.default=component.exports}}]);