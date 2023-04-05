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
      keepAlive: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index'),
    meta: { title: '首页', keepAlive: true }
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/home/gamedetail'),
    meta: { title: '详情', keepAlive: false }
  },
  {
    path: '/play',
    name: 'play',
    component: () => import('@/views/home/playGame'),
    meta: { title: '游戏', keepAlive: false }
  },
  {
    path: '/classify',
    name: 'classify',
    component: () => import('@/views/home/classify'),
    meta: { title: '分类', keepAlive: false }
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/home/blogdetail'),
    meta: { title: '文章详情', keepAlive: false }
  },
  {
    path: '/classifyList',
    name: 'classifyList',
    component: () => import('@/views/home/classifyList'),
    meta: { title: 'classifyList', keepAlive: false }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/home/about'),
    meta: { title: '关于', keepAlive: true }
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('@/views/home/service'),
    meta: { title: 'service', keepAlive: true }
  },
  {
    path: '/policy',
    name: 'policy',
    component: () => import('@/views/home/policy'),
    meta: { title: 'policy', keepAlive: true }
  }
]

export const constantRouterMap1 = [
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
  }
]
