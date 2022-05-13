import './ArtistsPage.css'
import { Container, InputGroup } from 'react-bootstrap'
import GeneralList from '../../../components/GeneralList/GeneralList'
import { useEffect, useState } from "react"
import artistsService from "../../../services/artist.service"
import SearchBar from '../../../components/SearchBar/SearchBar'

const ArtistPage = () => {


    const [infoType, setArtist] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

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
               <SearchBar handler={inputHandler}/>
                {isLoaded && <GeneralList infoType={infoType} input={inputText} />}
            </Container>
        </>
    )
}

export default ArtistPage