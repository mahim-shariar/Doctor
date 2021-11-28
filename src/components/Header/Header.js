
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const Header = () => {
    let { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink  to="/home" className='fw-bolder text-success navbar-brand' >Doctor <span className='text-danger' >+</span></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='nav-link ' to="/home">Home</NavLink>
                        <NavLink className='nav-link' to="/ourDoctor">Our Doctor</NavLink>
                        <NavLink className='nav-link ' to="/topNews">Top News</NavLink>
                    </Nav>
                    <Nav className='ms-auto' >
                        {user.email ? <div className='d-flex'> <button onClick={logOut} className='btn btn-danger'> Log out </button> <p className='my-auto text-light '>{user.displayName}</p> </div> : <NavLink className='nav-link ' to='/login'> Login </NavLink>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Header;