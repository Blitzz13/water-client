<template>
	<div class="container">
		<h3>
			Register new account
		</h3>
		<b-row>
			<b-col>
				<b-form-group>
					<label :for="labelIds.usernameId">
						Username
					</label>
					<b-form-input :id="labelIds.usernameId"
								  placeholder="johndoe"
								  v-model="registerModel.username">
					</b-form-input>
				</b-form-group>
			</b-col>
			<b-col>
				<b-form-group>
					<label :for="labelIds.emailId">
						Email
					</label>
					<b-form-input :id="labelIds.emailId"
								  placeholder="john@doe.jd"
								  v-model="registerModel.email">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<b-form-group>
					<label :for="labelIds.fullNameId">
						Full Name
					</label>
					<b-form-input id="labelIds.fullNameId"
								  placeholder="john doe"
								  v-model="registerModel.fullName">
					</b-form-input>
				</b-form-group>
			</b-col>
			<b-col>
				<b-form-group>
					<label :for="labelIds.passwordId">
						Password
					</label>
					<b-form-input :id="labelIds.passwordId"
								  type="password"
								  placeholder="**********"
								  v-model="registerModel.password">
					</b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="5">
			</b-col>
			<b-col cols="2">
				<b-button size="lg"
						  @click="onSubmitClick"
						  variant="dark">
					Submit
				</b-button>
			</b-col>
			<b-col cols="4">
			</b-col>
		</b-row>
	</div>
</template>

<script src="./index.ts">
</script>
