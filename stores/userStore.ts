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

export const useUserStore = defineStore(
  "userStore",
  () => {
    /** Firebase **/
    const { $db, $firebaseApp } = useNuxtApp();
    const auth = getAuth($firebaseApp);

    /** States **/
    let userInfo = ref<any>(null);
    let successMsg = ref<string | null>("");
    let avatarListDropDown = ref<boolean>(false);

    /** Actions **/
    function updateUser(data: any) {
      let uid = auth.currentUser?.uid as string;
      let userDocRef = doc($db, "users", uid);
      updateDoc(userDocRef, data);
      fetchUserInfo(uid);
      successMsg.value = "تم تحديث المعلومات";
      setTimeout(() => {
        successMsg.value = "";
      }, 3000);
    }

    function getUserLevel(units: any, numberOfUnits: number): number {
      let doneCounter = 0;
      if (!units || numberOfUnits === 0) return 0; // Avoid division by zero
      for (let u in units) {
        if (u === "done") continue;
        if (units[u].done) doneCounter++;
      }
      return Math.ceil((100 / numberOfUnits) * doneCounter);
    }

    function setUserLevel(units: any, numberOfUnits: number) {
      let uid = auth.currentUser?.uid as string;
      let userDocRef = doc($db, "users", uid);
      updateDoc(userDocRef, {
        userLevel: getUserLevel(units, numberOfUnits),
      });
      fetchUserInfo(uid);
    }

    function fetchUserInfo(userId: string) {
      let data: any = {};
      let q = query(collection($db, "users"), where("uid", "==", userId));
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
      updateUser,
      setUserLevel,
      fetchUserInfo,
    };
  },
  {
    persist: true,
  }
);
