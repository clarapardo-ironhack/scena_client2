import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import venuesService from '../../../services/venue.service'
import authService from '../../../services/auth.service'
import BigCard from '../../../components/Card/BigCard/BigCard'
import './VenueDetailsPage.css'
import Loader from '../../../components/Loader/Loader'
import { Button, Container } from 'react-bootstrap'
import { AuthContext } from '../../../context/auth.context'
import { useContext } from 'react'

const VenueDetailsPage = () => {

    const { user, isLoggedIn } = useContext(AuthContext)
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

    if (user !== null) {
        var loggedUserId = user._id
        var role = user.role
    }

    function addVenue() {
        authService
            .addVenue({ role, venueId, loggedUserId })
    }


    return (
        <>
            {!venue
                ?
                <Loader />
                :
                <Container>
                    {isLoaded && <BigCard {...venue} />}
                </Container>}
            {
                isLoggedIn
                    ?
                    <Button onClick={addVenue}>Añadir Venue a tu lista de Favoritos</Button>
                    :
                    <p>Logueate para añadir un Venue a tu lista de favoritos!!!</p>
            }
        </>
    )
}

export default VenueDetailsPage