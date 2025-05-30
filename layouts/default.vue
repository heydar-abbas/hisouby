<template>
	<div>
		<header>
			<AppNav />
		</header>

		<main class="min-h-screen bg-gray-50">
			<slot></slot>
		</main>

		<footer>
			<AppFooter />
		</footer>
	</div>
</template>
