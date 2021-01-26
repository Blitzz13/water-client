import GameCardList from "@/components/GameCardList/index.vue";
import HelloWorld from "@/components/HelloWorld/index.vue";
import * as gameTypes from "@/services/GameService";
import * as userTypes from "@/services/UserService";
import GeneralUtils from "@/utils/generalUtils";
import BaseView from "@/views/BaseView";
import { Inject } from "inversify-props";
import { Component } from "vue-property-decorator";

@Component({
	components: {
		HelloWorld,
		GameCardList
	},
})
export default class Game extends BaseView {
	@Inject()
	public gameService: gameTypes.GameService;

	@Inject()
	public userService: userTypes.UserService;

	private m_gameVue: GameVueModel = null;
	private m_isGameBought: boolean = false;
	private m_show: boolean = false;

	protected get gameId(): string {
		return this.$route.params.id;
	}

	protected get isGameBought(): boolean {
		return this.m_isGameBought;
	}

	protected get show(): boolean {
		return this.m_show;
	}

	protected get gameVue(): GameVueModel {
		return this.m_gameVue;
	}

	protected get isAdmin(): boolean {
		return this.$store.getters.isAdmin;
	}

	public async mounted(): Promise<void> {
		try {
			this.isLoading = true;
			const game = await this.gameService.getGameById(this.gameId);

			if (this.$store.getters.isAuthenticated) {
				const games: gameTypes.GameItem[] = await this.gameService.listUserGames(this.$store.getters.authUser.id);
				this.m_isGameBought = games.map(x => x.id).includes(this.gameId);
			}

			this.m_gameVue = this.convertGameToVue(game);
		} catch {
			this.$router.push({ name: "404" });
		} finally {
			this.isLoading = false;
		}
	}

	protected onBuyClick() {
		if (this.$store.getters.isAuthenticated) {
			this.isLoading = true;
			this.userService.buyGame({ userId: this.$store.getters.authUser.id, gameId: this.gameId });
			this.isLoading = false;
			window.location.reload();
		} else {
			this.$router.push(this.$route.path.concat("?authenticated=false"));
		}
	}

	private convertGameToVue(value: gameTypes.Game): GameVueModel {
		return {
			companyName: value.companyName,
			name: value.name,
			coverImage: value.coverImage,
			description: value.description,
			images: value.imageUrls.map(this.convertImageToVue),
			genre: this.convertGenreToVue(value.genre),
			state: this.convertStateToVue(value.state),
			price: value.price,
			rating: value.rating,
		}
	}

	private convertImageToVue(value: string): ImageVue {
		return {
			id: GeneralUtils.generateRandomString(5),
			url: value,
		}
	}

	private convertGenreToVue(value: gameTypes.Genre): string {
		switch (value) {
			case gameTypes.Genre.ACTION:
				return "Action";
			case gameTypes.Genre.ACTION_ADVENTURE:
				return "Action adventure";
			case gameTypes.Genre.ADVENTURE:
				return "Adventure";
			case gameTypes.Genre.COOPERATIVE:
				return "Co-Op";
			case gameTypes.Genre.RPG:
				return "RPG";
			case gameTypes.Genre.SIMULATION:
				return "Simulation";
			case gameTypes.Genre.SPORT:
				return "Sport";
			case gameTypes.Genre.STRATEGY:
				return "Strategy";
			default:
				throw new Error(`Game genre '${value}' is not supported in the current context.`);
		}
	}

	private convertStateToVue(value: gameTypes.GameState): string {
		switch (value) {
			case gameTypes.GameState.EARLY_ACCESS:
				return "Early access";
			case gameTypes.GameState.PREORDER:
				return "Preorder";
			case gameTypes.GameState.RELEASED:
				return "Released";
			default:
				throw new Error(`Game state '${value}' is not supported in the current context.`);
		}
	}
}

interface GameVueModel {
	name?: string;
	description?: string;
	price?: number;
	rating?: number;
	//reviews?: Review[];
	state?: string;
	coverImage?: string;
	images?: ImageVue[];
	genre?: string;
	companyName?: string;
}

interface ImageVue {
	url: string;
	id: string;
}