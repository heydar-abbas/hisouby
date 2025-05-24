export const gradesRoutes = [
  {
    path: "/grade/1",
    name: "first-grade",
    component: () => import("../views/grade/_1stGrade/index.vue"),
    meta: {
      title: "الاول الابتدائية",
    },
  },
  {
    path: "/grade/2",
    name: "second-grade",
    component: () => import("../views/grade/_2ndGrade.vue"),
    meta: {
      title: "الثاني الابتدائية",
    },
  },
  {
    path: "/grade/3",
    name: "third-grade",
    component: () => import("../views/grade/_3rdGrade.vue"),
    meta: {
      title: "الثالث الابتدائية",
    },
  },
  {
    path: "/grade/4",
    name: "fourth-grade",
    component: () => import("../views/grade/_4thGrade.vue"),
    meta: {
      title: "الرابع الابتدائية",
    },
  },
  {
    path: "/grade/5",
    name: "fiveth-grade",
    component: () => import("../views/grade/_5thGrade.vue"),
    meta: {
      title: "الخامس الابتدائية",
    },
  },
  {
    path: "/grade/6",
    name: "sixth-grade",
    component: () => import("../views/grade/_6thGrade.vue"),
    meta: {
      title: "السادس الابتدائية",
    },
  },
  // ==================================
  {
    path: "/grade/7",
    name: "seventh-grade",
    component: () => import("../views/grade/_7thGrade.vue"),
    meta: {
      title: "الاول المتوسطة",
    },
  },
  {
    path: "/grade/8",
    name: "eighth-grade",
    component: () => import("../views/grade/_8thGrade.vue"),
    meta: {
      title: "الثاني المتوسطة",
    },
  },
  {
    path: "/grade/9",
    name: "nineth-grade",
    component: () => import("../views/grade/_9thGrade.vue"),
    meta: {
      title: "الثالث المتوسطة",
    },
  },
  // ===================================
  {
    path: "/grade/4hs",
    name: "fourth-hs",
    component: () => import("../views/grade/_4thHSchool.vue"),
    meta: {
      title: "الرابع الاعدادي",
    },
  },
  {
    path: "/grade/5hs",
    name: "fiveth-hs",
    component: () => import("../views/grade/_5thHSchool.vue"),
    meta: {
      title: "الخامس الاعدادي",
    },
  },
  {
    path: "/grade/6hs",
    name: "sixth-hs",
    component: () => import("../views/grade/_6thHSchool.vue"),
    meta: {
      title: "السادس الاعدادي",
    },
  },
];
