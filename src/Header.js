// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="./">
                <div id="logo_login" className="logo_5"></div>
            </Link>
            <div id="container_menu">
                <ul>
                    <li><Link to="./"><img src="public/images/layout/menu/inicio.png" alt="Início"/> Início</Link></li>
                    <li><Link to="./register"><img src="public/images/layout/menu/registro.png" alt="Registro"/> Registro</Link></li>
                    <li><Link to="./forgot"><img src="public/images/layout/menu/faq.png" alt="Recuperar"/> Recuperar</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;