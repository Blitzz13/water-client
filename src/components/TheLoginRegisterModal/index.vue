<template>
	<div class="container">
		<b-modal :id="modalId"
				 v-model="showModal"
				 size="lg"
				 header-bg-variant="dark"
				 header-text-variant="light"
				 body-bg-variant="secondary"
				 body-text-variant="light"
				 footer-bg-variant="dark"
				 footer-text-variant="light"
				 :hide-footer="true"
				 centered
				 no-close-on-backdrop>
			<template #modal-title>
				{{ modalTitle }}
			</template>
			<loading-spinner v-if="showSpinner"></loading-spinner>
			<div v-if="!register">
				<login-content @user-login="onUserLogin"
							   @loading="onLoading"
							   @finish-loading="onFinishLoading">
				</login-content>
				<b-link @click="onChangeContentClick"
						class="text-dark">
					Register new account
				</b-link>
			</div>
			<div v-else>
				<register-content @loading="onLoading"
								  @finish-loading="onFinishLoading"
								  @user-register="onUserRegister">
				</register-content>
				<b-link @click="onChangeContentClick"
						class="text-dark">
					Login with existing account
				</b-link>
			</div>
		</b-modal>
	</div>
</template>

<script src="./index.ts">
</script>
