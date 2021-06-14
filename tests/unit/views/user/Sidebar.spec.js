import { mount, createLocalVue } from '@vue/test-utils';
import Sidebar from "@/views/user/Sidebar";
import mockState from '../../utils/mockState';
import Vuex from 'vuex';
import VueRouter from "vue-router";
import routes from "@/router/routes";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

describe('Sidebar', () => {
    let wrapper
    let store
    let state
    let router

    beforeEach(() => {
        router = new VueRouter({ routes })
        state = mockState.state
        store = new Vuex.Store({
            state: state
        })

        wrapper = mount(Sidebar, {
            stubs: ['md-icon'],
            store,
            localVue,
            router
        });
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('renders correctrly', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('logs out user', async () => {
        const logoutMock = jest.spyOn(wrapper.vm, 'logout');

        await wrapper.find('.logout-btn').trigger('click');

        expect(logoutMock).toHaveBeenCalled();
    })
})