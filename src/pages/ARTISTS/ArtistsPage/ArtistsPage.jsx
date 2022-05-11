import './ArtistsPage.css'
import { Container } from 'react-bootstrap'
import ArtistList from '../../../components/ArtistList/ArtistList'
import { useEffect, useState } from "react"
import artistsService from "../../../services/artist.service"

const ArtistPage = () => {


    const [artist, setArtist] = useState([])
    const [isLoaded,setIsLoaded]=useState(false)

    useEffect(() => {
        loadArtists()
    }, [])

    const loadArtists = () => {
        artistsService
            .getAllArtists()
            .then(({ data }) => {
                setArtist(data)
                setIsLoaded(true)
            })
            .catch(err => console.log(err))
    }
    
    return (
        <>
            <Container>
                {isLoaded && <ArtistList artist={artist} />}
            </Container>
        </>
    )
}

export default ArtistPage