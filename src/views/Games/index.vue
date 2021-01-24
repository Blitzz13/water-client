<template>
	<div class="container">
		<game-card-list :gameItems="games"
						class="mt-3">
		</game-card-list>

		<loading-spinner v-if="isLoading">
		</loading-spinner>
	</div>
</template>

<script src="./index.ts">
</script>
