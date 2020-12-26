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
			<login-content @on-user-login="onUserLogin">
			</login-content>
			<hr />
			<register-content>
			</register-content>
		</b-modal>
	</div>
</template>

<script src="./index.ts">
</script>
