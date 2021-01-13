import HelloWorld from "@/components/HelloWorld/index.vue";
import GameCardList from "@/components/GameCardList/index.vue";
import { Component, Vue } from "vue-property-decorator";


@Component({
	components: {
		HelloWorld,
		GameCardList
	},
})
export default class Home extends Vue {
	protected get msg(): string {
		return "Welcome to Your Vue.js + TypeScript App";
	}

	public mounted() {
		return this.$store.getters.token;
	}
}