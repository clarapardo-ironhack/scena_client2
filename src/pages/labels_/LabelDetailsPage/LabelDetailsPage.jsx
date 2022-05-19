import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import labelsService from '../../../services/label.service'
import BigCard from '../../../components/Card/BigCard/BigCard'
import './LabelDetailsPage.css'
import Loader from '../../../components/Loader/Loader'
import { Container } from 'react-bootstrap'

const LabelDetailsPage = () => {

    const [label, setLabel] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const { labelId } = useParams()

    useEffect(() => {
        loadLabel()
    }, [])

    const loadLabel = () => {

        labelsService
            .getOneLabel(labelId)
            .then(({ data }) => {
                setLabel(data)
                setIsLoaded(true)
            })
            .catch(err => console.log(err))

    }

    return (
        !label
            ?
            <Loader />
            :
            <Container>
                {isLoaded && <BigCard {...label} />}
            </Container>
    )
}

export default LabelDetailsPage