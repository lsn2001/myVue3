<template>
   
        <video class="w-full h-full z-0 absolute top-0 left-0 right-0 bottom-0 m-auto object-fill" :src="props.videoSrc" muted autoplay ></video>
    
</template>
<script setup lang="ts">
import {propsData} from '~/components/bgVideo/props'
const props = defineProps(propsData)
</script>