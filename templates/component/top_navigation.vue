<template>
  <div class="w-screen h-12 p-2 flex items-center">
    <div class="w-1/2 flex items-center">
      <slot name="left"></slot>
    </div>
    <div class="w-1/2 flex items-center justify-end gap-2">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup>

</script>