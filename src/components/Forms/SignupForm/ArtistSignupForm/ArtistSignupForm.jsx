import { useState } from "react"
import { Form, Button, FloatingLabel, Container } from "react-bootstrap"
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
        twitter: '',
        style1: '',
        style2: '',
        style3: '',
        avatar: '',
        images: ''
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

    const handleImagesUpload = (e) => {

        // setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files)

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                // setLoadingImage(false)
                setSignupData({ ...signupData, images: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const { username,
        password,
        email,
        phoneNumber,
        label,
        description,
        instagram,
        spotify,
        soundcloud,
        twitter,
        style1,
        style2,
        style3,
        avatar,
        images
    } = signupData

    return (
        <Container>

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="username">
                    <FloatingLabel controlId="floating-username" label="username">
                        <Form.Control type="text" onChange={handleInputChange} name="username" value={username} placeholder="Username" />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <FloatingLabel controlId="floating-password" label="password">
                        <Form.Control type="password" onChange={handleInputChange} name="password" value={password} placeholder="password" />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <FloatingLabel controlId="floating-email" label="email">
                        <Form.Control type="email" onChange={handleInputChange} name="email" value={email} placeholder="email" />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="phoneNumber">
                    <FloatingLabel controlId="floating-phoneNumber" label="phoneNumber">
                        <Form.Control type="text" onChange={handleInputChange} name="phoneNumber" value={phoneNumber} placeholder="Phone Number" />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="label">
                    <FloatingLabel controlId="floating-label" label="label">
                        <Form.Control type="text" onChange={handleInputChange} name="label" value={label} placeholder="Label" />
                    </FloatingLabel>
                </Form.Group>

                <h4>ABOUT</h4>

                <FloatingLabel controlId="floating-description" label="description">
                    <Form.Control as="textarea" style={{ height: '100px' }} onChange={handleInputChange} name="description" value={description} placeholder="Description" />
                </FloatingLabel>

                <FloatingLabel controlId="floating-style1" label="style1">
                    <Form.Select aria-label="style1" onChange={handleInputChange} value={style1} name="style1">
                        <option>Selecciona tu estilo</option>
                        {stylesList.map(style => <option key={`1 ${style}`} >{style}</option>)}
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel controlId="floating-style1" label="Estilo 2">
                    <Form.Select aria-label="style2" onChange={handleInputChange} value={style2} name="style2">
                        <option>Selecciona tu estilo</option>
                        {stylesList.map(style => <option key={`2 ${style}`} >{style}</option>)}
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel controlId="floating-style1" label="Estilo 3">
                    <Form.Select aria-label="style3" onChange={handleInputChange} value={style3} name="style3">
                        <option>Selecciona tu estilo</option>
                        {stylesList.map(style => <option key={`3 ${style}`}  >{style}</option>)}
                    </Form.Select>
                </FloatingLabel>

                {/* Avatar y fotoss */}

                <Form.Group className="mb-3" controlId="avatar">
                    <Form.Label>AVATAR</Form.Label>
                    <Form.Control type="file" onChange={handleAvatarUpload} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="images">
                    <Form.Label>Imágenes</Form.Label>
                    <Form.Control type="file" onChange={handleImagesUpload} />
                </Form.Group>

                <h4>SOCIALS</h4>

                <Form.Group className="mb-3" controlId="instagram">
                    <FloatingLabel controlId="floating-instagram" label="instagram">
                        <Form.Control type="text" onChange={handleInputChange} name="instagram" value={instagram} placeholder="Instagram" />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="spotify">
                    <FloatingLabel controlId="floating-spotify" label="spotify">
                        <Form.Control type="text" onChange={handleInputChange} name="spotify" value={spotify} placeholder="Spotify" />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="soundcloud">
                    <FloatingLabel controlId="floating-soundcloud" label="soundcloud">
                        <Form.Control type="text" onChange={handleInputChange} name="soundcloud" value={soundcloud} placeholder="Soundcloud" />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="twitter">
                    <FloatingLabel controlId="floating-twitter" label="twitter">
                        <Form.Control type="text" onChange={handleInputChange} name="twitter" value={twitter} placeholder="Twitter" />
                    </FloatingLabel>
                </Form.Group>

                <input id="role" name="role" type="hidden" value="Artist"></input>

                <Button variant="dark" type="submit">Registrarme</Button>
            </Form>
        </Container>
    )
}

export default ArtistSignupForm