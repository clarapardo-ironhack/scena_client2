
import { Container } from 'react-bootstrap'
import eventsService from '../../../services/events.service'
import { useEffect, useState } from "react"
import EventList from '../../../components/EventList/EventList'

const EventPage = () => {

    const [infoType, setEvent] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        loadEvents()
    }, [])

    const loadEvents = () => {
        eventsService
            .getAllEvents()
            .then(({ data }) => {
                setEvent(data)
                setIsLoaded(true)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Container>
                {isLoaded && <EventList infoType={infoType} />}
            </Container>
        </>
    )
}

export default EventPage