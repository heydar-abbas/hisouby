<script setup lang="ts">
import AvatarList from "@/components/global/AvatarList.vue";
import ImageInput from "@/components/UI/ImageInput.vue";
import PrimaryButton from "@/components/UI/PrimaryButton.vue";
import SecondaryButton from "@/components/UI/SecondaryButton.vue";
import TextInput from "@/components/UI/TextInput.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
import { useUserStore } from "@/stores/userStore";
import { storeToRefs } from "pinia";
import { onUnmounted, reactive, ref, watchEffect } from "vue";

const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);
const avatarListDropDown = ref<boolean>(false);
const form = reactive({
  name: "",
  avatar: "",
});

watchEffect(() => {
  form.name = userInfo.value?.name;
  form.avatar = userInfo.value?.avatar;
});

function changeAvatar(event: any) {
  form.avatar = new URL(
    `../../assets/images/avatars/${event}`,
    import.meta.url
  ).href;
}

onUnmounted(() => {
  avatarListDropDown.value = false;
});
</script>

<template>
  <BaseLayout>
    <div class="h-screen w-full px-4 py-4 md:w-2xl">
      <form @submit.prevent="userStore.updateUser(form)">
        <div class="relative flex flex-col items-center py-4">
          <ImageInput
            @click="avatarListDropDown = !avatarListDropDown"
            :src="form.avatar"
            alt="User avatar"
          />
          <!-- List of avatars -->
          <AvatarList
            :class="
              avatarListDropDown
                ? 'transform rotate-y-0'
                : 'transform rotate-y-90'
            "
            @passAvatar="changeAvatar($event)"
          />
        </div>

        <!-- User name -->
        <div>
          <TextInput
            type="text"
            class="mt-1 block w-full"
            v-model="form.name"
            placeholder="اكتب اسمك..."
          />
        </div>
        <div class="flex items-center gap-4 my-4">
          <PrimaryButton type="submit"> حفظ </PrimaryButton>
          <SecondaryButton onclick="history.back()"> الغاء </SecondaryButton>
        </div>
      </form>
    </div>
  </BaseLayout>
</template>
