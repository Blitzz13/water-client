import * as clientTypes from "generated-clients";
import { UsersClient } from "generated-clients";
import { injectable } from "inversify-props";
import { BaserService } from '../BaseService';
import Converter from "./Converter";
import { IUserService } from './IUserService';
import * as types from "./types";

@injectable()
export class UserService extends BaserService implements IUserService {
	private client: UsersClient = null;

	public constructor() {
		super();
		//TODO: Improve the way of adding authorization header
		const context = this;
		this.client = new UsersClient("https://localhost:44356", {
			fetch: async function (url: RequestInfo, init?: RequestInit): Promise<Response> {
				return await window.fetch(url, context.updateOptions(init));
			}
		});
	}

	public async authenticate(request: types.AuthenticateRequest): Promise<types.AuthenticateResponse> {
		try {
			const apiResult: clientTypes.AuthenticateResponse = await this.client.authenticate(request);
			const result: types.AuthenticateResponse = Converter.convertAuthenticateResponseToService(apiResult);

			return result;
		} catch (ex) {
			throw new Error(ex);
		}
	}

	public async getUserById(id: string): Promise<types.UserItem> {
		try {
			const apiResult: clientTypes.UserItem = await this.client.getUserById(id);
			const result: types.UserItem = Converter.convertUserItemToService(apiResult);

			return result;
		} catch (ex) {
			throw new Error(ex);
		}
	}

	public async test(): Promise<string> {
		try {
			const apiResult: string = await this.client.test();
			//const result: types.AuthenticateResponse = Converter.prototype.convertAuthenticateResponseToService(apiResult);

			return apiResult;
		} catch (ex) {
			throw new Error(ex);
		}
	}

	public async register(user: types.RegisterUserRequest): Promise<string> {
		try {
			const result = this.client.register(Converter.convertUserToApi(user));
			return null;
		} catch (ex) {
			throw new Error(ex);
		}
	}

	public async buyGame(request: types.BuyGameRequest): Promise<void> {
		try {
			this.client.buyGame(Converter.convertBuyGameRequestToApi(request));
		} catch (ex) {
			throw new Error(ex);
		}
	}

}