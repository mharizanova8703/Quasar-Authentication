<template>
  <q-page padding>
    <div class="flex justify-center">
      <h1 class="text-h3 text-weight-bold q-mx-auto text-primary absolute-center">
        {{ user ? `Welcome, ${user.displayName || user.email || 'User'}` : 'Log In' }}
      </h1>
      <img src="/public/welcome.png">
    </div>
  </q-page>
</template>

<script>
import { auth } from 'boot/firebase'

export default {
  name: 'ProfilePage',
  data () {
    return {
      user: null
    }
  },
  created () {
    auth.onAuthStateChanged((user) => {
      this.user = user
      console.log('Current User:', user)
    })
  }
}
</script>
