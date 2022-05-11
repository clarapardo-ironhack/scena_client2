import { useState } from "react"
import { Form, Button, FloatingLabel, Container } from "react-bootstrap"
import authService from "./../../../../services/auth.service"
import { useNavigate } from 'react-router-dom'

import './VenueSignupForm.css'

const VenueSignupForm = () => {

    const [signupData, setSignupData] = useState({
        username: '',
        password: '',
        email: '',
        instagram: '',
        spotify: '',
        soundcloud: '',
        twitter: '',
        street: '',
        number: '',
        floor: '',
        letter: '',
        postalCode: '',
        city: '',
        capacity: ''
    }
    )

    console.log(signupData)

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .venueRegister(signupData)
            .then(res => {
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setSignupData({ ...signupData, [name]: value })
    }

    const { username,
        password,
        email,
        phoneNumber,
        description,
        instagram,
        spotify,
        soundcloud,
        twitter,
        street,
        number,
        floor,
        letter,
        postalCode,
        city,
        capacity
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
                <Form.Group className="mb-3" controlId="floor">
                    <FloatingLabel controlId="floating-floor" label="floor">
                        <Form.Control type="text" onChange={handleInputChange} name="floor" value={floor} placeholder="floor" />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="letter">
                    <FloatingLabel controlId="floating-letter" label="letter">
                        <Form.Control type="text" onChange={handleInputChange} name="letter" value={letter} placeholder="letter" />
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
                <Form.Group className="mb-3" controlId="capacity">
                    <FloatingLabel controlId="floating-capacity" label="capacity">
                        <Form.Control type="text" onChange={handleInputChange} name="capacity" value={capacity} placeholder="capacity" />
                    </FloatingLabel>
                </Form.Group>

                <h4>ABOUT</h4>

                <FloatingLabel controlId="floating-description" label="description">
                    <Form.Control as="textarea" style={{ height: '100px' }} onChange={handleInputChange} name="description" value={description} placeholder="Description" />
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

                <input id="role" name="role" type="hidden" value="Artist"></input>

                <Button variant="dark" type="submit">Registrarme</Button>
            </Form>
        </Container>
    )
}

export default VenueSignupForm