<template>
	<table class="w-full text-center">
		<thead>
			<tr>
				<th
					v-for="(th, index) in tHeades"
					:key="index"
					v-text="th"
					class="p-2 border-1 border-gray-400 bg-amber-300"
				></th>
			</tr>
		</thead>
		<tbody>
			<slot></slot>
		</tbody>
	</table>
</template>

<script setup lang="ts">
	defineProps<{
		tHeades: string[];
	}>();
</script>
