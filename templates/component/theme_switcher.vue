<template>
  <n-button icon-placement="left" secondary strong @click="switchTheme">
    <template #icon>
      <div :class="icon"></div>
    </template>
  </n-button>
</template>

<script setup>
import { ref } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import { NButton } from "naive-ui"

const themeStore = useThemeStore()
const map = {
  'light': 'i-material-symbols-wb-sunny-outline',
  'dark': 'i-material-symbols-nights-stay',
  'auto': 'i-material-symbols-join-right'
}
const icon = ref(map[themeStore.customTheme])

function switchTheme() {
  const options = ['light', 'dark', 'auto']
  const currentIndex = options.indexOf(themeStore.customTheme)
  const nextIndex = (currentIndex + 1) % options.length
  themeStore.setTheme(options[nextIndex])
  icon.value = map[options[nextIndex]]
}
</script>
