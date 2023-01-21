import React from 'react';
// import { Navbar } from '../../components';
import imgDesktop from '../../assets/image-hero-desktop.png';
import imgMobile from '../../assets/image-hero-mobile.png';
import imgClinetDatabiz from '../../assets/client-databiz.svg';
import imgClinetAudioPhile from '../../assets/client-audiophile.svg';
import imgClinetMeet from '../../assets/client-meet.svg';
import imgClinetMaker from '../../assets/client-maker.svg';

import './HomePage.css';

const HomePage = ({ isMobile }) => {
    return (
        <div className="snap__home" id="home">
            
            <div className="snap__home-content">
                <h1>Make remote work</h1>
                <p>
                    Get your team in sync, no matter your location. StreamLine processes, create team rituals, and watch
                    productivity soar.
                </p>

                <div className="snap__home-content__learn">
                    <button type='button'>
                        <span>Learn More</span>
                    </button>
                </div>

                <div className="snap__home-content__brand">
                    <ul>
                        <li>
                            <img src={imgClinetDatabiz} alt="else" />
                        </li>
                        <li>
                            <img src={imgClinetAudioPhile} alt="else" />
                        </li>
                        <li>
                            <img src={imgClinetMeet} alt="else" />
                        </li>
                        <li>
                            <img src={imgClinetMaker} alt="else" />
                        </li>
                    </ul>
                </div>
            </div>       

            <div className="snap__home-image">
                {isMobile ? <img src={imgMobile} alt="mobile" /> : <img src={imgDesktop} alt="desktop" />}
            </div>    
        </div>
    );
};

export default HomePage;
