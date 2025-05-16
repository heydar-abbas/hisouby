<script setup lang="ts">
import GradeSection from "@/components/global/GradeSection.vue";
import GradeLink from "@/components/UI/GradeLink.vue";
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
      <GradeSection
        @click="elementarySchool = !elementarySchool"
        :isOpen="elementarySchool"
        title="الابتدائية"
      >
        <GradeLink to="/grade/1" title="الصف الاول" />
        <GradeLink to="/grade/2" title="الصف الثاني" />
        <GradeLink to="/grade/3" title="الصف الثالث" />
        <GradeLink to="/grade/4" title="الصف الرابع" />
        <GradeLink to="/grade/5" title="الصف الخامس" />
        <GradeLink to="/grade/6" title="الصف السادس" />
      </GradeSection>

      <GradeSection
        @click="middleSchool = !middleSchool"
        :isOpen="middleSchool"
        title="المتوسطة"
      >
        <GradeLink to="/grade/7" title="الصف الاول" />
        <GradeLink to="/grade/8" title="الصف الثاني" />
        <GradeLink to="/grade/9" title="الصف الثالث" />
      </GradeSection>

      <GradeSection
        @click="highSchool = !highSchool"
        :isOpen="highSchool"
        title="الاعدادية"
      >
        <GradeLink to="/grade/4hs" title="الرابع" />
        <GradeLink to="/grade/5hs" title="الخامس" />
        <GradeLink to="/grade/6hs" title="السادس" />
      </GradeSection>
    </div>
  </BaseLayout>
</template>
