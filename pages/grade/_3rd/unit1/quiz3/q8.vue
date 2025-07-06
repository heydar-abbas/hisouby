<template>
	<article class="md:h-screen w-full md:w-2xl lg:w-4xl xl:w-6xl mx-auto">
		<!-- Bread crump -->
		<QuizBreadCrumb
			unit="الفصل الأول"
			quize="الدرس الثالث"
			question="السؤال الثامن"
			href="/grade/_3rd"
		/>
		<!-- /Bread crump -->

		<!-- Question Content -->
		<QuizQuestionContent question="_ ما اسم مرتبة الرقم ٦ في العدد ١٦٠٠؟">
			<QuizMultipleChoiseCard>
				<UiInputRadio
					@click="answer = 'احاد'"
					forId="answer1"
					name="answer"
					title="احاد"
					:hidden="true"
				/>
				<UiInputRadio
					@click="answer = 'عشرات'"
					forId="answer2"
					name="answer"
					title="عشرات"
					:hidden="true"
				/>
				<UiInputRadio
					@click="answer = 'مئات'"
					forId="answer3"
					name="answer"
					title="مئات"
					:hidden="true"
				/>
				<UiInputRadio
					@click="answer = 'الوف'"
					forId="answer4"
					name="answer"
					title="الوف"
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

	const { $userStore, $quizStore } = useNuxtApp();
	const { userInfo } = storeToRefs($userStore);
	const { skipPopup, popup, quiz } = storeToRefs($quizStore);
	const units = ref(userInfo.value?.grades?.g3);
	const quizes = ref(userInfo.value?.grades?.g3?.unit1);
	const answer = ref("");

	function check(): void {
		if (answer.value === "مئات") {
			quiz.value.q8 = 1;
			quizes.value.quiz3 = $quizStore.getDegree() as string;
			$quizStore.setDegreesCounter(units.value);
			$quizStore.updateQuiz({
				g3: {
					...units.value,
					unit1: {
						...quizes.value,
					},
				},
			});
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz4/q1", true);
		} else {
			quiz.value.q8 = 0;
			$quizStore.setPopup("حاول مرة اخرى", false, "");
		}
	}

	function handleSkip(): void {
		popup.value.open = false;
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz4/q1", true);
	}

	function skipQuestion(): void {
		quiz.value.q8 = 0;
		quizes.value.quiz3 = $quizStore.getDegree() as string;
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
