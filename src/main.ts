import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { connectAuthEmulator } from 'firebase/auth/web-extension'
import { connectFirestoreEmulator } from 'firebase/firestore/lite';
import {auth, firestoreDB} from "./api/firebase-app.ts";
import router from "./router/router.ts";

const app = createApp(App)
app.use(router)
app.mount('#app')

connectAuthEmulator(auth, 'http://localhost:9099')
connectFirestoreEmulator(firestoreDB, '127.0.0.1', 8080)
