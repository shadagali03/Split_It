import React, { useEffect } from 'react'
import { GoogleLogin, googleLogout, GoogleOAuthProvider } from '@react-oauth/google';
import useStore from '../store'
import Cookies from 'universal-cookie'
const cookies = new Cookies()


export default function Oauth() {
    const user = useStore(state => state.user)
    const setUser = useStore(state => state.setUser)
    console.log(user)

    useEffect(() => {
        const googleUser = cookies.get('googleUser')
        if (googleUser) (async () => setUser(googleUser))()
    }, [setUser])

    return <GoogleOAuthProvider clientId="1028579500769-fg8adfhna2c5hb7ee0012afb5t6kunqi.apps.googleusercontent.com">
        {user ?
            <button className="text-white bg-gradient-to-r from-main-400 via-main-500 to-main-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-main-300 dark:focus:ring-main-800 shadow-lg shadow-main-500/50 dark:shadow-lg dark:shadow-main-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={async () => {
                    googleLogout()
                    cookies.set('googleUser', null)
                    setUser(null)
                }}
                type="button">
                Logout
            </button> :
            <GoogleLogin
                onSuccess={async (googleUser) => {
                    cookies.set('googleUser', googleUser)
                    setUser(googleUser)
                }}
                onError={(error) => console.log(error)}
                auto_select
                // useOneTap
            />

        }
    </GoogleOAuthProvider>
}