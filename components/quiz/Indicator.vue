<template>
	<div class="flex w-18 flex-wrap gap-1 p-1">
		<span
			class="flex items-center p-0.5"
			v-for="(q, index) in quiz"
			:key="index"
		>
			<IconCircle v-show="q === 0" class="w-2.5 mx-0.5 text-gray-900" />
			<IconCheck v-show="q === 1" class="w-3.5 text-lime-700" />
			<IconClose v-show="q === -1" class="w-3.5 text-rose-700" />
		</span>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	quiz: any;
}>();
</script>
