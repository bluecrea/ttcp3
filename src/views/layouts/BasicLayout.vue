<template>
  <div class="main" :class="!sidebar.opened ? 'isCollapsed' : ''">
    <side-bar :logo-img="logoImg" />
    <Header>
      <i slot="collapsed" class="header-trigger" :class="!sidebar.opened ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="handleClickOutside"></i>
    </Header>
    <tabsBar/>
    <div class="tcp-body">
      <router-view v-if="routerView"/>
      <Footer/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import sideBar from '@/components/LeftSider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'BasicLayout',
  components: {
    sideBar,
    Header,
    Footer
  },
  data() {
    return {
      collapsed: false,
      routerView: true,
      logoImg: require('../assets/logo.png'),
      userInfo: {}
    }
  },
  computed: {
    ...mapGetters({
      visitedRoutes: 'tabsBar/visitedRoutes',
      sidebar: 'sideBar/visitedSideBar'
    })
  },
  created() {
    //重载所有路由
    this.$baseEventBus.$on('reload-router-view', () => {
      this.routerView = false
      this.$nextTick(() => {
        this.routerView = true
      })
    })
  },
  mounted () {
    this.userInfo = JSON.parse(sessionStorage.getItem('userInfo_ttcp'))
    if (Object.keys(this.userInfo).length !== 0) {
      if (this.userInfo.customerLogo) {
        this.logoImg = this.userInfo.customerLogo
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('sideBar/toggleSideBar')
    }
  }
}
</script>