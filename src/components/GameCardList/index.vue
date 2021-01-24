<template>
	<div class="container">
		<b-row v-if="vueGameItems.length > 0">
			<b-col v-for="game in vueGameItems"
				   :key="game.id"
				   cols="2">
				<b-card :img-src="game.coverImage"
						img-top
						tag="article"
						img-height="150"
						style="max-height: 200px; background-color: dimgray"
						class="mb-2 scale-content"
						@click="onGameDetailsClick(game.id)">
					<b-row class="text-center">
						<b-col>
							<span v-if="game.price !== 0">
								${{ game.price }}
							</span>
							<span v-else>
								Free
							</span>
						</b-col>
					</b-row>
				</b-card>
			</b-col>
		</b-row>
		<h1 v-else
			class="text-light text-center mt-5">
			No games found
		</h1>
	</div>
</template>

<script src="./index.ts">
</script>
