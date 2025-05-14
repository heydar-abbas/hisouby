import {
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { defineStore } from "pinia";
import { db } from "@/firebase";
import { useUserStore } from "./userStore";

export const useAuthStore = defineStore("authStore", () => {
  const router = useRouter();
  const auth = getAuth();
  const userStore = useUserStore();

  const isLoggedIn = ref<boolean>(false);
  const errMsg = ref<string | null>("");
  const errorList: any = {
    "auth/invalid-email": "البريد الإلكتروني غير صالح",
    "auth/missing-password": "كلمة المرور مطلوبة",
    "auth/invalid-credential": "تأكد من صحة بياناتك",
    "auth/weak-password": "كلمة المرور قصيرة",
    "auth/email-already-in-use": "البريد الالكتروني مستخدم بالفعل",
  };

  function signIn(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        isLoggedIn.value = true;
        router.push("/");
      })
      .catch((error) => {
        console.error("Error signing in:", error.code);
        errMsg.value = errorList[error.code] || "حدث خطأ ما";
        isLoggedIn.value = false;
      });
  }

  function signUp(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (data) => {
        const user = data.user;
        /**
         * Reference to the Firestore user document
         **/
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);
        /**
         * If user doesn't exist in Firestore, create them
         **/
        if (!userDocSnap.exists()) {
          await setDoc(userDocRef, {
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            avatar: user.photoURL,
            level: {
              proficient: 0,
              familiar: 0,
              attempted: 0,
            },
            createdAt: new Date(),
          });
          console.log("New user created");
        } else {
          console.log("User already exists");
        }
        router.push("/");
      })
      .catch((error) => {
        console.error("Sign-up error: ", error.code);
        errMsg.value = errorList[error.code] || "حدث خطأ ما";
        isLoggedIn.value = false;
      });
  }

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      /**
       * Reference to the Firestore user document
       **/
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);
      /**
       * If user doesn't exist in Firestore, create them
       **/
      if (!userDocSnap.exists()) {
        await setDoc(userDocRef, {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          avatar: user.photoURL,
          level: {
            grade: 0,
            unit: 0,
          },
          createdAt: new Date(),
        });
        console.log("New user created");
      } else {
        console.log("User already exists");
      }
      router.push("/");
    } catch (error) {
      console.error("Google sign-in error", error);
    }
  }

  function handleSignOut() {
    signOut(getAuth()).then(() => {
      isLoggedIn.value = false;
      errMsg.value = "";
      userStore.userInfo = null;
      router.push("/");
    });
  }

  return {
    isLoggedIn,
    errMsg,
    signIn,
    signUp,
    signInWithGoogle,
    handleSignOut,
  };
});
