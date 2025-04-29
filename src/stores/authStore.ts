import {
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const auth = getAuth();

  const userInfo = ref<any>();
  const isLoggedIn = ref<boolean>(false);
  const errMsg = ref<string | null>("");
  const errorList: any = {
    "auth/invalid-email": "البريد الإلكتروني غير صالح",
    "auth/missing-password": "كلمة المرور مطلوبة",
    "auth/invalid-credential": "تأكد من صحة بياناتك",
  };

  function signIn(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        userInfo.value = data.user;
        isLoggedIn.value = true;
        router.push("/");
      })
      .catch((error) => {
        console.error("Error signing in:", error.code);
        errMsg.value = errorList[error.code] || "حدث خطأ ما";
        isLoggedIn.value = false;
      });
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
      .then((result) => {
        userInfo.value = result.user;
        isLoggedIn.value = true;
        router.push("/");
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error.code);
      });
  }

  function handleSignOut() {
    signOut(getAuth()).then(() => {
      userInfo.value = null;
      isLoggedIn.value = false;
      errMsg.value = "";
      router.push("/");
    });
  }

  return {
    isLoggedIn,
    errMsg,
    userInfo,
    signIn,
    signInWithGoogle,
    handleSignOut,
  };
});
