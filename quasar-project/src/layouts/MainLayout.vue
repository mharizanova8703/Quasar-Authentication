<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title></q-toolbar-title>
        <q-btn
          v-if="!user"
          flat
          label="Login"
          tag="router-link"
          to="/login"
          class="text-black"
        />
        <q-btn
          v-if="user"
          flat
          label="Profile"
          tag="router-link"
          to="/profile"
          class="text-black"
        />
        <q-btn
          v-if="user"
          flat
          label="Home"
          tag="router-link"
          to="/"
          class="text-black"
        />
        <q-btn
          v-if="!user"
          flat
          label="Register"
          tag="router-link"
          to="/register"
          class="text-black"
        />
        <q-btn
          v-if="user"
          flat
          label="Logout"
          @click="logout"
          class="text-black"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>

    <FooterComponent />
  </q-layout>
</template>

<script>
import { signOut } from 'firebase/auth'
import { auth } from 'boot/firebase'
import FooterComponent from 'components/FooterComponent.vue'

export default {
  components: {
    FooterComponent
  },
  data () {
    return {
      user: null
    }
  },
  created () {
    auth.onAuthStateChanged((user) => {
      this.user = user
      console.log('Auth state changed:', user)
    })
  },
  methods: {
    logout () {
      signOut(auth)
        .then(() => {
          this.user = null
          this.$router.push('/login')
        })
        .catch((error) => {
          console.error('Logout failed:', error.message)
        })
    }
  }
}
</script>

<style>
.text-black {
  color: black;
}
</style>
