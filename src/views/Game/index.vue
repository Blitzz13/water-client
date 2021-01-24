<template>
	<div class="container">
		<loading-spinner v-if="isLoading">
		</loading-spinner>
		<div v-if="gameVue">
			<h1 class="text-light"> {{ gameVue.name }}</h1>
			<hr style="border-color:darkgrey" />
			<b-carousel class="game-details-carousel"
						controls
						indicators>
				<b-carousel-slide v-for="image in gameVue.images" :key="image.id">
					<template #img>
						<b-img class="d-block"
							   height="350"
							   :src="image.url" />
					</template>
				</b-carousel-slide>
			</b-carousel>
			<b-row class="mt-5">
				<b-col>
					<b-badge variant="info">
						{{ gameVue.state }}
					</b-badge>
					<b-badge class="ml-2"
							 variant="info">
						{{ gameVue.genre }}
					</b-badge>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<div class="text-light keep-new-lines mt-2">
						{{ gameVue.description }}
					</div>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-link class="float-right mt-2 mb-3 ml-2 bg-info"
							router-tag="b-button"
							:to="{name: 'update-game',params:{id: gameId}}">
						Edit
					</b-link>
					<b-button v-if="!isGameBought"
							  class="float-right mt-2 mb-3"
							  variant="primary"
							  @click="onBuyClick">
						Buy
					</b-button>
					<b-button v-else
							  class="float-right mt-2 mb-2"
							  variant="primary"
							  disabled>
						Owned
					</b-button>
				</b-col>
			</b-row>
		</div>
	</div>
</template>

<script src="./index.ts">
</script>
