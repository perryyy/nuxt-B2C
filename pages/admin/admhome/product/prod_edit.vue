<template>
    <div class="admprod">
        <div class="prod_edit">
            <div class="title">商品編輯</div>
            <div class="content">
                <div class="left">
                    <div class="img_area">
                    <el-skeleton  :loading="loading" animated >
                    <template slot="template">
                        <el-skeleton-item
                        variant="image"
                        style="width: 492px; height: 267px;"
                        />
                        <el-skeleton-item
                        class="mt-2"
                        variant="image"
                        style="width: 160px; height: 160px;"
                        />
                    </template>
                    <template>
                        <div class="img"><img :src="imageUrl" width="492" height="267" ></div>
                        <el-upload
                        class="mt-2"
                        ref="elUpload"
                        action="#"
                        list-type="picture-card"
                        :file-list="fileList" 
                        :on-change="fileChange" 
                        :limit="5"
                        :auto-upload="false">
                            <i slot="default" class="el-icon-plus"></i>
                            <div slot="file" slot-scope="{file}">
                            <img
                                class="el-upload-list__item-thumbnail"
                                :src="file.url" alt=""
                            >
                            <span class="el-upload-list__item-actions">
                                <span
                                v-if="!disabled"
                                class="el-upload-list__item-delete"
                                @click="handlePictureCardPreview(file)"
                                >
                                <i class="el-icon-video-camera-solid"></i>
                                </span>
                                <span
                                class="el-upload-list__item-preview"
                                @click="enlarge(file)"
                                >
                                <i class="el-icon-zoom-in"></i>
                                </span>

                                <span
                                v-if="!disabled"
                                class="el-upload-list__item-delete"
                                @click="handleRemove(file)"
                                >
                                <i class="el-icon-delete"></i>
                                </span>
                            </span>
                            </div>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </template>
                    </el-skeleton>
                    </div>
                </div>
                <div class="right">
                    <div class="top">
                        <div class="name item">
                            <span class="item_title">商品名稱：</span>
                            <el-input v-model="product.name" placeholder="請輸入內容"></el-input>
                        </div>
                        <div class="price item">
                            <span class="item_title">商品價格：</span>
                            <el-input v-model="product.price" placeholder="請輸入內容"></el-input>
                        </div>
                        <div class="price item">
                            <span class="item_title">商品分類：</span>
                            <el-select v-model="product.category" placeholder="請輸入種類" >
                                <el-option v-for="(item,index) in categoryItem" :key="index" :label="item" :value="item"></el-option>
                            </el-select>
                        </div>
                        <div class="price item">
                            <span class="item_title">商品折扣：</span>
                            <el-input v-model="product.sale" placeholder="請輸入內容"></el-input>
                        </div>
                        <div class="sale item">
                            <span class="item_title">商品數量：</span>
                            <el-input v-model="product.qty" placeholder="請輸入內容"></el-input>
                        </div>
                        <div class="qty item">
                            <span class="item_title">商品描述：</span>
                            <el-input v-model="product.description" type="textarea" :rows="2" placeholder="請輸入內容"></el-input>
                        </div>
                    </div>
                    <div class="bottom">
                        <el-button @click="back">回上頁</el-button>
                        <el-button type="primary" @click="editdata">修改</el-button>
                        <el-button type="danger"@click="dialogVisible = true">刪除</el-button>
                    </div>
                    <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%">
                        <span>確定要刪除嗎？</span>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="remove">確 定</el-button>
                        </span>
                    </el-dialog>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {getDetails} from '@/plugins/api';
export default {
    middlemare:'metaTitle',
    meta:{title:'商品編輯'},
    name:'prod_edit',
    data(){
        return{
            dialogVisible: false,
            categoryItem:['漢堡','蛋餅','捲餅','麵類','吐司','點心','飲料'],
            loading: true,
            product:[],
            imageUrl: '',
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,
            img_M_Arr:[],
            fileList:[],
        }
    },
    mounted(){
        getDetails(this.$route.params.item).then(res=>{
            console.log(res.data);
            console.log(res.data.img);
            for (let i =0;i<res.data.img.length;i++){
                let blob = new Blob([res.data.img[i]])
                let url = window.URL.createObjectURL(blob);
                this.fileList=res.data.img.map(item=>{
                return{
                    name:item,
                    url:'data:image/jpg;base64,'+item,
                    percentage:0,
                    status:'ready'
                }
            });
            }
            this.imageUrl=this.fileList[0].url;
            this.product = res.data;
            this.loading=false
        })
    },
    methods:{
        getData(x){
            this.$store.dispatch('product/getdata',x);
        },
        editdata(){
            let data = {
                name:this.product.name,
                price:this.product.price,
                sale:this.product.sale,
                PID:this.product.pid,
                qty:this.product.qty,
                description:this.product.description,
                category:this.product.category,
                buser:this.product.buser,
                btime:this.product.btime
                };
            this.$refs.elUpload.submit();
            let fd = new FormData();
            console.log(this.fileList)
            this.fileList.forEach((file)=>{
                fd.append('files',file.raw)
            })
           
            let newdata = JSON.stringify(data);
            console.log(newdata)
            fd.append("jdata", newdata);
            const config = {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            }
            // this.$axios.put(`https://localhost:44377/api/product/${this.product.pid}`,fd,config).then(res=>{
            //     console.log(res.data);
            // })
            // this.$store.dispatch('product/editdata',data);
            // this.$router.push('/admin/admhome/product/prod_list');
        },
        back(){
            this.$router.push('/admin/admhome/product/prod_list');
        },
        remove(){
            this.dialogVisible=false;
            let data = {pid:this.pid};
            this.$store.dispatch('product/removedata',data);
            this.$router.push('/admin/admhome/product/prod_list');
        },
        //小圖刪除
        handleRemove(file) {
            let uploadFiles = this.$refs.elUpload.uploadFiles;
            uploadFiles.forEach((value, index) => {
                if (value.uid === file.uid) {
                    uploadFiles.splice(index, 1)
                    this.fileList.splice(index, 1)
                }
            })
        },
        //小圖放大
        handlePictureCardPreview(file) {
            this.imageUrl=file.url;

        },
        //小圖預覽
        enlarge(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        upload(file){
        },
        fileChange(file, fileList) {
            this.fileList = fileList; 
            console.log(file, fileList)
        },
    },
    computed:{
        // name:{
        //     get(){
        //         return this.$store.state.p.nameroduct
        //     },
        //     set (val){
        //         this.$store.commit('product/setname',val)
        //     }
        // },
        // price:{
        //     get(){
        //         return this.$store.state.product.price
        //     },
        //     set (val){
        //         this.$store.commit('product/setprice',val)
        //     }
        // },
        // sale:{
        //     get(){
        //         return this.$store.state.product.sale
        //     },
        //     set (val){
        //         this.$store.commit('product/setsale',val)
        //     }
        // },
        // qty:{
        //     get(){
        //         return this.$store.state.product.qty
        //     },
        //     set (val){
        //         this.$store.commit('product/setqty',val)
        //     }
        // },
        // description:{
        //     get(){
        //         return this.$store.state.product.description
        //     },
        //     set (val){
        //         this.$store.commit('product/setdescription',val)
        //     }
        // },
        // category:{
        //     get(){
        //         return this.$store.state.product.category
        //     },
        //     set (val){
        //         this.$store.commit('product/setcategory',val)
        //     }
        // },
        // pid:{
        //     get(){
        //         return this.$store.state.product.pid
        //     },
        //     set (val){
        //         this.$store.commit('product/setpid',val)
        //     }
        // },
        // img:{
        //     get(){
        //         return this.$store.state.product.img
        //     },
        //     set (val){
        //         this.$store.commit('product/setimg',val)
        //     }
        // }
    }
}
</script>
<style scoped>
    .admprod{
        padding: 20px 20px 10px 20px;
        margin: 20px;
        background-color: white;
        border-radius: 16px;
        min-height: 84vh;
    }
    .title{
        font-weight: 600;
    }
    .content{
        display: flex;
        width: 100%;
        padding: 20px;
    }
    .left{
        width: 45%;
        padding-top: 3%;
        padding: 2%;
    }
    .right{
        display: flex;
        flex-direction: column;
        width: 55%;
    }
    .top{
        padding-top: 5%;
        width: 100%;
        /* height: 85%; */
    }
    .item{
        margin-bottom: 3%;
        display: flex;
        align-items: center;
        width: 100%;
    }
    .item_title{
        width: 20%;
    }
    /deep/.el-select{
        width: 100%;
    }
     /deep/.el-upload-list--picture-card .el-upload-list__item{
        width: 31%;
        margin: 0 1%;
    }
    /deep/.el-upload--picture-card{
        width: 32%; 
    }
    .img{
        width: 100%;
    }
</style>