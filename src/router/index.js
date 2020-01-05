import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载
const Home =() => import ('../views/home/Home');
const Category =() => import ('../views/category/Category')
const Shopcart =() => import ('../views/shopcart/Shopcart')
const Profile =() => import ('../views/profile/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
