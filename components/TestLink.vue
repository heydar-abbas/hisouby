<template>
	<NuxtLink
		:to="href"
		class="w-5 h-5 border-2 border-gray-500 rounded-sm"
	></NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
	href: string;
}>();
</script>
