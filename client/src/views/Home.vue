<template>
  <div class="">
    <div class="bg-gradient">
      <!--Section: Content-->
      <section class=" dark-grey-text text-center">
        <!-- Section heading -->
        <!-- Grid row -->
        <div class="row">
          <!-- Grid column -->
          <div class="col-lg-4 col-md-6 mb-4 animated fadeInDown">
            <!-- Collection card -->
            <div class="img-container z-depth-1-half">
              <!-- Card image -->
              <div class="view zoom">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg"
                  class="img-fluid"
                  alt=""
                />
                 <h5 class="image-text text-white">New Arrivals</h5>
                 <button class="btn btn-danger img-btn">SHOP NOW</button>
                 
              </div>
              <!-- Card image -->
            </div>
            <!-- Collection card -->
          </div>
          <!-- Grid column -->

         
          <!-- Grid column -->
          <div class="col-lg-4 col-md-6 mb-4 animated fadeIn">
            <!-- Collection card -->
            <div class="img-container z-depth-1-half">
              <!-- Card image -->
              <div class="view zoom">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/2.jpg"
                  class="img-fluid"
                  alt=""
                />
                <h5 class="image-text text-danger">30% OFF</h5>
                 <button class="btn btn-danger img-btn">SHOP NOW</button>
              </div>
              <!-- Card image -->
            </div>
            <!-- Collection card -->
          </div>
          <!-- Grid column -->

          <!-- Fourth column -->
          <div class="col-lg-4 col-md-6 mb-4 animated fadeInDown">
            <!-- Collection card -->
            <div class="img-container z-depth-1-half">
              <!-- Card image -->
              <div class="view zoom">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/4.jpg"
                  class="img-fluid"
                  alt=""
                />
                <h5 class="image-text text-white">New Arrivals</h5>
                <button class="btn btn-danger img-btn">SHOP NOW</button>
              </div>
              <!-- Card image -->
            </div>
            <!-- Collection card -->
          </div>
          <!-- Fourth column -->
        </div>
        <!-- Grid row -->
      </section>
      <!--Section: Content-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.img-container {
  position: relative;
  margin: 1rem;
}
.img-container .img-btn {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.img-container .image-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  font-size: 4rem;
  font-weight: 600;
}
.bg-gradient {
  background: linear-gradient(-45deg, #ee76528e, #e73c7e77, #23a5d57c, #23d5ab7e);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
 section {
   padding-top: 2rem;
   padding-left: 5rem;
   padding-right: 5rem;
 }
 
 @media (max-width: 768px) { 
   section {
     padding: 0vh;
   }
 }

</style>
