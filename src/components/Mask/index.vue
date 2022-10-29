<template>
        <div class="mask top-0 left-0 right-0 bottom-0 m-auto" :class="showSlide">
            <div class="demo-progress">
                <el-progress :text-inside="true" :stroke-width="40"  :percentage="percentage" />
            </div>
        </div>
</template>
<script setup lang="ts">
import {ref,onMounted} from 'vue'
const percentage = ref(0)
const showSlide = ref('')
onMounted(() => {
    const timer1 = setInterval(() => {
        if (percentage.value < 100) {
            percentage.value = (percentage.value % 100) + 100
            console.log(percentage.value)
        }
        if (percentage.value == 100) {
            clearInterval(timer1)
            const timer2 = setTimeout(() => {
                showSlide.value = 'slideUp'
                clearTimeout(timer2)
            }, 1000);    
        }
    }, 1000)
})
</script>
<style scoped>
.mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    top: 0;
    z-index: 11;
    display: flex;
    justify-content: center;
}
.demo-progress .el-progress--line {
    margin-bottom: 15px;
    top: 100px;
    width: 1000px;
}
.slideUp {
    top: -200%;
    transition: top 0.6s linear;
}
</style>