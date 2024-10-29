import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Main() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const ref = useRef();

    const goToLogin = () => {
        navigate('/login');
    };

    const goToRegister = () => {
        navigate('/register');
    };

    const handleScroll = () => {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <main className="main-wrapper main-wrapper2">
            {/* Fixed social media icons */}
            <div className="fixed-icon">
                <ul>
                    <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer"><img src="/images/discard.png" alt="Discord" /></a></li>
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="/images/facebook.png" alt="Facebook" /></a></li>
                </ul>
            </div>

            {/* Banner Area */}
            <section className="banner-area">
                <div className="container">
                    <div className="banner-item">
                        <div className="banner-item-inner">
                            <a href="#"><img src="/images/logo.png" alt="Logo" /></a>
                        </div>
                        <div className="banner-item-inner2">
                            <ul>
                                <li className='text-white'><a onClick={goToLogin}>{t('Login')}</a></li>
                                <li className='text-white'><a onClick={goToRegister}><span>{t('Open an account')}</span><img src="/images/banner-03.png" alt="" /></a></li>
                            </ul>
                        </div>
                        <div className="banner-item-inner3">
                            <div className="banner-item-inner4" onClick={handleScroll}>
                                <img src="/images/banner-04.png" alt="Scroll Down" />
                                <span>{t('Scroll Down')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className="quick-area" ref={ref}>
                <div className="container">
                    <div className="quick-item">
                        <div className="quick-item-inner">
                            <h2><img src="/images/quick-01.png" alt="" />{t('Quick Links')}</h2>
                            <ul>
                                <li><a href="#">{t('Community')}<img src="/images/quick-05.png" alt="" /></a></li>
                                <li><a href="#">{t('Support')}<img src="/images/quick-06.png" alt="" /></a></li>
                                <li><a href="#">{t('Help')} <img src="/images/quick-07.png" alt="" /></a></li>

                            </ul>
                        </div>
                        <div className="quick-item-inner2">
                            <h2><img src="/images/quick-08.png" alt="" />{t('Update')}</h2>
                            <div className="quick-item-inner3">
                                <div className="quick-item-inner4">
                                    <div className="quick-item-inner5">
                                        <img src="/images/quick-09.png" alt="" />
                                        <span>{t('Update')}</span>
                                        <h3>{t('Patch Notes')} <small>- 09/22</small></h3>
                                    </div>
                                </div>
                                <div className="quick-item-inner4">
                                    <div className="quick-item-inner5">
                                        <img src="/images/quick-10.png" alt="" />
                                        <span>{t('Event')}</span>
                                        <h3>{t('Event Summary')} <small>- 09/22</small></h3>
                                    </div>
                                </div>
                                <div className="quick-item-inner6">
                                    <img src="/images/quick-11.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notice Area */}
            <section className="notice-area">
                <div className="container">
                    <div className="notice-item">
                        <div className="notice-item-inner">
                            <h2><img src="/images/notice-04.png" alt="" />{t('Feature1')}</h2>
                            <p>{t('Feature1 Description')}</p>
                            <div className="notice-item-inner4">
                                <h3>{t('Attribute')}</h3>
                            </div>
                        </div>
                        <div className="notice-item-inner2">
                            <img src="/images/notice-02.png" alt="" />
                        </div>

                        <div className='d-flex flex-wrap mt-5'>
                            <div className="notice-item-inner2 order-2 order-md-1">
                                <img src="/images/feature-image-2.png" alt="" />
                            </div>
                            <div className="notice-item-inner  order-1  order-md-2 p-5 pt-0">
                                <h2><img src="/images/notice-04.png" alt="" />{t('Catch them all')}</h2>
                                <p>{t('Catch them all Description')}</p>
                                <div className="notice-item-inner4 second-h3">
                                    <h3>{t('Attribute')}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer-area footer-area2">
                <div className="container">
                    <div className="footer-item2">
                        <div className="footer-item2-inner">
                            <div>
                                <h2>{t('Stay Connected')}</h2>
                            </div>
                            <div>
                                <ul className='p-0'>
                                    <li><a href="#"><img src="/images/footer-02.png" alt="" /></a></li>
                                    <li><a href="#"><img src="/images/footer-03.png" alt="" /></a></li>
                                    <li><a href="#"><img src="/images/footer-04.png" alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-item2-inner2">
                            <p>{t('Footer Note')}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default Main;
