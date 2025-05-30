export default defineNuxtPlugin(() => {
	const authStore = useAuthStore();
	const userStore = useUserStore();

	return {
		provide: {
			authStore,
			userStore,
		},
	};
});
