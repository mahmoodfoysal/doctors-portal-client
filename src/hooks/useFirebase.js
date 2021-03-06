import initilizationAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth,GoogleAuthProvider,signInWithPopup, createUserWithEmailAndPassword,signInWithEmailAndPassword , signOut,onAuthStateChanged, updateProfile } from "firebase/auth";
import {useEffect, useState} from 'react';

initilizationAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')

    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            const newUser = {email, displayName: name};
            setUser(user);
            history.replace('/')
            // save user to the database 
            saveUser(email, name, 'POST');
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                
              }).catch((error) => {
                
              });
        })
        .finally(() => setIsLoading(false))
    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(() => {

        })
        .finally(() => setIsLoading(false))
    }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setUser(result.user);
        })
        .finally(() => setIsLoading(false))
    }


    const signInWithGoogle =(location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setUser(user);
            saveUser(user.email, user.displayName, 'PUT')
        })
        .finally(() => setIsLoading(false))
    }

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user);
             
            } 
            else {
              setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscribe;
    }, [])


    const saveUser = (email, displayName, method) => {
        const user = {email, displayName};
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then()
    }


    return {
        user,
        setUser, 
        registerUser,
        logOut,
        loginUser,
        signInWithGoogle,
        isLoading
    }
}



export default useFirebase;