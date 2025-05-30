<template>
	<div
		class="hidden basis-1/3 lg:flex flex-col p-4 max-h-screen min-h-screen overflow-y-auto bg-white"
	>
		<div
			class="w-full p-4 border-b-1 border-r-4 border-b-gray-300 border-r-blue-700 bg-gray-100"
		>
			<h2 class="text-gray-900 font-semibold">{{ title }}</h2>
			<p class="text-gray-500 text-sm">
				<span>{{ units }} فصول - </span>
				<span>{{ tests }} اختبار</span>
			</p>
		</div>

		<GradeAsideLink title="الفصل الاول" topic="جمع و طرح الاعداد" />
		<GradeAsideLink title="الفصل الثاني" topic="جمع و طرح الاعداد" />
		<GradeAsideLink title="الفصل الثالث" topic="جمع و طرح الاعداد" />
		<GradeAsideLink title="الفصل الرابع" topic="جمع و طرح الاعداد" />
		<GradeAsideLink title="الفصل الخامس" topic="جمع و طرح الاعداد" />
	</div>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
	units: string;
	tests: string;
}>();
</script>
