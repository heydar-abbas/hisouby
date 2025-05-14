<script setup lang="ts">
import { reactive } from "vue";

defineProps<{
  level: number;
  title: string;
  levelColor: string;
}>();

const textColor = reactive<any>({
  proficient: "text-green-600",
  familiar: "text-purple-600",
  attempted: "text-orange-600",
});
</script>
<template>
  <li class="font-semibold" :class="textColor[levelColor]">
    <span>{{ title }}:</span>
    <span class="mr-2">{{ level }}</span>
  </li>
</template>
