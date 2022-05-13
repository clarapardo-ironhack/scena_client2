import { useState } from "react"
import { Form, Button, FloatingLabel, Container, Col, Row, InputGroup } from "react-bootstrap"
import authService from "./../../../../services/auth.service"
import uploadService from "./../../../../services/upload.service"
import { useNavigate } from 'react-router-dom'

import './VenueSignupForm.css'

const VenueSignupForm = () => {

    const [loadingImage, setLoadingImage] = useState(false)

    const [signupData, setSignupData] = useState({
        username: '',
        password: '',
        email: '',
        instagram: '',
        twitter: '',
        phoneNumber: '',
        role: '',
        avatar: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        street: '',
        number: '',
        postalCode: '',
        city: '',
        capactiy: '',
        description: ''
    }
    )

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .venueRegister(signupData)
            .then(() => { navigate('/') })
            .catch(err => res.json(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setSignupData({ ...signupData, [name]: value })
    }

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

    const handleImage1Upload = (e) => {

        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setSignupData({ ...signupData, image1: data.cloudinary_url })
            })
            .catch(err => res.json(err))
    }

    const handleImage2Upload = (e) => {

        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setSignupData({ ...signupData, image2: data.cloudinary_url })
            })
            .catch(err => res.json(err))
    }

    const handleImage3Upload = (e) => {

        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setSignupData({ ...signupData, image3: data.cloudinary_url })
            })
            .catch(err => res.json(err))
    }

    const handleImage4Upload = (e) => {

        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setSignupData({ ...signupData, image4: data.cloudinary_url })
            })
            .catch(err => res.json(err))
    }

    const {
        username,
        password,
        email,
        instagram,
        twitter,
        phoneNumber,
        role,
        avatar,
        image1,
        image2,
        image3,
        image4,
        street,
        number,
        postalCode,
        capacity,
        city,
        description
    } = signupData

    return (
        <Container>

            <h1>Venue Sign up</h1>
            <hr />

            <Form onSubmit={handleSubmit}>


                <Form.Group as={Row}>
                    <Col sm={{ span: 6 }}>
                        <FloatingLabel controlId="floating-username" label="username" className="mb-3">
                            <Form.Control type="text" onChange={handleInputChange} name="username" value={username} placeholder="Username" />
                        </FloatingLabel>
                    </Col>

                    <Col sm={{ span: 6 }}>
                        <FloatingLabel controlId="floating-password" label="password" className="mb-3">
                            <Form.Control type="password" onChange={handleInputChange} name="password" value={password} placeholder="password" />
                        </FloatingLabel>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>

                    <Col sm={{ span: 6 }}>
                        <FloatingLabel controlId="description" label="Cuéntanos algo sobre ti" className="mb-3">
                            <Form.Control as="textarea" style={{ height: '200px' }} placeholder="Descripción del evento" name="description" value={description} onChange={handleInputChange} />
                        </FloatingLabel>

                        <Form.Group className="mb-3" controlId="capacity">
                            <FloatingLabel controlId="floating-capacity" label="capacity">
                                <Form.Control type="text" onChange={handleInputChange} name="capacity" value={capacity} placeholder="capacity" />
                            </FloatingLabel>
                        </Form.Group>


                        <h4>ADDRESS</h4>


                        <Form.Group className="mb-3" controlId="phoneNumber">
                            <FloatingLabel controlId="floating-phoneNumber" label="phoneNumber">
                                <Form.Control type="text" onChange={handleInputChange} name="phoneNumber" value={phoneNumber} placeholder="Phone Number" />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="street">
                            <FloatingLabel controlId="floating-street" label="street">
                                <Form.Control type="text" onChange={handleInputChange} name="street" value={street} placeholder="Street" />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="number">
                            <FloatingLabel controlId="floating-number" label="number">
                                <Form.Control type="text" onChange={handleInputChange} name="number" value={number} placeholder="number" />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="postalCode">
                            <FloatingLabel controlId="floating-postalCode" label="postalCode">
                                <Form.Control type="text" onChange={handleInputChange} name="postalCode" value={postalCode} placeholder="postalCode" />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="city">
                            <FloatingLabel controlId="floating-city" label="city">
                                <Form.Control type="text" onChange={handleInputChange} name="city" value={city} placeholder="city" />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>

                    <Col sm={{ span: 6 }}>

                        <Form.Group className="mb-3" controlId="phoneNumber" >
                            <FloatingLabel controlId="floating-phoneNumber" label="phoneNumber">
                                <Form.Control type="text" onChange={handleInputChange} name="phoneNumber" value={phoneNumber} placeholder="Phone Number" />
                            </FloatingLabel>
                        </Form.Group>

                        <FloatingLabel controlId="floating-email" label="email" className="mb-3">
                            <Form.Control type="email" onChange={handleInputChange} name="email" value={email} placeholder="email" />
                        </FloatingLabel>

                        <h4>SOCIALS</h4>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="instagram"></InputGroup.Text>
                            <FloatingLabel controlId="instagram" label="Instagram">
                                <Form.Control type="text" placeholder="Instagram" name="instagram" value={instagram} onChange={handleInputChange} />
                            </FloatingLabel>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="twitter"></InputGroup.Text>
                            <FloatingLabel controlId="twitter" label="Twitter">
                                <Form.Control type="text" placeholder="Twitter" style={{ width: '204px' }} name="twitter" value={twitter} onChange={handleInputChange} />
                            </FloatingLabel>
                        </InputGroup>

                        <Form.Group className="mb-3" controlId="avatar">
                            <Form.Label>AVATAR</Form.Label>
                            <Form.Control type="file" onChange={handleAvatarUpload} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="image1">
                            <Form.Label>Imagen 1</Form.Label>
                            <Form.Control type="file" onChange={handleImage1Upload} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="image2">
                            <Form.Label>Imagen 2</Form.Label>
                            <Form.Control type="file" onChange={handleImage2Upload} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="image3">
                            <Form.Label>Imagen 3</Form.Label>
                            <Form.Control type="file" onChange={handleImage3Upload} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="image4">
                            <Form.Label>Imagen 4</Form.Label>
                            <Form.Control type="file" onChange={handleImage4Upload} />
                        </Form.Group>

                    </Col>

                </Form.Group>

                <input id="role" name="role" type="hidden" value="Venue"></input>

                <Button variant="dark" type="submit">{loadingImage ? <Loader /> : "Registrarme"}</Button>
            </Form>
        </Container>
    )
}

export default VenueSignupForm