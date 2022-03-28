import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCu1JCQkS4cCYsBNXX2cEOgdmXwZDAVlNg",
  authDomain: "emporio-del-bajon-gastaldello.firebaseapp.com",
  projectId: "emporio-del-bajon-gastaldello",
  storageBucket: "emporio-del-bajon-gastaldello.appspot.com",
  messagingSenderId: "38502205687",
  appId: "1:38502205687:web:85462920d0cb7993546bf2"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}