import { Row, Col } from "react-bootstrap"
import TinyEventCard from "../EventCard/TinyEventCard/TinyEventCard"
import Loader from "../Loader/Loader.jsx"

const EventList = ({ infoType }) => {


    return (
        infoType?.length
            ?
            <Row>
                {
                    infoType?.map(elem => {
                        return (
                            <Col md={{ span: 4 }} key={elem._id}>
                                <TinyEventCard {...elem} />
                            </Col>
                        )
                    })
                }
            </Row>
            :
            <Loader />
    )
}

export default EventList