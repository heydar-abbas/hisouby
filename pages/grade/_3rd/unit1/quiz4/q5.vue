<template>
	<QuizArticle>
		<!-- Bread crump -->
		<QuizBreadCrumb
			unit="الفصل الأول"
			quize="الدرس الرابع"
			question="السؤال الخامس"
			href="/grade/_3rd"
		/>
		<!-- /Bread crump -->

		<!-- Question Content -->
		<QuizQuestionContent question="اكتب العدد بجدول القيمة المكانية:">
			<div class="grid sm:grid-cols-2 gap-4 md:w-xl mx-auto">
				<div class="flex items-center justify-center sm:p-4">
					<p class="text-4xl underline">١٩٨٩</p>
				</div>

				<div class="w-full flex justify-center p-4">
					<QuizTable :tHeades="['احاد', 'عشرات', 'مئات', 'الوف']">
						<tr>
							<td class="border-1 border-gray-400">
								<UiTextInput
									class="w-full p-2 border-none focus:outline-0"
									v-model="ones"
								/>
							</td>
							<td class="border-1 border-gray-400">
								<UiTextInput
									class="w-full p-2 border-none focus:outline-0"
									v-model="tens"
								/>
							</td>
							<td class="border-1 border-gray-400">
								<UiTextInput
									class="w-full p-2 border-none focus:outline-0"
									v-model="hundreds"
								/>
							</td>
							<td class="border-1 border-gray-400">
								<UiTextInput
									class="w-full p-2 border-none focus:outline-0"
									v-model="thousands"
								/>
							</td>
						</tr>
					</QuizTable>
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

	const thousands = ref("");
	const hundreds = ref("");
	const tens = ref("");
	const ones = ref("");

	const checkResults = (): boolean => {
		if (
			thousands.value === "1" &&
			hundreds.value === "9" &&
			tens.value === "8" &&
			ones.value === "9"
		) {
			return true;
		}
		return false;
	};
	// In case user enters Arabic numbers
	const checkArResults = (): boolean => {
		if (
			thousands.value === "١" &&
			hundreds.value === "٩" &&
			tens.value === "٨" &&
			ones.value === "٩"
		) {
			return true;
		}
		return false;
	};

	function check(): void {
		if (checkResults() || checkArResults()) {
			quiz.value.q5 = 1;
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz4/q6");
		} else {
			quiz.value.q5 = -1;
			$quizStore.setPopup("حاول مرة اخرى", false, "");
		}
	}

	function handelSkip(): void {
		popup.value.open = false;
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz4/q6");
	}

	function skipQuestion(): void {
		quiz.value.q5 = -1;
	}

	onUnmounted(() => {
		popup.value.open = false;
		skipPopup.value.open = false;
	});
</script>
