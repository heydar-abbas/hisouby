export const calssRoutes = [
  {
    path: "/class/one",
    name: "class-one",
    component: () => import("../views/class/ClassOne.vue"),
    meta: {
      title: "الصف الاول",
    },
  },
  {
    path: "/class/two",
    name: "class-two",
    component: () => import("../views/class/ClassTwo.vue"),
    meta: {
      title: "الصف الثاني",
    },
  },
  {
    path: "/class/three",
    name: "class-three",
    component: () => import("../views/class/ClassThree.vue"),
    meta: {
      title: "الصف الثالث",
    },
  },
  {
    path: "/class/four",
    name: "class-four",
    component: () => import("../views/class/ClassFour.vue"),
    meta: {
      title: "الصف الرابع",
    },
  },
  {
    path: "/class/five",
    name: "class-five",
    component: () => import("../views/class/ClassFive.vue"),
    meta: {
      title: "الصف الخامس",
    },
  },
  {
    path: "/class/six",
    name: "class-six",
    component: () => import("../views/class/ClassSix.vue"),
    meta: {
      title: "الصف السادس",
    },
  },
  // ==================================
  {
    path: "/class/seven",
    name: "class-seven",
    component: () => import("../views/class/ClassSeven.vue"),
    meta: {
      title: "الصف الاول المتوسطة",
    },
  },
  {
    path: "/class/eight",
    name: "class-eight",
    component: () => import("../views/class/ClassEight.vue"),
    meta: {
      title: "الصف الثاني المتوسطة",
    },
  },
  {
    path: "/class/nine",
    name: "class-nine",
    component: () => import("../views/class/ClassNine.vue"),
    meta: {
      title: "الصف الثالث المتوسطة",
    },
  },
  // ===================================
  {
    path: "/class/ten",
    name: "class-ten",
    component: () => import("../views/class/ClassTen.vue"),
    meta: {
      title: "الصف الرابع",
    },
  },
  {
    path: "/class/eleven",
    name: "class-eleven",
    component: () => import("../views/class/ClassEleven.vue"),
    meta: {
      title: "الصف الخامس",
    },
  },
  {
    path: "/class/twelve",
    name: "class-twelve",
    component: () => import("../views/class/ClassTwelve.vue"),
    meta: {
      title: "الصف السادس",
    },
  },
];
