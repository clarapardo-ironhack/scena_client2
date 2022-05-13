import { Row, Col } from "react-bootstrap"
import TinyCard from "../Card/TinyCard/TinyCard"
import Loader from "../Loader/Loader.jsx"

const ArtistList = ({ infoType }) => {

    return (
        infoType?.length
            ?
            <Row>
                {
                    infoType?.map(elem => {
                        return (
                            <Col md={{ span: 4 }} key={elem._id}>
                                <TinyCard {...elem} />
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