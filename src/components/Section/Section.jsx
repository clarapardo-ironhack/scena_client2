import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import artistsService from "../../services/artist.service"
import labelsService from "../../services/label.service"
import venuesService from "../../services/venue.service"
import eventsService from "../../services/events.service"
import SearchBar from "../SearchBar/SearchBar"
import GeneralList from '../GeneralList/GeneralList'
import EventList from '../EventList/EventList'
import Loader from "../Loader/Loader"

const Section = ({ kind }) => {

    // SEARCH

    const [infoType, setInfoType] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const [isEvent, setIsEvent] = useState(false)

    const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }


    switch (kind) {

        case 'artist':
            //ARTISTS

            useEffect(() => {
                loadArtists()
            }, [])

            const loadArtists = () => {
                artistsService
                    .getAllArtists()
                    .then(({ data }) => {
                        setInfoType(data)
                        setIsLoaded(true)
                    })
                    .catch(err => console.log(err))
            }
            break
        case 'event':
            //EVENTS

            useEffect(() => {
                setIsEvent(true)
                loadEvents()
            }, [])

            const loadEvents = () => {

                eventsService
                    .getAllEvents()
                    .then(({ data }) => {
                        setInfoType(data)
                        setIsLoaded(true)
                    })
                    .catch(err => console.log(err))
            }

            break
        case 'label':
            //LABELS

            useEffect(() => {
                loadLabels()
            }, [])

            const loadLabels = () => {
                labelsService
                    .getAllLabels()
                    .then(({ data }) => {
                        setInfoType(data)
                        setIsLoaded(true)
                    })
                    .catch(err => console.log(err))
            }
            break
        case 'venue':

            // VENUES

            useEffect(() => {
                loadVenues()
            }, [])

            const loadVenues = () => {
                venuesService
                    .getAllVenues()
                    .then(({ data }) => {
                        setInfoType(data)
                        setIsLoaded(true)
                    })
                    .catch(err => console.log(err))
            }
            break
    }





    return (
        <Container>
            <h1>HOLA</h1>
            <SearchBar handler={inputHandler} task={`${kind}s`} />
            {isLoaded && !isEvent && <GeneralList infoType={infoType} input={inputText} />}
            {isLoaded && isEvent && <EventList infoType={infoType} input={inputText} />}
            {!isLoaded && <Loader />}
        </Container>
    )
}

export default Section

