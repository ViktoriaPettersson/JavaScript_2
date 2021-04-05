<template>
  <div>
    <!-- Kollar om products finns INNAN den skriver ut -->
    <div class="container my-5 py-4" v-if="product">
     
      <!--Section: Content-->
      <section class="z-depth-1">
        <div class="row">
          
          <div class="col-lg-6 text-center">
            <img :src="product.image" alt="image" class="img-fluid">
          </div>
          <div class="col-lg-5 text-center text-md-left mt-4">
            <h2
              class="h2-responsive text-center product-name font-weight-bold dark-grey-text mb-3 ml-xl-0 ml-4">
              <strong class="display-3">{{product.name}}</strong>
            </h2>
            <h3
              class="h3-responsive text-center mb-5 ml-xl-0 ml-4">
              <span class="font-weight-bold">
                <strong class="text-primary">${{product.price}}</strong>
              </span>
            </h3>
            <!--Accordion wrapper-->
            <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
              <!-- Accordion card -->
              <div class="card">
                <!-- Card header -->
                <div class="card-header" role="tab" id="headingOne1">
                  <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                    <h5 class="mb-0 black-text">
                      Description
                      <i class="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>

                <!-- Card body -->
                <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
                  <div class="card-body">
                    {{product.desc}}
                  </div>
                </div>
              </div>
              <!-- Accordion card -->

              <!-- Accordion card -->
              <div class="card">
                <!-- Card header -->
                <div class="card-header" role="tab" id="headingTwo2">
                  <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx"  href="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                    <h5 class="mb-0 black-text">
                      Details
                      <i class="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>

                <!-- Card body -->
                <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordionEx">
                  <div class="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et.
                  </div>
                </div>
              </div>
              <!-- Accordion card -->

              <!-- Accordion card -->
              <div class="card">
                <!-- Card header -->
                <div class="card-header" role="tab" id="headingThree3">
                  <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
                    <h5 class="mb-0 black-text">
                      Shipping
                      <i class="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>

                <!-- Card body -->
                <div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#accordionEx">
                  <div class="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et.
                  </div>
                </div>
              </div>
              <!-- Accordion card -->
            </div>
            <!--/.Accordion wrapper-->

            <!-- Add to Cart -->
            <section class="color">
              <div class="mt-5">
                <div class="d-flex justify-content-between mb-5">
                  <!-- Group of default radios - option 1 -->
                  <div class="custom-control custom-radio ">
                    <input type="radio" class="custom-control-input" id="defaultGroupExample1" name="groupOfDefaultRadios"/>
                    <label class="custom-control-label" for="defaultGroupExample1">XS</label>
                  </div>

                  <!-- Group of default radios - option 2 -->
                  <div class="custom-control custom-radio ">
                    <input type="radio" class="custom-control-input" id="defaultGroupExample2" name="groupOfDefaultRadios" checked/>
                    <label class="custom-control-label" for="defaultGroupExample2">S</label>
                  </div>

                  <!-- Group of default radios - option 3 -->
                  <div class="custom-control custom-radio ">
                    <input type="radio" class="custom-control-input" id="defaultGroupExample3" name="groupOfDefaultRadios"/>
                    <label class="custom-control-label" for="defaultGroupExample3">M</label>
                  </div>
                  <!-- Group of default radios - option 4 -->
                  <div class="custom-control custom-radio ">
                    <input type="radio" class="custom-control-input" id="defaultGroupExample4" name="groupOfDefaultRadios"/>
                    <label class="custom-control-label" for="defaultGroupExample4">L</label>
                  </div>
                  <!-- Group of default radios - option 4 -->
                  <div class="custom-control custom-radio ">
                    <input type="radio" class="custom-control-input" id="defaultGroupExample5" name="groupOfDefaultRadios"/>
                    <label class="custom-control-label" for="defaultGroupExample5">XL</label>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12 text-center mt-3">
                    <!-- När man klickar ska addToCart-funktionen köras -->
                    <button class="btn btn-primary btn-rounded" @click="addToCart()">
                      <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <!-- /.Add to Cart -->
          </div>
        </div>
      </section>
      <!--Section: Content-->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  // Hämtar funktionen i mapActions
  methods: {
      ...mapActions(['getOneProduct']),
  
  // Dispatchar en action och skikcar med product och quantity
      addToCart(){
        this.$store.dispatch('addProductToCart', {
        product: this.product,
        quantity: 1
      })
      }
  },
  // Hämtar getter för att kunna använda funktionen
  computed: {
      ...mapGetters(['product'])
  },
  // Kör funktionen och skickar med id genom att skriva in sökvägen med route.params._id
  created() {
      this.getOneProduct(this.$route.params._id)
  }
};
</script>

<style>
</style>