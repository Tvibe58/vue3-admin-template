<template>
  <div id="layout">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container class="container">
        <el-aside width="100px">
          <Sider></Sider>
        </el-aside>
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

export default {
  name: 'Layout',
  components: {
    Header,
    Sider
  }
}
</script>
