import { createRouter, createWebHistory } from 'vue-router';
// Import components 
import MainPage from '../views/MainPage.vue';
import ASILInventory from '../views/GestionInventaire.vue';

const routes = [
    {
        path: "/",
        component: MainPage, 
    },{
        path: "/gestion-inventaire", 
        component: ASILInventory,
    }
];

const router = createRouter({
    history: createWebHistory(), 
    routes,
});

export default router; 