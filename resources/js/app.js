import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';
import Users from './components/Users.vue';
import UserDetail from './components/UserDetail.vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

// axios.defaults.baseURL = 'http://localhost:8000/api'
Vue.axios.defaults.baseURL = 'https://lara-vue-auth.test/api';

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
            component: Register,
            meta: {
                auth : false
            }
        },
        {
            path : '/login',
            name: 'login',
            component: Login,
            meta: {
                auth : false
            }
        },
        {
            path : '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                auth : true
            }
        },

        {
            path : '/users',
            name: 'users',
            component: Users,
            meta: {
                auth : true
            }
        },

        {
            path : '/user/:id',
            name: 'user-detail',
            component: UserDetail,
            props : true,
        },
    ]
});

Vue.router = router;
Vue.use(require('@websanova/vue-auth'), {
    auth : require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http : require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
});

App.router = Vue.router

new Vue(App).$mount('#app');

// new Vue({
//     el: '#app',
//     router: router,
//     render: app => app(App)
// });