<template>
        <video loop :src="props.videoSrc" muted autoplay></video>
</template>
<script setup lang="ts">
import { propsData } from '~/components/bgVideo/props'
const props = defineProps(propsData)
</script>
<style lang="scss" scoped>
video {
        width: 100%;
        height: 100%;
        z-index: 0;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        object-fit: fill;
}
</style>