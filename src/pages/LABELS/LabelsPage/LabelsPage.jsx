import { Container } from 'react-bootstrap'
import labelService from '../../../services/label.service'
import { useEffect, useState } from "react"
import GeneralList from '../../../components/GeneralList/GeneralList'

const LabelPage = () => {

    const [infoType, setLabel] = useState([])

    const [isLoaded, setIsLoaded] = useState(false)

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
                {isLoaded && <GeneralList infoType={infoType} />}
            </Container>
        </>
    )
}

export default LabelPage