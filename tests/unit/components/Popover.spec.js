import { mount } from '@vue/test-utils';
import Popover from '@/components/Popover';

describe('Navbar', () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(Popover);
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('renders correctrly', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('opens popover', () => {
        wrapper.vm.openPopover();

        expect(wrapper.vm.isOpen).toBeTruthy();
    });

    it('closes popover', () => {
        wrapper.vm.closePopover();

        expect(wrapper.vm.isOpen).toBeFalsy();
    });
})