import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/play', component: () => import('pages/BiliPlayTop.vue') },
      { path: '/score', component: () => import('pages/BiliScore.vue') },
      { path: '/sort', component: () => import('pages/BiliSort.vue') },
      { path: '/area', component: () => import('pages/BiliArea.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
