<template>
    <div class="admprod">
        <div class="prod_list">
            <div class="header">
                <div class="title" @click="GetAllItem">
                    商品管理
                    <el-button plain size="mini" class="ms-3" @click.native="additem">新增</el-button>
                </div>
                <div class="search">
                    <el-input placeholder="請輸入内容" v-model="keyword" class="input-with-select" @keyup.enter.native="search()">
                        <el-button slot="append" icon="el-icon-search" @click.native="search()"></el-button>
                    </el-input>
                </div>
            </div>

            <div class="content">
                <el-table
                :data="products"
                style="width: 99.9%"
                >
                <el-table-column
                type="index"
                width="50">
                </el-table-column>
            <el-table-column
                    prop="img"
                    label="商品資料"
                    width="80">
                    <template slot-scope="scope">
                        <img :src="'data:image/jpg;base64,'+scope.row.img" min-width="60" height="60" />
                    </template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label=""
                    width="260"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="price"
                    label="原價"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="sale"
                    label="折扣"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    label="小計"
                    align="center"
                >    
                    <template slot-scope="scope">
                        <p>{{scope.row.price-scope.row.sale}}</p>
                    </template>
                </el-table-column>
                <el-table-column label="操作"
                    align="center">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">編輯</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">刪除</el-button>
                </template>
                </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    middlemare:'metaTitle',
    meta:{title:'商品管理'},
    data(){
        return {
            keyword:'',
            imgsrc:'',
            loading:false,
        }
    },
    created(){
        let token = this.$store.state.member.token;
        // if(token!='Admin'){
        //     this.$router.push('/Login');
        // }
        this.$store.dispatch('product/getProduct');
    },
    computed:{
        products(){
            return this.$store.state.product.products
        },
    },
    methods:{
         handleEdit(x,y){
             console.log(x,y)
             this.$router.push({name:'admin-admhome-product-prod_edit',params:{index:x,item:y}})
        },
        handleDelete(x,y){
            let data = {pid:y.pid};
            this.$store.dispatch('product/removedata',data)
        },
        search(){
            if(this.keyword.length>0){
                this.$store.dispatch('product/searchitem',this.keyword);
            }
            else{
                this.$store.dispatch('product/allitem');
            }
        },
        GetAllItem(){
            this.$store.dispatch('product/allitem');
        },
        additem(){
            this.$router.push('/admin/admhome/product/prod_add')
        }
    }
}
</script>
<style scoped>
    .admprod{
        padding: 20px;
        margin: 20px;
        background-color: white;
        border-radius: 16px;
        min-height: 83vh;
    }
    .title{
        font-weight: 600;
        display: flex;
        align-items: center;
    }
    .header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }   
</style>