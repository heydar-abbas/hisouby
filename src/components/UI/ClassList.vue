<script setup lang="ts">
defineProps<{
  title: string;
  badgeImage: string;
}>();
</script>

<template>
  <li class="basis-17 p-2 text-xs bg-gray-200">
    <figure>
      <img :src="badgeImage" alt="class badge" class="mb-2" />
      <figcaption class="text-center">{{ title }}</figcaption>
    </figure>
  </li>
</template>
