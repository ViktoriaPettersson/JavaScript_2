import axios from 'axios'

export default {

  state: {

  },
  getters: {

  },
  mutations: {
   
  },
  actions: {
         // Skickar in ordern till databasen. Använder en commit som har med sig en payload med cart och userInfo
         order: ({commit}, {cart, userInfo}) => {
             
            axios.post('http://localhost:9999/api/order/new', {
                cart: cart,
                userInfo: userInfo 
            })
            .then(res => {
                console.log(res)
                commit('USER_ORDER', {cart, userInfo}); 
                })
            .catch(err => {
                console.log(err.res)
                })
              
        }
  },

}