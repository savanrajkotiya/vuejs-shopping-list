import Vue from 'vue';
import VueRouter from 'vue-router';

import  ShoppingList  from './components/ShoppingList.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: ShoppingList
    },
    {
		path: '/products',
		name: 'products',
		component: ShoppingList
	}
];

const router = new VueRouter({
	routes
});

export default router;