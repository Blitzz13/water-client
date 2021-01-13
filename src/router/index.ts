import Home from '@/views/Home/index.vue';
import Profile from '@/views/Profile/index.vue';
import RegisterCompany from '@/views/RegisterCompany/index.vue';
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
	{
		path: '/profiles/:id',
		name: 'profile',
		component: Profile,
	},
	{
		path: '/register-company',
		name: 'register-company',
		component: RegisterCompany,
	},
];

const router = new VueRouter({
	routes,
});

//router.beforeEach((to, from, next) => {
//	// redirect to login page if not logged in and trying to access a restricted page
//	const publicPages: string[] = ['/login',];
//	const authRequired = !publicPages.includes(to.path);
//	const authenticated = localStorage.getItem('user');

//	if (authRequired && !authenticated) {
//		return next(from.path.concat("?login"));
//	}

//	next();
//})

export default router;
