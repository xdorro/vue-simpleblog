import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const useComponent = (component) => () =>
    import(/* webpackChunkName: "${component}" */ `@/views/${component}.vue`);

const routes = [
    {
        path: "/",
        name: "Home",
        component: useComponent("Home"),
    },
    {
        path: "/about",
        name: "About",
        component: useComponent("About"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
