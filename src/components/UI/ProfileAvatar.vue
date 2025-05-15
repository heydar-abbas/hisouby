<script setup lang="ts">
defineProps<{
  avatarSrc: string;
}>();
</script>

<template>
  <div class="flex justify-center py-4 ">
  <img
    class="rounded-4xl p-2 w-24 bg-gray-300"
    :src="avatarSrc || '/no-image.png'"
    alt="User Avatar"
  />
</div>
</template>