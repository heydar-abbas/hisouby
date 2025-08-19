<template>
	<div>
		<header>
			<AppNav />
		</header>

		<main class="min-h-[calc(100dvh-228px)]">
			<slot></slot>
		</main>

		<footer>
			<AppFooter />
		</footer>
	</div>
</template>
