import Vue from 'vue';
import Router from 'vue-router';
import Geography from '@/views/Geography'
import Quiz from '@/views/Quiz'
import Home from '@/views/Home'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
            path: '/geography',
            name: 'geography',
            component: Geography
        },
        {
            path: '/quiz',
            name: 'quiz',
            component: Quiz,
        },
        {
            path: '',
            name: 'home',
            component: Home
        }
    ]
})

export default router;