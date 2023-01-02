import { useDispatch } from 'react-redux'
import { store } from '../redux'
import { setAuth } from '../redux/reducers/auth/slice'
import errorHandler from './errorHandler'
import headers from './headers'

export function isEmpty(str) {
    return (!str || /^\s*$/.test(str))
}

export async function errorHandle(error) {
    if (error.response) {
        const errorRes = error.response.data.error
        if (errorRes.code === 401) {
            if (await refreshTokenRequest()) {
                return await requestAgain(error.config)
            }
        }
        errorHandler({ errorCode: errorRes.code, errorMessage: errorRes.message })
    } else {
        errorHandler({ errorCode: 500, errorMessage: "Internal Server Error" })
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
    const state = store.getState()
    const dispatch = useDispatch()
    const requestOption = {
        headers: {
            "content-type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Connection": "keep-alive",
            "Request-Timeout": "60000"
        }
    }
    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/refreshtoken`, {
            "refreshToken": state.auth.refreshToken
        }, requestOption)
        let userAuth = localStorage.getItem('user')
        userAuth = JSON.parse(userAuth)
        userAuth.accessToken = res.data.data.accessToken
        userAuth.refreshToken = res.data.data.refreshToken
        localStorage.setItem('user', JSON.stringify(userAuth))
        dispatch(setAuth(userAuth))
        return true
    } catch (error) {
        return false
    }

}