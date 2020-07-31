import React from 'react';
import {Link} from "react-router-dom";
import {createUseStyles} from 'react-jss'
import styles from './styles'

//TODO @Vlad add i18n
const useStyles = createUseStyles(styles);
const Nav = () => {

    const classes = useStyles();
    return (

        <div>
            <ul className={classes.list}>
                <li className={classes.listItem}>
                    <Link to='/autos'>
                        <span>Autos</span>
                    </Link>
                </li>
                <li className={classes.listItem}>
                    <Link to='/employees'>
                        <span>Employees</span>
                    </Link>
                </li>
                <li className={classes.listItem}>
                    <Link to='/about'>
                        <span>About</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
