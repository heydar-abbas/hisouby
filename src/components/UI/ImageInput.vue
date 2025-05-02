<script setup lang="ts">
import CameraIcon from "../icons/CameraIcon.vue";

defineProps<{
  src?: string;
  alt: string;
}>();
</script>

<template>
  <label
    for="image"
    class="w-32 h-32 p-2 relative rounded-full border-2 border-gray-300"
  >
    <span
      class="absolute top-0 left-0 flex items-center justify-center z-10 bg-gray-900 opacity-30 hover:opacity-35 w-full h-full rounded-full cursor-pointer"
    >
      <CameraIcon class="w-10 text-white" />
    </span>

    <img
      :src="src || '/no-image.png'"
      :alt="alt"
      class="w-28 rounded-full bg-gray-50"
    />
  </label>
</template>
