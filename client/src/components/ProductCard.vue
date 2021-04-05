<template>
     <!-- START PRODUCT-CARD -->
      <!-- Grid row -->
     
        <!-- Grid column -->
        <div class="col-lg-4 col-md-6 mb-4 mt-5">
          <!-- Card --> 
          <div class="card card-cascade wider card-ecommerce">
            <!-- Card image -->
            <!-- Bindar så jag kan få med respektive id -->
            <router-link :to="'/details/' + product._id">
            <div class="view view-cascade overlay view zoom">
              <img
                :src="product.image"
                class="card-img-top"
                alt="sample photo"
              />
              <a>
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            </router-link>
            <!-- Card image -->
            <!-- Card content -->
            <div class="card-body card-body-cascade text-center pb-0">
              <!-- Title -->
              <h5 class="card-title text-center">
                <strong>
                  <div>{{product.name}}</div>
                </strong>
              </h5>
              <!-- Card footer -->
              <div>
                <p class="float- font-weight-bold mb-1 pb-2">${{product.price}}</p>
              </div>
              <div class="mb-2 text-right">
                <a href="#" class="fa fa-heart text-danger hover-shadow"></a>
              </div>
            </div>
            <!-- Card content -->
          </div>
          <!-- Card -->
        </div>
        <!-- Grid column -->

      <!-- END PRODUCT CARD -->

</template>

<script>
export default {
  // Hämtar in prodcut
  props: ['product']
}
</script>

<style>

</style>