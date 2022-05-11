import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import './ScenaNav.css'

const ScenaNav = () => {
    return (
        <div>
            < Navbar bg="light" expand="lg" >
                <Container>
                    <Navbar.Brand href="/">SCENA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                            <Nav.Link href="#">Log out</Nav.Link>
                            <Nav.Link href="/my-profile">My profile</Nav.Link>
                            <Nav.Link href="/favorites">My favorites</Nav.Link>
                            <NavDropdown title="Artist" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/artists">Artists List</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Venue" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/venues">Venues List</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Label" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/labels">Labels List</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Event" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/events">Events List</NavDropdown.Item>
                                <NavDropdown.Item href="/event/create">Create an event</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div>
    )
}

export default ScenaNav