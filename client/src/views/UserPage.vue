<template>
<div class="container py-5">

<div class="order-info z-depth-1">
    
  <form class="p-5 needs-validation" novalidate>
    <h5 class="mb-4"><strong>Billing details</strong></h5>
    <div class="form-row">
      <div class="col-md-6 mb-3">
        <label for="validationCustom01"><strong>First name</strong></label>
        <input v-model="userInfo.firstName" type="text" class="form-control" id="validationCustom01" placeholder="First name" value=""
          required>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <label for="validationCustom02"><strong>Last name</strong></label>
        <input v-model="userInfo.lastName" type="text" class="form-control" id="validationCustom02" placeholder="Last name" value=""
          required>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
    </div>
    <div class="form-row">
      <div class="col-md-12 mb-3">
        <label for="validationCustom03"><strong>Address</strong></label>
        <input v-model="userInfo.address" type="text" class="form-control" id="validationCustom03" placeholder="Address" required>
        <div class="invalid-feedback">
          Please provide a valid address.
        </div>
      </div>
      <div class="col-md-12 mb-3">
        <label for="validationCustom04"><strong>City</strong></label>
        <input v-model="userInfo.city" type="text" class="form-control" id="validationCustom04" placeholder="City" required>
        <div class="invalid-feedback">
          Please provide a valid state.
        </div>
      </div>
      <div class="col-md-12">
        <label for="validationCustom05"><strong>Postcode</strong></label>
        <input v-model="userInfo.postCode" type="text" class="form-control" id="validationCustom05" placeholder="Postcode" required>
        <div class="invalid-feedback">
          Please provide a valid zip.
        </div>
      </div>
    </div>
  </form>

  <div class="px-5">
      <h5 class=" border-bottom py-2"><strong>Order Summary</strong></h5>
      <div v-if="cart.length < 1" class="">You have no orders for now</div>
       <div v-for="item in cart" :key="item.product._id" class="d-flex justify-content-between border-bottom mt-3">
            
        <p>{{item.product.name}} x {{item.quantity}}</p>
        <p>${{item.product.price * item.quantity}}</p>

       </div>

      <div class="mt-4">
        <div class="d-flex justify-content-between align-items-center">
            <div>
              <div><strong>Products</strong></div> 
              <div><small>Shipping</small></div>
            </div>
            <div>
              <div><strong>$1000</strong></div>
              <div><small>$50</small></div>
            </div>
        </div>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <div><strong>TOTAL</strong></div>
            <div><strong>$1050</strong></div>
          </div>
          <div class="py-4">
            <button @click.prevent="handleSubmit()" class="btn btn-primary w-100">COMPLETE</button>
          </div>
     </div>
  </div>
</div>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
// import axios from 'axios'
export default {
  data() {
    // userInfo-objektet ska skickas in till databasen när användare lägger en order
    return {
      userInfo: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postCode: ''
      }
    }
  },
  computed: {
      ...mapGetters(['cart', 'itemCounter', 'product']),
  },
     methods:  {
    ...mapActions(['getProducts', 'addProductToCart']),

    // Dispatchar en action (order) och skickar med cart och userInfo
    handleSubmit() {
      this.$store.dispatch('order', {
        cart: this.cart,
        userInfo: this.userInfo
      })
    }

     }
}
</script>

<style scoped>
  .order-info {
    max-width: 50rem;
    margin: auto;
  }
</style>