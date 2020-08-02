import React from 'react';
import {Link} from "react-router-dom";
import {createUseStyles} from 'react-jss'

import logo from 'assets/img/logo.svg';
import styles from './styles'

const useStyles = createUseStyles(styles);
const Logo = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Link to='/' className={classes.imgWrapper} >
                <img src={logo} alt=""/>
            </Link>
        </div>
    );
}

export default Logo;
