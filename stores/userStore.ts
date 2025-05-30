import {
	collection,
	doc,
	onSnapshot,
	query,
	updateDoc,
	where,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { defineStore } from "pinia";
import { ref } from "vue";

type Quiz = {
	q1: number;
	q2: number;
	q3: number;
	q4: number;
	q5: number;
	q6: number;
};

export const useUserStore = defineStore(
	"userStore",
	() => {
		/** Firebase **/
		const { $db, $firebaseApp } = useNuxtApp();
		const auth = getAuth($firebaseApp);
		/** States **/
		const userInfo = ref<any>(null);
		const successMsg = ref<string | null>("");
		const avatarListDropDown = ref<boolean>(false);
		const quiz = ref<Quiz>({
			q1: 0,
			q2: 0,
			q3: 0,
			q4: 0,
			q5: 0,
			q6: 0,
		});

		/** Actions **/
		function sumQuestions() {
			return Object.values(quiz.value).reduce(
				(a: number, b: number) => a + b,
				0
			);
		}

		function resetQuestions() {
			(Object.keys(quiz.value) as (keyof Quiz)[]).forEach((key) => {
				quiz.value[key] = 0;
			});
		}

		function updateQuiz() {
			//
		}

		function updateGrade() {
			//
		}

		async function updateUser(data: any) {
			const uid: any = auth.currentUser?.uid;
			const userDocRef = doc($db, "users", uid);

			updateDoc(userDocRef, {
				name: data.name,
				avatar: data.avatar,
			});

			const q = query(collection($db, "users"), where("uid", "==", uid));
			onSnapshot(q, (querySnapshot) => {
				userInfo.value = querySnapshot.docs[0].data();
			});

			await navigateTo("/profile");
			successMsg.value = "تم تحديث المعلومات";
			setTimeout(() => {
				successMsg.value = "";
				reloadNuxtApp();
			}, 3000);
		}

		return {
			userInfo,
			successMsg,
			avatarListDropDown,
			quiz,
			updateUser,
			sumQuestions,
			resetQuestions,
		};
	},
	{
		persist: {
			storage: piniaPluginPersistedstate.localStorage(),
		},
	}
);
