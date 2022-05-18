import SearchBar from '../../../components/SearchBar/SearchBar'
import './HomePage.css'
import filterMachine from '../../../utils/filterMachine'
import { useState, useEffect, useContext } from 'react'
import artistsService from '../../../services/artist.service'
import Map from '../../../components/Map/Map'
import { Container } from 'react-bootstrap'
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
    }, [receivedMessages])

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


    return (<>
        <h1>jompeich</h1>

        <p>Tienes {unansweredMessages.length} mensajes nuevos</p>

        <Section kind='event' />
        <Section kind='artist' />

    </>
    )
}

export default HomePage

