import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Navigate, useNavigate } from "react-router-dom"
import eventsService from "../../../services/events.service"
import venuesService from "../../../services/venue.service"
const { getFullDate, getFullTime } = require("./../../../utils/dateFormatter")


const EventModerationCard = ({ event, setState, state, role }) => {

    const fullDate = getFullDate(event.date)
    const fullTime = getFullTime(event.date)

    const [eventData, setEventData] = useState(event)

    // venuesService
    //     .getOneVenue(event.venue)
    //     .then(response => {

    //     })
    //     .catch(err => console.log(err))
    //Test
    const approveEvent = () => {
        if (role === 'Artist') {

            setEventData({
                ...eventData,
                isAproved: {
                    ...eventData.isAproved,
                    mainArtistCheck: true
                }
            })
            setState(true)

        } else if (role === 'Venue') {

            setEventData({
                ...eventData,
                isAproved: {
                    ...eventData.isAproved,
                    venueCheck: true
                }
            })
            setState(true)
        }
    }

    function navigatetohome() {
        const navigate = useNavigate()
        navigate("/")
    }

    useEffect((() => {
        if (role === 'Artist') {
            eventsService.editEvent(eventData)
        } else if (role === 'Venue') {
            eventsService.editEvent(eventData)
        }
    }), [state])


    const denyEvent = () => {
        eventsService.deleteEvent(eventData._id)
    }


    return (
        <Container>

            <Col sm={{ span: 9 }}>
                <h5>{event.title}</h5>
                <h6>Creado por: {event.creator.username}</h6>
                <hr />
                <Row>
                    <h6>Fecha: {fullDate} ~ {fullTime} h</h6>
                    <h6>Sala: {event.venue.username}</h6>
                </Row>
            </Col>

            <Col sm={{ span: 3 }}>
                <Button variant="dark" onClick={approveEvent} >Aprobar</Button>
                <Button variant="dark" onClick={denyEvent} >Rechazar</Button>
            </Col>

        </Container>
    )
}

export default EventModerationCard