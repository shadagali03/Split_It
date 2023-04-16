import { auth, db } from '../firebase'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { query, getDocs, collection, where } from "firebase/firestore";
import { useState } from 'react';


export default function Oauth() {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(auth.currentUser)
    auth.onAuthStateChanged(user => setUser(user))

    const signInWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            const user = res.user;
            const q = query(collection(db, "users"), where("uid", "==", user.uid));
            const docs = await getDocs(q);
            if (docs.docs.length === 0) {
                await db.collection("users").doc(user.uid).set({
                    uid: user.uid,
                    name: user.displayName,
                    email: user.email,
                })
            }
            setUser(auth.currentUser)
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    }

    const signOut = async () => {
        await auth.signOut()
        setUser(auth.currentUser)
    }

    return (<div>
        {user ?
            <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded absolute top-5 right-5' onClick={signOut}>Sign out</button>
            : <button onClick={signInWithGoogle} >
                <img src="https://www.drupal.org/files/issues/2020-01-19/google_logo.png" alt="Sign in with Google" width="200" height="50" />
            </button>}
    </div>
    )
}