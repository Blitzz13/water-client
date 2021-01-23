<template>
	<div class="container">
		<b-row>
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
					<b-row>
						<b-col>
							<span class="ml-5">
								${{ game.price }}
							</span>
						</b-col>
					</b-row>
				</b-card>
			</b-col>
		</b-row>
	</div>
</template>

<script src="./index.ts">
</script>
