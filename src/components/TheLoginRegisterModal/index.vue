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
			<loading-spinner v-if="showSpinner"></loading-spinner>
			<login-content @user-login="onUserLogin"
						   @loading="onLoading"
						   @finish-loading="onFinishLoading">
			</login-content>
			<hr />
			<register-content @loading="onLoading"
							  @user-register="onUserRegister">
			</register-content>
		</b-modal>
	</div>
</template>

<script src="./index.ts">
</script>
