<template>
	<div class="flex items-center gap-2 text-sm sm:px-5">
		<QuizLink :href="link" :degree="degree" />
		{{ title }}
	</div>
</template>

<script setup lang="ts">
defineProps<{
	degree: string | undefined;
	link: string;
	title: string;
}>();
</script>
