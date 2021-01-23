<template>
	<div class="container">
		<loading-spinner v-if="isLoading">
		</loading-spinner>
		<div v-if="gameVue && !isLoading">
			<b-row>
				<b-col>
					<b-checkbox v-model="showInputs"
								class="text-light">
						Show/Hide Inputs
					</b-checkbox>
					<b-checkbox v-model="gameVue.isFeatured"
								class="text-light">
						Is Featured
					</b-checkbox>
				</b-col>
			</b-row>
			<b-row v-if="showInputs">
				<b-col cols="4"
					   class="mt-3">
					<label v-if="showInputs"
						   class="text-light">
						Title
					</label>
					<b-input v-if=""
							 v-model="gameVue.name"
							 class="bg-dark text-light border-secondary">
					</b-input>
				</b-col>
			</b-row>
			<h1 class="text-light"> {{ gameVue.name }} </h1>
			<hr style="border-color:darkgrey" />
			<b-row v-if="showInputs"
				   class="mt-3">
				<b-col>
					<label v-if="showInputs"
						   class="text-light">
						Images
					</label>
					<b-input v-model="imageUrl"
							 @keyup.enter="onImageAdd"
							 class="bg-dark text-light border-secondary">
					</b-input>
				</b-col>
				<b-col>
					<b-button @click="onImageAdd"
							  class="add-image-margin">
						Add image
					</b-button>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-carousel v-if="gameVue.images.length > 0"
								class="game-details-carousel mt-3"
								controls
								indicators>
						<b-carousel-slide v-for="image in gameVue.images"
										  :key="image.id">
							<template #img>
								<b-img class="d-block"
									   height="350"
									   :src="image.url" />
							</template>
						</b-carousel-slide>
					</b-carousel>
				</b-col>
			</b-row>
			<b-row v-if="showInputs">
				<b-col cols="2">
					<b-dropdown dropup
								class="mt-3"
								:text="chosenState">
						<b-dropdown-item v-for="state in states"
										 :key="state.key"
										 @click="onStateClick(state)">
							{{ state.value }}
						</b-dropdown-item>
					</b-dropdown>
				</b-col>
				<b-col cols="2">
					<b-dropdown dropup
								class="mt-3"
								:text="chosenGenre">
						<b-dropdown-item v-for="genre in genres"
										 :key="genre.key"
										 @click="onGenreClick(genre)">
							{{ genre.value }}
						</b-dropdown-item>
					</b-dropdown>
				</b-col>
			</b-row>
			<b-row v-else
				   class="mt-3">
				<b-col>
					<b-badge variant="info">
						{{ chosenState }}
					</b-badge>
					<b-badge class="ml-2"
							 variant="info">
						{{ chosenGenre }}
					</b-badge>
				</b-col>
			</b-row>
			<b-row v-if="showInputs">
				<b-col cols="2">
					<label v-if="showInputs"
						   class="text-light mt-3">
						Company name
					</label>
					<b-input v-model="gameVue.companyName"
							 class="text-light bg-dark border-secondary">
					</b-input>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<label v-if="showInputs"
						   class="text-light mt-3">
						Description
					</label>
					<b-textarea v-if="showInputs"
								class="float-left bg-dark text-light border-secondary"
								v-model="gameVue.description">
					</b-textarea>
					<div v-else
						 class="text-light keep-new-lines">
						{{ gameVue.description }}
					</div>
				</b-col>
			</b-row>
			<b-row>
				<b-col v-if="showInputs"
					   cols="2">
					<label v-if="showInputs"
						   class="text-light mt-3">
						Price
					</label>
					<b-input class="bg-dark text-light border-secondary"
							 type="number"
							 v-model="gameVue.price">
					</b-input>
				</b-col>
				<b-col v-else>
					<b-button class="mt-3 float-right">
						Buy ${{ gameVue.price }}
					</b-button>
				</b-col>
			</b-row>
			<b-row v-if="showInputs">
				<b-col>
					<label v-if="showInputs"
						   class="text-light">
						Cover Image
					</label>
					<b-input v-model="gameVue.coverImage"
							 class="bg-dark text-light border-secondary">
					</b-input>
				</b-col>
			</b-row>
			<div v-else>
				<b-row>
					<b-col cols="5"></b-col>
					<b-col>
						<label class="text-light">
							Cover preview
						</label>
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="5"></b-col>
					<b-col cols="2">
						<b-card :img-src="gameVue.coverImage"
								img-top
								tag="article"
								img-height="150"
								style="max-height: 200px; background-color: dimgray"
								class="mb-2 scale-content">
							<b-row>
								<b-col>
									<span class="ml-5">
										${{ gameVue.price }}
									</span>
								</b-col>
							</b-row>
						</b-card>
					</b-col>
				</b-row>
			</div>
			<b-row>
				<b-col>
					<b-button variant="primary"
							  class="mt-3 mb-3"
							  @click="onAddGameClick">
						Add game
					</b-button>
				</b-col>
			</b-row>
		</div>
	</div>
</template>

<script src="./index.ts">
</script>
