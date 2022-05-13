import { Row, Col } from "react-bootstrap"
import TinyCard from "../Card/TinyCard/TinyCard"
import Loader from "../Loader/Loader.jsx"

const ArtistList = ({ infoType, input }) => {

    const filteredData = infoType.filter((el) => {
        if (input === '') {
            return el;
        }
        else {
            return el.username.toLowerCase().includes(input)
        }
    })

    return (
        infoType?.length
            ?
            <Row>
                {
                    filteredData?.map(elem => {
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