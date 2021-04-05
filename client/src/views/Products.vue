<template>
<div>
  <div class="d-flex container">
    <aside class="z-depth-1">
      <br />
      <form>
        <div class="md-form">
          <!-- Söka bland produkter -->
          <!-- På keyup körs funktionen search och skicka med searchVal -->
          <input type="text" id="form1" class="form-control text-white" v-model="searchVal" @keyup="search(searchVal)"/>
          <label for="form1" class="text-white">Search...</label>
        </div>
        <div class="mb-5 text-white">
          <h5 class="font-weight-bold mb-3">Order by</h5>

          <div class="divider-small mb-3"></div>

          <ul class="list-unstyled link-black">
            <li class="mb-2">
              <a class="">Popularity</a>
            </li>
            <li class="mb-2">
              <a class="">Rating</a>
            </li>
            <li class="mb-2">
              <a class="">Price: low to high</a>
            </li>
            <li class="mb-2">
              <a class="">Price: high to low</a>
            </li>
          </ul>
        </div>
         <div class="mb-5 text-white">
          <h5 class="font-weight-bold mb-3">Category</h5>

          <div class="divider-small mb-3"></div>

          <ul class="list-unstyled link-black">
            <li class="mb-2">
              <a class="">All</a>
            </li>
            <li class="mb-2">
              <a class="">Woman</a>
            </li>
            <li class="mb-2">
              <a class="">Man</a>
            </li>
            <li class="mb-2">
              <a class="">Kids</a>
            </li>
          </ul>
        </div>
      </form>
    </aside>
    <div class="content mt-5">
  
      <div class="row">
        <!-- Bindar en product så att jag kan byta ut innehåller på varje enskild product -->
       <product-card v-for="product in filterProducts" :key="product.id" :product="product"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ProductCard from '../components/ProductCard'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'products',
  components: {
    ProductCard
  },
  data() {
    return {
      searchVal: ''
    }
  },
  // Deklarerar funktionen. Hämtar prodcuts från mina getters. 
  computed: {
    ...mapGetters(['products', 'filterProducts'])
  },
  //Hämtar funktionen
  methods: {
    ...mapActions(['getProducts', 'search'])
  },
  //Använder och kör funktionen
  mounted() {
    this.getProducts()
  }

};
</script>

<style scoped>
aside {
  flex: 2;
  padding: 2rem;
  min-height: 100vh;
  margin-right: 2rem;
  background-color: #263238
}
form {
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 15%;
  left: auto;
  overflow-x: hidden;
}
.content {
  flex: 8;
}
.link-black a:hover {
  color: #0056b3;
}

.link-black .active {
  color: #0056b3;
}

.divider-small {
  width: 30px;
  background-color: rgba(170, 170, 170, 0.575);
  height: 3px;
}

@media (max-width: 768px) { 
  aside {
    display: none;
  }
 }
</style>