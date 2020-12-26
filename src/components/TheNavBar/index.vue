<template>
	<div class="container">
		<b-navbar toggleable="lg" type="dark" variant="dark">
			<b-link :to="{ name:'home' }"
					router-tag="b-navbar-brand"
					href="#">
				Home
			</b-link>
			
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="ml-auto">
					<b-nav-form>
						<b-form-input size="sm"
									  class="mr-2 bg-dark"
									  style="border-top:0px; border-left:0px; border-right:0px; border-bottom: 1px"
									  placeholder="Search">
						</b-form-input>
						<b-button size="sm"
								  class="mr-2"
								  variant="light"
								  type="submit">
							Search
						</b-button>
					</b-nav-form>

					<b-nav-item-dropdown right v-if="isAuthenticated">
						<template #button-content>
							<em>
								{{userInfo.username}}
							</em>
						</template>
						<b-dropdown-item>
							Profile
						</b-dropdown-item>
						<b-dropdown-item @click="onLogOutClick">
							Log Out
						</b-dropdown-item>
					</b-nav-item-dropdown>

					<b-button v-if="!isAuthenticated"
							  v-b-modal="registerModalId"
							  size="sm">
						Log in
					</b-button>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script src="./index.ts">
</script>
