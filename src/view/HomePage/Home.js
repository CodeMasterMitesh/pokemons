import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { BsArrowUp } from "react-icons/bs";
import { BsPersonCircle, BsBellFill, BsFilePersonFill, BsGearFill, BsXLg } from "react-icons/bs";
import { useAuth } from '../../contexts/AuthContext';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';
import Header from '../../Header';
import { getProfile } from '../../store/auth';
import { useDispatch,useSelector } from 'react-redux';

const Home = () => {
    const [show, setShow] = useState(false);
    const { logout } = useAuth();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate()
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const userData = useSelector(state=>state.auth.user_data);
        
    const handleScroll = () => {
        if (window.scrollY > 500) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const handleLogout = () => {
        logout();
        localStorage.clear();
        navigate('/login')
    }
    const getProfileData = async () => {
        try {
            await dispatch(getProfile()).unwrap();
            
        } catch (error) {
            console.log(error);
            

        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        getProfileData()
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div dir='rtl'>
            <div className="main-wrapper">
                <Offcanvas show={show} onHide={handleClose} placement="end" className="bg-dark text-white custom-offcanvas-dark">
                    <Offcanvas.Header closeButton closeVariant="white">
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="side-menu">
                            <ul className='p-0'>
                                <li ><a className='d-flex justify-content-start align-items-center w-100 p-2 text-decoration-none' href="#"> <BsPersonCircle />{t('User')}</a></li>
                                <li ><a className='d-flex justify-content-start align-items-center w-100 p-2 text-decoration-none' href="#"> <BsFilePersonFill />{t('My Character')}</a></li>
                                <li ><a className='d-flex justify-content-start align-items-center w-100 p-2 text-decoration-none' href="#"> <BsBellFill />{t('Notification')} (0)</a></li>
                                <li ><a className='d-flex justify-content-start align-items-center w-100 p-2 text-decoration-none' href="#"><BsGearFill />   {t('Settings')}</a></li>
                                <li ><a className='d-flex justify-content-start align-items-center w-100 p-2 text-decoration-none' href="#" onClick={handleLogout}><BsXLg />{t('Logout')} </a></li>
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
                                        <li><img src="images/mock-03.png" alt="" /><span>{userData?.silver}</span><img src="images/mock-05.png" alt="" /></li>
                                        <li><img src="images/mock-03.png" alt="" /><span>{userData?.gold}</span><img src="images/mock-04.png" alt="" /></li>
                                    </ul>
                                </div>
                                <div className="character-item-inner2">
                                    <ul>
                                        <li data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" onClick={handleShow}>
                                            <img src="images/character-01.png" alt="" />
                                        </li>
                                        <li><img src="images/character-02.png" alt="" /><span>{t('Champion Title')}</span></li>
                                        <li><img src="images/character-03.png" alt="" /><span>{t('Match Wins')}</span></li>
                                        <li><img src="images/character-04.png" alt="" /><span>{t('VIP')}</span></li>
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
                                                <h3>{t('Kanto')} <img src="images/character-07.png" alt="" /></h3>
                                            </div>
                                            <div>
                                                <p><span>(Vip)</span>unii</p>
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
                                    <div className="character-item-inner11 cursor-pointer" onClick={()=>{navigate('/battle')}}>
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
                <section className="mock-area pt-0">
                    <div className="container">
                        <div className="mock-item3">
                            <div className="mock-item3-inner">

                                <div className="mock-item3-inner2">
                                    <ul>
                                        <li>{t('friends')} <span>1</span><strong>/2</strong></li>
                                        <li>{t('online')} <span>9892</span></li>
                                    </ul>
                                </div>
                                <div className="mock-item3-inner3">
                                    <ul>
                                        <li><a href="#">{t('friendList')}</a></li>
                                        <li><a href="#">{t('all')}</a></li>
                                    </ul>
                                </div>
                                <div className="mock-item3-inner4">
                                    {[...Array(46)].map((_, i) => (
                                        <div key={i} className={`mock-item3-inner5 ${i % 2 === 1 ? 'mock-item3-inner8' : ''}`}>
                                            <div className="mock-item3-inner6">
                                                <p><img src={i % 2 === 0 ? "images/mock-14.png" : "images/mock-15.png"} alt="" /> {i % 2 === 0 ? t('user1') : t('user2')}</p>
                                            </div>
                                            <div className="mock-item3-inner7">
                                                <h2>{i % 2 === 0 ? <strong>{t('hebrewText')}</strong> : t('timeAgo')}</h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mock-item3-inner9">
                                <div className="mock-item3-inner10">
                                    <div className="mock-item3-inner4">
                                        {/* Repeating Sections */}
                                        {[...Array(25)].map((_, index) => (
                                            <div key={index} className="mock-item3-inner11">
                                                <h2>{t('user1')}</h2>
                                                <p>{t('afkText')}</p>
                                                <img src="images/mock-19.png" alt="" />
                                            </div>
                                        ))}

                                        {/* Challenge Section */}
                                        <div className="mock-item3-inner12">
                                            <div>
                                                <h2>
                                                    <strong>{t('challengeText', { user: t('user2') })}</strong>
                                                </h2>
                                            </div>
                                            <div>
                                                <p>{t('ignore')}<span>{t('accept')}</span></p>
                                            </div>
                                        </div>

                                        {/* Go Back Section */}
                                        <div className="mock-item3-inner13">
                                            <div>
                                                <p>{t('goBack')}</p>
                                            </div>
                                            <div>
                                                <img src="images/mock-18.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section><footer className="footer-area">
                    <div className="container">
                        <div className="footer-item">
                            <div className="footer-item-inner">
                                <h2>{t('disclaimer')}</h2>
                                <p>{t('disclaimerText')}</p>
                            </div>
                            <div className="footer-item-inner2">
                                <h2>{t('stayConnected')}</h2>
                                <ul>
                                    <li><a href="#"><img src="images/footer-02.png" alt="" /></a></li>
                                    <li><a href="#"><img src="images/footer-03.png" alt="" /></a></li>
                                    <li><a href="#"><img src="images/footer-04.png" alt="" /></a></li>
                                </ul>
                            </div>
                            <div className="footer-item-inner3">
                                <img src="images/footer-01.png" alt="" />
                            </div>
                        </div>
                    </div>
                </footer>
                {visible && <button className="scrolltotop" onClick={scrollToTop}>
                    <BsArrowUp />
                </button>}
            </div>
        </div >
    );
};

export default Home
