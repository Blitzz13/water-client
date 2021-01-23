import * as clientTypes from "generated-clients";
import { GamesClient } from "generated-clients";
import { injectable } from "inversify-props";
import { BaserService } from '../BaseService';
import Converter from "./Converter";
import { IGameService } from './IGameService';
import * as types from "./types";

@injectable()
export class GameService extends BaserService implements IGameService {
	private client: GamesClient;

	public constructor() {
		super();
		//TODO: Improve the way of adding authorization header
		const context = this;
		this.client = new GamesClient("https://localhost:44356", {
			fetch: async function (url: RequestInfo, init?: RequestInit): Promise<Response> {
				return await window.fetch(url, context.updateOptions(init));
			}
		});
	}

	removeGame(id: string): Promise<any> {
		throw new Error("Method not implemented.");
	}

	public async addGame(request: types.AddGameRequest): Promise<string> {
		const apiRequest: clientTypes.AddGameRequest = Converter.convertAddGameRequestToApi(request);
		const result: string = await this.client.addGame(apiRequest);

		return result;
	}

	public async listUserGames(id: string): Promise<types.GameItem[]> {
		const apiResult: clientTypes.GameItem[] = await this.client.listUserGames(id);
		const result: types.GameItem[] = apiResult.map(Converter.convertGameItemToService);

		return result;
	}

	public async getGameById(id: string): Promise<types.Game> {
		try {
			const apiResult: clientTypes.Game = await this.client.getGameById(id);
			const result: types.Game = Converter.convertGameToService(apiResult);

			return result;
		} catch (ex) {
			throw new Error(ex);
		}
	}

	public async listGameItems(filter: types.GameFilter): Promise<types.GameItem[]> {
		try {
			const apiFilter: clientTypes.GameFilter = Converter.convertGameFilterToApi(filter);

			const apiResult: clientTypes.GameItem[] = await this.client.listGameItems(apiFilter);
			const result: types.GameItem[] = apiResult.map(Converter.convertGameItemToService);

			return result;
		} catch (ex) {
			throw new Error(ex);
		}
	}

}