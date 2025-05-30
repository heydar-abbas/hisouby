<template>
	<div
		v-if="popup.open"
		class="absolute -top-32 left-10 bg-gray-50 w-52 p-4 border-1 border-gray-300 rounded-lg"
	>
		<div class="text-center mb-4" v-text="popup.popupTitle"></div>
		<div>
			<UiSuccessButton v-if="popup.successBtn" @click="resetQuiz">
				<NuxtLink :to="popup.next" v-text="popup.popupBtnText"></NuxtLink>
			</UiSuccessButton>
			<UiFailedButton
				v-else
				@click="$emit('closePopup')"
				v-text="popup.popupBtnText"
			></UiFailedButton>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	popup: any;
}>();

const { $userStore } = useNuxtApp();
const route = useRoute();
const path = route.fullPath.split("/")[route.fullPath.split("/").length - 1];

function resetQuiz() {
	if (path === "q6") {
		$userStore.resetQuestions();
	}
}
</script>
