<template>
	<article class="md:h-screen w-full md:w-2xl lg:w-4xl xl:w-6xl mx-auto">
		<!-- Bread crump -->
		<QuizBreadCrumb
			unit="الفصل الأول"
			quize="الدرس الثاني"
			question="السؤال السابع"
			href="/grade/_3rd"
		/>
		<!-- /Bread crump -->

		<!-- Question Content -->
		<section class="w-full mt-6 mb-8">
			<div class="w-full p-4 md:px-0 bg-white rounded-xl">
				<!-- Question -->
				<h2 class="py-4 md:px-4 mb-6 text-gray-900">
					_ في المزرعة ١٠٠٠ خروف و ٣٠٠ بقرة, كم حيواناً في المزرعة؟
				</h2>
				<!-- /Question -->

				<!-- Answers -->
				<div class="w-full flex justify-center basis-1/2 my-6 md:my-0">
					<div class="flex flex-col w-[20rem] gap-4 px-4">
						<UiInputRadio
							@click="answer = 1000"
							forId="answer1"
							name="answer"
							title="١٠٠٠ حيوان"
							:hidden="true"
						/>

						<UiInputRadio
							@click="answer = 300"
							forId="answer2"
							name="answer"
							title="٣٠٠ حيوان"
							:hidden="true"
						/>

						<UiInputRadio
							@click="answer = 2700"
							forId="answer3"
							name="answer"
							title="٢٧٠٠ حيوان"
							:hidden="true"
						/>

						<UiInputRadio
							@click="answer = 1300"
							forId="answer4"
							name="answer"
							title="١٣٠٠ حيوان"
							:hidden="true"
						/>
					</div>
				</div>
				<!-- /Answers -->
			</div>
		</section>
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

const { $userStore, $quizStore } = useNuxtApp();
const { userInfo } = storeToRefs($userStore);
const { skipPopup, popup, quiz } = storeToRefs($quizStore);
const units = ref(userInfo.value?.grades?.g3);
const quizes = ref(userInfo.value?.grades?.g3?.unit1);
const answer = ref<number>(0);

function check(): void {
	if (answer.value === 1300) {
		quiz.value.q8 = 1;
		quizes.value.quiz1 = $quizStore.getDegree() as string;
		$quizStore.setDegreesCounter(units.value);
		$quizStore.updateQuiz({
			g3: {
				...units.value,
				unit1: {
					...quizes.value,
				},
			},
		});
		$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz3/q1", true);
	} else {
		quiz.value.q8 = 0;
		$quizStore.setPopup("حاول مرة اخرى", false, "");
	}
}

function handleSkip(): void {
	popup.value.open = false;
	$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz3/q1", true);
}

function skipQuestion(): void {
	quiz.value.q8 = 0;
	quizes.value.quiz1 = $quizStore.getDegree() as string;
	$quizStore.setDegreesCounter(units.value);
	$quizStore.updateQuiz({
		g3: {
			...units.value,
			unit1: {
				...quizes.value,
			},
		},
	});
}

onUnmounted(() => {
	popup.value.open = false;
	skipPopup.value.open = false;
});
</script>
