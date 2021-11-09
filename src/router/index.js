import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'
import NotFound from "../views/NotFound.vue"
import AddPaymentForm from '../components/AddPaymentForm.vue'
import Calculator from "../components/Calculator.vue"

Vue.use(VueRouter)

const routes = [{
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
}, {
    path: "/dashboard/:page",
    // name: "Dashboard",
    component: Dashboard,
}, {
    path: "/about",
    name: "About",
    component: About
}, {
    path: "/notFound",
    name: "NotFound",
    component: NotFound,
}, {
    path: '/add/payment/:category/value=:amount',
    name: 'DashboardAddPayment',
    component: Dashboard,
}, {
    path: "/calculator",
    name: "Calculator",
    component: Calculator
}, {
    path: '*',
    redirect: '/notFound'
}, ]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,

})
export default router