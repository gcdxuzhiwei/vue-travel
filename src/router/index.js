import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue'
import City from '../views/City.vue'
import Detail from "../views/Detail";

const routes = [
{
  path: '/',
  name: 'Home',
  component: Home
}, {
    path: '/city',
    name: 'City',
    component: City
}, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,

  scrollBehavior(to,from,savedPosition){
    return {x:0,y:0}
  }
})

export default router
