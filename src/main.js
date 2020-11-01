// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '../store'
// import Toast from '@/components/layer/Toast.js'

import {
    Tabbar,
    TabbarItem,
    Tab,
    Tabs,
    NavBar,
    Search,
    Swipe,
    SwipeItem,
    Lazyload,
    Cell,
    CellGroup,
    NoticeBar,
    Row,
    Col,
    Card,
    TreeSelect,
    Button,
    SubmitBar,
    Checkbox,
    CheckboxGroup,
    RadioGroup,
    Radio,
    Field,
    Icon,
    Tag,
    Sku,
    Toast
} from 'vant';

Vue.use(Tabbar)
    .use(TabbarItem)
    .use(Tab)
    .use(Tabs)
    .use(NavBar)
    .use(Search)
    .use(Card)
    .use(Swipe)
    .use(SwipeItem)
    .use(Lazyload)
    .use(Cell)
    .use(CellGroup)
    .use(NoticeBar)
    .use(Row)
    .use(Col)
    .use(TreeSelect)
    .use(Button)
    .use(SubmitBar)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(RadioGroup)
    .use(Radio)
    .use(Field)
    .use(Icon)
    .use(Tag).use(Sku).use(Toast)
Vue.config.productionTip = false
Vue.prototype.toast = Toast;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})