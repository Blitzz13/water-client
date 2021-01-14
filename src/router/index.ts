import Home from '@/views/Home/index.vue';
import Profile from '@/views/Profile/index.vue';
import Vue from 'vue';
import Store from '@/store';
import VueRouter, { RouteConfig } from 'vue-router';
import NotFound from "@/views/NotFound/index.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/profiles/:id',
		name: 'profile',
		component: Profile,
	},
	{
		path: "*",
		name: "404",
		component: NotFound,
	},
];

const router = new VueRouter({
	routes,
});

router.beforeEach((to, from, next) => {
	const privatePages: string[] = [];
	const authRequired = privatePages.includes(to.path);
	const authenticated = Store.getters.authUser;

	if (authRequired && !authenticated) {
		return next(from.path.concat("?authenticated=false"));
	}

	next();
})

export default router;
