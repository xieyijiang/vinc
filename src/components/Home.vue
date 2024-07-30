<template>
  <div class="min-h-screen flex flex-col">
    <div>
      <!-- <TopNavigation>
        <template #right>
          <ThemeSwitcher />
          <LocaleSwitcher />
        </template>
      </TopNavigation> -->
    </div>
    <div class="flex-1 flex items-center justify-center">
      <h1 class="text-2xl font-bold">{{ t('message.hello') }}</h1>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
// import TopNavigation from './TopNavigation.vue'
// import ThemeSwitcher from './ThemeSwitcher.vue'
// import LocaleSwitcher from './LocaleSwitcher.vue'

const { t } = useI18n()

</script>