import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
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
      link: [
        // Faveicons
        { rel: "icon", type: "image/png", href: "/images/favicon/favicon-96x96.png", sizes: "96x96" },
        { rel: "icon", type: "image/svg+xml", href: "/images/favicon/favicon.svg" },
        { rel: "shortcut icon", href: "/images/favicon/favicon.ico" },
        { rel: "apple-touch-icon", href: "/images/favicon/apple-touch-icon.png", sizes: "180x180" },
        { rel: "manifest", href: "/images/favicon/site.webmanifest" },
        // Google Fonts
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
        {
          href: "https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&display=swap",
          rel: "stylesheet",
        },
      ],
      meta: [
        { name: "theme-color", content: "#101828" },
        { name: "apple-mobile-web-app-title", content: "Hisouby" },
      ]
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
