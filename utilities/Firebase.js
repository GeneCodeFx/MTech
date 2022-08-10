import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  update,
  onValue,
  get,
  child,
  remove,
  set,
} from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuZ0L4AACGMXQK7T8Dru3a-XXeh9p_LWA",
  authDomain: "mtech-22.firebaseapp.com",
  projectId: "mtech-22",
  storageBucket: "mtech-22.appspot.com",
  messagingSenderId: "267112611960",
  appId: "1:267112611960:web:ff523b7bacec64ee2ead8d",
  measurementId: "G-64WXZMJGPK",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Get a reference to the database service
const database = getDatabase(app);
export { database, ref, update, auth, onValue, get, child, remove, set };
