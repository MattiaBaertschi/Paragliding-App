import { createApp } from 'vue'
import './style.css'
import router from "@/router"
import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'
import App from './App.vue'

createApp(App).use(router).use(OpenLayersMap).mount('#app')




