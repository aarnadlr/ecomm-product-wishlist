import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

const AppNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log('togled!');
  };

  return (
    <div>
      <Navbar color={'dark'} dark expand={'sm'} className={'mb-5'}>
        <Container>
          <NavbarBrand href={'/'}>Product Wish List</NavbarBrand>

          <NavbarToggler onClick={toggle}></NavbarToggler>

          <Collapse isOpen={isOpen} navbar>
            <Nav className={'ml-auto'} navbar>
              <NavItem>
                <NavLink href={'https://github.com/aarnadlr/'}>Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavBar;
