import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth.context'
import './ScenaNav.css'
import messagesService from '../../services/messages.service'


const ScenaNav = () => {

    const { user, logOutUser, isLoggedIn } = useContext(AuthContext)


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
                                    <NavLink className="nav-link" to="/login">Iniciar sesión</NavLink>
                                    <NavLink className="nav-link" to="/register">Registro</NavLink>
                                </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div>
    )
}

export default ScenaNav