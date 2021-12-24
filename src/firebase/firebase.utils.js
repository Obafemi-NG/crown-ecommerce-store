import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

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



export const auth = getAuth(firebaseApp);
export const firestore = getFirestore();
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