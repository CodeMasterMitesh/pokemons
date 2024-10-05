// src/Footer.js
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsArrowUp } from "react-icons/bs";

const Footer = () => {
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation();

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
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <footer className="footer-area">
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
            {visible && <button className="scrolltotop" onClick={scrollToTop}>
                <BsArrowUp />
            </button>}
        </footer>
    );
};

export default Footer;