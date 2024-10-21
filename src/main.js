import { createApp } from 'vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import { createRouter, createWebHistory } from "vue-router"

const app = createApp(App)

import './style.scss'
import App from './App.vue'
import ApartmentDetails from './components/main/ApartmentDetails.vue'
import Home from './components/main/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
        path: "/about",
        component: ApartmentDetails,
        },
    ],
});
  
  app.use(router);
  app.mount("#app");
  
