import storageUtils from './../utils/storageUtils'
import axios, { AxiosRequestConfig } from 'axios'
import { Alert } from 'react-native'
const default_time_out = 10000
const base_url = 'https://api.boostcamp.link/app/coach_program'
const client = axios.create({
    baseURL: base_url,
    timeout: default_time_out,
    method: 'post'
})

client.interceptors.request.use(
    async config => {
        const token = await storageUtils.getToken()
        console.log('token: ', token)
        console.log('config***', config)
        if (config?.data) {
            config.data = JSON.stringify(config.data)
        }
        config.headers = {
            'Content-Type': 'application/json',
            Authorization: `FirebaseIdToken:${token}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

client.interceptors.response.use(
    response => {
        if (response.status > 499) {
            Alert.alert('server error')
        }
        return response
    },
    error => {
        console.log('request error', error)
    }
)

export async function request<T>(url: string, config?: AxiosRequestConfig, params?: {}) {
    const token = await storageUtils.getToken()
    if (config?.headers) {
        config.headers['Authorization'] = `FirebaseIdToken:${token}`
    }
    const response = await client.request<T>({ url, ...config, ...params })
    console.log('response', response)
    const result = response?.data
    return result
}
