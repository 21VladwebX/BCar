import React from 'react';
import Logo from './Logo';
import Nav from "./Nav";

const Header = () => {
    return (
        <div>
            <Logo />
            <Nav />
            {/*login ref*/}
        </div>
    );
}

export default Header;
