<template>
<div>
  <div class="pt-5 bg-gradient vh-100">
    <!-- Default form login -->
    <form @submit.prevent="handelSubmit()" class="animated fadeIn rounded mb-0 bg-white mx-auto text-center z-depth-1 p-5" action="#!">

        <p class="h4 mb-4">Sign in</p>

        <!-- Email -->
        <input v-model="login.email" type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail">

        <!-- Password -->
        <input v-model="login.password" type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password">

        <div class="d-flex justify-content-around">
            <div>
                <!-- Remember me -->
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember">
                    <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                </div>
            </div>
            <div>
                <!-- Forgot password -->
                <a href="">Forgot password?</a>
            </div>
        </div>

        <!-- Sign in button -->
        <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>

        <!-- Register -->
        <p>Not a member?
            <router-link to="/register">Register</router-link>
        </p>

        <!-- Social login -->
        <p>or sign in with:</p>

        <a href="#" class="mx-2" role="button"><i class="fab fa-facebook-f light-blue-text"></i></a>
        <a href="#" class="mx-2" role="button"><i class="fab fa-twitter light-blue-text"></i></a>
        <a href="#" class="mx-2" role="button"><i class="fab fa-linkedin-in light-blue-text"></i></a>
        <a href="#" class="mx-2" role="button"><i class="fab fa-github light-blue-text"></i></a>

    </form>
    <!-- Default form login -->
  </div>
</div>
</template>

<script>

export default {
    data() {
        return{
                login: {
                     email: '',
                     password: ''
                },
                // Plockar ut query från router och sparar den i en variabel
                // Pushar den till routern
                // När en användare loggar in så skickar jag både en användare och en route
                 route : this.$route.query.redirect
        }
    },
    methods: {


        handelSubmit() {

            // Dispatchar en action loginAfterReg, login och skikar med användar-objekt
            this.$store.dispatch('loginAfterReg', this.login)
            this.$store.dispatch('login', this.login, this.route)

        },
        
    },
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