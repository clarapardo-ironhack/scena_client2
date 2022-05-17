import './EventDetailsPage.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BigCard from '../../../components/Card/BigCard/BigCard'
import Loader from '../../../components/Loader/Loader'
import { Button, Container } from 'react-bootstrap'
import eventsService from '../../../services/events.service'
import authService from '../../../services/auth.service'
import { AuthContext } from '../../../context/auth.context'
import { useContext } from 'react'

const EventDetailsPage = () => {

    const { user, isLoggedIn } = useContext(AuthContext)
    const [event, setEvent] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [isPresent, setIsPresent] = useState(false)

    const { eventId } = useParams()

    useEffect(() => {
        checkEventAdded()
        loadEvent()
    }, [isPresent])


    const loadEvent = () => {

        eventsService
            .getOneEvent(eventId)
            .then(({ data }) => {
                setEvent(data)
                setIsLoaded(true)
            })
            .catch(err => console.log(err))

    }

    if (user !== null) {
        var loggedUserId = user._id
        var role = user.role
    }

    function addEvent() {
        authService
            .addEvent({ role, eventId, loggedUserId })

        setIsPresent(true)
    }

    function deleteEvent() {
        authService
            .deleteEvent({ role, eventId, loggedUserId })

        setIsPresent(false)
    }

    function checkEventAdded() {
        authService.checkEvent({ role, eventId, loggedUserId }).then(({ data }) => {
            setIsPresent(data)
        })

    }

    return (
        <>
            {
                !event
                    ?
                    <Loader />
                    :
                    <Container>
                        {isLoaded && <BigCard {...event} />}
                    </Container>
            }
            {
                isLoggedIn
                    ?
                    !isPresent
                        ?
                        <Button onClick={addEvent}>💙 Me gusta 💙 </Button>
                        :
                        <Button onClick={deleteEvent}> ☠ Ya no mola ☠ </Button>

                    :
                    <p>logueate payaso</p>

            }
        </>
    )
}

export default EventDetailsPage
