<script setup lang="ts">
import AppLogo from "./AppLogo.vue";
import { RouterLink } from "vue-router";
import { onUnmounted, ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { useUserStore } from "@/stores/userStore";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { isLoggedIn } = storeToRefs(authStore);

const userStore = useUserStore();
const { userInfo,  localUserInfo } = storeToRefs(userStore);

const isUserMenuOpen = ref(false);

onUnmounted(() => {
  isUserMenuOpen.value = false;
});

function signOut() {
  authStore.handleSignOut();
}
</script>

<template>
  <nav class="bg-gray-900 border-gray-200">
    <div
      class="w-full md:w-2xl lg:w-4xl xl:w-6xl flex flex-wrap items-center justify-between mx-auto p-4 md:px-0"
    >
      <AppLogo />
      <RouterLink
        to="/auth/signin"
        class="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        :class="{ hidden: isLoggedIn }"
      >
        تسجيل الدخول
      </RouterLink>
      <div
        class="relative flex items-center md:order-2 space-x-3 md:space-x-0"
        :class="{ hidden: !isLoggedIn }"
      >
        <button
          type="button"
          @click="isUserMenuOpen = !isUserMenuOpen"
          class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-600 cursor-pointer"
        >
          <img
            class="w-8 h-8 rounded-full object-cover"
            :src="userInfo?.avatar || '/no-image.png'"
            alt="user photo"
          />
        </button>
        <!-- Dropdown menu -->
        <div
          class="absolute top-6 left-0 z-50 w-52 my-4 text-base list-none divide-y rounded-lg shadow-sm bg-gray-700 divide-gray-600"
          :class="{ hidden: !isUserMenuOpen }"
        >
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-100">
              {{
                localUserInfo?.displayName || localUserInfo?.email?.split("@")[0]
              }}
            </span>
            <span class="block text-sm truncate text-gray-400">
              {{ localUserInfo?.email }}
            </span>
          </div>
          <ul class="py-2">
            <li>
              <RouterLink
                to="/profile"
                class="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-gray-100"
              >
                الصفحة الشخصية
              </RouterLink>
            </li>
            <li>
              <div
                @click="signOut"
                class="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-gray-100 cursor-pointer"
              >
                تسجيل خروج
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
