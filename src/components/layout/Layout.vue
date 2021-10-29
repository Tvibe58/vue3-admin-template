<template>
  <div id="layout">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container class="container">
        <Sider></Sider>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/layout/components/Header.vue'
import Sider from '@/components/layout/components/Sider.vue'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    Header,
    Sider
  },
  mixins: [ResizeMixin]
}
</script>
