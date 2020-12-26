export interface AuthenticateResponse {
	id: string;
	username: string;
	token: string;
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

export enum UserRole {
	ADMINISTRATOR = "Administrator",
	USER = "User",
	COMPANY = "Company",
}