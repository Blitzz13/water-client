import GeneralUtils from "@/utils/generalUtils";
import { Component, Vue } from "vue-property-decorator";
import TheLoginRegisterModal from "@/components/TheLoginRegisterModal/index.vue";
@Component({
	components: {
		TheLoginRegisterModal,
	},
})
export default class App extends Vue {
	protected get registerModalId(): string {
		return GeneralUtils.generateRandomString(10);
	}
}