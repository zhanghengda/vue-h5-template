/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index'),
    meta: { title: '首页', keepAlive: false }
  },
  {
    path: '/complaints',
    name: 'complaints',
    component: () => import('@/views/home/complaints'),
    meta: { title: '消息反馈', keepAlive: false }
  },
  {
    path: '/authen',
    name: 'authen',
    component: () => import('@/views/home/authen'),
    meta: { title: '防伪查询', keepAlive: false }
  },
  {
    path: '/wxm',
    name: 'wxm',
    component: () => import('@/views/home/wxm'),
    meta: { title: '产品追溯信息', keepAlive: false }
  }
]

export const constantRouterMap1 = [
  {
    path: '/',
    component: () => import('@/views2/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views2/home/index'),
    meta: { title: '首页', keepAlive: false }
  },
  {
    path: '/complaints',
    name: 'complaints',
    component: () => import('@/views2/home/complaints'),
    meta: { title: '消息反馈', keepAlive: false }
  },
  {
    path: '/authen',
    name: 'authen',
    component: () => import('@/views2/home/authen'),
    meta: { title: '防伪查询', keepAlive: false }
  },
  {
    path: '/wxm',
    name: 'wxm',
    component: () => import('@/views2/home/wxm'),
    meta: { title: '产品追溯信息', keepAlive: false }
  }
]
