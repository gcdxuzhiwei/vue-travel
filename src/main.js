import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import '@/assets/styles/iconfont.css'
import 'swiper/css/swiper.css'

createApp(App).use(router).use(store).use(VueAwesomeSwiper).mount('#app')
