import { useState } from "react"
import { Form, Button, FloatingLabel, Container, Row, Col, InputGroup } from "react-bootstrap"
import authService from "./../../../../services/auth.service"
import uploadService from "./../../../../services/upload.service"
import { useNavigate } from 'react-router-dom'
import './ArtistSignupForm.css'
import stylesList from "../../../../utils/stylesList"
import Loader from '../../../Loader/Loader'

const ArtistSignupForm = () => {

    const [loadingAvatar, setLoadingAvatar] = useState(false)
    const [loadingImages, setLoadingImages] = useState(false)

    const [signupData, setSignupData] = useState({
        username: '',
        password: '',
        email: '',
        phoneNumber: '',
        description: '',
        instagram: '',
        spotify: '',
        soundcloud: '',
        bandcamp: '',
        twitter: '',
        styles: [],
        figures: {
            avatar: '',
            images: []          //image1, image2, image3, image4
        }
    })

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .artistRegister(signupData)
            .then(() => { navigate('/') })
            .catch(err => console.log(err))
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
        styles,
        figures: { avatar, images },
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
                            <Form.Select aria-label="styles.style1" onChange={handleInputChange} value={styles} name="styles">
                                <option>Selecciona tu estilo</option>
                                {stylesList.map(style => <option key={`1 ${style}`} >{style}</option>)}
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel controlId="floating-style1" label="Estilo 2" className="mb-3">
                            <Form.Select aria-label="styles.style2" onChange={handleInputChange} value={styles} name="styles">
                                <option>Selecciona tu estilo</option>
                                {stylesList.map(style => <option key={`2 ${style}`} >{style}</option>)}
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel controlId="floating-style1" label="Estilo 3" className="mb-3">
                            <Form.Select aria-label="styles.styles3" onChange={handleInputChange} value={styles} name="styles">
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

                {/* Avatar y fotoss */}

                <Form.Group className="mb-3" controlId="avatar">
                    <Form.Label>AVATAR</Form.Label>
                    <Form.Control type="file" onChange={handleAvatarUpload} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="pages">
                    <Form.Label>Imágenes</Form.Label>
                    <Form.Control type="file" onChange={handleImagesUpload} multiple />
                </Form.Group>

                <input id="role" name="role" type="hidden" value="Artist"></input>

                <Button variant="dark" type="submit"> {loadingAvatar || loadingImages ? <Loader /> : "Registrarme"}</Button>
            </Form>
        </Container>
    )
}

export default ArtistSignupForm