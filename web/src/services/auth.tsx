import api from '../services/api'
import { Buffer } from 'buffer'

interface Response {
    token: string,
    user:{
        name: string,
        email: string,
        lastname: string
    }
}

export async function signIn(email: string, password: string): Promise<Response>{
 
    const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64')
    const data = {}
    const userData = await api.post('/login', data, {
        headers: {
             'Authorization': `Basic ${token}`
        }
    })
    return userData.data
}
