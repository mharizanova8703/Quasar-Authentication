import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

/*
 * This file can be async too, for example:
 * export default route(async function (/* { store, ssrContext } * /) { ... })
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // The mode should match quasar.conf.js -> build -> vueRouterMode
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  return Router
})
