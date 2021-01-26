<template>
	<div class="container">
		<ValidationObserver ref="observer">
			<b-row>
				<b-col>
					<b-form-group>
						<label :for="labelIds.usernameId">
							Username
						</label>
						<ValidationProvider name="Username"
											rules="required"
											v-slot="{ errors }">
							<b-form-input :id="labelIds.usernameId"
										  name="Username"
										  placeholder="johndoe"
										  v-model="loginModel.username">
							</b-form-input>
							<span id="error"
								  class="text-dark">
								{{ errors[0] }}
							</span>
						</ValidationProvider>
					</b-form-group>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-form-group>
						<label :for="labelIds.passwordId">
							Password
						</label>
						<ValidationProvider name="Password"
											rules="required"
											v-slot="{ errors }">
							<b-form-input :id="labelIds.passwordId"
										  name="Password"
										  type="password"
										  v-model="loginModel.password"
										  placeholder="**********"
										  @keyup.enter="onLoginClick">
							</b-form-input>
							<span class="text-dark">
								{{ errors[0] }}
							</span>
						</ValidationProvider>
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
		</ValidationObserver>
	</div>
</template>

<script src="./index.ts">
</script>
