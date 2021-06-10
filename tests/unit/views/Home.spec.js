import { mount, createLocalVue } from '@vue/test-utils';
import Home from '@/views/Home';
import PageHeader from "@/components/PageHeader";
import Collection from "@/components/Collection";
import ProductThumbnail from "@/components/product/ProductThumbnail";
import Footer from "@/components/Footer";
import VueScrollTo from "vue-scrollto";
import salePrice from "@/filters.js";

const localVue = createLocalVue();
localVue.directive('scroll-to', VueScrollTo);
localVue.filter('salePrice', salePrice);


describe('Home', () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(Home, {
            stubs: ['router-link'],
            localVue
        });
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('renders correctly', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('it has PageHeader rendered in the view', () => {
        const header = wrapper.findComponent(PageHeader)
        expect(header.exists()).toBe(true)
    });

    it('it has Collection rendered in the view', () => {
        const collection = wrapper.findComponent(Collection)
        expect(collection.exists()).toBe(true)
    });

    it('it has ProductThumbnail rendered in the view', () => {
        const thumbnail = wrapper.findComponent(ProductThumbnail)
        expect(thumbnail.exists()).toBe(true)
    });

    it('it has Footer rendered in the view', () => {
        const footer = wrapper.findComponent(Footer)
        expect(footer.exists()).toBe(true)
    });
})