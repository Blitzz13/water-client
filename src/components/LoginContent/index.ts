import * as userTypes from "@/services/UserService";
import GeneralUtils from "@/utils/generalUtils";
import { Inject } from 'inversify-props';
import { Component, Vue } from "vue-property-decorator";

@Component({
	name: "login-content",
})
export default class LoginContent extends Vue {
	@Inject()
	public userService: userTypes.IUserService;

	private m_loginModel: LoginVueModel = {
		username: null,
		password: null
	};

	protected get labelIds(): LabelIds {
		return {
			usernameId: GeneralUtils.generateRandomString(7),
			passwordId: GeneralUtils.generateRandomString(7),
		};
	}

	protected get loginModel(): LoginVueModel {
		return this.m_loginModel;
	}

	protected set loginModel(value: LoginVueModel) {
		this.m_loginModel = value;
	}

	protected async onLoginClick(): Promise<void> {
		try {
			this.$emit("loading");
			const response: userTypes.AuthenticateResponse
				= await this.userService.authenticate(this.convertLoginVueModelToService(this.m_loginModel));

			this.$store.commit("setUser", response);
			this.$emit("user-login");
		} catch (ex) {
			throw new Error(ex);
		} finally {
			this.$emit("finish-loading");
		}
	}

	private convertLoginVueModelToService(value: LoginVueModel): userTypes.AuthenticateRequest {
		return {
			username: value.username,
			password: value.password,
		}
	}
}

interface LabelIds {
	usernameId: string;
	passwordId: string;
}

export interface LoginVueModel {
	username: string;
	password: string
}
