import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import car from '@/components/Car'
import dd from '@/components/Dd'
import fl from '@/components/Fl'
import gr from '@/components/Gr'
import Load from '@/components/Load'
import Sh from '@/components/SH'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/car',
            name: 'car',
            component: car
        },
        {
            path: '/dd',
            name: 'dd',
            component: dd
        },
        {
            path: '/fl',
            name: 'fl',
            component: fl
        },
        {
            path: '/gr',
            name: 'gr',
            component: gr
        },
        {
            path: '/Login',
            name: 'Login',
            component: Load
        },
        {
            path: '/Sh',
            name: 'SH',
            component: Sh
        }
    ]
})