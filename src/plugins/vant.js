// 按需全局引入 vant组件
import Vue from 'vue'
import { Button, List, Rate, NavBar, PullRefresh, Cell, Tabbar, TabbarItem } from 'vant'

Vue.use(Button)
Vue.use(NavBar)
Vue.use(Cell)
Vue.use(PullRefresh)
Vue.use(Rate)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
