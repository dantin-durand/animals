import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Pets from "../views/Pets.vue";
import Pet from "../views/Pet.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:species",
    name: "Pets",
    component: Pets,
    props: true,
  },
  {
    path: "/pets/:species/:id_pet",
    component: Pet,
    name: "Pet",
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
