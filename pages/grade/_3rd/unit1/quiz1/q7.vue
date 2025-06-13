<template>
	<article class="w-full md:w-2xl lg:w-4xl xl:w-6xl mx-auto">
		<div class="w-full xl:w-4xl mx-auto">
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس الأول"
				question="السؤال السابع"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<section class="w-full h-screen mt-6">
				<div class="w-full px-4 md:px-0 lg:px-0 bg-white rounded-xl">
					<h2 class="py-4 md:px-4 mb-8 md:mb-6 text-gray-900">
						- أعد الألوف, ثم أكتب العدد في صورة مِئات وعَشَراتٍ:
					</h2>
					<div
						class="md:flex md:flex-row-reverse w-full lg:w-[75%] mx-auto py-8"
					>
						<!-- Question -->
						<div class="flex items-center justify-center basis-1/2 gap-2">
							<span>=</span>
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
									v-for="th in thousands.repeatImg"
									imgSrc="/_nuxt/assets/images/quiz/thousands.webp"
									imgAlt="Thousands"
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
					<UiSecondaryButton> مرر </UiSecondaryButton>
				</div>
				<!-- /Actions -->
				<QuizIndicator :quiz="quiz" />
				<QuizPopup @closePopup="popup.open = !popup.open" :popup="popup" />
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

const { $userStore } = useNuxtApp();
const { quiz } = storeToRefs($userStore);

const thousands = reactive({
	value: "",
	repeatImg: 6,
});
const hundreds = ref<string>("");
const tens = ref<string>("");

const popup = reactive({
	open: false,
	successBtn: false,
	popupTitle: "",
	popupBtnText: "",
	next: "",
});

function check() {
	if (
		(hundreds.value === "60" && tens.value === "600") ||
		(hundreds.value === "٦٠" && tens.value === "٦٠٠")
	) {
		quiz.value.q7 = 1;
		setPopup("احسنت", "التالي", true, "/grade/_3rd/unit1/quiz1/q8");
	} else {
		quiz.value.q7 = 0;
		setPopup("حاول مرة اخرى", "حسنا", false, "");
	}
}

function setPopup(
	title: string,
	btnText: string,
	successBtn: boolean,
	next: string
) {
	popup.popupTitle = title;
	popup.popupBtnText = btnText;
	popup.successBtn = successBtn;
	popup.next = next;
	popup.open = true;
}

onUnmounted(() => {
	popup.open = false;
});
</script>
