import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCUe6JY-MbkscU84tqiXx_YP2QGxNSfjTs",
  authDomain: "pc-builder-fb18b.firebaseapp.com",
  projectId: "pc-builder-fb18b",
  storageBucket: "pc-builder-fb18b.appspot.com",
  messagingSenderId: "997271419974",
  appId: "1:997271419974:web:6afa365242584375595e47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
