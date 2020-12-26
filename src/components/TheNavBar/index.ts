import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({
	name: "the-nav-bar"
})
export default class TheNavBar extends Vue {
	@Prop()
	public registerModalId: string;

	protected get isAuthenticated(): boolean {
		return this.$store.getters.isAuthenticated;
	}

	protected get userInfo() {
		return this.$store.getters.authUser;
	}

	protected onLogOutClick(): void {
		this.$store.commit("deleteUser");
	}
}
