<template>
	<div class="basis-80 text-gray-900">
		<label>
			<span>{{ title }}:</span>
			<span class="mr-2">{{ value }}%</span>
		</label>
		<progress max="100" :value="value" class="w-full"></progress>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
	value: number;
}>();
</script>
