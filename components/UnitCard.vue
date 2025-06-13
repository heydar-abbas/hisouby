<template>
  <div class="border-b-1 border-gray-300">
    <h2 class="text-gray-900 font-semibold">{{ title }}</h2>
    <div class="flex flex-wrap gap-4 p-4">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
