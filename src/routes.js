import ProductView from './components/ProductView.vue'
import HomePage from './components/HomePage.vue'


export default [
    {path: '/', component: HomePage},
    {path: '/product-view/:id', component: ProductView }
]