<template>
	<li class="w-20 hover:bg-gray-200 cursor-pointer p-4 rounded-lg">
		<img :src="`/images/avatars/${avatar}`" alt="Avatar" />
	</li>
</template>

<script setup lang="ts">
defineProps<{
	avatar: string;
}>();
</script>
