import * as types from "@/services/UserService";
import GeneralUtils from "@/Utils/generalUtils";
import { Inject } from 'inversify-props';
import { Component, Vue } from "vue-property-decorator";

@Component({
	name: "register-content"
})
export default class RegisterContent extends Vue {
	@Inject()
	public userService: types.IUserService;

	private m_registerModel: RegisterVueModel = {
		username: null,
		password: null,
		email: null,
		fullName: null,
	};

	protected get labelIds(): LabelIds {
		return {
			usernameId: GeneralUtils.prototype.generateRandomString(7),
			fullNameId: GeneralUtils.prototype.generateRandomString(7),
			passwordId: GeneralUtils.prototype.generateRandomString(7),
			emailId: GeneralUtils.prototype.generateRandomString(7),
		};
	}

	protected get registerModel(): RegisterVueModel {
		return this.m_registerModel;
	}

	protected set registerModel(value: RegisterVueModel) {
		this.m_registerModel = value;
	}

	protected onSubmitClick() {
		this.userService.register(this.convertRegisterVueModelToService(this.m_registerModel));
	}

	private convertRegisterVueModelToService(value: RegisterVueModel): types.RegisterUserRequest {
		return {
			username: value.username,
			email: value.email,
			password: value.password,
			fullName: value.fullName,
			role: types.UserRole.USER,
		}
	}
}

interface LabelIds {
	usernameId: string;
	fullNameId: string;
	passwordId: string;
	emailId: string;
}

export interface RegisterVueModel {
	username: string;
	password: string;
	fullName?: string;
	email: string;
}
