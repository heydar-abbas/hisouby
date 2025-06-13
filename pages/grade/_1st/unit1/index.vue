<template>
  <div class="w-full lg:flex p-4 md:p-0">
    <!-- Sidebar -->
    <GradeAside
      title="الصف الاول الابتدائية"
      units="5"
      tests="25"
      link="/grade/_1st"
    >
      <GradeAsideLink
        link="/grade/_1st/unit1"
        title="الفصل الاول"
        topic="جمع و طرح الاعداد"
      />
      <GradeAsideLink link="#" title="الفصل الثاني" topic="جمع و طرح الاعداد" />
      <GradeAsideLink link="#" title="الفصل الثالث" topic="جمع و طرح الاعداد" />
      <GradeAsideLink link="#" title="الفصل الرابع" topic="جمع و طرح الاعداد" />
      <GradeAsideLink link="#" title="الفصل الخامس" topic="جمع و طرح الاعداد" />
    </GradeAside>
    <!-- /Sidebar -->
    <article class="lg:basis-2/3 w-full h-fit md:w-2xl mx-auto lg:p-4">
      <header>
        <h1 class="text-3xl font-semibold py-8 text-center lg:text-start">
          الفصل الاول
        </h1>
      </header>
      <!-- Quiz Guideline -->
      <QuizGuideline />
      <!-- /Quiz Guideline -->
      <section class="w-full xl:w-3xl mx-auto">
        <UnitCard title="الفصل الاول">
          <QuizCard
            title="الدرس الاول"
            link="/grade/_1st/unit1/quiz1/q1"
            :degre="grades?.g1?.unit1?.quiz1"
          />

          <QuizCard
            title="الدرس الثاني"
            link="/grade/_1st/unit1/quiz2/q1"
            :degre="grades?.g1?.unit1?.quiz2"
          />

        </UnitCard>
      </section>
    </article>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "الصف الاول الابتدائية",
});

const { $userStore } = useNuxtApp();
const grades = computed(() => $userStore?.userInfo?.grades);
</script>
