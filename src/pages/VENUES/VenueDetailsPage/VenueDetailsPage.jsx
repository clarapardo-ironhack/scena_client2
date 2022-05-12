import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import venuesService from '../../../services/venue.service'
import BigCard from '../../../components/Card/BigCard/BigCard'
import './VenueDetailsPage.css'
import Loader from '../../../components/Loader/Loader'
import { Container } from 'react-bootstrap'

const VenueDetailsPage = () => {

    const [venue, setVenue] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const { venueId } = useParams()

    useEffect(() => {
        loadVenue()
    }, [])

    const loadVenue = () => {

        venuesService
            .getOneVenue(venueId)
            .then(({ data }) => {
                setVenue(data)
                setIsLoaded(true)
            })
            .catch(err => console.log(err))

    }
    console.log(venue)

    return (
        !venue
            ?
            <Loader />
            :
            <Container>
                {isLoaded && <BigCard {...venue} />}
            </Container>
    )
}

export default VenueDetailsPage