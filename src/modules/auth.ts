import * as userTypes from "@/services/UserService";

// state
interface AuthState {
	authUser: userTypes.AuthenticateResponse;
}

const state: AuthState = {
	authUser: null,
}

// getters
function authUser(state: AuthState): userTypes.AuthenticateResponse {
	return state.authUser;
}

function isAuthenticated(state: AuthState): boolean {
	if (state.authUser) {
		return true;
	}

	return false;
}

const getters = {
	authUser,
	isAuthenticated
}

// mutations
function setUser(state: AuthState, user: userTypes.AuthenticateResponse) {
	state.authUser = user;
}

function deleteUser(state: AuthState) {
	state.authUser = null;
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