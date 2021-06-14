import mutations from '@/store/mutations';
import mockState from '../utils/mockState';
import { product, productPreview } from '../utils/mockProductData';

import {
    SET_USER,
    CLEAR_USER,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SET_PRODUCT_TO_PREVIEW
} from "@/store/types";

let state

beforeEach(() => {
  state = mockState.state
})

describe('SET_USER', () => {
    it('sets new user', () => {
        const authData = {
            displayName: 'John Smith',
            email: 'john_doe@gmail.com'
        }

        mutations[SET_USER](state, authData);

        expect(state.user).toStrictEqual({
            displayName: 'John Smith',
            email: 'john_doe@gmail.com'
        })
    })
});

describe('CLEAR_USER', () => {
    it('clears user after logout', () => {
        mutations[CLEAR_USER](state);

        expect(state.user).toBe(null);
    })
});

describe('ADD_TO_CART', () => {
    it('adds product to cart', () => {
        const foundInCart = state.inCart.some(item => item.id === product.id && item.size === product.size);

        mutations[ADD_TO_CART](state, product);

        if(foundInCart) {
            state.inCart.map(item => {
                if(item.id === product.id && item.size === product.size) {
                    expect(item.amount).toBe(item.amount + product.amount)
                }
            })
        }

        expect(state.inCart).toEqual(expect.arrayContaining([product]));
    })
});

describe('REMOVE_FROM_CART', () => {
    it('removes product from cart', () => {
        const productData = {
            id: product.id,
            size: product.size
        }
        const productIndex = () => state.inCart.findIndex(cartItem => cartItem.id === product.id && cartItem.size === product.size);

        expect(productIndex()).not.toBe(-1);

        mutations[REMOVE_FROM_CART](state, productData);

        expect(productIndex()).toBe(-1);
    })
});

describe('SET_PRODUCT_TO_PREVIEW', () => {
    it('sets product for preview', () => {
        mutations[SET_PRODUCT_TO_PREVIEW](state, productPreview);

        expect(state.productPreview).toEqual(expect.objectContaining(productPreview));
    })
});

