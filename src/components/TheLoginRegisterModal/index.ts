import LoadingSpinner from "@/components/LoadingSpinner/index.vue";
import { LoginVueModel } from "@/components/LoginContent";
import LoginContent from "@/components/LoginContent/index.vue";
import { RegisterVueModel } from "@/components/RegisterContent";
import RegisterContent from "@/components/RegisterContent/index.vue";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({
	name: "the-login-register-modal",
	components: {
		LoginContent,
		RegisterContent,
		LoadingSpinner,
	}
})
export default class TheLoginModal extends Vue {
	@Prop()
	modalId: string;

	private m_loginContent: LoginVueModel = null;
	private m_registerContent: RegisterVueModel = null;
	private m_showModal: boolean = false;
	private m_showSpinner: boolean = false;
	private m_register: boolean = false;

	protected get showModal(): boolean {
		return this.m_showModal;
	}

	protected set showModal(value: boolean) {
		this.m_showModal = value;
	}

	protected get modalTitle(): string {
		if (this.m_register) {
			return "Register new account";
		}
			
		return "Login with existing account";
	}

	protected get showSpinner(): boolean {
		return this.m_showSpinner;
	}

	protected get register(): boolean {
		return this.m_register;
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
		this.m_registerContent = value;
	}

	@Watch("$route.query", { immediate: true })
	public onRouteAuthentication() {
		if (this.$route.query["authenticated"] === "false") {
			this.m_showModal = true;
		}
	}

	protected onChangeContentClick() {
		this.m_register = !this.m_register;
	}

	protected onLoading(): void {
		this.m_showSpinner = true;
	}

	protected onFinishLoading(): void {
		this.m_showSpinner = false;
	}

	protected onUserRegister(): void {
		this.m_showModal = false;
	}

	protected onUserLogin(): void {
		this.m_showModal = false;
	}
}
