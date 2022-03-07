import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '@/components/layout/Layout.vue'
import Empty from '@/components/layout/Empty.vue'

const routes = [
  {
    path: '/',
    name: 'Root',
    isRoot: true,
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页',
          icon: 'el-icon-house'
        }
      },
      {
        path: '/group',
        name: 'Group',
        component: Empty,
        meta: {
          title: 'Demo',
          icon: 'el-icon-collection'
        },
        children: [
          {
            path: '/list',
            name: 'Group1',
            component: () => import('../views/Demo/List.vue'),
            meta: {
              title: '列表'
            }
          },
          {
            path: '/group2',
            name: 'Group2',
            component: () => import('../views/About.vue'),
            meta: {
              title: '测试2',
              icon: 'people'
            }
          }
        ]
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          title: '关于',
          icon: 'el-icon-setting'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
