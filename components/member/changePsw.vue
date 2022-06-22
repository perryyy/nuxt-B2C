<template>
    <div class="changePsw">
        <div class="title">變更密碼</div>
        <div class="changePsw_main">
            <div class="process" style="height: 420px;">
                <el-steps direction="vertical" :active="active"  finish-status="success">
                    <el-step title="輸入舊密碼"></el-step>
                    <el-step title="輸入新密碼"></el-step>
                    <el-step title="再次輸入新密碼"></el-step>
                    <el-step title="修改成功"></el-step>
                </el-steps>
            </div>
            <div class="change" style="height: 420px;">
                <div class="oldpsw">
                    <el-input placeholder="輸入舊密碼" v-model.trim="oldpsw" show-password >
                        <el-button slot="append" class="valid" @click="test1()">驗證</el-button>
                    </el-input>
                    <div class="resultMsg" v-if="first">
                        {{resultMsg1}}
                    </div>
                </div>
                <div class="newpsw" v-if="ShowSec">
                    <el-input placeholder="輸入新密碼" v-model.trim="newpsw" show-password>
                        <el-button slot="append" class="valid" @click.native="test2()">驗證</el-button>
                    </el-input>   
                    <div class="resultMsg" v-if="Second">
                        {{resultMsg2}}
                    </div>                    
                </div>
                <div class="newpswAgain"  v-if="ShowThird">
                    <el-input placeholder="輸入新密碼" v-model.trim="newpswAgain" show-password>
                        <el-button slot="append" class="valid" @click="test3()">驗證</el-button>
                    </el-input>
                    <div class="resultMsg" v-if="Third"  >
                        {{resultMsg3}}
                    </div>     
                </div>

            </div>
        </div>

    </div>
</template>
<script>
import {valid,updatePSW} from '@/plugins/api';
import {API} from '@/plugins/axios';
export default {
    data(){
        return{
            oldpsw:'',
            newpsw:'',
            newpswAgain:'',
            resultMsg1:'',
            resultMsg2:'123',
            resultMsg3:'',
            active: 1,
            first:false,
            Second:false,
            Third:false,
            ShowSec:false,
            ShowThird:false,
        }
    },
    methods:{
        test1(){
            let data = {mid:this.mid,password:this.oldpsw};
            API('post','password',data).then((res)=>{
            // valid(data).then(res=>{
                if(res.data.status=='success'){
                    this.resultMsg1=res.data.msg
                    this.active=this.active+1;
                    this.first=true;
                    this.ShowSec=true;  
                }
                else{
                    this.resultMsg1=res.data.msg;
                    this.first=true;
                }
            })
        },
        test2(){
            if(this.newpsw.length>=6 && this.newpsw.length<=10){
                let data = {mid:this.mid,psw:this.oldpsw};
                this.resultMsg2='再輸入一次新密碼';
                this.active=this.active+1;
                if (this.active > 4) this.active = 1;
                this.Second=true;
                this.ShowThird=true;  
                this.Third=true; 
            }
            else{
                this.resultMsg2='密碼必須是6-10位';
                this.Second=true;
                this.ShowThird=false;  
                this.Third=false; 
            }
        },
        test3(){
            let data = {mid:this.mid,password:this.newpsw}; 
            if(this.newpsw===this.newpswAgain){
                API('put',`password/${data.mid}`,data).then((res)=>{
                    if(res.status=='success'){
                        this.resultMsg3=res.msg
                        this.active=this.active+1;
                         this.$message({
                            message: '修改成功',
                            type: 'success'
                        });
                    this.oldpsw='';
                    this.newpsw='';
                    this.newpswAgain='';
                    this.active= 1;
                    this.first=false;
                    this.Second=false;
                    this.Third=false;
                    this.ShowSec=false;
                    this.ShowThird=false;
                    }
                })
            }
            else{
                this.resultMsg3='與新密碼不符'
            }
        }
    },
    computed:{
        mid(){
            return this.$store.state.member.mid;
        },
    },
}
</script>
<style scoped>
    .changePsw{
        padding: 20px;
        height: 100%;
    }
    .title{
        font-weight: 600;
        font-size: 22px;
        width: 100%;
    }
    .changePsw_main{
        display: flex;
        margin-top: 2%;
    }
    .process{
        /* margin-top: 8px; */
        width: 15%;
    }
    .change{
        width: 85%;
    }
    /deep/.el-input-group__append{
        cursor: pointer;
    }
    .resultMsg{
        width: 100%;
        padding-left: 20px;
        margin-top: 2%;
    }
    .oldpsw,.newpsw,.newpswAgain,.Done{
        min-height: 30%;
    }
</style>