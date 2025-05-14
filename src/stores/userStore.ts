import { db } from "@/firebase";
import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useUserStore = defineStore(
  "userStore",
  () => {
    const router = useRouter();
    const auth = getAuth();

    const userInfo = ref<any>(null);
    const successMsg = ref<string | null>("");

    /**
     * Method for updating user information
     */
    function updateUser(data: any) {
      const uid: any = auth.currentUser?.uid;
      const userDocRef = doc(db, "users", uid);

      updateDoc(userDocRef, {
        name: data.name,
        avatar: data.avatar,
      });

      const q = query(collection(db, "users"), where("uid", "==", uid));
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          userInfo.value = doc.data();
        });
        successMsg.value = "تم تحديث المعلومات";
        setTimeout(() => {
          successMsg.value = "";
        }, 5000);
      });

      router.push("/profile");
    }

    return { userInfo, successMsg, updateUser };
  },
  { persist: true }
);
