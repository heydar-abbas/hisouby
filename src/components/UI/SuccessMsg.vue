<script setup lang="ts">
defineProps<{
  msg: string | null;
}>();
</script>

<template>
  <div class="bg-green-200 py-2 rounded-md mb-2">
    <p class="font-semibold text-sm text-center text-green-800">{{ msg }}</p>
  </div>
</template>
