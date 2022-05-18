import { AuthContext } from './../../../context/auth.context'
import { useContext, useEffect, useState } from 'react'
import artistsService from './../../../services/artist.service'
import venuesService from './../../../services/venue.service'
import EventModerationCard from '../../../components/Card/EventModerationCard/EventModerationCard'
import messagesService from '../../../services/messages.service'
import MessageCard from '../../../components/MessageCard/MessageCard'



const MessagesPage = () => {

    const { user } = useContext(AuthContext)
    const [toBeApproved, setToBeApproved] = useState([])
    const [receivedMessages, setReceivedMessages] = useState([])
    const [isTrue, setIsTrue] = useState()
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        if (user.role === 'Artist') {
            artistInfoCall()
        } else if (user.role === 'Venue') {
            venueInfoCall()
        }
    }, [isTrue])

    useEffect(() => {
        messageInfoCall()
    }, [])

    const messageInfoCall = () => {
        messagesService
            .getAllUserMessages(user._id)
            .then(({ data }) => setReceivedMessages(data))
    }

    const artistInfoCall = () => {
        artistsService
            .getOneArtist(user._id)
            .then(({ data }) => {

                data.myEvents.map(element => {

                    if (element.isAproved.mainArtistCheck === false && element.mainArtist === user._id) {
                        setToBeApproved([...toBeApproved, element])
                    } else {
                        setToBeApproved([])
                    }
                })
            })
            .catch(err => console.log(err))
    }

    const venueInfoCall = () => {
        venuesService
            .getOneVenue(user._id)
            .then(({ data }) => {

                data.myEvents.map(element => {

                    if (element.isAproved.venueCheck === false && element.venue === user._id) {
                        setToBeApproved([...toBeApproved, element])
                    } else {
                        setToBeApproved([])
                    }
                })
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h1>MIS MENSAJES</h1>

            {toBeApproved.map(element => {
                return <EventModerationCard event={element} role={user.role} setState={setIsTrue} state={isTrue} />
            })}

            <h2>--------</h2>

            <h1>MENSAJERIA</h1>

            <h3>Sin contestar</h3>

            {receivedMessages.map(element => {
                if (!element.answered) {
                    return <MessageCard message={element} messageInfoCall={messageInfoCall}
                        setIsLoading={setIsLoading} isLoading={isLoading}
                    />
                }
            })}

            <h3>Contestados</h3>

            {receivedMessages.map(element => {
                if (element.answered) {
                    return <MessageCard message={element} messageInfoCall={messageInfoCall}
                        setIsLoading={setIsLoading} isLoading={isLoading}
                    />
                }
            })}
        </>
    )
}

export default MessagesPage