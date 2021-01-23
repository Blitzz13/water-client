import * as gameTypes from "@/services/GameService";
import GeneralUtils from "@/utils/generalUtils";
import BaseView from "@/views/BaseView";
import { Inject } from "inversify-props";
import { Component } from "vue-property-decorator";

@Component({
	components: {
	},
})
export default class CreateGame extends BaseView {
	@Inject()
	public gameService: gameTypes.GameService;

	private m_gameVue: GameInputModel = {
		companyName: "",
		coverImage: "",
		description: "",
		genre: null,
		images: [],
		name: "",
		price: 0,
		state: null,
		isFeatured: false,
	};

	private m_isGameBought: boolean = false;
	private m_showInputs: boolean = true;
	private m_imageUrl: string = "";
	private m_chosenGenre: string = "Choose Genre";
	private m_chosenState: string = "Choose State";

	protected get isGameBought(): boolean {
		return this.m_isGameBought;
	}

	protected get showInputs(): boolean {
		return this.m_showInputs;
	}

	protected set showInputs(value: boolean) {
		this.m_showInputs = value;
	}

	protected get chosenGenre(): string {
		return this.m_chosenGenre;
	}

	protected set chosenGenre(value: string) {
		this.m_chosenGenre = value;
	}

	protected get chosenState(): string {
		return this.m_chosenState;
	}

	protected set chosenState(value: string) {
		this.m_chosenState = value;
	}

	protected get imageUrl(): string {
		return this.m_imageUrl;
	}

	protected set imageUrl(value: string) {
		this.m_imageUrl = value;
	}

	protected get genres(): KeyValue<gameTypes.Genre>[] {
		return Object.values(gameTypes.Genre).map(this.convertGenrePairToVue);
	}

	protected get states(): KeyValue<gameTypes.GameState>[] {
		return Object.values(gameTypes.GameState).map(this.convertStatePairToVue);
	}

	protected get gameVue(): GameInputModel {
		return this.m_gameVue;
	}

	public async mounted(): Promise<void> {
		if (!this.$store.getters.isAuthenticated) {
			this.$router.push({ name: "home" });
			return;
		}
	}

	protected onImageAdd(): void {
		if (this.m_imageUrl.length > 10) {
			this.m_gameVue.images.push(this.convertImageToVue(this.m_imageUrl));
			this.m_imageUrl = "";
		}
	}

	protected async onAddGameClick():Promise<void> {
		try {
			this.isLoading = true;
			const id: string = await this.gameService.addGame(this.convertGameInputToAddRequest(this.m_gameVue));
			this.$router.push({ name: "game-details", params: { id: id } });
		} catch (ex) {

		} finally {
			this.isLoading = false;
		}
		
	}

	protected onGenreClick(value: KeyValue<gameTypes.Genre>) {
		this.gameVue.genre = value.key;
		this.m_chosenGenre = value.value;
	}
	protected onStateClick(value: KeyValue<gameTypes.GameState>) {
		this.gameVue.state = value.key;
		this.m_chosenState = value.value;
	}

	private convertGameInputToAddRequest(value: GameInputModel): gameTypes.AddGameRequest {
		return {
			companyName: value.companyName,
			name: value.name,
			coverImage: value.coverImage,
			description: value.description,
			imageUrls: value.images.map(x => x.url),
			genre: value.genre,
			state: value.state,
			price: value.price,
			isFeatured: value.isFeatured,
		}
	}

	private convertImageToVue(value: string): ImageVue {
		return {
			id: GeneralUtils.generateRandomString(5),
			url: value,
		}
	}

	private convertGenrePairToVue(value: gameTypes.Genre): KeyValue<gameTypes.Genre> {
		return {
			key: value,
			value: this.convertGenreToVue(value),
		}
	}

	private convertStatePairToVue(value: gameTypes.GameState): KeyValue<gameTypes.GameState> {
		return {
			key: value,
			value: this.convertStateToVue(value),
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

interface GameInputModel {
	name: string;
	description: string;
	price: number;
	state: gameTypes.GameState;
	coverImage: string;
	images: ImageVue[];
	genre: gameTypes.Genre;
	companyName: string;
	isFeatured: boolean;
}

interface KeyValue<T> {
	key: T;
	value: string;
}

interface ImageVue {
	url: string;
	id: string;
}