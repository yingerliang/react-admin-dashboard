import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAT-BNSkB_D3PcgXIVeQfRzIpYQ_3D7xSI',
  authDomain: 'admin-dashboard-test-be788.firebaseapp.com',
  projectId: 'admin-dashboard-test-be788',
  storageBucket: 'admin-dashboard-test-be788.appspot.com',
  messagingSenderId: '639767359180',
  appId: '1:639767359180:web:f6a1bec8bfbffb03585c69',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth()
