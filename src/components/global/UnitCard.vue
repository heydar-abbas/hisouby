<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div
    class="basis-full md:basis-80 lg:basis-72 xl:basis-96 border-b-2 border-gray-300"
  >
    <h2 class="text-gray-900">{{ title }}:</h2>
    <div class="flex flex-wrap gap-4 p-4">
      <slot></slot>
    </div>
  </div>
</template>
