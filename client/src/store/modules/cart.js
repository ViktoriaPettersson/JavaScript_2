// import axios from 'axios'

export default {
    state: {
        // När man klickar på add to cart så ska produkten pushas till cart
        cart: [],
        // item: []
        
    },
    getters: {
        cart: state => {
            
            return state.cart
        },
        
        // Öka i badge

        //Ökar inte för varje item
        // itemCounter: state => {
        //     return state.cart.length;

        // }
        itemCounter: state => {
            let increase = 0;
            state.cart.forEach(item => {
                increase += item.quantity
                
            });
            
            return increase
        },
        
    },

    mutations: {

    ADD_TO_CART: (state, {product, quantity}) => {

    // När man lägger till fler av samma produkt ska quantity öka
    // Jag sparar in objektet i en variabel. 
    // Först kollar jag om den finns genom att gå in i cart och använda find. 
    // Jag jämför product.id som ligger i cart med product.id som jag skickar med ovan. 
    // Om den inte finns blir det false
    // Om den finns så ska quantity öka annars ska produkten pushas till cart
            let productInCart = state.cart.find(item => {
                return item.product._id === product._id
            })
            if(productInCart) {
                productInCart.quantity += quantity;
    // Gör en return så att den hoppar ut ur funktionen
                return;
            }
    // pushar product och quantity till state.cart
            state.cart.push({
                product,
                quantity
            })
            // Sparar min cart i localStorage så att den finns kvar. Jag stringifierar state.cart
    },
    DELETE_ALL_PRODUCTS: (state, product) => {
        state.cart = state.cart.filter(item => {
            return item.product.id !== product.id
        })
    },

    // Kollar först om product i cart matchar med id jag skickar med
    REMOVE_PRODUCT_IN_CART: (state, product) => {
        let found = state.cart.find(item => {
            return item.product._id === product._id
        })
        // Om product matchar och antal är större än 1 minskar jag quantity när jag klickar på knappen
        if (found) {
           
            if(found.quantity > 1)
           { 
            found.quantity--
            return
            }
        }
        
    },
    ADD_PRODUCT_IN_CART: (state, product) => {
        let found = state.cart.find(item => {
            return item.product._id === product._id
        })
        // Om product matchar ökar jag quantity när jag klickar på knappen
        if (found) {
            found.quantity++
            return
        }
    },

    },
   
    actions: {
         // Skickar med product och quantity och commitar en mutation och skickar med payload
        addProductToCart: ({commit}, {product, quantity}) => {

            // (localStorage.setItem('test', JSON.stringify(product)))

            commit('ADD_TO_CART', {product, quantity});
        },
        // Commitar mutation
        removeProductInCart: ({commit}, product) => {
            // (localStorage.setItem('test', JSON.stringify([product])))
            commit('REMOVE_PRODUCT_IN_CART', product);
        },
        addProductInCart: ({commit}, product) => {
            // (localStorage.setItem('test', JSON.stringify([product])))
            commit('ADD_PRODUCT_IN_CART', product);
        },
        deleteProducts: ({commit}, product) => {
            commit('DELETE_ALL_PRODUCTS', product)
        }
}

}