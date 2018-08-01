<template>
    <div>
        <label for="">用户名</label>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <label for="">密码</label>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        
        <el-button type="primary"><router-link to="/Home">登录</router-link></el-button>
    </div>


</template>

<script>
    export default {
        data() {
            return {
				input:"666"
            }
        }
    }
</script>
