<template>
	<li class="cursor-pointer hover:underline hover:font-bold list-disc">
		<NuxtLink :to="to" class="block py-2" @click.stop="">{{ title }}</NuxtLink>
	</li>
</template>

<script setup lang="ts">
defineProps<{
	to: string;
	title: string;
}>();
</script>
