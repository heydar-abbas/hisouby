<template>
	<section class="sticky top-0 bg-gray-50">
		<div
			class="w-full p-4 mx-auto flex justify-start items-center border-b-1 border-gray-400"
		>
			<NuxtLink :to="href" @click="resetQuiz">
				<IconHome class="w-6 h-6 text-gray-900" />
			</NuxtLink>
			<IconArrowLeft class="w-6 h-6 mx-1 text-gray-900" />
			<span class="text-sm mx-1 text-gray-700">{{ unit }}</span>
			<IconArrowLeft class="w-6 h-6 mx-1 text-gray-900" />
			<span class="text-sm text-gray-700 mx-1 font-semibold">{{ quize }}</span>
		</div>
	</section>
</template>

<script setup lang="ts">
defineProps<{
	unit: string;
	quize: string;
	href: string;
}>();

const { $userStore } = useNuxtApp();

function resetQuiz() {
	$userStore.resetQuestions();
}
</script>
