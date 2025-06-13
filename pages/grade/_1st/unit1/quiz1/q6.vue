<template>
  <article class="w-full md:w-2xl lg:w-4xl xl:w-6xl mx-auto">
    <div class="w-full xl:w-3xl mx-auto">
      <!-- Bread crump -->
      <QuizBreadCrumb
        unit="الفصل الاول"
        quize="التمرين الاول"
        href="/grade/_1st"
      />
      <!-- /Bread crump -->
      <!-- Question -->
      <section class="w-full min-h-screen">
        <div class="w-full px-4">
          <div class="py-8 border-b-1 border-gray-400">
            <label for="">2 * 2 = </label>
            <UiTextInput
              type="text"
              v-model="resuilt"
              class="inline w-14 py-1 px-2 text-center placeholder:text-sm"
            />
          </div>
        </div>
      </section>
      <!-- /Question -->
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
  title: "السؤال السادس",
});

const { $userStore, $authStore, $db, $firebaseApp } = useNuxtApp();
const { quiz, userInfo } = storeToRefs($userStore);
const auth = getAuth($firebaseApp);
const units = ref(userInfo.value?.grades?.g1);
const quizes = ref(userInfo.value?.grades?.g1?.unit1);
const resuilt = ref<string>("");
const popup = reactive({
  open: false,
  successBtn: false,
  popupTitle: "",
  popupBtnText: "",
  next: "",
});

function check() {
  if (resuilt.value === "4") {
    quiz.value.q1 = 0;
    quiz.value.q2 = 1;
    quiz.value.q3 = 1;
    quiz.value.q4 = 1;
    quiz.value.q5 = 1;
    quiz.value.q6 = 1;
    updateQuiz();
    setPopup("احسنت", "التالي", true, "/grade/_1st/unit1/quiz2/q1");
  } else {
    quiz.value.q6 = 0;
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

function updateQuiz() {
  if ($authStore.isLoggedIn) {
    const uid: any = auth.currentUser?.uid;
    const userDocRef = doc($db, "users", uid);
    updateDoc(userDocRef, {
      grades: {
        g1: {
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
  if (sum === 6) {
    return "proficient";
  } else if (sum < 6 && sum >= 3) {
    return "familiar";
  } else if (sum < 3) {
    return "attempted";
  }
  return "";
}

onUnmounted(() => {
  popup.open = false;
});
</script>
