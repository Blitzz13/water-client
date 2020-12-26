import GeneralUtils from "@/Utils/generalUtils";
import { Component, Vue } from "vue-property-decorator";
import TheLoginRegisterModal from "@/components/TheLoginRegisterModal/index.vue";
@Component({
	components: {
		TheLoginRegisterModal,
	},
})
export default class App extends Vue {
	protected get registerModalId(): string {
		return GeneralUtils.prototype.generateRandomString(10);
	}
}