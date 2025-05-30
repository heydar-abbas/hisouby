import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-05-15",
	devtools: { enabled: true },
	nitro: {
		preset: "static",
	},
	modules: ["@pinia/nuxt", "pinia-plugin-persistedstate/nuxt"],
	plugins: [],
	vite: { plugins: [tailwindcss()] },
	css: ["~/assets/css/main.css"],
	app: {
		head: {
			htmlAttrs: { dir: "rtl", lang: "ar" },
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/images/google.png' }],
		},
	},
	runtimeConfig: {
		public: {
			FIREBASE_API_KEY: process.env.NUXT_FIREBASE_API_KEY,
			FIREBASE_AUTH_DOMAIN: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
			FIREBASE_PROJECT_ID: process.env.NUXT_FIREBASE_PROJECT_ID,
			FIREBASE_STORAGE_BUCKET: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
			FIREBASE_MESSAGING_SENDER_ID:
				process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID,
			FIREBASE_APP_ID: process.env.NUXT_FIREBASE_APP_ID,
		},
	},
	piniaPluginPersistedstate: {
		storage: "cookies",
		cookieOptions: {
			sameSite: "lax",
		},
		debug: true,
	},
});
