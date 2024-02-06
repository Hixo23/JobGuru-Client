import AddOfferPageVue from '@/features/AddOffers/pages/AddOfferPage.vue'
import LoginPageVue from '@/features/Auth/pages/LoginPage.vue'
import RegisterPageVue from '@/features/Auth/pages/RegisterPage.vue'
import HomeViewVue from '@/features/JobList/pages/HomePage.vue'
import UserOffersVue from '@/features/UserOffers/pages/UserOffers.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeViewVue
    },
    {
      path: '/login',
      component: LoginPageVue
    },
    {
      path: '/register',
      component: RegisterPageVue
    },
    {
      path: '/addoffer',
      component: AddOfferPageVue
    },
    {
      path: '/myoffers',
      component: UserOffersVue
    }
  ]
})

export default router
