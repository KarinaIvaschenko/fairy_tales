import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBEwKpjnUBUIUT4JtjKe_4kvI7rpovGIGo",
    authDomain: "fairytales-b1e7b.firebaseapp.com",
    projectId: "fairytales-b1e7b",
    storageBucket: "fairytales-b1e7b.appspot.com",
    messagingSenderId: "708546130411",
    appId: "1:708546130411:web:85457ef85a4d8c1bb229ae"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth}
