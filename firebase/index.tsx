import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "rapid-poll-92f6e.firebaseapp.com",
  projectId: "rapid-poll-92f6e",
  storageBucket: "rapid-poll-92f6e.appspot.com",
  messagingSenderId: "446932138716",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: "G-J3NLR2LS9L",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const pollsRef = collection(db, "polls");
