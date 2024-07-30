<template>
  <n-layout>
    <n-layout-sider :collapsed-width="64" show-trigger>
      <n-menu :options="menuOptions" />
    </n-layout-sider>
    <n-layout>
      <n-layout-header>
        <n-thing title="Admin Dashboard" />
      </n-layout-header>
      <n-layout-content>
        <n-card>
          <n-thing title="Welcome to the Admin Dashboard" description="Here you can manage your application." />
        </n-card>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup>
import { ref } from 'vue'
import { NLayout, NLayoutSider, NMenu, NLayoutHeader, NLayoutContent, NCard, NThing } from 'naive-ui'

// 定义菜单选项
const menuOptions = ref([
  { label: 'Dashboard', key: 'dashboard' },
  { label: 'Users', key: 'users' },
  { label: 'Settings', key: 'settings' }
])
</script>

<style scoped>
/* 添加一些样式使界面更好看 */
</style>