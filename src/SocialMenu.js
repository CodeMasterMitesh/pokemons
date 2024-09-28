// src/SocialMenu.js
import React from 'react';

const SocialMenu = () => {
    return (
        <div id="social_menu">
            <ul>
                <li><a href="https://www.facebook.com/pkworldlegends/" target="_blank" rel="noopener noreferrer"><img src="public/images/layout/menu/social/facebook.png" alt="Facebook" /></a></li>
                <li><a href="https://twitter.com/pkworldlegends/" target="_blank" rel="noopener noreferrer"><img src="public/images/layout/menu/social/twitter.png" alt="Twitter" /></a></li>
                <li><a href="https://www.instagram.com/pkworldlegends/" target="_blank" rel="noopener noreferrer"><img src="public/images/layout/menu/social/instagram.png" alt="Instagram" /></a></li>
                <li><a href="#"><img src="public/images/layout/menu/social/youtube.png" alt="YouTube" /></a></li>
            </ul>
        </div>
    );
};

export default SocialMenu;