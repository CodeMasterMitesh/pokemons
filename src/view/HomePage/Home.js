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
import { Modal, Button, Tooltip } from 'react-bootstrap';
import { getCharacters, addPlayerPokemon, getPokemons, getPlayerPokemons } from '../../store/pokemon';
import { Row, Col } from 'react-bootstrap';
import Loader from '../Pages/Spinner';
import { toast } from 'react-toastify';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import PokemonProfile from '../Component/PokemonProfile';

const Home = () => {
    const [show, setShow] = useState(false);
    const { logout } = useAuth();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate()
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false)
    const [region, setRegion] = useState('')
    const [regionModal, setRegionModal] = useState(false)
    const userData = useSelector(state => state.auth.user_data);
    const pokemons = useSelector(state => state.pokemon.pokemons);
    const player_pokemons = useSelector(state => state.pokemon.player_pokemons);
    const characters = useSelector(state => state.pokemon.characters);
    const profile_loading = useSelector(state => state.auth.profile_loading);
    const [current_step, setStep] = useState(1);

    const [data, setData] = useState({});
    const handleCloseModal = () => setModal(false);

    const [hoveredId, setHoveredId] = useState(null);


    const handleMouseEnter = (id) => {
        setHoveredId(id);
        setTimeout(() => {
            const element = document.getElementById(`pokemon-popup-${id}`);
            if (element) {
              const { right, left, width } = element.getBoundingClientRect();
              const viewportWidth = window.innerWidth;
        
              console.log('Viewport Width:', viewportWidth);
              console.log('Element Bounds:', { right, left, width });
        
              // Check if the popup overflows from the right side
              if (right > viewportWidth) {
                element.style.position = 'absolute';
                element.style.right = '10px';
                element.style.left = 'auto';
                element.style.transform= 'translate(0%,0%) !important';
                console.log('Adjusted Right:', element.style.right);
              } 
              // Check if the popup overflows from the left side
              else if (left < 0) {
                element.style.position = 'absolute';
                element.style.left = '10px';
                element.style.transform= 'translate(0%,0%) !important';

                element.style.right = 'auto';
                console.log('Adjusted Left:', element.style.left);
              } 
              // Handle near-left-edge cases
              else if (left < 200) {
                element.style.position = 'absolute';
                element.style.left = `0px`;
                element.style.right = 'auto';
                element.style.transform= 'translate(0%,0%) !important';
                console.log('Adjusted Near Left:', element.style.left);
              }
            } else {
              console.warn(`Element with ID pokemon-popup-${id} not found.`);
            }
          }, 0); // Allow for DOM updates to settle
    };

    const handleMouseLeave = () => {
        setHoveredId(null);
    };
    const handleLogout = () => {
        logout();
        localStorage.clear();
        navigate('/login')
    }
    const getProfileData = async () => {
        try {
            let user = JSON.parse(localStorage.getItem('userData'))
            if (!(user && user.playerId)) {
                setData({ ...data, username: '', region: '', pokemon: '', character: '' })
                setModal(true)
                dispatch(getCharacters())
                setStep(1)
            } else {
                let user = await dispatch(getProfile()).unwrap();
                setRegion(user?.data?.wereld)
                if (user.data?.eigekregen != '1') {
                    setData({ ...data, username: user?.data?.username, region: user?.data?.wereld, pokemon: user?.data?.pokemon, character: user?.data?.character })
                    setModal(true)
                    dispatch(getPokemons())
                    setStep(2)
                } else {
                    dispatch(getPlayerPokemons())
                }
                // dispatch(getPlayerPokemons()).unwrap();

            }
        } catch (error) {
        }
    }

    const hanldedata = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handlesubmit = async () => {
        if (current_step == 1) {

            if (!data.username) {
                toast.warning("Please enter username")
            }
            if (!data.region) {
                toast.warning("Please select region")
            }
            if (!data.character) {
                toast.warning("Please select character")
            }
            if (data.username && data.region && data.character) {
                try {
                    const response = await dispatch(updatePlayer(data)).unwrap();
                    let users = JSON.parse(localStorage.getItem('userData'));
                    users.playerId = response.playerId
                    users.playerName = response.playerName
                    localStorage.setItem('userData', JSON.stringify(users))
                    dispatch(getPokemons())
                    setStep(2)
                } catch (error) {
                    console.error('Update failed:', error); // Log the error if needed
                    // Optionally, show a toast message or alert for the user
                }
            }
        } else {
            if (!data.pokemon) {
                toast.warning("Please select pokemon")
            } else {
                try {
                    await dispatch(addPlayerPokemon(data.pokemon)).unwrap()
                    dispatch(getPlayerPokemons())
                    setModal(false)
                } catch (error) {

                }
            }
        }
    }
    const handlesubmitRegion = () => {
        dispatch(updatePlayer(region))
    }
    useEffect(() => {
        getProfileData()
    }, []);
    return (
        <>
            {/* {profile_loading && <Loader/>} */}
            {/* <Loader/> */}
            <Modal show={regionModal} onHide={() => { setRegionModal(false) }} size='xl' contentClassName='pokemon-modal'>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: 'white' }}>Changes Region</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>

                            <div className="ar_myProfile_select_area mt-3">
                                <select className="form-select" aria-label="Default select example"
                                    name="wereld"
                                    value={region}
                                    onChange={(e) => { setRegion(e.target.value) }}
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
                    </Row>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handlesubmitRegion} size='lg'>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal show={modal} onHide={handleCloseModal} size='xl' contentClassName='pokemon-modal' backdrop="static"
                keyboard={false}>
                <Modal.Header>
                    <Modal.Title style={{ color: 'white' }}>User Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        {current_step == 1 && <Col md={6}>
                            <div className="register-item-inner4 m-0 mt-3">
                                <input type="text"
                                    className="form-control"
                                    value={data.username}
                                    id="name"
                                    name="username"
                                    onChange={(e) => { hanldedata(e) }}
                                    placeholder={t('Usernmae')} />
                                <img src="images/register-02.png" alt="" />
                            </div>
                        </Col>}
                        {current_step == 1 && <Col md={6}>

                            <div className="ar_myProfile_select_area mt-3 region">
                                <select className="form-select" aria-label="Default select example"
                                    name="region"
                                    value={data.region}
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
                        </Col>}
                        {current_step == 1 && <Col md={12} className='p-5'>
                            <h2 >Choose your character</h2>
                            <div className='characters'>
                                <Row>
                                    {
                                        characters.map((item, index) => {
                                            return <Col md={3} sm={6} lg={2} className={`cursor-pointer d-flex flex-column justify-content-center ${data.character == item.naam ? 'character-active' : ''}`} onClick={() => { setData({ ...data, character: item.naam }) }}>
                                                <img src={`/images/characters/${item.naam}/${item.images}.png`} alt="" />
                                                <h3 className='font-weight-bold text-center'>{item.naam}</h3>
                                            </Col>
                                        })
                                    }
                                </Row>
                            </div>
                        </Col>}
                        {current_step == 2 && <Col md={12} className='p-5 '>
                            <h2 >Choose your pokemon</h2>
                            <div className='characters pokemon'>
                                <Row>
                                    {
                                        pokemons.map((item, index) => {
                                            return <Col md={3} sm={6} lg={2} className={`cursor-pointer d-flex flex-column justify-content-center ${data.pokemon == item.wild_id ? 'character-active' : ''}`} onClick={() => { setData({ ...data, pokemon: item.wild_id }) }}>
                                                <img src={`/images/pokemon/${item.wild_id}.gif`} alt="" />
                                                <h3 className='font-weight-bold text-center'>{item.naam}</h3>
                                            </Col>
                                        })
                                    }
                                </Row>
                            </div>
                        </Col>}
                    </Row>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handlesubmit} size='lg'>
                        {current_step == 1 ? 'Next' : 'Submit'}
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

                    <section className="character-area  container">
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
                                        <p><span>{userData?.verloren}</span><small>L</small><span>{userData?.gewonnen}</span><small>V</small></p>
                                        <a href="#">{t('Champion Title')}</a>
                                    </div>
                                </div>
                                <div className="character-item-inner4">
                                    <div className="character-item-inner5">
                                        <div className="character-item-inner6">
                                            <div className="character-item-inner7">
                                                <div onClick={() => { setRegionModal(true) }} className='cursor-pointer'>
                                                    <h3>{userData?.wereld} <img src="images/character-07.png" alt="" /></h3>
                                                </div>
                                                <div>
                                                    <p><span>(Vip)</span>{userData?.username}</p>
                                                </div>
                                            </div>
                                            <div className="character-item-inner8">
                                                <span><small>Lv {userData?.rank}</small></span>
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
                                    <Row className="character-item2-inner" style={{ maxHeight: '500px' }}>
                                        {
                                            player_pokemons && player_pokemons.map((item) => {

                                                return <Col md={2} sm={4} className="character-item2-inner2 gap-2 cursor-pointer" >
                                                    <div className="character-item2-inner3 pokemon-gifs"
                                                        onMouseEnter={() => handleMouseEnter(item.wild_id)}
                                                        onMouseLeave={handleMouseLeave}>
                                                        <img src={`images/pokemon/${item.wild_id}.gif`} alt="" />
                                                        <div className="character-item2-inner4">
                                                            <img src="images/character-17.png" alt="" />
                                                        </div>
                                                        <div className="character-item2-inner5 b--35" >
                                                            <p>{item.naam} - Lv <span>{item.level}</span></p>
                                                        </div>
                                                        <div className='position-absolute mt-2'
                                                        id={`pokemon-popup-${item.wild_id}`}
                                                            style={{ zIndex: 100}}
                                                        >
                                                            {hoveredId === item.wild_id &&
                                                                <PokemonProfile data={item} />
                                                            }
                                                        </div>
                                                    </div>
                                                </Col>
                                            })
                                        }
                                        {/* <div className="character-item2-inner2">
                                            <div className="character-item2-inner3">
                                                <img src={`images/pokemon/250.gif`} alt="" />
                                                <div className="character-item2-inner4">
                                                </div>
                                                <div className="character-item2-inner5 b--35">
                                                    <p>{t('Pikachu')} - Lv <span>2</span></p>
                                                </div>
                                            </div>
                                        </div> */}

                                    </Row>
                                </form>
                            </div>
                        </div>
                        <div className='mt-5 mb-5' style={{ zIndex: 99 }}>

                            <Chat />
                        </div>

                    </section>
                </div>
            </div >
            <div className='home-footer'>
                <Footer />
            </div>
        </>

    );
};

export default Home
