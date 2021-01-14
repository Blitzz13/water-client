import { FingerprintSpinner } from "epic-spinners";
import { Component, Vue } from "vue-property-decorator";

@Component({
	name: "loading-spinner",
	components: {
		FingerprintSpinner,
	},
})
export default class LoadingSpinner extends Vue {

}
