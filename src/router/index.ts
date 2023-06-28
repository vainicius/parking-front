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
  {
    path: "/condutor",
    name: "condutor",
    component: () => import("../views/Marcas/CondutorView.vue"),
  },
  {
    path: "/cadastrar-condutor",
    name: "cadastrar-condutor",
    component: () => import("../views/Marcas/CondutorCadastroView.vue"),
  },
  {
    path: "/editar-condutor",
    name: "editar-condutor",
    component: () => import("../views/Marcas/CondutorEditView.vue"),
  },
  {
    path: "/deletar-condutor",
    name: "deletar-condutor",
    component: () => import("../views/Marcas/CondutorDeleteView.vue"),
  },
  {
    path: "/veiculos",
    name: "veiculos",
    component: () => import("../views/Marcas/VeiculoView.vue"),
  },
  {
    path: "/cadastrar-veiculo",
    name: "cadastrar-veiculo",
    component: () => import("../views/Marcas/VeiculoCadastroView.vue"),
  },
  {
    path: "/editar-veiculo",
    name: "editar-veiculo",
    component: () => import("../views/Marcas/VeiculoEditView.vue"),
  },
  {
    path: "/deletar-veiculo",
    name: "deletar-veiculo",
    component: () => import("../views/Marcas/VeiculoDeleteView.vue"),
  },
  {
    path: "/configuracoes",
    name: "configuracoes",
    component: () => import("../views/Marcas/ConfiguracaoView.vue"),
  },
  {
    path: "/editar-configuracao",
    name: "editar-configuracao",
    component: () => import("../views/Marcas/ConfiguracaoEditView.vue"),
  },
  {
    path: "/movimentacoes",
    name: "movimentacoes",
    component: () => import("../views/Marcas/MovimentacaoView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
