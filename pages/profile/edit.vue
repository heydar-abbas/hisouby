<template>
	<div class="w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto p-4 md:p-0">
		<form @submit.prevent="submitUpdate" class="w-full mx-auto md:w-80">
			<div class="relative flex flex-col items-center py-4">
				<UiImageInput
					@click="avatarListDropDown = !avatarListDropDown"
					:src="form.avatar"
					alt="User avatar"
				/>
				<!-- List of avatars -->
				<ProfileAvatarList @passAvatar="changeAvatar($event)" />
			</div>

			<div>
				<UiTextInput
					class="mt-1 block w-full py-2 px-4"
					v-model="form.name"
					placeholder="اكتب اسمك..."
				/>
			</div>
			<div class="flex items-center gap-4 my-4">
				<UiPrimaryButton type="submit"> حفظ </UiPrimaryButton>
				<UiSecondaryButton>
					<NuxtLink to="/profile" class="cursor-default"> إلغاء </NuxtLink>
				</UiSecondaryButton>
			</div>
		</form>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		middleware: "auth",
	});

	useHead({
		title: "تعديل الملف الشخصي",
	});

	const { $userStore } = useNuxtApp();
	const { avatarListDropDown, userInfo } = storeToRefs($userStore);

	const form = reactive({
		name: "",
		avatar: "",
	});

	onMounted(() => {
		form.name = userInfo?.value.name || "";
		form.avatar = userInfo?.value.avatar || "";
	});

	function changeAvatar(event: any) {
		form.avatar = `/images/avatars/${event}`;
	}

	function submitUpdate() {
		$userStore.updateUser({
			name: form.name,
			avatar: form.avatar,
		});
		navigateTo("/profile");
	}

	onUnmounted(() => {
		avatarListDropDown.value = false;
	});
</script>
