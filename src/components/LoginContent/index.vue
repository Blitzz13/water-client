<template>
	<div class="container">
		<h3>
			Login with existing account
		</h3>
		<b-row>
			<b-col>
				<b-form-group>
					<label :for="labelIds.usernameId">
						Username
					</label>
					<b-form-input :id="labelIds.usernameId"
								  placeholder="johndoe"
								  v-model="loginModel.username">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<b-form-group>
					<label :for="labelIds.passwordId">
						Password
					</label>
					<b-form-input :id="labelIds.passwordId"
								  type="password"
								  v-model="loginModel.password"
								  placeholder="**********"
								  @keyup.enter="onLoginClick">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="5">
			</b-col>
			<b-col cols="2">
				<b-button size="lg"
						  @click="onLoginClick"
						  variant="dark">
					Log in
				</b-button>
			</b-col>
			<b-col cols="4">
			</b-col>
		</b-row>
	</div>
</template>

<script src="./index.ts">
</script>
