<template>
	<div class="container">
		<b-navbar toggleable="lg" type="dark" variant="dark">
			<b-link :to="{ name:'home' }"
					router-tag="b-navbar-brand"
					href="#"
					class="cursor-pointer">
				Home
			</b-link>
			<b-navbar-toggle target="nav-collapse">
			</b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="ml-auto">
					<b-nav-form>
						<b-form-input size="sm"
									  class="mr-2 bg-dark text-light border-secondary search"
									  placeholder="Search"
									  v-model="searchString"
									  @keyup.enter="onSearch">
						</b-form-input>
						<b-button size="sm"
								  class="mr-2"
								  variant="light"
								  @click="onSearch">
							Search
						</b-button>
						<b-link v-if="isAdmin"
								router-tag="b-button"
								class="mr-2 btn-sm"
								:to="{ name:'add-game' }">
							Create game
						</b-link>
					</b-nav-form>

					<b-nav-item-dropdown right v-if="isAuthenticated">
						<template #button-content>
							<em>
								{{userInfo.username}}
							</em>
						</template>
						<b-link :to="{ name:'profile', params: { id: userInfo.id } }"
								router-tag="b-dropdown-item">
							Profile
						</b-link>
						<b-dropdown-item @click="onLogOutClick">
							Log Out
						</b-dropdown-item>
					</b-nav-item-dropdown>

					<b-button v-if="!isAuthenticated"
							  v-b-modal="registerModalId"
							  variant="primary"
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
