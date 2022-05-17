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
    const [isPresent, setIsPresent] = useState(false)


    const { venueId } = useParams()

    useEffect(() => {
        checkVenueAdded()
        loadVenue()
    }, [isPresent])

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
        checkVenueAdded()
    }

    function deleteVenue() {
        authService
            .deleteVenue({ role, venueId, loggedUserId })
        checkVenueAdded()
    }


    function checkVenueAdded() {
        authService.checkVenue({ role, venueId, loggedUserId }).then(({ data }) => {
            setIsPresent(data)
        })

    }


    return (
        <>
            {
                !venue
                    ?
                    <Loader />
                    :
                    <Container>
                        {isLoaded && <BigCard {...venue} />}
                        {
                            isLoggedIn
                                ?
                                !isPresent
                                    ?
                                    <Button onClick={addVenue}>💙 Me gusta 💙 </Button>
                                    :
                                    <Button onClick={deleteVenue}> ☠ Ya no mola ☠ </Button>

                                :
                                <p>logueate payaso</p>

                        }
                    </Container>
            }

        </>
    )
}

export default VenueDetailsPage