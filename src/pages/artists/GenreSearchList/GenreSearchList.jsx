import { Row, Col, Button } from 'react-bootstrap'
import TinyCard from '../../../components/Card/TinyCard/TinyCard'
import Loader from '../../../components/Loader/Loader'
import filterMachine from '../../../utils/filterMachine'
import './GenreSearchList.css'

const GenreSearchList = ({ infoType, input, artistsList }) => {

    const filteredData = filterMachine(infoType, input)

    const filteredArtists = artistsList.filter((artist) => {
        let returnable
        if (input === '') {
            returnable = artist.username
        }
        filteredData.map(genre => {
            if (artist.styles) {
                artist.styles.map(artistStyle => {
                    if (artistStyle === genre) {
                        returnable = artist.username
                    }
                })
            }
        })

        return returnable
    })

    return (<>
        {filteredData?.length
            ?
            <>
                <Row>
                    {filteredData?.map(style => {
                        return (
                            <Col md={{ span: 3 }} key={style}>
                                <p>{style}</p>
                            </Col>
                        )
                    })}
                </Row>
                <Row>
                    {filteredArtists?.map(element => {
                        return (
                            <Col md={{ span: 4 }} key={element._id}>
                                <TinyCard {...element} />
                            </Col>
                        )
                    })}
                </Row>
            </>
            :
            <Loader />}
    </>)
}


export default GenreSearchList