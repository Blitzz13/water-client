<template>
	<div class="container">
		<b-jumbotron class="jumbotron-image">
		</b-jumbotron>

		<game-card-list :gameItems="featuredGames">
		</game-card-list>

		<loading-spinner v-if="isLoading">
		</loading-spinner>
	</div>
</template>

<script src="./index.ts">
</script>
