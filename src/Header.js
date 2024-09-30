// src/Header.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useTranslation } from 'react-i18next';


const Header = () => {
    const { t } = useTranslation();

    return (
        <header className='header-main'>
            <Navbar expand="lg" className="text-light" variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-flex justify-content-evenly w-100">
                            <NavDropdown title={t('Social')} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">{t('Find Coaches')}</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                {t('Challenge Trainer')}
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">{t('My Friends')}</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={t('Extras')} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">{t('Badges')}</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                {t('Fishery')}
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">{t('Pokedex')}</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={t('Assistance')} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">{t('Calculator')}</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                {t('Pockemon Guide')}
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">{t('Pokemon Judge')}</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={t('Others')} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">{t('Buy House')}</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                {t('Pokemon Specialist')}
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">{t('General Statistics')}</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;