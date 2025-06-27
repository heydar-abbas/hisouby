<template>
	<div
		class="w-full md:w-2xl lg:w-4xl xl:w-6xl grid lg:grid-cols-3 gap-6 mx-auto px-4 py-8 md:px-0"
	>
		<GradeSection
			@click="elementarySchool = !elementarySchool"
			:isOpen="elementarySchool"
			title="الابتدائية"
			class="bg-rose-100"
		>
			<GradeLink to="/grade/_1st" title="الصف الاول" />
			<GradeLink to="/grade/_2nd" title="الصف الثاني" />
			<GradeLink to="/grade/_3rd" title="الصف الثالث" />
			<GradeLink to="/grade/_4th" title="الصف الرابع" />
			<GradeLink to="/grade/_5th" title="الصف الخامس" />
			<GradeLink to="/grade/_6th" title="الصف السادس" />
		</GradeSection>

		<GradeSection
			@click="middleSchool = !middleSchool"
			:isOpen="middleSchool"
			title="المتوسطة"
			class="bg-lime-100"
		>
			<GradeLink to="/grade/_7th" title="الصف الاول" />
			<GradeLink to="/grade/_8th" title="الصف الثاني" />
			<GradeLink to="/grade/_9th" title="الصف الثالث" />
		</GradeSection>

		<GradeSection
			@click="highSchool = !highSchool"
			:isOpen="highSchool"
			title="الاعدادية"
			class="bg-blue-100"
		>
			<GradeLink to="/grade/_4th-hs" title="الرابع" />
			<GradeLink to="/grade/_5th-hs" title="الخامس" />
			<GradeLink to="/grade/_6th-hs" title="السادس" />
		</GradeSection>
	</div>
</template>

<script setup lang="ts">
	useHead({
		title: "الحيسوبي - الرئيسية",
	});

	const elementarySchool = ref<boolean>(false);
	const middleSchool = ref<boolean>(false);
	const highSchool = ref<boolean>(false);
</script>
