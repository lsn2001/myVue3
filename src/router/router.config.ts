import { type RouteRecordRaw } from "vue-router";

export const Mainroutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("~/pages/Home/home.vue"),
  }
];