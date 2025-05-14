<script setup lang="ts">
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { useAuthStore } from "./stores/authStore";
import { useUserStore } from "./stores/userStore";
import { storeToRefs } from "pinia";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "./firebase";

const authStore = useAuthStore();
const { isLoggedIn } = storeToRefs(authStore);

const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);

onMounted(() => {
  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      isLoggedIn.value = true;

      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (!userInfo.value) {
            userInfo.value = doc.data();
          }
        });
      });
    } else {
      isLoggedIn.value = false;
    }
  });
});
</script>

<template>
  <RouterView />
</template>
