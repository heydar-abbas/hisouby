<script setup lang="ts">
import GoogleIcone from "@/components/icons/GoogleIcone.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
import { useAuthStore } from "@/stores/authStore";
import { storeToRefs } from "pinia";
import { onUnmounted, ref } from "vue";
import { RouterLink } from "vue-router";

const authStore = useAuthStore();
const { errMsg } = storeToRefs(authStore);
const email = ref("");
const password = ref("");

function handleSignIn() {
  authStore.signIn(email.value, password.value);
}

function handleSignInWithGoogle() {
  authStore.signInWithGoogle();
}

onUnmounted(() => {
  errMsg.value = "";
});
</script>

<template>
  <BaseLayout>
    <section class="bg-gray-50">
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
              قم بتسجيل الدخول الى حسابك
            </h1>

            <form class="space-y-4 md:space-y-6" @submit.prevent="handleSignIn">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  البريد الالكتروني
                </label>
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  كلمة المرور
                </label>
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                />
              </div>
              <!-- Show error message -->
              <p
                v-if="errMsg"
                class="text-red-600 text-sm font-semibold"
              >
                {{ errMsg }}
              </p>

              <!-- <div>
                <a
                  href="#"
                  class="text-sm font-medium text-blue-600 hover:underline"
                >
                  نسيت كلمة المرور؟
                </a>
              </div> -->

              <button
                type="submit"
                class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                تسجيل دخول
              </button>
            </form>

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
          </div>
        </div>
      </div>
    </section>
  </BaseLayout>
</template>
