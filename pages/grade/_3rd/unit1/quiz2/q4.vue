<template>
	<article class="w-full md:w-2xl lg:w-4xl xl:w-6xl mx-auto">
		<div class="w-full xl:w-4xl mx-auto">
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس الثاني"
				question="السؤال الرابع"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<section class="w-full h-screen mt-6">
				<div class="w-full px-4 md:px-0 lg:px-0 bg-white rounded-xl">
					<h2 class="py-4 md:px-4 mb-8 md:mb-6 text-gray-900">
						- أعد الألوف, ثم أكتب العدد في صورة مِئات وعَشَراتٍ:
					</h2>
					<div class="md:flex md:flex-row-reverse w-full mx-auto py-8">
						<!-- Question -->
						<div class="flex items-center justify-center basis-1/2 gap-2">
							<span> = </span>
							<UiDotedInput type="text" v-model="hundreds" class="w-16" />
							<span>مِئات = </span>
							<UiDotedInput type="text" v-model="tens" class="w-16" />
							<span>عَشَرات</span>
						</div>
						<!-- /Question -->

						<!-- Question guide -->
						<div class="w-full flex justify-center basis-1/2 my-12">
							<div class="grid grid-cols-3 gap-2 w-fit">
								<QuizGuideImg
									v-for="(th, index) in thousands.repeatImg"
									:key="index"
									:imgSrc="thousands.imgSrc"
									:imgAlt="thousands.imgAlt"
									class="w-16"
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
	imgSrc: string;
	imgAlt: string;
	repeatImg: number;
}>({
	imgSrc: "/images/quiz/thousands.webp",
	imgAlt: "Thousands",
	repeatImg: 7,
});
const hundreds = ref<string>("");
const tens = ref<string>("");

function check(): void {
	if (
		(hundreds.value === "70" && tens.value === "700") ||
		(hundreds.value === "٧٠" && tens.value === "٧٠٠")
	) {
		quiz.value.q4 = 1;
		$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz2/q5");
	} else {
		quiz.value.q4 = 0;
		$quizStore.setPopup("حاول مرة اخرى", false, "");
	}
}

function handelSkip(): void {
	popup.value.open = false;
	$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz2/q5");
}

function skipQuestion(): void {
	quiz.value.q4 = 0;
}

onUnmounted(() => {
	popup.value.open = false;
	skipPopup.value.open = false;
});
</script>
