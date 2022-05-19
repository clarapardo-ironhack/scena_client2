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
import GeneralList from '../../../components/GeneralList/GeneralList'
import ScenaNav from './../../../components/Navbar/ScenaNav'




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
            <ScenaNav />
            {!artist
                ?
                <Loader />
                :
                <Container>
                    {isLoaded && <BigCard {...artist} />}

                    {isLoggedIn
                        ?
                        !isPresent
                            ?
                            <Button className="fumadita" onClick={addArtist}>💙 Me gusta 💙 </Button>
                            :
                            <Button className="fumadita" onClick={deleteArtist}> ☠ Ya no mola ☠ </Button>
                        :
                        <p>logueate payaso</p>
                    }
                    <EventList infoType={eventsAttended} />
                </Container>
            }

        </>
    )
}

export default ArtistDetailsPage