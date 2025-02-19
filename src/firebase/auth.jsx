import { GoogleAuthProvider, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updatePassword } from "firebase/auth"
import {auth} from "./firebase"

export const doCreateUserWithEmailAndPassword = async (email,password)=>{
     createUserWithEmailAndPassword(auth,email,password)
}
export const doSignInWithEmailAndPassword=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
};
export const doSignInWithGoogle= async ()=>{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth,provider);
    return result 
}
export const doSignOut = ()=>{
    return auth.signOut()
}
export const doPasswordReset = ()=>{
    return sendPasswordResetEmail(auth,email)
}
export const doPasswordChange = (password)=>{
    return updatePassword(auth.currentUser,password)
}
export const doSendVerification = (password)=>{
    return sendEmailVerification(auth.currentUser,{
        url:`${window.location.origin}/home`,
    })
}