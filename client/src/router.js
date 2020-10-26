import Vue from 'vue';
import Router from 'vue-router';
import WorldMap from '@/views/WorldMap'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
            path: '/map',
            name: 'map',
            component: WorldMap
        },
        // {
        //     path: '/quiz',
        //     name: 'quiz',
        //     component: Quiz
        // }
    ]
})

export default router;