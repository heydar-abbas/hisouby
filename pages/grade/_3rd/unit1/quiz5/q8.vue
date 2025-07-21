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
			question="أكتب عدداً أكبر من ٤٦٨٢ وعدداً اخر أصغر منه."
		>
			<div class="md:w-xl mx-auto">
				<div class="w-full flex justify-center gap-6 p-4">
					<UiDotedInput v-model="gt" class="w-28" placeholder="العدد الأكبر" />
					<UiDotedInput v-model="lt" class="w-28" placeholder="العدد الأصغر" />
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
	const gt = ref("");
	const lt = ref("");

	const checkResults = (): boolean => {
		if (gt.value > "4682" && lt.value < "4682") {
			return true;
		}
		return false;
	};
	// In case user enters Arabic numbers
	const checkArResults = (): boolean => {
		if (gt.value > "٤٦٨٢" && lt.value < "٤٦٨٢") {
			return true;
		}
		return false;
	};

	function check(): void {
		if (checkResults() || checkArResults()) {
			quiz.value.q8 = 1;
			quizes.value.quiz5 = $quizStore.getDegree() as string;
			$quizStore.setDegreesCounter(units.value);
			$quizStore.updateQuiz({
				g3: {
					...units.value,
					unit1: {
						...quizes.value,
					},
				},
			});
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz6/q1", true);
		} else {
			quiz.value.q8 = -1;
			$quizStore.setPopup("حاول مرة اخرى", false, "");
		}
	}

	function handleSkip(): void {
		popup.value.open = false;
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz6/q1", true);
	}

	function skipQuestion(): void {
		quiz.value.q8 = -1;
		quizes.value.quiz5 = $quizStore.getDegree() as string;
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
