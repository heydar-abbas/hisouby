<template>
  <NuxtLink
    :to="href"
    class="w-5 h-5 border-2 rounded-sm"
    :class="statusColor || 'border-gray-500'"
  ></NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  href: string;
  degre: string | undefined;
}>();

const statusColors = reactive<any>({
  proficient: "bg-lime-500 border-lime-500",
  familiar: "bg-amber-500 border-amber-500",
  attempted: "bg-rose-500 border-rose-500",
});

const statusColor = ref<string>(statusColors[props.degre || ""]);
</script>
