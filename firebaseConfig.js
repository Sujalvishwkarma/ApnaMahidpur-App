import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// import messaging from '@react-native-firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyDvoFHdReexTP5Hx2fKGlAlS8h4Vbr0y58",
  authDomain: "apnamahidpur-app.firebaseapp.com",
  databaseURL: "https://apnamahidpur-app-default-rtdb.firebaseio.com",
  projectId: "apnamahidpur-app",
  storageBucket: "apnamahidpur-app.appspot.com",
  messagingSenderId: "958293100297",
  appId: "1:958293100297:android:491b6a7f2ae68c2825b5d8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage,auth};

