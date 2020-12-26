import * as types from "./types";
import * as clients from "generated-clients";
export default class Converter {
	public convertUserToApi(value: types.User): clients.User {
		return {
			id: null,
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

	public convertAuthenticateResponseToService(value: clients.AuthenticateResponse): types.AuthenticateResponse {
		return {
			id: value.id,
			username: value.username,
			fullName: value.fullName,
			token: this.convertTokenProviderToService(value.tokenProvider),
		}
	}

	public convertTokenProviderToService(value: clients.TokenProvider): types.TokenProvider {
		return {
			token: value.token,
			expiresInSeconds: value.expiresInSeconds,
		}
	}
}