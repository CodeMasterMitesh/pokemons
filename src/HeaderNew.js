// src/Header.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'react-bootstrap';


const Header = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    return (
        <header className='header-main'>
            <ul className='p-3 d-flex justify-content-between'>
                <li onClick={() => { navigate('/gold-market') }}>
                    <img src="/images/register-02.png" alt="" height={15} />
                    <span>
                        Gold Market
                    </span>
                    </li>
                <li onClick={() => { navigate('/city') }}>
                    <img src="/images/register-02.png" alt="" height={15} />
                    <span>
                        City
                    </span>
                </li>
                <li onClick={() => { navigate('/classification') }}>
                    <img src="/images/register-02.png" alt="" height={15} />
                    <span>
                        Classification
                    </span>
                </li>
                <li onClick={() => { navigate('/pokemon-box') }}>
                    <img src="/images/register-02.png" alt="" height={15} />
                    <span>
                        Pokemon Box
                    </span>
                </li>
                <li onClick={() => { navigate('/backpack') }}>
                    <img src="/images/register-02.png" alt="" height={15} />
                    <span>
                        Backpack
                    </span>
                </li>
                <li onClick={() => { navigate('/map') }}>
                    <img src="/images/register-02.png" alt="" height={15} />
                    <span>
                        Map
                    </span>
                </li>
                <li onClick={() => { navigate('/npcs') }}>
                    <img src="/images/register-02.png" alt="" height={15} />
                    <span>
                        NPCs
                    </span>
                </li>
                <li onClick={() => { navigate('/npcs') }}>
                </li>
            </ul>
            {/* <Navbar expand="lg" className="text-light bg-body-header" variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-flex justify-content-evenly w-100">
                            <NavDropdown title={t('Social')} id="basic-nav-dropdown">
                                <NavDropdown.Item href="/social/find-coach">{t('Find Coaches')}</NavDropdown.Item>
                                <NavDropdown.Item href="/social/challenge-trainer">
                                {t('Challenge Trainer')}
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/social/friends">{t('My Friends')}</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={t('Extras')} id="basic-nav-dropdown">
                                <NavDropdown.Item href="/extras/badges">{t('Badges')}</NavDropdown.Item>
                                <NavDropdown.Item href="/extras/fishery">
                                {t('Fishery')}
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/extras/pokedex">{t('Pokedex')}</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={t('Assistance')} id="basic-nav-dropdown">
                                <NavDropdown.Item href="/assistance/calculator">{t('Calculator')}</NavDropdown.Item>
                                <NavDropdown.Item href="/assistance/pokemon-guide">
                                {t('Pockemon Guide')}
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/assistance/pokemon-judge">{t('Pokemon Judge')}</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={t('Others')} id="basic-nav-dropdown">
                                <NavDropdown.Item href="/others/buy-house">{t('Buy House')}</NavDropdown.Item>
                                <NavDropdown.Item href="/others/pokemon-specialist">
                                {t('Pokemon Specialist')}
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/others/general-statistics">{t('General Statistics')}</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                            <NavDropdown title="Pages" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={()=>{navigate('/create')}}>Create</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>{navigate('/pokemon-box')}}>Pokemon Box</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>{navigate('/gold-market')}}>Gold Market</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>{navigate('/classification')}}>Classification</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>{navigate('/city')}}>City</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>{navigate('/backpack')}}>Backpack</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>{navigate('/map')}}>Map</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>{navigate('/npcs')}}>NPCs</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>{navigate('/fortune')}}>Fortune</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>{navigate('/hospital')}}>Hospital</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>{navigate('/modal')}}>Modal</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>{navigate('/pokebag')}}>Pokebag</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>{navigate('/pokedex')}}>Pokedex</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>{navigate('/pvp')}}>Pvp</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>{navigate('/raceInvite')}}>RaceInvite</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>{navigate('/select')}}>Select</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>{navigate('/steal')}}>Steal</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>{navigate('/town')}}>Town</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>{navigate('/works')}}>Works</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </header>
    );
};

export default Header;