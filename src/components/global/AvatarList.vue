<script setup lang="ts">
import AvatarListItem from "./AvatarListItem.vue";
import { reactive } from "vue";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();
const avatars = reactive<string[]>([
  "penguin.png",
  "bullfinch.png",
  "butterfly.png",
  "clown-fish.png",
  "ladybug.png",
  "lion.png",
  "owl.png",
  "panda.png",
  "spider.png",
]);
</script>

<template>
  <ul
    class="absolute top-38 left-[50%] transform -translate-x-[50%] duration-300 grid grid-cols-2 bg-gray-100 p-4 rounded-xl w-72 justify-items-center"
  >
    <AvatarListItem
      v-for="(avatar, index) in avatars"
      :key="index"
      :avatar="avatar"
      @click="
        $emit('passAvatar', avatar),
          (userStore.avatarListDropDown = !userStore.avatarListDropDown)
      "
    />
  </ul>
</template>
