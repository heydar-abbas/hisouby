<template>
	<section
		class="w-full lg:basis-64 mx-auto shadow-md rounded-lg p-4 overflow-hidden"
		:class="{ 'h-16': isOpen }"
	>
		<div class="flex justify-center items-center gap-4 cursor-default mb-4">
			<IconAbacus />
			<div class="flex-1 flex justify-between items-center">
				<h2 class="text-2xl">{{ title }}</h2>
				<IconChevronDown
					class="w-8 duration-200 ease-in-out"
					:class="isOpen ? 'rotate-0' : 'rotate-180'"
				/>
			</div>
		</div>
		<ul class="origin-top-right" :class="isOpen ? 'rotate-x-90' : 'rotate-x-0'">
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
