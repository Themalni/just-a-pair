import { mount, createLocalVue } from '@vue/test-utils';
import SizeVariations from '@/components/Size/SizeVariations';
import mockState from '../utils/mockState';
import Vuex from 'vuex';


const localVue = createLocalVue();
localVue.use(Vuex);

describe('SizeVariations', () => {
    let wrapper
    let store
    let state

    beforeEach(() => {
        state = mockState.state
        store = new Vuex.Store({
            state: state
        })

        wrapper = mount(SizeVariations, {
            store,
            localVue,
            stubs: ['md-icon'],
            propsData: {
                sizes: ['36']
            }
        });
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('renders correctrly', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })

    it('resets selected size to default value', async () => {
        await wrapper.setData({ selectedSize: '40' })
        expect(wrapper.vm.selectedSize).toBe('40')

        wrapper.vm.resetSize();
        expect(wrapper.vm.selectedSize).toBe(null)
    })

    it('emits selected size and sets `selectedSize` in data', () => {
        wrapper.vm.selectShoesSize('38');
        wrapper.vm.$emit('selectedSize', '38');

        expect(wrapper.emitted().selectedSize).toBeTruthy();
        expect(wrapper.emitted().selectedSize[0]).toEqual(['38']);
        expect(wrapper.vm.selectedSize).toBe('38');
    })

    it('resets selected size when product id has been changed', async () => {
        const resetSizeMock = jest.spyOn(wrapper.vm, 'resetSize')
        store.state.productPreview.id = 999;

        await wrapper.vm.$nextTick();
        expect(resetSizeMock).toHaveBeenCalled();
    })
})