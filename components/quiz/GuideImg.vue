<template>
  <figure class="text-center text-xs text-gray-600">
    <img :src="imgSrc" :alt="imgAlt" class="w-full object-cover" />
  </figure>
</template>

<script setup lang="ts">
defineProps<{
  imgSrc: string;
  imgAlt: string;
}>();
</script>
