import React, { useState } from 'react';
import { MenuModel } from '../../../../models';

import IconArrowDown from '../../../../assets/icon-arrow-down.svg';
import IconArrowUp from '../../../../assets/icon-arrow-up.svg';
import IconCloseMenu from '../../../../assets/icon-close-menu.svg';
import Dropdown from './Dropdown/Dropdown';
import { UseOuterClick } from '../../../../utils';

import './Navbar.css';

const Navbar = ({ menuToggleHandler, closeMenuHandler }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const openDropdownHandler = (name) => {
        if (name === openDropdown) return setOpenDropdown(null);
        setOpenDropdown(name);
    };

    const onSelectCallback = () => {
        if (menuToggleHandler) menuToggleHandler();
        setOpenDropdown(null);
    };

    const onCloseMenu = () => {
        if (closeMenuHandler) closeMenuHandler();
        setOpenDropdown(null);
    };

    const { innerBorderRef } = UseOuterClick(() => {
        setOpenDropdown(null);
    });
    return (
        <nav className="snap__navbar" ref={innerBorderRef}>
            <div className="snap__navbar-icon">
                <img src={IconCloseMenu} alt="close menu" onClick={() => onCloseMenu()} />
            </div>
            {MenuModel.map(({ name, link, subMenu }, index) => {
                const isOpen = openDropdown === name;

                return (
                    <div className="snap__navbar-item" key={index}>
                        {!subMenu && <a href={link}>{name}</a>}

                        {subMenu && (
                            <div className="snap__navbar-item_container" onClick={() => openDropdownHandler(name)}>
                                <a href="/#" isopen={isOpen.toString()}>
                                    {name}
                                </a>
                                <img src={isOpen ? IconArrowUp : IconArrowDown} alt="" />
                            </div>
                        )}

                        {isOpen && <Dropdown submenu={subMenu} onSelectCallback={onSelectCallback} />}
                    </div>
                );
            })}
        </nav>
    );
};

export default Navbar;
