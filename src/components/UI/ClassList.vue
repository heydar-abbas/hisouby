<script setup lang="ts">
defineProps<{
  title: string;
  badgeImage: string;
}>();
</script>

<template>
  <li class="basis-14 p-1 text-xs bg-gray-200">
    <figure>
      <img :src="badgeImage" alt="class badge" class="mb-2" />
      <figcaption class="text-center">{{ title }}</figcaption>
    </figure>
  </li>
</template>
