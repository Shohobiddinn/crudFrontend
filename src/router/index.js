import { createRouter, createWebHistory } from 'vue-router';

let routes = [
	{
		path: '/:catchAll(.*)',
		name: 'not-found',
		component: () => import('../views/NotFound/NotFound.vue'),
	},

	{
		path: '/xozmag',
		name: 'xozmag',
		component: () => import('../views/xozmag/xozmag.vue'),
	},
	{
		path: '/output',
		name: 'output',
		component: () => import('../views/output/output.vue'),
	},
	{
		path: '/manufacture',
		name: 'manufacture',
		component: () => import('../views/manufacture/manufacture.vue'),
	},
	{
		path: '/structure',
		name: 'structure',
		component: () => import('../views/structure/structure.vue'),
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/About/about.vue'),
	},
	{
		path: '/connection',
		name: 'Connection',
		component: () => import('../views/Connection/connection.vue'),
	},
	{
		path: '/faq',
		name: 'faq',
		component: () => import('../views/FAQ/faq.vue'),
	},
	{
		path: '/videos',
		name: 'videos',
		component: () => import('../views/videos/videos.vue'),
	},
	{
		path: '/',
		name: 'intro',
		component: () => import('../views/Intro/intro.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: 'active',
});

export default router;
