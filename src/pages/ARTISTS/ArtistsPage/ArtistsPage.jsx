import './ArtistsPage.css'
import { Container } from 'react-bootstrap'
import GeneralList from '../../../components/GeneralList/GeneralList'
import { useEffect, useState } from "react"
import artistsService from "../../../services/artist.service"

const ArtistPage = () => {


    const [infoType, setArtist] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

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
    console.log(infoType)
    return (
        <>
            <Container>
                {isLoaded && <GeneralList infoType={infoType} />}
            </Container>
        </>
    )
}

export default ArtistPage