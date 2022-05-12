import { useState } from "react"
import { Form, Button, FloatingLabel, Container, Row, Col, InputGroup } from "react-bootstrap"
import authService from "./../../../../services/auth.service"
import uploadService from "./../../../../services/upload.service"
import { useNavigate } from 'react-router-dom'

import './ArtistSignupForm.css'
import stylesList from "../../../../utils/stylesList"

const ArtistSignupForm = () => {

    const [signupData, setSignupData] = useState({
        username: '',
        password: '',
        email: '',
        instagram: '',
        spotify: '',
        soundcloud: '',
        bandcamp: '',
        twitter: '',
        style1: '',
        style2: '',
        style3: '',
        avatar: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
    }
    )

    console.log(signupData)

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .artistRegister(signupData)
            .then(res => {
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setSignupData({ ...signupData, [name]: value })
    }

    const handleAvatarUpload = (e) => {

        // setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                // setLoadingImage(false)
                setSignupData({ ...signupData, avatar: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const handleImage1Upload = (e) => {

        // setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                // setLoadingImage(false)
                setSignupData({ ...signupData, image1: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const handleImage2Upload = (e) => {

        // setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                // setLoadingImage(false)
                setSignupData({ ...signupData, image2: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const handleImage3Upload = (e) => {

        // setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                // setLoadingImage(false)
                setSignupData({ ...signupData, image3: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const handleImage4Upload = (e) => {

        // setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                // setLoadingImage(false)
                setSignupData({ ...signupData, image4: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const { username,
        password,
        email,
        phoneNumber,
        description,
        instagram,
        spotify,
        soundcloud,
        bandcamp,
        twitter,
        style1,
        style2,
        style3,
        avatar,
        image1,
        image2,
        image3,
        image4
    } = signupData

    return (
        <Container>

            <h1>Artist Sign up</h1>
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

                <FloatingLabel controlId="floating-email" label="email" className="mb-3">
                    <Form.Control type="email" onChange={handleInputChange} name="email" value={email} placeholder="email" />
                </FloatingLabel>

                <Form.Group as={Row}>

                    <Col sm={{ span: 6 }}>
                        <FloatingLabel controlId="description" label="Cuéntanos algo sobre ti" className="mb-3">
                            <Form.Control as="textarea" style={{ height: '200px' }} placeholder="Descripción del evento" name="description" value={description} onChange={handleInputChange} />
                        </FloatingLabel>


                        <h4>STYLES</h4>

                        <FloatingLabel controlId="floating-style1" label="Estilo 1" className="mb-3">
                            <Form.Select aria-label="style1" onChange={handleInputChange} value={style1} name="style1">
                                <option>Selecciona tu estilo</option>
                                {stylesList.map(style => <option key={`1 ${style}`} >{style}</option>)}
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel controlId="floating-style1" label="Estilo 2" className="mb-3">
                            <Form.Select aria-label="style2" onChange={handleInputChange} value={style2} name="style2">
                                <option>Selecciona tu estilo</option>
                                {stylesList.map(style => <option key={`2 ${style}`} >{style}</option>)}
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel controlId="floating-style1" label="Estilo 3" className="mb-3">
                            <Form.Select aria-label="style3" onChange={handleInputChange} value={style3} name="style3">
                                <option>Selecciona tu estilo</option>
                                {stylesList.map(style => <option key={`3 ${style}`}  >{style}</option>)}
                            </Form.Select>
                        </FloatingLabel>
                    </Col>

                    <Col sm={{ span: 6 }}>

                        <Form.Group className="mb-3" controlId="phoneNumber" >
                            <FloatingLabel controlId="floating-phoneNumber" label="phoneNumber">
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
                            <InputGroup.Text id="spotify"></InputGroup.Text>
                            <FloatingLabel controlId="spotify" label="Spotify">
                                <Form.Control type="text" placeholder="Spotify" style={{ width: '204px' }} name="spotify" value={spotify} onChange={handleInputChange} />
                            </FloatingLabel>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="soundcloud"></InputGroup.Text>
                            <FloatingLabel controlId="soundcloud" label="Soundcloud">
                                <Form.Control type="text" placeholder="Soundcloud" style={{ width: '204px' }} name="soundcloud" value={soundcloud} onChange={handleInputChange} />
                            </FloatingLabel>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="twitter"></InputGroup.Text>
                            <FloatingLabel controlId="twitter" label="Twitter">
                                <Form.Control type="text" placeholder="Twitter" style={{ width: '204px' }} name="twitter" value={twitter} onChange={handleInputChange} />
                            </FloatingLabel>
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text id="bandcamp"></InputGroup.Text>
                            <FloatingLabel controlId="bandcamp" label="bandcamp">
                                <Form.Control type="text" placeholder="bandcamp" style={{ width: '204px' }} name="bandcamp" value={bandcamp} onChange={handleInputChange} />
                            </FloatingLabel>
                        </InputGroup>
                    </Col>

                </Form.Group>



                {/* <Form.Group className="mb-3" controlId="label">
                    <FloatingLabel controlId="floating-label" label="label">
                        <Form.Control type="text" onChange={handleInputChange} name="label" value={label} placeholder="Label" />
                    </FloatingLabel>
                </Form.Group> */}

                {/* Avatar y fotoss */}

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


                <input id="role" name="role" type="hidden" value="Artist"></input>

                <Button variant="dark" type="submit">Registrarme</Button>
            </Form>
        </Container>
    )
}

export default ArtistSignupForm