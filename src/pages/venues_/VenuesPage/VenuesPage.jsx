import './VenuesPage.css'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from "react"
import venuesService from "../../../services/venue.service"
import GeneralList from "../../../components/GeneralList/GeneralList"
import SearchBar from '../../../components/SearchBar/SearchBar'

const VenuesPage = () => {

    const [infoType, setVenue] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    useEffect(() => {
        loadVenues()
    }, [])

    const loadVenues = () => {
        venuesService
            .getAllVenues()
            .then(({ data }) => {
                setVenue(data)
                setIsLoaded(true)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Container>
                <SearchBar handler={inputHandler} task='eventos' />
                {isLoaded && <GeneralList infoType={infoType} input={inputText} />}
            </Container>
        </>
    )
}

export default VenuesPage
