import './FavoritesPage.css'
import { useState, useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import BigCard from '../../../components/Card/BigCard/BigCard'
import Loader from '../../../components/Loader/Loader'
import { Button, Container } from 'react-bootstrap'
import { AuthContext } from '../../../context/auth.context'
import { useContext } from 'react'
import fansService from '../../../services/fan.service'
import artistsService from '../../../services/artist.service'
import venuesService from '../../../services/venue.service'
import ScenaNav from './../../../components/Navbar/ScenaNav'


const FavoritesPage = () => {

    const { user, isLoggedIn } = useContext(AuthContext)
    const [isLoaded, setIsLoaded] = useState(false)
    const [infoType, setCurrentUser] = useState([])

    let loadSearch

    useEffect(() => {
        loadSearch()
    }, [])

    if (user.role === 'Fan') {

        loadSearch = () => {

            fansService
                .getOneFan(user._id)
                .then(({ data }) => {
                    setCurrentUser(data)
                    setIsLoaded(true)
                })
                .catch(err => console.log(err))

        }
    } else if (user.role === 'Artist') {

        loadSearch = () => {

            artistsService
                .getOneArtist(user._id)
                .then(({ data }) => {
                    setCurrentUser(data)
                    setIsLoaded(true)
                })
                .catch(err => console.log(err))

        }
    } else if (user.role === 'Venue') {

        loadSearch = () => {

            venuesService
                .getOneVenue(user._id)
                .then(({ data }) => {
                    setCurrentUser(data)
                    setIsLoaded(true)
                })
                .catch(err => console.log(err))
        }
    }


    return (<>
        <ScenaNav />
        <Container>
            {isLoaded && <BigCard {...infoType} />}
        </Container>
    </>)
}

export default FavoritesPage