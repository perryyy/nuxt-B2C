(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{480:function(e,t,l){var content=l(525);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(17).default)("e4700810",content,!0,{sourceMap:!1})},524:function(e,t,l){"use strict";l(480)},525:function(e,t,l){var o=l(16)(!1);o.push([e.i,".homeheader[data-v-48c79cf2]{display:flex;width:100%}.title[data-v-48c79cf2]{width:50%;height:40px;line-height:40px;font-weight:800;font-size:24px}.sort[data-v-48c79cf2]{margin-right:1%}",""]),e.exports=o},565:function(e,t,l){"use strict";l.r(t);var o={data:function(){return{sortoptions:[{value:"商品排序",label:"商品排序"},{value:"價格：由高至低",label:"價格：由高至低"},{value:"價格：由低至高",label:"價格：由低至高"}],countoptions:[{value:6,label:"每頁顯示6個"},{value:8,label:"每頁顯示8個"},{value:12,label:"每頁顯示12個"}],selectsort:"",selectcount:""}},computed:{title:function(){return this.$store.state.setting.title}},methods:{handleselect:function(){this.$store.dispatch("setting/changepagesize",this.selectcount)}}},c=(l(524),l(4)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"homeheader"},[l("div",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),l("div",{staticClass:"sort"},[l("el-select",{attrs:{placeholder:"商品排序"},model:{value:e.selectsort,callback:function(t){e.selectsort=t},expression:"selectsort"}},e._l(e.sortoptions,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),l("div",{staticClass:"count"},[l("el-select",{attrs:{placeholder:"每頁顯示6個"},on:{change:e.handleselect},model:{value:e.selectcount,callback:function(t){e.selectcount=t},expression:"selectcount"}},e._l(e.countoptions,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)])}),[],!1,null,"48c79cf2",null);t.default=component.exports}}]);