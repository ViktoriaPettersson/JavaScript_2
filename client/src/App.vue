<template>
  <div>
    <navbar />
    <router-view/>
   
    
  </div>
</template>
<script>

import { mapActions } from 'vuex'
import Navbar from './components/Navbar'



export default {
  components: {
    Navbar,
    
    
  },
  methods: {
    ...mapActions(['checkToken'])
  },
  // NÄr appen laddas
  created() {
    this.checkToken()
  
  },

}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  margin-top: 5rem;
}
</style>
