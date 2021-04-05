<template>
 <div>
   <div>
       <li class="nav-item dropdown">
        <a 
        class="nav-link" 
        id="navbarDropdown" 
        data-toggle="dropdown"
        aria-haspopup="true" 
        aria-expanded="false">
        <i class="fas fa-shopping-cart"></i>
        <span class="badge rounded-pill badge-notification bg-danger">{{itemCounter}}</span>
        </a>
        <div class="dropdown-menu dropdown-menu-right px-4" aria-labelledby="navbarDropdown">
        <!-- För varje item i cart vill jag skriva ut product-name, price och quantity -->
        
          <h3 class="text-center border-bottom p-3 mt-0">Shopping Cart</h3>
          <div v-if="cart.length < 1" class="p-3">Your shopping cart is empty</div>

          <div v-for="item in cart" :key="item.product._id" class="d-flex justify-content-between py-3 px-3 border-bottom">
            <div>
              <p>{{item.product.name}}</p>
              <p>${{item.product.price}}</p>
              
              <div class="btn-group-sm" role="group" area-label="quantity">
                <!-- click.stop förhindrar att rutan stängs ner när man trycker på knapparna -->
                <!-- En knappar i cart som minskar och ökar quantity -->
                <button @click.stop="removeProduct(item.product)" class="cart-btn btn btn-light ml-0">-</button>
                {{item.quantity}}
                <button @click.stop="addInCart(item.product)" class="cart-btn btn btn-light">+</button>
                <div @click.stop="deleteProducts(item.product)" class="mt-3 trash-can">
                  <i class="fas fa-trash"></i>
                </div>
              </div>

            </div>
            
            <div>
                <img
                :src="item.product.image"
                class="rounded mb-0"
                alt="sample photo"
                width="100px"
              />
            </div>
          </div>
          
          <div class="">
            <div class="p-3 d-flex justify-content-between align-items-center border-bottom">
              <div>
               <div><strong>Products</strong></div> 
               <div><small>Shipping</small></div>
              </div>
              <div>
                <div><strong>$1000</strong></div>
                <div><small>$50</small></div>
              </div>
          </div>
          <div class="d-flex justify-content-between align-items-center mt-2 p-3">
            <div><strong>TOTAL</strong></div>
            <div><strong>$1050</strong></div>
          </div>

          </div>

<!-- Om användare inte är inloggad så går checkout-knappen till login-sidan så att den kan logga in eller registrera sig först -->
            <div v-if="!loggedIn" class="checkout text-center mt-4">
                <router-link to="/login" class="checkout-btn btn btn-danger text-white w-75">CHECKOUT</router-link>
            </div>
            <div v-if="loggedIn" class="checkout text-center mt-4">
                <router-link to="/userpage" class="checkout-btn btn btn-danger text-white w-75">CHECKOUT</router-link>
            </div>
          
        </div>
      </li>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import axios from 'axios'

export default {
    data() {
      return {
        
      }
    },
    methods:  {
    ...mapActions(['getProducts']),

      addToCart(){
        this.$store.dispatch('addProductToCart', {
        product: this.product,
        quantity: 1
      })
      },
      // Tar med product och dispatchar en mutation
      removeProduct(product) {
        this.$store.dispatch('removeProductInCart', product)
      },
      addInCart(product) {
        this.$store.dispatch('addProductInCart', product)
      },
      deleteProducts(product)
      {
        this.$store.dispatch('deleteProducts', product)
      },
    },
 //Hämtar getters
     computed: {
      ...mapGetters(['cart', 'itemCounter', 'product', 'loggedIn']),
  },

}
</script>

<style>
.dropdown-menu {
  width: 25rem;
  max-height: 30rem;
  overflow: auto;
}
.cart-btn {
  width: 1.5rem;
  box-shadow: none !important;
}
.checkout .router-link-exact-active {
  width: 20rem;
}
.trash-can {
  cursor: pointer;
}

</style>