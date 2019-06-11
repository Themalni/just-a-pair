export default [{
    path: '/',
    name: 'Home',
    component: () => import( /* webpackChunkName: "Home" */ '@/views/Home')
}, {
    path: '/product/:id',
    name: 'Product',
    component: () => import( /* webpackChunkName: "Product" */ '@/views/Product')
}]