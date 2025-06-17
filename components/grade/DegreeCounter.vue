<template>
	<li
		class="w-full flex justify-center gap-2 font-semibold px-4 py-2 border rounded-3xl"
		:class="colorList[degree]"
	>
		<span>{{ title }}:</span>
		<span>{{ degreeCount }}</span>
	</li>
</template>

<script setup lang="ts">
defineProps<{
	degreeCount: number;
	title: string;
	degree: string;
}>();

const colorList = reactive<any>({
	excellent: "text-lime-600 bg-lime-200",
	good: "text-amber-600 bg-amber-200",
	poor: "text-rose-600 bg-rose-200",
});
</script>
