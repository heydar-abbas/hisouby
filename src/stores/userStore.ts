import { getAuth } from "firebase/auth";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useUserStore = defineStore("userStore", () => {
  const router = useRouter();
  const auth = getAuth();

  const userInfo = ref<any>(null);
  const localUserInfo = ref<any>(null);
  const errMsg = ref<string | null>("");
  const errorList: any = {
    "auth/invalid-email": "البريد الإلكتروني غير صالح",
    "auth/missing-password": "كلمة المرور مطلوبة",
    "auth/invalid-credential": "تأكد من صحة بياناتك",
  };
  const avatarListDropDown = ref<boolean>(false);

  return { userInfo, localUserInfo, errMsg, avatarListDropDown };
});
