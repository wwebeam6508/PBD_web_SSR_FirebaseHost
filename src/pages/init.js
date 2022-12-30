import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setAuth } from "../redux/reducers/auth/slice"
import useBeforeRender from "../util/useBeforeRender"

export default function Init({ Component, pageProps }) {

    const dispatch = useDispatch()

    useBeforeRender(() => {
        if (typeof window !== 'undefined') {
            // Perform localStorage action
            const user = localStorage.getItem('user')
            if (user) {
                const auth = JSON.parse(user)
                dispatch(setAuth(auth))
            }
        }
    }, [dispatch])

    return (
        <Component {...pageProps} />
    )
}

