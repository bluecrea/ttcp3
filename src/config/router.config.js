/**
 * @deprecated VueRouter async & router api promises
 * @author zhenHua.Zhang(858994045@qq.com)
 * */

import {BasicLayout, RouteView} from '@/views/layouts'

export const asyncRoutes = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    redirect:'/priceWindow/priceCenter',
    meta: {title: '价格之窗'},
    children: [
      // 价格之窗
      {
        path: '/priceWindow',
        name: 'priceWindow',
        component: RouteView,
        meta: { title: '价格之窗', keepAlive: true},
        children: [
          {// 价格中心
            path: '/priceWindow/priceCenter',
            name: 'priceCenter',
            component: () => import('@/views/priceWindow/priceCenter'),
            meta: { title: '价格中心', keepAlive: true, affix: true, }
          },
          {// 品牌报价
            path: '/priceWindow/priceBrand',
            name: 'brandPrice',
            component: () => import('@/views/priceWindow/priceBrand'),
            meta: { title: '品牌报价', keepAlive: true}
          },
          {//采购清单
            path: '/priceWindow/purchasingList',
            name: 'purchasingList',
            component: () => import('@/views/priceWindow/purchasingList'),
            meta: { title: '采购清单', keepAlive: true}
          },
          {//农产品商品库
            path: '/priceWindow/libraryOfGoods',
            name: 'libraryOfGoods',
            component: () => import('@/views/priceWindow/libraryOfGoods'),
            meta: { title: '农产品商品库', keepAlive: true}
          },
          {// 圳扶贫
            path: '/priceWindow/zfp',
            name: 'zfp',
            component: () => import('@/views/priceWindow/zfp'),
            meta: { title: '圳扶贫', keepAlive: true}
          },
          { // 价格使用说明
            path: '/priceWindow/priceExplain',
            name: 'priceExplain',
            component: () => import('@/views/priceWindow/priceExplain'),
            meta: { title: '价格使用说明', keepAlive: true}
          },
        ]
      },

      // 菜谱管理


      // 预定下单


      // 订单服务


      // 结算服务


      // 检测报告


      // 仓储服务


      // 账户管理

      // basic route
      /*{
        path: '*',
        component: RouteView,
        redirect: '/404',
        children: [
          {
            path: '/404',
            component: () => import('@/views/exception/404'),
            meta: { title: '页面未找到'}
          }
        ]
      }*/
    ]
  }
]