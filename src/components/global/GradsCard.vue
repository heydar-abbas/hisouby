<script setup lang="ts"></script>

<template>
  <div class="py-4">
    <div class="w-full text-center p-3 border border-gray-400 rounded-t-md">
      <h3>الصفوف المنتهية</h3>
    </div>
    <ul
      class="w-full py-2 flex flex-wrap justify-between gap-y-2 border border-gray-400 rounded-b-md"
    >
      <slot></slot>
    </ul>
  </div>
</template>
