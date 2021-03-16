import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCJSp2tpqHSR2b0mPjIv7njy0shxuxKN1k",
    authDomain: "crwn-db-cb469.firebaseapp.com",
    projectId: "crwn-db-cb469",
    storageBucket: "crwn-db-cb469.appspot.com",
    messagingSenderId: "16375092098",
    appId: "1:16375092098:web:152fd0d0f2a3bf8def359b",
    measurementId: "G-P6BT37PCCS"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

export const createUserProfileDocument = async(userAuth, additionalData)=>{
  if(!userAuth) return

  const userRef = firestore.doc(`user/${userAuth.uid }`)
  const snapShot = await userRef.get(); 
  if(!snapShot.exists){
    const {displayName, email}=userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt ,
        ... additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

export const addCollectionAndDocuments = async (collectionKey,objectsToAdd)=>{
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef)
  const batch = firestore.batch()
  objectsToAdd.forEach(obj=>{
    const newDocRef = collectionRef.doc()
    console.log(newDocRef, "Completed the Map")
    batch.set(newDocRef, obj)
  })
  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections =>{
  const transformedCollection = collections.docs.map(doc=>{
    const {title,items} = doc.data();

    return {
      routeName:encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((accumulator,collection)=>{
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator
  },{})
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = async()=> await auth.signInWithPopup(provider);

export default firebase

