import { store } from "../redux"
import errorHandler from "./errorHandler"
export default function headers() {
    const state = store.getState()
    if (state.auth.accessToken === null) return errorHandler({ errorCode: 500, errorMessage: "Dont Have AccessToken" })
    return {
        "content-type": "application/json",
        "Authorization": state.auth.accessToken,
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Connection": "keep-alive",
        "Request-Timeout": "60000"
    }
}