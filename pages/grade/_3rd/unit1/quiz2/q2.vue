<template>
	<article class="md:h-screen w-full md:w-2xl lg:w-4xl xl:w-6xl mx-auto">
		<!-- Bread crump -->
		<QuizBreadCrumb
			unit="الفصل الأول"
			quize="الدرس الثاني"
			question="السؤال الثاني"
			href="/grade/_3rd"
		/>
		<!-- /Bread crump -->

		<!-- Question Content -->
		<QuizQuestionContent
			question="_ أملأ جدول القيمة المكانية ثم أكتب العدد الذي يمثله النموذج:"
		>
			<div>
				<div class="md:flex md:flex-row w-full md:w-[40rem] mx-auto mb-6">
					<div
						v-for="(pv, index) in placeValue"
						:key="index"
						class="flex basis-1/4 md:flex-col mb-4"
					>
						<div class="w-full flex flex-col justify-center basis-1/2">
							<h3
								class="text-center text-gray-500 text-sm font-semibold"
								v-text="pv.imgAlt"
							></h3>
							<div
								class="md:h-32 flex flex-wrap justify-center items-end md:items-center gap-2 p-4"
							>
								<QuizGuideImg
									v-for="(th, index) in pv.repeatImg"
									:key="index"
									:imgSrc="pv.imgSrc"
									:imgAlt="pv.imgAlt"
									:class="pv.width"
								/>
							</div>
						</div>
						<div
							class="basis-1/2 flex flex-col justify-end items-center py-4 md:py-0"
						>
							<UiDotedInput v-model="pv.value" class="w-16" />
						</div>
					</div>
				</div>
				<div
					class="flex items-center justify-around md:justify-center md:gap-6 py-4 border rounded-4xl border-gray-500 md:w-[50%] md:mx-auto"
				>
					<p class="flex items-end h-8 text-center">العدد:</p>
					<div class="text-center">
						<UiDotedInput v-model="theNumber" class="w-16" />
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

const placeValue = reactive({
	thousands: {
		value: "",
		imgSrc: "/images/quiz/thousands.webp",
		imgAlt: "ألوف",
		repeatImg: 4,
		width: "w-12 md:w-10",
	},
	hundreds: {
		value: "",
		imgSrc: "/images/quiz/hundreds.png",
		imgAlt: "مئات",
		repeatImg: 6,
		width: "w-8",
	},
	tens: {
		value: "",
		imgSrc: "/images/quiz/tens.png",
		imgAlt: "عشرات",
		repeatImg: 8,
		width: "w-2",
	},
	ones: {
		value: "",
		imgSrc: "/images/quiz/ones.png",
		imgAlt: "آحاد",
		repeatImg: 1,
		width: "w-4 hidden",
	},
});

const checkResults = (): boolean => {
	if (
		placeValue.thousands.value === "4" &&
		placeValue.hundreds.value === "6" &&
		placeValue.tens.value === "8" &&
		placeValue.ones.value === "0" &&
		theNumber.value === "4680"
	) {
		return true;
	}
	return false;
};
// In case user enters Arabic numbers
const checkArResults = (): boolean => {
	if (
		placeValue.thousands.value === "٤" &&
		placeValue.hundreds.value === "٦" &&
		placeValue.tens.value === "٨" &&
		placeValue.ones.value === "٠" &&
		theNumber.value === "٤٦٨٠"
	) {
		return true;
	}
	return false;
};
const theNumber = ref<string>("");

function check(): void {
	if (checkResults() || checkArResults()) {
		quiz.value.q2 = 1;
		$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz2/q3");
	} else {
		quiz.value.q2 = -1;
		$quizStore.setPopup("حاول مرة اخرى", false, "");
	}
}

function handelSkip(): void {
	popup.value.open = false;
	$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz2/q3");
}

function skipQuestion(): void {
	quiz.value.q2 = -1;
}

onUnmounted(() => {
	popup.value.open = false;
	skipPopup.value.open = false;
});
</script>
