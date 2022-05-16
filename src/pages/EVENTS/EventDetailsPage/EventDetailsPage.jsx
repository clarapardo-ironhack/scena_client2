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

    const { eventId } = useParams()

    useEffect(() => {
        loadEvent()
    }, [])


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
                    </Container>}
            {
                isLoggedIn
                    ?
                    <Button onClick={addEvent}>Añadir Evento a tu lista de Favoritos</Button>
                    :
                    <p>Logueate para añadir un eventos a tu lista de favoritos!!!</p>
            }
        </>
    )
}

export default EventDetailsPage
