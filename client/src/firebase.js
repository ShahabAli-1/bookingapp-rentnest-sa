import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCCPI5zZtvXk-BpGo3jlEM213DP1Gs6dtE",
  authDomain: "rent-nest.firebaseapp.com",
  projectId: "rent-nest",
  storageBucket: "rent-nest.appspot.com",
  messagingSenderId: "171658234703",
  appId: "1:171658234703:web:915ee177604fc6d21d533a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
