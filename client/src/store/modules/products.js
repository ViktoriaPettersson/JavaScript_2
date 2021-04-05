import axios from 'axios'


export default {
  state: {
    products: [],
    product: null,
    searchValue: ''
  },
  // Använder getter för att retunera products och product
  getters: {
    products: state => state.products,
    product: state => state.product,
    // För varje objekt tar jag titeln och gör dem till små bokstäver och försöker matcha det med sökvärdet
    filterProducts: state => {
      return state.products.filter(product => product.name.toLowerCase().match(state.searchValue.toLowerCase()))
    }
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      // Här lägger jag in min products som jag skickat med i actions och lägger in i products som finns i mitt state
      state.products = products
    },
    SET_ONEPRODUCT: (state, product) => {
      // Stoppar in datan i product. Den första är state och den andra är payload som jag skickar med
      state.product = product
    },
    // Här får jag tillgång till state och value. Jag tar state till mitt value
    SEARCH: (state, value) => {
      state.searchValue = value
    }
  },
  // Hämtningen sker i actions. Jag hämtar mina produkter från mitt API
  actions: {
    getProducts: async ({commit}) => {
      const res = await axios.get('http://localhost:9999/api/products')
      commit('SET_PRODUCTS', res.data)
    },
    // Måste ha med ID i funktionen som jag får när jag klickar in på en produkt
    getOneProduct: async ({commit}, _id) => {
      const res = await axios.get('http://localhost:9999/api/products/' + _id)
      commit('SET_ONEPRODUCT', res.data)
    },
    // En funktion som byter ut värdet av (value)
    search: ({commit}, value) => {
      commit('SEARCH', value)
    }
  }
}