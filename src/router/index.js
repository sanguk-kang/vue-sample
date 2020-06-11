import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',            name: 'Main',   
    component: () => import('../views/Main.vue'),
    meta: { navEnable: false , asideEnable: false}
  },
  {
    path: '/login',       name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: { navEnable: true , asideEnable: true}
  },
  {
    path: '/about',       name: 'About',
    component: () => import('../views/About.vue'),
    meta: { navEnable: true , asideEnable: true}
  },
  {
    path: "/demo",        name: "Demo",
    component: () => import("../views/Demo.vue"),
    meta: { navEnable: true , asideEnable: true}
  },
  {
    path: "/demoSbst",    name: "DemoSbst",
    component: () => import("../components/demo/DemoSbst.vue"),
    meta: { navEnable: true , asideEnable: true}
  },
  {
    path: "/demoCreate",  name: "DemoCreate",
    component: () => import("../components/demo/DemoCreate.vue"),
    meta: { navEnable: true , asideEnable: true}
  },
  {
    path: "/backlog",     name: "Backlog",
    component: () => import("../views/backlog/Backlog.vue"),
    meta: { navEnable: true , asideEnable: true}
  },
  {
    path: "/backlogSbst", name: "BacklogSbst",
    component: () => import("../views/backlog/BacklogSbst.vue"),
    meta: { navEnable: true , asideEnable: true}
  },
  {
    path: "/backlogCreate", name: "BacklogCreate",
    component: () => import("../views/backlog/BacklogCreate.vue"),
    meta: { navEnable: true , asideEnable: true}
  },
  { 
    path: '*', redirect: '/',
    meta: { navEnable: false , asideEnable: false}
  }
]


const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// 라우팅이 일어나기 전
router.beforeEach((to, from, next) => {
  console.log('>> before router')
  next();
})

export default router
