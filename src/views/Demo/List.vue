<template>
  <div class="list">
    <h1>列表</h1>
    <el-button
      type="primary"
      plain
      @click="login"
    >Login</el-button>
    <el-button
      type="primary"
      plain
      @click="check"
    >Check</el-button>
  </div>
</template>

<script>
// import uuid4 from 'uuid/v4'
import storage from '@/utils/storage'
import index from '@/api/index'
export default {
  name: 'Home',
  created () {
    console.log('index', index.login)
    // console.log('api', this.$api.post)
  },
  methods: {
    login () {
      storage.set('token', 'dc8d280b-df84-43f9-93cd-711b427453b0')
      // dc8d280b-df84-43f9-93cd-711b427453b0
      const data = {
        username: '',
        password: ''
        // imageCode: '',
        // uid: uuid.v4().replace(/-/g, '')
      }
      this.$api.post('/uaa/login/token', data, { error: true, unAuth: true }).then(res => {
        console.log('接口res', res)
      }).catch(err => {
        console.log('接口err', err)
      })
    },
    getData () {
      this.$api.get('/marketing/api/pc/welcome/info').then(res => {

      })
    },
    check () {
      this.$api.get('/marketing/api/pc/work/check').then(res => {
        console.log('check res', res)
      }).catch(err => {
        console.log('接口err', err)
      })
    }
  }
}
</script>
