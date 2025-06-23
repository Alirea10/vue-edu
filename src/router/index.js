import { createRouter, createWebHistory } from 'vue-router'
import course from "@/components/course.vue";
import User from "@/components/user.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/course', component: course },
    { path: '/user', component: User }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router