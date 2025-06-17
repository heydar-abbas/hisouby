<template>
	<div class="w-full border-b-gray-300 border-b-2 py-4">
		<div class="flex lg:justify-evenly py-4 lg:w-2xl mx-auto">
			<div class="flex flex-1/3 justify-center">
				<img
					class="rounded-4xl p-2 w-24 lg:w-40 bg-gray-300"
					:src="userInfo?.avatar || '/images/no-image.png'"
					alt="User Avatar"
				/>
			</div>
	
			<div class="flex-2/3 flex flex-col items-center justify-center">
				<h2 class="text-center text-gray-900 font-semibold mb-4">
					{{ userInfo?.name || "بلا اسم" }}
				</h2>
	
				<UiEditProfileBtn />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	userInfo: any;
}>();
</script>
