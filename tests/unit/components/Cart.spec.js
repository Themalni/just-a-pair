import { mount, createLocalVue } from '@vue/test-utils';
import Cart from '@/components/Cart';
import mockState from '../utils/mockState';
import Vuex from 'vuex';
import salePrice from "@/filters.js";
import { REMOVE_FROM_CART } from "@/store/types";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.filter('salePrice', salePrice);

describe('Cart', () => {
    let wrapper
    let store
    let state

    beforeEach(() => {
        state = mockState.state
        store = new Vuex.Store({
            state: state
        })

        wrapper = mount(Cart, {
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

    it('item is removed from cart', async () => {
        const removeFromCartMock = jest.spyOn(wrapper.vm, 'removeFromCart')
        const removeFromCartDispatchMock = jest.spyOn(wrapper.vm, REMOVE_FROM_CART);
        const button = wrapper.find('.btn-remove');

        await button.trigger("click");

        expect(removeFromCartMock).toHaveBeenCalled();
        expect(removeFromCartDispatchMock).toHaveBeenCalled();
    })

})