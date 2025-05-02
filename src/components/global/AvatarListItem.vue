<script setup lang="ts">
const props = defineProps<{
  avatar: string;
}>();

const imageSrc = new URL(
  `../../assets/images/avatars/${props.avatar}`,
  import.meta.url
).href;
</script>

<template>
  <li class="w-20 hover:bg-gray-200 cursor-pointer p-4 rounded-lg">
    <img :src="imageSrc" alt="Avatar" />
  </li>
</template>
