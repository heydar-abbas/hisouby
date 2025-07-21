<template>
	<QuizArticle>
		<!-- Bread crump -->
		<QuizBreadCrumb
			unit="الفصل الأول"
			quize="الدرس الرابع"
			question="السؤال الثامن"
			href="/grade/_3rd"
		/>
		<!-- /Bread crump -->

		<!-- Question Content -->
		<QuizQuestionContent
			question="باع أحد المتاجر ستة الاف واربعمئة وسبعة وسبعين طبق بيض, أكتب هذا العدد بالأرقام."
		>
			<div class="md:w-xl mx-auto">
				<div class="w-full flex justify-center p-4">
					<UiDotedInput
						v-model="answer"
						class="w-32"
						placeholder="العدد بالأرقام"
					/>
				</div>
			</div>
		</QuizQuestionContent>
		<!-- /Question Content -->
	</QuizArticle>

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
		if (answer.value === "6477" || answer.value === "٦٤٧٧") {
			quiz.value.q8 = 1;
			quizes.value.quiz4 = $quizStore.getDegree() as string;
			$quizStore.setDegreesCounter(units.value);
			$quizStore.updateQuiz({
				g3: {
					...units.value,
					unit1: {
						...quizes.value,
					},
				},
			});
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz5/q1", true);
		} else {
			quiz.value.q8 = -1;
			$quizStore.setPopup("حاول مرة اخرى", false, "");
		}
	}

	function handleSkip(): void {
		popup.value.open = false;
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz5/q1", true);
	}

	function skipQuestion(): void {
		quiz.value.q8 = -1;
		quizes.value.quiz4 = $quizStore.getDegree() as string;
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
