import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import * as gameTypes from "@/services/GameService"
@Component({
	name: "game-card-list"
})
export default class GameCardList extends Vue {
	@Prop({ required: true })
	public gameItems: gameTypes.GameItem[];

	private m_gameItems: GameItemVueModel[] = [];

	protected get vueGameItems(): GameItemVueModel[] {
		return this.m_gameItems;
	}

	@Watch("gameItems", { immediate: true })
	protected onGamesChange() {
		if (this.gameItems) {
			this.m_gameItems = this.gameItems.map(this.convertGameItemToVue);
		}
	}

	protected onGameDetailsClick(id: string) {
		this.$router.push({ name: "game-details", params: { id: id } })
	}

	private convertGameItemToVue(value: gameTypes.GameItem): GameItemVueModel {
		return {
			id: value.id,
			name: null,
			coverImage: value.coverImage,
			price: value.price,
		}
	}
}

export interface GameItemVueModel {
	id: string;
	name: string;
	coverImage: string;
	price: number;
}