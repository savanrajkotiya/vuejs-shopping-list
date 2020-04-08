import Vue from 'vue';
import VueRouter from 'vue-router';

import ShoppingList from './components/ShoppingList.vue';
import ProductDetail from './components/ProductDetail.vue';


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
	},
	{
		path: '/product/detail/:id',
		component: ProductDetail
	}
];

const router = new VueRouter({
	mode: 'history',
	routes
});

export default router;