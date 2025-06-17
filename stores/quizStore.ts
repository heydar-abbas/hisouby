import { defineStore } from "pinia";
import { getAuth } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

type Degree = {
	excellent: number;
	good: number;
	poor: number;
};

type Quiz = {
	q1: number;
	q2: number;
	q3: number;
	q4: number;
	q5: number;
	q6: number;
	q7: number;
	q8: number;
};

type Popup = {
	open: boolean;
	resetQuiz: boolean;
	successBtn?: boolean;
	skip?: boolean;
	popupTitle?: string;
	popupBtnText?: string;
	next: string;
};

export const useQuizStore = defineStore(
	"quizStore",
	() => {
		/** Firebase **/
		const db = computed(() => useNuxtApp().$db);
		const firebaseApp = computed(() => useNuxtApp().$firebaseApp);

		/** Stores **/
		const authStore = useAuthStore();
		const userStore = useUserStore();

		/** States **/
		const grades = ref(userStore.userInfo?.grades);
		const degrees = ref<Degree>({
			excellent: 0,
			good: 0,
			poor: 0,
		});

		const popup = ref<Popup>({
			open: false,
			resetQuiz: false,
			successBtn: false,
			popupTitle: "",
			popupBtnText: "",
			next: "",
		});

		const skipPopup = ref<Popup>({
			next: "",
			open: false,
			skip: false,
			resetQuiz: false,
		});

		const quiz = ref<Quiz>({
			q1: -1,
			q2: -1,
			q3: -1,
			q4: -1,
			q5: -1,
			q6: -1,
			q7: -1,
			q8: -1,
		});

		/** Actions **/
		function getDegree(): string {
			const sum = sumQuestions();
			if (sum === 8) {
				degrees.value.excellent += 1;
				return "excellent";
			} else if (sum < 8 && sum >= 4) {
				degrees.value.good += 1;
				return "good";
			} else if (sum < 4) {
				degrees.value.poor += 1;
				return "poor";
			}
			return "";
		}

		function sumQuestions(): number {
			return Object.values(quiz.value).reduce(
				(a: number, b: number) => a + b,
				0
			);
		}

		function resetQuiz(): void {
			(Object.keys(quiz.value) as (keyof Quiz)[]).forEach((key) => {
				quiz.value[key] = -1;
			});
		}

		function updateQuiz(grade: any): void {
			if (!authStore?.isLoggedIn) {
				console.log("User document reference not found.");
				return;
			}
			const auth = getAuth(firebaseApp.value);
			const uid = auth.currentUser?.uid as string;
			const userDocRef = doc(db.value, "users", uid);
			updateDoc(userDocRef, {
				grades: {
					...grades.value,
					...grade,
				},
				degreeCounter: {
					...degrees.value,
				},
			});
		}

		function updateGrade() {
			//
		}

		function setPopup(
			title: string,
			successBtn: boolean,
			next: string,
			resQuiz: boolean = false
		): void {
			popup.value.popupTitle = title;
			popup.value.successBtn = successBtn;
			popup.value.next = next;
			popup.value.open = true;
			popup.value.resetQuiz = resQuiz;
		}

		function setSkipPopup(nextUrl: string, resQuiz: boolean = false): void {
			skipPopup.value.next = nextUrl;
			skipPopup.value.resetQuiz = resQuiz;
			skipPopup.value.open = true;
		}

		return {
			degrees,
			quiz,
			popup,
			skipPopup,
			sumQuestions,
			resetQuiz,
			getDegree,
			updateQuiz,
			setPopup,
			setSkipPopup,
		};
	},
	{
		persist: true,
	}
);
