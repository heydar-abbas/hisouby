<script setup lang="ts">
import BaseLayout from "@/layouts/BaseLayout.vue";
import { useUserStore } from "@/stores/userStore";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";

const userStore = useUserStore();
const { userInfo, localUserInfo } = storeToRefs(userStore);
</script>

<template>
  <BaseLayout>
    <div class="h-screen w-full px-4 py-4 md:w-2xl">
      <!-- <AppNotification v-show="user.notification" :msg="user.notification" /> -->
      <!-- User info -->
      <div class="border-b-gray-300 border-b-2 py-4">
        <h2 class="text-center font-semibold">
          {{ localUserInfo?.displayName || "Your name" }}
        </h2>
        <div class="flex flex-col items-center py-4">
          <img
            class="rounded-full border-2 border-slate-300 mb-1 p-2 w-20"
            :src="localUserInfo?.photoURL || '/no-image.png'"
            alt="User Avatar"
          />
        </div>
        <div class="flex justify-center">
          <RouterLink
            to="/profile/edit"
            class="bg-slate-200 rounded-md py-2 px-4 text-[12px] cursor-pointer"
          >
            تعديل الملف الشخصي
          </RouterLink>
        </div>
      </div>

      <!-- User achievements -->
      <div>
        <!-- Level -->
        <ul>
          <li>
            <span>متمكن:</span>
            <span class="mr-2">{{ userInfo?.level?.proficient }}</span>
          </li>
          <li>
            <span>على دراية:</span>
            <span class="mr-2">{{ userInfo?.level?.familiar }}</span>
          </li>
          <li>
            <span>حاول:</span>
            <span class="mr-2">{{ userInfo?.level?.attempted }}</span>
          </li>
        </ul>
        <div class="flex flex-col gap-1.5">
          <label>المستوى: 50%</label>
          <progress max="100" value="50"></progress>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>
