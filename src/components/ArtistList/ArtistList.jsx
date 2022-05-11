import { Row, Col } from "react-bootstrap"
import TinyArtistCard from "../ArtistCard/TinyArtistCard/TinyArtistCard"
import Loader from "../Loader/Loader.jsx"

const ArtistList = ({ artist }) => {

    return (
        artist?.length
            ?
            <Row>
                {
                    artist?.map(elem => {
                        return (
                            <Col md={{ span: 4 }} key={elem._id}>
                                <TinyArtistCard {...elem} />
                            </Col>
                        )
                    })
                }
            </Row>
            :
            <Loader />
    )
}

export default ArtistList