(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{454:function(t,e,l){var content=l(505);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(17).default)("23ad1df4",content,!0,{sourceMap:!1})},504:function(t,e,l){"use strict";l(454)},505:function(t,e,l){var r=l(16)(!1);r.push([t.i,".order[data-v-834606d8]{padding:0 20px}",""]),t.exports=r},555:function(t,e,l){"use strict";l.r(e);var r={data:function(){return{orderData:[{orderId:123456,orderdate:"2022/03/11",totol:95,orderstatus:"已完成"}]}},methods:{handleClick:function(t){console.log(t),this.$router.push("/home/orderdetail")}}},o=(l(504),l(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"order"},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.orderData}},[l("el-table-column",{attrs:{prop:"orderId",label:"訂單編號"}}),t._v(" "),l("el-table-column",{attrs:{prop:"orderdate",label:"訂單日期"}}),t._v(" "),l("el-table-column",{attrs:{prop:"totol",label:"合計"}}),t._v(" "),l("el-table-column",{attrs:{prop:"orderstatus",label:"訂單狀態"}}),t._v(" "),l("el-table-column",{attrs:{fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){return t.handleClick(e.row)}}},[t._v("查看")])]}}])})],1)],1)}),[],!1,null,"834606d8",null);e.default=component.exports}}]);