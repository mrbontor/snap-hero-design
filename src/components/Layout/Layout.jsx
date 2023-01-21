import React from 'react';
import Header from './Header/Header';
import './Layout.css';

const Layout = ({ children }) => {

    return (
        <>
            <Header />
            <div className='snap__heigh-header'/>
            <div className="snap__main">{children}</div>
        </>
    );
};

export default Layout;
