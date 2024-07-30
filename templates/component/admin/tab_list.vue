<template>
  <n-flex>
    <n-tag size="large" :type="route.path === '/admin' ? 'success' : 'default'" @click="handleSelect($event, { path: '/admin' })" class="cursor-pointer hover:opacity-60">
      首页
    </n-tag>
    <n-tag v-for="item in routerStore.list" :key="item.name" closable :type="route.path === item.path ? 'success' : 'default'" size="large" @click="handleSelect($event, item)" @close="handleClose($event, item)"
      class="cursor-pointer hover:opacity-60">
      {{ item.title }}
    </n-tag>
  </n-flex>
</template>

<script setup>
import { NFlex, NTag } from 'naive-ui'
import { useRoute, useRouter } from 'vue-router'
import { useRouterStore } from '@/stores/routerStore'

const route = useRoute()
const router = useRouter()
const routerStore = useRouterStore()

function handleSelect(event, item) {
  router.push(item.path)
}

function handleClose(event, item) {
  routerStore.close(item.name)
}

</script>