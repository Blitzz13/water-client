import * as types from "./types";
import * as clients from "generated-clients";
export default class Converter {
	//Convert to api
	public static convertGameFilterToApi(value: types.GameFilter): clients.GameFilter {
		let genres: clients.Genre[] = [];
		let states: clients.GameState[] = [];

		if (value.genres) {
			genres = value.genres.map(this.convertGenreToApi);
		}

		if (value.states) {
			states = value.states.map(this.convertGameStateToApi);
		}

		return {
			id: value.id,
			name: value.name,
			genres: genres,
			states: states,
			isFeatured: value.isFeatured,
		}
	}

	public static convertAddGameRequestToApi(value: types.AddGameRequest): clients.AddGameRequest {
		return {
			name: value.name,
			companyName: value.companyName,
			genre: this.convertGenreToApi(value.genre),
			state: this.convertGameStateToApi(value.state),
			isFeatured: value.isFeatured,
			coverImage: value.coverImage,
			imageUrls: value.imageUrls,
			description: value.description,
			price: value.price,
		}
	}

	public static convertUpdateGameRequestToApi(value: types.UpdateGameRequest): clients.UpdateGameRequest {
		return {
			id: value.id,
			name: value.name,
			companyName: value.companyName,
			genre: this.convertGenreToApi(value.genre),
			state: this.convertGameStateToApi(value.state),
			isFeatured: value.isFeatured,
			coverImage: value.coverImage,
			imageUrls: value.imageUrls,
			description: value.description,
			price: value.price,
		}
	}

	public static convertGenreToApi(value: types.Genre): clients.Genre {
		switch (value) {
			case types.Genre.ACTION:
				return clients.Genre.Action;
			case types.Genre.ACTION_ADVENTURE:
				return clients.Genre.ActionAdventure;
			case types.Genre.ADVENTURE:
				return clients.Genre.Adventure;
			case types.Genre.COOPERATIVE:
				return clients.Genre.Cooperative;
			case types.Genre.RPG:
				return clients.Genre.Rpg;
			case types.Genre.SIMULATION:
				return clients.Genre.Simulation;
			case types.Genre.SPORT:
				return clients.Genre.Sport;
			case types.Genre.STRATEGY:
				return clients.Genre.Strategy;
			default:
				throw new Error(`Game genre '${value}' is not supported in the current context.`);
		}
	}

	public static convertGameStateToApi(value: types.GameState): clients.GameState {
		switch (value) {
			case types.GameState.EARLY_ACCESS:
				return clients.GameState.EarlyAccess;
			case types.GameState.PREORDER:
				return clients.GameState.Preorder;
			case types.GameState.RELEASED:
				return clients.GameState.Released;
			default:
				throw new Error(`Game state '${value}' is not supported in the current context.`);
		}
	}
	//Convert to service
	public static convertGameItemToService(value: clients.GameItem): types.GameItem {
		return {
			id: value.id,
			coverImage: value.coverImage,
			isFeatured: value.isFeatured,
			price: value.price,
			rating: value.rating,
		}
	}

	public static convertGameToService(value: clients.Game): types.Game {
		return {
			id: value.id,
			name: value.name,
			coverImage: value.coverImage,
			isFeatured: value.isFeatured,
			price: value.price,
			rating: value.rating,
			companyName: value.companyName,
			description: value.description,
			genre: this.convertGenreToService(value.genre),
			state: this.convertGameStateToService(value.state),
			imageUrls: value.imageUrls,
		}
	}

	public static convertGenreToService(value: clients.Genre): types.Genre {
		switch (value) {
			case clients.Genre.Action:
				return types.Genre.ACTION;
			case clients.Genre.ActionAdventure:
				return types.Genre.ACTION_ADVENTURE;
			case clients.Genre.Adventure:
				return types.Genre.ADVENTURE;
			case clients.Genre.Cooperative:
				return types.Genre.COOPERATIVE;
			case clients.Genre.Rpg:
				return types.Genre.RPG;
			case clients.Genre.Simulation:
				return types.Genre.SIMULATION;
			case clients.Genre.Sport:
				return types.Genre.SPORT;
			case clients.Genre.Strategy:
				return types.Genre.STRATEGY;
			default:
				throw new Error(`Game genre '${value}' is not supported in the current context.`);
		}
	}

	public static convertGameStateToService(value: clients.GameState): types.GameState {
		switch (value) {
			case clients.GameState.EarlyAccess:
				return types.GameState.EARLY_ACCESS;
			case clients.GameState.Preorder:
				return types.GameState.PREORDER;
			case clients.GameState.Released:
				return types.GameState.RELEASED;
			default:
				throw new Error(`Game state '${value}' is not supported in the current context.`);
		}
	}
}