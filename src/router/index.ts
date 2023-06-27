import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/marcas",
    name: "marcas",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Marcas/MarcasView.vue"),
  },
  {
    path: "/cadastrar",
    name: "cadastrar",
    component: () => import("../views/CadastrarView.vue"),
  },
  {
    path: "/cadastrar-marca",
    name: "cadastrar-marca",
    component: () => import("../views/Marcas/MarcasCadastroView.vue"),
  },
  {
    path: "/deletar-marca",
    name: "deletar-marca",
    component: () => import("../views/Marcas/MarcasDeleteView.vue"),
  },
  {
    path: "/editar-marca",
    name: "editar-marca",
    component: () => import("../views/Marcas/MarcasEditView.vue"),
  },
  {
    path: "/modelos",
    name: "modelos",
    component: () => import("../views/Marcas/ModeloView.vue"),
  },
  {
    path: "/cadastrar-modelo",
    name: "cadastrar-modelo",
    component: () => import("../views/Marcas/ModelosCadastroView.vue"),
  },
  {
    path: "/deletar-modelo",
    name: "deletar-modelo",
    component: () => import("../views/Marcas/ModelosDeleteView.vue"),
  },
  {
    path: "/editar-modelo",
    name: "editar-modelo",
    component: () => import("../views/Marcas/ModelosEditView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
