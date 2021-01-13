import { Component, Vue } from "vue-property-decorator";
import * as userTypes from "@/services/UserService";
import { Inject } from 'inversify-props';
import GameCardList from "@/components/GameCardList/index.vue";

@Component({
	components: {
		GameCardList
	},
})
export default class Profile extends Vue {
	@Inject()
	public userService: userTypes.IUserService;

	private m_userVueModel: UserVueModel = {
		username: null,
		email: null,
		fullName: null,
	};

	protected get userVueModel(): UserVueModel {
		return this.m_userVueModel;
	}

	public async mounted(): Promise<void> {
		const userItem: userTypes.UserItem = await this.userService.getUserById(this.$route.params.id);
		this.m_userVueModel = this.convertUserItemToVue(userItem); 
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