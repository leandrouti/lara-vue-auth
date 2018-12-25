import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import Register from './components/Register.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path : '/',
            name: 'home',
            component: Home
        },
        {
            path : '/register',
            name: 'register',
            component: Register
        },
    ]
});

new Vue({
    el: '#app',
    router: router,
    render: app => app(App)
});