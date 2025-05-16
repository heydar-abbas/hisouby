<script setup lang="ts">
defineProps<{
  title: string;
  badgeImage?: string;
}>();
</script>

<template>
  <li class="basis-17 p-2 text-xs bg-gray-200 rounded-md">
    <figure>
      <img
        :src="badgeImage || '/blank-img.webp'"
        alt="class badge"
        class="mb-2 w-full rounded-full"
      />
      <figcaption class="text-center">{{ title }}</figcaption>
    </figure>
  </li>
</template>
