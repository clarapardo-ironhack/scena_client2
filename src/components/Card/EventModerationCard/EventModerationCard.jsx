import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Button } from "react-bootstrap"
import eventsService from "../../../services/events.service"
const { getFullDate, getFullTime } = require("./../../../utils/dateFormatter")


const EventModerationCard = ({ event }) => {

    // const fullDate = getFullDate(event.date)
    // const fullTime = getFullTime(event.date)

    const [eventData, setEventData] = useState(event)
    console.log('paso por aqui otra vez')

    const approveEvent = () => {

        setEventData({
            ...eventData,
            isAproved: {
                ...eventData.isAproved,
                mainArtistCheck: true
            }
        })
    }

    

    console.log(eventData)

    eventsService
        .editEvent(eventData)
        .then(() => console.log('holi'))
        .catch(err => console.log(err))

    
    const denyEvent = () => {

    }


    return (
        <Container>
            <Col sm={{ span: 9 }}>

                <h5>{event.title}</h5>
                <h6>Creado por: {event.creator}</h6>
                <hr />
                <Row>
                    <h6>Fecha: {event.date}</h6>
                    <h6>Sala: {event.venue}</h6>
                </Row>

            </Col>
            <Col sm={{ span: 3 }}>
                <Button variant="dark" onClick={() => approveEvent()} >Aprobar</Button>
                <Button variant="dark" onClick={denyEvent} >Rechazar</Button>
            </Col>



        </Container>
    )

}

export default EventModerationCard