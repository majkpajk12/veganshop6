
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBNTywo2N95mU5Eh_GYftBMhmWSshxB9Bs",
  authDomain: "vegan1-db.firebaseapp.com",
  databaseURL: "https://vegan1-db.firebaseio.com",
  projectId: "vegan1-db",
  storageBucket: "vegan1-db.appspot.com",
  messagingSenderId: "275879747725",
  appId: "1:275879747725:web:690fd5b07397ccdf9502c4",
  measurementId: "G-PLSF1RE8E2"
};

      firebase.initializeApp(config);

      export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;
      
        const userRef = firestore.doc(`users/${userAuth.uid}`);
      
        const snapShot = await userRef.get();
      
        if (!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();
          try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            });
          } catch (error) {
            console.log('error creating user', error.message);
          }
        }
      
        return userRef;
      };

      export const addCollectionAndDocuments = async (
        collectionKey,
        objectsToAdd
      ) => {
        const collectionRef = firestore.collection(collectionKey);
      
        const batch = firestore.batch();
        objectsToAdd.forEach(obj => {
          const newDocRef = collectionRef.doc();
          batch.set(newDocRef, obj);
        });
      
        return await batch.commit();
      };

      // const convertCollectionsSnapshotToMaps =(collections) => {
      //   const transformedCollection = collections.docs.map(doc => {
      //     const { title, items } = doc.data();
        
      //   return {
      //     routeName: encodeURI(title.toLowerCase),
      //     id: doc.id,
      //     title,
      //     items
      //   }
        
      //   }

      //   )
      // }

      
      export const auth = firebase.auth();
      export const firestore = firebase.firestore();
      
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      export const signInWithGoogle = () => auth.signInWithPopup(provider);
      
      export default firebase;

