<script setup lang="ts"></script>

<template>
	<div class="w-full lg:flex p-4 md:p-0">
		<GradeAside title="الصف الثالث المتوسطة" units="5" tests="25" />

		<div class="lg:basis-2/3 w-full h-fit md:w-2xl mx-auto lg:p-4">
			<h1 class="text-3xl font-semibold py-8 text-center lg:text-start">
				الصف الثالث المتوسطة
			</h1>

			<div
				class="flex flex-wrap justify-center md:justify-start md:items-start gap-6"
			>
				<UnitCard title="الفصل الاول">
					<TestLink />
					<TestLink />
					<TestLink />
					<TestLink />
					<TestLink />
				</UnitCard>

				<UnitCard title="الفصل الثاني">
					<TestLink />
					<TestLink />
					<TestLink />
					<TestLink />
					<TestLink />
				</UnitCard>

				<UnitCard title="الفصل الثالث">
					<TestLink />
					<TestLink />
					<TestLink />
					<TestLink />
					<TestLink />
				</UnitCard>

				<UnitCard title="الفصل الرابع">
					<TestLink />
					<TestLink />
					<TestLink />
					<TestLink />
					<TestLink />
				</UnitCard>

				<UnitCard title="الفصل الخامس">
					<TestLink />
					<TestLink />
					<TestLink />
					<TestLink />
					<TestLink />
				</UnitCard>
			</div>
		</div>
	</div>
</template>
