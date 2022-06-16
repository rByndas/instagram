import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/post/:id_post/comment/:id_comment",
      name: "post",
      component: () => import("../views/PostView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    let noda = document.getElementById("comment_" + to.params.id_comment);

    if (to.params && to.params.id_comment && noda) {
      return {
        el: noda,
        top: 100,
      };
    }
    return {};
  },
});

export default router;
