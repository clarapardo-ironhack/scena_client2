import './CreateEventForm.css'
import { Container, Col, Row, FloatingLabel, Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import authService from "./../../../services/auth.service"
import uploadService from "./../../../services/upload.service"
import artistsService from './../../../services/artist.service'


const CreateEventForm = () => {

    const [allArtist, setAllArtist] = useState([])
    const [newEventData, setNewEventData] = useState({
        title: '',
        date: '', // ################################
        image: '',
        mainArtist: {},
        supportingArtists: [],
        aprovedArtist: false,
        aprovedVenue: false,
        description: '',
    })

    useEffect(() => {

        artistsService
            .getAllArtists()
            .then(({ data }) => {
                setAllArtist(data)
            })
            .catch(err => console.log(err))
    }, [])


    // console.log(newEventData)

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .labelRegister(newEventData)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget

        console.log(value, name)
        setNewEventData({ ...newEventData, [name]: value })
    }

    const handleImageUpload = (e) => {

        // setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                // setLoadingImage(false)
                setNewEventData({ ...newEventData, image: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const { title, date, image, mainArtist, supportingArtists, venue, aprovedArtist, aprovedVenue, creator, description } = newEventData

    const handleAvatarUpload = (e) => {

        // setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                // setLoadingImage(false)
                setNewEventData({ ...newEventData, avatar: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <h1>CREAR EVENTO</h1>
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
                        <FloatingLabel controlId="mainArtist" label="Main artist">
                            <Form.Select aria-label="mainArtist" onChange={handleInputChange} value={mainArtist} name="mainArtist">
                                <option>Selecciona el artista principal</option>
                                {allArtist.map(({ username }) => <option> {username}</option>)}
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel controlId="supportingArtists" label="Supporting artists">
                            <Form.Select aria-label="supportingArtists" onChange={handleInputChange} value={supportingArtists} name="supportingArtists">
                                <option>Selecciona el artista principal</option>
                                {allArtist.map(({ username }) => <option> {username}</option>)}
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel controlId="date" label="Fecha y hora" className="mb-3">
                            <Form.Control type="datetime-local" placeholder="Fecha y hora" name="date" value={date} onChange={handleInputChange} />
                        </FloatingLabel>

                    </Col>

                    <Col sm={{ span: 6 }}>
                        <Form.Group className="mb-3" controlId="avatar">
                            <Form.Label>Cartel</Form.Label>
                            <Form.Control type="file" onChange={handleImageUpload} />
                        </Form.Group>
                    </Col>
                </Form.Group>

                <Button variant="dark" type="submit">Crear</Button>

            </Form>
        </Container >
    )
}

export default CreateEventForm
