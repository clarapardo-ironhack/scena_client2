import { useState } from "react"
import { Form, Button, FloatingLabel, Container, Col, Row, InputGroup } from "react-bootstrap"
import authService from "./../../../../services/auth.service"
import uploadService from "./../../../../services/upload.service"
import { useNavigate } from 'react-router-dom'
import './VenueSignupForm.css'
import Loader from '../../../Loader/Loader'


const VenueSignupForm = () => {

    const [loadingAvatar, setLoadingAvatar] = useState(false)
    const [loadingImages, setLoadingImages] = useState(false)

    const [signupData, setSignupData] = useState({
        username: '',
        password: '',
        email: '',
        instagram: '',
        twitter: '',
        phoneNumber: '',
        role: '',
        figures: {
            avatar: '',
            images: []          //image1, image2, image3, image4
        },
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

        setLoadingAvatar(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingAvatar(false)
                setSignupData({ ...signupData, avatar: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const handleImagesUpload = (e) => {

        setLoadingImages(true)

        const uploadData = new FormData()
        for (let i = 0; i < e.target.files.length; i++) {
            uploadData.append('imageData', e.target.files[i])
        }


        uploadService
            .uploadImages(uploadData)
            .then(({ data }) => {
                setLoadingImages(false)
                setSignupData({ ...signupData, images: data.cloudinary_urls })
            })
            .catch(err => console.log(err))
    }

    const {
        username,
        password,
        email,
        instagram,
        twitter,
        phoneNumber,
        role,
        figures: { avatar, images },
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

                        <Form.Group className="mb-3" controlId="pages">
                            <Form.Label>Imágenes</Form.Label>
                            <Form.Control type="file" onChange={handleImagesUpload} multiple />
                        </Form.Group>

                    </Col>

                </Form.Group>

                <input id="role" name="role" type="hidden" value="Venue"></input>

                {loadingAvatar || loadingImages
                    ?
                    <Button variant="dark" type="submit" disabled><Loader /></Button>
                    :
                    <Button variant="dark" type="submit">Registrarme</Button>
                }
            </Form>
        </Container>
    )
}

export default VenueSignupForm