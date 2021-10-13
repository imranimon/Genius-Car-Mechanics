import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState({})

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    //Observe user changed
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])


    const logOut = () => {
        setIsLoading(false)
        return signOut(auth)

    }


    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
        setIsLoading
    }
}

export default useFirebase;