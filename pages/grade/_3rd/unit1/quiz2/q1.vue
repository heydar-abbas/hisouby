<template>
	<article class="w-full md:w-2xl lg:w-4xl xl:w-6xl mx-auto">
		<div class="w-full xl:w-4xl mx-auto">
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس الثاني"
				question="السؤال الأول"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<section class="w-full h-screen mt-6">
				<div class="w-full px-4 md:px-0 lg:px-0 bg-white rounded-xl">
					<h2 class="py-4 md:px-4 mb-8 md:mb-6 text-gray-900">
						- أعد الألوف, ثم أكتب العدد في صورة احادٍ:
					</h2>
					<div class="md:flex md:flex-row-reverse w-full mx-auto">
						<!-- Question -->
						<div class="flex items-center justify-center basis-1/2 gap-2">
							<span> = </span>
							<UiDotedInput
								type="text"
								v-model="thousands.value"
								class="w-16"
							/>
							<span>الوف = </span>
							<UiDotedInput type="text" v-model="ones" class="w-16" />
							<span>آحاد</span>
						</div>
						<!-- /Question -->
						<!-- Question guide -->
						<div class="w-full flex justify-center basis-1/2 my-12">
							<div class="flex gap-2 w-fit">
								<QuizGuideImg
									v-for="(th, index) in thousands.repeatImg"
									:key="index"
									:imgSrc="thousands.imgSrc"
									:imgAlt="thousands.imgAlt"
									class="w-28"
								/>
							</div>
						</div>
						<!-- /Question guide -->
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
					<UiSecondaryButton @click="handelSkip"> مرر </UiSecondaryButton>
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

const { $quizStore } = useNuxtApp();
const { skipPopup, popup, quiz } = storeToRefs($quizStore);

const thousands = reactive<{
	value: string;
	imgSrc: string;
	imgAlt: string;
	repeatImg: number;
}>({
	value: "",
	imgSrc: "/images/quiz/thousands.webp",
	imgAlt: "Thousands",
	repeatImg: 2,
});
const ones = ref<string>("");

function check(): void {
	if (
		(thousands.value === "2" && ones.value === "2000") ||
		(thousands.value === "٢" && ones.value === "٢٠٠٠")
	) {
		quiz.value.q1 = 1;
		$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz2/q2");
	} else {
		quiz.value.q1 = 0;
		$quizStore.setPopup("حاول مرة اخرى", false, "");
	}
}

function handelSkip(): void {
	popup.value.open = false;
	$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz2/q2");
}

function skipQuestion(): void {
	quiz.value.q1 = 0;
}

onUnmounted(() => {
	popup.value.open = false;
	skipPopup.value.open = false;
});
</script>
