<template>
  <n-button icon-placement="left" secondary strong @click="switchLang">
    <template #icon>
      <div class="i-material-symbols-translate"></div>
    </template>
    {{ lang }}
  </n-button>
</template>

<script setup>
import { ref } from 'vue'
import { NButton } from "naive-ui"
import i18n from '@/i18n'

const lang = ref(i18n.global.locale.value === 'zh' ? 'EN' : '中')

function switchLang() {
  const map = {
    'zh': 'EN',
    'en': '中'
  }
  const newLocale = i18n.global.locale.value === 'zh' ? 'en' : 'zh'
  i18n.global.locale.value = newLocale
  lang.value = map[newLocale]
}

</script>