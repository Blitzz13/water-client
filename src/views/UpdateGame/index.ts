import AddUpdateGame from "@/components/AddUpdateGame/index.vue";
import BaseView from "@/views/BaseView";
import { Component } from "vue-property-decorator";

@Component({
	components: {
		AddUpdateGame
	},
})
export default class UpdateGame extends BaseView {
	protected get id(): string {
		return this.$route.params.id;
	}
}