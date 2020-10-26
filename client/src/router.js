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
<<<<<<< HEAD
        // {
        //     path: '/quiz',
        //     name: 'quiz',
        //     component: Quiz
        // }
=======
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
>>>>>>> 989e9b55a6aa0ae5356fedd49d8fb76453abf8ab
    ]
})

export default router;