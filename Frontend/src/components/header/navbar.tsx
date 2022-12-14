import { LinkContainer } from "react-router-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MainMenu() {
    return (
        <Navbar fixed="top" bg="dark" expand="lg" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Topic</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/">
                            <Nav.Link>Link</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Options" id="basic-nav-dropdown">
                            <LinkContainer to="/login">
                                <NavDropdown.Item>
                                    Login
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/Register">
                                <NavDropdown.Item href="/register">
                                    Register
                                </NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default MainMenu
