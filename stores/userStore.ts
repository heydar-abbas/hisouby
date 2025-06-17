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
    const userInfo = ref<any>(null);
    const successMsg = ref<string | null>("");
    const avatarListDropDown = ref<boolean>(false);

    /** Actions **/
    function updateUser(data: any) {
      const uid = auth.currentUser?.uid as string;
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

    function fetchUserInfo(userId: string) {
      let data: any = {};
      const q = query(collection($db, "users"), where("uid", "==", userId));
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
      fetchUserInfo,
    };
  },
  {
    persist: true,
  }
);
