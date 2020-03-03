import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

        apiKey: "AIzaSyBthwWaV9cSoWBEfpS4uiq3Ciig6OVcNKg",
        authDomain: "vegan-db-47db3.firebaseapp.com",
        databaseURL: "https://vegan-db-47db3.firebaseio.com",
        projectId: "vegan-db-47db3",
        storageBucket: "vegan-db-47db3.appspot.com",
        messagingSenderId: "420382368596",
        appId: "1:420382368596:web:602131c621339c02a61ec1",
        measurementId: "G-RN2BQ4RZ9B"
      };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;