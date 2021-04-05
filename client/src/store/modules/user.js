import axios from 'axios'

import router from '../../router/index'

// State kan innehålla objekt, strings osv
// Mutations uppdaterar state
// Actions gör request till API och commitar till mutationer

export default {
    state: {
        loggedIn: false,
        userToken: null,

    },
    getters: {
        loggedIn: state => state.loggedIn
    },
    mutations: {
         // får med sig token från datan
        SET_USER: (state, token) => {

        // Om det skickas en token när SET_USER körs 
        if(token) {
                state.userToken = token
                state.loggedIn = true
            }
        // Om det inte skickas en token
        else {
            state.userToken = null
            state.loggedIn = false 
        }
        },
        // Finns ingen payload och skickar därför bara in state

        CHECK_TOKEN: (state) => {
            // Hämta en token
            try {
                let token = sessionStorage.getItem('tokenInStorage')
                if(token) {
                    state.userToken = token
                    state.loggedIn = true
                }
                // Om den inte finns
                else {
                   state.loggedIn = false
                   state.userToken = null
                }
            }
            catch(err){
                console.log(err)
            }
        }
    },
    
    actions: {
        // Registrera en användare
        // Skickar med ett användarobjekt
        // Använder POST när en ny användare registreras
        // Skickar med register-objekt
       
      
        registerUser: async ({dispatch}, registerPayload) => {
            const loginInfo = {
                email: registerPayload.email,
                password: registerPayload.password

            }
            await axios.post('http://localhost:9999/api/users/register', registerPayload)
            // Disptach för automatisk inloggning efter registrering
            dispatch('loginAfterReg', {loginInfo})
            
        },
        //loginAfterReg-funktion med payload från komponenten
        // POST mot users/login 
        // Skickar med payload OCH loginInfo med så att autentiseringen blir lyckad EFTER man har regisrerat sig
        loginAfterReg: async ({commit}, loginPayload) => {
            await axios.post('http://localhost:9999/api/users/login', loginPayload.loginInfo)
            .then (res => {
                        // Om status = 200 vill jag spara in token
                        if(res.status === 200) {
                            sessionStorage.setItem('tokenInStorage', res.data.token)
                            commit('SET_USER', res.data.token)

                            if(loginPayload.route) {
                                router.push(loginPayload.route)
                            }else {
                                router.push('/')
                            }
                        }
                    })
            .catch(err => {
                if(err.status === 404) {
                    console.log(err)
                }
            })
        },
        // Login-funktion
        login: async ({commit}, loginPayload) => {
            await axios.post('http://localhost:9999/api/users/login', loginPayload)
            .then (res => {
                        // Om status = 200 vill jag spara in token
                        if(res.status === 200) {
                            // Ser till att min token sparas i den aktuella tabben
                            // Döper den till tokenInStorage och sparar res.data.token
                            sessionStorage.setItem('tokenInStorage', res.data.token)
                            commit('SET_USER', res.data.token)

                            // Om payloaden har en route vill jag pusha payloaden
                            if(loginPayload.route) {
                                router.push(loginPayload.route)
                            }else {
                                router.push('/')
                            }

                        }
                    })
        },
        // En action som kollar om vi har en token
        checkToken: ({commit}) => {
            commit('CHECK_TOKEN')
        }
    }
}