<template>
	<div
		class="flex flex-col items-center justify-center p-4 md:py-10 mx-auto w-full min-h-dvh md:w-2xl lg:w-4xl xl:w-6xl sm:h-auto"
	>
		<div class="w-full sm:w-md">
			<!-- Logo -->
			<div class="flex items-center justify-center mb-8 p-4">
				<AppLogo class="text-4xl text-gray-900" />
			</div>
			<!-- /Logo -->
			<div class="p-4">
				<p
					class="text-xl text-center leading-10 mb-8 text-gray-900 md:text-2xl"
				>
					قم بتسجيل الدخول كي تتمكن من حفظ تقدمك
				</p>

				<!-- Signin-up with google -->
				<SignWithGoogle @handleSignIn="handleSignInWithGoogle" />
				<!-- /Signin-up with google -->

				<!-- Signin-up with facebook -->
				<!-- <SignWithFacebook @handleSignIn="handleSignInWithFacebook" /> -->
				<!-- /Signin-up with facebook -->
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	useHead({
		title: "تسجيل الدخول",
	});

	definePageMeta({
		layout: "auth",
	});

	const { $authStore } = useNuxtApp();

	function handleSignInWithGoogle() {
		$authStore.signInWithGoogle();
	}

	// function handleSignInWithFacebook() {
	// 	console.log("Log in with facebook");
	// }
</script>
