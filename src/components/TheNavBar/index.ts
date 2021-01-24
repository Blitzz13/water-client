import * as userTypes from "@/services/UserService";
import { Inject } from 'inversify-props';
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
	name: "the-nav-bar"
})
export default class TheNavBar extends Vue {
	@Prop()
	public registerModalId: string;

	@Inject()
	public userService: userTypes.IUserService;

	private m_searchString: string = null;

	protected get searchString(): string {
		return this.m_searchString;
	}

	protected set searchString(value: string) {
		this.m_searchString = value;
	}

	protected get isAuthenticated(): boolean {
		if (this.$store.getters) {
			return this.$store.getters.isAuthenticated;
		}

		return false;
	}

	protected get isAdmin(): boolean {
		if (this.$store.getters) {
			return this.$store.getters.isAdmin;
		}

		return false;
	}

	protected get userInfo(): userTypes.AuthenticateResponse {
		if (this.$store.getters) {
			return this.$store.getters.authUser;
		}

		return null;
	}

	protected onLogOutClick(): void {
		this.$store.commit("deleteUser");
	}

	protected onSearch(): void {
		this.$router.push({ name: "games", query: { search: this.m_searchString } });
	}

	protected onTestClick(): void {
		this.userService.test();
	}
}
