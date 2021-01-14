import HelloWorld from "@/components/HelloWorld/index.vue";
import GameCardList from "@/components/GameCardList/index.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
	components: {
		HelloWorld,
		GameCardList
	},
})
export default class NotFound extends Vue {

}