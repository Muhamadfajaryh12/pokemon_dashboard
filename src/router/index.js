import { createRouter, createWebHistory } from "vue-router";
import DashboardPokemon from "../pages/DashboardPokemon.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: DashboardPokemon,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
