<template>
  <div>User</div>
</template>

<script setup>
import { onActivated, onDeactivated, onMounted, onUnmounted } from 'vue'

defineOptions({
  name: 'AdminUser'
})

onMounted(() => {
  console.log('User mounted!')
})

onActivated(() => {
  console.log('User activated!')
})

onDeactivated(() => {
  console.log('User deactivated!')
})

onUnmounted(() => {
  console.log('User Unmounted!')
})
</script>
<style scoped></style>