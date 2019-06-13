import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist'

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
    storage: localStorage
})

export const store = new Vuex.Store({
    state: {
        products: [{
                id: 621,
                offer: "Sale",
                title: "Be Yourself",
                sku: "AK55-36-Blue",
                stock: "in stock",
                price: 89,
                salePercentage: 65,
                color: "Blue",
                image: '../assets/sneakers.jpg',
                sliderImages: [
                    '../assets/sneakers.jpg',
                    '../assets/sneakers.jpg',
                    '../assets/sneakers.jpg'
                ],
                sale: true,
                productRating: "4",
                sizes: [{
                        number: '36',
                        available: true,
                        selected: false
                    },
                    {
                        number: '37',
                        available: true,
                        selected: false
                    },
                    {
                        number: '38',
                        available: true,
                        selected: false
                    },
                    {
                        number: '39',
                        available: true,
                        selected: false
                    },
                    {
                        number: '40',
                        available: true,
                        selected: false
                    },
                    {
                        number: '41',
                        available: true,
                        selected: false
                    },
                    {
                        number: '42',
                        available: false,
                        selected: false
                    }
                ]
            },
            {
                id: 622,
                offer: "New",
                title: "Star Gazers",
                sku: "AL33-36-White",
                stock: "in stock",
                price: 139,
                salePercentage: '',
                color: "White",
                image: '../assets/shoes_white_1.jpg',
                sliderImages: [
                    '../assets/shoes_white_1.jpg',
                    '../assets/shoes_white_1.jpg',
                    '../assets/shoes_white_1.jpg'
                ],
                sale: false,
                productRating: "5",
                sizes: [{
                        number: '36',
                        available: true,
                        selected: false
                    },
                    {
                        number: '37',
                        available: true,
                        selected: false
                    },
                    {
                        number: '38',
                        available: true,
                        selected: false
                    },
                    {
                        number: '39',
                        available: true,
                        selected: false
                    },
                    {
                        number: '40',
                        available: false,
                        selected: false
                    },
                    {
                        number: '41',
                        available: true,
                        selected: false
                    },
                    {
                        number: '42',
                        available: false,
                        selected: false
                    }
                ]
            },
            {
                id: 623,
                offer: "Sale",
                title: "Millenium Night",
                sku: "AJ11-36-Red",
                stock: "in stock",
                price: 99,
                salePercentage: 15,
                color: "Red",
                image: '../assets/shoes_red_1.jpg',
                sliderImages: [
                    '../assets/shoes_red_1.jpg',
                    '../assets/shoes_red_1.jpg',
                    '../assets/shoes_red_1.jpg'
                ],
                sale: true,
                productRating: "5",
                sizes: [{
                        number: '36',
                        available: true,
                        selected: false
                    },
                    {
                        number: '37',
                        available: false,
                        selected: false
                    },
                    {
                        number: '38',
                        available: true,
                        selected: false
                    },
                    {
                        number: '39',
                        available: true,
                        selected: false
                    },
                    {
                        number: '40',
                        available: true,
                        selected: false
                    },
                    {
                        number: '41',
                        available: true,
                        selected: false
                    },
                    {
                        number: '42',
                        available: false,
                        selected: false
                    }
                ]
            },
            {
                id: 624,
                offer: "New",
                title: "Be Diva Stillettos",
                sku: "AJ11-36-Blue",
                stock: "out of stock",
                price: 84,
                salePercentage: '',
                color: "Blue",
                image: '../assets/shoes_blue_1.jpg',
                sliderImages: [
                    '../assets/shoes_blue_1.jpg',
                    '../assets/shoes_blue_1.jpg',
                    '../assets/shoes_blue_1.jpg'
                ],
                sale: false,
                productRating: "4",
                sizes: [{
                        number: '36',
                        available: true,
                        selected: false
                    },
                    {
                        number: '37',
                        available: true,
                        selected: false
                    },
                    {
                        number: '38',
                        available: true,
                        selected: false
                    },
                    {
                        number: '39',
                        available: false,
                        selected: false
                    },
                    {
                        number: '40',
                        available: true,
                        selected: false
                    },
                    {
                        number: '41',
                        available: true,
                        selected: false
                    },
                    {
                        number: '42',
                        available: false,
                        selected: false
                    }
                ]
            },
            {
                id: 625,
                offer: "Sale",
                title: "Solarine",
                sku: "AG23-36-Black",
                stock: "out of stock",
                price: 249,
                salePercentage: 70,
                color: "Black",
                image: '../assets/shoes_black_1.jpg',
                sliderImages: [
                    '../assets/shoes_black_1.jpg',
                    '../assets/shoes_black_1.jpg',
                    '../assets/shoes_black_1.jpg'
                ],
                sale: true,
                productRating: "4",
                sizes: [{
                        number: '36',
                        available: true,
                        selected: false
                    },
                    {
                        number: '37',
                        available: true,
                        selected: false
                    },
                    {
                        number: '38',
                        available: false,
                        selected: false
                    },
                    {
                        number: '39',
                        available: true,
                        selected: false
                    },
                    {
                        number: '40',
                        available: true,
                        selected: false
                    },
                    {
                        number: '41',
                        available: false,
                        selected: false
                    },
                    {
                        number: '42',
                        available: false,
                        selected: false
                    }
                ]
            },
            {
                id: 626,
                offer: "New",
                title: "Symphony Light",
                sku: "AB75-36-Grey",
                stock: "in stock",
                price: 129,
                salePercentage: '',
                color: "Grey",
                image: '../assets/shoes_grey_1.jpg',
                sliderImages: [
                    '../assets/shoes_grey_1.jpg',
                    '../assets/shoes_grey_1.jpg',
                    '../assets/shoes_grey_1.jpg'
                ],
                sale: false,
                productRating: "5",
                sizes: [{
                        number: '36',
                        available: false,
                        selected: false
                    },
                    {
                        number: '37',
                        available: false,
                        selected: false
                    },
                    {
                        number: '38',
                        available: true,
                        selected: false
                    },
                    {
                        number: '39',
                        available: true,
                        selected: false
                    },
                    {
                        number: '40',
                        available: true,
                        selected: false
                    },
                    {
                        number: '41',
                        available: true,
                        selected: false
                    },
                    {
                        number: '42',
                        available: false,
                        selected: false
                    }
                ],
            },
            {
                id: 627,
                offer: "New",
                title: "Summer walk",
                sku: "AF18-36-Olive",
                stock: "in stock",
                price: 79,
                salePercentage: '',
                color: 'Olive',
                image: '../assets/shoes_1.jpg',
                sliderImages: [
                    '../assets/shoes_1.jpg',
                    '../assets/shoes_2.jpg',
                    '../assets/shoes_3.jpg'
                ],
                sale: false,
                productRating: "5",
                sizes: [{
                        number: '36',
                        available: true,
                        selected: false
                    },
                    {
                        number: '37',
                        available: true,
                        selected: false
                    },
                    {
                        number: '38',
                        available: false,
                        selected: false
                    },
                    {
                        number: '39',
                        available: false,
                        selected: false
                    },
                    {
                        number: '40',
                        available: true,
                        selected: false
                    },
                    {
                        number: '41',
                        available: true,
                        selected: false
                    },
                    {
                        number: '42',
                        available: false,
                        selected: false
                    }
                ]
            }
        ],
        gridImages: [{
                image: '../assets/women_shoes.jpg',
                header: "Women Collection",
                button: "Buy now"
            },
            {
                image: '../assets/men_shoes.jpg',
                header: "Men Collection",
                button: "Buy now"
            },
            {
                image: '../assets/children_shoes.jpg',
                header: "Children Collection",
                button: "Buy now"
            }
        ],
        sizeGuideMen: [{
            USA: [
                7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13
            ],
            UK: [
                6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12
            ],
            EUR: [
                39.5, 40, 41, 41.5, 42, 42.5, 43, 44, 44.5, 45, 46, 47
            ],
            cm: [
                26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5, 30, 30.5, 31, 31.5
            ]
        }],
        sizeGuideWomen: [{
            USA: [
                6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11
            ],
            UK: [
                3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5
            ],
            EUR: [
                36.5, 37.5, 38, 38.5, 39, 39.5, 40, 41, 41.5, 42, 42.5
            ],
            cm: [
                24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29
            ]
        }],
        sizeGuideChildren: [{
            USA: [
                11, 12, 13, 1, 2, 3, 4, 5, 6
            ],
            UK: [
                10, 11, 12, 13, 1, 2, 3, 4, 5
            ],
            EUR: [
                28, 29.5, 31, 32, 33.5, 35, 36, 37.5, 38.5
            ],
            cm: [
                18.5, 19.5, 20, 21, 22, 23, 23.5, 24.5, 25.5
            ]
        }],
        inCart: [],
        productPreview: []
    },
    getters: {
        products: state => state.products,
        gridImages: state => state.gridImages,
        sizeGuideMen: state => state.sizeGuideMen,
        sizeGuideWomen: state => state.sizeGuideWomen,
        sizeGuideChildren: state => state.sizeGuideChildren,
        inCart: state => state.inCart,
        productPreview: state => state.productPreview,
    },
    mutations: {
        CLEAR_PRODUCT_PREVIEW(state) { state.productPreview = [] },
        SHOW_PRODUCT(state, id) { state.productPreview.push(id); },
        ADD_TO_CART(state, id) { state.inCart.push(id); },
        REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1); }
    },
    actions: {
        clearProductPreview(context) { context.commit('CLEAR_PRODUCT_PREVIEW') },
        showProduct(context, id) { context.commit('SHOW_PRODUCT', id); },
        addToCart(context, id) { context.commit('ADD_TO_CART', id); },
        removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); }
    },
    plugins: [vuexLocalStorage.plugin]
});