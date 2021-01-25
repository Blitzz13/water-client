import Home from "@/views/Home/index.vue";
import Profile from "@/views/Profile/index.vue";
import Game from "@/views/Game/index.vue";
import AddGame from "@/views/AddGame/index.vue";
import Vue from "vue";
import Store from "@/store";
import VueRouter, { RouteConfig } from "vue-router";
import NotFound from "@/views/NotFound/index.vue";
import UpdateGame from "@/views/UpdateGame/index.vue";
import Games from "@/views/Games/index.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/about",
		name: "about",
		component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
	{
		path: "/profiles/:id",
		name: "profile",
		component: Profile,
	},
	{
		path: "/game/:id",
		name: "game-details",
		component: Game,
	},
	{
		path: "/games/add",
		name: "add-game",
		component: AddGame,
	},
	{
		path: "/games/update/:id",
		name: "update-game",
		component: UpdateGame,
	},
	{
		path: "/games",
		name: "games",
		component: Games,
	},
	{
		path: "*",
		name: "404",
		component: NotFound,
	},
];

const router = new VueRouter({
	mode: "history",
	routes,
});

router.beforeEach((to, from, next) => {
	const privatePages: string[] = [];
	const authRequired = privatePages.includes(to.path);
	const authenticated = Store.getters.isAuthenticated;
	const hasTokenExpired: boolean = Store.getters.hasTokenExpired;

	if (authRequired && !authenticated) {
		return next(from.path.concat("?authenticated=false"));
	}

	if (hasTokenExpired && authenticated) {
		Store.commit("deleteUser");
		return next(from.path.concat("?authenticated=false"));
	}

	next();
})

export default router;
