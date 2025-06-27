<template>
	<div class="bg-gray-900">
		<div class="w-full md:w-2xl lg:w-4xl xl:w-6xl mx-auto md:py-4">
			<div class="flex justify-center p-4 border-b-2 border-gray-800">
				<NuxtLink to="/" class="text-gray-100 flex items-center">
					<span class="text-2xl font-semibold"> الحيسوبي </span>
				</NuxtLink>
			</div>
			<div
				class="flex flex-col md:flex-row md:justify-between items-center p-4"
			>
				<div class="block text-sm text-gray-500 sm:text-center mb-2 md:mb-0">
					صنع بحب بواسطة حيدر عباس - <bdi>&copy; 2025</bdi>
				</div>
				<div class="flex text-gray-500">
					<NuxtLink to="https://www.facebook.com/hisouby" class="p-2 mx-2">
						<IconFacebook class="w-6" />
					</NuxtLink>

					<NuxtLink to="https://x.com/h_a_dev" class="p-2 mx-2">
						<IconTwitter class="w-6" />
					</NuxtLink>

					<NuxtLink
						to="https://www.linkedin.com/in/heydarabbas"
						class="p-2 mx-2"
					>
						<IconLinkedIn class="w-6" />
					</NuxtLink>

					<NuxtLink
						to="https://www.youtube.com/@HeydarAbbas41"
						class="p-2 mx-2"
					>
						<IconYoutube class="w-6" />
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>
