export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home')
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: () => import('@/views/Product')
    },
    {
        path: '/user-dashboard',
        name: 'UserDashboard',
        component: () => import('@/views/user/UserDashboard'),
        meta: {
            authRequired: true
        }
    }
]