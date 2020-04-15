export default {
    state: {
        shopList: [
            {
                id: 1,
                title: 'Nike red',
                description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
                img: require('../assets/img/1.png'),
                gallery: [
                    {
                        name: 'Nike red first',
                        img: require('../assets/img/1.png'),
                    },
                    {
                        name: 'Nike red second',
                        img: require('../assets/img/2.png'),
                    },
                    {
                        name: 'Nike red third',
                        img: require('../assets/img/3.png'),
                    }
                ]
            },
            {
                id: 2,
                title: 'Nike default',
                description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
                img: require('../assets/img/4.png'),
                gallery: [
                    {
                        name: 'Nike default first',
                        img: require('../assets/img/4.png'),
                    },
                    {
                        name: 'Nike default second',
                        img: require('../assets/img/5.png'),
                    },
                    {
                        name: 'Nike default third',
                        img: require('../assets/img/6.png'),
                    }
                ]
            },
            {
                id: 3,
                title: 'Nike street',
                description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
                img: require('../assets/img/7.png'),
                gallery: [
                    {
                        name: 'Nike street first',
                        img: require('../assets/img/7.png'),
                    },
                    {
                        name: 'Nike street second',
                        img: require('../assets/img/8.png'),
                    },
                    {
                        name: 'Nike street third',
                        img: require('../assets/img/9.png'),
                    }
                ]
            },
            {
                id: 4,
                title: 'Nike zoom',
                description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
                img: require('../assets/img/10.png'),
                gallery: [
                    {
                        name: 'Nike zoom second',
                        img: require('../assets/img/11.png'),
                    },
                    {
                        name: 'Nike zoom third',
                        img: require('../assets/img/12.png'),
                    }
                ]
            }
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        getShopList(state) {
            return state.shopList
        },
        getProduct: (state) => (id) => {
            return state.shopList.find(product => product.id == id)
        }
    }
}