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

	protected get isAuthenticated(): boolean {
		if (this.$store.getters) {
			return this.$store.getters.isAuthenticated;
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

	protected onTestClick(): void {
		this.userService.test();
	}
}
