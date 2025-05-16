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
    class="w-32 h-32 p-2 relative rounded-4xl"
  >
    <span
      class="absolute top-0 left-0 flex items-center justify-center z-10 bg-[rgb(0,0,0,0.3)] hover:bg-[rgb(0,0,0,0.2)] w-full h-full rounded-4xl cursor-pointer"
    >
      <CameraIcon class="w-10 text-gray-50" />
    </span>

    <img
      :src="src || '/images/no-image.png'"
      :alt="alt"
      class="w-full rounded-4xl"
    />
  </label>
</template>
