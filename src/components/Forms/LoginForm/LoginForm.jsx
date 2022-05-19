import { Container, Col, Row, FloatingLabel, Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import './LoginForm.css'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from "react"
import authService from '../../../services/auth.service'
import { AuthContext } from '../../../context/auth.context'


const LoginForm = ({ role, fireFinalActions }) => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const { storeToken, authenticateUser } = useContext(AuthContext)

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .login({ role, loginData })
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                fireFinalActions()
                navigate('/')
            })
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

                <button className="login-register-button">
                    <p>Acceder</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                    </svg>
                </button>
            </Form>
        </Container>
    )
}

export default LoginForm