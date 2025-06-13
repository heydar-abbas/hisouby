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
  q7: number;
  q8: number;
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
    function sumQuestions() {
      return Object.values(quiz.value).reduce(
        (a: number, b: number) => a + b,
        0
      );
    }

    function resetQuiz() {
      (Object.keys(quiz.value) as (keyof Quiz)[]).forEach((key) => {
        quiz.value[key] = -1;
      });
    }

    function updateGrade() {}

    /**
     * Update user function
     */
    function updateUser(data: any) {
      const uid: any = auth.currentUser?.uid;
      const userDocRef = doc($db, "users", uid);

      updateDoc(userDocRef, {
        name: data.name,
        avatar: data.avatar,
      });

      fetchUserInfo(uid);

      navigateTo("/profile");
      successMsg.value = "تم تحديث المعلومات";
      setTimeout(() => {
        successMsg.value = "";
      }, 3000);
    }

    /**
     * Update userInfo
     */
    function fetchUserInfo(uid: string) {
      let data: any = {};
      const q = query(collection($db, "users"), where("uid", "==", uid));
      onSnapshot(q, (querySnapshot) => {
        userInfo.value = querySnapshot.docs[0].data();
        data = userInfo.value;
      });
      return { data };
    }

    return {
      userInfo,
      successMsg,
      avatarListDropDown,
      quiz,
      updateUser,
      sumQuestions,
      resetQuiz,
      fetchUserInfo,
    };
  },
  {
    persist: true,
  }
);
