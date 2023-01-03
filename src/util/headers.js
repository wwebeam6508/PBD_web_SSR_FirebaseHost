import errorHandler from "./errorHandler"
export default function headers() {
    const accessToken = JSON.parse(localStorage.getItem('user')).accessToken
    if (accessToken == null) return errorHandler({ errorCode: 500, errorMessage: "Dont Have AccessToken" })
    return {
        "content-type": "application/json",
        "Authorization": accessToken,
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Request-Timeout": "60000"
    }
}