import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    //Admin oldalért felelős Routerek
    {
      path: "/admin",
      name: "admin_index",
      component: () => import("../views/admin/Index.vue"),
    },
    {
      path: "/admin/dashboard",
      name: "admin_dashboard",
      component: () => import("../views/admin/Dashboard.vue"),
    },
    {
      path: "/admin/products",
      name: "admin_products",
      component: () => import("../views/admin/Products.vue"),
    },
    {
      path: "/admin/collections",
      name: "admin_collections",
      component: () => import("../views/admin/Collections.vue"),
    },
    {
      path: "/admin/sales",
      name: "admin_sales",
      component: () => import("../views/admin/Sales.vue"),
    },
    {
      path: "/admin/orders",
      name: "admin_orders",
      component: () => import("../views/admin/Orders.vue"),
    },
    {
      path: "/admin/inventory",
      name: "admin_inventory",
      component: () => import("../views/admin/Inventory.vue"),
    },
    {
      path: "/admin/mail",
      name: "admin_mail",
      component: () => import("../views/admin/Mail.vue"),
    },
    {
      path: "/admin/settings",
      name: "admin_settings",
      component: () => import("../views/admin/Settings.vue"),
    },
    {
      path: "/admin/marketing",
      name: "admin_marketing",
      component: () => import("../views/admin/Marketing.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
});

export default router;
