import { createRouter, createWebHashHistory } from 'vue-router'
import UserProfile from "@/views/UserProfile.vue"
import UploadFlight from "@/views/UploadFlight.vue"
import AppHome from "@/views/AppHome.vue"
import FlightMap from "@/views/FlightMap.vue"
import AppSearch from "@/views/AppSearch.vue"
import FlightOverview from "@/views/FlightOverview.vue"

const routes = [
    {
        path: "/home",
        name: "home",
        component: AppHome
    },
    {
        path: "/user",
        name: "user",
        component: UserProfile
    },
    {
        path: "/upload",
        name: "upload",
        component: UploadFlight
    },
    {
        path: "/search",
        name: "suche",
        component: AppSearch
    },
    {
        path: "/map",
        name: "map",
        component: FlightMap
    },
    {
        path: "/flights",
        name: "flights",
        component: FlightOverview
    }
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router