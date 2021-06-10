import { createLocalVue } from "@vue/test-utils"
import salePrice from "@/filters.js";

const localVue = createLocalVue()
localVue.filter('salePrice', salePrice)

describe("salePrice", () => {
    it("changes original product price to price after discount", () => {
        expect(salePrice(200, 50)).toEqual(100)
    })

    it("if `price` is null it sets it to 0", () => {
        const price = null;
        expect(salePrice(price, 50)).toEqual(0)
    })

    it("if `sale` is null it sets it to 0 and return original price", () => {
        const sale = null;
        expect(salePrice(200, sale)).toEqual(200)
    })
})