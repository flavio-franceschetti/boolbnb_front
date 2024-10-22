import { createApp } from "vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);

import "./style.scss";
import App from "./App.vue";
import ApartmentDetails from "./components/main/ApartmentDetails.vue";
import Home from "./components/main/Home.vue";
import SearchDetails from "./components/main/SearchDetails.vue";
import ContactOwner from "./components/main/ContactOwner.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/dettaglio-appartamento/:id",
      name: "apartmentDetails",
      component: ApartmentDetails,
    },
    {
      path: "/ricerca-avanzata/:address",
      name: "searchDetails",
      component: SearchDetails,
    },
    {
      path: "/contatta-proprietario",
      name: "ContactOwner",
      component: ContactOwner,
    },
  ],
});

app.use(router);
app.mount("#app");
