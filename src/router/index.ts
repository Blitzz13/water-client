import Home from '@/views/Home/index.vue';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

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
];

const router = new VueRouter({
	routes,
});

//router.beforeEach((to, from, next) => {
//	// redirect to login page if not logged in and trying to access a restricted page
//	const publicPages: string[] = ['/login'];
//	const authRequired = !publicPages.includes(to.path);
//	const loggedIn = localStorage.getItem('user');

//	if (authRequired && !loggedIn) {
//		return next('/login');
//	}

//	next();
//})

export default router;
