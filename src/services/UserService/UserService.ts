import * as clientTypes from "generated-clients";
import { UsersClient } from "generated-clients";
import { injectable, Inject } from "inversify-props";
import Converter from "./Converter";
import { IUserService } from './IUserService';
import * as types from "./types";
import { ITokenProvider } from '@/Providers/TokenProvider';
import { BaserService } from '../BaseService';

@injectable()
export class UserService extends BaserService implements IUserService {
	private client: UsersClient = null;

	public constructor() {
		super();
		//TODO: Improve the way of adding authorization header
		const test = this;
		this.client = new UsersClient("https://localhost:44356", {
			fetch: async function (url: RequestInfo, init?: RequestInit): Promise<Response> {
				return await window.fetch(url, test.updateOptions(init));
			}
		});
	}

	public async authenticate(request: types.AuthenticateRequest): Promise<types.AuthenticateResponse> {
		try {
			const apiResult: clientTypes.AuthenticateResponse = await this.client.authenticate(request);
			const result: types.AuthenticateResponse = Converter.prototype.convertAuthenticateResponseToService(apiResult);

			return result;
		} catch (ex) {
			throw new Error(ex);
		}
	}

	public async getUserById(id: string): Promise<types.UserItem> {
		try {
			const apiResult: clientTypes.UserItem = await this.client.getUserById(id);
			const result: types.UserItem = Converter.prototype.convertUserItemToService(apiResult);

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
			const result = this.client.register(Converter.prototype.convertUserToApi(user));
			return result;
		} catch (ex) {
			throw new Error(ex);
		}
	}

}