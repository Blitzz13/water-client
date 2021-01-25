import "reflect-metadata";
import buildDependencyContainer from "@/app.container";
import TheNavBar from "@/components/TheNavBar/index.vue";
import LoadingSpinner from "@/components/LoadingSpinner/index.vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VeeValidate from 'vee-validate';
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const animatecss = require("animate.css")
require("@/assets/styles/style.css");
require("@/utils/generalUtils.ts");
Vue.use(VeeValidate, {
	mode:"eager"
});
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(animatecss);
Vue.config.productionTip = false;
Vue.component("the-nav-bar", TheNavBar);
Vue.component("loading-spinner", LoadingSpinner);

class AppBootstrap {
	constructor() {
		this.loadDependencyContainer();
		this.loadVueApp();
	}

	private loadDependencyContainer(): void {
		buildDependencyContainer();
	}

	private loadVueApp(): void {
		Vue.config.productionTip = false

		new Vue({
			router,
			store,
			render: (h) => h(App),
		}).$mount("#app");
	}
}

new AppBootstrap();