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


const ArtistDetailsPage = () => {

    const { user, isLoggedIn } = useContext(AuthContext)
    const [artist, setArtist] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const { artistId } = useParams()

    useEffect(() => {
        loadArtist()
    }, [])

    const loadArtist = () => {

        artistsService
            .getOneArtist(artistId)
            .then(({ data }) => {
                setArtist(data)
                setIsLoaded(true)
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
    }

    return (
        <>
            {!artist
                ?
                <Loader />
                :
                <Container>
                    {isLoaded && <BigCard {...artist} />}
                </Container>
            }
            {
                isLoggedIn
                    ?
                    <Button onClick={addArtist}>Añadir Artista a tu lista de Favoritos</Button>
                    :
                    <p>Logueate para añadir a artistas!!!</p>
            }
        </>
    )
}

export default ArtistDetailsPage