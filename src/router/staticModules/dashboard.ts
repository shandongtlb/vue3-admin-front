import { type RouteRecordRaw } from 'vue-router';
import RouterView from '@/layout/routerView/index.vue';
import { t } from '@/hooks/useI18n';

const moduleName = 'dashboard';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: moduleName,
    redirect: '/dashboard/welcome',
    component: RouterView,
    meta: {
      title: t('routes.dashboard.dashboard'),
      hideInMenu: true,
      icon: 'icon-yibiaopan',
    },
    children: [
      {
        path: 'welcome',
        name: `${moduleName}-welcome`,
        meta: {
          title: '首页',
          icon: 'icon-shouye',
        },
        component: () =>
          import(/* webpackChunkName: "dashboard-welcome" */ '@/views/index/index/index.vue'),
      },
    ],
  },
];

export default routes;
