import { Navbar, Container, Nav, NavDropdown, Button, Modal } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth.context'
import './ScenaNav.css'
import messagesService from '../../services/messages.service'
import LoginPage from '../../pages/basics/LoginPage/LoginPage'
import SignupPage from './../../pages/basics/SignupPage/SignupPage'
import CreateEventForm from '../Forms/CreateEventForm/CreateEventForm'
import ProfileEditPage from '../../pages/basics/ProfileEditPage/ProfileEditPage'


const ScenaNav = () => {

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)

    const [receivedMessages, setReceivedMessages] = useState([])
    const [unansweredMessages, setUnansweredMessages] = useState([])
    const personBadge = <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-person-badge"
        viewBox="0 0 16 16"
    >
        <path d="M6.5 2a.5.5 0 000 1h3a.5.5 0 000-1h-3zM11 8a3 3 0 11-6 0 3 3 0 016 0z"></path>
        <path d="M4.5 0A2.5 2.5 0 002 2.5V14a2 2 0 002 2h8a2 2 0 002-2V2.5A2.5 2.5 0 0011.5 0h-7zM3 2.5A1.5 1.5 0 014.5 1h7A1.5 1.5 0 0113 2.5v10.795a4.2 4.2 0 00-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 00-.776.492V2.5z"></path>
    </svg>

    const unaFuncion = () => {
        setUnansweredMessages(receivedMessages.map((element) => {
            if (element.answered === false) {
                return element
            }
        }))

    }


    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showRegisterModal, setShowRegisterModal] = useState(false)
    const [showCreateEventModal, setShowCreateEventModal] = useState(false)
    const [showEditProfileModal, setShowEditProfileModal] = useState(false)


    const fireFinalActionsLogin = () => {
        setShowLoginModal(false)
        showMessage('HOLA', 'mensaje enviado!')
    }

    const fireFinalActionsRegister = () => {
        setShowRegisterModal(false)
        showMessage('HOLA', 'mensaje enviado!')
    }

    const fireFinalActionsCreateEvent = () => {
        setShowCreateEventModal(false)
        showMessage('HOLA', 'mensaje enviado!')
    }

    const fireFinalActionsEditProfile = () => {
        setShowEditProfileModal(false)
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
        <>
            {isLoggedIn
                ?
                <Navbar collapseOnSelect className='scenaNav' expand="lg" bg="dark" variant="dark">
                    <NavLink to="/favorites" className="nav-link logo-navbar">
                        <img src="./../../../img/logosSinFondo.png" alt="scena mini logo" />
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">
                            <NavLink className="nav-link" to="/artists">artistas</NavLink>
                            <NavLink className="nav-link" to="/venues">locales</NavLink>
                            <NavLink className="nav-link" to="/labels">sellos discográficos</NavLink>
                            {user?.role === 'Artist' || user?.role === 'Venue' || user?.role === 'Label'
                                ?
                                <NavDropdown title="eventos" id="collasible-nav-dropdown">
                                    <Link className="nav-link" to="/events">lista de eventos</Link>
                                    <Button onClick={() => setShowCreateEventModal(true)} variant='link' className="nav-link" to="/event/create">crear evento</Button>
                                </NavDropdown>
                                :
                                <NavLink className="nav-link" to="/events">eventos</NavLink >
                            }
                        </Nav>

                        {user
                            ?
                            <>
                                <NavDropdown title={<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-person-badge"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M6.5 2a.5.5 0 000 1h3a.5.5 0 000-1h-3zM11 8a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path d="M4.5 0A2.5 2.5 0 002 2.5V14a2 2 0 002 2h8a2 2 0 002-2V2.5A2.5 2.5 0 0011.5 0h-7zM3 2.5A1.5 1.5 0 014.5 1h7A1.5 1.5 0 0113 2.5v10.795a4.2 4.2 0 00-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 00-.776.492V2.5z"></path>
                                </svg>} id="collasible-nav-dropdown">
                                    <NavLink className="nav-link dropdown-scena" to="/favorites">Mi perfil</NavLink>
                                    <Button className="nav-link dropdown-scena" variant='link' onClick={() => setShowEditProfileModal(true)}>Editar perfil</Button>
                                    <div className="nav-link dropdown-scena" onClick={logOutUser}>Cerrar sesión</div>
                                </NavDropdown>

                                <NavLink className="nav-link" to="/my-messages">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="aquamarine" className="bi bi-envelope-fill" viewBox="0 0 16 16" >
                                        <path d="M.05 3.555A2 2 0 012 2h12a2 2 0 011.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 002 14h12a2 2 0 001.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"></path>
                                    </svg>
                                </NavLink>

                            </>
                            :
                            null
                        }

                    </Navbar.Collapse>
                </Navbar>
                :
                null
            }

            {/* <Modal className="loginModal" show={showLoginModal} onHide={() => setShowLoginModal(false)}>
                <LoginPage fireFinalActions={fireFinalActionsLogin} />
            </Modal>

            <Modal className="registerModal" show={showRegisterModal} onHide={() => setShowRegisterModal(false)}>
                <SignupPage className='prueba' fireFinalActions={fireFinalActionsRegister} />
            </Modal> */}

            <Modal className="creaveEventModal" show={showCreateEventModal} onHide={() => setShowCreateEventModal(false)}>
                <CreateEventForm fireFinalActions={() => fireFinalActionsCreateEvent()} />
            </Modal>

            <Modal className="creaveEventModal" show={showEditProfileModal} onHide={() => setShowEditProfileModal(false)}>
                <ProfileEditPage fireFinalActions={() => fireFinalActionsEditProfile()} />
            </Modal>

        </>

    )
}

export default ScenaNav