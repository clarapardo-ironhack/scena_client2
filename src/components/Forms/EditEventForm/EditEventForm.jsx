import { Container, Col, Row, FloatingLabel, Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import uploadService from "./../../../services/upload.service"
import eventsService from '../../../services/events.service'
import Loader from './../../Loader/Loader'




const EditEventForm = () => {

    const { eventId } = useParams()

    const [loadingPoster, setLoadingPoster] = useState(false)
    const [venueInfo, setVenueInfo] = useState({})

    useEffect(() => {
        eventInfoCall()
    }, [])


    const eventInfoCall = () => {

        eventsService
            .getOneEvent(eventId)
            .then(({ data }) => {setVenueInfo(data)})
            .catch(err => console.log(err))
    }

    const navigate = useNavigate()

    const handleInputChange = e => {

        const { value, name } = e.currentTarget
        setVenueInfo({...venueInfo, [name]: value})
    }

    const handleImageUpload = (e) => {

        setLoadingPoster(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingPoster(false)
                setVenueInfo({ ...venueInfo, image: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {
        e.preventDefault()

        eventsService
            .editEvent(venueInfo)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

    const { title, date, image, description } = venueInfo

    console.log(date)

    return (
        <Container>
            <h1>EDITAR EVENTO</h1>
            <hr />

            <Form onSubmit={handleSubmit}>

                <FloatingLabel controlId="title" label="Nombre del evento" className="mb-3">
                    <Form.Control type="text" placeholder="Nombre del evento" name="title" value={title} onChange={handleInputChange} />
                </FloatingLabel>

                <FloatingLabel controlId="description" label="Descripción del evento" className="mb-3">
                    <Form.Control as="textarea" style={{ height: '150px' }} placeholder="Descripción del evento" name="description" value={description} onChange={handleInputChange} />
                </FloatingLabel>

                <Form.Group as={Row}>


                    <Col sm={{ span: 6 }}>
                        <Form.Group className="mb-3" controlId="image">
                            <Form.Label>Cartel</Form.Label>
                            <Form.Control type="file" onChange={handleImageUpload} />
                        </Form.Group>

                        <FloatingLabel controlId="date" label="Fecha y hora" className="mb-3">
                            <Form.Control type="datetime-local" placeholder="Fecha y hora" name="date" value={date} onChange={handleInputChange} />
                        </FloatingLabel>
                    </Col>
                </Form.Group>

                {loadingPoster
                    ?
                    <Loader />
                    :
                    <Button variant="dark" type="submit">Guardar cambios</Button>}

            </Form>
        </Container >
    )
}

export default EditEventForm
