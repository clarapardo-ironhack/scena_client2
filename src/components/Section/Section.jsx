import { Container } from "react-bootstrap"


const Section = ({ backgroundURL, kind }) => {

    // SEARCH

    const [infoType, setInfoType] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }

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

    //EVENTS

    useEffect(() => {
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

    //LABELS

    useEffect(() => {
        loadLabels()
    }, [])

    const loadLabels = () => {
        labelService
            .getAllLabels()
            .then(({ data }) => {
                setInfoType(data)
                setIsLoaded(true)
            })
            .catch(err => console.log(err))
    }

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






    return (
        <Container>
            <SearchBar handler={inputHandler} task={`${task}s`} />
        </Container>
    )
}

export default Section

