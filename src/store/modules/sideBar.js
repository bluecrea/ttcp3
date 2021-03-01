const state = {
  sidebar: {
    opened: true,
    withoutAnimation: false
  }
}

const getters = {
  visitedSideBar: (state) => state.sidebar,
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {

    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
}

const actions = {
  toggleSideBar({commit}) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
}

export default {
  state, getters, mutations, actions
}