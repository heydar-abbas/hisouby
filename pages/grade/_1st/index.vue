<template>
  <div class="w-full lg:flex xl:w-6xl mx-auto p-4 md:p-0">
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
    <!-- All grade units -->
    <article class="lg:basis-2/3 w-full h-fit md:w-2xl mx-auto lg:p-4">
      <header>
        <h1 class="text-3xl font-semibold py-8 text-center lg:text-start">
          الصف الاول الابتدائية
        </h1>
      </header>
      <!-- Quiz Guideline -->
      <QuizGuideline />
      <!-- /Quiz Guideline -->
      <!-- Units -->
      <section class="grid lg:grid-cols-2 gap-6">
        <UnitCard title="الفصل الاول">
          <QuizLink
            href="/grade/_1st/unit1/quiz1/q1"
            :degre="grades?.g1?.unit1?.quiz1"
          />
          <QuizLink
            href="/grade/_1st/unit1/quiz2/q1"
            :degre="grades?.g1?.unit1?.quiz2"
          />
        </UnitCard>

        <UnitCard title="الفصل الثاني">
          <QuizLink href="#" degre="" />
          <QuizLink href="#" degre="" />
          <QuizLink href="#" degre="" />
          <QuizLink href="#" degre="" />
          <QuizLink href="#" degre="" />
        </UnitCard>

        <UnitCard title="الفصل الثالث">
          <QuizLink href="#" degre="" />
          <QuizLink href="#" degre="" />
          <QuizLink href="#" degre="" />
          <QuizLink href="#" degre="" />
          <QuizLink href="#" degre="" />
        </UnitCard>

        <UnitCard title="الفصل الرابع">
          <QuizLink href="#" degre="" />
          <QuizLink href="#" degre="" />
          <QuizLink href="#" degre="" />
          <QuizLink href="#" degre="" />
          <QuizLink href="#" degre="" />
        </UnitCard>

        <UnitCard title="الفصل الخامس">
          <QuizLink href="#" degre="" />
          <QuizLink href="#" degre="" />
          <QuizLink href="#" degre="" />
          <QuizLink href="#" degre="" />
          <QuizLink href="#" degre="" />
        </UnitCard>
      </section>
      <!-- /Units -->
    </article>
    <!-- /All grade units -->
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "الاول الابتدائية | الحيسوبي",
});

const { $userStore } = useNuxtApp();
const grades = computed(() => $userStore?.userInfo?.grades);
</script>
