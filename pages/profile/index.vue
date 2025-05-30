<template>
	<div class="w-full p-4 md:w-2xl lg:w-4xl xl:w-6xl mx-auto md:p-0">
		<!-- Notification -->
		<UiSuccessMsg v-show="$userStore.successMsg" :msg="$userStore.successMsg" />

		<!-- User info -->
		<UserInfo :userInfo="userInfo" />

		<!-- User achievements -->
		<div class="py-6">
			<!-- Level -->
			<div class="flex flex-wrap justify-center gap-6 mb-6">
				<ul class="basis-80 flex flex-col gap-4">
					<GradeLevelCounter
						:level="proficient"
						title="متمكن"
						levelColor="proficient"
					/>

					<GradeLevelCounter
						:level="familiar"
						title="على دراية"
						levelColor="familiar"
					/>

					<GradeLevelCounter
						:level="attempted"
						title="حاول"
						levelColor="attempted"
					/>
				</ul>

				<GradeLevelProgressBar title="المستوى" :value="60" />
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
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	middleware: ["auth"],
});

useHead({
	title: "الملف الشخصي",
});

const { $userStore } = useNuxtApp();

let userInfo = ref<any>();
let proficient = ref<number>(0);
let familiar = ref<number>(0);
let attempted = ref<number>(0);

onMounted(() => {
	userInfo.value = $userStore?.userInfo || null;
	proficient.value = $userStore?.userInfo?.level?.proficient || 0;
	familiar.value = $userStore?.userInfo?.level?.familiar || 0;
	attempted.value = $userStore?.userInfo?.level?.attempted || 0;
});
</script>
