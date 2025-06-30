import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyCMQ2wdwoSkmtO7qTQO11T-tDfYPVCX-04",
  authDomain: "quickshop-8b0ba.firebaseapp.com",
  projectId: "quickshop-8b0ba",
  storageBucket: "quickshop-8b0ba.appspot.com",  // ✅ fixed .app → .appspot.com
  messagingSenderId: "904712375139",
  appId: "1:904712375139:web:7706a0f4ff0c103201e156",
  measurementId: "G-0GR52TMBG0",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Optional: Analytics (only on web + non-SSR)
if (typeof window !== "undefined") {
  getAnalytics(app);
}

// ✅ Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
