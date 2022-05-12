import { Container, Col, Row, FloatingLabel, Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import './FanSignupForm.css'
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import authService from "./../../../../services/auth.service"


const FanSignupForm = () => {

    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        avatar: '',
        others: [],
        likedEvents: [],
        likedArtists: [],
        likedVenues: []
    })

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .fanRegister(signupData)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget

        console.log(value, name)
        setSignupData({ ...signupData, [name]: value })
    }

    const { username, email, password, phoneNumber, avatar, others, role, likedEvents, likedArtists, likedVenues } = signupData

    return (
        <Container>
            <h1>Fan sign up</h1>
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

                <Form.Group as={Row}>

                    <Col sm={{ span: 6 }}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="phoneNumber"></InputGroup.Text>
                            <FloatingLabel controlId="phoneNumber" label="Móvil">
                                <Form.Control type="text" placeholder="Móvil" name="phoneNumber" value={phoneNumber} onChange={handleInputChange} />
                            </FloatingLabel>
                        </InputGroup>
                    </Col>

                </Form.Group>

                <Button variant="dark" type="submit">Registrarme</Button>
            </Form>
        </Container>
    )
}

export default FanSignupForm