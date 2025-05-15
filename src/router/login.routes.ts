import { RouteRecordRaw } from 'vue-router';

const loginRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/modules/login/_views/Login.vue'),
    meta: { guest: true },
  },
  {
    path: '/login-expired',
    name: 'login.expired',
    component: () => import('@/modules/login/_views/LoginExpired.vue'),
    meta: { guest: true },
  },
  {
    path: '/forgot-password',
    name: 'password.forgot',
    component: () => import('@/modules/login/_views/PasswordForgot.vue'),
    meta: { guest: true },
  },
  {
    path: '/reset-password',
    name: 'password.reset',
    props: false,
    component: () => import('@/modules/login/_views/PasswordReset.vue'),
    meta: { guest: true },
  },
  {
    path: '/send-email',
    name: 'send.email',
    component: () => import('@/modules/login/_views/SendEmail.vue'),
    meta: { guest: true },
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/modules/users/_views/UserSignup.vue'),
    meta: { guest: true },
  },
];

export default loginRoutes;
