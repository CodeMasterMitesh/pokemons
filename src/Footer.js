// src/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <div id="footer">
            <div id="footer-container">
                <center>
                    <table>
                        <tr>
                            <td id="footer-left">
                                <a href="./"><img src="public/images/layout/logo_footer.png" alt="Logo Pokémon World Legends" /></a>
                            </td>
                            <td id="footer-right">
                                <b>Pokémon</b> é uma marca registrada da <b>Nintendo</b>. Sua utilização é de caráter exclusivo ao <b>fã game</b>.
                                <p style={{ fontSize: '13px' }}>Não há intenção de violação de direitos autorais ou marcas registradas.</p>
                            </td>
                        </tr>
                    </table>
                </center>
            </div>
        </div>
    );
};

export default Footer;