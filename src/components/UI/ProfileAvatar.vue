<script setup lang="ts">
defineProps<{
  avatarSrc: string;
}>();
</script>

<template>
  <div class="flex flex-1/3 justify-center py-4 ">
  <img
    class="rounded-4xl p-2 w-24 lg:w-40 bg-gray-300"
    :src="avatarSrc || '/no-image.png'"
    alt="User Avatar"
  />
</div>
</template>