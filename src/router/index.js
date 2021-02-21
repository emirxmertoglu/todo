import Vue from 'vue'
import VueRouter from 'vue-router'

import BoardList from '@/components/BoardList'
import ShowBoard from '@/components/ShowBoard'
import AddBoard from '@/components/AddBoard'
import EditBoard from '@/components/EditBoard'
import NotFound from '@/components/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BoardList',
    component: BoardList
  },
  {
    path: '/show-board/:id',
    name: 'ShowBoard',
    component: ShowBoard
  },
  {
    path: '/add-board',
    name: 'AddBoard',
    component: AddBoard
  },
  {
    path: '/edit-board/:id',
    name: 'EditBoard',
    component: EditBoard
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
