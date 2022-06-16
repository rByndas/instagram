<template>
  <a-layout class="layout">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <router-link to="/"> ГЛАВНАЯ </router-link>
    </a-layout-header>

    <a-layout-content style="text-align: center">
      <div
        :style="{
          position: 'relative',
          background: 'rgb(255, 255, 255)',
          padding: '24px',
          minHeight: '280px',
          top: '60px',
        }"
      >
        <router-view></router-view>
      </div>
    </a-layout-content>

    <a-layout-footer style="text-align: center"> footer </a-layout-footer>
  </a-layout>
</template>

<style>
.ant-layout-header {
  color: #fff !important;
  text-align: center !important;
}
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme="dark"] .site-layout-content {
  background: #141414;
}
</style>
