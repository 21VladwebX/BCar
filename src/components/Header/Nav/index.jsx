import React from 'react';
import {Link} from "react-router-dom";

//TODO @Vlad add i18n
const Nav = () => (
        <div>
            <ul>
                <li>
                    <Link to='/autos'>
                        <span>Autos</span>
                    </Link>
                </li>
                <li>
                    <Link to='/employees'>
                        <span>Employees</span>
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        <span>About</span>
                    </Link>
                </li>
            </ul>
        </div>
);

export default Nav;
