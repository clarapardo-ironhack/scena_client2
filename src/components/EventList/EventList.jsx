import { Row, Col } from "react-bootstrap"
import TinyEventCard from "../EventCard/TinyEventCard/TinyEventCard"
import Loader from "../Loader/Loader.jsx"
import filterMachine from "../../utils/filterMachine"

const EventList = ({ infoType, input }) => {

    const filteredData = filterMachine(infoType, input)

    return (
        filteredData.length
            ?
            <Row>
                {
                    filteredData?.map(elem => {
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