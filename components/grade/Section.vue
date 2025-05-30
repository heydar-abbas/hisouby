<template>
	<section
		class="w-full lg:basis-64 p-4 mx-auto border-b-2 border-b-gray-400 overflow-hidden"
		:class="{ 'h-16': isOpen }"
	>
		<div class="flex justify-between items-center gap-4 cursor-pointer">
			<h2 class="text-2xl">{{ title }}</h2>
			<IconChevronDown
				class="w-8 duration-200 ease-in-out"
				:class="isOpen ? 'rotate-0' : 'rotate-180'"
			/>
		</div>
		<ul
			class="p-4 origin-top-right"
			:class="isOpen ? 'rotate-x-90' : 'rotate-x-0'"
		>
			<slot></slot>
		</ul>
	</section>
</template>

<script setup lang="ts">
defineProps<{
	isOpen: boolean;
	title: string;
}>();
</script>
