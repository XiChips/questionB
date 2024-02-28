import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupAntd } from './ant-design-vue/index'
import { message } from "ant-design-vue";
import './assets/css/index.css'
import moment from 'moment'
import 'moment/locale/zh-cn'
import axios from "axios";
// import global from "./assets/js/global.js"

// import mitt from "mitt"
moment.locale('zh-cn')
// document.title = '测试'
const app = createApp(App)
setupAntd(app)
// app.use(Button).use(Layout)
app.use(store).use(router).mount('#app')



app.config.globalProperties.$axios = axios
app.config.globalProperties.$message = message
app.config.globalProperties.$debugMode = true
// app.config.globalProperties.$api = "http://10.168.8.156:8084/NewlionsoftRealty/"
app.config.globalProperties.$api = "http://test.newlionsoft.com:20080/newlionsoftrealty/"
// app.config.globalProperties.$debugMode = false
// global(app)
