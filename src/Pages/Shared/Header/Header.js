import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut, setIsLoading } = useAuth()
    const history = useHistory()
    const handleSignOut = () => {
        logOut()
            .then(() => {
                history.push('/')
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Genius Car Mechanics</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                            {user.email ?
                                <Button onClick={handleSignOut} variant='light'>Logout</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }

                        </Nav>
                        {user.displayName &&
                            <Navbar.Text>
                                Signed in as: <a href="#login">{user.displayName}</a>
                            </Navbar.Text>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;