<template>
  <div class="w-screen h-screen flex flex-col items-center justify-center ">
    <h1>Hello vinc!</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('_componentName mounted!')
})
</script>