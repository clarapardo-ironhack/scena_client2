import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import artistsService from '../../../services/artist.service'
import authService from '../../../services/auth.service'
import BigCard from '../../../components/Card/BigCard/BigCard'
import './ArtistDetailsPage.css'
import Loader from '../../../components/Loader/Loader'
import { Button, Container } from 'react-bootstrap'
import { AuthContext } from '../../../context/auth.context'
import { useContext } from 'react'
import EventList from '../../../components/EventList/EventList'



const ArtistDetailsPage = () => {

    const { user, isLoggedIn } = useContext(AuthContext)
    const [artist, setArtist] = useState([])
    const [eventsAttended, setEventsAttended] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [isPresent, setIsPresent] = useState(false)


    const { artistId } = useParams()

    useEffect(() => {
        checkArtistAdded()
        loadArtist()
    }, [isPresent])

    const loadArtist = () => {

        artistsService
            .getOneArtist(artistId)
            .then(({ data }) => {
                setArtist(data)
                setIsLoaded(true)
                let arrEvent = []
                data.myEvents.map((elem, index) => {
                    arrEvent.push(elem)
                })
                setEventsAttended(arrEvent)

            })
            .catch(err => console.log(err))

    }


    if (user !== null) {
        var loggedUserId = user._id
        var role = user.role
    }


    function addArtist() {
        authService
            .addArtist({ role, artistId, loggedUserId })
        setIsPresent(true)
    }

    function deleteArtist() {
        authService
            .deleteArtist({ role, artistId, loggedUserId })
        setIsPresent(false)
    }


    function checkArtistAdded() {
        authService.checkArtist({ role, artistId, loggedUserId }).then(({ data }) => {
            setIsPresent(data)
        })

    }


    return (
        <>
            {!artist
                ?
                <Loader />
                :
                <Container>
                    {isLoaded && <BigCard {...artist} />}
                    <EventList infoType={eventsAttended} />
                </Container>
            }
            {
                isLoggedIn
                    ?
                    !isPresent
                        ?
                        <Button onClick={addArtist}>💙 Me gusta 💙 </Button>
                        :
                        <Button onClick={deleteArtist}> ☠ Ya no mola ☠ </Button>

                    :
                    <p>logueate payaso</p>

            }

        </>
    )
}

export default ArtistDetailsPage