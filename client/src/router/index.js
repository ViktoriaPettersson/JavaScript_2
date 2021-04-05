import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import UserPage from '../views/UserPage.vue'
// import { query } from 'express'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/details/:_id',
    name: 'Details',
    component: ProductDetails
  },
  {
    path: '/userpage',
    name: 'UserPage',
    component: UserPage,
    meta: { authorize: true }
  },
  
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// BeforeEach - Inbyggd metod i vue-router
// Får tillgång till stället vi ska till, var vi kommer från och next för att gå vidare
router.beforeEach((to, from, next) => {
  // plockar ut authorize i meta-objektet
  // Meta ligger i to
  const { authorize } = to.meta
  const token = localStorage.getItem('tokenInStorage')

  // först kollar jag om det finns en authorize
  if(authorize) {

      // Om det inte finns en token så körs en next med en path till login
      
      if(!token) {
      // redirect: to.fullPath innehåller var användaren ville gå någonstans
      next({path: '/login', query: { redirect: to.fullPath} })
      }
      // Finns det en token går den till next
      else {
        next()
      }
      
  }
  next()
})



export default router
