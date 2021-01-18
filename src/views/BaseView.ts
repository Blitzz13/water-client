import { Vue } from "vue-property-decorator";
export default class BaseView extends Vue{
	private m_isLoading: boolean = false;

	protected get isLoading(): boolean {
		return this.m_isLoading;
	}

	protected set isLoading(value: boolean) {
		this.m_isLoading = value;
	}
}