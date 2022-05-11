import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import artistsService from '../../../services/artist.service'
import BigArtistCard from '../../../components/ArtistCard/BigArtistCard/BigArtistCard'
import './ArtistDetailsPage.css'
import Loader from '../../../components/Loader/Loader'
import { Container } from 'react-bootstrap'

const ArtistDetailsPage = () => {

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
    console.log(artist)

    return (
        !artist
            ?
            <Loader />
            :
            <Container>
                {isLoaded && <BigArtistCard {...artist} />}
            </Container>
    )
}

export default ArtistDetailsPage