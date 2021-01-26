import * as types from "@/services/UserService";
import GeneralUtils from "@/utils/generalUtils";
import { Inject } from 'inversify-props';
import { Component, Vue, Ref } from "vue-property-decorator";
import { ValidationProvider, ValidationObserver, ValidationObserverInstance } from 'vee-validate';

@Component({
	name: "register-content",
	components: {
		ValidationProvider,
		ValidationObserver,
	},
})
export default class RegisterContent extends Vue {
	@Inject()
	public userService: types.IUserService;

	@Ref("observer")
	protected observer: ValidationObserverInstance;

	private m_registerModel: RegisterVueModel = {
		username: null,
		password: null,
		email: null,
		fullName: null,
	};

	protected get labelIds(): LabelIds {
		return {
			usernameId: GeneralUtils.generateRandomString(7),
			fullNameId: GeneralUtils.generateRandomString(7),
			passwordId: GeneralUtils.generateRandomString(7),
			emailId: GeneralUtils.generateRandomString(7),
		};
	}

	protected get registerModel(): RegisterVueModel {
		return this.m_registerModel;
	}

	protected set registerModel(value: RegisterVueModel) {
		this.m_registerModel = value;
	}

	protected async onSubmitClick(): Promise<void> {
		try {
			const isValid: boolean = await this.observer.validate();

			if (isValid) {
				this.$emit("loading");
				this.userService.register(this.convertRegisterVueModelToService(this.m_registerModel));
				this.$emit("user-register");
			}
		} catch (ex) {
			throw new Error(ex);
		} finally {
			this.$emit("finish-loading");
		}
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
