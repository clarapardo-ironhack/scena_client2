import { Container } from 'react-bootstrap'
import labelService from '../../../services/label.service'
import { useEffect, useState } from "react"
import GeneralList from '../../../components/GeneralList/GeneralList'
import SearchBar from '../../../components/SearchBar/SearchBar'

const LabelPage = () => {

    const [infoType, setLabel] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    useEffect(() => {
        loadLabels()
    }, [])

    const loadLabels = () => {
        labelService
            .getAllLabels()
            .then(({ data }) => {
                setLabel(data)
                setIsLoaded(true)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Container>
                <SearchBar handler={inputHandler} task='sellos discográficos y agencias de management' />
                {isLoaded && <GeneralList infoType={infoType} input={inputText} />}
            </Container>
        </>
    )
}

export default LabelPage