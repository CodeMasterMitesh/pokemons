// src/Header.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Col, Modal, Row } from 'react-bootstrap';
import menu, { home_menu } from 'view/JsonData/menu';

const Header = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const [popUp, setPopUp] = useState(false)
    const handleRoute =(item)=>{
        setPopUp(false)
        navigate(`${item.route}`)
    }
    return (
        <header className='header-main'>
            <ul className='p-3 d-flex justify-content-between'>
                <li className='responsive-menu-li' onClick={() => { navigate('/gold-market') }}>
                    <img src="/images/register-02.png" alt="" height={15} />
                    <span>
                        Gold Market
                    </span>
                </li>
                <li className='responsive-menu-li' onClick={() => { navigate('/city') }}>
                    <img src="/images/register-02.png" alt="" height={15} />
                    <span>
                        City
                    </span>
                </li>
                <li className='responsive-menu-li' onClick={() => { navigate('/classification') }}>
                    <img src="/images/register-02.png" alt="" height={15} />
                    <span>
                        Classification
                    </span>
                </li>
                <li className='responsive-menu-li' onClick={() => { navigate('/pokemon-box') }}>
                    <img src="/images/register-02.png" alt="" height={15} />
                    <span>
                        Pokemon Box
                    </span>
                </li>
                <li className='responsive-menu-li' onClick={() => { navigate('/backpack') }}>
                    <img src="/images/register-02.png" alt="" height={15} />
                    <span>
                        Backpack
                    </span>
                </li>
                <li className='responsive-menu-li' onClick={() => { navigate('/map') }}>
                    <img src="/images/register-02.png" alt="" height={15} />
                    <span>
                        Map
                    </span>
                </li>
                <li className='responsive-menu-li' onClick={() => { navigate('/npcs') }}>
                    <img src="/images/register-02.png" alt="" height={15} />
                    <span>
                        NPCs
                    </span>
                </li>
                <li onClick={() => { setPopUp(true) }} style={{ width: "30px" }}>
                    <img src="/images/hamburger.png" alt="" />
                </li>
            </ul>

            <Modal show={popUp} onHide={() => { setPopUp(false) }} size='lg' contentClassName='pokemon-modal'>
                <Modal.Body style={{ minHeight: '400px' }} className='d-flex align-items-center  menu-container'>
                    <Row className='w-100 justify-content-center'>
                        <Col xs={12} sm={6} md={4} className='flex-column align-items-center responsive-menu'>
                            <div className='text-white d-flex align-items-center' style={{ width: '170px' }}>
                                <img src="/images/register-02.png" alt="" height={15} />
                                <span className='border-bottom-theme' style={{ marginLeft: "15px" }}><h3>Home</h3></span>
                            </div>
                            <div className='mt-2' style={{ width: '170px' }}>
                                {home_menu.map((item, index) => {
                                    return <h4 className='text-white cursor-pointer my-4' onClick={() => { handleRoute(item) }}>
                                        <img src="/images/register-02.png" alt="" height={15} />

                                        <span style={{ marginLeft: "15px" }}>{item.name}</span>
                                    </h4>
                                })}
                            </div>
                        </Col>
                        {menu.map((item, index) => {
                            return <Col key={index} xs={12} sm={6} md={4} className='d-flex flex-column align-items-center'>
                                <div className='text-white d-flex align-items-center' style={{ width: '170px' }}>
                                    <img src="/images/register-02.png" alt="" height={15} />
                                    <span className='border-bottom-theme' style={{ marginLeft: "15px" }}><h3>{item.title}</h3></span>
                                </div>
                                <div className='mt-2' style={{ width: '170px' }}>
                                    {item.child.map((item) => {
                                        return <h4 className='text-white cursor-pointer my-4' onClick={() => { navigate(`${item.route}`) }}>

                                            <img src="/images/register-02.png" alt="" height={15} />

                                            <span style={{ marginLeft: "15px" }}>{item.name}</span>
                                        </h4>
                                    })}
                                </div>
                            </Col>
                        })}
                    </Row>

                </Modal.Body>
            </Modal>
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
                                <NavDropdown.Item onClick={()=>{navigate('/gold-market')}}>Gold Market</NavDropdown.Item>
                                <NavDropdown.Item onClick={()=>{navigate('/pokemon-box')}}>Pokemon Box</NavDropdown.Item>
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