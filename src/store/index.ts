import auth from "@/modules/auth";
import Vue from "vue";
import Vuex from "vuex";
import { VuexPersistence } from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
	storage: window.localStorage,
});

export default new Vuex.Store({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		auth
	},
	plugins: [vuexLocal.plugin]
});
