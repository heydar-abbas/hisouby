<script setup lang="ts">
import EditProfileBtn from '../UI/EditProfileBtn.vue';
import ProfileAvatar from '../UI/ProfileAvatar.vue';

defineProps<{
  userInfo: any;
}>();
</script>

<template>
  <div class="border-b-gray-300 border-b-2 py-4 lg:flex lg:justify-evenly">
    <ProfileAvatar :avatarSrc="userInfo?.avatar" />

    <div class="flex-2/3 flex flex-col items-center justify-center">
      <h2 class="text-center text-gray-900 font-semibold mb-4">
        {{ userInfo?.name || "بلا اسم" }}
      </h2>
      
      <EditProfileBtn />
    </div>
  </div>
</template>
