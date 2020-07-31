import React from 'react';
import {createUseStyles} from 'react-jss';
import Logo from './Logo';
import Nav from './Nav';
import Login from './Login';
import styles from './styles'

//TODO @Vlad add i18n
const useStyles = createUseStyles(styles);
const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <Logo />
            <div className={classes.rightPart}>
                <Nav />
                <Login />
            </div>

        </div>
    );
}

export default Header;
