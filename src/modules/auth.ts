import * as userTypes from "@/services/UserService";

// state
interface AuthState {
	authUser: userTypes.AuthenticateResponse;
	tokenExpirationDate: Date;
}

const state: AuthState = {
	authUser: null,
	tokenExpirationDate: null,
}

// getters
function authUser(state: AuthState): userTypes.AuthenticateResponse {
	return state.authUser;
}

function token(state: AuthState): string {
	if (state.authUser) {
		return state.authUser.tokenProvider.token;
	}

	return null
}

function hasTokenExpired(state: AuthState): boolean {
	if (new Date() >= new Date(state.tokenExpirationDate)) {
		return true;
	}

	return false;
}

function isAuthenticated(state: AuthState): boolean {
	if (state.authUser) {
		return true;
	}

	return false;
}

const getters = {
	authUser,
	isAuthenticated,
	token,
	hasTokenExpired,
}

// mutations
function setUser(state: AuthState, user: userTypes.AuthenticateResponse) {
	state.authUser = user;
	const expiratonDate = new Date();
	expiratonDate.setSeconds(expiratonDate.getSeconds() + user.tokenProvider.expiresInSeconds);
	state.tokenExpirationDate = expiratonDate;
}

function deleteUser(state: AuthState) {
	state.authUser = null;
	state.tokenExpirationDate = null;
}

const mutations = {
	setUser,
	deleteUser,
}

// actions
const actions = {}

export default {
	state,
	getters,
	mutations,
	actions,
}