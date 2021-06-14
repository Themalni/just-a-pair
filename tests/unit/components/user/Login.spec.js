import { mount, createLocalVue } from '@vue/test-utils';
import Login from '@/components/user/Login';
import mockState from '../../utils/mockState';
import Vuex from 'vuex';
import VueRouter from "vue-router";
import routes from "@/router/routes";
import $ from 'jquery';

global.$ = $;

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

describe('Login', () => {
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

        wrapper = mount(Login, {
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

    it('registers new user', async () => {
        wrapper.vm.email = 'john_doe@gmail.com';
        wrapper.vm.password = '12Dfrt23#';

        const registerUserMock = jest.spyOn(wrapper.vm, 'registerUser');

        await wrapper.find('.register-btn').trigger('click');

        expect(registerUserMock).toBeCalled();
    });
})