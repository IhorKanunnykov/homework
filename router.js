import Vue from 'vue';
import Router from 'vue-router';

import Home from '~/pages/index';
import userstable from '~/pages/userstable';
import User from '~/pages/user';


Vue.use(Router);

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                name: 'userstable',
                path: '/:lang?/userstable',
                component: userstable
            },
            {
                name: 'user',
                path: '/:lang?/user/:id',
                component: User
            },
            {
                name: 'home',
                path: '/:lang?',
                component: Home
            }
        ]
    });
}
