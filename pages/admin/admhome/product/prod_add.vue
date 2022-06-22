<template>
    <div class="admprod">
        <div class="prod_edit">
            <div class="title">商品編輯</div>
            <div class="content">
                <div class="left">
                    <div class="img_main">
                        <div class="img_area">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        </div>
                    </div>
                    <div class="img_details">
                       <el-upload
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
                        </el-dialog>`
                    </div>
                </div>
                <div class="right">
                    <div class="top">
                        <div class="name item">
                            <span class="item_title">商品名稱：</span>
                            <el-input v-model="name" placeholder="請輸入內容"></el-input>
                        </div>
                        <div class="price item">
                            <span class="item_title">商品價格：</span>
                            <el-input v-model.number="price" placeholder="請輸入價格" type="number"></el-input>
                        </div>
                        <div class="category item">
                            <span class="item_title">商品種類：</span>
                            <el-select v-model="category" placeholder="請輸入種類" >
                                <el-option v-for="(item,index) in categoryItem" :key="index" :label="item.name" :value="item.name"></el-option>
                            </el-select>
                        </div>
                        <div class="sale item">
                            <span class="item_title">商品折扣：</span>
                            <el-input v-model.number="sale" placeholder="請輸入折扣"></el-input>
                        </div>
                        <div class="qty item">
                            <span class="item_title">商品數量：</span>
                            <el-input v-model.number="qty"  placeholder="請輸入數量"></el-input>
                        </div>
                        <div class="qty item">
                            <span class="item_title">商品描述：</span>
                            <el-input v-model="description" type="textarea"  :rows="3"  placeholder="請輸入文字"></el-input>
                        </div>
                    </div>
                    <div class="bottom">
                        <el-button @click="back">回上頁</el-button>
                        <el-button type="primary" @click="additem">新增</el-button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    middlemare:'metaTitle',
    meta:{title:'新增商品'},
    name:'prod_edit',
    data(){
        return{
            qty:1,
            name:'',
            price:0,
            sale:0,
            category:'',
            description:'',
            imageUrl: '',
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,
            img_M_Arr:[],
            fileList:[],
        }
    },
    created(){
        this.$store.dispatch('param/getCategory',{category:'種類'});
    },
    methods:{
        back(){
            this.$router.push('/admin/admhome/product/prod_list');
        },
        //新增
        additem(){
            let tmp={name:this.name,price:this.price,sale:this.sale,category:this.category,description:this.description,qty:this.qty,btime:'0001-01-01T00:00:00',buser:0};
            this.$refs.elUpload.submit();
            let fd = new FormData();
            this.fileList.forEach((file)=>{
                fd.append('files',file.raw)
            })
            let newdata = JSON.stringify(tmp);
            fd.append("jdata", newdata);
            const config = {
                headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': localStorage.getItem('token')
                }
            }
            this.$axios.post('https://localhost:44377/api/product',fd,config).then(res=>{
                console.log(res.data);
            })
            this.$message({
                message: '新增成功!!',
                type: 'success'
            });
            this.$router.push('/admin/admhome/product/prod_list');
        },
        //文件上傳成功
        handleAvatarSuccess(res, file) {
            //預覽用
            this.imageUrl = URL.createObjectURL(file.raw);
            this.img_M_Arr.push(file.raw)
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            return isJPG;
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
            console.log(file);
            this.imageUrl = URL.createObjectURL(file.raw);

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
        },
    },
    computed:{
        categoryItem(){
            return this.$store.state.param.category
        },
    }
}
</script>
<style scoped>
    .admprod{
        min-height: 84vh;
        padding: 20px 20px 10px 20px;
        margin: 20px;
        background-color: white;
        border-radius: 16px;
    }
    .title{
        font-weight: 600;
    }
    .content{
        display: flex;
        width: 100%;
        padding:3% 20px 0 20px;
    }
    .left{
        width: 45%;
        padding: 2%;
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: center;
        text-align: center;
    }
    .right{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 55%;
    }
    .top{
        padding-top: 5%;
        width: 100%;
        height: 70%;
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
    .bottom{
        margin-top: 5%;
    }
    /deep/.avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 280px;

    }
    /deep/.avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    /deep/.avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        /* width: 178px;
        height: 178px;
        line-height: 178px; */
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 260px;
    }
    /deep/.avatar {
        /* width: 178px;
        height: 178px; */
        width: 100%;
        height: 100%;
        display: block;
    }
    .img_main{
        width: 100%;
        min-height: 60%;
    }
    .img_details{
        width: 100%;
        min-height: 40%;
        text-align: left;
        margin-top: 2%;
    }
    /deep/.el-upload-list--picture-card .el-upload-list__item{
        width: 31%;
        margin: 0 1%;
    }
    /deep/.el-upload--picture-card{
        width: 32%; 
    }
    .img_area{
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 280px;
    }
</style>