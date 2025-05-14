<script setup lang="ts">
import GoogleIcone from "@/components/icons/GoogleIcone.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();

function handleSignInWithGoogle() {
  authStore.signInWithGoogle();
}

function handleSignInWithFacebook() {
  console.log("Log in with facebook");
}
</script>

<template>
  <BaseLayout>
    <section class="bg-gray-50 h-screen">
      <div
        class="flex flex-col items-center justify-center px-4 md:px-0 py-8 md:py-0 mx-auto w-full md:w-2xl lg:w-4xl xl:w-6xl sm:h-auto md:h-screen"
      >
        <div
          class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
            >
              قم بتسجيل الدخول
            </h1>

            <!-- Signin-up with google -->
            <div class="w-full">
              <button
                class="bg-gray-200 rounded-lg text-sm px-5 py-2.5 flex justify-evenly items-center hover:bg-gray-300 w-full cursor-pointer"
                @click="handleSignInWithGoogle"
              >
                <GoogleIcone class="w-5 h-5" />
                <span class="">سجل الدخول بواسطة جوجل</span>
              </button>
            </div>

            <!-- Signin-up with facebook -->
            <div class="w-full">
              <button
                disabled
                class="disabled:cursor-not-allowed disabled:bg-blue-300 bg-blue-500 text-gray-50 rounded-lg text-sm px-5 py-2.5 flex justify-evenly items-center hover:bg-blue-400 w-full cursor-pointer"
                @click="handleSignInWithFacebook"
              >
                <GoogleIcone class="w-5 h-5" />
                <span class="">سجل الدخول بواسطة فيسبوك</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </BaseLayout>
</template>
