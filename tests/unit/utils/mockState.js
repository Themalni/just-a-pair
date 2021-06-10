export default {
    state: {
        selectedProduct: {
            id: 621,
            title: 'Summer sandals',
            sku: 'BR55-36-Black',
            price: 120,
            salePercentage: 30,
            color: 'Black',
            image: '../assets/sneakers.jpg',
            sliderImages: [
                '../assets/sneakers.jpg',
                '../assets/sneakers.jpg',
                '../assets/sneakers.jpg'
            ],
            sale: true,
            amount: 1,
            size: 37
        },
        inCart: [
            {
                id: 621,
                title: 'Summer sandals',
                sku: 'BR55-36-Black',
                price: 120,
                salePercentage: 30,
                color: 'Black',
                image: '../assets/sneakers.jpg',
                sliderImages: [
                    '../assets/sneakers.jpg',
                    '../assets/sneakers.jpg',
                    '../assets/sneakers.jpg'
                ],
                sale: true,
                amount: 1,
                size: 37
            }
        ],
        productPreview: {
            id: 621,
            offer: "Sale",
            title: 'Summer sandals',
            sku: 'BR55-36-Black',
            inStock: true,
            price: 120,
            salePercentage: 30,
            color: 'Black',
            image: '../assets/sneakers.jpg',
            sliderImages: [
                '../assets/sneakers.jpg',
                '../assets/sneakers.jpg',
                '../assets/sneakers.jpg'
            ],
            sale: true,
            productRating: "4",
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
                    available: false
                }
            ]
        },
        user: {
            displayName: 'John Smith',
            email: 'john_doe@gmail.com'
        }
    }
}