



import Router from 'next/router'
import { store } from '../redux'
import errorHandler from './errorHandler'
import headers from './headers'

export function isEmpty(str) {
    return (!str || /^\s*$/.test(str))
}

export async function errorHandle(error) {
    if(error.response){
        if (error.response.data.error) {
            const errorRes = error.response.data.error
            if (errorRes.code === 401) {
                if (await refreshTokenRequest()) {
                    return await requestAgain(error.config)
                }
            }
            errorHandler({ errorCode: errorRes.code, errorMessage: errorRes.message })
        }
    } else {
        errorHandler({ errorCode: error.code ? error.code : 500, errorMessage: error.message ? error.message : 'Unknown Error'})
    }
}

async function requestAgain(config) {
    const reqeustConfig = {
        method: config.method,
        url: config.url,
        data: JSON.parse(config.data)
    }
    const requestOption = {
        headers: headers
    }
    try {
        if (reqeustConfig.method === 'get') {
            const response = await axios.get(`${reqeustConfig.url}`, requestOption)
            return response.data
        } else {
            const response = await axios[method](`${reqeustConfig.url}`, reqeustConfig.data, requestOption)
            return response.data
        }
    } catch (error) {
        await errorHandle(error)
    }
}

async function refreshTokenRequest() {
    const userAuth = JSON.parse(localStorage.getItem('user'))
    if(userAuth == null) {
        return false
    } else if( userAuth.refreshToken == null) return false
    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/refreshtoken`, {
            "refreshToken": refreshToken
        }, requestOption)
        let userAuth = JSON.parse(localStorage.getItem('user'))
        userAuth.accessToken = res.data.data.accessToken
        userAuth.refreshToken = res.data.data.refreshToken
        localStorage.setItem('user', JSON.stringify(userAuth))
        store.dispatch(setAuth(userAuth))
        return true
    } catch (error) {
        return false
    }

}