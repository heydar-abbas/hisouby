<template>
	<QuizArticle>
		<!-- Bread crump -->
		<QuizBreadCrumb
			unit="الفصل الأول"
			quize="الدرس السادس"
			question="السؤال الأول"
			href="/grade/_3rd"
		/>
		<!-- /Bread crump -->

		<!-- Question Content -->
		<QuizQuestionContent question="أرتب الأعداد من الأصغر الى الأكبر:">
			<div class="sm:w-md mx-auto">
				<div class="py-4 text-gray-500 text-sm">الأصغر</div>
				<Draggable
					v-model="items"
					item-key="id"
					@start="listAnswer = []"
					@end="fillListAnswer($event)"
					class="flex flex-col text-center gap-4"
				>
					<template #item="{ element }">
						<UiDraggableItem>
							{{ element.number }}
						</UiDraggableItem>
					</template>
				</Draggable>
				<div class="py-4 text-gray-500 text-sm">الأكبر</div>
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
	import Draggable from "vuedraggable";

	definePageMeta({
		layout: "quiz",
	});
	useHead({
		title: "الثالث الابتدائية - الفصل الأول",
	});

	const { $quizStore } = useNuxtApp();
	const { skipPopup, popup, quiz } = storeToRefs($quizStore);

	const items = ref([
		{ id: 1, number: "٣٧٣٨" },
		{ id: 2, number: "٢٧٣٨" },
		{ id: 3, number: "٢٠٧٧" },
	]);
	const listAnswer = ref<string[]>([]);

	function fillListAnswer(event: any): void {
		event.target.childNodes.forEach((element: any) => {
			listAnswer.value.push(element.innerText);
		});
	}

	function checkAnswer(): boolean {
		return (
			listAnswer.value[0] === "٢٠٧٧" &&
			listAnswer.value[1] === "٢٧٣٨" &&
			listAnswer.value[2] === "٣٧٣٨"
		);
	}

	function check(): void {
		if (checkAnswer()) {
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz6/q2");
			quiz.value.q1 = 1;
		} else {
			$quizStore.setPopup("حاول مرة اخرى", false);
			quiz.value.q1 = -1;
		}
	}

	function handelSkip(): void {
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz6/q2");
		popup.value.open = false;
	}

	function skipQuestion(): void {
		quiz.value.q1 = -1;
	}

	onUnmounted(() => {
		popup.value.open = false;
		skipPopup.value.open = false;
	});
</script>
