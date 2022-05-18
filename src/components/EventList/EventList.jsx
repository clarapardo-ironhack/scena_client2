import { Row, Col } from "react-bootstrap"
import TinyEventCard from "../EventCard/TinyEventCard/TinyEventCard"
import Loader from "../Loader/Loader.jsx"
import filterMachine from "../../utils/filterMachine"

const EventList = ({ infoType, input }) => {

    let approvedEvents = infoType.filter(element => element.isAproved.mainArtistCheck === true && element.isAproved.venueCheck === true)

    const filteredData = filterMachine(approvedEvents, input)

    
    return (
        filteredData.length
            ?
            approvedEvents.length
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
            :
            <Row>
                {
                    approvedEvents?.map(elem => {
                        return (
                            <Col md={{ span: 4 }} key={elem._id}>
                                <TinyEventCard {...elem} />
                            </Col>
                        )
                    })
                }
            </Row>
    )
}

export default EventList