<script setup lang="ts">
import ClassSection from "@/components/global/ClassSection.vue";
import ClassLink from "@/components/UI/ClassLink.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
import { ref } from "vue";

const elementarySchool = ref<boolean>(false);
const middleSchool = ref<boolean>(false);
const highSchool = ref<boolean>(false);
</script>

<template>
  <BaseLayout>
    <div
      class="w-full md:w-2xl lg:w-4xl xl:w-6xl flex flex-wrap items-start gap-4 mx-auto px-4 py-8 md:px-0"
    >
      <ClassSection
        @click="elementarySchool = !elementarySchool"
        :isOpen="elementarySchool"
        title="الابتدائية"
      >
        <ClassLink to="/class/one" title="الصف الاول" />
        <ClassLink to="/class/two" title="الصف الثاني" />
        <ClassLink to="/class/three" title="الصف الثالث" />
        <ClassLink to="/class/four" title="الصف الرابع" />
        <ClassLink to="/class/five" title="الصف الخامس" />
        <ClassLink to="/class/six" title="الصف السادس" />
      </ClassSection>

      <ClassSection
        @click="middleSchool = !middleSchool"
        :isOpen="middleSchool"
        title="المتوسطة"
      >
        <ClassLink to="/class/seven" title="الصف الاول" />
        <ClassLink to="/class/eight" title="الصف الثاني" />
        <ClassLink to="/class/nine" title="الصف الثالث" />
      </ClassSection>

      <ClassSection
        @click="highSchool = !highSchool"
        :isOpen="highSchool"
        title="الاعدادية"
      >
        <ClassLink to="/class/ten" title="الرابع" />
        <ClassLink to="/class/eleven" title="الخامس" />
        <ClassLink to="/class/twelve" title="السادس" />
      </ClassSection>
    </div>
  </BaseLayout>
</template>
