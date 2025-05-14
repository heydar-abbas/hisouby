<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps<{
  to: string;
  title: string;
}>();
</script>

<template>
  <li class="py-2 cursor-pointer hover:underline hover:font-bold list-disc">
    <RouterLink :to="to">{{ title }}</RouterLink>
  </li>
</template>
