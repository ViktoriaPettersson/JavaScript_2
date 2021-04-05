<template>
<div class="pt-5 bg-gradient vh-100">
    <!-- Default form register -->
    
    <form @submit.prevent="handleSubmit()" class="animated fadeIn rounded mb-0 bg-white mx-auto text-center z-depth-1 p-5" action="#!">

        <p class="h4 mb-4">Sign up</p>
      <div class="form-row">
        <div class="col">
           <input v-model="register.firstName" type="firstName" id="defaultRegisterFormFirstName" class="form-control mb-4" placeholder="FirstName">
        </div>
       <div class="col">
          <input v-model="register.lastName" type="lastName" id="defaultRegisterFormLastName" class="form-control mb-4" placeholder="LastName">
       </div>
        </div>
        <!-- E-mail -->
        <input v-model="register.email" type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail">

        <!-- Password -->
        <input v-model="register.password" type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock">
    

        <!-- Sign up button -->
        <button class="btn btn-info my-4 btn-block" type="submit">Sign in</button>

        <p>Already a member?
                <router-link to="/login">Login</router-link>
        </p>

        <!-- Social register -->
        <p>or sign up with:</p>

        <a href="#" class="mx-2" role="button"><i class="fab fa-facebook-f light-blue-text"></i></a>
        <a href="#" class="mx-2" role="button"><i class="fab fa-twitter light-blue-text"></i></a>
        <a href="#" class="mx-2" role="button"><i class="fab fa-linkedin-in light-blue-text"></i></a>
        <a href="#" class="mx-2" role="button"><i class="fab fa-github light-blue-text"></i></a>

        <hr>

        <!-- Terms of service -->
        <p>By clicking
            <em>Sign up</em> you agree to our
            <a href="" target="_blank">terms of service</a>
        </p>

    </form>
    <!-- Default form register -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import axios from 'axios'
export default {

    data() {
      // Data från input-value
      return {
        register: {
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        },
         route : this.$route.query.redirect
  
      }
      
      
    },
    methods: {
    
    //Hämta registerUser
    ...mapActions(['registerUser']),

    // Köra registerUser och skicka med register-objektet

    // Dispatchar en action registerUser och skickar med register
      handleSubmit() {
        // this.$store.dispatch('registerUser', this.register)
        this.registerUser(this.register, this.route)
      },

   
    }
}
</script>

<style scoped>
form {
   max-width: 30rem;
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
</style>