import GameCardList from "@/components/GameCardList/index.vue";
import HelloWorld from "@/components/HelloWorld/index.vue";
import * as gameTypes from "@/services/GameService";
import { GameItem } from "@/services/GameService";
import BaseView from "@/views/BaseView";
import { Inject } from "inversify-props";
import { Component, Watch } from "vue-property-decorator";

@Component({
	components: {
		HelloWorld,
		GameCardList
	},
})
export default class Games extends BaseView {
	@Inject()
	public gameService: gameTypes.GameService;

	private m_games: gameTypes.GameItem[] = [];

	protected get games(): GameItem[] {
		return this.m_games;
	}

	protected get searchString(): string {
		return <string>this.$route.query["search"];
	}

	public async mounted(): Promise<void> {
		try {
			this.isLoading = true;
			this.m_games = await this.gameService.listGameItems({ name: this.searchString });
		} catch (ex) {
			throw new Error(ex);
		} finally {
			this.isLoading = false;
		}
	}

	@Watch("searchString")
	protected async onSearchStringChange(): Promise<void> {
		this.m_games = await this.gameService.listGameItems({ name: this.searchString });
	}
}