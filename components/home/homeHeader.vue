<template>
    <div class="homeheader">
        <div class="title">{{title}}</div>
        <div class="sort">
            <el-select v-model="selectsort" placeholder="商品排序">
                <el-option
                v-for="item in sortoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="count">
            <el-select v-model="selectcount" placeholder="每頁顯示6個"  @change="handleselect">
                <el-option
                v-for="item in countoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            // title:'精選商品',
            sortoptions: [
                {value:'商品排序',label: '商品排序'},
                {value:'價格：由高至低',label: '價格：由高至低'},
                {value:'價格：由低至高',label: '價格：由低至高'},
            ],
            countoptions: [
                {value:6,label: '每頁顯示6個'},
                {value:8,label: '每頁顯示8個'},
                {value:12,label: '每頁顯示12個'},
            ],
            selectsort: '',
            selectcount: '',
        }
    },
    computed:{
        title(){
            return this.$store.state.setting.title;
        }
    },
    methods:{
        handleselect(){
            // console.log(this.selectcount);
            this.$store.dispatch('setting/changepagesize',this.selectcount);
        }
    }
}
</script>
<style scoped>
    .homeheader{
        display: flex;
        width: 100%;
    }
    .title{
        width: 50%;
        height: 40px;
        line-height: 40px;
        font-weight: 800;
        font-size: 24px;
    }
    .sort{
        margin-right: 1%;
    }
</style>