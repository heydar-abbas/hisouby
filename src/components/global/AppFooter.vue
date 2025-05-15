<script setup lang="ts">
import { RouterLink } from "vue-router";
import FacebookIcon from "../icons/FacebookIcon.vue";
import TwitterIcon from "../icons/TwitterIcon.vue";
import YoutubeIcon from "../icons/YoutubeIcon.vue";
</script>

<template>
	<div class="bg-gray-900 shadow-sm">
		<div class="w-full md:w-2xl lg:w-4xl xl:w-6xl mx-auto p-4 md:px-0 md:py-8">
			<div class="flex justify-center">
				<RouterLink
					to="/"
					class="text-gray-100 flex items-center space-x-3 rtl:space-x-reverse"
				>
					<span class="text-2xl font-semibold whitespace-nowrap">
						الحيسوبي
					</span>
				</RouterLink>
			</div>
			<hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
			<div class="flex flex-col md:flex-row md:justify-between items-center">
				<span class="block text-sm text-gray-500 sm:text-center">
					صنع بحب بواسطة حيدر عباس - <bdi>&copy; 2025</bdi>
				</span>
				<span class="flex text-gray-500 py-2">
					<RouterLink to="#" class="p-2 mx-2">
						<FacebookIcon class="w-6" />
					</RouterLink>
					<RouterLink to="#" class="p-2 mx-2">
						<TwitterIcon class="w-6" />
					</RouterLink>
					<RouterLink to="#" class="p-2 mx-2">
						<YoutubeIcon class="w-6" />
					</RouterLink>
				</span>
			</div>
		</div>
	</div>
</template>
