<template>
	<!-- All grade units -->
	<GradeArticle title="الصف الثالث الابتدائية">
		<!-- Quiz Guideline -->
		<QuizGuideline />
		<!-- /Quiz Guideline -->

		<!-- Units -->
		<section class="grid lg:grid-cols-2 gap-6">
			<UnitCard title="الفصل الاول: الأعداد حتى ٩٩٩٩">
				<QuizLink
					href="/grade/_3rd/unit1/quiz1/q1"
					:degree="grades?.g3?.unit1?.quiz1"
				/>
				<QuizLink
					href="/grade/_3rd/unit1/quiz2/q1"
					:degree="grades?.g3?.unit1?.quiz2"
				/>
				<QuizLink
					href="/grade/_3rd/unit1/quiz3/q1"
					:degree="grades?.g3?.unit1?.quiz3"
				/>
				<QuizLink
					href="/grade/_3rd/unit1/quiz4/q1"
					:degree="grades?.g3?.unit1?.quiz4"
				/>
				<QuizLink
					href="/grade/_3rd/unit1/quiz5/q1"
					:degree="grades?.g3?.unit1?.quiz5"
				/>
				<QuizLink
					href="/grade/_3rd/unit1/quiz6/q1"
					:degree="grades?.g3?.unit1?.quiz6"
				/>
			</UnitCard>

			<UnitCard title="الفصل الثاني">
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
			</UnitCard>

			<UnitCard title="الفصل الثالث">
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
			</UnitCard>

			<UnitCard title="الفصل الرابع">
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
			</UnitCard>

			<UnitCard title="الفصل الخامس">
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
			</UnitCard>

			<UnitCard title="الفصل السادس">
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
			</UnitCard>

			<UnitCard title="الفصل السابع">
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
			</UnitCard>

			<UnitCard title="الفصل الثامن">
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
			</UnitCard>

			<UnitCard title="الفصل التاسع">
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
			</UnitCard>
		</section>
		<!-- /Units -->
	</GradeArticle>
	<!-- /All grade units -->
</template>

<script setup lang="ts">
	definePageMeta({
		layout: "3rd-grade",
	});

	useHead({
		title: "الثالث الابتدائية | الحيسوبي",
	});

	const { $userStore } = useNuxtApp();
	const grades = computed(() => $userStore?.userInfo?.grades);
</script>
