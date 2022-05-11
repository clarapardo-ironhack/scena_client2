import { useState } from "react"
import { Form, Button, FloatingLabel } from "react-bootstrap"
import authService from "./../../../../services/auth.service"
import { useNavigate } from 'react-router-dom'

import './ArtistSignupForm.css'
// import stylesList from "../../../../utils/stylesList"

const ArtistSignupForm = () => {

    // const stylesList = ['ROCK', 'POP', 'PRUEBITA']

    const [signupData, setSignupData] = useState({
        username: '',
        password: '',
        email: '',
        instagram: '',
        spotify: '',
        soundcloud: '',
        twitter: '',
    })

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .signup(signupData)
            .then(res => {
                navigate('/inicio-sesion')
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setSignupData({ ...signupData, [name]: value })
    }

    const { username, password, email, instagram, spotify, soundcloud, twitter, phoneNumber, avatar, others, role, styles, description, label } = signupData

    const stylesList = ['ROCK', 'POP', 'PRUEBITA']




    return (

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

            <FloatingLabel controlId="floating-style1" label="Estilo 1">
                <Form.Select aria-label="Floating label select example">
                    <option>Selecciona tu estilo</option>


                    {stylesList.map(style => <option value={style}>{style}</option>)}

                </Form.Select>
            </FloatingLabel>

            {/* Avatar y fotoss */}

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

            <Button variant="dark" type="submit">Registrarme</Button>
        </Form>

    )
}

export default ArtistSignupForm