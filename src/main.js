import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import LoginApp from './components/Login.vue';
import SignupApp from './components/Signup.vue';
import HomeApp from './components/Home.vue';
import ProfileApp from './components/Profile.vue'
import ComJobDetails  from './components/Company/ComJobDetails'
import UpdateJob from './components/Company/UpdateComJob'
import './axios'
import PrimeVue from "primevue/config";
import MultiSelect from 'primevue/multiselect';
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'

//import Vue from 'vue'


const routes = [
    {
      path: '/home',
      name: 'Home',
      component: HomeApp
    },
    {
      path: '/home/:id/job-details',
      name: 'jobDetails',
      component: ComJobDetails
    },

    {
      path: '/home/:id/job-update',
      name: 'jobUpdate',
      component: UpdateJob
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileApp
    },
   
      {
        path: '/login',
        name: 'login',
        component: LoginApp,
      },
      {
        path: '/signup',
        name: 'signup',
        component: SignupApp,
      },
      
     
  ]
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })



// new Vue({
//   router,
//    store,
//    render:h=>(App),
    
// }).$mount('#app')

createApp(App).use(router).use(PrimeVue).component("MultiSelect", MultiSelect).mount('#app')
//.use(store)
// new Vue({
  
//   router,
//   render: h => h(App)
// }).$mount("#app");
