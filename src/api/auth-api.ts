import {auth} from "./firebase-app.ts";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    User
} from 'firebase/auth'

function createUser(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log('[SERVER]: user=', user)
            // ...
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            console.log(`[ERROR]: ${error.code} - ${error.message}`)
            // ..
        });

}

function signInWithEmail(email: string, password: string): boolean {
    let result = false
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user: User = userCredential.user;
            console.log('[SERVER]: uid=', user.uid)
            result = true
            // ...
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            console.log(`[ERROR]: ${error.code} - ${error.message}`)
        });
    return result
}

function onAuthStateChange() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            console.log('[SERVER]: uid=', uid)
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
}

function getCurrentUser() {
    const user = auth.currentUser;
    if (user !== null) {
        // // The user object has basic properties such as display name, email, etc.
        // const displayName = user.displayName;
        // const email = user.email;
        // const photoURL = user.photoURL;
        // const emailVerified = user.emailVerified;
        //
        // // The user's ID, unique to the Firebase project. Do NOT use
        // // this value to authenticate with your backend server, if
        // // you have one. Use User.getToken() instead.
        // const uid = user.uid;
        console.log('[SERVER]: current user=', user)
    }
}

function getUserProviderData() {
    const user = auth.currentUser
    if (user !== null) {
        user.providerData.forEach((profile) => {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
        });
    }
}

function signUserOut() {
    signOut(auth)
}

export { createUser, signInWithEmail, onAuthStateChange, getUserProviderData, getCurrentUser, signUserOut }
