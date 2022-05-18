import React, { createContext, useState } from 'react'
import { useEffect } from 'react'
import authService from '../services/auth.service'
import messagesService from '../services/messages.service'


const AuthContext = createContext()

function AuthProviderWrapper(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [unansweredMessages, setUnansweredMessages] = useState(0)



    const storeToken = (token) => {
        localStorage.setItem("authToken", token)
    }

    const removeToken = () => {
        localStorage.removeItem("authToken")
    }

    const getToken = () => {
        return localStorage.getItem("authToken")
    }


    const authenticateUser = () => {

        const storedToken = getToken()

        if (!storedToken) {
            logOutUser()

        } else {
            authService
                .verify(storedToken)
                .then(({ data }) => {
                    const user = data
                    setIsLoggedIn(true)
                    setIsLoading(false)
                    setUser(user)

                })
                .catch(() => logOutUser())
        }
    }

    const getMessagesNumber = () => {

        if (user) {
            messagesService
                .getTotalUserMessages(user._id)
                .then(({ data }) => {
                    setUnansweredMessages(data)
                })
        }

    }

    const logOutUser = () => {
        removeToken()
        setIsLoggedIn(false)
        setIsLoading(false)
        setUser(null)
    }

    useEffect(() => {
        getMessagesNumber()
        authenticateUser()
    }, [unansweredMessages])

    return (
        <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logOutUser }}>
            {props.children}
            {console.log('aaaaauuuuuuuuuuuuuuuuuuuuuthe------- ', unansweredMessages)}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }