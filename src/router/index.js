import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import AboutUs from '../views/AboutUs.view.vue'
import ContactView from '../views/Contact.view.vue'
import HomeView from '../views/Home.view.vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const routes = [{
        path: '/',
        name: 'HomeView',
        component: HomeView,
    },

    {
        path: '/about',
        name: 'AboutUs',
        component: AboutUs,
    },
    {
        path: '/contact',
        name: 'ContactView',
        component: ContactView,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router