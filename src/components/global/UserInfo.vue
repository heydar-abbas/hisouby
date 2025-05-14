<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <div class="border-b-gray-300 border-b-2 py-4">
    <h2 class="text-center font-semibold">
      {{ name || "Your name" }}
    </h2>
    <slot></slot>
  </div>
</template>
