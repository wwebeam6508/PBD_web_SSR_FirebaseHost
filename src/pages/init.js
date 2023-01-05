import React, { useEffect } from "react"
import { store } from "../redux"
import { setAuth } from "../redux/reducers/auth/slice"
import useBeforeRender from "../util/useBeforeRender"

export default function Init({ Component, pageProps }) {


    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Perform localStorage action
            const user = localStorage.getItem('user')
            if (user) {
                const auth = JSON.parse(user)
                store.dispatch(setAuth(auth))
            }
        }
    }, [store])

    return (
        <Component {...pageProps} />
    )
}

