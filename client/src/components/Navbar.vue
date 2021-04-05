<template>
<div>
  <div class="navbar fixed-top navbar-expand-lg navbar-dark special-color-dark">
<nav class="container py-2">
   <router-link to="/" class="navbar-brand">Nordic Apperal</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a>
          <router-link to="/" class="nav-link underline">Home</router-link>
        </a>
      </li>
      <li class="nav-item">
        <a>
          <router-link to="/about" class="nav-link underline">About</router-link>
        </a>
      </li>
      <li class="nav-item">
        <a>
           <router-link to="/products" class="nav-link mr-5 underline">Clothes</router-link>
        </a>
      </li> 
   
      <shopping-cart class="mr-4"/>
      <!-- Kollar om vi är inloggade och ändrar innehåll navbar -->
      <!-- <li class="nav-item" v-if="loggedIn">
        <router-link to="/login" class="nav-link"><li class="fa fa-user"></li></router-link>
      </li> -->
    <div class="nav-item" v-if="loggedIn">
    
      <li class="nav-item dropdown">
        <a 
        class="nav-link" 
        id="navbarDropdown" 
        data-toggle="dropdown"
        aria-haspopup="true" 
        aria-expanded="false">
        
        <div><i class="fas fa-user mr-2"></i>My Account</div>
        </a>
        <div class="account-menu dropdown-menu dropdown-menu-right p-3" aria-labelledby="navbarDropdown">
         <a class="border-bottom nav-link text-dark"><i class="mr-2 far fa-user"></i>My Profile</a>
         <a class="border-bottom nav-link text-dark"><i class="mr-2 fas fa-shopping-bag"></i>Order-history</a>
         <a class="border-bottom nav-link text-dark"><i class="mr-2 fas fa-cog"></i>Settings</a>
         <a class="nav-link text-dark"><i class="mr-2 fas fa-sign-out-alt"></i>Log out</a>
        </div>
      </li>

    </div>

      <li class="nav-item" v-if="!loggedIn">
        <router-link to="/login" class="nav-link">Login</router-link>
      </li>
     
      <div>
      </div>
    </ul>
  </div>
</nav>
  </div>
  </div>
</template>

<script>

import {  mapGetters } from 'vuex'
import ShoppingCart from './ShoppingCart.vue'

export default {
    components: { 
          ShoppingCart 
      },
  
     computed: {
      ...mapGetters(['loggedIn'])
         
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');


.nav-item {
    margin-right: 1rem;
}
.navbar-brand {
    font-family: 'Lobster', cursive;
    font-size: 2rem;
}
.cart {
    color: #fff;
}
.nav-link {
  position: relative;
}
.underline.router-link-exact-active::after {
  content: "";
  position: absolute;
  border-bottom: 2px solid #fff;
  left: 0.5rem;
  right: 1rem;
  top: 2rem;
}
.account-menu {
  width: 15rem;
}
</style>