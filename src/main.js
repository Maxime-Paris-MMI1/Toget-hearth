import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'



// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBkcGbdmUXu0VDj-LHK08E2Zz-GIa_C7Yw",
    authDomain: "toget-hearth.firebaseapp.com",
    projectId: "toget-hearth",
    storageBucket: "toget-hearth.appspot.com",
    messagingSenderId: "306387481357",
    appId: "1:306387481357:web:0426fe586448a6ed057644"
  };

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')