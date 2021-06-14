const product = {
    id: 700,
    title: 'Winter boots',
    sku: 'IKR-39-Black',
    price: 140,
    salePercentage: 20,
    color: 'Black',
    image: '../assets/sneakers.jpg',
    sliderImages: [
        '../assets/sneakers.jpg',
        '../assets/sneakers.jpg',
        '../assets/sneakers.jpg'
    ],
    sale: true,
    amount: 1,
    size: 39
}

const productPreview = {
    id: 705,
    offer: "New",
    title: 'Spring shoes',
    sku: 'GGT6-39-Pink',
    inStock: true,
    price: 200,
    salePercentage: 0,
    color: 'Pink',
    image: '../assets/sneakers.jpg',
    sliderImages: [
        '../assets/sneakers.jpg',
        '../assets/sneakers.jpg',
        '../assets/sneakers.jpg'
    ],
    sale: false,
    productRating: "5",
    sizes: [
        {
            number: '36',
            available: true
        },
        {
            number: '37',
            available: true
        },
        {
            number: '38',
            available: true
        },
        {
            number: '39',
            available: true
        },
        {
            number: '40',
            available: true
        },
        {
            number: '41',
            available: true
        },
        {
            number: '42',
            available: true
        }
    ]
}

export { product, productPreview }