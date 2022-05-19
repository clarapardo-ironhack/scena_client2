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
import ScenaNav from './../../../components/Navbar/ScenaNav'


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
        setIsPresent(true)

    }

    function deleteVenue() {
        authService
            .deleteVenue({ role, venueId, loggedUserId })
        setIsPresent(false)

    }


    function checkVenueAdded() {
        authService.checkVenue({ role, venueId, loggedUserId }).then(({ data }) => {
            setIsPresent(data)
        })

    }


    return (
        <><ScenaNav />
            {
                !venue
                    ?
                    <Loader />
                    :
                    <Container>
                        {isLoaded && <BigCard {...venue} />}

                    </Container>
            }
            {
                isLoggedIn
                    ?
                    !isPresent
                        ?
                        <div className="likeGeneral" onClick={addVenue}>❤️</div>
                        :
                        <div className="likeGeneral" onClick={deleteVenue}>👎</div>

                    :
                    <p>logueate payaso</p>

            }

        </>
    )
}

export default VenueDetailsPage