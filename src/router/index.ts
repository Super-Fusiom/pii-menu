import { createRouter, createMemoryHistory, RouteRecordRaw } from 'vue-router';
import Home from '../layout/Home.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home,
    }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes
});

export default router;