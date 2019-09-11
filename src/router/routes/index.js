export default [{
    path: '/',
    name: 'Home',
    component: () => import( /* webpackChunkName: "Home" */ '@/views/Home')
},
{
    path: '/product/:id',
    name: 'Product',
    component: () => import( /* webpackChunkName: "Product" */ '@/views/Product')
},
{
    path: '/user-dashboard',
    name: 'UserDashboard',
    component: () => import( /* webpackChunkName: "User Dashboard" */ '@/views/user/UserDashboard'),
    meta: {
        authRequired: true
    }
}, {
    path: '/admin-dashboard',
    name: 'AdminDashboard',
    component: () => import( /* webpackChunkName: "Admin Dashboard" */ '@/views/admin/AdminDashboard'),
    meta: {
        authRequired: true
    }
}
]