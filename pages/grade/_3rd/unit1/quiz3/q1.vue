<template>
	<article class="min-h-screen w-full md:w-2xl lg:w-4xl xl:w-6xl mx-auto">
		<!-- Bread crump -->
		<QuizBreadCrumb
			unit="الفصل الأول"
			quize="الدرس الثالث"
			question="السؤال الأول"
			href="/grade/_3rd"
		/>
		<!-- /Bread crump -->

		<!-- Question Content -->
		<QuizQuestionContent
			question="_ اكتب اسم مرتبة الرقم الذي تحته خط ثم احدد قيمة المكانية:"
		>
			<div class="grid sm:grid-cols-2 gap-4 w-xs sm:w-md mx-auto">
				<div class="flex items-center justify-center p-4 text-4xl">
					<p>٩٨٣<span class="text-rose-500 underline">٠</span></p>
				</div>

				<div class="grid grid-cols-2 sm:grid-cols-1 p-4">
					<div class="p-4">
						<UiDotedInput
							v-model="placeValue"
							class="w-full"
							placeholder="المرتبة"
						/>
					</div>

					<div class="p-4">
						<UiDotedInput
							v-model="digitPlace"
							class="w-full"
							placeholder="القيمة"
						/>
					</div>
				</div>
			</div>
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
			<UiSecondaryButton @click="handelSkip"> مرر </UiSecondaryButton>
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

	const placeValue = ref("");
	const digitPlace = ref("");

	const checkResults = (): boolean => {
		if (placeValue.value === "احاد" && digitPlace.value === "0") {
			return true;
		}
		return false;
	};
	// In case user enters Arabic numbers
	const checkArResults = (): boolean => {
		if (placeValue.value === "احاد" && digitPlace.value === "٠") {
			return true;
		}
		return false;
	};

	function check(): void {
		if (checkResults() || checkArResults()) {
			quiz.value.q1 = 1;
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz3/q2");
		} else {
			quiz.value.q1 = -1;
			$quizStore.setPopup("حاول مرة اخرى", false, "");
		}
	}

	function handelSkip(): void {
		popup.value.open = false;
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz3/q2");
	}

	function skipQuestion(): void {
		quiz.value.q1 = -1;
	}

	onUnmounted(() => {
		popup.value.open = false;
		skipPopup.value.open = false;
	});
</script>
