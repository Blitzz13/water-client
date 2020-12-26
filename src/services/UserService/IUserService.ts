import * as types from "./types";

export interface IUserService {
	authenticate(model: types.AuthenticateRequest): Promise<types.AuthenticateResponse>;
	register(model: types.User): Promise<string>;
}