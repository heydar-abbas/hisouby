<script setup lang="ts">
import EditProfileBtn from '../UI/EditProfileBtn.vue';
import ProfileAvatar from '../UI/ProfileAvatar.vue';

defineProps<{
  userInfo: any;
}>();
</script>

<template>
  <div class="border-b-gray-300 border-b-2 py-4">
    <ProfileAvatar :avatarSrc="userInfo?.avatar" />

    <h2 class="text-center font-semibold mb-4">
      {{ userInfo?.name || "Your name" }}
    </h2>
    
    <EditProfileBtn />
  </div>
</template>
