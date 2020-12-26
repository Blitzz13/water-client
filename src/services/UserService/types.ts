export interface AuthenticateResponse {
	id: string;
	username: string;
	token: TokenProvider;
	fullName?: string;
}

export interface AuthenticateRequest {
	username?: string;
	password?: string;
}

export interface User {
	id?: string;
	username: string;
	email: string;
	role: UserRole;
	fullName?: string;
	password: string;
}

export interface TokenProvider {
	token: string;
	expiresInSeconds: number;
}

export enum UserRole {
	ADMINISTRATOR = "Administrator",
	USER = "User",
	COMPANY = "Company",
}