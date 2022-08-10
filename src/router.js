import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      component: () => import("./pages/auth/login-page.vue"),
    },
    {
      path: "/",
      component: () => import("./pages/layouts/main-layout.vue"),
      children: [
        {
          path: "/",
          component: () => import("./pages/home/home-page.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("./pages/error/404-page.vue"),
    },
  ],
});
