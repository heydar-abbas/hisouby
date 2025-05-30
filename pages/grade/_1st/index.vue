<template>
	<div class="w-full lg:flex p-4 md:p-0">
		<GradeAside title="الصف الاول الابتدائية" units="5" tests="25" />

		<div class="lg:basis-2/3 w-full h-fit md:w-2xl mx-auto lg:p-4">
			<h1 class="text-3xl font-semibold py-8 text-center lg:text-start">
				الصف الاول الابتدائية
			</h1>

			<div
				class="flex flex-wrap justify-center md:justify-start md:items-start gap-6"
			>
				<UnitCard title="الفصل الاول">
					<TestLink href="/grade/_1st/quiz1/q1" />
					<TestLink href="/grade/_1st/quiz2/q1" />
					<!-- <TestLink href="/grade/_1st/quiz1/q3" />
					<TestLink href="/grade/_1st/quiz1/q4" />
					<TestLink href="/grade/_1st/quiz1/q5" />
					<TestLink href="/grade/_1st/quiz1/q6" /> -->
				</UnitCard>

				<UnitCard title="الفصل الثاني">
					<TestLink href="#" />
					<TestLink href="#" />
					<TestLink href="#" />
					<TestLink href="#" />
					<TestLink href="#" />
				</UnitCard>

				<UnitCard title="الفصل الثالث">
					<TestLink href="#" />
					<TestLink href="#" />
					<TestLink href="#" />
					<TestLink href="#" />
					<TestLink href="#" />
				</UnitCard>

				<UnitCard title="الفصل الرابع">
					<TestLink href="#" />
					<TestLink href="#" />
					<TestLink href="#" />
					<TestLink href="#" />
					<TestLink href="#" />
				</UnitCard>

				<UnitCard title="الفصل الخامس">
					<TestLink href="#" />
					<TestLink href="#" />
					<TestLink href="#" />
					<TestLink href="#" />
					<TestLink href="#" />
				</UnitCard>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
useHead({
	title: "الصف الاول الابتدائية"
});
</script>
