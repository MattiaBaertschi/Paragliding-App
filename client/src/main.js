import { createApp } from 'vue'
import './style.css'
import router from "@/router"
import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'
import App from './App.vue'
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App).use(router).use(OpenLayersMap).use(pinia).mount('#app')




