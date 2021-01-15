import React from 'react'
import Navbar from './navbar';

const Header: Function = () : JSX.Element => {
    return <header>
        <Navbar useTransparent={true} />
    </header>
};

export default Header;