import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from "./router/index"

import "bootstrap/dist/css/bootstrap.min.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4WUQxe-wGaZgFgE1-CJEBruyWmW_slJg",
  authDomain: "vite-project-12822.firebaseapp.com",
  projectId: "vite-project-12822",
  storageBucket: "vite-project-12822.appspot.com",
  messagingSenderId: "921627191438",
  appId: "1:921627191438:web:288e93ae11a93c346e81df"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount('#app')
