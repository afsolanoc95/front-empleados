import React from 'react';
import { Navbar,  Container } from 'react-bootstrap';

const Menu = (props) => {
    const {Logout}=props
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" >
                <Container>

                    <Navbar.Brand href="./Main">empleados</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    )
}

export default Menu;   