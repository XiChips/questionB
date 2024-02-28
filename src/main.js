import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupAntd } from './ant-design-vue/index'
import { message } from "ant-design-vue";
import './assets/css/index.css'
// import axios from "axios";
// moment.locale('zh-cn')
const app = createApp(App)
setupAntd(app)
// app.use(Button).use(Layout)
app.use(store).use(router).mount('#app')



// app.config.globalProperties.$axios = axios
app.config.globalProperties.$message = message