<template>
	<article class="w-full md:w-2xl lg:w-4xl xl:w-6xl mx-auto">
		<div class="w-full xl:w-4xl mx-auto">
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس الأول"
				question="السؤال الثامن"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<section class="w-full h-screen mt-6">
				<div class="w-full px-4 md:px-0 lg:px-0 bg-white rounded-xl">
					<div
						class="md:flex md:flex-row-reverse w-full lg:w-[75%] mx-auto py-8"
					>
						<!-- Question -->
						<div
							class="flex items-center justify-center basis-1/2 gap-2 leading-10"
						>
							- في المَلْعَبِ ٤٠٠٠ مُشَجِعٍ كَمْ عَشَرةً مِنَ المُشَجِعينَ في
							المَلْعبِ؟
						</div>
						<!-- /Question -->
						<!-- Question guide -->
						<div class="w-full flex justify-center basis-1/2 my-6">
							<div class="flex flex-col w-full gap-4 px-4">
								<!-- Answers -->
								<div
									@click="(answer = 4), check()"
									class="border rounded-3xl flex justify-center gap-4 px-4 py-2"
								>
									<input
										value="4"
										type="radio"
										id="answer1"
										name="answer"
										hidden
									/>
									<label for="answer1">٤ عشرة</label>
								</div>

								<div
									@click="(answer = 40), check()"
									class="border rounded-3xl flex justify-center gap-4 px-4 py-2"
								>
									<input
										value="40"
										type="radio"
										id="answer2"
										name="answer"
										hidden
									/>
									<label for="answer2">٤٠ عشرة</label>
								</div>

								<div
									@click="(answer = 400), check()"
									class="border rounded-3xl flex justify-center gap-4 px-4 py-2"
								>
									<input
										value="400"
										type="radio"
										id="answer3"
										name="answer"
										hidden
									/>
									<label for="answer3">٤٠٠ عشرة</label>
								</div>

								<div
									@click="(answer = 4000), check()"
									class="border rounded-3xl flex justify-center gap-4 px-4 py-2"
								>
									<input
										value="4000"
										type="radio"
										id="answer4"
										name="answer"
										hidden
									/>
									<label for="answer4">٤٠٠٠ عشرة</label>
								</div>
								<!-- /Answers -->
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
import { getAuth } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

definePageMeta({
	layout: "quiz",
});

useHead({
	title: "الثالث الابتدائية - الفصل الأول",
});

const { $userStore, $authStore, $db, $firebaseApp } = useNuxtApp();
const { quiz, userInfo } = storeToRefs($userStore);
const auth = getAuth($firebaseApp);
const grades = ref(userInfo.value?.grades);
const units = ref(userInfo.value?.grades?.g3);
const quizes = ref(userInfo.value?.grades?.g3?.unit1);
const answer = ref<number>(0);

const popup = reactive({
	open: false,
	successBtn: false,
	popupTitle: "",
	popupBtnText: "",
	next: "",
});

function check() {
	if (answer.value === 400) {
		quiz.value.q8 = 1;
		updateQuiz();
		setPopup("احسنت", "التالي", true, "/grade/_3rd/unit1/quiz2/q1");
	} else {
		quiz.value.q8 = 0;
		setPopup("حاول مرة اخرى", "حسنا", false, "");
	}
}

function updateQuiz() {
	if ($authStore.isLoggedIn) {
		const uid: any = auth.currentUser?.uid;
		const userDocRef = doc($db, "users", uid);
		updateDoc(userDocRef, {
			grades: {
				...grades.value,
				g3: {
					...units.value,
					unit1: {
						...quizes.value,
						quiz1: setDegre(),
					},
				},
			},
		});
		$userStore.fetchUserInfo(uid);
	}
}

function setDegre() {
	const sum = $userStore.sumQuestions();
	if (sum === 8) {
		return "proficient";
	} else if (sum < 8 && sum >= 4) {
		return "familiar";
	} else if (sum < 4) {
		return "attempted";
	}
	return "";
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
	answer.value = 0;
});
</script>
