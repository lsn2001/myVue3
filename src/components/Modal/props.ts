import {  type PropType,reactive} from 'vue';
import type { User } from '~/components/Modal/type/interface';
export const propsData = reactive({
    showSlide: {
        type: String,
        default:''
    },
    link: {
        type: String,
        default:'https://twitter.com/'
    },
    userInfo: {
        type: Array as PropType<Array<User>>,
        default:['jack','https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png']
        // default:['','']
    },
    
})