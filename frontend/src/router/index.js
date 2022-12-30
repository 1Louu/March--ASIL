import { createRouter, createWebHistory } from 'vue-router';
// Import components 
import MainPage from '../views/MainPage.vue';

const routes = [
    {
        path: "/",
        component: MainPage, 
    },
];

const router = createRouter({
    history: createWebHistory(), 
    routes,
});

export default router; 