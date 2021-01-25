<template>
	<div class="container">
		<loading-spinner v-if="isLoading">
		</loading-spinner>
		<ValidationObserver ref="observer">
			<div v-if="gameInput && !isLoading">
				<b-row>
					<b-col>
						<b-checkbox v-model="showInputs"
									class="text-light">
							Show/Hide Inputs
						</b-checkbox>
						<b-checkbox v-model="gameInput.isFeatured"
									class="text-light">
							Is Featured
						</b-checkbox>
					</b-col>
				</b-row>
				<b-row v-if="showInputs">
					<b-col cols="4"
						   class="mt-3">
						<label class="text-light">
							Title
						</label>
						<ValidationProvider name="Title"
											rules="required"
											v-slot="{ errors }">
							<b-input v-model="gameInput.name"
									 class="bg-dark text-light border-secondary">
							</b-input>
							<span id="error"
								  class="text-danger">
								{{ errors[0] }}
							</span>
						</ValidationProvider>
					</b-col>
				</b-row>
				<h1 class="text-light"> {{ gameInput.name }} </h1>
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
						<b-carousel v-if="gameInput.images.length > 0"
									class="game-details-carousel mt-3"
									controls
									indicators>
							<b-carousel-slide v-for="image in gameInput.images"
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
				<div v-if="showInputs"
					 class="container scroll-images mt-3">
					<div v-for="image in gameInput.images"
						 cols="2"
						 class="mt-2 mb-2">
						<b-img :src="image.url"
							   height="150"
							   width="250">
						</b-img>
						<b-icon icon="x-circle-fill"
								scale="1.3"
								variant="danger"
								class="scroll-images-icon cursor-pointer"
								@click="onImageRemove(image)">
						</b-icon>
					</div>
				</div>
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
				<ValidationProvider name="Company Name"
									rules="required"
									v-slot="{ errors }">
					<b-row v-if="showInputs">
						<b-col cols="2">
							<label v-if="showInputs"
								   class="text-light mt-3">
								Company Name
							</label>

							<b-input v-model="gameInput.companyName"
									 class="text-light bg-dark border-secondary">
							</b-input>
						</b-col>
					</b-row>
					<b-row>
						<b-col>
							<span id="error"
								  class="text-danger">
								{{ errors[0] }}
							</span>
						</b-col>
					</b-row>
				</ValidationProvider>
				<b-row>
					<b-col>
						<div v-if="showInputs">
							<label class="text-light mt-3">
								Description
							</label>
							<ValidationProvider name="Description"
												rules="required"
												v-slot="{ errors }">
								<b-textarea rows="20"
											class="float-left bg-dark text-light border-secondary"
											v-model="gameInput.description">
								</b-textarea>
								<span id="error"
									  class="text-dark">
									{{ errors[0] }}
								</span>
							</ValidationProvider>
						</div>
						<div v-else
							 class="text-light keep-new-lines">
							{{ gameInput.description }}
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
						<ValidationProvider name="Price"
											rules="required"
											v-slot="{ errors }">
							<b-input class="bg-dark text-light border-secondary"
									 name="Price"
									 type="number"
									 v-model="gameInput.price">
							</b-input>
							<span id="error"
								  class="text-danger">
								{{ errors[0] }}
							</span>
						</ValidationProvider>
					</b-col>
					<b-col v-else>
						<b-button class="mt-3 float-right">
							Buy ${{ gameInput.price }}
						</b-button>
					</b-col>
				</b-row>
				<b-row v-if="showInputs">
					<b-col>
						<label v-if="showInputs"
							   class="text-light mt-3">
							Cover Image
						</label>
						<ValidationProvider name="Cover Image"
											rules="required"
											v-slot="{ errors }">
							<b-input v-model="gameInput.coverImage"
									 class="bg-dark text-light border-secondary">
							</b-input>
							<span id="error"
								  class="text-danger">
								{{ errors[0] }}
							</span>
						</ValidationProvider>
					</b-col>
				</b-row>
				<div v-else>
					<b-row class="text-center">
						<b-col>
							<label class="text-light">
								Cover preview
							</label>
						</b-col>
					</b-row>
					<b-row>
						<b-col cols="5"></b-col>
						<b-col cols="2">
							<b-card :img-src="gameInput.coverImage"
									img-top
									tag="article"
									img-height="150"
									style="max-height: 200px; background-color: dimgray"
									class="mb-2 scale-content">
								<b-row>
									<b-col>
										<span class="ml-5">
											${{ gameInput.price }}
										</span>
									</b-col>
								</b-row>
							</b-card>
						</b-col>
					</b-row>

				</div>
				<b-row>
					<b-col>
						<b-button v-if="id"
								  variant="primary"
								  class="mt-3 mb-3"
								  @click="onUpdateGameClick">
							Update
						</b-button>
						<b-button v-else
								  variant="primary"
								  class="mt-3 mb-3"
								  @click="onAddGameClick">
							Add game
						</b-button>
					</b-col>
				</b-row>
			</div>
		</ValidationObserver>
	</div>
</template>

<script src="./index.ts">
</script>
