
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/auth.context"
import messagesService from './../../services/messages.service'
import MessageCard from './../MessageCard/MessageCard'
import './ChatSection.css'




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

    return (<div className="chatSection">
        <h1>MENSAJERIA</h1>

        <h2>Sin contestar</h2>

        {
            receivedMessages.map(element => {
                if (!element.answered) {
                    return <MessageCard message={element} messageInfoCall={messageInfoCall}
                        setIsLoading={setIsLoading} isLoading={isLoading}
                    />
                }
            })
        }

        <h2>Contestados</h2>

        {
            receivedMessages.map(element => {
                if (element.answered) {
                    return <MessageCard message={element} messageInfoCall={messageInfoCall}
                        setIsLoading={setIsLoading} isLoading={isLoading}
                    />
                }
            })
        }
    </div>)
}

export default ChatSection