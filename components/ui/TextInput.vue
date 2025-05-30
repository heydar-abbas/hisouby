<template>
	<input
		type="text"
		class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600"
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
