<template>
  <el-container style="height: 100vh">
    <router-view />
  </el-container>
</template>
<script>
import { mapGetters } from 'vuex'
import { inject } from 'vue'

export default {
  name: 'BasicLayout',
  components: {

  },
  setup() {
    const $bus = inject('$bus')
    //重载所有路由
    $bus.on('reload-router-view', () => {
      this.routerView = false
      this.$nextTick(() => {
        this.routerView = true
      })
    })
  },
  data() {
    return {
      collapsed: false,
      routerView: true,
      logoImg: require('@/assets/logo.png'),
      userInfo: {}
    }
  },
  computed: {
    ...mapGetters({
      visitedRoutes: 'tabsBar/visitedRoutes',
      sidebar: 'sideBar/visitedSideBar'
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