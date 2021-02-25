/**
 * @deprecated VueRouter async & router api promises
 * @author zhenHua.Zhang(858994045@qq.com)
 * */

import {BasicLayout, RouteView} from '@/layouts'

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
      {
        path: '/cookbook',
        name: 'cookbook',
        component: RouteView,
        meta: { title: '菜谱服务', keepAlive: true},
        children: [
          {// 用餐计划
            path: '/cookbook/eatPlan',
            name: 'eatPlan',
            component: () => import('@/views/foodServe/index'),
            meta: { title: '用餐计划', keepAlive: true },
          },
          { //菜谱下单
            path: '/cookbook/foodOrder',
            name: 'foodOrder',
            component: () => import('@/views/foodServe/foodOrder'),
            meta: { title: '菜谱下单', keepAlive: true }
          },
          { // 菜谱管理
            path: '/cookbook/foodManage',
            name: 'foodManage',
            component: () => import('@/views/foodServe/foodManage'),
            meta: { title: '菜谱管理', keepAlive: true },
          },
        ]
      },

      // 预定下单
      {
        path: '/bookingOrder',
        name: 'bookingOrder',
        component: () => import('@/views/bookingOrder'),
        meta: { title: '预定下单', keepAlive: true },
      },

      // 订单服务
      {
        path: '/orderServe',
        component: RouteView,
        meta: { title: '订单服务', keepAlive: true },
        children: [
          {
            path: '/orderServe/purchaseOrder',
            name: 'purchaseOrder',
            component: () => import('@/views/orderServe/purchaseOrder/index'),
            meta: { title: '采购订单', keepAlive: true}
          },
          {
            path: '/orderServe/purchaseOrderDetail',
            name: 'purchaseOrderDetail',
            component: () => import('@/views/orderServe/purchaseOrder/orderDetail'),
            meta: { title: '订单详情', keepAlive: true, activeMenu: '/orderServe/purchaseOrder'}
          },
          {
            path: '/orderServe/orderLog',
            name: 'orderLog',
            component: () => import('@/views/orderServe/orderLog'),
            meta: { title: '订单日志管理', keepAlive: true}
          },
        ]
      },

      // 结算服务
      {
        path: '/accounting',
        component: RouteView,
        meta: { title: '结算服务', keepAlive: true },
        children: [
          {
            path: '/accounting/dayClose',
            name: 'dayClose',
            component: () => import('@/views/Accounting/day/index'),
            meta: { title: '日结算单', keepAlive: true}
          },
          {
            path: '/accounting/creatDayClose',
            name: 'createDayClose',
            component: () => import('@/views/Accounting/day/create'),
            meta: {title: '新建', keepAlive: false, activeMenu:'/accounting/dayClose'}
          },
          {
            path: '/accounting/monthClose',
            name: 'monthClose',
            component: () => import('@/views/Accounting/month/index'),
            meta: { title: '月结算单', keepAlive: true}
          }
        ]
      },

      // 检测报告
      {
        path: '/examiningReport',
        name: 'examiningReport',
        component: () => import('@/views/examiningReport'),
        meta: { title: '检测报告', keepAlive: true },
      },

      // 仓储服务
      {
        path: '/storeServe',
        component: RouteView,
        meta: { title: '仓储服务', keepAlive: true },
        children: [
          {
            path: '/storeServe/productManage',
            name: 'productManage',
            component: () => import('@/views/storeServe/productManage'),
            meta: { title: '商品管理', keepAlive: true}
          },
          {
            path: '/storeServe/productClassify',
            name: 'productClassify',
            component: () => import('@/views/storeServe/productClassify'),
            meta: { title: '商品分类', keepAlive: true}
          }
        ]
      },

      // 账户管理
      {
        path: '/user',
        component: RouteView,
        meta: { title: '账户管理', keepAlive: true },
        children: [
          { //基本信息
            path: '/user/basicInfo',
            name: 'basicInfo',
            component: () => import('@/views/user/basicInfo'),
            meta: { title: '基本信息', keepAlive: true}
          },
          { //授权中心
            path: '/user/authorCenter',
            name: 'authorCenter',
            component: () => import('@/views/user/authorCenter'),
            meta: { title: '授权中心', keepAlive: true}
          },
          { // 报价清单管理
            path: '/user/quoteInventory',
            name: 'quoteInventory',
            component: () => import('@/views/user/quoteInventory'),
            meta: { title: '报价清单管理', keepAlive: true}
          },
          { //子账号管理
            path: '/user/sonAccount',
            name: 'sonAccount',
            component: () => import('@/views/user/sonAccount'),
            meta: { title: '子账号管理', keepAlive: true}
          },
          { //食堂管理
            path: '/user/canteen',
            name: 'canteen',
            component: () => import('@/views/user/canteen'),
            meta: { title: '食堂管理', keepAlive: true}
          },
          { // 日志管理
            path: '/user/logBook',
            name: 'logBook',
            component: () => import('@/views/user/logBook'),
            meta: { title: '日志管理', keepAlive: true}
          },
          { // 审批管理
            path: '/user/approvalManagement',
            name: 'approvalManagement',
            component: () => import('@/views/user/approvalManagement'),
            meta: { title: '审批管理', keepAlive: true}
          },
          { // 食堂预算设置
            path: '/user/canteenBudget',
            name: 'canteenBudget',
            component: () => import('@/views/user/canteenBudget'),
            meta: { title: '食堂预算设置', keepAlive: true}
          }
        ]
      },
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

/**
 * 基础路由
 * @type { *[] }
 * */
export const constantRouter = [
  {
    path: '/404',
    component: () => import('@/views/exception/404')
  }
]