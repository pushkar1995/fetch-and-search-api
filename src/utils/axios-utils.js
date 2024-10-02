import axios from 'axios';

const client = axios.create({ baseURL: 'http://localhost:4000' })

export const request = ({ ...options }) => { 
    client.defaults.headers.common.Authorization = `Bearer token`
    const onSucess = (response) => response
    const onError = (error) => { 
        // optionally catch errors and add additional logging here
        return error
    }

    return client(options).then(onSucess).catch(onError)
}