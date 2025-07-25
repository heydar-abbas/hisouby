<template>
	<button
		:type="type"
		class="inline-flex items-center px-4 py-2 bg-blue-500 border border-blue-500 rounded-md font-semibold text-xs text-white uppercase tracking-widest shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
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
