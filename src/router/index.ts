import HomeView from "../views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
			meta: {
				title: "الرئيسية",
			},
		},
		{
			path: "/profile",
			name: "profile",
			component: () => import("../views/profile/ProfileView.vue"),
			meta: {
				title: "الملف الشخصي",
				requireAuth: true,
			},
		},
		{
			path: "/auth/login",
			name: "login",
			component: () => import("../views/auth/Login.vue"),
			meta: {
				title: "تسجيل الدخول",
			},
		},
	],
});

function getCurrentUser() {
	return new Promise((resolve, reject) => {
		const removeListener = onAuthStateChanged(
			getAuth(),
			(user) => {
				removeListener();
				resolve(user);
				// if (user) {
				// 	resolve(user);
				// } else {
				// 	reject(new Error("No user is signed in."));
				// }
			},
			reject
		);
	});
}

router.beforeEach(async (to, from, next) => {
	document.title = to.meta.title ? `الحيسوبي | ${to.meta.title}` : "الحيسوبي";

	if (to.matched.some((record) => record.meta.requireAuth)) {
		if (await getCurrentUser()) {
			next();
		} else {
			next("/auth/login");
		}
	} else {
		next();
	}
});

export default router;
