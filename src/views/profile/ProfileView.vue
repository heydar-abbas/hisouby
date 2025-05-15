<script setup lang="ts">
import GradsCard from "@/components/global/GradsCard.vue";
import UserInfo from "@/components/global/UserInfo.vue";
import ClassList from "@/components/UI/ClassList.vue";
import LevelCounter from "@/components/UI/LevelCounter.vue";
import LevelProgressBar from "@/components/UI/LevelProgressBar.vue";
import SuccessMsg from "@/components/UI/SuccessMsg.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
import { useUserStore } from "@/stores/userStore";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { userInfo, successMsg } = storeToRefs(userStore);
</script>

<template>
  <BaseLayout>
    <div class="w-full p-4 md:w-2xl lg:w-4xl xl:w-6xl mx-auto md:p-0">
      <!-- Notification -->
      <SuccessMsg v-show="successMsg" :msg="successMsg" />
      
      <!-- User info -->
      <UserInfo :userInfo="userInfo" />

      <!-- User achievements -->
      <div class="py-6">
        <!-- Level -->
        <div class="flex flex-wrap justify-center gap-6 mb-6">
          <ul class="basis-80 flex flex-col gap-4">
            <LevelCounter
              :level="userInfo?.level?.proficient"
              title="متمكن"
              levelColor="proficient"
            />

            <LevelCounter
              :level="userInfo?.level?.familiar"
              title="على دراية"
              levelColor="familiar"
            />

            <LevelCounter
              :level="userInfo?.level?.attempted"
              title="حاول"
              levelColor="attempted"
            />
          </ul>

          <LevelProgressBar title="المستوى" :value="60" />
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
