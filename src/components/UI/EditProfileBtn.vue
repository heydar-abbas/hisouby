<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="flex justify-center">
    <RouterLink
      to="/profile/edit"
      class="bg-slate-200 rounded-md py-2 px-4 text-xs"
    >
      تعديل الملف الشخصي
    </RouterLink>
  </div>
</template>
