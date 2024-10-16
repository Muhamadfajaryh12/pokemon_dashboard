import { createRouter, createWebHistory } from "vue-router";
import DashboardPokemon from "../pages/DashboardPokemon.vue";
import DetailPokemon from "../pages/DetailPokemon.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: DashboardPokemon,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: DetailPokemon,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
