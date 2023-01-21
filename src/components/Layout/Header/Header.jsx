import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import logo from '../../../assets/logo.svg';
import IconOpenMenu from '../../../assets/icon-menu.svg';
import './Header.css';
import { UseOuterClick } from '../../../utils';

const transparantColor = 'rgba(0,0,0,.5)';
const defaultColor = '#FAFAFA';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [listMenu, setListMenu] = useState(false);

    const menuToggleHandler = () => {
        setListMenu((listMenu) => !listMenu);
    };

    const openMenuHandler = () => {
        setOpenMenu(true);
        backgroundColorHander();
    };

    const closeMenuHandler = () => {
        setOpenMenu((openMenu) => !openMenu);
        backgroundColorHander();
    };

    const backgroundColorHander = () => {
        let name = document.getElementById('App');
        
        name.style.backgroundColor = !!openMenu ? defaultColor : transparantColor;
        name.style.transition = 'background-color 0.5s';
    };

    const { innerBorderRef } = UseOuterClick(() => {
        setOpenMenu(false);
    });

    return (
        <>
            <div className="snap__header">
                <header className="snap__header-main">
                    <div className="snap__header-main_logo">
                        <a href="/#">
                            <img src={logo} alt="LOGO" />
                        </a>
                    </div>

                    <div className="snap__header-main_links">
                        <Navbar />
                    </div>

                    <div className="snap__header-main_auth">
                        <div className="snap__header-main_auth-links">
                            <a href="/#login">Login</a>
                            <button>Register</button>
                        </div>
                        <div className="snap__header-main_auth-menu">
                            <img src={IconOpenMenu} alt="open menu" onClick={openMenuHandler} />
                        </div>
                    </div>
                </header>
                <div className="snap__header-mobile" style={openMenu ? { left: '40%' } : {}} ref={innerBorderRef}>
                    <Navbar menuToggleHandler={menuToggleHandler} closeMenuHandler={closeMenuHandler} />

                    <div className="snap__header-mobile-auth">
                        <a href="/#login">Login</a>
                        <button type="button">Register</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
