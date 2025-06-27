<template>
	<li
		class="hover:underline hover:font-bold px-4 not-last:border-b-1 border-b-gray-300"
	>
		<NuxtLink :to="to" class="block py-3">{{ title }}</NuxtLink>
	</li>
</template>

<script setup lang="ts">
	defineProps<{
		to: string;
		title: string;
	}>();
</script>
