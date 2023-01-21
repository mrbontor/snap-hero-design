import React  from 'react';
import './Dropdown.css';

const Dropdown = ({ submenu}) => {
    return (
        <div className="snap__dropdown">
            {submenu.map((menuChild, index) => (
                <div className="snap__dropdown-item" key={index}>
                    {menuChild.icon ?  <span><img src={menuChild.icon} alt={menuChild.name} /></span>: ''}
                    <a href={menuChild.link}>
                        {menuChild.name}
                    </a>

                </div>
            ))}
        </div>
    );
};

export default Dropdown;
