<script setup lang="ts">
defineProps<{
  avatarSrc: string;
}>();
</script>

<template>
  <div class="flex flex-col items-center py-4">
  <img
    class="rounded-full border-2 border-slate-300 mb-1 p-2 w-20"
    :src="avatarSrc || '/no-image.png'"
    alt="User Avatar"
  />
</div>
</template>