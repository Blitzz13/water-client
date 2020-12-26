import { LoginVueModel } from "@/components/LoginContent";
import { RegisterVueModel } from "@/components/RegisterContent";
import LoginContent from "@/components/LoginContent/index.vue";
import RegisterContent from "@/components/RegisterContent/index.vue";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({
	name: "the-login-register-modal",
	components: {
		LoginContent,
		RegisterContent,
	}
})
export default class TheLoginModal extends Vue {
	@Prop()
	modalId: string;

	private m_loginContent: LoginVueModel = null;
	private m_registerContent: RegisterVueModel = null;
	private m_showModal: boolean = false;


	protected get showModal(): boolean {
		return this.m_showModal;
	}

	protected set showModal(value: boolean) {
		this.m_showModal = value;
	}

	protected get loginContent() {
		return this.m_loginContent;
	}

	protected get registerContent(): RegisterVueModel {
		return this.m_registerContent;
	}

	protected onLoginContentChange(value: LoginVueModel): void {
		this.m_loginContent = value;
	}

	protected onRegisterContentChange(value: RegisterVueModel): void {
		this.m_loginContent = value;
	}

	protected onUserLogin(): void {
		this.m_showModal = false;
	}
}
