import { mount, createLocalVue } from '@vue/test-utils';
import Product from '@/views/Product';
import mockState from '../utils/mockState';
import Vuex from 'vuex';
import salePrice from "@/filters.js";
import $ from 'jquery';
import { ADD_TO_CART } from "@/store/types";

global.$ = $;

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.filter('salePrice', salePrice);

describe('Product', () => {
    let wrapper
    let store
    let state

    beforeEach(() => {
        state = mockState.state
        store = new Vuex.Store({
            state: state
        })

        wrapper = mount(Product, {
            stubs: ['router-link', 'md-icon'],
            store,
            localVue
        });
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('renders correctrly', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('sets selected size and hides warning message', () => {
        expect(wrapper.vm.selectedSize).toBe(null);

        wrapper.vm.sizeNotSelected = true;
        wrapper.vm.setSelectedSize(36);

        expect(wrapper.vm.selectedSize).toBe(36);
        expect(wrapper.vm.sizeNotSelected).toBeFalsy();
    })

    it('sets amount', () => {
        expect(wrapper.vm.selectedAmount).toBe(1);

        wrapper.vm.setAmount(3);

        expect(wrapper.vm.selectedAmount).toBe(3);
    })

    it('resets selected amount and size when product id has been changed', async () => {
        const resetSizeAndAmountMock = jest.spyOn(wrapper.vm, 'resetSizeAndAmount')
        store.state.productPreview.id = 999;

        await wrapper.vm.$nextTick();
        expect(resetSizeAndAmountMock).toHaveBeenCalled();
    });

    it('size is not selected', async () => {
        const button = wrapper.find('.cart-btn');

        await button.trigger("click");

        expect(wrapper.vm.sizeNotSelected).toBeTruthy();
    });

    it('adds product to cart when `addToCart` is called', async () => {
        const addToCartMock = jest.spyOn(wrapper.vm, 'addToCart');
        const addToCartDispatchMock = jest.spyOn(wrapper.vm, ADD_TO_CART);
        const button = wrapper.find('.cart-btn');
        wrapper.vm.selectedSize = 40;

        await button.trigger("click");

        expect(addToCartMock).toHaveBeenCalled();
        expect(addToCartDispatchMock).toHaveBeenCalled();
        expect(wrapper.vm.sizeNotSelected).toBeFalsy();
    });
})