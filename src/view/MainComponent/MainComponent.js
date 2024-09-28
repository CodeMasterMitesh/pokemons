import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();
    const ref = useRef()
    const goToLogin = () => {
        navigate('/login');
    };

    const goToRegister = () => {
        navigate('/register');
    };
    const handelScroll=()=>{
        ref.current.scrollIntoView({
            behavior: 'smooth', // Enables smooth scrolling
                block: 'start'
        })
    }

    return (
        <main className="main-wrapper main-wrapper2">
            {/* <!-- fixed-icon start --> */}
            <div className="fixed-icon">
                <ul>
                    <li><a href="#"><img src="images/discard.png" alt=""/></a></li>
                    <li><a href="#"><img src="images/facebook.png" alt=""/></a></li>
                </ul>
            </div>
            {/* <!-- fixed-icon end --> */}

            {/* <!-- banner-area start --> */}
            <section className="banner-area">
                <div className="container">
                    <div className="banner-item">
                        <div className="banner-item-inner">
                            <a href="#"><img src="images/logo.png" alt=""/></a>
                        </div>
                        <div className="banner-item-inner2">
                            <ul>
                                <li><a href="#" onClick={goToLogin}>הקש כדי לשחק</a></li>
                                <li><a href="#" onClick={goToRegister} >פתח חשבון     <img src="images/banner-03.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div className="banner-item-inner3">
                            <div className="banner-item-inner4" onClick={handelScroll}>
                                <img src="images/banner-04.png" alt=""/>
                                <span>Scroll Down</span>
                            </div>
                        </div> 
                    </div> 
                </div>
            </section>
            {/* <!-- banner-area end --> */}

            {/* <!-- quick-area start --> */}
            <section className="quick-area"  ref={ref}>
                <div className="container">
                    <div className="quick-item">
                        <div className="quick-item-inner">
                            <h2><img src="images/quick-01.png" alt=""/>קישורים מהירים </h2>
                            <ul>
                                <li><a href="#">קהילה<img src="images/quick-05.png" alt=""/></a></li>
                                <li><a href="#">גויאס<img src="images/quick-06.png" alt=""/></a></li>
                                <li><a href="#">תמיכה <img src="images/quick-07.png" alt=""/></a></li>
                            </ul>
                        </div>
                        <div className="quick-item-inner2">
                            <h2><img src="images/quick-08.png" alt=""/>שם לב </h2>
                            <div className="quick-item-inner3">
                                <div className="quick-item-inner4">
                                    <div className="quick-item-inner5">
                                        <img src="images/quick-09.png" alt=""/>
                                        <span>עדכון</span>
                                        <h3>הערות תיקון <small>- 09/22</small></h3>
                                    </div>
                                </div>
                                <div className="quick-item-inner4">
                                    <div className="quick-item-inner5">
                                        <img src="images/quick-10.png" alt=""/>
                                        <span>מִקרֶה </span>
                                        <h3>סיכום אירוע<small>- 09/22</small></h3>
                                    </div>
                                </div>
                                <div className="quick-item-inner6">
                                    <img src="images/quick-11.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- quick-area end --> */}

            {/* <!-- notice-area start --> */}
            <section className="notice-area">
                <div className="container">
                    <div className="notice-item">
                        <div className="notice-item-inner">
                            <h2><img src="images/notice-01.png" alt=""/>מחשב או נייד</h2>
                            <p>עכשיו אתה יכול את המשחק הפוקימוני  <br/>נוסטלגי במחשב האישי או הנייד </p>
                            <div className="notice-item-inner4">
                                <h3>תכונה </h3>
                            </div>
                        </div>
                        <div className="notice-item-inner2">
                            <img src="images/notice-02.png" alt=""/>
                        </div>
                        <div className="notice-item-inner2 d-none d-md-block">
                            <img src="images/notice-03.png" alt=""/>
                        </div>
                        <div className="notice-item-inner notice-item-inner3">
                            <h2><img src="images/notice-04.png" alt=""/>לתפוס אותם כולם </h2>
                            <p>מ- Pikachu ל- Mewtwo catch'em כולם   <br/>יותר מ -200 פוקימונים לתפוס ולהתפתח,  <br/>התחל את המסע שלך עכשיו</p>
                            <div className="notice-item-inner4">
                                <h3>תכונה </h3>
                            </div>
                        </div>
                        <div className="notice-item-inner2 d-md-none">
                            <img src="images/notice-03.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer-area footer-area2">
                <div className="container">
                    <div className="footer-item2">
                        <div className="footer-item2-inner">
                            <div>
                                <h2>תשאר מחובר</h2>
                            </div>
                            <div>
                                <ul>
                                    <li><a href="#"><img src="images/footer-02.png" alt=""/></a></li>
                                    <li><a href="#"><img src="images/footer-03.png" alt=""/></a></li>
                                    <li><a href="#"><img src="images/footer-04.png" alt=""/></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-item2-inner2">
                            <p>Pokémon And All Respective Names are Trademark & © of Nintendo 1996-2021|| <br/>Pokémon World is not affiliated with Nintendo, Creatures Inc. and GAME FREAK Inc</p>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}

const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '18px',
    cursor: 'pointer'
};

export default Main;
