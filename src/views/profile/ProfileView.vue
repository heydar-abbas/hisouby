<script setup lang="ts">
import GradsCard from "@/components/global/GradsCard.vue";
import ClassList from "@/components/UI/ClassList.vue";
import SuccessMsg from "@/components/UI/SuccessMsg.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
import { useUserStore } from "@/stores/userStore";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";

const userStore = useUserStore();
const { userInfo, successMsg } = storeToRefs(userStore);
</script>

<template>
  <BaseLayout>
    <div class="w-full p-4 md:w-2xl lg:w-4xl xl:w-6xl mx-auto md:px-0">
      <SuccessMsg v-show="successMsg" :msg="successMsg" />
      <!-- User info -->
      <div class="border-b-gray-300 border-b-2 py-4">
        <h2 class="text-center font-semibold">
          {{ userInfo?.name || "Your name" }}
        </h2>
        <div class="flex flex-col items-center py-4">
          <img
            class="rounded-full border-2 border-slate-300 mb-1 p-2 w-20"
            :src="userInfo?.avatar || '/no-image.png'"
            alt="User Avatar"
          />
        </div>
        <div class="flex justify-center">
          <RouterLink
            to="/profile/edit"
            class="bg-slate-200 rounded-md py-2 px-4 text-[12px]"
          >
            تعديل الملف الشخصي
          </RouterLink>
        </div>
      </div>

      <!-- User achievements -->
      <div class="py-6">
        <!-- Level -->
        <div class="flex flex-wrap justify-center gap-6 mb-6">
          <ul class="basis-80 flex flex-col gap-4">
            <li class="text-green-600 font-semibold">
              <span>متمكن:</span>
              <span class="mr-2">{{ userInfo?.level?.proficient }}</span>
            </li>
            <li class="text-purple-600 font-semibold">
              <span>على دراية:</span>
              <span class="mr-2">{{ userInfo?.level?.familiar }}</span>
            </li>
            <li class="text-orange-600 font-semibold">
              <span>حاول:</span>
              <span class="mr-2">{{ userInfo?.level?.attempted }}</span>
            </li>
          </ul>

          <div class="basis-80 text-gray-900">
            <label>
              <span>المستوى:</span>
              <span class="mr-2">50%</span>
            </label>
            <progress max="100" value="50" class="w-full"></progress>
          </div>
        </div>

        <!-- Grads -->
        <GradsCard>
          <ClassList badgeImage="/no-image.png" title="الاول ابتدائية" />
          <ClassList badgeImage="/no-image.png" title="الثاني ابتدائية" />
          <ClassList badgeImage="/no-image.png" title="الثالث ابتدائية" />
          <ClassList badgeImage="/no-image.png" title="الرابع ابتدائية" />
          <ClassList badgeImage="/no-image.png" title="الخامس ابتدائية" />
          <ClassList badgeImage="/no-image.png" title="السادس ابتدائية" />
          <ClassList badgeImage="/no-image.png" title="الاول متوسطة" />
          <ClassList badgeImage="/no-image.png" title="الثاني متوسطة" />
          <ClassList badgeImage="/no-image.png" title="الثالث متوسطة" />
          <ClassList badgeImage="/no-image.png" title="الرابع اعدادي" />
          <ClassList badgeImage="/no-image.png" title="الخامس اعدادي" />
          <ClassList badgeImage="/no-image.png" title="السادس اعدادي" />
        </GradsCard>
      </div>
    </div>
  </BaseLayout>
</template>
