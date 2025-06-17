<template>
	<article class="w-full md:w-2xl lg:w-4xl xl:w-6xl mx-auto">
		<div class="w-full xl:w-4xl mx-auto">
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس الثاني"
				question="السؤال الثامن"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<section class="w-full h-screen mt-6">
				<div class="w-full px-4 md:px-0 lg:px-0 bg-white rounded-xl">
					<div class="md:flex md:flex-row-reverse w-full mx-auto py-8">
						<!-- Question -->
						<div
							class="flex items-center justify-center basis-1/2 gap-2 leading-10 md:p-4"
						>
							_ في المَلْعَبِ ٤٠٠٠ مُشَجِعٍ كَمْ عَشَرةً مِنَ المُشَجِعينَ في
							المَلْعبِ؟
						</div>
						<!-- /Question -->

						<!-- Answers -->
						<div class="w-full flex justify-center basis-1/2 my-6">
							<div class="flex flex-col w-[20rem] gap-4 px-4">
								<UiInputRadio
									@click="answer = 4"
									forId="answer1"
									name="answer"
									title="٤ عشرة"
									:hidden="true"
								/>

								<UiInputRadio
									@click="answer = 40"
									forId="answer2"
									name="answer"
									title="٤٠ عشرة"
									:hidden="true"
								/>

								<UiInputRadio
									@click="answer = 400"
									forId="answer3"
									name="answer"
									title="٤٠٠ عشرة"
									:hidden="true"
								/>

								<UiInputRadio
									@click="answer = 4000"
									forId="answer4"
									name="answer"
									title="٤٠٠٠ عشرة"
									:hidden="true"
								/>
							</div>
						</div>
						<!-- /Answers -->
					</div>
				</div>
			</section>
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
		</div>
	</article>
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
	if (answer.value === 400) {
		quiz.value.q8 = 1;
		const degree = $quizStore.getDegree() as string;
		$quizStore.updateQuiz({
			g3: {
				...units.value,
				unit1: {
					...quizes.value,
					quiz2: degree,
				},
			},
		});
		$quizStore.setPopup("احسنت", true, "#", true);
	} else {
		quiz.value.q8 = 0;
		$quizStore.setPopup("حاول مرة اخرى", false, "", true);
	}
}

function handleSkip(): void {
	popup.value.open = false;
	$quizStore.setSkipPopup("#", true);
}

function skipQuestion(): void {
	quiz.value.q8 = 0;
	const degree = $quizStore.getDegree() as string;
	$quizStore.updateQuiz({
		g3: {
			...units.value,
			unit1: {
				...quizes.value,
				quiz1: degree,
			},
		},
	});
}

onUnmounted(() => {
	popup.value.open = false;
	skipPopup.value.open = false;
});
</script>
