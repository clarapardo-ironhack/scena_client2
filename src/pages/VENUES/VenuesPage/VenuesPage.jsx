import './VenuesPage.css'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from "react"
import venuesService from "../../../services/venue.service"
import GeneralList from "../../../components/GeneralList/GeneralList"

const VenuesPage = () => {

    const [infoType, setVenue] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

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
                {isLoaded && <GeneralList infoType={infoType} />}
            </Container>
        </>
    )
}

export default VenuesPage
