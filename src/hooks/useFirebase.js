import initilizationAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword , signOut,onAuthStateChanged } from "firebase/auth";
import {useEffect, useState} from 'react';

initilizationAuthentication();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')

    const registerUser = (email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setUser(user);
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


    return {
        user,
        setUser, 
        registerUser,
        logOut,
        loginUser,
        isLoading
    }
}



export default useFirebase;