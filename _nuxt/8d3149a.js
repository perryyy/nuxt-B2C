(window.webpackJsonp=window.webpackJsonp||[]).push([[51,11,12,26,27],{437:function(t,e,o){var content=o(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("85eaa8e0",content,!0,{sourceMap:!1})},438:function(t,e,o){"use strict";o(437)},439:function(t,e,o){var n=o(16)(!1);n.push([t.i,".prod_card[data-v-375b8e6c]{display:flex;flex-wrap:wrap;text-align:center;justify-content:left;cursor:pointer;width:100%}.card[data-v-375b8e6c]{padding:2%;min-width:28%;max-width:28%;margin:0 1%;border:none;word-break:break-all}.font[data-v-375b8e6c]{text-align:center;font-size:14px;letter-spacing:.5px}.prod_price[data-v-375b8e6c]{font-weight:500;color:grey}.price[data-v-375b8e6c]{text-decoration:line-through}.bottom[data-v-375b8e6c]{margin-top:4%}@media (max-width:415px){.card[data-v-375b8e6c]{min-width:48%;max-width:48%}}",""]),t.exports=n},448:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{image:"https://fakeimg.pl/250x300/",height:300,width:250}},created:function(){!1===this.$store.state.setting.isMobile?(this.image="https://fakeimg.pl/250x300/",this.height=300,this.width=250):(this.image="https://fakeimg.pl/120x120/",this.height=120,this.width=120)},props:{products:Array},methods:{goProd:function(t){console.log(t),this.$store.dispatch("product/changeproduct",t),this.$router.push("/home/product"),document.body.scrollTop=0,document.documentElement.scrollTop=0}}},r=(o(438),o(4)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"prod_card"},t._l(t.products,(function(e,n){return o("div",{key:n,staticClass:"card",on:{click:function(o){return t.goProd(e)}}},[o("div",{staticClass:"top"},[o("img",{attrs:{src:t.image,height:t.height,width:t.width}})]),t._v(" "),o("div",{staticClass:"bottom"},[o("div",{staticClass:"font prod_name"},[t._v(t._s(e.name))]),t._v(" "),o("div",{staticClass:"font prod_price",class:{price:e.sale}},[t._v("NT＄"+t._s(e.price))]),t._v(" "),e.sale?o("div",{staticClass:"font prod_price"},[t._v("NT＄"+t._s(e.price-e.sale))]):t._e()])])})),0)}),[],!1,null,"375b8e6c",null);e.default=component.exports},480:function(t,e,o){var content=o(525);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("e4700810",content,!0,{sourceMap:!1})},481:function(t,e,o){var content=o(527);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("320f84d5",content,!0,{sourceMap:!1})},482:function(t,e,o){var content=o(529);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("6682172a",content,!0,{sourceMap:!1})},524:function(t,e,o){"use strict";o(480)},525:function(t,e,o){var n=o(16)(!1);n.push([t.i,".homeheader[data-v-48c79cf2]{display:flex;width:100%}.title[data-v-48c79cf2]{width:50%;height:40px;line-height:40px;font-weight:800;font-size:24px}.sort[data-v-48c79cf2]{margin-right:1%}",""]),t.exports=n},526:function(t,e,o){"use strict";o(481)},527:function(t,e,o){var n=o(16)(!1);n.push([t.i,".carousel[data-v-4892ad06]{padding:0 3%;z-index:0}.el-carousel__item h3[data-v-4892ad06]{color:#475669;font-size:14px;opacity:.75;line-height:150px;margin:0;text-align:center}.el-carousel__item[data-v-4892ad06]:nth-child(2n){background-color:#99a9bf;z-index:-1}.el-carousel__item[data-v-4892ad06]:nth-child(odd){background-color:#d3dce6;z-index:-1}",""]),t.exports=n},528:function(t,e,o){"use strict";o(482)},529:function(t,e,o){var n=o(16)(!1);n.push([t.i,".productTotal[data-v-9c453fe4]{display:flex;margin-top:3%;flex-wrap:wrap}.pagination[data-v-9c453fe4]{width:100%;padding:20px 0;display:flex;justify-content:center;align-items:center}.pagination li[data-v-9c453fe4]{background-color:#fff}",""]),t.exports=n},549:function(t,e,o){var content=o(607);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("561086aa",content,!0,{sourceMap:!1})},565:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{sortoptions:[{value:"商品排序",label:"商品排序"},{value:"價格：由高至低",label:"價格：由高至低"},{value:"價格：由低至高",label:"價格：由低至高"}],countoptions:[{value:6,label:"每頁顯示6個"},{value:8,label:"每頁顯示8個"},{value:12,label:"每頁顯示12個"}],selectsort:"",selectcount:""}},computed:{title:function(){return this.$store.state.setting.title}},methods:{handleselect:function(){this.$store.dispatch("setting/changepagesize",this.selectcount)}}},r=(o(524),o(4)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"homeheader"},[o("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"sort"},[o("el-select",{attrs:{placeholder:"商品排序"},model:{value:t.selectsort,callback:function(e){t.selectsort=e},expression:"selectsort"}},t._l(t.sortoptions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),o("div",{staticClass:"count"},[o("el-select",{attrs:{placeholder:"每頁顯示6個"},on:{change:t.handleselect},model:{value:t.selectcount,callback:function(e){t.selectcount=e},expression:"selectcount"}},t._l(t.countoptions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)])}),[],!1,null,"48c79cf2",null);e.default=component.exports},566:function(t,e,o){"use strict";o.r(e);var n={},r=(o(526),o(4)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"carousel"},[o("el-carousel",{attrs:{height:"150px"}},t._l(4,(function(e){return o("el-carousel-item",{key:e},[o("h3",{staticClass:"small"},[t._v(t._s(e))])])})),1)],1)}),[],!1,null,"4892ad06",null);e.default=component.exports},567:function(t,e,o){"use strict";o.r(e);o(49);var n={layout:"default",data:function(){return{}},methods:{handlenowpage:function(t){this.$store.dispatch("setting/changenowpage",t),document.body.scrollTop=0,document.documentElement.scrollTop=0}},components:{card:o(448).default},computed:{products:function(){return this.pageSize,this.page,this.pageSize,this.pageSize,this.page,this.$store.state.product.products.slice(this.$store.state.setting.pagesize*this.$store.state.setting.nowpage-this.$store.state.setting.pagesize,this.$store.state.setting.pagesize*this.$store.state.setting.nowpage)},pagesize:function(){return this.$store.state.setting.pagesize},nowpage:function(){return this.$store.state.setting.nowpage},totalproducts:function(){return this.$store.state.product.products}}},r=(o(528),o(4)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"productTotal"},[o("card",{attrs:{products:t.products}}),t._v(" "),o("div",{staticClass:"pagination"},[o("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalproducts.length,"page-size":t.pagesize,"current-page":t.nowpage},on:{"current-change":t.handlenowpage}})],1)],1)}),[],!1,null,"9c453fe4",null);e.default=component.exports},606:function(t,e,o){"use strict";o(549)},607:function(t,e,o){var n=o(16)(!1);n.push([t.i,".bottom[data-v-6eb5bbe0],.top[data-v-6eb5bbe0]{margin-top:8%}",""]),t.exports=n},632:function(t,e,o){"use strict";o.r(e);var n=o(565),r=o(566),c=o(567),l={components:{homeheader:n.default,productTotal:c.default,carousel:r.default},data:function(){return{nowHeader:"homeheader"}},created:function(){var t=this.$store.state.setting.isMobile;this.nowHeader=!1===t?"homeheader":"carousel"}},d=(o(606),o(4)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"product"},[o("div",{staticClass:"top"},[o(t.nowHeader,{tag:"component"})],1),t._v(" "),o("div",{staticClass:"bottom"},[o("productTotal")],1)])}),[],!1,null,"6eb5bbe0",null);e.default=component.exports}}]);