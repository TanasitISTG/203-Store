import { createRouter, createWebHistory } from "vue-router";
import Cashier from "../components/Cashier/Cashier.vue";
import History from "../components/History/History.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/cashier",
    },
    {
      path: "/cashier",
      name: "Cashier",
      component: Cashier,
    },
    {
      path: "/history",
      name: "History",
      component: History,
    },
  ],

  linkActiveClass: "text-blue-500",
  linkExactActiveClass: "text-blue-500",
});

export default router;
