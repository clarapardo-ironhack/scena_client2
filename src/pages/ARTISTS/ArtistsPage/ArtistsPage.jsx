import './ArtistsPage.css'
import { Button, Container, InputGroup } from 'react-bootstrap'
import GeneralList from '../../../components/GeneralList/GeneralList'
import { useEffect, useState } from "react"
import artistsService from "../../../services/artist.service"
import SearchBar from '../../../components/SearchBar/SearchBar'
import GenreSearchList from '../GenreSearchList/GenreSearchList'
import stylesList from '../../../utils/stylesList'


const ArtistPage = () => {

    const [genreSearch, setGenreSearch] = useState(false)
    const [artistSearch, setArtistSearch] = useState(true)


    const [infoType, setArtist] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }

    let genreButtonHandler = () => {
        setGenreSearch(true)
        setArtistSearch(false)
    }

    let artistsButtonHandler = () => {
        setGenreSearch(false)
        setArtistSearch(true)
    }

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
                {artistSearch && <Button onClick={genreButtonHandler}>GÉNEROS</Button>}
                {genreSearch && <Button onClick={artistsButtonHandler}>ARTISTAS</Button>}
                <SearchBar handler={inputHandler} task={artistSearch ? 'artistas' : 'géneros'} />
                {isLoaded && artistSearch && <GeneralList infoType={infoType} input={inputText} />}
                {genreSearch && <GenreSearchList infoType={stylesList} input={inputText} artistsList={infoType} />}
            </Container>
        </>
    )
}

export default ArtistPage