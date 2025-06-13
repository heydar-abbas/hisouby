<template>
	<div
		class="flex flex-col items-center justify-center px-4 md:px-0 py-8 md:py-0 mx-auto w-full md:w-2xl lg:w-4xl xl:w-6xl sm:h-auto md:h-screen"
	>
		<div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
			<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
				<h1
					class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
				>
					قم بتسجيل الدخول
				</h1>

				<!-- Signin-up with google -->
				<SignWithGoogle @handleSignIn="handleSignInWithGoogle" />

				<!-- Signin-up with facebook -->
				<SignWithFacebook @handleSignIn="handleSignInWithFacebook" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
useHead({
	title: "تسجيل الدخول"
});
const { $authStore } = useNuxtApp();

function handleSignInWithGoogle() {
	$authStore.signInWithGoogle();
}

function handleSignInWithFacebook() {
	console.log("Log in with facebook");
}
</script>
