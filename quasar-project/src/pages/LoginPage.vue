<template>
  <q-page class="bg-image">
    <div class="row justify-center">
      <div class="col-lg-6 col-12 q-pa-lg">
        <div class="flex justify-center">
       <img src="/public/moon.png" alt="spaceship">
        </div>
        <q-card class="q-pa-md">
          <q-card-section>
            <div class="flex justify-center">
             <h1 class="text-h4 text-weight-bold q-mx-auto text-primary">
             {{ user ? `Welcome, ${user.displayName || user.email || 'User'}` : 'Log In' }}
            </h1>
            </div>
            <q-input v-model="email" label="Email" />
            <q-input v-model="password" label="Password" type="password" />
            <div class="flex justify-center">
              <q-btn label="Login" color="primary text-black q-mt-lg q-px-lg" @click="login" />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'boot/firebase'

export default {
  data () {
    return {
      email: '',
      password: '',
      user: null
    }
  },
  methods: {
    async login () {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password)
        this.user = userCredential.user
        console.log('Logged-in user:', this.user)
        this.$router.push('/profile')
      } catch (error) {
        console.error('Error logging in:', error.message)
      }
    }
  },
  created () {
    auth.onAuthStateChanged((user) => {
      this.user = user
      console.log('Auth state changed, current user:', user)
    })
  }
}
</script>
<style scoped>
.robot{
width: 100%;
}
.rocket{
  width: 150px;
  top: -50%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 170px;
}
.bg-image {
  background-image: url('/public/bg-banner.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
}
</style>
