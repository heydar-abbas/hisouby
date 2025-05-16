<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps<{
  title: string;
  topic: string;
}>();
</script>

<template>
  <RouterLink
    to="#"
    class="w-full p-4 border-b-1 border-b-gray-300 hover:bg-gray-100"
  >
    <h2 class="text-gray-500 text-sm">{{ title }}</h2>
    <p class="text-gray-900">{{ topic }}</p>
  </RouterLink>
</template>
