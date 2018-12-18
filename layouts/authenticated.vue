<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider
      collapsible
      v-model="collapsed"
    >
      <a-row type="flex" justify="space-around" align="middle">
          <img v-if="!collapsed" class="logo" src="~/assets/logo-monar.png" width="100"/>
          <img v-else class="logo-small" src="~/assets/logo-small.png"/>
      </a-row>
      <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="database" />
          <span>Relatórios</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="clock-circle-o" />
          <span>Linha do Tempo</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="shopping-cart" />
          <span>Pagamentos</span>
        </a-menu-item>
        <a-menu-item @click="logoutHandler()" key="4">
          <a-icon type="logout" />
          <span>Sair</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content style="margin: 0 16px">
        <nuxt />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Monar Reports ©2018 Created by CanionLabs
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data () {
    return {
      collapsed: false,
    }
  },
  methods: {
    toggleCollapsed () {
      this.collapsed = !this.collapsed
    },
    logoutHandler () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  },
}
</script>

<style lang="scss">
#components-layout-demo-side {
  .logo {
    margin: 40px;
    height: 40px;
  }
  .logo-small {
    margin: 30px;
    height: 60px;
  }
}

.ant-layout-footer {
  height: 10vh;
}
</style>