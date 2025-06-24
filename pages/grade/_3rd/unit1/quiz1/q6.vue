<template>
	<article class="md:h-screen w-full md:w-2xl lg:w-4xl xl:w-6xl mx-auto">
		<!-- Bread crump -->
		<QuizBreadCrumb
			unit="الفصل الأول"
			quize="الدرس الأول"
			question="السؤال السادس"
			href="/grade/_3rd"
		/>
		<!-- /Bread crump -->

		<!-- Question Content -->
		<section class="w-full mt-6 mb-8">
			<div class="w-full p-4 md:px-0 bg-white rounded-xl">
				<!-- Question -->
				<h2 class="py-4 md:px-4 mb-6 text-gray-900">
					_ أعد الألوف, ثم أكتب العدد في صورة مِئات وعَشَراتٍ:
				</h2>
				<!-- /Question -->
				<!-- Answer -->
				<div class="md:flex md:flex-row-reverse w-full mx-auto mb-6">
					<div class="flex items-center justify-center basis-1/2 gap-2">
						<span> = </span>
						<UiDotedInput type="text" v-model="hundreds" class="w-16" />
						<span>مِئات = </span>
						<UiDotedInput type="text" v-model="tens" class="w-16" />
						<span>عَشَرات</span>
					</div>

					<div class="w-full flex justify-center basis-1/2 my-12 md:my-0">
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
				</div>
				<!-- /Answer -->
			</div>
		</section>
		<!-- Question Content -->
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

const thousands = reactive<{
	imgSrc: string;
	imgAlt: string;
	repeatImg: number;
}>({
	imgSrc: "/images/quiz/thousands.webp",
	imgAlt: "Thousands",
	repeatImg: 8,
});
const hundreds = ref<string>("");
const tens = ref<string>("");

function check(): void {
	if (
		(hundreds.value === "80" && tens.value === "800") ||
		(hundreds.value === "٨٠" && tens.value === "٨٠٠")
	) {
		quiz.value.q6 = 1;
		$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz1/q7");
	} else {
		quiz.value.q6 = 0;
		$quizStore.setPopup("حاول مرة اخرى", false, "");
	}
}

function handelSkip(): void {
	popup.value.open = false;
	$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz1/q7");
}

function skipQuestion(): void {
	quiz.value.q6 = 0;
}

onUnmounted(() => {
	popup.value.open = false;
	skipPopup.value.open = false;
});
</script>
