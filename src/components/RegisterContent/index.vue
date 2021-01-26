<template>
	<div class="container">
		<b-row>
			<b-col>
				<b-form-group>
					<label :for="labelIds.usernameId">
						Username
					</label>
					<b-form-input :id="labelIds.usernameId"
								  name="Username"
								  v-validate="'required|min:5'"
								  placeholder="johndoe"
								  v-model="registerModel.username">
					</b-form-input>
					<span class="text-dark">
						{{ errors.first('Username') }}
					</span>
				</b-form-group>
			</b-col>
			<b-col>
				<b-form-group>
					<label :for="labelIds.emailId">
						Email
					</label>
					<b-form-input :id="labelIds.emailId"
								  name="Email"
								  v-validate="'required|email'"
								  placeholder="john@doe.jd"
								  v-model="registerModel.email">
					</b-form-input>
					<span class="text-dark">
						{{ errors.first('Email') }}
					</span>
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
								  name="Password"
								  v-validate="'required|min:5'"
								  type="password"
								  placeholder="**********"
								  v-model="registerModel.password">
					</b-form-input>
					<span class="text-dark">
						{{ errors.first('Password') }}
					</span>
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
