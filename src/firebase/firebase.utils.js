import { initializeApp } from 'firebase/app';
import {getFirestore, getDoc, doc, setDoc} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
// import { selectCollectionsForPreview } from '../redux/shop/shop.selector';

const config = {
    apiKey: "AIzaSyAzWi15RA1SYyKon6oDf19SUx61sl8eEZk",
    authDomain: "crown-clothing-7d2a7.firebaseapp.com",
    projectId: "crown-clothing-7d2a7",
    storageBucket: "crown-clothing-7d2a7.appspot.com",
    messagingSenderId: "504804477960",
    appId: "1:504804477960:web:a7a134a9e6554bdc88d5bd",
    measurementId: "G-2LM7QZL2C0"
};

const firebaseApp = initializeApp(config);


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    // onSnapshot(collection(firestore, 'users') , (snapshot) => {
    //     console.log(snapshot.docs)
    // })
    // const collectionRef = collection(firestore, 'users');
    // const payload = {name : 'joshua', nickname : 'viper'}
    // await addDoc(collectionRef, payload);
    
    const userRef = doc(firestore, `users/${userAuth.id}`); 
    const snapshot = await getDoc(userRef);
    // console.log(snapshot);
    if (!snapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        const docRef = doc(firestore, 'users', `${userAuth.uid}`)
        const payload = {displayName, email, createdAt, ...additionalData};
        try {
            await setDoc(docRef, payload);
            // console.log(`New Document with ${docRef.id} successfully added` )
        } catch (error) {
            console.log(`error adding user: ${error}`)
        }

        return docRef;
    }

    // return userRef;

    // if(!Snapshot.exists()){
    //     const {displayName , email} = userAuth;
    //     const createdAt = new Date();
    //     // console.log(`Document Data: ${snapShot.data()}`)
    //     try {
    //         const docRef = await addDoc(userRef, {
    //             displayName,
    //             email,
    //             createdAt,
    //             ...additionalData
    //         });
            // console.log(`Document successfully created with ID: ${docRef.id} `)
    //     } catch(error) {
    //         console.log(`Error adding document: ${error} `)
    //     }
    // }
}

//(...STARTING)FIREBASE CODE FOR STORING SHOPDATA ON FIRESTORE

// export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
//     const collectionRef = doc(firestore, collectionKey);
//     const collectionSnapshot = await getDoc(collectionRef);
//     if(!collectionSnapshot.exist()){
//         const batch = writeBatch(firestore);
//         objectToAdd.forEach(obj => {
//             const newDocRef = doc(collectionRef) 
//             batch.set(newDocRef, obj)}
//         );
//         await batch.commit();
//     }

// }

// export const convertCollectionsToMap = (collections) => {
//     const tranformedCollection = collections.docs.map(doc => {
//         const {title, items} = doc.data();
//         return({
//             routeName : encodeURI(title.toLowerCase()),
//             id : doc.id,
//             title,
//             items,
//         });
//     });
//     console.log(tranformedCollection);
// }

//(...ENDING)FIREBASE CODE FOR STORING SHOPDATA ON FIRESTORE

export const auth = getAuth(firebaseApp);
const firestore = getFirestore();
export const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
        prompt : 'select_account'
    });
    signInWithPopup(auth, provider).then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err)
    })
};
export default firestore; 