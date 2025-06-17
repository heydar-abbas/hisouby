<template>
	<nav class="bg-gray-900 border-gray-200">
		<div
			class="w-full md:w-2xl lg:w-4xl xl:w-6xl flex flex-wrap items-center justify-between mx-auto p-4 md:px-0"
		>
			<!-- Logo -->
			<AppLogo />
			<!-- /Logo -->
			<!-- Signin -->
			<NuxtLink
				v-if="!$authStore.isLoggedIn"
				to="/auth/signin"
				class="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
			>
				تسجيل الدخول
			</NuxtLink>
			<!-- /Signin -->
			<!-- User Dropdown Menu -->
			<div
				v-if="$authStore.isLoggedIn"
				class="relative flex items-center md:order-2 space-x-3 md:space-x-0"
			>
				<button
					type="button"
					@click="isUserMenuOpen = !isUserMenuOpen"
					class="flex text-sm focus:ring-4 focus:ring-gray-600 rounded-lg cursor-pointer"
				>
					<img class="w-8 h-8" :src="avatar" alt="user photo" />
				</button>
				<!-- Dropdown Menu -->
				<div
					v-show="isUserMenuOpen"
					class="absolute top-6 left-0 z-50 w-72 my-4 text-base list-none divide-y rounded-lg shadow-sm bg-gray-700 divide-gray-600"
				>
					<div class="px-4 py-3">
						<span class="block text-sm text-gray-100" v-text="name"></span>
						<span
							class="block text-sm truncate text-gray-400"
							v-text="email"
						></span>
					</div>
					<ul class="py-2">
						<li>
							<NuxtLink
								@click="isUserMenuOpen = !isUserMenuOpen"
								to="/profile"
								class="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-gray-100"
							>
								الصفحة الشخصية
							</NuxtLink>
						</li>
						<li>
							<div
								@click="signOut"
								class="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-gray-100 cursor-pointer"
							>
								تسجيل خروج
							</div>
						</li>
					</ul>
				</div>
				<!-- /Dropdown Menu -->
			</div>
			<!-- /User Dropdown Menu -->
		</div>
	</nav>
</template>

<script setup lang="ts">
const { $authStore, $userStore } = useNuxtApp();
const { userInfo } = storeToRefs($userStore);
const isUserMenuOpen = ref(false);

const avatar = computed(() => userInfo.value?.avatar || "/images/no-image.png");
const name = computed(
	() => userInfo.value?.name || userInfo.value?.email?.split("@")[0]
);
const email = computed(() => userInfo.value?.email || "yourEmail@mail");

onUnmounted(() => {
	isUserMenuOpen.value = false;
});

function signOut() {
	$authStore.handleSignOut();
	isUserMenuOpen.value = false;
}
</script>
