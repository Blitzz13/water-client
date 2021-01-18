<template>
	<div class="container">
		<div v-if="!isLoading">
			<b-row class="mt-2">
				<b-col>
					<b-form-input :value="userVueModel.username"
								  disabled>
					</b-form-input>
				</b-col>
				<b-col>
					<b-form-input :value="userVueModel.email"
								  :disabled="!isOwner">
					</b-form-input>
				</b-col>
				<b-col>
					<b-form-input v-model="userVueModel.fullName"
								  :disabled="!isOwner">
					</b-form-input>
				</b-col>
			</b-row>
			<hr />
			<game-card-list class="mt-4"
							:gameItems="ownedGames"></game-card-list>
		</div>
		<loading-spinner v-else>
		</loading-spinner>
	</div>
</template>

<script src="./index.ts">
</script>
