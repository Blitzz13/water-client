import HelloWorld from "@/components/HelloWorld/index.vue";
import GameCardList from "@/components/GameCardList/index.vue";
import { Component, Vue } from "vue-property-decorator";
import { Inject } from "inversify-props";
import * as gameTypes from "@/services/GameService";
import { GameItem } from "@/services/GameService";
import BaseView from "@/views/BaseView";

@Component({
	components: {
		HelloWorld,
		GameCardList
	},
})
export default class Home extends BaseView {
	@Inject()
	public gameService: gameTypes.GameService;

	private m_featuredGames: gameTypes.GameItem[] = [];

	protected get featuredGames(): GameItem[] {
		return this.m_featuredGames;
	}

	public async mounted(): Promise<void> {
		try {
			this.isLoading = true;
			this.m_featuredGames = await this.gameService.listGameItems({ isFeatured: true });
		} catch (ex) {
			throw new Error(ex);
		} finally {
			this.isLoading = false;
		}
	}
}