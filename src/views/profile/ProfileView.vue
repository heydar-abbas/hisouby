<script setup lang="ts">
import ProfileGradesCard from "@/components/global/ProfileGradesCard.vue";
import UserInfo from "@/components/global/UserInfo.vue";
import ProfileGradeList from "@/components/UI/ProfileGradeList.vue";
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
        <ProfileGradesCard>
          <ProfileGradeList badgeImage="" title="الاول ابتدائية" />
          <ProfileGradeList badgeImage="" title="الثاني ابتدائية" />
          <ProfileGradeList badgeImage="" title="الثالث ابتدائية" />
          <ProfileGradeList badgeImage="" title="الرابع ابتدائية" />
          <ProfileGradeList badgeImage="" title="الخامس ابتدائية" />
          <ProfileGradeList badgeImage="" title="السادس ابتدائية" />
          <ProfileGradeList badgeImage="" title="الاول متوسطة" />
          <ProfileGradeList badgeImage="" title="الثاني متوسطة" />
          <ProfileGradeList badgeImage="" title="الثالث متوسطة" />
          <ProfileGradeList badgeImage="" title="الرابع اعدادي" />
          <ProfileGradeList badgeImage="" title="الخامس اعدادي" />
          <ProfileGradeList badgeImage="" title="السادس اعدادي" />
        </ProfileGradesCard>
      </div>
    </div>
  </BaseLayout>
</template>
