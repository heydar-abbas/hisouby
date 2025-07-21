<template>
	<input
		type="text"
		class="px-2 text-center border-b-2 border-dotted border-gray-900 text-gray-900 focus:outline-0 placeholder:text-sm"
		v-model="model"
		ref="input"
	/>
</template>

<script setup lang="ts">
	const model = defineModel<string | null>({ required: true });

	const input = ref<HTMLInputElement | null>(null);

	onMounted(() => {
		if (input.value?.hasAttribute("autofocus")) {
			input.value?.focus();
		}
	});

	defineExpose({ focus: () => input.value?.focus() });
</script>
