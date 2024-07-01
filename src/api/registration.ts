import {auth, getRef, getRefWithGeneratedId} from "./firebase-app.ts";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {setDoc} from "firebase/firestore/lite";

function registerBusiness(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            console.log('[SERVER]: business=', user)
            const companyRef = getRefWithGeneratedId('companies')
            await  setDoc(companyRef,
                {
                    owner: user.uid,
                    ownerEmail: email,
                    active: true
                })
            await setDoc(getRef('users', user.uid), {
                email: user.email,
                company: companyRef.id,
                emailVerified: user.emailVerified
            })
            console.log('[SERVER]: owner added to company: ' + companyRef.id)
        })
        .catch((error) => {
            console.log(`[ERROR]: ${error.code} - ${error.message}`)
        });
}

function registerEmployee(companyId: string, email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            console.log('[SERVER]: employee=', user)
            await setDoc(getRef('users', user.uid), {
                email: user.email,
                company: companyId,
                emailVerified: user.emailVerified
            })
        })
        .catch((error) => {
            console.log(`[ERROR]: ${error.code} - ${error.message}`)
        });
}

export {registerBusiness, registerEmployee}
