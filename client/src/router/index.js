import { createRouter, createWebHashHistory } from 'vue-router'
import UserProfile from "@/views/UserProfile.vue"
import UploadFlight from "@/views/UploadFlight.vue"
import AppHome from "@/views/AppHome.vue"
import FlightMap from "@/views/FlightMap.vue"
import AppSearch from "@/views/AppSearch.vue"
import FlightOverview from "@/views/FlightOverview.vue"
import ViewFlight from "@/views/ViewFlight.vue"
import LoadingScreen from "@/views/LoadingScreen.vue"
import LoginForm from "@/views/LoginForm.vue"
import RegisterForm from "@/views/RegisterForm.vue"
import EditFlight from "@/views/EditFlight.vue"
import ViewBuddy from "@/views/ViewBuddy.vue"
import ViewBuddyFlight from "@/views/ViewBuddyFlight.vue"
import BuddyOverview from "@/views/BuddyOverview.vue"

const routes = [
    {
        path: "/",
        name: "Cloudy",
        component: LoadingScreen
    },
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
    },
    {
        path: "/buddys",
        name: "buddys",
        component: BuddyOverview
    },
    {
        path: "/flights/view/:id",
        name: "viewflights",
        component: ViewFlight
    },
    {
        path: "/buddyflight/view/:id",
        name: "buddyflights",
        component: ViewBuddyFlight
    },
    {
        path: "/flights/edit/:id",
        name: "editflight",
        component: EditFlight
    },
    {
        path: "/login",
        name: "Login",
        component: LoginForm
    },
    {
        path: "/register",
        name: "Registrieren",
        component: RegisterForm
    },
    {
        path: "/buddy/:id",
        name: "viewbuddy",
        component: ViewBuddy
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router