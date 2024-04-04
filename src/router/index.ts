import { createRouter, createMemoryHistory, RouteRecordRaw } from 'vue-router';
import Home from '../layout/Home.vue';
import Projects from '../layout/Projects.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home,
    },
    {
        name: 'Pii-menu',
        path: '/home',
        component: Projects,
    }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes
});

export default router;