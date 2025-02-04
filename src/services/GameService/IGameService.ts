import * as types from "./types";

export interface IGameService {
	addGame(model: types.AddGameRequest): Promise<string>;
	updateGame(model: types.UpdateGameRequest): Promise<string>;
	getGameById(id: string): Promise<types.Game>;
	listUserGames(id: string): Promise<types.Game[]>;
	listGameItems(filter: types.GameFilter): Promise<types.GameItem[]>;
}