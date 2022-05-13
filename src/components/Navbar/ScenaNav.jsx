import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import './ScenaNav.css'


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
                            {user && <NavLink to="########" className="nav-link justify-content-end">Hola, {user.username}</NavLink>}
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                            <NavLink className="nav-link" to="#">Log out</NavLink>
                            <NavLink className="nav-link" to="/my-profile">My profile</NavLink>
                            <NavLink className="nav-link" to="/favorites">My favorites</NavLink>
                            <NavDropdown title="Artist" id="basic-nav-dropdown">
                                <NavLink className="nav-link" to="/artists">Artists List</NavLink>
                            </NavDropdown>
                            <NavDropdown title="Venue" id="basic-nav-dropdown">
                                <NavLink className="nav-link" to="/venues">Venues List</NavLink>
                            </NavDropdown>
                            <NavDropdown title="Label" id="basic-nav-dropdown">
                                <NavLink className="nav-link" to="/labels">Labels List</NavLink>
                            </NavDropdown>
                            <NavDropdown title="Event" id="basic-nav-dropdown">
                                <NavLink className="nav-link" to="/events">Events List</NavLink>
                                <NavLink className="nav-link" to="/event/create">Create an event</NavLink>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div>
    )
}

export default ScenaNav