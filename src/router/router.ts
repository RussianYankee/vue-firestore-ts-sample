import {createRouter, createWebHistory} from "vue-router"
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../api/firebase-app.ts";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('../components/HomePage.vue') },
        { path: '/login', component: () => import('../components/SignIn.vue') },
        { path: '/private',
          component: () => import('../components/PrivateInfo.vue'),
          meta: {
              requiresAuth: true
          }
        },
        { path: '/docs', component: () => import('../components/DocManagement.vue') }
    ]
})

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            auth,
            (user) => {
                removeListener()
                resolve(user)
            },
            reject
        )
    })
}

router.beforeEach( async (to, from, next) => {
    if (to.matched.some((route) => route.meta.requiresAuth)) {
        if (await getCurrentUser()) {
            next()
        } else {
            alert('You don\'t have permission to view this page.')
            next('/')
        }
    } else {
        next()
    }
})

export default router
