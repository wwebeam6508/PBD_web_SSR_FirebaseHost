// create api call to get menu data with axois

import axios from 'axios'
import headers from '../../util/headers'
import { errorHandle } from '../../util/helper'

export const getMenuData = async () => {
    const requestOption = {
        headers: headers()
    }
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/menu/get`, requestOption)
        return response.data
    } catch (error) {
        console.log(error)
        await errorHandle(error)
    }
}