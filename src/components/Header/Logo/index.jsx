import React from 'react';
import Link from "react-router-dom/modules/Link";
import logo from 'src/assets/img/logo.png';

const Logo = () => {
    return (
        <Link>
            <img src={logo} alt=""/>
        </Link>
    );
}

export default Logo;
