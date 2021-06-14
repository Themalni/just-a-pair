import actions from '@/store/actions';
import { product } from '../utils/mockProductData';

import {
    SET_USER,
    CLEAR_USER,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SET_PRODUCT_TO_PREVIEW
} from "@/store/types";

describe('Actions', () => {
    const payload = {};

    it('SET_USER', () => {
        const commit = jest.fn();
        const authData = {
            displayName: 'John Smith',
            email: 'john_doe@gmail.com'
        }
        actions[SET_USER]({commit}, authData)
        expect(commit).toHaveBeenCalledWith('setUser', authData)
    });

    it('CLEAR_USER', () => {
        const commit = jest.fn();
        actions[CLEAR_USER]({commit})
        expect(commit).toHaveBeenCalledWith('clearUser')
    });

    it('ADD_TO_CART', () => {
        const commit = jest.fn();
        actions[ADD_TO_CART]({commit}, payload)
        expect(commit).toHaveBeenCalledWith('addToCart', payload)
    });

    it('REMOVE_FROM_CART', () => {
        const commit = jest.fn();
        const productData = {
            id: product.id,
            size: product.size
        }
        actions[REMOVE_FROM_CART]({commit}, productData)
        expect(commit).toHaveBeenCalledWith('removeFromCart', productData)
    });

    it('SET_PRODUCT_TO_PREVIEW', () => {
        const commit = jest.fn();
        actions[SET_PRODUCT_TO_PREVIEW]({commit}, payload)
        expect(commit).toHaveBeenCalledWith('setProductToPreview', payload)
    });
})