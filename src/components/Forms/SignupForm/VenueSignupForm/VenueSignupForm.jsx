import { useEffect, useState } from "react"
import { Form, Button, FloatingLabel, Container, Col, Row, InputGroup } from "react-bootstrap"
import authService from "./../../../../services/auth.service"
import uploadService from "./../../../../services/upload.service"
import { useNavigate } from 'react-router-dom'
import './VenueSignupForm.css'
import Loader from '../../../Loader/Loader'
import venuesService from '../../../../services/venue.service'



const VenueSignupForm = ({ edit }) => {

    const [loadingAvatar, setLoadingAvatar] = useState(false)
    const [loadingImages, setLoadingImages] = useState(false)

    const [signupData, setSignupData] = useState({
        username: '',
        password: '',
        email: '',
        networks: {
            instagram: '',
            twitter: '',
        },
        phoneNumber: '',
        avatar: '',
        images: [],         //image1, image2, image3, image4
        address: {
            street: '',
            number: '',
            postalCode: '',
            city: ''
        },
        capacity: '',
        description: ''
    })

    useEffect(() => {
        editInfoCall()
    }, [])

    const editInfoCall = () => {
        if (edit) {
            venuesService
                .getOneVenue(edit)
                .then(({ data }) => setSignupData(data))
                .catch(err => console.log(err))
        }
    }

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        edit
            ?
            venuesService
                .editVenue(signupData)
                .then(() => navigate('/'))
                .catch(err => console.log(err))
            :
            authService
                .venueRegister(signupData)
                .then(() => navigate('/'))
                .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget

        if (name === 'instagram' || name === 'twitter') {
            setSignupData({
                ...signupData,
                networks: {
                    ...signupData.networks,
                    [name]: value
                }
            })
        } else if (name === 'street' || name === 'number' || name === 'postalCode' || name === 'city') {
            setSignupData({
                ...signupData,
                address: {
                    ...signupData.address,
                    [name]: value
                }
            })
        } else {
            setSignupData({ ...signupData, [name]: value })
        }
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
        networks: {
            instagram,
            twitter,
        },
        phoneNumber,
        avatar,
        images,
        address: {
            street,
            number,
            postalCode,
            city
        },
        capacity,
        description
    } = signupData

    return (
        <Container>
            <Form onSubmit={handleSubmit}>


                <Form.Group as={Row}>
                    <Col sm={{ span: 6 }}>
                        <FloatingLabel controlId="floating-username" label="Usuario" className="mb-3">
                            <Form.Control type="text" onChange={handleInputChange} name="username" value={username} placeholder="Username" />
                        </FloatingLabel>
                    </Col>

                    <Col sm={{ span: 6 }}>
                        <FloatingLabel controlId="floating-password" label="Contraseña" className="mb-3">
                            {edit
                                ?
                                <Form.Control type="password" placeholder="Contraseña" name="password" value={password} disabled onChange={handleInputChange} />
                                :
                                <Form.Control type="password" placeholder="Contraseña" name="password" value={password} onChange={handleInputChange} />
                            }
                        </FloatingLabel>
                    </Col>

                    <FloatingLabel controlId="email" label="Email" className="mb-3">
                        <Form.Control type="email" placeholder="Email" name="email" value={email} onChange={handleInputChange} />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group as={Row}>

                    <Col sm={{ span: 6 }}>
                        <FloatingLabel controlId="description" label="Cuéntanos algo sobre ti" className="mb-3">
                            <Form.Control as="textarea" style={{ height: '200px' }} placeholder="Descripción del evento" name="description" value={description} onChange={handleInputChange} />
                        </FloatingLabel>

                        <Form.Group className="mb-3" controlId="capacity">
                            <FloatingLabel controlId="floating-capacity" label="Máx. capacidad">
                                <Form.Control type="text" onChange={handleInputChange} name="capacity" value={capacity} placeholder="capacity" />
                            </FloatingLabel>
                        </Form.Group>


                        <h4>ADDRESS</h4>

                        <Form.Group className="mb-3" controlId="street">
                            <FloatingLabel controlId="floating-street" label="Calle">
                                <Form.Control type="text" onChange={handleInputChange} name="street" value={street} placeholder="Street" />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="number">
                            <FloatingLabel controlId="floating-number" label="Número">
                                <Form.Control type="text" onChange={handleInputChange} name="number" value={number} placeholder="number" />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="postalCode">
                            <FloatingLabel controlId="floating-postalCode" label="CP">
                                <Form.Control type="text" onChange={handleInputChange} name="postalCode" value={postalCode} placeholder="postalCode" />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="city">
                            <FloatingLabel controlId="floating-city" label="Ciudad">
                                <Form.Control type="text" onChange={handleInputChange} name="city" value={city} placeholder="city" />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>

                    <Col sm={{ span: 6 }}>

                        <Form.Group className="mb-3" controlId="phoneNumber" >
                            <FloatingLabel controlId="floating-phoneNumber" label="Teléfono">
                                <Form.Control type="text" onChange={handleInputChange} name="phoneNumber" value={phoneNumber} placeholder="Phone Number" />
                            </FloatingLabel>
                        </Form.Group>

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

                        {!loadingAvatar && <Form.Group className="mb-3" controlId="pages">
                            <Form.Label>Imágenes</Form.Label>
                            <Form.Control type="file" onChange={handleImagesUpload} multiple />
                        </Form.Group>}

                    </Col>

                </Form.Group>

                <input id="role" name="role" type="hidden" value="Venue"></input>

                {loadingAvatar || loadingImages
                    ?
                    <Button variant="dark" type="submit" disabled><Loader /></Button>
                    :
                    <>
                        {edit && <Button variant="dark" type="submit">Guardar cambios</Button>}
                        {!edit && <Button variant="dark" type="submit">Registrarme</Button>}
                    </>
                }
            </Form>
        </Container>
    )
}

export default VenueSignupForm