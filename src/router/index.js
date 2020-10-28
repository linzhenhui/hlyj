import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/index'
import car from '@/components/car/index'
import dd from '@/components/dd/index'
import fl from '@/components/fl/index'
import gr from '@/components/gr/index'

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
        }
    ]
})