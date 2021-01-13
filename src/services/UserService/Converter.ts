import * as types from "./types";
import * as clients from "generated-clients";
export default class Converter {
	//Convert to api
	public convertUserToApi(value: types.RegisterUserRequest): clients.User {
		return {
			username: value.username,
			email: value.email,
			fullName: value.fullName,
			password: value.password,
			role: this.convertUserRoleToApi(value.role)
		}
	}

	public convertUserRoleToApi(value: types.UserRole): clients.UserRole {
		switch (value) {
			case types.UserRole.ADMINISTRATOR:
				return clients.UserRole.Administrator;
			case types.UserRole.COMPANY:
				return clients.UserRole.Company;
			case types.UserRole.USER:
				return clients.UserRole.User;
			default:
				throw new Error(`User role '${value}' is not supported in the current context.`);
		}
	}
	//Convert to service
	public convertAuthenticateResponseToService(value: clients.AuthenticateResponse): types.AuthenticateResponse {
		return {
			id: value.id,
			username: value.username,
			userRole: this.convertUserRoleToService(value.userRole),
			tokenProvider: this.convertTokenProviderToService(value.tokenProvider),
		}
	}

	public convertUserItemToService(value: clients.UserItem): types.UserItem{
		return {
			id: value.id,
			username: value.username,
			fullName: value.fullName,
			email: value.email,
			role: this.convertUserRoleToService(value.role),
		}
	}

	public convertTokenProviderToService(value: clients.TokenProvider): types.TokenProvider {
		return {
			token: value.token,
			expiresInSeconds: value.expiresInSeconds,
		}
	}

	public convertUserRoleToService(value: clients.UserRole): types.UserRole {
		switch (value) {
			case clients.UserRole.Administrator :
				return types.UserRole.ADMINISTRATOR;
			case clients.UserRole.Company:
				return  types.UserRole.COMPANY;
			case clients.UserRole.User:
				return types.UserRole.USER;
			default:
				throw new Error(`User role '${value}' is not supported in the current context.`);
		}
	}
}