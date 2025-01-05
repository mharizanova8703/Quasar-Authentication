// import { initializeApp } from 'firebase/app'
// import { getAuth } from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: 'AIzaSyBSRPj-uoLdD5hi4HsY60_9Zq28-5_DcwQ',
//   authDomain: 'quasar-project-5c034.firebaseapp.com',
//   projectId: 'quasar-project-5c034',
//   storageBucket: 'quasar-project-5c034.firebasestorage.app',
//   messagingSenderId: '319333479486',
//   appId: '1:319333479486:web:9064582c922ac7c0fb4d6f'
// }

// const app = initializeApp(firebaseConfig)
// const auth = getAuth(app)

// export { app, auth }
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
