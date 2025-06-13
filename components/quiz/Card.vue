<template>
  <div class="flex items-center gap-2 text-sm">
    <QuizLink :href="link" :degre="degre" />
    {{ title }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  degre: string | undefined;
  link: string;
  title: string;
}>();
</script>
