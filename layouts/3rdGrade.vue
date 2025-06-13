<template>
  <div>
    <header>
      <AppNav />
    </header>

    <main class="w-full bg-gray-50 flex flex-col-reverse lg:flex-row xl:w-6xl mx-auto p-4 md:p-0">
      <!-- Sidebar -->
      <GradeAside
        title="الصف الثالث الابتدائية"
        units="٩"
        tests="٥٧"
        link="/grade/_3rd"
      >
        <GradeAsideLink
          link="/grade/_3rd/unit1"
          title="الفصل الاول"
          topic="الأعداد حتى ٩٩٩٩"
        />
        <GradeAsideLink
          link="#"
          title="الفصل الثاني"
          topic="جمع و طرح الاعداد"
        />
        <GradeAsideLink
          link="#"
          title="الفصل الثالث"
          topic="جمع و طرح الاعداد"
        />
        <GradeAsideLink
          link="#"
          title="الفصل الرابع"
          topic="جمع و طرح الاعداد"
        />
        <GradeAsideLink
          link="#"
          title="الفصل الخامس"
          topic="جمع و طرح الاعداد"
        />

        <GradeAsideLink
          link="#"
          title="الفصل السادس"
          topic="جمع و طرح الاعداد"
        />

        <GradeAsideLink
          link="#"
          title="الفصل السابع"
          topic="جمع و طرح الاعداد"
        />

        <GradeAsideLink
          link="#"
          title="الفصل الثامن"
          topic="جمع و طرح الاعداد"
        />

        <GradeAsideLink
          link="#"
          title="الفصل التاسع"
          topic="جمع و طرح الاعداد"
        />
      </GradeAside>
      <!-- /Sidebar -->
      <slot></slot>
    </main>

    <footer>
      <AppFooter />
    </footer>
  </div>
</template>
