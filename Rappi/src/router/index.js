import {createRouter, createWebHashHistory} from 'vue-router';
import {auth} from "../firebase"
const routes = [
    {
        path: '/inicioUsuario',
        component:() => import('../Pages/InicioUsuario.vue')
    },
    {
        path: '/inicioTienda',
        component:() => import('../Pages/InicioTienda.vue')
    },
    {
        path: '/registroTienda',
        component:() => import('../Pages/RegistroTienda.vue')
    },
    {
        path: '/registroUsuario',
        component:() => import('../Pages/RegistroUsuario.vue')
    },
    {
        path: '/',
        component:() => import('../Pages/HomePage.vue')
    },
    {
        name: 'shop-id',
        path: '/tienda/:id',
        component:() => import('../Pages/Tienda.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/tiendas',
        component:() => import('../Pages/Tiendas.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'shop',
        path: '/dashboard/:id',
        component:() => import('../pages/DashboardVendedor.vue'),
    },
    {
        path: '/pagos',
        component:() => import('../Pages/PagoPedidos.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/:pathMatch(.*)*',
        component:() => import('../Pages/Page404.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})
router.beforeEach((to,from, next)=>{
    if (to.path === '/InicioUsuario' && auth.currentUser) {
        next('/')
        returns;
    }
    if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser){
        next('/InicioUsuario')
        returns;
    }
    next();
})

export default router;