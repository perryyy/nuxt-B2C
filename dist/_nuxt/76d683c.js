(window.webpackJsonp=window.webpackJsonp||[]).push([[50,26,28],{437:function(t,e,d){var content=d(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(17).default)("85eaa8e0",content,!0,{sourceMap:!1})},438:function(t,e,d){"use strict";d(437)},439:function(t,e,d){var r=d(16)(!1);r.push([t.i,".prod_card[data-v-375b8e6c]{display:flex;flex-wrap:wrap;text-align:center;justify-content:left;cursor:pointer;width:100%}.card[data-v-375b8e6c]{padding:2%;min-width:28%;max-width:28%;margin:0 1%;border:none;word-break:break-all}.font[data-v-375b8e6c]{text-align:center;font-size:14px;letter-spacing:.5px}.prod_price[data-v-375b8e6c]{font-weight:500;color:grey}.price[data-v-375b8e6c]{text-decoration:line-through}.bottom[data-v-375b8e6c]{margin-top:4%}@media (max-width:415px){.card[data-v-375b8e6c]{min-width:48%;max-width:48%}}",""]),t.exports=r},448:function(t,e,d){"use strict";d.r(e);var r={data:function(){return{image:"https://fakeimg.pl/250x300/",height:300,width:250}},created:function(){!1===this.$store.state.setting.isMobile?(this.image="https://fakeimg.pl/250x300/",this.height=300,this.width=250):(this.image="https://fakeimg.pl/120x120/",this.height=120,this.width=120)},props:{products:Array},methods:{goProd:function(t){console.log(t),this.$store.dispatch("product/changeproduct",t),this.$router.push("/home/product"),document.body.scrollTop=0,document.documentElement.scrollTop=0}}},o=(d(438),d(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"prod_card"},t._l(t.products,(function(e,r){return d("div",{key:r,staticClass:"card",on:{click:function(d){return t.goProd(e)}}},[d("div",{staticClass:"top"},[d("img",{attrs:{src:t.image,height:t.height,width:t.width}})]),t._v(" "),d("div",{staticClass:"bottom"},[d("div",{staticClass:"font prod_name"},[t._v(t._s(e.name))]),t._v(" "),d("div",{staticClass:"font prod_price",class:{price:e.sale}},[t._v("NT＄"+t._s(e.price))]),t._v(" "),e.sale?d("div",{staticClass:"font prod_price"},[t._v("NT＄"+t._s(e.price-e.sale))]):t._e()])])})),0)}),[],!1,null,"375b8e6c",null);e.default=component.exports},479:function(t,e,d){var content=d(523);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(17).default)("0ce4109d",content,!0,{sourceMap:!1})},522:function(t,e,d){"use strict";d(479)},523:function(t,e,d){var r=d(16)(!1);r.push([t.i,".other[data-v-8652e7e4],.title[data-v-8652e7e4]{width:100%}.title[data-v-8652e7e4]{text-align:center;font-size:24px;font-weight:700}.other_product[data-v-8652e7e4]{margin-top:3%;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;margin-left:10%}.card[data-v-8652e7e4]{width:30%;margin-right:2%}@media (max-width:415px){.other_product[data-v-8652e7e4]{display:flex;flex-direction:column;width:100%;align-items:center;margin:3% 0 0}}",""]),t.exports=r},548:function(t,e,d){var content=d(605);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(17).default)("1ee52720",content,!0,{sourceMap:!1})},564:function(t,e,d){"use strict";d.r(e);var r={components:{card:d(448).default},data:function(){return{products:[{name:"蘿蔔糕",price:40,sale:10},{name:"厚切牛肉堡",price:70,sale:0},{name:"果醬厚片",price:25,sale:0}]}}},o=(d(522),d(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"other"},[d("div",{staticClass:"title"},[t._v("推薦餐點")]),t._v(" "),d("div",{staticClass:"other_product"},[d("card",{attrs:{products:t.products}})],1)])}),[],!1,null,"8652e7e4",null);e.default=component.exports},604:function(t,e,d){"use strict";d(548)},605:function(t,e,d){var r=d(16)(!1);r.push([t.i,".product[data-v-0f1d7332]{display:flex;flex-direction:column;width:100%}.product_top[data-v-0f1d7332]{margin-top:5%;margin-left:10%;padding:0 120px;max-width:1200px;display:flex}.prod_conent[data-v-0f1d7332],.prod_img[data-v-0f1d7332]{display:flex;flex-direction:column}.prod_conent[data-v-0f1d7332]{padding-left:5%;min-width:50%;margin-left:5%;width:100vw}.item[data-v-0f1d7332]{width:100%}.item_name[data-v-0f1d7332]{font-size:24px;font-weight:600;width:100%;display:flex;justify-content:space-between}.item_price[data-v-0f1d7332]{margin-top:5%;color:#a8a8a8;font-weight:700;display:flex}.item_size[data-v-0f1d7332]{color:#a8a8a8;font-size:16px;margin-top:3%}.btn_cart[data-v-0f1d7332],.item_qty[data-v-0f1d7332]{margin-top:5%}[data-v-0f1d7332] .el-button--info{width:100%}.item_desc[data-v-0f1d7332],.middle[data-v-0f1d7332]{margin-top:3%}.el-carousel__item h3[data-v-0f1d7332]{color:#475669;font-size:14px;opacity:.75;line-height:200px;margin:0}.el-carousel__item[data-v-0f1d7332]:nth-child(2n){background-color:#99a9bf}.el-carousel__item[data-v-0f1d7332]:nth-child(odd){background-color:#d3dce6}.price[data-v-0f1d7332]{text-decoration:line-through}.font[data-v-0f1d7332]{text-align:center;font-size:16px;margin-right:4%}.product_bottom[data-v-0f1d7332]{margin-top:5%}.star[data-v-0f1d7332]{margin-top:-6%}@media (max-width:415px){.product_top[data-v-0f1d7332]{display:flex;flex-direction:column;min-width:100%;align-items:center;margin:3% 0 0;padding:0}.prod_conent[data-v-0f1d7332]{margin:0;padding:0 10px}.star[data-v-0f1d7332]{padding-left:-6%}}",""]),t.exports=r},631:function(t,e,d){"use strict";d.r(e);d(36);var r={layout:"prod_layout",computed:{name:function(){return this.$store.state.product.name},price:function(){return this.$store.state.product.price},sale:function(){return this.$store.state.product.sale},auth:function(){return this.$store.state.member.auth}},data:function(){return{num:0,activeNames:["1"]}},methods:{handleChange:function(t){console.log(t)},addCart:function(){var t=this.$store.state.product.name,e=this.$store.state.product.price,d=this.$store.state.product.sale,data={itemname:t,itemprice:e,itemsale:d,itemqty:1,img:"https://fakeimg.pl/60x60/"};console.log(data),this.$store.dispatch("cart/addCart",data)}},components:{other:d(564).default}},o=(d(604),d(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"product"},[d("div",{staticClass:"product_top"},[d("div",{staticClass:"prod_img"},[t._m(0),t._v(" "),d("div",{staticClass:"middle"},[d("el-carousel",{attrs:{interval:4e3,type:"card",height:"200px"}},t._l(6,(function(e){return d("el-carousel-item",{key:e},[d("h3",{staticClass:"medium"},[t._v(t._s(e))])])})),1)],1)]),t._v(" "),d("div",{staticClass:"prod_conent"},[d("div",{staticClass:"item_name item"},[d("div",[t._v(t._s(t.name))])]),t._v(" "),d("div",{staticClass:"item_price item"},[d("div",{staticClass:"font ",class:{price:t.sale}},[t._v("NT＄"+t._s(t.price))]),t._v(" "),t.sale?d("div",{staticClass:"font "},[t._v("NT＄"+t._s(t.price-t.sale))]):t._e()]),t._v(" "),d("div",{staticClass:"item_size item"}),t._v(" "),d("div",{staticClass:"item_qty item"},[d("el-input-number",{attrs:{size:"medium",min:1,max:10,label:"描述文字"},on:{change:t.handleChange},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1),t._v(" "),"user"===t.auth?d("div",{staticClass:"btn_cart item"},[d("el-button",{attrs:{type:"info"},on:{click:t.addCart}},[t._v("加到購物車")])],1):t._e(),t._v(" "),d("div",{staticClass:"item_desc item"},[d("el-collapse",{on:{change:t.handleChange},model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[d("el-collapse-item",{attrs:{title:"餐點描述",name:"1"}},[d("div",[t._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),t._v(" "),d("div",[t._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")])]),t._v(" "),d("el-collapse-item",{attrs:{title:"營養標示",name:"2"}},[d("div",[t._v("控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；")]),t._v(" "),d("div",[t._v("页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。")])])],1)],1)])]),t._v(" "),d("div",{staticClass:"product_bottom"},[d("other")],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top"},[e("img",{attrs:{src:"https://fakeimg.pl/400x400/",height:"400",width:"400"}})])}],!1,null,"0f1d7332",null);e.default=component.exports}}]);