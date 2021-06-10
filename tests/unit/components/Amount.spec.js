import { mount, createLocalVue } from '@vue/test-utils';
import Amount from '@/components/Amount';
import mockState from '../utils/mockState';
import Vuex from 'vuex';


const localVue = createLocalVue();
localVue.use(Vuex);

describe('Amount', () => {
    let wrapper
    let store
    let state
    let spy

    beforeEach(() => {
        // state: mockState
        store = new Vuex.Store({
            state: mockState
        })

        wrapper = mount(Amount, {
            store,
            localVue,
            propsData: {
                label: 'Select product amount'
            }
        });
    });

    afterEach(() => {
        wrapper.destroy();
    })

    it('renders correctrly', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })

    it('renders label correctly', () => {
        expect(wrapper.vm.label).toBe('Select product amount')
    })

    it('resets amount to default value', async () => {
        await wrapper.setData({ selectedAmount: 3 })
        expect(wrapper.vm.selectedAmount).toBe(3)

        wrapper.vm.resetAmount();
        expect(wrapper.vm.selectedAmount).toBe(1)
    })

    it('increases amount by `1`', async () => {
        wrapper.vm.increaseAmount();
        expect(wrapper.vm.selectedAmount).toBe(2)
    })

    it('emits increased value', async () => {
        const selectedAmount = wrapper.vm.selectedAmount;

        wrapper.vm.increaseAmount();
        wrapper.vm.$emit('amount', selectedAmount);

        expect(wrapper.emitted().amount).toBeTruthy();
        expect(wrapper.emitted().amount[0]).toEqual([2])
    })

    it('decreases amount by `1`', async () => {
        await wrapper.setData({ selectedAmount: 3 })
        wrapper.vm.decreaseAmount();
        expect(wrapper.vm.selectedAmount).toBe(2)
    })

    it('decrease amount is not called if amount is less or qual to `1`', () => {
        wrapper.vm.decreaseAmount();
        expect(wrapper.vm.selectedAmount).toBe(1);
    })

    it('emits deccreased value', async () => {
        await wrapper.setData({ selectedAmount: 3 })
        const selectedAmount = wrapper.vm.selectedAmount;

        wrapper.vm.decreaseAmount();
        wrapper.vm.$emit('amount', selectedAmount);

        expect(wrapper.emitted().amount).toBeTruthy();
        expect(wrapper.emitted().amount[0]).toEqual([2])
    })

    it('resets selected amount when product id has been changed', async () => {
        console.log("productPreview:", wrapper.vm.$store.state)
        // wrapper.vm.$store.state.productPreview.id = 999;
        // wrapper.vm.$nextTick(() => {
        //     expect(wrapper.vm.resetAmount()).toBeCalled();
        //     done();
        // });
        // wrapper.vm.$options.watch.$store.state.productPreview.id.call(wrapper.vm, 999);
        // state.productPreview.id = 622;
        
    })
})