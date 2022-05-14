import { Container, Col, Row, FloatingLabel, Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import './LoginForm.css'
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import authService from '../../../services/auth.service'


const LoginForm = ({ role }) => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .login({role, loginData})
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.currentTarget

        setLoginData({ ...loginData, [name]: value })
    }

    const { email, password } = loginData

    return (
        <Container>
            <h1>{role}</h1>
            <hr />

            <Form onSubmit={handleSubmit}>

                <Form.Group as={Row}>
                    <Col sm={{ span: 6 }}>
                        <FloatingLabel controlId="Email" label="Email" className="mb-3">
                            <Form.Control type="email" placeholder="Email" name="email"
                                value={email} onChange={handleInputChange} />
                        </FloatingLabel>
                    </Col>

                    <Col sm={{ span: 6 }}>
                        <FloatingLabel controlId="password" label="Contraseña" className="mb-3">
                            <Form.Control type="password" placeholder="Contraseña"
                                name="password" value={password} onChange={handleInputChange} />
                        </FloatingLabel>
                    </Col>

                </Form.Group>

                <Button variant="dark" type="submit">Iniciar sesión</Button>
            </Form>
        </Container>
    )
}

export default LoginForm