
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/auth.context"
import messagesService from './../../services/messages.service'
import MessageCard from './../MessageCard/MessageCard'



const ChatSection = () => {

    const { user } = useContext(AuthContext)
    const [receivedMessages, setReceivedMessages] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        messageInfoCall()
    }, [])

    const messageInfoCall = () => {
        messagesService
            .getAllUserMessages(user._id)
            .then(({ data }) => setReceivedMessages(data))
    }

    return (<>
        <h2>--------</h2>

        <h1>MENSAJERIA</h1>

        <h3>Sin contestar</h3>

        {
            receivedMessages.map(element => {
                if (!element.answered) {
                    return <MessageCard message={element} messageInfoCall={messageInfoCall}
                        setIsLoading={setIsLoading} isLoading={isLoading}
                    />
                }
            })
        }

        <h3>Contestados</h3>

        {
            receivedMessages.map(element => {
                if (element.answered) {
                    return <MessageCard message={element} messageInfoCall={messageInfoCall}
                        setIsLoading={setIsLoading} isLoading={isLoading}
                    />
                }
            })
        }
    </>)
}

export default ChatSection