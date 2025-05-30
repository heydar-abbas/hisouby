<template>
	<div>
		<!-- Bread crump -->
		<QuizBreadCrumb
			unit="الفصل الاول"
			quize="التمرين الاول"
			href="/grade/_1st"
		/>
		<!-- /Bread crump -->
		<!-- Question -->
		<section class="w-full min-h-screen">
			<div class="w-full px-4 py-8 border-b-1 border-gray-400">
				<div>
					<label for="">2 * 2 = </label>
					<UiTextInput
						v-model="resuilt"
						class="inline w-14 py-1 px-2 text-center placeholder:text-sm"
					/>
				</div>
			</div>
		</section>
		<!-- /Question -->
		<!-- Quize footer -->
		<QuizFooter
			class="sticky bottom-0 w-full h-24 p-4 flex justify-between gap-2 border-t-1 border-gray-400"
		>
			<!-- Actions -->
			<div class="flex items-center gap-2">
				<UiPrimaryButton @click="check">النتيجة</UiPrimaryButton>
				<UiSecondaryButton> مرر </UiSecondaryButton>
			</div>
			<!-- /Actions -->
			<!-- Indicator -->
			<div class="grow flex justify-end items-center">
				<QuizIndicator :quiz="quiz" />
			</div>
			<!-- /Indicator -->
			<!-- Popup -->
			<QuizPopup @closePopup="popup.open = !popup.open" :popup="popup" />
			<!-- /Popup -->
		</QuizFooter>
		<!-- /Quize footer -->
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: "quiz",
});

useHead({
	title: "السؤال الثالث",
});

const { $userStore } = useNuxtApp();
const { quiz } = storeToRefs($userStore);
const resuilt = ref<string>("");
const popup = reactive({
	open: false,
	successBtn: false,
	popupTitle: "احسنت",
	popupBtnText: "التالي",
	next: "/grade/_1st/quiz1/q4",
});

function check() {
	if (resuilt.value === "4") {
		quiz.value.q3 = 1;
		popup.popupTitle = "احسنت";
		popup.popupBtnText = "التالي";
		popup.successBtn = true;
		popup.open = true;
	} else {
		quiz.value.q3 = -1;
		popup.popupTitle = "حاول مرة اخرى";
		popup.popupBtnText = "حسنا";
		popup.successBtn = false;
		popup.open = true;
	}
}

onUnmounted(() => {
	popup.open = false;
});
</script>
