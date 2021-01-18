export interface AuthenticateResponse {
	id: string;
	username: string;
	tokenProvider: TokenProvider;
	userRole: UserRole;
}

export interface AuthenticateRequest {
	username?: string;
	password?: string;
}

export interface RegisterUserRequest {
	username: string;
	email: string;
	role: UserRole;
	fullName?: string;
	password: string;
}

export interface UserItem {
	id?: string;
	username?: string;
	email?: string;
	role?: UserRole;
	fullName?: string;
}

export interface TokenProvider {
	token: string;
	expiresInSeconds: number;
}

export interface BuyGameRequest {
	userId?: string;
	gameId?: string;
}

export enum UserRole {
	ADMINISTRATOR = "Administrator",
	USER = "User",
	COMPANY = "Company",
}