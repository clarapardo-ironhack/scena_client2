import './HomePage.css'
import { useState, useEffect, useContext } from 'react'
import Section from '../../../components/Section/Section'
import { AuthContext } from '../../../context/auth.context'
import messagesService from '../../../services/messages.service'



const HomePage = () => {

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)

    const [receivedMessages, setReceivedMessages] = useState([])
    const [unansweredMessages, setUnansweredMessages] = useState([])

    const unaFuncion = () => {
        setUnansweredMessages(receivedMessages.map((element) => {
            if (element.answered === false) {
                return element
            }
        }))

    }

    console.log('AQUIIIIII', unansweredMessages.length)

    useEffect(() => {
        if (user) {
            messageInfoCall()
        }
    }, [])

    useEffect(() => {
        if (user) {
            unaFuncion()
        }
    }, [receivedMessages])

    const messageInfoCall = () => {
        messagesService
            .getAllUserMessages(user._id)
            .then(({ data }) => setReceivedMessages(data))
    }


    return (<div className='homePage'>

        <Section kind='event' />
        <Section kind='artist' />

    </div >
    )
}

export default HomePage