<template>
	<div class="relative w-full p-4 md:w-2xl lg:w-4xl xl:w-6xl mx-auto md:p-0">
		<!-- Notification -->
		<UiSuccessMsg v-show="$userStore.successMsg" :msg="$userStore.successMsg" />
		<!-- /Notification -->

		<!-- User info -->
		<UserInfo :userInfo="userInfo" />
		<!-- /User info -->

		<!-- User achievements -->
		<div class="">
			<div class="w-full">
				<div
					class="grid grid-cols-1 md:grid-cols-2 p-4 md:px-0 lg:w-2xl mx-auto"
				>
					<!-- Level ProgressBar -->
					<GradeLevelProgressBar :value="50" />
					<!-- /Level ProgressBar -->

					<!-- Degree Counter -->
					<ul class="p-4 flex flex-wrap gap-2">
						<GradeDegreeCounter
							:degreeCount="excellent"
							title="ممتاز"
							degree="excellent"
						/>

						<GradeDegreeCounter :degreeCount="good" title="جيد" degree="good" />

						<GradeDegreeCounter
							:degreeCount="poor"
							title="ضعيف"
							degree="poor"
						/>
					</ul>
					<!-- /Degree Counter -->
				</div>
			</div>

			<!-- Grads -->
			<ProfileGradesCard>
				<ProfileGradeList badgeImage="" title="الاول ابتدائية" />
				<ProfileGradeList badgeImage="" title="الثاني ابتدائية" />
				<ProfileGradeList badgeImage="" title="الثالث ابتدائية" />
				<ProfileGradeList badgeImage="" title="الرابع ابتدائية" />
				<ProfileGradeList badgeImage="" title="الخامس ابتدائية" />
				<ProfileGradeList badgeImage="" title="السادس ابتدائية" />
				<ProfileGradeList badgeImage="" title="الاول متوسطة" />
				<ProfileGradeList badgeImage="" title="الثاني متوسطة" />
				<ProfileGradeList badgeImage="" title="الثالث متوسطة" />
				<ProfileGradeList badgeImage="" title="الرابع اعدادي" />
				<ProfileGradeList badgeImage="" title="الخامس اعدادي" />
				<ProfileGradeList badgeImage="" title="السادس اعدادي" />
			</ProfileGradesCard>
			<!-- /Grads -->
		</div>
		<!-- /User achievements -->
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		middleware: "auth",
	});

	useHead({
		title: "الملف الشخصي",
	});

	const { $userStore } = useNuxtApp();

	let userInfo = ref<any>();
	let excellent = ref<number>(0);
	let good = ref<number>(0);
	let poor = ref<number>(0);

	onMounted(() => {
		userInfo.value = $userStore?.userInfo || null;
		excellent.value = userInfo.value?.degreeCounter?.excellent || 0;
		good.value = userInfo.value?.degreeCounter?.good || 0;
		poor.value = userInfo.value?.degreeCounter?.poor || 0;
	});
</script>
