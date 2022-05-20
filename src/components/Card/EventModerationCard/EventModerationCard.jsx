import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Navigate, useNavigate } from "react-router-dom"
import eventsService from "../../../services/events.service"
import venuesService from "../../../services/venue.service"
const { getFullDate, getFullTime } = require("./../../../utils/dateFormatter")
import './EventModerationCard.css'


const EventModerationCard = ({ event, setState, state, role }) => {

    const fullDate = getFullDate(event.date)
    const fullTime = getFullTime(event.date)

    const [eventData, setEventData] = useState(event)

        
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
        <div className="eventModerationCard">

            <Col sm={{ span: 9 }}>
                <h3>{event.title}</h3>
                <h5>Creado por: <b>{event.creator.username}</b></h5>
                <hr />
                <Row>
                    <h5>Fecha: {fullDate} ~ {fullTime} h</h5>
                    <h5>Sala: {event.venue.username}</h5>
                </Row>
            </Col>

            <Row className="btnRow" >
               
                    <div className="approveButton" variant="dark" onClick={approveEvent} >Aprobar</div>
                
                    <div className="denyButton" variant="dark" onClick={denyEvent} >Rechazar</div>
               
            </Row>

        </div>
    )
}

export default EventModerationCard