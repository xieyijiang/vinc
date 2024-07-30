<template>
  <router-view />
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useMessage } from 'naive-ui'

window.$message = useMessage()

</script>

<style scoped></style>