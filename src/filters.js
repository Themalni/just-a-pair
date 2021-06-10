import Vue from 'vue';

Vue.filter('salePrice', (price, sale) => {
    if (!price) price = 0;
    if (!sale) sale = 0;
    return price - Math.floor((sale / 100) * price);
});

export default Vue.filter('salePrice');