// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAYpSfr-Exx76rg7WKskrm3dXqiCTtSC5k",
  authDomain: "naf-admin-panel.firebaseapp.com",
  projectId: "naf-admin-panel",
  storageBucket: "naf-admin-panel.firebasestorage.app",
  messagingSenderId: "685981322138",
  appId: "1:685981322138:web:41714c53f8420bf4f8c823",
  measurementId: "G-P6VRL4C5P0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const firestore = getFirestore(app)
