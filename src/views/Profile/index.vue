<template>
	<div class="container">
		<div>
			<b-row class="mt-2">
				<b-col>
					<b-form-input :value="userVueModel.username"
								  disabled>
					</b-form-input>
				</b-col>
				<b-col>
					<b-form-input :value="userVueModel.email"
								  disabled>
					</b-form-input>
				</b-col>
				<b-col>
					<b-form-input v-model="userVueModel.fullName">
					</b-form-input>
				</b-col>
			</b-row>
			<hr />
			<game-card-list class="mt-4"></game-card-list>
		</div>
	</div>
</template>

<script src="./index.ts">
</script>
