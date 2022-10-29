import {reactive} from 'vue'
export const propsData = reactive({
    videoSrc: {
        type:String,
        default: '../../video.mp4'
    }
})