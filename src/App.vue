<script setup lang="ts">
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { useAuthStore } from "./stores/authStore";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { isLoggedIn, userInfo } = storeToRefs(authStore);

onMounted(() => {
	onAuthStateChanged(getAuth(), (user) => {
		if (user) {
			userInfo.value = user;
			isLoggedIn.value = true;
		} else {
			isLoggedIn.value = false;
		}
	});
});
</script>

<template>
	<RouterView />
</template>
