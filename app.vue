<template>
	<NuxtLayout>
		<NuxtRouteAnnouncer />
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const { $db, $firebaseApp, $authStore, $userStore } = useNuxtApp();
const auth = getAuth($firebaseApp);

onMounted(() => {
	onAuthStateChanged(auth, (user) => {
		if (user) {
			$authStore.isLoggedIn = true;

			const q = query(collection($db, "users"), where("uid", "==", user?.uid));
			onSnapshot(q, (querySnapshot) => {
				$userStore.userInfo = querySnapshot.docs[0].data();
			});
		} else {
			$authStore.isLoggedIn = false;
			$userStore.userInfo = null;
		}
	});
});
</script>
