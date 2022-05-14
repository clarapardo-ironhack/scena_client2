import { Container, Col, Row, FloatingLabel, Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import './FanSignupForm.css'
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import authService from "./../../../../services/auth.service"
import uploadService from "./../../../../services/upload.service"

const FanSignupForm = () => {

    const [loadingImage, setLoadingImage] = useState(false)
    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        avatar: '',
        likedEvents: [],
        likedArtists: [],
        likedVenues: []
    })

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .fanRegister(signupData)
            .then(() => navigate('/'))
            .catch(err => res.json(err))
    }

    const handleInputChange = e => {

        const { value, name } = e.currentTarget
        setSignupData({ ...signupData, [name]: value })
    }

    const {
        username,
        email,
        password,
        avatar,
        likedEvents,
        likedArtists,
        likedVenues
    } = signupData

    const handleAvatarUpload = (e) => {

        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setSignupData({ ...signupData, avatar: data.cloudinary_url })
            })
            .catch(err => res.json(err))
    }

    return (
        <Container>
            <h1>Registro de fan</h1>
            <hr />

            <Form onSubmit={handleSubmit}>

                <Form.Group as={Row}>
                    <Col sm={{ span: 6 }}>
                        <FloatingLabel controlId="username" label="Usuario" className="mb-3">
                            <Form.Control type="text" placeholder="Usuario" name="username" value={username} onChange={handleInputChange} />
                        </FloatingLabel>
                    </Col>

                    <Col sm={{ span: 6 }}>
                        <FloatingLabel controlId="password" label="Contraseña" className="mb-3">
                            <Form.Control type="password" placeholder="Contraseña" name="password" value={password} onChange={handleInputChange} />
                        </FloatingLabel>
                    </Col>

                </Form.Group>

                <FloatingLabel controlId="email" label="Email" className="mb-3">
                    <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={handleInputChange} />
                </FloatingLabel>

                <Form.Group className="mb-3" controlId="avatar">
                    <Form.Label>Avatar</Form.Label>
                    <Form.Control type="file" onChange={handleAvatarUpload} />
                </Form.Group>

                <Button variant="dark" type="submit">Registrarme</Button>
            </Form>
        </Container>
    )
}

export default FanSignupForm