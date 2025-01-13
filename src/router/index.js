import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserList from '@/views/UserList.vue'
import RegisterView from '@/views/RegisterView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import LoginView from '@/views/LoginView.vue'
import UserProfile from '@/views/UserProfile.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/userlist/',
    name: 'userlist',
    component: UserList
  },
  {
    path: '/register/',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/404/',
    name: '404',
    component: NotFoundView
  },
  {
    path: '/login/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/userprofile/:userId/',
    name: 'userprofile',
    component: UserProfile
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
