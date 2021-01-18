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
			<b-row>
				<pre class="text-light mt-5 float-left">
{{ gameVue.description }}
				</pre>
			</b-row>
			<b-button v-if="!isGameBought"
					  class="float-right"
					  variant="primary"
					  @click="onBuyClick">
				Buy
			</b-button>
			<b-button v-else
					  class="float-right"
					  variant="primary"
					  disabled>
				Owned
			</b-button>

		</div>
	</div>
</template>

<script src="./index.ts">
</script>
