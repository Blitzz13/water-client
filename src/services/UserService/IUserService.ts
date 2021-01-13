import * as types from "./types";

export interface IUserService {
	authenticate(model: types.AuthenticateRequest): Promise<types.AuthenticateResponse>;
	register(model: types.RegisterUserRequest): Promise<string>;
	test(): Promise<string>;
	getUserById(id: string): Promise<types.UserItem>;
}