<template>
  <div id="sider">
    <el-scrollbar>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        background-color="#f6f8fa"
        active-text-color="#42b983"
      >
        <Menu
          v-for="route in routes"
          :item="route"
          :key="route.path"
          :base-path="route.path"
        ></Menu>
      </el-menu>
    </el-scrollbar>

    <div class="footer">
      <Hamburger
        :toggle-click="toggleSideBar"
        :is-active="sidebar.opened"
      ></Hamburger>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/hamburger'
import Menu from './Menu.vue'
export default {
  name: 'Sider',
  components: {
    Hamburger,
    Menu
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    isCollapse () {
      return !this.sidebar.opened
    },
    routes () {
      let newRoute = []
      this.$router.options.routes.forEach(route => {
        if (route.isRoot) {
          newRoute = newRoute.concat(route.children)
        } else newRoute.push(route)
      })
      return newRoute
    }
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('ToggleSideBar')
    }
  }
}
</script>
