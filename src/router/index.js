import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from '../firebase'

import BoardList from '@/components/BoardList'
import ShowBoard from '@/components/ShowBoard'
import AddBoard from '@/components/AddBoard'
import EditBoard from '@/components/EditBoard'
import NotFound from '@/components/NotFound'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Profile from '@/components/Profile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    name: 'BoardList',
    component: BoardList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/show-board/:id',
    name: 'ShowBoard',
    component: ShowBoard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/add-board',
    name: 'AddBoard',
    component: AddBoard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit-board/:id',
    name: 'EditBoard',
    component: EditBoard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
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

router.beforeEach(async (to, from, next) => {
  const currentUser = await firebase.getCurrentUser()
  const requiresAuth = to.matched.some(
    (record) => record.meta.requiresAuth
  );
  if (requiresAuth && !currentUser) {
    next("login");
  } else if (!requiresAuth && currentUser) {
    next("/")
  }
  else {
    next();
  }
});

export default router
