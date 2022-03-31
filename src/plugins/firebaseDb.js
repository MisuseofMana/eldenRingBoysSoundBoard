import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiMK0dvvQ1nx0CVBn3_TxbwoWRoUXWcyo",
    authDomain: "eldenboys.firebaseapp.com",
    projectId: "eldenboys",
    storageBucket: "eldenboys.appspot.com",
    messagingSenderId: "1006499513734",
    appId: "1:1006499513734:web:6a7db3564c0bd4e1e39807",
    measurementId: "G-9F4G67BRH1"
  };

  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)

  export {
    db
  }