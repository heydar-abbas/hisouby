<template>
  <div class="w-full">
    <button
      class="bg-gray-200 rounded-lg text-sm px-5 py-2.5 flex justify-evenly items-center hover:bg-gray-300 w-full cursor-pointer"
      @click="$emit('handleSignIn')"
    >
      <img src="@/assets/images/google.png" alt="" class="w-6 h-6" />
      <span class="">سجل الدخول بواسطة جوجل</span>
    </button>
  </div>
</template>
