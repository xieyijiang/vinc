// import '@unocss/reset/sanitize/sanitize.css'
// import '@unocss/reset/sanitize/assets.css'
import '@unocss/reset/tailwind-compat.css'
import '@/assets/base.css'
import 'virtual:uno.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

const app = createApp(App)

app.use(router)
app.use(i18n)

// #region pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)
// #endregion

// #region socket.io
// import { io } from "socket.io-client"
// const socket = io('http://localhost:3000')
// socket.on('connect', () => {
//   console.log(socket.id)
// })
// #endregion

app.mount('#app')
