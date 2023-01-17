import { createRouter, createWebHistory } from 'vue-router';
// Import components 
import MarcheProd from '../views/MarcheProd.vue';
import ASILInventory from '../views/GestionInventaire.vue';

const routes = [
    {
        path: "/",
        component: MarcheProd, 
    },{
        path: "/gestion-inventaire", 
        component: ASILInventory,
    },{
        
    }
];

const router = createRouter({
    history: createWebHistory(), 
    routes,
});

export default router; 