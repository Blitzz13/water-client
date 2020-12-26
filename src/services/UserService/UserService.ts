import * as clientTypes from "generated-clients";
import { UsersClient } from "generated-clients";
import { injectable } from "inversify-props";
import Converter from "./Converter";
import { IUserService } from './IUserService';
import * as types from "./types";

@injectable()
export class UserService implements IUserService {

	private client = new UsersClient("https://localhost:44356");

	public async authenticate(request: types.AuthenticateRequest): Promise<types.AuthenticateResponse> {
		try {
			const apiResult: clientTypes.AuthenticateResponse = await this.client.authenticate(request);
			const result: types.AuthenticateResponse = Converter.prototype.convertAuthenticateResponseToService(apiResult);

			return result;
		} catch (ex) {
			throw new Error(ex);
		}
	}

	public async register(user: types.User): Promise<string> {
		try {
			debugger
			const result = this.client.register(Converter.prototype.convertUserToApi(user));
			return result;
		} catch (ex) {
			throw new Error(ex);
		}
	}

}