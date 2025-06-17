<template>
  <article class="lg:basis-2/3 w-full lg:h-fit md:w-2xl mx-auto mb-6 lg:mb-0">
    <header>
      <h1 class="text-2xl font-semibold py-8 px-4 text-center lg:text-start">
        الفصل الاول: الأعداد حتى ٩٩٩٩
      </h1>
    </header>
    <!-- Quiz Guideline -->
    <QuizGuideline />
    <!-- /Quiz Guideline -->
     
    <section class="w-full xl:w-3xl mx-auto p-4 mb-12">
      <UnitCard title="">
        <QuizCard
          title="الدرس الاول: مفهوم الألف والعد بالألوف"
          link="/grade/_3rd/unit1/quiz1/q1"
          :degree="grades?.g3?.unit1?.quiz1"
        />

        <QuizCard
          title="الدرس الثاني: الأعداد من ١٠٠٠ الى ٩٩٩٩"
          link="/grade/_3rd/unit1/quiz2/q1"
          :degree="grades?.g3?.unit1?.quiz2"
        />
      </UnitCard>
    </section>
  </article>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "3rd-grade",
});

useHead({
  title: "الثالث الابتدائية | الحيسوبي",
});

const { $userStore } = useNuxtApp();
const grades = computed(() => $userStore?.userInfo?.grades);
</script>
