<template>
	<button
		:type="type"
		class="inline-flex items-center px-4 py-2 bg-rose-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-rose-600 focus:bg-rose-600 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 transition ease-in-out duration-150"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
withDefaults(
	defineProps<{
		type?: "button" | "submit" | "reset";
	}>(),
	{
		type: "button",
	}
);
</script>
