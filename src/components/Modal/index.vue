<template>
    <div class="container">
        <div class="Modal">
            <div class="direction">
                <div class="greeting" break-words v-if="userInfo[0]">hi，勇士 {{ userInfo[0] }} 你好
                </div>
                <div v-if="!userInfo[0]" @click="login">
                    <div class="login">请登录</div>
                </div>
                <div class="userAvatar" v-if="userInfo[0]">
                    <el-avatar size="large" fit="fill" :src="userInfo[1]" />
                </div>
            </div>
            <div v-show="userInfo[0]">
                <div class="textTip">
                    <p class="Tip">请输入三个勇士</p>
                </div>
                <el-input class="el-input-large" v-model="input[0]" size="large" placeholder="请输入" clearable />
                <el-input class="el-input-large" v-model="input[1]" size="large" placeholder="请输入" clearable />
                <el-input class="el-input-large" v-model="input[2]" size="large" placeholder="请输入" clearable />
                <el-button :plain="true" @click="success" class="el-button-large">确定
                </el-button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { propsData } from './props';
import { ref } from 'vue'
const props = defineProps(propsData)
const login = () => {
    // to-do 完成登录功能 
}
const input = ref([])
let success = () => {
    if (props.userInfo[0]) {
        ElMessage({
            message: '恭喜你, 添加成功.',
            type: 'success',
        })
    }
    else
        ElMessage({
            message: '请先登录',
            type: 'warning',
        })
}
const openLink = (link: any) => {
    window.open(link, '_self')
}
</script>
<style scoped>
.el-button-large {
    width: 100px;
    height: 40px;
    font-size: 16px;
    margin-top: 10px;
}
.el-input-large {
    height: 35px;
    font-size: 20px;
    margin: 10px 0;
}
.container {
    width: 900px;
    height: 500px;
    background: gray;
    position: fixed;
    z-index: 10;
    top: 50%;
    left: 50%;
    opacity: 0.8;
    transform: translate(-50%, -50%);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Modal {
    width: 50%;
    height: 400px;
    position: fixed;

}
.direction {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    /* co1umn 从上到下*/
    align-items: center;
    /* center代表水平方向 */
    justify-content: center;

}
.textTip {
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
}

.greeting {
    width: 100%;
    word-break: break-all;
    font-size: 25px;
}
.login {
    font-size: 25px;
    cursor: pointer;

}
.userAvatar {
    width: 100%;
    margin-top: 20px;
}
</style>