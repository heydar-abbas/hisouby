<template>
	<article class="md:h-screen w-full md:w-2xl lg:w-4xl xl:w-6xl mx-auto">
		<!-- Bread crump -->
		<QuizBreadCrumb
			unit="الفصل الأول"
			quize="الدرس الثاني"
			question="السؤال الخامس"
			href="/grade/_3rd"
		/>
		<!-- /Bread crump -->

		<!-- Question Content -->
		<QuizQuestionContent
			question="_ في المخزن ٢٠٠٠ برتقالة و ٦٠٠ برتقالة, كم برتقالة في المخزن؟"
		>
			<QuizMultipleChoiseCard>
				<UiInputRadio
					@click="answer = 2000"
					forId="answer1"
					name="answer"
					title="٢٠٠٠ برتقالة"
					:hidden="true"
				/>
				<UiInputRadio
					@click="answer = 2600"
					forId="answer2"
					name="answer"
					title="٢٦٠٠ برتقالة"
					:hidden="true"
				/>
				<UiInputRadio
					@click="answer = 600"
					forId="answer3"
					name="answer"
					title="٦٠٠ برتقالة"
					:hidden="true"
				/>
				<UiInputRadio
					@click="answer = 3000"
					forId="answer4"
					name="answer"
					title="٣٠٠٠ برتقالة"
					:hidden="true"
				/>
			</QuizMultipleChoiseCard>
		</QuizQuestionContent>
		<!-- /Question Content -->
	</article>

	<!-- Quize footer -->
	<QuizFooter
		class="sticky bottom-0 w-full h-24 p-4 flex justify-between gap-2 border-t-1 border-gray-400"
	>
		<!-- Actions -->
		<div class="flex items-center gap-2">
			<UiPrimaryButton @click="check">النتيجة</UiPrimaryButton>
			<UiSecondaryButton @click="handleSkip"> مرر </UiSecondaryButton>
		</div>
		<!-- /Actions -->

		<QuizIndicator :quiz="quiz" />
		<QuizPopup :popup="popup" />
		<QuizSkipPopup :skipPopup="skipPopup" @skipQuestion="skipQuestion" />
	</QuizFooter>
	<!-- /Quize footer -->
</template>

<script setup lang="ts">
definePageMeta({
	layout: "quiz",
});

useHead({
	title: "الثالث الابتدائية - الفصل الأول",
});

const { $quizStore } = useNuxtApp();
const { skipPopup, popup, quiz } = storeToRefs($quizStore);

const answer = ref<number>(0);

function check(): void {
	if (answer.value === 2600) {
		quiz.value.q5 = 1;
		$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz2/q6");
	} else {
		quiz.value.q5 = -1;
		$quizStore.setPopup("حاول مرة اخرى", false, "");
	}
}

function handleSkip(): void {
	popup.value.open = false;
	$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz2/q6");
}

function skipQuestion(): void {
	quiz.value.q5 = -1;
}

onUnmounted(() => {
	popup.value.open = false;
	skipPopup.value.open = false;
});
</script>
