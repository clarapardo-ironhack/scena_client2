import { Container } from 'react-bootstrap'
import eventsService from '../../../services/events.service'
import { useEffect, useState } from "react"
import EventList from '../../../components/EventList/EventList'
import SearchBar from '../../../components/SearchBar/SearchBar'


const EventPage = () => {

    const [infoType, setEvent] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }

    useEffect(() => {
        loadEvents()
    }, [])

    const loadEvents = () => {

        eventsService
            .getAllEvents()
            .then(({ data }) => {
                setEvent(data)
                console.log(data)
                setIsLoaded(true)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Container>
                <SearchBar handler={inputHandler} input task='eventos' />
                {isLoaded && <EventList infoType={infoType} input={inputText} />}
            </Container>
        </>
    )
}

export default EventPage