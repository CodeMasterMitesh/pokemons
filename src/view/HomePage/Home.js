import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { BsPersonCircle, BsBellFill, BsFilePersonFill, BsGearFill, BsXLg } from "react-icons/bs";
import { useAuth } from '../../contexts/AuthContext';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';
import { getProfile, updatePlayer } from '../../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Header';
import Footer from '../../Footer';
import Chat from '../Pages/Chat';
import { Modal, Button } from 'react-bootstrap';
import { getCharacters, getPokemons } from '../../store/pokemon';
import { Row, Col } from 'react-bootstrap';
const Home = () => {
    const [show, setShow] = useState(false);
    const { logout } = useAuth();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate()
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false)
    const userData = useSelector(state => state.auth.user_data);
    const pokemons = useSelector(state => state.pokemon.pokemons);
    const characters = useSelector(state => state.pokemon.characters);



    const [data, setData] = useState({});
    const handleCloseModal = () => setModal(false);
    
    const handleLogout = () => {
        logout();
        localStorage.clear();
        navigate('/login')
    }
    const getProfileData = async () => {
        try {
            let user = await dispatch(getProfile()).unwrap();
            if (!userData.username || !userData.wereld || !userData.pokemon || !userData.character) {
                setData({ ...data, username: user?.data?.username, wereld: user?.data?.wereld, pokemon: user?.data?.pokemon ,character :user?.data?.character })
                setModal(true)
                dispatch(getCharacters())
                dispatch(getPokemons())
            }
        } catch (error) {
        }
    }

    const hanldedata = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handlesubmit=()=>{
        dispatch(updatePlayer(data))
    }
    useEffect(() => {
        getProfileData()
    }, []);

    return (
        <>

            <Modal show={modal} onHide={handleCloseModal} size='xl' contentClassName='pokemon-modal'>
                <Modal.Header closeButton>
                    <Modal.Title style={{color:'white'}}>User Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <div className="register-item-inner4 m-0 modal-form-username mt-3">
                                <input type="text"
                                    className="form-control"
                                    value={data.username}
                                    id="name"
                                    name="username"
                                    onChange={(e) => { hanldedata(e) }}
                                    placeholder={t('Usernmae')} />
                                <img src="images/register-02.png" alt="" />
                            </div>
                        </Col>
                        <Col md={6}>

                            <div className="ar_myProfile_select_area mt-3">
                                <select className="form-select" aria-label="Default select example"
                                    name="wereld"
                                    value={data.wereld}
                                    onChange={(e) => { hanldedata(e) }}
                                >
                                    <option selected>Region</option>
                                    <option value="Kanto">Kanto</option>
                                    <option value="Johto">Johto</option>
                                    <option value="Hoenn">Hoenn</option>
                                    <option value="Sinnoh">Sinnoh</option>
                                    <option value="Unova">Unova</option>
                                    <option value="Kalos">Kalos</option>
                                    <option value="Alola">Alola</option>
                                </select>
                            </div>
                        </Col>
                        <Col md={12} className='p-5'>
                            <h2 style={{color:'white'}}>Choose your character</h2>
                            <div className='characters'>
                                <Row>
                                    {
                                        characters.map((item, index) => {
                                            return <Col md={3} sm={6} lg={2} className={`cursor-pointer ${data.character == item.naam ? 'character-active' : ''}`} onClick={() => { setData({ ...data, character: item.naam }) }}>
                                                <img src={`/images/characters/${item.naam}/${item.images}.png`} alt="" />
                                                <h3 className='font-weight-bold text-center'>{item.naam}</h3>
                                            </Col>
                                        })
                                    }
                                </Row>
                            </div>
                        </Col>
                        <Col md={12} className='p-5'>
                            <h2 style={{color:'white'}}>Choose your pokemon</h2>
                            <div className='characters'>
                                <Row>
                                    {
                                        characters.map((item, index) => {
                                            return <Col md={3} sm={6} lg={2} className={`cursor-pointer ${data.pokemon == item.naam ? 'character-active' : ''}`} onClick={() => { setData({ ...data, pokemon: item.naam }) }}>
                                                <img src={`/images/characters/${item.naam}/${item.images}.png`} alt="" />
                                                <h3 className='font-weight-bold text-center'>{item.naam}</h3>
                                            </Col>
                                        })
                                    }
                                </Row>
                            </div>
                        </Col>
                    </Row>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handlesubmit} size='lg'>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className='home-header'>
                <Header />
            </div>

            <div dir='rtl'>
                <div className="main-wrapper">
                    <Offcanvas show={show} onHide={handleClose} placement="end" className="bg-dark text-white custom-offcanvas-dark">
                        <Offcanvas.Header closeButton closeVariant="white">
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className="side-menu">
                                <ul className='p-0'>
                                    <li onClick={() => { navigate('/profile') }}><a className='d-flex justify-content-start align-items-center w-100 p-2 text-decoration-none' href="#"> <BsPersonCircle />{t('User')}</a></li>
                                    <li onClick={() => { navigate('/character') }}><a className='d-flex justify-content-start align-items-center w-100 p-2 text-decoration-none' href="#"> <BsFilePersonFill />{t('My Character')}</a></li>
                                    <li onClick={() => { navigate('/notification') }}><a className='d-flex justify-content-start align-items-center w-100 p-2 text-decoration-none' href="#"> <BsBellFill />{t('Notification')} (0)</a></li>
                                    <li onClick={() => { navigate('/settings') }}><a className='d-flex justify-content-start align-items-center w-100 p-2 text-decoration-none' href="#"><BsGearFill />   {t('Settings')}</a></li>
                                    <li onClick={() => { handleLogout() }}><a className='d-flex justify-content-start align-items-center w-100 p-2 text-decoration-none' href="#" ><BsXLg />{t('Logout')} </a></li>
                                </ul>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>

                    <section className="character-area">
                        <div className="container">
                            <div className="character-item">
                                <div className="character-item-inner">
                                    <div className="mock-item-inner">
                                        <ul>
                                            <li><img src="images/mock-03.png" alt="" onClick={() => navigate('/packages?buy=silvers')} /><span>{userData?.silver}</span><img src="images/mock-05.png" alt="" /></li>
                                            <li><img src="images/mock-03.png" alt="" onClick={() => navigate('/packages?buy=golds')} /><span>{userData?.gold}</span><img src="images/mock-04.png" alt="" /></li>
                                        </ul>
                                    </div>
                                    <div className="character-item-inner2">
                                        <ul>
                                            <li data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" onClick={handleShow}>
                                                <img src="images/character-01.png" alt="" />
                                            </li>
                                            <li><img src="images/character-02.png" alt="" /><span>{t('Champion Title')}</span></li>
                                            <li onClick={() => { navigate('/battle') }}><img src="images/character-03.png" alt="" /><span>{t('Match Wins')}</span></li>
                                            <li><img src="images/character-04.png" onClick={() => navigate('/inbox')} alt="" /><span>{t('VIP')}</span></li>
                                        </ul>
                                    </div>
                                    <div className="character-item-inner3">
                                        <p><span>125</span><small>L</small><span>760</span><small>V</small></p>
                                        <a href="#">{t('Champion Title')}</a>
                                    </div>
                                </div>
                                <div className="character-item-inner4">
                                    <div className="character-item-inner5">
                                        <div className="character-item-inner6">
                                            <div className="character-item-inner7">
                                                <div>
                                                    <h3>{userData?.wereld} <img src="images/character-07.png" alt="" /></h3>
                                                </div>
                                                <div>
                                                    <p><span>(Vip)</span>{userData?.username}</p>
                                                </div>
                                            </div>
                                            <div className="character-item-inner8">
                                                <span><small>Lv 1</small></span>
                                                <p>76%</p>
                                            </div>
                                        </div>
                                        <div className="character-item-inner9">
                                            <img src="images/character-06.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="character-item-inner10">
                                        <div className="character-item-inner11 cursor-pointer" >
                                            <div>
                                                <h2>{t('Match Wins')} <span>[VIP]</span></h2>
                                            </div>
                                            <div>
                                                <img src="images/character-12.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="character-item-inner13">
                                        <div>
                                            <h2>{t('Match Wins')} <span>97 Wins</span></h2>
                                        </div>
                                        <div>
                                            <img src="images/character-14.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="character-item2">
                                <h2>{t('Champion Title')}</h2>
                                <form action="#">
                                    <div className="character-item2-inner">
                                        <div className="character-item2-inner2">
                                            <div className="character-item2-inner3">
                                                <img src="images/character-16.png" alt="" />
                                                <div className="character-item2-inner4">
                                                    <img src="images/character-17.png" alt="" />
                                                </div>
                                                <div className="character-item2-inner5">
                                                    <p>{t('Mewtwo')} - Lv <span>2</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="character-item2-inner2">
                                            <div className="character-item2-inner3">
                                                <img src="images/character-18.png" alt="" />
                                                <div className="character-item2-inner4">
                                                    <img src="images/character-17.png" alt="" />
                                                </div>
                                                <div className="character-item2-inner5">
                                                    <p>{t('Pikachu')} - Lv <span>2</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                    <Chat />
                </div>
            </div >
            <div className='home-footer'>
                <Footer />
            </div>
        </>

    );
};

export default Home
