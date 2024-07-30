<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { NConfigProvider, NMessageProvider, darkTheme } from 'naive-ui'
import { useThemeStore } from './stores/themeStore'
import Content from './Content.vue';

const themeStore = useThemeStore()
const theme = computed(() => themeStore.currentTheme === "dark" ? darkTheme : null)

onMounted(() => {
  themeStore.run()
})

onUnmounted(() => {
  themeStore.stop()
})

/**
 * (可选) 自定义主题 需设定 <n-config-provider :theme-overrides="themeOverrides">
 * @type import('naive-ui').GlobalThemeOverrides
 */
const themeOverrides = {
  common: {
    primaryColor: '#FF0000'
  },
  Button: {
    textColor: '#FF0000'
  },
  Select: {
    peers: {
      InternalSelection: {
        textColor: '#FF0000'
      }
    }
  }
  // ...
}
</script>

<template>
  <n-config-provider :theme="theme">
    <n-message-provider>
      <Content />
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped></style>
