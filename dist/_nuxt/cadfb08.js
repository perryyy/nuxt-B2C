(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3],{440:function(t,e,o){var content=o(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("6cffb622",content,!0,{sourceMap:!1})},455:function(t,e,o){"use strict";o(440)},456:function(t,e,o){var r=o(16)(!1);r.push([t.i,".cardlist[data-v-d83e57d6]{padding:0 40px}.close-icon[data-v-d83e57d6]{cursor:pointer}",""]),t.exports=r},457:function(t,e,o){var content=o(507);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("68e62cce",content,!0,{sourceMap:!1})},483:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{}},methods:{handleClick:function(t){console.log(t),this.$router.push("/home/orderdetail")},removeitem:function(a){console.log(a),this.$store.dispatch("cart/removeCart",a)},goLink:function(t){console.log(t)}},created:function(){console.log(this.prod_details)},computed:{prod_details:function(){return this.$store.state.cart.carts},subtotal:function(){return(this.scope.row.itemprice-this.scope.row.itemsale)*this.scope.row.itemqty}}},c=(o(455),o(4)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cardlist"},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.prod_details}},[o("el-table-column",{attrs:{label:"商品資料",width:"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[o("img",{attrs:{src:t.row.img,"min-width":"60",height:"60"}})]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"itemname",label:"",width:"260",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"itemsale",label:"優惠",width:"180",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"itemprice",label:"單件價格",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"itemqty",label:"數量",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{label:"小計",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{staticClass:"little",on:{click:function(o){return t.goLink(e.row)}}},[t._v(t._s((e.row.itemprice-e.row.itemsale)*e.row.itemqty))])]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("i",{staticClass:"el-icon-circle-close close-icon",on:{click:function(o){return t.removeitem(e.$index)}}})]}}])})],1)],1)}),[],!1,null,"d83e57d6",null);e.default=component.exports},506:function(t,e,o){"use strict";o(457)},507:function(t,e,o){var r=o(16)(!1);r.push([t.i,".ordercart[data-v-7ce2bdc7]{width:100%}.title[data-v-7ce2bdc7]{background-color:#e4e2e2;font-size:20px;line-height:20px;padding:16px;font-weight:600}.promotion[data-v-7ce2bdc7],.title[data-v-7ce2bdc7]{width:100%;text-align:left}.promotion[data-v-7ce2bdc7]{padding:40px;display:flex;flex-direction:column;border-top:1px solid #e4e2e2}.promotion_top[data-v-7ce2bdc7]{width:100%;display:flex;justify-content:space-between;font-weight:600}.promotion_right[data-v-7ce2bdc7]{text-decoration:underline;cursor:pointer}.promotion_bottom[data-v-7ce2bdc7]{width:100%;font-weight:600;margin-top:1%}.tag[data-v-7ce2bdc7]{background-color:#e4e2e2;font-size:14px;line-height:14px;padding:4px 20px;width:100px}.promotionmsg[data-v-7ce2bdc7]{margin-left:10%;width:100%}.msgarea[data-v-7ce2bdc7]{display:flex;margin-left:2%;width:90%}.green[data-v-7ce2bdc7]{color:#90ee90}.bottom_wrap[data-v-7ce2bdc7]{width:100%;display:flex}.rolemsg[data-v-7ce2bdc7]{margin-right:1%}",""]),t.exports=r},556:function(t,e,o){"use strict";o.r(e);o(48),o(34),o(27),o(10),o(72),o(35),o(73);var r=o(28),c=o(74);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{length:1}},methods:{continueShopping:function(){this.$router.push("/home/products")}},components:{cardlist:o(483).default},computed:l(l({},Object(c.b)({totalAmt:"cart/totalAmt"})),{},{balance:function(){return 488-this.totalAmt}})},f=(o(506),o(4)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ordercart"},[o("div",{staticClass:"card"},[o("div",{staticClass:"title"},[t._v("購物車 ("+t._s(t.length)+"件) "),o("i",{staticClass:"el-icon-share"})]),t._v(" "),o("div",{staticClass:"list"},[o("cardlist")],1),t._v(" "),o("div",{staticClass:"promotion"},[o("div",{staticClass:"promotion_top"},[o("div",{staticClass:"promotion_left"},[t._v("上有更多精彩優惠等著你！目前未享用：")]),t._v(" "),o("div",{staticClass:"promotion_right",on:{click:t.continueShopping}},[t._v("繼續選購")])]),t._v(" "),o("div",{staticClass:"promotion_bottom"},[o("div",{staticClass:"bottom_wrap"},[t._m(0),t._v(" "),o("div",{staticClass:"msgarea"},[o("p",{staticClass:"rolemsg"},[t._v("一般會員滿488免運")]),t.totalAmt<488?o("p",{staticClass:"green"},[t._v("再買NT＄"+t._s(t.balance)+"即可免運")]):t._e()])])])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("p",{staticClass:"tag"},[t._v(" 優惠促銷")])])}],!1,null,"7ce2bdc7",null);e.default=component.exports}}]);