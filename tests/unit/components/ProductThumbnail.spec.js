import { mount, createLocalVue } from '@vue/test-utils';
import ProductThumbnail from '@/components/Product/ProductThumbnail';
import mockState from '../utils/mockState';
import Vuex from 'vuex';
import salePrice from "@/filters.js";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.filter('salePrice', salePrice);

describe('ProductThumbnail', () => {
    let wrapper
    let store
    let state

    beforeEach(() => {
        state = mockState.state
        store = new Vuex.Store({
            state
        })

        wrapper = mount(ProductThumbnail, {
            stubs: ['router-link'],
            store,
            localVue,
            propsData: {
                product: {
                    id: 621,
                    title: 'Summer sandals',
                    sku: 'BR55-36-Black',
                    price: 120,
                    salePercentage: 30,
                    color: 'Black',
                    image: '../assets/sneakers.jpg',
                    sliderImages: [
                        '../assets/sneakers.jpg',
                        '../assets/sneakers.jpg',
                        '../assets/sneakers.jpg'
                    ],
                    sale: true,
                    amount: 1,
                    size: 37
                }
            }
        });
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('renders correctrly', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('`SET_PRODUCT_TO_PREVIEW` is dispatched when thumbnail is clicked', async () => {
        const showProductMock = jest.spyOn(wrapper.vm, 'showProduct');

        await wrapper.find(".product-thumbnail").trigger("click")

        expect(showProductMock).toBeCalled();
    });
})