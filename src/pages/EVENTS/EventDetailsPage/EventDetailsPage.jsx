import './EventDetailsPage.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BigCard from '../../../components/Card/BigCard/BigCard'
import Loader from '../../../components/Loader/Loader'
import { Container } from 'react-bootstrap'
import eventsService from '../../../services/events.service'

const EventDetailsPage = () => {

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

    return (
        !event
            ?
            <Loader />
            :
            <Container>
                {isLoaded && <BigCard {...event} />}
            </Container>
    )
}

export default EventDetailsPage
