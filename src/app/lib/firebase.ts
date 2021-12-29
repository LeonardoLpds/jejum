import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAKoqXhJMB7AMdjgph5Xf1W5NIcXd97Q74",
  authDomain: "jejum-45ac1.firebaseapp.com",
  projectId: "jejum-45ac1",
  storageBucket: "jejum-45ac1.appspot.com",
  messagingSenderId: "281216786668",
  appId: "1:281216786668:web:9d6943f7295d156b3f45c9",
  measurementId: "G-QTQY185V1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);