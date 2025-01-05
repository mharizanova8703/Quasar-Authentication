<template>
<q-page class="bg-image">
<div class="row d-flex justify-content-center q-mx-auto items-center">
  <div class="col-md-5 col-12">
    <img src="/public/robot.png" class="robot q-mx-auto q-my-md" alt="robot">
  </div>
  <div class="col-md-5 col-12 q-pa-lg">
    <q-card class="q-pa-md relative-position">
      <img class="rocket absolute-top" src="/public/rocket.png">
      <q-card-section>
        <div class="flex justify-center">
        <p class="text-primary text-h4 text-weight-bold q-pt-lg">Register</p>
        </div>
        <q-input v-model="name" label="Full Name" />
        <q-input class="text-primary" v-model="email" label="Email" />
        <q-input v-model="password" label="Password" type="password" />
        <div class="flex justify-center">
          <q-btn label="Register" color="primary text-black text-weight-bold" class="q-mt-lg" @click="register" />
        </div>
      </q-card-section>
    </q-card>
  </div>
</div>
</q-page>
</template>

<script>
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from 'boot/firebase'

export default {
  data () {
    return {
      email: '',
      password: '',
      name: ''
    }
  },
  methods: {
    async register () {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password)
        const user = userCredential.user

        await updateProfile(user, {
          displayName: this.name
        })

        console.log('User registered and displayName set:', user)
        this.$router.push('/profile')
      } catch (error) {
        console.error('Registration error:', error.message)
      }
    }
  }
}
</script>

<style scoped>
.robot{
width: 100%;
}
.rocket{
  top: -20%;
  left: 55%;
  transform: translate(-50%, 0);
  width: 100px;
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
