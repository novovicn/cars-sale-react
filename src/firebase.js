
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJIQ3yDWtUiZ2bFswjHvBE4rcv3gfTNuQ",
  authDomain: "used-cars-sale.firebaseapp.com",
  databaseURL: "https://used-cars-sale-default-rtdb.firebaseio.com",
  projectId: "used-cars-sale",
  storageBucket: "used-cars-sale.appspot.com",
  messagingSenderId: "597710265366",
  appId: "1:597710265366:web:4bdae0a48c9b712a6ee937",
  measurementId: "G-M5DBF5695R"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };