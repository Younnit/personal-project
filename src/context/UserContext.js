import {createContext, useState} from 'react'
import axios from 'axios'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const handleRegister = (username, password) => {
        axios.post('/auth/register', {username, password}).then(res => {
            setUser(res.data)
        }).catch(err => console.log(err))
    }

    const handleLogin = (username, password) => {
        axios.post('/auth/login', {username, password}).then(res => {
            setUser(res.data)
        }).catch(err => console.log(err))
    }

    const handleLogout = () => {
        axios.get('/auth/logout').then(_ => {
            setUser(null)
        })
    }
    return (
        <UserContext.Provider value={{
            user,
            setUser,
            handleRegister,
            handleLogin,
            handleLogout
        }}>
            {children}
        </UserContext.Provider>
    )
}