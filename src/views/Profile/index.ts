import { Component, Vue } from "vue-property-decorator";
import * as userTypes from "@/services/UserService";
import * as gameTypes from "@/services/GameService";
import { Inject } from 'inversify-props';
import GameCardList from "@/components/GameCardList/index.vue";
import BaseView from "@/views/BaseView";

@Component({
	components: {
		GameCardList
	},
})
export default class Profile extends BaseView {
	@Inject()
	public userService: userTypes.IUserService;

	@Inject()
	public gameService: gameTypes.IGameService;

	private m_userVueModel: UserVueModel = {
		username: null,
		email: null,
		fullName: null,
	};

	private m_ownedGames: gameTypes.GameItem[] = [];

	protected get userVueModel(): UserVueModel {
		return this.m_userVueModel;
	}

	protected get ownedGames(): gameTypes.GameItem[] {
		return this.m_ownedGames;
	}

	protected get isOwner(): boolean {
		if (this.$store.getters.isAuthenticated) {
			return this.$store.getters.authUser.id === this.$route.params.id;
		}

		return false;
	}

	public async mounted(): Promise<void> {
		try {
			this.isLoading = true;
			const userItem: userTypes.UserItem = await this.userService.getUserById(this.$route.params.id);
			this.m_userVueModel = this.convertUserItemToVue(userItem);
			this.m_ownedGames = await this.gameService.listUserGames(this.$route.params.id);
		} catch {
			this.$router.push({ name: "404" });
		} finally {
			this.isLoading = false;
		}
	}

	private convertUserItemToVue(value: userTypes.UserItem): UserVueModel {
		return {
			username: value.username,
			email: value.email,
			fullName: value.fullName,
		}
	}
}

interface UserVueModel {
	username: string;
	email?: string;
	fullName?: string;
}