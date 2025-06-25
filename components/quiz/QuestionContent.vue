<template>
	<section class="w-full mt-6 mb-8">
		<div class="w-full p-4 md:px-0 bg-white rounded-xl">
			<!-- Question -->
			<h2 class="py-4 md:px-4 mb-6 text-gray-900" v-text="question"></h2>
			<!-- /Question -->

			<!-- Answer -->
			<slot></slot>
			<!-- /Answer -->
		</div>
	</section>
</template>

<script setup lang="ts">
defineProps<{
	question: string;
}>();
</script>
