// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD34n_fIP3CvTnT8giZRtybsNooKQ8J7TA",
  authDomain: "todo-app-job-placement.firebaseapp.com",
  projectId: "todo-app-job-placement",
  storageBucket: "todo-app-job-placement.appspot.com",
  messagingSenderId: "527823976935",
  appId: "1:527823976935:web:6e52cebbad788cb5f6a542",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
