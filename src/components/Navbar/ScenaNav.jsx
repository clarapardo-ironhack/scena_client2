import { Navbar, Container, Nav, NavDropdown, Button, Modal } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth.context'
import './ScenaNav.css'
import messagesService from '../../services/messages.service'
import LoginPage from '../../pages/basics/LoginPage/LoginPage'
import SignupPage from './../../pages/basics/SignupPage/SignupPage'


const ScenaNav = () => {

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)

    const [receivedMessages, setReceivedMessages] = useState([])
    const [unansweredMessages, setUnansweredMessages] = useState([])

    const unaFuncion = () => {
        setUnansweredMessages(receivedMessages.map((element) => {
            if (element.answered === false) {
                return element
            }
        }))

    }


    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showRegisterModal, setShowRegisterModal] = useState(false)

    const fireFinalActionsLogin = () => {
        setShowLoginModal(false)
        showMessage('HOLA', 'mensaje enviado!')
    }

    const fireFinalActionsRegister = () => {
        setShowRegisterModal(false)
        showMessage('HOLA', 'mensaje enviado!')
    }

    useEffect(() => {
        if (user) {
            messageInfoCall()
        }
    }, [])

    useEffect(() => {
        if (user) {
            unaFuncion()
        }
    }, [])

    const messageInfoCall = () => {
        messagesService
            .getAllUserMessages(user._id)
            .then(({ data }) => setReceivedMessages(data))
    }

    return (
        <div>
            < Navbar bg="light" expand="lg" >
                <Container>
                    <NavLink to="/" className="nav-link">SCENA</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <NavDropdown title="Artist" id="basic-nav-dropdown">
                                <Link className="nav-link" to="/artists">Artists List</Link>
                            </NavDropdown>
                            <NavDropdown title="Venue" id="basic-nav-dropdown">
                                <Link className="nav-link" to="/venues">Venues List</Link>
                            </NavDropdown>
                            <NavDropdown title="Label" id="basic-nav-dropdown">
                                <Link className="nav-link" to="/labels">Labels List</Link>
                            </NavDropdown>
                            <NavDropdown title="Event" id="basic-nav-dropdown">
                                <Link className="nav-link" to="/events">Events List</Link>
                                <Link className="nav-link" to="/event/create">Create an event</Link>
                            </NavDropdown>


                            {isLoggedIn
                                ?
                                <>
                                    <NavLink to="########" className="nav-link justify-content-end">Hola {user.username} :)</NavLink>
                                    <div className="nav-link" onClick={logOutUser}>Cerrar sesión</div>
                                    <NavLink className="nav-link" to="/my-profile">Editar perfil</NavLink>
                                    <NavLink className="nav-link" to="/favorites">Mis favoritos</NavLink>
                                    <NavLink className="nav-link" to="/my-messages">Mis mensajes</NavLink>
                                </>
                                :
                                <>
                                    <Button className="nav-link" onClick={() => setShowLoginModal(true)}>Iniciar sesión</Button>
                                    <Button className="nav-link" onClick={() => setShowRegisterModal(true)}>Registro</Button>
                                </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >

            <Modal className="loginModal" show={showLoginModal} onHide={() => setShowLoginModal(false)}>
                <Modal.Header closeButton className="cositas"></Modal.Header>
                <LoginPage fireFinalActions={fireFinalActionsLogin}/>
            </Modal>

            <Modal className="registerModal" show={showRegisterModal} onHide={() => setShowRegisterModal(false)}>
                <Modal.Header closeButton></Modal.Header>
                <SignupPage fireFinalActions={fireFinalActionsRegister} />
            </Modal>
        </div>
    )
}

export default ScenaNav