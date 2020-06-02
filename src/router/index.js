import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import City from '../views/City.vue'
import Detail from "../views/Detail";

Vue.use(VueRouter)

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

const router = new VueRouter({
  routes
})

export default router
