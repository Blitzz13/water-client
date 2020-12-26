<template>
	<div class="container">
		<b-row>
			<b-col v-for="game in games">
				<b-card :img-src="game.imageSource"
						:img-alt="game.imageName"
						img-top
						tag="article"
						style="max-width: 20rem;"
						class="mb-2 animate__animated">

					<b-button variant="primary"
							  size="sm"
							  right>
						Check it out
					</b-button>
				</b-card>
			</b-col>
		</b-row>
	</div>
</template>

<script src="./index.ts">
</script>
