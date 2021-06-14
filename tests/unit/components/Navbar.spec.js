import { mount, createLocalVue } from '@vue/test-utils';
import Navbar from '@/components/Navbar';
import Popover from "@/components/Popover";
import mockState from '../utils/mockState';
import Vuex from 'vuex';
import salePrice from "@/filters.js";
import VueRouter from "vue-router";
import routes from "@/router/routes";
import $ from 'jquery';

global.$ = $;

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
localVue.filter('salePrice', salePrice);

describe('Navbar', () => {
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

        wrapper = mount(Navbar, {
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

    it('register button is visible when user is not logged in', async () => {
        state.user = null;
        const navPopover = wrapper.findComponent(Popover);
        const userButton = navPopover.findAll('a').at(0);

        await userButton.trigger('click');

        const registerButton = navPopover.find('.register-btn');

        expect(store.state.user).toBe(null);
        expect(registerButton.isVisible()).toBe(true);
    });

    it('login button is visible when user is not logged in', async () => {
        state.user = null;
        const navPopover = wrapper.findComponent(Popover);
        const userButton = navPopover.findAll('a').at(0);

        await userButton.trigger('click');

        const loginButton = navPopover.find('.login-btn');

        expect(store.state.user).toBe(null);
        expect(loginButton.isVisible()).toBe(true);
    });

    it('user profile button is visible when user is logged in', async () => {
        store.state.user = {
            displayName: 'John Smith',
            email: 'john_doe@gmail.com'
        }
        const navPopover = wrapper.findComponent(Popover);
        const userButton = navPopover.findAll('a').at(0);

        await userButton.trigger('click');

        const userProfileButton = await navPopover.find('.user-profile');

        expect(userProfileButton.isVisible()).toBe(true);
    });

    it('logout button is visible when user is logged in', async () => {
        store.state.user = {
            displayName: 'John Smith',
            email: 'john_doe@gmail.com'
        }
        const navPopover = wrapper.findComponent(Popover);
        const userButton = navPopover.findAll('a').at(0);

        await userButton.trigger('click');

        const logoutButton = await navPopover.find('.logout-btn');

        expect(logoutButton.isVisible()).toBe(true);
    });

    it('logs out user', async () => {
        store.state.user = {
            displayName: 'John Smith',
            email: 'john_doe@gmail.com'
        }
        const navPopover = wrapper.findComponent(Popover);
        const userButton = navPopover.findAll('a').at(0);
        const logoutMock = jest.spyOn(wrapper.vm, 'logout');
        const firebaseSignOutMock = jest.spyOn(wrapper.vm, 'firebaseSignOut');

        await userButton.trigger('click');

        const logoutButton = navPopover.find('.logout-btn');

        await logoutButton.trigger("click");

        expect(logoutMock).toHaveBeenCalled();
        expect(firebaseSignOutMock).toHaveBeenCalled();
    })
})