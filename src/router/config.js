/**
 * @file progress bar & promise router
 * @extends router
 * @version 1.0.0
 * @author zhenHua.Zhang(858994045@qq.com)
 * @date 2020/12/03
 * */

import router from '@/router/index'
import NProgress from 'nprogress'
import '@/components/NProgress/nprogress.scss'

router.beforeEach((to,form,next) => {
  document.title = `${to.meta.title} - 天天采配`
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})