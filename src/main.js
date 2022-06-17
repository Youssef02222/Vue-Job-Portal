import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import LoginApp from './components/Login.vue';
import SignupApp from './components/Signup.vue';
import HomeApp from './components/Home.vue';
import ProfileApp from './components/Profile.vue'
import './axios'

//import Vue from 'vue'


const routes = [
    {
      path: '/home',
      name: 'Home',
      component: HomeApp
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

createApp(App).use(router).mount('#app')
//.use(store)
// new Vue({
  
//   router,
//   render: h => h(App)
// }).$mount("#app");