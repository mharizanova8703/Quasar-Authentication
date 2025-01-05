const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '', // This maps to '/'
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: 'profile', // Use relative paths here
        component: () => import('pages/ProfilePage.vue')
      },
      {
        path: 'register', // Use relative paths here
        component: () => import('pages/RegisterPage.vue')
      },
      {
        path: 'login', // Use relative paths here
        component: () => import('pages/LoginPage.vue')
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue') // Catch-all for undefined routes
  }
]

export default routes
