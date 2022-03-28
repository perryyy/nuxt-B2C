<template>
    <div class="member_list">
        <div class="header">
            <div class="title" @click="GetAllItem">
                會員管理
                <el-button plain size="mini" class="ml-2" @click.native="adduser">新增</el-button>
            </div>
            <div class="search">
                <el-input placeholder="請輸入内容" v-model="keyword" class="input-with-select" @keyup.enter.native="search()">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
        </div>
        <div class="content">
            <el-table
            :data="memberList"
            style="width: 100%">
            <el-table-column
            type="index"
            width="100"
            align="center">
            </el-table-column>
            <el-table-column
            prop="username"
            label="username"
            align="center">
            </el-table-column>
            <el-table-column
            prop="password"
            label="password"
            align="center">
            </el-table-column>
            <el-table-column
            prop="email"
            label="email"
            align="center">
            </el-table-column>
            <el-table-column
            prop="auth"
            label="auth"
            align="center">
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
</template>
<script>
export default{
    middlemare:'metaTitle',
    meta:{title:'會員管理'},
    data(){
        return{
            keyword:''
        }
    },
    created(){
        let token = this.$store.state.member.token;
        if(token!='Admin'){
            this.$router.push('/Login');
        }
    },
    computed:{
        memberList(){
            return this.$store.state.member.memberList
        }
    },
    methods:{
        handleEdit(x,y){
            console.log(x,y);
            this.$router.push({name:'admin-admhome-member-member_edit',params:{index:x,item:y}})
        },
        handleDelete(x,y){
            console.log(x,y);
            this.$store.dispatch('member/removedata',x);
        },
        adduser(){
            this.$router.push('/admin/admhome/member/member_add')
        },
        GetAllItem(){
            this.$store.dispatch('member/allitem');
        },
        search(){
            if(this.keyword.length>0){
                this.$store.dispatch('member/searchitem',this.keyword);
            }
            else{
                this.$store.dispatch('member/allitem');
            }
        }
    }
}
</script>
<style scoped>
    .member_list{
        padding: 20px;
        margin: 20px;
        background-color: white;
        border-radius: 16px;
        min-height: 82vh;
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