import { mount, createLocalVue } from '@vue/test-utils';
import UserDashboard from "@/views/user/UserDashboard";
import mockState from '../../utils/mockState';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('UserDashboard', () => {
    let wrapper
    let store
    let state

    beforeEach(() => {
        state = mockState.state
        store = new Vuex.Store({
            state: state
        })

        wrapper = mount(UserDashboard, {
            stubs: ['md-icon'],
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
})