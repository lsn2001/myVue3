<template>
    
    <div>
        <div class="container w-500 h-200 m-auto absolute ">
            <div class="w-1/2 h-200 bg-gray-600 z-10 absolute left-25%  bg-opacity-55 rounded-lg ">
                <div w-50 h-20 absolute top-5 right-15 cursor-pointer z-21 text-white @click="openLink(props.link)">
                </div>
                <div w-full h-full absolute flex justify-center items-center>
                    <div w-full h-170 top-20 z-20 absolute flex justify-center items-center>
                        <div class="w-150 h-70 top-10 absolute top-10 text-white flex justify-center items-center">
                            <div break-words v-if="props.userInfo[0]" text-4xl block>hi，勇士 {{ props.userInfo[0] }} 你好
                            </div>
                            <div v-if="!props.userInfo[0]" text-3xl>请登录</div>
                            <div pt-2 w-40 h-40 absolute bottom-0 flex justify-center items-center
                                v-if="props.userInfo[0]">
                                <el-avatar size="large" fit="fill" :src="userInfo[1]" />
                            </div>
                        </div>
                        <div flex justify-center items-center v-show="props.userInfo[0]">
                            <div absolute bottom-80 text-white text-3xl>
                                <p>请输入三个勇士</p>
                            </div>
                            <div absolute bottom-25 h-20 clearable w-100>
                                <el-input class="el-input-large" v-model="input[2]" size="large" placeholder="请输入"
                                    clearable />
                            </div>
                            <div absolute bottom-40 h-20 clearable w-100>
                                <el-input class="el-input-large" v-model="input[1]" size="large" placeholder="请输入"
                                    clearable />
                            </div>
                            <div absolute bottom-55 h-20 clearable w-100>
                                <el-input class="el-input-large" v-model="input[0]" size="large" placeholder="请输入"
                                    clearable />
                            </div>
                            <el-button :plain="true" @click="success"
                                class="el-button-large w-20 h-8 bg-white absolute bottom-15">确定
                            </el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { propsData } from './props';
import {ref} from 'vue'
const props = defineProps(propsData)
// let showTip = ref(false)   
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
<style>
.el-button-large {
    width: 100px;
    height: 40px;
    font-size: 20px;
}

.el-input-large {
    height: 40px;
    font-size: 25px;
}
.container{
    width: 500rem;
    height: 200rem;
}
</style>