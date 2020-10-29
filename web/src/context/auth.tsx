import React, { createContext, useState, useEffect, useContext } from 'react'
import * as auth from '../services/auth'
import api from '../services/api'

interface User{
    name: string,
    lastname: string
    email: string
}

interface AuthContextData{
    signed: boolean,
    user: User | null,
    signIn(user:string, password:string): Promise<void>,
    signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
    const[user, setUser] = useState<User | null>(null)

    useEffect(() =>{

        async function loadStorageData(){
         const storagedUser =  localStorage.getItem('@PFAuth:user')
         const storagedToken = localStorage.getItem('@PFAuth:token')

            if( storagedUser && storagedToken){

                api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`
                setUser(JSON.parse(storagedUser))
            }  
        }

      loadStorageData()
        
    },[])

    async function signIn(email: string, password: string){
        const response = await auth.signIn(email, password)
       
        setUser(response.user)

        api.defaults.headers['Authorization'] = `Bearer ${response.token}`

        localStorage.setItem('@PFAuth:user', JSON.stringify(response.user))
        localStorage.setItem('@PFAuth:token', response.token)
    }

    function signOut(){
        
        localStorage.removeItem('@PFAuth:user')
        localStorage.removeItem('@PFAuth:token')
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }} >
            { children }
        </AuthContext.Provider>
    )
        
}

export function useAuth(){
    const context = useContext(AuthContext)
    return context
}